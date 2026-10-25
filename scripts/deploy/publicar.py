#!/usr/bin/env python3
"""Paso 6. Publica un borrador SOLO si: está 'ready' y el vivo sigue siendo el que usaste de base.
Uso:  python3 scripts/deploy/publicar.py --draft <ID_BORRADOR> --vivo <ID_VIVO_BASE>        (comprueba, no publica)
      python3 scripts/deploy/publicar.py --draft <ID_BORRADOR> --vivo <ID_VIVO_BASE> --go   (publica)
Apunta el --vivo: es tu ROLLBACK."""
import os, sys, time, argparse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *
ap = argparse.ArgumentParser(); ap.add_argument("--draft", required=True); ap.add_argument("--vivo", required=True); ap.add_argument("--go", action="store_true")
a = ap.parse_args()
d = api("GET", f"/deploys/{a.draft}"); print("borrador", a.draft, "estado", d["state"], d.get("deploy_ssl_url"))
if d["state"] != "ready": sys.exit("ABORT: el borrador no está 'ready'")
cur = live_id(); print("vivo ahora", cur)
if cur != a.vivo: sys.exit(f"ABORT: el vivo cambió ({cur} != {a.vivo}). NO publico: rehaz el borrador sobre el vivo nuevo.")
if not a.go: print("Comprobación OK. Para publicar repite con --go. Rollback =", a.vivo); sys.exit(0)
r = api("POST", f"/sites/{SITE}/deploys/{a.draft}/restore", b"{}"); print("restore", r.get("state"))
time.sleep(5); now = live_id(); print("vivo ahora", now, "| ROLLBACK =", a.vivo)
sys.exit(0 if now == a.draft else 1)
