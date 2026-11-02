#!/usr/bin/env python3
"""2/11/2026 (decisión de Daniel: el validador no se relaja; nada de noindex, de quitar del sitemap ni de fusiones).
Limpia en dist/ lo que el validador (scripts/validar-dist-publicable.py) marca como foto pendiente o placeholder,
SIN tocar ficheros de no-tocar.txt (corre sobre el HTML ya prerenderizado, idempotente):
  1. Hueco «Foto [real|oficial] pendiente [de verificación]» (con icono o con la inicial) -> si hay foto real con fuente
     (scripts/fotos-78-fuentes.json: Wikimedia Commons con autor y licencia) se pinta la foto con su crédito; si no, queda
     el marcador vacío <div data-foto-pendiente aria-hidden> (sin texto, sin logo, sin hueco de imagen).
  2. <img src="/media/..."> cuyo fichero es el placeholder «Foto real próximamente» (misma prueba que el validador):
       · tarjeta de rival (aspect-[16/10]): se sustituye por la foto real del MISMO modelo (…-hero/-oficial/-foto1) si existe;
       · si no existe, se quita la imagen (y su <figure>/<button>/<p> si solo contenía esa imagen). Nunca la foto de otro coche.
  3. Texto interno «costeAproxEur» -> frase normal.
Uso: fix-fotos-pendientes-dist.py dist [--solo-informe]"""
import hashlib, html as H, json, os, re, sys
from PIL import Image
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
INFO = "--solo-informe" in sys.argv
HERE = os.path.dirname(os.path.abspath(__file__))
PH = {l.strip() for l in open(os.path.join(HERE, "placeholder-md5.txt")) if l.strip() and not l.startswith("#")}
FUENTES = json.load(open(os.path.join(HERE, "fotos-78-fuentes.json"), encoding="utf8"))
# las fotos con fuente viven versionadas en scripts/fotos-78-commons/ (public/media está en .gitignore): se copian a dist/media si faltan
for _f in FUENTES.values():
    _o = os.path.join(HERE, "fotos-78-commons", os.path.basename(_f["archivo"])); _d = os.path.join(D, _f["archivo"].lstrip("/"))
    if os.path.isfile(_o) and not os.path.isfile(_d) and not INFO:
        import shutil; os.makedirs(os.path.dirname(_d), exist_ok=True); shutil.copy(_o, _d)
cache = {}
def es_ph(ruta):
    """Misma prueba que scripts/validar-dist-publicable.py (md5 conocido o recuadro gris plano)."""
    if ruta in cache: return cache[ruta]
    p = os.path.join(D, ruta.lstrip("/")); r = False
    if os.path.isfile(p):
        b = open(p, "rb").read()
        if hashlib.md5(b).hexdigest() in PH: r = True
        elif len(b) < 20000 and ruta.endswith((".webp", ".png", ".jpg")):
            try:
                im = Image.open(p).convert("RGB")
                if im.width >= 1000:
                    im.thumbnail((80, 80)); px = list(im.getdata())
                    r = sum(1 for (a, g, c) in px if abs(a - 229) < 6 and abs(g - 231) < 6 and abs(c - 235) < 6) / len(px) > 0.55
            except Exception: pass
    cache[ruta] = r; return r
def real(ruta):
    p = os.path.join(D, ruta.lstrip("/"))
    return os.path.isfile(p) and os.path.getsize(p) > 30000 and not es_ph(ruta)
IMG = re.compile(r"<img\b[^>]*>", re.I)
SRC = re.compile(r'\bsrc="(/media/[^"?]*)"')
HUECO = re.compile(r'<div class="[^"]*aspect-video[^"]*">(?:<svg\b.*?</svg>|<span\b[^>]*>[^<]{0,3}</span>)<p class="[^"]*">\s*Foto (?:real |oficial )?pendiente(?: de verificaci(?:ó|&oacute;)n)?\s*</p>(?:<p class="[^"]*">[^<]{0,300}</p>)?</div>', re.S)
MARCADOR = '<div data-foto-pendiente="1" aria-hidden="true"></div>'
SUFIJOS = ("hero", "oficial", "foto1", "1")
def alternativa(src):
    m = re.match(r"(/media/.+?-precio-ficha-tecnica)-[a-z0-9]+(?:-oficial)?\.webp$", src)
    if not m: return None
    for s in SUFIJOS:
        c = "%s-%s.webp" % (m.group(1), s)
        if c != src and real(c): return c
    return None
def quita_img(s, a, b):
    """Quita la imagen [a,b) y su contenedor si solo envolvía esa imagen."""
    for tag in ("figure", "button"):
        i = s.rfind("<" + tag, 0, a)
        if i >= 0 and "</" + tag + ">" not in s[i:a]:
            j = s.find("</" + tag + ">", b)
            if j >= 0 and s[i:j].count("<img") == 1 and (tag == "figure" or s[i:a].count("<div") == s[i:a].count("</div>")):
                return s[:i] + s[j + len(tag) + 3:], True
    m = re.compile(r"<p\b[^>]*>\s*$").search(s[:a]); n = re.match(r"\s*</p>", s[b:])
    if m and n: return s[:m.start()] + s[b + n.end():], True
    return s[:a] + s[b:], False
def titulo(s):
    m = re.search(r"<h1\b[^>]*>(.*?)</h1>", s, re.S)
    return re.sub(r"<[^>]+>", "", m.group(1)).strip() if m else ""
def figura(slug, nombre, f):
    cred = 'Foto: %s · %s · <a href="%s" rel="noopener nofollow" target="_blank">Wikimedia Commons</a>' % (H.escape(f["autor"]), H.escape(f["licencia"]), f["url"])
    return ('<figure class="rtm-card"><div class="overflow-hidden rounded-3xl"><img alt="%s" class="aspect-video w-full object-cover" width="%d" height="%d" src="%s" fetchpriority="high"></div>'
            '<figcaption class="mt-2 text-center text-xs text-gray-500">%s</figcaption></figure>') % (H.escape(nombre, quote=True), f["ancho"], f["alto"], f["archivo"], cred)
TXT = [(re.compile(r"\bcosteAproxEur es no publicado\b"), "el coste aproximado figura como no publicado"), (re.compile(r"\bcosteAproxEur\b"), "el coste aproximado")]
SPLIT = re.compile(r"(<script\b.*?</script>|<style\b.*?</style>|<[^>]+>)", re.S | re.I)
ST = dict(paginas=0, hueco_foto=0, hueco_vacio=0, rival_sust=0, img_quitadas=0, texto=0)
for root, _, files in os.walk(D):
    if "index.html" not in files or "/media" in root or "/assets" in root: continue
    p = os.path.join(root, "index.html"); s = open(p, encoding="utf-8", errors="surrogateescape").read(); o = s
    rel = os.path.relpath(root, D).replace(os.sep, "/")
    slug = rel.rsplit("/", 1)[-1]
    if "ndiente" in s:
        def sub(m):
            f = FUENTES.get(slug)
            if f and os.path.isfile(os.path.join(D, f["archivo"].lstrip("/"))):
                ST["hueco_foto"] += 1; return figura(slug, titulo(s) or slug, f)
            ST["hueco_vacio"] += 1; return MARCADOR
        s = HUECO.sub(sub, s)
    if "/media/" in s:
        pos = 0
        while True:
            m = None
            for mm in IMG.finditer(s, pos):
                sm = SRC.search(mm.group(0))
                if sm and es_ph(sm.group(1)): m = (mm, sm.group(1)); break
            if not m: break
            mm, src = m; tag = mm.group(0)
            alt = alternativa(src) if "aspect-[16/10]" in tag else None
            if alt:
                s = s[:mm.start()] + tag.replace(src, alt) + s[mm.end():]; ST["rival_sust"] += 1; pos = mm.start() + 1
            else:
                s, _ = quita_img(s, mm.start(), mm.end()); ST["img_quitadas"] += 1; pos = max(0, mm.start() - 1)
    if "costeAproxEur" in s:
        parts = SPLIT.split(s)
        for i in range(0, len(parts), 2):
            for rx, rp in TXT:
                parts[i], k = rx.subn(rp, parts[i]); ST["texto"] += k
        s = "".join(parts)
    if s != o:
        ST["paginas"] += 1
        if not INFO: open(p, "w", encoding="utf-8", errors="surrogateescape").write(s)
print("fix-fotos-pendientes:", ST)
