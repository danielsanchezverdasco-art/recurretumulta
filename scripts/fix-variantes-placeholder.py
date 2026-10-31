#!/usr/bin/env python3
"""31/10/2026 (regla de Daniel: sin foto no hay recuadro «Foto real próximamente»; con foto real, siempre la foto).
Algunas fotos reales tienen en public/media variantes (-480w -828w -1200w -card) que son el recuadro placeholder
(restos de cuando la foto era placeholder). Aquí se regeneran desde la foto base real. Si la base es el propio
placeholder no se toca (fotos-malas la esconde de las fichas).
Uso: fix-variantes-placeholder.py dist   (corre DESPUÉS de fotos_hotfix.py)"""
import hashlib, os, re, sys
from PIL import Image
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
HERE = os.path.dirname(os.path.abspath(__file__))
MD5 = {l.strip() for l in open(os.path.join(HERE, "placeholder-md5.txt")) if l.strip() and not l.startswith("#")}
VAR = {"-480w": (480, 78), "-828w": (828, 78), "-1200w": (1200, 80), "-card": (640, 72)}
RX = re.compile(r"(-480w|-828w|-1200w|-card)\.webp$")
def md5(p):
    with open(p, "rb") as f: return hashlib.md5(f.read()).hexdigest()
def es_tile(p):
    """md5 conocido, o imagen pequeña casi toda del gris (229,231,235) del recuadro (otras medidas del mismo recuadro)."""
    if os.path.getsize(p) > 30000: return False
    if md5(p) in MD5: return True
    try:
        im = Image.open(p).convert("RGB"); im.thumbnail((64, 64)); px = list(im.getdata())
    except Exception: return False
    return sum(1 for q in px if abs(q[0] - 229) <= 3 and abs(q[1] - 231) <= 3 and abs(q[2] - 235) <= 3) / len(px) > 0.9
n = 0; saltadas = 0
for root, _, fs in os.walk(os.path.join(D, "media")):
    for f in fs:
        m = RX.search(f)
        if not m: continue
        p = os.path.join(root, f)
        if not es_tile(p): continue
        base = os.path.join(root, f[:m.start()] + ".webp")
        if not os.path.isfile(base) or es_tile(base): saltadas += 1; continue
        w, q = VAR[m.group(1)]
        try:
            im = Image.open(base); im.load(); im = im.convert("RGB")
            x = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            x.save(p, "WEBP", quality=q, method=4); n += 1
        except Exception as e:
            print("ERR", base, e)
print("variantes placeholder regeneradas desde la foto real:", n, "| con base placeholder o ausente (sin tocar):", saltadas)
