# G4 — Manifiesto caravanas lote-2 (19/10/2026)

Agente G4: 4 Fendt + 4 Tabbert + 2 Dethleffs, gama 2026. Rama `caravanas-lote-2`.

## Fuentes de datos
- **Fendt** (medidas, pesos, MMA, plazas, carga útil "Load approx.", precio base):
  web oficial https://www.fendt-caravan.com (páginas de modelo, precio en JSON-LD).
  Precios = tarifa oficial en ALEMANIA → `aprox: []`.
- **Tabbert**: la marca no publica ficha completa con precios para estos modelos.
  Precios = tarifa oficial Alemania 2026 vía prensa especializada (vanlifemag.de,
  camperstyle.de) o UPE de unidad 2026 en distribuidor alemán → `aprox: ["precioDesde"]`.
  Medidas/MMA/plazas de anuncios de unidades 2026 en la red de distribuidores.
- **Dethleffs** (medidas, pesos, MMA, plazas, precio): web oficial
  https://www.dethleffs.com y https://www.dethleffs.es (precio en JSON-LD).
  Precios oficiales → `aprox: []`. Pesos 2026 del exposé del distribuidor.
- Carga útil: Fendt la publica ("Load approx.") → incluida. Tabbert y Dethleffs
  no la publican en su web → `cargaUtilKg: null` (sin calcular).
- Garantía: 12 años de estanqueidad Fendt; 6 años Tabbert y Dethleffs (con revisión anual).

## Tabla de fichas

| slug | marca | modelo | precioDesde (€) | MMA (kg) | plazas | carnet | fuente URL | nº fotos |
|---|---|---|---|---|---|---|---|---|
| fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica | Fendt | Bianco Activ 560 SKM | 36090 | 1800 | 5 | B | https://www.fendt-caravan.com/en/bianco/activ-560-skm.html | 4 |
| fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica | Fendt | Bianco Activ 465 SGE | 30870 | 1600 | 2 | B | https://www.fendt-caravan.com/en/bianco/activ-465-sge.html | 4 |
| fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica | Fendt | Tendenza 560 SFDW | 44470 | 1800 | 4 | B | https://www.fendt-caravan.com/en/tendenza/560-sfdw.html | 4 |
| fendt-diamant-650-gdw-2026-precio-ficha-tecnica | Fendt | Diamant 650 GDW | 59370 | 2200 | 4 | B96 | https://www.fendt-caravan.com/en/diamant/650-gdw.html | 4 |
| tabbert-pantiga-490-e-2026-precio-ficha-tecnica | Tabbert | Pantiga 490 E | 34900 (aprox, DE) | 2000 | 2 | B96 | https://suchen.mobile.de/wohnwagen/tabbert-pantiga-490-e.html | 4 |
| tabbert-cazadora-460-e-2026-precio-ficha-tecnica | Tabbert | Cazadora 460 E | 27365 (aprox, DE) | 1400 | 4 | B | https://vanlifemag.de/tabbert-cazadora-neuer-wohnwagen-fuer-komfortables-vanlife/ | 4 |
| tabbert-senara-550-dmk-2026-precio-ficha-tecnica | Tabbert | Senara 550 DMK | 28990 (aprox, DE) | 1700 | 4 | B | https://camperstyle.de/tabbert-senara-550-dmk-caravan-familie-274644/ | 4 |
| tabbert-da-vinci-495-he-2026-precio-ficha-tecnica | Tabbert | Da Vinci 495 HE | 39220 (aprox, DE) | 1700 | 4 | B | https://suchen.mobile.de/wohnwagen/tabbert-560-e.html?lang=en | 4 |
| dethleffs-nomad-520-elt-2026-precio-ficha-tecnica | Dethleffs | Nomad 520 ELT | 33499 | 2000 | 3 | B96 | https://www.dethleffs.com/caravans/nomad/520-elt | 4 |
| dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica | Dethleffs | Beduin Scandinavia 690 BQT | 56190 | 2200 | 4 | B96 | https://www.dethleffs.es/caravanas/beduin-scandinavia/690-bqt | 4 |

## Slugs de caravanas (para caravanas-slugs.txt)

- fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica
- fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica
- fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica
- fendt-diamant-650-gdw-2026-precio-ficha-tecnica
- tabbert-pantiga-490-e-2026-precio-ficha-tecnica
- tabbert-cazadora-460-e-2026-precio-ficha-tecnica
- tabbert-senara-550-dmk-2026-precio-ficha-tecnica
- tabbert-da-vinci-495-he-2026-precio-ficha-tecnica
- dethleffs-nomad-520-elt-2026-precio-ficha-tecnica
- dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica

## Slugs de blog (para blog-slugs.txt)

- fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-analisis-opinion
- fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-analisis-opinion
- fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-analisis-opinion
- fendt-diamant-650-gdw-2026-precio-ficha-tecnica-analisis-opinion
- tabbert-pantiga-490-e-2026-precio-ficha-tecnica-analisis-opinion
- tabbert-cazadora-460-e-2026-precio-ficha-tecnica-analisis-opinion
- tabbert-senara-550-dmk-2026-precio-ficha-tecnica-analisis-opinion
- tabbert-da-vinci-495-he-2026-precio-ficha-tecnica-analisis-opinion
- dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-analisis-opinion
- dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-analisis-opinion

## Créditos de fotos (para media-creditos.md)

| /media/<fichero> | <URL exacta de origen> | <Marca> | prensa/no-oficial |
|---|---|---|---|
| /media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica.webp | https://img.classistatic.de/api/v1/mo-prod/images/e1/e1a78a3d-74b9-4834-b14a-26c863299cba?rule=mo-1600 | Fendt | no-oficial |
| /media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-oficial-2.webp | https://cdn.caraworld.com/bilder/i/028/088/873/28088873-3-728-0.webp | Fendt | no-oficial |
| /media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-oficial-3.webp | https://campingwelt.dso.empori.se/i/UserFiles/Products/5060/568443.jpg?mw=1150&mh=768&q=99&sf=1&bc=246,246,246 | Fendt | no-oficial |
| /media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-interior-oficial.webp | https://m3caravaning.com/wp-content/uploads/2026/03/caravana-fendt-bianco-activ-560-skm-17-800x600-1-800x535.jpg | Fendt | no-oficial |
| /media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica.webp | https://images.caravans.nl/2cc9b2f358ac3163816bfdff478ed9075ccca129f4f70a57f2a2bd98cabea18d.jpg/xlarge/normalfitcanvas/blank/ | Fendt | no-oficial |
| /media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-oficial-2.webp | https://images.caravans.nl/50e8ba8f7aae13c924a1ea38a676cc4f091b333cf2e5caa7a111f7e584b7c667.jpg/xlarge/normalfitcanvas/blank/webp | Fendt | no-oficial |
| /media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-oficial-3.webp | https://api.caravana.de/media/vehicles/fendt/fendt-bianco-activ-465-sge-ec698d/wohnwagen-fendt-bianco-activ-465-sge-2026-2-schlafplaetze-neuwagen-4.jpg | Fendt | no-oficial |
| /media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-interior-oficial.webp | https://fahrzeug.camping-neuss.de/storage/fahrzeugimages/fendt-465-sge-2026-351585-14.jpg | Fendt | no-oficial |
| /media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica.webp | https://media.camperstyle.com/fendt-tendenza-560-sfdw-front-0a157f.jpg?width=1200 | Fendt | prensa |
| /media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-oficial-2.webp | https://static.caravan24.ch/thumbs/xxlarge/82958-1750502507.jpg | Fendt | no-oficial |
| /media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-oficial-3.webp | https://images.caravans.nl/dc58600261fdf1371a45d34f5d9e496f105a74a9ae1432f73b2ca8d83011671c.jpg/xlarge/normalfitcanvas/blank/webp | Fendt | no-oficial |
| /media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-interior-oficial.webp | https://media.camperstyle.com/fendt-tendenza-560-sfdw-sitzgruppe-02e52e.jpg?width=1200 | Fendt | prensa |
| /media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica.webp | https://images.caravans.nl/306b4104b482e15c4ea7fb7a4c89c7e713b0a9ee13b899046459b0c1c3a8c92d.jpg/xlarge/normalfitcanvas/blank/ | Fendt | no-oficial |
| /media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-oficial-2.webp | https://www.caraworld.de/bilder/i/024/133/265/24133265-3-728-0.webp | Fendt | no-oficial |
| /media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-oficial-3.webp | https://cdn.caraworld.com/bilder/i/024/133/269/24133269-3-728-0.webp | Fendt | no-oficial |
| /media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-interior-oficial.webp | https://cdn.caraworld.com/bilder/i/024/133/268/24133268-3-728-0.webp | Fendt | no-oficial |
| /media/tabbert-pantiga-490-e-2026-precio-ficha-tecnica.webp | https://img.classistatic.de/api/v1/mo-prod/images/92/92b6f084-1a36-4666-9d95-a1625d31d20f?rule=mo-1600 | Tabbert | no-oficial |
| /media/tabbert-pantiga-490-e-2026-precio-ficha-tecnica-oficial-2.webp | https://images.caravans.nl/f0b9c101a96062bb08914a5c69828c031057d8adf4fe976991f6df24d5d21f0c.jpg/xlarge/normalfitcanvas/blank/webp | Tabbert | no-oficial |
| /media/tabbert-pantiga-490-e-2026-precio-ficha-tecnica-oficial-3.webp | https://www.intercaravaning.de/fileadmin/_processed_/2/5/csm_f058f7b2541fc6af35a66ebabcf904a33f51f78b_02edefc80e.webp | Tabbert | no-oficial |
| /media/tabbert-pantiga-490-e-2026-precio-ficha-tecnica-interior-oficial.webp | https://static.caravan24.ch/fotos/xlarge/127924-b539bf99346d75e44707f09b7b41900a-1202177-96d119f43cae2c78700e1d512e7acd79.jpg | Tabbert | no-oficial |
| /media/tabbert-cazadora-460-e-2026-precio-ficha-tecnica.webp | https://www.caraworld.de/images/jit/24828808/3/728/22435476.webp | Tabbert | no-oficial |
| /media/tabbert-cazadora-460-e-2026-precio-ficha-tecnica-oficial-2.webp | https://www.caravaning-markt.ch/cm-wAssets/img/neufahrzeugmarkt/Wg1R7qX/weblication/wThumbnails/image2-2x-8ef860b05c320fdgfc5f1e8b41843872.webp?creationTime=1769496953 | Tabbert | no-oficial |
| /media/tabbert-cazadora-460-e-2026-precio-ficha-tecnica-oficial-3.webp | https://marketplace.careiwo.de/storage/vehicles/2752/mobile-de/d9675b430e319fcd410c9b559eee79e6.jpg | Tabbert | no-oficial |
| /media/tabbert-cazadora-460-e-2026-precio-ficha-tecnica-interior-oficial.webp | https://www.mw-caravaning.de/fileadmin/_processed_/8/7/csm_d28fbc57c4e79173f9ba63c9a6f3db674af46da0_6cf87db45c.webp | Tabbert | no-oficial |
| /media/tabbert-senara-550-dmk-2026-precio-ficha-tecnica.webp | https://images.caravans.nl/d4bec7ef85d628b0eff29e82e712873eacadf2a33cea45c4537588453962842f.jpg/xlarge/normalfitcanvas/blank/webp | Tabbert | no-oficial |
| /media/tabbert-senara-550-dmk-2026-precio-ficha-tecnica-oficial-2.webp | https://www.caravan-markt.ch/cm-wAssets/img/neufahrzeugmarkt/WeBBFYJ/weblication/wThumbnails/image2-2x-12e6c4b068a1c85ge9793831ff580908.webp?creationTime=1731336730 | Tabbert | no-oficial |
| /media/tabbert-senara-550-dmk-2026-precio-ficha-tecnica-oficial-3.webp | https://marketplace.careiwo.de/storage/vehicles/1399/mobile-de/9fe54978aca71f19f85ba8f1124ece63.jpg | Tabbert | no-oficial |
| /media/tabbert-senara-550-dmk-2026-precio-ficha-tecnica-interior-oficial.webp | https://images.caravans.nl/9bbe22d9cfbd6ac6f34c780b9df097b7b521c834b1c76ee31b29df7a199f9a73.jpg/xlarge/normalfitcanvas/blank/webp | Tabbert | no-oficial |
| /media/tabbert-da-vinci-495-he-2026-precio-ficha-tecnica.webp | https://www.intercaravaning.de/fileadmin/Extensions/tx_caraworld/images/b3/b3dd8993e9a8d14ef363c1c1d0bc65580673c915.webp | Tabbert | no-oficial |
| /media/tabbert-da-vinci-495-he-2026-precio-ficha-tecnica-oficial-2.webp | https://www.caraworld.de/images/jit/24827180/3/728/17923822.webp | Tabbert | no-oficial |
| /media/tabbert-da-vinci-495-he-2026-precio-ficha-tecnica-oficial-3.webp | https://www.intercaravaning.de/fileadmin/_processed_/4/f/csm_fa7b1f5571fcf85e0783459fff1850196a45ed8d_af63ff32dd.webp | Tabbert | no-oficial |
| /media/tabbert-da-vinci-495-he-2026-precio-ficha-tecnica-interior-oficial.webp | https://www.caraworld.de/images/jit/24827178/3/728/17923820.webp | Tabbert | no-oficial |
| /media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica.webp | https://images.caravans.nl/7e6bedbd3de86d60d1a58abcb963276270cb725ddf22f31069fb01541ed1cbb7.jpg/xlarge/normalfitcanvas/blank/webp | Dethleffs | no-oficial |
| /media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-oficial-2.webp | https://static.caravan24.ch/thumbs/xxlarge/79190-1739534721.jpg | Dethleffs | no-oficial |
| /media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-oficial-3.webp | https://img.classistatic.de/api/v1/mo-prod/images/3d/3dbe0dc1-1c1a-4c5b-b748-5a1b90dc597b?rule=mo-640.jpg | Dethleffs | no-oficial |
| /media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-interior-oficial.webp | https://www.intercaravaning.de/fileadmin/Extensions/tx_caraworld/images/0c/0cc4b8c9300faa4d3f9985a25a7f8b2482bd2110.webp | Dethleffs | no-oficial |
| /media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica.webp | https://images.finncdn.no/dynamic/1600w/2024/5/vertical-0/28/1/354/843/691_130fe529-f689-4fab-bf41-e2bfdabaf074.jpg | Dethleffs | no-oficial |
| /media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-oficial-2.webp | https://images.finncdn.no/dynamic/1600w/2024/5/vertical-0/28/1/354/843/691_3343bc47-4c91-4626-9682-40281a7e209a.jpg | Dethleffs | no-oficial |
| /media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-oficial-3.webp | https://caravan-lehti.fi/media/Dethleffs_Beduin_Scandinavia_690_BQT_matkailuvaunu-8-768x461.jpg | Dethleffs | prensa |
| /media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-interior-oficial.webp | https://www.dethleffs.es/dethleffs/01_DE/01_bilddaten_2024-25/01_wohnwagen/06_2025_beduin_scandinavia/leben-im-beduin/image-thumb__105742__wls-feature-highlights-lightbox/det_beduin_690_bqt_durchsicht_richtung_bett_271124_ret.jpg | Dethleffs | oficial |

## Rutas noindex

- /caravanas/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica/
- /blog/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica/
- /blog/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica/
- /blog/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/fendt-diamant-650-gdw-2026-precio-ficha-tecnica/
- /blog/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/tabbert-pantiga-490-e-2026-precio-ficha-tecnica/
- /blog/tabbert-pantiga-490-e-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/tabbert-cazadora-460-e-2026-precio-ficha-tecnica/
- /blog/tabbert-cazadora-460-e-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/tabbert-senara-550-dmk-2026-precio-ficha-tecnica/
- /blog/tabbert-senara-550-dmk-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/tabbert-da-vinci-495-he-2026-precio-ficha-tecnica/
- /blog/tabbert-da-vinci-495-he-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica/
- /blog/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-analisis-opinion/
- /caravanas/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica/
- /blog/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-analisis-opinion/

## Notas de calidad

- Fotos verificadas visualmente modelo por modelo; descartadas por marca de agua
  (BOCHOLT, ELBE CARAVAN, TruckScout24, van den Elzen), por pegatinas de
  distribuidor (ullrich-caravaning) y por no ser foto (plano de planta, cofre de gas).
- Textos 100% propios; Jaccard entre los 10 posts: 0 pares >= 0,30.
- Títulos 50-60 car., excerpts 130-155 car., 10 posts de 1.000+ palabras.
- `npx tsc -b`: exit 0 (verificado antes del push).
