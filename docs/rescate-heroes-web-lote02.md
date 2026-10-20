# Rescate de héroes de blog — Lote 02 (patinetes, 96 posts)

- **Rama:** `merlin-heroes-blog-lote02` (fotos completas en el commit `aee20d84d05dca00f77385ffa7a23d2d213584dd`)
- **Resultado: 96/96 héroes rescatados. 0 imposibles.**
- **Créditos completos:** `docs/creditos-heroes-web-lote02.csv`

## Método

El worker anterior cayó por un reinicio y se perdió `/tmp`. Este relevo trabajó solo en `~/workspace` y encontró que las fotos reales de los 96 modelos ya existían en disco, procedentes de la auditoría/rescate de fichas de patinetes (`fotos-mp-wt/public/media/patinetes/`, con sus fuentes documentadas en `fotos-mp-wt/lotes/lote-0X/1X-patinetes-*-fuentes.csv`): cada héroe de blog es la foto `-1` de la ficha del **mismo modelo exacto**. Se verificaron las 96 por nombre exacto de fichero, se normalizaron a WebP (máx. 1600 px, q80) y se subieron en 5 tandas de ≤20 vía Git Data API (sin force, sin tocar main).

## Correcciones sobre el rescate de fichas (6 fotos)

La verificación por hash detectó **4 pares de modelos con la misma foto** y 2 errores más; se sustituyeron antes de subir:

1. `urban-glide-all-road-2` traía la foto del All Road 6 2x2 (el rótulo «ALL ROAD 6 2x2» se lee en la plataforma). Nueva: foto **oficial** UrbanGlide `RIDE-AR2.png` de su página de producto.
2. `urban-glide-ride-100-pro-2` traía la foto del Ride 100 Max. Nueva: foto de la ficha del **Ride 100 Pro II** en Worten.pt (1140 px).
3. `cecotec-bongo-serie-doble-z75` y `…-z85` compartían una foto de Amazon. Nuevas: fotos **oficiales Cecotec** distintas por código de producto (07312 para el Z75 y 07313 para el Z85, lifestyle 1200×675, vía `fotos-patinetes-wt`).
4. `etwow-booster-plus-s` traía la foto (roja) del S2 Booster Plus. Nueva: foto de producto del **Booster Plus S gris** (2507 px, CDN Shopify de tienda especializada).
5. `razor-e-prime` traía una foto del **E Prime Air** (negro, rótulo «E PRIME AIR»). Nueva: render oficial del E Prime original gunmetal (SKU 13111813) publicado por Electrek; PNG transparente compuesto sobre blanco (1122 px).
6. `turboant-m10` traía la foto de turboant.com cuyo fichero corresponde al **M10 Pro**. Nueva: foto de producto de la review del M10 en scooter.guide (1680 px).

Nota: `emove-touring` usa su foto de prensa (logo «EMOVE Touring» en el mástil) con el sillín opcional oficial montado.

## Imposibles

Ninguno. Los 96 posts tienen héroe real del modelo exacto, sin IA, sin marcas de agua y sin fotos de concesionario/campa.
