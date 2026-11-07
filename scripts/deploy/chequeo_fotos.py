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


def motivo_foto_nueva(ruta, referenciada, uso_potencial, prueba, marcadas_ia):
    """None si no bloquea. La URL de crédito y el parecido del nombre no deciden.

    'visual' es la única prueba previa que levanta el bloqueo.
    'solo-asociacion' es un campo o la primera imagen del artículo: no es
    validación visual y sigue bloqueando.
    'uso-potencial' es la plantilla real de la portada: bloquea hasta resolverla.
    'sin-validacion-visual' es una mención literal sin prueba visual previa.
    None, sin mención ni plantilla, no bloquea y no afirma que la foto no se vea.
    """
    if ruta in marcadas_ia and (referenciada or uso_potencial):
        return "ia"
    if prueba == "visual":
        return None
    if not referenciada and not uso_potencial:
        return None
    if prueba == "solo-asociacion":
        return "solo-asociacion"
    if uso_potencial and not referenciada:
        return "uso-potencial"
    return "sin-validacion-visual"


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
    prueba = {}
    if os.path.exists(ev_p):
        for row in json.load(open(ev_p, encoding="utf8")).get("entradas", []):
            ruta = row.get("ruta")
            if not ruta or row.get("prueba") == "exacta":
                continue
            if row.get("prueba") == "nota-visual":
                prueba[ruta] = "visual"
            elif ruta not in prueba:
                prueba[ruta] = "solo-asociacion"
    # La única plantilla que construye una ruta es la portada: /media/{fichaId}-oficial.webp
    # y solo con los fichaId del ranking. El comentario de motos/{id}-1.webp no es código.
    ranking = set(re.findall(r'fichaId:\s*"([^"]+)"', src))
    potenciales = {"/media/%s-oficial.webp" % i for i in ranking}
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
            motivo = motivo_foto_nueva(p, p in src, p in potenciales, prueba.get(p), IA)
            if motivo is None and p not in src and p not in potenciales:
                sin_uso += 1
            elif motivo == "ia":
                fallos.append("foto nueva marcada como IA: %s" % p)
            elif motivo == "solo-asociacion":
                fallos.append("foto nueva con solo asociacion de campo, sin validacion visual previa: %s" % p)
            elif motivo == "uso-potencial":
                fallos.append("foto nueva de uso potencial por plantilla, dependencia sin resolver: %s" % p)
            elif motivo == "sin-validacion-visual":
                fallos.append("foto nueva SIN validacion visual previa: %s" % p)
    paginas = html_cambiados if html_cambiados is not None else []
    for p in paginas:
        f = os.path.join(a.dist, p.lstrip("/"))
        if not os.path.exists(f):
            continue
        h = open(f, encoding="utf8", errors="ignore").read()
        for img in set(re.findall(r'(/media/[^"\s?#]+?)(?:-480w|-828w|-1200w|-card)?\.webp', h)):
            if img + ".webp" in IA:
                fallos.append("%s usa foto marcada como IA: %s.webp" % (p, img))
    print("fotos marcadas IA en src:", len(IA), "| pruebas visuales:", sum(1 for v in prueba.values() if v == "visual"), "| solo asociacion:", sum(1 for v in prueba.values() if v == "solo-asociacion"), "| sin mencion ni plantilla:", sin_uso, "| páginas revisadas:", len(paginas))
    for x in fallos[:200]:
        print("FALLO", x)
    print("RESULTADO:", "OK" if not fallos else "%d FALLOS (no se publica)" % len(fallos))
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
