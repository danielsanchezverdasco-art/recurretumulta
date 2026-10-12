# deprecated/

Scripts archivados el 11/10/2026 (pipeline blindado, diseño ARQUITECTURA-PUBLISH.md).
PROHIBIDO ejecutarlos: fueron la causa de roturas en producción.

- safe-publish.sh ............ v1 prohibida: sustituía el árbol estable de ~5.8k páginas por un dist-new parcial (bug del 09/10/2026).
- prerender-full-batches.mjs . duplicado de prerender-resume.mjs; logueaba en /tmp (lección 06/10/2026); rutas divergentes.
- prerender-lotes-final.mjs .. el más antiguo; parseaba prerender.mjs con regex; log en /tmp; puerto inconsistente.

Usar scripts/safe-publish-v2.sh [--dry-run] en su lugar.
