#!/usr/bin/env python3
"""La composición enlaza el base y solo escribe los bytes del overlay."""
import os, sys, tarfile, tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
from componer_hardlinks import Rechazo, bloques_de_directorio, cabe, componer, ruta_segura


def arbol(raiz):
    os.makedirs(os.path.join(raiz, "js"))
    os.makedirs(os.path.join(raiz, "blog", "nota"))
    open(os.path.join(raiz, "js", "rtm-consent.js"), "w", encoding="utf-8").write("viejo")
    open(os.path.join(raiz, "blog", "nota", "index.html"), "w", encoding="utf-8").write("igual")
    open(os.path.join(raiz, "aviso.txt"), "w", encoding="utf-8").write("queda")


def tar_de(dir_tar, nombre, texto):
    path = os.path.join(dir_tar, nombre)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8").write(texto)
    tar_path = os.path.join(dir_tar, "delta.tar")
    with tarfile.open(tar_path, "w") as tar:
        tar.add(path, arcname=nombre)
    return tar_path


def test_cabe_con_la_reserva_de_un_gb():
    assert cabe(1058328576, 50319360, 1000000000)
    assert not cabe(1058328576, 50319360, 1073741824)
    assert not cabe(1058328576, 0, 1073741824)


def test_la_ruta_del_overlay_no_escapa():
    assert ruta_segura("js/rtm-consent.js") == "js/rtm-consent.js"
    assert ruta_segura("../js/rtm-consent.js") is None
    assert ruta_segura("/js/rtm-consent.js") is None
    assert ruta_segura("js/../../etc/passwd") is None


def test_compone_por_hardlink_sin_tocar_el_base():
    with tempfile.TemporaryDirectory() as tmp:
        base = os.path.join(tmp, "base")
        os.mkdir(base)
        arbol(base)
        antes = os.stat(os.path.join(base, "js", "rtm-consent.js"))
        igual = os.stat(os.path.join(base, "blog", "nota", "index.html"))
        tar = tar_de(tmp, "js/rtm-consent.js", "nuevo-consent")
        dest = os.path.join(tmp, "stage")
        componer(base, tar, dest, reserva=0)
        nuevo = os.stat(os.path.join(dest, "blog", "nota", "index.html"))
        assert (nuevo.st_dev, nuevo.st_ino) == (igual.st_dev, igual.st_ino)
        assert os.stat(os.path.join(base, "blog", "nota", "index.html")).st_nlink == igual.st_nlink + 1
        overlay = os.stat(os.path.join(dest, "js", "rtm-consent.js"))
        base_overlay = os.stat(os.path.join(base, "js", "rtm-consent.js"))
        assert overlay.st_ino != antes.st_ino
        assert (base_overlay.st_ino, base_overlay.st_size, base_overlay.st_mtime_ns) == (
            antes.st_ino, antes.st_size, antes.st_mtime_ns,
        )
        assert open(os.path.join(base, "js", "rtm-consent.js"), encoding="utf-8").read() == "viejo"
        assert open(os.path.join(dest, "js", "rtm-consent.js"), encoding="utf-8").read() == "nuevo-consent"
        assert open(os.path.join(dest, "aviso.txt"), encoding="utf-8").read() == "queda"


def test_no_crea_destino_si_no_cabe():
    with tempfile.TemporaryDirectory() as tmp:
        base = os.path.join(tmp, "base")
        os.mkdir(base)
        arbol(base)
        tar = tar_de(tmp, "js/rtm-consent.js", "nuevo")
        dest = os.path.join(tmp, "stage")
        try:
            componer(base, tar, dest, reserva=10 ** 18)
        except Rechazo as e:
            assert e.codigo == 3
        else:
            raise AssertionError("tenía que rechazar")
        assert not os.path.lexists(dest)
        assert open(os.path.join(base, "js", "rtm-consent.js"), encoding="utf-8").read() == "viejo"


def test_medir_no_crea_destino():
    with tempfile.TemporaryDirectory() as tmp:
        base = os.path.join(tmp, "base")
        os.mkdir(base)
        arbol(base)
        tar = tar_de(tmp, "js/rtm-consent.js", "nuevo")
        dest = os.path.join(tmp, "stage")
        componer(base, tar, dest, reserva=0, medir_solo=True)
        assert not os.path.lexists(dest)
        assert os.stat(os.path.join(base, "aviso.txt")).st_nlink == 1


def test_rechaza_tar_que_escapa():
    with tempfile.TemporaryDirectory() as tmp:
        base = os.path.join(tmp, "base")
        os.mkdir(base)
        arbol(base)
        tar_path = os.path.join(tmp, "malo.tar")
        with tarfile.open(tar_path, "w") as tar:
            origen = os.path.join(tmp, "x.txt")
            open(origen, "w", encoding="utf-8").write("no")
            tar.add(origen, arcname="../fuera.txt")
        dest = os.path.join(tmp, "stage")
        try:
            componer(base, tar_path, dest, reserva=0)
        except Rechazo as e:
            assert e.codigo == 6
        else:
            raise AssertionError("tenía que rechazar")
        assert not os.path.lexists(dest)
        assert not os.path.lexists(os.path.join(tmp, "fuera.txt"))


def test_el_directorio_grande_presupuesta_mas_de_un_bloque():
    nombres = ["f%d" % i for i in range(400)]
    assert bloques_de_directorio(nombres, 4096) > 1


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
