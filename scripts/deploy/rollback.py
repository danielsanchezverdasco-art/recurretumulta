#!/usr/bin/env python3
"""Vuelta atrás: vuelve a publicar un deploy anterior (el --vivo que apuntaste antes de publicar).
Uso:  python3 scripts/deploy/rollback.py --a <ID_ANTERIOR> --desde <ID_VIVO_ACTUAL> [--go]
Después: purgar.py y avisar en el tablón."""
import os, sys, time, argparse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *
ap = argparse.ArgumentParser(); ap.add_argument("--a", required=True); ap.add_argument("--desde", required=True); ap.add_argument("--go", action="store_true")
a = ap.parse_args()
cur = live_id(); print("vivo ahora", cur)
if cur != a.desde: sys.exit("ABORT: el vivo no es --desde; alguien ha publicado entretanto. Pregunta antes de tocar nada.")
d = api("GET", f"/deploys/{a.a}"); print("destino", a.a, d["state"], d.get("title"))
if d["state"] != "ready": sys.exit("ABORT: destino no 'ready'")
if not a.go: print("OK. Repite con --go para volver a", a.a); sys.exit(0)
api("POST", f"/sites/{SITE}/deploys/{a.a}/restore", b"{}"); time.sleep(5); print("vivo ahora", live_id())
