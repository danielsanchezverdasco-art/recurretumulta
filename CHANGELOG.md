# CHANGELOG

## 2026-10-12: limpieza fase 1 (sin publicar)
- Repo git creado desde el código v2 del dueño (commit «v2 original»).
- `public/` reconstruido desde producción (deploy 6ac8e7ec del 09/10): `_headers`, `_redirects`, robots, sitemap, llms, ads.txt, favicon y 12.791 archivos de media, más 124 imágenes que usa el código y faltaban en el deploy. `public/media` queda fuera de git.
- Build reproducible:
  - `copy-media` ya no falla si no existe la carpeta de migración.
  - Los tests quedan fuera de `tsc -b`.
  - Se añade la fuente `public/fonts/geist-latin.woff2`, que `index.html` precargaba y no existía.
- Prerender:
  - Chromium configurable (`CHROME_PATH`), sin ruta fija.
  - Modo `PRERENDER_EXTERNAL` contra un servidor estático.
  - Pool de workers en lugar de lotes: un timeout ya no bloquea el lote entero.
- Limpieza:
  - 129 scripts puntuales (envíos de email, lotes de enriquecimiento, deploys manuales y fotos) movidos a `scripts/archivo/`.
  - Fuera 7 dependencias sin uso: @hookform/resolvers, @phosphor-icons/react, date-fns, i18next-browser-languagedetector, oidc-client-ts, react-oidc-context y zod.
- Velocidad, sin cambio visual:
  - Los iframes de YouTube dentro de los posts cargan en diferido (`loading="lazy"`).
  - Google Analytics se carga tras la primera interacción o 6 s después de `load` (antes, al pintar el LCP).
  - Fuera el preconnect a un host de Convex que no se usa.
  - Fuera el CSS sin procesar duplicado (enlace `<noscript>` a `/src/index.css`).
- `netlify.toml`, `.env.example`, README y scripts `build:full`, `serve:dist` y `parity`.
