#!/usr/bin/env python3
"""Verificacion 8-gramas, letra T, unico-coches-50-t-001 (v2, streaming).
Corpus: src/lib/*.ts tras la edicion, contado por hash blake2b-64 de cada
ventana de 8 palabras (minusculas, solo letras/numeros con acentos).
Para cada pagina, una ventana cuenta como coincidencia si su recuento en
el corpus supera las veces que aparece en el propio texto nuevo de esa
pagina (asi no se cuentan auto-coincidencias, pero si las de otras
paginas, incluidos los posts parejos y las demas paginas de la tanda).
Uso: python3 hidden_files/unico-coches-50-t-001/verify-8gram.py
"""
import json, re, glob, sys, hashlib
from collections import deque, Counter

TOK = re.compile(r"[a-záéíóúüñ0-9]+")

def hgram(words):
    return hashlib.blake2b(" ".join(words).encode('utf-8'), digest_size=8).hexdigest()

def grams_of(text):
    w = TOK.findall(text.lower())
    return [hgram(w[i:i+8]) for i in range(len(w) - 7)]

def main():
    new = json.load(open('/tmp/t50-new.json'))
    slugs = [l.strip() for l in open('/tmp/t-fichas.txt')][:50]
    corpus = Counter()
    files = sorted(glob.glob('src/lib/*.ts'))
    for n, f in enumerate(files, 1):
        text = open(f, encoding='utf-8').read()
        window = deque(maxlen=8)
        for m in TOK.finditer(text.lower()):
            window.append(m.group(0))
            if len(window) == 8:
                corpus[hgram(window)] += 1
        if n % 50 == 0:
            print(f"corpus: {n}/{len(files)} ficheros, {len(corpus)} hashes distintos", flush=True)
    print(f"corpus final: {len(files)} ficheros, {len(corpus)} hashes distintos", flush=True)
    rows = []
    total = 0
    for s in slugs:
        own = Counter()
        examples = {}
        for k in ('pros', 'contras'):
            for txt in new[s][k]:
                for g in grams_of(txt):
                    own[g] += 1
        coll = 0
        for g, c in own.items():
            if corpus.get(g, 0) > c:
                coll += 1
        rows.append((s, coll))
        total += coll
        print(f"{s} -> {coll}", flush=True)
    with open('hidden_files/unico-coches-50-t-001/verificacion-unico-coches-50-t-001.csv', 'w', encoding='utf-8') as fh:
        fh.write("url;coincidencias_8gramas\n")
        for s, n in rows:
            fh.write(f"/coches/{s}/;{n}\n")
    print(f"TOTAL coincidencias: {total}", flush=True)
    return 0 if total == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
