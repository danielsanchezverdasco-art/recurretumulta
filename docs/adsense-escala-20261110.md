# AdSense — Arreglos de contenido a escala (6, 7 y 8) — 10/11/2026

Rama: `niky-adsense-escala` (desde `origin/main` @ `3e93e6305`).
Commits: `618b8b00b` (arreglo 6), `20a0ee0d5` (arreglo 7a blog), `3008ca6bf` (arreglo 7b fichas), `1277f1396` (arreglo 8).
Verificación: `npx tsc -b` — 0 errores en todos los ficheros tocados. El chequeo completo
(`tsc -b --force`) da 63 errores preexistentes, todos en ficheros que importan
`@/convex/_generated/*` (codegen ausente en este sparse checkout) o en cascada de
ellos; ninguno en los ficheros de esta rama. No se hizo build ni prerender (cambio
de datos/contenido; orden de la tarea).

## Método de censo (reproducible)

- Blogs vivos: slug en `BLOG_LITE` (4.410) y `hrefDesdeBlog(slug)` empieza por `/blog/`
  (sin 301 a ficha y sin entrada en `BLOG_SIN_PAGINA`). Blogs vivos en `/blog/`: **1.402**.
- Duplicados de blog: misma normalización que la auditoría (minúsculas, sin HTML,
  borrar todo carácter que no sea `[a-z0-9]`, sin transliterar).
- Similitud ciudades/comunidades: texto visible reconstruido desde datos + constantes
  de plantilla, nombre anonimizado, `difflib.SequenceMatcher` sobre tokens.
  La reconstrucción sobreestima el peso de la plantilla frente al dist real.

## Arreglo 6 — Ciudades / comunidades (A5) — commit 618b8b00b

- `src/lib/comunidades-data.ts`: FAQ de 7 a 4 preguntas (fuera pronto pago, no-pago y
  prescripción — idénticas en las 19 y ya en `/guias/`); `particularidadesComun` sin
  las dos frases genéricas; respuesta DGT sin el párrafo del art. 96.2.
- `src/pages/comunidades/[ccaa].tsx`: pasos 1–3 e intro de radares acortados; la tarjeta
  «Lo que debes saber» solo se renderiza si hay particularidades (6 comunidades quedan
  sin tarjeta: aragon, canarias, cantabria, castilla-la-mancha, extremadura, la-rioja).
- `src/pages/multas/[provincia].tsx`: «Dónde y en qué plazo recurrir» pasa de párrafo de
  plantilla a lista de datos (`<dl>`); fuera la frase genérica de ZBE (solo queda
  `zbeNota` local cuando existe).
- Similitud por pares (antes → después): Madrid–Andalucía 76,0→68,0 %;
  Madrid–Cataluña 67,9→60,9 %; Cataluña–Andalucía 65,7→58,7 %; Madrid–Galicia
  85,0→78,8 %; Madrid–Sevilla 59,2→55,8 %; Sevilla–Valencia 65,5→62,1 %;
  Albacete–Almería 54,0→44,0 %; Madrid–Barcelona 55,0→51,7 %; A-Coruña–Albacete
  55,7→46,1 %. Palabras FAQ por comunidad: 395→183.
- La tabla de multas comunes (idéntica en las 19 por ser tabla legal de referencia,
  RDL 6/2015) no se tocó.

### Pendiente arreglo 6 — sin dato local (valorar noindex; lo decide el coordinador)

Las 6 comunidades sin `DATOS_OFICIALES_CCAA` ni bloque `local`: **aragon,
castilla-la-mancha, castilla-y-leon, galicia, navarra, comunidad-valenciana**.
Sus cifras (fallecidos, denuncias 2024, parque) existen en las fuentes citadas en
`comunidades-datos-oficiales.ts` (nota de prensa DGT 08/01/2026; Anuario Estadístico
General 2024 de la DGT, tablas 64 y 113; fichero NAP de radares), pero no se
añadieron en este pase (cero cifras inventadas; queda como trabajo pendiente con
la fuente exacta). No se añadió ningún noindex.

## Arreglo 7 — Duplicados (A6)

### 7a. Blog — commit 20a0ee0d5 (19 ficheros, 221 posts)

- 352 ocurrencias de las 63 claves de la auditoría: **89 párrafos eliminados**
  (CTA «analiza tu multa», «recordatorio de la casa», «Depende de tu uso»,
  «Fuentes: Ver fuentes», garantía «a confirmar modelo exacto») y **263
  particularizados** con el nombre del modelo (VMP 39×, garantía/mantenimiento de
  modelo similar por marca, frenos, autonomía, precio, cuatro puntos críticos,
  pernoctar, MMA, Jumper, Challenger, «¿Buscas solo los datos del {modelo}?», etc.).
- Verificación con el censo de la auditoría: **63 claves → 0 coincidencias,
  0 ocurrencias en 4.394 posts** (incluidas las 4 claves que la auditoría no pudo
  reproducir exactas: se particularizaron/eliminaron igualmente por coincidencia
  difusa o por regla).
- No se tocó la CTA de las respuestas FAQ del schema (arreglo 1, otro agente).

### 7b. Fichas — commit 3008ca6bf (4 ficheros)

- Garantía por marca (`CochesFicha`, `MotosFicha`, `PatinetesFicha`): fuera la nota
  verbatim de marca (repetida en decenas de fichas); queda el dato años/km + enlace
  a las condiciones oficiales (nueva `fuenteUrlGarantia()` en
  `src/lib/garantias-marcas.ts`, extrae la primera URL limpia del campo `fuente`).
  La nota propia del modelo (`tp.garantiaNota`) se conserva.
- Coches: FAQ de etiqueta particularizada con el nombre del modelo («El {modelo}
  llevaría la etiqueta CERO; aún sin tarifa en España» — antes «Le correspondería
  la CERO…» 387×); eliminados los pasos genéricos de filtro de polen y filtro de
  aire (39×/26× verbatim); queda la ubicación del filtro de polen (propia del
  modelo) y los `resetAceitePasos` (menús propios del modelo).
- Patinetes: FAQ de seguro particularizada («Sí: el {modelo} es un VMP y el seguro
  será obligatorio desde 2026 (Ley 5/2025)»); fuera la lista de «trucos» genéricos
  verbatim (batería 21×, lluvia 18×…).
- Motos: los pasos DIY son mayoritariamente propios del modelo (con referencias al
  manual, pares de apriete, etc.); no se tocaron.

### No tocado (defendible, anotado)

- «Plan de mantenimiento oficial: 15.000 km o 12 meses» (`PlanMantenimiento.tsx`):
  título + intervalo como dato estructurado, no prosa.
- «Historia del modelo 24 2024 · Lanzamiento…» (269×): etiqueta de timeline, no prosa.
- Enlace «ZBE y etiquetas» en 1.184 motos y «Certificado DGT y seguro» en patinetes:
  líneas cortas de enlace, no párrafos de prosa.
- Motos `cadenaPasos` en `comparador-motos-exp-m7.ts`: 24× verbatim
  («Limpia la cadena con limpiador específico para retenes.») — un solo lote de
  expansión; reescribir por modelo queda pendiente.

### Residual observado (fuera del umbral de la auditoría)

- CTA de cierre «**¿Te han puesto una multa?** Antes de pagarla o recurrirla,
  analízala gratis con nuestra IA…» en **1.483 blogs** (20 palabras: bajo el umbral
  de 25 de la auditoría, por eso no salió en las 63 claves). Es el CTA de conversión
  del analizador; quitarlo es decisión de producto, no se tocó. Si el coordinador
  lo ordena, se elimina en otro pase (una frase por post).

## Arreglo 8 — Enlaces ficha↔blog + fuentes (A7) — commit 1277f1396

### 8(a) Ficha→blog: gate de blog vivo (6 plantillas)

- El botón/FAQ solo se muestra si el blog del modelo **existe y está vivo en
  `/blog/`** (`extra.b === 1` Y `hrefDesdeBlog()` empieza por `/blog/`). Antes,
  `extra.b === 1` incluía los blogs que redirigen 301 a la propia ficha
  (auto-enlace: 2.026 coches según el 2.º informe AdSense).
- Sin el `extra.b`, `hrefDesdeBlog()` devuelve `/blog/<slug>/` también para slugs
  sin artículo (404): por eso el gate lleva las dos condiciones. En RV el gate es
  `BLOG_POST_SLUGS.has()` + `hrefDesdeBlog()` (verificado: 0 casos borde).
- Fichas que **conservan** el enlace (censo con `BLOG_LITE` + `hrefDesdeBlog`):
  **coches 198 / 2.479, motos 168 / 1.519, patinetes 332 / 648, RV 167 / 212,
  caravanas 27 / 72**.
- Fichas **sin blog vivo** (lista «sin blog», para crearlos después): coches 2.281,
  motos 1.351, patinetes 316, RV 45, caravanas 45. Listas completas en
  `~/workspace/adsense-tmp/censo8.json` (campo `sinBlog` por categoría; RV y
  caravanas: `blogVivo: false` en el mismo fichero).
- 2 fichas con blog vivo bajo otro slug (redir blog→blog) quedan sin botón:
  `volkswagen-id-tiguan` → `/blog/volkswagen-id-tiguan/`,
  `mg-hs-hybrid-plus-2025-precio-ficha-tecnica` →
  `/blog/mg-hs-hybrid-plus-225-cv-precio-espana/`. Arreglo: apuntar su
  `analisisSlug` al slug vivo + regenerar `ficha-extra` (el `b` se genera en build).

### 8(a) inversa: blog→ficha RV — `src/lib/blog-ficha-links.ts` (+243 pares)

- 239 pares RV nuevos verificados por censo (212 enlazan ya a su ficha dentro del
  contenido —el enlace es el del propio artículo—; 27 emparejados por id de ficha
  = slug del blog + `-2026`, mismo modelo verificado por título) + 4 blogs
  `-analisis-opinion` cuya ficha vive en `/coches/` (vivienda: Adria Matrix
  Supreme 670 SL, Bürstner Campeo C 600, Dreamer D55, Campérêve Magellan 643).
- Total en el mapa: 53 → 296 pares.
- **OJO**: `BlogPostPage` aún no importa `BLOG_FICHA_LINKS` (ningún consumidor en
  `src/`): el CTA «Ver la ficha técnica» no se pintará hasta que otro equipo
  cablee el mapa en la página de blog. Este trabajo es solo el dato.
- Blogs RV vivos **sin ficha** (21): 20 `-analisis-opinion` sin ficha en datos
  (Ford Nugget Trail/Active, Pössl Campster/Vanster/Summit 640/Trenta 640,
  Westfalia Kepler/Columbus/Amundsen/Sven Hedin, Peugeot Traveller Camper,
  Ford Transit Custom Nugget/Nugget Active/Nugget Plus, Camperiz Peugeot Rifter,
  Renault Kangoo Camper, Camperiz Dacia Dokker, VW California Beach/Coast/Ocean)
  + `eura-mobil-integra-line-gt-il-726-ef-precio-ficha-tecnica`.

### 8(b) Fuentes oficiales por ficha — `src/lib/marcas-web-oficial.ts` (nuevo)

- 256 marcas con su web oficial (raíz del sitio, verificada en citas que YA existen
  en los contenidos del blog del repo). Fuera: prensa (`prensa.*`/`press.*`),
  concesionarios, tiendas, webs de fans (p. ej. mundoxiaomi) y PDFs. Clave
  normalizada (minúsculas, sin acentos ni signos).
- Fallback en la línea «Fuente:» de `CochesFicha` y `MotosFicha` (y en
  `fuentePrincipal` del schema editorial): si la ficha no trae `fuenteUrl` propia,
  enlaza «web oficial de {marca}». Es la web del fabricante (raíz), no un
  deep-link de modelo.
- Cobertura: coches sin fuente 1.780 → **1.599 ganan enlace** (181 quedan sin
  fuente); motos sin fuente 263 → **242 ganan** (21 quedan); patinetes 0 sin
  fuente. Total: **1.841 de 2.043 (90 %)** fichas sin fuente ganan fuente real.
- Marcas **sin web oficial verificada** (117, quedan pendientes — no inventar):
  las de más fichas sin fuente son Citroën (40), Xiaomi (13), Tank (13), Lotus
  (12), Li Auto (9), Baojun (9), Forthing (9), Yangwang (8), Wey (8), Seres (7),
  EVO (7), Nevo (7), Sunra (7), Beijing (6), Neta (6). Lista completa en
  `~/workspace/adsense-tmp/marcas-sin-web.json` (claves normalizadas).

## Muestreo manual

- Blog `emove-roadrunner-precio-ficha-tecnica`: CTA eliminada, «Frenos del EMove
  RoadRunner:» particularizado, VMP particularizado, «¿Para quién es el EMove
  RoadRunner?» particularizado, garantía placeholder eliminada.
- Blog `bmw-c-400-x-2026`: garantía y mantenimiento particularizados con el modelo,
  «*Fuentes del BMW Motorrad C 400 X:» particularizado, garantía genérica eliminada.
- Fichas (censo): `lepas-l8-…` (coche, blog vivo → conserva botón);
  `zeekr-9x-2026-…` (coche, blog redirigido → pierde botón);
  `horwin-ek3-…` (moto, sin blog vivo → pierde botón);
  `xiaomi-electric-scooter-5-max` (patinete, blog vivo → conserva botón).
- Ciudades: similitud reconstruida en arreglo 6 (tabla arriba).

## Pendiente (resumen para el coordinador)

1. Arreglo 6: añadir datos locales a las 6 comunidades sin dato (fuentes exactas en
   `comunidades-datos-oficiales.ts`) o valorar noindex (decisión del coordinador).
2. Arreglo 7: reescribir `cadenaPasos` 24× en `comparador-motos-exp-m7.ts`; decidir
   sobre la CTA de cierre en 1.483 blogs.
3. Arreglo 8: cablear `BLOG_FICHA_LINKS` en `BlogPostPage` (otro equipo); crear los
   blogs de las fichas sin blog (2.281 coches, 1.351 motos, 316 patinetes, 45 RV,
   45 caravanas); verificar web oficial de las 117 marcas sin URL (empezando por
   Citroën, Xiaomi, Tank, Lotus); arreglar los 2 casos redir-blog→blog.
4. Nota de contexto (10/11, MEMORY.md): Daniel ordenó «Dani mismo publica» (revoca
   la regla de solo-Grok). Esta rama sigue siendo solo-rama-para-revisión; si el
   coordinador decide publicar desde aquí, que lo ordene explícitamente.
