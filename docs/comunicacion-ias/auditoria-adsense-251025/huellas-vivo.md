# Huellas vivas hoy — recurretumulta.online — 25/10/2026

- Fecha de verificación: domingo 25/10/2026, mañana (CET), solo lectura.
- Método: texto servido vía `browser.open` (18 fetches de texto; sin exec para scrapear, sin tocar main/Netlify/Cloudflare, sin panel AdSense, sin censo de bytes contra producción).
- Límite del método, importante: la extracción de texto de `browser.open` NO expone las metaetiquetas `og:image`/`og:title`. Por tanto, «og logo genérico» como metaetiqueta es NO VERIFICABLE con este método. Lo que sí verifica es la imagen en cuerpo: el pie «Images:» del fetch revela el fichero realmente servido para cada `[Image N]`. Cuando ese fichero es `media/og-recurretumulta-online.png`, la imagen en cuerpo ES el logo genérico, aunque su `alt` sea temático.
- Netlify: NO reintentado por este subagente. Se mantiene el dato del padre (API 404 para el site `438b74cf-d05a-4685-9de8-7bf56a1ef7ee`). No se inventa ningún ID de deploy ni versión: en el texto servido no aparece ningún identificador de versión v4.5.5 / v4.5.5.1.
- Huella de frescura servida (no es un ID de deploy): el sitemap sirve entradas con `lastmod 2026-10-25` y la página de Barcelona dice «datos verificados el 24/10/2026». Es decir, el contenido vivo es posterior al 24/10, pero eso NO basta para afirmar que sea exactamente v4.5.5.1.

## 1. /guias/ — REAL (9 guías, sin imagen en texto)

- Sirve 200 (texto extraído completo, 13 líneas).
- Título servido: «Guías 2026: multas, radares, ITV y coche eléctrico».
- 9 tarjetas numeradas 0–8 en una sola línea: Multas de radar, Multas ZBE, Prescripción multas, Defectos que anulan multas, Multa por alcohol y drogas, Patinete eléctrico, ITV, Ayudas coche eléctrico (Plan Auto+), Eléctrico segunda mano.
- Texto de cierre: «Este índice recoge únicamente las guías publicadas en la web: las 9 que existen hoy, ni una más.»
- Imagen en texto: NINGUNA (no hay pie «Images:»). Conclusión: 9 guías en tarjetas, sin imagen en el texto extraído.

## 2. /guias/zbe/ — REAL, con matiz sobre la imagen

- Sirve 200 (96 líneas). Título: «Multa ZBE: 200 € (100 € con pronto pago) y cómo recurrirla».
- Imagen en cuerpo: SÍ hay una, pero su fichero servido es el logo genérico:
  - Alt en texto: «Cámara de control de tráfico en una calle de Madrid con señal de Zona de Bajas Emisiones».
  - Fichero real (pie Images): `https://recurretumulta.online/media/og-recurretumulta-online.png`.
- Es decir: el `alt` es temático, pero la imagen servida es el logo genérico. El `og:image` como metaetiqueta queda NO VERIFICABLE con este método (ver límite del método).

## 3. /guias/alcohol-drogas/ — REAL, mismo matiz que ZBE

- Sirve 200 (109 líneas). Título: «Multa por alcohol: 500 o 1.000 € y límite de 0,25 mg/l».
- Imagen en cuerpo: SÍ hay una, con el mismo patrón:
  - Alt en texto: «Alcoholímetro de la policía en un control de tráfico».
  - Fichero real (pie Images): `https://recurretumulta.online/media/og-recurretumulta-online.png`.
- Conclusión: imagen temática solo en el `alt`; el fichero servido es el logo genérico. Meta `og:image`: NO VERIFICABLE con este método.

## 4. /multas/ — REAL, con discrepancia de conteo de radares

- Sirve 200 (80 líneas). Título: «Multas DGT por provincia: guías de las 52 provincias».
- Foto temática en cuerpo: SÍ, y esta vez con fichero propio (no logo):
  - «[Image 0: Notificación de multa de tráfico sobre el salpicadero de un coche]» → `https://recurretumulta.online/media/file_vDdPneQJUPD2LTqHJjgfAH9Z.webp`.
- ¿Cuántos radares dice? 961, no 1.007: «Mapa de radares de España 961 radares fijos con ficha, mapa y Street View».
- Discrepancia viva: /multas/ dice 961 mientras /radares/ dice 1.007 (ver punto 5). Meta `og:image`: NO VERIFICABLE con este método.

## 5. /radares/ — REAL (1.007), sin imagen en texto

- Sirve 200 (60 líneas). Título: «Radares por provincias».
- Texto exacto: «los 1007 radares fijos, de tramo y de cabina del listado oficial (DGT y organismos autonómicos de tráfico) que tenemos fichados en España».
- Imagen en texto: NINGUNA (no hay pie «Images:»). Meta `og:image`: NO VERIFICABLE con este método.
- Nota: /provincias/ (ver punto 11) sirve hoy exactamente este mismo contenido.

## 6. /multas/barcelona/ vs /provincias/barcelona/ — REAL: contenido idéntico en texto

- Ambas sirven 200 con el mismo título: «Multas en Barcelona: recurre en 20 días con análisis gratis».
- Ambas extraen 362 líneas idénticas, incluyendo:
  - «114 radares fijos del listado oficial: carretera, punto kilométrico, sentido, municipio y límite de velocidad.»
  - «Fuente: listado oficial de radares fijos (El Servei Català de Trànsit…) — datos verificados el 24/10/2026.»
- Imagen en texto: NINGUNA en ninguna de las dos (sin pie «Images:» en ambos fetches).
- Conclusión: duplicado vivo confirmado a nivel de texto servido (dos URLs, mismo cuerpo). No se puede afirmar identidad byte a byte con solo texto, pero el texto extraído es línea por línea el mismo.

## 7. /radares/a-1-125-5-decreciente-cabina/ — REAL: NO es ficha de radar, es «Multa en Segovia»

- Sirve 200, pero el título servido es «Multa en Segovia: 20 días para recurrir y análisis gratis» (116 líneas).
- El radar buscado aparece solo como una línea dentro de la lista provincial: «A-1 pk 125.49 — Fresno de la Fuente (decreciente) 120 km/h», dentro de «13 radares fijos del listado oficial».
- No hay ficha individual de radar (ni carretera/pk/sentido como cabecera, ni mapa/Street View en texto).

## 8. /radares/a-1-138-1-creciente-cabina/ — REAL: mismo caso, «Multa en Segovia»

- Sirve 200, título idéntico al anterior: «Multa en Segovia: 20 días para recurrir y análisis gratis» (116 líneas, mismo cuerpo).
- El radar aparece solo como línea de lista: «A-1 pk 138.149 — Honrubia de la Cuesta (creciente) 120 km/h», dentro de los mismos «13 radares fijos».
- Conclusión: ambas URLs de radar resuelven hoy a la página provincial de Segovia, no a una ficha de radar. El patrón es el mismo que el de Barcelona: la URL «hija» sirve el contenido «padre» provincial.

## 9. /fichas-tecnicas/ — REAL: discrepancia título 4.583 frente a cuerpo 4.620

- Sirve 200 (extracción muy larga, 98.671 líneas según el fetch; solo se leyeron las primeras).
- Título de la pestaña servida: «Fichas técnicas: 4.583 coches, motos y patinetes con precio».
- Cuerpo servido, líneas iniciales:
  - «Base de datos 2026 · 4620 modelos»
  - «4620 fichas técnicas con datos verificados: precio, potencia, autonomía, etiqueta DGT y opiniones reales de propietarios.»
  - «2424 fichas de coches» · «Por Daniel, fundador y responsable de contenidos · Actualizada en octubre de 2026».
- Conclusión: la discrepancia 4.583 (título) vs 4.620 (cuerpo) SIGUE VIVA hoy. Meta `og:image`: NO VERIFICABLE con este método.

## 10. /comunidades/madrid/ — REAL: la frase está viva

- Sirve 200 (148 líneas). Título: «Multas en Madrid: las tramita la DGT y cómo recurrirlas».
- Frase exacta servida: «El listado de radares con ficha individual de Comunidad de Madrid se está completando por comunidades. Mientras tanto, consulta el índice completo de radares y la guía de radares de tráfico».
- Conclusión: la frase «se está completando por comunidades» está servida hoy, literalmente.

## 11. /motos/velca-bora-2025-ficha-tecnica-precio/ — REAL: aviso + sin foto del modelo en texto

- Sirve 200 (187 líneas). Título: «Velca Bora 2025: precio, ficha técnica y 2,7 CV».
- Primera línea servida, literal: «Foto oficial pendiente de verificación».
- Única imagen en el texto extraído: «[Image 0: Cosa, la IA que gestiona RecurreTuMulta.online]» → `https://recurretumulta.online/media/og-recurretumulta-online.png` (logo genérico, no la moto).
- La sección «Galería» dice «Fotos oficiales de Velca (prensa del fabricante).» pero en el texto extraído NO aparece ningún marcador de imagen dentro de la galería.
- Conclusión: empieza con el aviso y no sirve foto del modelo en el texto extraído. (Si la galería carga por JS, eso sería NO VERIFICABLE con este método; en texto, no hay foto.)

## 12. /blog/como-recurrir-una-multa-de-trafico-pasos-plazos/ — REAL: 404 hoy

- El fetch de texto devuelve error HTTP 404: «Page not found … (HTTP error response, http_status=404)».
- Conclusión: 404 confirmado hoy, coherente con lo esperado (la central dedupe aún no está en vivo). No se reintentó la misma llamada sin cambios, conforme a la instrucción del sistema.

## 13. /herramientas/ — REAL en título, NO VERIFICABLE en nº de tarjetas

- Sirve 200 (28 líneas). Título servido: «20 herramientas gratis para conductores: kW a CV, ITV y DGT».
- El texto extraído solo contiene preguntas frecuentes (conversor kW a CV, neumáticos ITV, valor venal) y la lista de herramientas dentro de una respuesta; NO aparecen tarjetas numeradas/contables en el texto.
- Conclusión: el título «20 herramientas» está vivo, pero el conteo «21 tarjetas» es NO VERIFICABLE con fetch de texto (las tarjetas, si existen, no se extraen como tales; podrían renderizarse por JS). No se afirma ni 20 ni 21 tarjetas.

## 14. Sitemap — SIRVE, conteo NO VERIFICABLE (no inventado)

- `https://recurretumulta.online/sitemap.xml` sirve 200.
- Primera entrada visible: la home con `lastmod 2026-10-25` y prioridad 1.0; las entradas siguientes también llevan `2026-10-25`.
- La extracción concatena todas las URLs en líneas larguísimas (33 «líneas» de paginación que no equivalen a URLs) y queda truncada en la vista; por tanto el conteo total NO se puede establecer con este método y NO se inventa (ni 7.001 ni ningún otro número).
- Conclusión: sitemap vivo y fechado hoy 25/10/2026; conteo NO VERIFICABLE sin censo completo, que además estaba prohibido en esta tarea.

## 15. Menú y flujo menú → Provincias → radares — PARCIALMENTE VERIFICABLE / menú NO VERIFICABLE

- La extracción de texto de la home (`/`) NO incluye la barra de navegación como lista de enlaces: no aparece ninguna entrada de menú «Radares» en el texto servido. Por tanto, la entrada «Radares» en el menú es NO VERIFICABLE con fetch de texto (necesitaría inspección visual / navegador vivo, fuera del alcance de este subagente).
- Lo que SÍ está servido:
  - `/provincias/` sirve hoy exactamente el mismo contenido que `/radares/` («Radares por provincias», «los 1007 radares…», secciones por comunidad). Es decir, la ruta «Provincias» ES, en contenido servido, el índice de radares.
  - `/comunidades/` sirve un índice de 19 comunidades con tarjetas («50 radares con ficha» Aragón, «63 radares con ficha» Galicia, etc.) y enlaces a «Multas por provincia: las 52 guías locales» e «Índice completo de radares de velocidad».
  - `/radares/` enlaza en texto al «índice general de radares» y `/multas/` enlaza al «Mapa de radares de España».
- Conclusión: el flujo en contenido (comunidades/provincias → índice de radares → provincias) existe como rutas y enlaces en texto, pero la existencia literal de la entrada «Radares» en el menú visible NO queda verificada con este método.

## Resumen de conclusiones

| Ruta | Conclusión |
|---|---|
| /guias/ | REAL: 9 tarjetas, sin imagen en texto |
| /guias/zbe/ | REAL: imagen en cuerpo = fichero logo genérico (alt temático) |
| /guias/alcohol-drogas/ | REAL: imagen en cuerpo = fichero logo genérico (alt temático) |
| /multas/ | REAL: foto temática propia (webp); dice 961 radares |
| /radares/ | REAL: dice 1.007 radares; sin imagen en texto |
| /multas/barcelona/ = /provincias/barcelona/ | REAL: texto idéntico (362 líneas), sin imagen |
| /radares/a-1-125-5…/ y /radares/a-1-138-1…/ | REAL: ambas sirven «Multa en Segovia», no ficha de radar |
| /fichas-tecnicas/ | REAL: título 4.583 vs cuerpo 4.620 sigue vivo |
| /comunidades/madrid/ | REAL: frase «se está completando por comunidades» viva |
| /motos/velca-bora-2025…/ | REAL: «Foto oficial pendiente de verificación», sin foto del modelo en texto |
| /blog/como-recurrir…/ | REAL: 404 hoy |
| /herramientas/ | REAL título «20 herramientas»; nº de tarjetas NO VERIFICABLE |
| sitemap.xml | SIRVE, fechado 25/10/2026; conteo NO VERIFICABLE, no inventado |
| Menú «Radares» | NO VERIFICABLE con fetch de texto; rutas provincias→radares sí servidas |

## Sobre la versión viva

- No hay ningún identificador de versión ni ID de deploy en el texto servido, así que NO se puede confirmar ni desmentir «v4.5.5 / v4.5.5.1» solo con estas huellas.
- Lo que sí confirman las huellas: contenido vivo con fechas 24/10/2026 (verificación Barcelona/Segovia) y sitemap 25/10/2026, y la persistencia hoy de todos los hallazgos de la auditoría previa (duplicados Barcelona, radares→Segovia, 4.583/4.620, frase de Madrid, aviso Velca, 404 del blog central, imágenes-logo en guías). Ninguno de esos hallazgos ha cambiado hoy respecto a la auditoría previa.
- Verificación pendiente para el padre (requiere navegador vivo, fuera de mi alcance): meta `og:image` real de cada ruta, entrada «Radares» en el menú visible, nº de tarjetas de /herramientas/ y conteo del sitemap.
