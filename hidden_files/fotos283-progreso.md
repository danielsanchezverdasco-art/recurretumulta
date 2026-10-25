# Progreso consolidación fotos-283-niky (coordinador)
- Oleada 1: w001-w025 lanzados (w005, w012, w015, w022, w023 reintentados tras timeout).
- Resueltos verificados: 3/50 para la tanda 1.
  - w003 @ c7feff24 (verificado ls-remote + fragment + tamaños): aprilia-tuono-125-2024 (158.430 B, 1000PS), aprilia-tuono-v4-2024 (141.874 B, 1000PS), audi-q9-2026 (109.298 B, AutoIndustriya, FOTO ESPIA anotada como spy/no oficial en el fragmento aunque el nombre lleve -oficial).
- Pendientes oleada 1: 24 trabajadores en curso. Sin push a fotos-283-niky todavía: se consolida al llegar a 50 resueltos.
- w025 @ 83b065a8 (verificado): mv-agusta-brutale-800-rr-2024 (53.292 B, 1000PS), mv-agusta-f3-800-2024 (64.260 B, 1000PS).
- w013 @ d0b2a63c (verificado): honda-cbr1000rr-r-2024 (57.332 B, Roadracing World), honda-crf1100l-africa-twin-2024 (39.232 B, Careta), honda-e-ny1-2025 (65.916 B, ArenaEV; nota: foto de prensa de la generación 2023, sin rediseño para 2025).
- TOTAL resuelto verificado: 8/50 para la tanda 1. Siguen 22 trabajadores de la oleada 1 en curso.

## 25/10/2026 ~06:59 — CAMBIO DE BASE ORD-20251025-0655
- fotos-283-niky local movida de 36004f86b (completar-fichas) a 9f1b8fec9 (borrador-final-2410). Verificado: ls-remote fotos-283-niky vacío (ninguna tanda consolidada previa; nada borrado, nada que integrar después).
- Worktree de consolidación en sparse-checkout (public/media + docs/comunicacion-ias/listas); 684 MB. README y scripts sin commitear intactos.
- Fotos ya encontradas preservadas en ramas w003/w013/w025 (8 verificadas). Oleada 1 en curso sin tocar. Oleadas 2–8 desde borrador-final-2410.
- Contador tanda 1 sigue en 8/50. Alcance: solo fotos (dedupe pasa a Merlín).

## TANDA 1 CONSOLIDADA (25/10/2026, base borrador-final-2410 @ 9f1b8fec9)
- 50 slugs en orden de lista: w001–w016 completos (48) + w017 2 primeros (indian-chief-2024, indian-scout-sixty-2024). 50/50 con foto real verificada, 0 «sin foto real» en esta tanda.
- Verificación previa: las 17 ramas trabajadoras con remoto = commit informado (w001 8eb3db4a con fragment corregido; resto según informes).
- Auditoría byte a byte contra ramas trabajadoras: 1 único fichero distinto del borrador (cupra-formentor-vz-333-...-oficial.webp: borrador 124.484 B huérfano sin referencia en datos → sobrescrito con la foto verificada del trabajador, 112.202 B). Resto idénticos.
- Copias en public/media/motos/: 28 ficheros moto (los datos referencian /media/motos/<fichero> para ellos; en raíz también están). 28 nuevos, 0 sobrescritos.
- Nombres entregados SIN referencia en ningún campo imagen de borrador-final-2410 (src/lib): burstner-eliseo-c-644, chausson-640, chausson-720, concorde-credo-791-li, cupra-formentor-vz-333, cupra-formentor-vz-ehybrid, etrusco-t-6900-sb, etrusco-t-7400-sbc, honda-e-ny1 (además sin entrada en src/lib), horwin-ek3. Las entradas existen salvo honda-e-ny1; el cruce de Grok debe mapearlas (etrusco: su campo imagen apunta hoy a un -ext; horwin: posible imagen en fotos-reales/real-0 ya existente, sin confirmar por sangrado de bloque en el grep).
- Quedan para la tanda 2: w017 3er slug (kawasaki-ninja-1000sx-2024) + w018–w025 (22 slugs en total).

## Parte 25/10 ~08:50 CEST — oleada 2, verificación del lote
- Verificadas en remoto (rama + fragment.csv, no solo informe del trabajador): w026 58179563, w027 e00f2b7e, w030 b4e20850, w032 ba83dc88, w034 936e5e12, w035-reposición a40f27d0, w036 080c38c6, w046 a7fedcb0 (¡pese a agente marcado errored! mismo patrón que w037: verificar ls-remote antes de relanzar), más w031 991dedab, w033 87ac854c, w039 46c5d639, w040 bb648233, w042 75fa5f12, w048 46b4fda7.
- TANDA 2: 44/50. Faltan solo w028 (rimor-sarus-12-plus-2026, rimor-sarus-95-plus-2026), w029 (royal-enfield-continental-gt-650-2024, royal-enfield-interceptor-650-2024) y w038 (vmoto-tc-max-2024, voge-900dsx-2024): los 3 originales cayeron por disco, sin rama ni nada que rescatar (w028/w038 worktrees revisados, vacíos de entrega). Reposiciones lanzadas con checkout disperso exacto.
- w047 y w049: confirmado sin rama y sin nada que rescatar; reposiciones pendientes tras la tanda 2 (material de tanda 3, no bloquean).
- DISCO RESUELTO (de momento): retirados los worktrees de trabajadores ya entregados (ramas intactas en remoto) + stale w028/w038/w047/w049: /home/hatch de 206 MB libres (100%) a 9,8 GB libres (91%). Queda solo wt-fotos283-w041 en curso + wt-fotos283-001 de consolidación.
- Avisos de mapeo acumulados para la consolidación de la tanda 2: /media/motos/ en qjmotor-srt-800, suzuki-gsx-8r, triumph-rocket-3-storm-r, triumph-street-triple-765, triumph-thruxton-final-edition, triumph-tiger-1200, sherco-st-300, silence-s01-plus, yamaha-tmax-560; -ext en sunlight-t-67 y weinsberg-carahome-600-dkg; -hero en arcfox-t1-2025 y audi-q3-sportback-tdi-2026 (estos dos últimos, de tanda 3).

## Parte 25/10 ~09:00 CEST — verificación de reentregas
- Re-verificados en remoto = informe: w036 080c38c6, w043 bfeea755 (diff vs base: solo 3 añadidos), w050 cb48f9b7 (diff: solo 3 añadidos), w046 a7fedcb0 (sigue en remoto pese a agente errored: errored ≠ no entregado, una vez más).
- Nuevo aviso de mapeo para tanda 3: aion-ut-2025 y aion-v-2025 esperan -hero.webp en blog-lite.generated.ts (no -oficial.webp).
- Aviso de w043 para futuras reposiciones: el --no-checkout deja el índice vacío y el status marca borrados staged; si un trabajador commitea en ese estado, su commit incluiría borrados masivos. En la consolidación, verificar siempre que el diff vs base solo añade (como se hizo con w043/w050).
- Tanda 2 sigue en 44/50: reposiciones w028/w029/w038 en curso (sin entrega aún). Disco 7,8 GB libres (93%).

## Parte 25/10 ~09:05 CEST — w029-reposición verificada
- w029 `c07e1352` verificado en remoto = informe, diff vs base solo 3 añadidos, tamaños 33.424/33.786 B = informe. Continental GT 650 Apex Grey e Interceptor 650 Barcelona Blue, prensa oficial Royal Enfield North America 14-03-2024 vía RoadRacingWorld, licencia desconocida. Aviso de mapeo: ambas esperan /media/motos/.
- TANDA 2: 46/50. Faltan solo w028 (2) y w038 (2), reposiciones en curso. Disco 7,8 GB libres.

## Parte 25/10 ~09:10 CEST — w038-reposición verificada
- w038 `ef602d17` verificado en remoto = informe, diff vs base solo 3 añadidos, tamaños 40.646/73.344 B = informe. Vmoto TC Max (oficial Vmoto UK, plata/negro, no Night Edition) y Voge 900DSX (prensa Motosan, foto Voge EICMA 2023), licencia desconocida. Aviso de mapeo: ambas esperan /media/motos/.
- TANDA 2: 48/50. Falta solo w028 (rimor-sarus-12-plus-2026, rimor-sarus-95-plus-2026), reposición en curso.

## TANDA 2 ENTREGADA 25/10/2026 — rama fotos-283-niky (commit pendiente de hash en el parte)
- 50/50 con foto, 0 «sin foto real»: 22 resto oleada 1 (w017 3er slug + w018–w025) + 28 oleada 2 (w026–w039).
- 96 ficheros media: 50 raíz + 40 motos/ (39 mismo nombre + segway -hero) + 6 -ext. Auditoría byte a byte 50/50 OK, WebP <300 KB.
- CSV: 100 filas totales (50 tanda 1 + 50 tanda 2).
- NO sobrescrito: versys-1000-s fotos-reales real-1.webp (existe en base, 157.714 B); foto del trabajador solo en raíz + CSV, decide Grok.
- Caveats: knaus año 2026 sin confirmar, laika variante Fiat estándar, livewire/seiemmezzo renders oficiales, rimor fotos de concesionario + «12 P» vs «12 Plus», 1290 generación 2020–2023, montesa foto 2026.

## TANDA 2 PUBLICADA — fotos-283-niky @ e36ae52e0 (verificado ls-remote = local, sin force)
- Commit e36ae52e0: 99 ficheros, 0 borrados (96 media + CSV + README + progreso). CSV: 100 filas totales.

## TANDA 3 PARCIAL 1 — 18 fotos (w040, w041, w042, w043, w044, w045, w046, w048, w050)
- 18/18 con foto real verificada, 0 «sin foto real». CSV: 118 filas. Mapeos: motos ×4, -hero ×4. 0 sobrescrituras HEAD. Pendientes tanda 3: w047, w049 (reposiciones) + w051–w064 (oleada 3).

## TANDA 3 PARCIAL 1 PUBLICADA — fotos-283-niky @ 1d1a724e7 (verificado ls-remote = local, sin force)

## TANDA 3 PARCIAL 2 — 14 fotos (w051, w056, w059, w061, w062, w067, w071)
- 14/14 con foto real verificada, 0 «sin foto real». CSV: 132 filas. Copias -hero ×6. 1 sustitución de fichero base (corvette -2). Pendientes galería -1/-3 en baojun, silverado, han-l.

## TANDA 3 PARCIAL 2 PUBLICADA — fotos-283-niky @ a0941058e (verificado ls-remote = local, sin force)

## TANDA 3 PARCIAL 3 — 20 fotos (w049, w052, w055, w060, w064, w066, w068, w069, w070, w072)
- 20/20 con foto real verificada (yuan-up: render oficial, avisado), 0 «sin foto real». CSV: 152 filas. Copias -hero ×17. 0 sobrescrituras HEAD. Pendientes de fetch (TLS transitorio, reintento pendiente): w047, w053, w054, w057, w063, w065.

## TANDA 3 PARCIAL 3 PUBLICADA — fotos-283-niky @ 6330917ba (verificado ls-remote = local, sin force)

## TANDA 3 PARCIAL 4 — 12 fotos (w047, w053, w054, w057, w063, w065)
- 12/12 con foto real verificada, 0 «sin foto real». CSV: 164 filas. Copias -hero ×11. 0 sobrescrituras HEAD. Tanda 3: 48/50 (falta w058).

## TANDA 3 PARCIAL 4 PUBLICADA — fotos-283-niky @ ada13e011 (verificado ls-remote = local, sin force)

## TANDA 3 CIERRE + TANDA 4 INICIO — PARCIAL 5 — 18 fotos (w058, w073–w080)
- 18/18 con foto real verificada, 0 «sin foto real». CSV: 182 filas. Copias -hero ×16. 0 sobrescrituras HEAD. Tanda 3: 50/50 CERRADA.

## TANDA 3 CIERRE + TANDA 4 PARCIAL 5 PUBLICADA — fotos-283-niky @ 56da70731 (verificado ls-remote = local, sin force)

## TANDA 4 PARCIAL 6 — 16 fotos (w081–w088)
- 16/16 con foto real verificada, 0 «sin foto real». CSV: 198 filas. Copias -hero ×7. 0 sobrescrituras HEAD. Incidencia Luce-hero corregida desde la rama (resto viejo del disco, no HEAD). Maverick y MS-RT ya en base, sin fichero nuevo.

## TANDA 4 PARCIAL 6 PUBLICADA — fotos-283-niky @ 182e758eb (verificado ls-remote = local, sin force)

## TANDA 4 PARCIAL 7 — 16 fotos (w089–w096)
- 16/16 con foto real verificada, 0 «sin foto real». CSV: 214 filas. Copias -hero: 0. 0 sobrescrituras HEAD. Incidencias: reinicio del servicio (reintentos w105/w111/w112/w115 sí creados, no duplicados); fetch GitHub degradado, recuperado con HTTP/1.1; kona-hibrido hero corregido desde la rama (resto viejo, no HEAD). Genesis G80 ya en base, sin fichero nuevo.
