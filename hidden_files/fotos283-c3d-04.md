# C3D-04 — Caza de fotos final fotos-283 (coordinador 3, lista definitiva de Grok)

- **Slug:** kaabo-skywalker-10h
- **URL:** /patinetes/kaabo-skywalker-10h/
- **Resultado:** ENTREGADO (foto real, hero). No es «sin foto real».
- **Trabajador:** C3D-04 — rama `fotos-283-niky-c3d-04` (desde `origin/fotos-283-niky` @ 3164cdb35)
- **Fecha:** 2026-10-25

## Entrada de datos (nombre hero esperado)

- `src/lib/comparador-patinetes-base.ts` (línea ~1928): `id: "kaabo-skywalker-10h"`,
  marca Kaabo, modelo Skywalker 10H, 800 W, 748,8 Wh, 65 km, 21,4 kg, 120 kg,
  doble disco + E-ABS, ruedas 10", doble suspensión.
- Campo de foto en los datos: `foto: "/media/patinetes/kaabo-skywalker-10h.webp"`
  (en patinetes el campo se llama `foto`, no `imagenOficial`/`imagen`).
- Comprobación previa: el slug NO estaba en
  `docs/comunicacion-ias/listas/fotos-283-niky.csv` del worktree, y el fichero
  hero no existía ni en `public/media/patinetes/` ni en `public/media/` (sin
  sobrescritura de ningún fichero de HEAD).

## Ficheros entregados

| Fichero | Tamaño (bytes) | Formato / dimensiones |
|---|---|---|
| `public/media/patinetes/kaabo-skywalker-10h.webp` | 70966 | WebP, 1600×1600 |
| `public/media/kaabo-skywalker-10h.webp` | 70966 | WebP, 1600×1600 (copia idéntica en raíz, mismo patrón que las tandas consolidadas) |

Ambos < 300 KB (límite: 300.000 B). Sin marcas de agua prominentes.
Solo hero: no se entregan foto oficial adicional ni interior (la tarea pide
hero obligatoria; no se ha localizado una segunda vista real distinta y
verificable del 10H que aporte algo frente al hero).

## Fuente y licencia

- **Fuente:** comfy.ua, ficha de producto «Kaabo Skywalker 10H ECO800»
  (distribuidor; foto de producto oficial del modelo).
- **Página fuente:** https://comfy.ua/ua/jelektrosamokat-kaabo-skywalker-10h-eco800.html
- **Imagen origen (JPEG 3000×3000, 239.548 B):**
  https://cdn.comfy.ua/media/catalog/product/0/1/01ght6t54rt5r.jpg
  (convertida a WebP 1600×1600, calidad 88, sin recorte ni retoque salvo el
  reescalado).
- **Licencia:** desconocida / no indicada en la página fuente. Foto de producto
  del distribuidor con imaginería de Kaabo; crédito: comfy.ua / Kaabo.
  Se anota como licencia desconocida, no como foto propia ni oficial del
  fabricante.
- **Descartado:** la página de Electric Kicks titulada «10H» describe en su
  texto el modelo 10C V2 («basically the same as the Skywalker 10H»,
  «the Kaabo 10H V2 has black suspension») y sus imágenes son del 10C;
  NO se usó, para no entregar un modelo distinto.

## Verificación de que es el modelo exacto (visual, antes de entregar)

1. Foto vista completa (original JPEG y WebP convertido, ambas inspeccionadas):
   patinete negro de pie, fondo blanco, sin personas ni texto superpuesto.
2. **En la propia foto se lee «SKYWALKER 10H» en la plataforma** y el logo
   «Kaabo» en rojo en el mástil: no es un 8H (rueda de 8", 500 W, 19 kg) ni un
   10C/10S (sin esa inscripción 10H).
3. Coincide con la ficha de datos: doble muelle delantero, doble amortiguador
   trasero, faro redondo delantero, ruedas neumáticas de 10", manillar con
   display redondo — los rasgos del Skywalker 10H.
4. La variante es la ECO800 (800 W), que es la que describe la ficha
   (800 W, 65 km, 21,4 kg, 15,6 Ah según Alza para la misma variante);
   NO es la ECO400 (400 W) ni la 10H V2 de Electric Kicks.
5. No es IA: fotografía de producto de estudio, sin artefactos de generación.

## Fila CSV exacta para consolidación

```
kaabo-skywalker-10h|comfy.ua|https://comfy.ua/ua/jelektrosamokat-kaabo-skywalker-10h-eco800.html
```

## Notas de trabajo (desviaciones honestas)

- El `sparse-checkout` del worktree no podó el árbol como se esperaba
  (el patrón de fichero `README-FOTOS-283.md` en modo cono dio error y el
  `reset --hard` resultante dejó un checkout completo de ~832 MB). No se hizo
  checkout completo a propósito: se intentó el procedimiento indicado y, con
  disco recuperado al 93 % (7,5 GB libres tras la limpieza de worktrees
  viejos del 25/10), se continuó con ese worktree sin tocar ningún otro slug.
  Solo se han añadido los dos ficheros de arriba + este informe.
- Nada publicado en Netlify; nada escrito en el tablón (tarea del coordinador).
