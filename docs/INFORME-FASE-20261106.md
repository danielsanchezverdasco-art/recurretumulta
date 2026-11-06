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

## Ana, 6/11 por la noche

Consulta a `origin/completar-fichas` @ `8b58922f7`. Lo que hay es la Nota 226 de Niky: acusa el relevo de las 20:20, no publica y no toca main. En `grok.md` está el aviso pidiendo a Ana el checkpoint del intento 5/5b. En esos fetch no había nota suya con rutas, script ni rama de dist, ni una rama nueva de prerender.

Cifra que sustituye a la anterior de 429/5846: **306 HTML completos con el criterio estricto y 5.843 pendientes**. Esos HTML solo sirven si apuntan al bundle de su build. Esta fase cambia código (`index-b2wLmsGV.js`), así que no se han copiado como éxito. El intento 6 no se ha publicado, como ella dijo.

## Prerender

El criterio de «hecho» está en `scripts/prerender-check.mjs` y lo usan `prerender.mjs` y `prerender-resume.mjs`. Una ruta no cuenta si el HTML es corto, no cierra, el canonical no es el de esa ruta, queda el spinner, el título es el del shell, pone «Algo salió mal» o «Radar no encontrado», o cita un `/assets/index-*.js` que no está en este build. El manifiesto es `scripts/.safe-publish/prerender-manifest.jsonl` (ruta, sha256, bytes, assets). No está en git: crece durante la tanda.

Se dejó `networkidle` (se colgaba esperando fotos). Ahora espera a que React haya pintado la ruta. Las imágenes no se descargan en la captura: `__PRERENDER__` ya impide hornear el logo de respaldo.

Comando de reanudación, después de `npm run build`:

```bash
node -e '/* regenerar /tmp/all-routes.txt como en esta fase, o usar prerender-resume.mjs */'
PRERENDER_ONLY_FILE=/tmp/all-routes.txt PRERENDER_SKIP_COMPLETE=1 PRERENDER_CONCURRENCY=6 node scripts/prerender.mjs
```

`PRERENDER_SKIP_COMPLETE=1` no repite una ruta cuyo HTML ya cumple el criterio contra el bundle actual. Hay **10.528** rutas únicas en esta tanda.

Build comprobado: `npm run build` con `VITE_CONVEX_URL` igual a la URL regional que ya está escrita en `scripts/check-convex-url.mjs` (no es un secreto). Exit 0. Bundle `dist/assets/index-b2wLmsGV.js`. Pillow 12.3.0 hizo falta para `scripts/gen-cards.py` (no estaba en el entorno). No hace falta token de Netlify ni de Cloudflare en esta fase.

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

`chequeo_img_dist.py` y `validar-dist-publicable.py` piden el `dist` completo. No se dan por verdes con una muestra.

## Bloqueos para la publicación única

1. rev3b no está en 0.
2. El prerender de las 10.528 rutas tiene que terminar con el manifiesto en verde (bundle `index-b2wLmsGV.js`). Si el proceso se corta, el comando de arriba sigue donde lo dejó.
3. 63 excepciones de `no-tocar.txt` frente a main, sin editar la lista.
4. 294 imágenes citadas sin blob en ninguna rama, y 55 placeholders no copiados.
5. Ana no había subido aún el checkpoint al remoto en el último fetch. Si llega, hay que comparar el bundle antes de reutilizar un solo HTML.

No se afirma que AdSense esté aprobado. No se promete que el sitio quede perfecto.
