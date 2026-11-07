#!/usr/bin/env python3
"""La reutilización exige el mismo dist y otro HEAD. No reescribe el sello."""
import os, sys, tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
from compilar import ESCRITOR, clasificar_cambios, juzgar_reutilizacion, manifiesto_dist

SELLO = "2109346da27c52899fb56935823585a0016af7be"
VALIDACION = "a6f76dc4a4ee13c77e9fb48733f0c47e71099946"


def base(**k):
    d = dict(
        head_sello=SELLO, head_validacion=VALIDACION, head_prov=SELLO,
        escritor=ESCRITOR, sucio=[], man_sha="abc", man_esperado="abc",
        dist_sha="abc", dist_esperado="abc", n=2, n_esperado=2, total=10, total_esperado=10,
    )
    d.update(k)
    return juzgar_reutilizacion(**d)


def test_reutilizacion_integra():
    assert base() == []


def test_rechaza_si_cambia_una_entrada_del_dist():
    a = tempfile.mkdtemp()
    b = tempfile.mkdtemp()
    for raiz, nombre, texto in ((a, "uno.txt", "igual"), (b, "uno.txt", "igual"), (a, "dos.txt", "foto"), (b, "dos.txt", "foto-cambiadas")):
        open(os.path.join(raiz, nombre), "w", encoding="utf-8").write(texto)
    sha_a, n_a, total_a, _ = manifiesto_dist(a)
    sha_b, n_b, total_b, _ = manifiesto_dist(b)
    assert sha_a != sha_b
    fallos = base(dist_sha=sha_b, dist_esperado=sha_a, n=n_b, n_esperado=n_a, total=total_b, total_esperado=total_a)
    assert any("dist no coincide" in f for f in fallos)


def test_rechaza_si_el_build_commit_se_reescribe_con_el_head_nuevo():
    fallos = base(head_sello=VALIDACION, head_prov=VALIDACION)
    assert any("mismo que el sello" in f for f in fallos)


def test_rechaza_si_provenance_no_coincide_con_build_commit():
    fallos = base(head_prov="otro")
    assert any("no coinciden" in f for f in fallos)


def test_rechaza_src_config_dependencias_y_build():
    for ruta in (
        "src/pages/Index.tsx",
        "public/media/logo.webp",
        "index.html",
        "package.json",
        "package-lock.json",
        "vite.config.ts",
        "tsconfig.json",
        "scripts/prerender.mjs",
        "scripts/routes.json",
        "netlify.toml",
    ):
        fallos = clasificar_cambios([ruta])
        assert fallos, ruta
        assert "entrada de build" in fallos[0]


def test_acepta_solo_controles_y_documentacion():
    assert clasificar_cambios([
        "scripts/deploy/chequeo_fotos.py",
        "tools/publicar/compilar.py",
        "docs/inventario/revision-visual-pendiente.json",
    ]) == []
    assert clasificar_cambios(["docs/otra-cosa.md"])


def test_rechaza_un_fichero_no_justificado():
    fallos = clasificar_cambios(["scripts/deploy/otro.py"])
    assert any("no justificado" in f for f in fallos)


def test_admite_el_componedor_sin_abrir_la_carpeta():
    assert clasificar_cambios([
        "tools/publicar/componer_hardlinks.py",
        "tools/publicar/test_componer_hardlinks.py",
    ]) == []
    for ruta in ("tools/publicar/otro.py", "tools/publicar/", "scripts/componer_hardlinks.py"):
        fallos = clasificar_cambios([ruta])
        assert fallos, ruta
        assert "no justificado" in fallos[0]


def test_rechaza_arbol_vigilado_y_manifiesto_alterado():
    assert any("árbol vigilado" in f for f in base(sucio=["vite.config.ts"]))
    assert any("manifiesto sellado fue alterado" in f for f in base(man_sha="tocado"))


if __name__ == "__main__":
    fallos = 0
    for nombre, fn in list(globals().items()):
        if not nombre.startswith("test_") or not callable(fn):
            continue
        try:
            fn()
            print("ok", nombre)
        except Exception as e:
            fallos += 1
            print("FALLO", nombre, type(e).__name__, e)
    print("RESULTADO:", "OK" if not fallos else "%d FALLOS" % fallos)
    sys.exit(1 if fallos else 0)
