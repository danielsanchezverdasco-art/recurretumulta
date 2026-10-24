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
