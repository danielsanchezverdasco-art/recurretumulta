#!/usr/bin/env bash
# publicar-ficha.sh — UN solo comando para publicar una ficha de vehículo.
#
# Orden permanente de Daniel (11/10/2026): es IMPOSIBLE publicar una ficha que
# incumpla la ley permanente (paquete obligatorio: EuroNCAP honesto, mantenimiento
# con fuente, historia con fotos, garantía oficial, PRECIO OBLIGATORIO, title V800
# ≤60 sin marca, fotos reales en disco, FAQ 5-6).
#
# Uso:
#   ./scripts/publicar-ficha.sh --slug <slug> --seccion coches|motos|patinetes [--dry-run]
#   [--marca <marca> --modelo <modelo> --dato-clave <txt>]   (solo para generar el esqueleto)
#
# Flujo:
#   1. Si no existe drafts/<slug>.ficha.json -> lo genera con scaffold-ficha.mjs y
#      SALE diciendo qué rellenar (nada se publica).
#   2. Valida: scaffold-ficha.mjs --check (exit 0 = listo; exit 1 = bloqueado).
#   3. Emite TS + registra el slug (maextro-registro.mjs add-ficha).
#   4. npx tsc -b (exit 0 o se aborta).
#   5. safe-publish-v2.sh /<seccion>/<slug> /  -> prerender parcial + puertas 0-6b.
#   6. Termina en "LISTO PARA REVISAR". NUNCA despliega (ningún --deploy).
#
#   --dry-run: ejecuta los pasos 1-4 (validación y compilación) sin llamar a
#   safe-publish-v2.sh. Útil para verificar el draft sin esperar al prerender.
#
# Ver también: docs/PLANTILLA-MAEXTRO.md §4, docs/MANDATOS-PERMANENTES.md,
# docs/ARQUITECTURA-PUBLISH.md (Addendum: termina en LISTO PARA REVISAR).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SLUG=""
SECCION=""
DRY_RUN=0
MARCA=""
MODELO=""
DATO_CLAVE=""

usage() {
  cat <<'EOF'
Uso: ./scripts/publicar-ficha.sh --slug <slug> --seccion coches|motos|patinetes [--dry-run]
     [--marca <marca> --modelo <modelo> --dato-clave <txt>]

  --slug <slug>       Slug URL de la ficha (ej. maextro-v800-huawei-precio-ficha-tecnica)
  --seccion <s>       coches | motos | patinetes
  --dry-run           Valida + compila sin prerender (sin safe-publish-v2.sh)
  --marca/--modelo/--dato-clave
                      Solo se usan al GENERAR el esqueleto (paso 1). Opcionales.

Flujo: 1) genera esqueleto en drafts/ si no existe y sale con instrucciones ·
       2) --check (bloquea si hay TODOs) · 3) emite TS + registra slug ·
       4) tsc -b · 5) safe-publish-v2.sh (prerender parcial, SIN --deploy) ·
       6) LISTO PARA REVISAR.

NUNCA despliega. El deploy solo lo hace Daniel con OK explícito tras revisión.
EOF
}

fail() { echo "ERROR: $*" >&2; exit 1; }

# ---- parseo de argumentos ---------------------------------------------------
while [[ $# -gt 0 ]]; do
  case "$1" in
    --slug)       SLUG="${2:-}"; shift 2 ;;
    --seccion)    SECCION="${2:-}"; shift 2 ;;
    --dry-run)    DRY_RUN=1; shift ;;
    --marca)      MARCA="${2:-}"; shift 2 ;;
    --modelo)     MODELO="${2:-}"; shift 2 ;;
    --dato-clave) DATO_CLAVE="${2:-}"; shift 2 ;;
    -h|--help)    usage; exit 0 ;;
    *) fail "argumento desconocido: $1 (usa --help)" ;;
  esac
done

[[ -z "$SLUG" ]]    && { usage; fail "falta --slug"; }
[[ -z "$SECCION" ]] && { usage; fail "falta --seccion (coches|motos|patinetes)"; }
case "$SECCION" in
  coches|motos|patinetes) ;;
  *) fail "--seccion debe ser coches, motos o patinetes (dado: $SECCION)" ;;
esac
[[ "$SLUG" =~ ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$ ]] \
  || fail "slug inválido: '$SLUG' (solo minúsculas, dígitos y guiones)"

DRAFT="drafts/${SLUG}.ficha.json"
TS_DEST="src/data/maextro/fichas/${SLUG}.ts"
ROUTE="/${SECCION}/${SLUG}"

echo "=== publicar-ficha.sh: $ROUTE ==="

# ---- paso 1: esqueleto ------------------------------------------------------
if [[ ! -f "$DRAFT" ]]; then
  echo ""
  echo "--- PASO 1: generar esqueleto ---"
  SCAFFOLD_ARGS=(--slug "$SLUG" --seccion "$SECCION" --out "$DRAFT")
  [[ -n "$MARCA" ]]      && SCAFFOLD_ARGS+=(--marca "$MARCA")
  [[ -n "$MODELO" ]]     && SCAFFOLD_ARGS+=(--modelo "$MODELO")
  [[ -n "$DATO_CLAVE" ]] && SCAFFOLD_ARGS+=(--dato-clave "$DATO_CLAVE")
  node scripts/scaffold-ficha.mjs "${SCAFFOLD_ARGS[@]}"
  echo ""
  echo ">>> ESQUELETO CREADO: $DRAFT"
  echo ">>> NADA PUBLICADO. Rellena TODOS los TODO: del JSON con datos REALES y verificados:"
  echo ""
  echo "    PAQUETE OBLIGATORIO (orden permanente de Daniel, sin excepciones):"
  echo "      1. PRECIO OBLIGATORIO: precio real; si no existe, orientativo marcado con ~"
  echo "      2. EuroNCAP honesto: estrellas + año + enlace oficial; si no hay prueba,"
  echo "         texto 'sin datos EuroNCAP' — NUNCA inventar"
  echo "      3. Mantenimiento verificable: intervalos y costes REALES con FUENTE"
  echo "      4. Historia del modelo: timeline con FOTO en cada hito (fotos reales del modelo)"
  echo "      5. Garantía oficial de la marca (texto + fuente; batería si es eléctrico)"
  echo "      6. Title V800: '[Modelo]: [dato clave] [Ficha AÑO]', ≤60 car., SIN marca/web"
  echo "      7. Fotos REALES del modelo en public/media/*.webp (<300KB, hero + >=3 galería)"
  echo "      8. FAQ 5-6 con respuestas útiles (sin Markdown)"
  echo "      9. La nota de Cosa (0-10), En cifras (6-10 datos), >=8 specs, ZBE Madrid"
  echo "      10. Description SEO <=155 car., enlaces internos + fuentes oficiales"
  echo ""
  echo "    Cuando esté relleno, relanza este mismo comando:"
  echo "      ./scripts/publicar-ficha.sh --slug $SLUG --seccion $SECCION"
  exit 0
fi

echo ""
echo "--- PASO 2: validar draft (scaffold-ficha.mjs --check) ---"
node scripts/scaffold-ficha.mjs --check "$DRAFT"
echo "OK: validación superada (exit 0)"

# ---- paso 3: emitir TS + registrar ------------------------------------------
echo ""
echo "--- PASO 3: emitir TS y registrar slug ---"
mkdir -p src/data/maextro/fichas
node scripts/scaffold-ficha.mjs --emit-ts "$DRAFT" --const ficha > "$TS_DEST"
echo "OK: TS emitido en $TS_DEST"
node scripts/maextro-registro.mjs add-ficha "$SLUG"
echo "OK: slug registrado en src/data/maextro/registro.ts"

# ---- paso 4: TypeScript ------------------------------------------------------
echo ""
echo "--- PASO 4: npx tsc -b ---"
TSC_LOG="$(mktemp)"
npx tsc -b >"$TSC_LOG" 2>&1
TSC_EXIT=$?
tail -5 "$TSC_LOG"
rm -f "$TSC_LOG"
[[ $TSC_EXIT -eq 0 ]] || fail "tsc -b falló (exit $TSC_EXIT): NADA se publica"
echo "OK: tsc -b en verde"

# ---- paso 5: pipeline blindado (sin deploy) ----------------------------------
if [[ $DRY_RUN -eq 1 ]]; then
  echo ""
  echo "=== DRY-RUN COMPLETO: validación + compilación OK, safe-publish-v2.sh omitido ==="
  echo "Para publicar (prerender parcial, SIN deploy):"
  echo "  ./scripts/publicar-ficha.sh --slug $SLUG --seccion $SECCION"
  exit 0
fi

echo ""
echo "--- PASO 5: safe-publish-v2.sh $ROUTE / (SIN --deploy: termina en LISTO PARA REVISAR) ---"
./scripts/safe-publish-v2.sh "$ROUTE" "/"
PUBLISH_EXIT=$?
[[ $PUBLISH_EXIT -eq 0 ]] || fail "safe-publish-v2.sh falló (exit $PUBLISH_EXIT): producción NO tocada"

# ---- paso 6: resultado --------------------------------------------------------
echo ""
echo "==============================================================="
echo "  LISTO PARA REVISAR: $ROUTE"
echo "==============================================================="
echo "Verificaciones superadas:"
echo "  [x] Draft sin placeholders: scaffold-ficha.mjs --check exit 0"
echo "  [x] Paquete obligatorio: precio + EuroNCAP honesto + mantenimiento con fuente"
echo "        + historia con fotos + garantía oficial + title V800 <=60 sin marca"
echo "        + fotos reales en disco + FAQ 5-6"
echo "  [x] npx tsc -b exit 0"
echo "  [x] Prerender parcial + puertas 0-6b de safe-publish-v2.sh en verde"
echo "NADA desplegado. Daniel revisa y da el OK explícito antes de cualquier deploy"
echo "  (--deploy solo tras su revisión, orden 11/10/2026)."
echo "==============================================================="
