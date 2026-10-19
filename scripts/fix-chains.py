import re
L=open('_redirects').read().split('\n'); R={}
for l in L:
    p=l.split()
    if len(p)>=3 and p[2].startswith('30') : R.setdefault(p[0],p[1])
# 18/10/2026: destinos absolutos (https://recurretumulta.online/...) se tratan como rutas para seguir la cadena.
DOMC='https://recurretumulta.online'
def _k(t): return t[len(DOMC):] if t.startswith(DOMC) else t
def fin(t):
    seen=set()
    while _k(t) in R and t not in seen: seen.add(t); t=R[_k(t)]
    return t
n=0;out=[]
for l in L:
    p=l.split()
    if len(p)>=3 and p[0].startswith(('/blog/','/coches/','/motos/','/patinetes/')) and _k(p[1]) in R and fin(p[1])!=p[0]:
        p[1]=fin(p[1]); l=' '.join(p); n+=1
    out.append(l)
open('_redirects','w').write('\n'.join(out))
s=open('sitemap.xml').read(); B='https://recurretumulta.online'; m=0
def f(mt):
    global m
    u=re.search(r'<loc>([^<]*)</loc>',mt.group(0)).group(1)[len(B):]
    if u in R: m+=1; return ''
    return mt.group(0)
s=re.sub(r'\s*<url>.*?</url>',f,s,flags=re.S); open('sitemap.xml','w').write(s)
print('cadenas blog arregladas',n,'sitemap quitadas',m,'quedan',s.count('<loc>'))
