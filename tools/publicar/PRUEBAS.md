# Pruebas del kit (28/10/2026, Madrid) — todas SIN publicar ni purgar
Base: rama `kit-publicar-merlin` sobre `radar-integ-2810` (864f848). Vivo: 6ae1bcc3 (rollback 6ae178ea).

| Prueba | Resultado |
|---|---|
| Dry-run completo con build real + prerender rápido + 17 pasos de postproceso | build OK; fases entorno, vivo, git, src, rev3, build OK |
| Fases dist: 0 eliminaciones, 0 reglas de _redirects perdidas, sin /tienda, sin «Algo salió mal»/localhost, 0 fotos rotas nuevas | OK |
| `chequeo_fotos` sobre el dist real | **ABORTA: 145 fotos nuevas sin URL de fuente** (126 enlazadas desde páginas). Detección correcta; no se publica hasta registrar fuente o quitarlas |
| Fallo simulado: dist con _redirects sin reglas / foto rota / enlace /tienda / «Algo salió mal» / título raro / sitemap con URL sin página | 6/6 ABORTAN |
| Fallo simulado: tocar un fichero de no-tocar.txt | ABORTA |
| Fallo simulado: cambiar un título de titulos.csv (congelado hasta 1/11) | ABORTA |
| Fallo simulado: /tienda en scripts/routes.json | ABORTA |
| Fallo simulado: ESTADO-VIVO.txt ≠ deploy vivo | ABORTA |
| Fallo simulado: error de TypeScript en el build | ABORTA |
| Árbol con cambios sin commit / build que modifica ficheros fuente | ABORTA |
| Candado PUBLICANDO en el tablón | ABORTA mientras esté la línea de Cosa |
| _redirects: el build desde esta rama perdía 8 reglas (4 blogs) porque `public/_redirects` no las tenía (solo el dist de Cosa) | DETECTADO por el kit; corregido añadiéndolas a `public/_redirects` |
| CF_ZONE_ID obtenido por consulta de solo lectura a Cloudflare | OK |
| Convex: URL regional desde `scripts/check-convex-url.mjs`; una URL sin región o de ejemplo se rechaza | OK |

No ejecutado (por diseño): las fases de publicación (borrador, restore, purga, verificación).
