# Decisiones del residual de coches

Partida: `78f9b7e21`. No se elige el número del candidato ni el de la rama por estar en uno de los dos sitios. Hace falta que el texto de ese mismo `id` lo presente como tarifa o dato de ese coche, y que el propio fichero no diga que no hay tarifa.

## Nueve ids que no estaban

| Id de la rama | Decisión |
|---|---|
| `byd-ti7-2026-precio-ficha-tecnica` | Recuperado en `comparador-coches-byd.ts`. El blog ya enlaza `/coches/byd-ti7-2026-precio-ficha-tecnica/` y las dos fotos webp están en `public/media`. Precio vacío: la entrega dice que no se vende en Europa y da 59.990 dólares en Argentina (Automundo). Etiqueta DGT vacía: no hay homologación española en esa entrega. La ruta es `coches/:slug`, sin 301 nuevo. |
| `alfa-romeo-junior-ibrida-145-precio-ficha-tecnica` | No se crea otra URL. La ficha viva es `alfa-romeo-junior-ibrida-145`. Hay además `alfa-romeo-junior-ibrida-q4-145-precio-ficha-tecnica`. |
| `dacia-bigster-hybrid-155-2025-precio-ficha-tecnica` | No se crea otra URL. La ficha viva del mismo híbrido es `dacia-bigster-2026-hybrid-155-precio-ficha-tecnica`. |
| `honda-e-ny1-2025-precio-ficha-tecnica` y `honda-eny1-2025-precio-ficha-tecnica` | No se crean dos slugs del mismo coche. Ya están `honda-e-ny1-2024-precio-ficha-tecnica` y `honda-e-ny1-2026-precio-ficha-tecnica`. |
| `mercedes-benz-clase-c-200-precio-ficha-tecnica` | No se crea otra URL. La ficha viva es `mercedes-clase-c-200`. |
| `mg3-hybrid-2025`, `mg3-hybrid-2026` y `mg3-hybrid-plus-2025` | No se abren tres páginas del mismo Hybrid+. La ficha viva es `mg3-hybrid-2024-precio-ficha-tecnica`. |

## Cifras

Se rellenan solo donde el texto de esa ficha llama tarifa oficial al número y el campo estaba vacío:

- Maserati Levante Trofeo: 200.700 €, «última tarifa oficial del configurador».
- Maserati Quattroporte Trofeo: 214.750 €, «tarifa oficial española».
- Tank 500 3.0T: 2.535 kg, cifra que el propio pros usa en el 0-100.

Se dejan vacías aunque el texto cite una cantidad, porque el comentario de la ficha dice que no hay tarifa oficial:

- Tank 300 Hooke: los 33.200 € son un cambio del yuan.
- EVO 6: «unos 30.900 €».
- EVO Cross 4: 25.400 € sin IVA, y el comentario dice que EVO no publica esa tarifa.
- Aixam Easy Access diésel: 11.999 € de prensa, no de la marca.
- Volvo V60 T8: «desde 68.000» y el comentario dice que esa motorización no está en la gama española.
- Tesla Roadster: el comentario del 17/10 dice que Tesla no ha publicado potencia ni medidas. No se copian 1.000 CV ni 1.200 mm.

Los otros huecos y las 632 cifras en las que candidato y rama discrepan no se tocan: no hay una fuente abierta para cada par. No se da por bueno el número que ya estaba.

## Bloques

## Lote SEAT y Dacia, 7 de noviembre de 2026

Una ficha de Euro NCAP cubre varias motorizaciones. La nota en el coche es corta; el detalle está aquí.

- León 2025, cinco estrellas, publicada el 19 de noviembre. Adultos 88 %, infantil 86 %, usuarios vulnerables 81 %, asistencias 77 %. [Ficha](https://www.euroncap.com/assessments/seat/leon/1122pm/). El coche del encabezado es el 1.5 TSI de 85 kW (115 CV) en carrocería hatchback. La tabla incluye además el 1.5 TSI de 110 kW, el eTSI de 110 kW, el 2.0 TDI de 110 kW y los e-Hybrid. Entran el 1.5 TSI 115, el León 1.5 TSI de 150 CV y el e-Hybrid de cinco puertas. El Sportstourer no está en la tabla: sin estrellas. El eTSI de 115 CV y el TDI de 115 CV tampoco coinciden con los 110 kW listados: sin estrellas.
- Ibiza, cinco estrellas en el [comunicado del 12 de octubre de 2022](https://www.euroncap.com/press-media/eight-manufacturers-achieve-euro-ncap-5-stars-in-impressive-car-line-up/), junto al Arona. Sigue dentro de los seis años.
- Ateca: la [ficha de 2016](https://www.euroncap.com/en/results/SEAT/Ateca/24847) figura caducada. No se mantienen las cinco estrellas en los Ateca de 2024 y 2026.
- Duster 2024, tres estrellas, publicado el 10 de julio. [Ficha](https://www.euroncap.com/assessments/dacia/duster/1075/). Entran el TCe 130 de tracción delantera y el híbrido 140, que es el probado. El TCe 130 4x4 sale en la tabla con la casilla en blanco: sin estrellas.
- Bigster, tres estrellas. Euro NCAP lo publica como pareja del Duster el 20 de mayo de 2025. [Ficha](https://www.euroncap.com/assessments/dacia/duster/1144/). El intervalo de revisión, un año o 30.000 km, está en [Dacia España](https://www.dacia.es/preguntas-frecuentes-vehiculos/bigster/mantenimiento.html) y solo se aplica al Bigster. La misma página general de Dacia dice que otros modelos van a 15.000, 20.000 o 30.000 km: Sandero, Duster y Jogger no copian el intervalo del Bigster.
- Sandero y Stepway: dos estrellas de 2021. El coche probado fue el Stepway 1.0 TCe. [Ficha](https://www.euroncap.com/assessments/0861p2/).
- Jogger: una estrella. La ficha, de abril de 2022, se apoya en el Stepway y baja por la tercera fila. [Ficha](https://www.euroncap.com/assessments/dacia/jogger/0947/).

El plan LongLife de SEAT y el de 15.000 km de Toyota no se copian: no se abrió en esta pasada una página de la marca que fije ese intervalo para cada modelo.

De los 126, entran las dos fichas del Santa Fe híbrido e híbrido enchufable de 2026: la prueba de 2024 da cuatro estrellas de serie y cinco con el pack SmartSense (`euroncap.com/en/results/hyundai/santa-fe/53407` y `53840`). El resto de bloques sigue fuera: no se ha abierto su ficha de resultado en esta pasada y no se rellenan estrellas por parecerse a otro modelo.
