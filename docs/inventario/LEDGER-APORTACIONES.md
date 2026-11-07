# Ledger de aportaciones — candidato local

Tablero al commit `73da762b7`, más el arreglo de rutas `/coches`, `/motos` y `/patinetes` en `scripts/routes.json` para que el prerender no las pierda. La clasificación por hash no es revisión semántica. Cero frases nuevas del medidor incremental no es originalidad absoluta del HTML renderizado.

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
- **Dist de este HEAD.** Build local terminado (exit 0). Bundle `index-KJM3GrlK.js` y `index-30iBjXX_.css`. Prerender: 10706 rutas, 0 fallos. Sitemap final: 6111 URLs autocanónicas e indexables, tras generar las 208 páginas de marca. Las 6209 del vivo tienen HTML. 257 no entran en el sitemap porque ya estaban en `scripts/noindex-calidad-p2.txt` (no es un noindex nuevo inventado aquí). Las doce reglas que funden las tres Grecale en el padre no están. Hay ocho 301 de blog hacia la ficha dedicada, así que esas fichas siguen alcanzables. 123 fichas siguen sin foto real (`data-foto-pendiente`); quitar la imagen no las da por resueltas. En el HTML, 106 párrafos largos se repiten entre URLs distintas (el aviso «Cómo verificamos» sale en 1960 autocaravanas). Eso es duplicado absoluto de plantilla, aparte del medidor incremental. Cookies locales: rechazar, preferencias (analítica sí, anuncios no) y la elección persisten en `rtm_consent_v1`. No es un CMP certificado ni un cumplimiento de AdSense. El tiempo de carga medido es local (unos 40–200 ms hasta el DOM en el preview); no hay PageSpeed publicado. La web no está cerrada.

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
