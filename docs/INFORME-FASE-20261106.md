# Informe de la fase del 6/11/2026

No se ha publicado nada. No hay deploy ni preview de Netlify. No se ha hecho merge a `main`. Los commits llevan `[skip ci]`.

Base: `subida-acumulada-1105` @ `7e5d3af7`. Rama de esta fase: `cursor/integracion-prerender-1106-31ef`. Producción, según el inventario del repo, sigue en el deploy `6aea45eee2a35e4680c06125` del 3/11 (commit `3e93e630`). No se ha tocado.

## Qué se recuperó

Inventario de **894** ramas remotas por contenido (blob), no solo por ancestría. Matriz en `docs/inventario/matriz-ramas.csv`. Ficheros que alguna rama tiene y HEAD no: `docs/inventario/ficheros-ausentes.csv` (7.464). Resumen: `docs/inventario/CLASIFICACION.md`.

| Estado | Ramas |
|---|---:|
| Ya en el historial de HEAD | 146 |
| Mismo contenido aunque no sea ancestro | 1 |
| Cabeza de la subida acumulada | 1 |
| Solo ficheros nuevos | 8 |
| Algún blob distinto | 738 |

En el árbol sí entró, sin fusión ciega (`scripts/recuperar-entregas.py`, merge a tres bandas; si hay conflicto no se toca):

- 535 markdown de radar que ya tenían slug y no estaban en el árbol, y el `indice.json` de 961 fichas (los 426 de HEAD coincidían byte a byte con ese índice; se añadieron las 535 que faltaban, no se reescribió ninguna).
- Entregas del 5 y 6/11 que faltaban como fichero: blogs y fotos de Diavel V4 S, Omoda 9 Black Edition y Omoda 5 EV, Renault 4 e-Tech, Yangwang U9 Xtreme, Mazda6e y Corvette, y el RD 953/2026 de ZBE. CSV de SEO y de fuentes de patinetes (las 301 de esos CSV no se han aplicado).
- 43 merges limpios de esas entregas (precios, FAQ donde no chocaba, línea DART en cookies, textos de radares y guías). 182 ficheros de las mismas ramas ya quedaban igual que HEAD.
- 240 fotos citadas por el código y ausentes en disco, copiadas de la rama que las tenía. 55 placeholders (md5 de `scripts/placeholder-md5.txt`) no se copiaron. 294 citas no existen en ninguna rama.

El plan sigue siendo uno: **7,99 € al año**, y el cliente envía el recurso. Está en `src/pages/Terminos.tsx`. No se ha vuelto a los 4,99 € ni se ha quitado el nombre editorial.

`scripts/copy-radares.mjs` ya existía y el comentario decía que formaba parte de `npm run build`, pero no estaba en el script. Ahora sí: sin esa copia, `/docs/radares/indice.json` no llega a `dist` y todas las fichas de radar salen «datos no disponibles».

## Qué no se integró, y por qué

- **573 conflictos** de merge (muestra en `docs/inventario/conflictos-no-aplicados.txt`). La mayoría son fotos binarias de `merlin-fotos-blogs-1105`: se conserva la de HEAD.
- `index.html` del banner de consentimiento: Funding Choices ya está. La rama volvería a meter el JSON-LD `SoftwareApplication` que la subida acumulada quitó.
- Fichas Grecale y fotos Benelli: ya estaban. No se borran los 301 que HEAD tiene y esa rama, basada en main, no conoce.
- Privacidad y Sobre nosotros de la rama AdSense del 5/11 son el texto de main, anterior al plan anual. El merge deja el texto nuevo.
- Seal U a 28.690 € / 32.940 € con condiciones: ya estaba.
- Censo `niky-adsense-2610`: logs, no páginas.
- Módulos sueltos de historia y EuroNCAP de octubre: no están importados. Un spread pisaría fichas más nuevas.
- **29 lotes de blog de octubre** (patinetes, motos y coches por tandas) se copiaron y se quitaron: `rev3b` les contaba miles de frases de 8 palabras ya repetidas. No son texto propio.
- **Autocaravanas del 19/10** (unos 100 módulos): no compilan (cabeceras `] = [`, comas dobles, tipos que no cuadran). No se dejan en el árbol.

`tools/publicar/no-tocar.txt` no se ha editado. Frente a `main`, 63 ficheros de esa lista ya difieren (la subida acumulada más unos merges de esta fase). Lista: `docs/inventario/excepciones-no-tocar.txt`. El publicador abortará hasta que Daniel acepte la excepción. No es un permiso para saltarse la lista.

## Relevo de Ana, consumido (6/11, 21:04)

Verificado en remoto, no de oídas:

- `origin/subida-acumulada-1105` = `9cf8ef85bfaa2f8864d58b13ca3a641812376029`, padre `7e5d3af7`, fast-forward. Mensaje: reescritura rev3 a 0, meta Publisuites, 44 `<img>`, codegen. 147 ficheros, +1.181/−7.455.
- `origin/completar-fichas` = `055e9c888` (21:04). La nota está al final de `docs/comunicacion-ias/merlin.md` («RELEVO ENTREGADO»). Dice 306 HTML completos y 5.843 pendientes de 6.149, bundle de su VM `index-CCSID4JO.js`, y manda recomputar con `node .deploy-work/rutas-restantes.mjs`.

Ese commit es ancestro de esta rama (merge `2d17e24f2`). No se ha perdido: la meta `publisuites-verify-code` está en `index.html`, el plan 7,99 € sigue en términos, la línea DART sigue en cookies, el índice de radares sigue en 961 y el blog del Diavel sigue. En el solape (10 ficheros, sobre todo generados y `blog-posts-prioridad-20261014.ts`) ganó su texto. `no-tocar.txt` trae su excepción, con la cita de Daniel del 5/11 a las 14:32 («Sí, permite esos 52 cambios y publica todo»): quita 60 rutas de la lista y deja el resto protegido. No es un borrado mío para saltarme el candado; queda escrito en el fichero.

Lo que la nota describe y **no está en git** (está en su VM): `dist/` de 5,5 GB, `.deploy-work/rutas-prerender.txt`, `rutas-restantes.mjs` (el fichero de restantes lo dejó a 0 bytes), `prerender-static-server.mjs`, `apartar-html-vivo.py` y los logs de `~/workspace/dryrun-logs/`. Sin ese `dist` y sin el bundle `index-CCSID4JO.js` no se pueden reutilizar las 306 páginas. Generar aquí produce otro bundle. El criterio estricto de esta fase (canonical + bundle de ESTE build + sin «Radar no encontrado») es el sustituto, y `PRERENDER_SKIP_COMPLETE=1` evita repetir lo ya válido contra ese bundle.

`rev3b` de esta rama contra `9cf8ef85`: **1.017** frases nuevas, casi todas de las entregas del 5-6/11 que ella no traía (radares, provincias, Yangwang). Su árbol solo, el que ella midió, no lo he vuelto a medir aquí; el commit dice 0 y el diff desde `7e5d3af7` es esa reescritura. Publicar el conjunto (su texto más estas entregas) no pasa el candado en 0.

## Ana, 6/11 por la noche (nota previa, antes del push)

Consulta a `origin/completar-fichas` @ `8b58922f7`. Lo que hay es la Nota 226 de Niky: acusa el relevo de las 20:20, no publica y no toca main. En `grok.md` está el aviso pidiendo a Ana el checkpoint del intento 5/5b. En esos fetch no había nota suya con rutas, script ni rama de dist, ni una rama nueva de prerender.

Cifra que sustituye a la anterior de 429/5846: **306 HTML completos con el criterio estricto y 5.843 pendientes**, sobre el bundle de su VM `index-CCSID4JO.js`. Ese `dist` no está en git. El intento 6 no se ha publicado.

## Prerender

El criterio de «hecho» está en `scripts/prerender-check.mjs` y lo usan `prerender.mjs` y `prerender-resume.mjs`. Una ruta no cuenta si el HTML es corto, no cierra, el canonical no es el de esa ruta, queda el spinner, el título es el del shell, pone «Algo salió mal» o «Radar no encontrado», o cita un `/assets/index-*.js` que no está en este build. El manifiesto es `scripts/.safe-publish/prerender-manifest.jsonl` (ruta, sha256, bytes, assets). No está en git: crece durante la tanda.

Se dejó `networkidle` (se colgaba esperando fotos). Ahora espera a que React haya pintado la ruta. Las imágenes no se descargan en la captura: `__PRERENDER__` ya impide hornear el logo de respaldo.

Comando de reanudación, después de `npm run build`:

```bash
node -e '/* regenerar /tmp/all-routes.txt como en esta fase, o usar prerender-resume.mjs */'
PRERENDER_ONLY_FILE=/tmp/all-routes.txt PRERENDER_SKIP_COMPLETE=1 PRERENDER_CONCURRENCY=6 node scripts/prerender.mjs
```

`PRERENDER_SKIP_COMPLETE=1` no repite una ruta cuyo HTML ya cumple el criterio contra el bundle actual. Hay **10.528** rutas únicas.

Tanda terminada el 6/11 sobre `index-C6305X3a.js`: **10.528 ok, 0 fallos** (`EXIT:0` en `/tmp/prerender-full.log`). En disco hay 10.528 `index.html`. El manifiesto (`scripts/.safe-publish/prerender-manifest.jsonl`, 3,7 MB, fuera de git) tiene 10.274 líneas, todas con ese bundle; las otras ~254 ya estaban escritas y se saltaron al reanudar, sin volver a apuntarse. 3.022 de esas líneas declaran la canonical de otra URL (el post apunta a su ficha): el título no es el del shell y el HTML es el de la página.

Build comprobado tras el merge, el 6/11: `VITE_CONVEX_URL` igual a la URL regional ya escrita en `scripts/check-convex-url.mjs` (no es un secreto), `npm run build`, exit 0. Bundle `dist/assets/index-C6305X3a.js` y CSS `index-j8-WhpSD.css`. El índice de radares en `dist` tiene 961 fichas. Muestra prerenderizada contra ese bundle, 5/5 válidas: portada, términos (sale «7,99»), cookies (sale «cookie DART»), blog del Diavel y radar A-1 pk 125,5 (ya no dice «no encontrado»). Pillow 12.3.0 hizo falta para `scripts/gen-cards.py`. No hace falta token de Netlify ni de Cloudflare en esta fase.

`dist/` no se sube a git.

## rev3b

No es 0. No se afirma lo contrario.

- Frente a `main` (lo que está vivo): el acumulado ya arrastra del orden de **80.000** frases de 8 palabras nuevas. Eso viene sobre todo de la subida acumulada, no de esta fase.
- Frente a `7e5d3af` (la base de esta fase), tras quitar los lotes plantilla: **1.036** frases nuevas en 50 ficheros. Las más grandes son los radares nuevos (el post comparte frases con otras páginas) y datos de provincias. Detalle: salida de `tools/publicar/rev3b.py` contra esa base. Publicar con el candado actual abortaría aquí.

## Pruebas en local (muestra, no el sitio entero)

Servidor estático de `dist` en el puerto 8099. Playwright, 390 px y 1366 px, sobre home, cookies, contacto, el blog del Diavel, la ficha Grecale Folgore, un radar y privacidad:

- HTTP 200, un h1, sin «Algo salió mal».
- Cookies contiene la línea DART.
- El radar A-1 pk 14,56 (Alcobendas) deja de decir «no encontrado» cuando el índice tiene las 961 fichas.
- Scroll horizontal 0 en todas menos el radar a 390 px, que se pasa **53 px**. `RadarPage.tsx` está en `no-tocar.txt` y no se ha tocado. En escritorio ese desborde es 0.

`chequeo_img_dist.py dist` sobre las 10.528 páginas: **no está limpio**. 0 `data-fb`, 0 imágenes con el PNG genérico, galerías G9 completas (6 y 4). Fallan 3 rankings con `<img>` sin `src`: `mejores-electricos-baratos-2026` (6), `suv-electricos-mas-autonomia-2026` (21) y `mejores-hibridos-2026` (53). Aviso, no bloqueante del script: 18 de 4.515 tarjetas de blog sin foto y 1 `heroSrc` ausente (`/media/xpeng-mona-l05-2026-precio-ficha-tecnica-hero.webp`). `validar-dist-publicable.py` no se ha dado por verde.

## Bloqueos para la publicación única

1. rev3b no está en 0.
2. `chequeo_img_dist.py` no está a 0: 80 `<img>` sin `src` en 3 rankings. Las 306 HTML de Ana no están en el remoto; esta tanda es otra, con bundle `index-C6305X3a.js`.
3. 63 excepciones de `no-tocar.txt` frente a main, sin editar la lista.
4. 294 imágenes citadas sin blob en ninguna rama, y 55 placeholders no copiados.
5. Ana no había subido aún el checkpoint al remoto en el último fetch. Si llega, hay que comparar el bundle antes de reutilizar un solo HTML.

No se afirma que AdSense esté aprobado. No se promete que el sitio quede perfecto.

## Estado al cerrar esta pasada (6/11, noche)

Sigue sin publicarse. Bundle de esta pasada: `dist/assets/index-CIDNxUOl.js` y `index-D0IT8CSm.css`. `9cf8ef85` sigue siendo ancestro. `dist/` no entra en git.

### Lo que ya no falla

- Rankings. Las tres páginas (`mejores-electricos-baratos-2026`, `mejores-hibridos-2026`, `suv-electricos-mas-autonomia-2026`) ya no pintan `<img>` si `imagenOficial` no es una ruta `/media/`. `chequeo_img_dist.py` sobre el `dist` postprocesado: **0** `data-fb`, **0** `<img>` sin `src`, **0** logo como foto. Galerías G9, 6 y 4. En el HTML estático, a 390 px, el ranking de híbridos tiene 694 imágenes y ninguna sin `src`.
- Radar. El desborde de 53 px a 390 px venía de un identificador y de la URL del XML de la DGT dentro de `.prose`, en `RadarPage.tsx`, que sigue en `no-tocar.txt` y no se ha editado. El corte está en `src/index.css` (`.prose :where(code, a, li, p)` con `overflow-wrap: anywhere`). Medido en el HTML estático de `/radares/a-1-14-56-creciente-cabina/`: scroll menos client = **0** a 390 px y a 1366 px.
- `validar-dist-publicable.py`: 7.714 páginas, **0 bloqueantes** indexables, 0 avisos de noindex. El único bloqueo que salió (`/comparador-patinetes/`, texto «Foto pendiente») se quitó del componente y del HTML ya generado. Queda la inicial de la marca, sin frase de relleno. 18 rutas `/media` citadas y ausentes de `dist` (aviso, no bloqueo).
- Prerender: **10.528** rutas, manifiesto `scripts/.safe-publish/prerender-manifest.jsonl` con 10.528 líneas, todas con `index-CIDNxUOl.js`. Una ruta (`/patinetes/ienyrid-m4-pro-s-plus`) salió `editorial_cargando` y se repitió sola: ok. El postproceso `adsense-dist.py` (fase blog) borra el HTML de los posts cuyo slug ya es una ficha y que ya tienen 301. 2.974 de esos borrados ya estaban en `_redirects`. **51** no tenían regla: se volvió a generar su HTML y no se ha creado ningún 301 nuevo. `public/_redirects` no ha cambiado (9.537 reglas).

### rev3b del conjunto integrado

Contra `9cf8ef85`, en el commit de esta pasada: **524** frases de 8 palabras nuevas y repetidas. Partía de 1.017. No es 0. No se ha movido la base ni se ha tocado el medidor. Se han reescrito las frases que de verdad se repetían (cierres de los radares del 5-6/11, preguntas que copiaban el cuerpo, Barcelona/Huesca, el orden duplicado de `RadaresIndex.tsx`). Siguen compartiendo ventanas de 8 palabras los posts largos con fichas y comparadores ya existentes (cifras de récord, plazos del RDL 6/2015, precios de tarifa). No se han cambiado las cifras para disimularlo.

### Fotos

Se recuperaron de git 60 rutas citadas. Las 55 que salieron son placeholders (md5 de `scripts/placeholder-md5.txt`) y se han borrado, no se commitean. Quedan **328** rutas `/media/` citadas en `src` que no están en ninguna rama. Lista: `docs/inventario/fotos-no-recuperables.txt`. No hay foto de IA, ni logo, ni foto de otro modelo puesta como oficial. El aviso del chequeo sigue: 18 de 4.515 tarjetas de blog sin foto y el hero `/media/xpeng-mona-l05-2026-precio-ficha-tecnica-hero.webp`, que está en esa lista.

### 10.528, el sitemap de 6.209 y las 306+5.843

No son el mismo censo y no se han creado páginas para igualarlos.

- **10.528** es el conjunto único de `scripts/routes.json`: 68 estáticas (69 líneas, `comparador-motos` repetida), 54 `/multas/` + 54 `/provincias/`, 19 comunidades y los ficheros de slugs (blog 5.373, coches 2.553, motos 1.525, patinetes 651, radares 961, y el resto). La suma bruta es 11.481; el `Set` deja 10.528.
- **6.209** es el `sitemap.xml` que sirve ahora mismo `https://recurretumulta.online/sitemap.xml` (medido el 6/11, HTTP 200). El de `main` en `3e93e630` tiene 6.021 `<loc>`. El de esta rama, en `public/sitemap.xml`, tiene 5.085. No se ha reescrito.
- Tras el postproceso, `dist/sitemap.xml` queda en **5.815** URLs autocanónicas (`sitemap-final.py`: 375 noindex y 1.524 redirigidas con `301!` fuera; los posts cuyo canonical es la ficha no entran). No se han tocado los canonicals de las fichas para forzar la cifra.
- **306 + 5.843 = 6.149** es la lista de prerender de Ana en su máquina, contra el bundle `index-CCSID4JO.js`, que no está en git. No es un inventario de páginas de este repositorio. Esas 306 HTML no se han reutilizado.

### Cadena

`npm run build` exit 0. Prerender 10.528 ok. Después, en `dist` y sin deploy: `gen-hero-variantes`, `gen-hubs`, `seo-dist`, `gen-marcas`, `apply-seo`, `fix-jsonld-fichas`, `fix-jsonld-global`, `adsense-dist` (blog y noindex), `postfix-dist`, `postfix-vacios`, `fix-redirects`, `fix-chains`, `postproceso-seo-20261019`, `postfix-foto-pendiente`, `sitemap-final`. Los generadores que reescribieron `src/lib/hub-*.json` y `blog-lite` se revirtieron: si no, el fuente dejaba de coincidir con el bundle ya prerenderizado. `adsense-dist` noindex marca el juego de los monos (ya previsto) y 32 fichas con nota 0,0 o datos vacíos; no se ha añadido otra excepción a mano.

### Sigue abierto

1. **rev3b = 524**, no 0. Con el candado actual no se publica.
2. **328 fotos** citadas y no recuperables, listadas. El diseño no muestra la imagen rota; no hay sustituto inventado.
3. El trozo `ComparadorPatinetes-B9tPrz40.js` se parcheó en `dist` para quitar «Foto pendiente» sin cambiar el nombre del bundle. El fuente ya no tiene esa frase. Un `npm run build` posterior cambiará el hash y habrá que prerenderizar otra vez.

No se declara la fase terminada.

## Pasada de sitemap y frases (6/11, noche)

`rev3b` contra `9cf8ef85` baja de 524 a **201**. No es 0. El medidor y la base no se han tocado. Siguen siendo frases de los radares del 5-6/11, de Yangwang, de los duelos y de plazos del RDL que comparten ventana de 8 palabras con una ficha o una guía ya publicada. No se han cambiado cifras.

El sitemap ya no pierde URLs del vivo. El `dist/sitemap.xml` de esta pasada tiene **6.316** URLs. Las **6.209** del sitemap en vivo están todas. Las 107 de más son páginas de esta rama con canonical propio. Inventario URL a URL: `docs/inventario/sitemap-diff-20261106.md`. La caída anterior a 5.815 venía de tres sitios, y se ha deshecho sin inventar páginas:

- 369 URLs con canonical propio a las que el postproceso les ponía `noindex`. La lista de React está vacía desde el 31/10. `adsense-dist.py` y `postfix-vacios.py` ya no aplican ese noindex a una URL del sitemap vivo.
- 128 fichas de autocaravana cuyo dato seguía en el fuente y cuyo slug se había quitado de `scripts/slugs-autocaravanas.txt`. El slug vuelve.
- 3 fichas Zontes que ya estaban en el comparador y no en `scripts/motos-slugs.txt`. El slug vuelve.
- 24 coches que seguían con `noindex` en el HTML y canonical propio: se les devuelve `index, follow`, que es lo que pinta React al arrancar.
- `/blog/font-vendome-mondea-2026-precio-ficha-tecnica/` se había borrado al coincidir el slug con una ficha. La página del blog vuelve a existir. No se ha creado un 301 nuevo.

Prerender de **10.690** rutas del bundle `index-CLxKXQdq.js`, 0 fallos, más las 3 Zontes. Manifiesto de 10.693 líneas, todas con ese JS. `chequeo_img_dist.py` a 0. `validar-dist-publicable.py` a 0 bloqueantes. Ninguna de las 328 rutas de foto ausente queda como `<img src>` en el HTML. La galería de motos y `DriveInImage` no las pintan, así que la hidratación no las repone.

La fase no se cierra en ese momento: quedan 201 frases.

## Cierre de frases y dist del bundle nuevo (7/11)

`rev3b` contra `9cf8ef85`, leído de git y no del árbol de trabajo: **0**. El medidor y la base no se han tocado. Las últimas cinco ventanas estaban en el enlace repetido de `src/lib/blog-posts-motos-exp-m12.ts` («con galería de fotos: ficha y fotos»). El enlace y el nombre del modelo se quedan; se quita la cola compartida.

Ese texto entra en un build nuevo. `npm run build` con la URL regional ya escrita en `scripts/check-convex-url.mjs` sale 0. Bundle `dist/assets/index-C31lVF6x.js`, CSS `index-eSpRw-t6.css`. Prerender de las **10.693** rutas del listado: **10.693 ok, 0 fallos**. Manifiesto `scripts/.safe-publish/prerender-manifest.jsonl`, una línea por ruta, todas con ese JS.

La cadena es `scripts/cadena-dist.sh`. Al final `politica-noindex.py` deja noindex solo en la lista permitida (el juego de los monos y las bajas). `sitemap-final.py` da **6.367** URLs. Las **6.209** del vivo están. Contra el sitemap de 6.316 del bundle anterior no se pierde ninguna URL: se suman 50 posts que la fase blog había borrado sin 301 previo en `public/_redirects`, y la ficha Benelli TRK 800 2026. Esos 51 HTML se vuelven a generar. No hay 301 nuevo. `public/_redirects` no cambia de hash: 9.537 reglas, y las mismas 9.537 están en `dist/_redirects`.

Comprobaciones de este dist, todas a 0 fallos:

- `scripts/comprobar-cierre.py`: 0 URLs del vivo fuera, 0 reglas perdidas, 7.929 HTML citan el bundle, 0 `<img>` hacia las 328 fotos ausentes, 39.550 ficheros de media con el mismo sha256 que el manifiesto.
- `chequeo_img_dist.py`: 0 imágenes sin `src`, 0 logo como foto. Sigue el aviso de 19 tarjetas de blog sin foto.
- `validar-dist-publicable.py`: 0 bloqueantes indexables, 0 avisos de noindex, 0 `/media` citadas y ausentes.
- `npm test`: 12 ficheros, 78 pruebas, y el parser del monitor, exit 0.
- A 390 px y a 1.366 px, desborde 0 en el radar A-1 pk 14,56, en los tres rankings y en el comparador de patinetes. Ningún `<img>` sin `src`. El comparador no dice «Foto pendiente».
- Toda referencia local `/assets/...` del HTML existe en `dist/assets`.

El `dist` de 5,2 GB no cabe en un artefacto. La documentación de Cloud Agents describe artefactos de uno en uno (listar y descargar cada fichero) y no un protocolo de subida por partes. En este entorno un fichero de 96 MiB se cierra y uno de 112 MiB falla con `Invalid argument`. El HTML y los assets, sin la carpeta `media`, están en diez partes de 90 MiB o menos. Receta, hashes y lo que no está en git: `docs/inventario/PAQUETE-RECONSTRUCCION.md`. No se ha borrado el dist ni el tar anterior.

`tools/publicar/publicar.py` abortaba si un fichero de `no-tocar.txt` difería de lo vivo. Frente al commit en vivo `ea100295` había 5. Daniel, el 7/11 a las 03:11 Madrid, autorizó solo dos. El registro está en `tools/publicar/excepciones-hash.txt` y el gate lo lee. Las rutas no se han quitado de `no-tocar.txt`.

No se ha hecho deploy, ni preview, ni merge a `main`. No se afirma que AdSense esté aprobado.

## Excepciones, dry-run y entregas no leídas (7/11)

Autorización de Daniel, chat, 7/11 03:11 Madrid: «Autorizo los dos cambios en los archivos protegidos para evitar la foto inexistente y retirar la recreación del coche.» Solo estos blobs:

- `src/components/ficha/RivalesCarrusel.tsx` `cac131fd5f5ed745e4c7f979ffa356302b2fcee8`
- `src/lib/blog-posts-zontes-552g.ts` `664dc3645428f6b74062e2f6d5cf53d3527787e6`

La lista protegida sigue en 33 rutas, las mismas que tras el relevo de Ana. La excepción del 5/11 retiró 60 rutas (de 93 a 33) y no incluyó las tres de abajo. En `9cf8ef85` esas tres coincidían con el vivo. Las cambió esta rama (`166aef81c` y `876d8058c`). `docs/inventario/excepciones-no-tocar.txt` es una lista de espera, no una cita de Daniel. No se les ha puesto excepción de hash. El gate aborta en:

- `src/lib/blog-data.ts` `9a1a70586dd08dc60369d924527f3b45630dce8c`
- `src/lib/blog-posts-autocaravanas-lote125-g02.ts` `771edad218688daf83646811cea25d05648f4bf5`
- `src/lib/blog-posts-autocaravanas-lote125.ts` `d468ba84640ff13b32b857bc11eda28c59dda0fc`

No ha aparecido un sexto fichero protegido distinto del vivo.

Dry-run de `publicar.py --sin-build`, sin `--publicar`:

- Fase entorno: aborta. No hay `NETLIFY_AUTH_TOKEN` ni `tools/publicar/.env`. No se ha copiado ninguna clave.
- Fase vivo: no llega a la API. El listado completo de ficheros del deploy de Netlify **no está verificado**. No se afirma que haya 0 eliminaciones contra ese listado.
- Candado del tablón (`origin/completar-fichas`): no hay línea `PUBLICANDO`.
- Git: HEAD contiene `ea100295`.
- Src: las dos excepciones coinciden con el blob. Las tres de arriba abortan.
- rev3 contra `ea100295`: **0**. Contra `9cf8ef85` también era 0.

La copia guardada `tools/publicar/redirects-vivo.txt` tiene el sha1 `745db003c67d4f5deb25d8e0ac9989b319fd3b4c`, el de `ESTADO-VIVO.txt`. No es una lectura nueva de Netlify. Frente a esa copia, `dist/_redirects` pierde 12 reglas `301!` de las fichas Grecale Folgore, Modena V6 y Trofeo (blog y coche) hacia `/coches/maserati-grecale-2027-precio-ficha-tecnica/`. Esas tres fichas de coche sí están en este dist, con HTML y en el sitemap. No se han restaurado las reglas: hacerlo las forzaría a redirigir. No están entre las 6.209 del vivo.

El paquete de diez partes sigue siendo el del bundle `index-C31lVF6x.js`, commit del dist `b0a8abf44`. Los sha256 se han vuelto a comprobar contra los ficheros de `/opt/cursor/artifacts`. La descarga oficial es un fichero por artefacto: `GET /v1/agents/{id}/artifacts` y `GET /v1/agents/{id}/artifacts/download` ([documentación](https://cursor.com/docs/cloud-agent/api/endpoints)). Receta de media: `docs/inventario/PAQUETE-RECONSTRUCCION.md`.

Las 738 ramas con blob distinto no son una integración. El detalle de lo no leído y el recuento de las entregas de noviembre y de las 8 ramas de solo adiciones, rehecho contra este HEAD, está en `docs/inventario/ENTREGAS-NO-EVALUADAS.md`.
