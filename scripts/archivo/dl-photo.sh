#!/bin/bash
# Descarga una foto, verifica que sea imagen, convierte a WebP <300KB.
# Uso: dl-photo.sh <url> <destino-sin-extension>
set -u
URL="$1"
DEST="$2"
TMP="/tmp/dlphoto_$$.bin"
MEDIA=~/workspace/recurretumulta-v2/public/media
mkdir -p "$MEDIA"

# Preflight HEAD
if ! curl -fsSLI --connect-timeout 10 --max-time 30 -A 'Mozilla/5.0' -H 'Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5' -H 'Referer: https://www.google.com/' "$URL" -o /dev/null; then
  echo "HEAD-FAIL $URL" >&2; exit 1
fi
# Descarga
if ! curl -fsSL --connect-timeout 10 --max-time 60 -A 'Mozilla/5.0' -H 'Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5' -H 'Referer: https://www.google.com/' -o "$TMP" "$URL"; then
  echo "DL-FAIL $URL" >&2; exit 1
fi
# Verificar magic de imagen
MTYPE=$(file -b --mime-type "$TMP")
case "$MTYPE" in
  image/jpeg|image/png|image/webp|image/gif) ;;
  *) echo "NOT-IMAGE ($MTYPE) $URL" >&2; rm -f "$TMP"; exit 1;;
esac
# Convertir a WebP: empezar q80, ancho max 1600, bajar calidad hasta <300KB
OUT="$MEDIA/$DEST.webp"
for Q in 80 70 60 50 40; do
  ffmpeg -y -v error -i "$TMP" -vf "scale='min(1600,iw)':-2" -c:v libwebp -q:v $Q "$OUT" 2>/dev/null
  SZ=$(stat -c%s "$OUT" 2>/dev/null || echo 999999999)
  if [ "$SZ" -lt 307200 ]; then break; fi
done
SZ=$(stat -c%s "$OUT")
DIM=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "$OUT")
rm -f "$TMP"
echo "OK $DEST.webp ${SZ}bytes ${DIM}"
