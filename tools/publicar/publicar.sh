#!/usr/bin/env bash
# Envoltorio de publicar.py (Linux/Mac/Git-Bash). Por defecto DRY-RUN. Ver GUIA.md.
#   ./tools/publicar/publicar.sh                      -> dry-run completo (construye y comprueba, no publica)
#   ./tools/publicar/publicar.sh --publicar --si-daniel "28/10 11:02 «sí, publica»"
set -euo pipefail
AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$AQUI/../.."
PY=""
for c in python3 python; do
  if command -v "$c" >/dev/null 2>&1 && "$c" -c 'import sys; sys.exit(0 if sys.version_info>=(3,10) else 1)' 2>/dev/null; then PY="$c"; break; fi
done
[ -n "$PY" ] || { echo "ERROR: hace falta Python >= 3.10 (python3 --version)"; exit 1; }
exec "$PY" "$AQUI/publicar.py" "$@"
