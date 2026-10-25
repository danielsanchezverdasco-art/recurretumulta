# Parte s20-07 — coordinador único ORD-1525

Rama nueva `dedupe-8g-s20-07` (no existía: 404 previo), base `dedupe-8g-merlin` @bd1ecdb3ff08c3f17067d117938687437b8f4286, un commit, sin force, sin main, sin Netlify, sin Cloudflare, sin Convex.
Commit nuevo: `0b096f959b27095a800d43f73c7fde63480f3a2a`, verificado por GET de la ref (la ref apunta al mismo sha).
Puestos 428–474: 24/47 pusheados, 23 saltados a la siguiente ronda (nada perdido). Puesto 475 NO tocado: es el índice /blog/, no un post.
Medición: filtro establecido t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:*/créditos, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos; el filtro NO mide texto de anclas). Los pusheados: 0/0 en prosa contra la vieja fresca re-extraída de la cabeza vigente, 0 cruzado por lote de 2, estructura idéntica (href/img/tablas). Solo se aplicaron title/excerpt/content a todas las copias. Los lite no se tocaron.

## Blogs pusheados (24)

| Slug | Título / extracto | Prosa vieja → nueva | Ficheros | Modo |
|---|---|---|---|---|
| xpeng-g6-vs-tesla-model-y-cual-comprar | 52/118 | 790 → 947 | blog-posts-duelos.ts | full |
| xpeng-x9-2026-precio-europa | 47/139 | 588 → 655 | blog-posts-xpeng-a.ts | full |
| eriba-touring-530-2026-precio-ficha-tecnica | 55/132 | 607 → 727 | blog-posts-caravanas-lote1.ts | full |
| xpeng-p7-nueva-generacion-europa-confirmado-2026 | 48/150 | 570 → 638 | blog-posts-radar-20261022.ts | full |
| omoda-x-prototipo-presentacion-wuhu-2026 | 57/150 | 494 → 498 | blog-posts-radar-20261022-1458.ts | full |
| nissan-z-kaze-concept-t-top-2026 | 56/133 | 438 → 412 | blog-posts-radar-20261022.ts | full |
| burstner-averso-535-tl-2026-precio-ficha-tecnica | 56/153 | 608 → 740 | blog-posts-caravanas-lote1.ts | full |
| morelo-palace-88-lb-precio-ficha-tecnica | 52/145 | 1490 → 1388 | blog-posts-autocaravanas-lote125-g05.ts | full |
| dethleffs-alpa-i-7820-2-precio-ficha-tecnica | 56/155 | 1542 → 1593 | blog-posts-autocaravanas-lote125-g12.ts | full |
| segway-ninebot-gt3-pro-e | 58/134 | 462 → 646 | blog-posts-patinetes-exp-p7.ts | full |
| dreamer-d62-select-precio-ficha-tecnica | 51/148 | 865 → 911 | blog-posts-autocaravanas-lote3.ts | full |
| sunlight-t-69-l-precio-ficha-tecnica | 51/148 | 843 → 946 | blog-posts-autocaravanas-lote4.ts | full |
| aprilia-esr2-evo | 50/120 | 528 → 576 | blog-posts-patinetes-exp-p10.ts | full |
| omoda-c7-2025-precio | 50/145 | 507 → 561 | blog-posts-coches-exp25.ts | full |
| notin-sevilla-jf-precio-ficha-tecnica | 46/131 | 1042 → 1057 | blog-posts-autocaravanas-lote4.ts | prose-only |
| icar-03-2025-precio | 43/151 | 533 → 616 | blog-posts-coches-exp25.ts | full |
| leapmotor-b05-vs-gac-aion-ut-cual-comprar | 49/153 | 520 → 612 | blog-posts-duelos.ts | full |
| fleurette-magister-70-lmf-precio-ficha-tecnica | 49/154 | 1094 → 1146 | blog-posts-autocaravanas-lote4.ts | full |
| soflow-so4-pro-gen-2 | 46/152 | 495 → 519 | blog-posts-patinetes-exp-p5.ts | full |
| pilote-vega-v630j-precio-ficha-tecnica | 58/151 | 1166 → 1168 | blog-posts-autocaravanas-lote3.ts | full |
| weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica | 55/150 | 694 → 808 | blog-posts-caravanas-lote1.ts | full |
| campereve-cap-land-precio-ficha-tecnica | 50/153 | 955 → 1079 | blog-posts-autocaravanas-lote4.ts | full |
| chery-volt-dragon-carga-1440-kw | 50/152 | 531 → 570 | blog-posts-radar-20261023d.ts | full |
| rimor-kilig-66-plus-precio-ficha-tecnica | 55/144 | 840 → 886 | blog-posts-autocaravanas-lote4.ts | full |

Ficheros del commit (14): blog-posts-autocaravanas-lote125-g05.ts, blog-posts-autocaravanas-lote125-g12.ts, blog-posts-autocaravanas-lote3.ts, blog-posts-autocaravanas-lote4.ts, blog-posts-caravanas-lote1.ts, blog-posts-coches-exp25.ts, blog-posts-duelos.ts, blog-posts-patinetes-exp-p10.ts, blog-posts-patinetes-exp-p5.ts, blog-posts-patinetes-exp-p7.ts, blog-posts-radar-20261022-1458.ts, blog-posts-radar-20261022.ts, blog-posts-radar-20261023d.ts, blog-posts-xpeng-a.ts.

Nota: Notin Sevilla JF es el único lote solo-prosa cuya fusión conservó la estructura exacta (enlaces, imágenes, tablas y *Fuentes:* intactos) y por eso se pusheó fusionado; el resto de lotes solo-prosa se rechazaron por la causa siguiente, no como sustitución completa (nunca se aplica un JSON solo-prosa como contenido entero).

## Saltados a la siguiente ronda (23, nada perdido, viejas intactas)

El coordinador local daba 47/47 0/0/0, pero medía contra viejas de su clon local (dedupe-8g-slice3-wt, con modificaciones sin commitear de slice3, cautela 13 del handover), no contra la cabeza vigente. Contra la vieja fresca de bd1ecdb3, 23 lotes no pasan y van a la siguiente ronda, en dos grupos:

### A) Fallo de medición contra la vieja fresca (14): reescribir contra la vieja del head, no es un ajuste de filtro

- `chausson-650-first-line-precio-ficha-tecnica`: measurement 83/61 for chausson-650-first-line-precio-ficha-tecnica (not 0/0).
- `mg-hs-hybrid-plus-225-cv-precio-espana`: measurement 10/9 for mg-hs-hybrid-plus-225-cv-precio-espana (not 0/0).
- `multa-sin-cinturon-seguridad-recurrir`: measurement 30/29 for multa-sin-cinturon-seguridad-recurrir (not 0/0).
- `volkswagen-caddy-california-2025-precio-camper`: measurement 174/174 for volkswagen-caddy-california-2025-precio-camper (not 0/0).
- `xpeng-g9-2026-restyling-precio-espana`: measurement 7/3 for xpeng-g9-2026-restyling-precio-espana (not 0/0).
- `lancia-gamma-2026-precio-autonomia`: measurement 179/179 for lancia-gamma-2026-precio-autonomia (not 0/0).
- `pilote-p720fgj-evidence-precio-ficha-tecnica`: measurement 15/15 for pilote-p720fgj-evidence-precio-ficha-tecnica (not 0/0).
- `fiat-500-iride`: measurement 45/45 for fiat-500-iride (not 0/0).
- `recurso-reposicion-multa-modelo-2026`: measurement 25/25 for recurso-reposicion-multa-modelo-2026 (not 0/0).
- `flying-flea-c6-moto-electrica-royal-enfield-5990-euros`: measurement 15/9 for flying-flea-c6-moto-electrica-royal-enfield-5990-euros (not 0/0).
- `westfalia-columbus-600d-precio-ficha-tecnica`: measurement 8/1 for westfalia-columbus-600d-precio-ficha-tecnica (not 0/0).
- `niu-nqi-sport-scooter-electrico-1999-euros-gama-2026`: measurement 114/114 for niu-nqi-sport-scooter-electrico-1999-euros-gama-2026 (not 0/0).
- `cyclone-battlo-125-naked-precio`: measurement 54/54 for cyclone-battlo-125-naked-precio (not 0/0).
- `jaecoo-j6-2025-precio`: measurement 44/43 for jaecoo-j6-2025-precio (not 0/0).

Los residuos grandes son prosa real compartida (p. ej. Chausson 650: 83/61, con frases de prosa; Caddy California: 174/174; Lancia Gamma: 179/179; NIU NQi Sport: 114/114; Cyclone Battlo: 54/54; Jaecoo J6: 44/43), no artefactos de plantilla. La siguiente ronda debe reescribirlos contra la vieja fresca.

### B) Fusión solo-prosa que rompería la estructura (9): fusión por líneas en la siguiente ronda, conservando enlaces y *Fuentes:*

- `benimar-sport-340-up-precio-ficha-tecnica`: structural mismatch merged benimar-sport-340-up-precio-ficha-tecnica.
- `pilote-v600g-2026-precio-ficha-tecnica`: structural mismatch merged pilote-v600g-2026-precio-ficha-tecnica.
- `burstner-campeo-td-690-g-precio-ficha-tecnica`: structural mismatch merged burstner-campeo-td-690-g-precio-ficha-tecnica.
- `bmw-ix3-m60-xdrive-2026`: structural mismatch merged bmw-ix3-m60-xdrive-2026.
- `benimar-mileo-243-2026-precio-ficha-tecnica`: structural mismatch merged benimar-mileo-243-2026-precio-ficha-tecnica.
- `hobby-optima-ontour-edition-f-v65-ge-precio-ficha-tecnica`: structural mismatch merged hobby-optima-ontour-edition-f-v65-ge-precio-ficha-tecnica.
- `ci-horon-84-xt-precio-ficha-tecnica`: structural mismatch merged ci-horon-84-xt-precio-ficha-tecnica.
- `dethleffs-cgo-495-qsk-2026-precio-ficha-tecnica`: structural mismatch merged dethleffs-cgo-495-qsk-2026-precio-ficha-tecnica.
- `dethleffs-globebus-performance-4x4-t-46-precio-ficha-tecnica`: structural mismatch merged dethleffs-globebus-performance-4x4-t-46-precio-ficha-tecnica.

Causa verificada en Benimar Sport 340 UP: la fusión por bloques descarta bloques viejos de prosa que portan enlaces (ficha ×2, historia Benimar ×3, Caravaning Plaza ×1, YouTube ×1, analizador ×1) y pierde el bloque *Fuentes:*. Por eso el driver rechaza la fusión en vez de pushear una estructura rota. La siguiente ronda debe fusionar por líneas preservando enlaces, imágenes, tablas y *Fuentes:*, o reescribir en contenido completo.

Cautelas del handover aplicadas y pendientes: 444 Pilote V600G emparejado por su slug interno (sin año) como exige el handover — queda en el grupo B para la siguiente ronda; 453 Benimar Mileo 243: solo se tocó el slug exacto en merlin1.ts (el segundo prose de g08, con slug distinto y texto diferente, NO se tocó) — queda en el grupo B; 467 Westfalia Columbus 600 D: se comprobaron ambas copias (g12.ts y lote125.ts, contenido idéntico) — queda en el grupo A (8/1) y la siguiente ronda debe resolver ambas copias juntas; 469 Dethleffs (1532→1062) queda en el grupo B y su chequeo de integridad (que la prosa nueva no esté truncada) sigue pendiente en la siguiente ronda; 470 Cyclone (953→669) queda en el grupo A; 432–435 anclas acortadas (no URLs) respetadas en los pusheados; 450–451 (5★ G9 solo en tabla vieja; iX3 sin Euro NCAP ni precio anunciado) respetados en los pusheados y pendientes según su grupo en los saltados; 459 plantilla del escrito y promo del analizador quedan intactos en la vieja (lote en grupo A).

Siguiente puesto fuera del slice: 476 (s20-08, ya en cola). La cola sigue en serie, y quedo a tu disposición para seguir con lo que me pidas.
