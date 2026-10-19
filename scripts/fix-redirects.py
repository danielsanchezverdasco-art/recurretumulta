# Cadenas /en|fr|pt/... -> /x -> /x/ : reglas explícitas de 1 salto (solo si /x/ existe en dist).
import csv,os,re
D="dist"
PRES="/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo/"
reglas={}; dudosas=[]
for x in csv.DictReader(open(os.path.join(os.environ.get('SEO_DATA') or os.path.join(os.path.dirname(os.path.abspath(__file__)),'datos-seo'),'errores-indexacion.csv'))):
    u=x['url'].replace('https://recurretumulta.online','')
    m=re.match(r'^/(en|fr|pt)(/.*)?$',u)
    if not m: continue
    dst=(m.group(2) or '/').split('?')[0]
    if not dst.endswith('/'): dst+='/'
    if dst=='/blog/prescripcion-multas-trafico-plazos/': dst=PRES
    src=u.rstrip('/')
    if dst=='/' : continue
    if os.path.exists(D+dst+'index.html'): reglas[src]=dst
    else: dudosas.append((u,dst))
p='public/_redirects'; s=open(p).read()
s=re.sub(r'# 13/10/2026 \(indexación\): cadenas de idioma.*?\n\n','',s,flags=re.S)
bloque="# 13/10/2026 (indexación): cadenas de idioma -> destino final con barra, en 1 solo salto.\n"+"".join(f"{a} {b} 301\n{a}/ {b} 301\n" for a,b in sorted(reglas.items()))+"\n"
s=s.replace("# Redirect old multilingual URLs to Spanish", bloque+"# Redirect old multilingual URLs to Spanish")
open(p,'w').write(s); open(D+'/_redirects','w').write(s)
print(len(reglas),"reglas; dudosas:",dudosas)
