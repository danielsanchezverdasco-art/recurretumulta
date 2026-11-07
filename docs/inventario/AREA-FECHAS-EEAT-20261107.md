# Área cerrada: fechas de ficha (E-E-A-T)

Candidato de partida: `0b80ae624`. No hay push ni build de Netlify.

El módulo es `src/lib/fichas-fechas-eeat/*.json`, que `useFichaFechas` muestra como fecha de publicación y de actualización. El generador (`scripts/gen-fechas-eeat.mjs`) fija la publicación en el primer commit que añade el `id` y no la inventa: si la ficha ya estaba en el commit raíz, la publicación queda vacía. La actualización solo avanza si hay una fecha posterior en `scripts/fichas-actualizadas.json` o en el propio JSON. No se ha vuelto a ejecutar el generador: reescribiría los 26 trozos con la fecha de hoy.

Había 46 grupos en conflicto sobre estos JSON (matriz `/tmp/audit738/grupos.jsonl`). El detalle de cada blob está en `AREA-FECHAS-EEAT-20261107.jsonl`.

| Decisión | Grupos | Qué se hizo |
|---|---:|---|
| Fecha de primer commit | 17 | 48 fichas que la rama fechaba y el candidato no tenía en el índice, y cuyo `id` sigue en un comparador. Se guarda el día del primer commit en este repositorio (19/10 o 23/10, hora de Madrid), no el 18/10 de la rama: ese día es anterior al commit que añade el id aquí. |
| Ya cubierto | 22 | La misma ficha está en el candidato con la misma fecha o una posterior. Publicación no se retrasa. |
| No subir actualización | 2 | BMW iX7, BMW Serie 7, Lexus TZ y Lepas Aura. La rama pasa la actualización al 24/10 y no hay entrada en `fichas-actualizadas.json`. El alta del candidato ya iguala publicación y actualización (22/10 o 23/10). |
| Slug ausente | 5 | 15 ids que no están en ningún comparador del candidato. No se crea una fecha para una ficha que no existe. |

Los 15 ids ausentes, repetidos entre varios blobs: `alfa-romeo-junior-ibrida-145-precio-ficha-tecnica`, `aprilia-rs-125-2026`, `dacia-bigster-hybrid-155-2025-precio-ficha-tecnica`, `ducati-pro-iii`, `honda-e-ny1-2025-precio-ficha-tecnica`, `honda-eny1-2025-precio-ficha-tecnica`, `isinwheel-s9`, `kawasaki-z-125-2026`, `kawasaki-z125-2025-ficha-tecnica-precio`, `kawasaki-z125-2026-ficha-tecnica-precio`, `mercedes-benz-clase-c-200-precio-ficha-tecnica`, `mg3-hybrid-2025-precio-ficha-tecnica`, `mg3-hybrid-plus-2025-precio-ficha-tecnica`, `niu-kqi300x`, `stark-varg-ex-2025-ficha-tecnica-precio`.

Quedan fuera de esta área 219 fichas con `id` en un comparador y sin fila de fecha. Ningún grupo en conflicto aportaba su fecha. Ponerles la de hoy sería inventarla. El generador, en un clon completo, es quien debe rellenarlas.

## Auditoría de las 42 viñetas de `0b80ae624`

Esas líneas salieron de comentarios `cifras-ramas-711` y se pegaron en el primer `pros` de cada fichero. Se han quitado las 40 frases y se han reparado los dos arrays rotos (Maextro S800 y CFMoto 450SR S). Ninguna se conserva en el primer modelo.

| Fichero | Qué era | Dónde queda el dato |
|---|---|---|
| Benimar Mileo 297 | Intervalo Fiat 48.000 km como ventaja | Ya está en el plan del Mileo 286. El 297 declara 40.000 km. No se pisa. |
| Giottiline Toscan 69GC | El mismo intervalo, como ventaja | Ya está en `planMantenimiento` del 69GC y del Compact CX60. |
| Rapido V55 | Intervalo del Boxer, como ventaja | Ya está en el plan del V55 y del 606F. |
| Westfalia Kepler | Tres frases | Repiten la ventaja de los 57.000 € y dos contras (150 CV justos y lista alemana). |
| BYD Dolphin | Autonomía, carga de 88 kW y la hipótesis de coste | La autonomía ya está en pros. Los 88 kW ya están en contras. El coste ya está en `costeMensual.notas`. |
| Volkswagen Amarok | «15.000 km/año; diésel 1,55 €/l; todo riesgo» | Es la nota del cálculo, no una ventaja. Ya está en `costeMensual.notas`. |
| Peugeot Boxer 180 | Tres frases, una del 2008 | El Boxer ya dice que el 180 es el diésel más potente y, en contras, que no hay híbrido. El 2008 ya cita los 21.040 €. |
| Lynk & Co Z20 | Tres frases del Omoda C7 | El Z20 es eléctrico (272 CV, 66 kWh). El C7 ya tiene esas tres ventajas. |
| DS 9 E-Tense | Tarifa alemana 27.995 € / 37 kWh / 116 CV, batería 29,6 kWh y tarifa japonesa | En `3d403f17b` la tarifa alemana era un contra del ID. Cross, pero esa ficha mide 52 kWh y 211 CV: la frase mezcla otro tren motriz. El precio de unos 28.000 € ya está en el pros del ID. Cross. Los 29,6 kWh contradicen los 25,4 kWh del Honda Super-N en el mismo objeto. La tarifa japonesa sí es del Super-N y no estaba. En la ficha queda «3.390.200 yenes, unos 19.100 euros». La frase larga con la fecha del BCE repetía ocho palabras ya usadas en otra ficha, así que no se copia. |
| Bugatti Tourbillon | 740 CV Nettuno, 1.250 kg y 900.000 € | Son del Maserati MCXtrema, que ya los tiene (el precio, en contras). |
| Maextro S800 | Tres frases que duplican los pros y rompen el array | Se restaura el array de cinco pros del modelo. |
| Omoda 5 | «Sin precio oficial» del Omoda 4 | El Omoda 4 ya lo dice en contras. |
| Opel Corsa | Tres frases | Repiten las tres ventajas siguientes, incluido el maletero de 309 litros como dato neutro. |
| Xiaomi SU7 | 1.548 CV, 1,98 s y batería de 93,7 kWh | Son del SU7 Ultra, que ya los tiene en pros y en los campos de la ficha. |
| CFMoto 450MT | Fragmento de mantenimiento | Texto cortado, no una ventaja. El intervalo sigue en el comentario de origen, ilegible, y no se inventa. |
| Zero DS | Precio, autonomía y contra de la LS3 | La LS3 ya tiene las dos ventajas y el contra de autovía. |
| CFMoto 450SR S | Fragmento de aceite y array roto | Se restaura el array de cinco pros. El fragmento no forma una frase. |
| Kove 450 Rally | Oferta de 8.299 € con maletas | Es de la QJMotor SRT 900 SX, que ya la tiene. |
| Bogist M1 Elite | 480 Wh / 27 km y 37 kg | El Evercross H5 ya describe la batería. El Currus NF ya tiene los 37 kg en contras. |

Los tres protegidos sin autorización no se han tocado. La tienda no se ha reabierto.
