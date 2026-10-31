#!/usr/bin/env python3
"""31/10/2026 — REGLA DE DANIEL: nunca se añade noindex ni se quita una página del índice. Este paso se ejecuta DESPUÉS de todos
los postprocesos y ANTES de sitemap-final.py: quita todo noindex de dist/**/index.html salvo las rutas de
scripts/noindex-permitidos.txt (páginas de utilidad/legales que ya eran noindex en vivo antes del 25/10), y quita data-fijo.
Uso: politica-noindex.py dist [--comprobar]  (--comprobar no escribe: sale 1 si hay noindex fuera de la lista)"""
import os, re, sys
D = sys.argv[1] if len(sys.argv) > 1 else "dist"; CHECK = "--comprobar" in sys.argv
AQUI = os.path.dirname(os.path.abspath(__file__))
OK = {l.split("#")[0].strip() for l in open(os.path.join(AQUI, "noindex-permitidos.txt")) if l.split("#")[0].strip()}
ROB = re.compile(r'<meta\b[^>]*\bname=["\']robots["\'][^>]*>', re.I)
IDX = '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">'
quitados, fuera, permit = [], [], []
for raiz, dirs, fs in os.walk(D):
    dirs[:] = [d for d in dirs if d != "assets"]
    for f in fs:
        if not f.endswith(".html"): continue
        p = os.path.join(raiz, f); s = open(p, encoding="utf-8", errors="ignore").read()
        tags = ROB.findall(s)
        if not any("noindex" in t.lower() for t in tags): continue
        rel = "/" + os.path.relpath(raiz, D).replace(os.sep, "/") + "/"
        if f != "index.html": rel = "/" + os.path.relpath(p, D).replace(os.sep, "/")
        if rel in OK or f == "404.html": permit.append(rel); continue
        fuera.append(rel)
        if CHECK: continue
        s2 = ROB.sub("", s); s2 = s2.replace("</head>", IDX + "</head>", 1)
        open(p, "w", encoding="utf-8").write(s2); quitados.append(rel)
if CHECK:
    print("noindex fuera de la lista permitida:", len(fuera), fuera[:8]); sys.exit(1 if fuera else 0)
print("politica-noindex: noindex quitados %d | permitidos (utilidad) %d: %s" % (len(quitados), len(permit), sorted(permit)))
