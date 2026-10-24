"""Aplica reemplazos de bloques (fichas: literal; blogs: parrafo) con verificacion.
Uso: python3 aplicar_reemplazos.py reemplazos.json
reemplazos.json: lista de {tipo, slug, bloque, viejo, nuevo}
  - ficha: viejo = texto literal exacto del bloque; nuevo = texto nuevo.
  - blog: viejo = texto limpio del bloque (como en corpus); nuevo = parrafo logico nuevo
    (puede llevar \n para separar pregunta/respuesta FAQ y <a href=...>...</a>).
El editor reparsea el fichero, comprueba que el bloque coincide con 'viejo' y que tras
el cambio el bloque coincide con el limpio de 'nuevo'. Si algo no cuadra, ABORTA sin tocar.
"""
import json, re, sys, glob
sys.path.insert(0, 'hidden_files/unico-coches-50-v-001')
from extraer_corpus import parse_comparador, parse_blog, clean_blog_content, unesc_content, norm

def find_file(files, needle):
    for p in files:
        if needle in open(p, encoding='utf-8').read():
            return p
    return None

def entry_span(txt, key, slug):
    i = txt.find(f'{key}: "{slug}"')
    if i < 0: i = txt.find(f'"{key}": "{slug}"')
    assert i >= 0, f'slug no hallado {slug}'
    starts = [x for x in (txt.rfind('\n  {', 0, i), txt.rfind('\n{', 0, i)) if x >= 0]
    # entradas pegadas en la misma linea: '},  {' -> el '{' tras el '},' previo es el inicio
    j = txt.rfind('},', 0, i)
    if j >= 0:
        k = txt.find('{', j, i)
        if k >= 0: starts.append(k)
    start = max(starts) if starts else 0
    ends = []
    for pat in ('\n  {', '\n{'):
        j = txt.find(pat, i + 1)
        if j > 0: ends.append(j)
    # cierre pegado: '},' seguido (tras espacios) de '{' de la entrada siguiente
    j = txt.find('},', i + 1)
    while j >= 0:
        k = j + 2
        while k < len(txt) and txt[k] == ' ': k += 1
        if k < len(txt) and txt[k] == '{':
            ends.append(j + 1)
            break
        j = txt.find('},', j + 1)
    end = min(ends) if ends else len(txt)
    return start, end

def esc_literal(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

def aplicar_ficha(txt, span, viejo, nuevo):
    s, e = span
    seg = txt[s:e]
    # candidatos: literal tal cual o con comillas escapadas
    for cand in (viejo, esc_literal(viejo)):
        if seg.count(f'"{cand}"') == 1:
            return txt[:s] + seg.replace(f'"{cand}"', f'"{esc_literal(nuevo)}"', 1) + txt[e:]
    raise AssertionError(f'literal ficha no unico en span: {viejo[:80]!r} count={[seg.count(chr(34)+c+chr(34)) for c in (viejo, esc_literal(viejo))]}')

def logical_paras_from_raw(raw, fmt):
    """Devuelve (lista de parrafos logicos, separador) para un contenido crudo ya desescapado."""
    paras = [p for p in raw.split('\n\n')]
    return paras

def aplicar_blog(txt, span, viejo, nuevo):
    s, e = span
    seg = txt[s:e]
    m = re.search(r'content: `(.*?)`,?\n\s*\},', seg, re.S)
    fmt = 'template'
    if m:
        raw_file = m.group(1)
        raw = raw_file
    else:
        m2 = re.search(r'"?content"?: "((?:[^"\\]|\\.)*)"', seg, re.S)
        if m2:
            raw_file = m2.group(1)
            raw = unesc_content(raw_file)
            fmt = 'quoted'
        else:
            m3 = re.search(r'content:\s*\n\s*"((?:[^"\\]|\\.)*)"', seg, re.S)
            assert m3, 'content no hallado en span blog'
            raw_file = m3.group(1)
            raw = unesc_content(raw_file)
            fmt = 'quoted_nl'
    # parrafos logicos y su limpio, espejo del extractor
    raw_paras = raw.split('\n\n')
    # construir lista de bloques (sin titulo) como el extractor
    bloques = []  # (indice_parrafo_logico, subindice_item_o_None, texto_limpio)
    for pi, para in enumerate(raw_paras):
        cl = clean_blog_content(para).strip()
        if not cl: continue
        if cl.startswith('#'):
            bloques.append((pi, None, re.sub(r'^#+\s*', '', cl)))
        elif cl.startswith('- '):
            for item in cl.split('\n'):
                it = re.sub(r'^-\s*', '', item).strip()
                if it: bloques.append((pi, it, it))
        else:
            bloques.append((pi, None, re.sub(r'\s+', ' ', cl)))
    # buscar viejo (comparando normalizado para tolerar espacios)
    cand = [(pi, sub, b) for (pi, sub, b) in bloques if norm(b) == norm(viejo)]
    assert len(cand) == 1, f'bloque blog no unico: {viejo[:80]!r} -> {len(cand)}'
    pi, sub, _ = cand[0]
    if sub is None:
        raw_paras[pi] = nuevo
    else:
        # item de lista: reemplazar la linea del item dentro del parrafo
        lines = raw_paras[pi].split('\n')
        done = False
        for li, line in enumerate(lines):
            cl_line = clean_blog_content(line).strip()
            cl_line = re.sub(r'^-\s*', '', cl_line)
            if norm(cl_line) == norm(sub):
                lines[li] = '- ' + nuevo
                done = True
                break
        assert done, 'item de lista no hallado'
        raw_paras[pi] = '\n'.join(lines)
    new_raw = '\n\n'.join(raw_paras)
    if fmt == 'template':
        new_file = new_raw
        assert '`' not in new_file and '${' not in new_file, 'nuevo con backtick/${ en template'
    else:
        # estilo de escape del fichero: doble \\n si el crudo usa \\n, si no simple \n
        double = '\\\\n' in raw_file
        esc = new_raw.replace('\\', '\\\\').replace('"', '\\"')
        esc = esc.replace('\n', '\\\\n' if double else '\\n')
        new_file = esc
    # sustituir el contenido crudo exacto dentro del segmento
    assert seg.count(raw_file) == 1, 'contenido crudo no unico en span'
    new_seg = seg.replace(raw_file, new_file, 1)
    return txt[:s] + new_seg + txt[e:]

def main():
    reps = json.load(open(sys.argv[1], encoding='utf-8'))
    comp_files = sorted(glob.glob('src/lib/comparador-coches-*.ts'))
    blog_files = sorted(glob.glob('src/lib/blog-posts-*.ts'))
    # agrupar por fichero para escribir una vez
    by_file = {}
    for r in reps:
        if r['tipo'] == 'ficha':
            f = find_file(comp_files, f'id: "{r["slug"]}"') or find_file(comp_files, f'"id": "{r["slug"]}"')
        else:
            f = find_file(blog_files, f'slug: "{r["slug"]}"') or find_file(blog_files, f'"slug": "{r["slug"]}"')
        assert f, f'fichero no hallado {r["slug"]}'
        by_file.setdefault(f, []).append(r)
    for f, rs in by_file.items():
        txt = open(f, encoding='utf-8').read()
        for r in rs:
            key = 'id' if r['tipo'] == 'ficha' else 'slug'
            span = entry_span(txt, key, r['slug'])
            if r['tipo'] == 'ficha':
                txt = aplicar_ficha(txt, span, r['viejo'], r['nuevo'])
            else:
                txt = aplicar_blog(txt, span, r['viejo'], r['nuevo'])
        open(f, 'w', encoding='utf-8').write(txt)
        print(f'editado {f}: {len(rs)} reemplazos')
    print(f'total: {len(reps)} reemplazos en {len(by_file)} ficheros')

if __name__ == '__main__':
    main()
