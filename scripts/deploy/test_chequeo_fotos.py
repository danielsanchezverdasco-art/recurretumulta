#!/usr/bin/env python3
"""UNITARIO del gate de fotos. No abre red, no inventa créditos y no mira nombres parecidos."""
import sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from chequeo_fotos import motivo_foto_nueva

FOTO = "/media/ejemplo-modelo.webp"
ASOC = {"/media/ejemplo-modelo.webp"}
IA = {"/media/ejemplo-ia.webp"}


def test_sin_url_pero_con_asociacion_no_bloquea():
    assert motivo_foto_nueva(FOTO, True, ASOC, set()) is None


def test_url_no_basta_si_no_hay_asociacion():
    assert motivo_foto_nueva(FOTO, True, set(), set()) == "sin-prueba-modelo"


def test_sin_uso_no_bloquea_ni_se_trata_como_modelo_incorrecto():
    assert motivo_foto_nueva(FOTO, False, set(), set()) == "sin-uso"


def test_el_nombre_parecido_no_es_la_asociacion():
    assert motivo_foto_nueva(FOTO, True, {"/media/ejemplo-modelo-2.webp"}, set()) == "sin-prueba-modelo"


def test_ia_referenciada_sigue_bloqueada_aunque_exista_asociacion():
    assert motivo_foto_nueva("/media/ejemplo-ia.webp", True, {"/media/ejemplo-ia.webp"}, IA) == "ia"


def test_ia_sin_uso_no_se_borra_por_este_motivo():
    assert motivo_foto_nueva("/media/ejemplo-ia.webp", False, set(), IA) == "sin-uso"


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
