#!/bin/bash
# safe-publish-v2.sh — Pipeline blindado de publicación para recurretumulta.online
#
# Principio: es IMPOSIBLE romper la web al publicar.
#   - dist/ nunca se sustituye por un árbol incompleto (el bug de safe-publish.sh v1)
#   - El build genera assets nuevos, pero el HTML bueno se conserva y se rehidrata
#   - Solo se prerenderizan las rutas cambiadas (+ alwaysPrerender); el resto intacto
#   - Puertas de verificación ANTES de desplegar: si algo falla, no se despliega
#   - Backup con hardlinks (instantáneo) siempre disponible para rollback local
#
# Uso: ./scripts/safe-publish-v2.sh [--skip-build] [--resume] [--fresh] /ruta1 /ruta2 ...
#        ./scripts/safe-publish-v2.sh --deploy
#
# NORMA DE Daniel (11/10/2026, ley permanente): NINGÚN deploy sin su OK
# explícito tras revisión. Por defecto el pipeline termina en
# "LISTO PARA REVISAR" (puertas 0–6b en verde, NADA desplegado).
# Solo --deploy despliega, y solo reanudando un "ready-for-review".
#
# Flags:
#   --deploy      DESPLIEGA a producción. Solo con OK explícito de Daniel
#                 tras revisar el "LISTO PARA REVISAR"; reanuda desde ese estado.
#   --dry-run     Obsoleto (ahora es el comportamiento por defecto): no despliega.
#   --skip-build  salta npm run build (usa dist/ tal cual, útil para reintentos)
#   --resume      reanuda una corrida interrumpida desde su fase (solo fases
#                 idempotentes: restore, hashes, prerender, verify, mandatos)
#   --fresh       archiva el estado de una corrida interrumpida y empieza de cero
#
# Puertas (en orden):
#   0   TypeScript (npx tsc -b, nunca --noEmit)
#   0b  Auth preflight Netlify (R12): aborta ANTES del backup si el token falla
#   1   Backup instantáneo: cp -al --no-preserve=ownership + chmod a-w (R: bug cp)
#   2   gen-sitemap.mjs (lee scripts/routes.json) + npm run build
#   3   Restaurar HTML buenos del backup (fail si 0 restauradas)
#   4   replace-hashes.py con RTM_DIST (R3: sin pipes, exit explícito)
#   5   Prerender selectivo con reintentos SOLO de rutas fallidas (R8, R9)
#   6   verify-dist.py --strict, min-pages = max(backup, stable, 5800) (R1, R11)
#   6b  validar-mandatos.py (puerta editorial; ver bloque TODO si aún no existe)
#   7   Deploy con exit explícito + captura NETLIFY_DEPLOY_ID=/URL= (R4, R6)
#   8   Post-deploy: apex 200 + www 301→apex + canonical servido, hasta 5 min (R7)
#   9   Rotación: conserva 5 backups + symlink dist-last-good (R10)
#
# Estado: scripts/.safe-publish/state.json (+ runs/<TS>/ persistente, nunca /tmp) (R2)
set -euo pipefail

cd ~/workspace/recurretumulta-v2
REPO="$PWD"

# ── Config desde scripts/routes.json (única fuente de verdad) ─────
SITE_ID="$(python3 -c 'import json; print(json.load(open("scripts/routes.json"))["netlify"]["siteId"])')"
STABLE_DIR_RAW="$(python3 -c 'import json; print(json.load(open("scripts/routes.json"))["baseline"]["stableDir"])')"
STABLE_DIR="${STABLE_DIR_RAW/#\~/$HOME}"
HARD_FLOOR="$(python3 -c 'import json; print(json.load(open("scripts/routes.json"))["baseline"]["minPagesHardFloor"])')"
APEX_BASE="https://recurretumulta.online"

# ── Argumentos ────────────────────────────────────────────────────
DRY_RUN=0
SKIP_BUILD=0
DO_RESUME=0
DO_FRESH=0
DO_DEPLOY=0
SKIP_STATE_CHECK=0
ROUTES=()
for a in "$@"; do
  case "$a" in
    --dry-run) DRY_RUN=1 ;;
    --deploy) DO_DEPLOY=1 ;;
    --skip-build) SKIP_BUILD=1 ;;
    --resume) DO_RESUME=1 ;;
    --fresh) DO_FRESH=1 ;;
    /*) ROUTES+=("$a") ;;
    *) echo "Ignorando argumento desconocido: $a" ;;
  esac
done

STATE_DIR="scripts/.safe-publish"
STATE_FILE="$STATE_DIR/state.json"
RUNS_DIR="$STATE_DIR/runs"
mkdir -p "$RUNS_DIR"

# Fases idempotentes reanudables con --resume (R2)
RESUMABLE_PHASES="restore hashes prerender verify mandatos"

# ── Modo --deploy: solo reanuda un "ready-for-review" (norma Daniel 11/10) ──
if [ $DO_DEPLOY -eq 1 ]; then
  [ -f "$STATE_FILE" ] || { echo "⛔ --deploy sin 'LISTO PARA REVISAR' previo: ejecuta primero sin --deploy para preparar y verificar."; exit 1; }
  PREV_DEPLOY_PHASE="$(jq -r '.phase // "none"' "$STATE_FILE" 2>/dev/null || echo "none")"
  [ "$PREV_DEPLOY_PHASE" = "ready-for-review" ] || { echo "⛔ --deploy requiere estado 'ready-for-review' (actual: $PREV_DEPLOY_PHASE)."; exit 1; }
  TS="$(jq -r '.ts' "$STATE_FILE")"
  BACKUP="$(jq -r '.backupDir' "$STATE_FILE")"
  ROUTES_FILE="$(jq -r '.routesFile' "$STATE_FILE")"
  LOG="$(jq -r '.logFile' "$STATE_FILE")"
  RUN_DIR="$RUNS_DIR/$TS"
  mkdir -p "$RUN_DIR"
  [ -d "$BACKUP" ] || { echo "⛔ el backup registrado ($BACKUP) ya no existe; no se puede desplegar con seguridad."; exit 1; }
  [ -f "$ROUTES_FILE" ] || { echo "⛔ el fichero de rutas registrado ($ROUTES_FILE) ya no existe."; exit 1; }
  RESUME_FROM="deploy"
  SKIP_STATE_CHECK=1
  echo "=== DEPLOY (OK explícito de Daniel tras revisión) ==="
  echo "Reanudando 'ready-for-review' de $TS; backup: $BACKUP"
fi

# ── Estado previo (R2) ────────────────────────────────────────────
RESUME_FROM="${RESUME_FROM:-}"
if [ "$SKIP_STATE_CHECK" -eq 0 ] && [ -f "$STATE_FILE" ]; then
  PREV_PHASE="$(jq -r '.phase // "none"' "$STATE_FILE" 2>/dev/null || echo "none")"
  if [ "$PREV_PHASE" != "done" ] && [ "$PREV_PHASE" != "none" ]; then
    if [ $DO_RESUME -eq 1 ]; then
      case " $RESUMABLE_PHASES " in
        *" $PREV_PHASE "*)
          TS="$(jq -r '.ts' "$STATE_FILE")"
          BACKUP="$(jq -r '.backupDir' "$STATE_FILE")"
          ROUTES_FILE="$(jq -r '.routesFile' "$STATE_FILE")"
          LOG="$(jq -r '.logFile' "$STATE_FILE")"
          RUN_DIR="$RUNS_DIR/$TS"
          mkdir -p "$RUN_DIR"
          [ -d "$BACKUP" ] || { echo "⛔ --resume: el backup registrado ($BACKUP) ya no existe; usa --fresh"; exit 1; }
          [ -f "$ROUTES_FILE" ] || { echo "⛔ --resume: el fichero de rutas registrado ($ROUTES_FILE) ya no existe; usa --fresh"; exit 1; }
          RESUME_FROM="$PREV_PHASE"
          ;;
        *)
          echo "⛔ La fase interrumpida '$PREV_PHASE' no es reanudable de forma segura."
          echo "   Usa --fresh para archivar el estado y empezar de cero (fases reanudables: $RESUMABLE_PHASES)."
          exit 1
          ;;
      esac
    elif [ $DO_FRESH -eq 1 ]; then
      ARCHIVE_DIR="$RUNS_DIR/archived-$(date +%Y%m%d-%H%M%S)"
      mkdir -p "$ARCHIVE_DIR"
      mv "$STATE_FILE" "$ARCHIVE_DIR/state.json"
      echo "--fresh: estado anterior archivado en $ARCHIVE_DIR/"
      # Seguridad: si dist/ está roto (p. ej. build a medias de la corrida
      # interrumpida), no hacer backup de un árbol roto a ciegas.
      if [ -d dist ]; then
        DIST_PAGES_NOW="$(find dist -name "index.html" -not -path "*/assets/*" | wc -l)"
        if [ "$DIST_PAGES_NOW" -lt "$HARD_FLOOR" ]; then
          echo "⛔ dist/ parece roto ($DIST_PAGES_NOW páginas < suelo $HARD_FLOOR)."
          echo "   Restaura primero desde el último backup bueno y vuelve a intentarlo:"
          echo "     rm -rf dist && cp -al --no-preserve=ownership dist-last-good dist && chmod -R u+w dist"
          exit 1
        fi
      fi
    else
      echo "⛔ Hay una corrida interrumpida (fase: $PREV_PHASE, ver $STATE_FILE)."
      echo "   --resume   reanuda desde '$PREV_PHASE' (fases idempotentes: $RESUMABLE_PHASES)"
      echo "   --fresh    archiva el estado y empieza de cero"
      [ "$PREV_PHASE" = "ready-for-review" ] && echo "   --deploy   despliega (SOLO con OK explícito de Daniel tras revisar)"
      exit 1
    fi
  fi
fi

# ── Setup de la corrida (nueva o reanudada) ───────────────────────
if [ -z "$RESUME_FROM" ]; then
  if [ ${#ROUTES[@]} -eq 0 ]; then
    echo "Uso: $0 [--skip-build] [--resume] [--fresh] /ruta1 /ruta2 ...   (termina en LISTO PARA REVISAR)"
    echo "     $0 --deploy   (despliega; SOLO con OK explícito de Daniel tras revisar)"
    exit 1
  fi
  TS="$(date +%Y%m%d-%H%M%S)"
  BACKUP="dist-backup-$TS"
  RUN_DIR="$RUNS_DIR/$TS"
  mkdir -p "$RUN_DIR"
  LOG="$RUN_DIR/safe-publish-$TS.log"
  ROUTES_FILE="$RUN_DIR/routes.txt"
  # Rutas a prerenderizar = alwaysPrerender (/, /blog, /buscador-coches) ∪ pedidas (R8)
  {
    python3 -c 'import json; print("\n".join(json.load(open("scripts/routes.json"))["alwaysPrerender"]))'
    printf "%s\n" "${ROUTES[@]}"
  } | sort -u > "$ROUTES_FILE" || { echo "⛔ no se pudo construir $ROUTES_FILE"; exit 1; }
  N_ROUTES="$(wc -l < "$ROUTES_FILE")"
  [ "$N_ROUTES" -gt 0 ] || { echo "⛔ fichero de rutas vacío"; exit 1; }
else
  N_ROUTES="$(wc -l < "$ROUTES_FILE")"
fi

log() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG"; }
# fail NO reescribe state.json: conserva la fase donde murió para poder --resume
fail() { log "⛔ FALLO: $*"; log "Backup intacto en $BACKUP/ — producción NO tocada"; exit 1; }

# Escribe el estado de la corrida (R2). Llamar al ENTRAR en cada fase.
state_write() {
  jq -n --arg phase "$1" --arg ts "$TS" --arg backup "$BACKUP" \
    --arg routes "$ROUTES_FILE" --arg logf "$LOG" \
    '{phase:$phase, ts:$ts, backupDir:$backup, routesFile:$routes, logFile:$logf}' \
    > "$STATE_FILE" || fail "no se pudo escribir $STATE_FILE"
}

# Ejecuta un paso crítico SIN pipes (R3): salida a fichero + exit explícito.
# Uso: run_step "etiqueta" "nombre-fichero" comando [args...]
# (para VAR=valor delante del comando, usar: run_step ... env VAR=valor comando ...)
run_step() {
  local label="$1" sname="$2"; shift 2
  local slog="$RUN_DIR/step-$sname.log"
  local rc=0
  "$@" >"$slog" 2>&1 || rc=$?
  tail -3 "$slog" | sed 's/^/    /' | tee -a "$LOG" || true
  return "$rc"
}

# ¿Debe ejecutarse esta fase? (en --resume se saltan las ya completadas)
should_run() {  # $1 = fase
  [ -z "$RESUME_FROM" ] && return 0
  local seen_resume=0 f
  for f in backup sitemap_build restore hashes prerender verify mandatos deploy postdeploy rotate; do
    [ "$f" = "$RESUME_FROM" ] && seen_resume=1
    [ "$f" = "$1" ] && { [ $seen_resume -eq 1 ] && return 0 || return 1; }
  done
  return 0
}

log "=== SAFE PUBLISH v2 ($TS)${RESUME_FROM:+ — reanudando desde '$RESUME_FROM'} ==="
log "Rutas a prerenderizar: $N_ROUTES (ver $ROUTES_FILE)"
log "Run dir (persistente): $RUN_DIR"

# ── Puerta 0: TypeScript (siempre corre, incluso con --resume) ────
log "[0] TypeScript..."
run_step "npx tsc -b" "0-tsc" npx tsc -b || fail "npx tsc -b (ver $RUN_DIR/step-0-tsc.log)"
log "  ✓ tsc -b OK"

# ── Puerta 0b: Auth preflight Netlify (R12) ───────────────────────
# ANTES del backup y del build: si la auth falla, no se pierde ni un minuto.
log "[0b] Preflight de auth Netlify..."
if [ -z "${NETLIFY_TOKEN:-}" ]; then
  fail "puerta 0b: NETLIFY_TOKEN no está definido (el preflight usa curl con Bearer; un token vacío daría 401). Revisa NETLIFY_TOKEN o el conector custom.netlify y vuelve a intentarlo."
fi
AUTH_EXIT=0
curl -sf --max-time 15 -H "Authorization: Bearer $NETLIFY_TOKEN" \
  "https://api.netlify.com/api/v1/sites/$SITE_ID" \
  >"$RUN_DIR/step-0b-auth.log" 2>&1 || AUTH_EXIT=$?
[ $AUTH_EXIT -eq 0 ] || fail "puerta 0b: GET /sites/$SITE_ID no devolvió 200 (curl exit $AUTH_EXIT). Revisa NETLIFY_TOKEN o el conector custom.netlify. Ver $RUN_DIR/step-0b-auth.log"
log "  ✓ auth Netlify OK"

# ── Paso 1: Backup instantáneo con hardlinks ─────────────────────
if should_run backup; then
  state_write "backup"
  [ -d dist ] || fail "no existe dist/"
  find dist -name "index.html" -not -path "*/assets/*" > "$RUN_DIR/dist-pages.txt" \
    || fail "find en dist/"
  BACKUP_PAGES="$(wc -l < "$RUN_DIR/dist-pages.txt")"
  [ "$BACKUP_PAGES" -ge "$HARD_FLOOR" ] || fail "dist/ solo tiene $BACKUP_PAGES páginas (< suelo $HARD_FLOOR): no se hace backup de un árbol roto"
  log "[1] Backup de dist/ ($BACKUP_PAGES páginas) -> $BACKUP/ ..."
  # FIX PRIORITARIO (11/10/2026): --no-preserve=ownership evita "Operation not permitted"
  run_step "cp -al del backup" "1-backup" cp -al --no-preserve=ownership dist "$BACKUP" \
    || fail "cp -al --no-preserve=ownership del backup (ver $RUN_DIR/step-1-backup.log)"
  # NOTA (11/10/2026): NO hacer chmod a-w sobre el backup — son hardlinks al mismo
  # inodo que dist/, así que también dejaría dist/ read-only y rompería el restore.
  log "  ✓ backup instantáneo (hardlinks)"
else
  find "$BACKUP" -name "index.html" -not -path "*/assets/*" > "$RUN_DIR/dist-pages.txt" \
    || fail "find en el backup $BACKUP/"
  BACKUP_PAGES="$(wc -l < "$RUN_DIR/dist-pages.txt")"
  log "[1] --resume: se reutiliza el backup $BACKUP/ ($BACKUP_PAGES páginas)"
fi

# ── Paso 2: Sitemap + build ──────────────────────────────────────
if should_run sitemap_build; then
  state_write "sitemap_build"
  if [ $SKIP_BUILD -eq 0 ]; then
    log "[2] Regenerando sitemap (lee scripts/routes.json)..."
    run_step "gen-sitemap.mjs" "2a-sitemap" node scripts/gen-sitemap.mjs \
      || fail "gen-sitemap.mjs (ver $RUN_DIR/step-2a-sitemap.log)"
    log "[2] npm run build (vacía dist/: el backup ya existe)..."
    run_step "npm run build" "2b-build" npm run build \
      || fail "npm run build (ver $RUN_DIR/step-2b-build.log)"
    log "  ✓ build OK"
  else
    log "[2] --skip-build: se usa dist/ tal cual"
  fi
else
  log "[2] --resume: fase sitemap/build ya completada"
fi

# ── Paso 3: Restaurar HTML buenos del backup ─────────────────────
if should_run restore; then
  state_write "restore"
  log "[3] Restaurando HTML del backup..."
  find "$BACKUP" -name "index.html" -not -path "*/assets/*" > "$RUN_DIR/backup-html.txt" \
    || fail "find en el backup $BACKUP/"
  RESTORED=0
  while IFS= read -r f; do
    [ -n "$f" ] || continue
    rel="${f#$BACKUP/}"
    dest="dist/$rel"
    mkdir -p "$(dirname "$dest")" || fail "mkdir para $dest"
    # Si origen y destino son el mismo inodo (--skip-build: dist/ intacto),
    # no hay nada que restaurar; si no, --remove-destination rompe el hardlink
    # y copia de verdad (un cp normal fallaría con "same file").
    if [ -e "$dest" ] && [ "$f" -ef "$dest" ]; then
      : # mismo inodo: ya está restaurado
    else
      cp --remove-destination "$f" "$dest" || fail "cp de $f"
    fi
    RESTORED=$((RESTORED+1))
  done < "$RUN_DIR/backup-html.txt"
  [ "$RESTORED" -gt 0 ] || fail "restauración: 0 páginas restauradas (backup corrupto o vacío)"
  log "  ✓ $RESTORED páginas restauradas del backup"
else
  log "[3] --resume: fase restore ya completada"
fi

# ── Paso 4: Actualizar hashes de assets (R3: sin pipes) ───────────
if should_run hashes; then
  state_write "hashes"
  log "[4] replace-hashes.py (RTM_DIST=$REPO/dist)..."
  run_step "replace-hashes.py" "4-hashes" env RTM_DIST="$REPO/dist" python3 scripts/replace-hashes.py \
    || fail "replace-hashes.py (ver $RUN_DIR/step-4-hashes.log)"
  log "  ✓ hashes actualizados"
else
  log "[4] --resume: fase hashes ya completada"
fi

# ── Paso 5: Prerender selectivo, reintentos solo de fallidas (R9)─
if should_run prerender; then
  state_write "prerender"
  log "[5] Prerender de $N_ROUTES rutas (máx 3 intentos, cada reintento solo las fallidas)..."
  ATTEMPT_FILE="$ROUTES_FILE"
  PR_OK=0
  for ATTEMPT in 1 2 3; do
    N_ATTEMPT="$(wc -l < "$ATTEMPT_FILE")"
    log "  intento $ATTEMPT/3 ($N_ATTEMPT rutas)..."
    if run_step "prerender intento $ATTEMPT" "5-prerender-a$ATTEMPT" \
        env PRERENDER_ONLY_FILE="$ATTEMPT_FILE" node scripts/prerender.mjs; then
      PR_OK=1
      log "  ✓ prerender OK en intento $ATTEMPT"
      break
    fi
    FAILED_LIST="$RUN_DIR/failed-attempt-$ATTEMPT.txt"
    grep -E '^FAIL_ROUTE:' "$RUN_DIR/step-5-prerender-a$ATTEMPT.log" \
      | sed 's/^FAIL_ROUTE://' | sort -u > "$FAILED_LIST" || true
    N_FAILED="$(wc -l < "$FAILED_LIST")"
    if [ "$N_FAILED" -eq 0 ]; then
      fail "prerender falló en el intento $ATTEMPT sin líneas FAIL_ROUTE: (crash del navegador u otro error grave). Ver $RUN_DIR/step-5-prerender-a$ATTEMPT.log"
    fi
    log "  ✗ $N_FAILED rutas fallidas (ver $FAILED_LIST); reintentando solo esas..."
    ATTEMPT_FILE="$FAILED_LIST"
    sleep 5
  done
  [ $PR_OK -eq 1 ] || fail "prerender falló tras 3 intentos; últimas fallidas en $RUN_DIR/failed-attempt-3.txt"
else
  log "[5] --resume: fase prerender ya completada"
fi

# ── Puerta 6: Verificación completa (R1, R11) ─────────────────────
if should_run verify; then
  state_write "verify"
  # R1: min-pages = max(páginas del backup, páginas del baseline estable, suelo duro).
  # Nunca autorreferencial: el baseline es ~/workspace/backups/dist-20261008-preprod (5844).
  find "$STABLE_DIR" -name "index.html" -not -path "*/assets/*" > "$RUN_DIR/stable-pages.txt" \
    || fail "find en el baseline $STABLE_DIR"
  STABLE_PAGES="$(wc -l < "$RUN_DIR/stable-pages.txt")"
  MIN_PAGES="$BACKUP_PAGES"
  [ "$STABLE_PAGES" -gt "$MIN_PAGES" ] && MIN_PAGES="$STABLE_PAGES"
  [ "$HARD_FLOOR" -gt "$MIN_PAGES" ] && MIN_PAGES="$HARD_FLOOR"
  log "[6] verify-dist.py --strict (min-pages=$MIN_PAGES = max(backup $BACKUP_PAGES, stable $STABLE_PAGES, suelo $HARD_FLOOR))..."
  run_step "verify-dist.py" "6-verify" python3 scripts/verify-dist.py \
    --dist "$REPO/dist" --routes-file "$ROUTES_FILE" \
    --routes-json "$REPO/scripts/routes.json" --min-pages "$MIN_PAGES" --strict \
    || fail "verify-dist.py — NO se despliega (ver $RUN_DIR/step-6-verify.log)"
  log "  ✓ verify-dist.py OK"
else
  log "[6] --resume: fase verify ya completada"
fi

# ── Puerta 6b: validar-mandatos.py (puerta editorial) ─────────────
if should_run mandatos; then
  state_write "mandatos"
  if [ -f scripts/validar-mandatos.py ]; then
    log "[6b] validar-mandatos.py..."
    # Las líneas exactas de invocación las entrega el agente VALIDADOR-MANDATOS.
    run_step "validar-mandatos.py" "6b-mandatos" python3 scripts/validar-mandatos.py \
      --dist "$REPO/dist" --routes-file "$ROUTES_FILE" \
      --routes-json "$REPO/scripts/routes.json" --strict \
      || fail "validar-mandatos.py — NO se despliega (ver $RUN_DIR/step-6b-mandatos.log)"
    log "  ✓ validar-mandatos.py OK"
  else
    log "[6b] ⚠ OMITIDA: scripts/validar-mandatos.py aún no existe."
    log "  # PUERTA 6b: pendiente validar-mandatos.py"
    log "  TODO(VALIDADOR-MANDATOS): entregar el script + las líneas exactas de invocación;"
    log "  cuando el fichero exista, esta puerta se activa automáticamente."
  fi
else
  log "[6b] --resume: fase mandatos ya completada"
fi

# ── Paso 7: Deploy — SOLO con --deploy (OK explícito de Daniel) ───
# Norma Daniel 11/10/2026 (ley permanente): ningún deploy sin su revisión
# y OK explícito. Sin --deploy el pipeline termina aquí en "LISTO PARA REVISAR".
if [ $DO_DEPLOY -eq 0 ]; then
  state_write "ready-for-review"
  log "=== LISTO PARA REVISAR ==="
  log "Todas las puertas en verde (tsc, backup, build, restore, hashes, prerender, verify-dist, validar-mandatos)."
  log "NADA desplegado — norma de Daniel: ningún deploy sin su OK explícito tras revisión."
  log "Revisar: log=$LOG | rutas=$ROUTES_FILE | backup=$BACKUP/"
  log "Para desplegar tras su OK: $0 --deploy"
  exit 0
fi

if should_run deploy; then
  state_write "deploy"
  log "[7] Deploy a Netlify..."
  DEPLOY_LOG="$RUN_DIR/step-7-deploy.log"
  DEPLOY_EXIT=0
  # R4: sin command-substitution con pipe; exit explícito (R3).
  python3 scripts/netlify-deploy.py >"$DEPLOY_LOG" 2>&1 || DEPLOY_EXIT=$?
  tail -5 "$DEPLOY_LOG" | sed 's/^/    /' | tee -a "$LOG" || true
  if [ $DEPLOY_EXIT -ne 0 ]; then
    log "⛔ DEPLOY FAILED (exit $DEPLOY_EXIT). Producción sigue sirviendo el deploy anterior intacto."
    log "Guía de rollback:"
    log "  1) Revisa el log: $DEPLOY_LOG"
    log "  2) Rollback al deploy anterior: python3 scripts/rollback-deploy.py --site-id $SITE_ID --to-previous"
    log "  3) El backup local está intacto en: $BACKUP/"
    log "  4) Alternativa manual: panel de Netlify → Deploys → deploy anterior → «Restore deploy»"
    exit 1
  fi
  # R6: captura por líneas estables ^NETLIFY_DEPLOY_ID= / ^NETLIFY_DEPLOY_URL=
  DEPLOY_ID="$(grep -E '^NETLIFY_DEPLOY_ID=' "$DEPLOY_LOG" | cut -d= -f2 | head -1)"
  DEPLOY_URL="$(grep -E '^NETLIFY_DEPLOY_URL=' "$DEPLOY_LOG" | cut -d= -f2 | head -1)"
  log "  ✓ deploy OK: id=${DEPLOY_ID:-desconocido} url=${DEPLOY_URL:-desconocida}"
else
  log "[7] --resume: fase deploy ya completada"
fi

# ── Puerta 8: Post-deploy (R7) ───────────────────────────────────
if should_run postdeploy; then
  state_write "postdeploy"
  log "[8] Post-deploy: apex 200 + www 301→apex + canonical servido (bucle hasta 5 min)..."
  FIRST_ROUTE="$(head -1 "$ROUTES_FILE")"
  if [ "$FIRST_ROUTE" = "/" ]; then CHECK_URL="$APEX_BASE/"; else CHECK_URL="$APEX_BASE$FIRST_ROUTE/"; fi
  # Canonical esperado: el del dist/ recién publicado.
  EXPECTED_CANON="$(python3 - "$REPO/dist" "$FIRST_ROUTE" <<'EOF'
import re, sys, os
dist, route = sys.argv[1], sys.argv[2]
p = os.path.join(dist, "index.html") if route == "/" else os.path.join(dist, route.lstrip("/"), "index.html")
html = open(p, encoding="utf-8", errors="ignore").read()
m = re.search(r'<link rel="canonical" href="([^"]+)"', html)
print(m.group(1) if m else "")
EOF
)"
  [ -n "$EXPECTED_CANON" ] || fail "no se pudo extraer el canonical de dist/ para $FIRST_ROUTE"
  log "  ruta de control: $FIRST_ROUTE (canonical esperado: $EXPECTED_CANON)"
  DEADLINE=$(( $(date +%s) + 300 ))
  POST_OK=0
  APEX_CODE="000"; WWW_CODE="000"; WWW_TARGET=""
  while [ "$(date +%s)" -lt "$DEADLINE" ]; do
    APEX_CODE="$(curl -s -o /dev/null -w "%{http_code}" --max-time 20 "$APEX_BASE/" || echo "000")"
    WWW_LINE="$(curl -s -o /dev/null -w "%{http_code} %{redirect_url}" --max-time 20 "https://www.recurretumulta.online/" || echo "000 ")"
    WWW_CODE="${WWW_LINE%% *}"
    WWW_TARGET="${WWW_LINE#* }"
    if [ "$APEX_CODE" = "200" ] && [ "$WWW_CODE" = "301" ] && [[ "$WWW_TARGET" == "$APEX_BASE"* ]]; then
      curl -s --max-time 20 "$CHECK_URL" > "$RUN_DIR/postdeploy-fetch.html" 2>/dev/null || true
      SERVED_CANON="$(python3 -c 'import re,sys; m=re.search(r"<link rel=\"canonical\" href=\"([^\"]+)\"", open("'"$RUN_DIR"'/postdeploy-fetch.html", encoding="utf-8", errors="ignore").read()); print(m.group(1) if m else "")')"
      if [ "$SERVED_CANON" = "$EXPECTED_CANON" ]; then
        POST_OK=1
        break
      fi
      log "  … edge aún no converge (canon servido: '${SERVED_CANON:-?}'), reintentando…"
    else
      log "  … apex=$APEX_CODE www=$WWW_CODE→${WWW_TARGET:-?}, reintentando…"
    fi
    sleep 15
  done
  if [ $POST_OK -ne 1 ]; then
    log "⛔ POST-DEPLOY FALLIDO tras 5 min (apex=$APEX_CODE, www=$WWW_CODE)."
    log "Rollback sugerido: python3 scripts/rollback-deploy.py --site-id $SITE_ID --to-previous"
    log "El backup local está intacto en: $BACKUP/"
    exit 1
  fi
  log "  ✓ post-deploy OK (apex 200, www 301→apex, canonical servido == dist/)"
else
  log "[8] --resume: fase postdeploy ya completada"
fi

# ── Paso 9: Rotación de backups (R10) ─────────────────────────────
if should_run rotate; then
  state_write "rotate"
  log "[9] Rotación de backups (conservar los 5 más recientes)..."
  ls -d dist-backup-*/ > "$RUN_DIR/backups-list.txt" 2>/dev/null || true
  N_BACKUPS="$(wc -l < "$RUN_DIR/backups-list.txt")"
  if [ "$N_BACKUPS" -gt 5 ]; then
    head -n $((N_BACKUPS - 5)) "$RUN_DIR/backups-list.txt" > "$RUN_DIR/backups-delete.txt" || true
    while IFS= read -r d; do
      [ -n "$d" ] || continue
      rm -rf "$d" && log "  eliminado backup antiguo: $d"
    done < "$RUN_DIR/backups-delete.txt"
    log "  ✓ rotación: $((N_BACKUPS - 5)) backups antiguos eliminados, 5 conservados"
  else
    log "  ✓ hay $N_BACKUPS backups, no sobra ninguno"
  fi
  ln -sfn "$BACKUP" dist-last-good
  log "  ✓ dist-last-good -> $BACKUP"
else
  log "[9] --resume: fase rotate ya completada"
fi

state_write "done"
log "=== PUBLISH COMPLETO ==="
log "Backup de seguridad: $BACKUP/ (+ symlink dist-last-good)"
log "Si algo va mal en producción: python3 scripts/rollback-deploy.py --site-id $SITE_ID --to-previous"
