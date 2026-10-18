# RADARES — Madrid y Andalucía (textos para la sección)

Rama `radares-madrid-andalucia` (desde `origin/main`). Entregable: textos de los
radares de la **Comunidad de Madrid (66)** y **Andalucía (144)** para la sección
de radares (una página por radar). **Nadie publica desde esta rama: solo Grok.**

## Contenido

- `radares.csv` — 210 filas (66 Madrid + 144 Andalucía), mismas columnas que la
  plantilla oficial (`id_unico,carretera,pk,sentido,provincia,municipio,comunidad,
  tipo,velocidad_limite,lat,lon,longitud_tramo_km,video_url,fuente_url,
  fecha_verificacion,notas`). Subconjunto del dataset completo de la rama
  `radares` (que además lleva Cataluña).
- `contenido/<id_unico>.md` — 210 textos. Cuerpo idéntico al verificado en la
  rama `radares` (correcciones del veredicto de Grok del 18/10/2026 aplicadas);
  se añade **frontmatter SEO** (`seo_title`, `seo_description`) como única
  novedad de esta rama.
- `fotos.csv` — vacío (sin fotos: la plantilla solo admite foto del radar
  concreto en Wikimedia Commons; no se localizó ninguna para estos 210).

## Frontmatter SEO (nuevo en esta rama)

Cada `contenido/<id_unico>.md` lleva al inicio:

```yaml
---
seo_title: "Radar fijo A-6 km 16,7 · Madrid · DGT | RecurreTuMulta"
seo_description: "Radar A-6 km 16,7 (Madrid): radar fijo · DGT · sentido creciente. Ubicación exacta y cómo funciona. Analiza tu multa gratis antes de recurrir."
---
```

- `seo_title`: título FINAL (sufijo ` | RecurreTuMulta` incluido, 17 car.),
  **50–60 caracteres** en los 210. Único por radar; sin canibalización con el
  blog (los posts existentes hablan de recurrir multas de radar en general,
  ninguno es una página por ubicación).
- `seo_description`: **≤155 caracteres** en los 210.
- El cuerpo NO contiene importes de multa (€/euros/puntos): los importes van
  solo en la tabla oficial que pinta la plantilla de Grok desde
  `velocidad_limite`. Verificado por script: 0 coincidencias.

## Fuentes (las mismas de la plantilla oficial)

- DGT (red estatal): XML DATEX II
  https://nap.dgt.es/datex2/dgt/PredefinedLocationsPublication/radares/content.xml
- Ayuntamiento de Madrid (vías urbanas): dataset de radares fijos y móviles
  https://datos.madrid.es/dataset/300049-0-radares-fijos-moviles (solo fijos y tramo)

Cero datos inventados: celda vacía + motivo en `notas` cuando la fuente no da el
dato (p. ej. `velocidad_limite` en las 136 cabinas de Andalucía: «limite
pendiente»; municipio no publicado por el XML de la DGT).

## Autochequeo de esta entrega

- [x] 210 `id_unico` únicos; 0 parejas con misma carretera, PK a ±0,5 y mismo
      sentido (los 5 pares con mismo pk y distinto sentido/tipo llevan el
      sentido o el tipo en el `seo_title` para desambiguar).
- [x] Las 210 filas tienen lat/lon dentro de su provincia.
- [x] `velocidad_limite` rellena en 25 (Ayto. Madrid); 185 con «limite pendiente».
- [x] 0 importes de multa en los cuerpos (script).
- [x] 210/210 `seo_title` entre 50 y 60 car. (final, con sufijo); únicos.
- [x] 210/210 `seo_description` ≤ 155 car.
- [x] Ningún par de cuerpos se parece en más de un 30 % (medido en la rama
      `radares`; cuerpos idénticos aquí).
- [x] Street View: enlace con las coordenadas exactas en cada texto.
- [x] `npx tsc -b` → exit 0 (esta rama solo añade `docs/`, sin cambios de código).
