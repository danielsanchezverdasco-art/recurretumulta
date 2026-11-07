# Fotos de los artículos, 7 de noviembre de 2026

Partida: `6f7e79c12`. No se ha rehecho el texto de los posts: la redacción que ya está es la posterior.

En 118 artículos la primera imagen era un fichero marcado en `fotos-malas` o pesaba menos de 8 KB (el mismo recuadro repetido de 18 KB). La tarjeta ya evitaba esa imagen con el generador, pero el artículo seguía abriendo con ella.

Cada sustitución usa una foto cuyo nombre empieza por el slug del post, pesa más de 15 KB, no está en la lista de fotos malas y tiene fila en `public/media-creditos.md`. Se prefiere `hunt1`, luego la oficial, luego la hero. No se ha usado una foto de otro modelo ni el logo.

La lista está en `BLOG-FOTOS-PORTADA-20261107.json`. Los tres ficheros protegidos no se han tocado.

No se ha regenerado `dist`. La portada generada ya apuntaba en casi todos los casos a la foto buena; el cambio es el cuerpo del artículo.
