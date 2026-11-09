# Plan de posicionamiento SEO · recurretumulta.online · 17-oct-2026

Solo análisis: no se ha tocado el sitio ni el repo.

## 0. Fuentes y qué dio datos

| Fuente | Estado | Qué se usó |
|---|---|---|
| Search Console API (Ryze `runRawSearchAnalytics`) | **No funcionó.** `listSites` dio timeout y después «subscription_required: No active Ryze plan». | Se usó la **exportación manual de GSC «Últimos 3 meses», Web**, de hoy a las 12:15 (`/workspace/seo/gsc_consultas_3meses.csv` y `gsc_paginas_3meses.csv`). Trae las 1.000 consultas y las 1.000 páginas principales. |
| Google Ads Keyword Planner (`generateKeywordIdeas` / `HistoricalMetrics`) | **No funcionó.** «subscription_required» (no hay plan Ryze activo). | **No hay volúmenes de búsqueda.** En el CSV la columna `volumen` dice «sin dato». No se ha inventado ninguna cifra. |
| Autocompletar de Google (hl=es, gl=es) | OK | Confirma qué búsquedas existen de verdad para cada semilla (`plan/autocomplete.tsv`). No da volumen. |
| Competencia (WebSearch) | OK, con un matiz | Resultados para unas 30 búsquedas. Es un índice externo y **no es el SERP exacto de google.es**: sirve para ver el tipo de competidor, no la posición exacta. |
| Web en vivo (curl) | OK | Title, meta, H1, nº de palabras y redirecciones de 27 páginas clave (`plan/titles.txt`). |

**Para tener volúmenes reales** hay que activar Ryze (enlace de prueba que devolvió la herramienta: https://reports.get-ryze.ai/pay/mcp-86d890aa-1c27-494d-947c-5e50b6392710) o que Daniel exporte el Planificador de palabras clave desde su cuenta de Ads a un CSV. Si lo hace, relleno la columna `volumen` y recalculo las prioridades.

## 1. Diagnóstico con datos reales (GSC, 90 días)

- Las 1.000 consultas principales suman 26.747 impresiones y 681 clics. Por páginas: 40.904 impresiones y 917 clics.
- **El 85 % de las impresiones viene de dos coches chinos:**
  - Clúster Stelato G9: 92 consultas, 14.293 impresiones, CTR 0,71 %, posición media 8,0.
  - Clúster Huawei V800: 65 consultas, 8.495 impresiones, CTR 6,6 %, posición 5,0.
- **Multas, que es el negocio y lo que convierte en el analizador, casi no existe en Google:**
  - 149 consultas, 575 impresiones y 3 clics. Posición media ponderada: 49,6.
  - Solo 31 consultas de multas están en el top 30.
- La consulta «velocidad máxima» de motos está en 45 consultas, con 241 impresiones, posición ~9 y **0 clics**. Es un problema de snippet.
- Histórico de duplicados: 242 URLs aparecían con y sin «/» final, con 35.795 impresiones repartidas. **Hoy ya hacen 301 a la versión con barra** (comprobado en Stelato y en tabla-velocidad). También /blog/stelato… → /coches/stelato…/. No hace falta tocar nada; solo pedir validación en GSC.
- **Hay canibalización:** varias URLs compiten por la misma intención (ver la sección a).
- **ERROR de contenido (urgente, cuestión de honestidad y AdSense):** `/blog/multa-semaforo-en-rojo-recurrir/` dice «200 € y 6 puntos» en el title, la meta y el texto. La sanción real por saltarse un semáforo en rojo es **200 € y 4 puntos** (Anexo II de la LSV; lo confirman madrid.es y multascea). Hay que corregirlo ya.

## 2. Competencia: quién gana y con qué tipo de página

| Intención | Quién sale arriba | Tipo de página | Cómo les ganamos |
|---|---|---|---|
| Trámite (pagar, consultar puntos, consultar multas, etiqueta por matrícula, presentar recurso) | sede.dgt.gob.es, dgt.es, miDGT, sede.madrid.es | Ficha oficial del trámite | No podemos quitarles el primer puesto. Vamos a por el 2º-5º con una guía que explique el paso a paso y enlace al trámite oficial, y luego «¿y si la multa está mal? → analizador». |
| Guías informativas (tabla de velocidad, alcoholemia, ZBE, radar con una foto) | **race.es** (sale en 5 de las 30 búsquedas), inforadar.es, enterat.com, motor.elpais.com, 20minutos, abc | Guía con tabla, actualizada al año | Tabla HTML propia, fuente normativa citada (BOE/RD), fecha de revisión, FAQ y herramienta interactiva. RACE no tiene analizador. |
| Recurrir (radar, semáforo, móvil, zona azul) | Despachos: illanpanos.com, thejuris.es, multascea.es, modelosycontratos.com, asistentelegal.org, ocu.org | Artículo jurídico o modelo descargable | Argumentos concretos, modelo gratis y **subir la multa para que la IA detecte el defecto**. Es nuestro diferencial. |
| ZBE por ciudad | Ayuntamientos, race.es, tucalle.es, conductorpro.es | Página por ciudad | Página por cada ciudad que multa: mapa, horario, etiquetas, importe y recurso. |
| Furgoneta, camión o caravana (velocidad) | iberley.es (art. 48 RGC), PDF de la DGT, vianiecorental.es, eldiario.es | Artículo de ley o post de empresa de alquiler | **Hueco claro:** nadie tiene una tabla limpia por tipo de vehículo, vía y MMA con sus multas. |
| Carnet de caravana o autocaravana | dgt.es, 20minutos, benimar.es | Página de clases de permisos o blog de fabricante | Guía con tabla 750/3.500/4.250 kg y enlace a fichas de modelos ≤3.500 kg. |
| Pernoctar o multar autocaravanas | Instrucción DGT 2026 (PDF), naccaravan.es, ordenanzas (Benalmádena, Llanes), lne.es | PDF oficial o blog de nicho | La página ya existe. Añadir tabla de ordenanzas reales con su fuente y CTA para recurrir. |

## 3. Cómo se prioriza

Sin volúmenes del Keyword Planner, la prioridad se basa en:

1. **Demanda real:** impresiones en GSC y aparición en el autocompletar de Google.
2. **Facilidad:**
   - Fácil si ya estamos en posición 5-30 o si los competidores son blogs.
   - Difícil si el top lo ocupan webs oficiales.
3. **Encaje con el analizador:** máximo cuando la búsqueda es «recurrir…» o «multa por X».

Niveles:
- **P1:** hacer esta semana.
- **P2:** hacer en 2-3 semanas.
- **P3:** cuando quede hueco.

## 4. Top 15 oportunidades (cifras reales de GSC, 90 días)

| # | Oportunidad | Dato real | Fuente | Acción |
|---|---|---|---|---|
| 1 | Stelato G9 precio (clúster) | 10.398 impr., 65 clics, pos. 7,8 (92 consultas en total: 14.293 impr.) | GSC | Title/meta con «precio en España» y € visible, FAQ de precio. Con subir el CTR de 0,7 % al 3 % se ganan unos 300 clics por trimestre con el mismo tráfico. |
| 2 | Huawei V800 precio | 7.598 impr., 544 clics, pos. 4,8 | GSC | Pasar al top 3: precio actualizado, tabla de versiones, fotos reales. |
| 3 | Corregir semáforo rojo (6 → 4 puntos) | Error en title/meta/texto | Web en vivo + madrid.es | Corregirlo hoy. |
| 4 | Home «recursos de multas gratis» | Pos. 17,4 (16 impr., 1 clic). H1 actual: «En la jungla de las multas…» | GSC + web | Poner la keyword en el H1 («Recurrir multa gratis con IA») sin perder la marca. |
| 5 | Multa de radar con una sola foto o dos fotos | Sin página. Autocompletar: «multa radar dos fotos», «sin foto», «solo una foto» | Autocompletar + race.es / illanpanos / modelosycontratos | Nueva guía. Norma: Orden ICT/155/2020, Anexo XII, ap. 1.10. |
| 6 | Velocidad máxima de furgoneta, camión y coche con caravana | Sin página. 8 + 7 sugerencias de autocompletar. Competencia débil (iberley, empresa de alquiler) | Autocompletar + WebSearch | 3 guías con tabla RD 1514/2018 y multas. También sirven de hub para las nuevas secciones. |
| 7 | Carnet de caravana y autocaravana con carnet B | Sin página. 10 + 10 sugerencias de autocompletar | Autocompletar + dgt.es / benimar | 2 guías enlazadas a las 400 fichas que prepara Niky. |
| 8 | Multa por pernoctar en autocaravana | La página existe. Competencia: PDF de la DGT y blogs de nicho | Autocompletar + WebSearch | Mejorar con tabla de ordenanzas reales y la Instrucción DGT 2026. |
| 9 | Recurrir multas en Madrid (ZBE, SER, Madrid Central, grúa) | 10 consultas, pos. 9-71 | GSC | /multas/madrid/ con secciones por tipo y anclas. |
| 10 | ZBE: pilar nacional y página por ciudad | Autocompletar: valladolid, salamanca, burgos, soria, león, oviedo, ávila. Hay 3 URLs propias que se canibalizan | Autocompletar + GSC | Elegir pilar /guias/zbe/ y crear páginas de ciudad. |
| 11 | Tabla de multas por velocidad | 5 consultas, pos. 44-86 | GSC + inforadar / enterat / race | El title debe empezar por «Tabla de multas por exceso de velocidad 2026», más tabla HTML y calculadora. |
| 12 | Consultar multas por matrícula o DNI | 5 consultas, pos. 22-66. Dos URLs propias se canibalizan | GSC | Fusionar en una guía (TESTRA, TEU, miDGT) y 301 de la otra. |
| 13 | «Velocidad máxima» en fichas de motos | 45 consultas, 241 impr., pos. ~9, 0 clics | GSC | Poner la velocidad máxima en title/meta/H2 y añadir FAQPage. |
| 14 | Multa DGT por correo ordinario o notificación defectuosa | Sin página. Autocompletar: «multa dgt por correo ordinario», «notificacion», «sin foto» | Autocompletar | Nueva guía. Encaja al máximo con el analizador (defecto de forma). |
| 15 | Multas por ciudad: Barcelona, Huesca, Sevilla, León, Pamplona | Barcelona 25 impr., pos. 22,4. Huesca 21 impr., pos. 20,5. Resto, pos. 19-38 | GSC | Añadir el organismo recaudador real, plazos y enlaces oficiales. Ahora son plantillas parecidas. |

## a) Páginas existentes a mejorar (title, meta, contenido)

1. **Corregir hoy:** `/blog/multa-semaforo-en-rojo-recurrir/` → 4 puntos. Revisar también otros puntos e importes contra el Anexo II de la LSV en todo el blog (comprobación automática).
2. Stelato G9 (`/coches/stelato-g9-2026-precio-ficha-tecnica/`) y V800 (`/blog/maextro-v800-huawei-precio-ficha-tecnica/`): snippet de precio y FAQ.
3. Home `/`: H1 con «recurrir multa gratis».
4. Elegir un pilar por intención y enlazar el resto hacia él (o redirigir con 301):
   - **Radar:** pilar `/guias/radares/`. Satélites: `/blog/recurrir-multa-radar-velocidad/`, `/blog/radares-velolaser-…/`, `/blog/cinemometro-laser-…/`, `/blog/margenes-de-error-…/`.
   - **ZBE:** pilar `/guias/zbe/`. Satélites: `/blog/zbe-espana-2026-ciudades…/`, `/blog/como-recurrir-multas-de-la-zbe-…/`.
   - **Consultar multas:** fusionar `/blog/como-saber-si-tengo-multas-pendientes/` y `/blog/testra-dgt-consultar-multas-publicadas/`.
   - **Prescripción:** pilar `/guias/prescripcion/`. Satélite: `/blog/prescripcion-y-caducidad-…/`.
   - **Patinete:** pilar `/guias/patinetes-electricos/`. Satélites: 4-5 posts de multas de patinete.
   - **Recurrir DGT:** pilar `/blog/como-recurrir-multa-dgt-sin-abogado/` (o nuevo `/guias/recurrir-multa-dgt/`). Satélites: `/blog/dgt-organismo-…/`, `/blog/multas-dgt/`.
5. Mejorar estas páginas:
   - `/blog/tabla-multas-exceso-velocidad-2026/`: title y tabla HTML por límite de vía.
   - `/multas/madrid/` y `/multas/barcelona/`: secciones por tipo de multa y datos municipales reales.
   - `/blog/multa-uso-movil-conduciendo-recurrir/`: separar 6 puntos (móvil en la mano) de 3 puntos (manipularlo o auriculares).
   - `/guias/alcohol-drogas/`: tabla de tasas y sanciones (0,25 / 0,50 / 0,60 mg/l; noveles 0,15).
6. Acortar los titles de las páginas con slug larguísimo: identificar conductor, ITV cada cuánto, homologación camper.
7. `/equivalencia-neumaticos-itv/`: title «Calculadora de equivalencia de neumáticos (ITV ±3 %)».
8. Fichas de motos: velocidad máxima en el snippet.
9. GSC: pedir validación de los duplicados con y sin barra (ya hacen 301).

## b) Páginas nuevas a crear (guías)

Por orden de prioridad:

1. Multa de radar con una sola foto: ¿es nula? (P1)
2. Multa DGT por correo ordinario o mal notificada: cuándo se puede anular (P1)
3. Velocidad máxima de furgonetas: tabla por vía y MMA, con multas (P1)
4. Velocidad máxima de camiones: autovía, convencional, mercancías peligrosas (P1)
5. Velocidad con caravana o remolque (P1)
6. Carnet para caravana: B, B96 y BE, con tabla de pesos (P1)
7. Autocaravana con carnet B: hasta 3.500 kg, cuándo hace falta C1 y lista de modelos (P1)
8. ZBE por ciudad: Valladolid, Salamanca, Burgos, León, Oviedo, Soria y Ávila primero (P1-P2)
9. Etiqueta DGT: tipos y cómo consultarla por matrícula (P2)
10. Puntos del carnet: consultar saldo y tabla de infracciones que restan puntos (P2)
11. Multa por radar de tramo (P2)
12. Zona azul por ciudad: anulación con tasa y plazos (P2)
13. Multa en carga y descarga (P3)
14. Pernoctar en autocaravana en [municipio], solo con ordenanza real citada (P3)

Plantilla para cada guía nueva:
- Respuesta directa en las 2 primeras líneas.
- Tabla con la cifra oficial y su norma (BOE, RD, ordenanza) enlazada.
- «Cómo recurrir» y CTA para subir la multa al analizador.
- FAQ (de 4 a 6 preguntas reales sacadas del autocompletar).
- Fecha de revisión y autor.
- Datos sin fuente oficial: «dato no oficial · en revisión» y noindex hasta que se verifiquen.

## c) Tareas para Niky (para dejar en el tablón)

Niky crea en una rama aparte. Grok revisa y publica en tandas de 20-50.

1. **Rama `seo-guias-p1`:** las 7 guías P1 de la sección b), siguiendo la plantilla. Cada cifra con su enlace al BOE o la DGT. Nada inventado.
2. **Rama `fix-semaforo`:** cambiar 6 → 4 puntos en el post de semáforo rojo. Después, comprobar puntos e importes en todos los posts de multas contra el Anexo II de la LSV y entregar la lista de discrepancias.
3. **Fichas de caravanas y autocaravanas (las 400 en curso):** incluir MMA y «carnet necesario (B / B96 / BE / C1)» en cada una, y enlazar a las guías 6 y 7.
4. **Fichas de camiones y furgonetas:** en cada ficha, bloque «Velocidad máxima y multas para este vehículo» enlazado a las guías 3 y 4.
5. **Fichas de motos:** añadir la velocidad máxima al title y la meta y una FAQ «¿Qué velocidad máxima alcanza la X?» (solo con dato del fabricante; si no lo hay, la frase «no oficial»).
6. **Radar de noticias:** cuando salga una ZBE nueva, una ordenanza de autocaravanas o un radar nuevo, actualizar la página pilar correspondiente en vez de crear un post suelto (así no aumenta la canibalización).
7. **No tocar** Stelato, V800 ni la home. Eso lo hace Grok en un despliegue controlado.

## Pendiente para tener volúmenes

- Activar Ryze o exportar el Keyword Planner (España, español) con estas semillas: recurrir multa, multa radar, multa dgt, consultar multas, puntos carnet, itv, etiqueta dgt, zbe, carnet caravana, autocaravana carnet b, multa autocaravana, pernoctar autocaravana, velocidad camion, velocidad furgoneta, multa patinete, multa zona azul, multa semaforo, multa movil, prescripcion multa, pagar multa.
- Con esos datos relleno la columna `volumen` y recalculo prioridades (volumen × facilidad × encaje).
