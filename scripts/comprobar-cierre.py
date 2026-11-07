#!/usr/bin/env python3
"""Comprueba el dist listo para que otra persona lo publique.
Sale 1 si falta una URL del sitemap vivo, si public/_redirects perdió
reglas, si una foto del repo no está en dist con el mismo sha256, si
un HTML no cita el bundle de este build, o si un <img> apunta a una
de las 328 fotos ausentes.
"""
import hashlib, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
VIVO = os.path.join(ROOT, "docs", "inventario", "sitemap-vivo-20261106.txt")
AUS = os.path.join(ROOT, "docs", "inventario", "fotos-no-recuperables.txt")
HASHES = [
    os.path.join(ROOT, "docs", "inventario", "media-en-repo-sha256.txt"),
    os.path.join(ROOT, "docs", "inventario", "media-generada-no-git.txt"),
]
fail = []

def entry_js():
    idx = open(os.path.join(DIST, "index.html"), encoding="utf8", errors="ignore").read()
    m = re.search(r"/assets/(index-[A-Za-z0-9_-]+\.js)", idx)
    if not m:
        fail.append("dist/index.html no cita index-*.js")
        return None
    return m.group(1)

bundle = entry_js()
print("bundle", bundle)

vivo = [l.strip() for l in open(VIVO, encoding="utf8") if l.startswith("/")]
sm = open(os.path.join(DIST, "sitemap.xml"), encoding="utf8").read()
locs = set()
for loc in re.findall(r"<loc>([^<]+)</loc>", sm):
    path = loc.split("://", 1)[-1]
    path = path[path.find("/") :]
    if not path.endswith("/"):
        path += "/"
    locs.add(path)
faltan = [p for p in vivo if p not in locs]
extra = len(locs) - len(set(vivo) & locs)
print(f"sitemap dist {len(locs)} vivo {len(vivo)} faltan {len(faltan)} solo_dist {extra}")
if faltan:
    fail.append(f"sitemap pierde {len(faltan)} URLs del vivo")
    open("/tmp/sitemap-faltan.txt", "w").write("\n".join(faltan) + "\n")

def reglas(path):
    out = []
    for ln in open(path, encoding="utf8"):
        s = ln.strip()
        if s and not s.startswith("#"):
            out.append(s)
    return out

pub = reglas(os.path.join(ROOT, "public", "_redirects"))
dst = reglas(os.path.join(DIST, "_redirects"))
dset = set(dst)
perdidas = [r for r in pub if r not in dset]
print(f"redirects public {len(pub)} dist {len(dst)} reglas_public_ausentes_en_dist {len(perdidas)}")
if perdidas:
    fail.append(f"_redirects pierde {len(perdidas)} reglas de public")
    open("/tmp/redirects-perdidas.txt", "w").write("\n".join(perdidas) + "\n")

aus = {l.strip() for l in open(AUS, encoding="utf8") if l.startswith("/")}
img_re = re.compile(r"<img\b[^>]*>", re.I)
src_re = re.compile(r"""\bsrc=(?:"([^"]*)"|'([^']*)')""", re.I)
rotas = 0
sin_bundle = 0
html = 0
for raiz, dirs, fs in os.walk(DIST):
    dirs[:] = [d for d in dirs if d != "assets"]
    for f in fs:
        if f != "index.html":
            continue
        html += 1
        p = os.path.join(raiz, f)
        # solo el arranque: el bundle va en las primeras etiquetas
        head = open(p, encoding="utf8", errors="ignore").read(8000)
        if bundle and bundle not in head and bundle not in open(p, encoding="utf8", errors="ignore").read():
            sin_bundle += 1
        for tag in img_re.findall(open(p, encoding="utf8", errors="ignore").read()):
            m = src_re.search(tag)
            if not m:
                continue
            src = m.group(1) or m.group(2) or ""
            if src in aus:
                rotas += 1
print(f"html {html} sin_bundle {sin_bundle} img_src_ausente {rotas}")
if sin_bundle:
    fail.append(f"{sin_bundle} HTML no citan {bundle}")
if rotas:
    fail.append(f"{rotas} img apuntan a fotos ausentes")

mal = 0
comprobados = 0
for hf in HASHES:
    for ln in open(hf, encoding="utf8"):
        parts = ln.split()
        if len(parts) < 3:
            continue
        digest, _size, rel = parts[0], parts[1], parts[2]
        dest = os.path.join(DIST, rel[len("public/") :] if rel.startswith("public/") else rel)
        # public/media/x -> dist/media/x
        if rel.startswith("public/"):
            dest = os.path.join(DIST, rel[len("public/") :])
        comprobados += 1
        if not os.path.isfile(dest):
            mal += 1
            if mal <= 5:
                print("falta", rel)
            continue
        h = hashlib.sha256()
        with open(dest, "rb") as fh:
            for chunk in iter(lambda: fh.read(1024 * 1024), b""):
                h.update(chunk)
        if h.hexdigest() != digest:
            mal += 1
            if mal <= 5:
                print("hash", rel)
print(f"media_comprobada {comprobados} distintas {mal}")
if mal:
    fail.append(f"{mal} ficheros de media no coinciden con el manifiesto")

print("FALLOS" if fail else "CIERRE_OK", *fail, sep="\n" if fail else "")
sys.exit(1 if fail else 0)
