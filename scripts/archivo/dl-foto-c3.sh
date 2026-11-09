#!/bin/bash
# Descarga una foto, la convierte a WebP <300KB y la guarda en public/media/<slug>-<suf>.webp
# Uso: dl-foto-c3.sh "<url>" <slug> <sufijo: hero|oficial|interior>
set -u
URL="$1"; SLUG="$2"; SUF="$3"
DEST="$HOME/workspace/recurretumulta-v2/public/media/${SLUG}-${SUF}.webp"
TMP="/tmp/foto-c3-${SLUG}-${SUF}"
mkdir -p /tmp
if ! curl -fsSL --connect-timeout 12 --max-time 60 -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36' -H 'Accept: image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8' -H 'Referer: https://www.google.com/' -o "${TMP}.orig" "$URL"; then
  echo "FAIL-download $SLUG-$SUF"; exit 1
fi
MTYPE=$(file -b --mime-type "${TMP}.orig")
case "$MTYPE" in image/*) ;; *) echo "FAIL-notimage $SLUG-$SUF ($MTYPE)"; exit 1;; esac
# Convertir: max 1600px ancho, calidad ajustada hasta <300KB
Q=82
for Q in 82 75 68 60 52; do
  ffmpeg -y -v error -i "${TMP}.orig" -vf "scale='min(1600,iw)':-2" -c:v libwebp -q:v $Q -preset photo "${TMP}.webp" 2>/dev/null
  SZ=$(stat -c%s "${TMP}.webp" 2>/dev/null || echo 999999999)
  if [ "$SZ" -lt 307200 ]; then break; fi
done
if [ "$SZ" -ge 307200 ]; then echo "FAIL-toobig $SLUG-$SUF ($SZ)"; exit 1; fi
mv "${TMP}.webp" "$DEST"
rm -f "${TMP}.orig"
echo "OK $SLUG-$SUF ${SZ}B q=$Q"
