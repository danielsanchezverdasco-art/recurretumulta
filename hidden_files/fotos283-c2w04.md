# Fotos 283 — trabajador c2w04

Base: rama `fotos-283-niky` (brief: HEAD 9a7a422f2; al crear la rama la base ya iba
por ca458a5cd, descendiente de 9a7a422f2; verificado en el HEAD más reciente de
`origin/fotos-283-niky` en el momento de entregar que ninguno de los 2 slugs
está en `docs/comunicacion-ias/listas/fotos-283-niky.csv`).
Rama de entrega: `fotos-283-niky-c2w04`. Sin IA en ninguna foto. Todas WebP <300 KB.
Verificación visual hecha foto por foto antes de entregar.

## Filas para el CSV

suzuki-jimny-pro-2026-precio-ficha-tecnica|Fotos reales ya verificadas para este mismo slug en el repo (public/media/fotos-reales/suzuki-jimny-pro-2026-precio-ficha-tecnica/, según public/media/fotos-reales/fuentes/suzuki.csv de la base); licencia desconocida|https://www.carsales.com.au/editorial/details/2026-suzuki-jimny-review-151625/
suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica|Suzuki oficial Caribe (hero) + prensa motor incar.tw (perfil lateral) + Wheelz (interior); licencia desconocida|https://www.suzukicaribbean.com/en/welcome-to-the-all-new-s-cross?country=bm

## Ficheros entregados (public/media/, bytes, dimensiones)

- suzuki-jimny-pro-2026-precio-ficha-tecnica-hero.webp — 62828 bytes — 1200x800
- suzuki-jimny-pro-2026-precio-ficha-tecnica-oficial.webp — 160854 bytes — 1200x800
- suzuki-jimny-pro-2026-precio-ficha-tecnica-interior-oficial.webp — 97618 bytes — 1200x800
- suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica-hero.webp — 198526 bytes — 1920x1280
- suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica-oficial.webp — 278640 bytes — 1920x1280
- suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica-interior-oficial.webp — 93178 bytes — 1920x1280

## Fuente de cada foto

### suzuki-jimny-pro-2026-precio-ficha-tecnica (Jimny Pro 1.5 4WD N1, 3 puertas, 102 CV)

Las 3 fotos son las fotos-reales ya aceptadas en el repo para este mismo slug
(`public/media/fotos-reales/suzuki-jimny-pro-2026-precio-ficha-tecnica/`),
reprocesadas a 1200x800 y <300 KB con el nombre exacto que piden los datos.
Modelo y generación verificados visualmente: Jimny 4.ª generación, 3 puertas,
color verde/amarillo (Jungle/Kinetic), NO el 5 puertas.

- hero: foto 3 del lote fotos-reales — Jimny 3 puertas circulando, vista frontal.
  Fuente: Zigwheels — https://www.zigwheels.my/new-cars/suzuki/jimny?amp=1
- oficial: foto 1 del lote fotos-reales — Jimny 3 puertas, vista frontal.
  Fuente: Carsales (prueba Jimny 2026) — https://www.carsales.com.au/editorial/details/2026-suzuki-jimny-review-151625/
- interior-oficial: foto 2 del lote fotos-reales — habitáculo Jimny 4.ª generación.
  Fuente: Automacha — https://automacha.com/suzuki-jimny-allgrip-rhino-plus-now-in-malaysia-with-adas/

Notas honestas (Jimny): el alt de los datos pide hero "pista forestal con barro"
y oficial "vista lateral en estudio"; lo entregado es circulando en carretera
(hero) y frontal (oficial): modelo/generación/color exactos, encuadre distinto
al alt. El interior es de una versión de mercado con volante a la derecha y
palanca automática en la foto origen; salpicadero/pantalla/volante son los del
Jimny 4.ª generación (el Pro es manual 5 marchas). Si el coordinador exige
interior manual europeo exacto, que lo sustituya; no se ha inventado otro.

### suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica (S-Cross 1.4T Mild Hybrid, 3.ª generación 2021-)

- hero: imagen oficial Suzuki Caribe — S-Cross gris en primer plano (3/4 frontal)
  y S-Cross azul detrás, fondo costero. Recortada a 3:2 para 1920x1280.
  Fuente: Suzuki Caribbean — https://www.suzukicaribbean.com/assets/content/social-media/s-cross-og-bg.jpg
  (página: https://www.suzukicaribbean.com/en/welcome-to-the-all-new-s-cross?country=bm)
- oficial: perfil lateral completo, S-Cross azul oscuro de 3.ª generación en carretera.
  Fuente: incar.tw (prueba S-Cross) — https://img.incar.tw/2022/12/1671154624-3fc283e651d78ca49393becccf50f73c-1200x800.jpg
- interior-oficial: habitáculo S-Cross 3.ª generación (pantalla flotante 9", salidas
  hexagonales, volante Suzuki).
  Fuente: Wheelz (artículo "The new Suzuki S-Cross 2022") — https://en.wheelz.me/wp-content/uploads/2025/11/Suzuki-SCross-29.jpg
  (página: https://en.wheelz.me/the-new-suzuki-s-cross-2022/)

Notas honestas (S-Cross): el alt del blog pide hero "gris frente a una casa al
atardecer" (el gris coincide; el fondo entregado es costero oficial, no casa al
atardecer) y oficial "rojo, vista lateral en estudio" (lo entregado es perfil
lateral real, pero azul oscuro en carretera, no rojo en estudio). Modelo y
generación exactos en las 3 fotos. No se entrega `...-oficial-2.webp`: solo
aparece en `media-dimensiones.ts`, ningún campo `src` de los datos lo referencia.

## Rechazado / no usado

- Foto de Car&Classic de un "Jimny 2025": era un Jimny 5 puertas — RECHAZADA,
  el Jimny Pro es 3 puertas (3,48 m).
- Fotos de la prueba del Jimny Pro en EspacioFurgo (prueba real del Pro N1):
  el host i.bstr.es no respondió por el proxy (CONNECT timeout) y no se pudo
  descargar ninguna; no se reclama como fuente.
- Imagen oficial Suzuki UK del S-Cross (cdn.suzuki.co.uk): mismo timeout de proxy
  en descarga directa; se usó la oficial Suzuki Caribe, descargable y verificada.

## Alcance

Solo estos 2 slugs. No se ha tocado ningún otro slug, ni main, ni Netlify.
Worktree: ~/workspace/wt-fotos-c2w04 (NO borrar: lo limpia el coordinador tras
consolidar). Nota: el `git checkout -b` materializó el árbol completo en el
worktree pese al `--no-checkout` inicial; el commit solo incluye los 7 ficheros
de este fragmento (6 fotos + este md).
