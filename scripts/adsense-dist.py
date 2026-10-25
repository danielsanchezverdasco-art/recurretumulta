#!/usr/bin/env python3
# Arreglos AdSense sobre dist/ (14/10/2026). Uso: python3 scripts/adsense-dist.py dist [fase]
#  fase "blog": 301 de /blog/<slug>/ con ficha de slug idéntico en /coches|/motos|/patinetes
#               (solo slugs con "precio" y "ficha-tecnica"), borra su HTML (lo resuelve seo-dist).
#  fase "noindex": noindex,follow (data-fijo) en /juego-monos/ y bases, y en fichas con nota real 0,0
#               o datos mayoritariamente vacíos; las quita del sitemap. Informe en /tmp/adsense-dist.json
import os,re,sys,json,shutil,glob
D=sys.argv[1] if len(sys.argv)>1 else "dist"; FASE=sys.argv[2] if len(sys.argv)>2 else "todo"; O="https://recurretumulta.online"
INF={}
if FASE in("blog","todo"):
  F={c:{x for x in os.listdir(f"{D}/{c}") if os.path.isfile(f"{D}/{c}/{x}/index.html")} for c in ("coches","motos","patinetes")}
  reglas=[];sin=[]
  for s in sorted(os.listdir(f"{D}/blog")):
    if not ("precio" in s and "ficha-tecnica" in s and os.path.isfile(f"{D}/blog/{s}/index.html")): continue
    c=next((c for c in F if s in F[c]),None)
    if not c: sin.append(s); continue
    reglas.append((f"/blog/{s}/",f"/{c}/{s}/")); shutil.rmtree(f"{D}/blog/{s}")
  rp=f"{D}/_redirects"; R=open(rp,encoding="utf8").read()
  R=re.sub(r"# blog-duplicados \(adsense-dist.py\)\n.*?# fin blog-duplicados\n","",R,flags=re.S)
  blq="# blog-duplicados (adsense-dist.py)\n"+"".join(f"{a} {b} 301!\n{a.rstrip('/')} {b} 301!\n" for a,b in reglas)+"# fin blog-duplicados\n"
  open(rp,"w",encoding="utf8").write(blq+R)
  INF["blog_301"]=len(reglas); INF["blog_sin_ficha"]=sin
if FASE in("noindex","todo"):
  marcar=["/juego-monos/","/juego-monos/bases/"]; fichas=[]  # juego en pausa (14/10, decisión final Daniel)
  # 19/10: sin patinetes. La heurística de <dd> vacíos ponía noindex en 142 patinetes que Daniel devolvió a index
  # (14:00 18/10); los patinetes se gobiernan solo con noindex.generated.json y noindex-calidad-p2.txt.
  for c in ("coches","motos"):
    for f in glob.glob(f"{D}/{c}/*/index.html"):
      h=open(f,encoding="utf8",errors="ignore").read()
      m=re.search(r'La nota de Cosa</h2><p[^>]*>([\d]+,[\d])',h)
      dd=[re.sub(r"<[^>]+>|\s","",x) for x in re.findall(r"<dd[^>]*>(.*?)</dd>",h,re.S)]
      vac=sum(1 for x in dd if x in("—","-","","N/D"))
      p=f[len(D):-len("index.html")]
      if (m and m.group(1)=="0,0") or (len(dd)>=6 and vac/len(dd)>=0.6): fichas.append((p,m.group(1) if m else None,len(dd),vac))
  marcar+= [x[0] for x in fichas]
  marcar+= [l.strip() for l in open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'noindex-calidad-p2.txt')) if l.startswith('/')]
  for p in marcar:
    f=f"{D}{p}index.html"
    if not os.path.isfile(f): continue
    h=open(f,encoding="utf8").read()
    h=re.sub(r'<meta name="robots"[^>]*>','',h)
    h=h.replace("</head>",'<meta name="robots" content="noindex, follow" data-fijo="1"></head>',1)
    open(f,"w",encoding="utf8").write(h)
  sm=open(f"{D}/sitemap.xml",encoding="utf8").read(); S=set(marcar)
  urls=[u for u in re.findall(r"<url>.*?</url>",sm,re.S) if re.search(r"<loc>([^<]*)</loc>",u).group(1)[len(O):] not in S]
  open(f"{D}/sitemap.xml","w",encoding="utf8").write(sm[:sm.index("<url>")]+"\n  ".join(urls)+"\n</urlset>\n")
  INF["noindex_fichas"]=len(fichas); INF["noindex_detalle"]=fichas
json.dump(INF,open("/tmp/adsense-dist.json","w"),ensure_ascii=False,indent=0)
print({k:(v if isinstance(v,int) else len(v)) for k,v in INF.items()})
