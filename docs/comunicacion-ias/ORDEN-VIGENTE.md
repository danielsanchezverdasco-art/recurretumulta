# ORDEN VIGENTE (fuente única de verdad) — la mantiene Cosa
**ID de orden: ORD-20261027-1035** (ver grok.md y merlin.md; anterior: ORD-20261026-0345)
**Vigente desde: 27/10/2026 10:35 (Madrid)**. Anula cualquier orden anterior que la contradiga. Nada se publica: todo va en la subida conjunta de Cosa.
**Órdenes vigentes añadidas (confirmar en ACK.md):** ORD-20251025-1355 (Niky: 182 fotos), ORD-20251025-1525 (Merlín: subida solo por Git Data API, 5 llamadas por slice), ORD-20251025-1640 (Merlín: 3 retenidas), ORD-20251025-1645 (revisión en vivo tras SUBIDA PUBLICADA), ORD-20251025-1655 (Merlín: medidor de 8-gramas).

1. Se paran los packs de reescritura completa (unico-coches-50-*). La tanda en curso se entrega tal y como esté y no se lanzan más.
2. **No se toca NINGUNA página ya indexada por Google.**
3. Solo se trabaja sobre las no indexadas de `listas/no-indexadas.txt`: Merlín 87 (slugs de la a a la l) y Niky 82 (de la m a la z y dígitos). Tandas de 50, 8-gramas = 0 y 0 datos inventados.
4. No se publica nada. Los arreglos técnicos los hace Cosa en la rama `fix-no-indexadas-2410`.


## ORD-20261026-0345 — Cosa/Grok, 26/10 03:45 (Madrid): unicidad de texto, tanda manual (Merlín + Niky, SIN SOLAPES)
Meta de Daniel: 100 % de páginas indexables únicas (ninguna frase de 8+ palabras de texto propio compartida con otra página; no cuentan nav, pie, migas, avisos legales ni etiquetas de tablas). Medición de partida (vivo, ronda 01:48): 76/5.750 únicas, 47.075 frases literales compartidas.
- **Plantillas en código: las quita Grok** (rama `plantillas-2610`, ya subida). No toquéis src/components, src/pages ni scripts.
- **Merlín**: `listas/unicidad-2610-merlin.csv` (311 ficheros: blogs `src/lib/blog-*`, `src/content/seo/titulos.csv`, `src/lib/comparador-motos*`, `src/lib/analisis-editorial/*`). Orden de prioridad: `listas/unicidad-2610-merlin-ficheros.txt` (de más a menos páginas). En blogs, además, el CTA repetido «**¿Buscas solo los datos?** Ver ficha técnica del X: precio…» se deja en un enlace corto «Ficha técnica del X» sin perder el enlace. Rama `merlin-unicidad-2610`.
- **Niky**: `listas/unicidad-2610-niky.csv` (440 ficheros: `src/lib/comparador-coches*`, `comparador-patinetes*`, `src/lib/autocaravanas/*`, `ficha-extra-gen/*` y resto de datos). Prioridad: `listas/unicidad-2610-niky-ficheros.txt`. Rama `niky-unicidad-2610`.
- Cada fila dice el fichero y qué hacer: «conserva 1 copia» (el fichero principal de la frase deja una aparición) o «reescribe todas». Nadie edita un fichero de la lista del otro ni los de `listas/unicidad-2610-no-tocar.txt` (ya están en ramas en curso: dedupe-8g-ronda-cierre, s20-10/16/17/19, slice4, merlin-blogs-2510, rev26-fixes, ktm-390-fix, plantillas-2610).
- Normas: ramas propias desde `publicar-2000`; nada en main; sin force push; entrega con `tsc -p tsconfig.app.json --noEmit` = 0 errores; medición de 8-gramas de página completa antes/después de cada página tocada; palabras propias iguales o más; sin quitar información útil; datos reales con fuente, nunca inventados; sin relleno ni sinónimos forzados. Si una frase no se puede reescribir sin inventar, se deja y se apunta en vuestro parte.
- Entregas por tandas de 50 ficheros o menos, con aviso «he terminado tanda N» en vuestro .md (rama, commit, antes/después). Cosa integra en la siguiente ronda (máximo una cada 3 h). Nadie publica.
- **Primero el ACK** en ACK.md con este ID.

---
## Protocolo de sincronización (fijo)
- Cosa cambia **solo este archivo** cuando hay una orden nueva y le pone un **ID nuevo**.
- **Al empezar cada pasada**, Merlín y Niky leen ESTE archivo antes de nada (Norma 1).
- Si el ID es distinto del último que confirmaron, escriben **en su primera acción** una línea en `ACK.md`:
  `ORD-xxxx | Merlín | SÍ recibido | HH:MM | qué paro y qué empiezo`
- Sin ACK del ID vigente no se trabaja: primero el ACK, después el trabajo.
- Cosa comprueba `ACK.md` cada hora. Si falta un ACK, vuelve a avisar aquí. Daniel no hace de intermediario.

## NORMA PERMANENTE — Revisión post-publicación obligatoria (Daniel, 24/10 20:25)
Cada vez que se publique una nueva versión, Niky, Merlín y Cosa la revisan de arriba abajo con ojos de Google: contenido fino o duplicado, canonicals, robots.txt, datos estructurados, páginas huérfanas, enlaces rotos y cualquier cosa que Google penalice. Lo que haya que cambiar se cambia antes de cerrar la revisión. El resultado se deja en el tablón (docs/comunicacion-ias/REVISION-POST-PUBLICACION.md) con la lista de lo encontrado y lo corregido. Confirmad en ACK.md.

## ORD-20241024-2125 — Daniel 21:24: se PUBLICA por tandas verificadas, ritmo constante (sustituye el «no publicar»)
Fuente única: listas/auditoria-no-indexadas.csv (columnas tipo/accion). Cada tanda de 50 se entrega en rama desde completar-fichas actual, se avisa aquí y Cosa verifica y publica. Ritmo: una tanda cada hora como mínimo por agente; si te bloqueas, pregunta aquí en vez de parar.
- **Niky** (100 agentes): (1) quitar del sitemap las 198 con noindex (94 + 104); (2) 245 redirecciones: 301 en un salto o 410 (133 + 112), sin cadenas; (3) enlazado interno a las ~130 con 0–2 enlaces entrantes, desde hubs o fichas relacionadas reales; (4) fotos reales para las 324 «Foto pendiente», solo fotos oficiales o verificadas, nada de IA.
- **Merlín** (100 agentes): las 169 de reescritura (incluye 42 duplicadas: diferenciar o fusionar con 301) + sus 87 de no-indexadas a–l. Prosa natural, datos reales, 8-gramas a 0 sin trucos.
- 1.474 «nada/validar» y 487 «tiempo de rastreo»: no se tocan; las gestiona Cosa en Search Console.
Confirmad en ACK.md con este ID antes de empezar.
- CORRECCIÓN 21:26 a ORD-20241024-2125: Niky NO busca fotos nuevas (punto 4 anulado). Las fotos ya están encontradas y aceptadas en caza-fotos-parte-02; las integra y publica Cosa.

## ORD-20241024-2140 — Daniel 21:40: NADA se publica hasta cerrar los puntos 1–9 (sustituye la publicación por tandas de 2125)
Cosa: 1) integrar los 127 cambios de completar-fichas, 2) enlazar las fotos de caza-fotos-parte-02 (944 fichas), 5) /guias/ 404, 6) precio del BYD Seal, 7) prueba en navegador real (duelo, opiniones, analizador de IA, menú móvil), 8) carpeta de 4,5 GB de Merlín, 9) chequeo de 8-gramas en todo lo indexable.
- **Niky (100 agentes):** punto 3, las 283 fichas sin foto en ningún sitio. Solo fotos reales y verificadas (oficiales o de prensa del modelo exacto), nada de IA. Si no existe foto real, se marca con «sin foto real» y una explicación honesta. Rama `fotos-283-niky` desde completar-fichas, con CSV slug | fuente | url.
- **Merlín (100 agentes):** punto 4, las 188 páginas de marca pobres: títulos de 60 caracteres o menos, metas de 155 o menos, y texto propio diferenciado con datos reales de cada marca (8-gramas a 0, sin trucos). Rama `hubs-marca-188-merlin` desde completar-fichas. Además, contestar a las 22:15 sobre la carpeta de 4,5 GB.
Tandas de 50 con aviso aquí. Nadie publica. Confirmad en ACK.md con este ID.

## ORD-20241024-2255 (orden de Daniel por voz, 22:55). Sustituye el reparto de la 2140; sigue sin publicarse NADA hasta cerrar los puntos 1-9.
- **Niky (100 agentes):** chequeo automático de 8-gramas (frases repetidas de 8 palabras o más) en TODAS las páginas indexables, incluidos los 188 hubs de marca (rama hubs-marca-188-merlin). Entrega `listas/8gramas-2255.csv` con url, n.º de 8-gramas compartidos, página con la que coinciden y si es contenido pobre. Corrige en la rama `dedupe-8g-niky`: títulos ≤60, metas ≤155 y texto diferenciado con datos reales, sin inventar. Objetivo: 0 8-gramas. Sigue con fotos-283-niky si te queda capacidad.
- **Merlín (100 agentes):** arreglar el 404 de /guias/ en la rama `guias-404-merlin`: índice real que enlace las guías existentes, con título, meta y migas de pan. Sin publicar. Después, sigue con la siguiente tanda de hubs de marca.
- **Cosa:** integrar los 127 commits de completar-fichas en borrador-final-2410.
- Cada uno: parte en su .md al terminar, con commit y cifras verificadas. Nada de main, Netlify, Cloudflare ni force.

## ORD-20251025-0655 (Cosa, 25/10 06:55 hora de Madrid). Sustituye a ORD-20241024-2255
Decisión de Daniel: a las 7:30 se publica el borrador SIN tocar la indexación. Lo de abajo entra en la SIGUIENTE subida. No publiquéis nada y no toquéis `main` ni Netlify. Abrid 100 agentes cada una.

**MERLÍN: frases repetidas (8-gramas)**
- Partid de la rama `borrador-final-2410` y trabajad en la rama nueva `dedupe-8g-merlin`.
- Prioridad 1: los 30 bloques de `listas/8gramas-bloques-plantilla.md`, que aparecen en 277 a 676 páginas cada uno. Reescribid cada aparición con los datos reales de su página. Si no hay dato, quitad la frase; no inventéis nada.
- Prioridad 2: las páginas de `listas/8gramas-por-pagina.csv` por orden de `pct`, de mayor a menor.
- Por cada tanda de 50 páginas: un commit y un parte en `merlin.md` con las rutas y el `pct` antes y después.
- Cuidado: no perdáis los datos corregidos (precios, cifras, fuentes).

**NIKY: fotos**
- Trabaja en la rama `fotos-283-niky`, partiendo de `borrador-final-2410`.
- Busca fotos para las 283 fichas sin foto más las 324 con «Foto pendiente» (están en `listas/auditoria-no-indexadas.csv`).
- Solo fotos reales del modelo exacto, con licencia y fuente apuntadas. Nada de IA. Si no existe ninguna, marca «sin foto real» con una explicación honesta.
- Entrega en tandas de 50: un commit y un parte en `grok.md` con las cifras.

Las dos: confirmad en `ACK.md` con el ID de esta orden.

> NORMA FIJA N-01: no se tocan las páginas que ya están perfectas o bloqueadas; solo se trabaja en las que fallan. Ver NORMAS-PERMANENTES.md

---
# ORD-20251025-0855: 0 % de frases repetidas atacando los BLOQUES DE PLANTILLA (sustituye al reparto de 100 agentes)
**Emite:** Grok/Cosa, por orden de Daniel (25/10 08:55). **Agentes:** 200 cada una, todos trabajando.

## Objetivo
Cada página indexable tiene que quedar con un 0 % de frases repetidas (8-gramas) respecto a cualquier otra página. El grueso de la repetición está en unos 30 bloques de plantilla, no en la prosa. Por eso se cambian los COMPONENTES y no se reescribe página a página. Lista de bloques: `listas/8gramas-bloques-plantilla.md`.

## Contexto
La subida de hoy (08:21) no tocó la indexación. Estos cambios entran en la próxima subida y solo si la medición da 0 %.

## Reparto (nadie toca los bloques del otro)
**Merlín, 200 agentes, rama `dedupe-8g-merlin`: bloques por modelo**
- Bloques #1, #10, #25, #19, #21, #26, #5/#9, #6/#14/#15, #13, #12 y #30.
- Cada bloque se genera con los datos reales de su página (cifras, versiones, equipamiento, mantenimiento, etc.).
- Si una página no tiene el dato, el bloque se QUITA en esa página. Nunca relleno.

**Niky, 200 agentes nuevos, rama `dedupe-8g-niky`: bloques legales, ZBE y fuentes**
Las fotos siguen en paralelo con sus agentes de siempre, sin quitar ninguno.
- **Bloques #4, #17, #27/#28 y #2/#3/#16/#23/#24/#29:** cada uno se queda en una frase propia con el dato concreto del modelo (su etiqueta, su categoría y lo que le aplique) y un enlace a UNA página central que explica la norma completa. Esas páginas centrales las creas tú: 1 de ZBE y etiquetas, 1 de certificado DGT y 1 del seguro VMP, con fuente oficial.
- **Fuentes (#4):** solo se listan las que esa página usa de verdad.
- **Después, la prosa del blog y de los hubs que siga a más del 0 %:** reescritura real con los datos de cada página. No toques los 14 blogs ya entregados por Merlín.

Si las dos necesitáis el mismo fichero, avisaos en el tablón antes de editarlo.

## Calidad: condición obligatoria de Daniel
- Prohibido quitar información útil, rellenar, hacer paráfrasis artificial o dejar páginas más pobres.
- Cada bloque nuevo tiene que aportar igual o más que el que sustituye, con datos reales y su fuente. Sin inventar cifras.
- Las palabras de texto propio por página tienen que quedar iguales o por encima. Cualquier bajada se justifica.
- La norma N-01 sigue vigente: no se tocan las páginas ya OK o bloqueadas, ni los casos especiales.

## Entrega
- tsc con 0 errores y el prerender bien hecho.
- Medición de 8-gramas de la PÁGINA COMPLETA de todas las indexables, antes y después: mediana, número de páginas a 0 % y lista de las que no llegan a 0.
- Palabras propias antes y después de cada página.
- Commits por lotes y un parte en el tablón con cifras finales.

Nada publicado, nada en `main`, sin force push. Solo Cosa integra y publica. Confirmad en ACK.md el número de agentes de cada tarea.
