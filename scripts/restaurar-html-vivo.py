#!/usr/bin/env python3
"""Tras la cadena: lista rutas prerenderizadas cuyo HTML ya no está y que
no tienen regla en public/_redirects. No crea 301 nuevos. Imprime una ruta
por línea en /tmp/rutas-a-reprerender.txt (sin barra final, formato de
routes.json) y un resumen por stdout.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
MAN = os.path.join(ROOT, "scripts", ".safe-publish", "prerender-manifest.jsonl")
RED = os.path.join(ROOT, "public", "_redirects")
OUT = "/tmp/rutas-a-reprerender.txt"

fuentes = set()
for ln in open(RED, encoding="utf8"):
    p = ln.split()
    if len(p) >= 3 and p[2].startswith("30"):
        fuentes.add(p[0] if p[0].endswith("/") else p[0] + "/")

faltan = []
vistos = set()
for ln in open(MAN, encoding="utf8"):
    ln = ln.strip()
    if not ln:
        continue
    m = re.search(r'"route":"([^"]*)"', ln)
    if not m:
        continue
    route = m.group(1)
    if route in vistos:
        continue
    vistos.add(route)
    rel = "index.html" if route == "/" else route.strip("/") + "/index.html"
    if os.path.isfile(os.path.join(DIST, rel)):
        continue
    clave = "/" if route == "/" else (route if route.endswith("/") else route + "/")
    if clave in fuentes or route in fuentes:
        continue
    faltan.append(route)

with open(OUT, "w", encoding="utf8") as f:
    f.write("\n".join(faltan) + ("\n" if faltan else ""))
print(f"html_ausente_sin_301 {len(faltan)} rutas_manifest {len(vistos)} -> {OUT}")
for r in faltan[:30]:
    print(" ", r)
