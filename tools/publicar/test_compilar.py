#!/usr/bin/env python3
"""Fixture del sello. No toca el dist real ni el build-commit del repo."""
import os, shutil, subprocess, sys, tempfile, textwrap

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
import compilar


def run(cmd, cwd):
    subprocess.run(cmd, cwd=cwd, check=True, capture_output=True)


def repo_minimo():
    tmp = tempfile.mkdtemp()
    run(["git", "init"], tmp)
    run(["git", "config", "user.email", "test@example.com"], tmp)
    run(["git", "config", "user.name", "test"], tmp)
    open(os.path.join(tmp, "leeme.txt"), "w").write("base\n")
    run(["git", "add", "leeme.txt"], tmp)
    run(["git", "commit", "-m", "base"], tmp)
    return tmp


def test_exito_y_comprobacion():
    tmp = repo_minimo()
    try:
        cmd = ["python3", "-c", "import os; os.makedirs('dist', exist_ok=True); open('dist/a.txt','w').write('ok')"]
        assert compilar.compilar(tmp, cmd, conservar=False) == 0
        assert open(os.path.join(tmp, ".deploy-work", "build-commit")).read().strip() == compilar.cabeza(tmp)
        assert compilar.comprobar_sello(tmp, os.path.join(tmp, "dist")) == []
    finally:
        shutil.rmtree(tmp)


def test_build_fallido_no_sella():
    tmp = repo_minimo()
    try:
        assert compilar.compilar(tmp, ["python3", "-c", "import sys; sys.exit(3)"], conservar=False) == 3
        assert not os.path.exists(os.path.join(tmp, ".deploy-work", "build-commit"))
    finally:
        shutil.rmtree(tmp)


def test_head_cambiado_no_sella():
    tmp = repo_minimo()
    try:
        script = textwrap.dedent("""
        import os, subprocess
        os.makedirs("dist", exist_ok=True)
        open("dist/a.txt","w").write("ok")
        open("extra.txt","w").write("x")
        subprocess.check_call(["git","add","extra.txt"])
        subprocess.check_call(["git","commit","-m","cambia"])
        """)
        assert compilar.compilar(tmp, ["python3", "-c", script], conservar=False) == 1
        assert not os.path.exists(os.path.join(tmp, ".deploy-work", "build-commit"))
    finally:
        shutil.rmtree(tmp)


def test_arbol_cambiado_no_sella():
    tmp = repo_minimo()
    try:
        open(os.path.join(tmp, "package.json"), "w").write("{}\n")
        run(["git", "add", "package.json"], tmp)
        run(["git", "commit", "-m", "pkg"], tmp)
        script = "import os; os.makedirs('dist', exist_ok=True); open('dist/a.txt','w').write('ok'); open('package.json','w').write('{\"a\":1}\\n')"
        assert compilar.compilar(tmp, ["python3", "-c", script], conservar=False) == 1
        assert not os.path.exists(os.path.join(tmp, ".deploy-work", "build-commit"))
    finally:
        shutil.rmtree(tmp)


def test_sello_manual_rechazado():
    tmp = repo_minimo()
    try:
        os.makedirs(os.path.join(tmp, "dist"))
        open(os.path.join(tmp, "dist", "a.txt"), "w").write("ok")
        os.makedirs(os.path.join(tmp, ".deploy-work"))
        open(os.path.join(tmp, ".deploy-work", "build-commit"), "w").write(compilar.cabeza(tmp) + "\n")
        fallos = compilar.comprobar_sello(tmp, os.path.join(tmp, "dist"))
        assert any("no hay sello" in f for f in fallos)
    finally:
        shutil.rmtree(tmp)


def test_dist_alterado_rechazado():
    tmp = repo_minimo()
    try:
        cmd = ["python3", "-c", "import os; os.makedirs('dist', exist_ok=True); open('dist/a.txt','w').write('ok')"]
        assert compilar.compilar(tmp, cmd, conservar=False) == 0
        open(os.path.join(tmp, "dist", "a.txt"), "w").write("cambiado")
        fallos = compilar.comprobar_sello(tmp, os.path.join(tmp, "dist"))
        assert any("no coincide" in f for f in fallos)
    finally:
        shutil.rmtree(tmp)


def main():
    test_exito_y_comprobacion()
    test_build_fallido_no_sella()
    test_head_cambiado_no_sella()
    test_arbol_cambiado_no_sella()
    test_sello_manual_rechazado()
    test_dist_alterado_rechazado()
    print("OK compilar: sello solo si el build termina con el mismo HEAD y el mismo dist")


if __name__ == "__main__":
    main()
