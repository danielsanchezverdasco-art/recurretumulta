#!/usr/bin/env python3
"""Verificación 8-gramas Q (versión en streaming, bajo consumo).
Uso: python3 /tmp/q_verify2.py  (desde el worktree)
Imprime CSV por stdout y colisiones por stderr. Exit 0 si todo 0.
"""
import glob, re, sys
from pathlib import Path
WT = Path.cwd()
TARGETS = [("blog","qoros-7-2026-precio-ficha-tecnica"),("blog","qoros-5s-2026-precio-ficha-tecnica"),("ficha","qoros-7-2026-precio-ficha-tecnica"),("ficha","qoros-5s-2026-precio-ficha-tecnica")]

def parse_ts_string(text, i):
    delim = text[i]
    assert delim in ('"', '`'), text[i:i+30]
    out, j = [], i + 1
    while j < len(text):
        c = text[j]
        if c == "\\":
            n = text[j+1]
            m = {"n":"\n","r":"\r","t":"\t",'"':'"', "\\":"\\", "'":"'", "/":"/", "`":"`"}
            if n == "u" and delim == '"':
                out.append(chr(int(text[j+2:j+6],16))); j += 6; continue
            out.append(m.get(n,n)); j += 2; continue
        if c == delim: return "".join(out), j+1
        out.append(c); j += 1
    raise ValueError("sin cerrar")

def all_strings_after(text, key):
    """Todas las cadenas TS que siguen a una clave (con o sin comillas)."""
    res = []
    for m in re.finditer(r'"?' + re.escape(key) + r'"?\s*:', text):
        rest = text[m.end():]
        mm = re.search(r'["`]', rest)
        if not mm: continue
        q = m.end() + mm.start()
        d, end = parse_ts_string(text, q)
        res.append((m.start(), d))
    return res

def words(text):
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"[^a-záéíóúñü0-9]+", " ", text.lower())
    return text.split()

def ngrams(ws, n=8):
    return {" ".join(ws[i:i+n]) for i in range(len(ws)-n+1)}

def blog_pages():
    for f in sorted(glob.glob(str(WT/"src/lib/blog-posts-*.ts"))):
        text = Path(f).read_text(encoding="utf-8")
        slugs = all_strings_after(text, "slug")
        excerpts = all_strings_after(text, "excerpt")
        contents = all_strings_after(text, "content")
        for pos, slug in slugs:
            ex = next((d for p,d in excerpts if p>pos), "")
            co = next((d for p,d in contents if p>pos), "")
            if co: yield ("blog", slug), ex+"\n"+co

def ficha_pages():
    for f in sorted(glob.glob(str(WT/"src/lib/comparador-coches-*.ts"))):
        text = Path(f).read_text(encoding="utf-8")
        for pos, cid in all_strings_after(text, "id"):
            _nm = re.search(r'"?id"?\s*:\s*"', text[pos+10:])
            nxt = (pos+10+_nm.start()) if _nm else -1
            seg = text[pos:(nxt if nxt!=-1 else len(text))]
            parts=[]
            for field in ["pros:", "contras:"]:
                m = re.search(re.escape(field)+r" \[(.*?)\],", seg, re.S)
                if m: parts += re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(1))
            pm = re.search(r"planMantenimiento: \{(.*?)\n    \},", seg, re.S)
            if pm:
                for key in ["intervalo:", "queSeCambia:", "fuente:"]:
                    mm = re.search(re.escape(key)+r'\s*"((?:[^"\\]|\\.)*)"', pm.group(1))
                    if mm: parts.append(mm.group(1))
            if parts: yield ("ficha", cid), " ".join(parts)

def main():
    targets = {}
    npages = 0
    for gen in (blog_pages(), ficha_pages()):
        for key, txt in gen:
            npages += 1
            if key in TARGETS: targets[key] = txt
    print(f"# páginas leídas: {npages}, objetivos: {len(targets)}/{len(TARGETS)}", file=sys.stderr)
    assert len(targets)==len(TARGETS), targets.keys()
    target_grams = {k: ngrams(words(t)) for k,t in targets.items()}
    hits = {k: {} for k in TARGETS}  # gram -> ejemplo de página
    for gen in (blog_pages(), ficha_pages()):
        for key, txt in gen:
            if key in TARGETS: continue
            other = ngrams(words(txt))
            for tk, tg in target_grams.items():
                inter = tg & other
                for g in inter:
                    if g not in hits[tk]: hits[tk][g] = key
    # colisiones entre los dos objetivos entre sí (blog Q7 vs blog Q5S, ficha vs ficha, y cruzadas)
    for a in TARGETS:
        for b in TARGETS:
            if a==b: continue
            for g in target_grams[a] & target_grams[b]:
                if g not in hits[a]: hits[a][g] = b
    print("url;coincidencias_8gramas")
    total=0
    for tipo, slug in TARGETS:
        url = f"/{'blog' if tipo=='blog' else 'coches'}/{slug}/"
        bad = hits[(tipo,slug)]
        print(f"{url};{len(bad)}")
        total += len(bad)
        if bad:
            print(f"# COLISIONES {url} ({len(bad)}):", file=sys.stderr)
            for g, src in sorted(bad.items())[:40]:
                print(f"#   [{g}] en {src}", file=sys.stderr)
    print(f"# total colisiones: {total}", file=sys.stderr)
    sys.exit(1 if total else 0)

if __name__ == "__main__":
    main()
