#!/usr/bin/env python3
"""31/10/2026. 5 posts de blog-posts-autocaravanas-merlin3.ts (fichero BLOQUEADO en no-tocar.txt) muestran el nombre de
campo «precioDesde» como texto visible («precioDesde queda sin dato»). No se toca el fichero: se corrige el HTML de dist."""
import os, re, sys
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
M = {
 "mclouis-mc4-231-2026-precio-ficha-tecnica": "para el MC4 231 la tarifa de salida",
 "euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica": "en la Integra Line el importe base",
 "frankia-neo-i-7-gdk-2026-precio-ficha-tecnica": "en la Neo I 7 el precio inicial",
 "giottiline-siena-322-2026-precio-ficha-tecnica": "en la Siena 322 el precio de arranque",
 "mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica": "en la K-Yacht 86 la cifra de partida",
}
n = 0
for slug, frase in M.items():
    p = os.path.join(D, "blog", slug, "index.html")
    if not os.path.exists(p): continue
    s = open(p, encoding="utf-8").read()
    t = re.sub(r"(?<![\w/\"'-])precioDesde(?=\s+queda sin dato)", frase, s)
    if t != s: open(p, "w", encoding="utf-8").write(t); n += 1
print("precioDesde visible corregido en", n, "posts")
