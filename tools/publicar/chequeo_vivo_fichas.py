#!/usr/bin/env python3
"""Chequeo POST-deploy (solo INFORMA, exit 0 siempre): muestra de N fichas en vivo, UA móvil y escritorio.
Por ficha: HTTP 200; sin hueco 'Foto pendiente'/data-foto-pendiente salvo que de verdad no tenga foto; sin data-fb;
og:image presente y con 200 image/*; imágenes -480w/-828w del srcset con 200 image/*; sin noindex fuera de lista.
Uso: chequeo_vivo_fichas.py [--n 200] [--base https://recurretumulta.online] [--semilla 1]"""
import argparse, random, re, sys, urllib.request, concurrent.futures as cf
ap = argparse.ArgumentParser(); ap.add_argument("--n", type=int, default=200); ap.add_argument("--base", default="https://recurretumulta.online"); ap.add_argument("--semilla", type=int, default=1)
a = ap.parse_args()
UA = {"movil": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1",
      "escritorio": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36"}
def get(u, ua, head=False):
    r = urllib.request.Request(u, headers={"User-Agent": ua}, method="HEAD" if head else "GET")
    try:
        with urllib.request.urlopen(r, timeout=25) as x: return x.status, x.headers.get("content-type", ""), (b"" if head else x.read().decode("utf-8", "replace"))
    except urllib.error.HTTPError as e: return e.code, "", ""
    except Exception: return 0, "", ""
sm = get(a.base + "/sitemap.xml", UA["escritorio"])[2]
urls = re.findall(r"<loc>([^<]+)</loc>", sm)
subs = []
for u in urls:
    if u.endswith(".xml") or u.endswith(".xml/"): subs += re.findall(r"<loc>([^<]+)</loc>", get(u, UA["escritorio"])[2])
urls = [u for u in (subs or urls) if re.search(r"/(coches|motos|patinetes)/[^/]+/$", u) and "/marca/" not in u] or (subs or urls)
random.seed(a.semilla); muestra = random.sample(urls, min(a.n, len(urls)))
def chequea(u):
    pr = []
    for nom, ua in UA.items():
        st, _, h = get(u, ua)
        if st != 200: pr.append((u, nom, "HTTP %s" % st)); continue
        if "data-fb" in h: pr.append((u, nom, "data-fb"))
        if re.search(r'<meta[^>]+name="robots"[^>]+noindex', h, re.I): pr.append((u, nom, "noindex"))
        hueco = "data-foto-pendiente" in h or "Foto pendiente" in h
        og = re.search(r'property="og:image"[^>]+content="([^"]+)"', h) or re.search(r'content="([^"]+)"[^>]+property="og:image"', h)
        if hueco: pr.append((u, nom, "hueco Foto pendiente" + (" (con og:image real: bug)" if og else " (sin og:image)")))
        if nom == "movil":
            imgs = set(re.findall(r'(?:src|srcset)="\s*([^"\s,]*/media/[^"\s,]+)', h)) | set(re.findall(r',\s*([^"\s,]*/media/[^"\s,]+)\s+\d+w', h)) | ({og.group(1)} if og else set())
            for i in list(imgs)[:6]:
                i = i if i.startswith("http") else a.base + i
                s, ct, _ = get(i, ua, head=True)
                if s != 200 or not ct.startswith("image/"): pr.append((u, nom, "imagen %s -> %s %s" % (i, s, ct)))
    return pr
with cf.ThreadPoolExecutor(8) as ex: res = [x for r in ex.map(chequea, muestra) for x in r]
print("chequeo_vivo_fichas: %d fichas muestreadas, %d incidencias" % (len(muestra), len(res)))
for r in res: print("  ", *r)
sys.exit(0)
