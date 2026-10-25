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
