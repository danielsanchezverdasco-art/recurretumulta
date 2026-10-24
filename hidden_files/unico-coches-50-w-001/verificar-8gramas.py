# -*- coding: utf-8 -*-
import re, glob, json, os, sys
ROOT = os.path.expanduser('~/workspace/wt-unico50-w-001')
os.chdir(ROOT)
manifest = json.load(open('hidden_files/unico-coches-50-w-001/textos-nuevos.json', encoding='utf-8'))
WORD = re.compile(r'[a-záéíóúñü0-9]+', re.I)
def grams(text):
    w = [x.lower() for x in WORD.findall(text)]
    return {' '.join(w[i:i+8]) for i in range(len(w)-7)}
def strip_html(t):
    return re.sub(r'<[^>]+>', ' ', t)
def ts_decode(raw):
    out, i = [], 0
    while i < len(raw):
        c = raw[i]
        if c == '\\' and i+1 < len(raw):
            n = raw[i+1]
            out.append({'n':'\n','r':'\r','t':'\t','"':'"','\\':'\\',"'":"'"}.get(n, '\\'+n)); i += 2
        else:
            out.append(c); i += 1
    return ''.join(out)
def parse_ts_string(text, start):
    i = start+1; raw = []
    while i < len(text):
        c = text[i]
        if c == '\\' and i+1 < len(text):
            raw.append(c); raw.append(text[i+1]); i += 2
        elif c == '"':
            return ts_decode(''.join(raw)), i+1
        else:
            raw.append(c); i += 1
    raise ValueError('unterminated')

index = {}  # gram -> set of page keys
def add_page(key, text):
    for g in grams(strip_html(text)):
        index.setdefault(g, set()).add(key)
# fichas: solo ficheros de datos de vehículos (no lite/generados/media/historia)
ficha_files = [f for f in glob.glob('src/lib/comparador-*.ts')
               if not any(s in f for s in ('lite', 'generated', 'media-', 'historia-', 'garantias-', 'mantenimiento-'))]
for f in ficha_files:
    t = open(f, encoding='utf-8').read()
    for m in re.finditer(r'id:\s*"([^"]+)"', t):
        slug = m.group(1)
        end = t.find('\n  },', m.start())
        block = t[m.start():end] if end > 0 else t[m.start():m.start()+3000]
        add_page(('ficha', slug), block)
for f in glob.glob('src/lib/blog-posts-*.ts'):
    t = open(f, encoding='utf-8').read()
    for m in re.finditer(r'"slug":\s*"([^"]+)"', t):
        slug = m.group(1)
        cpos = t.find('"content":', m.start())
        if cpos < 0: continue
        q = t.find('"', cpos + len('"content":'))
        try:
            content, _ = parse_ts_string(t, q)
        except Exception:
            continue
        add_page(('blog', slug), t[m.start():cpos] + ' ' + content)
print('index grams:', len(index), file=sys.stderr)
results, collisions = [], {}
for p in manifest:
    key = (p['type'], p['slug'])
    mygrams = set()
    for txt in p['texts']:
        mygrams |= grams(txt)
    bad = {}
    for g in mygrams:
        others = [k for k in index.get(g, ()) if k != key]
        if others:
            bad[g] = others[:3]
    results.append((p['url'], len(bad)))
    if bad: collisions[p['url']] = bad
    print(p['url'], len(bad))
    for g, o in list(bad.items())[:12]:
        print('   ', g, '->', o)
with open('hidden_files/unico-coches-50-w-001/verificacion-8gramas.csv', 'w', encoding='utf-8') as fh:
    fh.write('url;coincidencias_8gramas\n')
    for url, n in results:
        fh.write(f'{url};{n}\n')
json.dump(collisions, open('hidden_files/unico-coches-50-w-001/colisiones.json', 'w'), ensure_ascii=False, indent=1)
print('TOTAL pages with collisions:', len(collisions), 'total grams:', sum(n for _, n in results))
