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

De los 126, entran las dos fichas del Santa Fe híbrido e híbrido enchufable de 2026: la prueba de 2024 da cuatro estrellas de serie y cinco con el pack SmartSense (`euroncap.com/en/results/hyundai/santa-fe/53407` y `53840`). El resto de bloques sigue fuera: no se ha abierto su ficha de resultado en esta pasada y no se rellenan estrellas por parecerse a otro modelo.
