#!/usr/bin/env python3
"""Reemplaza hashes viejos de assets por los nuevos en todo el HTML de dist/."""
import os, re, glob

DIST = os.environ.get("RTM_DIST", os.path.expanduser("~/workspace/recurretumulta-v2/dist"))
ASSETS = os.path.join(DIST, "assets")

nuevos = {}
for f in glob.glob(os.path.join(ASSETS, "*.*")):
    base = os.path.basename(f)
    m = re.match(r"^(.+)-[A-Za-z0-9_-]+\.(js|css)$", base)
    if m:
        nuevos[f"{m.group(1)}.{m.group(2)}"] = f"/assets/{base}"

patron = re.compile(r"/assets/[A-Za-z0-9_@./-]+\.(?:js|css)")
total_refs = set()
mapeos = 0
sin_mapa = 0
actualizados = 0

for root, _, files in os.walk(DIST):
    for fn in files:
        if fn != "index.html":
            continue
        p = os.path.join(root, fn)
        with open(p, encoding="utf-8", errors="ignore") as f:
            html = f.read()
        refs = set(patron.findall(html))
        total_refs.update(refs)
        nuevo_html = html
        for r in refs:
            m = re.match(r"^/assets/(.+)-[A-Za-z0-9_-]+\.(js|css)$", r)
            if not m:
                continue
            clave = f"{m.group(1)}.{m.group(2)}"
            if clave in nuevos and nuevos[clave] != r:
                nuevo_html = nuevo_html.replace(r, nuevos[clave])
                mapeos += 1
            elif clave not in nuevos:
                sin_mapa += 1
        if nuevo_html != html:
            with open(p, "w", encoding="utf-8") as f:
                f.write(nuevo_html)
            actualizados += 1

print(f"Assets nuevos: {len(nuevos)}")
print(f"HTML: {sum(1 for _ in glob.glob(os.path.join(DIST, '**/index.html'), recursive=True))}")
print(f"Refs: {len(total_refs)}, mapeos: {mapeos}, sin mapa: {sin_mapa}, actualizados: {actualizados}")
