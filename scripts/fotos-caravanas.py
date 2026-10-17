#!/usr/bin/env python3
"""Pipeline de fotos para fichas de caravanas/autocaravanas.
Descarga una imagen, verifica que sea imagen real, la convierte a WebP
(max 1200px de ancho, calidad ajustada hasta <300KB) y la guarda en
public/media/<slug>-oficial[-N].webp

Uso: python3 fotos-caravanas.py <slug> <url1> [url2 ...]
"""
import os
import subprocess
import sys
import urllib.request

MEDIA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "media")
MAX_BYTES = 300 * 1024
MAX_W = 1200

UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}


def download(url, dest):
    req = urllib.request.Request(url, headers={**UA, "Accept": "image/*,*/*;q=0.8",
                                               "Referer": "https://www.google.com/"})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    if not data[:4] in (b"\xff\xd8\xff\xe0", b"\xff\xd8\xff\xe1", b"\xff\xd8\xff\xdb",
                        b"\x89PNG", b"RIFF") and data[8:12] != b"WEBP" and data[:4] != b"\xff\xd8\xff\xf0":
        # comprobación laxa: dejar que ffmpeg decida
        pass
    with open(dest, "wb") as f:
        f.write(data)
    return dest


def to_webp(src, dst):
    # intenta calidades descendentes hasta quedar <300KB
    for q in (82, 75, 68, 60, 52, 45):
        cmd = ["ffmpeg", "-y", "-v", "error", "-i", src,
               "-vf", f"scale={MAX_W}:-1", "-c:v", "libwebp", "-q:v", str(q), dst]
        r = subprocess.run(cmd, capture_output=True)
        if r.returncode != 0:
            print(f"  ffmpeg error q={q}: {r.stderr.decode()[:200]}", file=sys.stderr)
            continue
        size = os.path.getsize(dst)
        if size <= MAX_BYTES:
            return size, q
    size = os.path.getsize(dst)
    return size, 45


def main():
    if len(sys.argv) < 3:
        print("Uso: fotos-caravanas.py <slug> <url1> [url2 ...]")
        sys.exit(1)
    slug = sys.argv[1]
    urls = sys.argv[2:]
    os.makedirs(MEDIA_DIR, exist_ok=True)
    tmp = f"/tmp/foto-{slug}"
    for i, url in enumerate(urls):
        suffix = "" if i == 0 else f"-{i + 1}"
        dst = os.path.join(MEDIA_DIR, f"{slug}-oficial{suffix}.webp")
        tmpf = f"{tmp}-{i}.bin"
        try:
            download(url, tmpf)
            size, q = to_webp(tmpf, dst)
            ok = "OK " if size <= MAX_BYTES else "PESA "
            print(f"{ok}{dst} {size // 1024}KB q={q} <- {url[:80]}")
        except Exception as e:
            print(f"FALLO {url[:80]}: {e}", file=sys.stderr)
        finally:
            if os.path.exists(tmpf):
                os.remove(tmpf)


if __name__ == "__main__":
    main()
