# Builds dist\Toolbox.jsx from src\, in load order, plus a SHA-256 checksum.
# Usage:  powershell -File build.ps1
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$src  = Join-Path $root 'src'
$dist = Join-Path $root 'dist'
if (-not (Test-Path $dist)) { New-Item -ItemType Directory -Path $dist | Out-Null }

$order = @('spec.js', 'core.js', 'host.js', 'icons.js')
$tools = Get-ChildItem (Join-Path $src 'tools') -Filter '*.js' -ErrorAction SilentlyContinue |
         Sort-Object Name | ForEach-Object { 'tools\' + $_.Name }
$files = $order + $tools + @('panel.js')

$parts = foreach ($f in $files) {
    $p = Join-Path $src $f
    if (-not (Test-Path $p)) { throw "missing source: $f" }
    $text = [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8)
    "/* ==== $f ==== */`n" + $text.TrimEnd() + "`n"
}
$header = "// Toolbox 1.0.0 - EffectCraft ScriptUI panel`n" +
          "// Built by build.ps1 from src\. Edit the sources, not this file.`n"
$body = ($parts -join "`n") -replace "`r`n", "`n"
$out  = $header + $body

$enc = New-Object Text.UTF8Encoding $false
$file = Join-Path $dist 'Toolbox.jsx'
[IO.File]::WriteAllText($file, $out, $enc)

$sha = (Get-FileHash -Algorithm SHA256 -LiteralPath $file).Hash.ToLower()
[IO.File]::WriteAllText("$file.sha256", $sha + "`n", $enc)

$toolCount = (Select-String -LiteralPath $file -Pattern 'TB\.reg\(' -AllMatches |
              ForEach-Object { $_.Matches } | Measure-Object).Count
Write-Host "Built dist\Toolbox.jsx  ($([math]::Round((Get-Item $file).Length/1024,1)) KB, $toolCount registrations, sha256 $sha)"
