# Fotos 283 — trabajador C3D-03

- **Slug:** kaabo-mantis-urban
- **URL:** /patinetes/kaabo-mantis-urban/
- **Estado:** ENTREGADO (foto real, no "sin foto real")
- **Trabajador:** C3D-03
- **Rama:** fotos-283-niky-c3d-03 (desde origin/fotos-283-niky, commit base 3164cdb35ba1a215e4dc98344fcff6b8d778384b)
- **Comprobación previa:** el slug NO estaba en docs/comunicacion-ias/listas/fotos-283-niky.csv (grep = 0) antes de empezar.
- **Entrada de datos:** sí existe. src/lib/comparador-patinetes-exp-p2.ts, id "kaabo-mantis-urban", marca Kaabo, modelo "Mantis Urban": foto "/media/patinetes/kaabo-mantis-urban-1.webp" y galería "/media/patinetes/kaabo-mantis-urban-2.webp" (alt "Pantalla TFT del Kaabo Mantis Urban") y "/media/patinetes/kaabo-mantis-urban-3.webp" (alt "Kaabo Mantis Urban en la ciudad"). Por tanto NO se usa el nombre de respaldo kaabo-mantis-urban-oficial.webp.

## Ficheros entregados (public/media/patinetes/, todos WebP < 300 KB, sin marcas de agua)

| Fichero | Tamaño (bytes) | Dimensiones | Contenido | SHA-256 |
|---|---|---|---|---|
| kaabo-mantis-urban-1.webp (hero) | 28502 | 1080x1080 | Perfil lateral de estudio, amarillo/negro, patinete completo | 152f4015c9b986beb16bada34a91024b7ded4ab4eea4ab5bb1954240deb43e72 |
| kaabo-mantis-urban-2.webp (galería TFT) | 15948 | 1200x800 | Manillar con pantalla empotrada que muestra "NFC" e intermitentes de extremo de manillar | a4f8a1ae7d2d619c4f3dc9c58eaac3cd652c78f7bba2dc79975c9457cea412bb |
| kaabo-mantis-urban-3.webp (galería ciudad) | 92366 | 1080x1080 | Dos patinetes del mismo modelo circulando por un camino urbano | f81aba2eb7a504771bf33f99c25f74b9bf3153f26bf9f534ec24372fd3a424d6 |

Nota sobre dimensiones: la galería -3 se entrega cuadrada (1080x1080) sin recorte, a propósito, porque el recorte a 1200x800 cortaba las ruedas y los cascos de los riders; la ficha declara 1200x800 para la galería, pero la imagen completa se muestra sin pérdida. La -2 sí es 1200x800 exactos (recorte centrado del original cuadrado, sin cortar el manillar).

## Fuente y licencia

- **Fuente principal (fotos descargadas de aquí):** Kaabo USA, distribuidor oficial de Kaabo en EE. UU., página de producto "Kaabo Urban" — https://www.kaabousa.com/products/kaabo-urban
  - Fichero origen -1: Urban_yellow_260703.jpg (foto de producto oficial, lateral amarillo)
  - Fichero origen -2: kaabo-urban-electric-scooter-nfc-display-handlebar.webp (foto de producto oficial, manillar/NFC)
  - Fichero origen -3: kaabo-urban-electric-scooter-commuter-riding.webp (foto de producto oficial, en ciudad)
- **Corroboración del nombre "Mantis Urban":** Scooter Hut (https://scooterhut.com.au/products/kaabo-electric-scooter-mantis-urban) y Electric Kicks (https://www.electrickicks.com.au/products/kaabo-mantis-urban-electric-scooter) venden el mismo modelo, con las mismas especificaciones, bajo el nombre "Kaabo Mantis Urban". Las fotos de Scooter Hut con nombre kaabo-mantis-urban-* son la misma serie de fotos oficiales.
- **Licencia:** foto de producto oficial del fabricante/distribuidor; la página no declara una licencia abierta (no es CC ni dominio público). Sin marca de agua. Uso como foto de prensa/producto en la ficha, igual que el resto de fotos oficiales del proyecto. Licencia exacta no indicada en la fuente: anotada como desconocida/no declarada, no inventada.

## Cómo se verificó que es el modelo exacto (y no otro Mantis)

1. **Coincidencia de especificaciones con los datos de la ficha:** 500 W nominales / 900 W pico, batería 48 V 10,4 Ah (499 Wh), 20 kg (44 lbs), ruedas 8,5x3" tubeless, suspensión delantera y trasera de muelle tipo C, frenos de disco 120 mm + EABS, pantalla empotrada con NFC e intermitentes. Esas cifras son idénticas en los datos del repo, en Kaabo USA (tabla comparativa, columna "Urban") y en Scooter Hut / Electric Kicks ("Mantis Urban").
2. **Exclusión de los otros Mantis:** Mantis 8 / 8 Lite es bimotor (500 W x 2, 48 V 13 Ah, ~25 kg) y Mantis King GT es bimotor 1100 W x 2, 60 V, ruedas de 10" y mucho más pesado. Ninguno coincide con el patinete de las fotos: monomotor compacto, ruedas pequeñas de 8,5", chasis ligero urbano.
3. **Verificación visual de cada foto antes de entregarla (las tres revisadas una a una):**
   - -1: perfil completo de estudio; se lee "Kaabo" en el mástil, deck bitono amarillo/negro, muelle rojo tipo C, disco de freno, ruedas pequeñas 8,5". No es un render: foto de producto con fondo blanco.
   - -2: foto real del manillar; la pantalla empotrada muestra literalmente "NFC", con el logo Kaabo y los intermitentes de extremo de manillar que los datos citan como rasgo distintivo.
   - -3: foto real de dos unidades del mismo chasis compacto (azul y verde, dos de los cuatro colores del modelo: negro, verde, amarillo, azul) circulando en ciudad.
4. **Nada de IA:** las tres son fotos de producto oficiales, no generadas. No se ha usado ninguna imagen del Mantis 8, Mantis 10, Mantis X Plus ni King GT.
5. **Nombre en EE. UU.:** Kaabo USA llama al modelo "Urban" a secas, pero su tabla comparativa lo distingue de Mantis 8 Lite, Mantis 10 Lite, Mantis X Plus y Mantis King GT con las especificaciones exactas del Mantis Urban; fuera de EE. UU. se comercializa como "Mantis Urban". Es el mismo modelo, no un modelo distinto.

## Fila CSV exacta para consolidación

```
kaabo-mantis-urban|Kaabo USA (distribuidor oficial Kaabo), foto de producto oficial|https://www.kaabousa.com/products/kaabo-urban
```

## Notas de trabajo

- Worktree ligero ~/workspace/wt-fotos-c3d-03 con sparse-checkout inicial (src, docs, README-FOTOS-283.md). Para poder commitear public/media/ y hidden_files/ (public/media/ está en .gitignore y git add -f rechazaba paths fuera del sparse), se amplió el sparse SOLO a public/media/patinetes y hidden_files; NO se hizo checkout completo.
- No se ha tocado ningún otro slug, ni main, ni Netlify, ni el tablón.
