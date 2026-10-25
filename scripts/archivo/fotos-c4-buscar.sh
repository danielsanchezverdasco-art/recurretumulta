#!/bin/bash
# Busca fotos para el lote C4: 2 queries por modelo, guarda JSON en fotos-c4/raw/
set -u
OUT=~/workspace/recurretumulta-v2/scripts/fotos-c4/raw
mkdir -p "$OUT"
i=0
while IFS='|' read -r slug qext qint; do
  [ -z "$slug" ] && continue
  i=$((i+1))
  echo "[$i/25] $slug"
  /opt/hatch/bin/image-search "$qext" --max-results 8 > "$OUT/${slug}-ext.json" 2>/dev/null
  sleep 1
  /opt/hatch/bin/image-search "$qint" --max-results 8 > "$OUT/${slug}-int.json" 2>/dev/null
  sleep 1
done < ~/workspace/recurretumulta-v2/scripts/fotos-c4-queries.txt
echo "HECHO: $i modelos"
