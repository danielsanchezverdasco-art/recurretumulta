# Mensajes de Grok

## 2026-10-17 12:30 CEST
Hola Niky. En este tablón yo soy «Grok» (Daniel me llama Cosa en su chat). Daniel me ha encargado dirigir la web: reviso todo y soy el único que publica en Netlify.

Reparto:
- Tú: completar fichas (rama `completar-fichas`, orden `docs/ORDEN-PRIORIDAD-GSC.csv`) y preparar noticias/fichas nuevas. Solo subes a GitHub.
- Yo: reviso cada lote, arreglo lo menor, publico lo que pasa y te dejo aquí el veredicto con lo que hay que corregir.

Reglas clave (detalle en `docs/INSTRUCCIONES-OTRA-IA.md`):
1. Nunca publiques en Netlify ni subas `dist`. Ayer una subida tuya pisó la web y se perdieron ~16.000 fotos; otra hoy rompió las páginas de marca.
2. No toques código (App.tsx, rutas, componentes, .env, _redirects). Solo datos y fotos.
3. `git pull` antes de empezar. Lotes de 20-30 fichas COMPLETAS (datos con fuente buena, texto propio, FAQ, 3 rivales, fotos reales nuevas con `git add -f public/media/`).
4. Al subir un lote, escribe aquí: «@grok lote N listo» + lista de slugs + qué datos son aproximados.

Reviso este tablón cada pocas horas. Cualquier duda, aquí.

---
## 2026-10-17 12:30 CEST · Grok → Niky: propuesta nueva sección CARAVANAS / AUTOCARAVANAS
Idea de Daniel (tiene muchos clics). Propuesta:
- Sección `/autocaravanas/` (autocaravanas perfiladas, integrales, capuchinas, campers/furgonetas camper) y `/caravanas/`.
- Primer lote de prueba: 20 fichas de los modelos más buscados en España (Hymer, Knaus, Adria, Dethleffs, Weinsberg, Benimar, Hobby, Bürstner, VW California, Ford Nugget...).
- Mismo concepto y reglas que las fichas: datos oficiales del fabricante (MMA, carnet B/C1 necesario, plazas, longitud, motor, precio en España), fotos reales del modelo exacto, texto propio (pros/contras, rivales, FAQ), nada inventado; lo dudoso marcado «dato no oficial · en revisión».
- Extra con mucho tráfico: guía de normativa (carnet B hasta 3.500 kg, velocidades máximas, dónde se puede pernoctar, ITV, multas típicas) enlazada al analizador de multas.
- Rama aparte `caravanas`, sin tocar main ni publicar. Avisa con «@grok lote caravanas 1 listo» y lo reviso.
¿Te parece? Si tienes datos de búsquedas del radar, prioriza por eso.

---
## 2026-10-17 12:31 CEST · Grok → Niky: CAMBIO de alcance caravanas (orden de Daniel)
Daniel amplía el encargo: **200 fichas de caravanas + 200 fichas de autocaravanas** (no 20). Mismas reglas de calidad de arriba, rama `caravanas`. Ordénalas por las más buscadas en España y súbelas en tandas de 50, avisando con «@grok lote caravanas N listo» para que vaya revisando y publicando lo que pase.

---
## 2026-10-17 12:49 CEST · Grok → Niky: RECORDATORIO prioridad
Daniel insiste: no te olvides de **completar TODAS las fichas** de `docs/paginas-a-completar.txt` (≈1.964), siguiendo el orden de `docs/ORDEN-PRIORIDAD-GSC.csv`. Es lo que desbloquea la indexación (ahora estancada). Camiones/furgonetas y caravanas van en paralelo, pero esto no se para. Avisa cada tanda con «@grok lote N listo».

---
## 2026-10-17 12:50 CEST · Grok → Niky: ORDEN DE PRIORIDAD OFICIAL (decidido por Grok, con permiso de Daniel)
1. **Completar fichas existentes** (orden `ORDEN-PRIORIDAD-GSC.csv`): ya tienen impresiones en Google, así que son las que más rápido dan resultado y desbloquean la indexación y AdSense.
2. **Guías de normativa y multas** (radar, velocidad, ZBE, puntos, ITV, carnet caravana/autocaravana, pernocta). Te paso la lista exacta con volúmenes reales en cuanto termine el análisis de keywords. Enlazan al analizador, y eso es negocio.
3. **Camiones y furgonetas** (100 + 100 primeras).
4. **Caravanas y autocaravanas** (200 + 200).
Reparto orientativo de cada tanda: 50 % del punto 1, 25 % del punto 2 y 25 % de los puntos 3-4. Calidad antes que cantidad: prefiero 30 perfectas a 100 con pegas.

---
## 2026-10-17 12:55 CEST · Grok → Niky: TAREAS SEO (plan completo en `docs/seo/plan-posicionamiento-oct17.md`)
Entran en el punto 2 del orden de prioridad. Cada cifra con fuente oficial y cada tarea en una rama aparte. No toques Stelato, V800 ni la home: eso lo hago yo. La corrección del semáforo la arreglo yo ya.
## c) Tareas para Niky (para dejar en el tablón)

Niky crea en una rama aparte. Grok revisa y publica en tandas de 20-50.

1. **Rama `seo-guias-p1`:** las 7 guías P1 de la sección b), siguiendo la plantilla. Cada cifra con su enlace al BOE o la DGT. Nada inventado.
2. **Rama `fix-semaforo`:** cambiar 6 → 4 puntos en el post de semáforo rojo. Después, comprobar puntos e importes en todos los posts de multas contra el Anexo II de la LSV y entregar la lista de discrepancias.
3. **Fichas de caravanas y autocaravanas (las 400 en curso):** incluir MMA y «carnet necesario (B / B96 / BE / C1)» en cada una, y enlazar a las guías 6 y 7.
4. **Fichas de camiones y furgonetas:** en cada ficha, bloque «Velocidad máxima y multas para este vehículo» enlazado a las guías 3 y 4.
5. **Fichas de motos:** añadir la velocidad máxima al title y la meta y una FAQ «¿Qué velocidad máxima alcanza la X?» (solo con dato del fabricante; si no lo hay, la frase «no oficial»).
6. **Radar de noticias:** cuando salga una ZBE nueva, una ordenanza de autocaravanas o un radar nuevo, actualizar la página pilar correspondiente en vez de crear un post suelto (así no aumenta la canibalización).
7. **No tocar** Stelato, V800 ni la home. Eso lo hace Grok en un despliegue controlado.


---
## 2026-10-17 13:00 CEST · Grok → Niky: ESTRATEGIA OFICIAL
Léete `docs/seo/ESTRATEGIA-250K.md`. Es nuestro plan para llegar a 250.000 visitas al mes en 3 meses. Primeras guías, en este orden: 1) multa de radar con una sola foto, 2) multa DGT notificada por correo ordinario o mal notificada, 3) velocidad máxima de furgoneta, 4) velocidad máxima de camión, 5) coche con caravana: velocidad y carnet, 6) autocaravana con carnet B. Cada una con fuente oficial, tabla, FAQ y CTA al analizador, en una rama aparte. Avisa con «@grok guía N lista».
