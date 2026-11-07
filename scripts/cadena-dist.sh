#!/bin/bash
# Postproceso de dist/ sin deploy. Conserva el noindex solo en
# scripts/noindex-permitidos.txt (politica-noindex.py) y no aplica
# noindex a las URLs de docs/inventario/sitemap-vivo-20261106.txt
# (adsense-dist.py y postfix-vacios.py). No publica.
set -euo pipefail
cd "$(dirname "$0")/.."
python3 scripts/gen-hero-variantes.py dist
python3 scripts/gen-hubs.py dist
python3 scripts/seo-dist.py dist
python3 scripts/gen-marcas.py dist
node scripts/apply-seo.mjs dist
python3 scripts/fix-jsonld-fichas.py dist
python3 scripts/fix-jsonld-global.py dist
python3 scripts/adsense-dist.py dist blog
python3 scripts/adsense-dist.py dist noindex
node scripts/apply-seo.mjs dist
python3 scripts/postfix-dist.py dist
python3 scripts/postfix-vacios.py dist
python3 scripts/fix-redirects.py
( cd dist && python3 ../scripts/fix-chains.py )
python3 scripts/postproceso-seo-20261019.py dist
python3 scripts/postfix-foto-pendiente.py dist
python3 scripts/politica-noindex.py dist
python3 scripts/sitemap-final.py dist
echo CADENA_OK
