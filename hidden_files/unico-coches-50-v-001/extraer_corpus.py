"""Extrae el texto propio (por bloques) de fichas y posts, y mide 8-gramas compartidos.
Reglas: bloques = cada pro/contra, cada parrafo/item FAQ de blog, nota EuroNCAP, textos de
mantenimiento y notas de coste. Fuera: tablas (etiquetas de tabla excluidas por la orden),
alts de imagen, keywords, excerpt, navegacion (no esta en los datos).
Normalizacion: minusculas, solo letras/numeros/espacios (se conservan acentos y enes)."""
import re, glob, json, sys, unicodedata

def norm(text):
    text = text.lower()
    text = ''.join(ch if (ch.isalnum() or ch.isspace()) else ' ' for ch in text)
    return re.sub(r'\s+', ' ', text).strip()

def grams(words, n=8):
    return {' '.join(words[i:i+n]) for i in range(len(words)-n+1)}

def unesc(s):
    return s.replace('\\"', '"').replace("\\'", "'").replace('\\\\', '\\')

def unesc_content(s):
    # orden: \n (doble escape de salto) -> salto; \n simple -> salto; \" -> "; \/ -> /; \\ -> \
    s = s.replace('\\\\n', '\n')
    s = s.replace('\\n', '\n')
    s = s.replace('\\"', '"')
    s = s.replace('\\/', '/')
    s = s.replace('\\\\', '\\')
    return s

def extract_strings(block):
    return [unesc(m) for m in re.findall(r'"((?:[^"\\]|\\.)*)"', block)]

def parse_comparador(path):
    txt = open(path, encoding='utf-8').read()
    txt = txt.replace('},  {', '},\n  {').replace('},{', '},\n{')
    chunks = re.split(r'(?m)^\s*\{$', txt)
    out = {}
    for ch in chunks:
        m = re.search(r'(?m)^\s*"?id"?: "([^"]+)"', ch)
        if not m:
            continue
        fid = m.group(1)
        blocks = []
        for field in ('pros', 'contras'):
            mm = re.search(r'"?' + field + r'"?: \[(.*?)\]', ch, re.S)
            if mm:
                blocks += extract_strings(mm.group(1))
        # nota EuroNCAP
        mm = re.search(r'"?euroncap"?: \{(.*?)\n\s*\},', ch, re.S)
        if mm:
            nm = re.search(r'nota: "((?:[^"\\]|\\.)*)"', mm.group(1))
            if nm: blocks.append(unesc(nm.group(1)))
        # plan de mantenimiento: intervalo, nombre, queSeCambia, fuente
        mm = re.search(r'"?planMantenimiento"?: \{(.*?)\n\s*\},', ch, re.S)
        if mm:
            for f in ('intervalo', 'nombre', 'queSeCambia', 'fuente'):
                for fm in re.finditer(f + r': "((?:[^"\\]|\\.)*)"', mm.group(1)):
                    blocks.append(unesc(fm.group(1)))
        # notas de coste mensual
        for nm in re.finditer(r'notas:\s*\n?\s*"((?:[^"\\]|\\.)*)"', ch):
            blocks.append(unesc(nm.group(1)))
        out[fid] = blocks
    return out

def clean_blog_content(c):
    # quitar etiquetas img completas
    c = re.sub(r'<img[^>]*>', ' ', c)
    # enlaces -> solo texto
    c = re.sub(r'<a href=[^>]*>(.*?)</a>', r'\1', c)
    c = re.sub(r'<[^>]+>', ' ', c)
    c = c.replace('**', '').replace('__', '')
    lines = []
    for line in c.split('\n'):
        ls = line.strip()
        if ls.startswith('|'):
            continue  # tabla: fuera (etiquetas de tabla)
        if re.match(r'^\|?[\s:\-|]+$', ls):
            continue
        lines.append(ls)
    return '\n'.join(lines)

def parse_blog(path):
    txt = open(path, encoding='utf-8').read()
    txt = txt.replace('},  {', '},\n  {').replace('},{', '},\n{')
    chunks = re.split(r'(?m)^\s*\{$', txt)
    out = {}
    for ch in chunks:
        m = re.search(r'(?m)^\s*"?slug"?: "([^"]+)"', ch)
        if not m:
            continue
        slug = m.group(1)
        tm = re.search(r'"?title"?: "((?:[^"\\]|\\.)*)"', ch)
        raw = None
        cm = re.search(r'content: `(.*?)`,?\n\s*\},', ch, re.S)
        if cm:
            raw = cm.group(1)
        else:
            cm2 = re.search(r'"?content"?: "((?:[^"\\]|\\.)*)"', ch, re.S)
            if cm2:
                raw = unesc_content(cm2.group(1))
            else:
                cm3 = re.search(r'content:\s*\n\s*"((?:[^"\\]|\\.)*)"', ch, re.S)
                if cm3:
                    raw = unesc_content(cm3.group(1))
                else:
                    cm4 = re.search(r'content:\s*\n\s*`(.*?)`', ch, re.S)
                    if cm4:
                        raw = cm4.group(1)
        blocks = []
        if tm: blocks.append(unesc(tm.group(1)))
        if raw is not None:
            cleaned = clean_blog_content(raw)
            for para in re.split(r'\n\s*\n', cleaned):
                para = para.strip()
                if not para: continue
                if para.startswith('#'):
                    blocks.append(re.sub(r'^#+\s*', '', para))
                elif para.startswith('- '):
                    for item in para.split('\n'):
                        item = re.sub(r'^-\s*', '', item).strip()
                        if item: blocks.append(item)
                else:
                    blocks.append(re.sub(r'\s+', ' ', para))
        out[slug] = blocks
    return out

if __name__ == '__main__':
    fichas = {}
    for p in sorted(glob.glob('src/lib/comparador-coches-*.ts')):
        fichas.update(parse_comparador(p))
    blogs = {}
    for p in sorted(glob.glob('src/lib/blog-posts-*.ts')):
        blogs.update(parse_blog(p))
    print(f"fichas extraidas: {len(fichas)}, blogs extraidos: {len(blogs)}")
    with open('hidden_files/unico-coches-50-v-001/corpus.json', 'w', encoding='utf-8') as f:
        json.dump({'fichas': fichas, 'blogs': blogs}, f, ensure_ascii=False)
