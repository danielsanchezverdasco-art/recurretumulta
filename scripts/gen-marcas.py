#!/usr/bin/env python3
# Páginas de marca /{cat}/marca/{slug}/ (13/10/2026) desde /workspace/seo/hubs-propuestos.csv + intros-marca.csv.
# - Fichas de la marca: slug que empieza por "{prefijo}-" (sin las marcas más largas con el mismo prefijo).
# - Intro: se quitan las frases de empresa (país, fundación, grupo: no verificadas) y la lista de modelos;
#   el recuento de fichas sale de dist. Marcas fusionadas (MG, Mercedes-Benz): solo recuento.
# - Inyecta BreadcrumbList en hubs y marcas, enlaces de marca en los hubs, noindex de fichas-pobres y sitemap.
# Uso: python3 scripts/gen-marcas.py dist   (después de seo-dist.py)
import os,re,sys,csv,json,html
D=sys.argv[1] if len(sys.argv)>1 else "dist"; O="https://recurretumulta.online"; S="/workspace/seo"; e=html.escape
CAT={"coches":"Coches","motos":"Motos","patinetes":"Patinetes"}
CATN={"coches":"coches","motos":"motos","patinetes":"patinetes eléctricos"}
FUERA={("coches","nuevo")}
FUSION={("coches","mg3"):"mg",("coches","mg4"):"mg",("coches","mg5"):"mg",("coches","mercedes"):"mercedes-benz"}
RENOMBRE={("motos","royal"):"royal-alloy",("motos","moto"):"moto-morini",("motos","can"):"can-am",("patinetes","urban"):"urban-glide"}
H=[r for r in csv.DictReader(open(f"{S}/hubs-propuestos.csv")) if r["tipo"]=="marca"]
I={r["slug"]:r for r in csv.DictReader(open(f"{S}/intros-marca.csv"))}
NOIDX={r["url"][len(O):] for r in csv.DictReader(open(f"{S}/fichas-pobres.csv")) if r["accion"]=="noindex"}
def titulo(f):
  h=open(f,encoding="utf8",errors="ignore").read(80000); t=re.search(r'<h1[^>]*>(.*?)</h1>',h,re.S)
  return html.unescape(re.sub(r"<[^>]+>|\s+"," ",t.group(1)).strip()) if t else None
def fichas(cat,pref,todas):
  otras=[m for m in todas if m!=pref and m.startswith(pref+"-")]
  r=[]
  for s in sorted(os.listdir(f"{D}/{cat}")):
    f=f"{D}/{cat}/{s}/index.html"
    if s=="marca" or not os.path.isfile(f) or not s.startswith(pref+"-") or any(s.startswith(o+"-") for o in otras): continue
    h=open(f,encoding="utf8",errors="ignore").read(80000)
    c=re.search(r'rel="canonical" href="([^"]*)"',h)
    if c and c.group(1)!=f"{O}/{cat}/{s}/": continue
    r.append([s,titulo(f) or s])
  return r
EMPRESA=re.compile(r"\b(fundad|sede|origen|grupo|propiedad|pertenece|matriz|divisi[oó]n|fabricante|marca (?:china|alemana|italiana|francesa|japonesa|coreana|británica|española|estadounidense|sueca|india|taiwanesa|austriaca|checa|rumana|holandesa|neerlandesa)|desde \d{4}|en \d{4}|nacid|compañ|empresa|startup|filial|subsidiaria)",re.I)
recortes=[]
def intro(cat,slug,marca,n,fusion):
  t=I.get(f"{cat}/marca/{slug}",{}).get("intro","").strip()
  frases=re.split(r"(?<=[.»])\s+(?=[A-ZÁÉÍÓÚÑ¿])",t)
  i=next((k for k,f in enumerate(frases) if f.startswith("En esta página reunimos") or f.startswith("Ahora mismo")),0)
  quitadas=frases[:i]; resto=frases[i+1:] if i<len(frases) and frases[i].startswith("En esta página") else frases[i:]
  if fusion: resto=[f for f in resto if f.startswith("Cada ficha") or f.startswith("Si te ha llegado")]
  resto=[f for f in resto if not EMPRESA.search(f) or f.startswith(("Por ","En cuanto","Los precios","El precio","Cada ficha","Si te ha","Según","En ninguno","Desde el"))]
  if quitadas: recortes.append((f"{cat}/{slug}"," ".join(quitadas)))
  base=f"En esta página reunimos las {n} fichas técnicas de {CATN[cat]} {marca} que tenemos publicadas." if n!=1 else f"En esta página reunimos la ficha técnica de {CATN[cat]} {marca} que tenemos publicada."
  return " ".join([base]+resto)
def bc(items): return {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":k+1,"name":n,"item":O+u} for k,(n,u) in enumerate(items)]}
def ld(o,idn): return f'<script type="application/ld+json" data-seo-id="{idn}">'+json.dumps(o,ensure_ascii=False).replace("</","<\\/")+"</script>"
plantilla=open(f"{D}/coches/index.html",encoding="utf8").read()
todas={c:[r["marca"] for r in H if r["categoria"]==c] for c in CAT}
pags={};redir=[]
for r in H:
  c,m=r["categoria"],r["marca"]
  if (c,m) in FUERA: redir.append((f"/{c}/marca/{m}/",f"/{c}/")); continue
  if (c,m) in FUSION: redir.append((f"/{c}/marca/{m}/",f"/{c}/marca/{FUSION[c,m]}/")); continue
  slug=RENOMBRE.get((c,m),m)
  if slug!=m: redir.append((f"/{c}/marca/{m}/",f"/{c}/marca/{slug}/"))
  prefs=[m]+[k[1] for k,v in FUSION.items() if k[0]==c and v==m]
  it=[];vis=set()
  for p_ in prefs:
    for x in fichas(c,p_,todas[c]):
      if x[0] not in vis: vis.add(x[0]); it.append(x)
  it.sort(key=lambda x:x[1].lower())
  if not it: print("SIN FICHAS",c,m); continue
  nombre=I.get(f"{c}/marca/{m}",{}).get("marca") or m.title()
  if (c,m)==("motos","bmw"): nombre="BMW Motorrad"
  pags[(c,slug)]=dict(nombre=nombre,items=it,intro=intro(c,m,nombre,len(it),len(prefs)>1))
# títulos únicos
for (c,slug),d in pags.items():
  n=len(d["items"]); d["h1"]=f"Fichas técnicas de {CATN[c]} {d['nombre']}"
  d["title"]=f"{d['nombre']}: {n} fichas técnicas de {CATN[c]} con precio"[:70] if n!=1 else f"{d['nombre']}: ficha técnica de {CATN[c]} con precio"
  pr=[x[1] for x in d["items"][:3]]
  for k in (3,2,1,0):
    d["description"]=f"Todas las fichas técnicas de {CATN[c]} {d['nombre']} ({n})"+(": "+", ".join(pr[:k])+(" y más" if n>k else "") if k else "")+". Precio, potencia, autonomía y etiqueta DGT."
    if len(d["description"])<=158: break
assert len({d["title"] for d in pags.values()})==len(pags), "títulos duplicados"
def poner(h,title,desc,url):
  h=re.sub(r"<title>[^<]*</title>",f"<title>{e(title)}</title>",h,count=1)
  h=re.sub(r'(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*',lambda x:x.group(1)+e(desc),h)
  h=re.sub(r'(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*',lambda x:x.group(1)+e(title),h)
  h=re.sub(r'(<meta property="og:url" content=")[^"]*',lambda x:x.group(1)+O+url,h)
  return re.sub(r'(rel="canonical" href=")[^"]*',lambda x:x.group(1)+O+url,h)
i0=plantilla.index('<main'); i1=plantilla.index("</main>",i0)+7
for (c,slug),d in pags.items():
  url=f"/{c}/marca/{slug}/"
  cuerpo=(f'<main class="max-w-5xl mx-auto px-4 pt-6 pb-16 space-y-6"><nav aria-label="Migas de pan" class="text-xs text-gray-500"><a href="/">Inicio</a> / <a href="/{c}/">{CAT[c]}</a> / <span>{e(d["nombre"])}</span></nav>'
    f'<h1 class="text-3xl font-black text-gray-900">{e(d["h1"])}</h1><p class="text-sm text-gray-700 max-w-3xl leading-relaxed">{e(d["intro"])}</p>'
    '<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">'+"".join(f'<li><a href="/{c}/{s}/" class="text-sm text-gray-700 hover:text-red-600">{e(n)}</a></li>' for s,n in d["items"])+"</ul></main>")
  h=plantilla[:i0]+cuerpo+plantilla[i1:]
  h=re.sub(r'<script type="application/ld\+json"[^>]*>.*?</script>','',h,flags=re.S)
  h=re.sub(r'<script type="application/json" id="hub-marca-data">.*?</script>','',h,flags=re.S)
  h=poner(h,d["title"],d["description"],url)
  datos=dict(p=url,cat=c,catNombre=CAT[c],h1=d["h1"],title=d["title"],description=d["description"],intro=d["intro"],items=d["items"])
  h=h.replace("</head>",ld(bc([("Inicio","/"),(CAT[c],f"/{c}/"),(d["nombre"],url)]),"bc-static")+'<script type="application/json" id="hub-marca-data">'+json.dumps(datos,ensure_ascii=False).replace("</","<\\/")+"</script></head>",1)
  os.makedirs(f"{D}{url}",exist_ok=True); open(f"{D}{url}index.html","w",encoding="utf8").write(h)
# hubs: enlaces de marca + BreadcrumbList
MJ={c:sorted([[s,d["nombre"]] for (cc,s),d in pags.items() if cc==c],key=lambda x:x[1].lower()) for c in CAT}
json.dump(MJ,open("src/lib/hub-marcas.generated.json","w"),ensure_ascii=False,separators=(",",":"))
for c in CAT:
  f=f"{D}/{c}/index.html"; h=open(f,encoding="utf8").read()
  h=re.sub(r'<section class="space-y-2" data-marcas>.*?</section>','',h,flags=re.S)
  h=re.sub(r'<script type="application/ld\+json" data-seo-id="bc-static">.*?</script>','',h,flags=re.S)
  blq='<section class="space-y-2" data-marcas><h2 class="text-lg font-black text-gray-900">Marcas</h2><ul class="flex flex-wrap gap-1.5">'+"".join(f'<li><a href="/{c}/marca/{s}/" class="block text-xs rounded-full border border-gray-200 bg-white px-2.5 py-1 hover:border-red-400">{e(n)}</a></li>' for s,n in MJ[c])+"</ul></section>"
  k=h.index('<div class="flex flex-wrap gap-1.5">') if '<div class="flex flex-wrap gap-1.5">' in h else h.index("<section",h.index("<h1"))
  h=h[:k]+blq+h[k:]
  h=h.replace("</head>",ld(bc([("Inicio","/"),(CAT[c],f"/{c}/")]),"bc-static")+"</head>",1)
  open(f,"w",encoding="utf8").write(h)
# noindex,follow en fichas pobres
nn=0
for p in NOIDX:
  f=f"{D}{p}index.html"
  if not os.path.isfile(f): print("NOINDEX sin HTML",p); continue
  h=open(f,encoding="utf8").read()
  h2=re.sub(r'<meta name="robots" content="[^"]*">','<meta name="robots" content="noindex, follow">',h)
  if h2==h and 'content="noindex, follow"' not in h: h2=h.replace("</head>",'<meta name="robots" content="noindex, follow"></head>',1)
  open(f,"w",encoding="utf8").write(h2); nn+=1
# _redirects (al principio, 301 directo)
rp=f"{D}/_redirects"; R=open(rp,encoding="utf8").read()
R="\n".join(l for l in R.split("\n") if "/marca/" not in l.split(" ")[0])
R="# marcas (gen-marcas.py)\n"+"\n".join(f"{a} {b} 301!\n{a.rstrip('/')} {b} 301!" for a,b in redir)+"\n"+R
open(rp,"w",encoding="utf8").write(R)
# sitemap
sm=open(f"{D}/sitemap.xml",encoding="utf8").read()
urls=[u for u in re.findall(r"<url>.*?</url>",sm,re.S) if "/marca/" not in u and not any(f"<loc>{O}{p}</loc>" in u for p in NOIDX)]
urls+=[f"<url>\n    <loc>{O}/{c}/marca/{s}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>" for (c,s) in pags]
open(f"{D}/sitemap.xml","w",encoding="utf8").write(sm[:sm.index("<url>")]+"\n  ".join(urls)+"\n</urlset>\n")
json.dump(recortes,open("/tmp/recortes-marca.json","w"),ensure_ascii=False,indent=0)
print("marcas",len(pags),"redirects",len(redir),"noindex",nn,"recortes",len(recortes),"sitemap",len(urls))
