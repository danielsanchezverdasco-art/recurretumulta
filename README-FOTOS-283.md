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
