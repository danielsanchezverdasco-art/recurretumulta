#!/usr/bin/env python3
"""Postproceso checklist técnica 24/10/2026 (después de fix-null-visible / antes de sitemap-final).
Uso: python3 scripts/postfix-r24.py dist [--vivo manifiesto.json] [--cortas paginas-cortas.md]
1) JSON-LD Product/Car/Vehicle: Offer con precio real (numérico, EUR y visible en la página) -> availability
   https://schema.org/InStock; Offer sin precio real/visible o no EUR -> se quita. image ausente -> og:image o
   primera foto /media/ de la ficha que exista; si no hay, la propiedad no se inventa. Nunca añade valoraciones.
2) «null/undefined/NaN» visibles en texto -> frase honesta («no publicado»).
3) Enlaces internos: redirigidos -> URL final; 404 -> se busca el mismo slug en otra sección, si no existe se quita
   el enlace (se conserva el texto). Imágenes inexistentes: se quitan del srcset / se quita el <img>/<source>.
4) noindex,follow en paginas-cortas.md + noindex-calidad-p2.txt (sitemap-final.py las saca del sitemap).
5) Duplicados: canonical del duplicado al original; radares tramo/cabina con title/description diferenciados por
   tipo (dato real del slug); apóstrofos en atributos content como &#39;.
Idempotente. Escribe informe en ../postfix-r24-informe.json."""
import os, re, sys, json, html, urllib.parse, collections
D = sys.argv[1].rstrip('/') if len(sys.argv) > 1 and not sys.argv[1].startswith('--') else 'dist'
def arg(n, d):
    return sys.argv[sys.argv.index(n) + 1] if n in sys.argv else d
VIVO_F = arg('--vivo', '/workspace/r24/ficheros-6adb1759040e3f260bcaff51.json')
CORTAS_F = arg('--cortas', '/workspace/seo/rev24/paginas-cortas.md')
HERE = os.path.dirname(os.path.abspath(__file__))
HOST = 'https://recurretumulta.online'
st = collections.Counter(); log = collections.defaultdict(list)

if '--solo-sitemap' in sys.argv:
    pass
pages = {}
for root, _, files in os.walk(D):
    for f in files:
        if f.endswith('.html'):
            fp = os.path.join(root, f); rel = os.path.relpath(fp, D).replace(os.sep, '/')
            u = '/' if rel == 'index.html' else ('/' + rel[:-10] if rel.endswith('/index.html') else '/' + rel)
            pages[u] = fp
def norm(u): return (u.split('#')[0].split('?')[0].rstrip('/').lower()) or '/'
pidx = {norm(u): u for u in pages}
RP = D + '/_redirects'
if os.path.exists(RP) and '--solo-sitemap' not in sys.argv:
    x = open(RP, encoding='utf-8').read()
    if not re.search(r'^/radares/ /provincias/ 301!', x, re.M):
        open(RP, 'w', encoding='utf-8').write('/radares/ /provincias/ 301!\n/radares /provincias/ 301!\n' + x)
redir = {}
for l in open(D + '/_redirects', encoding='utf-8') if os.path.exists(D + '/_redirects') else []:
    p = l.split()
    if len(p) >= 2 and not l.startswith('#'):
        s = re.sub(r'\D', '', p[2]) if len(p) > 2 else '301'
        redir[p[0].rstrip('/').lower() or '/'] = (p[1], s or '301', '*' in p[0] or ':' in p[0])
VIVO = {k.lower() for k in json.load(open(VIVO_F))} if VIVO_F and os.path.exists(VIVO_F) else set()
def exists_file(path):
    path = urllib.parse.unquote(path.split('#')[0].split('?')[0])
    if os.path.isfile(D + path) or os.path.isfile(D + path.rstrip('/') + '/index.html'): return True
    return path.lower() in VIVO or (path.rstrip('/') + '/index.html').lower() in VIVO
def resolve(path, hops=0):
    n = norm(path)
    if n in pidx: return 'ok', pidx[n]
    if n in redir:
        to, s, _ = redir[n]
        if to.startswith('http'): return 'ext', to
        if s == '200': return ('ok', path) if exists_file(to) or norm(to) in pidx else ('404', to)
        if hops >= 6: return '404', to
        s2, d2 = resolve(to, hops + 1)
        return ('redir', d2) if s2 in ('ok', 'redir') else ('404', to)
    if exists_file(path): return 'ok', path
    for k, (to, s, w) in redir.items():
        if w and n.startswith(k.split('*')[0].split(':')[0].rstrip('/')): return 'splat', to
    return '404', path
by_slug = collections.defaultdict(list)
for n, u in pidx.items(): by_slug[n.rsplit('/', 1)[-1]].append(u)
def fix_404(path):
    slug = norm(path).rsplit('/', 1)[-1]
    c = [u for u in by_slug.get(slug, []) if u.endswith('/')]
    if len(c) == 1: return c[0]
    for suf in ('-precio-ficha-tecnica', '-ficha-tecnica-precio'):
        c = [u for u in by_slug.get(slug + suf, []) if u.startswith('/' + norm(path).strip('/').split('/')[0] + '/')] or by_slug.get(slug + suf, [])
        if len(c) == 1: return c[0]
    return None

# ---- noindex sets ----
NOI = set()
if os.path.exists(CORTAS_F): NOI |= {norm(x) for x in re.findall(r'\|\s*\d+\s*\|\s*(/[^|\s]+)\s*\|', open(CORTAS_F, encoding='utf-8').read())}
p2 = os.path.join(HERE, 'noindex-calidad-p2.txt')
if os.path.exists(p2): NOI |= {norm(l.strip()) for l in open(p2, encoding='utf-8') if l.strip().startswith('/')}
# ---- duplicados: canonical -> original (mismo modelo) ----
DUP = {'/coches/honda-eny1-2025-precio-ficha-tecnica': '/coches/honda-e-ny1-2025-precio-ficha-tecnica/',
       '/coches/alfa-romeo-junior-ibrida-145': '/coches/alfa-romeo-junior-ibrida-145-precio-ficha-tecnica/',
       '/coches/audi-s3-2025-precio-ficha-tecnica': '/coches/audi-s3-sportback-2025-precio-ficha-tecnica/',
       '/coches/dacia-duster-hybrid-2024-precio-ficha-tecnica': '/coches/dacia-duster-hybrid-140-2025-precio-ficha-tecnica/'}
for n in pidx:
    m = re.match(r'(/radares/.+)-2$', n)
    if m and m.group(1) in pidx: DUP[n] = pidx[m.group(1)]

R_LD = re.compile(r'(<script[^>]+application/ld\+json[^>]*>)(.*?)(</script>)', re.S | re.I)
PT = {'Product', 'Car', 'Vehicle', 'Motorcycle', 'IndividualProduct'}
def walk(o):
    if isinstance(o, dict):
        yield o
        for v in o.values(): yield from walk(v)
    elif isinstance(o, list):
        for v in o: yield from walk(v)
def text_of(h):
    h = re.sub(r'<(script|style|noscript)\b.*?</\1>', ' ', h, flags=re.S | re.I)
    return html.unescape(re.sub(r'<[^>]+>', ' ', h))
def num_variants(p):
    i = int(round(p)); s = f'{i:,}'
    return {s.replace(',', '.'), str(i), s.replace(',', ' '), s.replace(',', '\u202f'), s.replace(',', '\xa0')}
def types(n):
    t = n.get('@type'); return set(t if isinstance(t, list) else [t])

NULL_FIX = [(re.compile(r'\b(quedan?|se dejan?|van?) (en|como) (?:null|undefined)\b'), lambda m: f'{m.group(1)} sin publicar' if m.group(1).startswith('se') else f'{m.group(1)} como «no publicado»'),
            (re.compile(r'\b(\w+)=(?:null|undefined|NaN)\b'), lambda m: f'{m.group(1)}: no publicado'),
            (re.compile(r'(?<![\w-])NaN(?![\w-])\s*€?'), lambda m: 'precio no publicado aún'),
            (re.compile(r'(?<![\w-])(null|undefined)(?![\w-])'), lambda m: 'no publicado')]
def fix_text_nulls(h):
    out = []; pos = 0
    for m in re.finditer(r'<(script|style|noscript)\b.*?</\1>', h, flags=re.S | re.I):
        out.append(_tn(h[pos:m.start()])); out.append(m.group(0)); pos = m.end()
    out.append(_tn(h[pos:])); return ''.join(out)
def construccion(t):
    t = t.replace('techo en construcción sándwich', 'techo de construcción sándwich').replace('compiten en construcción', 'compiten en calidad de construcción')
    t = re.sub(r'(reputación de \w+) en construcción', r'\1 aún por consolidar', t)
    t = re.sub(r'\b(aún )?en construcción', lambda m: 'aún en despliegue' if m.group(1) else 'en despliegue', t)
    return re.sub(r'\b[Ee]n construcción', 'Datos aún no publicados por la marca', t)
def _tn(seg):
    def f(m):
        t = m.group(1)
        if re.search(r'en construcci', t, re.I): t2 = construccion(t); st['construccion'] += t2 != t; t = t2
        if not re.search(r'(?<![\w-])(null|undefined|NaN)(?![\w-])', t): return '>' + t + '<'
        for rx, rp in NULL_FIX: t = rx.sub(rp, t)
        st['null_txt'] += 1; return '>' + t + '<'
    return re.sub(r'>([^<>]+)<', f, seg)

R_A = re.compile(r'<a\b([^>]*?)\bhref=(["\'])([^"\']+)\2([^>]*)>(.*?)</a>', re.S | re.I)
R_IMGTAG = re.compile(r'<(img|source)\b[^>]*>', re.I)
def fix_links(u, h):
    def f(m):
        href = html.unescape(m.group(3)).strip()
        if href.startswith(('mailto:', 'tel:', 'javascript:', '#', 'data:', 'whatsapp:', 'sms:')): return m.group(0)
        path = href
        if href.startswith('//'): href = 'https:' + href
        if href.startswith('http'):
            pu = urllib.parse.urlparse(href)
            if pu.netloc.replace('www.', '') != 'recurretumulta.online': return m.group(0)
            path = pu.path or '/'
        frag = '#' + path.split('#', 1)[1] if '#' in path else ''
        tgt = urllib.parse.urljoin(u, path)
        s, d = resolve(tgt)
        if s == 'redir':
            st['link_redir'] += 1; log['link_redir'].append(f'{u}: {href} -> {d}')
            return f'<a{m.group(1)}href={m.group(2)}{d}{frag}{m.group(2)}{m.group(4)}>{m.group(5)}</a>'
        if s == '404':
            alt = fix_404(tgt)
            if alt:
                st['link_404_redirigido'] += 1; log['link_404_redirigido'].append(f'{u}: {href} -> {alt}')
                return f'<a{m.group(1)}href={m.group(2)}{alt}{m.group(2)}{m.group(4)}>{m.group(5)}</a>'
            st['link_404_quitado'] += 1; log['link_404_quitado'].append(f'{u}: {href}')
            return f'<span>{m.group(5)}</span>'
        return m.group(0)
    return R_A.sub(f, h)
def img_ok(u, s):
    s = html.unescape(s)
    if s.startswith('data:'): return True
    if s.startswith('http'):
        if 'recurretumulta.online' not in s: return True
        s = urllib.parse.urlparse(s).path
    return exists_file(urllib.parse.urljoin(u, s))
def fix_imgs(u, h):
    def f(m):
        tag = m.group(0); t = tag
        ss = re.search(r'\bsrcset=(["\'])([^"\']+)\1', t, re.I)
        if ss:
            parts = [p.strip() for p in ss.group(2).split(',') if p.strip()]
            good = [p for p in parts if img_ok(u, p.split()[0])]
            if len(good) != len(parts):
                st['srcset_quitado'] += len(parts) - len(good); log['img'].append(f'{u}: srcset -{len(parts)-len(good)}')
                t = t.replace(ss.group(0), f'srcset="{", ".join(good)}"' if good else '')
        sr = re.search(r'\ssrc=(["\'])([^"\']+)\1', t, re.I)
        if sr and not img_ok(u, sr.group(2)):
            st['img_quitada'] += 1; log['img'].append(f'{u}: src {sr.group(2)}'); return ''
        if m.group(1).lower() == 'source' and not re.search(r'\bsrcset=', t, re.I): return ''
        return t
    body_start = h.lower().find('<body')
    return h[:body_start] + R_IMGTAG.sub(f, h[body_start:]) if body_start >= 0 else h

def fix_ld(u, h):
    vis = None
    def f(m):
        nonlocal vis
        raw = m.group(2)
        try: j = json.loads(html.unescape(raw) if '&quot;' in raw else raw)
        except Exception: return m.group(0)
        ch = False
        for n in list(walk(j)):
            if not (types(n) & PT): continue
            if not n.get('image'):
                og = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]*content=["\']([^"\']+)', h, re.I)
                cand = [og.group(1)] if og else []
                cand += re.findall(r'<img\b[^>]*\ssrc=["\'](/media/[^"\']+)', h, re.I)[:3]
                for c in cand:
                    pth = urllib.parse.urlparse(c).path
                    if pth.startswith('/media/') and exists_file(pth) and not re.search(r'(logo|og-default|placeholder)', pth):
                        n['image'] = HOST + pth; ch = True; st['image_añadida'] += 1; break
                else:
                    if 'image' in n: del n['image']; ch = True
                    st['image_sin_foto_real'] += 1; log['image_sin_foto_real'].append(u)
            of = n.get('offers')
            if of is None: continue
            ofl = of if isinstance(of, list) else [of]; keep = []
            for o in ofl:
                if not isinstance(o, dict): continue
                pr = o.get('price', o.get('lowPrice'))
                try: prf = float(str(pr).replace(',', '.')); ok = prf > 0
                except Exception: ok = False
                if ok and o.get('priceCurrency') == 'EUR':
                    if vis is None: vis = text_of(h)
                    ok = any(v in vis for v in num_variants(prf))
                else: ok = False
                if not ok:
                    st['offer_quitado'] += 1; log['offer_quitado'].append(f'{u} ({pr!r})'); ch = True; continue
                if o.get('@type') in ('Offer', None) and o.get('availability') != 'https://schema.org/InStock' and not o.get('availability'):
                    o['availability'] = 'https://schema.org/InStock'; st['availability'] += 1; ch = True
                keep.append(o)
            if not keep: n.pop('offers', None)
            elif isinstance(of, list): n['offers'] = keep
            else: n['offers'] = keep[0]
        if not ch: return m.group(0)
        return m.group(1) + json.dumps(j, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + m.group(3)
    return R_LD.sub(f, h)

R_ROB = re.compile(r'<meta[^>]+name=["\']robots["\'][^>]*>', re.I)
def set_noindex(h):
    tag = '<meta name="robots" content="noindex,follow">'
    m = R_ROB.search(h)
    if m:
        if 'noindex' in m.group(0).lower(): return h, False
        return h.replace(m.group(0), tag, 1), True
    return h.replace('</head>', tag + '</head>', 1), True
def set_canonical(h, to):
    full = HOST + to
    if re.search(r'<link[^>]+rel=["\']canonical["\']', h, re.I):
        return re.sub(r'(<link[^>]+rel=["\']canonical["\'][^>]*href=["\'])[^"\']+', lambda m: m.group(1) + full, h, flags=re.I)
    return h.replace('</head>', f'<link rel="canonical" href="{full}"></head>', 1)
def radar_tipo(h, u):
    t = 'de tramo' if u.rstrip('/').endswith('-tramo') else ('fijo (cabina)' if '-cabina' in u else None)
    if not t: return h
    def tt(m):
        x = m.group(2)
        return m.group(0) if t in x else m.group(1) + re.sub(r'^Radar ', f'Radar {t} ', x, 1) + m.group(3)
    h2 = re.sub(r'(<title[^>]*>)([^<]*)(</title>)', tt, h, 1, flags=re.I)
    h2 = re.sub(r'(<meta[^>]+(?:name=["\']description["\']|property=["\']og:title["\']|property=["\']og:description["\'])[^>]*content=["\'])([^"\']*)(["\'])', tt, h2, flags=re.I)
    return h2
def quote_apos(h):
    return re.sub(r'(<meta\b[^>]*\bcontent=")([^"]*)(")', lambda m: m.group(1) + m.group(2).replace("'", '&#39;') + m.group(3), h)

if '--solo-sitemap' in sys.argv:
    # quita del sitemap los orígenes de _redirects (cualquier estado) y lo que no exista/no sea indexable
    for f in [x for x in os.listdir(D) if re.match(r'sitemap.*\.xml$', x)]:
        x = open(f'{D}/{f}', encoding='utf-8').read()
        def g(m):
            loc = re.search(r'<loc>\s*([^<]+?)\s*</loc>', m.group(0))
            if not loc: return m.group(0)
            n = norm(urllib.parse.urlparse(html.unescape(loc.group(1))).path or '/')
            if n in redir or n not in pidx or n in NOI or n in DUP:
                st['sitemap_quitada'] += 1; log['sitemap_quitada'].append(n); return ''
            return m.group(0)
        y = re.sub(r'\s*<url>.*?</url>', g, x, flags=re.S)
        if y != x: open(f'{D}/{f}', 'w', encoding='utf-8').write(y)
    print(dict(st)); sys.exit(0)
for u, fp in pages.items():
    if u.endswith('404.html') or re.match(r'/google[0-9a-f]+\.html$', u): continue
    h0 = open(fp, encoding='utf-8', errors='replace').read()
    if not h0.strip(): st['html_vacio'] += 1; log['html_vacio'].append(u); continue
    h = fix_ld(u, h0); h = fix_text_nulls(h); h = fix_links(u, h); h = fix_imgs(u, h); h = quote_apos(h)
    n = norm(u)
    if n in NOI:
        h, c = set_noindex(h); st['noindex_puesto'] += c
    if n in DUP:
        h = set_canonical(h, DUP[n]); st['canonical_dup'] += 1
    if u.startswith('/radares/'): h = radar_tipo(h, u)
    if h != h0:
        open(fp, 'w', encoding='utf-8').write(h); st['ficheros'] += 1
json.dump({'stats': st, 'log': log}, open(os.path.join(os.path.dirname(os.path.abspath(D)), 'postfix-r24-informe.json'), 'w'), ensure_ascii=False, indent=1)
print(dict(st))
