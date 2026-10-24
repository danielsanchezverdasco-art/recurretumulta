#!/usr/bin/env python3
# Chequeo 8-gramas, TANDA 1 (hubs de marca), ORD-20241024-2255.
# Corpus medible por hub (documentado, sin inventar texto):
#   - title REAL del censo vivo (docs/comunicacion-ias/listas/vivo-censo-marcas.csv)
#   - h1 con la fórmula EXACTA de scripts/gen-marcas.py: "Fichas técnicas de {CATN} {Nombre}"
#   - esqueleto de description con la plantilla EXACTA de gen-marcas.py, SIN la lista de
#     modelos (los títulos de modelo salen de los h1 del dist, que NO está en el repo,
#     y son etiquetas de lista, excluidas por la regla igual que las etiquetas de tablas).
# EXCLUIDO y por qué: la intro completa (su fuente, /workspace/seo/intros-marca.csv, NO
# está en el repo: solo están los recortes quitados en docs/intros-marca-recortes.csv);
# el bloque genérico de 1.114 palabras (shell, no texto propio del hub); navegación,
# pie, migas y etiquetas de tablas, según la regla.
# Tokenización: minúsculas, solo letras/números (acentos normalizados), ventanas de 8.
# n_8gramas_compartidos = nº de ventanas DISTINTAS de la página presentes en >=2 hubs.
# contenido_pobre: estimación palabras_main (censo) - 1114 (bloque genérico) < 300.
import csv, json, re, unicodedata, collections, sys
BASE = "."
def tok(t):
    t = unicodedata.normalize("NFKD", t.lower())
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.findall(r"[a-z0-9]+", t)
CATN = {"coches": "coches", "motos": "motos", "patinetes": "patinetes eléctricos"}
rows = list(csv.DictReader(open(f"{BASE}/docs/comunicacion-ias/listas/vivo-censo-marcas.csv")))
gen = json.load(open(f"{BASE}/src/lib/hub-marcas.generated.json"))
slugs = {c: set(v[0] for v in lst) for c, lst in gen.items()}
hubs = []
no_extraibles = []
for r in rows:
    url = r["url"]
    m = re.match(r"^/(coches|motos|patinetes)/marca/([^/]+)/$", url)
    if not m:
        no_extraibles.append((url, "url fuera del patrón /{cat}/marca/{slug}/")); continue
    cat, slug = m.groups()
    if slug not in slugs.get(cat, set()):
        no_extraibles.append((url, "slug no está en hub-marcas.generated.json")); continue
    title = r["title"]
    nombre = title.split(":")[0].strip()
    n = re.search(r":\s*(\d+)\s+ficha", title)
    n = n.group(1) if n else "?"
    h1 = f"Fichas técnicas de {CATN[cat]} {nombre}"
    desc = f"Todas las fichas técnicas de {CATN[cat]} {nombre} ({n}). Precio, potencia, autonomía y etiqueta DGT."
    texto = f"{title} {h1} {desc}"
    hubs.append({"url": url, "cat": cat, "slug": slug, "title": title,
                 "title_len": int(r["title_len"]), "meta_len": int(r["meta_desc_len"]),
                 "palabras_main": int(r["palabras_main"]), "tokens": tok(texto)})
print(f"hubs medibles: {len(hubs)} / {len(rows)}; no extraíbles: {len(no_extraibles)}")
for u, why in no_extraibles: print("  NO EXTRAÍBLE:", u, "-", why)
# índice ventana -> conjunto de urls
idx = collections.defaultdict(set)
winsets = {}
for h in hubs:
    ws = set()
    t = h["tokens"]
    for i in range(len(t) - 7):
        ws.add(tuple(t[i:i+8]))
    winsets[h["url"]] = ws
    for w in ws: idx[w].add(h["url"])
shared = {w for w, us in idx.items() if len(us) >= 2}
print(f"ventanas distintas totales: {sum(len(v) for v in winsets.values())}; compartidas (>=2 hubs): {len(shared)}")
out = []
for h in hubs:
    comp = winsets[h["url"]] & shared
    # página coincidente: la que más ventanas compartidas tiene con esta
    cnt = collections.Counter()
    for w in comp:
        for u in idx[w]:
            if u != h["url"]: cnt[u] += 1
    coinc = cnt.most_common(1)[0][0] if cnt else ""
    propio_est = h["palabras_main"] - 1114
    pobre = "sí" if propio_est < 300 else "no"
    out.append({"url": h["url"], "n": len(comp), "coinc": coinc, "pobre": pobre,
                "title_len": h["title_len"], "meta_len": h["meta_len"], "propio_est": propio_est})
with open(f"{BASE}/docs/comunicacion-ias/listas/8gramas-2255.csv", "w", newline="") as f:
    w = csv.writer(f, delimiter=";")
    w.writerow(["url", "n_8gramas_compartidos", "pagina_coincidente", "contenido_pobre"])
    for o in out: w.writerow([o["url"], o["n"], o["coinc"], o["pobre"]])
cero = sum(1 for o in out if o["n"] == 0)
print(f"hubs con 0: {cero}; con >0: {len(out)-cero}")
print("10 peores:")
for o in sorted(out, key=lambda o: -o["n"])[:10]:
    print(f"  {o['url']} n={o['n']} coinc={o['coinc']} pobre={o['pobre']} propio_est={o['propio_est']}")
print(f"contenido_pobre sí: {sum(1 for o in out if o['pobre']=='sí')} / {len(out)}")
print(f"título >60: {sum(1 for o in out if o['title_len']>60)}; meta >155: {sum(1 for o in out if o['meta_len']>155)}")
for o in out:
    if o["meta_len"] > 155: print(f"  META>155: {o['url']} len={o['meta_len']}")
json.dump(out, open(f"{BASE}/hidden_files/dedupe-8g-001/resumen-hubs.json", "w"), ensure_ascii=False, indent=1)
