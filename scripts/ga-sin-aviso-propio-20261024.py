#!/usr/bin/env python3
"""GA sin el aviso de cookies propio (24/10/2026). Uso: python3 scripts/ga-sin-aviso-propio-20261024.py [dist]

Al retirar el aviso propio, nadie nuevo guarda rtm-cookie-consent=accepted y el loader
de GA no se cargaba nunca. Se quita esa condición del loader en el HTML ya
prerenderizado: GA se carga con Consent Mode v2 (denegado por defecto) y el CMP
certificado de Google actualiza el consentimiento. Idempotente.
"""
import os
import sys

RAIZ = sys.argv[1] if len(sys.argv) > 1 else "dist"
VIEJO = "        try { if (localStorage.getItem('rtm-cookie-consent') !== 'accepted') return; } catch (e) { return; }\n"
n = 0
for d, _, fs in os.walk(RAIZ):
    for f in fs:
        if f.endswith(".html"):
            r = os.path.join(d, f)
            h = open(r, encoding="utf-8").read()
            if VIEJO in h:
                open(r, "w", encoding="utf-8").write(h.replace(VIEJO, "", 1))
                n += 1
print({"html_cambiados": n})
