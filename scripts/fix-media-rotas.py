#!/usr/bin/env python3
"""31/10/2026 — Quita del HTML las referencias a /media/ que NO existen (404 en vivo y ausentes de dist).
Lista: scripts/media-404-vivo.txt (verificada con curl). <img>/<video> -> se elimina la etiqueta;
og:image / twitter:image / JSON-LD -> imagen por defecto del sitio. No toca nada que no esté en la lista.
Uso: python3 scripts/fix-media-rotas.py dist"""
import os, re, sys, urllib.parse
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
AQUI = os.path.dirname(os.path.abspath(__file__))
BAD = {l.strip() for l in open(os.path.join(AQUI, "media-404-vivo.txt"), encoding="utf8") if l.strip() and not l.startswith("#")}
DEF = "/media/og-recurretumulta-online.png"
def mala(p):
    p = urllib.parse.unquote(p.split("?")[0].split("#")[0])
    base = re.sub(r"-(?:480w|828w|1200w|card)(\.webp)$", r"\1", p)
    return (p in BAD or base in BAD) and not os.path.exists(os.path.join(D, p.lstrip("/")))
URL = r"(?:https://recurretumulta\.online)?(/media/[^\"'\s?#,)<>]+)"
n_img = n_vid = n_meta = pag = 0
for raiz, _, fs in os.walk(D):
    for f in fs:
        if not f.endswith(".html"): continue
        fp = os.path.join(raiz, f); s = open(fp, encoding="utf8", errors="ignore").read()
        if "/media/" not in s: continue
        o = s
        def img(m):
            global n_img
            if any(mala(u) for u in re.findall(URL, m.group(0))): n_img += 1; return ""
            return m.group(0)
        s = re.sub(r"<img\b[^>]*>", img, s)
        def vid(m):
            global n_vid
            if any(mala(u) for u in re.findall(URL, m.group(0))): n_vid += 1; return ""
            return m.group(0)
        s = re.sub(r"<video\b.*?</video>", vid, s, flags=re.S)
        def src_el(m):
            return "" if any(mala(u) for u in re.findall(URL, m.group(0))) else m.group(0)
        s = re.sub(r"<source\b[^>]*>", src_el, s)
        def meta(m):
            global n_meta
            if mala(m.group(2)): n_meta += 1; return m.group(1) + "https://recurretumulta.online" + DEF + m.group(3)
            return m.group(0)
        s = re.sub(r'((?:og:image|twitter:image)(?::[a-z]+)?"\s+content=")(?:https://recurretumulta\.online)?(/media/[^"]+)(")', meta, s)
        def js(m):
            global n_meta
            if mala(m.group(1)): n_meta += 1; return '"https://recurretumulta.online' + DEF + '"'
            return m.group(0)
        s = re.sub(r'"(?:https://recurretumulta\.online)?(/media/[^"\\]+\.(?:webp|jpg|jpeg|png))"', lambda m: js(m) if '"image"' in s[max(0, m.start()-40):m.start()] or '"url"' in s[max(0, m.start()-12):m.start()] or '"contentUrl"' in s[max(0, m.start()-20):m.start()] else m.group(0), s)
        s = s.replace('<p class="text-sm text-gray-700 leading-relaxed my-2"></p>', "") if s != o else s
        if s != o: open(fp, "w", encoding="utf8").write(s); pag += 1
print(f"fix-media-rotas: {pag} páginas | img quitadas {n_img} | video {n_vid} | og/twitter/JSON-LD -> por defecto {n_meta}")
