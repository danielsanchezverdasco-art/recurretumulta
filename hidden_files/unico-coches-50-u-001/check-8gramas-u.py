#!/usr/bin/env python3
"""8-gram check for unico-coches-50-u-001.
Corpus: all text in src/**/*.ts except *.generated.ts and data-loaders,
with the two U posts' own objects removed (they are being replaced).
New texts: /tmp/u-posts/newA.txt and newB.txt (or the content fields
in the worktree after insertion -- run with --from-worktree).
Tokenisation: lowercase words (letters incl. accents + numbers incl. decimals),
HTML tags stripped. Table headers are NOT special-cased: the new texts
were written so their table cells also avoid shared 8-grams.
Exclusions: none beyond removing the two own posts from the corpus.
Usage: python3 check-8gramas-u.py [--from-worktree]
Prints collisions per page and exits 1 if any collision remains.
"""
import re, sys, glob, os
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TOKEN = re.compile(r"[a-záéíóúñü]+|[0-9]+(?:[.,][0-9]+)?", re.I)

def tokens(text):
    text = re.sub(r"<[^>]+>", " ", text)
    return [t.lower() for t in TOKEN.findall(text)]

def grams(toks, n=8):
    return set(tuple(toks[i:i+n]) for i in range(len(toks)-n+1))

def remove_post_block(txt, slug):
    idx = txt.find(slug)
    if idx < 0: return txt, False
    # object start: last "{\n" before slug
    start = txt.rfind("{\n", 0, idx)
    if start < 0: start = txt.rfind("{", 0, idx)
    # object end: first object close after slug (mid-array "}," or last-element "}")
    end = -1; endlen = 0
    for pat in ("\n  },", "\n},", "\n  }\n", "\n}\n"):
        j = txt.find(pat, idx)
        if j >= 0:
            end, endlen = j, len(pat); break
    if start < 0 or end < 0: return txt, False
    return txt[:start] + txt[end+endlen:], True

def build_corpus():
    corpus = set()
    files = []
    for p in glob.glob(os.path.join(ROOT, "src", "**", "*.ts"), recursive=True):
        if p.endswith(".generated.ts") or "/data-loaders/" in p or p.endswith("-slugs.ts"): continue
        files.append(p)
    for p in files:
        txt = open(p, encoding="utf-8").read()
        for slug in ("ue-bruselas-cuotas-hibridos-chinos", "ue-china-freno-hibridos-enchufables"):
            if slug in txt and ('content' in txt):
                txt2, ok = remove_post_block(txt, slug)
                if ok: txt = txt2
        corpus |= grams(tokens(txt))
    return corpus

def extract_from_worktree():
    # reuse simple extraction: read the two files, find content strings
    def extract(path, slug):
        txt = open(os.path.join(ROOT, path), encoding="utf-8").read()
        for m in re.finditer(re.escape(slug), txt):
            idx = m.start()
            j = txt.find("content", idx)
            if j < 0: continue
            k = txt.find(":", j) + 1
            while txt[k] in " \t\n": k += 1
            if txt[k] == "`":
                end = txt.find("`,", k+1)
                if end > 0: return txt[k+1:end]
            elif txt[k] == '"':
                out=[]; i=k+1
                while i < len(txt):
                    c=txt[i]
                    if c == "\\":
                        nxt=txt[i+1]
                        out.append({"n":"\n","t":"\t","r":"\r",'"':'"',"'":"'", "\\":"\\"}.get(nxt,nxt)); i+=2
                    elif c == '"': break
                    else: out.append(c); i+=1
                return "".join(out)
        raise SystemExit(f"content not found for {slug}")
    return {
        "ue-bruselas-cuotas-hibridos-chinos": extract("src/lib/blog-posts-motor-2026-l.ts", "ue-bruselas-cuotas-hibridos-chinos"),
        "ue-china-freno-hibridos-enchufables": extract("src/lib/blog-posts-ue-china-hibridos-2026.ts", "ue-china-freno-hibridos-enchufables"),
    }

def main():
    from_worktree = "--from-worktree" in sys.argv
    corpus = build_corpus()
    print(f"corpus 8-grams: {len(corpus)}")
    if from_worktree:
        pages = extract_from_worktree()
    else:
        pages = {
            "ue-bruselas-cuotas-hibridos-chinos": open("/tmp/u-posts/newA.txt", encoding="utf-8").read(),
            "ue-china-freno-hibridos-enchufables": open("/tmp/u-posts/newB.txt", encoding="utf-8").read(),
        }
    # also add excerpts/titles (unchanged) to page text for completeness
    excerpts = {
        "ue-bruselas-cuotas-hibridos-chinos": "Pekín rechaza limitar sus híbridos enchufables y Bruselas prepara cuotas unilaterales con aranceles. BYD responde llevando a París su artillería DM-i. Qué cambia para los precios en España.",
        "ue-china-freno-hibridos-enchufables": "La UE y China han pactado moderar las exportaciones de híbridos e híbridos enchufables chinos a Europa, con un recorte de más de la mitad en 4 años. Qué significa para quien busque un PHEV chino en España: oferta, precios y calendario.",
    }
    page_grams = {}
    for slug, text in pages.items():
        full = excerpts[slug] + "\n" + text
        page_grams[slug] = grams(tokens(full))
        print(f"{slug}: {len(tokens(full))} tokens, {len(page_grams[slug])} 8-grams")
    total_bad = 0
    slugs = list(pages)
    for slug in slugs:
        bad_corpus = page_grams[slug] & corpus
        others = set()
        for o in slugs:
            if o != slug: others |= page_grams[o]
        bad_other = page_grams[slug] & others
        print(f"\n{slug}: vs resto repo = {len(bad_corpus)} colisiones, vs otro post U = {len(bad_other)}")
        for g in sorted(bad_corpus):
            print("  CORPUS:", " ".join(g))
        for g in sorted(bad_other):
            print("  OTRO-U:", " ".join(g))
        total_bad += len(bad_corpus) + len(bad_other)
    print(f"\nTOTAL colisiones: {total_bad}")
    sys.exit(1 if total_bad else 0)

if __name__ == "__main__":
    main()
