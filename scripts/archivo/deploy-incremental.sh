#!/bin/bash
# Deploy INCREMENTAL a Netlify - Solo sube archivos nuevos/cambiados
# NUNCA hace npm run build completo (eso regenera todos los hashes)
#
# Uso: ./scripts/deploy-incremental.sh <lista-de-rutas>
# Ejemplo: ./scripts/deploy-incremental.sh /tmp/nuevas-rutas.txt
#
# El fichero debe contener una ruta por línea: /coches/slug, /blog/slug, etc.

set -e

if [ $# -eq 0 ]; then
    echo "Uso: $0 <fichero-con-rutas>"
    exit 1
fi

RUTAS_FILE="$1"
DIST="$HOME/workspace/recurretumulta-v2/dist"

echo "=== Deploy incremental ==="
echo "Rutas: $(wc -l < "$RUTAS_FILE")"

# 1. Verificar que dist/ existe y tiene contenido
HTML_COUNT=$(find "$DIST" -name "index.html" | wc -l)
if [ "$HTML_COUNT" -lt 5000 ]; then
    echo "ERROR: dist/ parece incompleto ($HTML_COUNT HTML). Abortando."
    exit 1
fi
echo "dist/ OK: $HTML_COUNT páginas"

# 2. Prerender SOLO las rutas nuevas (sin rebuild)
echo "Prerenderizando rutas nuevas..."
cd "$HOME/workspace/recurretumulta-v2"
PRERENDER_ONLY=$(paste -sd, "$RUTAS_FILE") \
PRERENDER_PORT=4324 \
timeout 600 node scripts/prerender.mjs 2>&1 | grep -E "Hecho|Error"

# 3. Verificar
echo "Verificando..."
python3 scripts/verify-dist.py --strict
if [ $? -ne 0 ]; then
    echo "ERROR: verificación fallida. Abortando."
    exit 1
fi

# 4. Deploy (el script Python solo sube hashes nuevos)
echo "Desplegando..."
python3 scripts/netlify-deploy.py

echo "=== Deploy incremental completado ==="
