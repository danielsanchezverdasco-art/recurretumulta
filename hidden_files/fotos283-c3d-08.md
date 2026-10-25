# Fotos 283 — trabajador C3D-08

- Slug: `kaabo-wolf-king-gtr`
- URL de la ficha: `/patinetes/kaabo-wolf-king-gtr/`
- Estado: ENTREGADO (foto real, no "sin foto real")
- Rama: `fotos-283-niky-c3d-08` (desde `origin/fotos-283-niky` @ `3164cdb35ba1a215e4dc98344fcff6b8d778384b`)
- Comprobación previa: el slug NO estaba en `docs/comunicacion-ias/listas/fotos-283-niky.csv` del worktree antes de empezar.

## Entrada de datos (sí existe)

Fichero: `src/lib/comparador-patinetes-exp-p2.ts` (entrada `id: "kaabo-wolf-king-gtr"`,
marca Kaabo, modelo Wolf King GTR, 4000 W nominal / 13440 W pico, 180 km, 63 kg,
batería 2419 Wh extraíble 72 V 35 Ah, ruedas CST de 12").

Los datos de patinetes NO usan `imagenOficial`/`imagen`: usan `foto` + `galeria`.
Nombres entregados EXACTAMENTE como los esperan los datos:

- `foto`: `/media/patinetes/kaabo-wolf-king-gtr-1.webp`
- `galeria[0]`: `/media/patinetes/kaabo-wolf-king-gtr-2.webp` (alt: "Batería extraíble del Kaabo Wolf King GTR")
- `galeria[1]`: `/media/patinetes/kaabo-wolf-king-gtr-3.webp` (alt: "Kaabo Wolf King GTR, la bestia de Kaabo")

## Ficheros entregados (todos WebP, todos < 300 KB)

| Fichero | Tamaño (bytes) | Dimensiones | Papel |
|---|---|---|---|
| `public/media/patinetes/kaabo-wolf-king-gtr-1.webp` | 48604 | 1080×1080 | Hero (`foto`) |
| `public/media/patinetes/kaabo-wolf-king-gtr-2.webp` | 27626 | 600×422 (tamaño nativo oficial) | Galería, batería extraíble |
| `public/media/patinetes/kaabo-wolf-king-gtr-3.webp` | 155556 | 1080×1080 | Galería, general |
| `public/media/kaabo-wolf-king-gtr-1.webp` | 48604 | 1080×1080 | Copia idéntica en raíz (cruce del coordinador) |
| `public/media/kaabo-wolf-king-gtr-2.webp` | 27626 | 600×422 | Copia idéntica en raíz |
| `public/media/kaabo-wolf-king-gtr-3.webp` | 155556 | 1080×1080 | Copia idéntica en raíz |

Las copias en raíz son byte a byte idénticas a las de `public/media/patinetes/`;
la ruta que usan los datos es la de `patinetes/`.

## Fuentes y licencia

- Fuente (las 3 fotos): Kaabo USA, tienda/producto oficial del fabricante,
  página "Kaabo King GTR" — https://www.kaabousa.com/products/kaabo-king-gtr
  - Hero: imagen oficial `kaabo_king_gtr_scooter.jpg` (imagen principal de esa página).
  - Batería: imagen oficial `KaaboUSA-King-GTR-Dual-Motor-Electric-Scooter-Removable-Battery.jpg`
    (misma página de producto GTR; el nombre del fichero la identifica como batería extraíble del GTR).
  - General: imagen oficial `kaabo-king-gtr-high-performance-electric-scooter-urban-riding.jpg`
    (misma página de producto GTR).
- Licencia: desconocida (fotos de producto oficiales del fabricante; no se indica
  licencia abierta en la página). No son IA, no son de banco de imágenes ni de otro modelo.
- Nota honesta: la foto hero oficial lleva en la esquina superior derecha un pequeño
  sello de certificación "UL 2272 / SGS" que forma parte de la imagen del fabricante;
  no es una marca de agua de stock sobre el patinete y no se ha recortado ni alterado
  la imagen salvo la conversión a WebP.

## Verificación de que es el modelo y versión exactos (visual, antes de entregar)

Verificadas las 3 imágenes una a una antes de convertirlas:

- Hero (negro, estudio, vista lateral): horquilla delantera de doble brazo tipo moto,
  doble faro delantero, plataforma ancha (la batería-plataforma extraíble), neumáticos
  todoterreno anchos de 12" y rótulo "King GTR" en la parte trasera. Coincide con los
  datos de la ficha (controlador 2 en 1, batería extraíble, CST 12", TFT, IPX5).
- NO es Wolf King GT Pro: el GT Pro lleva neumáticos de 11", horquilla patentada
  simple (no doble brazo moto) y batería NO extraíble; la foto muestra la plataforma
  ancha y el tren delantero del GTR.
- NO es Wolf King GTR Max: el Max tiene batería fija (no extraíble), frenos de
  4 pistones y diseño de doble tija; la foto hero muestra tija única, y la foto -2
  muestra precisamente la batería LEVANTADA fuera de la plataforma, algo que solo
  el GTR (no el Max ni el GT Pro) permite. La foto -2 es, por tanto, la prueba
  decisiva de versión.
- General (dorado, en marcha): mismo tren delantero de doble brazo, misma plataforma
  ancha con iluminación bajo plataforma y misma silueta GTR; procede del mismo
  fichero oficial de la página GTR, no de la página GTR Max.

## Fila CSV exacta para consolidación

```
kaabo-wolf-king-gtr|Kaabo USA oficial (producto King GTR); licencia desconocida|https://www.kaabousa.com/products/kaabo-king-gtr
```

Formato de la fila (campos separados por `|`): `slug|fuente|url`.
