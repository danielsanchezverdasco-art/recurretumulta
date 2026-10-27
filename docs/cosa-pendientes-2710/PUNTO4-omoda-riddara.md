# Punto 4 (ORD-20261027-0613): Omoda 39.900 € y Riddara 315 kW en sus páginas de marca

Comprobado el 27/10/2026 (hora de Madrid). Los dos textos están en las páginas en vivo
/coches/marca/omoda/ y /coches/marca/riddara/, en el bloque «Modelos destacados».
Ese texto sale de `scripts/datos-seo/editorial-marca.json` (commit 30c7e1258, ramas
`niky-adsense-arreglos-2610` y `adsense-cosa-2510`), que lee `scripts/gen-marcas.py` de esas ramas.
**Ni ese JSON ni ese uso de gen-marcas.py están en ronda-1406 (07d8c652f)**, y /tmp/r1406-dist
tampoco trae el bloque «Modelos destacados». Si la subida conjunta se compila solo con ronda-1406,
las 85 páginas de marca perderían el texto editorial que hay ahora en vivo. Hay que revisarlo antes de subir.

## Omoda 9 SHS: «arranca en 39.900 euros». NO VERIFICADO, se corrige
- Tarifa oficial sin ofertas: 52.900 € (SHS Premium 1.5 TGDI 395 kW AWD). Fuente: Carwow España,
  https://www.carwow.es/omoda/9 («PVP sin oferta 52.900 €»), y EligeCoche (lectura del 15/10/2026).
- Precio de campaña oficial: «desde 40.270 €». Fuente: Omoda & Jaecoo España,
  https://www.omodajaecoo.es/comprar/promociones/omoda-9 (incluye financiar con Open Bank, con un capital mínimo
  de 29.000 € a 36 meses, y el anticipo de 2.250 € del Programa Auto+; para particulares, hasta el 31/10/2026).
  Financiando sin Auto+, el precio es de 42.517,05 €, que coincide con el `precioDesde` de la ficha.
- No hay ninguna fuente para 39.900 €, así que ese dato se elimina.
- Corrección del texto de la marca: `punto4-editorial-marca-omoda.patch.json`. Hay que aplicarla en el
  editorial-marca.json de la rama que se compile. No lo meto aquí porque ese fichero no existe en ronda-1406
  (ver f306fbcd8).
- En esta rama sí se corrige `src/lib/comparador-coches-exp12.ts`, en los contras de la ficha omoda-9-shs-2025:
  decía «Los 39.900 euros de esta ficha» y la ficha muestra 42.517 €.
- Queda pendiente, sin tocar: src/data/historial-precios.json todavía guarda un punto de 39.900 «aprox» con fecha
  del 14/10, que es una lectura antigua de la ficha. Además, la promoción de 40.270 € caduca el 31/10/2026
  (coche-18.ts, a4370d5c6).

## Riddara RD6: «declara 315 kW». VERIFICADO, se mantiene
- Riddara (newsroom oficial, 16/09/2026): https://www.riddara.com/newsroom/20260916, «The four-wheel-drive RD6
  delivers a maximum power output of 315 kW and maximum torque of 595 N·m».
- Geely Auto Sudáfrica: https://www.geelyauto.co.za/models/riddara-2026 (Apex RD6 4WD, 315 kW, 595 Nm).
  AutoTrader y Cars.co.za: 315 kW.
- Aviso aparte, sin tocar: el mismo texto da 455 km, que es la cifra NEDC de la batería de 86 kWh en China.
  La versión sudafricana de 73 kWh anuncia 424 km NEDC.
