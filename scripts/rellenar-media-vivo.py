#!/usr/bin/env python3
"""31/10/2026. El prerender corre sobre dist/, que solo lleva public/media del repo. Hay ~1.200 fotos
que el código referencia y que SOLO existen en producción (se subieron en despliegues anteriores sin pasar por
el repo). Sin ellas el prerender ve un 404, hornea «Foto pendiente de verificación» / og-fallback en el HTML y
la ficha pasa a noindex por error. Este paso las baja de producción a dist/media (idénticas => 0 bytes subidos).
Uso: rellenar-media-vivo.py dist [lista]   (lista por defecto: scripts/media-vivo-referenciada.txt)"""
import os, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
L = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "media-vivo-referenciada.txt")
B = "https://recurretumulta.online"
rutas = [l.strip() for l in open(L, encoding="utf-8") if l.strip().startswith("/media/")]
def bajar(r):
    dst = os.path.join(D, r.lstrip("/"))
    if os.path.exists(dst) and os.path.getsize(dst) > 0: return "ya"
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    for _ in range(3):
        try:
            req = urllib.request.Request(B + r, headers={"User-Agent": "Mozilla/5.0 rtm-kit"})
            with urllib.request.urlopen(req, timeout=40) as f:
                ct = f.headers.get("content-type", ""); data = f.read()
            if not ct.startswith("image/") or not data: return "no-imagen"
            open(dst + ".tmp", "wb").write(data); os.replace(dst + ".tmp", dst); return "ok"
        except Exception:
            pass
    return "error"
with ThreadPoolExecutor(12) as ex: res = list(ex.map(bajar, rutas))
from collections import Counter
c = Counter(res); print("media de producción -> dist:", dict(c))

# --- 31/10/2026 (2.ª parte): variantes -480w/-828w -------------------------------------------------------------
# GaleriaFicha pone srcset=«-480w, -828w, original» en la foto principal. Si una variante no existe, el servidor de
# preview devuelve index.html con 200 (SPA fallback), el <img> dispara onError, GaleriaFicha marca la foto como rota
# y el prerender hornea «Foto pendiente» (-> noindex) aunque la foto exista. En producción las variantes existen
# (subidas en despliegues antiguos) pero no están en el repo ni en dist: sin ellas el despliegue las borraría y la
# galería se vaciaría en el navegador. Orden: 1) bajar de producción (idénticas) 2) si no existe, generar con PIL.
import glob, json, re
WORK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".deploy-work")
VAR = re.compile(r"-(?:480w|828w|card)\.webp$")
bases = set(r for r in rutas if r.endswith(".webp") and not VAR.search(r))
for sub in ("", "motos/", "patinetes/"):
    for f in os.listdir(os.path.join(D, "media", sub)) if os.path.isdir(os.path.join(D, "media", sub)) else []:
        if f.endswith(".webp") and not VAR.search(f) and (sub or f.endswith(("-oficial.webp", "-hero.webp"))): bases.add("/media/" + sub + f)
vivas = set()
lst = sorted(glob.glob(os.path.join(WORK, "ficheros-*.json")), key=os.path.getmtime)
if lst:
    try: vivas = set(k for k in json.load(open(lst[-1])) if re.search(r"-(?:480w|828w)\.webp$", k))
    except Exception: pass
want = []
for b in sorted(bases):
    for w in ("480w", "828w"):
        v = b[:-5] + "-" + w + ".webp"
        if not os.path.exists(os.path.join(D, v.lstrip("/"))) and os.path.exists(os.path.join(D, b.lstrip("/"))): want.append(v)
# variantes que producción sirve y cuya base está en dist (aunque la ficha no se prerenderice), para no borrarlas
for v in sorted(vivas):
    b = re.sub(r"-(?:480w|828w)\.webp$", ".webp", v)
    if v not in want and not os.path.exists(os.path.join(D, v.lstrip("/"))) and os.path.exists(os.path.join(D, b.lstrip("/"))): want.append(v)
res2 = list(ThreadPoolExecutor(12).map(lambda v: bajar(v) if (v in vivas or not vivas) else "local", want))
c2 = Counter(res2); print("variantes 480w/828w de producción -> dist:", dict(c2), "de", len(want))
try:
    from PIL import Image
    gen = 0
    for v, r_ in zip(want, res2):
        dst = os.path.join(D, v.lstrip("/"))
        if r_ in ("ok", "ya") and os.path.exists(dst) and os.path.getsize(dst) > 0: continue
        base = os.path.join(D, re.sub(r"-(?:480w|828w)\.webp$", ".webp", v).lstrip("/"))
        w = int(re.search(r"-(\d+)w\.webp$", v).group(1))
        try:
            im = Image.open(base); im.load()
            x = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            x.save(dst, "WEBP", quality=78, method=4); gen += 1
        except Exception as e:
            print("ERR variante", v, e)
    print("variantes generadas con PIL (no existían en producción):", gen)
except ImportError:
    print("PIL no disponible: variantes no generadas")
sys.exit(1 if c.get("error") else 0)
