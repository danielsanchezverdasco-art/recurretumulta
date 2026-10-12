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
