"""Vuelca bloques con colision + parrafo crudo correspondiente, para redactar reemplazos."""
import json, re, glob, sys
sys.path.insert(0, 'hidden_files/unico-coches-50-v-001')
from extraer_corpus import clean_blog_content, parse_comparador, parse_blog

corpus = json.load(open('hidden_files/unico-coches-50-v-001/corpus.json', encoding='utf-8'))
col = json.load(open('hidden_files/unico-coches-50-v-001/colisiones.json', encoding='utf-8'))
tanda = json.load(open('hidden_files/unico-coches-50-v-001/tanda50.json', encoding='utf-8'))

def find_file_with(pattern, files):
    for p in files:
        txt = open(p, encoding='utf-8').read()
        if pattern in txt:
            return p, txt
    return None, None

comp_files = sorted(glob.glob('src/lib/comparador-coches-*.ts'))
blog_files = sorted(glob.glob('src/lib/blog-posts-*.ts'))

def entry_span(txt, key, slug):
    i = txt.find(f'{key}: "{slug}"')
    if i < 0:
        i = txt.find(f'"{key}": "{slug}"')
    if i < 0: return None
    start = max(txt.rfind('\n  {', 0, i), txt.rfind('\n{', 0, i))
    nxt = len(txt)
    for pat in ('\n  {', '\n{'):
        j = txt.find(pat, i+1)
        if j > 0: nxt = min(nxt, j)
    return txt[start:nxt]

out = []
for p in tanda:
    r = next(x for x in col['resumen'] if x['url'] == p['url'])
    if r['grams_colision'] == 0: continue
    src = corpus['fichas'] if p['tipo'] == 'ficha' else corpus['blogs']
    blocks = src[p['slug']]
    out.append(f"\n===== {p['tipo'].upper()} {p['url']} col={r['grams_colision']} =====")
    if p['tipo'] == 'ficha':
        f, txt = find_file_with(f'id: "{p["slug"]}"', comp_files)
        out.append(f"FILE: {f}")
        span = entry_span(txt, 'id', p['slug']) if txt else ''
        for bi in sorted(int(b) for b in r['bloques_con_colision']):
            blk = blocks[bi]
            # localizar literal en el span
            esc = blk.replace('\\', '\\\\').replace('"', '\\"')
            found = 'SI' if (blk in span or esc in span) else 'NO?'
            out.append(f"  [{bi}] literal_en_span={found} :: {blk}")
    else:
        f, txt = find_file_with(f'slug: "{p["slug"]}"', blog_files)
        if not f:
            f, txt = find_file_with(f'"slug": "{p["slug"]}"', blog_files)
        out.append(f"FILE: {f}")
        span = entry_span(txt, 'slug', p['slug']) if txt else ''
        # parrafos crudos del contenido
        raw_paras = []
        if span:
            m = re.search(r'content: `(.*?)`,?\n\s*\},', span, re.S)
            if m: raw = m.group(1)
            else:
                m2 = re.search(r'"?content"?: "((?:[^"\\]|\\.)*)"', span, re.S)
                if m2: raw = m2.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                else:
                    m3 = re.search(r'content:\s*\n\s*"((?:[^"\\]|\\.)*)"', span, re.S)
                    raw = m3.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\') if m3 else ''
            for para in re.split(r'\n\s*\n', clean_blog_content(raw)):
                para = para.strip()
                if para: raw_paras.append(para)
        for bi in sorted(int(b) for b in r['bloques_con_colision']):
            blk = blocks[bi]
            out.append(f"  [{bi}] :: {blk}")
open('hidden_files/unico-coches-50-v-001/bloques_a_reescribir.txt', 'w', encoding='utf-8').write('\n'.join(out))
print("volcado:", len(out), "lineas")
