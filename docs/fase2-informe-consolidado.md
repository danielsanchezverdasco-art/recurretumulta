# FASE 2 «ojos de Google» — INFORME CONSOLIDADO Y VEREDICTO

Fecha: 20/10/2026 · Rama: `merlin-fase2-google` · Estado: **FASE 2 CERRADA**

## Base de medición (declarada)

- Censo completo sobre el **dist del borrador 2** (build de la línea `merlin-borrador-2` @ 8ed9ce50): **5.970 páginas HTML servidas**. Artefactos: `~/workspace/fase2-cierre/` (censo.csv con 43 columnas por página, similitud.json, aggregates.json, metas-vacias.csv, titulos-duplicados.csv).
- El árbol más reciente (`merlin-arreglos-niky-datos` @ 609061df) difiere de esa base en **16.023 ficheros, de los que solo 135 no son `public/media`** (data-loaders y ficheros generados de blog/audiencia, datos de comparadores, `_redirects`, precios radar, arreglos de Niky): no altera los agregados de forma material. Sí cambia dos cosas concretas: salen 5 URLs de fichas Zontes duplicadas y **148 fichas ganan enlace a su blog** (mejora de enlazado ya aplicada en la línea nueva, no en este dist).
- **Matiz metodológico que condiciona el área de contenido**: el HTML servido de las fichas es el cascarón SPA + bloque SEO inyectado; el grueso editorial vive en los datos JS y renderiza en cliente. Las cifras de palabras del censo son el **suelo servido sin render**, no el contenido total. Por eso el veredicto de contenido es condicional (ver condición 1).

## Veredicto por área

### Contenido — APTO CON CORRECCIONES (condicional a verificación con render)
- Fichas (4.624): media **843 palabras servidas**, mediana 854, **0 fichas por debajo de 300 palabras**. Posts (991): media 826, **0 por debajo de 300**; 161 posts (16 %) entre 300–600.
- Global: solo 191 páginas (3,2 %) <300 palabras, y 175 de ellas son **hubs de marca** (208 hubs: 84 % <300, media 258) — la clase fina real del build.
- Similitud (sobre párrafos editoriales >40 palabras del HTML servido): **0 pares con Jaccard ≥0,9**; 8.255 de 8.505 párrafos son únicos (df=1). 42 grupos / 440 páginas comparten set idéntico de párrafos largos (artefacto: páginas con 1–3 párrafos largos, todos de plantilla — hubs de marca y fichas de patinete sin análisis propio). 439 pares con >30 % de solape en la misma sección (blog 173, coches 236): variantes del mismo modelo y posts de plantilla antigua. El 96,8 % de las páginas comparte <30 %.
- Contraste con el dictamen AdSense de octubre (NO APTO, ~82 % de páginas <300 palabras únicas, media ~95): aquel era sobre la web en vivo de entonces. En este build, incluso midiendo solo el suelo servido, la foto es otra (media ~830). No son cifras comparables 1:1, pero el riesgo «contenido fino masivo» ya no se sostiene en la línea del borrador.

### SEO técnico — APTO CON CORRECCIONES
- Meta descriptions vacías: **1** (el fichero de verificación de Google Search Console; no es una página). Las ~638 metas vacías de octubre no existen en este build.
- Títulos duplicados: 2 grupos / 4 páginas — uno es el fichero GSC; el real: **«Honda e:Ny1» duplicado en datos** (dos fichas comparten título; corrección de datos pendiente, sin tocar títulos publicados en vivo).
- Títulos >60 caracteres: 94 (conteo solo; los títulos publicados están congelados por norma). Metas >160: 1.
- Canonical ausente: solo en `/` y en el fichero GSC. Sin JSON-LD: las mismas 2. JSON-LD inválidos: **0**. H1: ninguno duplicado; 0 h1 en `/` (corregido en origen en esta rama, ver correcciones) y en el fichero GSC.
- Noindex en el dist medido: 1.361 páginas (gobernanza antigua). Con la recalibración de esta rama, el próximo build pasa a **95 entradas de lista + heurística dinámica** de `adsense-dist.py` (62 de la recalibración + 33 patinetes con nota 0,0 que estaban indexadas).
- **Sitemap: 4.201 URLs, 0 URLs del sitemap sin fichero en dist. Pero 408 páginas indexables quedan fuera del sitemap** (motos 273, coches 118, patinetes 12, blog 4, hubs 1) — riesgo conocido nº 2.

### Enlazado interno — APTO
- Mediana de enlaces internos salientes por página: 47–67 según sección. Ninguna página real con 0 enlaces (solo el fichero de verificación GSC).
- En esta rama se corrigen 3 enlaces internos rotos del blog (destinos inexistentes verificados contra el dist). En la línea nueva ya van +148 enlaces ficha→blog.
- Nota de alcance: los «84 destinos rotos desde el blog» de la auditoría de Niky son de la web en vivo (otro universo); en este dist los destinos comprobados rotos fueron los 3 corregidos.

### E-E-A-T — APTO CON CORRECCIONES
- Fichas: firma visible **100 %**, bloque de fuentes **100 %**, fecha 98,9 %, autor en JSON-LD 98,9 %.
- Blog (991 posts): fecha 100 %, autor en JSON-LD 100 %, mención de fuente 100 % y **autoría visible (Daniel Sánchez) en el 100 %** — el blog no usa la firma «de Cosa» de las fichas, usa byline propio (una primera métrica automática que buscaba «Cosa» dio 0,1 % y era errónea). El hueco real que queda: **147 posts (14,8 %) sin bloque estricto de fuentes**.

## VEREDICTO GLOBAL: APTO CON CORRECCIONES

El borrador definitivo puede presentarse con esta Fase 2, cumpliendo 3 condiciones y asumiendo los riesgos conocidos:

1. **Verificación con render** del contenido real de una muestra de fichas de cada sección antes de publicar (el censo es sobre HTML servido; el grueso editorial renderiza en cliente).
2. **Sitemap final del montaje**: comprobar que `sitemap-final.py` incluye las 408 indexables ausentes en esta foto (sobre todo las 273 de motos) o documentar por qué no.
3. **Post-build**: verificar que el noindex total baja de 1.361 a ~95 + heurística y que **ninguna ficha con nota 0,0 queda indexada** (en este build hay 66 fichas con nota 0,0: 33 en noindex —20 coches y 13 motos— y **33 de patinetes INDEXADAS**, corregidas en esta rama, ver corrección 5).

Riesgos conocidos no bloqueantes: hubs de marca finos (175 <300 palabras servidas); 147 posts sin bloque estricto de fuentes; título duplicado Honda e:Ny1 en datos (dos slugs, `e-ny1-2025` y `eny1-2025`, ambos indexados — exige decisión de canónica); 161 posts entre 300–600 palabras servidas; 94 títulos >60 caracteres (congelados por norma hasta el 1/11); **cohorte legacy de 50 fichas de coches** con plantilla antigua que renderiza destacados a «0 CV / 0 L / 0 €» (49/50) y texto pegado — **13 están indexadas** (lista en el censo): no maquillar los ceros (son datos ausentes en origen); noindexar mientras se migran es la vía segura. Alcance del censo: en este dist, las secciones autocaravanas/campers/caravanas/radares tienen **0 ficheros en sus rutas propias** (las fichas RV viven bajo `/coches/` y las páginas de radares llegan con la rama `merlin-arreglos-borrador2`): su «ojos de Google» se verifica en el montaje, no aquí. Con la lente de «palabras únicas» (la de octubre): media 407,9 y 7,5 % <300 — tampoco reproduce el cuadro de octubre.

## Correcciones aplicadas en esta rama

1. **`index.html`** — el título del fallback SEO `<noscript>` de la home pasa de `<p>` a `<h1>` (la home servida tenía 0 h1).
2. **`scripts/noindex-calidad-p2.txt`** — de 1.338 a **29 slugs**: solo fichas que aún muestran «La nota de Cosa 0,0». Cabecera con la medición y la red de seguridad (la heurística dinámica de `adsense-dist.py` — nota 0,0 o ≥60 % de `<dd>` vacíos en coches/motos — sigue activa en cada build).
3. **`src/lib/noindex.generated.json`** — de 1.371 a **62 entradas**, coherente con la nueva gobernanza.
4. **`src/lib/blog-posts-prioridad-20261014.ts`** — 3 enlaces internos rotos corregidos (Mitsubishi Montero, Opel Insignia y Nissan NV200 enlazaban a fichas inexistentes → hubs de marca existentes; Lucid Air Pure desenlazado, sin ficha).
5. **`src/lib/noindex.generated.json` (cierre de fuga)** — añadidas las **33 fichas de patinete con nota 0,0 que estaban INDEXADAS** (62 → 95 entradas): se les aplica la misma regla de la casa que a coches/motos (nota 0,0 → noindex,follow hasta completar datos). La decisión de Daniel del 18/10 devolvió a index patinetes castigados por la heurística de `<dd>` vacíos, no fichas con nota 0,0; aun así, el cambio es de una línea por URL y reversible si se interpreta lo contrario.

### Verificación de la recalibración de noindex (cruzada contra el censo independiente)
- Las **1.309 URLs que salen** de `noindex.generated.json`: **0 con <300 palabras, 0 con nota 0,0**, media 759 palabras, 1.110 con ≥600. Ninguna queda desprotegida por error.
- Las **29 que quedan** en `noindex-calidad-p2.txt`: **29/29 con nota 0,0** en el censo.
- De las 66 fichas con nota 0,0 del build: 29 están en las listas, 4 coches Baojun están en noindex por la heurística de build/HTML fijado, y **33 de patinetes estaban indexadas** — no era un efecto de la recalibración (nunca estuvieron en ninguna lista), es una fuga previa que la corrección 5 cierra.
- `npx tsc -b` sobre la rama con estas correcciones: **0 errores**.
- Sin tocar títulos/metas publicados. Nada publicado en vivo.
