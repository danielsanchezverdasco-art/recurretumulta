# Autocaravanas no protegidas — censo contra la matriz (7 de noviembre de 2026)

La matriz es `/tmp/audit738/grupos.jsonl` (HEAD de aquella pasada, no el candidato de hoy). Cifras de grupos únicos de ruta que contienen «autocaravana» o «camper».

## Protegidos, sin editar

`blog-posts-autocaravanas-lote125.ts` y `blog-posts-autocaravanas-lote125-g02.ts`: 14 grupos (8 conflicto, 2 aplica_limpio, 2 no_leible, 2 absorbido). Siguen sin aprobación. No se han tocado ni se ha rodeado el gate.

## Resto de autocaravanas y campers: 961 grupos, 445 ficheros

| Decisión de la matriz | Grupos |
|---|---|
| conflicto | 261 |
| aplica_limpio | 252 |
| no_leible | 175 |
| ausente (el fichero de aquella ruta ya no existe) | 128 |
| absorbido | 69 |
| binario_distinto | 39 |
| binario_ausente | 33 |
| generado_distinto | 4 |

## Qué se ha revisado hoy

Los 122 blobs «ausente» de comparadores se han leído por id. Ningún id de esas entregas falta en el candidato: el modelo vive en un módulo posterior (`-m1`, `-m2` o un camper).

Huecos de campo (el candidato tenía null y la rama traía cifra):

- Integrado en `pilote-v630j-2026-precio-ficha-tecnica`: MMA 3.500 kg, carnet B y carga útil 555 kg, con la ficha de pilote.fr que la rama ya citaba. Las 2 plazas para dormir ya estaban en el contra. El contra que negaba tarifa oficial se corrige: 63.900 € es la tarifa de Pilote Francia.
- No copiados, porque la ficha posterior dice que la marca no publica PVP y pide no inventar: Challenger V114 51.490 €, Elnagh Baron 565 69.780 €, Frankia NEO I 7 122.490 €, Knaus BoxLife 600 66.590 € y Knaus Sky TI 650 82.930 €.
- Adria Matrix Plus 670 SL: la rama antigua traía 79.000 € y 7,49 × 2,30 × 2,81 m. Se mantiene la ficha posterior (92.490 € de tarifa belga Vanomobil y 7,48 × 2,29 × 2,90 m). Sustituido, no perdido: el dato viejo queda aquí.
- Hymer Grand Canyon S: la rama decía 2–4 camas con techo elevable opcional. No se fija un solo `plazasDormir`.

Un conflicto de `blog-posts-autocaravanas-merlin1.ts` (rama `dedupe-8g-ronda-cierre`) tiene las mismas URLs que el candidato. El resto de conflictos de blog de esta área queda pendiente de lectura frase a frase: no se reescribe el texto para el medidor.

## Otras áreas, para no perderlas

- Coches: residual en `docs/inventario/AREA-COMPARADORES-COCHES-20261107.md`, `AREA-COMPARADORES-COCHES-RESIDUAL.jsonl` y `DECISIONES-RESIDUAL-COCHES-20261107.md`. No cerrado.
- Patinetes: lista DGT aplicada en `95fa1fa81`. Siguen fuera Ninebot por código de fábrica, Raptor Dual, K2 a secas y los precios que solo vienen de un retailer. Fotos Cecotec sin licencia abierta: bloqueo abierto en `LOTE-CECOTEC-P2-20261107.md`.
- Blogs de coches: 111 portadas revertidas, pendientes.
- `dist` nuevo: no generado.
