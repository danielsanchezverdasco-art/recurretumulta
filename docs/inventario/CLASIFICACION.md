# Inventario de ramas remotas (6/11/2026)

Base comparada: `subida-acumulada-1105` @ `7e5d3af7b1c566be699ec62df84f29d824781749` (35 commits sobre `main` `3e93e630`). La comparación es de contenido (blob del fichero en la punta de la rama frente al blob en HEAD), no solo de ancestría. Hay cherry-picks: una rama puede no ser ancestro y aun así tener el mismo blob.

Matriz: `docs/inventario/matriz-ramas.csv` (894 ramas en el momento del barrido).
Ficheros presentes en alguna rama y ausentes en HEAD: `docs/inventario/ficheros-ausentes.csv` (7.464 rutas).

## Recuento

| Estado | Ramas | Qué significa |
|---|---:|---|
| ya_incorporado_ancestro | 146 | El commit está en el historial de HEAD. No se restaura: HEAD puede haber seguido corrigiendo esos ficheros. |
| ya_incorporado_contenido | 1 | No es ancestro, pero cada blob que la rama cambió coincide con HEAD. |
| cabeza_actual | 1 | `origin/subida-acumulada-1105`, la base de esta fase. |
| pendiente_adiciones | 8 | Solo añade ficheros que HEAD no tiene. |
| pendiente_contenido | 738 | Algún blob difiere. No es «hay que fusionar»: casi siempre la rama parte de un main anterior y HEAD ya reescribió el mismo fichero. |

Desde el 21/10: 531 ramas (101 ancestro, 424 con contenido distinto, 5 solo adiciones, 1 cabeza). Antes del 21/10: 363.

## Qué se recuperó en esta fase (sin fusión ciega)

Script: `scripts/recuperar-entregas.py`. Merge a tres bandas (base = merge-base, nuestro = HEAD, suyo = la rama). Conflicto o binario: no se toca. Rechazo si el resultado quita el plan 7,99 €, el nombre editorial, añade `noindex` o añade/pierde reglas 301.

- 535 markdown de radar que ya tenían slug en `scripts/radares-slugs.txt` y no estaban en el árbol. Cero slugs sin fuente.
- 36 módulos de blog cuyos slugs no existían (513 slugs nuevos en `scripts/blog-slugs.txt`). 21 módulos se dejaron fuera porque todos sus slugs ya estaban.
- 109 módulos de autocaravana cuyos `id` no estaban en los comparadores de HEAD. Solo 15 ids faltaban también en el listado de slugs.
- Entregas del 5-6/11 que sí entraron como fichero nuevo: radares Diavel V4 S, Omoda 9/5, Renault 4, Yangwang U9, Mazda6e/Corvette, RD 953/2026, CSV de SEO y de fuentes de patinetes, fotos de esas piezas.
- 43 merges limpios (6 de ellos en ficheros de `no-tocar.txt`). 182 ficheros de esas entregas ya coincidían tras el merge (el cambio de la rama ya estaba absorbido).
- 240 fotos citadas por el código y ausentes en disco, recuperadas de la rama más nueva que las tenía. 55 eran placeholder (md5 de `scripts/placeholder-md5.txt`) y no se copiaron. 294 citas no tienen blob en ninguna rama.

## Qué no se integró, y por qué

- 573 conflictos (la muestra de 200 está en `conflictos-no-aplicados.txt`; 167 de esa muestra son fotos binarias de `merlin-fotos-blogs-1105`). Un merge binario no se puede resolver solo: se conserva la foto que ya está en HEAD.
- `index.html` de `merlin-banner-consentimiento-1105`: el snippet de Funding Choices ya está en HEAD. La rama reintroduce el bloque JSON-LD `SoftwareApplication` que la subida acumulada quitó. No se restaura.
- `merlin-fichas-404-1105`: las fichas Grecale y las fotos Benelli ya están. Lo que difiere es texto de blog (HEAD añade una variante de imagen) y tres 301 de HEAD (GAC Aion RT, Ora 07, Leapmotor B10) que la rama, basada en main, no tiene. No se borran.
- `merlin-adsense-legales-1105`: Contacto y los glosarios ya coinciden. Privacidad y Sobre nosotros en la rama son la versión de main (sin el plan anual ni el nombre completo en el schema). El merge a tres bandas conserva el texto nuevo de HEAD.
- Precio Seal U 28.690 € / 32.940 €: ya está en HEAD, con las condiciones de la campaña.
- Propuestas de 301 (CSV de SEO): se guardan como documento. No se aplican a `_redirects`.
- `niky-adsense-2610`: logs de censo, no contenido de la web. No entran.
- Módulos de historia/EuroNCAP sueltos de octubre: no están importados. Meterlos en el spread pisaría fichas más nuevas. Quedan listados en `ficheros-ausentes.csv`.
- `no-tocar.txt` no se ha editado. Las excepciones ya presentes frente a main (la subida acumulada más 6 merges de esta fase) están en `excepciones-no-tocar.txt`. El publicador abortará hasta que Daniel las acepte. No es un permiso para saltarse la lista.

## Relevo de Ana (consulta 6/11, tras la Nota 226)

`origin/completar-fichas` @ `8b58922f7` (Nota 226 de Niky): acusa el relevo de las 20:20, no publica y no toca main. En `grok.md` está el aviso de Cosa pidiendo a Ana el checkpoint del intento 5/5b. En ese fetch no había todavía nota de Ana con rutas, script ni rama de dist, ni ninguna rama nueva de prerender. Cifra que sustituye a la anterior: 306 HTML completos con el criterio estricto y 5.843 pendientes. Esos HTML solo valen si citan el bundle de su propio build. Esta fase cambia código, así que no se copian como éxito. Se vuelve a mirar el remoto en el punto natural, antes de prerenderizar, y no se relanza lo que ya cumpla el criterio.

## Corrección tras el build

Siete módulos de autocaravana recuperados no compilan (sintaxis rota en la rama de origen). Se han quitado, y sus 13 ids salen de `scripts/slugs-autocaravanas.txt`. No se publica una ficha que el compilador no acepta. Lista: carado-m3-w9, challenger-m4-w20, dethleffs-m3-w3, frankia-m4-w13, laika-m3-w6, lmc-m3, westfalia-m3-w8.

Los módulos nuevos de autocaravana de los lotes del 19/10 no compilan (cabeceras rotas `] = [` , comas dobles y tipos que no cuadran con Autocaravana). Se retiran enteros. Sus ids no se añaden al listado. Quedan inventariados como no integrables hasta que alguien entregue una versión que pase `tsc`.
