# Fotos 283 — trabajador C3D-19

- **Slug:** kukirin-s1-max
- **URL:** /patinetes/kukirin-s1-max/
- **Resultado:** ENTREGADO (hero real oficial verificada visualmente)
- **Trabajo:** solo este slug. No se tocó ningún otro slug, ni el tablón, ni Netlify, ni main.

## Entrada de datos

- Fichero: `src/lib/comparador-patinetes-exp-p3.ts` (línea 2340)
- Marca/modelo: KuKirin S1 Max — 350 W nominal / 500 W pico, 36 V 10,4 Ah (374 Wh),
  39 km declarados, 25 km/h, 16 kg, ruedas 8" honeycomb, freno electrónico + freno de pie.
- Campo de imagen en datos: `foto` (no existe campo `imagenOficial` ni `imagen` en esta
  entrada), por lo que la hero esperada es la del campo `foto`:
  `/media/patinetes/kukirin-s1-max-1.webp`.
- Comprobación previa: el slug NO estaba en
  `docs/comunicacion-ias/listas/fotos-283-niky.csv` (0 coincidencias) antes de empezar.

## Ficheros entregados

| Fichero en la rama | Tamaño (bytes) | Dimensiones | Formato |
|---|---|---|---|
| `public/media/patinetes/kukirin-s1-max-1.webp` | 18696 | 1000 × 1000 | WebP (calidad 82) |

- Límite WebP <300 KB: CUMPLIDO (18.696 bytes).
- Sin marcas de agua prominentes: verificado visualmente (fondo blanco limpio, sin texto
  superpuesto salvo el marcaje "S1 Max" propio del patinete en la plataforma).
- Galería de datos (`kukirin-s1-max-2.webp`, plegado; `kukirin-s1-max-3.webp`,
  transporte público): NO entregada en este lote; el encargo pedía hero obligatoria
  (+ oficial/interior si existen reales; un patinete no tiene interior). Queda como
  posible seguimiento para el coordinador, no como bloqueo de la hero.

## Fuente y licencia

- **Fuente:** tienda oficial KuKirin SE (Kukirin SE Official), página de producto
  "KuKirin S1 Max Electric Scooter":
  https://kukirin.se/products/kukirin-s1-max-electric-scooter
- **Imagen original:** imagen principal de producto de esa página oficial
  (CDN Shopify de la tienda oficial):
  https://kukirin.se/cdn/shop/files/1_1.webp?v=1745574071&width=1600
  (servida como JPEG 1000 × 1000, 39.140 bytes; convertida a WebP sin recorte).
- **Licencia:** foto de producto oficial del fabricante; licencia desconocida / sin
  licencia explícita publicada (uso como foto de producto del modelo, como el resto
  de fotos oficiales de la caza). No es IA ni foto de terceros.
- Orden de fuentes respetado: fabricante oficial primero; no hizo falta bajar a redes,
  prensa especializada ni internet general.

## Verificación de que es el modelo exacto

1. La página oficial es la del S1 Max y sus especificaciones coinciden con la entrada
   de datos: 350 W, 36 V 10,4 Ah, 39 km, 25 km/h, ruedas 8" honeycomb, ~16 kg.
2. Verificación visual de la imagen descargada y de la WebP convertida (las dos
   inspeccionadas): patinete negro, perfil lateral completo, ruedas pequeñas de 8"
   con anillo naranja y dibujo honeycomb, pinza de plegado en el mástil, freno de pie
   trasero, plataforma con el marcaje "S1 Max" visible. Es el S1 Max y no otro KuKirin:
   los G2/G3/G4 llevan ruedas de 9–11" y/o sillín y son visiblemente mayores; el S1 Max
   es el único KuKirin ligero de 16 kg con ruedas de 8".
3. No es IA: es la foto de producto oficial de la tienda del fabricante.

## Fila CSV exacta para consolidación

```
kukirin-s1-max|KuKirin oficial SE (tienda oficial, imagen principal de producto S1 Max); licencia desconocida|https://kukirin.se/products/kukirin-s1-max-electric-scooter
```

## Notas de ejecución

- Worktree: `~/workspace/wt-fotos-c3d-19`, rama `fotos-283-niky-c3d-19`, creada desde
  `origin/fotos-283-niky` (fetch OK, commit base 90153ad80). No se tocó el worktree
  principal ni main.
- Sparse-checkout: se ejecutó `git sparse-checkout set src docs README-FOTOS-283.md`,
  pero el `git checkout HEAD -- .` posterior pobló el 100 % de los ficheros
  rastreados (el propio git lo indica: "sparse checkout with 100% of tracked files
  present"). No se hizo checkout completo manual adicional; el disco quedó al ~73 %,
  sin problema de espacio.
- Incidencia de red: la VM se reinició a mitad del trabajo (uptime reseteado, /tmp
  vaciado, lección conocida) y el proxy de egress rechazaba las descargas con curl
  (CONNECT timeout). La descarga se completó con Python vía proxy con reintentos.
  El trabajo se reanudó sin pérdida: el worktree y la rama sobrevivieron al reinicio.
- `public/media/` está en `.gitignore`: el fichero se añade con `git add -f`,
  como el resto de fotos de la caza.
