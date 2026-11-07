#!/usr/bin/env python3
"""Pruebas del certificado. No tocan dist/ ni las 164 partes."""
import hashlib, os, shutil, subprocess, sys, tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
import equivalencia_dist as eq


def manifiesto_de(dist):
    filas = []
    for dirpath, _, names in os.walk(dist):
        for name in sorted(names):
            p = os.path.join(dirpath, name)
            if os.path.islink(p):
                continue
            rel = os.path.relpath(p, dist).replace(os.sep, "/")
            filas.append((eq.sha256_fichero(p), os.path.getsize(p), rel))
    filas.sort(key=lambda r: r[2])
    texto = "".join("%s %s %s\n" % f for f in filas)
    return texto, filas


def test_manifiesto_positivo_y_negativos():
    tmp = tempfile.mkdtemp()
    try:
        dist = os.path.join(tmp, "dist")
        os.makedirs(os.path.join(dist, "assets"))
        open(os.path.join(dist, "index.html"), "w").write("<p>hola</p>")
        open(os.path.join(dist, "assets", "a.js"), "wb").write(b"asset")
        open(os.path.join(dist, "foto.webp"), "wb").write(b"foto-original")
        texto, filas = manifiesto_de(dist)
        assert eq.verificar_manifiesto(dist, filas) is None
        # una foto cambiada
        open(os.path.join(dist, "foto.webp"), "wb").write(b"foto-cambiada")
        assert "sha distinto" in eq.verificar_manifiesto(dist, filas)
        open(os.path.join(dist, "foto.webp"), "wb").write(b"foto-original")
        # un html cambiado
        open(os.path.join(dist, "index.html"), "w").write("<p>otro</p>")
        assert "sha distinto" in eq.verificar_manifiesto(dist, filas)
        open(os.path.join(dist, "index.html"), "w").write("<p>hola</p>")
        # un asset de mas
        open(os.path.join(dist, "assets", "b.js"), "wb").write(b"nuevo")
        assert "fichero de mas" in eq.verificar_manifiesto(dist, filas)
        os.remove(os.path.join(dist, "assets", "b.js"))
        os.remove(os.path.join(dist, "assets", "a.js"))
        assert eq.verificar_manifiesto(dist, filas).startswith("falta")
    finally:
        shutil.rmtree(tmp)


def test_diffs():
    assert eq.evaluar_diffs(list(eq.FUNCIONALES), [], set()) == []
    assert eq.evaluar_diffs(list(eq.FUNCIONALES), ["tools/publicar/equivalencia_dist.py"], set()) == []
    mal = eq.evaluar_diffs(list(eq.FUNCIONALES) + ["package.json"], [], set())
    assert mal and "package.json" in mal[0]
    mal = eq.evaluar_diffs(list(eq.FUNCIONALES), ["src/lib/blog-data.ts"], {"src/lib/blog-data.ts"})
    assert any("protegidos" in m for m in mal)
    mal = eq.evaluar_diffs(["src/pages/MotosFicha.tsx"], [], set())
    assert mal


def test_ast_real_y_mutacion():
    repo = os.path.abspath(os.path.join(AQUI, "..", ".."))
    assert eq.ast_igual(repo, eq.BUILD, eq.FUNCIONAL, "src/pages/MotosFicha.tsx")
    assert eq.ast_igual(repo, eq.BUILD, eq.FUNCIONAL, "src/pages/PatinetesFicha.tsx")
    base = subprocess.check_output(["git", "show", eq.BUILD + ":src/pages/MotosFicha.tsx"], cwd=repo)
    mal = base.replace(b"Foto oficial de la ", b"Foto inventada de la ", 1)
    assert mal != base
    tmp = tempfile.mkdtemp()
    try:
        a = os.path.join(tmp, "a.tsx")
        b = os.path.join(tmp, "b.tsx")
        open(a, "wb").write(base)
        open(b, "wb").write(mal)
        p = subprocess.run(["node", os.path.join(AQUI, "equiv-ast.mjs"), a, b], cwd=repo, capture_output=True, text=True)
        assert p.returncode != 0
    finally:
        shutil.rmtree(tmp)


def test_sin_certificado_no_pasa():
    tmp = tempfile.mkdtemp()
    try:
        os.makedirs(os.path.join(tmp, "tools", "publicar"))
        os.makedirs(os.path.join(tmp, ".deploy-work"))
        open(os.path.join(tmp, ".deploy-work", "build-commit"), "w").write(eq.BUILD + "\n")
        # repo falso: verificar_repo exige git; aqui solo la ausencia del json
        fallos = eq.verificar_repo(tmp, os.path.join(tmp, "dist"), os.path.join(tmp, "m.txt"))
        assert any("sin certificado" in f for f in fallos)
    finally:
        shutil.rmtree(tmp)


def test_publicar_no_reescribe_sello():
    txt = open(os.path.join(AQUI, "publicar.py"), encoding="utf-8").read()
    assert "verificar_repo" in txt
    assert "build-commit no se reescribe" in txt
    assert "stamp = head" not in txt


def main():
    test_manifiesto_positivo_y_negativos()
    test_diffs()
    test_ast_real_y_mutacion()
    test_sin_certificado_no_pasa()
    test_publicar_no_reescribe_sello()
    print("OK equivalencia: manifiesto, diffs, AST, sin certificado")


if __name__ == "__main__":
    main()
