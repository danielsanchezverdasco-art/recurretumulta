# Fotos 283 — trabajador c2w05 (coordinador 2, caza final)

Base: rama `fotos-283-niky` en `9a7a422f2`. Comprobado en
`docs/comunicacion-ias/listas/fotos-283-niky.csv` (359 líneas) antes de
trabajar: ninguno de los 2 slugs estaba entregado.

## Filas slug|fuente|url

suzuki-swift-sport-2024-precio-ficha-tecnica|Carsales Australia, review Suzuki Swift Sport 2024 (fotos reales del Swift Sport ZC33S amarillo Champion Yellow; verificadas visualmente una a una: exterior, interior con asientos deportivos y detalles rojos, y conducción); reutilizadas desde el staging ya presente en la rama fotos-283-niky (public/media/fotos-reales/suzuki-swift-sport-2024-precio-ficha-tecnica/, mismo origen registrado en public/media/fotos-reales/fuentes.csv); licencia desconocida|https://www.carsales.com.au/editorial/details/suzuki-swift-sport-2024-review-144913/
tank-800-2026-precio-ficha-tecnica|SIN FOTO REAL (sin inventar nada)|

## Ficheros entregados (public/media, WebP, <300 KB)

- public/media/suzuki-swift-sport-2024-precio-ficha-tecnica-hero.webp — 125886 bytes — 1023x682 — Swift Sport ZC33S amarillo en conducción (foto 3 del staging)
- public/media/suzuki-swift-sport-2024-precio-ficha-tecnica-oficial.webp — 133610 bytes — 1023x682 — Swift Sport ZC33S amarillo, exterior 3/4 (foto 1 del staging)
- public/media/suzuki-swift-sport-2024-precio-ficha-tecnica-interior-oficial.webp — 107994 bytes — 1023x682 — Interior Swift Sport, volante en D, cambio manual, asientos deportivos con costuras rojas (foto 2 del staging)

Nombres exactos de los datos en `src/lib/comparador-coches-suzuki.ts`
(`imagen`, `imagenOficial`, `imagenInteriorOficial` y galería de 3 entradas):
hero, oficial e interior-oficial. Ninguna foto IA.

## tank-800-2026-precio-ficha-tecnica — SIN FOTO REAL: por qué

- El Tank 800 de producción 2026 (PHEV de 5,41 m de la ficha) NO está
  revelado públicamente sin camuflaje a 25/10/2026: las fuentes
  consultadas (CarsGuide 13/02/2026 y 2026, CarExpert 2026, Unitrack)
  solo muestran prototipos camuflados o afirman que aún no se ha
  revelado al público, con llegada a Australia prevista en 2027.
- La única foto sin camuflar que existe del Tank 800 es la del
  CONCEPT de 2021 (Shanghái, 3.0T V6, interior de ante), que NO es la
  generación/variante PHEV 2026 de la ficha: usarla engañaría.
- La foto de CarsGuide atribuida a AutoHome es un prototipo
  camuflado (verificada visualmente): no sirve como foto de ficha.
- Por tanto, NO se entrega ningún fichero tank-800-2026-*.webp.
  No se ha usado foto del Tank 700/500 ni renders ni IA.

Fuentes consultadas para Tank 800:
- https://www.carsguide.com.au/car-news/chinas-v8-4wd-will-eat-toyota-landcruiser-nissan-patrol-for-breakfast-2026-gwm-tank-800
- https://www.carexpert.com.au/car-news/2026-tank-800-gwm-to-hunt-luxury-suvs-in-australia-with-new-v8-powered-flagship
- https://www.carsguide.com.au/car-news/gwm-confirms-new-tank-800-for-australia-to-rival-the-2026-toyota-landcruiser-and-denza-b8
- https://www.chinapev.com/gwm/tank/great-wall-tank-800-made-debut-in-china-cullinan-like-luxury-suv/ (concept 2021, descartado por no ser la versión 2026)

## Resumen

- Entregado con foto real: 1/2 (suzuki-swift-sport-2024-precio-ficha-tecnica, 3 ficheros)
- Sin foto real: 1/2 (tank-800-2026-precio-ficha-tecnica, 0 ficheros)
- Worktree NO borrado: ~/workspace/wt-fotos-c2w05 (lo limpia el coordinador).
