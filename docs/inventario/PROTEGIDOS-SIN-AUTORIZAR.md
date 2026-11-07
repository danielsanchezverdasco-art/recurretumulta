# Tres ficheros protegidos, sin autorización

Siguen en `tools/publicar/no-tocar.txt`. No se ha añadido su blob a `tools/publicar/excepciones-hash.txt`. Las dos excepciones del 7/11 a las 03:11 Madrid no cambian.

Base del publicador: `ea100295`. En `9cf8ef85` estos tres blobs coincidían con esa base. Los cambió esta rama.

## `src/lib/blog-data.ts` — `9a1a70586dd08dc60369d924527f3b45630dce8c`

No es un cambio de fotos. El texto legal pasa de «La DGT dispone de 1 mes para resolver el recurso de reposición» a «tiene un mes para contestar», y la ficha de la DGT cita el RDL 6/2015, art. 6. La tabla sustituye «Resolución de la DGT · Hasta 1 año» por «Resolución del recurso de reposición · 1 mes (art. 96.5)» y separa las alegaciones (art. 95.1, 20 días). La página que se ve sale de este módulo. No hay otro fichero, fuera de la lista, que pinte ese mismo bloque: mover el párrafo a un módulo nuevo y dejar este como estaba sería quitar el texto protegido de donde se publica, no un equivalente.

## `src/lib/blog-posts-autocaravanas-lote125-g02.ts` — `771edad218688daf83646811cea25d05648f4bf5`

## `src/lib/blog-posts-autocaravanas-lote125.ts` — `d468ba84640ff13b32b857bc11eda28c59dda0fc`

En los dos se añaden `<img>` de una segunda foto dentro del HTML del post (Adria Matrix Plus, Bürstner Lineo, Challenger 287, Dethleffs Globetrail, Knaus BoxLife, Pössl Summit, Roller Team Zefiro, XGO Dynamic, y en el lote grande también McLouis, Pössl Summit 600 Plus, Challenger 380 y Adria Twin). El lote grande y el `g02` repiten varios de esos posts: el aviso de build ya decía que el slug de `g02` gana y el del lote se ignora. La foto no está en un componente suelto. Pintarla desde la ficha del comparador no pone la imagen dentro de este post. Sacar el post a un módulo que no esté en `no-tocar.txt` sería mover el texto protegido, no evitar el toque.

Hace falta la decisión de Daniel sobre estos tres blobs. Hasta entonces el gate aborta.
