# Verificación fase 1 (limpio @ 077807f), 12/10/2026

## (a) Build
`npm run build` (tsc + vite) OK, exit 0. Con `--legacy-peer-deps` y Node 20.

## Prerender
8.440 rutas: 8.326 a la primera y las 114 restantes en el reintento (timeouts intermitentes con la máquina cargada). **0 fallos al final.**

## (b) Paridad de URLs (dist frente a sitemap de producción, 5.584 URLs)
- **En producción y no en dist: 0.** Todas las URLs del sitemap actual existen en dist.
- En dist y no en el sitemap de producción: 2.856 (blog 1.207, motos 798, coches 695, patinetes 134, glosario 10 y otras 9). Son contenido más nuevo que el deploy de producción (rollback al 09/10) o rutas que el sitemap actual no lista. Hay que regenerar el sitemap con `node scripts/gen-sitemap.mjs` antes de publicar.
- Listas: prod-no-dist.txt (vacía) y dist-no-prod.txt.

## (c) Paridad visual: 15 páginas × móvil (390) y escritorio (1366), capturas de página completa
**Limpio frente al código original del dueño (mismo contenido): 30 de 30 capturas idénticas píxel a píxel (0,00 %).** Detalle en diff-base-local.txt.
Durante la verificación se detectó y corrigió un fallo: había quitado el `<noscript>` de index.css y el sitio salía sin estilos (commit «Fix: restaurar <noscript>…»).

Limpio frente a producción (diff-prod-local.txt): hay diferencias, pero **vienen del código del dueño, no de la limpieza**. El código original muestra exactamente las mismas diferencias.
- Producción es el rollback al 09/10. El código es más nuevo: tiene otra barra de navegación, el logo distinto y secciones nuevas en posts y fichas (+700-1.000 px de alto).
- Escritorio: entre un 0,6 % y un 7 % de píxeles distintos en fichas, posts y multas; entre un 30 % y un 41 % en comparador, fichas-técnicas, guías y herramientas, por los cambios de diseño del código nuevo.
- **Móvil: el código del dueño desborda en horizontal (444-448 px en una pantalla de 390).** La causa es la barra superior (header fixed: los botones salen por la derecha). Producción no lo tiene. Es un fallo que hay que corregir antes de publicar.

## (d) Lighthouse móvil (simulado, misma máquina; local servido con `serve` y compresión)
| Página | Producción | Código original (local) | Limpio (local) |
|---|---|---|---|
| Home | 55 (TBT 930 ms, CLS 0,19) | 70 (TBT 270) | 69 (TBT 180, peso 907→713 KiB) |
| Post /blog/navee-gt3-max/ | 35 (TBT 1.050, CLS 0,17) | 60 (TBT 380) | **66** (TBT 190) |
| Ficha /coches/abarth-500e… | 47 (TBT 820) | 49 (TBT 820) | **57** (TBT 470) |

Producción no se puede comparar directamente con local (otra red y CDN): la columna justa es «original frente a limpio».
Ganancia de la limpieza: TBT entre -35 % y -50 % y JS sin usar de unos 145-180 KiB a 65-98 KiB. El LCP sigue alto en local (imágenes grandes, sin CDN). Para llegar a 80+ falta fase 1b: imágenes responsive (srcset), partir los datos de blog-lite/comparador-lite y fachada de YouTube.

## Estado del dist
Tras el fix del CSS, dist/ se reconstruyó y ahora **solo tiene prerenderizadas las 14 páginas de prueba**. Antes de publicar hay que repetir el prerender completo (unos 90 min, `PRERENDER_EXTERNAL=1 …`, ver README) y regenerar el sitemap. La paridad de URLs (b) se midió con el prerender completo del commit anterior, que solo cambia ese `<noscript>`.

## Ronda 2 (12/10, tarde)
### Convex
- Producción **no habla con Convex**: el cliente abre el websocket a `ws://localhost:3000`, en el deploy publicado y también en 6accab08 y 6ac97163. Esos builds se hicieron sin `VITE_CONVEX_URL` y el código cae al valor por defecto. Reseñas, newsletter, alertas y la caza de monos están rotos en producción ahora mismo. (El `happy-otter-123` que vi antes no es la URL que usa la web.)
- El deployment real es `handsome-rhinoceros-259.eu-west-1.convex.cloud`: aparece en convex/auth.ts, convex/http.ts e index.html. `/version` responde 200 (backend desplegado el 06/10). Las consultas de solo lectura funcionan: valoraciones:listarAprobadas (2), lanzamientos:listar (36), cazaMonos:topHunters (7).
- **El backend desplegado no tiene `resenasVehiculos:*`** (código del 12/10, «Could not find public function»). Las reseñas nuevas no funcionarán hasta que el dueño despliegue Convex. Aquí no se ha tocado.
- `.env.production` queda con `VITE_CONVEX_URL=https://handsome-rhinoceros-259.eu-west-1.convex.cloud`.

### 1) Desbordamiento en móvil: arreglado
- La causa real no era la barra superior. La regla inline `img{height:auto}` de index.html iba sin capa y ganaba a las utilidades de Tailwind (`h-10`…). El logo del footer salía a 326-332 px (en producción mide 62 px) y el navegador alejaba el zoom. Arreglo: la regla pasa a `@layer base`.
- Además: la fila de compartir del blog (`gap-2 sm:gap-3`) y las pestañas de /fichas-tecnicas/ (`px-2 sm:px-3`) desbordaban a 360 px.
- Resultado: **0 páginas con scroll horizontal** en 15 páginas × 360/390/414 (45 comprobaciones).
- Capturas frente a producción: los altos de página ahora coinciden con producción. Antes salían 700-1.000 px más por los logos gigantes; no era contenido nuevo, como dije en la ronda 1.
  - Escritorio: 0,5-4 % de píxeles distintos en fichas, posts y multas; home 9 %; algunos posts 16-18 %; comparador, fichas-técnicas y ZBE 27-40 % por rediseño del código nuevo.
  - Ver diff-prod-local2.txt y diff-base-local2.txt.

### Reseñas
Con la URL real de Convex, **todas las fichas y posts se rompían** (ErrorBoundary) porque el backend desplegado no tiene `resenasVehiculos:*`. Ahora las reseñas tienen su propio boundary: si fallan, la sección se oculta.

### 3) Imágenes que faltaban (3.966 referenciadas por el código y ausentes en public/)
- 3.519 recuperadas de deploys anteriores: 6accab08, 6ac97163 y 6ac96b96 (lista de archivos por la API, descargadas de sus URLs permanentes), sin fallos.
- 1 recuperada de /workspace/nuevos.
- **447 sin fuente en ningún sitio**: lista en media-sin-fuente.txt. Las páginas afectadas salen del prerender (paginas-sin-imagen.txt).
- Para que ninguna página muestre una imagen rota: script global en index.html. Si falla una imagen de /media/, se oculta su `<figure>` (o la propia imagen), igual que ya hacían las fichas con su onError.

### 4) Sitemap y prerender
`gen-sitemap.mjs` genera 8.435 URLs (antes 5.584 en producción). Prerender completo lanzado.
- 15:26: el prerender se atascó a ~4.475/8.435. Causa: con la URL real de Convex, el bloqueo `**/convex.cloud/**` no casaba con `<deploy>.convex.cloud` y el WebSocket quedaba abierto. Networkidle no llegaba (page.goto con timeout de 25 s) y había presión de memoria. Arreglo: bloquear todo lo externo (HTTP y WebSocket) durante el prerender. Relanzado con nohup solo para las 3.960 que faltaban (log: prerender-resto.log), a ~1,3 páginas/s.

### Prerender final (16:30)
- Prerender del resto: 3.914 OK y 46 reintentadas con éxito. **dist cubre las 8.435 URLs del sitemap: 0 faltan, 0 con el shell vacío** (la home no lleva `<h1>`, igual que en producción).
- Sanity check en local (móvil 390): 20 URLs (home, blog, 404, juego-monos y bases, 3 posts, 3 coches, 3 motos, 3 patinetes, 3 multas). **20/20 OK**: status 200, título correcto, contenido real, sin scroll horizontal y 0 imágenes rotas visibles.
- Convex: hecho (ver la sección Convex). `.env.production` apunta a handsome-rhinoceros-259 y las consultas de solo lectura responden. Newsletter y alertas son mutaciones: no se han probado para no escribir en la base de datos.
- **No se ha hecho ningún deploy.**

### Deploy (16:26-17:00): INCIDENCIA, producción intacta
- `netlify deploy --dir dist` (CLI) leyó netlify.toml y **ejecutó el build (`build:full`) antes de subir**. Eso vació dist/ y empezó a reprerenderizar con vite preview. Lo detecté y maté el proceso antes de que subiera nada.
- El deploy 6acd0a4a se quedó en estado «new», sin archivos. Producción sigue en 6ac8e7ec.
- dist/ hay que completarlo otra vez: faltan 7.182 de 8.435 (prerender-3.log, unos 90 min). Después se sube con la API de deploy (deploy_api.py, mismo deploy 6acd0a4a, sin ejecutar ningún build).

### PUBLICADO (18:31 UTC)
- Deploy **6acd0a4ad577d5848dfdbf08**: el mismo borrador, reanudado por la API (deploy_api.py). 8.664 archivos subidos, 0 fallos. Sin build en Netlify.
- dist: 8.435/8.435 URLs del sitemap con HTML real (los 132 timeouts se reprerenderizaron antes de subir).
- Sanity en el borrador: 20/20 OK. Publicado. Purga total de Cloudflare: success. Sanity en vivo: 20/20 OK. El bundle en vivo coincide con dist (index-DFqB_TCh.js). Convex en vivo conecta con handsome-rhinoceros-259 (antes, localhost:3000).
- Rollback: restaurar 6ac8e7ec6d030c0141615efb.
- Lección: NO usar `netlify deploy` (CLI) con este netlify.toml: ejecuta `build:full` y vacía dist. Usar deploy_api.py.

## 12/10 noche: clon de producción 6ac8e7ec
- Navbar, footer y portada reconstruidos desde el bundle de 6ac8e7ec (commits 612ef88, 753b4fc).
- estructura.mjs (nav, contador, enlaces/botones header-main-footer, h2; desktop+móvil): 0 diferencias en blog index, fichas-tecnicas, blog, fichas y multas/juego existentes en prod. Única diferencia: titular del juego en portada ("gana 1000€" local vs "gana 900€" prod), pendiente de decisión de Daniel.
- Fichas nuevas (togg-t10x, urbet-riazor, ducati-city-cross-e, kaabo-mantis-10-lite) dan 404 en 6ac8e7ec: contenido nuevo que se mantiene.
- build:full en curso (prerender de 8.440 rutas, log /tmp/buildfull.log).
