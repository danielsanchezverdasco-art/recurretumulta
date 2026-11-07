#!/usr/bin/env python3
"""Paso 4. Prepara el deploy encima de los ficheros en vivo.
Uso:
  python3 scripts/deploy/mkdraft.py --dist dist --vivo <ID_VIVO> --titulo "texto" --check   (simulacro, no crea nada)
  python3 scripts/deploy/mkdraft.py --dist dist --vivo <ID_VIVO> --titulo "texto"           (crea un BORRADOR; no publica)
  python3 scripts/deploy/mkdraft.py --dist dist --vivo <ID_VIVO> --titulo "texto" --directo (createSiteDeploy con draft false: el deploy ES la publicación cuando queda ready)
--check y --directo no van juntos. --directo no llama a restore. La vía de borrador no se ha quitado.
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
from plan_conservacion import PlanError, armar_plan, cuerpo_deploy

ap = argparse.ArgumentParser()
ap.add_argument("--dist", required=True); ap.add_argument("--vivo", required=True); ap.add_argument("--titulo", required=True)
ap.add_argument("--check", action="store_true"); ap.add_argument("--solo"); ap.add_argument("--media-forzar"); ap.add_argument("--quitar-reglas")
ap.add_argument("--directo", action="store_true", help="createSiteDeploy con draft false (publicación única, sin borrador)")
a = ap.parse_args()
if a.check and a.directo:
    sys.exit("ABORT: --check no crea nada. No lo combines con --directo.")
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

# REDIRECTS_VIVO (lo pone tools/publicar/publicar.py): copia verificada del _redirects EN VIVO.
rep = os.environ.get("REDIRECTS_VIVO") or os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "public", "_redirects")
redirects_vivo_text = None
if "/_redirects" in files:
    if os.path.exists(rep) and sha1_file(rep) == live.get("/_redirects"):
        redirects_vivo_text = open(rep, encoding="utf-8").read()
try:
    plan = armar_plan(files, live, redirects_vivo_text, lines(a.media_forzar), lines(a.quitar_reglas))
except PlanError as e:
    sys.exit(str(e))
hs = plan["hs"]
if plan["redirects_note"]:
    print("_redirects: 0 reglas en vivo perdidas", "(%s)" % plan["redirects_note"])
print("páginas nuevas tapadas por 301! (no se suben):", plan["excl"])
print("fotos /media/ protegidas (se queda la de vivo):", plan["prot"])
print("páginas existentes tapadas por 301! (se conserva la de vivo):", plan["tap"])
print("rutas con distinta mayúscula que en vivo (normal en /assets/):", len(plan["case"]), plan["case"][:3])
print("locales %d | de vivo %d | total %d (vivo %d) | DESAPARECERÍAN %d | nuevos %d | cambiados %d" % (
    plan["locales"], plan["added"], len(hs), plan["live_n"], len(plan["gone"]), len(plan["new"]), len(plan["chg"])))
os.makedirs(WORK, exist_ok=True)
json.dump({"new": sorted(plan["new"]), "chg": sorted(plan["chg"])}, open(os.path.join(WORK, "cambios.json"), "w"), indent=0)
if a.check:
    print("CHECK OK (no se ha creado nada). Revisa .deploy-work/cambios.json"); sys.exit(0)

try:
    body = cuerpo_deploy(hs, a.directo)
except PlanError as e:
    sys.exit(str(e))
if a.directo and body.get("draft") is not False:
    sys.exit("ABORT: vía directa con draft. No se llama a la API.")
if not a.directo and body.get("draft") is not True:
    sys.exit("ABORT: la vía de borrador no lleva draft true. No se llama a la API.")
d = api("POST", f"/sites/{SITE}/deploys?title=" + urllib.parse.quote(a.titulo), json.dumps(body).encode())
D = d["id"]
open(os.path.join(WORK, "deploy_id" if a.directo else "draft_id"), "w").write(D)
open(os.path.join(WORK, "deploy_vivo_base" if a.directo else "draft_vivo_base"), "w").write(a.vivo)
req = set(d.get("required") or [])
print("DIRECTO" if a.directo else "BORRADOR", D, "| ficheros que Netlify pide subir:", len(req), flush=True)
by = {}
for rel, h in hs.items():
    if rel in files: by.setdefault(h, rel)
miss = [h for h in req if h not in by]
if miss: sys.exit(f"ABORT: {len(miss)} sha requeridos sin fichero local (deploy {D} incompleto; no se crea otro)")
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
