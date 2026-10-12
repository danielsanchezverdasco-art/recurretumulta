#!/bin/bash
# Descarga una imagen y la convierte a WebP (max 1200px, <300KB).
# Uso: dl.sh <url> <destino.webp>
set -u
URL="$1"; DEST="$2"
TMP="$(mktemp /tmp/dlimg.XXXXXX)"
UA='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
if ! curl -fsSL --connect-timeout 15 --max-time 90 -A "$UA" \
  -H 'Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5' \
  -H 'Referer: https://www.google.com/' -o "$TMP" "$URL"; then
  echo "FAIL-download $DEST"; rm -f "$TMP"; exit 1
fi
MIME="$(file -b --mime-type "$TMP")"
case "$MIME" in image/*) ;; *) echo "FAIL-mime($MIME) $DEST"; rm -f "$TMP"; exit 1;; esac
mkdir -p "$(dirname "$DEST")"
for Q in 75 60 45 30; do
  if python3 - "$TMP" "$DEST" "$Q" <<'EOF'; then
import sys
from PIL import Image
src, dst, q = sys.argv[1], sys.argv[2], int(sys.argv[3])
im = Image.open(src).convert("RGB")
w, h = im.size
if max(w, h) > 1200:
    r = 1200 / max(w, h)
    im = im.resize((round(w*r), round(h*r)), Image.LANCZOS)
im.save(dst, "WEBP", quality=q, method=6)
print(im.size)
EOF
    SZ=$(stat -c%s "$DEST")
    if [ "$SZ" -lt 307200 ]; then echo "OK $DEST ${SZ}B"; rm -f "$TMP"; exit 0; fi
  fi
done
SZ=$(stat -c%s "$DEST")
echo "BIG $DEST ${SZ}B (revisar)"
rm -f "$TMP"; exit 0
