# Rescate de héroes de blog — Pack P1 (Segway-Ninebot / Navee / NIU)

Rama: `merlin-heroes-rescate-p1` (desde main 16a6aea4)
Alcance: los 25 posts del lote04 dados por «imposibles» en la auditoría de héroes
(CSV original: `docs/creditos-heroes-web-lote04.csv`, ramas merlin-heroes-blog-lote03/04).
Resultado: **25/25 rescatados**, verificados visualmente uno a uno (modelo exacto,
sin marcas de agua, sin logos de tienda/campa).

## Método
La primera pasada solo buscó en Commons/Bing con criterio ≥1000 px. Esta vez se ha
buscado en tiendas oficiales de la marca (Navee FR/CA/US/BE, NIU US/CA, Segway TH),
retail internacional (Decathlon, Fnac, Wellbots, Sunwheel, OFM, ElectronicPartner,
AO, Scooterland, e-samokat), prensa especializada (ElectricScooterGuide, eRideHero,
Presse-citron, Voltride) y archivo de lanzamientos. Cada foto se ha verificado
visualmente contra el diseño del modelo exacto (insignias del mástil leídas con zoom
en los Navee V25i/V40i/V50i Pro, donde varios retailers ilustran un modelo con el
packshot de otro).

## Créditos
Detalle completo con URL exacta, tipo de fuente y notas de verificación:
`docs/creditos-heroes-rescate-p1.csv` (25 filas).

Resumen por marca:
- **Navee (10)**: GT3 Max (prensa ESG), GT3 Pro (oficial FR), S40 (retail US, 974 px,
  la mayor resolución localizada), ST3 Pro (oficial CA), V25 (oficial BE),
  V25i Pro II (retail Decathlon — la URL está etiquetada como V40i Pro II pero la
  imagen ES el V25i Pro II, verificado por la insignia), V40 (oficial US),
  V40i Pro (Fnac), V40i Pro II (OFM TH), V50i Pro (Wellbots).
- **NIU (6)**: KQi 100P, 200P, 300P, KQi1 Sport y KQi3 Sport de tienda oficial NIU
  US/CA (los dos Sport corrigen los errores de la primera pasada, que había
  localizado un KQi 100F y un KQi3 Max); KQi 200F de review real de eRideHero.
- **Segway-Ninebot (9)**: E2 II (retail ElectronicPartner), E2 Pro (prensa Voltride),
  E3 Pro (retail AO), F3 Pro (retail Scooterland), GT3 E (retail Shopify),
  GT3 Pro E (retail e-samokat), Max G3 (oficial Segway TH), Max G3 Pro y ZT3 Max
  (prensa, ver nota).

## Nota — Max G3 Pro y ZT3 Max (los 2 Segway del 7-oct)
Ambos modelos se presentaron el 7/10/2026 y salen a la venta en noviembre de 2026:
no existen aún fotos de retail ni de propietarios, y la búsqueda extra de material
hands-on solo devuelve el modelo Max G3 (sin «Pro»), distinto. Lo único publicado es
el material de prensa oficial de Segway del lanzamiento; se usa la cobertura de
Presse-citron (medio de prensa, fotos © Segway):
- ZT3 Max: foto de acción real en campo (rider todoterreno) — marcada OFICIAL.
- Max G3 Pro: foto de estilo de vida de estudio del fabricante — marcada
  **RENDER_OFICIAL** en los créditos, a decisión del coordinador, siguiendo el
  mismo criterio que los 3 RENDER_OFICIAL del Pack P2.
Si se prefiere esperar a fotos de retail (noviembre), son los dos únicos ficheros
a sustituir entonces: `public/media/patinetes/segway-ninebot-max-g3-pro-1.webp` y
`public/media/patinetes/segway-ninebot-zt3-max-1.webp`.

## Archivos
- 25 imágenes en `public/media/patinetes/` con el nombre exacto referenciado por
  cada post (`<slug>-1.webp`, webp q82, máx. 1600 px de ancho).
- `docs/creditos-heroes-rescate-p1.csv` — créditos por foto.
- Este informe.
