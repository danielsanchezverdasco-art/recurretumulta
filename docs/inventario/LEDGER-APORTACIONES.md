# Ledger de aportaciones — candidato local

Tablero al commit `565c549f1`. La clasificación por hash no es revisión semántica. Cero frases nuevas del medidor incremental no es originalidad absoluta del HTML renderizado.

El dist de `/workspace` (bundle `index-C31lVF6x.js`, HEAD de respaldo `dfddce39c`) no es este candidato. El dist anterior del candidato (`index-C2gPq3-G.js`) está apartado en `dist-checkpoint-C2gPq3-G`. El build local de este HEAD escribe en `dist/`. No hay listado nuevo de Netlify: sin token no se afirma cuántas reglas tiene el deploy.

Las 616 cifras en las que la rama difiere del candidato **no están resueltas**. Se conserva el número del candidato porque no hay fuente nueva. Quedan **no verificadas**.

## Por área

- **Autocaravanas, texto.** Integrado con fuente: Sky TI 650 MEG (Preisliste 2026-1: 82.930 € IVA alemán, 2 plazas de noche, 2.958 kg) y Lyseo TD 690 G (82.530 CHF fuera del campo en euros; 80.750 € no es tarifa). Merlín 1 alineado donde la ficha y la fuente coincidían. Merlín 2, 4 y 5 leídos en cifras, enlaces, fotos y estructura: la reescritura del 24/10 está absorbida (más corta, sin fotos nuevas). Pendiente: el resto de conflictos de texto de la matriz `/tmp/audit738/grupos.jsonl` (HEAD de aquella pasada `15c4b6b04`), no leídos frase a frase.
- **Enlaces de ficha.** Integrado y comprobado tras hidratar en las 124 URLs, a 390 y 1366: H1, canónica y destino. Los cinco slugs de nombre distinto apuntan al id real del mismo modelo.
- **Carrusel.** Integrado en `6b6202d77`. La diapositiva cabe en el carrusel y se desplaza. El desborde de 24 px a 390 era la URL larga de curiosidades y la fila de pestañas, no un recorte de fotos. Comprobado en las 124 fichas a 390 y 1366: documento sin scroll horizontal, foto visible y no es logo, carrusel desplazable, contador, ampliar y flecha a 1366.
- **Coches, bloques.** 34 de 126 absorbidos (el id ya los tiene). 92 no integrados: programa de marca o Euro NCAP sin ficha de resultado leída. Registro: `BLOQUES-COCHES-126-20261107.jsonl`. Estado: no verificado en la página del modelo, no resuelto.
- **Coches, cifras.** 616 diferencias de rama contra el campo vivo, sin fuente. No verificadas. 16 filas del jsonl guardaban una frase en vez del campo; el valor vivo ya es el de la ficha.
- **Grecale.** Doce reglas `301!` del snapshot histórico siguen sin copiarse. Las tres fichas dedicadas contradicen al padre. Conflicto abierto en `PROPUESTA-REDIRECTS-GRECALE.md`. No se anuncia que el deploy tenga cero reglas de más: no hay listado completo de Netlify.
- **Patinetes y Cecotec.** Integrado lo que tenía fila DGT o precio de tienda con IVA fechado. Pendiente: Ninebot por código de fábrica, Raptor Dual, K2 a secas, precios solo de retailer, fotos Cecotec sin licencia (`LOTE-CECOTEC-P2-20261107.md`).
- **Fotos de blog.** 111 portadas revertidas por licencia desconocida o modelo que no coincide. Pendiente. Siete con licencia abierta se conservaron.
- **Protegidos.** Sin autorización y sin edición: `blog-data.ts` `9a1a70586dd08dc60369d924527f3b45630dce8c`, `blog-posts-autocaravanas-lote125-g02.ts` `771edad218688daf83646811cea25d05648f4bf5`, `blog-posts-autocaravanas-lote125.ts` `d468ba84640ff13b32b857bc11eda28c59dda0fc`.
- **Sitemap.** El `build:full` de `9c87e368c` dejaba 257 URLs del vivo fuera del sitemap: `postfix-r24.py` escribía `noindex` desde `noindex-calidad-p2.txt` y `sitemap-final.py` las excluía. Esa lista no autoriza el noindex. Corregido en `fc30c3b75`: `postfix-r24.py` ya no lo aplica, `gen-marcas.py` ya no marca noindex las fichas pobres, y `politica-noindex.py` corre justo antes de `sitemap-final.py`, como en el dist `C31lVF6x`. Dist corregido (bundle `index-DBOc1334.js`): sitemap 6368, las 6209 del vivo dentro, canónica propia, robots index salvo los servicios de `noindex-permitidos.txt`. Cero 301 nuevos respecto a `public/_redirects`. Los ocho blog→ficha de Grecale son los del histórico y apuntan a la ficha dedicada. Las doce que funden Folgore, Modena y Trofeo en el padre siguen sin restaurar. El dist con la regresión está en `dist-9c87-antes-seo`. El de 6368 intermedio, en `dist-seo-6368`.
- **Prosa repetida.** El ensayo «Los datos salen de la web oficial…» ya no está en ningún HTML (antes, 1960 fichas). Si la ficha nombra fuente y modelo, la frase cita esos dos datos. Si no, queda el enlace a `/politica-editorial/`. El pie del blog ya no dice que todo artículo se contrastó con el BOE y la DGT. Cada listado de marca nombra la marca. Tras hidratar, a 390 y 1366, Toyota, BoxLife, Itineo PF600, Aptera y Ceuta conservan canónica propia, index y el documento sin scroll horizontal. Quedan 153 párrafos de 160 caracteres o más repetidos entre URLs del sitemap: son bloques de normativa VMP, preguntas de multas y notas de foto dentro del cuerpo de los artículos. No se han rellenado con sinónimos. El medidor en `565c549f1` sigue en ACUMULADO 0; el total web sigue en 363757 y no es unicidad absoluta.
- **Fotos.** 123 fichas siguen con `data-foto-pendiente` y 111 portadas de blog siguen revertidas. Hay archivos en `public/media` con el slug de esas 123, pero la licencia no está publicada y no se usan como permiso. No se dan por resueltas por quitar la imagen.
- **Dist de este HEAD.** Build local `npm run build:full` con exit 0. Prerender 10706 rutas, 0 fallos, más 208 páginas de marca. Cookies locales del build anterior no se han vuelto a medir en este bundle; el aviso no ha cambiado de código. No es un CMP certificado. El tiempo de carga no se ha medido en este dist y no hay PageSpeed publicado. La web no está cerrada.

## Integrado en este lote (enlaces de ficha)

Las ramas de Merlín 2, 4 y 5 no aportan cifras, fotos ni fuentes que el candidato no tenga ya. La reescritura del 24/10 (`005336de7`, `b5b17242a`, `fa3f35299`) es más corta, no trae números nuevos (salvo el 81.000 € del Sky TI, ya descartado con la Preisliste) y le faltan fotos y el enlace al analizador. No se sustituye el texto.

Lo que sí fallaba: el rótulo «ver la ficha» apuntaba al propio artículo. Se corrige solo cuando el id existe en el catálogo:

- Merlín 1 a 5: la camper va a `/campers/<id>/` y el resto a `/autocaravanas/<id>/`. Rapido V55 y Font Vendôme Mondéa, que iban a `/coches/`, pasan a `/campers/` en ese rótulo. La URL `/coches/` sigue existiendo; no se borra.
- `blog-posts-autocaravanas-lote3.ts` y `lote4.ts`: el mismo rótulo, si el título dice 2026 y el id con `-2026-` existe, apunta a esa ficha. 129 enlaces en el lote 3 y 125 en el lote 4. Las campers que estaban en `/autocaravanas/` pasan a `/campers/` (39 y 34).

Comparaciones entre artículos que enlazan el nombre del modelo siguen en `/blog/` o en `/coches/` cuando ya apuntaban a una URL viva. No se ha añadido noindex ni redirección.

## Revisado y no copiado

- Ramas `noindex-merlin-50-01` y equivalentes: no añaden el rótulo noindex dentro del fichero y quitan enlaces. No se aplican.
- `fixes-enlaces-blog-niki` de Merlín 4 y 5: trae menos artículos. No se recorta el módulo.
- Fotos de `merlin-fotos-blogs-1105`: el conjunto de imágenes del candidato ya coincide.
- Itineo PF600: la ficha guarda 3.500 kg de concesionario y el artículo no lo da por MMA de fábrica. Se deja así.

## Enlaces comprobados el 7/11/2026, sobre 365acad35

El router usa el `id` como slug. `CampersFicha` solo encuentra `AUTOCARAVANAS` con `tipo === "camper"` y pone la canónica en `/campers/<id>/`. `AutocaravanasFicha` encuentra el resto y pone la canónica en `/autocaravanas/<id>/`. El H1 es `marca` + `modelo`. No se ha creado ninguna ruta ni redirección.

Del commit salen 409 anclas cambiadas y 124 destinos distintos. Cada destino se abrió en el Vite local del candidato (`127.0.0.1:5173`, no el preview del dist viejo), después de hidratar, a 1366 y a 390. En los 124, a las dos anchuras, el H1 coincide con la ficha deduplicada, la canónica es la ruta del enlace, el título no está vacío y no hay `noindex`. Ninguno cae en «Modelo no encontrado» ni vuelve al artículo.

Clics desde el artículo, a 1366 y a 390: BoxLife abre Knaus BoxLife 600 MQ en `/campers/`; Itineo PF600, Carado T 338 EDITION27, Giottiline Therry T34 y Autostar Passion P730LC Lift abren su ficha en `/autocaravanas/`; Cap Land y Etrusco V 5.9 DB abren la suya en `/campers/`. El H1 de llegada es el modelo, no el título del artículo.

A 390 el documento medía 414 px. El carrusel ya se desplazaba dentro de su caja. Lo que sobraba era una URL larga en curiosidades y la pestaña FAQ. Eso se corrigió en `6b6202d77` sin ocultar fotos.

Los cinco slugs que no coincidían letra por letra ya apuntan, en el botón de la ficha, al id real:

- El artículo `carado-t-338-edition27-precio-ficha-tecnica` abre `carado-t-338-2026-precio-ficha-tecnica`. El campo modelo de esa ficha es «T 338 EDITION27» (6,99 m, Transit 165 CV, 69.490 €), el mismo texto del artículo.
- `autostar-passion-p730lc-lift-precio-ficha-tecnica` abre `autostar-passion-p-730-lc-2026-precio-ficha-tecnica`, modelo «Passion P730LC Lift» (7,39 × 2,31 × 2,92 m, Ducato 140 CV, 64.990 €).
- `etrusco-v-5-9-db-precio-ficha-tecnica` abre `etrusco-van-5-9-db-2026-precio-ficha-tecnica`, modelo «V 5.9 DB», tipo camper.
- `campereve-cap-land-precio-ficha-tecnica` abre `campereve-cap-land-51-2026-precio-ficha-tecnica`, modelo «Cap Land». El «51» del id es el frigorífico de la nota de la ficha, no otro modelo. Tipo camper.
- `giottiline-therry-t34-precio-ficha-tecnica` abre `giottiline-therry-34-2026-precio-ficha-tecnica`, modelo «Therry T34».

Los `href=/blog/` que aún usan esos cinco slugs están en «También te puede interesar» y el texto del enlace es el título del artículo. Abren el artículo, no una ficha inventada.

## Carrusel, comprobado en las 124 fichas

En `6b6202d77` cada diapositiva mide el ancho del carrusel y se desplaza dentro. Las pestañas quedan en una tira con scroll. Las URLs largas de la ficha parten. Tras hidratar, las 124 fichas a 1366 y a 390 no ensanchan el documento, la primera foto se ve y no es un logo, el carrusel se desplaza si hay más de una, hay contador y botón de ampliar, y a 1366 se ve la flecha siguiente.

## Pendiente, con referencia

Sigue sin lectura frase a frase el resto de conflictos de texto de autocaravanas (matriz en `/tmp/audit738/grupos.jsonl`, HEAD de aquella pasada `15c4b6b04`). Los módulos `blog-posts-autocaravanas-lote125.ts` y `lote125-g02.ts`, más `blog-data.ts`, siguen protegidos.

Otras áreas, sin cerrar:

- Coches, revisado de nuevo contra el candidato actual (no contra el jsonl viejo). De los 126 bloques, 34 ya están en el id (`docs/inventario/BLOQUES-COCHES-126-20261107.jsonl`, estado `absorbido`, con ruta y bloque). Los otros 92 no se integran: el plan cita un programa de marca, no una página de ese modelo, o la nota de Euro NCAP no trae la ficha de resultado. De las 632 cifras, 616 siguen con el número del candidato y la rama trae otro, sin fuente nueva. Las 16 restantes eran un falso «candidato» (el json había guardado una frase, no el campo); el campo vivo ya es el de la ficha.
- Patinetes: Ninebot por código de fábrica, Raptor Dual, K2 a secas y precios solo de retailer. Fotos Cecotec en `LOTE-CECOTEC-P2-20261107.md`.
- 111 portadas de blog revertidas: `BLOG-FOTOS-PORTADA-20261107.md`.
- Dist del candidato: no generado. El dist viejo no corresponde a este HEAD.
