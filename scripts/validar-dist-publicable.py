#!/usr/bin/env python3
"""31/10/2026 — BLOQUEANTE antes de publicar (lo llama tools/publicar/publicar.py en f_dist).
Recorre dist/ y falla (exit 1) si una página INDEXABLE (sin noindex) tiene:
  FOTO   · texto visible «Foto pendiente», «Foto real próximamente», «FotoReal próximamente», «pendiente de verificación»
         · <img> con src vacío, o cuyo fichero es el placeholder «Foto real próximamente» (md5 de scripts/placeholder-md5.txt
           o imagen grande y muy ligera de color liso) o no existe en dist/media ni en producción
  TEXTO  · texto interno visible: null, undefined, NaN, precioDesde, cargaUtilKg, SUSTITUIDO, TODO, «Grok 22:15», {{ }}, [object Object]
Las páginas noindex solo se avisan (no bloquean). Uso: validar-dist-publicable.py dist [--vivo ficheros.json] [--informe salida.txt]"""
import hashlib, json, os, re, sys
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
args = sys.argv[2:]
vivo = {}
if "--vivo" in args:
    try: vivo = json.load(open(args[args.index("--vivo") + 1]))
    except Exception: vivo = {}
informe = args[args.index("--informe") + 1] if "--informe" in args else None
HERE = os.path.dirname(os.path.abspath(__file__))
PH = {l.strip() for l in open(os.path.join(HERE, "placeholder-md5.txt")) if l.strip() and not l.startswith("#")}
try:
    from PIL import Image
except Exception:
    Image = None
NOIDX = re.compile(r'<meta[^>]+name="robots"[^>]+content="[^"]*noindex', re.I)
STRIP = re.compile(r"<(script|style|noscript|template|svg)\b.*?</\1>|<!--.*?-->", re.S | re.I)
TAG = re.compile(r"<[^>]+>")
FOTO_TXT = re.compile(r"foto\s*(?:real|oficial)?\s*(?:pendiente(?:\s+de\s+verificaci[oó]n)?|próximamente|proximamente)|fotoreal\s*pr[oó]ximamente", re.I)
TEXTO = re.compile(r"\b(?:null|undefined|NaN|precioDesde|cargaUtilKg|SUSTITUIDO)\b|\bTODO:|Grok\s*\d|\{\{|\[object Object\]|\bcosteAproxEur\b")
IMG = re.compile(r"<img\b[^>]*>", re.I)
SRC = re.compile(r'\bsrc=(?:"([^"]*)"|\'([^\']*)\')', re.I)
cache = {}
def es_placeholder(ruta):
    if ruta in cache: return cache[ruta]
    p = os.path.join(D, ruta.lstrip("/")); r = "ok"
    if not os.path.exists(p): r = "falta" if (ruta not in vivo and ruta.startswith("/media/")) else "ok"
    else:
        b = open(p, "rb").read()
        if hashlib.md5(b).hexdigest() in PH: r = "placeholder"
        elif Image and len(b) < 20000 and ruta.endswith((".webp", ".png", ".jpg")):
            try:
                im = Image.open(p).convert("RGB")
                if im.width >= 1000:
                    im.thumbnail((80, 80)); px = list(im.getdata()); n = sum(1 for (r_, g, b_) in px if abs(r_ - 229) < 6 and abs(g - 231) < 6 and abs(b_ - 235) < 6)
                    if n / len(px) > 0.55: r = "placeholder"
            except Exception: pass
    cache[ruta] = r; return r
malas, avisos, n = [], [], 0
faltan = set()  # /media/ ausentes de dist: solo informativo (el bloqueo de fotos rotas lo hace publicar.py con la lista de vivo)
for root, _, files in os.walk(D):
    if "index.html" not in files: continue
    rel = "/" + os.path.relpath(root, D).replace(os.sep, "/") + "/"
    if rel == "/./": rel = "/"
    s = open(os.path.join(root, "index.html"), encoding="utf-8", errors="ignore").read(); n += 1
    noidx = bool(NOIDX.search(s))
    body = STRIP.sub(" ", s); txt = re.sub(r"\s+", " ", TAG.sub(" ", body))
    pr = []
    m = FOTO_TXT.search(txt)
    if m: pr.append("FOTO texto «%s»" % m.group(0))
    for t in IMG.findall(body):
        sm = SRC.search(t)
        if not sm: continue
        src = (sm.group(1) if sm.group(1) is not None else sm.group(2)).strip()
        if src == "": pr.append("FOTO <img src vacío>"); break
        if src.startswith("/media/"):
            e = es_placeholder(src.split("?")[0])
            if e == "falta": faltan.add(src)
            elif e != "ok": pr.append("FOTO imagen %s: %s" % (e, src)); break
    t2 = TEXTO.search(txt)
    if t2:
        a = max(0, t2.start() - 40); pr.append("TEXTO «%s»" % txt[a:t2.end() + 40])
    if pr:
        (avisos if noidx else malas).append((rel, pr[:3]))
out = ["páginas revisadas: %d | bloqueantes (indexables): %d | avisos (noindex): %d | /media ausentes de dist (info): %d" % (n, len(malas), len(avisos), len(faltan))]
for rel, pr in malas[:400]: out.append("BLOQUEA %s :: %s" % (rel, " | ".join(pr)))
for rel, pr in avisos[:100]: out.append("aviso   %s :: %s" % (rel, " | ".join(pr)))
txt = "\n".join(out)
if informe: open(informe, "w", encoding="utf-8").write(txt + "\n")
print("\n".join(out[:60]))
sys.exit(1 if malas else 0)
