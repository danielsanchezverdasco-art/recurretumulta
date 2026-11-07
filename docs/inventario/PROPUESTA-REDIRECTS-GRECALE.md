# Propuesta: 12 reglas 301! que faltan frente a la copia del vivo

No se han escrito en `public/_redirects` ni en `dist/_redirects`. No son reglas nuevas: están en `tools/publicar/redirects-vivo.txt`, cuyo sha1 `745db003c67d4f5deb25d8e0ac9989b319fd3b4c` coincide con `ESTADO-VIVO.txt`. Esa copia no es una lectura nueva de Netlify. Sin `NETLIFY_AUTH_TOKEN` el listado completo del deploy no se ha comprobado.

Las doce líneas, tal cual:

```
/blog/maserati-grecale-folgore-2027-precio-ficha-tecnica/ /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/blog/maserati-grecale-folgore-2027-precio-ficha-tecnica /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/blog/maserati-grecale-modena-v6-2027-precio-ficha-tecnica/ /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/blog/maserati-grecale-modena-v6-2027-precio-ficha-tecnica /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/blog/maserati-grecale-trofeo-2027-precio-ficha-tecnica/ /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/blog/maserati-grecale-trofeo-2027-precio-ficha-tecnica /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/coches/maserati-grecale-folgore-2027-precio-ficha-tecnica/ /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/coches/maserati-grecale-folgore-2027-precio-ficha-tecnica /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/coches/maserati-grecale-modena-v6-2027-precio-ficha-tecnica/ /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/coches/maserati-grecale-modena-v6-2027-precio-ficha-tecnica /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/coches/maserati-grecale-trofeo-2027-precio-ficha-tecnica/ /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
/coches/maserati-grecale-trofeo-2027-precio-ficha-tecnica /coches/maserati-grecale-2027-precio-ficha-tecnica/ 301!
```

El `301!` es forzado: Netlify redirige aunque exista el HTML. Este dist tiene página propia de las tres fichas de coche, y entran en el sitemap. No están entre las 6.209 del vivo.

La ficha padre (`maserati-grecale-2027`) lista versiones aproximadas en libras: Folgore 550, Modena V6 390 a 98.600 €, Trofeo 530 a 122.500 €. Las fichas dedicadas dicen otra cosa: Folgore 557 CV, 579 km y batería de 105 kWh, con precio sin confirmar; Modena V6 a 112.713 €; Trofeo a 140.311 €, 0-100 en 3,8 s y 285 km/h. Restaurar las doce reglas deja esas páginas inalcanzables. El padre no repite esas cifras.

No se han copiado las reglas para no esconder ese texto, y no se ha reescrito la ficha padre para forzar el verde del publicador. Las dos cosas a la vez exigirían llevar esas cifras al destino y, solo entonces, restaurar las doce líneas exactas.
