# Paquete de Ana para la publicación — identificado, no publicado

Fecha de esta nota: 7/11/2026. No se ha publicado, no se ha hecho push y no se ha parado el prerender que ya estaba en marcha.

## La entrega exacta

- Rama: `origin/subida-acumulada-1105`
- Commit: `9cf8ef85bfaa2f8864d58b13ca3a641812376029`
- Fecha: 6/11/2026 20:57 +0100
- Padre: `7e5d3af7b1c566be699ec62df84f29d824781749`
- Árbol: `c4bffd10c745715953565be4ba1ee43726a9361a`
- Autor del commit: danielsanchezverdasco-art
- Mensaje: reescritura rev3 a 0, meta Publisuites, corrección de 44 `<img src>`. Squash de 147 ficheros desde `76ea4bd95`. Sin cambios de diseño ni de títulos.

Ese árbol es el que Ana cita en `055e9c888` (`docs/comunicacion-ias/merlin.md`, «RELEVO ENTREGADO», 6/11 ~21:00 Madrid). Ella dice que el HEAD local de su VM (`8283ee999`) tiene el mismo árbol. Aquí el árbol de `9cf8ef85` y el de `origin/subida-acumulada-1105` son ese hash. Es ancestro del candidato actual. No se ha movido la base.

## Checkpoint de compilación

Ana lo describe en esa misma nota y no está en git ni en este disco:

- `dist/` de su VM, 5,5 GB, 7.730 HTML, 62.672 media
- Bundle `index-CCSID4JO.js`
- Completas con su criterio estricto: 306 de 6.149
- Restantes: 5.843
- La lista `.deploy-work/rutas-prerender-restantes.txt` quedó a 0 bytes en su VM. La lista completa de 6.149 sí la da por intacta. El script para recomputar es `.deploy-work/rutas-restantes.mjs`, también en su VM.

Búsqueda en esta máquina: no hay `index-CCSID4JO.js`. Sin ese `dist` no se reutilizan esas 306 páginas. Un build de aquí genera otro hash de bundle.

## Mínimo técnico para que ESE paquete sea publicable

El fuente ya está. Lo que falta para publicar ese árbol, y solo ese, es un `dist` generado desde `9cf8ef85` y la cadena de postproceso de ese mismo árbol. El checkpoint parcial no está aquí, así que esas 5.843 rutas no se pueden reanudar contra `index-CCSID4JO.js`.

No hace falta, para identificar el paquete, cerrar las 616 cifras, la prosa duplicada, las fotos nuevas de coches ni el cotejo de patinetes. Eso queda en el candidato actual, aparte.

## Diferencia frente al candidato actual

- HEAD ahora: `a059d9f85` (71 commits y 1.433 ficheros por encima de `9cf8ef85`: +113.257 / −2.857 líneas).
- El prerender en curso escribe `dist/` con el bundle `index-DP2pO2bK.js`. Es de un HEAD anterior a `a059d9f85`, no de `9cf8ef85`. No se ha interrumpido.
- `/workspace/dist` es `index-C31lVF6x.js`. El informe de fase lo ata a un commit posterior (`b0a8abf44`), no al relevo de Ana.
- Los tres protegidos en este HEAD siguen en `9a1a7058…`, `771edad2…` y `d468ba84…`.
