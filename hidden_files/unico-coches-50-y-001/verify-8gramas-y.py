#!/usr/bin/env python3
"""Verificacion 8-gramas letra Y (coches Yangwang).
Corpus: texto propio de todas las paginas NO-Y del repo (blog contents+excerpts,
fichas pros/contras/notas/alts y cualquier string >=8 palabras en comparador).
Nuevo: texto propio nuevo de las 15 paginas Y (fichas + blogs).
Ventanas de 8 palabras dentro de cada unidad de texto (sin cruzar unidades).
Excluidos: titulos, keywords, etiquetas de navegacion/tablas (las filas de
tabla de los blogs SI se comprueban, por ser mas estricto).
Uso: python3 /tmp/y-verify.py [--show N]
"""
import re, sys, glob, json

import os
ROOT = os.environ.get("Y_WT", "/home/hatch/workspace/wt-unico50-y-001")
Y_FICHAS = {
    "yangwang-byd-berlina-260000-euros-rolls-royce",
    "yangwang-byd-u8-u9-europa-2027",
    "yangwang-u7-2025-precio-ficha-tecnica",
    "yangwang-u7-phev-2026-precio-ficha-tecnica",
    "yangwang-u8-2024-precio-ficha-tecnica",
    "yangwang-u8l-2025-precio-ficha-tecnica",
    "yangwang-u9-2024-precio-ficha-tecnica",
    "yangwang-u9-xtreme-2025-precio-ficha-tecnica",
}
Y_BLOGS = Y_FICHAS - {"yangwang-byd-berlina-260000-euros-rolls-royce"}

TOK = re.compile(r"[a-z0-9áéíóúñü]+")

def tokens(text):
    # quitar etiquetas HTML (incluye alt de imgs del blog), markdown basico
    text = re.sub(r"<[^>]+>", " ", text)
    text = text.replace("|", " ").replace("#", " ").replace("*", " ")
    return TOK.findall(text.lower())

def windows(toks, n=8):
    return {" ".join(toks[i:i+n]) for i in range(len(toks)-n+1)}

def strings_in_segment(seg):
    out = []
    # strings entre comillas dobles (con escapes); se excluyen los titulos
    # (el titulo del post siguiente aparece antes de su slug y caeria en
    # este segmento; el titulo no es texto propio del cuerpo)
    for m in re.finditer(r'"((?:[^"\\]|\\.)*)"', seg):
        if re.search(r'"title":\s*$', seg[max(0, m.start()-30):m.start()]):
            continue
        try:
            s = json.loads('"' + m.group(1) + '"')
        except Exception:
            s = m.group(1)
        out.append(s)
    # template literals con backtick
    for m in re.finditer(r"`([^`]*)`", seg):
        out.append(m.group(1))
    return out

def split_by_key(text, key):
    """Divide por apariciones de key: "slug" o id: ; devuelve [(clave, segmento)]"""
    if key == "slug":
        pat = re.compile(r'"slug":\s*"([^"]+)"')
    else:
        pat = re.compile(r'(?m)^\s*id:\s*"([^"]+)"')
    parts = [(m.group(1), m.start()) for m in pat.finditer(text)]
    segs = []
    for i, (k, start) in enumerate(parts):
        end = parts[i+1][1] if i+1 < len(parts) else len(text)
        segs.append((k, text[start:end]))
    return segs

def collect():
    corpus = {}   # ventana -> ejemplo de pagina no-Y
    y_new = {}    # pagina -> set ventanas
    # --- blogs ---
    for f in glob.glob(ROOT + "/src/lib/blog-posts-*.ts"):
        text = open(f, encoding="utf-8").read()
        for slug, seg in split_by_key(text, "slug"):
            units = []
            for s in strings_in_segment(seg):
                # content y excerpt: el content es el string largo; excerpt corto.
                # Identificar por longitud y por estar tras "content"/"excerpt" es
                # fragil; tomamos todos los strings >=8 palabras salvo title/keywords.
                if len(tokens(s)) >= 8 and "http" not in s[:20]:
                    units.append(s)
            # filtrar: quitar title (primera string larga antes del slug no esta en seg)
            # y quitar strings que son URLs puras
            units = [u for u in units if not u.strip().startswith("http")]
            if slug in Y_BLOGS:
                ws = set()
                for u in units:
                    ws |= windows(tokens(u))
                y_new.setdefault("blog/" + slug, set()).update(ws)
            else:
                for u in units:
                    for w in windows(tokens(u)):
                        corpus.setdefault(w, "blog/" + slug)
    # --- fichas ---
    for f in glob.glob(ROOT + "/src/lib/comparador-*.ts"):
        text = open(f, encoding="utf-8").read()
        for fid, seg in split_by_key(text, "id"):
            if fid in Y_FICHAS:
                ws = set()
                for s in strings_in_segment(seg):
                    if len(tokens(s)) >= 8:
                        ws |= windows(tokens(s))
                y_new.setdefault("coches/" + fid, set()).update(ws)
            else:
                for s in strings_in_segment(seg):
                    if len(tokens(s)) >= 8:
                        for w in windows(tokens(s)):
                            corpus.setdefault(w, "coches/" + fid)
    return corpus, y_new

def main():
    show = int(sys.argv[2]) if len(sys.argv) > 2 and sys.argv[1] == "--show" else 10
    corpus, y_new = collect()
    print(f"corpus: {len(corpus)} ventanas 8-gramas (paginas no-Y)")
    print(f"paginas Y: {len(y_new)}")
    results = {}
    total_bad = 0
    for page in sorted(y_new):
        ws = y_new[page]
        bad_vs_corpus = [(w, corpus[w]) for w in sorted(ws) if w in corpus]
        # contra otras paginas Y
        others = set()
        for p2, ws2 in y_new.items():
            if p2 != page:
                others |= ws2
        bad_vs_y = [w for w in sorted(ws) if w in others]
        results[page] = (len(ws), len(bad_vs_corpus), len(bad_vs_y))
        total_bad += len(bad_vs_corpus) + len(bad_vs_y)
        print(f"{page}: {len(ws)} ventanas, corpus={len(bad_vs_corpus)}, otras-Y={len(bad_vs_y)}")
        for w, src in bad_vs_corpus[:show]:
            print(f"  CORPUS [{src}] :: {w}")
        for w in bad_vs_y[:show]:
            print(f"  OTRAS-Y :: {w}")
    print(f"TOTAL colisiones: {total_bad}")
    with open("/tmp/y-verify-result.json", "w", encoding="utf-8") as fh:
        json.dump({p: {"ventanas": v[0], "corpus": v[1], "otras_y": v[2]} for p, v in results.items()}, fh, indent=1, ensure_ascii=False)

if __name__ == "__main__":
    main()
