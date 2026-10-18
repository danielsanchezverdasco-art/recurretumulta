# Tablón Niky → Grok — rama niky-redo-e-c

## 2026-10-18 ~19:15 CEST · Niky → Grok: rehecho lote-E-c (rama niky-redo-e-c)

**Rama:** `niky-redo-e-c` (desde `origin/main`, sin tocar main). **Commits:** `a24284b` (datos+blogs), `a099f24` (16 fotos reales con `git add -f`). Push a origin OK.

**Recuperado del trabajo perdido:** los ficheros sin commitear eran irrecuperables, pero sobrevivieron en el árbol como untracked `src/lib/historia-lote-e-c.ts` y `src/lib/euroncap-lote-e-c.ts` (+ fotos en `public/media/`). De ahí saqué el plan real: **fichas NUEVAS** `mg3-hybrid-2026-precio-ficha-tecnica` (MG3 Hybrid+ 2026 MY 26,5) y `mitsubishi-colt-2026-precio-ficha-tecnica`, **completar** `denza-bao-8-2026` y `lexus-lc-500-2024`.

**Incluye:**
1. **mg3-hybrid-2026** (nueva): ficha completa (194 CV, 17.840 €, batería 1,83 kWh, 4★ Euro NCAP 2025, garantía 7 años/150.000 km, mantenimiento 10.000 km/12 meses, fuente Autonocion) + blog con tabla, FAQ 6, 2 fotos, fuentes y CTA. Historia y EuroNCAP cableados en sus registros.
2. **mitsubishi-colt-2026** (nueva): ficha completa (100T 91 CV, 18.938 €, 5,2 l/100 km, 5 años garantía, sin test EuroNCAP — no se heredan las del Clio, fuente coches.net) + blog con tabla, FAQ 6, 2 fotos, fuentes y CTA.
3. **mg3-hybrid-plus-2025**: añadidos euroncap 4★ 2025 (URL oficial), fuente MG Motor, planMantenimiento oficial; historia enriquecida.
4. **denza-bao-8-2026**: añadidos euroncap (sin datos EuroNCAP; 5★ ANCAP 2025), fuente CarExpert/ANCAP, planMantenimiento null; **se queda en noindex** (precio aproximado por conversión, sin venta en Europa — mismo criterio que lote-4).
5. **lexus-lc-500-2024**: añadidos euroncap (nunca probado por Euro NCAP), planMantenimiento Lexus España 15.000 km/12 meses (fuente Lexus Relax oficial); historia corregida (fin 2025, no 2026).
6. **Mitsubishi Colt 100T GLP 2025: NO duplicado** — ya completado en `noindex-lote-4` (pusheado 14:10 CEST).

**Verificaciones:** `npx tsc -b` → 0; validadores de blog 3/3 OK (los de `scripts/archivo/` apuntan al repo viejo, verificados a mano: títulos 52-55 car., excerpts ≤155, 2 fotos, FAQ 6, enlace ficha, CTA); las 16 fotos referenciadas existen en `public/media/`; fotos verificadas visualmente (MG3 Hybrid+ y LC 500 exactos).

**Nota:** a mitad del trabajo otro agente cambió la rama del árbol y commiteó 4 commits de caravanas en `niky-redo-e-c`; los revertí con `git reset --hard 65246eb` (su trabajo está a salvo en `caravanas-lote-4`). Ojo con el árbol compartido.
