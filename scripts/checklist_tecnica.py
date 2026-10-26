#!/usr/bin/env python3
"""Checklist técnica SEO sobre dist local (solo lectura). Uso:
  python3 checklist_tecnica.py [--dist DIR] [--out FILE] [--ext N]
--ext N: muestrea N enlaces externos (HEAD, 4 hilos, nunca recurretumulta.online). 0 = no."""
import os, re, sys, json, html, time, argparse, random, collections, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor
ap = argparse.ArgumentParser()
ap.add_argument('--dist', default='/workspace/r24/wt/dist')
ap.add_argument('--out', default='/workspace/seo/rev24/checklist-resultado.md')
ap.add_argument('--ext', type=int, default=40)
ap.add_argument('--vivo', default='/workspace/r24/ficheros-6adb1759040e3f260bcaff51.json', help='manifiesto de ficheros del deploy en vivo (la subida es incremental: lo que ya está en vivo sigue existiendo). "" = solo dist')
ap.add_argument('--cortas', default='/workspace/seo/rev24/paginas-cortas.md')
A = ap.parse_args(); D = A.dist.rstrip('/'); T0 = time.time()
HOST = 'https://recurretumulta.online'
SECT = ('coches', 'motos', 'patinetes')
NOFICHA = {'marca', 'marcas', 'categoria', 'tipo', 'comparar', 'etiqueta', 'pagina', 'segmento'}
fails = collections.defaultdict(lambda: collections.defaultdict(list))  # punto -> tipo -> [urls]
def F(p, t, u): fails[p][t].append(u)

# ---------- carga ----------
pages = {}  # url -> html
for root, _, files in os.walk(D):
    for f in files:
        if f.endswith('.html'):
            fp = os.path.join(root, f); rel = os.path.relpath(fp, D).replace(os.sep, '/')
            if rel == 'index.html': u = '/'
            elif rel.endswith('/index.html'): u = '/' + rel[:-10]
            else: u = '/' + rel
            pages[u] = open(fp, encoding='utf-8', errors='replace').read()
redir = {}
if os.path.exists(D + '/_redirects'):
    for l in open(D + '/_redirects', encoding='utf-8'):
        p = l.split()
        if len(p) >= 2 and not l.startswith('#'):
            st = re.sub(r'\D', '', p[2]) if len(p) > 2 else '301'
            redir[p[0].rstrip('/').lower() or '/'] = (p[1], st or '301', '*' in p[0] or ':' in p[0])
def norm(u): return (u.split('#')[0].split('?')[0].rstrip('/').lower()) or '/'
pidx = {norm(u): u for u in pages}
VIVO = set()
if A.vivo and os.path.exists(A.vivo): VIVO = {k.lower() for k in json.load(open(A.vivo))}
solo_vivo = set()
def exists_file(path):
    path = urllib.parse.unquote(path.split('#')[0].split('?')[0])
    if os.path.isfile(D + path) or os.path.isfile(D + path.rstrip('/') + '/index.html'): return True
    if path.lower() in VIVO or (path.rstrip('/') + '/index.html').lower() in VIVO: solo_vivo.add(path); return True
    return False
def resolve(path, hops=0):
    """-> (estado, destino). estado: ok | redir | cadena | 404 | splat"""
    n = norm(path)
    if n in pidx: return 'ok', pidx[n]
    if n in redir:
        to, st, _ = redir[n]
        if to.startswith('http'): return 'redir_ext', to
        if st == '200':
            return ('ok', to) if exists_file(to) or norm(to) in pidx else ('404', to)
        s2, d2 = resolve(to, hops + 1) if hops < 5 else ('cadena', to)
        if s2 == 'ok': return ('redir' if hops == 0 else 'cadena'), d2
        if s2 in ('redir', 'cadena'): return 'cadena', d2
        return '404', to
    if exists_file(path): return 'ok', path
    for k, (to, st, w) in redir.items():
        if w and n.startswith(k.split('*')[0].split(':')[0].rstrip('/')): return 'splat', to
    return '404', path

R_LD = re.compile(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', re.S | re.I)
R_CAN = re.compile(r'<link[^>]+rel=["\']canonical["\'][^>]*href=["\']([^"\']+)', re.I)
R_ROB = re.compile(r'<meta[^>]+name=["\']robots["\'][^>]*content=["\']([^"\']+)', re.I)
R_TIT = re.compile(r'<title[^>]*>(.*?)</title>', re.S | re.I)
R_DES = re.compile(r'<meta[^>]+name=["\']description["\'][^>]*content=["\']([^"\']*)', re.I)
R_H1 = re.compile(r'<h1[\s>]', re.I)
R_HREF = re.compile(r'<a\b[^>]*\bhref=["\']([^"\']+)', re.I)
R_SRC = re.compile(r'<(?:img|source)\b[^>]*?\b(src|srcset)=["\']([^"\']+)', re.I)
R_HRL = re.compile(r'<link[^>]+hreflang=["\']([^"\']+)["\'][^>]*href=["\']([^"\']+)', re.I)
def text_of(h):
    h = re.sub(r'<(script|style|noscript)\b.*?</\1>', ' ', h, flags=re.S | re.I)
    return html.unescape(re.sub(r'<[^>]+>', ' ', h))
def meta(u):
    h = pages[u]; c = R_CAN.search(h); r = R_ROB.search(h)
    return (c.group(1) if c else None), ('noindex' in r.group(1).lower() if r else False)
def is_404(h): return bool(re.search(r'<title[^>]*>[^<]*(404|no encontrad)', h, re.I))
M = {u: meta(u) for u in pages}
indexable = {u for u, (c, ni) in M.items() if not ni and c and norm(c.replace(HOST, '')) == norm(u) and not u.endswith('404.html') and not is_404(pages[u])}

# ---------- 1) schema producto ----------
def walk(o):
    if isinstance(o, dict):
        yield o
        for v in o.values(): yield from walk(v)
    elif isinstance(o, list):
        for v in o: yield from walk(v)
def bad_vals(o, path=''):
    if isinstance(o, dict):
        for k, v in o.items(): yield from bad_vals(v, path + '.' + k)
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from bad_vals(v, path + f'[{i}]')
    elif o is None or (isinstance(o, str) and (o.strip() == '' or o.strip().lower() in ('null', 'undefined', 'nan', 'none'))) or (isinstance(o, float) and o != o):
        yield path
PT = {'Product', 'Car', 'Vehicle', 'Motorcycle', 'IndividualProduct'}
def types(n):
    t = n.get('@type'); return set(t if isinstance(t, list) else [t])
def num_variants(p):
    i = int(round(p)); s = f'{i:,}'.replace(',', '.')
    return {s, str(i), f'{i:,}'.replace(',', ' '), f'{i:,}'.replace(',', '\u202f'), f'{i:,}'.replace(',', '\xa0')}
fichas = [u for u in pages if u.strip('/').count('/') == 1 and u.strip('/').split('/')[0] in SECT and u.strip('/').split('/')[1] not in NOFICHA and not u.endswith('.html')]
nfichas_ok = 0
for u in fichas:
    h = pages[u]; prods = []; ok = True
    for blk in R_LD.findall(h):
        try: j = json.loads(html.unescape(blk) if '&quot;' in blk else blk)
        except Exception as e: F(1, 'JSON-LD no parsea', u); ok = False; continue
        for n in walk(j):
            if types(n) & PT: prods.append(n)
            if 'aggregateRating' in n or 'review' in n:
                if not re.search(r'(reseñas?|opiniones?) de (usuarios|propietarios)|itemprop=["\']review', h, re.I): F(1, 'aggregateRating/review sin reseñas visibles', u); ok = False
        for bp in bad_vals(j):
            F(1, 'valor null/undefined/NaN/vacío en JSON-LD', f'{u} ({bp})'); ok = False; break
    # 26/10 r1406: una ficha noindex (sin foto real o stub de redirección 301!) no sale en resultados
    # enriquecidos; ahí «imagen ausente => sin image» es lo correcto y no cuenta como fallo.
    _ni = M.get(u, (None, False))[1]
    if not prods:
        if not _ni: F(1, 'sin Product/Car/Vehicle', u)
        continue
    p = prods[0]
    for k in ('name', 'brand', 'image', 'description'):
        if k == 'image' and _ni and not p.get(k): continue
        if not p.get(k): F(1, f'falta {k}', u); ok = False
    img = p.get('image'); img = img[0] if isinstance(img, list) and img else img
    if isinstance(img, dict): img = img.get('url') or img.get('contentUrl')
    if isinstance(img, str) and img:
        if img.startswith(HOST) or img.startswith('/'):
            if not exists_file(urllib.parse.urlparse(img).path): F(1, 'image no existe en dist', f'{u} -> {img}'); ok = False
    of = p.get('offers')
    if of:
        ofl = of if isinstance(of, list) else [of]
        for o in ofl:
            pr = o.get('price', o.get('lowPrice'))
            try: prf = float(str(pr).replace(',', '.')); assert prf > 0
            except Exception: F(1, 'offers sin price numérico real', f'{u} ({pr!r})'); ok = False; continue
            if o.get('priceCurrency') != 'EUR': F(1, 'priceCurrency != EUR', u); ok = False
            if o.get('@type') == 'Offer' and not o.get('availability'): F(1, 'offers sin availability', u); ok = False
            if o.get('url') and norm(o['url'].replace(HOST, '')) != norm(u): F(1, 'offers.url no canónica', f"{u} -> {o['url']}"); ok = False
            vis = text_of(h)
            if not any(v in vis for v in num_variants(prf)): F(1, 'precio JSON-LD no visible en la página', f'{u} ({prf:g} €)'); ok = False
    if ok: nfichas_ok += 1

# ---------- 2) sitemap ----------
sm_urls = {}
smfiles = [f for f in os.listdir(D) if re.match(r'sitemap.*\.xml$', f)]
for f in smfiles:
    x = open(f'{D}/{f}', encoding='utf-8').read()
    for m in re.finditer(r'<url>(.*?)</url>', x, re.S):
        loc = re.search(r'<loc>\s*([^<]+?)\s*</loc>', m.group(1)); lm = re.search(r'<lastmod>\s*([^<]+?)\s*</lastmod>', m.group(1))
        if loc: sm_urls[html.unescape(loc.group(1))] = lm.group(1) if lm else None
today = time.strftime('%Y-%m-%d')
for loc, lm in sm_urls.items():
    pth = urllib.parse.urlparse(loc).path or '/'
    if not loc.startswith(HOST): F(2, 'loc con host incorrecto', loc); continue
    if norm(pth) in redir and norm(pth) not in pidx: F(2, 'en sitemap y origen en _redirects', pth); continue
    if norm(pth) not in pidx: F(2, 'en sitemap pero no existe en dist', pth); continue
    u = pidx[norm(pth)]; c, ni = M[u]
    if ni: F(2, 'en sitemap pero noindex', u)
    if norm(pth) in redir: F(2, 'en sitemap y origen en _redirects', u)
    if not c: F(2, 'sin canonical', u)
    elif norm(c.replace(HOST, '')) != norm(u): F(2, 'canonical no apunta a sí misma', f'{u} -> {c}')
    if is_404(pages[u]): F(2, 'página con contenido 404', u)
    if not lm: F(2, 'sin lastmod', u)
    elif not re.match(r'^\d{4}-\d{2}-\d{2}', lm) or lm[:10] > today or lm[:10] < '2024-01-01': F(2, 'lastmod irreal', f'{u} ({lm})')
smset = {norm(urllib.parse.urlparse(l).path) for l in sm_urls}
for u in sorted(indexable):
    if norm(u) not in smset and norm(u) not in redir: F(2, 'indexable con canonical propio que falta en sitemap', u)
cortas = re.findall(r'\|\s*\d+\s*\|\s*(/[^|\s]+)\s*\|', open(A.cortas, encoding='utf-8').read()) if os.path.exists(A.cortas) else []
cortas_ok = 0
for c in cortas:
    n = norm(c)
    if n not in pidx: F(2, 'corta: no existe en dist', c); continue
    bad = False
    if not M[pidx[n]][1]: F(2, 'corta: NO tiene noindex', c); bad = True
    if n in smset: F(2, 'corta: sigue en sitemap', c); bad = True
    cortas_ok += not bad

# ---------- 3) enlaces / imágenes ----------
ext = set(); chk_cache = {}
for u, h in pages.items():
    body = re.sub(r'<(script|noscript)\b.*?</\1>', ' ', h, flags=re.S | re.I)
    for href in set(R_HREF.findall(body)):
        href = html.unescape(href).strip()
        if href.startswith(('mailto:', 'tel:', 'javascript:', '#', 'data:', 'whatsapp:', 'sms:')): continue
        if 'localhost' in href or '127.0.0.1' in href: F(4, 'localhost en enlace', f'{u} -> {href}'); continue
        if href.startswith('//'): href = 'https:' + href
        if href.startswith('http'):
            pu = urllib.parse.urlparse(href)
            if pu.netloc.replace('www.', '') != 'recurretumulta.online': ext.add(href); continue
            href = pu.path or '/'
        tgt = urllib.parse.urljoin(u if u.endswith('/') else u, href)
        if tgt not in chk_cache: chk_cache[tgt] = resolve(tgt)
        st, d = chk_cache[tgt]
        if st == '404': F(3, 'enlace interno 404', f'{u} -> {href}')
        elif st == 'cadena': F(3, 'cadena de redirecciones', f'{u} -> {href} => {d}')
        elif st == 'redir': F(3, 'enlace a URL redirigida (actualizar a destino)', f'{u} -> {href} => {d}')
    for attr, val in R_SRC.findall(body):
        cands = [s.strip().split()[0] for s in val.split(',') if s.strip()] if attr.lower() == 'srcset' else [val]
        for s in cands:
            s = html.unescape(s)
            if s.startswith('data:'): continue
            if 'localhost' in s: F(4, 'localhost en imagen', f'{u} -> {s}'); continue
            if s.startswith('http'):
                if 'recurretumulta.online' not in s: continue
                s = urllib.parse.urlparse(s).path
            p = urllib.parse.urljoin(u, s)
            if not exists_file(p): F(3, f'imagen inexistente ({attr})', f'{u} -> {s}')
ext_res = []
if A.ext and ext:
    random.seed(24); samp = random.sample(sorted(ext), min(A.ext, len(ext)))
    def chk(x):
        try:
            r = urllib.request.urlopen(urllib.request.Request(x, method='HEAD', headers={'User-Agent': 'Mozilla/5.0 checklist'}), timeout=10); return x, r.status
        except urllib.error.HTTPError as e: return x, e.code
        except Exception as e: return x, type(e).__name__
    with ThreadPoolExecutor(4) as ex: ext_res = list(ex.map(chk, samp))
    for x, s in ext_res:
        if s in (404, 410) or isinstance(s, str): F(3, f'externo roto (muestra {len(samp)}/{len(ext)}; 403/405/429 no cuentan)', f'{x} ({s})')

# ---------- 4) extras ----------
tit = collections.defaultdict(list); des = collections.defaultdict(list)
for u, h in pages.items():
    if u.endswith('404.html'): continue
    # 26/10 r1406: fichero de verificación de Search Console (contenido fijo de Google, no es una página)
    if re.fullmatch(r'/google[0-9a-f]+\.html', u): continue
    n1 = len(R_H1.findall(h))
    if n1 != 1: F(4, f'H1 != 1', f'{u} ({n1})')
    t = R_TIT.search(h); d = R_DES.search(h)
    if not t or not t.group(1).strip(): F(4, 'sin title', u)
    elif u in indexable: tit[html.unescape(t.group(1).strip())].append(u)
    if not d or not d.group(1).strip(): F(4, 'sin meta description', u)
    elif u in indexable: des[html.unescape(d.group(1).strip())].append(u)
    c, ni = M[u]
    if not c: F(4, 'sin canonical', u)
    elif not c.startswith(HOST + '/'): F(4, 'canonical con host incorrecto', f'{u} -> {c}')
    elif not ni:
        cp = urllib.parse.urlparse(c).path
        if norm(cp) != norm(u):
            st, _ = resolve(cp)
            if st != 'ok': F(4, 'canonical apunta a URL no 200', f'{u} -> {c}')
            elif M.get(pidx.get(norm(cp)), (None, False))[1]: F(4, 'canonical apunta a página noindex', f'{u} -> {c}')
    for lang, hr in R_HRL.findall(h):
        if hr.startswith(HOST) and resolve(urllib.parse.urlparse(hr).path)[0] != 'ok': F(4, 'hreflang a URL no 200', f'{u} [{lang}] -> {hr}')
    if 'localhost' in h or '127.0.0.1' in h: F(4, 'localhost en el HTML', u)
    vis = text_of(h)
    if re.search(r'(?<![\w-])(null|undefined|NaN)(?![\w-])', vis): F(4, '«null/undefined/NaN» visible', u)
    if re.search(r'\[object Object\]', vis): F(4, '[object Object] visible', u)
for t, us in tit.items():
    if len(us) > 1: F(4, 'title duplicado', f'«{t[:90]}» x{len(us)}: ' + ', '.join(us[:5]))
for t, us in des.items():
    if len(us) > 1: F(4, 'description duplicada', f'«{t[:90]}» x{len(us)}: ' + ', '.join(us[:5]))

# ---------- informe ----------
NOM = {1: 'Schema de producto en fichas', 2: 'Sitemap', 3: 'Enlaces e imágenes', 4: 'Extras (H1, title, description, canonical/hreflang, localhost, null)'}
el = time.time() - T0
o = [f'# Checklist técnica SEO — resultado', '', f'Generado {time.strftime("%d/%m/%Y %H:%M")} CEST sobre `{D}` en {el:.0f} s. Solo lectura, sin peticiones a producción.', '',
     f'- Páginas HTML: {len(pages)} · indexables (sin noindex y canonical propio): {len(indexable)} · reglas _redirects: {len(redir)}',
     f'- Fichas evaluadas: {len(fichas)} (correctas {nfichas_ok}) · URLs en sitemap ({", ".join(smfiles)}): {len(sm_urls)}',
     f'- Ficheros que no están en dist pero sí en vivo (cuentan como existentes, subida incremental): {len(solo_vivo)} · manifiesto: {A.vivo or "(ninguno)"}',
     f'- Cortas de paginas-cortas.md: {len(cortas)} (bien fuera: {cortas_ok}) · enlaces externos únicos: {len(ext)} (muestreados {len(ext_res)})', '', '| # | Punto | Estado | Fallos |', '|---|---|---|---|']
for p in (1, 2, 3, 4):
    n = sum(len(v) for v in fails[p].values()); o.append(f'| {p} | {NOM[p]} | {"PASA" if n == 0 else "FALLA"} | {n} |')
for p in (1, 2, 3, 4):
    o += ['', f'## {p}) {NOM[p]} — {"PASA" if not fails[p] else "FALLA"}']
    for t, us in sorted(fails[p].items(), key=lambda x: -len(x[1])):
        o += ['', f'### {t} ({len(us)})'] + [f'- {x}' for x in us[:300]] + ([f'- … y {len(us) - 300} más'] if len(us) > 300 else [])
open(A.out, 'w', encoding='utf-8').write('\n'.join(o) + '\n')
print('\n'.join(o[:16])); print(f'\nInforme: {A.out}  ({el:.0f} s)')
for p in (1, 2, 3, 4):
    for t, us in sorted(fails[p].items(), key=lambda x: -len(x[1])): print(f'  [{p}] {len(us):6d}  {t}')
