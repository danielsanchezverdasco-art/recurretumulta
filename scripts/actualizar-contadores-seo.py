#!/usr/bin/env python3
"""Punto 6 AdSense (23/10/2026): refresca los contadores hardcodeados de
src/content/seo/titulos.csv con los conteos REALES de los arrays de datos.

- Hubs: /coches/, /motos/, /patinetes/, /comparador-coches/,
  /comparador-motos/, /comparador-patinetes/, /fichas-tecnicas/
- Marcas: /patinetes/marca/<slug>/ (modelos y certificados DGT)

Los conteos salen de scripts/contar-datos-seo.mjs (esbuild sobre los .ts).
Uso: python3 scripts/actualizar-contadores-seo.py
"""
import csv, json, os, re, subprocess, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV = os.path.join(REPO, "src/content/seo/titulos.csv")
os.chdir(REPO)

env = dict(os.environ)
env["NODE_PATH"] = os.path.join(os.path.expanduser("~"), "workspace/recurretumulta-github/node_modules")
conteo = json.loads(subprocess.run(
    ["node", "scripts/contar-datos-seo.mjs"], capture_output=True, text=True, env=env, check=True
).stdout)

C, M, P = conteo["coches"], conteo["motos"], conteo["patinetes"]
TOTAL = C["n"] + M["n"] + P["n"]
BC, BM, BP = len(C["marcas"]), len(M["marcas"]), len(P["marcas"])

def es(n): return f"{n:,}".replace(",", ".")

# Slugs de marca autoritativos: scripts/datos-seo/hubs-propuestos.csv (tipo=marca),
# igual que scripts/gen-marcas.py. Las fichas de la marca son las cuyo id
# empieza por "<slug>-" (excluyendo solapes con slugs más largos).
HUBS_PROP = [r for r in csv.DictReader(open(os.path.join(REPO, "scripts/datos-seo/hubs-propuestos.csv"), encoding="utf-8")) if r["tipo"] == "marca"]
INTROS = {r["slug"]: r for r in csv.DictReader(open(os.path.join(REPO, "scripts/datos-seo/intros-marca.csv"), encoding="utf-8"))}
# Renombres de gen-marcas.py: la URL usa el slug renombrado, pero el prefijo
# de ids es el original.
RENOMBRE_URL_A_PREFIJO = {("patinetes", "urban-glide"): "urban"}
marca_por_slug = {}
for r in HUBS_PROP:
    cat, slug = (r["categoria"] or "").strip(), (r["marca"] or "").strip()
    if cat not in ("coches", "motos", "patinetes") or not slug:
        continue
    todos = [h["marca"].strip() for h in HUBS_PROP if h["categoria"] == cat]
    otras = [o for o in todos if o != slug and o.startswith(slug + "-")]
    items = [f for f in conteo["ids"][cat]
             if f["id"].startswith(slug + "-") and not any(f["id"].startswith(o + "-") for o in otras)]
    if not items:
        continue
    intro = INTROS.get(f"{cat}/marca/{slug}", {})
    nombre = (intro.get("marca") or "").strip()
    if not nombre:
        from collections import Counter
        nombre = Counter(f["marca"] for f in items).most_common(1)[0][0]
    marca_por_slug[(cat, slug)] = {"nombre": nombre, "n": len(items),
                                   "cert": sum(1 for f in items if f.get("cert"))}

HUBS = {
    "https://recurretumulta.online/coches/": (
        f"Coches nuevos 2026: {es(C['n'])} fichas de {es(BC)} marcas con precio",
        f"Precio, potencia, autonomía y medidas de {es(C['n'])} coches nuevos de {es(BC)} marcas: eléctricos, híbridos y de combustión. Abre cada ficha.",
    ),
    "https://recurretumulta.online/motos/": (
        f"Motos nuevas 2026: {es(M['n'])} fichas de {es(BM)} marcas con precio",
        f"Precio en España, potencia, cilindrada y carnet necesario de {es(M['n'])} motos y scooters nuevos de {es(BM)} marcas. Abre la ficha de cada modelo.",
    ),
    "https://recurretumulta.online/patinetes/": (
        f"Patinetes eléctricos: {es(P['n'])} fichas de {es(BP)} marcas con precio",
        f"Precio, autonomía, velocidad máxima y peso de {es(P['n'])} patinetes eléctricos de {es(BP)} marcas, más la normativa DGT y las multas que te pueden poner con ellos.",
    ),
    "https://recurretumulta.online/comparador-coches/": (
        f"Comparador de coches 2026: {es(C['n'])} modelos cara a cara",
        f"Compara dos coches lado a lado: precio, potencia, autonomía, maletero, pros y contras. {es(C['n'])} modelos 2024-2026 de eléctricos, híbridos y combustión.",
    ),
    "https://recurretumulta.online/comparador-motos/": (
        f"Comparador de motos 2026: {es(M['n'])} modelos por carnet y precio",
        f"Compara motos lado a lado: precio, autonomía, potencia y carnet necesario (AM, A1, A2, A). {es(M['n'])} modelos 2024-2026 con filtro por cilindrada y categoría.",
    ),
    "https://recurretumulta.online/comparador-patinetes/": (
        f"Comparador de patinetes eléctricos: {es(P['n'])} modelos con precio",
        f"Compara {es(P['n'])} patinetes eléctricos: precio, potencia, autonomía real (≈70 % de la oficial), peso y certificado DGT. Filtra por presupuesto y potencia.",
    ),
    "https://recurretumulta.online/fichas-tecnicas/": (
        f"Fichas técnicas: {es(TOTAL)} coches, motos y patinetes con precio",
        f"{es(TOTAL)} fichas técnicas con precio, potencia, autonomía y etiqueta DGT: {es(C['n'])} coches, {es(M['n'])} motos y {es(P['n'])} patinetes.",
    ),
}

with open(CSV, newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))
    fields = rows[0].keys() if rows else None

cambios, avisos = [], []
for r in rows:
    url = r["url"]
    if url in HUBS:
        t_new, m_new = HUBS[url]
        assert len(t_new) <= 60, f"título hub >60: {t_new}"
        assert len(m_new) <= 155, f"meta hub >155: {url}"
        if r["titulo_nuevo"] != t_new or r["meta_nueva"] != m_new:
            cambios.append((url, r["titulo_nuevo"], t_new))
            r["titulo_nuevo"], r["meta_nueva"] = t_new, m_new
        continue
    m = re.fullmatch(r"https://recurretumulta.online/patinetes/marca/([^/]+)/", url or "")
    if m and (r["titulo_nuevo"] or "").strip():
        slug_url = m.group(1)
        slug = RENOMBRE_URL_A_PREFIJO.get(("patinetes", slug_url), slug_url)
        d = marca_por_slug.get(("patinetes", slug))
        if not d:
            avisos.append(f"marca sin datos: {url}")
            continue
        nombre, n, cert = d["nombre"], d["n"], d["cert"]
        t_new = f"Patinetes eléctricos {nombre}: {es(n)} modelos con precio"
        if len(t_new) > 60:  # marca larga: se cae "eléctricos" pero se conserva el nombre completo
            t_new = f"Patinetes {nombre}: {es(n)} modelos con precio"
        m_new = (f"{es(n)} patinetes eléctricos {nombre} con precio, autonomía, velocidad máxima y peso."
                 + (f" {es(cert)} con certificado DGT verificado." if cert else " Compara modelos y repasa la normativa DGT.")
                 + " Abre la ficha de cada uno.")
        if len(m_new) > 155:  # marca larga: se recorta la coletilla intermedia
            m_new = (f"{es(n)} patinetes eléctricos {nombre} con precio, autonomía, velocidad máxima y peso."
                     + (f" {es(cert)} con certificado DGT verificado." if cert else "")
                     + " Abre la ficha de cada uno.")
        assert len(t_new) <= 60, f"título marca >60: {t_new}"
        assert len(m_new) <= 155, f"meta marca >155: {url}"
        if r["titulo_nuevo"] != t_new or r["meta_nueva"] != m_new:
            cambios.append((url, r["titulo_nuevo"], t_new))
            r["titulo_nuevo"], r["meta_nueva"] = t_new, m_new

with open(CSV, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(fields), lineterminator="\r\n")
    w.writeheader(); w.writerows(rows)

print(f"conteos: coches={C['n']} ({BC} marcas), motos={M['n']} ({BM}), patinetes={P['n']} ({BP}), total={TOTAL}")
print(f"filas actualizadas: {len(cambios)}")
for url, antes, despues in cambios:
    print(f"  {url}\n    - {antes}\n    + {despues}")
for a in avisos:
    print("AVISO:", a)
