#!/usr/bin/env python3
"""Paso 7. Vacía TODA la caché de Cloudflare de recurretumulta.online.
Necesita CF_API_TOKEN (o CLOUDFLARE_API_TOKEN) y CF_ZONE_ID en el entorno.
Uso:  python3 scripts/deploy/purgar.py"""
import os, sys, json, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import need
tok = need("CF_API_TOKEN", "CLOUDFLARE_API_TOKEN"); zone = need("CF_ZONE_ID")
r = urllib.request.Request(f"https://api.cloudflare.com/client/v4/zones/{zone}/purge_cache", method="POST",
                           data=json.dumps({"purge_everything": True}).encode(),
                           headers={"Authorization": "Bearer " + tok, "Content-Type": "application/json"})
ok = json.load(urllib.request.urlopen(r, timeout=60)).get("success")
print("purga Cloudflare:", "OK" if ok else "FALLÓ"); sys.exit(0 if ok else 1)
