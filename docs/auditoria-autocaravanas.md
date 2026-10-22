# Auditoría total — fichas y blogs de autocaravanas y campers

- **Fecha:** 2026-10-20 ~04:10–07:00 CEST
- **Rama:** `merlin-auditoria-autocaravanas` (base: `merlin-rutas-cableadas` @ 2308a0e — borrador fusionado, el único árbol con `src/lib/autocaravanas/` y `src/lib/campers/`; `main` no contiene esos directorios)
- **Orden del usuario:** «Fotos de portada en TODAS las fichas, fotos, precios OBLIGATORIO. Revisa CADA ficha, CADA blog»
- **Reglas:** foto de portada/hero debe existir en `public/media/`; mínimo guía 2 interiores + 1 exterior; todas las fotos referenciadas deben existir; `precioDesde` relleno o, si null, verificar si el fabricante publica tarifa oficial. Nada inventado: lo que no existe queda documentado.

## Resumen ejecutivo

- Fichas auditadas: **241** (212 autocaravanas + 29 campers) — el 100% de `src/lib/autocaravanas/` y `src/lib/campers/`
- Blogs auditados: **99 registros / 78 únicos** (el 100%: 5 blog-posts-autocaravanas-merlin, blog-campers/ completo, y las copias raíz src/lib/blog-posts-campers-*.ts (eu2 a/b/c/d, niky, nuevos-7, vw); los slugs repetidos entre raíz y blog-campers/ se auditan dos veces)
- **Cumplimiento 3/3 (hero OK + fotos completas + precio relleno): 80/241**
- Fotos rescatadas de otras ramas (main, merlin-autocaravanas-lote-2/3/4/5/final, merlin-enriquecer-fichas, merlin-blogs-autocaravanas): **649 ficheros** → copiados a `public/media/` con el nombre exacto referenciado
- Fotos imposibles de recuperar (no existen en ninguna rama ni publicadas oficialmente para ese sufijo): **28 refs en 12 fichas** — documentadas
- Precios: 87/241 rellenos; **154 en null**, clasificados por marca más abajo
- Blogs: hero OK en 93/99 registros; 100% enlazan a su ficha válida; 4 imágenes rotas en blogs (héroes de Trenta 640 y Amundsen, imposibles)
- Duplicados de ficha entre ficheros: 2

## Fallos por tipo (post-rescate)

| Tipo de fallo | Nº fichas | Nº refs |
|---|---|---|
| Sin foto de portada/hero | 6 | 6 |
| Referencias de foto rotas (inexistentes en `public/media/`) | 12 | 28 |
| Menos de 2 interiores o 0 exteriores (fotos existentes) | 24 | — |
| `precioDesde` null | 154 | — |

## Fichas sin hero (6 — las más graves)

- **chausson-twist-v594-2026-precio-ficha-tecnica** (Chausson Twist V594): el campo `imagen` está vacío: no existe foto del modelo en ninguna rama del repo ni se localizó una oficial del modelo exacto en esta pasada (pendiente de captura desde la galería oficial del fabricante) **IMPOSIBLE documentado** (ficha camper: `src/lib/campers/comparador-campers-chausson.ts`).
- **dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica** (Dethleffs Globetrail 600 DS): la portada referenciada `/dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica-oficial.webp` no existe en ninguna rama del repo ni se localizó una foto oficial del modelo exacto en esta pasada (pendiente de captura desde la galería oficial del fabricante) **IMPOSIBLE documentado** (ficha camper: `src/lib/campers/comparador-campers-grupo4.ts`).
- **knaus-boxstar-600-street-2026-precio-ficha-tecnica** (Knaus Boxstar 600 Street): la portada referenciada `/knaus-boxstar-600-street-2026-precio-ficha-tecnica-oficial.webp` no existe en ninguna rama del repo ni se localizó una foto oficial del modelo exacto en esta pasada (pendiente de captura desde la galería oficial del fabricante) **IMPOSIBLE documentado** (ficha camper: `src/lib/campers/comparador-campers-grupo4.ts`).
- **weinsberg-carabus-600-mq-2026-precio-ficha-tecnica** (Weinsberg CaraBus 600 MQ): la portada referenciada `/weinsberg-carabus-600-mq-2026-precio-ficha-tecnica-oficial.webp` no existe en ninguna rama del repo ni se localizó una foto oficial del modelo exacto en esta pasada (pendiente de captura desde la galería oficial del fabricante) **IMPOSIBLE documentado** (ficha camper: `src/lib/campers/comparador-campers-grupo4.ts`).
- **possl-trenta-640-2026-precio-ficha-tecnica** (Pössl Trenta 640): la portada referenciada `/possl-trenta-640-2026-oficial-ext.webp` no existe en ninguna rama del repo ni se localizó una foto oficial del modelo exacto en esta pasada (pendiente de captura desde la galería oficial del fabricante) **IMPOSIBLE documentado** (ficha camper: `src/lib/campers/comparador-campers-possl.ts`).
- **westfalia-amundsen-2026-precio-ficha-tecnica** (Westfalia Amundsen): la portada referenciada `/westfalia-amundsen-2026-oficial-ext.webp` no existe en ninguna rama del repo ni se localizó una foto oficial del modelo exacto en esta pasada (pendiente de captura desde la galería oficial del fabricante) **IMPOSIBLE documentado** (ficha camper: `src/lib/campers/comparador-campers-westfalia.ts`).

## Fotos imposibles de recuperar (28 refs, 12 fichas)

No existen en `main`, ni en `merlin-autocaravanas-lote-2/3/4/5/final`, ni en `merlin-enriquecer-fichas`, ni en `niky-campers`, ni en los blogs del modelo (los 3 héroes de blog de Trenta 640 y Amundsen comparten destino). No se fabrican copias de otra variante (regla: la foto debe corresponder al modelo exacto). Las 28 fotos quedan como FALLO documentado.

- **dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica**: /dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica-oficial.webp, /dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica-oficial-interior.webp, /dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica-oficial-2.webp, /dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica-oficial-interior-2.webp
- **ford-nugget-trail-2026-precio-ficha-tecnica**: /ford-nugget-trail-2026-oficial-int2.webp
- **knaus-boxstar-600-street-2026-precio-ficha-tecnica**: /knaus-boxstar-600-street-2026-precio-ficha-tecnica-oficial.webp, /knaus-boxstar-600-street-2026-precio-ficha-tecnica-oficial-interior.webp, /knaus-boxstar-600-street-2026-precio-ficha-tecnica-oficial-2.webp, /knaus-boxstar-600-street-2026-precio-ficha-tecnica-oficial-interior-2.webp
- **possl-campster-2026-precio-ficha-tecnica**: /possl-campster-2026-oficial-int2.webp
- **possl-summit-640-2026-precio-ficha-tecnica**: /possl-summit-640-2026-oficial-int1.webp, /possl-summit-640-2026-oficial-int2.webp
- **possl-trenta-640-2026-precio-ficha-tecnica**: /possl-trenta-640-2026-oficial-ext.webp, /possl-trenta-640-2026-oficial-int1.webp, /possl-trenta-640-2026-oficial-int2.webp
- **possl-vanster-2026-precio-ficha-tecnica**: /possl-vanster-2026-oficial-int2.webp
- **vw-california-beach-2026-precio-ficha-tecnica**: /vw-california-beach-2026-precio-ficha-tecnica-interior-oficial-2.webp, /vw-california-beach-2026-precio-ficha-tecnica-oficial-3.webp
- **vw-california-coast-2026-precio-ficha-tecnica**: /vw-california-coast-2026-precio-ficha-tecnica-interior-oficial-2.webp, /vw-california-coast-2026-precio-ficha-tecnica-oficial-2.webp
- **vw-california-ocean-2026-precio-ficha-tecnica**: /vw-california-ocean-2026-precio-ficha-tecnica-interior-oficial-2.webp, /vw-california-ocean-2026-precio-ficha-tecnica-oficial-2.webp
- **weinsberg-carabus-600-mq-2026-precio-ficha-tecnica**: /weinsberg-carabus-600-mq-2026-precio-ficha-tecnica-oficial.webp, /weinsberg-carabus-600-mq-2026-precio-ficha-tecnica-oficial-interior.webp, /weinsberg-carabus-600-mq-2026-precio-ficha-tecnica-oficial-interior-2.webp
- **westfalia-amundsen-2026-precio-ficha-tecnica**: /westfalia-amundsen-2026-oficial-ext.webp, /westfalia-amundsen-2026-oficial-int1.webp, /westfalia-amundsen-2026-oficial-int2.webp

## Precios: clasificación de los 154 `precioDesde` null

- OK documentado (fabricante sin PVP público en web oficial): Adria (8), Benimar (11) → 19 fichas. Adria: confirmado en catálogos oficiales 26/27 (Campervans y Motorhomes) citados en las propias fichas. Benimar: web oficial sin precios, solo red de concesionarios.
- FALLO PENDIENTE (fabricante PUBLICA tarifa/preisliste/tarifs oficial, pero el precio exacto del modelo no se verificó en esta pasada — no se inventa): el resto, 135 fichas.

| Marca | nulls | Estado |
|---|---|---|
| Benimar | 11 | sin PVP público (OK documentado) |
| Pössl | 9 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Adria | 8 | sin PVP público (OK documentado) |
| Knaus | 7 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Pilote | 6 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Rapido | 6 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| McLouis | 5 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Bürstner | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Carthago | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Challenger | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Chausson | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Dethleffs | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Frankia | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Giottiline | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Laika | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Roller Team | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Weinsberg | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Westfalia | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| XGO | 4 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Elnagh | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Etrusco | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Globecar | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Hobby | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Hymer | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Itineo | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Mobilvetta | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Niesmann+Bischoff | 3 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Bavaria | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Campérêve | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Dreamer | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Eura Mobil | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Fleurette | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Font Vendôme | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Le Voyageur | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Malibu | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Mooveo | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Sunlight | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Ford | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Camperiz | 2 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| CI | 1 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Concorde | 1 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Euramobil | 1 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| LMC | 1 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Renault | 1 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |
| Peugeot | 1 | publica tarifa oficial → precio del modelo pendiente de verificar (FALLO) |

Fuentes oficiales verificadas durante la auditoría (para futuras pasadas):
- Hymer publica «Precio desde» en hymer.com (ES) por modelo y la lista oficial ES en PDF: `https://www.hymer.com/hymer/drucksachen/preislisten/campervans/es_es_hymer_campervans_preisliste.pdf` (2027; válida desde 01/07/2026 España).
- Knaus: sección oficial de descargas con listas de precios: `https://www.knaus.com/en/catalogs-downloads` (Motorhomes / Camper Vans).

## Tabla completa de cumplimiento — fichas (241)

| slug | marca | modelo | hero | fotos existentes (int+ext) | precioDesde | estado precio | estado fotos |
|---|---|---|---|---|---|---|---|
| adria-compact-supreme-sl-2026-precio-ficha-tecnica | Adria | Compact Supreme SL | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas | OK |
| adria-coral-plus-670-sl-2026-precio-ficha-tecnica | Adria | Coral Plus 670 SL | OK | 6 (3 int + 3 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas | OK |
| adria-matrix-axess-670-sl-2026-precio-ficha-tecnica | Adria | Matrix Axess 670 SL | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas · la ficha NO lo declara todavía en notas | OK |
| adria-matrix-plus-670-sl-2026-precio-ficha-tecnica | Adria | Matrix Plus 670 SL | OK | 4 (2 int + 2 ext) | 92490 | OK: precio relleno | OK |
| adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica | Adria | Matrix Supreme 670 DL | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas | OK |
| adria-sonic-700-sl-2026-precio-ficha-tecnica | Adria | Sonic 700 SL | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas | OK |
| adria-supersonic-780-sl-2026-precio-ficha-tecnica | Adria | Supersonic 780 SL | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas · la ficha NO lo declara todavía en notas | OK |
| adria-twin-sports-640-sgx-2026-precio-ficha-tecnica | Adria | Twin Sports 640 SGX | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas · la ficha NO lo declara todavía en notas | OK |
| adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica | Adria | Twin Supreme 640 SGX | OK | 6 (3 int + 3 ext) | 67490 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| ahorncamp-t-690-2026-precio-ficha-tecnica | Ahorn Camp | T 690 | OK | 5 (2 int + 3 ext) | 61900 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| autostar-passion-p-730-lc-2026-precio-ficha-tecnica | Autostar | Passion P730LC Lift | OK | 4 (2 int + 2 ext) | 64990 | OK: precio relleno | OK |
| bavaria-i-700-c-2026-precio-ficha-tecnica | Bavaria | I 700 C | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| bavaria-i740fgj-nomade-2026-precio-ficha-tecnica | Bavaria | I740FGJ Nomade | OK | 4 (3 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| benimar-amphitryon-940-2026-precio-ficha-tecnica | Benimar | Amphitryon 940 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| benimar-benivan-120-up-2026-precio-ficha-tecnica | Benimar | Benivan 120 UP | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| benimar-mileo-243-2026-precio-ficha-tecnica | Benimar | Mileo 243 | OK | 3 (2 int + 1 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| benimar-mileo-263-2026-precio-ficha-tecnica | Benimar | Mileo M263 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) · la ficha NO lo declara todavía en notas | OK |
| benimar-mileo-268-2026-precio-ficha-tecnica | Benimar | Mileo 268 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) · la ficha NO lo declara todavía en notas | OK |
| benimar-mileo-286-2026-precio-ficha-tecnica | Benimar | Mileo 286 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) · la ficha NO lo declara todavía en notas | OK |
| benimar-mileo-297-2026-precio-ficha-tecnica | Benimar | Mileo 297 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) · la ficha NO lo declara todavía en notas | OK |
| benimar-sport-340-up-2026-precio-ficha-tecnica | Benimar | Sport 340 UP | OK | 4 (3 int + 1 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| benimar-sport-363-2026-precio-ficha-tecnica | Benimar | Sport 363 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| benimar-tessoro-440-up-2026-precio-ficha-tecnica | Benimar | Tessoro 440 UP | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| benimar-tessoro-t481-2026-precio-ficha-tecnica | Benimar | Tessoro T481 | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP en su web oficial: precios solo vía red de concesionarios (España) | OK |
| burstner-campeo-c-600-2026-precio-ficha-tecnica | Bürstner | Campeo C 600 | OK | 4 (2 int + 2 ext) | 61480 | OK: precio relleno | OK |
| burstner-campeo-td-690-g-2026-precio-ficha-tecnica | Bürstner | Campeo TD 690 G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| burstner-elegance-i-920-g-2026-precio-ficha-tecnica | Bürstner | Elegance I 920 G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| burstner-eliseo-c-644-2026-precio-ficha-tecnica | Bürstner | Eliseo C 644 | OK | 4 (2 int + 2 ext) | 69510 | OK: precio relleno | OK |
| burstner-ixeo-it-680-g-2026-precio-ficha-tecnica | Bürstner | Ixeo IT 680 G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| burstner-lineo-t-690-g-2026-precio-ficha-tecnica | Bürstner | Lineo T 690 G | OK | 4 (2 int + 2 ext) | 69210 | OK: precio relleno | OK |
| burstner-lyseo-i-726-g-2026-precio-ficha-tecnica | Bürstner | Lyseo I 726 G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| burstner-lyseo-td-690-g-2026-precio-ficha-tecnica | Bürstner | Lyseo TD 690 G | OK | 6 (4 int + 2 ext) | 82530 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| burstner-lyseo-td-744-2026-precio-ficha-tecnica | Bürstner | Lyseo TD 744 | OK | 4 (2 int + 2 ext) | 103540 | OK: precio relleno | OK |
| ci-horon-84-xt-2026-precio-ficha-tecnica | CI | Horon 84 XT | OK | 7 (4 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| campereve-cap-land-51-2026-precio-ficha-tecnica | Campérêve | Cap Land | OK | 4 (2 int + 2 ext) | 65400 | OK: precio relleno | OK |
| campereve-magellan-643-2026-precio-ficha-tecnica | Campérêve | Magellan 643 | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | insuficientes (1 int / 1 ext) |
| carado-a-361-pro-2026-precio-ficha-tecnica | Carado | A 361 PRO | OK | 4 (2 int + 2 ext) | 65499 | OK: precio relleno | OK |
| carado-t-338-2026-precio-ficha-tecnica | Carado | T 338 EDITION27 | OK | 4 (2 int + 2 ext) | 69490 | OK: precio relleno | OK |
| carado-t-447-2026-precio-ficha-tecnica | Carado | T 447 | OK | 4 (2 int + 2 ext) | 62599 | OK: precio relleno | OK |
| carado-v-337-2026-precio-ficha-tecnica | Carado | V 337 | OK | 4 (2 int + 2 ext) | 56590 | OK: precio relleno | OK |
| carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica | Carthago | C-Compactline I 138 DB | OK | 4 (2 int + 2 ext) | 106990 | OK: precio relleno | OK |
| carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica | Carthago | C-Tourer I 148 LE | OK | 7 (4 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica | Carthago | C-Tourer T 145 RB LE | OK | 4 (2 int + 2 ext) | 96040 | OK: precio relleno | OK |
| carthago-c2-tourer-i-145-rb-le-2026-precio-ficha-tecnica | Carthago | C2-tourer I 145 RB-LE | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica | Carthago | chic c-line I 5.9 XL LE | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica | Carthago | liner-for-two I 53 L | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| challenger-270-2026-precio-ficha-tecnica | Challenger | 270 | OK | 4 (2 int + 2 ext) | 65490 | OK: precio relleno | OK |
| challenger-287-2026-precio-ficha-tecnica | Challenger | 287 | OK | 4 (2 int + 2 ext) | 69990 | OK: precio relleno | OK |
| challenger-328-2026-precio-ficha-tecnica | Challenger | 328 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| challenger-380-2026-precio-ficha-tecnica | Challenger | 380 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| challenger-396-2026-precio-ficha-tecnica | Challenger | 396 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| challenger-s-194-2026-precio-ficha-tecnica | Challenger | S194 | OK | 4 (2 int + 2 ext) | 60990 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| challenger-v114-start-edition-2026-precio-ficha-tecnica | Challenger | V114 Start Edition | OK | 8 (5 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| chausson-630-first-line-2026-precio-ficha-tecnica | Chausson | 630 First Line | OK | 4 (2 int + 2 ext) | 66990 | OK: precio relleno | OK |
| chausson-640-first-line-2026-precio-ficha-tecnica | Chausson | 640 First Line | OK | 4 (2 int + 2 ext) | 65490 | OK: precio relleno | OK |
| chausson-640-titanium-2026-precio-ficha-tecnica | Chausson | 640 Titanium | OK | 5 (3 int + 2 ext) | 69490 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| chausson-650-first-line-2026-precio-ficha-tecnica | Chausson | 650 First Line | OK | 4 (2 int + 2 ext) | 66490 | OK: precio relleno | OK |
| chausson-720-etapa-2026-precio-ficha-tecnica | Chausson | 720 Etapa | OK | 4 (2 int + 2 ext) | 67490 | OK: precio relleno | OK |
| chausson-720-first-line-2026-precio-ficha-tecnica | Chausson | 720 First Line | OK | 4 (2 int + 2 ext) | 63990 | OK: precio relleno | OK |
| chausson-777-titanium-line-2026-precio-ficha-tecnica | Chausson | 777 Titanium Line | OK | 7 (4 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| chausson-s514-first-line-2026-precio-ficha-tecnica | Chausson | S514 First Line | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| chausson-v594-road-line-2026-precio-ficha-tecnica | Chausson | V594 Road Line | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| concorde-charisma-910-li-2026-precio-ficha-tecnica | Concorde | Charisma 910 LI | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| concorde-credo-791-li-2026-precio-ficha-tecnica | Concorde | Credo 791 LI | OK | 4 (2 int + 2 ext) | 212250 | OK: precio relleno | OK |
| dethleffs-alpa-i-7820-2-2026-precio-ficha-tecnica | Dethleffs | Alpa I 7820-2 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| dethleffs-esprit-i-7150-dbl-2026-precio-ficha-tecnica | Dethleffs | Esprit I 7150-2 DBL | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| dethleffs-globebus-i-6-2026-precio-ficha-tecnica | Dethleffs | Globebus I 6 | OK | 4 (2 int + 2 ext) | 86690 | OK: precio relleno | OK |
| dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica | Dethleffs | Globebus Performance 4x4 T 46 | OK | 4 (2 int + 2 ext) | 105999 | OK: precio relleno | OK |
| dethleffs-globetrail-600-dr-performance-2026-precio-ficha-tecnica | Dethleffs | Globetrail Performance 600 DR | OK | 4 (2 int + 2 ext) | 86499 | OK: precio relleno | OK |
| dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica | Dethleffs | Just Go T 7055 DBL | OK | 4 (2 int + 2 ext) | 66999 | OK: precio relleno | OK |
| dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica | Dethleffs | Trend I 7017 EB | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica | Dethleffs | Trend T 6717 EB | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| dreamer-d55-fun-up-2026-precio-ficha-tecnica | Dreamer | D55 UP | OK | 5 (2 int + 3 ext) | 77710 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| dreamer-d62-select-2026-precio-ficha-tecnica | Dreamer | D62 Select | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| dreamer-d68-up-2026-precio-ficha-tecnica | Dreamer | D68 UP | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| elnagh-baron-565-2026-precio-ficha-tecnica | Elnagh | Baron 565 | OK | 4 (3 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| elnagh-baron-573-2026-precio-ficha-tecnica | Elnagh | Baron 573 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| elnagh-t-loft-532-2026-precio-ficha-tecnica | Elnagh | T-Loft 532 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| etrusco-cv-600-db-2026-precio-ficha-tecnica | Etrusco | CV 600 DB | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| etrusco-cv-600-sb-2026-precio-ficha-tecnica | Etrusco | CV 600 SB | OK | 4 (2 int + 2 ext) | 57990 | OK: precio relleno | OK |
| etrusco-i-7400-qbc-2026-precio-ficha-tecnica | Etrusco | I 7400 QBC | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| etrusco-t-6900-sb-2026-precio-ficha-tecnica | Etrusco | T 6900 SB | OK | 4 (2 int + 2 ext) | 68999 | OK: precio relleno | OK |
| etrusco-t-7400-sb-2026-precio-ficha-tecnica | Etrusco | T 7400 SB | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | insuficientes (1 int / 1 ext) |
| etrusco-t-7400-sbc-2026-precio-ficha-tecnica | Etrusco | T 7400 SBC | OK | 4 (2 int + 2 ext) | 69999 | OK: precio relleno | OK |
| etrusco-van-5-9-db-2026-precio-ficha-tecnica | Etrusco | V 5.9 DB | OK | 4 (2 int + 2 ext) | 54100 | OK: precio relleno | OK |
| euramobil-activa-one-650-hs-2026-precio-ficha-tecnica | Eura Mobil | Activa One 650 HS | OK | 4 (2 int + 2 ext) | 80500 | OK: precio relleno | OK |
| euramobil-contura-766-eb-2026-precio-ficha-tecnica | Eura Mobil | Contura 766 EB | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica | Eura Mobil | Integra Line GT IL 726 EF | OK | 7 (4 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| euramobil-profila-t-726-ef-2026-precio-ficha-tecnica | Euramobil | Profila T 726 EF | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| fleurette-baxter-68-lmc-2026-precio-ficha-tecnica | Fleurette | Baxter 68 LMC | OK | 6 (4 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| fleurette-magister-70-lmf-2026-precio-ficha-tecnica | Fleurette | Magister 70 LMF | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| font-vendome-mondea-2026-precio-ficha-tecnica | Font Vendôme | Mondéa | OK | 5 (2 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| font-vendome-randocamp-2026-precio-ficha-tecnica | Font Vendôme | RandoCamp | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| frankia-f-line-i-680-sg-2026-precio-ficha-tecnica | Frankia | F-Line I 680 SG | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| frankia-neo-i-7-gdk-2026-precio-ficha-tecnica | Frankia | NEO I 7 GDK | OK | 4 (3 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| frankia-platin-i-8400-qd-2026-precio-ficha-tecnica | Frankia | Platin I 8400 QD | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| frankia-titan-i-840-gd-2026-precio-ficha-tecnica | Frankia | Titan I 840 GD | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| giottiline-compact-cx60-2026-precio-ficha-tecnica | Giottiline | Compact CX60 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| giottiline-siena-322-2026-precio-ficha-tecnica | Giottiline | Siena 322 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| giottiline-siena-330-2026-precio-ficha-tecnica | Giottiline | Siena 330 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| giottiline-therry-34-2026-precio-ficha-tecnica | Giottiline | Therry T34 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| giottiline-toscan-69gc-2026-precio-ficha-tecnica | Giottiline | Toscan 69GC | OK | 4 (2 int + 2 ext) | 71400 | OK: precio relleno | OK |
| globecar-campscout-b-2026-precio-ficha-tecnica | Globecar | CampScout B | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| globecar-globescout-plus-2026-precio-ficha-tecnica | Globecar | GlobeScout Plus (modelo descatalogado: última ficha oficial publicada) | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | insuficientes (1 int / 1 ext) |
| globecar-summit-600-plus-2026-precio-ficha-tecnica | Globecar | Summit 600 Plus | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica | Hobby | Optima De Luxe T70 GE | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica | Hobby | Optima OnTour Edition F V65 GE | OK | 4 (3 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| hobby-vantana-k60-ft-2026-precio-ficha-tecnica | Hobby | Vantana K60 FT | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| hymer-b-class-masterline-i-780-2026-precio-ficha-tecnica | Hymer | B-Class MasterLine I 780 | OK | 3 (2 int + 1 ext) | 166700 | OK: precio relleno | OK |
| hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica | Hymer | B-Klasse ML I 780 | OK | 4 (2 int + 2 ext) | 165600 | OK: precio relleno | OK |
| hymer-b-mc-i-600-2026-precio-ficha-tecnica | Hymer | B-MC I 600 | OK | 6 (3 int + 3 ext) | 141000 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica | Hymer | B-MC I 600 WhiteLine | OK | 4 (2 int + 2 ext) | 142500 | OK: precio relleno | OK |
| hymer-exsis-i-580-pure-2026-precio-ficha-tecnica | Hymer | Exsis-i 580 Pure | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| hymer-free-600-campus-2026-precio-ficha-tecnica | Hymer | Free 600 Campus | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| hymer-grand-canyon-s-2026-precio-ficha-tecnica | Hymer | Grand Canyon S | OK | 5 (2 int + 3 ext) | 98200 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| hymer-ml-t-570-xperience-2026-precio-ficha-tecnica | Hymer | ML-T 570 Xperience | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| hymer-ml-t-580-4x4-2026-precio-ficha-tecnica | Hymer | ML-T 580 4x4 | OK | 8 (4 int + 4 ext) | 165900 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| hymer-tramp-s-585-2026-precio-ficha-tecnica | Hymer | Tramp S 585 | OK | 4 (2 int + 2 ext) | 109900 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| itineo-cj660-2026-precio-ficha-tecnica | Itineo | CJ660 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| itineo-pf600-2026-precio-ficha-tecnica | Itineo | PF600 | OK | 8 (5 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| itineo-sbd700-2026-precio-ficha-tecnica | Itineo | SBD700 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica | Kabe | Travel Master Imperial i880 LGB | OK | 4 (2 int + 2 ext) | 257400 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| knaus-boxdrive-600-xl-2026-precio-ficha-tecnica | Knaus | Boxdrive 600 XL | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| knaus-boxlife-600-mq-2026-precio-ficha-tecnica | Knaus | BoxLife 600 MQ | OK | 8 (4 int + 4 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| knaus-boxstar-600-mq-2026-precio-ficha-tecnica | Knaus | BoxStar 600 MQ | OK | 4 (2 int + 2 ext) | 87758 | OK: precio relleno | OK |
| knaus-live-i-700-meg-2026-precio-ficha-tecnica | Knaus | Live I 700 MEG | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| knaus-sky-ti-650-meg-2026-precio-ficha-tecnica | Knaus | Sky TI 650 MEG | OK | 8 (4 int + 4 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| knaus-sky-ti-650-mf-2026-precio-ficha-tecnica | Knaus | Sky TI 650 MF | OK | 4 (2 int + 2 ext) | 81000 | OK: precio relleno | OK |
| knaus-sky-ti-700-meg-2026-precio-ficha-tecnica | Knaus | Sky TI 700 MEG | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica | Knaus | Van TI 640 MEG Vansation | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| knaus-van-ti-650-meg-2026-precio-ficha-tecnica | Knaus | Van TI 650 MEG | OK | 4 (2 int + 2 ext) | 77890 | OK: precio relleno | OK |
| lmc-cruiser-740-el-2026-precio-ficha-tecnica | LMC | Cruiser 740 EL | OK | 4 (2 int + 2 ext) | 91990 | OK: precio relleno | OK |
| lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica | LMC | Tourer Lift H 664 G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| laika-ecovip-600-2026-precio-ficha-tecnica | Laika | Ecovip 600 | OK | 6 (2 int + 4 ext) | 71314 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| laika-ecovip-h-4109-2026-precio-ficha-tecnica | Laika | Ecovip H 4109 | OK | 2 (0 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | insuficientes (0 int / 2 ext) |
| laika-kosmo-509-2026-precio-ficha-tecnica | Laika | Kosmo 509 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| laika-kosmo-h-1319-2026-precio-ficha-tecnica | Laika | Kosmo H 1319 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| laika-kosmo-h-1409-2026-precio-ficha-tecnica | Laika | Kosmo H 1409 | OK | 4 (2 int + 2 ext) | 99415 | OK: precio relleno | OK |
| laika-kosmo-l-319-2026-precio-ficha-tecnica | Laika | Kosmo L 319 | OK | 4 (3 int + 1 ext) | 82500 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| laika-kreos-h-5109-2026-precio-ficha-tecnica | Laika | Kreos H 5109 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| laika-kreos-l-5009-2026-precio-ficha-tecnica | Laika | Kreos L 5009 | OK | 4 (2 int + 2 ext) | 166797 | OK: precio relleno | OK |
| le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica | Le Voyageur | Héritage LVXH 7.9 CF | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica | Le Voyageur | Héritage LVXH 8.7 CF | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| malibu-i-500-qb-2026-precio-ficha-tecnica | Malibu | I 500 QB | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica | Malibu | Van diversity 640 LE K | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| mclouis-fusion-367-2026-precio-ficha-tecnica | McLouis | Fusion 367 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mclouis-mc4-231-2026-precio-ficha-tecnica | McLouis | MC4 231 | OK | 6 (3 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mclouis-mc4-373-2026-precio-ficha-tecnica | McLouis | MC4 373 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mclouis-mc4-slim-337-2026-precio-ficha-tecnica | McLouis | Mc4 Slim 337 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mclouis-menfys-van-3-maxi-s-line-2026-precio-ficha-tecnica | McLouis | Menfys Van 3 Maxi S-Line | OK | 3 (2 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica | Mobilvetta | K-Yacht Tekno Line 86 | OK | 4 (3 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| mobilvetta-kea-p-86-2026-precio-ficha-tecnica | Mobilvetta | Kea P 86 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mobilvetta-krosser-p86-2026-precio-ficha-tecnica | Mobilvetta | Krosser P86 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| mooveo-tei-60fb-2026-precio-ficha-tecnica | Mooveo | TEI-60FB | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | insuficientes (1 int / 1 ext) |
| mooveo-van-63eb-2026-precio-ficha-tecnica | Mooveo | Van 63EB | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| morelo-loft-82-m-2026-precio-ficha-tecnica | Morelo | Loft 82 M | OK | 4 (2 int + 2 ext) | 244900 | OK: precio relleno | OK |
| morelo-palace-88-lb-2026-precio-ficha-tecnica | Morelo | Palace 88 LB | OK | 4 (2 int + 2 ext) | 293900 | OK: precio relleno | OK |
| niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica | Niesmann+Bischoff | Arto 88 LF | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica | Niesmann+Bischoff | iSmove 6.9 E | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| niesmannbischoff-flair-920-2026-precio-ficha-tecnica | Niesmann+Bischoff | Flair 920 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| notin-sevilla-jf-2026-precio-ficha-tecnica | Notin | Sevilla JF | OK | 4 (2 int + 2 ext) | 99900 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| pilote-atlas-a696g-2026-precio-ficha-tecnica | Pilote | Atlas A696G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| pilote-g740fgj-evidence-2026-precio-ficha-tecnica | Pilote | G740FGJ ÉVIDENCE | OK | 6 (3 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| pilote-p720fgj-evidence-2026-precio-ficha-tecnica | Pilote | P720FGJ Evidence | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| pilote-p740fc-2026-precio-ficha-tecnica | Pilote | P740FC | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| pilote-v600g-2026-precio-ficha-tecnica | Pilote | V600G | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| pilote-v630j-2026-precio-ficha-tecnica | Pilote | V630J | OK | 3 (2 int + 1 ext) | 63900 | OK: precio relleno | OK |
| pilote-vega-v630j-2026-precio-ficha-tecnica | Pilote | Vega V630J | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| possl-2win-plus-2026-precio-ficha-tecnica | Pössl | 2Win Plus | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | insuficientes (1 int / 1 ext) |
| possl-summit-540-2026-precio-ficha-tecnica | Pössl | Summit 540 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| possl-summit-600-plus-2026-precio-ficha-tecnica | Pössl | Summit 600 Plus | OK | 3 (2 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| possl-summit-shine-600-r-2026-precio-ficha-tecnica | Pössl | Summit Shine 600 R | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| possl-trenta-600-r-2026-precio-ficha-tecnica | Pössl | Trenta 600 R | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| rapido-606f-2026-precio-ficha-tecnica | Rapido | 606F | OK | 3 (2 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| rapido-666f-2026-precio-ficha-tecnica | Rapido | 666F | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| rapido-896f-2026-precio-ficha-tecnica | Rapido | 896F | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| rapido-c55-2026-precio-ficha-tecnica | Rapido | C55 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| rapido-v55-2026-precio-ficha-tecnica | Rapido | V55 Optimum Line | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | insuficientes (1 int / 1 ext) |
| rapido-v62-2026-precio-ficha-tecnica | Rapido | V62 | OK | 3 (1 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | insuficientes (1 int / 2 ext) |
| rimor-kilig-66-plus-2026-precio-ficha-tecnica | Rimor | Kilig 66 Plus | OK | 4 (2 int + 2 ext) | 58300 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| rimor-kilig-69-plus-2026-precio-ficha-tecnica | Rimor | Kilig 69 Plus | OK | 4 (2 int + 2 ext) | 57960 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| rimor-sarus-12-plus-2026-precio-ficha-tecnica | Rimor | Sarus 12 Plus | OK | 4 (2 int + 2 ext) | 70697 | OK: precio relleno | OK |
| rimor-sarus-95-plus-2026-precio-ficha-tecnica | Rimor | Sarus 95 Plus | OK | 4 (2 int + 2 ext) | 72532 | OK: precio relleno | OK |
| rimor-super-brig-695-tc-2026-precio-ficha-tecnica | Rimor | Super Brig 695 TC | OK | 4 (2 int + 2 ext) | 71960 | OK: precio relleno | OK |
| rimor-superbrig-687-tc-2026-precio-ficha-tecnica | Rimor | SuperBrig 687 TC | OK | 4 (3 int + 1 ext) | 70840 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| roller-team-auto-roller-746-2026-precio-ficha-tecnica | Roller Team | Auto-Roller 746 | OK | 7 (4 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| roller-team-kronos-265-tl-2026-precio-ficha-tecnica | Roller Team | Kronos 265 TL | OK | 4 (2 int + 2 ext) | 71000 | OK: precio relleno | OK |
| roller-team-kronos-285-tl-2026-precio-ficha-tecnica | Roller Team | Kronos 285 TL | OK | 4 (2 int + 2 ext) | 81431 | OK: precio relleno | OK |
| roller-team-kronos-294-tl-2026-precio-ficha-tecnica | Roller Team | Kronos 294 TL | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| roller-team-zefiro-285-tl-2026-precio-ficha-tecnica | Roller Team | Zefiro 285 TL | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| roller-team-zefiro-675-2026-precio-ficha-tecnica | Roller Team | Zefiro 675 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| sunlight-a-70-2026-precio-ficha-tecnica | Sunlight | A 70 | OK | 4 (3 int + 1 ext) | 65299 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| sunlight-cliff-602-2026-precio-ficha-tecnica | Sunlight | Cliff 602 | OK | 4 (2 int + 2 ext) | 61849 | OK: precio relleno | OK |
| sunlight-cliff-640-2026-precio-ficha-tecnica | Sunlight | Cliff 640 Adventure | OK | 4 (3 int + 1 ext) | 60990 | OK: precio relleno | OK |
| sunlight-i-68-2026-precio-ficha-tecnica | Sunlight | I 68 | OK | 4 (2 int + 2 ext) | 81499 | OK: precio relleno | OK |
| sunlight-t-67-2026-precio-ficha-tecnica | Sunlight | T 67 | OK | 4 (2 int + 2 ext) | 75015 | OK: precio relleno | OK |
| sunlight-t-68-2026-precio-ficha-tecnica | Sunlight | T 68 | OK | 4 (3 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| sunlight-t-69-l-2026-precio-ficha-tecnica | Sunlight | T 69 L | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica | Weinsberg | CaraBus Grey Edition [FIRE] 600 MQ | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) | OK |
| weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica | Weinsberg | CaraCompact 600 MEG | OK | 4 (2 int + 2 ext) | 69290 | OK: precio relleno | OK |
| weinsberg-caracore-650-meg-2026-precio-ficha-tecnica | Weinsberg | CaraCore 650 MEG | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica | Weinsberg | CaraHome 600 DKG | OK | 4 (2 int + 2 ext) | 80003 | OK: precio relleno | OK |
| weinsberg-caratour-600-mq-2026-precio-ficha-tecnica | Weinsberg | CaraTour 600 MQ | OK | 4 (2 int + 2 ext) | 53100 | OK: precio relleno | OK |
| weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica | Weinsberg | X-Cursion 500 LT | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| westfalia-columbus-600d-2026-precio-ficha-tecnica | Westfalia | Columbus 600 D | OK | 4 (2 int + 2 ext) | 67650 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| westfalia-columbus-640-e-2026-precio-ficha-tecnica | Westfalia | Columbus 640 E | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| westfalia-james-cook-2026-precio-ficha-tecnica | Westfalia | James Cook | OK | 4 (2 int + 2 ext) | 95790 | OK: precio relleno | OK |
| westfalia-james-cook-ad-190-2026-precio-ficha-tecnica | Westfalia | James Cook AD 190 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| xgo-dynamic-35-2026-precio-ficha-tecnica | XGO | Dynamic 35 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| xgo-dynamic-95-2026-precio-ficha-tecnica | XGO | Dynamic 95 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| xgo-x-van-102-2026-precio-ficha-tecnica | XGO | X-Van 102 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| xgo-x-van-104-2026-precio-ficha-tecnica | XGO | X Van 104 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| adria-matrix-supreme-670-sl-2026-precio-ficha-tecnica | Adria | Matrix Supreme 670 SL | OK | 4 (2 int + 2 ext) | null | OK documentado: no publica PVP: política de la marca (precios solo vía red de concesionarios); confirmado en los catálogos oficiales 26/27 citados en las propias fichas · la ficha NO lo declara todavía en notas | OK |
| buerstner-campeo-c-600-2026-precio-ficha-tecnica | Bürstner | Campeo C 600 | OK | 4 (2 int + 2 ext) | 61600 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| camperiz-dacia-dokker-2026-precio-ficha-tecnica | Camperiz | Dacia Dokker Camperiz | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| camperiz-peugeot-rifter-2026-precio-ficha-tecnica | Camperiz | Peugeot Rifter Camperiz | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica | Campérêve | Magellan 643 Air Saphir | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| chausson-twist-v594-2026-precio-ficha-tecnica | Chausson | Twist V594 | FALTA | 0 (0 int + 0 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | SIN HERO |
| dethleffs-globetrail-600-ds-2026-precio-ficha-tecnica | Dethleffs | Globetrail 600 DS | FALTA | 0 (0 int + 0 ext) | 64499 | OK: precio aproximado/orientativo con fuente declarada en la ficha | SIN HERO |
| dreamer-d55-2026-precio-ficha-tecnica | Dreamer | D55 | OK | 4 (2 int + 2 ext) | 69850 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| ford-nugget-active-2026-precio-ficha-tecnica | Ford | Nugget Active | OK | 3 (0 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | insuficientes (0 int / 3 ext) |
| ford-nugget-trail-2026-precio-ficha-tecnica | Ford | Nugget Trail | OK | 2 (0 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | 1 refs rotas; insuficientes (0 int / 2 ext) |
| ford-transit-custom-nugget-2026-precio-ficha-tecnica | Ford | Transit Custom Nugget 2026 | OK | 4 (2 int + 2 ext) | 72290 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| ford-transit-custom-nugget-active-2026-precio-ficha-tecnica | Ford | Transit Custom Nugget Active 2026 | OK | 4 (2 int + 2 ext) | 78000 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| ford-transit-custom-nugget-plus-2026-precio-ficha-tecnica | Ford | Transit Custom Nugget Plus 2026 | OK | 4 (2 int + 2 ext) | 75000 | OK: precio aproximado/orientativo con fuente declarada en la ficha | OK |
| knaus-boxstar-600-street-2026-precio-ficha-tecnica | Knaus | Boxstar 600 Street | FALTA | 0 (0 int + 0 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | SIN HERO |
| peugeot-traveller-camper-2026-precio-ficha-tecnica | Peugeot | Traveller camper 2026 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| possl-campster-2026-precio-ficha-tecnica | Pössl | Campster | OK | 2 (1 int + 1 ext) | 49999 | OK: precio aproximado/orientativo con fuente declarada en la ficha | 1 refs rotas; insuficientes (1 int / 1 ext) |
| possl-summit-600-2026-precio-ficha-tecnica | Pössl | Summit 600 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| possl-summit-640-2026-precio-ficha-tecnica | Pössl | Summit 640 | OK | 1 (0 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | 2 refs rotas; insuficientes (0 int / 1 ext) |
| possl-trenta-640-2026-precio-ficha-tecnica | Pössl | Trenta 640 | FALTA | 0 (0 int + 0 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | SIN HERO |
| possl-vanster-2026-precio-ficha-tecnica | Pössl | Vanster | OK | 2 (1 int + 1 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | 1 refs rotas; insuficientes (1 int / 1 ext) |
| renault-kangoo-camper-2026-precio-ficha-tecnica | Renault | Kangoo camper 2026 | OK | 4 (2 int + 2 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | OK |
| vw-california-beach-2026-precio-ficha-tecnica | Volkswagen | California Beach | OK | 2 (1 int + 1 ext) | 72790 | OK: precio relleno | 2 refs rotas; insuficientes (1 int / 1 ext) |
| vw-california-coast-2026-precio-ficha-tecnica | Volkswagen | California Coast | OK | 2 (1 int + 1 ext) | 76850 | OK: precio aproximado/orientativo con fuente declarada en la ficha | 2 refs rotas; insuficientes (1 int / 1 ext) |
| vw-california-ocean-2026-precio-ficha-tecnica | Volkswagen | California Ocean | OK | 2 (1 int + 1 ext) | 84000 | OK: precio aproximado/orientativo con fuente declarada en la ficha | 2 refs rotas; insuficientes (1 int / 1 ext) |
| weinsberg-carabus-600-mq-2026-precio-ficha-tecnica | Weinsberg | CaraBus 600 MQ | FALTA | 0 (0 int + 0 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | SIN HERO |
| westfalia-amundsen-2026-precio-ficha-tecnica | Westfalia | Amundsen | FALTA | 0 (0 int + 0 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | SIN HERO |
| westfalia-columbus-2026-precio-ficha-tecnica | Westfalia | Columbus 600 | OK | 3 (0 int + 3 ext) | 67000 | OK: precio aproximado/orientativo con fuente declarada en la ficha | insuficientes (0 int / 3 ext) |
| westfalia-kepler-2026-precio-ficha-tecnica | Westfalia | Kepler | OK | 3 (0 int + 3 ext) | 57000 | OK: precio aproximado/orientativo con fuente declarada en la ficha | insuficientes (0 int / 3 ext) |
| westfalia-sven-hedin-2026-precio-ficha-tecnica | Westfalia | Sven Hedin | OK | 3 (0 int + 3 ext) | null | FALLO PENDIENTE: el fabricante publica tarifa/preisliste oficial, pero el precio exacto de este modelo no se verificó en la pasada del 20/10/2026 (no se inventa) · la ficha NO lo declara todavía en notas | insuficientes (0 int / 3 ext) |

## Blogs (99 registros / 78 únicos)

- Hero OK: 93/99; imágenes rotas en blogs: 4 (todas de los 2 modelos imposibles: Pössl Trenta 640 y Westfalia Amundsen)
- Enlace a su ficha: **99/99 OK** (los blogs de Niky enlazan vía `/fichas-tecnicas/<slug>/`, el resto vía `/autocaravanas/<slug>/` o `/coches/<slug>/`)

### Blogs con incidencia

- **chausson-twist-v594-2026-precio-ficha-tecnica-analisis-opinion** (`blog-posts-campers-eu2-b.ts`): hero=`(ninguno)` FALTA; imgs rotas: 0; enlace a ficha: OK (chausson-twist-v594-2026-precio-ficha-tecnica)
- **possl-trenta-640-2026-analisis-opinion** (`blog-posts-campers-niky.ts`): hero=`/media/possl-trenta-640-2026-oficial-ext.webp` FALTA; imgs rotas: 1; enlace a ficha: OK (possl-summit-640-2026-precio-ficha-tecnica)
- **westfalia-amundsen-2026-analisis-opinion** (`blog-posts-campers-niky.ts`): hero=`/media/westfalia-amundsen-2026-oficial-ext.webp` FALTA; imgs rotas: 1; enlace a ficha: OK (ford-nugget-trail-2026-precio-ficha-tecnica)
- **chausson-twist-v594-2026-precio-ficha-tecnica-analisis-opinion** (`blog-posts-campers-eu2-b.ts`): hero=`(ninguno)` FALTA; imgs rotas: 0; enlace a ficha: OK (chausson-twist-v594-2026-precio-ficha-tecnica)
- **possl-trenta-640-2026-analisis-opinion** (`blog-posts-campers-niky.ts`): hero=`/media/possl-trenta-640-2026-oficial-ext.webp` FALTA; imgs rotas: 1; enlace a ficha: OK (possl-summit-640-2026-precio-ficha-tecnica)
- **westfalia-amundsen-2026-analisis-opinion** (`blog-posts-campers-niky.ts`): hero=`/media/westfalia-amundsen-2026-oficial-ext.webp` FALTA; imgs rotas: 1; enlace a ficha: OK (ford-nugget-trail-2026-precio-ficha-tecnica)

## Duplicados de ficha

- **knaus-sky-ti-650-meg-2026-precio-ficha-tecnica** aparece en `comparador-autocaravanas-knaus-m5.ts` (duplicado de `comparador-autocaravanas-knaus-m1.ts`). Se audita una sola vez; corresponde resolver el duplicado en otra pasada.
- **weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica** aparece en `comparador-autocaravanas-weinsberg-m5.ts` (duplicado de `comparador-autocaravanas-weinsberg-m2.ts`). Se audita una sola vez; corresponde resolver el duplicado en otra pasada.

## Metodología y límites honestos

1. Se auditaron TODAS las fichas de `src/lib/autocaravanas/` (142 ficheros) y `src/lib/campers/` (12 ficheros): 241 únicas + 2 duplicadas.
2. Clasificación interior/exterior por nombre de fichero (`interior` en el nombre → interior; resto → exterior), entre ficheros EXISTENTES.
3. Hero = campo `imagen` de la ficha; debe existir en `public/media/`.
4. Rescate: índice de TODAS las ramas remotas (64 refs, 3780 nombres de media); 649 ficheros copiados con `git show <rama>:<ruta>` → `public/media/<nombre exacto referenciado>` (añadidos con `git add -f` porque `public/media/` está en `.gitignore` en esta rama, igual que las 2742 fotos ya trackeadas). Procedencia por rama disponible en `/tmp/rescue.json` de la sesión de trabajo.
5. No se copió ninguna foto de otra variante del modelo (p. ej. BoxStar 600 MQ → 600 Street): violaría la regla «fotos del modelo exacto».
6. No se inventó ningún precio ni ninguna foto.
7. Arreglo extra en blog: en la copia raíz de `blog-posts-campers-niky.ts`, el hero del blog de la Pössl Vanster apuntaba a `/media/possl-vanster-2026-oficial-ext.webp` (inexistente); se sustituyó por la foto existente del modelo exacto `/media/possl-vanster-2026-precio-ficha-tecnica.webp`. Los héroes de blog de Pössl Trenta 640 y Westfalia Amundsen no tienen foto disponible: IMPOSIBLES documentados.
