#!/usr/bin/env python3
"""Jaccard entre los contents de los ficheros blog-posts-caravanas-lote5-g*.ts.
Uso: python3 coord/jaccard.py [fichero1 fichero2 ...]  (por defecto: todos los g*.ts)
Falla (exit 1) si algún par >= 0.30.
"""
import re, sys, glob, html

def words(text):
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text).lower()
    return set(re.findall(r"[a-záéíóúñü]{4,}", text))

def contents(path):
    txt = open(path, encoding="utf-8").read()
    return re.findall(r'"content":\s*"(.*?)"\s*\}\s*,?\s*\]', txt, re.S) or \
           re.findall(r'"content":\s*"(.*?)"\s*\}', txt, re.S)

files = sys.argv[1:] or sorted(glob.glob("src/lib/blog-posts-caravanas-lote5-g*.ts"))
docs = []
for f in files:
    for i, c in enumerate(contents(f)):
        docs.append((f"{f}#{i}", words(c)))
bad = 0
for i in range(len(docs)):
    for j in range(i + 1, len(docs)):
        a, b = docs[i][1], docs[j][1]
        jacc = len(a & b) / max(1, len(a | b))
        if jacc >= 0.30:
            print(f"FALLO Jaccard={jacc:.2f}: {docs[i][0]} vs {docs[j][0]}")
            bad += 1
print(f"{len(docs)} posts comparados, {bad} pares >= 0.30")
sys.exit(1 if bad else 0)
