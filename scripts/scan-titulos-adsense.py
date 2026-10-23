#!/usr/bin/env python3
"""Escanea src/content/seo/titulos.csv: títulos >60 car., metas >155, duplicados exactos y similares."""
import csv, unicodedata, re, collections
from difflib import SequenceMatcher

rows = list(csv.DictReader(open("src/content/seo/titulos.csv", encoding="utf-8")))
print("filas CSV:", len(rows))

mas60 = [(r["url"], r["titulo_nuevo"], len(r["titulo_nuevo"])) for r in rows if len(r["titulo_nuevo"].strip()) > 60]
metas155 = [(r["url"], len(r["meta_nueva"])) for r in rows if r["meta_nueva"] and len(r["meta_nueva"]) > 155]
print("titulos >60:", len(mas60))
print("metas >155:", len(metas155))

# exactos
g = collections.defaultdict(list)
for r in rows:
    t = r["titulo_nuevo"].strip().lower()
    if t: g[t].append(r["url"])
exact = {k: v for k, v in g.items() if len(v) > 1}
print("titulos exactos duplicados (grupos):", len(exact))

# similares: bloques por 2 primeras palabras significativas
def norm(x):
    x = unicodedata.normalize("NFKD", x.lower())
    x = "".join(c for c in x if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9 ]+", " ", x).split()
STOP = set("de la el en y a los las del con por para un una su sus al o 2025 2026 2024 precio ficha tecnica fichas".split())
blk = collections.defaultdict(list)
for r in rows:
    w = [x for x in norm(r["titulo_nuevo"]) if x not in STOP]
    if w: blk[" ".join(w[:2])].append((r["url"], r["titulo_nuevo"]))
pares = 0; ejemplos = []
seen = set()
for k, v in blk.items():
    if len(v) > 200: continue
    for a in range(len(v)):
        for b in range(a + 1, len(v)):
            x, y = v[a], v[b]
            if x[1].strip().lower() == y[1].strip().lower(): continue
            s = SequenceMatcher(None, x[1].lower(), y[1].lower()).ratio()
            if s >= 0.85:
                key = (x[0], y[0])
                if key in seen: continue
                seen.add(key); pares += 1
                if len(ejemplos) < 30: ejemplos.append((round(s, 2), x[0], y[0], x[1], y[1]))
print("titulos similares (ratio>=0.85, pares):", pares)

with open("/tmp/scan-titulos-adsense.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["tipo", "len", "url", "titulo"])
    for url, t, n in sorted(mas60, key=lambda x: -x[2]):
        w.writerow(["titulo>60", n, url, t])
    for url, n in sorted(metas155, key=lambda x: -x[1]):
        w.writerow(["meta>155", n, url, ""])
print("reporte: /tmp/scan-titulos-adsense.csv")
for s, a, b, ta, tb in ejemplos[:15]:
    print(f"SIM {s}: {a}\n      {b}\n      «{ta}»\n      «{tb}»")
