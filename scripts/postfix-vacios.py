#!/usr/bin/env python3
"""AdSense P2 (14/10/2026): en el HTML prerenderizado
 - quita filas <tr> con alguna celda sin dato («—», «Sin datos», «No publicada»...)
 - ficha (coches/motos/patinetes) con >3 datos clave vacíos -> noindex,follow + fuera del sitemap
 - cambia «aparece como «—»» por el texto nuevo.
Uso: postfix-vacios.py dist  (imprime resumen; escribe dist/../scripts/noindex-vacios.txt)"""
import re, sys, os, html
D = sys.argv[1]
VACIA = re.compile(r'^(—|–|-|sin datos|n/d|no publicad[oa]|\?)$', re.I)
TR = re.compile(r'<tr\b[^>]*>(?:(?!<tr\b).)*?</tr>', re.S)
TD = re.compile(r'<td\b[^>]*>(.*?)</td>', re.S)
TH = re.compile(r'<th\b[^>]*>(.*?)</th>', re.S)
EV = re.compile(r'bater|carga|autonom[ií]a el[eé]ctr|enchuf', re.I)
txt = lambda h: html.unescape(re.sub(r'<[^>]+>', '', h)).strip()
REPL = [('aparece como «—» en vez de inventarlo', 'no lo mostramos en vez de inventarlo'),
        ('aparece como «—» en la ficha', 'no la mostramos en la ficha'),
        ('aparece como «—»: preferimos', 'no lo mostramos: preferimos')]
ROBOTS = re.compile(r'<meta name="robots" content="[^"]*">')
filas = paginas = 0; noidx = []
for root, _, files in os.walk(D):
    for fn in files:
        if not fn.endswith('.html'): continue
        p = os.path.join(root, fn); s = open(p, encoding='utf-8').read(); o = s
        for a, b in REPL: s = s.replace(a, b)
        claves = 0
        h1 = txt((re.search(r'<h1\b[^>]*>(.*?)</h1>', s, re.S) or [None, ''])[1] or '')
        electrico = re.search(r'el[eé]ctric|EV\b|e-', h1, re.I) or '/patinetes/' in p
        def sub(m):
            global filas
            nonlocal_claves[0]
            tds = TD.findall(m.group(0))
            if not any(VACIA.match(txt(c)) for c in tds): return m.group(0)
            ths = TH.findall(m.group(0)); lab = txt(ths[0]) if ths else (txt(tds[0]) if tds else '')
            filas += 1
            if ths and not (EV.search(lab) and not electrico): nonlocal_claves[0] += 1
            return ''
        nonlocal_claves = [0]
        s = TR.sub(sub, s)
        rel = '/' + os.path.relpath(root, D).replace('.', '') + '/'
        rel = rel.replace('//', '/')
        if nonlocal_claves[0] > 3 and re.match(r'^/(coches|motos|patinetes)/[^/]+/$', rel):
            s = ROBOTS.sub('<meta name="robots" content="noindex, follow">', s, 1); noidx.append(rel)
        if s != o:
            open(p, 'w', encoding='utf-8').write(s); paginas += 1
sm = os.path.join(D, 'sitemap.xml')
if noidx and os.path.exists(sm):
    x = open(sm).read(); n0 = x.count('<url>')
    for r in noidx:
        x = re.sub(r'<url>\s*<loc>https://recurretumulta\.online' + re.escape(r) + r'</loc>.*?</url>\s*', '', x, flags=re.S)
    open(sm, 'w').write(x); print('sitemap', n0, '->', x.count('<url>'))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'noindex-vacios.txt'), 'w').write('\n'.join(sorted(noidx)) + '\n')
print('filas quitadas', filas, 'paginas tocadas', paginas, 'noindex nuevas', len(noidx))
