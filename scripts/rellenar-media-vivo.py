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
sys.exit(1 if c.get("error") else 0)
