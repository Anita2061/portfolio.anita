$ErrorActionPreference = 'Stop'

$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$distDir = Join-Path $root 'dist'
$publicDir = Join-Path $root 'public'
$zipPath = Join-Path $publicDir 'Anita-Gyawali-Portfolio-Offline.zip'
$stagingDir = Join-Path $root '.offline-package'
$siteDir = Join-Path $stagingDir 'Anita-Gyawali-Portfolio-Offline'
$readmePath = Join-Path $siteDir 'README.txt'

if (-not (Test-Path $distDir)) {
  throw "Build output not found at $distDir. Run 'npm run build' first."
}

if (Test-Path $stagingDir) {
  Remove-Item -LiteralPath $stagingDir -Recurse -Force
}

if (Test-Path $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}

New-Item -ItemType Directory -Path $siteDir -Force | Out-Null
Copy-Item -Path (Join-Path $distDir '*') -Destination $siteDir -Recurse -Force

@"
Offline Portfolio Package
=========================

1. Extract this ZIP file.
2. Open index.html in your browser to view the portfolio offline.
3. Keep the assets folder next to index.html.

If you update the site later, run:
npm run build:offline
"@ | Set-Content -LiteralPath $readmePath

Compress-Archive -Path $siteDir -DestinationPath $zipPath -Force
Remove-Item -LiteralPath $stagingDir -Recurse -Force

Write-Host "Created offline package at $zipPath"
