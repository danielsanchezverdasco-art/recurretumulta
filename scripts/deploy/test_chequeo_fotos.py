#!/usr/bin/env python3
"""UNITARIO del gate de fotos. No abre red, no inventa créditos y no mira nombres parecidos."""
import os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from chequeo_fotos import motivo_foto_nueva

FOTO = "/media/ejemplo-modelo.webp"
IA = {"/media/ejemplo-ia.webp"}


def test_la_nota_visual_si_levanta_el_bloqueo():
    assert motivo_foto_nueva(FOTO, True, False, "visual", set()) is None


def test_la_asociacion_de_campo_no_es_validacion_visual():
    assert motivo_foto_nueva(FOTO, True, False, "solo-asociacion", set()) == "solo-asociacion"


def test_sin_prueba_visual_sigue_bloqueada_y_no_por_derechos():
    assert motivo_foto_nueva(FOTO, True, False, None, set()) == "sin-validacion-visual"


def test_la_plantilla_dinamica_bloquea_aunque_no_haya_mencion_literal():
    assert motivo_foto_nueva(FOTO, False, True, None, set()) == "uso-potencial"


def test_sin_mencion_ni_plantilla_no_bloquea():
    assert motivo_foto_nueva(FOTO, False, False, None, set()) is None


def test_el_nombre_parecido_no_es_prueba():
    assert motivo_foto_nueva("/media/ejemplo-modelo-hero.webp", True, False, None, set()) == "sin-validacion-visual"


def test_ia_referenciada_sigue_bloqueada():
    assert motivo_foto_nueva("/media/ejemplo-ia.webp", True, False, "visual", IA) == "ia"


def test_ia_sin_uso_no_se_borra():
    assert motivo_foto_nueva("/media/ejemplo-ia.webp", False, False, None, IA) is None


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
