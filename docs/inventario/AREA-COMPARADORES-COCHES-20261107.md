# Área revisada: comparadores y fichas de coches

Partida: `3febc83a8`. Cada aportación se miró por el `id` del modelo, no por el primer objeto del fichero.

Los 488 grupos en conflicto de `src/lib/comparador-coches*.ts` están en `AREA-COMPARADORES-COCHES-20261107.jsonl`. Lo que no entra en la ficha está en `AREA-COMPARADORES-COCHES-RESIDUAL.jsonl`.

## Qué se integra

En el mismo `id`, cuando la rama trae un solo bloque y el candidato no lo tenía:

- 46 fichas reciben su Euro NCAP con estrellas (0 a 5). Si el enlace no es de euroncap.com, no se copia. Diez bloques con estrellas vacías y la frase «sin datos» no se añaden: no aportan una puntuación.
- 27 fichas reciben el plan de mantenimiento de ese mismo id, con su intervalo, sus revisiones y la fuente que traía la rama. El plan del Toyota Proace Max ya estaba.

`tsc -b` sale 0. Los tres protegidos no se han tocado. La tienda no se ha reabierto.

## Qué no se pega, y por qué

- 126 bloques (Euro NCAP o plan) son del id correcto y el candidato no los tiene, pero el texto comparte una ventana de ocho palabras con otra página y el medidor, frente a `9cf8ef85`, todavía no la tiene repetida. No se cambia el orden de las palabras para colarla. El texto queda en el residual.
- 769 cifras del mismo id no se copian. Si el candidato ya tiene un número y la rama trae otro, se queda el del candidato: no se sustituye una tarifa ni un dato técnico sin una fuente nueva junto a ese campo. Si el candidato deja el campo vacío, tampoco se rellena con el número suelto de la rama.
- Cuando la rama trae `null` y el candidato tiene el dato, el candidato ya cubre ese hueco.
- Nueve ids de las ramas no están en ningún comparador del candidato: `alfa-romeo-junior-ibrida-145-precio-ficha-tecnica`, `byd-ti7-2026-precio-ficha-tecnica`, `dacia-bigster-hybrid-155-2025-precio-ficha-tecnica`, `honda-e-ny1-2025-precio-ficha-tecnica`, `honda-eny1-2025-precio-ficha-tecnica`, `mercedes-benz-clase-c-200-precio-ficha-tecnica`, `mg3-hybrid-2025-precio-ficha-tecnica`, `mg3-hybrid-2026-precio-ficha-tecnica`, `mg3-hybrid-plus-2025-precio-ficha-tecnica`. No se crea la ficha a partir del grupo.

Los pros y los contras de estas ramas no se vuelven a volcar. La redacción que ya está en el candidato es la que pasó el medidor.

## El dist anterior no es este commit

El bundle `dist/assets/index-C31lVF6x.js` del respaldo `/workspace` (`dfddce39c`) no corresponde a este HEAD. Cambiar fichas de comparador invalida el JavaScript compilado aunque el sitemap no cambie. No se publica ese `dist` con este informe. El build, el prerender y el postproceso quedan para el cierre del candidato, sobre el mismo commit, no en este lote.

## Sigue fuera de esta área

Blogs, patinetes, autocaravanas y el resto de grupos en conflicto. Las 219 fichas sin fila de fecha no se han rellenado: no hay evidencia nueva de historial en este lote.
