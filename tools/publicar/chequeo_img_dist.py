#!/usr/bin/env python3
"""31/10/2026 — integridad de <img> en dist (BLOQUEANTE). Causa del 28/10: el prerender corrió sin la media de producción
en dist/, el listener de error de index.html horneó data-fb="og" + src=og-recurretumulta-online.png en el HTML (381 imgs en
90/92 páginas top, galería del G9 6->4). Aquí se exige: 0 data-fb en TODAS las páginas, 0 <img> sin src y 0 <img src=og-…png>
en el HTML prerenderizado salvo en lo permitido, y la galería del G9 completa (todas sus fotos del repo salvo fotos-malas).
Uso: chequeo_img_dist.py dist [--cambios .deploy-work/cambios.json]   (rc 1 si falla)
31/10/2026 (decisión de Cosa): con --cambios solo se examinan las páginas NUEVAS o CAMBIADAS respecto a vivo (new+chg de cambios.json).
Las copias de vivo sin cambios (rutas con 301! no prerenderizables, que no se suben) se omiten: no forman parte del despliegue."""
import os, re, sys, collections
D = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else "dist"
SUBIR = None
if "--cambios" in sys.argv:
    import json
    _c = json.load(open(sys.argv[sys.argv.index("--cambios") + 1]))
    SUBIR = set(_c.get("new", [])) | set(_c.get("chg", []))
IMG = re.compile(r"<img\b[^>]*>", re.I)
fb, sinsrc, og = collections.Counter(), collections.Counter(), collections.Counter()
n = 0
for root, _, fs in os.walk(D):
    for f in fs:
        if not f.endswith(".html"): continue
        p = os.path.join(root, f); rel = "/" + os.path.relpath(p, D)
        if SUBIR is not None and rel not in SUBIR: continue
        t = open(p, encoding="utf8", errors="ignore").read(); n += 1
        for i in IMG.findall(t):
            if re.search(r"\sdata-fb\b", i): fb[rel] += 1
            if not re.search(r"\ssrc=", i): sinsrc[rel] += 1
            if re.search(r"\ssrc=[\"']?/media/og-recurretumulta-online\.png", i): og[rel] += 1
print("páginas html: %d | con data-fb: %d (%d imgs) | con <img> sin src: %d (%d imgs) | con <img src=og-…png>: %d (%d imgs)" % (
    n, len(fb), sum(fb.values()), len(sinsrc), sum(sinsrc.values()), len(og), sum(og.values())))
mal = 0
for nombre, c in (("data-fb", fb), ("img sin src", sinsrc), ("img src=og-recurretumulta-online.png", og)):
    for k, v in list(c.items())[:5]: print("  %s: %s (%d)" % (nombre, k, v))
    if c: mal = 1
# galería G9: fotos del repo (no variantes) - fotos-malas
repo = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
try:
    malas = set(re.search(r'FOTOS_MALAS_TXT = "(.*?)";', open(os.path.join(repo, "src/lib/fotos-malas.generated.ts"), encoding="utf8").read(), re.S).group(1).split("\\n"))
except Exception: malas = set()
for slug in ("stelato-g9-2026-precio-ficha-tecnica", "stelato-g9-erev-2026-precio-ficha-tecnica"):
    pg = os.path.join(D, "coches", slug, "index.html")
    if not os.path.exists(pg): print("  G9: falta %s" % pg); mal = 1; continue
    t = open(pg, encoding="utf8", errors="ignore").read()
    en = {m for i in IMG.findall(t) for m in re.findall(r"/media/(%s-[a-z0-9-]+)\.webp" % re.escape(slug.replace("-precio-ficha-tecnica", "")), i)}
    en = {re.sub(r"-(480w|828w|card)$", "", e) for e in en}
    esp = {f[:-5] for f in os.listdir(os.path.join(repo, "public/media")) if f.startswith(slug + "-") or f.startswith(slug.replace("-precio-ficha-tecnica", "") + "-precio-ficha-tecnica-")}
    esp = {e for e in esp if not re.search(r"-(480w|828w|card)$", e) and "/media/%s.webp" % e not in malas}
    # 31/10: "-hero" es solo foto de RESPALDO de la ficha (CochesFicha.tsx: si existe la principal no se pinta); no cuenta como foto esperable
    esp = {e for e in esp if not e.endswith("-hero")}
    objetivo = min(6, len(esp))  # G9: 6 fotos en la galería (el 28/10 salían 4)
    print("  galería %s: %d fotos distintas en el HTML (objetivo %d de %d en repo)" % (slug, len(en), objetivo, len(esp)))
    if len(en) < objetivo: mal = 1
# ── 01/11/2026 (Daniel): AVISO si una tarjeta o hero usa el LOGO (o una imagen genérica) como foto de portada ──────────────
# 1) HTML prerenderizado: <img> con logo-recurretumulta.webp / og-recurretumulta-online.png fuera de cabecera y pie (el logo de la
#    navbar/footer es -sm.webp y no cuenta). 2) Datos de tarjetas (blog-lite): post sin heroSrc, o con heroSrc cuyo fichero no existe en dist/.
# Es un AVISO (no cambia el código de salida): la tarjeta sin foto se pinta sin recuadro, pero conviene darle su foto real con fuente.
LOGO_IMG = re.compile(r"logo-recurretumulta\.webp|og-recurretumulta-online\.png")
logo_pag = collections.Counter()
for root, _, fs in os.walk(D):
    for f in fs:
        if not f.endswith(".html"): continue
        p_ = os.path.join(root, f); rel = "/" + os.path.relpath(p_, D)
        if SUBIR is not None and rel not in SUBIR: continue
        t = open(p_, encoding="utf8", errors="ignore").read()
        t = re.sub(r"<(header|footer|nav)\b.*?</\1>", "", t, flags=re.S | re.I)
        for i in IMG.findall(t):
            m_ = re.search(r"\ssrc=[\"']?([^\"'\s>]+)", i)
            if m_ and LOGO_IMG.search(m_.group(1)): logo_pag[rel] += 1
print("AVISO tarjetas/heroes con LOGO o imagen genérica como foto: %d páginas (%d imgs)" % (len(logo_pag), sum(logo_pag.values())))
for k, v in list(logo_pag.items())[:8]: print("  logo-como-foto: %s (%d)" % (k, v))
try:
    _lite = open(os.path.join(repo, "src/lib/blog-lite.generated.ts"), encoding="utf8").read()
    _src = re.findall(r'"heroSrc": "([^"]*)"', _lite)
    _sin = sum(1 for s in _src if not s)
    _rotas = [s for s in set(_src) if s.startswith("/media/") and not os.path.exists(os.path.join(D, s.lstrip("/")))]
    print("AVISO blog-lite: %d de %d tarjetas sin foto (sin recuadro, sin logo) | %d heroSrc ausentes de dist (acabarían en el og/logo)" % (_sin, len(_src), len(_rotas)))
    for s in _rotas[:8]: print("  heroSrc ausente de dist: " + s)
except Exception as e:
    print("AVISO blog-lite: no se pudo comprobar (%s)" % e)
sys.exit(mal)
