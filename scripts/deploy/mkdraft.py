#!/usr/bin/env python3
"""Paso 4. Crea un deploy BORRADOR incremental encima de los ficheros en vivo. NUNCA publica.
Uso:
  python3 scripts/deploy/mkdraft.py --dist dist --vivo <ID_VIVO> --titulo "texto" --check   (simulacro, no crea nada)
  python3 scripts/deploy/mkdraft.py --dist dist --vivo <ID_VIVO> --titulo "texto"           (crea el borrador)
Opciones:
  --solo FICHERO          solo sube las rutas listadas (una por línea, p.ej. /coches/x/index.html)
                          + los /assets/* nuevos; todo lo demás se queda como en vivo. Recomendado.
  --media-forzar FICHERO  rutas /media/* que existen en vivo y SÍ quieres cambiar (p.ej. hotfix de fotos).
                          Sin esto, cualquier /media/* que ya exista en vivo conserva la versión en vivo
                          (así un build nunca reintroduce fotos IA viejas de public/media).
  --quitar-reglas FICHERO orígenes de _redirects que se quitan A PROPÓSITO (uno por línea).
Garantías (aborta si falla alguna):
  * el vivo sigue siendo --vivo;  * 0 eliminaciones contra la lista COMPLETA en vivo (sin distinguir mayúsculas);
  * _redirects: ninguna regla en vivo se pierde;  * todo sha pedido por Netlify tiene fichero local.
No existe --allow-removals y no debe existir."""
import os, sys, json, argparse, urllib.parse, concurrent.futures as cf
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *

ap = argparse.ArgumentParser()
ap.add_argument("--dist", required=True); ap.add_argument("--vivo", required=True); ap.add_argument("--titulo", required=True)
ap.add_argument("--check", action="store_true"); ap.add_argument("--solo"); ap.add_argument("--media-forzar"); ap.add_argument("--quitar-reglas")
a = ap.parse_args()
R = os.path.abspath(a.dist)
lines = lambda f: [l.strip() for l in open(f) if l.strip() and not l.startswith("#")] if f else []

cur = live_id()
if cur != a.vivo:
    sys.exit(f"ABORT: el vivo es {cur}, no {a.vivo}. Alguien publicó: vuelve a vivo.py y rehaz el borrador.")
live = file_list(a.vivo)
live_l = {k.lower(): v for k, v in live.items()}

files = {"/" + os.path.relpath(os.path.join(dp, f), R).replace(os.sep, "/"): os.path.join(dp, f) for dp, _, fs in os.walk(R) for f in fs}
files.pop("/.fotos-hotfix-done.json", None)
if a.solo:
    keep = {p if p.startswith("/") else "/" + p for p in lines(a.solo)}
    falta = [p for p in keep if p not in files]
    if falta: sys.exit(f"ABORT: --solo lista rutas que no están en dist: {falta[:10]}")
    files = {k: v for k, v in files.items() if k in keep or (k.startswith("/assets/") and k.lower() not in live_l)}
    print("modo --solo:", len(keep), "rutas pedidas +", len(files) - len(keep), "assets nuevos")

# _redirects: comprobar que no se pierde ninguna regla en vivo
if "/_redirects" in files:
    rep = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "public", "_redirects")
    if not (os.path.exists(rep) and sha1_file(rep) == live["/_redirects"]):
        sys.exit("ABORT: no tengo copia verificada del _redirects en vivo (public/_redirects del repo != vivo). Avisa a Cosa/Daniel.")
    quit_ = {s.rstrip("/").lower() or "/" for s in lines(a.quitar_reglas)}
    perdidas = sorted(redirect_sources(open(rep).read()) - redirect_sources(open(files["/_redirects"]).read()) - quit_)
    if perdidas: sys.exit(f"ABORT: el _redirects nuevo pierde {len(perdidas)} reglas en vivo: {perdidas[:10]}")
    print("_redirects: 0 reglas en vivo perdidas", "(idéntico)" if sha1_file(files["/_redirects"]) == live["/_redirects"] else "(con cambios)")
    forced = set()
    for l in open(files["/_redirects"]):
        p = l.split()
        if len(p) >= 3 and not l.startswith("#") and p[2].endswith("!"):
            forced.add(p[0].rstrip("/").lower())
    excl = [k for k in files if k.lower() not in live_l and k.endswith("/index.html") and k[:-11].rstrip("/").lower() in forced]
    for k in excl: del files[k]
    print("páginas nuevas tapadas por 301! (no se suben):", len(excl))

with cf.ThreadPoolExecutor(8) as ex:
    hs = dict(zip(files, ex.map(sha1_file, files.values())))

# protección de fotos: /media/* que ya existe en vivo conserva el sha en vivo salvo --media-forzar
forz = {p.lower() for p in lines(a.media_forzar)}
prot = 0
for k in list(hs):
    kl = k.lower()
    if kl.startswith("/media/") and kl in live_l and hs[k] != live_l[kl] and kl not in forz:
        hs[k] = live_l[kl]; prot += 1
print("fotos /media/ protegidas (se queda la de vivo):", prot)

# Netlify lista las rutas en minúsculas y las sirve sin distinguir mayúsculas: solo se informa.
case = [k for k in hs if k.lower() in live_l and k not in live]
print("rutas con distinta mayúscula que en vivo (normal en /assets/):", len(case), case[:3])

have = {k.lower() for k in hs}
added = 0
for p, s in live.items():
    if p.lower() not in have:
        hs[p] = s; added += 1
have = {k.lower() for k in hs}
gone = [p for p in live if p.lower() not in have]
new = [k for k in hs if k.lower() not in live_l]
chg = [k for k in hs if k.lower() in live_l and live_l[k.lower()] != hs[k]]
print(f"locales {len(files)} | de vivo {added} | total {len(hs)} (vivo {len(live)}) | DESAPARECERÍAN {len(gone)} | nuevos {len(new)} | cambiados {len(chg)}")
os.makedirs(WORK, exist_ok=True)
json.dump({"new": sorted(new), "chg": sorted(chg)}, open(os.path.join(WORK, "cambios.json"), "w"), indent=0)
if gone:
    sys.exit(f"ABORT: {len(gone)} ficheros en vivo desaparecerían: {gone[:10]}. Cópialos a dist; NUNCA borres a la fuerza.")
if len(hs) < len(live):
    sys.exit("ABORT: total < vivo")
if a.check:
    print("CHECK OK (no se ha creado nada). Revisa .deploy-work/cambios.json"); sys.exit(0)

d = api("POST", f"/sites/{SITE}/deploys?title=" + urllib.parse.quote(a.titulo), json.dumps({"files": hs, "draft": True}).encode())
D = d["id"]; open(os.path.join(WORK, "draft_id"), "w").write(D)
open(os.path.join(WORK, "draft_vivo_base"), "w").write(a.vivo)
req = set(d.get("required") or [])
print("BORRADOR", D, "| ficheros que Netlify pide subir:", len(req), flush=True)
by = {}
for rel, h in hs.items():
    if rel in files: by.setdefault(h, rel)
miss = [h for h in req if h not in by]
if miss: sys.exit(f"ABORT: {len(miss)} sha requeridos sin fichero local (borrador {D} incompleto; NO publicar)")
def up(h):
    rel = by[h]
    try:
        api("PUT", f"/deploys/{D}/files" + urllib.parse.quote(rel), open(files[rel], "rb").read(), "application/octet-stream", 300); return 0
    except SystemExit as e:
        print("FALLO", rel, e, flush=True); return 1
n = f = 0
with cf.ThreadPoolExecutor(12) as ex:
    for r in ex.map(up, req):
        n += 1; f += r
        if n % 500 == 0: print("subidos", n, "/", len(req), flush=True)
d = api("GET", f"/deploys/{D}")
print(f"FIN subidos {n-f} fallos {f} estado {d.get('state')} URL {d.get('deploy_ssl_url')}")
sys.exit(1 if f else 0)
