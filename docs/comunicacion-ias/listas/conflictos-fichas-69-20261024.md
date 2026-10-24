# Contradicciones ficha↔post — tarea-46 (69 posts reescritos)

Base verificada: rama `reescritura-cortas-merlin-20261024` @ `b3ae708e`.
Avisos de tanda de partida: `docs/comunicacion-ias/merlin.md` (rama `completar-fichas`,
avisos tarea-46 del 24/10/2026). Cada conflicto anotado en esos avisos se ha
comprobado contra el fichero repo real; además se han revisado los 69 posts
(título, excerpt y cuerpo) contra su ficha enlazada. Los 13 slugs sin post `/blog/`
NO están en esta lista, por orden expresa (se saltan, no se crea nada).

Convención: «ficha» = entrada del comparador de la misma rama; «post» = objeto
del fichero de blog de la misma rama. Títulos, slugs, excerpts y keywords están
congelados: los conflictos de título/excerpt NO se han corregido, solo se anotan.
Los conflictos en fichas ajenas a los dos modelos de la tarea 1 (a) y (b) SOLO se
anotan, NO se corrigen.

## A. Corregidos en esta tarea (ver `informe-tarea1.md`)

| # | Post (slug) | Campo | Valor en ficha | Valor en post | Fuente repo |
|---|---|---|---|---|---|
| A1 | `cecotec-bongo-serie-doble-z75` | contra / veredicto | contra: «El Z85 da más autonomía por poco más»; veredicto: «el Z85 ofrece más batería por una diferencia pequeña» | El post ya era correcto: Z85 1.299 €, «30 euros menos», 1.200 Wh, 85 km | `src/lib/comparador-patinetes-exp-p6.ts` (entrada `cecotec-bongo-serie-doble-z75`) y `src/lib/blog-posts-patinetes-exp-p6.ts`. CORREGIDO en `edited/` |
| A2 | `smartgyro-raptor-dual-evo` | tiempoCargaH / mantenimiento | `tiempoCargaH: 8`; contras/veredicto: «unas 8 horas»; mantenimientoDIY: «Tiempo de carga de unas 4–5 horas» | Tabla «Unas 8 horas» + nota honesta que exponía la discrepancia 8 h vs 4–5 h | `src/lib/comparador-patinetes-exp-p6.ts` (entrada `smartgyro-raptor-dual-evo`) y `src/lib/blog-posts-patinetes-exp-p6.ts`. CORREGIDO en `edited/` (8 h en todo) |

## B. Conflictos título/excerpt ↔ ficha (congelados; el cuerpo del post sigue a la ficha)

| # | Post (slug) | Campo | Valor en ficha | Valor en título/excerpt | Fuente repo |
|---|---|---|---|---|---|
| B1 | `ajp-pr3-240-2026-precio-ficha-tecnica` | precio | `precioDesde: null` (descatalogada, sin tarifa) | Título: «PR3 240: enduro de 108 kg por 3.600 €» | Post: `src/lib/blog-posts-lote10.ts`; ficha: `src/lib/comparador-motos-lote10.ts` (id `ajp-pr3-240-2026-ficha-tecnica-precio`). Cuerpo: «Sin tarifa oficial: descatalogada, solo ocasión» |
| B2 | `benelli-302s-2026-precio-ficha-tecnica` | precio | `precioDesde: null` (no se vende en España) | Título: «302S: naked bicilíndrica de 38 CV por 4.200 €» | Post: `src/lib/blog-posts-lote10.ts`; ficha: `src/lib/comparador-motos-lote10.ts`. Cuerpo: «Sin tarifa oficial en España: solo mercado de ocasión» |
| B3 | `hero-vida-v1-2026-precio-ficha-tecnica` | precio | `precioDesde: 1000` (≈1.000 € orientativo desde India) | Título: «Vida V1: eléctrica de 165 km por 1.600 €» | Post: `src/lib/blog-posts-lote10.ts`; ficha: `src/lib/comparador-motos-lote10.ts`. Cuerpo: «unos 1.000 € (precio orientativo desde India)» |
| B4 | `kymco-ionex-s7-2026-precio-ficha-tecnica` | precio | `precioDesde: null` (solo Taiwán) | Título: «Ionex S7: eléctrica con ABS por 4.500 €» | Post: `src/lib/blog-posts-lote10.ts`; ficha: `src/lib/comparador-motos-lote10.ts`. Cuerpo: «Sin tarifa oficial: solo se comercializa en Taiwán» |
| B5 | `wottan-storm-s-300-2026-precio-ficha-tecnica` | precio | `precioDesde: 4490` | Título: «Storm-S 300: scooter GT de 27 CV por 4.199 €» | Post: `src/lib/blog-posts-lote10.ts`; ficha: `src/lib/comparador-motos-lote10.ts`. Cuerpo: «tarifa oficial en España es de 4.490 €» |
| B6 | `norton-v4sv-2026-precio-ficha-tecnica` | precio | `precioDesde: 52300` | Título: «V4SV: superbike de 185 CV por 52.000 €»; excerpt: «Precio orientativo de 52.000 €» | Post: `src/lib/blog-posts-lote10.ts`; ficha: `src/lib/comparador-motos-lote10.ts`. Cuerpo: «unos 52.300 €». Diferencia de 300 € (redondeo) |
| B7 | `bmw-m-1000-rr-2025-ficha-tecnica-precio` | precio | `precioDesde: 42410.05` (tarifa oficial España, verificado 20/10/2026) | Excerpt: «desde 41.580 €» | Post: `src/lib/blog-posts-motos-exp-m8.ts`; ficha: `src/lib/comparador-motos-exp-m8.ts`. Cuerpo: 42.410 € en tabla, FAQ y pros/contras |
| B8 | `rieju-aventura-500-2025-ficha-tecnica-precio` | precio | `precioDesde: 7799` | Excerpt: «desde ~6.799 €» | Post: `src/lib/blog-posts-motos-exp-m23.ts`; ficha: `src/lib/comparador-motos-exp-m23.ts`. Cuerpo: «precio oficial de 7.799 € en España» en todo el artículo. NUEVO: no estaba en los avisos de tanda |
| B9 | `kukirin-m4-max` | precio | `precioEur: null` | Excerpt: «por ~524 €» | Post: `src/lib/blog-posts-patinetes-exp-p3.ts`; ficha: `src/lib/comparador-patinetes-exp-p3.ts` |
| B10 | `kukirin-s1-max` | precio | `precioEur: null` | Título: «KuKirin S1 Max: urbano legal por 294 €»; excerpt: «por ~294 €» | Post: `src/lib/blog-posts-patinetes-exp-p3.ts`; ficha: `src/lib/comparador-patinetes-exp-p3.ts` |
| B11 | `iscooter-ix7-pro` | precio | `precioEur: 486` | Excerpt: «por ~709 £» (≈768 € al cambio; no ≈486 €) | Post: `src/lib/blog-posts-patinetes-exp-p3.ts`; ficha: `src/lib/comparador-patinetes-exp-p3.ts`. Cuerpo: 486 € según la ficha, con la advertencia de que iScooter no publica tarifa oficial verificable |
| B12 | `smartgyro-raptor-dual-evo` | precio | `precioEur: null` (sin PVP oficial verificable, verificado 20/10/2026) | Título: «Smartgyro Raptor Dual Evo: 2x2 con DGT por 949 €»; excerpt: «certificado DGT por 949 €» | Post: `src/lib/blog-posts-patinetes-exp-p6.ts`; ficha: `src/lib/comparador-patinetes-exp-p6.ts`. Cuerpo: «Sin PVP oficial… en torno a 949 € en tiendas». Los contras/veredicto de la propia ficha también dicen 949 € (ver C7) |

## C. Conflictos internos de ficha que el post reproduce o gestiona (NO corregidos)

| # | Post (slug) | Campo | Valor en ficha | Qué hace el post | Fuente repo |
|---|---|---|---|---|---|
| C1 | `bmw-c-400-x-2025-ficha-tecnica-precio` | carnet | Campo `carnet: "A2"` PERO pro: «Límite exacto del A2 (25 kW): se conduce con el carnet de coche +3 años (B)» | Reproduce la afirmación atribuyéndola a la ficha y añade: «conviene confirmar en tu jefatura de tráfico antes de comprarlo, porque la equivalencia B+3 años tiene matices» | Ficha: `src/lib/comparador-motos-exp-m8.ts`; post: `src/lib/blog-posts-motos-exp-m8.ts`. Nota legal: la equivalencia B+3 años equivale al A1 (hasta 125 cc), no a un 350 cc |
| C2 | `bmw-m-1000-rr-2025-ficha-tecnica-precio` | palmarés SBK | Pro: «En 2025 ganó el Mundial de Superbike con Toprak Razgatlioglu» (el título fue en 2024, según el aviso de tanda) | Omite el año: «ganar el Mundial de Superbike con Toprak Razgatlioglu», sin propagar el año erróneo | Ficha: `src/lib/comparador-motos-exp-m8.ts`; post: `src/lib/blog-posts-motos-exp-m8.ts` |
| C3 | `dualtron-victor-limited` | precio | Campo `precioEur: 729` PERO contra: «Sin precio ni autonomía publicados» | Dice «sin precio» (sigue al contra, no al campo numérico) | Ficha y post: `src/lib/comparador-patinetes-exp-p2.ts` y `src/lib/blog-posts-patinetes-exp-p2.ts` |
| C4 | `dualtron-x-limited` | precio | Campo `precioEur: 779` PERO contra: «Sin precio publicado (apunta a más de 5.000 €)» | Dice «sin precio oficial publicado —la estimación apunta a más de 5.000 €—» | Ficha y post: `src/lib/comparador-patinetes-exp-p2.ts` y `src/lib/blog-posts-patinetes-exp-p2.ts` |
| C5 | `kaabo-mantis-10-plus-v2` | precio | Campo `precioEur: 3990` PERO contra: «Kaabo no publica para este V2 un PVP cerrado en euros en España» | Explica los dos datos: «La ficha recoge un importe de referencia de 3.990 €, pero la propia ficha advierte… no un precio oficial de la marca» | Ficha y post: `src/lib/comparador-patinetes-exp-p2.ts` y `src/lib/blog-posts-patinetes-exp-p2.ts` |
| C6 | `iscooter-ix4` e `iscooter-ix7-pro` | precio (ficha↔ficha) | AMBAS fichas llevan `precioEur: 486` (mismo importe para dos modelos distintos; posible copia, sin verificar) | Ambos posts dicen 486 € según su ficha | Fichas: `src/lib/comparador-patinetes-exp-p3.ts`. Ver también B11 (excerpt ix7 en libras) |
| C7 | `teverun-blade-q` y `teverun-blade-q-pro` | precio (ficha↔ficha) | Blade Q: `precioEur: 2449`; Blade Q Pro: `precioEur: 2299` (el Pro, con doble motor y mejores cifras, es más barato) | Ambos posts siguen a sus fichas y el del Q señala la anomalía: «el Blade Q Pro… marca 2.299 €, es decir, menos que los 2.449 € del Q básico, con mejores cifras en casi todo» | Fichas y posts: `src/lib/comparador-patinetes-exp-p3.ts` y `src/lib/blog-posts-patinetes-exp-p3.ts` |
| C8 | `smartgyro-raptor-dual-evo` | precio (ficha interna) | `precioEur: null` PERO contras («A 949 €…») y veredicto («Por 949 €…») usan 949 € como precio | El cuerpo del post lo presenta con honestidad («en torno a 949 € en tiendas», sin PVP oficial); título/excerpt dicen 949 € sin matiz (ver B12) | Ficha: `src/lib/comparador-patinetes-exp-p6.ts`; post: `src/lib/blog-posts-patinetes-exp-p6.ts`. NO corregido: fuera del alcance de (b) (tiempo de carga + mantenimiento); queda como pregunta para el coordinador |

## D. Diferencias de moneda explicadas o a revisar (no son conflictos duros)

| # | Post (slug) | Observación | Fuente |
|---|---|---|---|
| D1 | `gotrax-gx-zero` | Excerpt «desde 799 $» ↔ ficha `precioEur: 700`. EXPLICADO en el post: 799 $ oficiales en EE. UU. ≈ 700 € al cambio (BCE 19/10/2026, ÷1,1225). Sin conflicto | `src/lib/blog-posts-patinetes-exp-p5.ts`; ficha `src/lib/comparador-patinetes-exp-p5.ts` |
| D2 | `apollo-city-stellar` | Ficha `precioEur: 1500`; post: «~1.500 € (estimado desde 2.299 $ CAD; sin tarifa oficial en España)». Conversión explicada. Sin conflicto | `src/lib/blog-posts-patinetes-exp-p8.ts`; ficha `src/lib/comparador-patinetes-exp-p8.ts` |
| D3 | `iscooter-ix4` | Excerpt «por ~449 £» ↔ ficha `precioEur: 486` y cuerpo 486 €. La equivalencia 449 £ ≈ 486 € exige un tipo ≈1,083 que el post NO cita; al cambio aproximado de octubre de 2026 (≈1,16) serían ≈521 €. A revisar: o se cita el tipo o se unifica la moneda | `src/lib/blog-posts-patinetes-exp-p3.ts`; ficha `src/lib/comparador-patinetes-exp-p3.ts` |

## E. No verificado contra la ficha enlazada (pendiente, no afirmado como conflicto)

| # | Post (slug) | Por qué no se pudo verificar | Pista para el coordinador |
|---|---|---|---|
| E1 | `ducati-panigale-v2-2025-analisis-opinion` | La ficha enlazada (`/motos/ducati-panigale-v2-2025-ficha-tecnica-precio/`) no se localizó en los comparadores descargados (no está en `comparador-motos-exp-m1.ts` ni en `comparador-motos-data.ts`). El post es internamente coherente (17.990 € en tabla, cuerpo y FAQ; nota: «una versión anterior citaba 17.690 €; la ficha vigente fija 17.990 €») | Localizar la ficha Panigale V2 2025 y comprobar `precioDesde` = 17.990 € |
| E2 | `ford-transit-custom-nugget-plus-2026-analisis-opinion` | La ficha enlazada (`/coches/ford-transit-custom-nugget-plus-2026-precio-ficha-tecnica/`) no se localizó en los ficheros descargados. El post dice «unos 75.000 € (aprox.)» y «estándar desde 72.290 €» (diferencia 2.710 €, aritmética correcta) | Localizar la ficha Nugget Plus y comprobar el precio |
| E3 | `ford-transit-custom-nugget-active-2026-analisis-opinion` | El post describe la Nugget Active PHEV (233 CV combinados, 11,8 kWh, ~56 km eléctricos, etiqueta CERO, ~78.000 €). La ficha Ford Nugget Active LOCALIZADA (`src/lib/comparador-campers-ford.ts`, id `ford-nugget-active-2026-precio-ficha-tecnica`) es DIÉSEL 170 CV, `precioDesde: 71988`, etiqueta C. PERO el post enlaza a otro id (`ford-transit-custom-nugget-active-2026-precio-ficha-tecnica`), no localizado. Si la URL del post sirviera la ficha diésel, sería una contradicción grave; si sirve una ficha PHEV distinta, no hay conflicto: hay que verificar qué ficha sirve esa URL antes de afirmar nada | Verificar la ficha que sirve `/coches/ford-transit-custom-nugget-active-2026-precio-ficha-tecnica/` |

## F. Verificados sin contradicción detectada (44 posts listados + 2 explicados en D = 46 sin conflicto)

Método: título, excerpt y cuerpo del post comparados con la ficha enlazada
(precio, autonomía, potencia, peso y tiempo de carga cuando la ficha los publica;
conversiones de moneda explicadas en el post se dan por buenas). Estos 44 no
mostraron discrepancias ficha↔post (los 2 restantes sin conflicto son GX Zero
y Apollo, explicados en D1–D2):

- P5: `gotrax-gx2`, `gotrax-gxl-v2`, `isinwheel-gt1`, `isinwheel-s10plus`, `zwheel-e12`
  (GX Zero ver D1).
- M8: `aprilia-rs-660-factory-2025-ficha-tecnica-precio`,
  `bmw-r-12-s-2025-ficha-tecnica-precio`, `ducati-multistrada-v2-2025-ficha-tecnica-precio`
  (C 400 X ver C1; M 1000 RR ver B7 y C2).
- M2: `ducati-desertx-rally-2024-ficha-tecnica-precio`. M9:
  `cfmoto-675sr-r-2025-ficha-tecnica-precio`. M18:
  `ducati-scrambler-800-full-throttle-2025-ficha-tecnica-precio`.
- P9: `gotrax-g-pro`, `gotrax-g3`, `kugoo-kirin-m3`, `kugoo-kirin-s4`, `okai-neon`,
  `okai-neon-pro`, `segway-ninebot-e22e`, `segway-ninebot-f30`, `zero-9`.
- Lote10: `bsa-bantam-350-2026-precio-ficha-tecnica`,
  `ebroh-bravo-gle-2026-precio-ficha-tecnica`, `vent-baja-125-2026-precio-ficha-tecnica`
  (el resto del lote ver B1–B6).
- P2: `kaabo-mantis-8-eco-800`, `kaabo-wolf-king-gtr`, `kaabo-wolf-king-gtr-max`,
  `vsett-10-plus-apex`, `vsett-8-plus` (Victor, X Limited y Mantis 10 Plus V2 ver C3–C5).
- P3: `hiboy-ecom-14`, `hiboy-max-pro`, `hiboy-u2-pro`, `joyor-lr8`, `joyor-s10-s-z`,
  `kukirin-g2-max`, `kukirin-m5-pro` (M4 Max, S1 Max, iX4, iX7, Teverun ver B9–B11, C6–C7, D3).
- P6: `cecotec-bongo-serie-x65-connected`, `hiley-tiger-10-pro`, `hiley-tiger-8-gtr-v4`,
  `urban-glide-ride-85-evo` (Z75 y Raptor ver A1–A2).
- P8: `dualtron-compact`, `dualtron-spider-max`, `kaabo-skywalker-10s`
  (Apollo ver D2).
- M21: `bmw-f-900-gs-2025-ficha-tecnica-precio`. Lote14: `zontes-e125-scooter-precio`.

Recuento: 2 corregidos (A) + 12 título/excerpt (B, uno compartido con A2) + 8
internos de ficha (C, dos compartidos) + 3 diferencias de moneda (D, una
compartida con C6) + 3 no verificados (E) + 44 limpios (F) + 2 explicados en D
sin conflicto = 69 posts. Los posts con al menos un conflicto anotado son 20;
los 3 de E quedan pendientes.
