#!/usr/bin/env python3
"""Arreglos del Analista SEO (deploy prioritario 19/10/2026) que NO están en el código fuente:
enlaces internos que pasan por un 301 -> destino final, /analizador -> /#analizador, hrefs falsos 'Web',
JSON-LD con URLs absolutas y fechas con zona, breadcrumbs con barra final, nodos JSON-LD duplicados
fusionados y <style> duplicados fuera. HAY QUE RE-APLICARLO DESPUÉS DE CADA BUILD + POSTPROCESO
(si no, el deploy deshace los arreglos). Idempotente.
Uso:  python3 scripts/postproceso-seo-20261019.py dist
Requiere un dist COMPLETO (todas las HTML: build + bajar_vivo.py --rellenar)."""
import json,re,os,shutil,collections
import glob
import sys
D=sys.argv[1] if len(sys.argv)>1 else 'dist'
m={'/'+os.path.relpath(f,D):f for f in glob.glob(D+'/**/*.html',recursive=True)}
m['/_redirects']=D+'/_redirects'
LV={}
BAD=set()
UP=D
O='https://recurretumulta.online'
red=open(m['/_redirects']).read().splitlines()
exists=lambda p: ((p if p.endswith('/') else p+'/')+'index.html' in m) or ((p if p.endswith('/') else p+'/')+'index.html' in LV)
# exact 301 map
R={}
for l in red:
    p=l.split()
    if len(p)>=3 and not l.startswith('#') and '*' not in p[0] and ':' not in p[0] and p[2].startswith('301') and p[1].startswith('/') and '*' not in p[1] and ':' not in p[1] and '?' not in p[0]:
        R.setdefault(p[0],p[1])
# new rules
city=['madrid','barcelona','valencia','palma-mallorca']
new=[]
for c in city: new+= [(f'/de/multas/{c}/',f'/multas/{c}/'),(f'/de/multas/{c}',f'/multas/{c}/')]
for b in ['multa-sin-cinturon-seguridad-recurrir','recurrir-multa-radar-velocidad']: new+=[(f'/de/blog/{b}/',f'/blog/{b}/'),(f'/de/blog/{b}',f'/blog/{b}/')]
for s in ['audi-r8-2025','audi-tt-2025']: new+=[(f'/blog/{s}-precio-ficha-tecnica/',f'/coches/{s}-precio-ficha-tecnica/'),(f'/blog/{s}-precio-ficha-tecnica',f'/coches/{s}-precio-ficha-tecnica/')]
P='/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo/'
new+=[('/blog/prescripcion-multas-trafico-plazos/',P),('/blog/prescripcion-multas-trafico-plazos',P),('/analizador/','/#analizador'),('/analizador','/#analizador')]
new+=[('/patinetes/:slug/Web','/patinetes/:slug/')]
srcs={l.split()[0] for l in red if l.strip() and not l.startswith('#')}
for s,d in new:
    pass
    assert d.startswith('/#') or ':' in d or exists(d), d
    assert d.split('#')[0] not in R
lines=[f'{s} {d} 301' for s,d in new]
i=next(k for k,l in enumerate(red) if l.split() and ('*' in l.split()[0] or ':' in l.split()[0]))
out_red=red[:i]+lines+red[i:]
st=collections.Counter()
def final(h):
    seen=0
    while h in R and seen<5: h=R[h];seen+=1
    return h
LDK='url|image|logo|contentUrl|thumbnailUrl|item|@id|embedUrl'
def ldfix(b):
    n0=b
    b=re.sub(r'"('+LDK+r')"\s*:\s*"(/[^"/][^"]*|/)"',lambda x:'"%s":"%s%s"'%(x.group(1),O,x.group(2)),b)
    b=re.sub(r'("(?:datePublished|dateModified|uploadDate)"\s*:\s*")(\d{4}-\d\d-\d\d)(")',r'\1\2T00:00:00+02:00\3',b)
    return b

def ldnodes(j):
    return j['@graph'] if isinstance(j,dict) and isinstance(j.get('@graph'),list) else None
def ldpage(h):
    blocks=list(re.finditer(r'(<script type="application/ld\+json"[^>]*>)(.*?)(</script>)',h,flags=re.S))
    parsed=[]
    for mm in blocks:
        try: parsed.append(json.loads(mm.group(2)))
        except Exception: parsed.append(None)
    def key(x):
        if not isinstance(x,dict): return None
        tp=x.get('@type')
        return tp if tp in('WebPage','WebSite','SoftwareApplication','Organization') else None
    def nodes(j):
        if isinstance(j,dict) and isinstance(j.get('@graph'),list): return j['@graph']
        if isinstance(j,list): return j
        if isinstance(j,dict): return [j]
        return []
    groups={}
    for bi,j in enumerate(parsed):
        for x in nodes(j):
            k=key(x)
            if k: groups.setdefault(k,[]).append((bi,x))
    drop=set()
    for k,lst in groups.items():
        if len(lst)<2: continue
        sub={}
        for e in lst:
            u=(e[1].get('url') or e[1].get('@id') or '').split('#')[0].rstrip('/')
            sub.setdefault(u,[]).append(e)
        for u,l2 in sub.items():
            if len(l2)<2: continue
            best=max(l2,key=lambda e:len(e[1]))
            for e in l2:
                if e is best: continue
                for kk,vv in e[1].items():
                    if kk!='@context' and kk not in best[1]: best[1][kk]=vv
                drop.add(id(e[1]))
    mod=set(id(x) for lst in groups.values() for e in lst for x in [e[1]])
    if not drop: return h,0
    out=[];last=0;n=0
    for mm,j in zip(blocks,parsed):
        out.append(h[last:mm.start()]);last=mm.end()
        if j is None: out.append(mm.group(0));continue
        if isinstance(j,dict) and isinstance(j.get('@graph'),list):
            keep=[x for x in j['@graph'] if id(x) not in drop];n+=len(j['@graph'])-len(keep)
            if len(keep)==len(j['@graph']) and not any(id(x) in mod for x in keep): out.append(mm.group(0))
            elif keep: j['@graph']=keep;out.append(mm.group(1)+json.dumps(j,ensure_ascii=False,separators=(',',':'))+mm.group(3))
        elif isinstance(j,list):
            keep=[x for x in j if id(x) not in drop];n+=len(j)-len(keep)
            if len(keep)==len(j) and not any(id(x) in mod for x in keep): out.append(mm.group(0))
            elif keep: out.append(mm.group(1)+json.dumps(keep,ensure_ascii=False,separators=(',',':'))+mm.group(3))
        else:
            if id(j) in drop: n+=1
            elif id(j) in mod: out.append(mm.group(1)+json.dumps(j,ensure_ascii=False,separators=(',',':'))+mm.group(3))
            else: out.append(mm.group(0))
    out.append(h[last:])
    return ''.join(out),n
def bcslash(b):
    if 'BreadcrumbList' not in b: return b
    def f(x):
        u=x.group(2);p=u[len(O):] or '/'
        if p.endswith('/') or re.search(r'\.[a-z0-9]{2,5}$',p) or '?' in p or '#' in p: return x.group(0)
        if exists(p+'/') or p=='': 
            st['bcslash']+=1;return x.group(1)+u+'/"'
        return x.group(0)
    return re.sub(r'("item"\s*:\s*")('+re.escape(O)+r'[^"]*)"',f,b)
n=0
for p,f in m.items():
    if not p.endswith('.html') or p in BAD: continue
    h0=h=open(f,encoding='utf-8').read()
    # T2/T3 links
    def lk(x):
        u=x.group(1)
        if u in('/analizador/','/analizador'): st['analizador']+=1;return 'href="/#analizador"'
        fu=final(u) if u in R else u
        if fu!=u and (fu.startswith('/#') or exists(fu.split('#')[0].split('?')[0])): st['link301']+=1;return 'href="%s"'%fu
        return x.group(0)
    h=re.sub(r'href="(/[^"#?]*)"',lk,h)
    # Web fake hrefs
    h,k=re.subn(r'<a href="(?!https?:|/|#|mailto:)[^"]*"[^>]*>(.*?)</a>',r'<span>\1</span>',h);st['fakehref']+=k
    # T4/T5 JSON-LD
    h=re.sub(r'(<script type="application/ld\+json"[^>]*>)(.*?)(</script>)',lambda x:x.group(1)+bcslash(ldfix(x.group(2)))+x.group(3),h,flags=re.S)
    h,k=ldpage(h);st['lddup']+=k
    # T6 duplicate styles
    seen=set()
    def sd(x):
        if x.group(0) in seen: st['styledup']+=1;return ''
        seen.add(x.group(0));return x.group(0)
    h=re.sub(r'<style[^>]*>.*?</style>',sd,h,flags=re.S)
    if h!=h0:
        o=UP+p;os.makedirs(os.path.dirname(o),exist_ok=True);open(o,'w',encoding='utf-8').write(h);n+=1
print('html cambiados',n,dict(st))
