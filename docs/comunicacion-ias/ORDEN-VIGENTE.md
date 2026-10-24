# ORDEN VIGENTE (fuente única de verdad) — la mantiene Cosa
**ID de orden: ORD-20241024-2013**
**Vigente desde: 24/10/2026 20:13 (Madrid)**. Anula cualquier orden anterior que la contradiga.

1. Se paran los packs de reescritura completa (unico-coches-50-*). La tanda en curso se entrega tal y como esté y no se lanzan más.
2. **No se toca NINGUNA página ya indexada por Google.**
3. Solo se trabaja sobre las no indexadas de `listas/no-indexadas.txt`: Merlín 87 (slugs de la a a la l) y Niky 82 (de la m a la z y dígitos). Tandas de 50, 8-gramas = 0 y 0 datos inventados.
4. No se publica nada. Los arreglos técnicos los hace Cosa en la rama `fix-no-indexadas-2410`.

---
## Protocolo de sincronización (fijo)
- Cosa cambia **solo este archivo** cuando hay una orden nueva y le pone un **ID nuevo**.
- **Al empezar cada pasada**, Merlín y Niky leen ESTE archivo antes de nada (Norma 1).
- Si el ID es distinto del último que confirmaron, escriben **en su primera acción** una línea en `ACK.md`:
  `ORD-xxxx | Merlín | SÍ recibido | HH:MM | qué paro y qué empiezo`
- Sin ACK del ID vigente no se trabaja: primero el ACK, después el trabajo.
- Cosa comprueba `ACK.md` cada hora. Si falta un ACK, vuelve a avisar aquí. Daniel no hace de intermediario.

## NORMA PERMANENTE — Revisión post-publicación obligatoria (Daniel, 24/10 20:25)
Cada vez que se publique una nueva versión, Niky, Merlín y Cosa la revisan de arriba abajo con ojos de Google: contenido fino o duplicado, canonicals, robots.txt, datos estructurados, páginas huérfanas, enlaces rotos y cualquier cosa que Google penalice. Lo que haya que cambiar se cambia antes de cerrar la revisión. El resultado se deja en el tablón (docs/comunicacion-ias/REVISION-POST-PUBLICACION.md) con la lista de lo encontrado y lo corregido. Confirmad en ACK.md.

## ORD-20241024-2125 — Daniel 21:24: se PUBLICA por tandas verificadas, ritmo constante (sustituye el «no publicar»)
Fuente única: listas/auditoria-no-indexadas.csv (columnas tipo/accion). Cada tanda de 50 se entrega en rama desde completar-fichas actual, se avisa aquí y Cosa verifica y publica. Ritmo: una tanda cada hora como mínimo por agente; si te bloqueas, pregunta aquí en vez de parar.
- **Niky** (100 agentes): (1) quitar del sitemap las 198 con noindex (94 + 104); (2) 245 redirecciones: 301 en un salto o 410 (133 + 112), sin cadenas; (3) enlazado interno a las ~130 con 0–2 enlaces entrantes, desde hubs o fichas relacionadas reales; (4) fotos reales para las 324 «Foto pendiente», solo fotos oficiales o verificadas, nada de IA.
- **Merlín** (100 agentes): las 169 de reescritura (incluye 42 duplicadas: diferenciar o fusionar con 301) + sus 87 de no-indexadas a–l. Prosa natural, datos reales, 8-gramas a 0 sin trucos.
- 1.474 «nada/validar» y 487 «tiempo de rastreo»: no se tocan; las gestiona Cosa en Search Console.
Confirmad en ACK.md con este ID antes de empezar.
- CORRECCIÓN 21:26 a ORD-20241024-2125: Niky NO busca fotos nuevas (punto 4 anulado). Las fotos ya están encontradas y aceptadas en caza-fotos-parte-02; las integra y publica Cosa.

## ORD-20241024-2140 — Daniel 21:40: NADA se publica hasta cerrar los puntos 1–9 (sustituye la publicación por tandas de 2125)
Cosa: 1) integrar los 127 cambios de completar-fichas, 2) enlazar las fotos de caza-fotos-parte-02 (944 fichas), 5) /guias/ 404, 6) precio del BYD Seal, 7) prueba en navegador real (duelo, opiniones, analizador de IA, menú móvil), 8) carpeta de 4,5 GB de Merlín, 9) chequeo de 8-gramas en todo lo indexable.
- **Niky (100 agentes):** punto 3, las 283 fichas sin foto en ningún sitio. Solo fotos reales y verificadas (oficiales o de prensa del modelo exacto), nada de IA. Si no existe foto real, se marca con «sin foto real» y una explicación honesta. Rama `fotos-283-niky` desde completar-fichas, con CSV slug | fuente | url.
- **Merlín (100 agentes):** punto 4, las 188 páginas de marca pobres: títulos de 60 caracteres o menos, metas de 155 o menos, y texto propio diferenciado con datos reales de cada marca (8-gramas a 0, sin trucos). Rama `hubs-marca-188-merlin` desde completar-fichas. Además, contestar a las 22:15 sobre la carpeta de 4,5 GB.
Tandas de 50 con aviso aquí. Nadie publica. Confirmad en ACK.md con este ID.
