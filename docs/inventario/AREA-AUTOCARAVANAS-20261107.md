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

## Textos Merlín 2 y 3, sobre a97c17ab4

Merlín 2: los diez artículos ya traen las mismas cifras que la reescritura del 24/10, más fotos y el enlace al analizador. No se ha sustituido el texto por esa rama.

- Pössl 2Win Plus: el artículo ya dice que 66.800–70.200 € es una horquilla de concesionario, no oficial. La ficha lo deja vacío por el mismo motivo. Coherente.
- Dreamer D55 UP: el artículo dice que Dreamer no publica precio. No se copia el 77.710 € belga de la ficha, marcado allí como no oficial.
- Rapido V55: el artículo dice que no hay precio publicado y que una unidad expuesta ronda 70.250 €, no oficial. La página pública `https://www.rapido.fr/camping-car_vans_vans_v55.chtml`, consultada el 7/11/2026 y rotulada novedad 2027, confirma 5,99 m, 2,05 m, 140 CV y 3 plazas de noche, y no imprime precio. No se mete en el artículo el 63.350 € de la ficha.
- Westfalia Columbus 600 D (67.650 €), Sunlight Cliff 640 (60.990 €) y Laika Ecovip 600 (71.314 €) ya coinciden con su ficha.
- BoxLife: el artículo ya distingue la Preisliste (66.590 €, IVA alemán) del rango de concesionario.

Merlín 3: Frankia y Mobilvetta ya dicen que 142.000 € y 109.888–121.050 € son anuncios, no tarifa de fábrica. Bürstner Lyseo TD 690 G llamaba «PVP recomendado» a 80.750 €. La ficha guardaba 82.530 francos suizos en el campo de euros. El campo queda vacío y el artículo deja de presentar esa cifra como tarifa en euros.

Merlín 4: los diez artículos ya dicen que la marca no publica precio. No se ha copiado ninguna cifra de ficha. El Itineo PF600 deja la MMA sin dato de fábrica; la ficha guarda 3.500 kg de concesionario y el artículo no lo da por oficial. Residual, no sustituido.

Merlín 5: el Knaus Sky TI 650 MEG decía que Knaus no publica precio y que se duerme a cuatro. La Preisliste 2026-1 (impresión de julio de 2025, tabla SKY TI 650 MEG) marca 82.930 € con IVA alemán del 19 %, 2 plazas de noche como máximo, 2.958 kg en orden de marcha y 166 kg de tope para extras de fábrica. Auto Zeitung recoge el mismo importe. El artículo y las dos fichas del modelo quedan en esos datos. El 82.930 € no se presenta como tarifa española. Los otros nueve artículos del módulo ya separan tarifa de anuncio o de libras; no se les ha copiado el número de la ficha.


Los blobs marcados `no_leible` se leen con `git cat-file`: son UTF-8. La matriz no los abrió; no se descartan.

En `blog-posts-autocaravanas-merlin1.ts` el texto no coincidía con la ficha viva:

- Grand Canyon S: el artículo decía 150 CV y ~98.200 € en Alemania. La ficha dice Sprinter 417 CDI de 170 CV y 102.190 € en España.
- B-MC I 600: ~139.900 € pasados a 141.000 €, el desde alemán de la nota de prensa de Hymer. No se llama PVP.
- Chausson 640 Titanium: 170 CV y ~68.900 € pasados a 130 CV y 69.490 € (lista de concesionario en Francia, no tarifa española).

BoxLife 600 MQ: la ficha cableada tenía el precio vacío y el módulo hermano guardaba la Preisliste (66.590 €, MJ2027-1, IVA alemán 19 %). Ese importe vuelve al campo, en `aprox`. El Sky TI 650 MEG recupera 82.930 € de la misma forma (MJ2026). El blog del BoxLife conserva el rango de concesionario 80–87 mil y añade la cifra de la lista.

El conflicto `dedupe-8g-ronda-cierre` de merlin1 no cambia URLs. Los demás conflictos de redacción quedan abiertos.


Los 122 blobs «ausente» de comparadores se han leído por id. Ningún id de esas entregas falta en el candidato: el modelo vive en un módulo posterior (`-m1`, `-m2` o un camper).

Huecos de campo (el candidato tenía null y la rama traía cifra):

- Integrado en `pilote-v630j-2026-precio-ficha-tecnica`: MMA 3.500 kg, carnet B y carga útil 555 kg, con la ficha de pilote.fr que la rama ya citaba. Las 2 plazas para dormir ya estaban en el contra. El contra que negaba tarifa oficial se corrige: 63.900 € es la tarifa de Pilote Francia.
- No copiados, porque la ficha dice que la marca no publica PVP y pide no inventar: Challenger V114 51.490 €, Elnagh Baron 565 69.780 € y Frankia NEO I 7 122.490 €. BoxLife y Sky TI sí recuperan la Preisliste (ver arriba).
- Adria Matrix Plus 670 SL: la rama antigua traía 79.000 € y 7,49 × 2,30 × 2,81 m. Se mantiene la ficha posterior (92.490 € de tarifa belga Vanomobil y 7,48 × 2,29 × 2,90 m). Sustituido, no perdido: el dato viejo queda aquí.
- Hymer Grand Canyon S: la rama decía 2–4 camas con techo elevable opcional. No se fija un solo `plazasDormir`.

Un conflicto de `blog-posts-autocaravanas-merlin1.ts` (rama `dedupe-8g-ronda-cierre`) tiene las mismas URLs que el candidato. El resto de conflictos de blog de esta área queda pendiente de lectura frase a frase: no se reescribe el texto para el medidor.

## Otras áreas, para no perderlas

- Coches: residual en `docs/inventario/AREA-COMPARADORES-COCHES-20261107.md`, `AREA-COMPARADORES-COCHES-RESIDUAL.jsonl` y `DECISIONES-RESIDUAL-COCHES-20261107.md`. No cerrado.
- Patinetes: lista DGT aplicada en `95fa1fa81`. Siguen fuera Ninebot por código de fábrica, Raptor Dual, K2 a secas y los precios que solo vienen de un retailer. Fotos Cecotec sin licencia abierta: bloqueo abierto en `LOTE-CECOTEC-P2-20261107.md`.
- Blogs de coches: 111 portadas revertidas, pendientes.
- `dist` nuevo: no generado.
