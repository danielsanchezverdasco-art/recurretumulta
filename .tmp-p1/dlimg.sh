#!/bin/bash
url="$1"; dest="$2"
tmp="/tmp/dlimg_$$_$(basename "$dest" .webp)"
if curl -fsSL --connect-timeout 12 --max-time 90 -A 'Mozilla/5.0' -H 'Accept: image/*' -H 'Referer: https://www.google.com/' -o "$tmp.src" "$url" 2>/dev/null; then
  magic=$(file -b "$tmp.src" | cut -d, -f1)
  case "$magic" in
    *JPEG*|*PNG*|*Web/P*|*GIF*|*RIFF*|*WebP*|*AVIF*) ;;
    *) echo "NOIMAGE $url -> $magic"; rm -f "$tmp.src"; exit 1;;
  esac
  ffmpeg -hide_banner -loglevel error -y -i "$tmp.src" -vf "scale='min(1600,iw)':-2" -c:v libwebp -quality 78 -metadata copyright="" "$dest"
  sz=$(stat -c%s "$dest" 2>/dev/null)
  if [ -n "$sz" ] && [ "$sz" -lt 307200 ]; then echo "OK $dest ($sz bytes)"; else echo "BIG $dest ($sz bytes)"; fi
  rm -f "$tmp.src"
else
  echo "FAIL $url"; exit 1
fi
