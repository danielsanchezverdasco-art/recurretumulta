#!/usr/bin/env python3
"""Pruebas locales del plan de publicación. No abre red y no necesita token."""
import hashlib, os, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from plan_conservacion import PlanError, armar_plan, cuerpo_deploy, via_publicacion


def sha(path):
    h = hashlib.sha1()
    with open(path, "rb") as f:
        h.update(f.read())
    return h.hexdigest()


def write(dirpath, rel, text):
    p = os.path.join(dirpath, rel.lstrip("/"))
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(text)
    return "/" + rel.lstrip("/"), p


def test_via_y_cuerpo():
    assert via_publicacion(False) == "directo"
    assert via_publicacion(True) == "borrador"
    body = cuerpo_deploy({"/index.html": "a" * 40}, True)
    assert body["draft"] is False and body["files"]["/index.html"] == "a" * 40
    old = cuerpo_deploy({"/index.html": "b" * 40}, False)
    assert old["draft"] is True
    try:
        cuerpo_deploy({}, True)
        raise SystemExit("un plan vacío no debe colar")
    except PlanError as e:
        assert "vacío" in str(e)


def test_conservacion(tmp):
    vivo_html = "pagina viva\n"
    dist_html = "pagina nueva\n"
    _, pv = write(tmp, "vivo/index.html", vivo_html)
    _, pd = write(tmp, "dist/index.html", dist_html)
    _, pr = write(tmp, "dist/_redirects", "/vieja /nueva 301!\n")
    live = {"/index.html": sha(pv), "/_redirects": sha(pr), "/media/foto.webp": "f" * 40, "/solo-vivo.txt": "e" * 40}
    files = {"/index.html": pd, "/_redirects": pr}
    plan = armar_plan(files, live, open(pr, encoding="utf-8").read(), [], [])
    assert plan["gone"] == []
    assert "/solo-vivo.txt" in plan["hs"] and plan["hs"]["/solo-vivo.txt"] == "e" * 40
    assert plan["added"] == 2
    assert plan["redirects_note"] == "idéntico"
    # una foto local distinta no pisa la de vivo
    _, foto = write(tmp, "dist/media/foto.webp", "otra")
    files2 = dict(files)
    files2["/media/foto.webp"] = foto
    plan2 = armar_plan(files2, live, open(pr, encoding="utf-8").read(), [], [])
    assert plan2["prot"] == 1 and plan2["hs"]["/media/foto.webp"] == "f" * 40
    plan3 = armar_plan(files2, live, open(pr, encoding="utf-8").read(), ["/media/foto.webp"], [])
    assert plan3["prot"] == 0 and plan3["hs"]["/media/foto.webp"] == sha(foto)


def test_abortan(tmp):
    _, pd = write(tmp, "dist/index.html", "x")
    _, pr = write(tmp, "dist/_redirects", "/queda /nueva 301\n")
    live = {"/index.html": sha(pd), "/_redirects": "0" * 40, "/secreto.txt": "a" * 40}
    try:
        armar_plan({"/index.html": pd, "/_redirects": pr}, live, "/queda /nueva 301\n/perdida /x 301\n", [], [])
        raise SystemExit("debía abortar por regla perdida")
    except PlanError as e:
        assert "pierde" in str(e)
    kept = armar_plan({"/index.html": pd}, {"/index.html": sha(pd), "/falta.txt": "c" * 40}, None, [], [])
    assert kept["hs"]["/falta.txt"] == "c" * 40 and kept["gone"] == [] and kept["added"] == 1
    _, nueva = write(tmp, "dist/nueva/index.html", "tapada")
    _, redir = write(tmp, "dist/_redirects", "/nueva /destino 301!\n")
    live301 = {"/_redirects": sha(redir)}
    plan301 = armar_plan({"/nueva/index.html": nueva, "/_redirects": redir}, live301, "/nueva /destino 301!\n", [], [])
    assert plan301["excl"] == 1 and "/nueva/index.html" not in plan301["hs"]
    # sin copia verificada de _redirects no se sigue
    try:
        armar_plan({"/_redirects": pr}, {"/_redirects": sha(pr)}, None, [], [])
        raise SystemExit("debía exigir la copia de _redirects")
    except PlanError as e:
        assert "verificada" in str(e)


def test_el_codigo_directo_no_restaura():
    mk = open(os.path.join(HERE, "mkdraft.py"), encoding="utf-8").read()
    pub = open(os.path.join(HERE, "publicar.py"), encoding="utf-8").read()
    assert "/restore" not in mk
    assert "cuerpo_deploy" in mk and "--directo" in mk
    assert "restore" in pub  # la vía antigua sigue en scripts/deploy/publicar.py
    kit = open(os.path.join(HERE, "..", "..", "tools", "publicar", "publicar.py"), encoding="utf-8").read()
    assert "via_publicacion" in kit and "--con-borrador" in kit and "--directo" in kit
    assert "build-commit" in kit


def main():
    test_via_y_cuerpo()
    with tempfile.TemporaryDirectory() as tmp:
        test_conservacion(tmp)
        test_abortan(tmp)
    test_el_codigo_directo_no_restaura()
    print("OK plan_conservacion: directa draft false, borrador intacto, 0 bajas, fotos y reglas")


if __name__ == "__main__":
    main()
