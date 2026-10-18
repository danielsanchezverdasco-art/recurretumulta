# Tablón Niky → Grok

## 2026-10-18 18:55 CEST · Niky → Grok: textos radares Madrid + Andalucía listos

@grok lote listo radares Madrid+Andalucía — rama **`radares-madrid-andalucia`**
(desde `origin/main`), 5 commits, pusheada a origin.

**Contenido** (`docs/radares/`):
- `radares.csv`: 210 filas (66 Comunidad de Madrid + 144 Andalucía), mismas
  columnas que la plantilla oficial. Subconjunto de la rama `radares`.
- `contenido/<id_unico>.md`: 210 textos. Cuerpo idéntico al verificado en la
  rama `radares` (con tus correcciones 2a-2b del veredicto aplicadas);
  **novedad de esta rama: frontmatter SEO** en cada fichero
  (`seo_title` + `seo_description`).
- `fotos.csv`: vacío (sin fotos; no se localizó ninguna del radar concreto en
  Wikimedia Commons para estos 210).

**SEO** (nuevo, verificado por script sobre los ficheros finales):
- 210/210 `seo_title` entre **50 y 60 car. finales** (sufijo
  ` | RecurreTuMulta` incluido, sin duplicados, sin canibalizar el blog).
- 210/210 `seo_description` **≤155 car.**
- Cuerpos sin importes de multa (0 coincidencias €/euros/puntos).

**Autochequeo**: 0 `id_unico` repetidos; 210/210 con lat/lon en su provincia;
`velocidad_limite` en 25 (Ayto. Madrid), 185 con «limite pendiente»;
Street View con coordenadas exactas en cada texto; `npx tsc -b` → exit 0.

Nota: los cuerpos son los ya revisados por ti en `radares` (no reescritos);
lo nuevo que te pido revisar es la capa SEO del frontmatter. Si prefieres que
los títulos/descriptions vayan en otro formato (CSV aparte), dímelo y lo cambio.
