#!/usr/bin/env python3
"""Postprocesado de velocidad (24/10/2026) sobre el HTML ya prerenderizado.

Uso: python3 scripts/velocidad-lcp-20261024.py [carpeta_dist]   (por defecto: dist)

Es idempotente (se puede pasar varias veces) y no toca texto, títulos, canonical,
robots ni AdSense. Por cada index.html:
  1. Quita el splash de entrada horneado (div.rtm-splash): fijo, blanco y a pantalla
     completa, tapaba el contenido estático hasta que cargaba el JS.
  2. Quita la clase rtm-page-enter del contenedor estático (fundido desde opacity 0:
     Chrome no contaba el H1/hero como LCP en el primer pintado).
  3. Quita la precarga de la imagen hero-jungla en las páginas que no la usan
     (descargaba ~146 KB con prioridad alta en fichas y posts).
  4. Actualiza el listener global de imágenes rotas: si falla una variante
     -480w/-828w, reintenta con la imagen base antes de poner la imagen OG.
"""
import os
import re
import sys

RAIZ = sys.argv[1] if len(sys.argv) > 1 else "dist"

RE_SPLASH = re.compile(
    r'<div class="rtm-splash[^"]*" aria-hidden="true">.*?<div class="rtm-splash-bar"><span></span></div></div>',
    re.S,
)
RE_PRELOAD = re.compile(r'<link\s+rel="preload"\s+as="image"[^>]*hero-jungla-selva[^>]*>\s*', re.S)
LISTENER_VIEJO = (
    'if (s.indexOf("/media/") < 0 || s.indexOf("/media/og-") >= 0 || t.dataset.fb === "og") return;\n'
    '      t.removeAttribute("srcset");'
)
LISTENER_NUEVO = (
    'if (s.indexOf("/media/") < 0 || s.indexOf("/media/og-") >= 0 || t.dataset.fb === "og") return;\n'
    '      if (!t.dataset.fbVar && t.getAttribute("srcset") && /-(480|828)w\\.webp/.test(t.currentSrc || "")) {\n'
    '        t.dataset.fbVar = "g"; t.removeAttribute("srcset"); t.removeAttribute("sizes"); t.src = s; return;\n'
    '      }\n'
    '      t.removeAttribute("srcset");'
)

cont = {"ficheros": 0, "cambiados": 0, "splash": 0, "fundido": 0, "preload": 0, "listener": 0}
for d, _, fs in os.walk(RAIZ):
    for f in fs:
        if not f.endswith(".html"):
            continue
        ruta = os.path.join(d, f)
        with open(ruta, encoding="utf-8") as fh:
            h = fh.read()
        cont["ficheros"] += 1
        orig = h
        h, n = RE_SPLASH.subn("", h)
        cont["splash"] += n
        if '<div class="rtm-page-enter relative">' in h:
            h = h.replace('<div class="rtm-page-enter relative">', '<div class="relative">', 1)
            cont["fundido"] += 1
        sin_preload, n = RE_PRELOAD.subn("", h)
        if n and "hero-jungla-selva" not in sin_preload:
            h = sin_preload
            cont["preload"] += 1
        if LISTENER_VIEJO in h and "fbVar" not in h:
            h = h.replace(LISTENER_VIEJO, LISTENER_NUEVO, 1)
            cont["listener"] += 1
        if h != orig:
            with open(ruta, "w", encoding="utf-8") as fh:
                fh.write(h)
            cont["cambiados"] += 1
print(cont)
