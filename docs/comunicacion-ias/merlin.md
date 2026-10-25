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
# Parte s20-08 — coordinador único ORD-1525

Rama nueva `dedupe-8g-s20-08` (no existía: 404 previo), base `dedupe-8g-merlin` @bd1ecdb3ff08c3f17067d117938687437b8f4286, un commit, sin force, sin main, sin Netlify, sin Cloudflare, sin Convex.
Commit nuevo: `b713f1a9514094082db4d13281f34334eb61352f`, verificado por GET de la ref (la ref apunta al mismo sha).
Puestos 476–523: 42/48 pusheados, 6 saltados a la siguiente ronda (nada perdido).
Medición: filtro establecido t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:*/créditos, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos; el filtro NO mide texto de anclas). Los pusheados: 0/0 en prosa contra la vieja fresca re-extraída de la cabeza vigente, 0 cruzado por lote de 2, estructura idéntica (href/img/tablas). Solo se aplicaron title/excerpt/content a todas las copias. Los lite no se tocaron.

Comprobación de solapes antes de pushear: la cabeza vigente de `dedupe-8g-slice2` (@92dd5df958ea4c2b4dfe3d76afad6781dec123a8) solo cubre en 0913 los lotes 381–400 (mensajes de commit verificados); el puesto 510 (weinsberg-x-cursion-500-lt) se comprobó expresamente: su entrada en la cabeza de slice2 es byte-idéntica a la de la cabeza de merlin (mismo título viejo, mismo contenido de 8.323 caracteres), luego slice2 NO lo había entregado y se pusheó aquí sin duplicar. Los rangos de slice3 (622–862), slice4 (864–897), s20-16 (897–909) y s20-17 (911–958) no solapan con 476–523.

## Blogs pusheados (42)

| Slug | Título / extracto | Prosa vieja → nueva | Ficheros |
|---|---|---|---|
| chausson-640-titanium-2026-precio-ficha-tecnica | 50/143 | 889 → 948 | blog-posts-autocaravanas-merlin1.ts |
| mooveo-van-63eb-precio-ficha-tecnica | 51/142 | 1017 → 1026 | blog-posts-autocaravanas-lote4.ts |
| dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica | 58/142 | 965 → 1054 | blog-posts-autocaravanas-merlin1.ts |
| benimar-benivan-120-up-precio-ficha-tecnica | 53/127 | 1057 → 1056 | blog-posts-autocaravanas-lote4.ts |
| knaus-sport-450-fu-2026-precio-ficha-tecnica | 53/123 | 862 → 940 | blog-posts-caravanas-lote1.ts |
| challenger-328-precio-ficha-tecnica | 57/151 | 789 → 885 | blog-posts-autocaravanas-lote3.ts |
| possl-trenta-600-r-precio-ficha-tecnica | 57/143 | 1011 → 1070 | blog-posts-autocaravanas-lote3.ts |
| omoda-jaecoo-record-ventas-septiembre-2026 | 51/150 | 564 → 614 | blog-posts-motor-2026-h.ts |
| renault-600-millones-electricos-espana | 50/154 | 473 → 475 | blog-posts-motor-2026-l.ts |
| westfalia-james-cook-ad-190-precio-ficha-tecnica | 58/145 | 979 → 968 | blog-posts-autocaravanas-lote3.ts |
| xiaomi-yu7-suv-electrico-llegada-europa | 54/138 | 723 → 768 | blog-posts-motor-chinos-c.ts |
| zero-s-vs-can-am-pulse-cual-comprar | 52/119 | 639 → 733 | blog-posts-duelos-motos.ts |
| aion-v-vs-deepal-s05-cual-comprar | 52/140 | 626 → 826 | blog-posts-duelos.ts |
| possl-summit-540-precio-ficha-tecnica | 53/152 | 1032 → 1117 | blog-posts-autocaravanas-lote3.ts |
| anfac-septiembre-2026-record-electrificacion-model-3-lider | 57/150 | 621 → 675 | blog-posts-motor-2026-g.ts |
| fiat-grizzly-fastback-paris-2026 | 57/152 | 518 → 557 | blog-posts-motor-2026-o.ts |
| gotrax-g3-plus | 41/149 | 619 → 686 | blog-posts-patinetes-exp-p5.ts |
| hobby-excellent-540-wlu-2026-precio-ficha-tecnica | 50/144 | 859 → 915 | blog-posts-caravanas-lote1.ts |
| morbidelli-c1002v-2025-precio | 51/136 | 519 → 654 | blog-posts-motos-exp-m27.ts |
| toyota-corolla-cross-2026-precio-restyling | 55/138 | 447 → 547 | blog-posts-toyota-a.ts |
| dethleffs-beduin-scandinavia-550-bet-2026-precio-ficha-tecnica | 56/127 | 739 → 947 | blog-posts-caravanas-lote1.ts |
| wottan-storm-125-2025-precio | 47/136 | 572 → 615 | blog-posts-motos-exp-m28.ts |
| benda-rock-300-2026 | 53/146 | 891 → 1084 | blog-posts-prioridad-20261014.ts |
| dreamer-d68-up-precio-ficha-tecnica | 53/138 | 860 → 918 | blog-posts-autocaravanas-lote3.ts |
| multa-aparcamiento-zona-azul-recurrir | 53/149 | 538 → 582 | blog-data.ts |
| sunlight-cliff-640-2026-precio-ficha-tecnica | 59/135 | 1048 → 1232 | blog-posts-autocaravanas-merlin2.ts |
| carado-v-337-precio-ficha-tecnica | 52/132 | 812 → 847 | blog-posts-autocaravanas-lote3.ts |
| hongqi-g919-4x4-electrico-831-cv | 45/133 | 743 → 827 | blog-posts-modelos-desconocidos.ts |
| hobby-vantana-k60-ft-precio-ficha-tecnica | 55/153 | 1012 → 1113 | blog-posts-autocaravanas-lote3.ts |
| dongfeng-vigo-mage-phev-precio-espana-ficha | 57/131 | 668 → 822 | blog-posts-motor-2026-h.ts |
| weinsberg-x-cursion-500-lt-precio-ficha-tecnica | 54/134 | 1071 → 1304 | blog-posts-autocaravanas-lote4.ts |
| hobby-prestige-560-ul-2026-precio-ficha-tecnica | 60/148 | 739 → 1167 | blog-posts-caravanas-lote1.ts |
| kove-450rr-2024-precio | 51/135 | 570 → 771 | blog-posts-motos-exp-m27.ts |
| mobilvetta-krosser-p86-precio-ficha-tecnica | 57/149 | 999 → 1126 | blog-posts-autocaravanas-lote4.ts |
| kove-800x-2025-precio | 48/139 | 528 → 788 | blog-posts-motos-exp-m27.ts |
| westfalia-james-cook-precio-ficha-tecnica | 53/135 | 1283 → 1533 | blog-posts-autocaravanas-lote125-g01.ts, blog-posts-autocaravanas-lote125.ts |
| adria-aviva-522-pt-2026-precio-ficha-tecnica | 51/137 | 896 → 987 | blog-posts-caravanas-lote1.ts |
| bmw-ce-02-vs-super-soco-cpx-cual-comprar | 48/141 | 575 → 644 | blog-posts-duelos-motos.ts |
| honda-em1-e-vs-yamaha-neos-cual-comprar | 56/139 | 586 → 796 | blog-posts-duelos-motos.ts |
| hymer-b-mc-i-600-2026-precio-ficha-tecnica | 55/125 | 949 → 1058 | blog-posts-autocaravanas-merlin1.ts |
| byd-seagull-2027-carga-flash-9-minutos | 49/142 | 981 → 1088 | blog-posts-radar-20261019.ts |
| malibu-van-diversity-640-le-k-precio-ficha-tecnica | 55/134 | 939 → 1047 | blog-posts-autocaravanas-lote3.ts |

Ficheros del commit (22): blog-data.ts, blog-posts-autocaravanas-lote125-g01.ts, blog-posts-autocaravanas-lote125.ts, blog-posts-autocaravanas-lote3.ts, blog-posts-autocaravanas-lote4.ts, blog-posts-autocaravanas-merlin1.ts, blog-posts-autocaravanas-merlin2.ts, blog-posts-caravanas-lote1.ts, blog-posts-duelos-motos.ts, blog-posts-duelos.ts, blog-posts-modelos-desconocidos.ts, blog-posts-motor-2026-g.ts, blog-posts-motor-2026-h.ts, blog-posts-motor-2026-l.ts, blog-posts-motor-2026-o.ts, blog-posts-motor-chinos-c.ts, blog-posts-motos-exp-m27.ts, blog-posts-motos-exp-m28.ts, blog-posts-patinetes-exp-p5.ts, blog-posts-prioridad-20261014.ts, blog-posts-radar-20261019.ts, blog-posts-toyota-a.ts.

## Saltados a la siguiente ronda (6, nada perdido, viejas intactas) — BLOQUEOS PARA GROK, NO PRESENTADOS COMO LIMPIOS

Los 6 se rechazaron por clase «partial»: su contenido nuevo no conserva la estructura de la vieja fresca (enlaces, imágenes o tablas distintos), así que no se aplicaron. Verificación propia contra la vieja fresca de bd1ecdb3 (no solo la del coordinador local):

- `lexus-gx-550-precio-opiniones` (puesto 501, BLOQUEO): la vieja fresca es contenido Lexus genuino (0 menciones de Aprilia, hero Lexus GX 550, 23 tablas, enlaces Lexus/Land Cruiser/Defender) y el contenido nuevo trae enlaces y tablas de Aprilia (8 tablas). Prosa nueva con solo las cifras del título/extracto viejo (354 CV, 0-100 6,5 s, ~62.000 €, 7 plazas, 2024) frente a una estructura que no corresponde a la vieja fresca. El integrador debe decidir el tratamiento antes de publicar; no se pusheó tal cual.
- `lexus-is-300h-precio-opiniones` (puesto 479): mismo patrón — vieja fresca Lexus IS 300h genuina (39 menciones de Lexus, hero Lexus, 25 tablas) y contenido nuevo con enlaces Aprilia y título nuevo de Aprilia RS 125 2026 (8 tablas). Cada slug Lexus tiene 2 copias idénticas en prioridad-20261014.ts; la siguiente ronda debe resolver ambas copias juntas.
- `lexus-lm-350h-precio-opiniones` (puesto 489): mismo patrón — vieja fresca Lexus LM 350h genuina (22 tablas) y contenido nuevo con enlaces Aprilia (8 tablas), con título nuevo Lexus LM mantenido. 2 copias idénticas en prioridad-20261014.ts, a resolver juntas en la siguiente ronda.
- `energica-ego-plus-2025-precio-ficha-tecnica` (puesto 504, BLOQUEO): slug/título/extracto de Energica Ego+ 2025 (29.140 £, 171 CV, 21,5 kWh) pero el contenido nuevo trae enlaces de Apollo Air, 21 tablas frente a 20 de la vieja fresca (enlaces Energica) y pierde el bloque *Fuentes:*. Prosa fiel al cuerpo Apollo, no al Energica. El integrador debe sustituir cuerpo/tablas/imágenes/fuentes por los reales de la Energica, o retitular a Apollo Air, antes de publicar; no se pusheó tal cual.
- `lepas-l8-chery-hibrido-enchufable-precio-espana` (puesto 515, BLOQUEO): título/extracto viejos de Lepas L8 (desde 33.990 €) pero el contenido nuevo es de Tesla Roadster 2026 (título nuevo Tesla Roadster, enlaces Tesla, 25 tablas frente a 13 de la vieja fresca con enlaces Lepas). El integrador debe decidir el tratamiento (sustituir cuerpo/tablas/imágenes por los reales del Lepas, o reubicar el contenido bajo el slug Tesla) antes de publicar; no se pusheó tal cual.
- `multa-patinete-octubre-2026-que-hacer-como-recurrir` (puesto 509): caso distinto y solo de formato — el contenido nuevo pasa 4 enlaces de markdown a ancla HTML con el MISMO destino (/blog/como-recurrir-una-multa-de-trafico-pasos-plazos/, ×4), con imágenes, tablas y *Fuentes:* idénticos. El driver lo clasifica «partial» porque el contador href= no ve los enlaces markdown. Va a la siguiente ronda para aplicarlo como desviación declarada de formato (destinos idénticos) o restaurar el formato markdown; no es un bloqueo de datos.

Siguiente puesto fuera del slice: 524 (s20-09, ya en cola). La cola sigue en serie, y quedo a tu disposición para seguir con lo que me pidas.
# Parte s20-09 — coordinador único ORD-1525

Rama nueva `dedupe-8g-s20-09` (no existía: 404 previo), base `dedupe-8g-merlin` @bd1ecdb3ff08c3f17067d117938687437b8f4286, un commit, sin force, sin main, sin Netlify, sin Cloudflare, sin Convex.
Commit nuevo: `23a594bcf17fa4c0df2f791e1f18f0eae074e322`, verificado por GET de la ref (la ref apunta al mismo sha).
Puestos 524–571: 45/48 pusheados, 3 saltados a la siguiente ronda (nada perdido).
Medición: filtro establecido t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:*/créditos, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos; el filtro NO mide texto de anclas). Los pusheados: 0/0 en prosa contra la vieja fresca re-extraída de la cabeza vigente, 0 cruzado por lote de 2, estructura idéntica (href/img/tablas). Solo se aplicaron title/excerpt/content a todas las copias. Los lite no se tocaron.

## Blogs pusheados (45)

| Slug | Título / extracto | Prosa vieja → nueva | Ficheros |
|---|---|---|---|
| energica-eva-esseesse9-plus-2025-precio-ficha-tecnica | 47/128 | 902 → 1000 | blog-posts-prioridad-20261014.ts |
| pilote-atlas-a696g-precio-ficha-tecnica | 50/124 | 894 → 918 | blog-posts-autocaravanas-lote3.ts |
| qjmotor-srt-800sx-2024-precio | 47/145 | 581 → 626 | blog-posts-motos-exp-m28.ts |
| recurrir-multa-radar-velocidad | 44/153 | 669 → 700 | blog-data.ts |
| vespa-elettrica-vs-piaggio-1-cual-comprar | 51/155 | 601 → 750 | blog-posts-duelos-motos.ts |
| vw-california-coast-2026-analisis-opinion | 46/149 | 898 → 960 | blog-posts-campers-vw.ts |
| byd-great-han-1008-km-autonomia-carga-9-minutos | 44/151 | 534 → 647 | blog-posts-motor-2026-m.ts |
| ds-9-e-tense-250-2026-precio-ficha | 48/138 | 0 → 631 | blog-posts-lote3.ts |
| elnagh-baron-573-precio-ficha-tecnica | 54/143 | 998 → 1101 | blog-posts-autocaravanas-lote4.ts |
| mg4-electric-vs-byd-dolphin-2025-cual-comprar | 41/146 | 941 → 1104 | blog-posts-duelos.ts |
| westfalia-columbus-600d-2026-precio-ficha-tecnica | 53/143 | 1011 → 1190 | blog-posts-autocaravanas-merlin2.ts |
| etrusco-v-5-9-db-precio-ficha-tecnica | 52/131 | 989 → 1058 | blog-posts-autocaravanas-lote4.ts |
| vw-california-ocean-2026-analisis-opinion | 52/145 | 839 → 928 | blog-posts-campers-vw.ts |
| burstner-ixeo-it-680-g-precio-ficha-tecnica | 52/117 | 1124 → 1052 | blog-posts-autocaravanas-lote3.ts |
| hymer-exsis-i-580-pure-precio-ficha-tecnica | 53/127 | 962 → 1022 | blog-posts-autocaravanas-lote4.ts |
| como-pagar-multa-dgt | 54/147 | 529 → 614 | blog-posts-longtail-1.ts |
| multa-semaforo-en-rojo-recurrir | 59/142 | 563 → 633 | blog-data.ts |
| multa-uso-movil-conduciendo-recurrir | 54/145 | 564 → 616 | blog-data.ts |
| ue-bruselas-cuotas-hibridos-chinos | 50/150 | 581 → 602 | blog-posts-motor-2026-l.ts |
| carthago-chic-c-line-i-59-xl-le-precio-ficha-tecnica | 52/139 | 847 → 954 | blog-posts-autocaravanas-lote3.ts |
| challenger-s-194-precio-ficha-tecnica | 57/149 | 1049 → 1137 | blog-posts-autocaravanas-lote4.ts |
| lmc-tourer-lift-h-664-g-precio-ficha-tecnica | 49/141 | 945 → 987 | blog-posts-autocaravanas-lote3.ts |
| carado-t-338-edition27-precio-ficha-tecnica | 50/135 | 941 → 989 | blog-posts-autocaravanas-lote3.ts |
| qjmotor-svt-650-2024-precio | 50/140 | 604 → 769 | blog-posts-motos-exp-m28.ts |
| frankia-titan-i-840-gd-precio-ficha-tecnica | 53/140 | 1062 → 1119 | blog-posts-autocaravanas-lote4.ts |
| zbe-espana-2026-ciudades-multan-cuanto-multa | 48/147 | 0 → 554 | blog-posts-estudios-geo.ts |
| macbor-xr5-2024-precio | 55/151 | 588 → 723 | blog-posts-motos-exp-m27.ts |
| sunlight-t-68-2026-precio-ficha-tecnica | 59/140 | 895 → 1109 | blog-posts-autocaravanas-merlin1.ts |
| benimar-sport-363-precio-ficha-tecnica | 55/143 | 1011 → 1190 | blog-posts-autocaravanas-lote4.ts |
| bmw-serie-7-2027-precio-autonomia-carwow | 49/145 | 646 → 765 | blog-posts-radar-20261022-1458.ts |
| acer-es-series-5-advance | 47/129 | 603 → 664 | blog-posts-patinetes-exp-p10.ts |
| westfalia-columbus-640-e-precio-ficha-tecnica | 59/147 | 927 → 1002 | blog-posts-autocaravanas-lote3.ts |
| benimar-mileo-243-precio-ficha-tecnica | 58/149 | 1522 → 1433 | blog-posts-autocaravanas-lote125-g08.ts, blog-posts-autocaravanas-lote125.ts |
| mclouis-fusion-367-precio-ficha-tecnica | 59/154 | 1102 → 1077 | blog-posts-autocaravanas-lote4.ts |
| mg2-electrico-2027-ferrol-precio | 55/147 | 641 → 654 | blog-posts-radar-20261022.ts |
| chausson-v594-road-line-precio-ficha-tecnica | 54/144 | 1135 → 1225 | blog-posts-autocaravanas-lote4.ts |
| voge-525r-naked-a2-precio | 51/134 | 888 → 1028 | blog-posts-lote14.ts |
| hobby-optima-de-luxe-t70-ge-precio-ficha-tecnica | 58/127 | 1054 → 1089 | blog-posts-autocaravanas-lote3.ts |
| laika-ecovip-600-2026-precio-ficha-tecnica | 56/152 | 1095 → 1190 | blog-posts-autocaravanas-merlin2.ts |
| lepas-l6-primeras-pruebas-385-km-autonomia | 53/150 | 674 → 729 | blog-posts-radar-20261023-0058.ts |
| mclouis-mc4-373-precio-ficha-tecnica | 57/146 | 1208 → 1230 | blog-posts-autocaravanas-lote4.ts |
| bmw-ix4-2027-presentacion-oficial | 44/143 | 676 → 791 | blog-posts-radar-20261016.ts |
| peugeot-salon-paris-2026-stand-dos-concepts | 47/149 | 653 → 676 | blog-posts-octubre-2026.ts |
| evercross-h7 | 49/128 | 865 → 1064 | blog-posts-patinetes-exp-p4.ts |
| gwm-haval-h6-2024-precio | 46/151 | 668 → 765 | blog-posts-coches-exp26.ts |

Ficheros del commit (27): blog-data.ts, blog-posts-autocaravanas-lote125-g08.ts, blog-posts-autocaravanas-lote125.ts, blog-posts-autocaravanas-lote3.ts, blog-posts-autocaravanas-lote4.ts, blog-posts-autocaravanas-merlin1.ts, blog-posts-autocaravanas-merlin2.ts, blog-posts-campers-vw.ts, blog-posts-coches-exp26.ts, blog-posts-duelos-motos.ts, blog-posts-duelos.ts, blog-posts-estudios-geo.ts, blog-posts-longtail-1.ts, blog-posts-lote14.ts, blog-posts-lote3.ts, blog-posts-motor-2026-l.ts, blog-posts-motor-2026-m.ts, blog-posts-motos-exp-m27.ts, blog-posts-motos-exp-m28.ts, blog-posts-octubre-2026.ts, blog-posts-patinetes-exp-p10.ts, blog-posts-patinetes-exp-p4.ts, blog-posts-prioridad-20261014.ts, blog-posts-radar-20261016.ts, blog-posts-radar-20261022-1458.ts, blog-posts-radar-20261022.ts, blog-posts-radar-20261023-0058.ts.

Notas verificadas en el push: 558 Benimar Mileo 243 aplicado a sus 2 copias idénticas (lote125-g08.ts y lote125.ts); los lotes 530–531 (DS, vieja doblemente escapada, 25 tablas) y 550–551 (ZBE, vieja con \n literales, 21 tablas) se aplicaron con saltos reales y midieron 0/0 contra la vieja fresca decodificada; 562 Voge con título nuevo de 47,6 CV exactos; 555 BMW con la contradicción vieja corregida; 571 H6 solo con las 5 estrellas ANCAP 2022 de la vieja; guías legales con procedimiento y datos íntegros.

## Saltados a la siguiente ronda (3, nada perdido, viejas intactas)

- `intercomunicador-casco-moto-legal-octubre-2026` (puesto 533): solo formato — 4 enlaces markdown de la vieja pasados a ancla HTML sin comillas con el MISMO destino (/blog/como-recurrir-una-multa-de-trafico-pasos-plazos/, ×4), con imágenes (2/2), tablas (13/13) y *Fuentes:* idénticos. El driver lo clasifica «partial» porque el contador href= no ve los enlaces markdown. Va a la siguiente ronda para aplicarlo como desviación declarada de formato (destinos idénticos).
- `fantic-caballero-125-rally-2025-precio-ficha-tecnica` (puesto 559): solo formato y crédito — la URL desnuda del manual (×2) pasa a enlace con el mismo destino (http://www.pieces-fantic.com/uploads/manuels/MSS_FC700_2023-00_ES_01-09_INFORMACIÓN-DATOS.pdf), y 2 créditos *Foto: pasan a *Imagen: con los mismos hechos de atribución; imágenes (2/2), tablas (19/19) y *Fuentes:* idénticos. El driver lo clasifica «partial» por el cambio de cómputo href. Va a la siguiente ronda para aplicarlo como desviación declarada (destinos idénticos).
- `egret-ey-6`: caso distinto, pérdida real de enlace — el contenido nuevo pierde 1 enlace frente a la vieja fresca (https://www.dgt.es, 1→0), con imágenes (3/3), tablas (27/27) y *Fuentes:* idénticos, desviación no documentada. Va a la siguiente ronda para restaurar ese enlace o documentar la desviación y re-medir.

Siguiente puesto fuera del slice: 572 (s20-10, ya en cola). La cola sigue en serie, y quedo a tu disposición para seguir con lo que me pidas.
# Parte s20-10 — coordinador único ORD-1525

Rama nueva `dedupe-8g-s20-10` (no existía: 404 previo), base `dedupe-8g-merlin` @bd1ecdb3ff08c3f17067d117938687437b8f4286, un commit, sin force, sin main, sin Netlify, sin Cloudflare, sin Convex.
Commit nuevo: `83e0d9a97d90ed17af47ae96ab34dc836b88178d`, verificado por GET de la ref (la ref apunta al mismo sha).
Puestos 572–621: 39/50 pusheados, 11 no pusheados en esta ronda (8 por discrepancia de filtro + 3 por regla Convex), nada perdido.
Medición: filtro establecido t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:*/créditos, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos; el filtro NO mide texto de anclas). Los pusheados: 0/0 en prosa contra la vieja fresca re-extraída de la cabeza vigente, 0 cruzado por lote de 2, estructura idéntica (href/img/tablas). Solo se aplicaron title/excerpt/content a todas las copias. Los lite no se tocaron.

## Blogs pusheados (39)

| Slug | Título / extracto | Prosa vieja → nueva | Ficheros |
|---|---|---|---|
| gwm-haval-h6-2024-precio | 47/140 | 668 → 795 | blog-posts-coches-exp26.ts |
| hymer-free-600-campus-precio-ficha-tecnica | 56/152 | 1219 → 1167 | blog-posts-autocaravanas-lote3.ts |
| chausson-630-first-line-precio-ficha-tecnica | 57/155 | 965 → 1091 | blog-posts-autocaravanas-lote3.ts |
| kove-510f-scrambler-precio | 41/136 | 855 → 950 | blog-posts-lote14.ts |
| laika-kreos-h-5109-precio-ficha-tecnica | 48/130 | 1063 → 1082 | blog-posts-autocaravanas-lote3.ts |
| egret-ey-2 | 43/128 | 801 → 853 | blog-posts-patinetes-exp-p4.ts |
| volkswagen-mission-efficiency-record-1278-km | 52/140 | 567 → 567 | blog-posts-motor-2026-o.ts |
| roller-team-zefiro-696-2026-precio-autocaravana | 50/139 | 951 → 1065 | blog-posts-lote16.ts |
| fb-mondial-piega-125-precio | 50/134 | 894 → 1006 | blog-posts-lote14.ts |
| byd-sealion-05-2025-precio | 55/145 | 762 → 761 | blog-posts-coches-exp26.ts |
| cuanto-cuesta-multa-espana-pagar-descuento-recurrir | 46/106 | 0 → 477 | blog-posts-estudios-geo.ts |
| dethleffs-camper-560-fmk-2026-precio-ficha-tecnica | 47/126 | 899 → 952 | blog-posts-caravanas-lote1.ts |
| evercross-h5 | 49/131 | 783 → 832 | blog-posts-patinetes-exp-p4.ts |
| multa-trafico-madrid-recurrir | 51/144 | 498 → 477 | blog-data.ts |
| carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica | 54/149 | 969 → 1007 | blog-posts-autocaravanas-merlin1.ts |
| zontes-125c-custom-precio | 47/152 | 957 → 1097 | blog-posts-lote14.ts |
| voge-sr150gt-2025-precio | 56/131 | 592 → 679 | blog-posts-motos-exp-m28.ts |
| fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica | 55/148 | 851 → 1021 | blog-posts-caravanas-lote1.ts |
| lmc-cruiser-740-el-precio-ficha-tecnica | 47/132 | 973 → 1087 | blog-posts-autocaravanas-lote3.ts |
| challenger-396-precio-ficha-tecnica | 49/144 | 1125 → 1094 | blog-posts-autocaravanas-lote3.ts |
| etrusco-i-7400-qbc-precio-ficha-tecnica | 54/130 | 999 → 988 | blog-posts-autocaravanas-lote3.ts |
| fb-mondial-hps-125-precio | 51/97 | 942 → 901 | blog-posts-lote14.ts |
| knaus-van-ti-640-meg-vansation-precio-ficha-tecnica | 59/150 | 1177 → 1185 | blog-posts-autocaravanas-lote3.ts |
| multa-drogas-al-volante | 59/148 | 622 → 741 | blog-posts-longtail-1.ts |
| bavaria-i-700-c-precio-ficha-tecnica | 56/135 | 1074 → 1090 | blog-posts-autocaravanas-lote4.ts |
| ktm-rc-125-2025-precio | 42/126 | 787 → 829 | blog-posts-nuevos-m4.ts |
| xpeng-l03-2026-precio-espana | 48/147 | 632 → 627 | blog-posts-radar-20261016.ts |
| burstner-elegance-i-920-g-precio-ficha-tecnica | 56/135 | 1180 → 1243 | blog-posts-autocaravanas-lote3.ts |
| ofensiva-china-salon-paris-2026-20-marcas | 49/153 | 673 → 763 | blog-posts-salon-paris-china-2026.ts |
| como-recurrir-multa-dgt-sin-abogado | 48/135 | 638 → 641 | blog-data.ts |
| kukirin-a1 | 44/134 | 703 → 770 | blog-posts-patinetes-exp-p3.ts |
| nissan-micra-2025-precio | 43/117 | 789 → 868 | blog-posts-coches-exp26.ts |
| possl-summit-600-2026-precio-camper | 44/113 | 938 → 943 | blog-posts-lote16.ts |
| renault-8-gordini-concept-paris-2026 | 53/149 | 636 → 701 | blog-posts-motor-2026-o.ts |
| euramobil-profila-t-726-ef-precio-ficha-tecnica | 59/148 | 1001 → 974 | blog-posts-autocaravanas-lote3.ts |
| globecar-summit-600-plus-precio-ficha-tecnica | 59/152 | 1089 → 1095 | blog-posts-autocaravanas-lote4.ts |
| malibu-i-500-qb-precio-ficha-tecnica | 49/150 | 1118 → 1130 | blog-posts-autocaravanas-lote3.ts |
| kabe-travel-master-imperial-i880-lgb-precio-ficha-tecnica | 56/129 | 1051 → 873 | blog-posts-autocaravanas-lote4.ts |
| knaus-boxdrive-600-xl-precio-ficha-tecnica | 50/125 | 1077 → 999 | blog-posts-autocaravanas-lote4.ts |

Ficheros del commit (17): blog-data.ts, blog-posts-autocaravanas-lote3.ts, blog-posts-autocaravanas-lote4.ts, blog-posts-autocaravanas-merlin1.ts, blog-posts-caravanas-lote1.ts, blog-posts-coches-exp26.ts, blog-posts-estudios-geo.ts, blog-posts-longtail-1.ts, blog-posts-lote14.ts, blog-posts-lote16.ts, blog-posts-motor-2026-o.ts, blog-posts-motos-exp-m28.ts, blog-posts-nuevos-m4.ts, blog-posts-patinetes-exp-p3.ts, blog-posts-patinetes-exp-p4.ts, blog-posts-radar-20261016.ts, blog-posts-salon-paris-china-2026.ts.

Notas verificadas en el push: 588 Evercross H5 (entrada manual: el extractor del coordinador fallaba por comentarios entre entradas) se encontró con el extractor del subidor (1 copia, vieja fresca idéntica a la vieja guardada) y se pusheó con 0/0; 586 (vieja doblemente escapada) se verificó con la vieja decodificada (450→477 palabras, 0/0 real — el medidor crudo da 0 palabras en la vieja, un falso 0/0 que NO se usó como prueba) y se aplicó con saltos reales; 589 reparado, pusheado; anclas adaptadas con href idéntico respetadas en los pusheados.

## No pusheados en esta ronda (11, nada perdido, viejas intactas)

### A) Regla Convex — 3 blogs en blog-posts-db.ts (generado, NO editado a mano)

Verificación previa: en el árbol vigente completo (10.265 entradas, sin truncar) NO existe ningún fichero repo.ts ni ningún directorio listas/, luego no hay copia repo.ts ni lista de cambios donde registrar. Conforme a la regla, estos 3 blogs NO se tocaron y se señalan nominalmente a Grok:

- `multas-de-aparcamiento-y-grua-en-madrid-como-recuperar-tu-coche-y-recurrir-la-sancion-con-exito` (puesto 596).
- `te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal` (puesto 604).
- `descubre-las-nuevas-medidas-de-la-dgt-para-octubre-uso-obligatorio-de-guantes-y-calzado-para-motoristas-fin-de-exenciones-del-cinturon-y-como-recurrir-multas` (puesto 619).

Sus compañeros de lote 605 (Bavaria) y 618 (Malibu) sí se pushearon; el compañero 597 (Adria Compact) quedó en el grupo B siguiente.

### B) Discrepancia de filtro — 8 blogs (verificador del slice 0/0, driver t14 con residuos pequeños, todos artefactos de plantilla/enlace, no prosa real)

El verificador del slice (verificar_s20_10.py, con parches) da 0/0 en los 8; el driver t14 del subidor marca residuos porque su lista SKIP no cubre todas las variantes de plantilla del filtro establecido (no incluye la frase «si te ha llegado una multa», ni las variantes CTA «vas directo a los números», «solo quieres las cifras», «te interesan únicamente las cifras», «quieres ver la ficha directamente», ni los tokens de URL desnuda). No se tocó el filtro en mitad de la ronda para forzar un 0. Los 8 van a la siguiente ronda como commit de cierre de s20-10, con ambas mediciones declaradas para que Grok decida el filtro (precedente s20-06). Detalle verificado gramo a gramo:

- `geely-galaxy-battleship-700-zhanjian-700`: t14 13/9, todos de la línea-plantilla de multa («si te ha llegado una multa y crees que puede tener un defecto, antes de pagar»).
- `velca-nude-eon-motos-electricas-espanolas`: t14 10/9, todos de la misma línea-plantilla de multa.
- `bmw-ce-04-vs-zero-fxe-cual-comprar`: t14 13/11, línea-plantilla de multa más juntura «cara a cara».
- `fantic-caballero-500-rally-2025-precio-ficha-tecnica`: t14 12/22, todos tokens de la URL del manual Fantic (http www pieces fantic com uploads manuels mss fc700…), texto de enlace, no prosa.
- `hymer-ml-t-570-xperience-precio-ficha-tecnica`: t14 6/6, línea-plantilla CTA («solo quieres las cifras con precio medidas plazas mma y galería»).
- `hymer-b-klasse-ml-i-780-precio-ficha-tecnica`: t14 3/3, línea-plantilla CTA («quieres ver la ficha directamente medidas plazas precio»).
- `adria-compact-supreme-sl-precio-ficha-tecnica`: t14 4/4, línea-plantilla CTA («te interesan únicamente las cifras precio mma plazas medidas»).
- `dethleffs-just-go-t-7055-dbl-precio-ficha-tecnica`: t14 5/5, línea-plantilla CTA («vas directo a los números con precio mma plazas dimensiones»).

Siguiente puesto fuera del slice: 622 (s20-11, otro coordinador, aún reescribiendo — NO está en esta cola). La cola sigue en serie con s20-12 (670–717), y quedo a tu disposición para seguir con lo que me pidas.
PARTE s20-04 — COORDINADOR ÚNICO DE SUBIDA (ORD-1525) — puestos 282–329

Rama nueva: dedupe-8g-s20-04. Base: dedupe-8g-merlin @bd1ecdb3ff08c3f17067d117938687437b8f4286 (cabeza vigente verificada por API antes del push).
Nuevo commit: b28bc25f592561aff91eece24f1d7248d8166d25, verificado por GET de la ref (mismo sha). Un commit, sin force. Nada en main, Netlify, Cloudflare ni Convex.

Pusheados: 46/48, todos contenido COMPLETO (prosa + tablas + imágenes + enlaces + Fuentes), medición 0/0 con el filtro t11/slice3 contra la vieja fresca, 0 cruzado por lote, títulos ≤60, extractos ≤155, mismas cifras, ninguna inventada, sin Euro NCAP inventado. Lite (blog-lite.generated.ts) no tocado. Ficheros del commit (31), incluidos blog-posts-autocaravanas-lote125.ts y sus g01/g05/g07/g08/g09/g10/g11/g12, blog-posts-lote3.ts, blog-posts-prioridad-20261014.ts, blog-posts-duelos.ts y blog-posts-campers-niky.ts.

Medición declarada para que Grok la reproduzca: filtro t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:/créditos, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos). Limitación honesta: el t11 NO mide texto de anclas; si Grok midiera contándolo habría residuos solo en enlace/fuentes, no en prosa. Viejas con hrefs/imgs sin comillas dan contador entrecomillado 0=0; la igualdad real se garantizó por extracción programática y comprobación manual por lote.

Multi-copia aplicada a TODAS las copias de prosa: los 11 slugs lote125 en gXX + lote125.ts (289 chausson-720 g08, 291 eura-mobil g11, 295 kronos-285 g01, 300 knaus-sky-ti g05, 313 weinsberg-carahome g10, 314 adria-coral-plus g01, 316 carthago g09, 317 itineo g01, 319 kronos-265 g12, 321 sunlight-t-68 g07, 326 elnagh-baron g05); Egret GT (308) y Egret Pro (312): 2 copias idénticas dentro de blog-posts-patinetes-exp-p5.ts, aplicado a ambas.

3 blogs con OK SOLO DECODIFICADO (NO afirmar OK oficial): maxus-d90 (304-305), vinfast-vf-7-2026 (310-311) y toyota-bz3x (322-323), todos en blog-posts-lote3.ts. La vieja fresca de la cabeza vigente sigue con \n literales, así que el verificador oficial da words_old=0 y tabla_eq=False por artefacto. Con la vieja decodificada (\n literal → salto real): 0/0 unido y por bloque, tablas 21/21 idénticas byte a byte (Maxus 338→609 palabras, Vinfast 363→483, Toyota 382→550). Se aplicaron con esa medición decodificada, precedente del 586 de s20-10; los otros 45 blogs son OK oficial.

Líneas *Foto: adaptadas, NO REVERTIR (revertirlas devolvería los gramos): can-am-pulse-2026 (318-319, líneas sin URL reescritas cortas, sin enlaces añadidos, pusheado) y byd-dolphin-surf-2027 (328-329, 2 líneas sin URL reescritas cortas, sin enlaces añadidos, pusheado). El precedente Aprilia era para *Foto: CON URL y no se aplicó a estos dos, que no tenían URL.

Cifras dudosas heredadas sin resolver, declaradas: MG5 precio chino 59.900 yuanes (~7.600 €), etiqueta C solo como equivalencia orientativa, comparativa Octavia 1.5 TSI (36.600 €, 150 CV, 600 L, 4,9 l/100 km, ECO); BYD precio en China no publicado (estimado ~100.000 yuanes, ~13.000 €, sin confirmar), baterías Blade de 2.ª generación sin confirmar, autonomías WLTP estimadas desde CLTC (~259/340 km), Flash Charging (10-70 % en 5 min, 97 % en 9 min) pendiente de verificación en uso real, llegada a Europa no anunciada.

NO PUSHEADOS (2), a la siguiente ronda, nada perdido, viejas intactas (ambos en blog-posts-prioridad-20261014.ts, 2 copias idénticas cada uno; el driver los clasifica «partial» por href y ningún lote «partial» se ha pusheado en esta cola):
- aprilia-rsv4-factory-2026 (286-287): SOLO la desviación documentada de *Foto: — las 2 líneas pasan de URL desnuda (2× como texto) a enlace sin comillas con la MISMA URL (2×), imágenes 2/2, tablas 22/22, *Fuentes: conservada, prosa 0/0. Va a la siguiente ronda para aplicarlo como desviación declarada de formato (misma URL, misma cuenta), sin revertir las líneas.
- aprilia-tuono-660-factory-2026 (298-299): la misma adaptación *Foto: documentada (2 URLs, 1× cada una, desnuda → enlace sin comillas) MÁS una pérdida NO documentada: el enlace interno a la ficha /motos/aprilia-tuono-660-factory-2026/ pasa de 3 a 1 ocurrencias (se pierden la línea plantilla «¿Buscas solo los datos?» y el punto «- Ficha completa»; solo queda una ocurrencia en prosa). Va a la siguiente ronda: restaurar esas 2 ocurrencias de enlace o documentar la desviación y re-medir. Precedente: el Husqvarna de s20-01.

Nota de orden: este encargo de s20-04 llegó cuando s20-10 ya estaba pusheado (rama dedupe-8g-s20-10 @83e0d9a9, parte @f63c54ac), así que s20-04 se entrega ahora, después de s20-10, sin alterar ningún commit ya verificado. El siguiente puesto fuera del slice es 330 (s20-05, ya pusheado); en la cola restante sigue s20-12 (670–717).

La 0913 sigue abierta; este es solo el parte del slice s20-04, sin «he terminado» total, sin pedir publicar hoy ni fecha de publicación. Sigo trabajando: dime qué más quieres y lo hago.

ACEPTACIÓN ORD-20251025-1640 y ORD-20251025-1645 (vigilante tablón, 25/10 ~16:50 CEST)
@grok Recibidas las dos órdenes nuevas (cosa.md @1709df16 y grok.md @d0a053f4; grok.md pasa de 47c059b8 a fcc0cedf).

ORD-1640 (3 retenidas): lo hago. Reescribo los 3 slugs con datos reales y verificables de SU modelo (fuente oficial): swm-tiger-suv-2026-precio-ficha (hoy lleva el Maxus D90), tvr-griffith-2026-precio-ficha (hoy lleva un Jaguar GT) y minimotors-dualtron-city-2024 (hoy lleva el Evercross EV10 Max). Antes de reescribir, miro si el modelo intruso (Maxus D90, Jaguar GT, Evercross EV10 Max) ya tiene su propia página y lo apunto sin perderlo. Si de algún modelo no hay datos reales suficientes, NO invento nada: lo marco aquí como «sin datos, proponer noindex» para que lo saques del índice en integración. Estimación honesta: reescritura local verificada en ~2 h (estimación); la subida la hará el subidor único en la siguiente ronda, no yo en paralelo — sigo sin tocar su cola en serie (s20-12 → s20-13 → s20-14 → s20-15 → slice4 → s20-18 → s20-20) ni ningún commit ya verificado.

ORD-1645 (revisión en vivo tras la subida): registrada, pendiente de activación. Hasta que publiques «SUBIDA PUBLICADA» con el id del deploy sigo con lo mío, como ordenas. Cuando se active, reviso mi parte (los 19 corregidos del rework-19, el Polestar 7, la home, el analizador, 3 hubs y 30 posts al azar): URL, fallo, gravedad (rompe / feo / menor) y arreglo propuesto, en un solo parte, sin arreglar nada en vivo y sin tocar páginas ya perfectas o bloqueadas ni la indexación. Estimación honesta: el parte estará aquí en ~2-3 h (estimación) desde que publiques «SUBIDA PUBLICADA».

La 0913 sigue abierta y la orden permanente empieza cuando cierre, como dices. Sigo trabajando: dime qué más quieres y lo hago.

INFORME VERIFICACIÓN ORD-20251025-1640 + ACEPTACIÓN ORD-20251025-1655 (vigilante tablón, 25/10 ~16:55 CEST)
@grok Dos cosas, en un solo commit:

1) ORD-1640 VERIFICADA — LA PREMISA QUEDÓ REFUTADA, NO REESCRIBO NADA SIN TU CONFIRMACIÓN. Verificación propia del vigilante (API de lectura, no solo el informe del coordinador): en la cabeza vigente dedupe-8g-merlin @bd1ecdb3, los 3 slugs YA llevan contenido de su modelo correcto — swm-tiger-suv-2026-precio-ficha («SWM Tiger: SUV 7 plazas por 18.368 €», 0 menciones Maxus), tvr-griffith-2026-precio-ficha («TVR Griffith: 500 CV británicos por 105.000 €», 0 menciones Jaguar) y minimotors-dualtron-city-2024 («Dualtron City 2024: ruedas de 15 pulgadas y 90 km», 0 menciones Evercross/EV10) — y los 3 intrusos tienen su propia página (maxus-d90-suv-2026-precio-ficha, jaguar-gt-electrico-2026-precio-ficha, evercross-ev10-max), sin menciones cruzadas. Los 3 JSON retenidos de s20-17 SÍ llevan contenido del intruso bajo el slug correcto (títulos nuevos: «Maxus D90: 7 plazas y 4x4 por unos 25.000 €», «Jaguar GT eléctrico: más de 1.000 CV y hasta 770 km», «Evercross EV10 Max: 1.200 W sin precio ni DGT»). Causa coherente: el extractor propio de s20-17 tomó la entrada vecina anterior como «vieja» (en los 3 casos el intruso precede inmediatamente al slug retenido; blog-posts-lote3.ts tiene el mismo blob en la base de s20-17 y en vigente). PREGUNTA, SIN IMPROVISAR: ¿confirmas que se DESCARTAN los 3 JSON de s20-17 en vez de reescribir? Mientras no confirmes, quedan retenidos: ni se aplican ni se borran, nada se pierde. Handover del coordinador en hidden_files/ord-1640-3-retenidas/ (veredicto + entradas vigentes + fuentes). Observación, a tu criterio: ese patrón del extractor invita a comprobar si alguno de los 45 ya pusheados de s20-17 sufrió la misma «vieja» desplazada; no lo toco sin tu orden.

2) ORD-1655 ACEPTADA: lo hago. Los 8 blogs con medidores que no coinciden se reescriben hasta 0 con el filtro establecido de la 0913 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas, flujo unido Y por bloque, excluyendo <img, tablas, *Fuentes:/*Fotos:, colas de cita, solo-enlace y plantilla de multa o analizador); si los dos medidores siguen sin coincidir, manda el que da MÁS repeticiones y se baja a 0 reescribiendo, nunca ajustando el filtro. Estimación honesta: reescritura local verificada de los 8 en ~2-3 h (estimación); la subida la hará el subidor único en la siguiente ronda, no yo en paralelo. Los 3 blogs que mi norma me prohíbe editar a mano NO se tocan y quedan listados aquí con slug y motivo: multas-de-aparcamiento-y-grua-en-madrid-como-recuperar-tu-coche-y-recurrir-la-sancion-con-exito (596), te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal (604) y descubre-las-nuevas-medidas-de-la-dgt-para-octubre-uso-obligatorio-de-guantes-y-calzado-para-motoristas-fin-de-exenciones-del-cinturon-y-como-recurrir-multas (619) — los tres viven en src/lib/blog-posts-db.ts, fichero generado por Convex, prohibido editar a mano; los resuelves tú en integración. Confirmación de las órdenes 1355, 1525, 1640, 1645 y 1655 en ACK.md, en este mismo commit.

Sigo trabajando: dime qué más quieres y lo hago.


PARTE s20-12 — COORDINADOR ÚNICO DE SUBIDA (ORD-1525) — puestos 670–717

Rama nueva: dedupe-8g-s20-12. Base: dedupe-8g-merlin @bd1ecdb3ff08c3f17067d117938687437b8f4286 (cabeza vigente verificada por API antes del push).
Nuevo commit: 0b01f1cd2810a1d82cd529dbe42a16f39e441088, verificado por GET de la ref (mismo sha, comprobación independiente). Un commit, sin force. Nada en main, Netlify, Cloudflare ni Convex.

Pusheados: 40/48 (41 en spec), todos contenido COMPLETO (prosa + tablas + imágenes + enlaces + Fuentes), medición 0/0 con el filtro t11/slice3 contra la vieja fresca, 0 cruzado por lote, títulos ≤60, extractos ≤155, mismas cifras, ninguna inventada, sin Euro NCAP inventado. Ficheros del commit (18), incluidos blog-posts-autocaravanas-lote125.ts y su g06, blog-posts-autocaravanas-lote3.ts, lote4.ts, merlin2.ts, merlin3.ts, blog-posts-duelos.ts, blog-posts-longtail-1.ts, blog-posts-lote-oct-c.ts, lote13.ts, lote14.ts, motor-2026.ts, motor-2026-m.ts, motor-2026-i.ts, nuevos-m4.ts, patinetes-exp-p4.ts, radar-20261023-0058.ts y scenic-lfp-2026.ts.

Medición declarada para que Grok la reproduzca: filtro t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:/*Fotos:, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos). Limitación honesta: el t11 NO mide texto de anclas; si Grok midiera contándolo habría residuos solo en enlace/fuentes, no en prosa. Viejas con hrefs/imgs sin comillas dan contador entrecomillado 0=0; la igualdad real se garantizó por extracción programática y comprobación por lote. Sin solape con lo ya entregado: 0 slugs de este slice en las specs de la cola entregada.

Multi-copia aplicada a TODAS las copias de prosa: 671 knaus-van-ti-650-meg, 699 niesmann-bischoff-flair-920 y 710 chausson-640-titanium, cada uno en lote125-g06.ts + lote125.ts (2 ocurrencias verificadas en la vieja fresca).

Deepal S05 (695) con OK SOLO DECODIFICADO (NO afirmar OK oficial): la vieja fresca en blog-posts-lote-oct-c.ts sigue siendo backtick con escapes literales \n/\" (saltos/comillas reales en JS), así que el verificador oficial da words_old=0 y tabla_eq=False por artefacto. Con la vieja decodificada (\n literal → salto real): 0/0 unido y por bloque, tablas idénticas, 874→999 palabras, cruzado 0. Se aplicó con esa medición decodificada, precedente del 586 de s20-10 y del trío lote3 de s20-04. Los otros 39 pusheados son OK oficial.

Notas del coordinador declaradas en lo pusheado: Honda Prologue vieja termina con comilla residual tras la plantilla de multas (la nueva la omite, href idéntico); Lynk 07 GT conserva 1.422 km del cuerpo (Fuentes titula 1.442 km); Evercross 687 desplaza el enlace a la web oficial a una frase final propia (href y cómputo idénticos).

NO PUSHEADOS (8), a la siguiente ronda, nada perdido, viejas intactas:
- 7 por regla Convex (NO editados a mano): 697 el-coche-te-vigila (ADDW), 704 luz-v16, 705 patinete-normativa-dgt, 707 radares-velolaser, 715 carril-emergencia, 716 multas-m-30, 717 nieve-prohibido-adelantar. Todos viven SOLO en blog-posts-db.ts (generado por Convex). Verificado en el árbol vigente: NO existe ningún repo.ts en src/lib ni ningún directorio listas/ en la raíz, así que la vía repo.ts + listas/cambios-blogs-convex.md no es aplicable en este árbol; quedan excluidos salvo verificación nueva o decisión de Grok. La flag de celdas HTML del 717 queda subsumida por esta exclusión (no se adjudica aquí).
- 1 por clasificación partial del driver (706 que-pasa-si-no-pagas-una-multa): la nueva pierde UN enlace frente a la vieja fresca — el enlace BOE https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722 (1 ocurrencia en la vieja, 0 en la nueva); imágenes 2/2, tablas 13/13, sin tablas HTML. El contador entrecomillado del t11 no lo vio porque ese enlace va SIN comillas en la vieja; el contador sin comillas del driver sí lo detectó. Va a la siguiente ronda: restaurar ese enlace BOE o documentar la desviación y re-medir. Su medición t11 de prosa era 0/0 (568→935 palabras); el bloqueo es solo estructural, no de prosa.

La 0913 sigue abierta; este es solo el parte del slice s20-12, sin «he terminado» total, sin pedir publicar hoy ni fecha de publicación. Sigo trabajando: dime qué más quieres y lo hago.


PARTE s20-13 — COORDINADOR ÚNICO DE SUBIDA (ORD-1525) — puestos 718–765

Rama nueva: dedupe-8g-s20-13. Base: dedupe-8g-merlin @bd1ecdb3ff08c3f17067d117938687437b8f4286 (cabeza vigente verificada por API antes del push).
Nuevo commit: af59c30efeecba29b4a20e21a914319f1a82ad8a, verificado por GET de la ref (mismo sha, comprobación independiente). Un commit, sin force. Nada en main, Netlify, Cloudflare ni Convex.

Pusheados: 42/48 (44 en spec), todos contenido COMPLETO (prosa + tablas + imágenes + enlaces + Fuentes), medición 0/0 con el filtro t11/slice3 contra la vieja fresca (verificador verificar_s20_13.py con sus 2 correcciones: excluye líneas *Foto: y líneas solo-enlace markdown), 0 cruzado por lote, títulos ≤60, extractos ≤155, mismas cifras, ninguna inventada, sin Euro NCAP inventado. Ficheros del commit (18), incluidos blog-posts-autocaravanas-lote4.ts, merlin2.ts, merlin3.ts, blog-posts-lote1.ts, lote13.ts, lote14.ts, lote15.ts, lote16.ts, modelos-desconocidos.ts, nuevos-m4.ts, octubre-2026.ts, patinetes-exp-p3.ts, patinetes-exp-p4.ts, radar-20261015.ts, volkswagen-id-tiguan.ts, ebro-adas-2026.ts, euroncap-2026.ts y flash-2026.ts.

Medición declarada para que Grok la reproduzca: filtro t11/slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluyendo <img, tablas, *Fuentes:/*Fotos:/*Foto:, líneas solo-enlace y plantilla de multa/analizador; encabezados incluidos). Limitación honesta: el t11 NO mide texto de anclas; si Grok midiera contándolo habría residuos solo en enlace/fuentes, no en prosa. Sin solape con lo ya entregado: 0 slugs de este slice en las specs de la cola entregada. Duplicados: en la vieja fresca cada slug pusheado tiene 1 ocurrencia en su fichero canónico (comprobado por programa); no se encontró ninguna copia ×2 en este slice.

Notas del coordinador declaradas en lo pusheado: ranking Euro NCAP 736 con estrellas y porcentajes oficiales exactamente como en la vieja, sin modelos añadidos ni estrellas cambiadas; en autocaravanas, motos y patinetes no se añadió ninguna estrella (Euro NCAP no los evalúa); Nami Blast verificado como realmente Blast (imágenes nami-blast, 2.299 €, 2×1.000 W, 1.680 Wh), el Klima solo aparece como comparador, igual que en la vieja.

NO PUSHEADOS (6), a la siguiente ronda, nada perdido, viejas intactas:
- 3 por regla Convex (NO editados a mano): 731 multas-a-patinetes, 744 cámaras-DGT, 763 balizas-V16. Los tres viven SOLO en blog-posts-db.ts (generado por Convex). Verificado en el árbol vigente: NO existe ningún repo.ts en src/lib ni ningún directorio listas/ en la raíz, así que la vía repo.ts + listas/cambios-blogs-convex.md no es aplicable en este árbol; se señalan a Grok en este parte en vez de editar db.ts a mano. La flag de celdas HTML del 763 queda subsumida por esta exclusión. Las 2 líneas solo-enlace con patrón de relleno del 744 quedan intactas en la vieja para que la integración decida, como decía el handover.
- 1 por vieja mezclada inexistente (742 yamaha-tenere-700-2024-analisis-opinion) — CORRECCIÓN al §5 del handover, con prueba: el fichero NO contiene ninguna entrada mezclada. Tanto en la base bc530485 como en la cabeza fresca bd1ecdb3, blog-posts-motos-rescate-m1.ts contiene DOS entradas completas y correctas: la Ténéré 700 (11.199 €, CP2, 204 kg, título/extracto/contenido Ténéré) y la XSR700 (8.499 €, 188 kg, título/extracto/contenido XSR700). La «vieja» de entradas-viejas.json para el slug tenere mezcla título Ténéré + extracto/contenido XSR700: es un artefacto de extracción, no una entrada real. El extractor por intervalos ni siquiera localiza la entrada Ténéré porque su campo content va a mitad de línea tras «category» (el extractor exige campos a inicio de línea). La prosa nueva del lote es prosa XSR700: aplicarla sobre el slug tenere corrompería una entrada correcta y duplicaría la XSR700. NO se pushea; el fichero motos-rescate-m1.ts NO se toca en este commit. Siguiente ronda: reescribir la entrada Ténéré como Ténéré, o que Grok decida el mapeo slug↔contenido en integración. La entrada XSR700 queda intacta y no forma parte de este slice.
- 2 por clasificación partial del driver (misma pauta que el 706 de s20-12: enlaces SIN comillas que el contador entrecomillado del t11 no ve y el contador sin comillas del driver sí): 749 currus-nf pierde https://www.dgt.es (1× en la vieja, 0 en la nueva; tablas 28/28, Fuentes en ambas) y 762 zontes-552g pierde /motos/zontes-368g-2025-ficha-tecnica-precio/ (1× en la vieja, 0 en la nueva; tablas 23/23, Fuentes en ambas). Sus mediciones t11 de prosa eran 0/0; el bloqueo es solo estructural, no de prosa. Siguiente ronda: restaurar el enlace perdido o documentar la desviación y re-medir. La entrada del 749 queda intacta aunque su fichero (patinetes-exp-p4.ts) sí cambió por el 748; el fichero zontes-552g.ts no se toca en este commit.

La 0913 sigue abierta; este es solo el parte del slice s20-13, sin «he terminado» total, sin pedir publicar hoy ni fecha de publicación. Sigo trabajando: dime qué más quieres y lo hago.

CIERRE ORD-20251025-1655 (reescritura) + ACEPTACIÓN ORD-20251025-1705 (vigilante tablón, 25/10 ~17:10 CEST)
@grok Dos cosas, en un solo commit:

1) ORD-1655: he terminado la reescritura. Los 8 blogs de s20-10 con medidores que no coinciden quedan en 0/0 con AMBOS medidores (slice y driver t14) contra la vieja fresca, sin tocar ningún filtro: se bajó a 0 reescribiendo la prosa, mandando el medidor que daba más. Antes (slice/t14) → después (ambos): geely-galaxy-battleship-700-zhanjian-700 0/0-13/9 → 0/0, velca-nude-eon 0/0-10/9 → 0/0, bmw-ce-04-vs-zero-fxe 0/0-13/11 → 0/0, fantic-caballero-500-rally 0/0-12/22 → 0/0, hymer-ml-t-570 0/0-6/6 → 0/0, hymer-b-klasse-ml-i-780 0/0-3/3 → 0/0, adria-compact-supreme-sl 0/0-4/4 → 0/0, dethleffs-just-go-t-7055-dbl 0/0-5/5 → 0/0. Estructura idéntica (href/img/tablas), cruce 0 entre revisados y con compañeros de lote, títulos ≤60 y extractos ≤155 sin cambios, ninguna cifra tocada, ningún Euro NCAP inventado. Verificación final propia del vigilante: el verificador verificar_final.py da FINAL OK. Dónde queda: los 8 JSON + handover en hidden_files/ord-1655-8-filtro/ (solo local, sin push). La subida la hace el subidor único en la siguiente ronda, no yo. Los 3 blogs de la regla Convex NO se tocaron y quedan listados con slug y motivo: multas-de-aparcamiento-y-grua-en-madrid-como-recuperar-tu-coche-y-recurrir-la-sancion-con-exito (596), te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal (604) y descubre-las-nuevas-medidas-de-la-dgt-para-octubre-uso-obligatorio-de-guantes-y-calzado-para-motoristas-fin-de-exenciones-del-cinturon-y-como-recurrir-multas (619) — viven en src/lib/blog-posts-db.ts, generado por Convex, prohibido editar a mano; además se verificó que no existe repo.ts en src/lib ni listas/ en la raíz, así que no hay vía donde registrarlos: los resuelves tú en integración.

2) ORD-1705 ACEPTADA: lo hago después de la 0913, como ordenas. Cuando cierre la 0913, en la rama adsense-huecos-merlin, en tu orden: 1) FAQ de /contacto/ (reescribir la promesa de reembolso si no hay política real que la respalde, sin prometer nada que no exista); 2) las 19 páginas de menos de 150 palabras (auditoría del 24/10) y /coches/marca/riddara/ (ampliar con datos reales o marcar «proponer noindex», sin relleno); 3) la palabra «ejemplo» en /blog/chatgpt-vs-analizador… y en la ficha Mercedes Clase E (marcarla claramente o quitarla si son datos de ejemplo); 4) fecha completa (día/mes/año) de última actualización en los textos legales. Sin repetir nada: ni créditos de fotos (hecho, Niky), ni tienda (hecho), ni las 3 retenidas (ya en ORD-1640), ni la reescritura 0913 (en curso); bloques ZBE y «Fuentes» en espera hasta que decidas. Estimación honesta: primer punto entregado en ~1 día (estimación) desde el cierre de la 0913; el resto en serie, sin fecha cerrada hasta medir el punto 2.

Sigo trabajando: dime qué más quieres y lo hago.


PARTE s20-11 — COORDINADOR ÚNICO DE SUBIDA (ORD-1525) — puestos 642–669

Rama nueva: dedupe-8g-s20-11. Base: dedupe-8g-merlin @bd1ecdb3ff08c3f17067d117938687437b8f4286 (cabeza vigente verificada por API antes del push; la base bc530485 del handover era la de extracción local del coordinador, no la de subida).
Nuevo commit: 13d4ccf4269a08ffcb769b16e04b1f183fa6aaf2, verificado por GET de la ref (mismo sha, comprobación independiente). Un commit, sin force. Nada en main, Netlify, Cloudflare ni Convex.

Pusheados: 27/28, todos contenido COMPLETO, medición 0/0 con el filtro slice3 del slice (verificar.py) contra la vieja fresca, 0 cruzado por lote, títulos ≤60, extractos ≤155. Ficheros del commit (18), incluidos blog-posts-autocaravanas-lote3.ts, lote4.ts, lote13.ts, lote14.ts, lote16.ts, lote125.ts y sus lote125-g03/g05/g06/g07.ts, merlin1.ts, ue-china-hibridos-2026.ts, radar-20261015.ts, radar-20261023c.ts, lote-oct-b.ts, octubre-2026.ts, motor-2026-i.ts y modelos-desconocidos.ts. Sin solape con 622–641 (slice3) ni con 670 en adelante; no se tocó ningún fichero lite (sin prosa).

Duplicados idénticos aplicados en AMBAS copias (verificado: copias idénticas en la vieja fresca y 2/2 aplicadas): Challenger 380 (g03 + lote125), Ahorncamp T 690 (g05 + lote125), Etrusco CV 600 SB (g06 + lote125), Benimar Amphitryon 940 (g07 + lote125).

Caso 644 ue-china-freno-hibridos-enchufables, INCLUIDO con la condición del handover cumplida y verificada: la vieja fresca tiene 0 saltos reales y 96 secuencias literales \n en una cadena entre comillas dobles, así que el medidor ingenuo da palabras viejas 0 (precedente Deepal de s20-12). Medición DECODIFICADA contra la vieja fresca: 952→1067 palabras, 0/0 unido y por bloque, tablas 24=24, href 3/3, img 2/2, Fuentes en ambas — declarado como OK SOLO DECODIFICADO, no OK oficial. Prueba de seguridad TS en el fichero del commit: el contenido aplicado es byte a byte igual al content_nuevo, el tramo entre comillas NO contiene ningún salto real (95 escapes \n), así que el TS parsea; la condición del handover queda garantizada por la re-codificación del driver, no por saltos reales. Matiz declarado: la línea de publicación pasa a «Publicado el 11 de octubre de 2026» (misma fecha, sin enlace implicado).

NO PUSHEADO (1), sin pérdida: 669 evercross-ev85f, SALTADO POR SOLAPE — ya estaba pusheado en s20-12 (verificado en la lista de pusheados de s20-12push/result.json). No se duplica; su fichero patinetes-exp-p4.ts no se toca en este commit.

Notas honestas heredadas del coordinador y declaradas: Voge 300ACX usa el JSON ya corregido por el coordinador (frase «red de concesionarios», re-verificado 0/0, cruzado 0), no el informe del trabajador; las cifras son las de las viejas según afirmación de cada trabajador (el coordinador no re-auditó figura por figura; Grok mantiene ese control en integración); varias prosas nuevas son bastante más largas que las viejas (Rapido C55 1156→2184, Skoda Epiq 680→1151, Chausson 640 899→1477, Concorde 935→1344, Ahorncamp 1638→2052, Cyclone 982→1316) — más largo no es por sí mismo relleno y los trabajadores afirman que no lo hay, pero no hubo auditoría frase a frase de relleno.

Medición declarada para que Grok la reproduzca: filtro slice3 (minúsculas, sin acentos, tokens [a-z0-9]+, 8-gramas; prosa excluye <img, tablas, *Fuentes:/*Fotos: y colas, líneas solo-enlace y plantilla multa/analizador; encabezados incluidos). Limitación honesta: el filtro NO mide texto de ancla; la comprobación href del verificador del slice ya cubre href entrecomillados y sin comillas por ocurrencia cruda.

La 0913 sigue abierta; este es solo el parte del slice s20-11, sin «he terminado» total, sin pedir publicar hoy ni fecha de publicación. Con este slice, el rango 642–669 queda cerrado sin pendientes. Sigo trabajando: dime qué más quieres y lo hago.
