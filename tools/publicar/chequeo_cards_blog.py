#!/usr/bin/env python3
"""3/11/2026 — Cuenta las tarjetas de noticias/blog (blog-lite) por caso en dist: foto real, sin recuadro (limpia),
foto remota, falta fichero (caería al logo og), placeholder (md5). Sale con 1 si hay alguna que caería al logo o placeholder.
Uso: python3 tools/publicar/chequeo_cards_blog.py [dist]"""
import re, json, glob, os, sys, hashlib, collections
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
ph = {l.strip() for l in open("scripts/placeholder-md5.txt") if l.strip() and not l.startswith("#")}
posts = {}
for f in glob.glob("src/lib/blog-lite*.generated.ts") + glob.glob("src/lib/blog-lite-cat/*.ts"):
    m = re.search(r"=\s*(\[.*\]);?\s*$", open(f).read(), re.S)
    if m:
        for p in json.loads(m.group(1)): posts[p["slug"]] = p
c = collections.Counter(); mal = []
for s, p in posts.items():
    h = p.get("heroSrc")
    if not h: c["sin_recuadro_limpia"] += 1; continue
    if h.startswith("http"): c["foto_remota"] += 1; continue
    ok = [x for x in {h, re.sub(r"\.webp$", "-card.webp", h)} if os.path.exists(D + x)]
    if not ok: c["FALTA_fichero_cae_al_logo"] += 1; mal.append((s, h)); continue
    if any(hashlib.md5(open(D + x, "rb").read()).hexdigest() in ph for x in ok): c["PLACEHOLDER"] += 1; mal.append((s, h)); continue
    c["foto_real"] += 1
print("tarjetas de blog/noticias:", len(posts)); [print("  %-30s %d" % kv) for kv in sorted(c.items())]
[print("  MAL", m) for m in mal[:20]]
sys.exit(1 if any(k.isupper() or k.startswith(("FALTA", "PLACE")) for k in c) else 0)
