# Fotos 283 — trabajador C3D-07

- Slug: kaabo-wolf-king-gtr-max
- URL: /patinetes/kaabo-wolf-king-gtr-max/
- Resultado: ENTREGADO (foto real, no "sin foto real")
- Trabajador: C3D-07, rama: fotos-283-niky-c3d-07
- Fecha: 2026-10-25
- Comprobación previa: el slug NO estaba en docs/comunicacion-ias/listas/fotos-283-niky.csv de la rama base origin/fotos-283-niky (grep: 0 coincidencias, ni siquiera "kaabo").

## Entrada de datos

- Sí existe entrada de datos en src/lib/comparador-patinetes-exp-p2.ts:
  id "kaabo-wolf-king-gtr-max", marca "Kaabo", modelo "Wolf King GTR Max",
  fuenteUrl https://www.kaabousa.com/products/king-gtr-max
- Nota: el campo de la ficha es `foto` (no `imagenOficial` ni `imagen`).
  El nombre hero entregado coincide EXACTAMENTE con ese campo, y los dos
  de galería coinciden con `galeria[].src`:
  - foto: /media/patinetes/kaabo-wolf-king-gtr-max-1.webp
  - galería: /media/patinetes/kaabo-wolf-king-gtr-max-2.webp
    (alt en datos: "Detalle del Kaabo Wolf King GTR Max")
  - galería: /media/patinetes/kaabo-wolf-king-gtr-max-3.webp
    (alt en datos: "Kaabo Wolf King GTR Max, autonomía extrema")
- No hay "interior" aplicable a un patinete; -2 es detalle y -3 es foto en acción.

## Ficheros entregados (public/media/patinetes/)

| Fichero | Tamaño (bytes) | Dimensiones | Formato |
|---|---|---|---|
| kaabo-wolf-king-gtr-max-1.webp (hero) | 43240 | 1080x1080 | WebP |
| kaabo-wolf-king-gtr-max-2.webp (detalle) | 37092 | 1080x1080 | WebP |
| kaabo-wolf-king-gtr-max-3.webp (acción) | 57968 | 1080x1080 | WebP |

Todos < 300 KB (límite: 307200 bytes). Sin marcas de agua prominentes
(solo el logotipo "Kaabo" propio del vehículo). Conversión desde el
original oficial a WebP calidad 85 con Pillow; los tres ficheros
convertidos se reabrieron y el hero se verificó visualmente tras convertir.

## Fuente y licencia

- Fuente: Kaabo USA, tienda oficial del fabricante (producto "King GTR Max").
  Página: https://www.kaabousa.com/products/king-gtr-max
- Imágenes originales (página oficial, galería del producto King GTR Max):
  - -1 hero: kaabo-wolf-king-gtr-max-dual-motor-high-performance-electric-scooter-front-view-260702-black.jpg
    (vista frontal de estudio, variante negra)
  - -2 detalle: kaabo-wolf-king-gtr-max-handlebar-display-dashboard_*.webp
    (manillar con pantalla TFT, doble mástil)
  - -3 acción: Kaboo_Black_Wolf_warrior_king_gtr_max_high_performance_scooter_26072401.jpg
    (piloto con protecciones haciendo caballito al atardecer, mismo modelo negro)
- Licencia: foto oficial del fabricante; la página no declara una licencia
  libre (no CC, no dominio público). Se entrega como foto oficial con
  crédito al fabricante, igual que el resto de fotos oficiales de la caza.
  Licencia anotada como "desconocida / oficial, sin licencia libre declarada".
- No IA, no foto de otro modelo.

## Verificación de que es el modelo exacto

1. Las tres imágenes se descargaron de la página de producto oficial
   "King GTR Max" de Kaabo USA, no de la página del King GTR a secas ni
   de la del King GT Pro; los nombres de fichero originales contienen
   "gtr-max" (hero y acción) o "wolf-king-gtr-max" (detalle).
2. Verificación visual de las tres imágenes antes de entregar:
   - Hero: patinete negro de doble mástil, doble faro delantero, logo
     Kaabo en la horquilla y en la plataforma, pantalla TFT sobre el
     manillar, ruedas anchas de tacos, freno de disco delantero.
   - Detalle: mismo doble mástil con tapones rojos, mismo manillar y
     misma pantalla TFT que el hero.
   - Acción: mismo modelo negro de doble mástil, mismo faro y misma
     plataforma con iluminación, en uso.
3. Coherencia con los datos de la ficha: doble motor 2000 W, 13440 W de
   pico, batería Samsung 72 V 40 Ah, doble mástil tipo moto, pantalla TFT,
   frenos hidráulicos de cuatro pistones y neumáticos CST 100/55-7 de
   12 pulgadas; la página oficial lista exactamente esas especificaciones
   (65 mph, 13440 W, 72 V 40 Ah Samsung, 124 millas).
4. Matiz honesto: el GTR a secas comparte plataforma y exterior muy
   similar con el GTR Max; la distinción no se hace por la foto aislada
   sino por la procedencia: galería de la página oficial del GTR Max y
   nombres de fichero "gtr-max". No se usó ninguna imagen de la página
   del GTR ni del GT Pro.
5. No confundir: NO es Wolf King GT Pro (otro modelo, otra ficha) ni
   Wolf King GTR (35 Ah LG, batería desmontable; el Max es 40 Ah Samsung
   no desmontable según la propia ficha).

## Fila CSV exacta para consolidación

kaabo-wolf-king-gtr-max|Kaabo USA (tienda oficial)|https://www.kaabousa.com/products/king-gtr-max
