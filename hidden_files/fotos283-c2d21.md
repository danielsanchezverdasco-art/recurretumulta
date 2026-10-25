# Fotos 283 — trabajador C2D21 (coordinador 2)

- Rama base: `fotos-283-niky` @ `90153ad80` (verificado con fetch con refspec explícito; la punta se movió de `3164cdb35` a `90153ad80` durante el trabajo).
- Rama propia: `fotos-283-niky-c2d21` (desde `origin/fotos-283-niky`).
- Comprobación previa: ninguno de los 2 slugs estaba en `docs/comunicacion-ias/listas/fotos-283-niky.csv`, ni en la punta antigua (`3164cdb35`, grep 0) ni en la punta actual (`90153ad80`, grep 0) antes de empezar.
- Resultado: 2/2 ENTREGADOS con foto real (ninguno es "sin foto real", ninguna es IA).
- No se tocó `main` ni `fotos-283-niky`; no se publicó nada en Netlify.

## Filas para el CSV del coordinador (slug|fuente|url)

joyor-t10|Joyor oficial (tienda oficial JOYOR_US, joyorescooter.com, imagen principal de producto T10); licencia desconocida (material de producto del fabricante)|https://joyorescooter.com/products/usjoyor-t10
joyor-y10|Joyor oficial (tienda oficial España, joyorscooter.com, imagen principal de producto Y10 DGT según sitemap oficial de productos); licencia desconocida (material de producto del fabricante)|https://joyorscooter.com/es/products/joyor-y10-homologado-dgt-patinete-electrico-500w-100km-48v-26ah

## Entradas de datos (src, rama base)

- `joyor-t10` — `src/lib/comparador-patinetes-exp-p3.ts` (línea 2741): Joyor T10, 669 €, 2×1000 W, 60 V 18 Ah (1080 Wh), 75 km declarados, 65 km/h desbloqueado, 29,6 kg, frenos hidráulicos Zoom 120 mm, neumáticos 10" off-road.
  - `foto` (hero): `/media/patinetes/joyor-t10-1.webp` → ENTREGADO con ese nombre exacto.
  - `galeria`: `/media/patinetes/joyor-t10-2.webp` (detalle frenos) y `/media/patinetes/joyor-t10-3.webp` (camino rural) → NO entregadas en este lote (solo el hero, como el resto de lotes de 1 foto por slug). Quedan pendientes para otro trabajador si el coordinador las pide; no se han inventado ni reutilizado fotos de otro modelo para cubrirlas.
- `joyor-y10` — `src/lib/comparador-patinetes-base.ts` (línea 1964): Joyor Y10, sin precio oficial estable en España, 500 W (810 W máx.), 48 V 26 Ah (1248 Wh), 100 km declarados, 25 km/h, 26 kg, doble disco, certificado DGT: true.
  - `foto` (hero): `/media/patinetes/joyor-y10.webp` → ENTREGADO con ese nombre exacto. No tiene galería en los datos.

## Ficheros entregados (public/media/patinetes/, todos WebP reales < 300 KB)

| Fichero | Tamaño (bytes) | Dimensiones | Contenido |
|---|---|---|---|
| `joyor-t10-1.webp` | 30148 | 1080x1080 | Hero: Joyor T10 negro/naranja, perfil lateral completo, logo JOYOR en la tija, ruedas 10" off-road de taco, basculantes naranjas y discos de freno |
| `joyor-y10.webp` | 90742 | 2000x2000 | Hero: Joyor Y10 negro, tres cuartos delantero, logo JOYOR en la tija, disco delantero, doble suspensión delantera visible, plataforma ancha; incluye el sello "Patinete DGT Certificado" que forma parte de la imagen oficial de producto (no es marca de agua añadida) |

- sha256: `joyor-t10-1.webp` = `fbbb074ff799acad4958b30bb23647195ce07651f52ecc9551d9b85bd701d4e0`; `joyor-y10.webp` = `14e0eeaae3f4c18073e67429d88205d88ab6dc3b2f9a5546452d9a4066e9cbb2`.
- Ninguno de estos 2 nombres existía en `public/media/patinetes/` de la rama base (comprobado con `git ls-tree`).

## Fuente de cada foto (orden de fuentes respetado: producto oficial)

- `joyor-t10-1.webp`: producto oficial Joyor, página US del T10 (https://joyorescooter.com/products/usjoyor-t10), imagen "Full left side profile of Joyor T10 dual motor electric scooter" / imagen principal del producto:
  - URL de origen: `https://joyorescooter.com/cdn/shop/files/joyor-t10-dual-motor-electric-scooter-main.webp?v=1788767336&width=1080`
  - Nota: el CDN sirve ese fichero como JPEG pese a la extensión `.webp`; se convirtió a WebP real (Pillow, calidad 85) sin recorte ni cambio de contenido.
- `joyor-y10.webp`: producto oficial Joyor España, imagen principal del Y10 DGT listada en el sitemap oficial de productos de joyorscooter.com para la URL ES del Y10:
  - URL de origen: `https://cdn.shopify.com/s/files/1/0758/1404/3983/files/Joyor_Y10_Electric_Scooter_DGT_Helmet_1e25098d-5ca6-4dd7-bb26-9604d39dce97.png?v=1776341275`
  - Nota: el original es PNG 2000x2000 RGBA (696.816 bytes); se aplanó sobre fondo blanco y se convirtió a WebP (calidad 85) sin recorte. La página de producto ES muestra error de plantilla ("Liquid error") y no expone la galería principal en el texto extraído, por eso la imagen se localizó vía el sitemap oficial de productos, que la asocia exactamente a la URL ES del Y10.
- Licencia: desconocida en ambos casos (material de producto del fabricante; no se afirma licencia libre ni dominio público). No son fotos IA: renders/fotografías de producto del fabricante con distintivos, reflejos y geometría coherentes.

## Cómo se verificó que es el modelo exacto (visual, no solo por nombre)

- T10: doble motor (bujes en ambas ruedas), basculantes naranjas, neumáticos 10" de taco off-road, logo JOYOR en la tija, frenos de disco — coincide con la ficha (2×1000 W, 10" off-road, frenos hidráulicos, 29,6 kg). No es un S10-S-Z ni un S5-Z (otra geometría de basculante y otro color) ni un Y10 (urbano, sin basculantes naranjas ni tacos).
- Y10: urbano negro de un solo motor, plataforma ancha, suspensión delantera de doble muelle visible, disco delantero, logo JOYOR en la tija y sello DGT — coincide con la ficha (500 W, 48 V 26 Ah, 25 km/h, certificado DGT true, 26 kg). No es un Y5S/Y6-S (otra plataforma y, el Y6-S, con sillín) ni un T10 (sin tacos ni doble motor).
- Formato verificado con `file`: ambos son WebP (VP8) reales; tamaños 30.148 y 90.742 bytes, ambos < 300 KB.

## Incidencias del trabajo (para el coordinador, no bloquean la entrega)

- El primer worktree `wt-fotos-c2d21` (sparse, aún vacío por un fallo TLS del proxy al traer blobs) desapareció durante la limpieza de worktrees viejos del 25/10 (disco al 96%); se recreó desde la punta actual `90153ad80` y se trabajó con sparse-checkout de solo `public/media/patinetes/` + `hidden_files/`, con el índice completo restaurado (`read-tree` + `skip-worktree`) para que el commit no pierda el resto del árbol. Verificar en la consolidación que el commit solo añade los 3 ficheros listados abajo.
- No borrar este worktree: lo limpia el coordinador tras consolidar (orden de la tarea).
