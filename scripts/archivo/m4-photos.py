#!/usr/bin/env python3
"""Descarga 3 fotos por modelo (moto EXACTA) para el lote M4.
Uso: python3 m4-photos.py "<id>|<query>|<dominios-oficiales-coma>" ...
"""
import json, os, re, subprocess, sys, urllib.parse

MEDIA = os.path.expanduser("~/workspace/recurretumulta-v2/public/media")
IMGSEARCH = "/opt/hatch/bin/image-search"
MANIFEST = os.path.expanduser("~/workspace/recurretumulta-v2/scripts/m4-photos-manifest.tsv")

def run_search(query, max_results=8):
    try:
        out = subprocess.run([IMGSEARCH, query, "--max-results", str(max_results)],
                             capture_output=True, text=True, timeout=90)
        return json.loads(out.stdout)
    except Exception as e:
        print(f"  [search-err] {query}: {e}", flush=True)
        return {"results": []}

def score(res, official_domains):
    url = res.get("media_url") or ""
    page = (res.get("page_url") or "").lower()
    if not url.startswith("https://"):
        return -100
    s = 0
    if "?" not in url and "#" not in url:
        s += 2
    for d in official_domains:
        if d in page:
            s += 10
            break
    for bad in ("zabikers", "olx", "milanuncios", "wallapop", "autoscout", "coches.net",
                "motos.net", "facebook", "instagram", "pinterest", "shutterstock",
                "alamy", "gettyimages", "dreamstime", "123rf", "watermark"):
        if bad in page or bad in url.lower():
            s -= 20
    for ext in (".jpg", ".jpeg", ".png", ".webp"):
        if url.lower().split("?")[0].endswith(ext):
            s += 1
            break
    return s

def download(url, dest):
    h = subprocess.run(["curl", "-fsSLI", "-A", "Mozilla/5.0",
                        "-H", "Accept: image/*,*/*;q=0.5",
                        "-H", "Referer: https://www.google.com/",
                        "--connect-timeout", "10", "--max-time", "25", url],
                       capture_output=True, text=True)
    if h.returncode != 0:
        return False
    ct = ""
    for line in h.stdout.splitlines():
        if line.lower().startswith("content-type:"):
            ct = line.split(":", 1)[1].strip().lower()
    if "image" not in ct:
        return False
    g = subprocess.run(["curl", "-fsSL", "-A", "Mozilla/5.0",
                        "-H", "Accept: image/*,*/*;q=0.5",
                        "-H", "Referer: https://www.google.com/",
                        "--connect-timeout", "10", "--max-time", "60",
                        "-o", dest, url], capture_output=True)
    return g.returncode == 0 and os.path.getsize(dest) > 20000

def to_webp(src, dest):
    for q in (82, 70, 58, 45):
        r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", src,
                            "-vf", "scale='min(1200,iw)':-2",
                            "-c:v", "libwebp", "-q:v", str(q), dest],
                           capture_output=True)
        if r.returncode == 0 and os.path.exists(dest) and os.path.getsize(dest) < 300 * 1024:
            return True
    return False

def process(spec):
    mid, query, domains = spec.split("|", 2)
    official = [d.strip().lower() for d in domains.split(",") if d.strip()]
    print(f"== {mid} :: {query}", flush=True)
    cands = []
    for q in (f"{query} official photo", f"{query}"):
        data = run_search(q)
        for res in data.get("results", []):
            cands.append((score(res, official), res))
    cands.sort(key=lambda x: -x[0])
    seen = set()
    got = 0
    suffixes = ["", "-2", "-3"]
    for sc, res in cands:
        if got >= 3:
            break
        url = res.get("media_url") or ""
        if url in seen or sc < -50:
            continue
        seen.add(url)
        tmp = f"/tmp/m4-{mid}-{got}.img"
        print(f"  [{sc}] {url[:110]}", flush=True)
        try:
            if not download(url, tmp):
                print("  [dl-fail]", flush=True)
                continue
            dest = os.path.join(MEDIA, f"{mid}-oficial{suffixes[got]}.webp")
            if not to_webp(tmp, dest):
                print("  [conv-fail]", flush=True)
                continue
            kb = os.path.getsize(dest) // 1024
            with open(MANIFEST, "a") as f:
                f.write(f"{mid}\t{got+1}\t{kb}KB\t{url}\t{res.get('page_url','')}\t{(res.get('title') or '')[:90]}\n")
            print(f"  OK -> {os.path.basename(dest)} ({kb} KB)", flush=True)
            got += 1
        finally:
            if os.path.exists(tmp):
                os.remove(tmp)
    print(f"  => {got}/3 fotos para {mid}", flush=True)
    return got

if __name__ == "__main__":
    os.makedirs(MEDIA, exist_ok=True)
    total = 0
    for spec in sys.argv[1:]:
        try:
            total += process(spec)
        except Exception as e:
            print(f"  [EXC] {spec}: {e}", flush=True)
    print(f"DONE total={total}", flush=True)
