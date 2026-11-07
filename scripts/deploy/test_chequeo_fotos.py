#!/usr/bin/env python3
"""UNITARIO del gate de fotos. Señales locales. No abre red y no inventa créditos."""
import os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from chequeo_fotos import es_nueva_sin_fuente, resolver_preexistente

FOTO = "/media/ejemplo-modelo.webp"
SHA = "a" * 40


def test_ausente_no_exime_y_no_pregunta():
    llamadas = []
    inventario = {"/media/otra.webp": SHA}
    assert resolver_preexistente(FOTO, SHA, inventario) == "rechazar"
    assert es_nueva_sin_fuente(FOTO, set(), SHA, inventario, lambda: llamadas.append(1) or True) is True
    assert llamadas == []


def test_mismo_sha_exime_sin_preguntar_y_sin_inventar_fuente():
    llamadas = []
    inventario = {FOTO: SHA}
    assert resolver_preexistente(FOTO, SHA, inventario) == "eximir"
    assert es_nueva_sin_fuente(FOTO, set(), SHA, inventario, lambda: llamadas.append(1) or False) is False
    assert llamadas == []


def test_sha_distinto_no_exime():
    inventario = {FOTO: "b" * 40}
    assert resolver_preexistente(FOTO, SHA, inventario) == "rechazar"
    assert es_nueva_sin_fuente(FOTO, set(), SHA, inventario, lambda: True) is True


def test_sin_inventario_pregunta_y_el_fallo_de_red_no_exime():
    llamadas = []

    def pedir():
        llamadas.append(1)
        raise OSError("ssl")

    assert resolver_preexistente(FOTO, SHA, None) == "preguntar"
    assert es_nueva_sin_fuente(FOTO, set(), SHA, None, pedir) is True
    assert llamadas == [1]


def test_bytes_iguales_por_pregunta_eximen_igual_que_el_sha():
    assert es_nueva_sin_fuente(FOTO, set(), SHA, None, lambda: True) is False
    assert es_nueva_sin_fuente(FOTO, set(), SHA, {FOTO: SHA}, lambda: False) is False


def test_con_url_no_falla_aunque_el_inventario_la_desconozca():
    llamadas = []
    assert es_nueva_sin_fuente(FOTO, {FOTO}, None, {}, lambda: llamadas.append(1)) is False
    assert llamadas == []


def test_nombre_parecido_no_cuenta_como_la_misma_foto():
    inventario = {"/media/ejemplo-modelo-2.webp": SHA}
    assert resolver_preexistente(FOTO, SHA, inventario) == "rechazar"


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
            print("FALLO", nombre, e)
    print("RESULTADO:", "OK" if not fallos else "%d FALLOS" % fallos)
    sys.exit(1 if fallos else 0)
