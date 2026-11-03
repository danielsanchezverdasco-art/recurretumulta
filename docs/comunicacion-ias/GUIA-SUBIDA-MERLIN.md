# Guía de subida para Merlín (cuando Grok se quede sin créditos)

Orden de Daniel (3/11/2026, 21:31 hora de Madrid): si Grok no tiene créditos, Merlín publica en su lugar siguiendo esta guía al pie de la letra. Si un paso falla, **no se publica**: se avisa en cosa.md y se para.

## 0. Antes de empezar
- Parte siempre de la última versión publicada por Grok (rama `main` en GitHub después de su subida del 3/11). El kit está en `tools/publicar/` (publicar.py, validar-dist-publicable.py, rev3b.py, chequeo_img_dist.py, GUIA.md).
- Variables de entorno necesarias (solo nombres, **nunca** escribas sus valores en chat, docs, commits ni logs): `NETLIFY_AUTH_TOKEN`, `CF_API_TOKEN` (o `CLOUDFLARE_API_TOKEN`), `CF_ZONE_ID`. Van en `.env.production`, que no se sube al repo.
- `export CHROME_PATH=/opt/google/chrome/chrome`
- **No gastar dinero**: nada de subir de plan, comprar créditos ni añadir métodos de pago. Si Netlify da 503 `usage_exceeded`, se para y se avisa.

## 1. Juntar los cambios
1. `git fetch origin` y crea una rama de subida desde `main`.
2. Fusiona solo las ramas que Grok o Daniel hayan aprobado en cosa.md/grok.md. Nada de fusionar páginas, ni 301, ni noindex nuevos.

## 2. Build + cadena post
`npm ci` → `npm run build` → toda la cadena de post-proceso (incluidos fix-img-sin-src y `scripts/fix-fotos-pendientes-dist.py`). O todo de una vez en seco: `python3 tools/publicar/publicar.py` (sin `--publicar` es DRY-RUN).

## 3. Comprobaciones (todas obligatorias)
- `validar-dist-publicable.py` → **0 bloqueantes**.
- `rev3b.py` → **0**.
- `chequeo_img_dist.py dist` → sin «Foto pendiente», sin el logo usado como foto, sin imágenes rotas.
- Sin `noindex` salvo en páginas de servicio.
- Ninguna URL fuera del sitemap respecto a lo que hay en vivo.
- Sin 301 nuevos ni fusiones de páginas indexadas.
- `_redirects` completo (igual o más que `tools/publicar/redirects-vivo.txt`).
- El deploy debe tener **0 eliminaciones** frente al vivo. Si salen archivos que se borrarían, bájalos del vivo antes; nunca `--allow-removals`.

## 4. Publicar (UN solo deploy por tanda)
`python3 tools/publicar/publicar.py --sin-build --publicar --auto-rollback --si-daniel "<fecha y texto del sí de Daniel>"`
- Nunca `--force`, nunca `--allow-removals`, nunca `--permitir-menos-reglas`.
- Un solo deploy. Si falla, no se reintenta a ciegas: se avisa.

## 5. Después
1. Purga de Cloudflare (la hace el kit con `CF_ZONE_ID`; si no, purga total con el token, sin imprimirlo).
2. Comprueba en vivo en **móvil y escritorio**: portada, una ficha, un blog, Novedades Motor y sitemap.xml dan 200 y las fotos son reales.
3. `git push origin <rama>:main` **sin force**.
4. Escribe en cosa.md: hora (Madrid), id del deploy, resultado de cada comprobación.
5. Si algo falla en vivo: **rollback al deploy anterior** (restaurarlo en Netlify) y avisa en cosa.md.

## Prohibido siempre
Imprimir secretos, Google sign-in en el navegador, imágenes de IA de coches, datos inventados, quitar URLs del sitemap, noindex/301/fusiones sobre contenido indexado, force, más de un deploy por tanda, gastar dinero.
