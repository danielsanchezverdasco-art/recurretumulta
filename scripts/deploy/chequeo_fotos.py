#!/usr/bin/env python3
"""Paso 3b. Control OBLIGATORIO de fotos antes del borrador (bloquea si falla).
Uso:  python3 scripts/deploy/chequeo_fotos.py --dist dist [--cambios .deploy-work/cambios.json]
      [--inventario ficheros-DEPLOY.json]

Falla si:
  * alguna foto de src/ lleva crédito 'generada por IA' / 'ilustrativa' y su página va en el deploy;
  * alguna foto NUEVA (/media/* que no está en vivo; sale de cambios.json de mkdraft --check) no tiene
    fuente con URL http(s) en public/media-creditos.md ni en src/ (campo credito/fuente/url junto a la ruta).

No inventa créditos ni acepta una foto por el nombre del fichero. La falta de URL sigue siendo fallo.
No borra ficheros: quien acredita los derechos es Daniel.

El inventario oficial {ruta: sha1} del deploy permite no descargar:
  * si la ruta no está, la prueba es negativa: no se exime y no se hace GET;
  * si la ruta está y el sha1 local coincide, se reutiliza esa prueba y se exime sin GET;
  * si no hay inventario, se mantiene la pregunta al sitio en vivo.
"""
import os, re, sys, json, argparse, hashlib, glob

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")


def sha1_archivo(path):
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def resolver_preexistente(ruta, sha_local, inventario):
    """'preguntar' si no hay snapshot. 'eximir' solo con el mismo sha1. Si no, 'rechazar'."""
    if inventario is None:
        return "preguntar"
    vivo = inventario.get(ruta)
    if vivo and sha_local and vivo == sha_local:
        return "eximir"
    return "rechazar"


def es_nueva_sin_fuente(ruta, con_fuente, sha_local, inventario, pedir):
    """True si debe figurar como foto nueva sin URL. pedir() solo si hay que mirar el vivo."""
    if ruta in con_fuente:
        return False
    decision = resolver_preexistente(ruta, sha_local, inventario)
    if decision == "eximir":
        return False
    if decision == "rechazar":
        return True
    try:
        if pedir():
            return False
    except Exception:
        pass
    return True


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--dist", default="dist")
    ap.add_argument("--cambios")
    ap.add_argument("--inventario", help="JSON {ruta: sha1} del deploy oficial. No se descarga.")
    a = ap.parse_args(argv)
    src = ""
    for dp, _, fs in os.walk(os.path.join(ROOT, "src")):
        for f in fs:
            if f.endswith((".ts", ".tsx", ".json")):
                src += open(os.path.join(dp, f), encoding="utf8", errors="ignore").read() + "\n"
    IA = set(re.findall(r'"(/media/[^"]+)"[^\n]{0,400}?(?:generada por IA|ilustrativa generada)', src, flags=re.I))
    cred_p = os.path.join(ROOT, "public", "media-creditos.md")
    cred = open(cred_p, encoding="utf8").read() if os.path.exists(cred_p) else ""
    con_fuente = set(re.findall(r"\|\s*(/media/[^\s|]+)\s*\|\s*https?://", cred))
    con_fuente |= set(re.findall(r'"(/media/[^"]+)"[^\n]{0,400}?(?:fuente|fuenteUrl|url)\s*:\s*"https?://', src))
    H = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fotos-hotfix")
    for m in glob.glob(os.path.join(H, "fotos-hotfix-map*.json")):
        IA -= {"/media/" + k + ".webp" for k in json.load(open(m)) if not k.startswith("_")}
    inventario = None
    if a.inventario:
        inventario = json.load(open(a.inventario, encoding="utf8"))
    fallos = []
    html_cambiados = None
    if a.cambios:
        c = json.load(open(a.cambios))
        html_cambiados = [p for p in c["new"] + c["chg"] if p.endswith(".html")]
        nuevas = [p for p in c["new"] if p.startswith("/media/") and not re.search(r"-(480w|828w|1200w|card)\.webp$", p)]
        for p in nuevas:
            local = os.path.join(a.dist, p.lstrip("/"))
            sha = sha1_archivo(local) if os.path.isfile(local) else None

            def pedir(ruta=p, dest=local):
                import urllib.request, urllib.parse
                body = urllib.request.urlopen(urllib.request.Request(
                    "https://recurretumulta.online" + urllib.parse.quote(ruta),
                    headers={"User-Agent": "Mozilla/5.0"}), timeout=30).read()
                if not os.path.isfile(dest):
                    return False
                return hashlib.md5(body).hexdigest() == hashlib.md5(open(dest, "rb").read()).hexdigest()

            if es_nueva_sin_fuente(p, con_fuente, sha, inventario, pedir):
                fallos.append("foto nueva SIN URL de fuente: %s" % p)
    paginas = html_cambiados if html_cambiados is not None else []
    for p in paginas:
        f = os.path.join(a.dist, p.lstrip("/"))
        if not os.path.exists(f):
            continue
        h = open(f, encoding="utf8", errors="ignore").read()
        for img in set(re.findall(r'(/media/[^"\s?#]+?)(?:-480w|-828w|-1200w|-card)?\.webp', h)):
            if img + ".webp" in IA:
                fallos.append("%s usa foto marcada como IA: %s.webp" % (p, img))
    print("fotos marcadas IA en src:", len(IA), "| fotos con fuente:", len(con_fuente), "| páginas revisadas:", len(paginas))
    for x in fallos[:200]:
        print("FALLO", x)
    print("RESULTADO:", "OK" if not fallos else "%d FALLOS (no se publica)" % len(fallos))
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
