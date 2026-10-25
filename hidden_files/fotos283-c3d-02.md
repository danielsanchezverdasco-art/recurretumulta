# Fotos 283 — trabajador C3D-02

- Slug: `kaabo-mantis-king-gt`
- URL: `/patinetes/kaabo-mantis-king-gt/`
- Estado: ENTREGADO (foto real, no "sin foto real")
- Rama: `fotos-283-niky-c3d-02` (creada desde la ref local de `origin/fotos-283-niky`,
  `3164cdb35`; el `git fetch origin` con refspec explícito se abortó por timeout de
  red, y al comprobar después la ref remota ya estaba en `83a99b8c0` — consolidación
  del coordinador 4, lote 4. El slug NO está tampoco en el CSV de esa ref nueva:
  verificado con `git show origin/fotos-283-niky:...fotos-283-niky.csv | grep kaabo-mantis-king-gt`,
  0 coincidencias. No se ha hecho rebase: la entrega son solo ficheros nuevos.)
- Comprobación previa: el slug NO estaba en
  `docs/comunicacion-ias/listas/fotos-283-niky.csv` del worktree antes de empezar
  (grep: 0 coincidencias). Ningún otro slug tocado.
- Worktree: `~/workspace/wt-fotos-c3d-02`, sparse-checkout (`src`, `docs`,
  `README-FOTOS-283.md`, más `public/media` y `hidden_files`, imprescindibles para
  la entrega; NO se hizo checkout completo).
- Entrada de datos: `src/lib/comparador-patinetes-base.ts`, marca Kaabo, modelo
  "Mantis King GT", precioEur 2400, 2×500 W nominales / 4000 W pico, 90 km anunciados,
  61 km reales, 25 km/h, 33 kg, batería 1440 Wh (60 V 24 Ah Samsung 21700),
  frenos hidráulicos de doble disco 140 mm + E-ABS, neumáticos 10" x 3", certificado DGT.
  - OJO — campo distinto al de coches: aquí NO hay `imagenOficial` ni `imagen`; el
    campo es `foto: "/media/patinetes/kaabo-mantis-king-gt.webp"`. Por eso el hero
    entregado lleva EXACTAMENTE ese nombre y esa ruta
    (`public/media/patinetes/kaabo-mantis-king-gt.webp`). Los otros dos ficheros
    siguen el patrón `-oficial` / `-interior` de los demás trabajadores.
  - Antes de la entrega no existía ningún `kaabo-mantis-king-gt*.webp` en
    `public/media/patinetes/` (sí existían `kaabo-mantis-gt-hunt*`, que son otro
    modelo — Mantis GT, no King GT — y NO se han tocado ni reutilizado).

## Ficheros entregados (todos WebP < 300 KB, sin marcas de agua prominentes)

| Fichero | Tamaño (bytes) | Dimensiones | Contenido | sha256 |
|---|---|---|---|---|
| `public/media/patinetes/kaabo-mantis-king-gt.webp` | 34594 | 1080x1080 | HERO: Mantis King GT negro, perfil lateral completo de estudio, fondo blanco | `d838b7b69db16a20348079447a6680bb5b05766733fafc0c40ccf307a0054f8e` |
| `public/media/patinetes/kaabo-mantis-king-gt-oficial.webp` | 38394 | 1080x1080 | Oficial: mismo modelo, tres cuartos delantero, fondo blanco | `19de8d5a711e0446f7c70791fd42c3d178b5e9c4a9384300a9220adc71b1e65c` |
| `public/media/patinetes/kaabo-mantis-king-gt-interior.webp` | 20682 | 1080x1080 | Interior/cockpit: manillar con mandos de luz, intermitentes y claxon (detalle oficial de la misma página de producto) | `7ca0bec49ddc5caf9a4e207201010522e364cd4d08c54218d17a4886405d39aa` |

Conversión: JPG oficiales 1080x1080 → WebP con Pillow, calidad 85, sin recorte ni
retoque (salvo la conversión de formato). `file` confirma WebP (VP8) en los tres.

## Fuente y licencia

- Fuente (los 3 ficheros): producto oficial Kaabo USA, página del Mantis King GT:
  `https://www.kaabousa.com/products/mantis-king-gt`
  - Hero: imagen de estudio lateral de la página
    (`kaabo-mantis-king-gt-electric-scooter-black.jpg`, perfil completo, fondo
    blanco, sin distintivos en las esquinas).
  - Oficial: imagen principal de la galería `Mantis_King_GT_Black-260706.jpg`
    (tres cuartos, con el distintivo de certificación SGS/UL 2272 en una esquina,
    que es un logo de certificación del fabricante, no una marca de agua sobre el
    producto; el hero elegido para la ficha NO lo lleva).
  - Interior/cockpit: `kaabo-mantis-king-gt-electric-scooter-handlebar-controls.jpg`
    (mandos del manillar, misma página de producto).
- Licencia: NO verificada como libre. Crédito: Kaabo USA. Uso editorial como foto
  de producto oficial del fabricante, igual que el resto de fotos oficiales del
  proyecto; no se afirma licencia CC ni dominio público. Si el coordinador exige
  licencia libre documentada, que lo marque y se sustituye.
- Sin IA: fotografías de producto reales del fabricante.

## Cómo se verificó que es el modelo y versión exactos

- Verificación visual directa de los tres ficheros entregados (apertura y revisión
  de imagen completa, también del WebP final del hero), no solo por nombre:
  - Hero y oficial: patinete negro con logo "kaabo" en el mástil y en el lateral
    de la plataforma, franja roja en la plataforma, muelles rojos de suspensión
    delante y detrás, disco de freno trasero visible, pantalla TFT central en el
    manillar y faro delantero alto. Coincide con la ficha de datos: suspensión
    hidráulica regulable en ambos ejes, pantalla TFT 3,5", frenos hidráulicos
    140 mm, neumáticos 10" x 3".
  - NO es un Mantis 8 / Mantis 8 Plus (más pequeño, sin TFT central ni muelles
    rojos de este tipo), ni un Mantis X / Mantis GT (otra plataforma y otro
    manillar), ni un Wolf King GT / King GT Pro (mucho más grande, ruedas de
    11", doble mástil en el Pro). La página oficial separa explícitamente estos
    modelos en su comparador y la foto usada es la de la columna "Mantis King GT"
    (1100 W x2, 43 mph, 60 V 24 Ah, 73 lbs, TFT 3,5", freno hidráulico 140 mm).
  - Interior: mandos de manillar con símbolos de luz, intermitentes y claxon,
    coherentes con los "intermitentes delante y detrás" de la ficha de datos.
- Datos cruzados con la ficha: 60 V 24 Ah, 1440 Wh, 2×1100 W nominales en la
  versión global (la española de la ficha va capada a 2×500 W / 25 km/h por el
  certificado A1098, pero el hardware fotografiado es el mismo King GT).
- No se publicó nada en Netlify ni se tocó el tablón. No se tocó `main` ni
  `fotos-283-niky`; solo la rama propia `fotos-283-niky-c3d-02`.

## Fila CSV exacta para consolidación

```
kaabo-mantis-king-gt|Kaabo USA oficial (producto Mantis King GT); licencia desconocida|https://www.kaabousa.com/products/mantis-king-gt
```
