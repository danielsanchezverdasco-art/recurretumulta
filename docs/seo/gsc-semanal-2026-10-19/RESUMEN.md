# GSC semanal — lunes 2026-10-19 (rutina «Lunes: análisis GSC y tareas SEO para Niky»)

## Fuente y limitaciones (léase primero)
- **Conector Search Console en vivo (Ryze, `user-Ryze-ai`): NO disponible** → `listSites` devuelve `subscription_required` (no hay plan activo de Ryze). No se ha podido sacar nada en vivo (ni rendimiento, ni indexación, ni inspección de URL).
- Datos usados (todos reales, ninguno inventado):
  - `grafico-diario-hasta-2026-10-14.csv`: export de GSC Rendimiento (Web, «últimos 28 días»), descargado el 17/10. **Último día con datos: 14/10/2026.**
  - `paginas-3meses-hasta-2026-10-14.csv` y `consultas-3meses-hasta-2026-10-14.csv`: export de GSC «últimos 3 meses» del 17/10 (top 1.000; en la práctica casi todo el tráfico es del 2 al 14 de octubre).
  - `consultas-por-pagina-28d-hasta-2026-10-09.csv`: consulta+URL (120 filas, solo las principales).
  - Vigilancia diaria del Analista en `../seguimiento.md` (G9 y V800, 15-17/10).
  - Indexación: `../gsc-indexacion-oct17.md` (informe de GSC fechado el 12/10, leído en pantalla el 17/10).
  - Estado en vivo (title/meta/canonical de las 4.218 URLs del sitemap): `../aud19/sm.json` (auditoría de hoy 06:03 UTC) y comprobaciones curl de hoy.
- **No hay datos de GSC del 15 al 18/10 a nivel de sitio**, así que la comparación «últimos 7 días vs 7 previos» con el retraso de GSC se hace con las dos últimas semanas completas disponibles: **8–14 oct vs 1–7 oct**.

## Cifras (GSC Web, sitio completo)
| Semana | Clics | Impresiones | CTR | Posición media* |
|---|---|---|---|---|
| 8–14 oct | **549** | **33.461** | **1,64 %** | **≈11,5** |
| 1–7 oct | 334 | 6.786 | 4,92 % | ≈17,4 |
| Variación | +64 % | ×4,9 | −3,3 pp | mejora ≈5,9 posiciones |
*Posición media ponderada por impresiones a partir del dato diario (aproximación a la cifra de GSC).

- Dentro de la semana hay caída fuerte: 6–9 oct = 718 clics (pico del V800); 10–14 oct = 146 clics (≈29/día) con ≈3.200 impresiones/día.
- 15–17 oct (solo G9 y V800, Analista): G9 17 clics / 1.620 impr. / CTR 1,1 % / pos. 6,9; **V800 0 clics / 79 impr.** (antes ≈260 impr./día y pos. 5,2 → ahora ≈26/día y pos. 8,3: ALERTA).
- **Páginas indexadas: 3.280** (y 4.130 sin indexar, 2.268 «Descubierta: sin indexar»), informe de GSC fechado el 12/10. **No hay lectura nueva ni dato de la semana anterior** → no se puede calcular la variación semanal. Sitemap en vivo hoy: 4.218 URLs (todas 200 e index); GSC tenía 4.130 enviadas el 18/10.
- Indicador clave de la estrategia (clics/día por página indexada): 549/7/3.280 ≈ **0,024** (meta 2–20).
- Países (28 días al 14/10): España 801 clics / 24.036 impr. (CTR 3,3 %, pos. 15,8); **México 6.561 impr. con CTR 0,52 %**, Chile 2.660 (0,41 %), Colombia 1.815 (0,33 %), Perú 1.128 (0,71 %): ≈12.000 impresiones latinoamericanas casi sin clics (consultas tipo «carro/camioneta/auto huawei g9»).

## Hallazgos principales (por impacto en clics)
1. **V800 sin precio**: la ficha `/coches/maextro-v800-huawei-precio-ficha-tecnica/` (la página con más clics de la web: 611 en 3 meses) no muestra ningún precio del coche, cuando la consulta principal es «huawei v800 precio» (5.387 impr./438 clics). La meta tampoco lleva precio y el title perdió «Huawei». Tras la migración blog→ficha (301) las impresiones han caído ~90 % y la posición de 5,2 a 8,3.
2. **Stelato G9**: 18.168 impresiones con CTR 0,74 % (pos. 8). Las búsquedas dicen «huawei g9» más que «stelato»; el title no lleva «Huawei» y la meta tiene 175 caracteres (se corta). Mucha impresión es de Latinoamérica.
3. **Fichas con datos contradictorios entre meta y página** (precio o año), p. ej. Nio ES9 (64.740 vs 66.130 €), Deepal S09 (29.370 vs 31.860 €), Jetour T1 (21.300 vs 25.700 €), Stelato S9 (50.000 vs 41.140 €), Jetour T2 (48.800 vs 32.000 €), Yamaha Niken GT, Pursang E-Track, SYM Maxsym TL 508, Zontes 368G; y metas con frase repetida o año distinto del title (Haval H6 HEV, Xiaomi YU7 Max, Tank 500, Lexus LBX…). Lista completa: `coherencia-fichas-con-impresiones.csv`.
4. **Motos sin «velocidad máxima»** cuando la búsqueda es justo eso y estamos en pos. 5–10 con 0 clics (Kymco Agility NX 125, Zontes 368M, Benelli BKX 300 S, SYM ADXTG 400, Macbor Rockster 410; y otras 9 fichas con impresiones sin el dato).
5. **Canibalizaciones reales** (ambas URLs indexables): Dacia Bigster Hybrid 155 (2 fichas de la misma versión con datos distintos), Stelato S9 2024/2026, BYD Atto 3 Evo (ficha 313 CV/42.990 € vs post 449 CV/29.455 €), post+ficha del mismo modelo-año en motos (XSR900, Forza 350…), fichas de años distintos que reciben la búsqueda del año nuevo (S 1000 RR), y /multas/<ciudad>/ vs /comunidades/<comunidad>/ (Madrid, Murcia). Ver `canibalizaciones.csv`.

## Ficheros de esta carpeta
- `comparativa-semanal.csv` — cifras de la tabla de arriba.
- `paginas-3m-agrupadas-url-actual.csv` — páginas de GSC (≥15 impr.) agrupadas por la URL que hoy responde (301 resueltos), con title/meta en vivo.
- `oportunidades-ctr-bajo.csv` — ≥25 impr. y CTR < 2 %.
- `oportunidades-posicion-5-20.csv` — posición 5–20 y ≥20 impr.
- `canibalizaciones.csv`, `consultas-sin-respuesta.csv`, `coherencia-fichas-con-impresiones.csv`.
- Exports originales copiados: `grafico-diario-…`, `paginas-3meses-…`, `consultas-3meses-…`, `consultas-por-pagina-…`.
- Scripts: `analiza.py`, `coherencia.py`, `live.py`.
