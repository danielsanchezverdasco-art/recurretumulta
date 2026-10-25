# Fotos 283 — trabajador C3D-12 (coordinador 3, lista definitiva de Grok)

- **Slug:** kugoo-kirin-s4 (URL /patinetes/kugoo-kirin-s4/)
- **Resultado:** ENTREGADO (hero). Galería -2 NO entregada (ver motivo abajo).
- **Rama:** fotos-283-niky-c3d-12 (desde origin/fotos-283-niky @ 90153ad80)
- **Worktree:** ~/workspace/wt-fotos-c3d-12 (sparse: src, docs, README-FOTOS-283.md;
  public/media y hidden_files añadidos solo con `git add --sparse -f`, sin checkout completo)
- **Pre-check:** el slug NO estaba en docs/comunicacion-ias/listas/fotos-283-niky.csv
  del worktree antes de empezar.

## Entrada de datos

- `src/lib/comparador-patinetes-exp-p9.ts`, línea 864: `id: "kugoo-kirin-s4"`,
  marca Kugoo, modelo Kirin S4, 350 W, 360 Wh, 40 km, 35 km/h, 13,5 kg,
  neumáticos 10" de aire.
- Nombre hero esperado: campo `foto` = `/media/patinetes/kugoo-kirin-s4-1.webp`
  (no hay campo `imagenOficial` en esta entrada).
- Galería esperada: `/media/patinetes/kugoo-kirin-s4-2.webp`
  (alt: "Kugoo Kirin S4 en ciudad") — NO entregada (ver abajo).

## Ficheros entregados

| Fichero | Tamaño (bytes) | Dimensiones | Formato |
|---|---|---|---|
| public/media/patinetes/kugoo-kirin-s4-1.webp | 30992 | 1000 × 705 | WebP (de JPEG original 154756 B) |

- Límite WebP <300 KB: CUMPLIDO (30.992 B).
- Sin marcas de agua de terceros: el texto visible ("The Best Commuter Scooter /
  KugooKirin S4" + logo KugooKirin) forma parte del gráfico oficial de producto
  del fabricante, no es marca de agua de un banco de imágenes ni de un tercero.

## Fuente y licencia

- **Fuente:** foto oficial de producto KugooKirin S4 publicada en la ficha de
  producto de Geekbuying (las 11 imágenes de esa ficha llevan todas el título
  exacto del S4 con sus especificaciones).
- **URL de la página fuente:**
  https://www.geekbuying.com/item/KugooKirin-S4-Folding-Electric-Scooter-10-inch-350W-10Ah-Battery-Black-472898.html
- **URL directa de la imagen origen (Image 0 de esa ficha):**
  https://img.gkbcdn.com/s3/d/202203/5f068f66-8a98-439e-8173-ad54de32230a.jpg
- **Licencia:** desconocida (foto de producto del fabricante distribuida por
  el vendedor; sin licencia libre declarada).

## Verificación de modelo exacto (visual, antes de entregar)

1. La imagen muestra el patinete completo, negro, con ruedas de 10" con aro
   naranja, plataforma gris, pantalla LED en el manillar y pata de cabra:
   coincide con la ficha de datos (13,5 kg, ruedas 10" de aire, 350 W,
   35 km/h, 40 km, 3 modos 15/25/35 km/h).
2. El propio gráfico oficial rotula el modelo: "KugooKirin S4" (no es un
   Kirin M4, S1 Pro ni G2: esos llevan otro chasis/ruedas y otro rotulado).
3. La página fuente titula el producto "KugooKirin S4 Folding Electric
   Scooter 10 inch 350W 10Ah Battery Black" y su especificación lista
   exactamente: modelo S4, 13,5 kg, 10" neumático, 35 km/h, 10 Ah, 350 W.
4. Se descartaron las demás imágenes de la misma ficha como hero porque son
   detalles (pantalla, freno, plegado) o gráficos de detalle, no el patinete
   completo.
5. El JPEG re-descargado tras el reinicio de la VM tiene el mismo SHA256 que
   el verificado antes del reinicio
   (b95eef24fe9d1c326aaeb28f3952bffd935de5d76680fd437f71e2a89366031a),
   y se volvió a verificar visualmente antes de convertir a WebP.

## Galería -2 NO entregada (motivo honesto)

- Antes del reinicio de la VM se había localizado y verificado visualmente
  una segunda foto real del S4 en ciudad (Image 3 de la misma ficha
  Geekbuying, jinete en ciudad con rótulo "Run Further"), destinada a
  `kugoo-kirin-s4-2.webp`.
- La VM se reinició a mitad del trabajo (uptime 2 min al volver) y /tmp se
  vació, perdiendo los bytes descargados; desde entonces el proxy de egress
  rechaza todas las descargas directas de imágenes (timeout CONNECT en
  gkbcdn y en hosts alternativos probados), por lo que no se pudo
  re-descargar la foto de ciudad.
- NO se inventó ni se sustituyó por otra foto: el hero (obligatorio) está
  entregado y verificado; la -2 queda pendiente de un reintento cuando el
  proxy se recupere, o de otro trabajador si el coordinador lo reasigna.
- La foto de ciudad existe y es localizable en la URL directa:
  https://img.gkbcdn.com/s3/d/202203/ba4a9230-9f38-47b0-8429-0f6a9f4ca3d8.jpg

## Fila CSV exacta para consolidación

```
kugoo-kirin-s4|Geekbuying (foto oficial de producto KugooKirin S4); licencia desconocida|https://www.geekbuying.com/item/KugooKirin-S4-Folding-Electric-Scooter-10-inch-350W-10Ah-Battery-Black-472898.html
```

## Notas

- No se publicó nada en Netlify ni se tocó el tablón.
- No se tocó ningún otro slug, ni el worktree principal, ni la rama main.
