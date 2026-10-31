#!/usr/bin/env python3
"""31/10/2026: SOLO INFORME de fichas sin foto real (ya no se pone noindex ni se quita del sitemap; orden de Daniel).
Antes (AdSense 25/10): fichas sin foto real -> noindex,follow (y fuera del sitemap).
Detecta en el HTML prerenderizado el hueco de GaleriaFicha («Foto [oficial] pendiente de
verificación», marcado con data-foto-pendiente). Se recalcula en cada build: cuando la ficha
tiene foto real el hueco no se pinta y la página vuelve sola al índice y al sitemap
(sitemap-final.py regenera el sitemap y excluye las noindex).
Uso: postfix-foto-pendiente.py dist [--solo-lista]   Lista: scripts/noindex-foto-pendiente.txt"""
import os, re, sys
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
SOLO = "--solo-lista" in sys.argv
HUECO = re.compile(r'data-foto-pendiente|<p\b[^>]*>\s*Foto (?:oficial )?pendiente(?: de verificaci(?:ó|&oacute;)n)?\s*</p>')
FICHA = re.compile(r'^/(coches|motos|patinetes|autocaravanas|campers|caravanas)/[^/]+/$')
ROBOTS = re.compile(r'<meta\s+name="robots"\s+content="[^"]*"\s*/?>', re.I)
FOTO_REAL = re.compile(r'<img\b[^>]*\bsrc="/media/(?:coches|motos|patinetes|autocaravanas|campers|caravanas)/', re.I)
NOI = '<meta name="robots" content="noindex,follow">'
lista = []
for root, _, files in os.walk(D):
    if "index.html" not in files: continue
    rel = "/" + os.path.relpath(root, D).replace(os.sep, "/") + "/"
    if not FICHA.match(rel): continue
    p = os.path.join(root, "index.html"); s = open(p, encoding="utf-8").read()
    if not HUECO.search(s): continue
    # 31/10/2026: el hueco solo se pinta cuando GaleriaFicha no tiene NINGUNA foto: ficha sin foto real = noindex siempre
    # (antes se salvaba si había cualquier /media/coches/... en la página, p. ej. en una tarjeta de «relacionados»).
    lista.append(rel)
# 31/10/2026 (regla de Daniel): NUNCA noindex ni sacar URLs del sitemap. Este script solo INFORMA de las fichas sin foto.
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".deploy-work", "fichas-sin-foto-informe.txt")
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out, "w").write("".join("https://recurretumulta.online" + r + "\n" for r in sorted(lista)))
print("fichas sin foto real (solo informe, siguen indexables):", len(lista))
