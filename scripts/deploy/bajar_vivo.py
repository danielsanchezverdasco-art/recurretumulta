#!/usr/bin/env python3
"""Descarga ficheros del deploy en vivo (directo de Netlify, sin Cloudflare) y verifica su sha1.
Uso:  python3 scripts/deploy/bajar_vivo.py <destino> [--patron REGEX] [--deploy ID]
  --rellenar no pisa lo que ya existe (úsalo DESPUÉS de npm run build)
  --patron  solo rutas que casen (p.ej. '\\.html$' o '^/media/cupra-')
Sin --patron baja TODO (~47.000 ficheros, varios GB). _redirects/_headers no los sirve Netlify:
se copian de public/ del repo (vivo.py comprueba que son iguales)."""
import os, re, sys, argparse, hashlib, urllib.request, urllib.parse, concurrent.futures as cf
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *

ap = argparse.ArgumentParser(); ap.add_argument("destino"); ap.add_argument("--patron"); ap.add_argument("--deploy"); ap.add_argument("--rellenar", action="store_true", help="no pisa ficheros que ya existan en destino (p.ej. los del build)")
a = ap.parse_args()
dep = a.deploy or live_id(); fl = file_list(dep)
base = f"https://{dep}--{site_name()}.netlify.app"
rx = re.compile(a.patron) if a.patron else None
todo = [p for p in fl if p not in ("/_redirects", "/_headers") and (not rx or rx.search(p))]
# Netlify inyecta en cada HTML servida los "snippets" del sitio (Site settings > Build & deploy > Snippet injection).
# Se quitan para recuperar el fichero EXACTO que está en el deploy (y se verifica por sha1).
SNIP = [x for sn in api("GET", f"/sites/{SITE}/snippets") for x in (sn.get("general"), sn.get("goal")) if x]
def limpiar(b, p):
    if not p.endswith(".html") or not SNIP: return b
    t = b.decode("utf-8", "surrogateescape")
    for x in SNIP:
        i = t.rfind(x)
        if i >= 0: t = t[:i] + t[i + len(x):]
    return t.encode("utf-8", "surrogateescape")
fallos = []; distintos = []
def dl(p):
    dst = a.destino + p
    if os.path.exists(dst) and (a.rellenar or sha1_file(dst) == fl[p]):
        return
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    for i in range(4):
        try:
            b = urllib.request.urlopen(urllib.request.Request(base + urllib.parse.quote(p), headers={"User-Agent": "Mozilla/5.0 deploy-guia"}), timeout=120).read()
            b = limpiar(b, p)
            if hashlib.sha1(b).hexdigest() == fl[p]:
                open(dst, "wb").write(b); return
            # Netlify también reescribe las páginas con formularios (Netlify Forms): no se puede
            # reconstruir el fichero exacto. NO se escribe: mkdraft tomará el de vivo tal cual.
            distintos.append(p); return
        except Exception:
            pass
    fallos.append(p)
with cf.ThreadPoolExecutor(12) as ex:
    for n, _ in enumerate(ex.map(dl, todo), 1):
        if n % 1000 == 0: print("bajados", n, "/", len(todo), flush=True)
print("deploy", dep, "pedidos", len(todo), "fallos", len(fallos), fallos[:10])
if distintos: print("AVISO no verificables (formularios Netlify; no se escriben, se quedan los de vivo):", len(distintos), distintos[:10])
sys.exit(1 if fallos else 0)
