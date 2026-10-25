# Cruce con ramas ya entregadas, pendientes de publicar por Grok

Fecha de verificación: 25/10/2026 (mañana, CET). Método: solo lectura vía API de GitHub
(`gh_api.py`), sin publicar, sin force push, sin tocar main/Netlify/Cloudflare ni
`merlin.md`. No se usó el clon local `~/recurretumulta-deploy` como base.
Repo: `danielsanchezverdasco-art/recurretumulta`.

**Caveat de alcance:** se verificaron las cabezas de rama y el contenido de sus
commits propios. NO se verificó en esta tarea si Grok ya fusionó o publicó alguna
de estas ramas en main/vivo; "pendiente de publicar" es la hipótesis de la tarea,
no un hecho comprobado aquí.

## 0. Cabezas verificadas: las 6 supuestas coinciden exactamente

| Rama | Cabeza supuesta | Cabeza verificada por API | Fecha (UTC) | Mensaje de la cabeza |
|---|---|---|---|---|
| `hubs-marca-188-merlin` | f83131ed | `f83131ed699fac307e2c08d4149b174f54f2c77e` | 2026-10-24 23:58 | Hubs marca tanda 4 (4/4): Malaguti, Royal Alloy, Currus, Okai, Speedway, Walberg Urban Electrics, Abarth, Ineos |
| `guias-404-merlin` | 2e47d831 | `2e47d831c056c3596685a8ec36ba950c8504b534` | 2026-10-24 21:06 | Añade /guias/ a routes.json para prerender y sitemap |
| `reescritura-169-rebase-merlin` | eb07d43f | `eb07d43f1b4e13fce575879a97e2d0deb3fd5a17` | 2026-10-25 03:14 | Rebase reescritura-169 t4 FINAL sobre borrador-final-2410: 17 fichas con prosa aplicada, 2 con prosa de borrador conservada |
| `dedupe-8g-merlin` | 1fbdccb2 | `1fbdccb205bd893c2bc8e244a804411ee030fe41` | 2026-10-25 06:42 | dedupe blogs correccion falsa-multa: FAQ donde consultar multa real sustituida por enlace central |
| `borrador-final-2410` | 9f1b8fec | `9f1b8fec9005512f07151208f9b2d4600684c977` | 2026-10-24 23:48 | Generados del build 6.009 rutas: ficha-extra, audiencia/rivales, hubs (conteos), créditos de fotos (+505, sin bajas), sitemap pre-build |
| `unico-coches-01` | 71b32da7 | `71b32da72493f430ec27acb21e484ac97d324d35` | 2026-10-24 16:52 | unico-coches-01: frases de plantilla de componentes de coches con dato propio |

Ninguna cabeza había cambiado en el momento de la verificación.

## 1. hubs-marca-188-merlin @ f83131ed

**Fichero que contiene los 188 hubs:** `scripts/hubs-marca-contenido.json` (único
fichero tocado por todas las tandas, más `scripts/gen-marcas.py` con el override
de contenido propio en `03a51a0e`, +14 líneas). Cada clave lleva `nombre`,
`title` (≤60), `description` (≤155), `intro` propia, `n` (nº de fichas) y `url`.

**Verificación por contenido, no por el nombre de la rama:** el JSON en la cabeza
tiene exactamente **188 claves**: 98 `coches/`, 51 `motos/`, 39 `patinetes/`.
La URL de cada hub es `https://recurretumulta.online/{cat}/marca/{slug}/`
(el campo `url` del JSON es la ruta relativa; p. ej. `coches/abarth` →
`/coches/marca/abarth/`). Lista completa en `hubs-188.csv` (188 filas).

**Desglose por tandas (mensajes de commit verificados, 20 commits de contenido):**

| Tanda | Commits | Marcas |
|---|---|---|
| 1 (5/5) | `a51e7cbc`, `d225a86c`, `e8b40fd6`, `a09b4764`, `bed29cc5` | 50 |
| 2 (5/5) | `d0730834`, `12a16d68`, `4229714e`, `d9880346`, `2e751a23` | 50 |
| 3 (5/5) | `8fa17119`, `f65d639a`, `da1986eb`, `350dba40`, `55bca1dc` | 50 |
| 4 (4/4) | `be7e6dd3`, `6c7ab28e`, `85b9446d`, `f83131ed` | 38 |
| **Total** | | **188** |

Sin duplicados a nivel de clave: los "Zero" y "Xiaomi" que se repiten en los
mensajes son claves distintas (`motos/zero` vs `patinetes/zero`;
`coches/xiaomi` vs `patinetes/xiaomi`). 50+50+50+38 = 188 exacto.

## 2. guias-404-merlin @ 2e47d831 — solo el 404, sin portadas ni contenido nuevo

La rama propia son exactamente **3 commits, 3 ficheros, 170 líneas añadidas**:

| Commit | Fichero | Qué hace |
|---|---|---|
| `617b1567` | `src/pages/guias/index.tsx` (+166) | Índice `/guias/` con las 9 guías ya publicadas, con ItemList y `useSeo`. Sin ninguna etiqueta `<img>`: **no incluye portadas**. |
| `f6975528` | `src/App.tsx` (+3) | Import perezoso `GuiasIndexPage` + `<Route path="guias">` ANTES de las rutas hijas. |
| `2e47d831` | `scripts/routes.json` (+1) | Añade `"/guias"` a prerender/sitemap. Las 9 rutas hijas ya estaban en el fichero. |

**Las 9 guías enlazadas** (slugs del índice): `radares`, `zbe`, `prescripcion`,
`vicios-forma`, `alcohol-drogas`, `patinetes-electricos`, `itv-documentacion`,
`ayudas-compra-coche-electrico-2026`, `comprar-coche-electrico-segunda-mano`.
El propio comentario del índice dice que enlaza "ÚNICAMENTE las 9 guías
publicadas en src/pages/guias/". No se crea ni se reescribe ninguna guía en
esta rama. Veredicto: **arreglo del 404 y nada más**.

## 3. reescritura-169-rebase-merlin @ eb07d43f

### 3.1 Cadena del rebase (4 commits propios sobre borrador-final-2410)

| Commit | Contenido verificado (ficheros) |
|---|---|
| `54996c14` | Parche hubs: `scripts/hubs-marca-contenido.json` (+73/−1) |
| `c035e625` | Rebase t1+t2: 28 ficheros (+595/−780): comparadores coches/motos/patinetes, `blog-data.ts`, `blog-posts-octubre-2026.ts`, `blog-posts-patinetes-exp-p9.ts`, `blog-posts-prioridad-20261014.ts`, `provincias-data.ts`, `calculadora-autonomia-real/page.tsx` |
| `5cbb3429` | Rebase t3: 18 ficheros (+206/−198): comparadores, `hubs-marca-contenido.json` (+9/−1), `PreguntaDelDia.tsx` |
| `eb07d43f` | Rebase t4 FINAL: 6 ficheros (+141/−141): `comparador-coches-toyota.ts`, `comparador-coches-xiaomi.ts`, `comparador-patinetes-base.ts`, `comparador-patinetes-exp-p4.ts`, `comparador-patinetes-exp-p5.ts`, `comparador-patinetes-exp-p6.ts` |

### 3.2 URLs realmente reescritas en la cabeza: 72, no 164

Método: diff entrada por entrada entre la cabeza `eb07d43f` y su base
`9f1b8fec` (borrador-final-2410) en los 45 ficheros tocados por los 4 commits.
**Resultado: 72 entradas cuyo texto difiere** — 33 fichas de coches, 6 de motos,
26 de patinetes (= 65 fichas) + 7 blogs. Cero ids duplicados entre ficheros.
Lista completa en `reescritura-169-urls.csv` (72 filas; URL = categoría + id/slug,
según la convención del sitio: `/coches/<id>/`, `/motos/<id>/`,
`/patinetes/<id>/`, `/blog/<slug>/`).

Además, fuera de esas 72 entradas, el diff cabeza-vs-borrador contiene:
10 claves nuevas de hubs (ver 3.4), la provincia de Albacete reescrita en
`provincias-data.ts` (descripción local + FAQ), textos de
`calculadora-autonomia-real/page.tsx` y subtítulos de `PreguntaDelDia.tsx`.
Los cambios de 1 línea en `blog-posts-octubre-2026.ts` y
`blog-posts-patinetes-exp-p9.ts` no alteran ninguna entrada de blog (cuerpo
idéntico); no se cuentan como blogs reescritos.

### 3.3 La cifra "164 distintas, no 169, por 4 duplicados": NO REPRODUCIBLE

Los 4 commits del rebase están squashados y **ningún fichero de la rama lista
las filas originales de las tandas** (no hay CSV ni lista en la rama). Por tanto:

- **No verificable** que las tandas originales sumaran 169 filas ni que fueran
  164 distintas con 4 duplicados. Lo verificable es lo que sobrevive en la
  cabeza: 72 entradas con prosa distinta de la del borrador.
- La diferencia se explica en parte por los propios mensajes del rebase:
  `c035e625` dice "conflictos resueltos a favor de borrador" — es decir, buena
  parte de la prosa original de t1+t2 se descartó donde el borrador ya traía
  otra. La cifra 164, si existe, describe las tandas originales, no el
  contenido entregado en esta cabeza. **No darla por entregada.**

### 3.4 Excepciones declaradas: qué se verifica y qué no

| Excepción declarada | Veredicto |
|---|---|
| 9 fichas con prosa intacta | **Verificable como aritmética de mensajes, sin nombres.** `5cbb3429` (t3): "20 fichas con prosa aplicada, 7 con prosa de borrador conservada". `eb07d43f` (t4): "17 fichas con prosa aplicada, 2 con prosa de borrador conservada". 7+2 = 9. Los nombres de esas 9 fichas NO aparecen en ningún commit ni fichero de la rama. |
| 14 blogs t3 sin cambio | **NO verificado.** Ningún mensaje de t3 menciona blogs sin cambio, y en toda la rama solo 7 blogs difieren del borrador. No hay lista de 14 en la rama. |
| 4 fichas t3 sin cambio | **NO coincide.** El mensaje de t3 dice 7 conservadas, no 4. La cifra 4 no aparece en ningún mensaje de la rama. |
| 4 bajas no recreadas | **NO verificado (solo 1 nombre).** `c035e625` menciona únicamente "Grecale Trofeo fuera". Ninguna otra baja se nombra en la rama; el diff cabeza-vs-borrador no elimina ninguna entrada (removed = 0 en todos los ficheros). Ojo: la baja "Dacia Bigster Hybrid 155: baja, no recreada" aparece en la lista de **dedupe-8g** (sección 4), no en esta rama. |
| 8 claves nuevas de hubs (mensaje de `54996c14`) | **Discrepancia de 2.** El diff cabeza-vs-borrador añade **10 claves**: `coches/maextro`, `motos/livewire`, `motos/montesa`, `motos/scorpa`, `motos/stark`, `motos/torrot`, `motos/vertigo`, `patinetes/bronco`, `patinetes/minimotors`, `patinetes/ruptor`. El mensaje de t3 nombra `+Scorpa`; las 2 restantes no se explican en los mensajes. Ninguna clave preexistente cambia de contenido en este diff. |

## 4. dedupe-8g-merlin @ 1fbdccb2

Cadena propia completa (10 commits, en orden cronológico; la rama cuelga de
`eb07d43f`, cabeza de reescritura-169):

| Commit | Bloque / alcance verificado (mensaje + parche) |
|---|---|
| `d1d21d78` | Lote 1 fichas coches: 8 fichas (7 íntegras + Taigo solo contras), pros/contras/notas reescritos, cifras sin cambiar. Ficheros: `comparador-coches-beijing-baic.ts`, `-dacia.ts`, `-exeed.ts`, `-haval.ts`, `-neta.ts`, `-volkswagen.ts`. Ids verificados por diff vs padre: Beijing X5 2024, Dacia Duster Hybrid 140 2025, Exeed LX 2025, Haval Xiaolong 2024, Neta L EREV 2024, Neta S 2024, Neta S Shooting Brake 2024, VW Taigo 2026. |
| `b102f75f` | Lote 1 fichas patinetes: pros/contras/veredicto reescritos, cifras sin cambiar; corrección Speedway Leger Pro revertida a su frase original. Ficheros: `comparador-patinetes-base.ts`, `-exp-p3.ts`, `-exp-p4.ts`, `-exp-p5.ts`, `-exp-p6.ts`. |
| `45c41193` | Plantilla ZBE (bloques #2 #3 #16 #23 #24 #29 #25): frase corta con dato propio + enlace central `/guias/zbe/`. Toca `CochesFicha.tsx`, `MotosFicha.tsx`, `AutocaravanasFicha.tsx`, `CampersFicha.tsx`. Caravanas sin FAQ ZBE. |
| `c7b19108` | Plantilla Fuentes (bloques #4 #13): `FirmaEditorial.tsx` ya no vuelca `FUENTES_POR_AMBITO` (la lista por defecto idéntica en cientos de páginas); `blog/[slug].tsx` sustituye el párrafo de verificación por "Fuentes de «{título}» ({fecha}): las citadas al final del artículo". |
| `232bf7ba` | Plantilla patinetes (bloques #17 #27 #28 #10 #14): seguro Ley 5/2025 corto, certificado corto, sin-dato corto. Solo `PatinetesFicha.tsx`. Sin precio/autonomía genérico. |
| `fd64194a` | Plantilla sin-dato coches/motos (bloques #10 #6 #14 #15 #19 #21 #26): precio y autonomía sin dato en frase corta. `CochesFicha.tsx`, `MotosFicha.tsx`. |
| `e01484b7` | Corrección tsc ZBE coches: `nombreCoche`/`etiquetaBase` no existen; usa `marca+modelo` y `etiquetaDgt` directa + rama `sinTarifa`. Solo `CochesFicha.tsx`. |
| `16374426` | Blogs 14/14: procedimental común → página central nueva `como-recurrir-una-multa-de-trafico-pasos-plazos` (añadida en `blog-posts-db.ts`), resto temático sin cambio, sin cifras nuevas, sin Convex. Verificado por diff vs padre: 12 entradas cambian en `blog-posts-db.ts` + 2 en `blog-posts-octubre-2026.ts` = 14 exactas, coincidentes con la lista de `cambios-blogs-convex.md`. |
| `62e3b79e` | Lista `docs/comunicacion-ias/listas/cambios-blogs-convex.md` (+91): 14 posts + página central, campos, excepciones legales, casos especiales sin tocar. |
| `1fbdccb2` | Corrección falsa-multa: en `blog-posts-db.ts` (1 línea) la FAQ "dónde consultar multa real" pasa a enlace central, sin repetir miDGT/TESTRA verbatim. Verificado por diff: solo cambia `falsa-multa-dgt-sms-correo-phishing`. |

**Fichas de patinetes: discrepancia de 1.** El diff vs padre de `b102f75f`
muestra **13 entradas** distintas (Navee S65, Navee ST3, Inmotion Air, Evercross
H5, TurboAnt R9, Gotrax G6, Walberg Egret EY-1, Cecotec Bongo Serie Doble Z75,
Z85, X45 Sport Connected, Navee V25i Pro, Urban Glide Ride 100 Max, Ride 100
Pro 2), frente a las 12 del mensaje ("2 íntegras + 10 parciales"). Total
verificado de la rama: **21 fichas (8+13) + 14 blogs + 1 página central nueva =
36 filas** en `dedupe-34.csv`. El nombre del fichero conserva el "34" de la
tarea; el contenido verificado es 35 entradas modificadas + 1 central nueva.
(La corrección "Speedway Leger Pro revertida" no deja ninguna entrada distinta
en el diff, coherente con una reversión a la frase original.)

**Casos especiales SIN tocar** (según `cambios-blogs-convex.md` @ `62e3b79e`,
verificado en la rama): `/blog/frenar-antes-radar-multa-600-euros/` (SIN-FUENTE),
Dacia Bigster Hybrid 155 (baja, no recreada), Honda e:Ny1 (dos variantes de
ruta, no fusionadas), `/blog/frenar-antes-radar-multa-200-euros/` (fuera del
lote). **Excepciones legales no variadas a ciegas** (Grok decide): citas
verbatim RD 518/2026, art. 18.2/18.3 RGC, art. 76.c Ley de Tráfico, Directiva
2025/2205, art. 95/96 RDL 6/2015; listas de Fuentes al final (créditos,
excluidas por Q4). La página central nueva no tiene foto de portada
("la foto es lane de Niky").

### 4.1 Qué NO cambió en dedupe-8g (verificado por cobertura de ficheros)

Los 10 commits propios tocan solo 20 ficheros: los 11 comparadores de lote 1,
`CochesFicha`, `MotosFicha`, `PatinetesFicha`, `AutocaravanasFicha`,
`CampersFicha`, `FirmaEditorial`, `blog/[slug].tsx`, `blog-posts-db.ts`,
`blog-posts-octubre-2026.ts` y `cambios-blogs-convex.md`. Por tanto, en esta
rama NO hay ningún cambio de:

- Secciones de comparador #5/#9, ni de plantilla de coste (#12) ni de
  mantenimiento (#30): ningún commit toca un componente de esas secciones.
  Las apariciones de "coste"/"mantenimiento" en los parches son campos de datos
  (`costeMensualTotal`, `mantenimientoAnual`) y frases de pros/contras de
  fichas individuales, no texto de plantilla.
- Estructura `<main>` / layout: cero ocurrencias de `<main` en los 10 parches.
- Descripción genérica de plantilla: ningún commit la toca (la única
  coincidencia de "genérica" es texto dentro de un contenido de blog).
- FAQ duplicada de plantilla: ningún commit la aborda como tal.
- **Matiz sobre "promo":** los bloques de tipo promo SÍ se sustituyen en los
  14 blogs (la lista de cambios los enumera como "bloques procedimentales
  comunes (promo, pasos de recurso, plazos genéricos…)"). En cambio, un bloque
  concreto de "promo 1.089 palabras" no es localizable en ningún diff de la
  rama: si se refiere a una página concreta, no está identificado aquí y no se
  da por cambiado ni por intacto.

## 5. borrador-final-2410 @ 9f1b8fec — qué contiene respecto a hubs/guías

El borrador **SÍ integra**:

- **Guías completas:** `c6d753e5` ("guias-404-merlin @617b1567: índice /guias
  con las 9 guías publicadas e ItemList") produce un `src/pages/guias/index.tsx`
  **byte a byte idéntico** al de `guias-404-merlin`; además `src/App.tsx`
  contiene la ruta `GuiasIndexPage` y `scripts/routes.json` contiene `"/guias"`.
  La rama guias-404 está, pues, íntegramente dentro del borrador.
- **Hubs tandas 1–3 (150 claves):** `c881bc01` (tanda 1), `37e4608e` (tanda 2),
  `de1cd758` (tanda 3). 19 descripciones difieren respecto a la cabeza de
  hubs-marca (p. ej. Fiat, Xiaomi, DS, SmartGyro, Zero): en el borrador llevan
  la marca insertada — coherente con los mensajes de integración ("15 metas
  con la marca insertada", "4 metas reescritas"; 15+4 = 19).
- **Otros:** `579c860a` SEO (338 títulos ≤60 y metas ≤155 acortados, 8
  reescritos a mano); `9f1b8fec` generados del build (sitemap 6.009 rutas,
  `ficha-extra`, `audiencia/rivales`, `hub-co
...[truncated 2373 chars]