# Fotos 283 — trabajador c2d03

- Base: `origin/fotos-283-niky` = `87ffd543ba75809dacaca6799eb707bd5bff1e9f` (re-fetch con refspec explícito el 25/10/2026; la rama avanzó durante el trabajo desde `3164cdb`, y el worktree inicial fue retirado por la limpieza de disco del coordinador — recreado sobre la base nueva, mismos bytes).
- Comprobación previa (dos veces, antes de trabajar y tras el re-fetch): ninguno de los 2 slugs está en `docs/comunicacion-ias/listas/fotos-283-niky.csv` de `origin/fotos-283-niky` (grep: 0 coincidencias).
- Ambos slugs SÍ tienen entrada de datos en `src/lib/comparador-patinetes-base.ts`, así que no hizo falta el fallback `<slug>-oficial.webp`: el hero entregado lleva el nombre exacto del campo `foto` de cada entrada.
- Estado: ENTREGADOS los 2 (foto real, no "sin foto real"). PROHIBIDO IA respetado: ambas son fotografías de producto reales, verificadas visualmente fichero a fichero (incluido el WebP final).
- No se tocó `main` ni `fotos-283-niky`; no se publicó nada en Netlify.

## Filas para consolidar (slug|fuente|url)

etwow-gt-sport|Tienda oficial E-TWOW (etwow.shop, producto GT Sport) — foto de producto oficial, licencia desconocida|https://etwow.shop/products/e-twow-gt-sport-mit-stvo
gotrax-apex|GOTRAX oficial (gotrax.com, CDN oficial) — foto de producto oficial Apex, licencia desconocida|https://gotrax.com/collections/all/electric-scooter

## Ficheros entregados (todos WebP < 300 KB, sin marcas de agua prominentes)

| Fichero | Tamaño (bytes) | Dimensiones | Contenido |
|---|---|---|---|
| `public/media/patinetes/etwow-gt-sport.webp` | 11156 | 600x600 | Hero: E-TWOW GT Sport gris, tres cuartos, fondo blanco, logo E-TWOW vertical en la tija |
| `public/media/patinetes/gotrax-apex.webp` | 33274 | 1200x1200 | Hero: GOTRAX Apex negro, tres cuartos, fondo blanco, logo GOTRAX vertical en la tija, cable rojo |

- sha256 `etwow-gt-sport.webp`: `dcd76bd9a6f733fcc4b61a77e1f247b9e674a001eeaf51bb10f625c9a9ab07a1`
- sha256 `gotrax-apex.webp`: `946758696465096e020cfb788f2206b09cad3abd8c2fcc8d6fb4f432ac0dfa04`

## Entradas de datos (src, `comparador-patinetes-base.ts`)

- `etwow-gt-sport`: marca E-Twow, modelo GT Sport, 999 €, 500 W nominales / 700 W pico, 45 km declarados, 25 km/h, 13,2 kg, batería 504 Wh, ruedas macizas 8", `foto: "/media/patinetes/etwow-gt-sport.webp"`.
- `gotrax-apex`: marca GOTRAX, modelo Apex, 300 € (estimación desde tarifa oficial EE. UU.), 250 W nominales / 300 W pico, 24 km declarados, 25 km/h, 14,4 kg, batería 216 Wh, neumáticos 8,5", `foto: "/media/patinetes/gotrax-apex.webp"`, `fuenteUrl` oficial Apex Pro.

## Fuente de cada foto

- **etwow-gt-sport**: bytes originales = imagen 1 de producto de la tienda oficial E-TWOW (`etwow.shop/cdn/shop/products/1_db6437e7-ae8d-4415-95a6-4f59e5ff93ae.png`, página del producto GT Sport). La página oficial e-twow.com del GT Sport (`e-twow-gt-sport-limited-edition` y `e-twow-s2-gt-line-gt-sl-gt-sport-electric-scooter`) confirma el mismo modelo y specs (motor 500 W / 700 W pico, batería 504 Wh Samsung, 13 kg, plegado en 3 s, doble suspensión); su fetch de texto no expuso URLs de imagen, por eso el byte viene del CDN de la tienda oficial, no de un blog. Licencia: desconocida (no se afirma CC ni dominio público).
- **gotrax-apex**: bytes originales = imagen oficial GOTRAX (`gotrax.com/cdn/shop/files/apex-electric-scooter-592041.jpg`, catálogo oficial gotrax.com). Coincide con la página oficial Apex Pro enlazada en los datos (250 W, 15,5 mi ≈ 24 km, 8,5", 220 lb ≈ 100 kg, UL 2272). Nota honesta de variantes: GOTRAX vende esta misma plataforma como Apex / Apex Pro / Apex XL según año y mercado; el hero es la foto de producto oficial del Apex (negro, cable rojo, motor trasero), coherente con la ficha del slug. Licencia: desconocida.

## Cómo se verificó que es el modelo exacto

- Verificación visual directa de los WebP finales, no solo por nombre:
  - E-TWOW: patinete gris con logo E-TWOW en la tija, doble suspensión visible (delantera y trasera), ruedas pequeñas macizas de 8", plataforma larga y manillar plegable — rasgos del GT Sport / línea GT, no de un Xiaomi o Ninebot genérico. Coherente con los datos (13,2 kg, 500 W, 504 Wh).
  - GOTRAX: patinete negro con GOTRAX vertical en la tija, cable de freno rojo, guardabarros trasero con motor integrado y plataforma texturizada — la silueta del Apex, distinta de los G3/G4/GX de la misma marca. Coherente con los datos (250 W, 24 km, 8,5", sin suspensión).
- Sin IA: fotografías de estudio con reflejos y texturas coherentes, sin artefactos de generación ni texto inventado.
- Formato: `file` confirma WebP (VP8) en ambos; 11.156 y 33.274 bytes, ambos < 300 KB.
- No hay huecos: ningún slug quedó como "sin foto real".
