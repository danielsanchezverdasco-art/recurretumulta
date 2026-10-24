#!/usr/bin/env python3
"""Verificación 8-gramas del texto nuevo (pros/contras) de la tanda R-001.

Corpus = texto propio del resto del repo, SIN el texto nuevo de la tanda:
- pros/contras de todas las fichas que NO son de la tanda (ficheros actuales);
- para los 11 ficheros tocados: versión HEAD con los pros/contras VIEJOS de la tanda
  eliminados (el resto de fichas de esos ficheros sí cuenta);
- todo el texto entrecomillado de los ficheros de blog (no tocados por esta tanda).
Además se comprueba que ningún 8-grama se repita ENTRE las propias cadenas nuevas.
Tokenización: minúsculas, solo [letras con acento, ñ, dígitos]; la puntuación no cuenta.
Salida: hidden_files/unico-coches-50-r-001/verificacion-unico-coches-50-r-001.csv
con url;coincidencias_8gramas, y un informe de colisiones en stdout.
"""
import csv
import json
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "hidden_files/unico-coches-50-r-001"
NUEVOS = json.loads((OUT_DIR / "nuevos-pros-contras.json").read_text(encoding="utf-8"))
SLUGS = [l.strip() for l in open(ROOT / "scripts/coches-slugs.txt") if l.strip().startswith("r")][:50]

TOKEN = re.compile(r"[a-záéíóúñü0-9]+", re.I)


def tokens(text):
    return [t.lower() for t in TOKEN.findall(text)]


def grams(toks, n=8):
    return {" ".join(toks[i : i + n]) for i in range(len(toks) - n + 1)}


def array_span(block, name):
    """Span del array `name: [...]` con corchetes emparejados (ver generar.py)."""
    m = re.search(name + r":\s*\[", block)
    if not m:
        return None
    i = m.end() - 1
    depth = 0
    in_str = False
    esc = False
    j = i
    while j < len(block):
        ch = block[j]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    return (i, j + 1)
        j += 1
    return None


def parse_arrays(block):
    out = []
    for name in ("pros", "contras"):
        span = array_span(block, name)
        if span:
            out += re.findall(r'"([^"]*)"', block[span[0] : span[1]])
    return out


def fichas_de(texto):
    ids = [(m.group(1), m.start()) for m in re.finditer(r'\bid:\s*"([^"]+)"', texto)]
    out = {}
    for i, (sid, pos) in enumerate(ids):
        end = ids[i + 1][1] if i + 1 < len(ids) else len(texto)
        out[sid] = parse_arrays(texto[pos:end])
    return out


corpus_grams = set()

# 1) Ficheros de comparador no tocados: pros/contras de todas sus fichas.
tocados = {v["file"] for v in NUEVOS.values()}
for f in sorted((ROOT / "src/lib").glob("comparador-coches-*.ts")):
    rel = str(f.relative_to(ROOT))
    if rel in tocados:
        continue
    for sid, strs in fichas_de(f.read_text(encoding="utf-8")).items():
        for s in strs:
            corpus_grams |= grams(tokens(s))

# 2) Ficheros tocados: versión HEAD, sin los pros/contras viejos de la tanda.
for rel in sorted(tocados):
    head = subprocess.run(
        ["git", "show", f"HEAD:{rel}"], cwd=ROOT, capture_output=True, text=True
    ).stdout
    for sid, strs in fichas_de(head).items():
        if sid in NUEVOS:
            continue
        for s in strs:
            corpus_grams |= grams(tokens(s))

# 3) Blogs: todo el texto entrecomillado / entre backticks de los ficheros de posts.
for f in sorted((ROOT / "src").glob("**/blog-posts-*.ts")):
    txt = f.read_text(encoding="utf-8")
    for s in re.findall(r'"([^"]{20,})"', txt) + re.findall(r"`([^`]{20,})`", txt):
        corpus_grams |= grams(tokens(s))

# 4) Comprobación del texto nuevo + entre sí.
nuevos_por_url = {}
colisiones = defaultdict(list)
colisiones_por_cadena = {}
for sid in SLUGS:
    v = NUEVOS[sid]
    cadenas = v["pros"] + v["contras"]
    url = f"https://recurretumulta.online/coches/{sid}/"
    total = 0
    propios = defaultdict(list)
    por_cadena = {}
    for s in cadenas:
        gs = []
        for g in grams(tokens(s)):
            propios[g].append(s)
            if g in corpus_grams:
                total += 1
                gs.append(g)
                colisiones[sid].append(g)
        if gs:
            por_cadena[s] = gs
    # Repeticiones dentro de la propia tanda.
    for g, ss in propios.items():
        if len(ss) > 1:
            total += len(ss) - 1
            colisiones[sid].append(f"INTERNA: {g}")
            for s in ss[1:]:
                por_cadena.setdefault(s, []).append(f"INTERNA: {g}")
    nuevos_por_url[url] = total
    if por_cadena:
        colisiones_por_cadena[sid] = por_cadena

(OUT_DIR / "colisiones.json").write_text(
    json.dumps(colisiones_por_cadena, ensure_ascii=False, indent=1), encoding="utf-8"
)

with open(OUT_DIR / "verificacion-unico-coches-50-r-001.csv", "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh, delimiter=";", lineterminator="\n")
    w.writerow(["url", "coincidencias_8gramas"])
    for url, total in nuevos_por_url.items():
        w.writerow([url, total])

total_col = sum(nuevos_por_url.values())
print(f"URLs: {len(nuevos_por_url)} | coincidencias totales: {total_col}")
for sid, gs in colisiones.items():
    print(f"\n{sid} ({len(gs)}):")
    for g in gs[:12]:
        print(f"  - {g}")
sys.exit(0 if total_col == 0 else 1)
