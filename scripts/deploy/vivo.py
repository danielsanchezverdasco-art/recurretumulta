#!/usr/bin/env python3
"""Paso 1. Muestra el deploy EN VIVO (= tu rollback) y descarga su lista COMPLETA de ficheros.
Uso:  python3 scripts/deploy/vivo.py
Escribe .deploy-work/ficheros-<id>.json y .deploy-work/vivo_id. Comprueba además que
public/_redirects del repo es idéntico al _redirects en vivo (si no, PARA)."""
import os, sys, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *

lid = live_id()
fl = file_list(lid, refresh=True)
open(os.path.join(WORK, "vivo_id"), "w").write(lid)
print("EN VIVO (rollback):", lid, "| ficheros:", len(fl))
rep = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "public", "_redirects")
if os.path.exists(rep):
    ok = sha1_file(rep) == fl.get("/_redirects")
    print("public/_redirects == _redirects en vivo:", "SÍ" if ok else "NO  <-- PARA: avisa a Cosa/Daniel (main no tiene el _redirects publicado)")
    if not ok:
        sys.exit(2)
