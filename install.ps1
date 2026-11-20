# Installs dist\Toolbox.jsx into EffectCraft's ScriptUI Panels folder,
# archiving any different previous version in .\archive first.
# Usage:  powershell -File install.ps1
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$src  = Join-Path $root 'dist\Toolbox.jsx'
if (-not (Test-Path $src)) { throw 'dist\Toolbox.jsx not found - run build.ps1 first.' }
if (-not $env:APPDATA) { throw 'APPDATA is not set. Install the panel from EffectCraft: File > Scripts > Install ScriptUI Panel...' }

$dir = Join-Path $env:APPDATA 'EffectCraft\Scripts\ScriptUI Panels'
$dst = Join-Path $dir 'Toolbox.jsx'
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

if (Test-Path $dst) {
    $old = [IO.File]::ReadAllBytes($dst)
    $new = [IO.File]::ReadAllBytes($src)
    if (-not [Linq.Enumerable]::SequenceEqual($old, $new)) {
        $arch = Join-Path $root 'archive'
        if (-not (Test-Path $arch)) { New-Item -ItemType Directory -Path $arch | Out-Null }
        $kept = Join-Path $arch ("Toolbox-" + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + ".jsx")
        Copy-Item $dst $kept -Force
        Write-Host "Archived the previous panel to $kept"
    }
}
Copy-Item $src $dst -Force
Write-Host "Installed $dst"
Write-Host 'Open it from Window > Toolbox.jsx (reopen the panel after updating it).'
