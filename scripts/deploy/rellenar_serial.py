#!/usr/bin/env python3
"""Relleno serializado del vivo (variante de bajar_vivo.py con pocos hilos).
Motivo (21/10/2026): tras las descargas masivas del día, la ruta Netlify corta
las respuestas con 12 hilos en paralelo; con 4 hilos las descargas completan
y verifican sha1. Misma semántica que bajar_vivo.py: descarga ficheros del
deploy en vivo (subdominio del deploy, sin Cloudflare), limpia snippets y
verifica sha1. Uso: run_netlify_script.py rellenar_serial.py <destino>
[--patron REGEX] [--deploy ID] [--rellenar]. Hilos: env RELLENAR_WORKERS."""
import os, re, sys, argparse, hashlib, urllib.request, urllib.parse, concurrent.futures as cf
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *

ap = argparse.ArgumentParser(); ap.add_argument("destino"); ap.add_argument("--patron"); ap.add_argument("--deploy"); ap.add_argument("--rellenar", action="store_true")
a = ap.parse_args()
dep = a.deploy or live_id(); fl = file_list(dep)
base = f"https://{dep}--{site_name()}.netlify.app"
rx = re.compile(a.patron) if a.patron else None
todo = [p for p in fl if p not in ("/_redirects", "/_headers") and (not rx or rx.search(p))]
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
    for i in range(6):
        try:
            b = urllib.request.urlopen(urllib.request.Request(base + urllib.parse.quote(p), headers={"User-Agent": "Mozilla/5.0 deploy-guia"}), timeout=120).read()
            b = limpiar(b, p)
            if hashlib.sha1(b).hexdigest() == fl[p]:
                open(dst, "wb").write(b); return
            distintos.append(p); return
        except Exception:
            pass
    fallos.append(p)
with cf.ThreadPoolExecutor(int(os.environ.get("RELLENAR_WORKERS", "4"))) as ex:
    for n, _ in enumerate(ex.map(dl, todo), 1):
        if n % 200 == 0: print("bajados", n, "/", len(todo), flush=True)
print("deploy", dep, "pedidos", len(todo), "fallos", len(fallos), fallos[:10])
if distintos: print("AVISO no verificables:", len(distintos), distintos[:10])
sys.exit(1 if fallos else 0)
