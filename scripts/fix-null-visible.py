#!/usr/bin/env python3
"""Quita el texto de trabajo «null» (y undefined/NaN) que se ve en pantalla.

Contexto (23/10/2026, auditoría AdSense): 73+ fichas de /campers/ y /autocaravanas/
decían cosas como «el precio de esta ficha queda en null». Para Google eso es una
página sin terminar. Este script NO inventa datos: solo cambia la palabra técnica
por «sin dato publicado» / «no publicado por el fabricante».

Uso:
  python3 scripts/fix-null-visible.py --src src/lib          # arregla el ORIGEN (cadenas "..." de .ts)
  python3 scripts/fix-null-visible.py --dist dist            # red de seguridad tras build/prerender
  python3 scripts/fix-null-visible.py --check dist           # solo cuenta (exit 1 si queda alguno)

--dist toca: el texto visible, <title>, metas y JSON-LD de las HTML de
campers/, autocaravanas/, caravanas/ y blog/; y las cadenas de prosa de dist/assets/*.js
(para que la hidratación de React no vuelva a pintar «null»). Cada .js tocado se valida
con `node --check`; si falla, se deja el original.
"""
import re, sys, os, glob, html, subprocess, shutil

CAMPOS = [(r'\bprecioDesde\b', 'precio'), (r'\bcargaUtilKg\b', 'carga útil'), (r'\bpesoKg\b', 'peso'),
          (r'\banchoMm\b', 'anchura'), (r'\baltoMm\b', 'altura'), (r'\blargoMm\b', 'longitud'),
          (r'\bplazasDormir\b', 'plazas para dormir'), (r'\bpotenciaCv\b', 'potencia'),
          (r'\bfuenteNombre/fuenteUrl\b', 'fuente'), (r'\bfuenteUrl\b', 'fuente')]
NP = 'sin dato publicado'
REGLAS = [
    (r'(no publicad[oa]s?\b[^()]{0,60}?) \(null\)', r'\1'),
    (r'\b(?:en )?null \(sin dato oficial\)', 'sin dato oficial'),
    (r'\b(el precio(?: de esta ficha| de partida| español)?) (queda|permanece) (honestamente )?en null\b', r'\1 \2 como «no publicado por el fabricante»'),
    (r'\bEn null quedan\b', 'Quedan ' + NP),
    (r'\bEn null:', 'Sin dato publicado:'),
    (r'\b([Pp]recio)(?: en)? null\b', r'\1 no publicado'),
    (r'\bcomo null\b', 'como no publicado'),
    (r'\bdeclarados? en null\b', lambda m: m.group(0).replace('en null', 'como no publicado')),
    (r'\bes null\b', 'no está publicado'),
    (r'\bel null honesto\b', 'la casilla vacía'),
    (r'\bpasa a null\b', 'queda ' + NP),
    (r'\s?=\s?null\b', ' ' + NP),
    (r'\(null\b', '(' + NP),
    (r'→ null\b', '→ ' + NP),
    (r'\ben null\b', NP),
    (r'\bnull\b', NP),
    (r'\bundefined\b', NP),
    (r'\bNaN\b', NP),
]
REGLAS = [(re.compile(a), b) for a, b in REGLAS]
CAMPOS = [(re.compile(a), b) for a, b in CAMPOS]
HAY = re.compile(r'\b(null|undefined|NaN)\b')

def limpiar(t):
    if not HAY.search(t):
        return t
    for a, b in CAMPOS:
        t = a.sub(b, t)
    for a, b in REGLAS:
        t = a.sub(b, t)
    t = re.sub(r'\b(\w+)( sin dato publicado)+', r'\1 sin dato publicado', t)
    t = re.sub(r'sin dato publicado sin\b', 'sin dato publicado, sin', t)
    return t

# Prosa dentro de cadenas JS/JSON: al menos 4 palabras con espacios y algo de castellano.
LIT = re.compile(r'"((?:[^"\\\n]|\\.){20,})"|`((?:[^`\\$]|\\.|\$(?!\{)){20,})`|\'((?:[^\'\\\n]|\\.){20,})\'')
ES = re.compile(r'[áéíóúñ]|\b(que|del|los|las|por|para|precio|marca|ficha|queda|quedan)\b')
def es_prosa(s):
    return s.count(' ') >= 4 and ES.search(s) and HAY.search(s) and not re.search(r'=>|function\s*\(|\breturn\b|[{};]\s*(var|let|const)\b', s)
def limpiar_literales(code):
    n = [0]
    def rep(m):
        s = m.group(0)
        q, cuerpo = s[0], s[1:-1]
        if not es_prosa(cuerpo):
            return s
        n[0] += 1
        return q + limpiar(cuerpo) + q
    return LIT.sub(rep, code), n[0]

def limpiar_html(doc):
    n = 0
    partes = re.split(r'(<script\b[^>]*>.*?</script>|<style\b[^>]*>.*?</style>|<[^>]+>)', doc, flags=re.S | re.I)
    for i, p in enumerate(partes):
        if not p:
            continue
        if p.startswith('<script') or p.startswith('<SCRIPT'):
            nuevo, k = limpiar_literales(p)
        elif p.startswith('<style'):
            continue
        elif p.startswith('<'):
            if re.match(r'<(meta|img)\b', p, re.I) and HAY.search(p):
                nuevo = re.sub(r'\b(content|alt|title)="([^"]*)"', lambda m: m.group(1) + '="' + limpiar(m.group(2)) + '"', p)
            else:
                nuevo = p
            k = int(nuevo != p)
        else:
            nuevo = limpiar(p); k = int(nuevo != p)
        if nuevo != p:
            partes[i] = nuevo; n += k
    return ''.join(partes), n

def visibles(doc):
    t = re.sub(r'<script\b.*?</script>|<style\b.*?</style>|<noscript\b.*?</noscript>', ' ', doc, flags=re.S | re.I)
    t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    return HAY.findall(t)

AQUI = os.path.dirname(os.path.abspath(__file__))
def limpiar_js(ficheros):
    """Corrige solo el texto de las cadenas (rangos que da acorn) y valida con node --check."""
    js = res = 0
    for i in range(0, len(ficheros), 50):
        lote = ficheros[i:i + 50]
        r = subprocess.run(['node', os.path.join(AQUI, 'fix-null-visible-rangos.mjs')] + lote, capture_output=True, text=True, cwd=AQUI)
        if r.returncode != 0:
            raise SystemExit('ERROR ayudante acorn: ' + r.stderr[:500])
        import json
        for f, rangos in json.loads(r.stdout).items():
            if isinstance(rangos, dict):
                print('AVISO js no parseable, sin tocar:', f, rangos['error'][:80]); continue
            if not rangos: continue
            code = open(f, encoding='utf-8', errors='surrogateescape').read()
            k = 0
            for a, b in sorted(rangos, reverse=True):
                cuerpo = code[a:b]
                if not es_prosa(cuerpo): continue
                nuevo = limpiar(cuerpo)
                if nuevo != cuerpo:
                    code = code[:a] + nuevo + code[b:]; k += 1
            if not k: continue
            tmp = f + '.tmp.mjs'
            open(tmp, 'w', encoding='utf-8', errors='surrogateescape').write(code)
            ok = subprocess.run(['node', '--check', tmp], capture_output=True).returncode == 0
            if ok:
                os.replace(tmp, f); js += 1; res += k
            else:
                os.remove(tmp); print('AVISO js sin tocar (node --check falla):', f)
    return js, res

DIRS = ['campers', 'autocaravanas', 'caravanas', 'blog']
def htmls(dist):
    for d in DIRS:
        yield from glob.glob(os.path.join(dist, d, '**', '*.html'), recursive=True)

def cmd_dist(dist, check=False):
    pag = res = 0; malos = []
    for f in htmls(dist):
        doc = open(f, encoding='utf-8', errors='surrogateescape').read()
        if check:
            v = visibles(doc)
            if v: malos.append((f, len(v)))
            continue
        nuevo, k = limpiar_html(doc)
        if nuevo != doc:
            open(f, 'w', encoding='utf-8', errors='surrogateescape').write(nuevo); pag += 1
        if visibles(nuevo): malos.append((f, len(visibles(nuevo))))
    if check:
        for f, k in malos: print('QUEDA', k, f)
        print(f'check: {len(malos)} páginas con null/undefined/NaN visible'); return 1 if malos else 0
    js, res = limpiar_js([os.path.abspath(x) for x in glob.glob(os.path.join(dist, 'assets', '*.js'))])
    print(f'dist: {pag} HTML corregidas, {js} JS corregidos ({res} cadenas); quedan {len(malos)} HTML con null visible')
    for f, k in malos[:20]: print('  QUEDA', k, f)
    return 1 if malos else 0

def cmd_src(src):
    tot = 0
    for f in glob.glob(os.path.join(src, '**', '*.ts'), recursive=True) + glob.glob(os.path.join(src, '**', '*.tsx'), recursive=True):
        code = open(f, encoding='utf-8').read()
        nuevo, k = limpiar_literales(code)
        if nuevo != code:
            open(f, 'w', encoding='utf-8').write(nuevo); tot += k; print(f'{k:3d} {f}')
    print(f'src: {tot} cadenas corregidas'); return 0

if __name__ == '__main__':
    a = sys.argv[1:]
    if len(a) == 2 and a[0] == '--src': sys.exit(cmd_src(a[1]))
    if len(a) == 2 and a[0] == '--dist': sys.exit(cmd_dist(a[1]))
    if len(a) == 2 and a[0] == '--check': sys.exit(cmd_dist(a[1], check=True))
    print(__doc__); sys.exit(2)
