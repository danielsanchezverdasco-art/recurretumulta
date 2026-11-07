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
