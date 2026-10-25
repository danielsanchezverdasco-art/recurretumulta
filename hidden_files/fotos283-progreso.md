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
