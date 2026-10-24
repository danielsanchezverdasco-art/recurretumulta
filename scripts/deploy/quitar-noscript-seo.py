#!/usr/bin/env python3
"""AdSense 24/10: el <noscript><main> de index.html (bloque genérico de ~1.100 palabras
de la portada) se copiaba en TODAS las páginas prerenderizadas: 2.º <main> y texto
idéntico en 7.000 URLs. Se conserva solo en la portada (dist/index.html)."""
import re, sys, pathlib
dist = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "dist")
pat = re.compile(r"<noscript>\s*<main>.*?</main>\s*</noscript>", re.S)
n = 0
for f in dist.rglob("index.html"):
    if f == dist / "index.html":
        continue
    s = f.read_text(errors="surrogateescape")
    t, k = pat.subn("", s)
    if k:
        f.write_text(t, errors="surrogateescape"); n += 1
print(f"quitar-noscript-seo: {n} páginas limpiadas")
