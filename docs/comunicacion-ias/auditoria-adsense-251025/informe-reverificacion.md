# Re-verificación AdSense contra el vivo de hoy, 25/10/2026 — LISTA LIMPIA

Solo informe. No se reescribió ni publicó nada; no se tocó main, Netlify, Cloudflare, fotos de Niky ni el panel AdSense; no se escribió en merlin.md. Envío a Grok sigue PAUSADO hasta que el padre enseñe esto al usuario.

## 1. Versión viva de hoy, identificada por huellas, NO por un ID inventado

- No hay ID de deploy ni cadena «v4.5.5 / v4.5.5.1» en el texto servido hoy. No se afirma ningún deploy.
- API de Netlify: el padre obtuvo 404 para el site 438b74cf-d05a-4685-9de8-7bf56a1ef7ee; este trabajo no la reintentó y no inventa un deploy.
- Huellas servidas hoy 25/10 (18 fetches de texto, dentro del límite ~50, sin censo de bytes contra producción):
  - Sitemap sirve 200 con entradas lastmod 2026-10-25; conteo NO verificable con fetch de texto (líneas truncadas, censo prohibido) y no se inventa. No son 8.000 ni 9.000 por ninguna evidencia de hoy.
  - /guias/ sirve 200 con 9 guías, texto «las 9 que existen hoy, ni una más»; el 404 del censo 24/10 ya no es el vivo actual.
  - /multas/ dice 961 radares, /radares/ dice 1.007, sin explicación.
  - /multas/barcelona/ y /provincias/barcelona/ con texto idéntico línea por línea (362 líneas, «114 radares fijos… datos verificados el 24/10/2026»).
  - /radares/a-1-125-5-decreciente-cabina/ y /radares/a-1-138-1-creciente-cabina/ sirven «Multa en Segovia», no ficha de radar.
  - /fichas-tecnicas/ título 4.583 frente a cuerpo 4620 modelos / 4620 fichas.
  - /comunidades/madrid/ frase literal «se está completando por comunidades».
  - Velca Bora empieza «Foto oficial pendiente de verificación», sin foto del modelo en texto.
  - Central dedupe /blog/como-recurrir-una-multa-de-trafico-pasos-plazos/ hoy 404, esperado (aún no en vivo).
  - /herramientas/ título «20 herramientas», tarjetas no contables en texto (JS).
  - /guias/zbe/ y /guias/alcohol-drogas/: imagen en cuerpo = fichero logo genérico media/og-recurretumulta-online.png, aunque el alt sea temático. Meta og:image NO verificable con fetch de texto.
- No se usó el clon local ~/recurretumulta-deploy como base (dist local 7.880 URLs frente a 7.001 en v455, anterior al vivo). Las listas 01:59 solo se usaron como punto de partida a re-comprobar, nunca como fallo vigente.

## 2. Conteos A/B/C/D (filas, no URLs)

Total auditado: 5.011 filas = contenido 4.937 + portadas 26 + herramientas 48.

| Clase | Contenido | Portadas | Herramientas | Total filas |
|---|---|---|---|---|
| A — TODAVÍA REAL hoy en vivo | 26 | 10 | 1 | 37 |
| B — YA ARREGLADO en rama entregada, pendiente de publicar por Grok + re-medir | 3.450 | 1 | 0 | 3.451 |
| C — YA ARREGLADO en vivo hoy / viejo | 6 | 0 | 0 | 6 |
| D — NO VERIFICABLE hoy (declarado, no asumido) | 1.455 | 15 | 47 | 1.517 |

Lista limpia A: 37 filas, 32 URLs distintas. Ver lista-limpia-A.csv.

- A contenido (26 filas): 14 títulos duplicados en radares (congelados hasta 1/11, no tocar antes) + 5 casos especiales (Frenar 600 SIN-FUENTE, Frenar 200, Bigster baja, e:Ny1 doble ruta ×2; no tocar sin decisión Grok) + plantilla sitio agregado (bloque promo + <main> roto) + archipiélago agregado 569 URLs + contadores /fichas-tecnicas/ + cifra radares /radares/ y /multas/ + descripción genérica/FAQ duplicada en home + geo /comunidades/madrid/.
- A portadas (10): /guias/zbe/, /guias/alcohol-drogas/, /multas/ (asignar su foto temática de cuerpo como portada, no buscar foto nueva), /multas/barcelona/, /provincias/barcelona/, /radares/, /radares/a-1-125-5…/, /radares/a-1-138-1…/, /fichas-tecnicas/, Velca Bora.
- A herramientas (1): /herramientas/ título «20» (tarjetas no contables en texto; corregir título al número real tras comprobación visual).
- B contenido (3.450): en su mayoría duplicado_8g_ficha_plantilla en coches/motos/patinetes/autocaravanas/campers (3.185 filas), cuyos bloques cambiaron en dedupe-8g-merlin @1fbdccb2 (ZBE 45c41193, Fuentes c7b19108, patinetes 232bf7ba, sin-dato fd64194a, tsc e01484b7), más hubs 188 en hubs-marca-188-merlin @f83131ed, más URLs en dedupe-34 (36 items) y en reescritura verificada (72 entradas). B NO significa 0% en vivo: falta publicar por Grok y re-medir página completa con prerender.
- B portadas (1): central dedupe, hoy 404 esperado, en dedupe-8g-merlin @16374426; tras publicar seguirá sin portada (sin campo de imagen, lane Niky).
- C (6): 5 legales (indexación noindex + fuera de sitemap) + /guias/ 404 ya resuelto en vivo hoy (200, 9 guías).
- D (1.517): la mayor parte es unicidad pares hermanas (836 filas, sin arreglo específico en rama, re-medición de pares pendiente), duplicado blog no en dedupe/reescritura, thin radar/provincia (palabras propias v455 sin re-medición hoy), blog/ficha sin enlace no comprobado hoy, F0-F11 de muestra antigua no re-verificados, portadas SIN_VERIFICAR_BYTES/REAL v455 sin re-verificación hoy, y 47/48 herramientas (CARGA_TEXTO no es prueba funcional; NO_PROBADA sin probar).

## 3. Discrepancias nuevas que cambian la auditoría anterior (declaradas)

- Reescritura-169: la cifra «164 distintas, no 169, por 4 duplicados» NO es reproducible desde la rama: diff cabeza-vs-borrador en 45 ficheros solo muestra 72 entradas que difieren (33 coches + 6 motos + 26 patinetes + 7 blogs). Las excepciones con nombres no están en la rama: 9 fichas con prosa intacta solo por aritmética de mensajes (7 en t3 + 2 en t4), «14 blogs t3 sin cambio» no verificado, «4 fichas t3 sin cambio» no coincide (el mensaje dice 7), «4 bajas no recreadas» no verificado (solo «Grecale Trofeo fuera» nombrado). Por eso solo 72 URLs de reescritura cuentan como B verificada; el resto de la lista 169 original queda en D, no en B.
- Dedupe «34»: la lista verificada en rama tiene 36 items (21 fichas + 14 blogs + 1 central nueva), patinetes 13 no 12, y Speedway Mini 4 Pro no aparece en dedupe-34.csv (extras: ride-100-pro-2, doble-z75). La fila de plantilla de patinetes sigue siendo B por cambio de componente global, pero la fila específica de lote de Speedway queda en D hasta aclarar su lista.
- Borrador-final-2410 @9f1b8fec integra guías al completo y hubs tandas 1–3 (150 claves), NO hubs tanda 4 (38 claves), NO prosa de reescritura, NO dedupe, NO unico. No es base limpia para esos trabajos.
- Guías: guias-404-merlin @2e47d831 solo arregla el 404 (índice, ruta, routes.json), sin portadas y sin contenido nuevo de guías. Las portadas de guías siguen en A/D, no en B.
- Dedupe NO tocó: comparador #5/#9, coste #12, mantenimiento #30, <main>, descripción genérica de sitio. El «promo 1.089 palabras» de sitio no es localizable como tal en la rama (los promo de los 14 blogs sí se sustituyeron).
- Unico-coches-01 @71b32da7 verificada, pero es línea independiente, no está en borrador ni en dedupe; su medición −66% es declarada en mensaje, no re-medida aquí.
- «Pendiente de publicar por Grok» es hipótesis de la tarea, no hecho comprobado: el cruce de ramas no verificó si Grok ya fusionó/publicó alguna de estas ramas. Si Grok ya publicó alguna, sus filas B pasarían a C o a re-medir en vivo, no a A.

## 4. Lo que queda en D y necesita navegador vivo (para el padre, no para un subagente genérico)

Meta og:image real por ruta, entrada «Radares» en el menú visible, nº de tarjetas de /herramientas/, conteo del sitemap, comprobación visual de portadas (índice /guias/, guías no muestreadas, Yadea/Segway/Voge/Corolla), y pruebas funcionales de herramientas (clic, cálculo, buscador, duelo, analizador IA, pago). No se declaran correctas ni rotas.

## 5. Ficheros

- clasificacion-contenido.csv (4.937 filas con clase y evidencia)
- clasificacion-portadas.csv (26 filas)
- clasificacion-herramientas.csv (48 filas)
- lista-limpia-A.csv (37 filas, 32 URLs)
- huellas-vivo.md, cruce-ramas.md, hubs-188.csv, reescritura-169-urls.csv (72 verificadas), dedupe-34.csv (36 items)
