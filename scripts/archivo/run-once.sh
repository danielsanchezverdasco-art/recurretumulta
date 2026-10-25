#!/bin/bash
# Ejecuta un comando asegurando que solo hay UNA instancia a la vez
# Uso: ./scripts/run-once.sh <lock-name> <comando...>

LOCK_NAME="$1"
shift
LOCK_FILE="/tmp/rtm-$LOCK_NAME.lock"

if [ -f "$LOCK_FILE" ]; then
    PID=$(cat "$LOCK_FILE")
    if kill -0 "$PID" 2>/dev/null; then
        echo "YA HAY UN PROCESO CORRIENDO (PID $PID). Abortando."
        exit 1
    fi
fi

echo $$ > "$LOCK_FILE"
trap "rm -f $LOCK_FILE" EXIT

exec "$@"
