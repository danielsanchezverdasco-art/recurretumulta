#!/usr/bin/env python3
"""31/10/2026 — Red de seguridad: quita de dist las <img> sin src/srcset (ficha sin foto real: no se pinta nada, ni hueco ni
alt suelto). La web es createRoot (no hidrata), así que el HTML estático es solo para bots y primera pintura.
Uso: python3 scripts/fix-img-sin-src.py dist"""
import os, re, sys
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
IMG = re.compile(r"<img\b[^>]*>", re.I)
def sin_src(t): return not re.search(r"\s(?:src|srcset)\s*=", t, re.I)
pag = n = 0
for r, _, fs in os.walk(D):
    if "index.html" not in fs: continue
    p = os.path.join(r, "index.html")
    h = open(p, encoding="utf8", errors="ignore").read()
    k = [0]
    def f(m):
        if sin_src(m.group(0)): k[0] += 1; return ""
        return m.group(0)
    h2 = IMG.sub(f, h)
    if k[0]:
        open(p, "w", encoding="utf8").write(h2); pag += 1; n += k[0]
print(f"<img> sin src eliminadas: {n} en {pag} páginas")
