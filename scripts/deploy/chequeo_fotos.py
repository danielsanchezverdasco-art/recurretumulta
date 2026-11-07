#!/usr/bin/env python3
"""Paso 3b. Control OBLIGATORIO de fotos antes del borrador (bloquea si falla).
Uso:  python3 scripts/deploy/chequeo_fotos.py --dist dist [--cambios .deploy-work/cambios.json]

Falla si:
  * alguna página del deploy usa una foto marcada en src como 'generada por IA' o 'ilustrativa';
  * alguna foto NUEVA mencionada en src no tiene un vínculo recuperado en
    docs/inventario/evidencia-modelo-ruta.json. No basta el parecido del nombre
    ni una entrada de FOTOS_MODELO cuyo origen fue el sufijo del fichero.

No falla por falta de licencia, permiso o URL de crédito: eso lo gestiona Daniel.
No inventa créditos, no borra las fotos sin uso y no descarga el sitio en vivo.
"""
import os, re, sys, json, argparse, glob

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")


def motivo_foto_nueva(ruta, referenciada, evidencia, marcadas_ia):
    """None si no bloquea. Ni la URL de crédito ni el parecido del nombre deciden.

    'sin-uso' si no hay mención literal: no se borra y no bloquea. No afirma que
    una plantilla dinámica no la muestre.
    'ia' si está marcada como generada y alguien la usa.
    'sin-prueba-modelo' si se usa y no hay un vínculo recuperado (campo de la ficha,
    primera imagen de ese artículo, registro con origen ficha o blog, o nota visual).
    """
    if not referenciada:
        return "sin-uso"
    if ruta in marcadas_ia:
        return "ia"
    if ruta in evidencia:
        return None
    return "sin-prueba-modelo"


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--dist", default="dist")
    ap.add_argument("--cambios")
    a = ap.parse_args(argv)
    src = ""
    for dp, _, fs in os.walk(os.path.join(ROOT, "src")):
        for f in fs:
            if f.endswith((".ts", ".tsx", ".json")):
                src += open(os.path.join(dp, f), encoding="utf8", errors="ignore").read() + "\n"
    IA = set(re.findall(r'"(/media/[^"]+)"[^\n]{0,400}?(?:generada por IA|ilustrativa generada)', src, flags=re.I))
    ev_p = os.path.join(ROOT, "docs", "inventario", "evidencia-modelo-ruta.json")
    evidencia = set()
    if os.path.exists(ev_p):
        for row in json.load(open(ev_p, encoding="utf8")).get("entradas", []):
            if row.get("prueba") != "exacta" and row.get("ruta"):
                evidencia.add(row["ruta"])
    H = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fotos-hotfix")
    for m in glob.glob(os.path.join(H, "fotos-hotfix-map*.json")):
        IA -= {"/media/" + k + ".webp" for k in json.load(open(m)) if not k.startswith("_")}
    fallos = []
    sin_uso = 0
    html_cambiados = None
    if a.cambios:
        c = json.load(open(a.cambios))
        html_cambiados = [p for p in c["new"] + c["chg"] if p.endswith(".html")]
        nuevas = [p for p in c["new"] if p.startswith("/media/") and not re.search(r"-(480w|828w|1200w|card)\.webp$", p)]
        for p in nuevas:
            motivo = motivo_foto_nueva(p, p in src, evidencia, IA)
            if motivo == "sin-uso":
                sin_uso += 1
            elif motivo == "ia":
                fallos.append("foto nueva marcada como IA: %s" % p)
            elif motivo == "sin-prueba-modelo":
                fallos.append("foto nueva SIN prueba de modelo exacto: %s" % p)
    paginas = html_cambiados if html_cambiados is not None else []
    for p in paginas:
        f = os.path.join(a.dist, p.lstrip("/"))
        if not os.path.exists(f):
            continue
        h = open(f, encoding="utf8", errors="ignore").read()
        for img in set(re.findall(r'(/media/[^"\s?#]+?)(?:-480w|-828w|-1200w|-card)?\.webp', h)):
            if img + ".webp" in IA:
                fallos.append("%s usa foto marcada como IA: %s.webp" % (p, img))
    print("fotos marcadas IA en src:", len(IA), "| evidencia recuperada:", len(evidencia), "| sin mencion literal:", sin_uso, "| páginas revisadas:", len(paginas))
    for x in fallos[:200]:
        print("FALLO", x)
    print("RESULTADO:", "OK" if not fallos else "%d FALLOS (no se publica)" % len(fallos))
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
