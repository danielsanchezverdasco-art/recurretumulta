# Ledger de aportaciones — candidato local

Estado del encargo a partir de `9ce92f2e9`. Este fichero es el tablero único de lo revisado y lo pendiente. La clasificación por hash o por conflicto de la matriz no cuenta como revisión semántica. Un medidor en cero de frases nuevas no demuestra que la prosa de la web sea única.

No se ha generado dist, ni prerender, ni prueba de velocidad. Las fotos y las cookies no están cerradas. La web no está completa.

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

A 390, varias fichas de `/autocaravanas/` miden 414 px de scroll frente a 390. El exceso es el carrusel de fotos (figuras en fila con `snap`). No cambia la entidad ni la canónica. La BoxLife en `/campers/` no se sale.

Los cinco slugs que no coincidían letra por letra ya apuntan, en el botón de la ficha, al id real:

- El artículo `carado-t-338-edition27-precio-ficha-tecnica` abre `carado-t-338-2026-precio-ficha-tecnica`. El campo modelo de esa ficha es «T 338 EDITION27» (6,99 m, Transit 165 CV, 69.490 €), el mismo texto del artículo.
- `autostar-passion-p730lc-lift-precio-ficha-tecnica` abre `autostar-passion-p-730-lc-2026-precio-ficha-tecnica`, modelo «Passion P730LC Lift» (7,39 × 2,31 × 2,92 m, Ducato 140 CV, 64.990 €).
- `etrusco-v-5-9-db-precio-ficha-tecnica` abre `etrusco-van-5-9-db-2026-precio-ficha-tecnica`, modelo «V 5.9 DB», tipo camper.
- `campereve-cap-land-precio-ficha-tecnica` abre `campereve-cap-land-51-2026-precio-ficha-tecnica`, modelo «Cap Land». El «51» del id es el frigorífico de la nota de la ficha, no otro modelo. Tipo camper.
- `giottiline-therry-t34-precio-ficha-tecnica` abre `giottiline-therry-34-2026-precio-ficha-tecnica`, modelo «Therry T34».

Los `href=/blog/` que aún usan esos cinco slugs están en «También te puede interesar» y el texto del enlace es el título del artículo. Abren el artículo, no una ficha inventada.

## Pendiente, con referencia

Sigue sin lectura frase a frase el resto de conflictos de texto de autocaravanas (matriz en `/tmp/audit738/grupos.jsonl`, HEAD de aquella pasada `15c4b6b04`). Los módulos `blog-posts-autocaravanas-lote125.ts` y `lote125-g02.ts`, más `blog-data.ts`, siguen protegidos.

Sigue sin lectura frase a frase el resto de conflictos de texto de autocaravanas (matriz en `/tmp/audit738/grupos.jsonl`, HEAD de aquella pasada `15c4b6b04`). Los módulos `blog-posts-autocaravanas-lote125.ts` y `lote125-g02.ts`, más `blog-data.ts`, siguen protegidos.

Otras áreas, sin cerrar:

- Coches: `AREA-COMPARADORES-COCHES-20261107.md` y el residual. Una muestra del residual (Cupra León 1.5 TSI y Sandero TCe 90) ya tiene en la ficha el bloque que el jsonl daba por ausente. No se vuelve a pegar. Las 632 cifras en desacuerdo siguen sin fuente abierta por par.
- Patinetes: Ninebot por código de fábrica, Raptor Dual, K2 a secas y precios solo de retailer. Fotos Cecotec en `LOTE-CECOTEC-P2-20261107.md`.
- 111 portadas de blog revertidas: `BLOG-FOTOS-PORTADA-20261107.md`.
- Dist del candidato: no generado. El dist viejo no corresponde a este HEAD.
