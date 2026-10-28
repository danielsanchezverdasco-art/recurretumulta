# Envoltorio de publicar.py para Windows (PowerShell). Por defecto DRY-RUN. Ver GUIA.md.
#   .\tools\publicar\publicar.ps1
#   .\tools\publicar\publicar.ps1 --publicar --si-daniel "28/10 11:02 sí, publica"
$ErrorActionPreference = "Stop"
$aqui = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location (Join-Path $aqui "..\..")
$py = $null
foreach ($c in @("python", "python3", "py")) {
  if (Get-Command $c -ErrorAction SilentlyContinue) {
    & $c -c "import sys; sys.exit(0 if sys.version_info>=(3,10) else 1)" 2>$null
    if ($LASTEXITCODE -eq 0) { $py = $c; break }
  }
}
if (-not $py) { Write-Error "Hace falta Python >= 3.10"; exit 1 }
$env:PYTHONIOENCODING = "utf-8"
& $py (Join-Path $aqui "publicar.py") @args
exit $LASTEXITCODE
