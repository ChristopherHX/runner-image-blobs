# runner-image-blobs

These are snapshots periodically taken from GitHub Actions hosted runners.

## The full docker images of act

| common | arm64 | amd64 |
|--------|--------|--------|
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-large-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-large-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-large-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest-amd64` |

Ubuntu 20 tags have been archived due to reaching end-of-life from GitHub side.

## Usage from actions/runner

Docker images that do not use the root user are not supported by the actions/runner application.

Due to the size of the full image this cannot be used inside GitHub Actions hosted runners, you need a self-hosted runner. Generally it is recommend to install and start the actions/runner inside this docker image to avoid container feature limitations.

```yaml
container:
  image: ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest
  options: |-
    --user 0:0
```

## Ubuntu22 Runner Images

| common | arm64 | amd64 |
|--------|--------|--------|
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-base-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-base-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-base-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-dotnet-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-dotnet-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-dotnet-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-firefox-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-firefox-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-firefox-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-gcc-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-gcc-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-gcc-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-google-cloud-sdk-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-google-cloud-sdk-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-google-cloud-sdk-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-hostedtoolcache-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-hostedtoolcache-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-hostedtoolcache-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-jvm-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-jvm-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-jvm-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-large-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-large-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-large-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-llvm-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-llvm-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-llvm-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-android-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-android-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-android-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-dotnet-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-dotnet-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-dotnet-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-firefox-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-firefox-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-firefox-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-google-cloud-sdk-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-google-cloud-sdk-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-google-cloud-sdk-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-haskell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-haskell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-haskell-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-hostedtoolcache-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-hostedtoolcache-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-hostedtoolcache-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-jvm-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-jvm-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-jvm-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-miniconda-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-miniconda-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-miniconda-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-mono-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-mono-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-mono-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-powershell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-powershell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-powershell-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-rust-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-rust-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-rust-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-swift-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-swift-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-medium-swift-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-miniconda-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-miniconda-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-miniconda-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-mono-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-mono-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-mono-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-opt-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-opt-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-opt-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-python3-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-python3-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-python3-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-rust-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-rust-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-rust-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-snap-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-snap-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-snap-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-swift-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-swift-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-swift-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-android-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-android-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-android-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-haskell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-haskell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-haskell-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-opt-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-opt-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-opt-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-opt-snap-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-opt-snap-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-local-opt-snap-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-powershell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-powershell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu22-runner-usr-powershell-latest-amd64` |

## Ubuntu24 Runner Images

| common | arm64 | amd64 |
|--------|--------|--------|
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-base-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-base-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-base-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-dotnet-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-dotnet-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-dotnet-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-firefox-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-firefox-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-firefox-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-gcc-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-gcc-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-gcc-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-google-cloud-sdk-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-google-cloud-sdk-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-google-cloud-sdk-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-hostedtoolcache-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-hostedtoolcache-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-hostedtoolcache-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-jvm-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-jvm-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-jvm-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-large-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-llvm-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-llvm-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-llvm-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-android-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-android-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-android-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-dotnet-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-dotnet-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-dotnet-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-firefox-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-firefox-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-firefox-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-google-cloud-sdk-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-google-cloud-sdk-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-google-cloud-sdk-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-haskell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-haskell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-haskell-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-hostedtoolcache-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-hostedtoolcache-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-hostedtoolcache-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-jvm-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-jvm-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-jvm-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-miniconda-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-miniconda-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-miniconda-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-mono-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-mono-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-mono-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-powershell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-powershell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-powershell-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-rust-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-rust-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-rust-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-swift-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-swift-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-medium-swift-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-miniconda-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-miniconda-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-miniconda-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-mono-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-mono-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-mono-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-opt-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-opt-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-opt-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-python3-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-python3-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-python3-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-rust-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-rust-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-rust-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-snap-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-snap-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-snap-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-swift-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-swift-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-swift-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-android-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-android-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-android-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-haskell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-haskell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-haskell-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-opt-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-opt-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-opt-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-opt-snap-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-opt-snap-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-local-opt-snap-latest-amd64` |
| `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-powershell-latest` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-powershell-latest-arm64` | `ghcr.io/christopherhx/runner-images:ubuntu24-runner-usr-powershell-latest-amd64` |

