# Contradicciones vistas el 2026-11-07

Registro de lectura. No cambia fotos, no sustituye las 141 y no reconstruye el sitio.

## Dónde están las 41 lecturas

El commit `132fa5c6b4566f86ad382322e893abe247b4b232` guarda 100 lecturas. Las 41 últimas son las entradas 59 a 99, tanda `2026-11-07-visual-4`. El blob es `781aa8b885409dcef17ee6062a8d63750c7d8d96`. El bundle `controles-282b3c07-a-132fa5c6b.bundle` apunta a ese commit y, en un clon aislado, el mismo blob sale de `132fa5c6b:docs/inventario/revision-visual-avance.json`. No estaban solo en el árbol sucio.

Ese registro todavía contaba el Golf como variante cubierta y el Pursang de Raybar como marca no leída. La corrección es este commit, posterior a `132fa5c6b`, y no entra en ese bundle. BOX no debe tratar este archivo como parte del bundle 132.

## Correcciones de registro

- `/media/volkswagen-golf-20-tdi-oficial.webp`. La placa lee GOLF. No confirma 2.0 TDI, 150 CV ni 2026. Resultado `modelo-sin-variante`. El fichero no está en el HTML renderizado. `variante_cubierta` cuenta solo `variante-cubierta`; un modelo identificado no suma variante exacta.
- `/media/pursang-e-track-ficha-tecnica-precio-oficial.webp`. El lateral lee Raybar. Raybar es otra marca (`https://raybarmotorcycles.com/en/`). Resultado `contradiccion-bloqueada`: no usar este fichero como foto del Pursang hasta un contraste que lo desmienta. No está en ningún HTML renderizado.

## Lo que sí está renderizado

Pursang E-Track, en `/motos/pursang-e-track-ficha-tecnica-precio/` y `/blog/pursang-e-track-ficha-tecnica-precio/`, usa las fotos 1 a 4, no la de Raybar. La 1 y la 3 leen BigBore; la 2 y la 4 leen e-track. BigBore es el nombre con el que Pursang presentó en 2019 la versión de 11 kW (Electrek, 16 may 2019; Sideburn, 24 nov 2018). La ficha oficial actual es `https://www.pursangmotorcycles.com/e-track-v3/`. No se bloquean esas cuatro. No confirman 15 CV, 9.400 € ni 2026. La foto 1 también sale como miniatura en fichas de BMW CE 02, Maeving RM1S y Velca Vortex.

Next NX² (`/media/next-nx2-2025-ficha-tecnica-precio-oficial.webp`) lee NX² y el nombre del fabricante, que la prensa identifica como Okla (Híbridos y Eléctricos; Motor.es: fuera se vende como Okla Ovega S02). No es una marca ajena. No se lee Next. No se bloquea.

## Contradicciones de las páginas renderizadas


1. Golf con insignia R. `/media/volkswagen-golf-20-tdi-2026-precio-ficha-tecnica-hero.webp` lee R en la parrilla y en la aleta. La ficha dice Golf 2.0 TDI de 150 CV. Páginas: `/coches/volkswagen-golf-20-tdi-2026-precio-ficha-tecnica/` y `/blog/volkswagen-golf-20-tdi-2026-precio-ficha-tecnica/`. La otra foto de esa ficha, `volkswagen-golf-20-tdi-2026-precio-ficha-tecnica-oficial.webp`, es un Golf sin insignia TDI: identifica el modelo y no el 2.0 TDI.
2. e-308 con cartel de híbrido. `/media/peugeot-e-308-electrico-2026-precio-ficha-tecnica-hero.webp`: el capó lee 308 y el cartel lee Nouvelle 308 Hybride. Páginas: `/coches/peugeot-e-308-electrico-2026-precio-ficha-tecnica/` y su entrada de blog.
3. Cupra con tapa de carga. `/media/cupra-leon-sportstourer-20-tdi-2026-precio-ficha-tecnica-oficial.webp` lee CUPRA y lleva tapa de carga en la aleta. La página afirma 2.0 TDI. También entra como miniatura en las fichas de SEAT León Sportstourer 2.0 TDI, Kia ProCeed, Volkswagen Passat Variant 2.0 TDI, Cupra León Sportstourer 1.5 TSI, Volkswagen Golf Variant 2.0 TDI y Volkswagen Arteon, además de la propia ficha y el blog.

## Resolución aplicada, sin publicar

El delta está en `docs/inventario/delta-focal-contradicciones/`. Padre `2109346d`. No entra en el bundle 132.

- Golf: la foto con insignia R se sustituye por el Golf Mk8 que Damian B Oh publica como 2.0 TDI (CC BY-SA 4.0). En la foto se lee GOLF y no hay R. TDI no está escrito en el coche.
- e-308: héroe y oficial, las dos con cartel Hybride, pasan al e-308 de Alexander-93 (CC BY-SA 4.0), con rótulo NEW E-308. El crédito visible deja de ser el del 308 III. Las miniaturas que usan la oficial cambian con el fichero; esas otras fichas no se editan.
- Cupra Sportstourer 2.0 TDI: no hay foto que pruebe ese diésel. No se sustituye. Raybar sigue fuera del HTML y no se borra.
- Los 33 de `no-tocar.txt` y los títulos de estas páginas no cambian. `public/` y `src/` tampoco.

