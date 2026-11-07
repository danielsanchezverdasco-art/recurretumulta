# Lote Cecotec — cierre del área (7 de noviembre de 2026)

Consulta del listado https://cecotec.es/es/patinetes-electricos descargado ese día. `precioEur` solo guarda una cifra cuando el texto de financiación de esa página escribe «PVP» junto al importe. El resto de tarjetas muestran un precio con IVA y no usan esa palabra: el campo queda en null y el importe se anota como precio de tarjeta, con fecha.

Las condiciones de uso (https://cecotec.es/es/information/condiciones-de-uso, apartado VI) dicen que todos los derechos sobre imágenes y contenidos son reservados y prohíben la reproducción con fines comerciales. Las fotos de producto de la tienda no cuentan como material autorizado. No hay permiso de prensa en ese texto.

## PVP escrito en la financiación

- cecotec-bongo-doble-y85-2x2-xxl-connected: 999, en stock
- cecotec-bongo-v55-2x2-connected: 559, en stock
- cecotec-bongo-y45: 469, en stock
- cecotec-bongo-v70-connected: 509, en stock
- cecotec-bongo-serie-doble-z75: 1199, en stock; 1329 sale tachado (10 %). M.O.M. 42,5 kg
- El slug bongo-serie-s-max-infinity marca PVP 399. No es el id serie-s-infinity y no se copia.

## Precio de tarjeta, sin la palabra PVP

D40 XL 299 agotado. D20 XL 219 en stock. D20 Mobile 249 en stock. GS50 369 agotado. D40 XL Suspension 329 agotado. D20E 159 agotado (M.O.M. 12,5 kg; una ficha anterior decía 12,2). Z85 1299 agotado (M.O.M. 44 kg). Serie A Connected 449 agotado.

## Sin ficha en el listado de ese día

bongo-serie-a respondió 404: el 449 no es de ese id. El slug serie-s-infinity, el Advance Connected y el Z+ On Road no salen en el listado. La Advance Max sigue sin precio: el PDF ref. 7029 no trae importe, y el peso queda null porque el PDF imprime 17,2 kg y 14,7 kg.

## Vulcano

https://cecotec.es/es/motocicletas-electricas/cecotec-vulcano-blancorojo muestra 4999 euros con IVA, en stock, sin escribir PVP. Titanio/dorado, el mismo importe, agotado. La Executive Series es otra moto, a 5499 euros y 200 km. Esta ficha guarda autonomía 151 km y batería 72 V / 100 Ah. precioDesde queda null.

## Footer

A 390 px el enlace «Explorar por marca» medía 450 px porque el nav no recibía flex-wrap: el CSS de utilidades no cargaba al faltar MonoEscondidoLazy.tsx. Se restaura ese módulo y se fuerza el flex en el nav del pie.

## Nota del lote P2 (misma fecha, corregida arriba)

# Lote Cecotec P2 — precios y fotos (7 de noviembre de 2026)

Consulta de las fichas de producto en cecotec.es el 7 de noviembre de 2026. El importe de la tienda es PVP con IVA. Una cifra de MediaMarkt, Pixmania, Fnac o PcComponentes no se copia como PVP. El sello «certificado de homologación» de la tienda no se convierte en `certificadoDgt: true` cuando la propia ficha ya distingue ese sello del certificado de circulación.

| id | antes | decisión | tipo | variante / stock |
|---|---|---|---|---|
| cecotec-bongo-d40-xl-connected | null (texto 299 y 458) | 299 | PVP | agotado. 458 € era estimación de terceros |
| cecotec-bongo-d20-xl-connected | null (texto 257,65 Pixmania) | 219 | PVP | en stock. También se rellenan 300/630 W, 20 km, 180 Wh, 15,75 kg y ruedas de 10" |
| cecotec-bongo-d20-mobile | 229 (anotado el 21/10/2026) | 249 | PVP | en stock. El 229 queda como histórico de esa fecha |
| cecotec-bongo-serie-s-infinity | 369 | 422,90 | PVP | en stock, envío 24-72 h |
| cecotec-bongo-gs50-xxl-connected | 369 | 369 | PVP | sin stock. Coincide con la tienda |
| cecotec-bongo-d40-xl-suspension-connected | 329 (el texto aún citaba 386) | 329 | PVP | agotado. 386 € era Pixmania. El peso sigue sin unificarse: la página dice 22 kg y el manual citado en la ficha dice 24 kg |
| cecotec-bongo-serie-a-advance-connected | 449 | 379 | PVP | en stock. 449 € es el PVP del Serie A Connected, otro modelo |
| cecotec-bongo-serie-a-advance-connected-max | 369 | 369, sin tratarlo como PVP | tienda | la ficha PDF ref. 7029 no imprime precio. El PDF da 17,2 kg y, en otra línea, 14,7 kg; no se sustituye el 15 kg de la ficha |
| cecotec-bongo-z-plus | 386 | 386, sin tratarlo como PVP | PcComponentes | la página Bongo Z+ On Road no mostró un importe en esta consulta |

Fotos de portada del blog que mostraban otro modelo (D20E, D30 XL, Serie A Plus o Z Mountain) pasan a `/media/patinetes/<id>-1.webp`, la misma toma que ya usa la ficha de ese id. Esas tomas son de producto de la marca y no tienen fila de licencia abierta en `media-creditos.md`. No se afirma una licencia Commons.

Residual fuera de estos nueve id: el resto de Bongo (p6, p10, p11, p12 y el comparador base) no se ha reabierto en esta pasada. La moto `cecotec-vulcano-2025-ficha-tecnica-precio` queda fuera del lote de patinetes.

## Corrección 7/11, segunda pasada

El campo se muestra como «Precio oficial» / «Precio desde», no como PVP. Cuando cecotec.es vende el modelo con IVA, ese importe vuelve al campo, fechado el 7/11/2026. No se llama PVP. Siguen vacíos los que no están en la tienda: Serie A sin Connected (404), Serie S Infinity, Advance Connected, Advance Max, Z+ On Road, Z City, Z Mountain, Z Power Mountain, Z Power City y A+ Max 45.

Fotos: https://cecotec.es/es/information/condiciones-de-uso apartado VI reserva las imágenes y prohíbe la reproducción comercial. Commons no tiene archivos «Cecotec Bongo» ni «Cecotec Vulcano» (API de búsqueda, 0 resultados). Las filas de media-creditos marcadas «prensa» apuntan a cecotec.es y a media.cecotec.cloud; eso no es un permiso. Las galerías no se han borrado y el área de fotos no está cerrada.

## Lista DGT, 7/11/2026

Fuente: https://www.dgt.es/nuestros-servicios/tu-vehiculo/vehiculos-de-movilidad-personal-vmp/

`certificadoDgt` queda en true solo si esa lista nombra el modelo o su referencia, con el número de certificado en el comentario. Rockway Evo es A1163 (SW-RW EVO), no por el texto de la tienda. Rockway GL no aparece y pasa a null. También entran, entre otros, D40 XL A1101, D20 XL A1099, GS50 A1138, X65 ref. 7109 A1018, X45 ref. 7107 A1019, y los Xiaomi y Dualtron TOGO Plus cuya fila coincide. Quedan en null el D30 a secas, el M30 Connected, la Serie S Infinity, el Advance Max (ref. 7029) y el Z Power Mountain, que no tienen fila exacta.

Fotos Cecotec: en `public/media-creditos.md` las filas de Cecotec son «prensa» o «desconocida» y apuntan a cecotec.es, media.cecotec.cloud o a un retailer. No hay fila con licencia abierta ni foto del equipo. La búsqueda en Commons no se toma como prueba de que no exista otra fuente. Las galerías siguen y el bloqueo de fotos no está cerrado.
