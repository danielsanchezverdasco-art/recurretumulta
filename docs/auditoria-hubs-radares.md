# Auditoría total — Hubs, comparadores y radares (20/10/2026)

**Rama de la auditoría:** `merlin-auditoria-hubs-radares`
**Rama base:** `origin/merlin-rutas-cableadas` (se usa como base porque es la que
contiene el universo completo: cablea las rutas de radares y autocaravanas —
`RadaresIndex`, `RadarPage`, `AutocaravanasIndex`, `CampersIndex` y
`docs/radares/indice.json` con los 426 radares — que no están en `main`).
**Alcance:** todas las páginas que NO son fichas ni blogs: hubs/índices,
hubs de marca, comparadores, las 426 fichas de radar y su página, y las
páginas legales/estáticas (solo verificación de existencia, sin reescribir).
**Método:** inspección de código y datos en el repo (imports, rutas en
`src/App.tsx` y `scripts/routes.json`, referencias a assets contra
`public/`, consistencia índice↔CSV↔contenido de radares, `tsc -b`).
No se ha inventado ningún dato: las coordenadas son las del dataset oficial
DGT (DATEX II) ya presente en `docs/radares/`.

---

## Resumen ejecutivo

| Bloque | Auditado | Cumple | Con fallos |
|---|---|---|---|
| Hubs/índices (componentes) | 8 | 6 | 2 (imagen hero de RadaresIndex sin arreglo posible; conteo inflado en HubFichas, **arreglado**) |
| Hubs de marca (instancias) | 208 | 200 | 8 marcas sin ninguna ficha enlazadas desde los hubs (**arreglado**) |
| Comparadores (páginas con ruta) | 6 | 4 | 2 (Comparativa y ComparadorGarantiaBateria: imágenes hero inexistentes en el repo, sin sustituto fiel) |
| Radares (fichas) | 426 | 426 con datos completos | 12 sin límite publicado por la DGT → **marcados noindex** |
| Página de radar (`RadarPage`) | 1 | Renderiza mapa 2D + Street View 3D desde el índice | **CRÍTICO: los datos no se copiaban a `dist/` → todas las páginas de radar caían (arreglado)** |
| Legales/estáticas | 8 | 8 existen y tienen ruta | Imágenes hero inexistentes en el repo (solo se documenta; no se reescriben) |
| Resto de páginas estáticas (guías, herramientas, calculadoras, diarias…) | 72 ficheros de página auditados en assets/imports | — | Mismo fallo sistémico de assets editoriales (ver §5) |

**Totales:** 72 componentes de página auditados + 426 fichas de radar + 208
hubs de marca. Fallos por tipo: datos no servidos (1, crítico), rutas no
registradas (3 índices + 426 radares), enlaces a páginas inexistentes (8),
conteo mostrado ≠ contenido (3 hubs), imágenes referenciadas inexistentes
(122 referencias / 106 ficheros únicos antes de los arreglos).

---

## 1. Hallazgo crítico: las páginas de radares no podían cargar sus datos

`RadarPage.tsx` y `RadaresIndex.tsx` cargan los datos por `fetch` en cliente
desde `/docs/radares/indice.json` y `/docs/radares/contenido/<id>.md`, pero
los datos viven en `docs/radares/` (fuera de `public/`) y **ningún paso del
build los copiaba a `dist/`** (Vite solo copia `public/`). Resultado: en un
despliegue construido desde este repo, `/radares/` y las 426 fichas de radar
mostraban «Datos no disponibles».

**Arreglo aplicado:**
- Nuevo `scripts/copy-radares.mjs` (mismo patrón que `copy-media.mjs`):
  copia `docs/radares/` → `public/docs/radares/`; queda como **primer paso
  de `npm run build`** en `package.json`.
- La copia generada (443 ficheros: `indice.json`, 16 CSV y 426 `.md`) se
  incluye commiteada en `public/docs/radares/` para que dev/preview también
  funcionen sin pasar por el build.

Además, `/radares`, `/autocaravanas` y `/campers` **no estaban en
`scripts/routes.json`**: ni se prerenderizaban ni entraban en el sitemap.
**Arreglo:** añadidas a `staticRoutes` y nuevo `slugFiles` con
`scripts/radares-slugs.txt` (426 ids generados desde `indice.json`), de modo
que prerender y `gen-sitemap.mjs` cubren el índice y las 426 fichas.
(`/coches`, `/motos` y `/patinetes` NO se añaden a propósito: sus HTML
estáticos los genera `scripts/seo-dist.py` en el flujo de publicación.)

## 2. Radares: verificación completa de las 426 fichas

Fuente: `docs/radares/indice.json` + 16 CSV por comunidad + 426 ficheros en
`docs/radares/contenido/`. Comprobado programa a programa:

- **Correspondencia 1:1:1** — 426 ids en el índice = 426 filas CSV = 426
  ficheros `.md`. Sin huérfanos en ningún sentido.
- **Coordenadas:** 426/426 válidas (lat/lon numéricos, dentro del territorio
  español) e **idénticas entre CSV e índice** (0 diferencias). Son las del
  dataset oficial DGT; no se ha tocado ni inventado ninguna.
- **Contenido:** los 426 `.md` tienen H1, fuente DGT citada, fecha de
  verificación, coordenadas en el texto, mapa 2D y Street View 3D
  incrustados. Longitud 3.245–4.868 caracteres (media ≈ 4.000): ninguno es
  un stub. (`RadarPage` elimina los iframes del `.md` y pinta los suyos
  propios desde el índice, sin duplicar.)
- **Mapa 2D + Street View 3D:** `RadarPage` genera ambos embeds
  (`google.com/maps?q=lat,lon&output=embed` y `layer=c&cbll=lat,lon`)
  desde las coordenadas del índice para los 426.
- **Comunidades:** 13 con datos (Castilla y León 65, Comunitat Valenciana
  65, Galicia 65, Castilla-La Mancha 64, Aragón 50, Illes Balears 25,
  Principado de Asturias 23, Región de Murcia 14, Canarias 14, La Rioja 13,
  Cantabria 12, Extremadura 9, Comunidad Foral de Navarra 7). Los CSV de
  **País Vasco, Ceuta y Melilla existen pero con 0 filas**: el dataset DGT
  usado no publica radares de esos territorios (competencia foral / sin
  radares fijos DGT). El índice los agrupa dinámicamente, así que no se
  muestran comunidades vacías. Se documenta como límite de la fuente, no
  como dato inventable.
- **Incompletos → noindex (regla del proyecto):** 12 radares no tienen
  `velocidad_limite` porque la DGT no lo publica para ellos
  (`a-55-11-8-creciente-cabina`, `ap-6-56-6-creciente-cabina`,
  `ei-700-15-568-decreciente-cabina`, `fe-14-4-2-creciente-cabina`,
  `gc-3-1-5-decreciente-cabina` y 7 más). La página lo declara con
  honestidad («No publicado por la DGT»), pero al faltar un dato clave se
  han añadido sus 12 URLs `/radares/<id>/` a
  `src/lib/noindex.generated.json` (mecanismo que `useSeo` ya aplica como
  `noindex, follow`). Quedan fuera del índice hasta que la DGT publique el
  límite.

## 3. Hubs e índices

| Página | Ruta | Estado | Notas |
|---|---|---|---|
| FichasTecnicas | `/fichas-tecnicas/` | ✅ tras arreglo | 5 pestañas (coche/moto/patinete/autocaravana/camper) con datos empaquetados. Hero `/media/dacia-bigster-jaecoo-5-duelo-cuerpo.webp` inexistente en todo el repo → sustituida por foto real de duelo ya versionada (`aion-v-vs-deepal-s05-cual-comprar-hero.webp`, mismo texto alternativo). |
| HubFichas | `/coches/`, `/motos/`, `/patinetes/` | ✅ tras arreglos | Listas generadas: 1.573 coches, 975 motos, 509 patinetes. **Fallo:** el contador mostraba `hub-conteos` (2.319/1.232/639, fichas presentes en dist incl. noindex) en vez de las realmente listadas → corregido para mostrar `lista.length`. Los HTML estáticos de estos hubs los genera `seo-dist.py` (correcto en el flujo de publicación). |
| HubMarca | `/{cat}/marca/:slug/` | ✅ tras arreglo | Depende del HTML estático de `gen-marcas.py` (bloque `hub-marca-data`); en SPA pura muestra «Cargando…» por diseño. **Fallo:** `hub-marcas.generated.json` estaba desactualizado e incluía 8 marcas que el propio generador descarta por no tener fichas → enlaces muertos desde HubFichas. Eliminadas: Donkervoort, Lepas, Radical (coches); Scorpa, Sherco, TRS, Vertigo (motos); Ruptor (patinetes). Quedan 200 marcas, todas con ≥1 ficha. |
| AutocaravanasIndex | `/autocaravanas/` | ✅ | Lista el subconjunto LITE (41 fichas; 41/41 fotos válidas en `public/media`). El universo de datos es mayor (212 ids en los módulos `comparador-autocaravanas-*`): el hub solo expone el subconjunto ligero, decisión documentada en la propia rama base; se señala por si se quiere ampliar. Añadida a `routes.json`. |
| CampersIndex | `/campers/` | ✅ | Filtra el módulo completo `AUTOCARAVANAS` por tipo camper (29 ids en `src/lib/campers/`). Añadida a `routes.json`. |
| RadaresIndex | `/radares/` | ⚠️ parcial | Datos y enlaces a las 426 fichas correctos; agrupación dinámica por comunidad. Hero `/media/pilar-radares.webp` inexistente en el repo y sin sustituto fiel (no hay ninguna foto de radar/carretera versionada): queda documentado en §6. |
| Rankings (índice + detalle) | `/rankings/`, `/rankings/:slug/` | ✅ tras arreglo | 3 rankings definidos en el propio componente con datos de `comparador-coches-data.ts`. Hero `rankings.webp` inexistente → sustituida por foto real (`bmw-ix4-electrico-2026-hero.webp`) en los 2 usos. El vídeo `/media/rankings.mp4` sigue sin existir en el repo (§6). |
| Index (portada) | `/` | ✅ | Sin referencias rotas. |

Enlaces internos de los 14 componentes hub/comparador: verificados contra
las rutas de `App.tsx` — **0 enlaces rotos** (salvo los 8 de marca ya
corregidos, que apuntaban a páginas nunca generadas).

## 4. Comparadores

| Página | Ruta | Estado | Notas |
|---|---|---|---|
| ComparadorCoches | `/comparador-coches/` | ✅ tras arreglo | Hero VS con `/media/comparador/hero-car-1.jpg` y `hero-car-2.jpg` inexistentes (la carpeta `public/media/comparador/` ni existe) → sustituidas por fotos reales versionadas (BYD Dolphin Surf y Dacia Bigster), alt de la segunda ajustado a «SUV en comparativa». |
| ComparadorMotos | `/comparador-motos/` | ✅ tras arreglo | Hero `hero-moto-1/2.jpg` inexistentes → Silence S01 y Velca Bora (motos eléctricas reales, acordes al comparador de eléctricas), alts actualizados con el modelo mostrado. |
| ComparadorPatinetes | `/comparador-patinetes/` | ✅ tras arreglo | Hero `hero-patinete-1/2.jpg` inexistentes → fotos reales de `public/media/patinetes/` (Apollo Air y Aovopro AP07). |
| ComparadorGarantiaBateria | `/comparador-garantia-bateria/` | ⚠️ | Datos completos; hero `/media/comparador-garantia-bateria.webp` y vídeo `/media/garantia-bateria.mp4` inexistentes en el repo, sin sustituto fiel (no hay foto de taller/batería versionada). §6. |
| Comparativa | `/comparativa/` | ⚠️ | Contenido completo; hero `/media/comparativa-abogado-ia.webp` e imagen `/media/comparativa-abogado-gestor.webp` inexistentes, sin sustituto fiel (no hay imaginería legal versionada). §6. |
| MasVendidos | `/comparador/mas-vendidos/` | ✅ tras arreglo | Hero y `og:image` apuntaban a `rankings.webp` (inexistente) → foto real (`audi-a3-sedan-2025-hero.webp`). |

**Sin página (hallazgo):** existen los módulos de datos
`src/lib/comparador-autocaravanas-data.ts` y los ~140
`comparador-autocaravanas-*.ts` / `comparador-campers-*.ts` (212 + 29
modelos), pero **no hay ruta ni página de comparador de
autocaravanas/campers** en `App.tsx`: esos datos solo alimentan las
fichas vía `data-loaders`. Además referencian **989 imágenes únicas que no
existen en ninguna rama** (mismo fallo sistémico del §5; corresponde a la
línea de fichas/datos de autocaravanas, se deja constancia aquí).

## 5. Fallo sistémico: assets editoriales nunca versionados

122 referencias a imágenes/vídeos (`/media/pilar-*`, `/media/hero-*`,
`.mp4` de guías y herramientas, etc.) en 47 ficheros de página **no existen
en `public/media` de esta rama ni de ninguna otra rama del repo**
(comprobado contra el árbol completo de todas las ramas remotas: 3.853
ficheros `public/media` históricos, 0 coincidencias). Son los assets
editoriales del sitio anterior a la migración a Git: presumiblemente solo
existen en el despliegue vivo (subidas manuales a Netlify), nunca se
commitearon. `scripts/copy-media.mjs` los rescataría de
`~/workspace/migracion-export/media-migrada`, pero esa carpeta **no existe
en esta VM**, así que el paso es un no-op.

Tras los arreglos de esta auditoría quedan **113 referencias rotas
(99 únicas)** repartidas en: guías (9 páginas, incl. la guía de radares:
`pilar-radares.webp`, `guia-radares.mp4`, `radar-recurso.webp`),
herramientas (índice + 2), calculadoras (6), páginas diarias (3),
buscadores (2), legales (4: hero compartido `aviso-legal.webp` /
`vicios-forma-documento.webp` / `privacidad-datos.webp` /
`terminos-condiciones.webp` / `cookies-web.webp`), `NotFound`
(`error-404.webp`), glosario, señales, comunidades, empresas y
reportar-carretera. En los hubs/comparadores en alcance solo restan:
`pilar-radares.webp` (RadaresIndex), `rankings.mp4` (Rankings) y los dos
assets de Comparativa y ComparadorGarantiaBateria (§4).

**Rescate posible (fuera del repo):** descargar esos ficheros del sitio
vivo `recurretumulta.online/media/…` y commitearlos en `public/media/`.
No se ha hecho en esta rama porque excede el arreglo en repo y requiere
validar que el vivo sirve exactamente esos nombres.

Nota: la hero de BuscadorCoches
(`/media/volkswagen-golf-2025-precio-ficha-tecnica-hero.webp`) existe como
fichero **sin commitear** en el working tree del checkout compartido
(trabajo en curso de otra línea); no está en ninguna rama.

## 6. Páginas legales y estáticas (solo verificación)

Existen, tienen ruta en `App.tsx` y están en `routes.json`:
`Privacidad`, `Terminos`, `Cookies`, `AvisoLegal`, `Contacto`,
`SobreNosotros`, `Metodologia`, `PoliticaEditorial` — **8/8 ✅** en
existencia y registro. No se han reescrito. Comparten el fallo del §5 en
sus imágenes hero (documentado, no corregido por instrucción expresa de
«no reescribir» y por no existir sustituto fiel en el repo).

## 7. Arreglos aplicados en esta rama

1. `scripts/copy-radares.mjs` nuevo + primer paso de `npm run build`;
   copia commiteada en `public/docs/radares/` (443 ficheros). Sin esto,
   las 427 páginas de radares no cargaban datos.
2. `scripts/routes.json`: `staticRoutes` += `/radares`, `/autocaravanas`,
   `/campers`; `slugFiles` += `scripts/radares-slugs.txt` (426 ids) →
   prerender y sitemap cubren radares y los dos índices nuevos.
3. `src/lib/noindex.generated.json`: +12 URLs de radares sin límite
   publicado por la DGT (regla: incompleto → noindex).
4. `src/lib/hub-marcas.generated.json`: −8 marcas sin fichas (enlaces
   muertos desde los hubs).
5. `src/pages/HubFichas.tsx`: el contador muestra las fichas realmente
   listadas (1.573/975/509), no el conteo de dist (2.319/1.232/639).
6. Heroes sustituidos por fotos reales ya versionadas en:
   `FichasTecnicas.tsx`, `ComparadorCoches.tsx`, `ComparadorMotos.tsx`,
   `ComparadorPatinetes.tsx`, `Rankings.tsx` (×2) y `MasVendidos.tsx`
   (hero + og:image).
7. Verificación: `tsc -b` limpio tras los cambios; `gen-sitemap.mjs`
   genera las 426 URLs de radar + índice (el sitemap final lo reconstruye
   `sitemap-final.py` desde `dist/` en la publicación).

## 8. Imposibles documentados (sin arreglo honesto en el repo)

- **99 assets editoriales únicos** (§5): no existen en ninguna rama; el
  rescate exige bajarlos del despliegue vivo y commitearlos.
- **Hero de RadaresIndex y guía de radares** (`pilar-radares.webp`): no
  hay ninguna foto de radar versionada que la sustituya sin falsear la
  página.
- **Comparativa y ComparadorGarantiaBateria**: sin imaginería legal ni de
  taller/batería en el repo; no se sustituye por fotos de coches.
- **Radares de País Vasco, Ceuta y Melilla (0)**: la fuente DGT (DATEX II)
  usada no los publica; no se inventan ubicaciones. Si se quieren, la
  fuente sería Gobierno Vasco / SCT según territorio.
- **12 radares sin límite**: la DGT no lo publica; quedan noindex, no se
  estima ni se copia el límite genérico como si fuera el del radar.
