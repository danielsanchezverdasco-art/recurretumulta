#!/bin/bash
# Uso: fetch-candidates.sh <slug> "<query1>" "<query2>"
set -u
SLUG="$1"; Q1="$2"; Q2="$3"
RAW=~/workspace/recurretumulta-v2/scripts/fotos-m6/raw
mkdir -p "$RAW"
N=0
declare -A SEEN
for Q in "$Q1" "$Q2"; do
  JSON=$(/opt/hatch/bin/image-search "$Q" --max-results 8 2>/dev/null)
  echo "$JSON" > "$RAW/$SLUG-query.json.tmp"
  URLS=$(echo "$JSON" | python3 -c "import json,sys; d=json.load(sys.stdin); print('\n'.join(r.get('media_url','') for r in d.get('results',[])))")
  while IFS= read -r U; do
    [ -z "$U" ] && continue
    [ -n "${SEEN[$U]:-}" ] && continue
    SEEN[$U]=1
    N=$((N+1))
    DEST="$RAW/$SLUG-cand-$N.jpg"
    echo "$U" > "$DEST.url"
    if curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" --max-time 40 -o "$DEST" "$U"; then
      SZ=$(stat -c%s "$DEST" 2>/dev/null || echo 0)
      if [ "$SZ" -lt 5000 ]; then rm -f "$DEST"; echo "SKIP small: $U"; fi
    else
      rm -f "$DEST"; echo "FAIL: $U"
    fi
  done <<< "$URLS"
done
echo "DONE $SLUG: $N candidates attempted"
ls -la "$RAW/$SLUG"-cand-*.jpg 2>/dev/null | awk '{print $5, $9}'
