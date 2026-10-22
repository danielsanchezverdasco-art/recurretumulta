# Rescate web de héroes de blog — Lote 1

**Rama:** `merlin-heroes-blog-web` (desde `merlin-auditoria-blogs`) · **Fecha:** 2026-10-20
**Origen:** tabla de `docs/auditoria-blogs.md` (1.027 posts con hero NO/SIN).

## Resumen del lote 1

- **Posts del lote:** 102 (priorizados: marcas generalistas europeas con ficha — Opel 21, Peugeot 20, Renault 16, Škoda 16, Toyota 16, SEAT 8, Volkswagen 5).
- **Héroes rescatados:** 99 fotos reales guardadas en `public/media/` con el nombre exacto que ya referenciaba cada post (no ha hecho falta tocar ningún `.ts`).
- **Imposibles documentados:** 3 (ver abajo).
- **Quedan para lotes siguientes:** 925 posts con hero NO/SIN (1.027 − 102).

## Método y reglas aplicadas

- Fuente única de este lote: **Wikimedia Commons**, solo ficheros con licencia libre clara (CC BY-SA 4.0: 87, CC0: 5, CC BY 2.0: 3, CC BY-SA 3.0 de: 2, CC BY 4.0: 1, CC BY 3.0: 1), ancho original ≥1.200 px.
- Conversión a WebP (máx. 1.600 px de ancho, calidad 80) con el nombre exacto del hero referenciado por el post.
- Crédito completo por foto (título en Commons, página fuente, licencia, autor, anchos) en `docs/creditos-heroes-web.csv`.
- **Descartados tras verificación visual:** concepts (Opel Corsa GSE Vision Gran Turismo, Toyota Proace City Verso Concept de hidrógeno — sustituido por el Verso Electric de serie), fotos de campa/concesionario con carteles de precio (Peugeot 3008 de generación anterior en el MIAS y unidades de stock), generaciones anteriores (Opel Grandland A, VW Tayron chino de 1ª gen. — sustituido por el Tayron europeo) y modelos hermanos distintos (Citroën SpaceTourer/Jumpy para Peugeot Traveller/Opel Zafira).
- En parejas híbrido/eléctrico del **mismo modelo y carrocería** sin foto propia de la motorización, se ha usado la foto del modelo indicando en el CSV qué motorización muestra la foto. En variantes con aspecto propio (GTi, RS, GSE) se ha exigido foto de la variante: conseguidas E-208 GTi, Elroq RS, Enyaq RS, Enyaq Coupé RS y Kodiaq II RS.

## Imposibles del lote (documentados, sin forzar)

- `opel-corsa-gse-2026-precio-ficha-tecnica` — En Wikimedia Commons solo existe el concept Corsa GSE Vision Gran Turismo; no hay foto del Corsa GSE de serie con licencia libre. No se fuerza con el concept ni con un Corsa F estándar.
- `renault-kangoo-2024-tce-130-precio-ficha-tecnica` — Solo se ha localizado foto del Kangoo E-Tech Combi (eléctrico) y del Kangoo furgón; no hay foto del Kangoo Combi TCe (térmico) con licencia libre clara.
- `skoda-octavia-rs-2026-precio-ficha-tecnica` — En Commons solo hay Octavia IV Combi RS (carrocería familiar) y Octavia sedán estándar; no hay foto del Octavia RS liftback con licencia libre.

## Pendiente

- Lotes 2+: 925 posts (motos lote7/8/9/10/14/15, patinetes exp p1–p9, motos exp m16–m23, posts DGT de blog-posts-db, flash/longtail/estudios y el resto de marcas de coches).
- Las fotos de contenido rotas (1.585 posts) no son objeto de esta rama: solo héroes.
