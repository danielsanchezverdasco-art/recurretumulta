# Fotos 283 — trabajador c2w02 (2 slugs)

Base: `origin/fotos-283-niky` en `9a7a422f2`. Verificado en el CSV de la rama base:
ninguno de los 2 slugs estaba entregado (sin mención a `soueast` en el CSV).
Nombres de fichero copiados exactos de `src/lib/comparador-coches-lote6.ts`
(`imagen`, `imagenOficial`, `imagenInteriorOficial`). Todas las fotos son REALES
(ninguna IA); cada una verificada visualmente como el modelo y generación exactos.
Todas en WebP, < 300 KB. Licencia: desconocida salvo que se indique lo contrario.

## Filas para el CSV consolidado

| slug | fuente | url |
|---|---|---|
| soueast-dx8s-2026-precio-ficha-tecnica | Hatla2ee Egipto (ficha del modelo, renders oficiales de prensa) + foto real de AICarGlobal (hero) | https://eg.hatla2ee.com/en/new-car/soueast/DX8S-Coupe/40704 |
| soueast-s06-dm-2026-precio-ficha-tecnica | Soueast KSA, página oficial del S06 DM (producto oficial) | https://soueastksa.com/en/s06dm.php |

Formato plano (slug|fuente|url):

soueast-dx8s-2026-precio-ficha-tecnica|Hatla2ee Egipto (renders oficiales de prensa) + foto real AICarGlobal (hero); licencia desconocida|https://eg.hatla2ee.com/en/new-car/soueast/DX8S-Coupe/40704
soueast-s06-dm-2026-precio-ficha-tecnica|Soueast KSA, página oficial del S06 DM (producto oficial); licencia desconocida|https://soueastksa.com/en/s06dm.php

## Ficheros entregados (bytes)

- public/media/soueast-dx8s-2026-precio-ficha-tecnica-hero.webp — 142430 bytes, 1000x1000
- public/media/soueast-dx8s-2026-precio-ficha-tecnica-oficial.webp — 23792 bytes, 600x400
- public/media/soueast-dx8s-2026-precio-ficha-tecnica-interior.webp — 24964 bytes, 600x400
- public/media/soueast-s06-dm-2026-precio-ficha-tecnica-hero.webp — 32764 bytes, 1280x1247
- public/media/soueast-s06-dm-2026-precio-ficha-tecnica-oficial.webp — 10778 bytes, 1280x397
- public/media/soueast-s06-dm-2026-precio-ficha-tecnica-interior.webp — 70464 bytes, 1280x951

## Fuente de cada foto (verificación visual)

### Soueast DX8S (2026, 7 plazas, gasolina)
- hero (vista delantera / tres cuartos delantera): foto REAL blanca del DX8S exacto
  (parrilla y faros de la generación DX8S, matrícula tapada en el origen),
  AICarGlobal: http://th.aicarglobal.com/wp-content/uploads/2024/05/Soueast-DX8S-3-1.jpg
- oficial (vista tres cuartos): render oficial de prensa rojo, ficha Hatla2ee Egipto:
  https://legion-images.hatla2ee.com/original_image/20303df9-a917-4692-b6cc-b106533c3b63/large.jpg
- interior (habitáculo): render oficial de prensa, misma ficha Hatla2ee Egipto:
  https://legion-images.hatla2ee.com/original_image/b31d0b93-809f-48d0-beba-b804cd5bc7d1/large.jpg
- Nota: las fotos Hatla2ee son de 600x400 (tamaño del origen); no se han reescalado
  hacia arriba. No se encontró vista frontal recta limpia del DX8S: el hero es un
  tres cuartos delantero con el frontal dominante, y el oficial es el tres cuartos
  de estudio rojo.

### Soueast S06 DM (2026, PHEV, 355 CV)
- hero (vista tres cuartos delantera): foto oficial de estudio color Aurora Green,
  Soueast KSA: https://soueastksa.com/img-page/car/s06/Aurora%20Green-2.jpg
- oficial (vista frontal): foto oficial frontal blanca, Soueast KSA:
  https://soueastksa.com/img-page/car/s06/car01.jpg
  — único retoque: recorte inferior para eliminar la anotación de cota "1910 mm"
  de la imagen original de dimensiones; el coche queda intacto.
- interior (habitáculo): foto oficial del cockpit (volante SOUEAST + pantalla central),
  Soueast KSA: https://soueastksa.com/img-page/car/s06/ns_w_car_dm.jpg
- Nota: en la página oficial KSA, `car01.jpg`/`car02.jpg` son diagramas de cotas y
  `ns_w_car_dm.jpg` es el cockpit (los nombres `_car_dm`/`_img_dm` están cruzados
  respecto a exterior/interior); se eligió cada toma por su contenido verificado,
  no por el nombre del fichero origen.
