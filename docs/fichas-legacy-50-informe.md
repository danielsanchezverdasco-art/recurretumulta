# Fichas legacy 50 — informe de completado (rama `merlin-fichas-legacy-50`)

Fecha: 20/10/2026 · Base: `merlin-arreglos-niky-datos` @ 609061df · Orden del usuario: «encárgate de las 50 fichas viejas, completarlas 100%».

## Diagnóstico de raíz

La cohorte legacy de la Fase 2 (50 fichas de coches con destacados «0 CV / 0 L / 0 €», lista exacta en `~/workspace/fase2-cierre/extras.json` → `fichas_sin_fecha_rutas`) tenía una causa estructural: **las 50 estaban ausentes de `scripts/coches-slugs.txt` (0/50)**, así que el prerender nunca las regeneraba y el dist se rellenaba con HTML viejo de la web en vivo (plantilla antigua: donuts a 0, sin fecha «Actualizado» ni autor en JSON-LD, texto pegado). En los datos, los destacados ya estaban rellenos en 49/50 — la única con todo a null era `fangchengbao-ti-9-2026` — pero faltaban campos secundarios en casi todas (dimensiones, peso, consumo, par, emisiones, etiqueta DGT) y `precioDesde` en 14.

## Qué se ha hecho

1. **`scripts/coches-slugs.txt`**: añadidas las 50 (2.405 → 2.455) → vuelven a prerenderizarse y a entrar en sitemap con la plantilla actual.
2. **Datos**: 219 campos rellenados con datos reales verificados por variante exacta (fabricante primero; km77/JATO/coches.net y salas de prensa como respaldo), más 40 ediciones centrales/de coherencia documentadas en la tabla. Las conversiones EPA (Maverick, Mustang GTD, F-150 Lightning) van marcadas en `aprox` y documentadas como conversión, nunca como WLTP. `precioDesde` solo se ha rellenado con precio oficial ES/UE en EUR (Kia EV3 GT: PVP oficial de Kia Alemania, marcado `aprox`); donde solo existe MSRP de origen, se cita en `pros` (convención de la casa, como el Cybertruck: `precioDesde` null).
3. **Correcciones de datos previos erróneos** (la ficha mezclaba dos variantes): Gladiator (potencia/tipo del diésel UE real), Jaguar XE/XF (tracción y 0-100 del P250), S4 Avant (tipo y 0-100 del TFSI), NSX (tipo: híbrido, no eléctrico), EV3 GT (largo/maletero oficiales GT), MiTo, A3 Sedán, A4 Avant, C4 Cactus, Lodgy, Wrangler 392 y Ceed GT. Detalle en la tabla.
4. **Fotos**: las 50 ya tenían foto real del modelo exacto (≥2 ficheros en `public/media`, galería de 2-3); sin cambios. `imagenInteriorOficial` queda vacío en 45 — no se ha forzado ninguna foto.
5. **Regenerados**: `gen-data-loaders.mjs` (comparador-lite) y `gen-ficha-extra.mjs` (rivales) ejecutados; sus salidas van en la rama.
6. **noindex**: al empezar se añadieron las 21 que faltaban a `noindex.generated.json` (las 50 dentro mientras se completaban); al terminar salen las 49 completadas. Solo queda dentro `fangchengbao-ti-9-2026`.
7. **`npx tsc -b`: 0 errores.**

## Resultado: 49/50 completas e indexables · 1 noindex con motivo honesto

La que queda fuera es `fangchengbao-ti-9-2026`: verificado en octubre de 2026 que BYD **sigue sin publicar** precio, potencia combinada, par, maletero ni 0-100 del Ti 9 (lanzamiento en China en Q4 2026; las cifras que circulan son estimaciones de prensa). Es el caso Maextro V800: no se maquilla ningún cero ni se inventa la cifra; la ficha queda noindex con el motivo documentado y se completará cuando BYD publique los datos.

## Tabla ficha a ficha

| Ficha | Qué se ha rellenado / corregido (valores) | Estado final |
|---|---|---|
| `alfa-romeo-giulietta-2025` | altoMm: 1465<br>anchoMm: 1798<br>consumo: 6.2<br>consumoUnidad: l/100 km<br>emisionesCo2: 144<br>etiquetaDgt: C<br>parNm: 215<br>pesoKg: 1355<br>traccion: Delantera | Completa e indexable |
| `alfa-romeo-mito-2025` | altoMm: 1446<br>anchoMm: 1720<br>consumo: 4.2<br>consumoUnidad: l/100 km<br>emisionesCo2: 99<br>etiquetaDgt: C<br>parNm: 145<br>pesoKg: 1205<br>traccion: Delantera<br>ceroCien: 10,4→11,4 (oficial TwinAir 105, km77) | Completa e indexable |
| `audi-a3-sedan-2025` | altoMm: 1425<br>anchoMm: 1816<br>consumo: 5.6<br>consumoUnidad: l/100 km<br>emisionesCo2: 128<br>etiquetaDgt: ECO<br>parNm: 250<br>pesoKg: 1395<br>traccion: Delantera<br>velocidadMax: 224→232 (224 es del Sportback) | Completa e indexable |
| `audi-a4-avant-2025` | altoMm: 1435<br>anchoMm: 1847<br>consumo: 6.3<br>consumoUnidad: l/100 km<br>emisionesCo2: 143<br>etiquetaDgt: ECO<br>parNm: 270<br>pesoKg: 1540<br>traccion: Delantera<br>ceroCien: 8,6→8,9 (8,6 es de la berlina)<br>maleteroL: 505→495 (oficial Avant) | Completa e indexable |
| `audi-r8-2025-precio-ficha-tecnica` | emisionesCo2: 293 | Completa e indexable |
| `audi-rs4-avant-2025` | altoMm: 1414<br>anchoMm: 1866<br>consumo: 9.8<br>consumoUnidad: l/100 km<br>emisionesCo2: 222<br>etiquetaDgt: C<br>parNm: 600<br>pesoKg: 1820<br>traccion: Total | Completa e indexable |
| `audi-s4-avant-2025` | altoMm: 1411<br>anchoMm: 1842<br>consumo: 7.5<br>consumoUnidad: l/100 km<br>emisionesCo2: 171<br>etiquetaDgt: C<br>parNm: 500<br>pesoKg: 1750<br>traccion: Total<br>tipo: Diésel→Gasolina y ceroCien 4,7→4,9 (la ficha es el 3.0 TFSI 354 CV; 4,7 es de la berlina) | Completa e indexable |
| `audi-tt-2025-precio-ficha-tecnica` | emisionesCo2: 161 | Completa e indexable |
| `bmw-ix-xdrive40-2025` | — (verificación sin cambios) | Completa (ya lo estaba; verificado) |
| `bmw-x6-m-2025` | — (verificación sin cambios) | Completa (ya lo estaba; verificado) |
| `citroen-c4-cactus-2025` | altoMm: 1480<br>anchoMm: 1729<br>consumo: 4.7<br>consumoUnidad: l/100 km<br>emisionesCo2: 107<br>etiquetaDgt: C<br>parNm: 205<br>pesoKg: 1095<br>traccion: Delantera<br>ceroCien: 10,8→9,3 y velocidadMax 184→188 (184 era del BlueHDi; la ficha es el PureTech 110) | Completa e indexable |
| `dacia-lodgy-2025` | altoMm: 1679<br>anchoMm: 1751<br>consumo: 6.1<br>consumoUnidad: l/100 km<br>emisionesCo2: 139<br>etiquetaDgt: C<br>parNm: 156<br>pesoKg: 1261<br>traccion: Delantera<br>ceroCien: 12,0→11,6 y velocidadMax 170→172 (12,0 era el modo GLP de la bifuel) | Completa e indexable |
| `daihatsu-copen-2025` | altoMm: 1245<br>anchoMm: 1475<br>consumo: 6.4<br>consumoUnidad: l/100 km<br>emisionesCo2: 151<br>etiquetaDgt: B<br>parNm: 110<br>pesoKg: 830<br>traccion: Delantera | Completa e indexable |
| `fangchengbao-ti-9-2026` | consumo: 6.4<br>consumoUnidad: l/100 km<br>aprox += consumo<br>planMantenimiento orientativo (misma marca) añadido<br>contra añadida aclarando el consumo MIIT | **NOINDEX — motivo honesto**: BYD sigue sin publicar precio, potencia combinada, par, maletero ni 0-100 (verificado oct-2026, prensa china/MIIT). Solo se rellenó el consumo MIIT. Queda en noindex.generated.json hasta que BYD publique los datos |
| `fiat-tipo-sw-2025` | altoMm: 1514<br>anchoMm: 1792<br>emisionesCo2: 117<br>etiquetaDgt: ECO<br>pesoKg: 1435 | Completa e indexable |
| `ford-explorer-phev-2023` | — (verificación sin cambios) | Completa (ya lo estaba; verificado) |
| `ford-f-150-lightning-2025` | consumo: 29.8<br>consumoUnidad: kWh/100 km<br>etiquetaDgt: Cero<br>aprox += consumo (conversión EPA documentada)<br>pro de precio actualizado a 47.685 $ | Completa con nulos documentados: precioDesde (sin venta oficial de esta versión en la UE; MSRP EE.UU. citado en pros) |
| `ford-fiesta-2025-precio-ficha-tecnica` | emisionesCo2: 114 | Completa e indexable |
| `ford-fiesta-st-2023` | — (verificación sin cambios) | Completa (ya lo estaba; verificado) |
| `ford-maverick-2025` | emisionesCo2: 221<br>etiquetaDgt: C<br>aprox += emisionesCo2 (conversión EPA documentada)<br>pro de precio actualizado a 29.965 $ | Completa con nulos documentados: precioDesde (no se vende en Europa; MSRP EE.UU. citado en pros) |
| `ford-mustang-gtd-2025` | emisionesCo2: 460<br>aprox += emisionesCo2 (conversión EPA documentada) | Completa con nulos documentados: maleteroL (Ford no publica el volumen del GTD) |
| `ford-ranger-ms-rt-2025` | altoMm: 1815<br>pesoKg: 2358<br>aprox += pesoKg (versión equivalente V6, Ford no publica el del MS-RT) | Completa e indexable |
| `ford-transit-nugget-plus-2025` | altoMm: 2120<br>emisionesCo2: 226 | Completa con nulos documentados: ceroCien (Ford no lo publica) y pesoKg (el catálogo solo da rango 2.961–3.345 kg); maletero null por convención camper |
| `genesis-g70-2025` | altoMm: 1400<br>anchoMm: 1850<br>emisionesCo2: 201<br>etiquetaDgt: C<br>pesoKg: 1675 | Completa con nulos documentados: precioDesde (Genesis DE no publica tarifa «desde» accesible; los «desde» de agregadores no son oficiales y no se usan) |
| `genesis-g80-2025` | altoMm: 1465<br>anchoMm: 1925<br>emisionesCo2: 205<br>etiquetaDgt: C<br>pesoKg: 1930 | Completa con nulos documentados: precioDesde (ídem G70) |
| `genesis-gv80-2025` | altoMm: 1715<br>anchoMm: 1975<br>emisionesCo2: 248<br>etiquetaDgt: C<br>pesoKg: 2155 | Completa con nulos documentados: precioDesde (ídem G70) |
| `honda-accord-2024` | altoMm: 1450<br>anchoMm: 1862<br>etiquetaDgt: ECO<br>pesoKg: 1573 | Completa con nulos documentados: precioDesde (no se vende en la UE; MSRP EE.UU. en pros) y emisionesCo2 (sin homologación WLTP) |
| `honda-e-2023` | altoMm: 1512<br>anchoMm: 1752<br>cargaRapidaKw: 50<br>consumo: 18.0<br>consumoUnidad: kWh/100 km<br>pesoKg: 1527<br>emisionesCo2: 0 (convención EV) | Completa e indexable |
| `honda-nsx-2022` | altoMm: 1214<br>anchoMm: 1939<br>etiquetaDgt: ECO<br>pesoKg: 1790<br>tipo: Eléctrico→Híbrido (corrección: Sport Hybrid SH-AWD no enchufable) | Completa con nulos documentados: precioDesde, consumo y emisionesCo2 (el Type S no tuvo cifras oficiales UE; las del NSX estándar no se le atribuyen; MSRP EE.UU. en pros) |
| `honda-s2000-2009` | altoMm: 1285<br>anchoMm: 1750<br>emisionesCo2: 235<br>etiquetaDgt: C<br>pesoKg: 1270 | Completa e indexable |
| `hyundai-elantra-n-2024` | altoMm: 1415<br>anchoMm: 1825<br>etiquetaDgt: C<br>pesoKg: 1480 | Completa con nulos documentados: precioDesde (no se vende en la UE; MSRP en pros) y emisionesCo2 (sin homologación WLTP) |
| `hyundai-i20-n-2024` | altoMm: 1440<br>anchoMm: 1775<br>emisionesCo2: 158<br>pesoKg: 1190 | Completa e indexable |
| `hyundai-i30-fastback-n-2024` | altoMm: 1419<br>anchoMm: 1795<br>emisionesCo2: 191<br>pesoKg: 1474 | Completa e indexable |
| `hyundai-kona-n-2023` | altoMm: 1565<br>anchoMm: 1800<br>emisionesCo2: 194<br>pesoKg: 1510 | Completa e indexable |
| `isuzu-mu-x-2025` | altoMm: 1825<br>anchoMm: 1870<br>pesoKg: 2155<br>etiquetaDgt: B (equivalencia DGT: diésel Euro 5; sin homologación UE) | Completa con nulos documentados: precioDesde (no se vende en la UE; precio oficial australiano en pros) y emisionesCo2 (sin WLTP) |
| `jaguar-xe-2024` | altoMm: 1410<br>anchoMm: 1850<br>emisionesCo2: 179<br>pesoKg: 1611<br>traccion: Total→Trasera y ceroCien 6,2→6,7 (corrección: eran del P300 AWD; la ficha es el P250) | Completa e indexable |
| `jaguar-xf-2024` | altoMm: 1456<br>anchoMm: 1890<br>emisionesCo2: 177<br>pesoKg: 1735<br>traccion: Total→Trasera y ceroCien 6,5→6,9 (corrección: eran del P300 AWD; la ficha es el P250) | Completa e indexable |
| `jeep-compass-trailhawk-2025` | altoMm: 1649<br>anchoMm: 1819<br>emisionesCo2: 46<br>pesoKg: 1935 | Completa e indexable |
| `jeep-gladiator-2025` | altoMm: 1843<br>anchoMm: 1894<br>emisionesCo2: 256<br>pesoKg: 2403<br>potenciaCv: 272→264 y tipo Gasolina→Diésel (corrección: la ficha mezclaba la potencia del Wrangler 2.0; el resto del contexto es el 3.0 V6 diésel UE) | Completa e indexable |
| `jeep-grand-cherokee-l-2025` | altoMm: 1816<br>anchoMm: 1979<br>etiquetaDgt: C<br>pesoKg: 2113 | Completa con nulos documentados: precioDesde (MSRP EE.UU. en pros) y emisionesCo2 (solo EPA, sin g/km oficial) |
| `jeep-wrangler-rubicon-392-2025` | altoMm: 1892<br>anchoMm: 1877<br>etiquetaDgt: C<br>pesoKg: 2390<br>largoMm: 4880→4785 (oficial) | Completa con nulos documentados: precioDesde (MSRP EE.UU. en pros) y emisionesCo2 (solo EPA) |
| `kia-carnival-2025` | altoMm: 1775<br>anchoMm: 1995<br>etiquetaDgt: C<br>pesoKg: 2066 | Completa con nulos documentados: precioDesde (MSRP EE.UU. en pros) y emisionesCo2 (sin WLTP del V6) |
| `kia-ceed-gt-2025` | altoMm: 1442<br>anchoMm: 1800<br>emisionesCo2: 154<br>pesoKg: 1413<br>velocidadMax: 230→225 (homologación de la versión DCT) | Completa e indexable |
| `kia-ev3-gt-2026` | altoMm: 1575<br>anchoMm: 1850<br>cargaRapidaKw: 128<br>consumo: 18.1<br>consumoUnidad: kWh/100 km<br>pesoKg: 2010<br>precioDesde: 53990<br>velocidadMax: 170<br>emisionesCo2: 0 (convención EV)<br>etiquetaDgt: Cero<br>largoMm: 4300→4310 (oficial GT, corrige gama base)<br>maleteroL: 460→413 (oficial GT)<br>aprox += precioDesde (PVP Alemania, no España) | Completa (precio oficial Kia Alemania 53.990 €, marcado aprox por no ser PVP España) |
| `kia-soul-ev-2024` | altoMm: 1605<br>anchoMm: 1800<br>cargaRapidaKw: 77<br>consumo: 15.7<br>consumoUnidad: kWh/100 km<br>pesoKg: 1682<br>emisionesCo2: 0 (convención EV) | Completa e indexable |
| `kia-stinger-2024` | altoMm: 1400<br>anchoMm: 1870<br>emisionesCo2: 244<br>pesoKg: 1834 | Completa e indexable |
| `lexus-gx-550` | altoMm: 1920<br>anchoMm: 1980<br>etiquetaDgt: C<br>parNm: 650<br>pesoKg: 2533 | Completa con nulos documentados: emisionesCo2 (modelo solo norteamericano; Lexus no publica g/km) |
| `lexus-is-300h` | altoMm: 1430<br>anchoMm: 1810<br>emisionesCo2: 133<br>parNm: 221<br>pesoKg: 1720 | Completa e indexable |
| `lexus-lm-350h` | altoMm: 1940<br>anchoMm: 1890<br>emisionesCo2: 163<br>parNm: 239<br>pesoKg: 2355 | Completa e indexable |
| `smart-fortwo-eq-2025` | — (verificación sin cambios) | Completa (ya lo estaba; verificado) |

## Notas de honestidad

- Consumo/CO₂ marcados NEDC donde la versión es pre-WLTP (Giulietta, MiTo, C4 Cactus, Lodgy, Copen, Stinger): son las cifras oficiales de su época, no WLTP.
- Emisiones por conversión EPA (documentadas y marcadas `aprox`): Maverick 221 g/km y Mustang GTD 460 g/km — no existe WLTP de esas versiones. En Grand Cherokee L, Wrangler 392, Carnival, Accord, Elantra N, MU-X y GX 550 se ha preferido dejar el campo vacío a convertir (la EPA no publica g/km trasladables) — consta en la tabla.
- La etiqueta DGT de modelos no vendidos en la UE se asigna por equivalencia de norma (p. ej. MU-X: diésel Euro 5 → «B»), no por homologación española.
- Fuentes campo a campo: ficheros `research-A..G.json` del frente de trabajo (fabricante primero en todos los clústeres).
