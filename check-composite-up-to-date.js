#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');
const exec = require('@actions/exec');

const TAG_FILE = process.env.TAGS_FILE || 'tags.txt';

async function run(cmd, args, opts = {}) {
  const res = await exec.getExecOutput(cmd, args, {
    ignoreReturnCode: opts.ignoreReturnCode || false,
    silent: true,
  });
  return res;
}

function parseNameAndTag(ref) {
  const lastSlash = ref.lastIndexOf('/');
  const tagSep = ref.indexOf(':', lastSlash + 1);
  if (tagSep === -1) return { name: ref, tag: '' };
  return { name: ref.slice(0, tagSep), tag: ref.slice(tagSep + 1) };
}

function deriveBaseRef(archRef) {
  const { name, tag } = parseNameAndTag(archRef);
  if (!tag) return null;
  if (tag.endsWith('-amd64')) return `${name}:${tag.slice(0, -'-amd64'.length)}`;
  if (tag.endsWith('-arm64')) return `${name}:${tag.slice(0, -'-arm64'.length)}`;
  return null;
}

function archFromTag(tag) {
  if (tag.endsWith('-amd64')) return 'amd64';
  if (tag.endsWith('-arm64')) return 'arm64';
  return null;
}

async function getSourceDigest(ref) {
  const res = await run('docker', ['buildx', 'imagetools', 'inspect', ref, '--format', '{{ printf "%s" .Manifest.Digest }}'], { ignoreReturnCode: true });
  if (res.exitCode !== 0) throw new Error(`Failed to inspect source image: ${ref}`);
  const out = res.stdout.trim();
  if (!out.startsWith('sha256:')) throw new Error(`Unexpected digest for ${ref}: ${out}`);
  return out;
}

async function getCompositeManifest(baseRef) {
  const res = await run('docker', ['buildx', 'imagetools', 'inspect', baseRef, '--format', '{{json .Manifest}}'], { ignoreReturnCode: true });
  if (res.exitCode !== 0) return null;
  try {
    return JSON.parse(res.stdout.trim());
  } catch {
    return null;
  }
}

function compositeDigestMap(manifestObj) {
  if (!manifestObj?.manifests) return null;
  const map = {};
  for (const m of manifestObj.manifests) {
    const arch = m?.platform?.architecture;
    const digest = m?.digest;
    if (arch && digest) map[arch] = digest;
  }
  return map;
}

async function recreateComposite(baseRef, sources) {
  const args = ['buildx', 'imagetools', 'create', '-t', baseRef, ...sources];
  const res = await run('docker', args, { ignoreReturnCode: true });
  if (res.exitCode !== 0) throw new Error(`Failed to create composite for ${baseRef}`);
}

async function processGroup(baseRef, archRefs) {
  console.log(`\n==> Processing ${baseRef}`);

  const sources = [];
  const sourceDigests = {};
  for (const arch of ['amd64', 'arm64']) {
    const ref = archRefs[arch];
    if (ref) {
      const digest = await getSourceDigest(ref);
      sourceDigests[arch] = digest;
      sources.push(ref);
      console.log(`   Source ${arch} digest: ${digest}`);
    } else {
        try {
            const digest = await getSourceDigest(baseRef + "-" + arch);
            sourceDigests[arch] = digest;
            sources.push(ref);
            console.log(`   Implicit Source ${arch} digest: ${digest}`);
        } catch {
            console.log(`Missing Source ${arch} digest`)
        }
    }
  }

  if (sources.length === 0) {
    console.warn(`   Skipping: no valid arch variants for ${baseRef}`);
    return { baseRef, status: 'skipped' };
  }

  const manifestObj = await getCompositeManifest(baseRef);
  let needsCreate = false;
  let reason = `   Up to date: ${baseRef}`;

  if (!manifestObj) {
    needsCreate = true;
    reason = 'not found';
  } else {
    const map = compositeDigestMap(manifestObj);
    if (!map) {
      needsCreate = true;
      reason = 'not a manifest list';
    } else if(Object.keys(map).every(k => Object.keys(sourceDigests).includes(k))) {
      for (const arch of Object.keys(sourceDigests)) {
        if (map[arch] !== sourceDigests[arch]) {
          needsCreate = true;
          reason = 'outdated digests';
          break;
        }
      }
    } else {
        reason = `Missing archs in update ${Object.keys(map).filter(k => !Object.keys(sourceDigests).includes(k)).join(", ")}`
    }
  }

  if (needsCreate) {
    console.log(`   Creating manifest list (${reason}) -> ${baseRef}`);
    await recreateComposite(baseRef, sources);
    return { baseRef, status: 'updated', reason };
  } else {
    console.log(reason);
    return { baseRef, status: 'ok' };
  }
}

async function main() {
  const filePath = path.resolve(process.cwd(), TAG_FILE);
  const content = await fs.readFile(filePath, 'utf8');
  const lines = content.split(/\r?\n/).map(s => s.trim()).filter(Boolean);

  const groups = new Map();
  for (const line of lines) {
    const { tag } = parseNameAndTag(line);
    const arch = archFromTag(tag);
    const baseRef = deriveBaseRef(line);
    if (!arch || !baseRef) {
      console.warn(`Skipping invalid line: ${line}`);
      continue;
    }
    const g = groups.get(baseRef) || {};
    g[arch] = line;
    groups.set(baseRef, g);
  }

  if (groups.size === 0) {
    console.error('No valid tags found in tags.txt');
    process.exitCode = 2;
    return;
  }

  let updated = 0;
  let skipped = 0;
  for (const [baseRef, archRefs] of groups.entries()) {
    try {
      const res = await processGroup(baseRef, archRefs);
      if (res.status === 'updated') updated++;
      if (res.status === 'skipped') skipped++;
    } catch (e) {
      console.error(`Error processing ${baseRef}: ${e.message}`);
      process.exitCode = 1;
    }
  }

  console.log(`\nSummary: ${groups.size} composites checked, ${updated} updated, ${skipped} skipped.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});