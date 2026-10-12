#!/bin/bash
# Descarga los 4 primeros candidatos ext + 4 int de cada modelo a /tmp/fotos-c4/
set -u
RAW=~/workspace/recurretumulta-v2/scripts/fotos-c4/raw
DST=/tmp/fotos-c4
mkdir -p "$DST"
while IFS='|' read -r slug qext qint; do
  [ -z "$slug" ] && continue
  for kind in ext int; do
    node -e "
const fs=require('fs');
const j=JSON.parse(fs.readFileSync('$RAW/${slug}-$kind.json','utf8'));
j.results.slice(0,4).forEach((r,i)=>{ if(r.media_url) console.log(i+'|'+r.media_url+'|'+(r.title||'').slice(0,60)); });
" | while IFS='|' read -r i url title; do
      dest="$DST/${slug}-${kind}-${i}.img"
      [ -f "$dest" ] && continue
      curl -fsSL --connect-timeout 10 --max-time 45 -A 'Mozilla/5.0' \
        -H 'Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5' \
        -H 'Referer: https://www.google.com/' \
        -o "$dest" "$url" 2>/dev/null && echo "OK $slug-$kind-$i" || echo "FAIL $slug-$kind-$i $title"
    done
  done
done < ~/workspace/recurretumulta-v2/scripts/fotos-c4-queries.txt
echo "DESCARGA HECHA"
ls "$DST" | wc -l
