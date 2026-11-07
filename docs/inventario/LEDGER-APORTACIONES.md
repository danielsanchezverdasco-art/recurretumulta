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

## Pendiente, con referencia

Estos rótulos de ficha siguen en `/blog/` porque no hay un id igual:

- `carado-t-338-edition27-precio-ficha-tecnica` (lote 3). Existe `carado-t-338-2026-precio-ficha-tecnica`, que es otro nombre.
- `autostar-passion-p730lc-lift-precio-ficha-tecnica` (lotes 3 y 4). Sin id.
- `etrusco-v-5-9-db-precio-ficha-tecnica` (lote 3). Sin id.
- `campereve-cap-land-precio-ficha-tecnica` (lotes 3 y 4). Existe `campereve-cap-land-51-2026-precio-ficha-tecnica`, no es el mismo slug.
- `giottiline-therry-t34-precio-ficha-tecnica` (lote 4). Existe `giottiline-therry-34-2026-precio-ficha-tecnica`, no es el mismo slug.

Sigue sin lectura frase a frase el resto de conflictos de texto de autocaravanas (matriz en `/tmp/audit738/grupos.jsonl`, HEAD de aquella pasada `15c4b6b04`). Los módulos `blog-posts-autocaravanas-lote125.ts` y `lote125-g02.ts`, más `blog-data.ts`, siguen protegidos.

Otras áreas, sin cerrar:

- Coches: `AREA-COMPARADORES-COCHES-20261107.md` y el residual.
- Patinetes: Ninebot por código de fábrica, Raptor Dual, K2 a secas y precios solo de retailer. Fotos Cecotec en `LOTE-CECOTEC-P2-20261107.md`.
- 111 portadas de blog revertidas: `BLOG-FOTOS-PORTADA-20261107.md`.
- Dist del candidato: no generado. El dist viejo no corresponde a este HEAD.
