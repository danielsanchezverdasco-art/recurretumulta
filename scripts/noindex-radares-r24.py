#!/usr/bin/env python3
"""noindex,follow en el HTML de /radares/* (las 301! se mantienen) y página KTM 1390 2025 vacía. Idempotente."""
import os,re,sys
d=sys.argv[1]; n=0
META='<meta name="robots" content="noindex, follow">'
for root,_,fs in os.walk(os.path.join(d,'radares')):
    for f in fs:
        if f!='index.html': continue
        p=os.path.join(root,f); s=open(p,encoding='utf-8').read()
        if not s.strip(): continue
        o=re.sub(r'<meta\s+name="robots"[^>]*>',META,s,flags=re.I) if re.search(r'<meta\s+name="robots"',s,re.I) else s.replace('</head>',META+'</head>',1)
        if o!=s: open(p,'w',encoding='utf-8').write(o); n+=1
print('radares noindex',n)
k=os.path.join(d,'motos/ktm-1390-super-duke-r-2025-ficha-tecnica-precio/index.html')
if os.path.exists(k) and os.path.getsize(k)==0:
    t='/motos/ktm-1390-super-duke-r-2024-ficha-tecnica-precio/'
    open(k,'w').write(f'<!doctype html><html lang="es"><head><meta charset="utf-8"><title>KTM 1390 Super Duke R</title>{META}<link rel="canonical" href="https://recurretumulta.online{t}"><meta http-equiv="refresh" content="0; url={t}"></head><body><p><a href="{t}">Ficha de la KTM 1390 Super Duke R</a></p></body></html>\n'); print('ktm rellenada noindex')
