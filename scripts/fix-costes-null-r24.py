#!/usr/bin/env python3
"""Oculta el «null» visible de los textos de costes de mantenimiento (datos de Convex) en el HTML de dist.
Solo toca texto fuera de <script>/<style>. Idempotente."""
import re,sys,os
R=[(re.compile(r'\b(quedan|queda|van|va)\s+(?:en\s+|a\s+)?null\b'),lambda m:'no se muestra' if m.group(1) in ('queda','va') else 'no se muestran'),
   (re.compile(r'\b([Cc])ostes\s+(?:en|a)\s+null\b'),lambda m:m.group(1)+'ostes sin publicar'),
   (re.compile(r'\bcosteAproxEur es null\b'),'el coste aproximado no está publicado'),
   (re.compile(r'\b(?:null|undefined|NaN)\b'),'sin dato')]
SPLIT=re.compile(r'(<script\b.*?</script>|<style\b.*?</style>|<[^>]+>)',re.S|re.I)
def fix(s):
    parts=SPLIT.split(s); n=0
    for i in range(0,len(parts),2):
        t=parts[i]
        for a,b in R: t,k=a.subn(b,t); n+=k
        parts[i]=t
    return ''.join(parts),n
tot=files=0
for root,_,fs in os.walk(sys.argv[1]):
    if '/media' in root or '/assets' in root: continue
    for f in fs:
        if not f.endswith('.html'): continue
        p=os.path.join(root,f); s=open(p,encoding='utf-8',errors='surrogateescape').read()
        if 'null' not in s: continue
        o,n=fix(s)
        if n: open(p,'w',encoding='utf-8',errors='surrogateescape').write(o); tot+=n; files+=1
print('reemplazos',tot,'ficheros',files)
