# RADARES FIJOS DE ESPAÑA

Proyecto encargado por Grok el 18/10/2026 (tablón de `docs/comunicacion-ias/grok.md`).
Daniel quiere **todos los radares fijos de España** (17 CCAA + Ceuta + Melilla).
Niky prepara los datos; **Grok revisa y publica**. **Nadie publica desde esta rama.**

## Archivos

- `radares.csv` — dataset único. UTF-8, separado por comas, cabecera en primera línea.
- `contenido/<id_unico>.md` — texto único por radar (350–500 palabras), calidad visual.
- `fotos.csv` — fotos solo de ESE radar concreto, solo Wikimedia Commons (autor + licencia).
- Cobertura — tabla de estado por comunidad (abajo).

## Columnas de `radares.csv` (en este orden)

`id_unico,carretera,pk,sentido,provincia,municipio,comunidad,tipo,velocidad_limite,lat,lon,longitud_tramo_km,video_url,fuente_url,fecha_verificacion,notas`

- `id_unico`: slug estable `carretera-pk-sentido-tipo`, minúsculas, sin tildes, PK con un decimal y guion en vez de punto. Ej: `a-6-25-3-creciente-fijo`. En tramo, PK de inicio. Sentido desconocido: `ambos`.
- `pk`: km con punto decimal. En tramo: PK de inicio; el final en notas («fin pk 30.1»).
- `sentido`: creciente / decreciente / ambos; destino en notas si la fuente lo da.
- `tipo`: fijo / tramo / cabina (exacto, lo piden los iconos de Grok).
- `velocidad_limite`: km/h. Si no hay fuente oficial: celda vacía + «limite pendiente» en notas.
- `lat,lon`: WGS84, 5 decimales. `longitud_tramo_km`: solo en tramos.
- `video_url`: vídeos oficiales (YouTube de la DGT) relevantes.
- `fuente_url`: URL exacta del fichero oficial. `fecha_verificacion`: AAAA-MM-DD.

## Fuentes oficiales (SOLO estas; nada de webs de avisadores)

1. **DGT (red estatal, sin Cataluña ni País Vasco)**: XML DATEX II
   https://nap.dgt.es/datex2/dgt/PredefinedLocationsPublication/radares/content.xml
   (ficha: https://nap.dgt.es/dataset/radares-fijos-dgt).
   ~737 ubicaciones: 690 `nonLinkedPoint` (fijo) + 47 `segment` (tramo, con `from` y `to`).
   Trae: `roadNumber`, PK (`referencePointDistance`, revisar la unidad),
   sentido (`directionRelative`/`directionNamed`), provincia (`provinceINEIdentifier`),
   municipio (`townName`), lat/lon WGS84. **NO trae la velocidad límite.**
2. **Cataluña (Servei Català de Trànsit)**: TXT
   https://transit.gencat.cat/web/.content/documents/seguretat_viaria/radars.txt
   (catálogo: https://datos.gob.es/es/catalogo/a09002970-radares-fijos-de-cataluna).
   ~245 líneas: Via, PK, Velocitat, X/Y UTM ETRS89 huso 31N (EPSG:25831) → convertir a WGS84.
   PK «A-B» = tramo, sentido del orden (de A a B). CUIDADO: filas con X/Y mal escritas
   (B-10, C-16, C-17, A-2 563) y un duplicado exacto (B-10 18,5). Si una coordenada no
   cae en Cataluña: lat/lon vacíos + «coordenada de origen errónea» en notas.
3. **País Vasco (Trafikoa)**: mapa
   https://apps.trafikoa.euskadi.eus/lfr/web/trafikoa/cabinas-de-radar-fijo
   (solo lo que se lea con claridad). Bizkaia 2005
   (https://geo.bizkaia.eus/arcgisserver/rest/services/Garraioa_Transporte/GHCN/MapServer/190):
   solo contraste, nunca fuente única.
4. **Madrid ciudad (municipal)**: https://datos.madrid.es/dataset/300049-0-radares-fijos-moviles
   (WGS84, CC BY 4.0). Solo fijos y tramo. Avda. de Córdoba: solo el radar de salida.
   Barcelona ciudad: no hay dataset propio. No inventar.

## Reglas contra duplicados

1. Misma carretera, PK a ±0,5 km y mismo sentido = UN registro. Gana la fuente más
   oficial para esa vía; la otra se anota en notas.
2. Un tramo es UN registro: inicio y fin no cuentan como dos radares.
3. Cruza siempre las fuentes entre sí y entre agentes.
4. `id_unico` no se repite nunca.
5. Un radar en el límite entre dos comunidades = la comunidad cuya provincia contiene
   las coordenadas.

## PROHIBIDO INVENTAR

Dato sin fuente oficial → celda vacía + motivo en `notas`. Nada de velocidades
«típicas», municipios deducidos ni coordenadas aproximadas.

## Contenido por radar (obligatorio)

- `contenido/<id_unico>.md`: 350–500 palabras de texto ÚNICO (sin copy-paste ni
  plantillas que solo cambien el nombre). Carretera, entorno, tramo peligroso,
  límite y por qué está ahí, cuándo multa, cómo afrontarlo, radares cercanos.
  Ningún texto puede parecerse a otro en más de un 30 % (autochequear).
- Street View: **enlace** a Google Street View en las coordenadas exactas del radar.
  Solo el enlace; **prohibido** pegar capturas.
- Fotos: solo si la foto es de ESE radar concreto. Solo Wikimedia Commons, con autor
  y licencia en `fotos.csv`. **Nunca** fotos de medios ni de Google.
- Vídeos oficiales relevantes (YouTube de la DGT) van en `video_url` del CSV.

## Lotes y autochequeo

- Se empieza por **Madrid, Cataluña y Andalucía**; el resto en paralelo por agentes.
- Cada lote en su **propio commit** en `radares`; se anuncia en el tablón con
  `@grok lote listo radares <comunidad>`.
- Autochequeo OBLIGATORIO antes de cada entrega (pegar el resultado en el aviso):
  - [ ] 0 `id_unico` repetidos y 0 parejas con misma carretera, PK a ±0,5 y mismo
        sentido, **en todo el CSV** (también entre agentes).
  - [ ] Todas las lat/lon dentro de su provincia.
  - [ ] `velocidad_limite` rellena, o vacía con «limite pendiente». Indicar cuántas faltan.
  - [ ] Cada `fuente_url` responde 200.
  - [ ] Recuento por tipo y por provincia, y tabla de cobertura actualizada.
  - [ ] Ningún par de textos se parece en más de un 30 %.
  - [ ] Cero datos inventados.
  - [ ] Street View: enlace válido a las coordenadas del radar.
  - [ ] Fotos (si las hay) con autor + licencia en `fotos.csv`.

## Cobertura

| Comunidad / ciudad | Agente asignado | Fuente principal | Estado (pendiente/en curso/entregado) | Nº radares |
|---|---|---|---|---|
| Comunidad de Madrid | Niky | DGT + Ayto. Madrid | entregado | 66 |
| Cataluña | Niky | Servei Català de Trànsit | entregado (224; 17 excluidos pendientes de coordenadas, ver abajo) | 241 |
| Andalucía | Niky | DGT | entregado | 144 |
| Aragón | | DGT | pendiente | |
| Asturias | | DGT | pendiente | |
| Illes Balears | | DGT | pendiente | |
| Canarias | | DGT (comprobar cobertura) | pendiente | |
| Cantabria | | DGT | pendiente | |
| Castilla-La Mancha | | DGT | pendiente | |
| Castilla y León | | DGT | pendiente | |
| Comunitat Valenciana | | DGT | pendiente | |
| Extremadura | | DGT | pendiente | |
| Galicia | | DGT | pendiente | |
| Región de Murcia | | DGT | pendiente | |
| Navarra | | DGT (comprobar si la Policía Foral publica algo) | pendiente | |
| País Vasco | | Trafikoa (mapa) | pendiente | |
| La Rioja | | DGT | pendiente | |
| Ceuta | | DGT | pendiente | |
| Melilla | | DGT | pendiente | |

Si una comunidad no tiene ningún radar en las fuentes oficiales, la tabla tiene que
decirlo expresamente («0 en fuente X, comprobado el AAAA-MM-DD»). Ninguna fila en blanco.

## Registros excluidos de la entrega (Cataluña, 17)

Los 17 registros siguientes están en `radares.csv` con `lat`/`lon` y `provincia`
vacíos y **no cuentan como entregables** (nota en cada fila: «coordenada de
origen errónea»): las coordenadas X/Y que publica el Servei Català de Trànsit
para ellos no caen en Cataluña (filas mal escritas en el TXT de origen), así
que no se pueden verificar ni situar en su provincia. Quedan excluidos hasta
tener coordenadas de fuente oficial (mapa del SCT). Sus textos existen en
`contenido/` pero tampoco son entregables todavía. La provincia no puede quedar
vacía en lo entregado: lo entregado de Cataluña son **224 radares**.

- `a-2-501-5-creciente-tramo` (A-2 pk 501,5, tramo)
- `a-2-506-3-decreciente-tramo` (A-2 pk 506,3, tramo)
- `a-2-563-2-creciente-tramo` (A-2 pk 563,2, tramo)
- `ap-7-146-6-decreciente-tramo` (AP-7 pk 146,6, tramo)
- `b-10-18-5-ambos-fijo` (B-10 pk 18,5, fijo; además duplicado exacto en fuente, unificado)
- `c-16-2-1-creciente-tramo` (C-16 pk 2,1, tramo)
- `c-16-5-2-decreciente-tramo` (C-16 pk 5,2, tramo)
- `c-17-18-2-decreciente-tramo` (C-17 pk 18,2, tramo)
- `c-17-19-8-decreciente-tramo` (C-17 pk 19,8, tramo)
- `c-17-33-5-ambos-fijo` (C-17 pk 33,5, fijo)
- `c-17-37-8-creciente-tramo` (C-17 pk 37,8, tramo)
- `c-17-41-1-decreciente-tramo` (C-17 pk 41,1, tramo)
- `c-58-15-0-decreciente-tramo` (C-58 pk 15,0, tramo)
- `c-59-4-9-creciente-tramo` (C-59 pk 4,9, tramo)
- `c-59-8-8-decreciente-tramo` (C-59 pk 8,8, tramo)
- `n-2-751-4-creciente-tramo` (N-2 pk 751,4, tramo)
- `n-2-758-8-decreciente-tramo` (N-2 pk 758,8, tramo)

Autochequeo con la exclusión: 0 `id_unico` repetidos en todo el CSV; las 224
filas entregadas de Cataluña tienen lat/lon dentro de su provincia y
`velocidad_limite` rellena; las 17 excluidas están documentadas aquí y en sus
notas, y no entran en ningún recuento de entregables.
