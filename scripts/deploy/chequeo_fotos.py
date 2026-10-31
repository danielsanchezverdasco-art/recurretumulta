#!/usr/bin/env python3
"""Paso 3b. Control OBLIGATORIO de fotos antes del borrador (bloquea si falla).
Uso:  python3 scripts/deploy/chequeo_fotos.py --dist dist [--cambios .deploy-work/cambios.json]
Falla si:
  * alguna foto de src/ lleva crédito 'generada por IA' / 'ilustrativa' y su página va en el deploy;
  * alguna foto NUEVA (/media/* que no está en vivo; sale de cambios.json de mkdraft --check) no tiene
    fuente con URL http(s) en public/media-creditos.md ni en src/ (campo credito/fuente/url junto a la ruta).
Regla: no hay fotos IA, ni de concesionario, ni 'parecidas'. Si no hay foto real del modelo exacto: placeholder."""
import os, re, sys, json, argparse
ap = argparse.ArgumentParser(); ap.add_argument("--dist", default="dist"); ap.add_argument("--cambios"); a = ap.parse_args()
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
src = ""
for dp, _, fs in os.walk(os.path.join(ROOT, "src")):
    for f in fs:
        if f.endswith((".ts", ".tsx", ".json")): src += open(os.path.join(dp, f), encoding="utf8", errors="ignore").read() + "\n"
IA = set(re.findall(r'"(/media/[^"]+)"[^\n]{0,400}?(?:generada por IA|ilustrativa generada)', src, flags=re.I))
cred = open(os.path.join(ROOT, "public", "media-creditos.md"), encoding="utf8").read() if os.path.exists(os.path.join(ROOT, "public", "media-creditos.md")) else ""
con_fuente = set(re.findall(r"\|\s*(/media/[^\s|]+)\s*\|\s*https?://", cred))
con_fuente |= set(re.findall(r'"(/media/[^"]+)"[^\n]{0,400}?(?:fuente|fuenteUrl|url)\s*:\s*"https?://', src))
# fotos ya sustituidas por el hotfix (real o placeholder) no cuentan como IA
H = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fotos-hotfix")
import glob
for m in glob.glob(os.path.join(H, "fotos-hotfix-map*.json")):
    IA -= {"/media/" + k + ".webp" for k in json.load(open(m)) if not k.startswith("_")}
fallos = []
html_cambiados = None
if a.cambios:
    c = json.load(open(a.cambios)); html_cambiados = [p for p in c["new"] + c["chg"] if p.endswith(".html")]
    nuevas = [p for p in c["new"] if p.startswith("/media/") and not re.search(r"-(480w|828w|1200w|card)\.webp$", p)]
    for p in nuevas:
        if p not in con_fuente:
            # 31/10/2026: el listado de ficheros de vivo es incompleto. Si vivo YA sirve esa foto con los mismos bytes, no es nueva.
            try:
                import hashlib, urllib.request, urllib.parse
                _l = urllib.request.urlopen(urllib.request.Request("https://recurretumulta.online" + urllib.parse.quote(p), headers={"User-Agent": "Mozilla/5.0"}), timeout=30).read()
                if hashlib.md5(_l).hexdigest() == hashlib.md5(open(os.path.join(a.dist, p.lstrip("/")), "rb").read()).hexdigest(): continue
            except Exception: pass
            fallos.append(f"foto nueva SIN URL de fuente: {p}")
paginas = html_cambiados if html_cambiados is not None else []
for p in paginas:
    f = os.path.join(a.dist, p.lstrip("/"))
    if not os.path.exists(f): continue
    h = open(f, encoding="utf8", errors="ignore").read()
    for img in set(re.findall(r'(/media/[^"\s?#]+?)(?:-480w|-828w|-1200w|-card)?\.webp', h)):
        if img + ".webp" in IA: fallos.append(f"{p} usa foto marcada como IA: {img}.webp")
print("fotos marcadas IA en src:", len(IA), "| fotos con fuente:", len(con_fuente), "| páginas revisadas:", len(paginas))
for x in fallos[:200]: print("FALLO", x)
print("RESULTADO:", "OK" if not fallos else f"{len(fallos)} FALLOS (no se publica)")
sys.exit(1 if fallos else 0)
