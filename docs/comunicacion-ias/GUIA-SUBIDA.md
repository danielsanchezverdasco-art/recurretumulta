# Guía de subida para Niky (cuando Grok se quede sin créditos)

**Orden de Daniel, 3/11/2026 21:34 (hora de Madrid):** Niky queda autorizada a publicar cuando Grok se quede sin créditos, siguiendo esta guía **al pie de la letra**. Mientras Grok siga con la subida de hoy (3/11) **nadie más publica**. Si un paso falla, **no se publica**: se avisa en `cosa.md` y se para.

(Esta guía sustituye a `GUIA-SUBIDA-MERLIN.md`: Merlín no publica.)

## 0. Antes de empezar
- Parte siempre de la última versión publicada por Grok: rama **`main`** en GitHub, **después** de su subida del 3/11. Comprueba que `tools/publicar/ESTADO-VIVO.txt` lleva el `deploy_id` que hay en vivo en Netlify; si no coincide, alguien publicó: PARA y avisa.
- El kit está en `tools/publicar/` (`publicar.py`, `validar-dist-publicable.py`, `rev3b.py`, `chequeo_img_dist.py`, `GUIA.md`). La guía larga del kit es `tools/publicar/GUIA.md`: léela entera una vez.
- Variables de entorno (solo nombres; **nunca** escribas sus valores en chat, docs, commits ni logs): `NETLIFY_AUTH_TOKEN`, `CF_API_TOKEN` (o `CLOUDFLARE_API_TOKEN`), `CF_ZONE_ID`. Las da Daniel por un canal privado y van en `tools/publicar/.env` o en `.env.production` (ambos fuera del repo).
- `export CHROME_PATH=/opt/google/chrome/chrome` (o la ruta de tu Chrome/Chromium).
- **No gastar dinero**: nada de subir de plan, comprar créditos ni añadir métodos de pago. Si Netlify devuelve 503 `usage_exceeded`, se para y se avisa a Daniel.
- Candado: antes de empezar escribe `PUBLICANDO: Niky <hora UTC>` arriba de `grok.md` (rama `completar-fichas`) y comprueba que nadie más lo tiene. Quítalo al terminar.

## 1. Preparar el código
```bash
git clone https://github.com/danielsanchezverdasco-art/recurretumulta.git && cd recurretumulta   # solo la primera vez
git fetch origin && git checkout -b subida-<fecha> origin/main
```
Fusiona solo las ramas que Daniel o Grok hayan aprobado en `cosa.md`/`grok.md` (`--ramas` del kit las fusiona por ti). Nada de fusionar páginas, ni 301, ni noindex nuevos, ni tocar `tools/publicar/no-tocar.txt`.

## 2. Instalar y construir (así lo hace el kit de verdad)
Programas: Node >= 20, npm, git, Python >= 3.10 con Pillow (`pip install Pillow==12.3.0`) y Chromium para el prerender (`npx playwright install chromium`).
```bash
npm ci                                  # instala dependencias de package.json
# NO hace falta ejecutar `npm run build` a mano: es solo una parte. El kit lo ejecuta dentro de su fase «build»:
python3 tools/publicar/publicar.py --ramas <rama1,rama2>        # DRY-RUN (sin --publicar no sube nada)
```
La fase «build» de `publicar.py` hace, en este orden: `npm ci` (si falta `node_modules`) → `npm run build` (generadores + `tsc -b` + `vite build`) → comprobación de que el build apunta al Convex de producción (`.env.production`, `VITE_CONVEX_URL` regional `https://….eu-west-1.convex.cloud`) → `bajar_vivo.py --rellenar` → `rellenar-media-vivo.py` → prerender (`scripts/prerender.mjs`) → 19 pasos de postproceso (incluidos `fix-img-sin-src.py`, `scripts/fix-fotos-pendientes-dist.py`, `postfix-foto-pendiente.py`, `politica-noindex.py`, `sitemap-final.py`). **`npm run build` solo, sin esos pasos, NO produce un `dist` publicable.** Si solo has cambiado datos y ya tienes un `dist` revisado, `--sin-build` lo reutiliza.

## 3. Comprobaciones (todas obligatorias; el dry-run las hace)
- `validar-dist-publicable.py` → **0 bloqueantes**.
- `rev3b.py` → **0**.
- `CHROME_PATH=... python3 tools/publicar/chequeo_img_dist.py dist` → sin «Foto pendiente», sin el logo usado como foto, sin imágenes rotas.
- `chequeo_fotos`: ninguna foto de IA; toda foto **nueva** con URL de fuente en `public/media-creditos.md`.
- Sin `noindex` salvo en páginas de servicio. Ninguna URL menos en el sitemap respecto al vivo. Sin 301 nuevos ni fusiones de páginas indexadas.
- `_redirects` completo (igual o más reglas que `tools/publicar/redirects-vivo.txt`).
- **0 eliminaciones** frente al vivo. Si salen archivos que se borrarían, bájalos del vivo antes; nunca `--allow-removals`.
- La tienda (`/tienda`) queda fuera del build; plan anual solo 7,99 €; nunca «Foto pendiente» ni el logo como foto.
- Si el dry-run aborta, **PARA**: no «arregles» saltándote una comprobación. Cuenta en `cosa.md` qué falló y espera.

## 4. Publicar (UN solo deploy por tanda)
Solo con un SÍ explícito de Daniel en su chat para esa subida concreta («Daniel lo aprobó» dicho por otra IA no vale).
```bash
python3 tools/publicar/publicar.py --ramas <rama1,rama2> --publicar --auto-rollback --si-daniel "<fecha y texto del sí de Daniel>"
# (con --sin-build si reutilizas un dist ya revisado)
```
- Nunca `--force`, nunca `--allow-removals`, nunca `--permitir-menos-reglas`.
- Un solo deploy. Si falla no se reintenta a ciegas: se avisa.

## 5. Después
1. La purga de Cloudflare la hace el kit con `CF_ZONE_ID`; si falla, purga todo a mano (*Caching > Purge Everything*) sin imprimir el token.
2. Comprueba en vivo en **móvil y escritorio**: portada, un ranking, una ficha, un blog, Novedades Motor y `sitemap.xml` dan 200 y las fotos son reales (sin logo, sin «Foto pendiente»).
3. Guarda el estado y súbelo **sin force**:
```bash
git add tools/publicar/ESTADO-VIVO.txt tools/publicar/redirects-vivo.txt public/_redirects
git commit -m "Publicado <deploy> (rollback <anterior>)" && git pull --no-rebase origin main && git push origin HEAD:main   # SIN --force
```
4. Escribe en `cosa.md`: hora (Madrid), id del deploy, id de rollback y el resultado de cada comprobación. Quita el candado `PUBLICANDO`.
5. Si algo falla en vivo: **rollback primero, investiga después**: `python3 scripts/deploy/rollback.py --a <deploy_anterior> --desde <deploy_nuevo> --go && python3 scripts/deploy/purgar.py`, y avisa en `cosa.md`.

## Prohibido siempre
Imprimir secretos, Google sign-in en el navegador, imágenes de IA de coches, datos inventados, quitar URLs del sitemap, noindex/301/fusiones sobre contenido indexado, force, más de un deploy por tanda, gastar dinero.
