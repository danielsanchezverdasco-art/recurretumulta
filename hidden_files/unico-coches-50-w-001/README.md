# unico-coches-50-w-001 — letra W, primera tanda de 50 páginas

Base: `origin/unicidad-plantillas-20261024` @ `676bda2a`. Sin main, sin Netlify, sin publicación.
Sin fotos (`public/media` no tocado) y sin código de componentes ni páginas (`src/components`, `src/pages` no tocados).
Solo ficheros de datos: fichas en `src/lib/comparador-coches-*.ts` y `src/lib/comparador-campers-*.ts`
(Westfalia vive en datos de campers, aunque su slug está en `scripts/coches-slugs.txt`) y blogs en
`src/lib/blog-posts-*.ts`.

## Qué se reescribió (alcance exacto, sin exagerar)

- Fichas (28): `pros` y `contras` completos (5 + 5 por ficha), solo con cifras ya presentes en cada entrada.
  No se tocaron precios, potencias, autonomías, dimensiones, galerías, notas de coste ni planes de mantenimiento.
- Blogs (22): `excerpt` y el párrafo de apertura (primer bloque de prosa antes del primer `##`), solo con cifras
  ya presentes en cada post o en su ficha. El resto del contenido del blog NO se reescribió en esta tanda.
- La verificación cubre exactamente ese texto nuevo (pros/contras + excerpt + apertura), no la página entera.
  El resto de cada página (tablas, FAQ, resto del blog) puede seguir compartiendo frases y queda para tandas siguientes.

## Páginas entregadas: 50, en orden de slug

Fichas (28): westfalia-columbus-2026, westfalia-kepler-2026, westfalia-sven-hedin-man-tge-2026,
wey-03-2024, wey-05-2024, wey-07-2024, wey-gaoshan-7-2025, wey-gaoshan-8-2025, wey-gaoshan-9-2025,
wey-v8x-2026, wey-v9x-2026, wiesmann-project-thunderball-2025, wuling-air-ev-2024, wuling-bingo-2024,
wuling-bingo-plus-2024, wuling-bingo-s-2025, wuling-cloud-2024, wuling-cloud-ev-2024,
wuling-hongguang-mini-ev-2025, wuling-hongguang-mini-ev-cabrio-2026, wuling-journey-2025,
wuling-starlight-2024, wuling-starlight-730-2025, wuling-starlight-730-ev-2025, wuling-starlight-ev-2025,
wuling-starlight-s-2024, wuling-starlight-s-ev-2024, wuling-yangguang-ev-2024
(todas con el sufijo `-precio-ficha-tecnica`).

Blogs (22): westfalia-columbus-2026-analisis-opinion, westfalia-kepler-2026-analisis-opinion y los 20 blogs
con el mismo slug que su ficha (wey 8, wiesmann 1, wuling 11: air-ev, bingo, bingo-plus, cloud-ev,
hongguang-mini-ev, starlight, starlight-730, starlight-730-ev, starlight-ev, starlight-s, starlight-s-ev).

Primer slug: `westfalia-columbus-2026-precio-ficha-tecnica` (ficha).
Último slug: `wuling-yangguang-ev-2024-precio-ficha-tecnica` (ficha).

## Páginas restantes de la letra W: 3

- Blog: `wuling-yangguang-ev-2024-precio-ficha-tecnica`
- Ficha + blog: `wuling-zhiguang-ev-2025-precio-ficha-tecnica`
Total de la letra W en este criterio (fichas de `scripts/coches-slugs.txt` que empiezan por w + sus blogs):
53 páginas. No tocadas en esta tanda: las 3 anteriores.
Nota: existe además la ficha `westfalia-columbus-600d-2026-precio-ficha-tecnica` en datos de campers pero
sin slug en `scripts/coches-slugs.txt`; no se contó ni se tocó.

## Verificación 8-gramas: 50/50 a 0

Método: ventanas de 8 palabras (minúsculas, solo letras/números, sin puntuación) del texto nuevo de cada
página, comprobadas contra el texto de todas las demás páginas del repo en el árbol editado:
todas las entradas de fichas de `src/lib/comparador-*.ts` (excluidos lite/generados/media/historia/garantías/
mantenimiento) y todos los posts de `src/lib/blog-posts-*.ts`. La propia página queda excluida; ficha y blog
con el mismo slug cuentan como páginas distintas (URLs distintas: `/coches/<slug>/` y `/blog/<slug>/`).
Se excluyen solo navegación y etiquetas de tablas según la regla; la comprobación aquí fue más estricta
(incluyó tablas y resto de texto de las demás páginas).

Comando usado (desde la raíz del worktree):

```
python3 hidden_files/unico-coches-50-w-001/verificar-8gramas.py
```

Salida: `verificacion-8gramas.csv` con `url;coincidencias_8gramas`, todo 0 (50 filas).
`textos-nuevos.json` guarda el texto nuevo verificado de cada página.
`colisiones.json` queda vacío (`{}`) en la entrega final.

Iteraciones: primera pasada 31 páginas con coincidencias (164 gramos: frases genéricas de carga,
venta en Europa y cruces ficha↔blog del mismo modelo); tras reescribir esas frases, 0/50.

## TypeScript

`npx tsc -b` en el worktree (con `node_modules` enlazado desde el repo principal, enlace retirado tras
el check): exit 0, sin errores.

## Incidencia reparada (honestidad)

La primera versión del script de aplicación perdía la comilla de apertura al reemplazar `excerpt`/`content`
en los blogs, y las reaplicaciones agravaron el fichero `blog-posts-campers-niky.ts` (excerpt triplicado,
clave `category` dañada). Se detectó antes de entregar: los 4 ficheros de blog se restauraron desde HEAD
y se reaplicaron una sola vez con el script corregido. Tras la reparación: comprobación de comillas
0 errores en los 4 ficheros y `tsc -b` exit 0. El árbol entregado no contiene esa corrupción.
