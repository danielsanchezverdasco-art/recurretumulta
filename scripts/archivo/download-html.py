#!/usr/bin/env python3
import os, urllib.request, xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor

DIST = os.path.expanduser("~/workspace/recurretumulta-v2/dist")
os.makedirs(DIST, exist_ok=True)

with open(os.path.expanduser("~/workspace/recurretumulta-v2/scripts/sitemap-urls.txt")) as f:
    urls = [l.strip() for l in f if l.strip()]

def fetch(url):
    path = url.replace("https://recurretumulta.online", "").strip("/") or "index"
    fp = os.path.join(DIST, path, "index.html") if path != "index" else os.path.join(DIST, "index.html")
    if path != "index":
        os.makedirs(os.path.dirname(fp), exist_ok=True)
    if os.path.exists(fp) and os.path.getsize(fp) > 1000:
        return "skip"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        if len(data) < 1000:
            return "bad"
        with open(fp, "wb") as f:
            f.write(data)
        return "ok"
    except:
        return "bad"

ok = skip = bad = 0
with ThreadPoolExecutor(max_workers=30) as ex:
    for i, res in enumerate(ex.map(fetch, urls)):
        if res == "ok": ok += 1
        elif res == "skip": skip += 1
        else: bad += 1
        if (i+1) % 500 == 0:
            print(f"  {i+1}/{len(urls)} ok={ok} skip={skip} bad={bad}", flush=True)
print(f"FIN: ok={ok} skip={skip} bad={bad}")
