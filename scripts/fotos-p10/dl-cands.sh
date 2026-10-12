#!/bin/bash
# Uso: dl-cands.sh <id> "<query>" [max]
# Descarga hasta <max> candidatas a raw/<id>-cand<N>.jpg
ID="$1"
QUERY="$2"
MAX="${3:-8}"
RAW="$HOME/workspace/recurretumulta-v2/scripts/fotos-p10/raw"
mkdir -p "$RAW"
i=0
/opt/hatch/bin/image-search "$QUERY" --max-results "$MAX" 2>/dev/null \
  | python3 -c "
import json,sys
d=json.load(sys.stdin)
for r in d.get('results',[]):
    u=r.get('media_url')
    if u: print(u)
" | while read -r url; do
  i=$((i+1))
  out="$RAW/${ID}-cand${i}.jpg"
  if curl -sL --max-time 40 -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" "$url" -o "$out" && [ -s "$out" ]; then
    echo "OK $out ($(du -h "$out" | cut -f1))"
  else
    rm -f "$out"; echo "FAIL $url"
  fi
  [ "$i" -ge "$MAX" ] && break
done
