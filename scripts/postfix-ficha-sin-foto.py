#!/usr/bin/env python3
"""Ronda 14:06 (26/10/2026): fichas indexables cuyo Product/Car/Vehicle se ha quedado sin "image"
(porque la foto era inexistente o rechazada). Si la propia ficha ya muestra una foto real del
mismo modelo (fichero existente, no rechazado y que no sea de la familia 1920x1280 generada),
esa foto pasa a ser la image del schema. Si no hay ninguna: noindex,follow y fuera del sitemap
hasta tener foto real (misma regla que postfix-foto-pendiente.py).
Escribe con temporal + os.replace. Uso: postfix-ficha-sin-foto.py dist rechazadas.txt [informe.json]"""
import os, re, sys, json
from PIL import Image
D, LISTA = sys.argv[1], sys.argv[2]
INF = sys.argv[3] if len(sys.argv) > 3 else None
R = set(l.strip() for l in open(LISTA) if l.strip())
HOST = "https://recurretumulta.online"
FICHA = re.compile(r'^/(coches|motos|patinetes|autocaravanas|campers|caravanas)/([^/]+)/$')
ROBOTS = re.compile(r'<meta\s+name="robots"\s+content="([^"]*)"\s*/?>', re.I)
NOI = '<meta name="robots" content="noindex,follow">'
LD = re.compile(r'(<script[^>]*type="application/ld\+json"[^>]*>)(.*?)(</script>)', re.S)
TIPOS = {"Product", "Car", "Vehicle", "Motorcycle", "MotorizedBicycle"}
def es_prod(o):
    t = o.get("@type"); t = t if isinstance(t, list) else [t]
    return any(x in TIPOS for x in t)
def prods(o):
    if isinstance(o, dict):
        if es_prod(o): yield o
        for v in o.values(): yield from prods(v)
    elif isinstance(o, list):
        for x in o: yield from prods(x)
def foto_real(s, slug):
    for m in re.findall(r'<img\b[^>]*\bsrc="(/media/[^"]+)"', s):
        if slug[:20] not in m or m in R or not os.path.isfile(D + m): continue
        try:
            if Image.open(D + m).size == (1920, 1280): continue
        except Exception: continue
        return m
    return None
inf = {"image_desde_pagina": {}, "noindex": []}
for root, _, files in os.walk(D):
    if "index.html" not in files: continue
    rel = "/" + os.path.relpath(root, D).replace(os.sep, "/") + "/"
    fm = FICHA.match(rel)
    if not fm: continue
    p = os.path.join(root, "index.html"); s = open(p, encoding="utf-8").read()
    rb = ROBOTS.search(s)
    if rb and "noindex" in rb.group(1).lower(): continue
    falta = False
    for a, body, c in LD.findall(s):
        try: j = json.loads(body)
        except Exception: continue
        if any(not pr.get("image") for pr in prods(j)): falta = True
    if not falta: continue
    f = foto_real(s, fm.group(2)); n = s
    if f:
        def put(m):
            a, body, c = m.group(1), m.group(2), m.group(3)
            try: j = json.loads(body)
            except Exception: return m.group(0)
            cambio = False
            for pr in prods(j):
                if not pr.get("image"): pr["image"] = HOST + f; cambio = True
            if not cambio: return m.group(0)
            sep = (",", ":") if '":"' in body or '":{' in body else None
            return a + json.dumps(j, ensure_ascii=False, separators=sep).replace("</", "<\\/") + c
        n = LD.sub(put, s); inf["image_desde_pagina"][rel] = f
    else:
        n = ROBOTS.sub(NOI, s, 1) if rb else s.replace("</head>", NOI + "</head>", 1)
        inf["noindex"].append(rel)
    if n != s:
        t = p + ".tmp1406"; open(t, "w", encoding="utf-8").write(n); os.replace(t, p)
sm = os.path.join(D, "sitemap.xml")
if inf["noindex"] and os.path.exists(sm):
    x = open(sm, encoding="utf-8").read()
    for r in inf["noindex"]:
        x = re.sub(r'<url>\s*<loc>https://recurretumulta\.online' + re.escape(r) + r'</loc>.*?</url>\s*', '', x, flags=re.S)
    t = sm + ".tmp1406"; open(t, "w", encoding="utf-8").write(x); os.replace(t, sm)
print("image desde la página:", len(inf["image_desde_pagina"]), "noindex:", len(inf["noindex"]))
if INF: json.dump(inf, open(INF, "w"), indent=1, ensure_ascii=False)
