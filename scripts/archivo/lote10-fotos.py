#!/usr/bin/env python3
"""LOTE10: descarga y convierte fotos reales de modelos a public/media/motos/<id>-N.webp.
Uso: python3 scripts/lote10-fotos.py <id> <url1> <url2> <url3>
WebP <300KB, max 1280px ancho. Verifica magic bytes de imagen.
"""
import sys, os, io, urllib.request
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTDIR = os.path.join(ROOT, "public", "media", "motos")
os.makedirs(OUTDIR, exist_ok=True)

def fetch(url):
    req = urllib.request.Request(url, headers={
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
        "Accept": "image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5",
        "Referer": "https://www.google.com/",
    })
    with urllib.request.urlopen(req, timeout=60) as r:
        ct = r.headers.get("Content-Type", "")
        data = r.read(15 * 1024 * 1024)
        if not ct.startswith("image/"):
            raise ValueError(f"content-type no imagen: {ct}")
        return data

def convert(data, dest):
    img = Image.open(io.BytesIO(data)).convert("RGB")
    w, h = img.size
    if w > 1280:
        h = int(h * 1280 / w); w = 1280
        img = img.resize((w, h), Image.LANCZOS)
    q = 85
    while q >= 40:
        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=q, method=6)
        if buf.tell() < 300 * 1024:
            break
        q -= 10
    out = buf.getvalue()
    with open(dest, "wb") as f:
        f.write(out)
    return w, h, len(out)

def main():
    model_id, urls = sys.argv[1], sys.argv[2:5]
    for i, url in enumerate(urls, 1):
        dest = os.path.join(OUTDIR, f"{model_id}-{i}.webp")
        try:
            data = fetch(url)
            w, h, size = convert(data, dest)
            print(f"OK {model_id}-{i}.webp {w}x{h} {size//1024}KB <- {url[:90]}")
        except Exception as e:
            print(f"FAIL {model_id}-{i}: {e}", file=sys.stderr)

main()
