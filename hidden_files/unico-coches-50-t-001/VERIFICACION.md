# Verificación texto único — letra T, tanda 50 (WIP, NO verificada a 0)

## Alcance de esta rama
- 50 primeras fichas de coches con slug que empieza por `t`, en el orden de
  `scripts/coches-slugs.txt` (de 93 fichas T en total; quedan 43).
- Solo se reescribieron `pros` y `contras` en los ficheros de datos
  `src/lib/comparador-coches-*.ts` (12 ficheros). NO se tocaron componentes
  (`src/components`, `src/pages`), ni fotos (`public/media`), ni `main`,
  ni Netlify. Los posts parejos del blog NO se reescribieron en esta tanda.

## Método de verificación
- Script: `hidden_files/unico-coches-50-t-001/verify-8gram.py`
- Comando: `python3 hidden_files/unico-coches-50-t-001/verify-8gram.py`
  (salida completa en `verificacion-log.txt`)
- Corpus: todo el texto de `src/lib/*.ts` tras la edición (672 ficheros,
  5.736.070 hashes distintos de ventanas de 8 palabras).
- Normalización: minúsculas, solo letras/números (con acentos).
- Una ventana del texto nuevo cuenta como coincidencia si su recuento en el
  corpus supera las veces que aparece en el propio texto nuevo de esa página
  (así no se cuentan auto-coincidencias, pero sí las de otras páginas,
  incluidos los posts parejos y las demás páginas de la tanda).

## Resultado: NO es 0 — esta tanda NO se entrega como "0 coincidencias"
- Total: **403 ventanas distintas con colisión**.
- Páginas con ≥1 colisión: **48 de 50**.
- Páginas a 0: solo 2 — `tank-300-hooke-trail-2026-precio-ficha-tecnica`
  y `tesla-cybercab-2026-precio-ficha-tecnica`.
- Peores: Model S Plaid (23), Model X Plaid (23), Model Y Performance (18),
  bZ4X 224 (18), C-HR 200H (17), Model 3 Performance (17).
- Causas principales (ver `colisiones.txt` con las ventanas exactas):
  1. Frases calcadas de los posts parejos (p. ej. la FAQ del blog del
     Tank 300 2.0T: "en china parte de 198 800 yuanes unos").
  2. Patrones repetidos por mí entre fichas de la propia tanda
     (p. ej. "segundos de 0 a 100 km h dejan al" en Tank 300 2.0T y en
     Model S Plaid; "solo se vende en china y su precio en euros se
     convierte desde" en Tank 400 Hi4-T y Hi4-Z).
- El CSV `verificacion-unico-coches-50-t-001.csv` lleva los recuentos
  REALES por URL, no ceros. No se ha falseado ningún recuento.

## Pendiente antes de que esto cuente como entrega 0
- Ronda de corrección: reescribir cada frase que contiene una ventana de
  `colisiones.txt` (romper la ventana con un dato propio dentro de las
  primeras 8 palabras) y volver a pasar el script hasta total 0.
- No se verificó la página renderizada completa (componentes, notas de
  coste, blog parejo sin reescribir); el 0 de esta tanda cubre solo el
  texto nuevo de pros/contras.

## Estado
Trabajo guardado en rama por orden de cambio de plan de Cosa 24/10 20:14
(terminar esta tanda, subirla y parar). Sin nueva asignación, no se sigue.
