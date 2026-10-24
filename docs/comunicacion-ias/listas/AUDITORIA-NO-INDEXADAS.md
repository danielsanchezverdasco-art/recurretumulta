# Auditoría selectiva de no indexadas — recurretumulta.online (24/10/2026, 20:30 CEST)
Solo lectura sobre producción (robots.txt y sitemap.xml en vivo + 1 ficha de muestra). Nada publicado. Las indexadas no se han tocado.

## 1. Fallos reales del lote anterior (build publicado, /workspace/r24/wt/dist, 7.685 páginas HTML)
No se cuentan coincidencias cortas de 8-gramas. **2.962 páginas con al menos un fallo real.**
| Tipo | Páginas | Reparto |
|---|---|---|
| «Foto pendiente de verificación» visible (comprobado también en vivo en /coches/byd-seal-2024-…) | 2.439 | coches 2.204, autocaravanas 128, caravanas 72, campers 34, comparador 1 |
| Bloque de plantilla grande (≥50 % del texto compartido) | 854 | coches 396, motos 121, patinetes 104, caravanas 72, provincias 52, blog 27, autocaravanas 26, multas 26 |
| Datos vacíos (<150 palabras en main, indexable) | 19 | coches 9, provincias 5, motos 2, otros 3 |
| Canonical a otra URL siendo indexable | 4 | alfa-romeo-junior-ibrida-145, audi-s3-2025, dacia-duster-hybrid-2024, honda-eny1-2025 |
| Enlaces internos rotos | 0 | (todos los destinos existen o tienen 301) |
| null/undefined visible | 0 | |
| 404/5xx en vivo | 3 | /herramientas/* (no es URL real), /blog/municipios-mais-multas-transito-portugal-2026, /gana-dinero |
| noindex por error | no medible sin criterio: los 382 noindex del build son intencionados (calidad/unicidad) | |

## 2. Indexadas / no indexadas (cifras oficiales GSC, datos del 16/10/2026)
- Indexadas: **4.217**. Sin indexar: **5.158** (descubiertas 3.091, rastreadas 279, otra canónica 35, duplicada sin canónica 21, soft 404 9, 404 99, 5xx 6, noindex 135, redirección 836, alternativa canónica 640, error redirección 7).
- **No hay lista de URLs indexadas** en los datos (GSC solo exporta ejemplos de las no indexadas). No se puede dar la lista exacta de indexadas.
- Lista de no indexadas respaldada: **3.056 URLs** (cobertura-urls-2026-10-24.csv). Hueco: «Descubierta» solo exporta 999 de 3.091 → **2.092 descubiertas sin URL**.

## 3. Auditoría de las 3.056 no indexadas (CSV: auditoria-no-indexadas.csv)
robots.txt actual: no bloquea ninguna página pública (solo /auth, /perfil, /admin, /api). Sitemap en vivo: 5.753 URLs.
- **Fix puntual: 2.887** · **Reescritura: 169**
- Fixes: 1.474 variantes 301/canónicas/parámetro (nada que hacer, validar en GSC) · 487 páginas correctas y enlazadas → tiempo de rastreo · 324 foto real (Foto pendiente) · 133 404/5xx/soft404/error redirección → 301 en 1 salto o 410 · 112 variantes 301 enlazadas internamente sin barra · 234 noindex (194 a sacar del sitemap) · 123 con 0-2 enlaces internos → enlazado + pedir indexación.
- Reescritura: 42 duplicadas de otra ficha (diferenciar o fusionar con 301) + 127 con plantilla ≥50 %.

## 3 fixes principales
1. Foto real en las 324 no indexadas con «Foto pendiente» (y las 2.439 del build).
2. Sitemap limpio: fuera las URLs con noindex propio (194) y solo URLs finales 200.
3. Enlazado interno a las 123 con 0-2 enlaces + quitar enlaces a variantes sin barra (112).

## Pendiente (no hecho)
- Ninguna rama fix-no-indexadas-2410 creada ni arreglo aplicado.
- Las 2.092 descubiertas sin URL exportada: requieren nuevo export de GSC.

## Fase 2 — aplicado en rama `fix-no-indexadas-2410` (commit c75b9ac, desde main 16a6aea, SIN publicar)
- **Aplicado:** 410 (Gone) en `public/_redirects` para las 3 URLs que siguen siendo 404 reales en live y no tienen equivalente: `/gana-dinero`, `/blog/municipios-mais-multas-transito-portugal-2026` y `/blog/malaga-zbe-46562-multas-norma-anulada-como-recurrir` (con y sin barra final). Ninguna está en el sitemap live, y ninguna tiene enlaces internos; solo existe la ruta SPA `/gana-dinero` → `/`.
- **404/5xx/soft 404 (133):** 130 ya resuelven con un único 301 a una página 200 en live, así que no hay nada que cambiar. `/herramientas/*` es una entrada literal de GSC y no una URL real: no se añade ningún comodín, por riesgo.
- **noindex (194):** NO se aplica. En el sitemap live solo están 94, y la muestra live da `index, follow`. El noindex venía del build local, y sitemap-final.py ya excluye las páginas noindex reales. Quitarlas desindexaría páginas válidas.
- **Variantes sin barra (112):** 0 enlaces a ellas, tanto en el código fuente como en el build publicado. Solo aparecen en el mapa de 301 de `public/js/enlaces-301.js`. Ya están corregidas, sin cambios.
- **Enlaces internos a las 123:** NO aplicado, porque obliga a editar páginas enlazantes que pueden estar indexadas, lo que choca con la restricción. Hace falta decidir si se crea un hub nuevo no indexado o si se autoriza editar los hubs.
- **Comprobaciones:** `npm run build` (incluye tsc -b y vite build) OK. Diff = solo `_redirects` (+7 líneas, 0 borradas). Las 3 URLs no están en el sitemap live, así que se borran 0 URLs frente a live. Prerender completo no ejecutado (~2 h).

## Fase 2b: hub nuevo `/explorar-por-marca/` (rama fix-no-indexadas-2410, commit 6b70fe9, SIN publicar)
- **Página nueva:** `src/pages/ExplorarPorMarca.tsx`, que lee sus datos de `src/lib/hub-poco-enlazadas.json`. Reúne 120 de las 123 páginas poco enlazadas, agrupadas por tipo (Coches 28, Motos 27, Patinetes 55, Guías y normativa 9, Herramientas 1) y por marca. La marca se ha asignado a mano a partir del slug y del H1. Los títulos son el H1 publicado de cada página. Lleva una intro original (0 coincidencias en el dist publicado), migas de pan con schema BreadcrumbList, canonical autorreferente e `index, follow`.
- **Fuera del hub (3):** 1 duplicado con y sin barra (`/patinetes/sxt-light-plus-v`) y 2 URLs que ya tienen un 301 en `_redirects`: `/motos/benelli-bn-125-2025-ficha-tecnica-precio/` y `/motos/voge-525acx-2025-ficha-tecnica-precio/`.
- **Enlace al hub:** desde el componente global `shared-footer.tsx`, con 1 línea añadida. No se ha editado el texto de ninguna página existente.
- **Ruta y sitemap:** ruta añadida en `App.tsx` y en `scripts/routes.json` (staticRoutes, para el prerender y el sitemap). Entrada añadida en `public/sitemap.xml`. Además, `sitemap-final.py` la incluirá tras el prerender por ser una página 200 autocanónica.
- **Comprobaciones:** `npm run build` (tsc -b y vite build) OK. Render en `vite preview`: H1 correcto, 120 enlaces y enlace en el pie presente. Ninguno de los 120 destinos es origen de un redirect. El diff de `public/sitemap.xml` es +6 líneas y 0 borradas, así que se borran 0 URLs frente a live.
- **Pendiente:** prerender completo (~2 h) antes de publicar y despliegue tras la aprobación.
