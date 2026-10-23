#!/usr/bin/env python3
"""Punto 6 AdSense (23/10/2026): corrige títulos >60 car. y metas >155 en
src/content/seo/titulos.csv + resuelve el duplicado exacto Stark Varg EX.

Reglas (orden de Daniel 13/10/2026):
- sin marca nunca, 50-60 car. (se acepta menos si el nombre es corto)
- ficha = especificaciones SIN precio en el título (la página sí lleva precio)
- la búsqueda real al principio + un dato concreto y real (CV, km, año...)
- nombres oficiales (CUPRA en mayúsculas)

Uso: python3 scripts/corregir-titulos-seo.py
"""
import csv, os, re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV = os.path.join(REPO, "src/content/seo/titulos.csv")
O = "https://recurretumulta.online"

# Overrides explícitos para los que siguen >60 tras las reglas generales.
OVERRIDES = {
    f"{O}/coches/rolls-royce-cullinan-series-ii-black-badge-2026-precio-ficha-tecnica/":
        "Rolls-Royce Cullinan Black Badge 2026: ficha técnica",
    f"{O}/coches/tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica/":
        "Tesla Model Y Gran Autonomía 2026: ficha técnica",
    f"{O}/coches/volkswagen-golf-gti-clubsport-2026-precio-ficha-tecnica/":
        "Volkswagen Golf GTI Clubsport 2026: ficha técnica",
    f"{O}/coches/mercedes-cla-250-plus-2025-precio-ficha-tecnica/":
        "Mercedes-Benz CLA 250+ EQ 2025: ficha técnica",
    f"{O}/coches/citroen-berlingo-talla-xl-15-bluehdi-130-2026-precio-ficha-tecnica/":
        "Citroën Berlingo XL BlueHDi 130 2026: ficha técnica",
    f"{O}/patinetes/segway-zt3-pro-e-cert/":
        "Segway ZT3 Pro E certificado: ficha técnica",
    # Duplicado exacto: dos fichas del mismo modelo -> se diferencian por disciplina (dato real).
    f"{O}/motos/stark-future-varg-ex-2025-ficha-tecnica-precio/":
        "Stark Future Varg EX 2025: 60 CV, enduro eléctrica",
    f"{O}/motos/stark-varg-ex-2025-ficha-tecnica-precio/":
        "Stark Varg EX 2025: 60 CV, trail eléctrica",
}

def acortar(t):
    t = re.sub(r"^cupra ", "CUPRA ", t)  # nombre oficial en mayúsculas
    t = re.sub(r": precio, ficha técnica y (.+)$", r": \1", t)
    t = re.sub(r": precio y ficha técnica$", ": ficha técnica", t)
    return t

with open(CSV, newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))
    fields = list(rows[0].keys())

cambios_t, cambios_m = [], []
vistos = {}
for r in rows:
    url, t = r["url"], (r["titulo_nuevo"] or "")
    if url in OVERRIDES:
        nuevo = OVERRIDES[url]
    elif len(t.strip()) > 60:
        nuevo = acortar(t.strip())
    else:
        nuevo = t
    if nuevo != t:
        cambios_t.append((url, t, nuevo))
        r["titulo_nuevo"] = nuevo
    # metas >155: misma truncación que src/hooks/use-seo.ts
    m = r["meta_nueva"] or ""
    if len(m) > 155:
        m2 = m[:152].rstrip() + "…"
        cambios_m.append((url, len(m), m2))
        r["meta_nueva"] = m2
    # duplicados exactos
    k = r["titulo_nuevo"].strip().lower()
    if k:
        vistos.setdefault(k, []).append(url)

largos = [(r["url"], len(r["titulo_nuevo"].strip())) for r in rows if len(r["titulo_nuevo"].strip()) > 60]
dups = {k: v for k, v in vistos.items() if len(v) > 1}
if largos:
    raise SystemExit(f"QUEDAN {len(largos)} títulos >60: {largos[:5]}")
if dups:
    raise SystemExit(f"QUEDAN duplicados: {dups}")

with open(CSV, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=fields, lineterminator="\r\n")
    w.writeheader(); w.writerows(rows)

print(f"títulos corregidos: {len(cambios_t)}, metas truncadas: {len(cambios_m)}")
for url, antes, despues in cambios_t:
    print(f"  [{len(antes.strip())}->{len(despues)}] {url.replace(O,'')}\n    - {antes}\n    + {despues}")
for url, n, m2 in cambios_m:
    print(f"  [meta {n}->155] {url.replace(O,'')}\n    + {m2[:90]}...")
