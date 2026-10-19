#!/bin/bash
# publicar-blog.sh — UN solo comando para publicar un artículo cumpliendo
# TODOS los mandatos permanentes (docs/MANDATOS-PERMANENTES.md, docs/PLANTILLA-MAEXTRO.md).
#
# Uso:
#   ./scripts/publicar-blog.sh --slug <slug> [--ficha-href /coches|motos|patinetes/<id>]
#                              [--marca <marca> --modelo <modelo>] [--dry-run]
#
#   --slug        Slug URL del artículo (obligatorio).
#   --ficha-href  Href de la ficha del vehículo. OBLIGATORIO (filtro 10):
#                 el artículo DEBE enlazar a la ficha técnica, que debe existir
#                 con datos reales ANTES de publicar el blog.
#   --marca/--modelo  Solo se usan al GENERAR el esqueleto (paso 1).
#   --dry-run     Llega hasta LISTO PARA REVISAR pero avisa que es simulacro.
#
# NORMA DE Daniel (11/10/2026, ley permanente): este workflow NUNCA despliega.
# El pipeline termina en LISTO PARA REVISAR; el deploy solo con su OK explícito
# (scripts/safe-publish-v2.sh --deploy).
#
# Flujo:
#   1. Sin drafts/<slug>.blog.json → lo genera y sale indicando qué rellenar.
#   2. Valida: scaffold-blog.mjs --check + fotos en public/media/ (*.webp) +
#      fichaHref con formato válido y ficha registrada con datos reales.
#   3. Emite el TS + lo registra (maextro-registro.mjs add-blog).
#   4. npx tsc -b (exit 0 o aborta).
#   5. safe-publish-v2.sh /blog/<slug> / (SIN --deploy).
#   6. Mensaje final LISTO PARA REVISAR + qué se verificó.
set -euo pipefail

REPO="$HOME/workspace/recurretumulta-v2"
cd "$REPO"

# ── Ayuda ───────────────────────────────────────────────────────────
if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  sed -n '2,26p' "$0"
  echo
  echo "Ejemplos:"
  echo "  ./scripts/publicar-blog.sh --slug prueba-ficticia-001 --marca Test --modelo X1"
  echo "  # → genera drafts/prueba-ficticia-001.blog.json y sale diciendo qué rellenar"
  echo
  echo "  # rellenar drafts/<slug>.blog.json, subir 3 fotos REALES .webp a public/media/"
  echo
  echo "  ./scripts/publicar-blog.sh --slug mi-articulo --ficha-href /coches/mi-ficha"
  echo "  # → valida, emite TS, registra, tsc, prerender parcial → LISTO PARA REVISAR"
  exit 0
fi

# ── Argumentos ──────────────────────────────────────────────────────
SLUG=""
FICHA_HREF=""
MARCA=""
MODELO=""
DRY_RUN=0
while [[ $# -gt 0 ]]; do
  case "$1" in
    --slug)       SLUG="${2:-}"; shift 2 ;;
    --ficha-href) FICHA_HREF="${2:-}"; shift 2 ;;
    --marca)      MARCA="${2:-}"; shift 2 ;;
    --modelo)     MODELO="${2:-}"; shift 2 ;;
    --dry-run)    DRY_RUN=1; shift ;;
    *) echo "✗ Argumento desconocido: $1"; echo "  Usa --help"; exit 1 ;;
  esac
done
[[ -n "$SLUG" ]] || { echo "✗ Falta --slug <slug>"; exit 1; }

DRAFT="drafts/${SLUG}.blog.json"
TS_FILE="src/data/maextro/blogs/${SLUG}.ts"

echo "═══ publicar-blog.sh · slug: ${SLUG} ═══"

# ═══════════════════════════════════════════════════════════════════
# PASO 1 · Esqueleto (si no existe draft)
# ═══════════════════════════════════════════════════════════════════
if [[ ! -f "$DRAFT" ]]; then
  [[ -n "$MARCA" && -n "$MODELO" ]] || {
    echo "✗ No existe ${DRAFT}."
    echo "  Para generarlo necesito --marca y --modelo:"
    echo "    ./scripts/publicar-blog.sh --slug ${SLUG} --marca <Marca> --modelo <Modelo> [--ficha-href /coches/<id>]"
    exit 1
  }
  echo "→ Generando esqueleto de draft: ${DRAFT}"
  node scripts/scaffold-blog.mjs --marca "$MARCA" --modelo "$MODELO" \
    --slug "$SLUG" ${FICHA_HREF:+--ficha-href "$FICHA_HREF"} \
    --out "$DRAFT"
  echo
  echo "┌────────────────────────────────────────────────────────────┐"
  echo "│  DRAFT CREADO. Ahora rellena TODOS los campos TODO: en:    │"
  echo "│  ${DRAFT}"
  echo "│                                                            │"
  echo "│  Qué rellenar (datos REALES y verificados, cero inventado):│"
  echo "│   1. FOTOS REALES del modelo en public/media/ (*.webp,      │"
  echo "│      <300KB): hero + 3 de galería. Nada de IA genérica.     │"
  echo "│      En el draft: imagenHero, imagenes[0..2] →               │"
  echo "│      /media/<slug>-hero.webp, /media/<slug>-1.webp…         │"
  echo "│   2. description ≤155 car. (sin nombre de la web, ≤60 el title)│"
  echo "│   3. En cifras (6-10 datos), ficha-resumen (≥6 filas)       │"
  echo "│   4. Explicador de la tecnología clave (intro + ≥4 puntos)  │"
  echo "│   5. ≥5 curiosidades · comparativo con ≥2 rivales           │"
  echo "│   6. FAQ: 5-6 preguntas con respuestas útiles              │"
  echo "│   7. ≥1 fuente OFICIAL con URL válida                       │"
  echo "│   8. fichaHref → la ficha debe EXISTIR ya con datos reales  │"
  echo "│                                                            │"
  echo "│  Cuando esté relleno, vuelve a ejecutar el mismo comando.  │"
  echo "└────────────────────────────────────────────────────────────┘"
  exit 0
fi
echo "✓ Draft encontrado: ${DRAFT}"

# ═══════════════════════════════════════════════════════════════════
# PASO 2 · Validación dura (mandatos permanentes)
# ═══════════════════════════════════════════════════════════════════
echo "→ PASO 2/6: validando mandatos (scaffold-blog.mjs --check)…"
# NOTA: bloque set +e/set -e: el fallo del --check se gestiona manualmente
# (con set -e activo el script abortaría antes de imprimir el mensaje de BLOQUEO).
set +e
node scripts/scaffold-blog.mjs --check "$DRAFT" > /tmp/publicar-blog-check.log 2>&1
CHECK_EXIT=$?
set -e
tail -5 /tmp/publicar-blog-check.log
[[ $CHECK_EXIT -eq 0 ]] || {
  echo "✗ BLOQUEADO: el draft incumple mandatos (ver /tmp/publicar-blog-check.log)."
  echo "  Corrige el draft y reintenta. Nada se ha publicado ni generado."
  exit 1
}
echo "✓ --check en verde"

# 2b · Fotos: existen en public/media/ y son WebP (las 3 + hero)
echo "→ PASO 2b: verificando fotos REALES en public/media/ (*.webp)…"
set +e
node - "$DRAFT" <<'EOF'
const fs = require("fs");
const path = require("path");
const draft = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const REPO = process.env.REPO || ".";
const fotos = [draft.imagenHero, ...(draft.imagenes || [])];
const imgs = fotos.map(f => (typeof f === "string" ? f : f && f.src));
let errores = 0;
for (const img of imgs) {
  if (!img || !/^\/media\/.+\.webp$/i.test(img)) {
    console.error(`  ✗ ruta no válida (debe ser /media/<nombre>.webp): ${img}`);
    errores++;
    continue;
  }
  const real = path.join(REPO, "public", img);
  if (!fs.existsSync(real)) {
    console.error(`  ✗ NO existe en disco: ${img}`);
    errores++;
  } else {
    const kb = (fs.statSync(real).size / 1024).toFixed(0);
    console.log(`  ✓ ${img} (${kb} KB)`);
  }
}
process.exit(errores ? 1 : 0);
EOF
PHOTOS_EXIT=$?
set -e
[[ $PHOTOS_EXIT -eq 0 ]] || {
  echo "✗ BLOQUEADO: faltan fotos reales en public/media/. Sin fotos no se publica (mandato §3)."
  exit 1
}

# 2c · fichaHref: formato + ficha registrada con datos reales (filtro 10)
echo "→ PASO 2c: verificando enlace obligatorio a la ficha…"
set +e
node - "$DRAFT" <<'EOF'
const fs = require("fs");
const draft = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const REPO = process.env.REPO || ".";
const href = String(draft.fichaHref || "");
const m = href.match(/^\/(coches|motos|patinetes)\/([a-z0-9-]+)$/);
if (!m) {
  console.error(`✗ fichaHref con formato inválido (esperado /coches|motos|patinetes/<slug>): "${href}"`);
  process.exit(1);
}
const fichaSlug = m[2];
const registro = fs.readFileSync(`${REPO}/src/data/maextro/registro.ts`, "utf8");
const tsPath = `${REPO}/src/data/maextro/fichas/${fichaSlug}.ts`;
if (!fs.existsSync(tsPath)) {
  console.error(`✗ La ficha ${href} NO existe como módulo TS (${tsPath}).`);
  console.error("  Publica primero la ficha con publicar-ficha.sh; el blog la enlaza (mandato §3).");
  process.exit(1);
}
if (!new RegExp(`["'\`]${fichaSlug}["'\`]`).test(registro)) {
  console.error(`✗ La ficha "${fichaSlug}" existe como TS pero NO está registrada en registro.ts.`);
  console.error("  Regístrala: node scripts/maextro-registro.mjs add-ficha " + fichaSlug);
  process.exit(1);
}
console.log(`✓ Ficha enlazada y registrada: ${href}`);
EOF
FICHA_EXIT=$?
set -e
[[ $FICHA_EXIT -eq 0 ]] || { echo "✗ BLOQUEADO: ficha técnica ausente o no registrada (filtro 10, mandato §3)."; exit 1; }

# ═══════════════════════════════════════════════════════════════════
# PASO 3 · Emisión del módulo TS + registro
# ═══════════════════════════════════════════════════════════════════
echo "→ PASO 3/6: emitiendo TS (${TS_FILE})…"
node scripts/scaffold-blog.mjs --emit-ts "$DRAFT" --const articulo > "$TS_FILE"
[[ -s "$TS_FILE" ]] || { echo "✗ Falló la emisión del TS."; exit 1; }
echo "✓ TS emitido"
echo "→ Registrando el blog en src/data/maextro/registro.ts…"
node scripts/maextro-registro.mjs add-blog "$SLUG" || { echo "✗ Falló el registro."; exit 1; }
echo "✓ Blog registrado: /blog/${SLUG}"

# ═══════════════════════════════════════════════════════════════════
# PASO 4 · TypeScript (exit 0 o aborta)
# ═══════════════════════════════════════════════════════════════════
echo "→ PASO 4/6: npx tsc -b…"
set +e
npx tsc -b > /tmp/publicar-blog-tsc.log 2>&1
TSC_EXIT=$?
set -e
[[ $TSC_EXIT -eq 0 ]] || {
  echo "✗ BLOQUEADO: npx tsc -b falló (ver /tmp/publicar-blog-tsc.log)."
  echo "  Nada se ha publicado. Corrige los errores TS y reintenta."
  exit 1
}
echo "✓ TypeScript en verde"

# ═══════════════════════════════════════════════════════════════════
# PASO 5 · Pipeline blindado (SIN --deploy: termina en LISTO PARA REVISAR)
# ═══════════════════════════════════════════════════════════════════
echo "→ PASO 5/6: pipeline blindado (safe-publish-v2.sh, SIN --deploy)…"
if [[ $DRY_RUN -eq 1 ]]; then
  echo "  (simulacro: --dry-run)"
  ./scripts/safe-publish-v2.sh --dry-run "/blog/${SLUG}" "/" || { echo "✗ BLOQUEADO: el pipeline falló."; exit 1; }
else
  ./scripts/safe-publish-v2.sh "/blog/${SLUG}" "/" || { echo "✗ BLOQUEADO: el pipeline falló."; exit 1; }
fi

# ═══════════════════════════════════════════════════════════════════
# PASO 6 · Mensaje final
# ═══════════════════════════════════════════════════════════════════
echo
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✅  LISTO PARA REVISAR  ✅                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo
echo "  Artículo: /blog/${SLUG}"
echo "  Ficha enlazada: $(node -e 'const d=require("./drafts/'"${SLUG}"'.blog.json");process.stdout.write(d.fichaHref)')"
echo
echo "  Qué se verificó (mandatos permanentes):"
echo "    ✓ --check del scaffold en verde (estructura Maextro §1.2,"
echo "      0 TODO:/placeholders, description ≤155, title ≤60 sin marca)"
echo "    ✓ 3 fotos REALES del modelo en public/media/ (*.webp)"
echo "    ✓ Ficha técnica existe, registrada y enlazada (filtro 10)"
echo "    ✓ FAQ 5-6 con schema, ≥1 fuente oficial, tablas, CTA analizador"
echo "    ✓ npx tsc -b exit 0 (nunca tsc --noEmit)"
echo "    ✓ Prerender parcial de /blog/${SLUG} y / verificado"
echo "    ✓ Puertas verify-dist.py + validar-mandatos.py en verde"
echo
echo "  ⛔ NADA desplegado (norma de Daniel 11/10/2026)."
echo "  El deploy solo con su OK explícito tras revisión:"
echo "     ./scripts/safe-publish-v2.sh --deploy"
