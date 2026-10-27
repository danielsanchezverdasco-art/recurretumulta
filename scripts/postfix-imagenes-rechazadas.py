#!/usr/bin/env python3
"""Ronda 14:06 (26/10/2026): quita del HTML prerenderizado y del schema las imágenes que
no existen o que se han rechazado (generadas por IA / sin fuente / duplicadas entre modelos).
Imagen ausente => sin <img>, sin srcset, sin preload, sin og/twitter:image y sin "image" en el
JSON-LD (nunca una imagen genérica). Si una ficha se queda sin foto propia del modelo se marca
noindex,follow y sale del sitemap (misma regla que postfix-foto-pendiente.py).
Escribe con fichero temporal + os.replace (seguro con dist enlazado por hardlinks).
Uso: postfix-imagenes-rechazadas.py dist lista.txt [informe.json]"""
import os, re, sys, json
D, LISTA = sys.argv[1], sys.argv[2]
INF = sys.argv[3] if len(sys.argv) > 3 else None
R = set(l.strip() for l in open(LISTA) if l.strip().startswith("/media/"))
ABS = "https://recurretumulta.online"
def mala(u):
    u = (u or "").strip()
    if u.startswith(ABS): u = u[len(ABS):]
    u = u.split("?")[0]
    # imagen ausente => fuera (nunca se sustituye por otra)
    return u in R or (u.startswith("/media/") and not os.path.isfile(D + u))
FICHA = re.compile(r'^/(coches|motos|patinetes|autocaravanas|campers|caravanas)/([^/]+)/$')
ROBOTS = re.compile(r'<meta\s+name="robots"\s+content="[^"]*"\s*/?>', re.I)
NOI = '<meta name="robots" content="noindex,follow">'
ATTR = lambda tag, a: (re.search(r'\s%s="([^"]*)"' % a, tag) or [None, None])[1]
def fix_srcset(v):
    c = [x.strip() for x in v.split(",") if x.strip()]
    return ", ".join(x for x in c if not mala(x.split()[0]))
def img(m):
    t = m.group(0); src = ATTR(t, "src"); ss = ATTR(t, "srcset")
    if ss is not None:
        n = fix_srcset(ss)
        t = t.replace(' srcset="%s"' % ss, (' srcset="%s"' % n) if n else "")
        ss = n or None
    if src and mala(src):
        if ss:
            t = t.replace(' src="%s"' % src, ' src="%s"' % ss.split(",")[-1].split()[0])
        else:
            return ""
    return t
def link(m):
    t = m.group(0)
    if 'rel="preload"' in t and (mala(ATTR(t, "href")) or (ATTR(t, "imagesrcset") and not fix_srcset(ATTR(t, "imagesrcset")))):
        return ""
    return t
def meta(m):
    t = m.group(0)
    return "" if re.search(r'(property|name)="(og:image|twitter:image)(:url|:secure_url)?"', t) and mala(ATTR(t, "content")) else t
def limpia(o):
    if isinstance(o, dict):
        for k in list(o.keys()):
            v = o[k]
            if k in ("image", "thumbnailUrl", "logo"):
                if isinstance(v, str) and mala(v): del o[k]; continue
                if isinstance(v, dict) and (mala(v.get("url")) or mala(v.get("contentUrl"))): del o[k]; continue
                if isinstance(v, list):
                    n = [x for x in v if not ((isinstance(x, str) and mala(x)) or (isinstance(x, dict) and (mala(x.get("url")) or mala(x.get("contentUrl")))))]
                    if not n: del o[k]; continue
                    o[k] = n
            limpia(o.get(k))
    elif isinstance(o, list):
        for x in o: limpia(x)
    return o
def ld(m):
    a, body, c = m.group(1), m.group(2), m.group(3)
    if not any(p in body for p in R): return m.group(0)
    try: j = json.loads(body)
    except Exception: return m.group(0)
    sep = (",", ":") if '":"' in body or '":{' in body else None
    return a + json.dumps(limpia(j), ensure_ascii=False, separators=sep).replace("</", "<\\/") + c
inf = {"cambiadas": 0, "noindex": [], "restos": {}}
for root, _, files in os.walk(D):
    for fn in files:
        if not fn.endswith(".html"): continue
        p = os.path.join(root, fn); s = open(p, encoding="utf-8").read()
        s0 = s.replace("/media//media/", "/media/")
        if not any(r in s0 for r in R) and s0 == s: continue
        s = s0
        rel = "/" + os.path.relpath(root, D).replace(os.sep, "/") + "/"
        fm = FICHA.match(rel)
        tenia = bool(fm) and bool(re.search(r'<img\b[^>]*src="/media/[^"]*%s' % re.escape(fm.group(2)[:25]), s))
        s = re.sub(r'(<script[^>]*type="application/ld\+json"[^>]*>)(.*?)(</script>)', ld, s, flags=re.S)
        s = re.sub(r'<img\b[^>]*>', img, s)
        s = re.sub(r'<link\b[^>]*>', link, s)
        s = re.sub(r'<meta\b[^>]*>', meta, s)
        if fm and tenia and not re.search(r'<img\b[^>]*src="/media/[^"]*%s' % re.escape(fm.group(2)[:25]), s):
            s = ROBOTS.sub(NOI, s, 1) if ROBOTS.search(s) else s.replace("</head>", NOI + "</head>", 1)
            inf["noindex"].append(rel)
        rest = [r for r in R if r in s]
        if rest: inf["restos"][rel + fn] = rest
        tmp = p + ".tmp1406"; open(tmp, "w", encoding="utf-8").write(s); os.replace(tmp, p)
        inf["cambiadas"] += 1
sm = os.path.join(D, "sitemap.xml")
if inf["noindex"] and os.path.exists(sm):
    x = open(sm, encoding="utf-8").read()
    for r in inf["noindex"]:
        x = re.sub(r'<url>\s*<loc>https://recurretumulta\.online' + re.escape(r) + r'</loc>.*?</url>\s*', '', x, flags=re.S)
    tmp = sm + ".tmp1406"; open(tmp, "w", encoding="utf-8").write(x); os.replace(tmp, sm)
print("html cambiadas:", inf["cambiadas"], "noindex:", len(inf["noindex"]), "con restos:", len(inf["restos"]))
if INF: json.dump(inf, open(INF, "w"), indent=1, ensure_ascii=False)
