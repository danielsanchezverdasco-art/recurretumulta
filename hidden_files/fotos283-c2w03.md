# Fotos 283 — trabajador c2w03 (coordinador 2)

Trabajo sobre `fotos-283-niky` (HEAD 9a7a422f2). Verificado antes de empezar en
`docs/comunicacion-ias/listas/fotos-283-niky.csv`: ninguno de los 2 slugs estaba
entregado. Fotos REALES, verificadas visualmente, modelo y generación exactos.
Ninguna foto IA. Todas WebP < 300 KB. Licencia: desconocida en todos los casos
(prensa oficial / prensa del motor reproducida), salvo indicación contraria.

## Filas para el CSV

ssc-tuatara-2025-precio-ficha-tecnica|Foto oficial SSC North America (primer Tuatara de producción, 2020, misma generación en producción 2020–presente) vía NewAtlas/HotCars/TopSpeed; licencia desconocida|https://newatlas.com/automotive/ssc-production-tuatara-hypercar/
stelato-s9-2024-precio-ficha-tecnica|Fotos oficiales Stelato/HIMA del lanzamiento 2024 (CnEVPost 06/08/2024, crédito Stelato) + interior oficial 02/07/2024 (CarNewsChina, imágenes oficiales Stelato); licencia desconocida|https://cnevpost.com/2024/08/06/stelato-launches-s9-target-premium-sedan-market/

## Ficheros entregados (public/media, bytes)

- ssc-tuatara-2025-precio-ficha-tecnica-hero.webp — 71528 bytes — 1280x674
- ssc-tuatara-2025-precio-ficha-tecnica-oficial.webp — 194124 bytes — 1437x960
- ssc-tuatara-2025-precio-ficha-tecnica-galeria-1.webp — 104424 bytes — 1280x855 (extra: completa la galería de la ficha, que referencia hero + oficial + galeria-1; la ficha no define imagenInteriorOficial, viene vacía)
- stelato-s9-2024-precio-ficha-tecnica-hero.webp — 59562 bytes — 1200x638
- stelato-s9-2024-precio-ficha-tecnica-oficial.webp — 61710 bytes — 1200x606
- stelato-s9-2024-precio-ficha-tecnica-interior.webp — 34888 bytes — 800x453

## Fuente de cada foto

### SSC Tuatara 2025 (datos en src/lib/comparador-coches-lote4.ts)
- hero: primer Tuatara de producción, tres cuartos delantera, negro con detalles rojos. HotCars, foto de prensa SSC reproducida: https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/10/first-production-ssc-tuatara_100735087_h.jpg (origen 1710x900, redimensionada a 1280x674).
- oficial: SSC North America oficial vía NewAtlas, vista lateral con puertas diédricas abiertas ("party mode", crédito SSC North America): https://assets.newatlas.com/dims4/default/7324b7a/2147483647/strip/true/crop/4240x2832+0+0/resize/1437x960!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F15%2Ffb%2F06e0695c42988f9a2a3acbd8620c%2F5e3b435324ecc394ea444696-tuatara-15.jpg
- galeria-1 (extra): Tuatara tres cuartos trasera con puertas abiertas, TopSpeed (2020): https://pictures.topspeed.com/IMG/jpg/202002/2020-ssc-tuatara-12.jpg (origen 4240x2832, redimensionada a 1280x855).
- Nota: el Tuatara no tiene cambios de generación entre 2020 y 2025 (producción 2020–presente, 100 unidades), así que las fotos de prensa 2020 son del modelo exacto.

### Stelato S9 2024 (datos en src/lib/comparador-coches-exp24.ts)
- hero: S9 2024 negro, tres cuartos delantera en ciudad, foto oficial Stelato vía CnEVPost, lanzamiento 06/08/2024 (crédito Stelato): https://cnevpost.com/wp-content/uploads/2024/08/2024080610233072-jpg.webp
- oficial: S9 2024 dorado/beige, vista lateral/trasera en estudio, foto oficial Stelato vía CnEVPost, lanzamiento 06/08/2024: https://cnevpost.com/wp-content/uploads/2024/08/2024080610231755-jpg.webp
- interior: interior oficial S9 2024, asientos traseros de gravedad cero en cuero blanco con pantalla de reposabrazos, imágenes oficiales Stelato vía CarNewsChina 02/07/2024: https://carnewschina.com/wp-content/uploads/2024/07/4-800x453.jpg (convertida a WebP a resolución nativa 800x453, sin reescalado artificial).
- Nota: se usaron solo fotos del S9 original 2024, NO del restyling 2025/2026 (nuevo logo "Universe Star" y pilotos "Nebula"). Los hunt1-3 de este slug ya estaban en la rama y no se tocaron.

## Sin foto real
Ninguno: los 2 slugs quedan entregados con foto real.
