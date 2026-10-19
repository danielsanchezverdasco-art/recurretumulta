# LOTE 2 CARAVANAS — Especificación para los 5 agentes (19/10/2026)

Orden de Grok (tablón 07:15 CEST) + orden de Daniel ("a tope, todos los agentes en paralelo").
Coordinador: Niky. Rama: `caravanas-lote-2` (worktree `~/workspace/wt-caravanas-lote-2`).

## REGLA DE ORO (innegociable)
- NUNCA `main`, NUNCA Netlify, NUNCA `npm run build` completo.
- PROHIBIDO tocar: `src/pages/FichasTecnicas.tsx`, `src/App.tsx`, `src/components/shared-navbar.tsx` (los integra Grok).
- Solo puedes crear/editar: `src/lib/comparador-caravanas-<tu-marca>.ts`, `src/lib/blog-posts-caravanas-lote5-g<N>.ts`, `public/media/*.webp` (con `git add -f`), `coord/g<N>-manifiesto.md`, `scripts/fotos-caravanas.py` (ya copiado, no tocar).
- NO toques `public/media-creditos.md`, `scripts/blog-slugs.txt`, `scripts/caravanas-slugs.txt` ni `src/lib/noindex.generated.json`: los fusiona el coordinador al final. Deja tus líneas de créditos y tus slugs en tu manifiesto.

## Tu grupo (10 modelos, marcas SIN solape con otros grupos)
- G1: LMC (5) + Kabe (5)
- G2: Bailey (5) + Swift (5)
- G3: Sterckeman (5) + Caravelair (5)
- G4: Fendt (4) + Tabbert (3) + Dethleffs (3) — layouts NUEVOS, ninguno de `coord/SLUGS-EXISTENTES.txt`
- G5: Elddis (4) + Coachman (3) + Xplore (3)

Elige modelos REALES de la gama 2026 de la web oficial de cada marca. Comprueba cada slug candidato contra `coord/SLUGS-EXISTENTES.txt` (105 slugs prohibidos): si coincide o es el mismo modelo con otro año, descártalo y elige otro.

## Fichero de datos: `src/lib/comparador-caravanas-<marca>.ts`
Exporta `CARAVANAS_<MARCA>` (p. ej. `CARAVANAS_LMC`), array de `CocheComparador` (import type de `"./comparador-coches-data.ts"`).
Lee el formato exacto en `git show origin/caravanas-final:src/lib/comparador-caravanas-eriba.ts` (está en tu worktree: los refs de origin están disponibles).

Campos por ficha (OBLIGATORIO, orden de Grok):
- `id`: `<marca>-<modelo>-<layout>-2026-precio-ficha-tecnica` (minúsculas, sin ñ/tildes). Ej: `lmc-sassino-430-d-2026-precio-ficha-tecnica`.
- `marca`, `modelo` (nombre oficial exacto, p. ej. "Sassino 430 D"), `tipo: "Caravana"`, `categoria: "Caravana"`.
- `precioDesde`: tarifa oficial española en € (número). Si solo hay tarifa de otro país: el valor convertido/documentado + `aprox: ["precioDesde"]` y mención "precio de tarifa en <país>" en el texto. Si no hay fuente de precio: `precioDesde: null` (= "no publicado"). NUNCA inventar.
- `potenciaCv, autonomiaKm, maleteroL, ceroCien, velocidadMax, bateriaKwh, cargaRapidaKw, etiquetaDgt, garantiaBateriaAnos, garantiaBateriaKm, garantiaBateriaDegradacionPct, consumo, consumoUnidad, parNm, traccion, emisionesCo2`: `null`.
- `imagen`, `imagenOficial`: `"/media/<id>.webp"`; `imagenInteriorOficial`: `"/media/<id>-interior-oficial.webp"`; `videoId, videoCanal`: null.
- `largoMm, anchoMm, altoMm` (mm, totales con lanza), `pesoKg` (tara/masa en orden de marcha si la publica la marca), `mmaKg` (SIEMPRE que exista), `carnetNecesario`: "B" | "B96" | "BE" según la masa del conjunto (B: conjunto ≤3.500 kg; B96: 3.500–4.250 kg; BE: >4.250 kg o remolque >3.500 kg). `plazas` (SIEMPRE que exista).
- `cargaUtilKg`: SOLO si la marca lo publica literalmente como "carga útil/payload". Si no: `null`. PROHIBIDO calcularlo (MMA − tara).
- PROHIBIDO el bloque `costeMensual` (no lo incluyas).
- `pros`: 5, `contras`: 5 (específicos del modelo, con datos reales). `opiniones`: `[]`.
- `galeria`: mínimo 3 entradas `{src, alt, ancho: 1200, alto: 800}` (portada + 3 fotos mínimo por ficha).
- `analisisSlug`: `"<id>-analisis-opinion"`.
- `planMantenimiento`: `{intervalo: "Revisión anual recomendada: estanqueidad, gas, electricidad y frenos", revisiones: [{nombre: "Revisión anual de la caravana", queSeCambia: "Estanqueidad, instalación de gas, electricidad, frenos y neumáticos", costeAproxEur: 200}], costeAnualAproxEur: 200, fuente: "Recomendaciones <Marca> + red de distribuidores"}`. Costes orientativos de taller, nunca inventar como oficiales.
- `euroncap`: null. `fuenteNombre` (p. ej. "LMC (lista de precios 2026)"), `fuenteUrl` (URL REAL del modelo exacto: web oficial → prensa → blogs; o `null` si no hay).
- Cabecera del fichero: comentario con fecha, qué modelos incluye y ORIGEN REAL de datos/fotos (como el fichero de Eriba).

## Blog: `src/lib/blog-posts-caravanas-lote5-g<N>.ts`
Exporta `CARAVANAS_POSTS_LOTE5_G<N>` (`BlogPost[]`, import type de `"./blog-meta.ts"`).
- Un post por ficha. `slug`: `"<id>-analisis-opinion"`.
- `title`: 50–60 caracteres, SIN "RecurreTuMulta" ni sufijos. Patrón: `<Marca> <Modelo> 2026: precio, <dato real>` (ej: "LMC Sassino 430 D 2026: precio, ficha y 4 plazas"). Mide con `python3 -c`.
- `excerpt`: 130–155 caracteres (es la meta description).
- `category: "Novedades Motor"`, `date: "2026-10-19"`, `readTime: 10`, `locale: "all"`, `keywords`: 6 (marca+modelo, "precio", "ficha técnica", 3 de intención).
- `content`: MÍNIMO 1.000 palabras (cuenta sin etiquetas HTML), texto 100 % propio. Estructura: `<img src=/media/<id>.webp alt="...">` + línea en blanco; intro con enlace a la ficha `<a href=/caravanas/<id>/>Ver la ficha técnica…</a>` y al comparador; tabla "Ficha técnica resumida" (tipo, dimensiones, MMA, plazas, carnet, precio); 3–4 secciones H2 propias del modelo; 2 fotos más en el cuerpo; "Rivales" con enlaces a fichas reales cuando existan; "Mantenimiento y garantía"; "Lo bueno y lo mejorable"; "Preguntas frecuentes" con 5–6 preguntas; *Fuentes:* con `<a href=url>nombre</a>`; cierre con CTA al analizador `<a href=https://recurretumulta.online/#analizador>`.
- Formato: `<img src=/media/x.webp alt="desc">` (src SIN comillas, alt con comillas escapadas `\"` dentro del string TS) + línea en blanco. Enlaces `<a href=url>texto</a>` sin comillas. NUNCA Markdown `[t](u)`.
- Jaccard <0,30 entre tus 10 posts (compruébalo con `coord/jaccard.py`).

## Fotos
- `python3 scripts/fotos-caravanas.py <id> <url1> <url2> <url3> <url4>` → genera `<id>.webp`, `<id>-oficial-2.webp`, `<id>-oficial-3.webp`, `<id>-interior-oficial.webp` (<300KB cada una, las renombra/mueve según necesites para que coincidan con los campos).
- Fuente: prensa u oficiales de la marca. Si no hay, del MODELO EXACTO (misma generación), sin concesionario, campa, rótulos ni pegatinas, sin marcas de agua prominentes. Si la foto no es oficial, márcalo en el manifiesto.
- Busca URLs con el skill image-search (`/opt/muse/skills/image-search/SKILL.md`) + verificación visual cuando sea posible.
- En tu manifiesto, tabla de créditos: `| /media/<fichero> | <URL exacta de origen> | <Marca> | prensa/no-oficial |`.

## Manifiesto: `coord/g<N>-manifiesto.md`
Tabla con: slug | marca | modelo | precioDesde | MMA | plazas | carnet | fuente URL | nº fotos. Más tus 10 slugs (para blog-slugs.txt) y tus líneas de créditos (para media-creditos.md) y tus rutas noindex (`/caravanas/<id>/`, `/blog/<id>-analisis-opinion/`).

## Git (rama `caravanas-lote-2`, worktree `~/workspace/wt-caravanas-lote-2`)
- Antes de cada push: `git pull --rebase origin caravanas-lote-2` (los 5 agentes comparten rama; si falla el push, rebase y reintenta).
- Commits pequeños: uno por marca, mensaje con los slugs (ej: `caravanas lote-2 g1: LMC Sassino 430 D, Vivo 522 K... (5 fichas + blogs)`).
- `git add -f public/media/*.webp` (media está en .gitignore).
- Al terminar tus 10: `npx tsc -b` (exit 0, sin pipes) y push final.

## Calidad (Grok — si algo no pasa, la ficha NO entra)
Fuentes reales del modelo exacto o null · fotos del modelo exacto · precio con fuente o null · MMA/plazas/carnet siempre que existan · cero cifras inventadas · texto propio · títulos 50–60 / excerpt 130–155 · Jaccard <0,30 · tsc=0.
