# Caza fotos-283-niky — derivación de la tanda y reglas

## Orden
ORD-20241024-2140 punto 3 + tarea de Cosa 25/10 02:00. Rama `fotos-283-niky` desde
`origin/completar-fichas`. CSV `docs/comunicacion-ias/listas/fotos-283-niky.csv` con
cabecera `slug|fuente|url`. Tandas de 50. Nadie publica. Nada de main, Netlify,
Cloudflare ni force. Solo fotos reales verificadas del modelo y generación exactos
(oficiales o de prensa); nada de IA; si no existe foto real, «sin foto real» con
explicación honesta.

## Derivación honesta de las listas (25/10/2026)
- La orden habla de 283 + 324 = 607 slugs, pero la lista exacta de las 283 NO existe
  en ningún fichero del tablón (buscado en `docs/comunicacion-ias/listas/`, en las
  ramas caza-fotos-parte-02, fotos-reales-merlin, merlin-borrador-v455 y
  borrador-final-2410; tampoco existe `listas/fotos-estado.csv`).
- Grupo 324 (exacto): 324 filas de `listas/auditoria-no-indexadas.csv` con la acción
  «fix puntual: foto real (hoy «Foto pendiente de verificación»)» = 318 slugs distintos
  (6 slugs repetidos en 2 filas; una foto cubre ambas).
- Grupo 283 (operativo, verificable hoy): de `listas/fotos-faltan-tras-ramas.txt`
  (944 fichas pendientes según el cruce código↔media del borrador de Grok), se quitan
  las que tienen su fichero hero (`imagenOficial` o `imagen` de los datos) en
  caza-fotos-parte-02, fotos-reales-niky, fotos-reales-merlin o main. Quedan 79 con
  hero ausente en todas esas colecciones + 25 sin entrada de datos en esta rama
  (mayoría campers/caravanas y prototipos sin presentar como Audi Q9 y BMW iX7) =
  104 slugs. OJO: la derivación literal «quitar las que tengan CUALQUIER fichero con
  el prefijo del slug» solo deja 10, porque muchas fichas tienen galería (-ext,
  -interior) pero les falta el hero: el hero es lo que hace salir «Foto pendiente»
  (ver `src/pages/CochesFicha.tsx`, líneas ~190-230), así que el criterio correcto
  es el fichero hero, no cualquier fichero.
- Total asignado a 200 trabajadores: 104 + 318 = 422 slugs distintos, sin solaparse
  y sin duplicados (los 104 y los 318 son disjuntos: la intersección con la lista
  de 944 es 0 para los 324). NO se inventaron slugs para llegar a 607: la diferencia
  (185) corresponde a la lista de 283 que no existe como fichero; si Grok pasa esa
  lista, se asigna como tanda adicional.
- Nombres de fichero esperados: `imagenOficial` si existe en los datos, si no
  `imagen`; para slugs sin entrada de datos, `<slug>-oficial.webp` convencional
  (pendiente del cruce de Grok). Si el nombre no coincide, el hero sigue saliendo
  «Foto pendiente»: por eso cada trabajador entrega EXACTAMENTE ese nombre.

## Consolidación
Cada trabajador tiene su worktree disperso (~/workspace/wt-fotos283-wNNN) y su rama
(`fotos-283-niky-wNNN`), con sus fotos en public/media/ (git add -f) y su fragmento
CSV en hidden_files/fotos283-wNNN/fragment.csv. El coordinador consolida en
`fotos-283-niky` en tandas de 50 slugs RESUELTOS (foto o «sin foto real»), en orden
de la lista, sin esperar a que terminen todos los trabajadores; los pendientes
pasan a la tanda siguiente. Cada tanda: commit + push sin force + verificación con
`git ls-remote origin fotos-283-niky`.

## CAMBIO DE BASE — ORD-20251025-0655 (Cosa, 25/10/2026 06:55, sustituye a la 2255)
- La rama `fotos-283-niky` parte de `borrador-final-2410` (@ `9f1b8fec9`, 2026-10-25 01:48:49 +0200), NO de `completar-fichas`.
- Verificación previa al cambio: `git ls-remote origin fotos-283-niky` vacío (dos comprobaciones) → NO existía ninguna tanda consolidada en remoto; no se borró nada ni hay nada que integrar después.
- La rama local no tenía commits propios (apuntaba a `36004f86b`), así que se movió con `git checkout -B fotos-283-niky origin/borrador-final-2410`. Los ficheros sin commitear (este README, scripts, progreso) sobrevivieron intactos.
- Las fotos ya encontradas en ramas trabajadoras (w003, w013, w025 — 8 fotos verificadas) se conservan tal cual: la consolidación copia ficheros, no fusiona ramas, así que la base vieja de esas ramas no afecta. No se busca nada dos veces.
- Los trabajadores de la oleada 1 en curso NO se tocan (su base no afecta a las fotos). Las oleadas 2–8 se crearán desde `origin/borrador-final-2410`.
- Alcance: SOLO fotos. El chequeo `dedupe-8g-niky` ya NO es trabajo de Niky (pasa a Merlín según esta orden); no se toca.

## TANDA 2 (25/10/2026) — 50/50 con foto, 0 «sin foto real»
- Composición: 22 restantes de la oleada 1 (w017 3er slug + w018–w025) + 28
  primeros de la oleada 2 (w026–w039), en orden de lista. Ramas trabajadoras
  verificadas una a una (ls-remote = commit informado, diff con solo añadidos).
- Contenido del commit: 50 ficheros raíz en `public/media/` (auditoría byte a
  byte contra las ramas: 50/50 idénticos, todos WebP <300 KB) + 40 copias en
  `public/media/motos/` (39 con el mismo nombre + 1 renombrada: segway-e300se
  espera `-hero.webp`) + 6 copias `-ext` (knaus-sky-ti, laika-kreos-l-5009,
  rimor-sarus-12-plus, rimor-sarus-95-plus, sunlight-t-67, weinsberg-carahome)
  = 96 ficheros media + CSV (50 filas nuevas; total 100) + este README.
- Mapeo verificado contra los datos de `borrador-final-2410` (no contra los
  fragmentos solos): TODAS las fichas de moto de `comparador-motos-base.ts`
  referencian `/media/motos/<fichero>`, por eso las 40 copias; las 6 de
  autocaravanas referencian `-ext.webp`; qjmotor-srv-125 SÍ tiene entrada en
  `comparador-motos-base.ts` (el fragmento decía que no, porque su checkout
  disperso no incluía `src/`).
- COLISIÓN NO SOBRESCRITA (decisión del coordinador, para el cruce de Grok):
  kawasaki-versys-1000-s-2024 espera
  `/media/fotos-reales/kawasaki-versys-1000-s-2024-ficha-tecnica-precio/
  kawasaki-versys-1000-s-2024-ficha-tecnica-precio-real-1.webp`, que YA existe
  en la base (WebP 2048×1536, 157.714 B, foto real). NO se sobrescribió: la
  foto verificada del trabajador (1000PS, base S 2024 sin maletas, 100.940 B)
  queda solo en raíz + fila CSV. Grok decide si sustituye.
- Caveats honestos (fotos reales del modelo, pero con matiz; Grok arbitra):
  knaus-sky-ti-650-mf-2026: año 2026 no confirmado independientemente en el
  anuncio (foto real Sky TI 650 MF Platinum Selection); laika-kreos-l-5009-2026:
  variante estándar Fiat Ducato (si la ficha fuera la MB sobre Mercedes, no
  sirve); livewire-s2-del-mar-2024 y moto-morini-seiemmezzo-str-650-2024:
  renders oficiales del fabricante, no fotografías; rimor-sarus-12-plus y
  95-plus: fotos de concesionario (la web oficial no expone imagen
  descargable; rimor.it nombra «12 P» frente al «12 Plus» del distintivo y
  del slug); ktm-1290-super-duke-r-2024: generación 2020–2023, que es la que
  describe la ficha (la 1390 la relevó en 2024); montesa-cota-4rt-301rr: foto
  oficial 2026 para una ficha que cita tarifa 2027 y versiones 2025–2026
  (misma generación vigente).
- CSV: filas con el slug tal como viene en cada fragmento (algunos cortos,
  p. ej. `rimor-sarus-12-plus-2026`, `vmoto-tc-max-2024`); la foto y su nombre
  de fichero son los que importan para el cruce.

## TANDA 3 PARCIAL 1 (ORD-20251025-0900: commits pequeños 10–25, sin esperar a 50)
- 18 fotos reales verificadas (posiciones 101–122 salvo w047/w049): w040 (yamaha-xsr125-2025, zero-dsr-x-2024), w041 (zero-sr-f-2024, zero-sr-s-2024), w042 (abarth-600e-scorpionissima-2025, ac-cobra-gt-roadster-2025), w043 (aion-ut-2025, aion-v-2025), w044 (aito-m8-erev-2025, alfa-romeo-stelvio-quadrifoglio-520), w045 (alfa-romeo-tonale-phev-q4-270, -280), w046 (alpine-a110-r-2026, alpine-a110-r-ultime-2026), w048 (arcfox-t1-2025, audi-q3-sportback-tdi-2026), w050 (audi-rs-q8-performance-2025, baic-beijing-5-2025).
- Mapeos: 4 copias en public/media/motos/ (las 4 motos; comparador-motos-base.ts referencia /media/motos/); 4 copias -hero (aion-ut, aion-v, arcfox-t1, audi-q3-sportback-tdi; el blog espera -hero). El resto coincide con imagenOficial en raíz (verificado: arcfox-t1-2025-oficial.webp, tonale-270/-280 -oficial, rs-q8 -oficial).
- Auditoría: 18/18 byte a byte contra las ramas trabajadoras; todas WebP <300 KB (máx. 270.582 B); 0 sobrescrituras de ficheros de HEAD.
- CSV: 118 filas totales (100 + 18).
- Pendiente para completar la tanda 3 (50): w047 (alpine-a290-gts-2026, alpine-a390-gt-2026) y w049 (audi-q4-sportback-e-tron-45-2026, audi-q5-sportback-e-hybrid-2026), reposiciones lanzadas; w051–w064 (28 slugs, baojun-enjoy-2025 … byd-yuan-up-2025), oleada 3 en curso.

## TANDA 3 PARCIAL 2 (commits pequeños 10–25)
- 14 fotos reales verificadas: w051 (baojun-enjoy-2025, beijing-bj40-2024), w056 (bmw-i4-edrive35-2025, bmw-i4-m50-xdrive-2026), w059 (bmw-serie-1-m135-2025, bmw-serie-2-active-tourer-225e-2025), w061 (bmw-serie-5-520i-2025, bmw-x6-xdrive40i-2026), w062 (byd-han-l-2025, byd-sealion-7-2025), w067 (chevrolet-corvette-e-ray-2025, chevrolet-silverado-ev-2025), w071 (cupra-terramar-15-etsi-2026, cupra-terramar-vz-ehybrid-2025).
- Nombres según datos (no según encargo): baojun -2.webp, han-l -2.webp, silverado -2.webp, serie-2 -hero.webp (imagenOficial), edrive35 -hero.webp (imagenOficial; además -oficial con la misma foto). Corvette -2.webp SUSTITUYE un fichero de la base (195.148 B, foto de evento con placa Arnold Clark) por foto oficial de estudio (89.212 B); decide Grok.
- Copias -hero (imagen de blog/ficha pendiente en base, misma foto): beijing-bj40, bmw-i4-m50, cupra-terramar-15, cupra-terramar-vz, byd-sealion-7, bmw-x6 (ya en parcial anterior).
- Pendientes fuera de alcance (variantes de galería, no hero): -1.webp (imagen) y -3.webp (interior) de baojun, silverado y han-l; interiores de m135/520i. El hero (imagenOficial) de los 14 está cubierto.
- Licencias: serie-2 Active Tourer CC0 1.0 (Wikimedia Commons, dominio público); resto licencia desconocida.
- Caveats: baojun lleva pequeño eslogan en chino (parte de la foto oficial); bj40 es recorte 780 px elegido frente al set oficial con logos BAIC prominentes; edrive35 lleva crédito pequeño PAULTAN.ORG en esquina; 520i: página Motorlegend 403, procedencia por título/URL de búsqueda de imágenes + verificación visual G60.
- Auditoría: 15/15 ficheros entregados byte a byte contra ramas (corvette requirió sobrescritura del disco viejo); todas WebP <300 KB (máx. 245.862 B).
- CSV: 132 filas totales (118 + 14). Se incluyen en este commit los ficheros de asignación (fotos283-asignacion-resto.txt, fotos283-grupo324.txt).

## TANDA 3 PARCIAL 3 (commits pequeños 10–25)
- 20 fotos reales verificadas: w049 (audi-q4-sportback-e-tron-45-2026, audi-q5-sportback-e-hybrid-2026), w052 (beijing-x55-2025, bentley-bentayga-azure-2026), w055 (bestune-yueyi-07-2025, bmw-i3-neue-klasse-2026), w060 (bmw-serie-3-320d-2026, bmw-serie-3-320i-2026), w064 (byd-tang-2024, byd-yuan-up-2025), w066 (changan-uni-k-idd-2025, chery-tiggo-9-csh-2026), w068 (citroen-c5-aircross-12-puretech-130-2024, citroen-e-jumper-2026), w069 (citroen-e-spacetourer-2026, cupra-leon-sportstourer-20-tdi-2026), w070 (cupra-raval-vz-2025, cupra-tavascan-vz-2025), w072 (czinger-21c-2025, dacia-duster-2026-mild-hybrid-140).
- Nombres según datos: q4/q5 y c5 entregados con AMBOS nombres (hero = imagenOficial, oficial = asignado, misma foto); bestune con nombre corto -oficial.webp (no -precio-ficha-tecnica-oficial).
- Copias -hero ×17 (imagen pendiente en base, misma foto): beijing-x55, bentayga-azure, bestune (nombre corto), bmw-i3, serie-3-320d, serie-3-320i, tang, yuan-up, changan, chery, e-jumper, e-spacetourer, leon-sportstourer, raval, tavascan, czinger, duster.
- AVISO IMPORTANTE — Yuan Up es RENDER oficial BYD (no fotografía), el mismo render que ya existe como hunt1; se entrega con el nombre oficial que esperan los datos. Grok arbitra (igual que livewire/seiemmezzo en tanda 2).
- Caveats: 320d foto del lanzamiento G20 2018, no del LCI 2024 (no se localizó 320d LCI en PressClub); 320d/320i a 1500×844 y 1200×675 frente a 2048×1152 declarados (misma proporción 16:9); i3 Neue Klasse confirmado foto de producción (no render ni espía, PressClub P90632230, 18-03-2026); e-jumper gris cuando la galería describe blanca (mismo modelo/generación/carrocería); tang: el alt de datos dice «vista lateral panorámica» pero el set BYD no tiene lateral pura; duster 274.750 B (bajo 300 KB, cerca del límite).
- Auditoría: 23/23 ficheros entregados byte a byte (raval requirió sobrescribir un resto de disco viejo; NO era fichero de HEAD, es alta nueva); todas WebP <300 KB (máx. 274.750 B); 0 sobrescrituras de HEAD.
- CSV: 152 filas totales (132 + 20).

## TANDA 3 PARCIAL 4 (commits pequeños 10–25; cierra tanda 3 salvo w058)
- 12 fotos reales verificadas: w047 (alpine-a290-gts-2026, alpine-a390-gt-2026), w053 (bentley-bentayga-s-black-edition-2024, bentley-continental-gt-2026), w054 (bentley-continental-gtc-mulliner-2026, bentley-flying-spur-azure-2026), w057 (bmw-ix2-xdrive30-2026, bmw-ix3-40-2026), w063 (byd-song-l-dm-i-2025, byd-song-plus-dm-i-2025), w065 (carado-t-447-2026, caterham-super-seven-2000-2025).
- Nombres según datos: song-l con nombre corto -oficial.webp (no -precio-ficha-tecnica-oficial); carado con -ext.webp (imagen e imagenOficial de la ficha de autocaravana). Resto -oficial.webp exacto.
- Copias -hero ×11 (imagen pendiente en base, misma foto): a290, a390, bentayga-s, continental-gt, gtc-mulliner, flying-spur, ix2, ix3, song-l (corto), song-plus, caterham. Carado -1.webp de galería queda pendiente (foto distinta, no copiable).
- Caveats: ix3-40 usa foto del set oficial del 50 xDrive (misma carrocería Neue Klasse, sin set propio del 40 localizado); continental-gt ficha 2026 frente a nota oficial abril 2025 (misma 4ª generación); carado banco 2025 para ficha 2026 (misma generación T447; el único 2026 era plano de planta, no exterior).
- Incidencia: el primer fetch de estas 6 ramas falló por TLS transitorio (GnuTLS -110 / empty reply); el reintento con HTTP/1.1 las trajo todas y los commits coinciden con los informados por los trabajadores. No se dio a nadie por caído sin verificar.
- Auditoría: 12/12 byte a byte; todas WebP <300 KB (máx. 193.978 B); 0 sobrescrituras de HEAD.
- CSV: 164 filas totales (152 + 12).

## TANDA 3 CIERRE + TANDA 4 INICIO — PARCIAL 5 (commits pequeños 10–25)
- 18 fotos reales verificadas: w058 (bmw-m5-touring-2026, bmw-serie-1-2025), w073 (dacia-duster-tce-130-4x4-2025, dacia-logan-eco-g-100-2025), w074 (dacia-logan-tce-90-2026, dayun-yuehu-2026), w075 (deepal-g318-2025, denza-bao-5-2026), w076 (denza-z9-gt-2025, denza-z9s-2026), w077 (dfsk-seres-5-4wd-2026, dongfeng-aeolus-ax7-2026), w078 (dongfeng-aeolus-l8-2025, dongfeng-fengguang-mini-ev-2026), w079 (dr-5-stilnovo-2026, ds-9-e-tense-2026), w080 (ds-n8-2025, exeed-sterra-es-2025).
- Nombres según datos: serie-1 con -2.webp (imagenOficial; no -oficial). Resto -oficial.webp exacto.
- Copias -hero ×16 (imagen pendiente en base, misma foto): m5-touring, duster-tce-130, logan-eco-g, logan-tce-90, yuehu, g318, bao-5, z9-gt, z9s, seres-5, ax7, l8, fengguang, ds-9, n8, sterra-es. Serie-1 y dr-5 no referencian -hero.
- Caveats: g318 CC0 (Wikimedia Commons, foto Salón de Pekín 2024); fengguang: recorte de la banda inferior vacía para eliminar la marca de agua de CarNewsChina (coche intacto, sin marca); dayun: Yuehu es el nombre chino y ES3 el de exportación (mismo modelo); bao-5 = B5 (no el B8 mayor); logan-eco-g foto del lanzamiento del Logan III 2021 (misma generación que vende como 2025); ds-9 foto de prensa 2020 (misma berlina E-Tense sin rediseño posterior); duster-tce: se descartó un primer candidato del servidor Renault porque mostraba el Duster de segunda generación; logan-tce-90 1281×720; resto licencia desconocida.
- Auditoría: 18/18 byte a byte contra las ramas (diff contra la base: exactamente los 18 ficheros copiados, ni uno más); todas WebP <300 KB (máx. 216.924 B); 0 sobrescrituras de HEAD. Nota: un primer intento de auditoría listó toda la media de la base por un bucle mal construido (no afectó a los datos); se rehízo con el diff contra la base.
- CSV: 182 filas totales (164 + 18). TANDA 3: 50/50 CERRADA (w058 era el último pendiente).

## TANDA 4 PARCIAL 6 (commits pequeños 10–25)
- 16 fotos reales verificadas: w081 (ferrari-amalfi-2026, ferrari-luce-2026), w082 (ferrari-roma-spider-2025, fiat-500e-3plus1-118-2025), w083 (fiat-ducato-22-mjt-180-2026, ford-bronco-2025), w084 (ford-capri-electrico-2025, ford-capri-ev-2025), w085 (ford-focus-mhev-2025, ford-maverick-2025), w086 (ford-mustang-2025, ford-mustang-gt-convertible), w087 (ford-ranger-ms-rt-2025, ford-ranger-raptor-2025), w088 (ford-transit-city-2026, ford-transit-custom-nugget-2025).
- Nombres según datos: amalfi/luce/roma con AMBOS nombres (hero + oficial, misma foto); capri ×2 solo -hero (los datos no referencian -oficial); mustang-gt-convertible con nombre plano .webp (imagenOficial vacía); nugget con -1 (imagen) y -2 (imagenOficial); maverick y ms-rt SIN fichero nuevo (sus hero y -2 ya existen en la base, verificados visualmente, no se duplican).
- Copias -hero ×7 (imagen pendiente en base, misma foto): 500e, ducato, bronco, focus, mustang, raptor, transit-city. El hero del 500e en fotos-reales/ ya existe en HEAD.
- Incidencia: el -hero del Luce en disco (115.500 B, 1600×1112) NO coincidía con el blob de la rama w081 (31.148 B, idéntico al -oficial): era un resto viejo del disco, no fichero de HEAD (HEAD:0 verificado); se sobrescribió desde la rama antes de commitear.
- Caveats: luce modelo muy reciente (presentado en Roma el 25-05-2026 según el pie de la fuente; foto oficial según car4you, no render ni espía — verificación del trabajador); focus lleva logo pequeño de ActualidadMotor en la esquina inferior izquierda (no prominente); raptor: los datos declaran 1920×1280 en galería pero el original del concesionario es 800×532 (no se reescaló para no falsear resolución); nugget -3 (interior) sigue pendiente, no se cubrió con un exterior; resto licencia desconocida.
- Auditoría: 18/18 byte a byte (tras corregir el hero del Luce); todas WebP <300 KB (máx. 217.220 B); 0 sobrescrituras de HEAD.
- CSV: 198 filas totales (182 + 16).

## TANDA 4 PARCIAL 7 (commits pequeños 10–25)
- 16 fotos reales verificadas: w089 (foton-general-g9-2026, geely-binrui-cool-2025), w090 (geely-preface-2025, genesis-electrified-g80-2026), w091 (genesis-gv70-2025, gmc-hummer-ev-2025), w092 (gwm-king-kong-poer-2026, haval-h7-2025), w093 (hennessey-venom-f5-2025, hongqi-g919-2026), w094 (hongqi-h5-hev-2024, hyundai-ioniq-3-2026), w095 (hyundai-kona-electrico-65-kwh-2026, hyundai-kona-hibrido-2025), w096 (hyundai-staria-hibrido-2026, im-l6-2026).
- Nombres según datos: g919 con nombre corto -hero (imagenOficial; imagen vacío); h5-hev solo -hero; ioniq-3 solo ficha-1 (ambos campos apuntan ahí); kona-electrico solo -oficial (ambos campos); genesis-g80 SIN fichero nuevo (su -2 ya existe en HEAD, verificado); gv70 con -1/-2/-3; venom con hero/oficial/galeria-1; resto hero+oficial.
- Copias -hero: 0 (los trabajadores entregaron ambos nombres donde ambos se esperaban).
- Incidencias: (1) reinicio del servicio a mitad del turno: los 4 reintentos de spawn (w105/w111/w112/w115) SÍ se crearon pese al error — no se duplicaron; el consolidador no llegó a correr en ese intento (CSV intacto en 199). (2) fetch GitHub degradado (GnuTLS -110, Proxy CONNECT aborted, Empty reply): se recuperó con reintentos HTTP/1.1. (3) kona-hibrido hero en disco (180.462 B) no coincidía con el blob w095 (160.990 B, igual que la -oficial): resto viejo, no HEAD (HEAD:0); sobrescrito desde la rama antes de commitear (mismo patrón que el Luce del parcial 6).
- Caveats: kona-electrico: 65 kWh no distinguible visualmente de 49 kWh (misma SX2); kona-hibrido blog heroSrc fotos-reales existe en base (Kona rojo N Line, alt dice «azul» — no tocado); staria: foto pre-restyling española (la de la ficha española), no el restyling coreano dic-2025; im-l6: L6 de 1ª generación (el de la ficha: 329 CV, 74 kWh), no el nuevo de agosto 2026; gv70 -3: campo imagenInteriorOficial pero alt de galería dice frontal → entregado frontal; hummer: alt hero dice delantera y oficial lateral, pero la foto oficial GM es trasera tres cuartos (EXIF); h7: elegido el Big Dog 2ª gen (Vanta australiano), no el H7 nuevo chino; king-kong 1280×960 frente a 1280×720/1200×522 declarados; foton alt oficial dice frontal, foto tres cuartos; binrui alt oficial dice blanca frontal, foto verde grisácea tres cuartos; ioniq-3 acabado N Line (no base); kona ×2 CC BY-SA 4.0 (Wikimedia); resto licencia desconocida.
- Auditoría: 29/29 byte a byte (tras corregir el hero del Kona); todas WebP <300 KB (máx. 265.868 B); 0 sobrescrituras de HEAD.
- CSV: 214 filas totales (198 + 16). Interiores pendientes (solo anotados): foton, binrui, preface, king-kong, haval, staria, ioniq-3 (ficha-2), kona-electrico (interior-oficial).

## TANDA 4 PARCIAL 8 (commits pequeños 10–25)
- 16 fotos reales verificadas: w097 (im-ls7-2026, ineos-grenadier-station-wagon-2025), w098 (iveco-daily-2025, jac-js4-2025), w099 (jaecoo-5-shs-hibrido-2026, jaecoo-7-gasolina-2026), w100 (jaecoo-j5-ev-2025, jaecoo-j7-shs-2025), w101 (jaguar-f-type-2025, jaguar-gt-electrico-2026), w102 (jaguar-i-pace-2025, jeep-compass-15-e-hybrid-130-2025), w103 (jeep-compass-e-hybrid-145-2026, jeep-compass-e-hybrid-plug-in-225-2026), w104 (jeep-wagoneer-s-2025, jeep-wrangler-20t-272-2025).
- Nombres según datos: iveco -1/-2/-3 (incluye interior real); jaecoo-5 solo -hero (imagen vacío); compass-130 solo -hero; f-type -1/-2/-3; gt hero/oficial/interior; resto hero+oficial.
- Copias -hero: 0.
- AVISO IMPORTANTE — Jaguar GT eléctrico: NO es foto del GT de producción (no tiene foto real propia); son fotografías reales del concepto físico Type 00 (Miami Art Week, dic-2024), que es lo que describen los alt de la galería. No es render ni espía. Además, el -interior del GT contiene una foto FRONTAL (su alt dice frontal, no interior): Grok arbitra si quiere un interior real aparte.
- Caveats: ls7 alt dice negro en montaña, foto beige en estudio junto al agua; grenadier alt dice pista de tierra, foto estudio fondo blanco; compass-145 alt hero «carretera costera» y oficial «lateral», foto frontal en planta; compass-225 alt hero «cargando en casa», foto sin carga (oficial «tres cuartos trasera» sí coincide); compass-130 generación anterior (restyling 2021), no el nuevo 2026; i-pace única generación (hasta dic-2024; 2025 = stock); iveco -3 alt dice «detalle exterior» pero el campo pide interior → entregado interior; iveco ejemplar 12 m³ frente a 10,8 m³ L2H2 de la ficha; wrangler: exterior 2.0T indistinguible, sin insignia de otra motorización; j5-ev: marca tenue en esquina inferior derecha del PNG original, apenas visible; j7-shs: exterior comparte carrocería con el gasolina, garantía = página oficial específica del SHS; jaecoo-7: prueba del 145 CV (ficha 147 CV); resto licencia desconocida.
- Auditoría: 33/33 byte a byte; todas WebP <300 KB (máx. 293.184 B, iveco -2); 0 sobrescrituras de HEAD.
- CSV: 230 filas totales (214 + 16). Interiores pendientes (solo anotados): i-pace -3, wagoneer interior, wrangler interior.

## TANDA 4 PARCIAL 9 (commits pequeños 10–25)
- 32 fotos reales verificadas: w105 (jetour-t1-i-dm-2025, jetour-x70-2024), w106 (kaiyi-e5-2024, kaiyi-x3-pro-2024), w107 (kgm-musso-evx-electrico-2026, kia-ev4-2025), w108 (kia-ev5-gt-line-2026, kia-k4-2026), w109 (kia-pv5-2026, kia-sorento-hev-2025), w110 (kia-sportage-gt-line-mhev-2026, lancia-ypsilon-hf-2025), w111 (land-rover-defender-110-d300-2025, land-rover-defender-110-p525-2025), w112 (land-rover-range-rover-sport-electrico-2026, leapmotor-c01-2026), w113 (leapmotor-c01-erev-2026, leapmotor-c11-erev-2026), w114 (levc-tx-2025, lexus-lc-500-2024), w115 (lexus-lm-350h, lexus-nx-350h-2024), w116 (lexus-nx-overtrail-2025, lexus-rx-500h-2024), w117 (lexus-rz-300e-2024, lexus-rz-500e-2026), w118 (li-auto-i6-2025, li-auto-i9-2026), w119 (lotus-eletre-900-sport-2025, lucid-gravity-2026), w120 (lynk-co-10-em-p-2025, maserati-ghibli-gt-2024).
- Nombres según datos: kaiyi -1/-2 (no -hero/-oficial); lynk sin sufijo -precio-ficha-tecnica; li-auto-i9 con prefijo li-auto-i9-home-2026-oficial-v2 (hero/oficial); lexus-lm-350h con hero + -2 (no -oficial); defender solo -hero (imagen vacío); range-rover-sport-electrico solo -oficial (ambos campos); leapmotor-c01-2026 solo -hero (imagen vacío); resto hero+oficial, más interiores reales en lc-500, nx-350h y rx-500h.
- Mapeo Ghibli: hero/oficial ya existían en la base bajo fotos-reales/ (verificados visualmente por w120); el comparador espera la raíz, así que se añaden copias en raíz con el mismo contenido (hash idéntico al blob base), no una foto nueva. LM: ambos nombres esperados ya existían en base en la ruta esperada, sin fichero nuevo.
- Caveats: Defender 110 heroes = copias byte a byte de sus hunt1 (egress caído el 25/10, sin descarga externa nueva; foto real del modelo exacto, no IA ni render); EV5 hero/oficial = copias de su hunt1; Range Rover Sport Eléctrico presentado a finales de septiembre de 2026 (foto oficial JLR vía Carscoops, no espía ni render, pese al aviso previo); K4 foto del 2025, misma generación CL4 que el slug 2026; Eletre 900 Sport sin distintivo R visible (generación exacta); colores frente a alt de datos: KGM negro (alt: verde/plateado), NX Overtrail Moon Desert (alt: Verde Oliva), NX 350h verde oscuro (alt: rojo cobre), RZ 300e Sonic Copper (alt: plateado de noche); resto licencia desconocida.
- Auditoría: 58/58 byte a byte contra las ramas; todas WebP <300 KB (máx. 262.598 B, Ypsilon hero); 0 sobrescrituras de HEAD. OJO DISCO: en raíz había restos viejos (-1/-2/-3/interior-oficial del Ghibli, NO en HEAD) que NO se añadieron; solo lista explícita.
- CSV: 262 filas totales (230 + 32). Interiores pendientes (solo anotados): rz-300e, lucid-gravity, li-auto-i9, jetour-x70, lancia-ypsilon-hf, range-rover-sport-electrico.

## TANDA 4 PARCIAL 10 (parcial pequeño: w121, w130; resto de la oleada en vuelo)
- 4 fotos reales verificadas: w121 (maserati-grancabrio-folgore-2027, maserati-mc20-cielo-2024), w130 (mercedes-benz-amg-g-63, mercedes-benz-clase-v-300-d).
- Nuevos: GranCabrio hero+oficial (misma foto oficial Maserati 2027, 1024×576, 105.444 B) y Clase V hero+oficial (misma foto prensa 2024, 1280×852, 71.256 B).
- Mapeos desde fotos-reales/ (hash idéntico al blob base, 0 en HEAD): MC20 Cielo hero/oficial (mismo nombre; Cielo descapotado verificado, no coupé); G 63 hero (mismo nombre) + -1 exterior AMG → oficial + -3 interior AMG amplio → interior-oficial (verificado visualmente por el coordinador; -2, primer plano del mismo interior, queda como alternativa pero supera 300 KB).
- Caveats: MC20 alts (estudio/costa) no coinciden con fotos de calle en evento; crédito MC20 en conflicto (galerias dice Maserati, fuentes dice Commons); G 63 alts (desierto/frontal en ciudad) no coinciden (trasera en grava / delantera en estudio); Clase V oficial tres cuartos (no lateral) para no usar fotos del EQV; resto licencia desconocida.
- Auditoría: 4/4 nuevos byte a byte contra las ramas + 5/5 mapeos contra la base; todas WebP <300 KB (máx. 226.256 B); 0 sobrescrituras de HEAD.
- CSV: 266 filas totales (262 + 4).

## TANDA 4 PARCIAL 11 (parcial pequeño: w129; resto de la oleada en vuelo)
- 2 fotos reales verificadas: w129 (mercedes-amg-glc-63-s-e-performance-2025, mercedes-amg-s-63-e-performance-2026), ambas solo -hero (imagen vacío, imagenOficial = hero, interior vacío; no es pendiente).
- GLC 63 S SUV X254 en marcha gris mate, matrícula S MB 2293, parrilla Panamericana (no Coupé); S 63 berlina W223 gris mate con distintivo AMG S 63 E PERFORMANCE; no cruzadas. Hunt1-3 de ambos ya existían y NO se copiaron.
- Caveats: foto de prensa 2023 (GLC, slug 2025) y dic-2022 (S 63, slug 2026), misma generación y mismas cifras de ficha, sin cambio de generación; resto licencia desconocida.
- Auditoría: 2/2 byte a byte contra la rama; ambas WebP <300 KB (GLC 294.030 B, cerca del límite); 0 sobrescrituras de HEAD.
- CSV: 358 filas totales (356 + 2).
