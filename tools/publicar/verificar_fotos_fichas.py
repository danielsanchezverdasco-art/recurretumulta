#!/usr/bin/env python3
"""BLOQUEANTE antes de publicar (31/10/2026): que el bug «Foto pendiente» no vuelva nunca.
Para cada ficha (/coches|motos|patinetes|autocaravanas|campers|caravanas/<slug>/) de dist:
 1. Si hay foto REAL propia en dist/media (fichero cuyo nombre empieza por el slug sin «-precio-ficha-tecnica» y no es
    placeholder), el HTML prerenderizado DEBE pintarla: sin data-foto-pendiente / «Foto pendiente», con un <img ... fetchpriority=high>
    cuyo src es /media/... y sin data-fb, y SIN noindex por foto (ni en scripts/noindex-foto-pendiente.txt).
 2. Todo /media/... referenciado en <img src|srcset> y en og:image (incluidas variantes -480w/-828w) debe existir en dist
    (con cabecera de imagen válida) o en vivo con 200 image/*.
 3. Una ficha con hueco debe ser noindex y estar fuera del sitemap (y no tener foto real propia, ver 1).
Uso: verificar_fotos_fichas.py dist [--vivo https://recurretumulta.online] [--informe f.txt] [--sin-vivo]
Salida 0 = OK; 1 = fallos. En publicar.py SOLO INFORMA (orden de Daniel 31/10): no aborta."""
import os, re, sys, hashlib, argparse, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor
ap = argparse.ArgumentParser(); ap.add_argument("dist"); ap.add_argument("--vivo", default="https://recurretumulta.online")
ap.add_argument("--informe"); ap.add_argument("--sin-vivo", action="store_true"); a = ap.parse_args()
D = a.dist; HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.abspath(os.path.join(HERE, "..", ".."))
CATS = "coches|motos|patinetes|autocaravanas|campers|caravanas"
FICHA = re.compile(r"^(%s)/([^/]+)$" % CATS)
EXT = (".webp", ".jpg", ".jpeg", ".png", ".avif")
try: PH = {l.split()[0] for l in open(os.path.join(REPO, "scripts", "placeholder-md5.txt")) if l.strip() and not l.startswith("#")}
except OSError: PH = set()
def magic_ok(p):
    try: b = open(p, "rb").read(12)
    except OSError: return False
    return b[:4] == b"RIFF" and b[8:12] == b"WEBP" or b[:3] == b"\xff\xd8\xff" or b[:8] == b"\x89PNG\r\n\x1a\n" or b[4:8] == b"ftyp"
def es_placeholder(p):
    try:
        data = open(p, "rb").read()
        if hashlib.md5(data).hexdigest() in PH: return True
        if len(data) < 20000:
            from PIL import Image
            im = Image.open(p).convert("RGB"); w, h = im.size
            if w >= 1000:
                px = list(im.resize((64, 40)).getdata())
                if sum(1 for q in px if q == (229, 231, 235)) / len(px) > 0.55: return True
    except Exception: return False
    return False
media = {}  # nombre -> ruta
md = os.path.join(D, "media")
for root, _, fs in os.walk(md):
    for f in fs:
        if f.lower().endswith(EXT): media[os.path.relpath(os.path.join(root, f), D).replace(os.sep, "/")] = os.path.join(root, f)
bases = {}
for k in media:
    b = os.path.basename(k)
    if re.search(r"-(480w|828w|card)\.", b): continue
    bases.setdefault(b, k)
def foto_real_propia(slug):
    core = re.sub(r"-(precio-ficha-tecnica|ficha-tecnica-precio)$", "", slug)
    for b, k in bases.items():
        if b.startswith(core) and (len(b) == len(core) + len(os.path.splitext(b)[1]) or b[len(core)] in "-_.") and not es_placeholder(media[k]):
            return k
    return None
sm = ""
try: sm = open(os.path.join(D, "sitemap.xml"), encoding="utf-8").read()
except OSError: pass
IMG = re.compile(r"<img\b[^>]*>", re.I)
sinfoto = []; fallos = []; refs = {}; nf = nreal = nhueco = 0
for cat in CATS.split("|"):
    cd = os.path.join(D, cat)
    if not os.path.isdir(cd): continue
    for slug in sorted(os.listdir(cd)):
        p = os.path.join(cd, slug, "index.html")
        if not os.path.isfile(p): continue
        rel = "/%s/%s/" % (cat, slug); s = open(p, encoding="utf-8", errors="replace").read(); nf += 1
        hueco = "data-foto-pendiente" in s or re.search(r"<p\b[^>]*>\s*Foto (?:oficial )?pendiente", s) is not None
        noidx = re.search(r'<meta\s+name="robots"\s+content="[^"]*noindex', s, re.I) is not None
        ensm = ("<loc>https://recurretumulta.online" + rel + "</loc>") in sm
        real = foto_real_propia(slug)
        imgs = IMG.findall(s)
        for t in imgs + re.findall(r'<meta[^>]+og:image[^>]*>', s):
            for u in re.findall(r"""(?:src|srcset|content)=["']([^"']+)["']""", t):
                for part in u.split(","):
                    q = part.strip().split(" ")[0]
                    q = re.sub(r"^https://recurretumulta\.online", "", q)
                    if q.startswith("/media/"): refs.setdefault(urllib.parse.unquote(q.split("?")[0]), rel)
        if real:
            nreal += 1
            hero = [t for t in imgs if "fetchpriority=\"high\"" in t or "fetchpriority='high'" in t]
            if hueco: fallos.append((rel, "tiene foto real (%s) pero el HTML pinta «Foto pendiente»" % real))
            elif not hero or not re.search(r'\bsrc="/media/', hero[0]): fallos.append((rel, "tiene foto real (%s) pero el HTML no trae <img> principal con src /media/" % real))
            elif "data-fb" in hero[0]: fallos.append((rel, "la foto principal lleva data-fb (parpadeo)"))
            if noidx: fallos.append((rel, "ficha con foto real y noindex (regla: nunca noindex)"))
        elif hueco:
            nhueco += 1
            sinfoto.append(rel)  # solo informe: sin foto real, sigue indexable
            if noidx: fallos.append((rel, "ficha sin foto con noindex (regla: nunca noindex)"))
# 2) referencias
falta = []
for u, rel in refs.items():
    k = u.lstrip("/")
    if k in media:
        if not magic_ok(media[k]): falta.append((u, rel, "fichero en dist no es una imagen válida"))
    else: falta.append((u, rel, "no está en dist"))
def vivo_ok(item):
    u, rel, why = item
    if a.sin_vivo or why != "no está en dist": return item, False
    try:
        r = urllib.request.urlopen(urllib.request.Request(a.vivo + urllib.parse.quote(u), method="HEAD", headers={"User-Agent": "Mozilla/5.0 (verificar_fotos_fichas)"}), timeout=30)
        return item, r.status == 200 and r.headers.get("Content-Type", "").startswith("image/")
    except Exception: return item, False
with ThreadPoolExecutor(16) as ex:
    for item, ok in ex.map(vivo_ok, falta):
        if not ok: fallos.append((item[1], "imagen %s: %s (ni dist ni vivo 200 image/*)" % (item[0], item[2])))
# 4) fotos que existen en dist pero la lista fotos-malas esconde (solo informe)
try:
    _m = set(re.findall(r"/media/[^\n\"\\`]+", open(os.path.join(REPO, "src", "lib", "fotos-malas.generated.ts"), encoding="utf-8").read()))
    escondidas = sorted(x for x in _m if x.lstrip("/") in media and not es_placeholder(media[x.lstrip("/")]))
except OSError: escondidas = []
out = ["verificar_fotos_fichas: %d fichas, %d con foto real propia, %d sin foto real (hueco), %d imágenes referenciadas, %d fallos" % (nf, nreal, nhueco, len(refs), len(fallos))]
out += ["  %s  %s" % f for f in fallos]
out += ["  [info] fotos existentes escondidas por fotos-malas.generated.ts: %d %s" % (len(escondidas), escondidas[:5])]
out += ["  [info] fichas sin foto real propia (indexables): %d" % len(sinfoto)] + ["    " + x for x in sinfoto]
txt = "\n".join(out)
if a.informe: open(a.informe, "w", encoding="utf-8").write(txt + "\n")
print("\n".join(out[:25]) + ("\n  ... (informe completo en %s)" % a.informe if len(out) > 25 and a.informe else ""))
sys.exit(1 if fallos else 0)
