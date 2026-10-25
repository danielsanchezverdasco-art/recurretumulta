#!/usr/bin/env python3
"""LOTE10: pipeline de fotos. Lee queries de stdin: <id>\t<query>.
Por cada una corre image-search, elige 3 media_url HTTPS (no SVG), descarga y convierte.
"""
import sys, os, io, json, subprocess, urllib.request
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTDIR = os.path.join(ROOT, "public", "media", "motos")
os.makedirs(OUTDIR, exist_ok=True)

def search(query, n=8):
    out = subprocess.run(["/opt/hatch/bin/image-search", query, "--max-results", str(n)],
                         capture_output=True, text=True, timeout=120)
    return json.loads(out.stdout)["results"]

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
            raise ValueError(f"no imagen ({ct})")
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
    with open(dest, "wb") as f:
        f.write(buf.getvalue())
    return w, h, len(buf.getvalue())

def main():
    log = []
    for line in sys.stdin:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        mid, query = line.split("\t", 1)
        dest0 = os.path.join(OUTDIR, f"{mid}-1.webp")
        if os.path.exists(dest0):
            log.append(f"SKIP {mid} (ya descargado)")
            continue
        try:
            res = search(query)
        except Exception as e:
            log.append(f"FAIL {mid}: image-search {e}")
            continue
        picked = []
        for r in res:
            u = r.get("media_url") or ""
            if u.startswith("https://") and not u.lower().endswith(".svg") and u not in picked:
                picked.append(u)
            if len(picked) == 3:
                break
        if len(picked) < 3:
            log.append(f"WARN {mid}: solo {len(picked)} URLs ({query})")
        for i, u in enumerate(picked, 1):
            dest = os.path.join(OUTDIR, f"{mid}-{i}.webp")
            try:
                data = fetch(u)
                w, h, sz = convert(data, dest)
                log.append(f"OK {mid}-{i} {w}x{h} {sz//1024}KB | {u[:100]}")
            except Exception as e:
                log.append(f"FAIL {mid}-{i} {u[:80]}: {e}")
    print("\n".join(log))

main()
