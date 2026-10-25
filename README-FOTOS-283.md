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
