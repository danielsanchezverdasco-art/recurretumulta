# -*- coding: utf-8 -*-
"""Verificacion 8-gramas autocontenida para unico-coches-50-m-001.
Uso: python3 hidden_files/unico-coches-50-m-001/verify-8gramas.py <worktree>
Lee los 50 slugs de verificacion-unico-coches-50-m-001.csv, extrae sus
pros/contras de los ficheros src/lib/comparador-coches-*.ts del propio
worktree, y comprueba sus 8-gramas contra todo src/lib/*.ts salvo
*generated*, quitando el texto nuevo de la propia ficha antes de tokenizar
(asi un acierto nunca es la propia ficha: es otra pagina, incluido su post
de blog o las otras 49 fichas nuevas).
Tokenizacion: palabras con acentos y numeros, minusculas.
Salida: CSV url;coincidencias_8gramas (n. de 8-gramas distintos compartidos).
"""
import sys, re, glob, os
WT = sys.argv[1] if len(sys.argv) > 1 else "."
TOK = re.compile(r'[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+')
def grams_of(text):
    toks = [t.lower() for t in TOK.findall(text)]
    return {' '.join(toks[i:i+8]) for i in range(len(toks)-7)}
def arr_in(window, name):
    m = re.search(r'\n    ' + name + r': \[(.*?)\s*\],', window, re.S)
    return re.findall(r'"([^"]*)"', m.group(1)) if m else []
# slugs desde el CSV de la tanda
csv_path = os.path.join(WT, 'hidden_files/unico-coches-50-m-001/verificacion-unico-coches-50-m-001.csv')
slugs = []
for line in open(csv_path, encoding='utf-8'):
    line = line.strip()
    if line.startswith('/coches/'):
        slugs.append(line[len('/coches/'):].split('/;')[0])
# extraer pros/contras de cada slug desde los comparador-*.ts
NEW, slugfile = {}, {}
for f in sorted(glob.glob(os.path.join(WT, 'src/lib/comparador-coches-*.ts'))):
    if 'generated' in f:
        continue
    t = open(f, encoding='utf-8').read()
    for m in re.finditer(r'id: "([^"]+)",', t):
        sid = m.group(1)
        if sid not in slugs:
            continue
        start = m.start()
        nxt = re.search(r'\n(?:  )?\{[ \n]*id: "', t[start+10:])
        end = start + 10 + nxt.start() if nxt else len(t)
        w = t[start:end]
        NEW[sid] = (arr_in(w, 'pros'), arr_in(w, 'contras'))
        slugfile[sid] = os.path.relpath(f, WT)
assert len(NEW) == len(slugs), f"extraidas {len(NEW)} de {len(slugs)}"
file_targets = {}
for s, f in slugfile.items():
    file_targets.setdefault(f, []).append(s)
corpus = set()
for f in sorted(glob.glob(os.path.join(WT, 'src/lib/*.ts'))):
    if 'generated' in f:
        continue
    text = open(f, encoding='utf-8', errors='ignore').read()
    rel = os.path.relpath(f, WT)
    if rel in file_targets:
        for s in file_targets[rel]:
            for txt in NEW[s][0] + NEW[s][1]:
                if txt in text:
                    text = text.replace(txt, ' ')
    corpus |= grams_of(text)
rows = ["url;coincidencias_8gramas"]
bad = 0
for slug in slugs:
    g = set()
    for txt in NEW[slug][0] + NEW[slug][1]:
        g |= grams_of(txt)
    n = len(g & corpus)
    rows.append(f"/coches/{slug}/;{n}")
    bad += (n > 0)
    print(f"{slug}: {n}", file=sys.stderr, flush=True)
with open(csv_path, 'w', encoding='utf-8') as fh:
    fh.write("\n".join(rows) + "\n")
print("\n".join(rows))
print(f"TOTAL paginas con colisiones: {bad}/{len(slugs)}", file=sys.stderr)
