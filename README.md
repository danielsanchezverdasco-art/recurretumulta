# recurretumulta.online: frontend

> Para publicar, lee primero **PUBLICAR.md**; el aviso «ahora no se publica desde aquí» está obsoleto.


Vite + React 19 + TypeScript + Tailwind 4. Es una SPA **prerenderizada**: cada URL pública sale como `dist/<ruta>/index.html` con el HTML ya pintado.
El backend (Convex: reseñas, newsletter, alertas y auth) **no está en este flujo**. La carpeta `convex/` se guarda solo como referencia y no se despliega desde aquí.

## Requisitos
- Node 20, `npm install --legacy-peer-deps`
- `npx playwright install chromium` (para el prerender)
- `.env.production`, copiado de `.env.example`. `VITE_CONVEX_URL` es la URL del deployment existente.
- `public/media/` (unos 1,7 GB) **no está en git**. Hay que descargarlo de producción (ver INFORME) o del backup.

## Comandos
| Comando | Qué hace |
|---|---|
| `npm run build` | genera índices (blog-lite, data-loaders), tsc y vite → `dist/` (SPA sin prerender) |
| `npm run serve:dist` | sirve `dist/` en :8088 con fallback SPA |
| `PRERENDER_EXTERNAL=1 PRERENDER_PORT=8088 PRERENDER_CONCURRENCY=10 node scripts/prerender.mjs` | prerender completo (unas 8.400 rutas, ~55 min) contra el servidor de arriba |
| `npm run build:full` | build + prerender con vite preview (más lento; es el que usa netlify.toml) |
| `node scripts/gen-sitemap.mjs` | regenera `public/sitemap.xml` desde `scripts/routes.json` |

## Dónde está cada cosa
- **Rutas**: `src/App.tsx` (React Router). La lista de URLs a prerenderizar y del sitemap sale de `scripts/routes.json` más `scripts/*-slugs.txt`.
- **Títulos y meta**: hook `src/hooks/use-seo.ts`. Cada página lo llama con su `title` y `description`. Las fichas y posts toman el título de sus datos (`src/lib/...`).
- **Contenido**:
  - blog: `src/lib/blog-posts-*.ts`
  - fichas de coche: `src/lib/comparador-coches*.ts`
  - fichas de moto: `src/lib/comparador-motos*.ts`
  - fichas de patinete: `src/lib/comparador-patinetes*.ts`
  - historia: `src/lib/historia-*.ts`

  Los `*.generated.ts` y `data-loaders/` se regeneran en cada build: no se editan a mano.
- **Estáticos**: `public/` (`_headers`, `_redirects`, robots, sitemap, fuentes y media).

## Añadir un modelo o un post
1. Añade el objeto del modelo al archivo de datos de su tipo (`comparador-coches-*.ts`, …) o el post a un `blog-posts-*.ts`. Copia la forma de uno existente.
2. Añade su slug a `scripts/coches-slugs.txt` / `motos-slugs.txt` / `patinetes-slugs.txt` / `blog-slugs.txt`.
3. Sube las imágenes a `public/media/…`.
4. Ejecuta `npm run build`. El chequeo «slugs<->loaders» tiene que dar OK.
5. Prerenderiza solo lo nuevo: `PRERENDER_ONLY=/coches/slug-nuevo,/blog/post-nuevo …`. Después, `node scripts/gen-sitemap.mjs`.

(Fase 2, pendiente: un archivo por modelo y títulos en un único CSV; ver INFORME.md.)

## Publicar
Ahora **no se publica desde aquí**. Cuando se autorice: build + prerender completo, revisar 0 fallos en el log, `npm run parity` (capturas frente a la referencia) y **un solo** deploy (cada deploy gasta unos 15 créditos de Netlify).
