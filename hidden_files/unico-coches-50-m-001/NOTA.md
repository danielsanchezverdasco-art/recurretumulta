# unico-coches-50-m-001 — NOTA DE ENTREGA

- Grupo: letra M, fichas de coches, primeras 50 en orden de slug de
  `scripts/coches-slugs.txt` en la rama base `unicidad-plantillas-20261024`
  (`676bda2a`). Total M en esa lista: 245 fichas; quedan 195 tras esta tanda.
- Alcance REAL (no sobredimensionar): solo se reescriben los arrays
  `pros` y `contras` de esas 50 fichas, en `src/lib/comparador-coches-*.ts`,
  conservando el número de elementos de cada lista y sin cambiar ningún otro
  campo (comprobado: fuera de pros/contras, los 13 ficheros son idénticos a
  HEAD). NO se tocan: `src/components`, `src/pages`, `public/media`,
  `main`, Netlify ni el tablón. Los alts de galería y los planes de
  mantenimiento quedan como estaban (cadenas cortas, sin 8-grama propio).
- Los posts de blog con el mismo slug (47 de las 50 fichas tienen post) NO se
  reescriben en esta tanda: quedan pendientes de una tanda de blog separada,
  para no solapar ni duplicar. La verificación sí los incluye en el corpus,
  así que los pros/contras nuevos no comparten 8-gramas con ellos.
- Cifras: solo se reutilizan datos ya presentes en la ficha original
  (precio, CV, dimensiones, autonomía, etc.); ningún dato nuevo inventado.
  Si un dato era null en la ficha, no se afirma en el texto nuevo.
- Verificación (comando usado, desde el worktree):
  `python3 hidden_files/unico-coches-50-m-001/verify-8gramas.py ~/workspace/wt-unico50-m-001`
  Corpus: `src/lib/*.ts` salvo `*generated*` (fichas + blogs + resto de
  datos). El texto nuevo de la propia ficha se quita antes de tokenizar, así
  que un acierto nunca es la propia ficha. Tokenización: palabras con
  acentos y números, minúsculas. Resultado final, segunda pasada
  independiente extrayendo los textos de los propios ficheros:
  `verificacion-unico-coches-50-m-001.csv` con 50/50 en 0 coincidencias.
  (Primera pasada: 33/50 con colisiones; se corrigieron las frases exactas
  en dos rondas hasta 0. Hubo un bug en el primer script de aplicación que
  reinsertaba los textos viejos: se detectó por la comprobación
  fuera-de-pros/contras, se revirtieron los ficheros a HEAD y se reaplicó
  corregido; el diff final solo contiene pros/contras nuevos.)
- TypeScript: transpilación con el `typescript` del repo principal sobre los
  13 ficheros tocados: 0 errores de sintaxis. `npx tsc -b` completo NO se
  corrió en este worktree (sin node_modules propio y sin instalar nada para
  no tocar otros árboles); la integración debe correrlo antes de mergear.
