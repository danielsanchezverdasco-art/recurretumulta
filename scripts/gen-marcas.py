#!/usr/bin/env python3
# Páginas de marca /{cat}/marca/{slug}/ (13/10/2026) desde scripts/datos-seo/hubs-propuestos.csv + intros-marca.csv (o $SEO_DATA).
# - Fichas de la marca: slug que empieza por "{prefijo}-" (sin las marcas más largas con el mismo prefijo).
# - Intro: se quitan las frases de empresa (país, fundación, grupo: no verificadas) y la lista de modelos;
#   el recuento de fichas sale de dist. Marcas fusionadas (MG, Mercedes-Benz): solo recuento.
# - Inyecta BreadcrumbList en hubs y marcas, enlaces de marca en los hubs, noindex de fichas-pobres y sitemap.
# Uso: python3 scripts/gen-marcas.py dist   (después de seo-dist.py)
import os,re,sys,csv,json,html
D=sys.argv[1] if len(sys.argv)>1 else "dist"; O="https://recurretumulta.online"; S=os.environ.get("SEO_DATA") or os.path.join(os.path.dirname(os.path.abspath(__file__)),"datos-seo"); e=html.escape
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
_R301=set()
for _l in open(f"{D}/_redirects",encoding="utf8"):
  _p=_l.split()
  if len(_p)>=3 and _p[2].startswith("301") and _p[0].count("/")>=2: _R301.add(_p[0].strip("/"))
def fichas(cat,pref,todas):
  # 18/10/2026: fuera las fichas con 301 a otra (p. ej. honda-eny1 -> honda-e-ny1)
  otras=[m for m in todas if m!=pref and m.startswith(pref+"-")]
  r=[]
  for s in sorted(os.listdir(f"{D}/{cat}")):
    f=f"{D}/{cat}/{s}/index.html"
    if s=="marca" or f"{cat}/{s}" in _R301 or not os.path.isfile(f) or not s.startswith(pref+"-") or any(s.startswith(o+"-") for o in otras): continue
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

# E-E-A-T 17/10/2026: bloque de autoría/fuentes/herramientas (igual que src/components/eeat/FirmaEditorial.tsx,
# datos de src/lib/eeat.ts) y WebPage con autor, editor y fecha de la ficha de la marca actualizada más recientemente.
FE={}
for _f in (os.listdir("src/lib/fichas-fechas-eeat") if os.path.isdir("src/lib/fichas-fechas-eeat") else []):
  if _f.endswith(".json"): FE.update(json.load(open(f"src/lib/fichas-fechas-eeat/{_f}",encoding="utf8")))
MESES=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
def fl(iso): y,m,d_=map(int,iso.split("-")); return f"{d_} de {MESES[m-1]} de {y}"
EE_FUENTES={"coches":[("DGT · Distintivo ambiental","https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/"),("Euro NCAP · resultados de seguridad","https://www.euroncap.com/es")],
  "motos":[("BOE · Reglamento General de Conductores (permisos A1, A2 y A)","https://www.boe.es/buscar/act.php?id=BOE-A-2009-9481"),("DGT · Distintivo ambiental","https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/")],
  "patinetes":[("DGT · Inscripción de vehículos de movilidad personal","https://www.dgt.es/nuestros-servicios/tu-vehiculo/matricular-un-vehiculo/inscripcion-vmp/"),("BOE · Reglamento General de Circulación (VMP)","https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514")]}
EE_HERR={"coches":[("/calculadora-etiqueta-dgt/","Calculadora de etiqueta DGT"),("/comparador-coches/","Comparador de coches"),("/guias/zbe/","Guía de zonas de bajas emisiones (ZBE)"),("/#analizador","Analizador de multas con IA (gratis)")],
  "motos":[("/comparador-motos/","Comparador de motos"),("/calculadora-kw-a-cv/","Calculadora kW a CV"),("/guias/zbe/","Guía de zonas de bajas emisiones (ZBE)"),("/#analizador","Analizador de multas con IA (gratis)")],
  "patinetes":[("/comparador-patinetes/","Comparador de patinetes"),("/guias/patinetes-electricos/","Normativa de patinetes eléctricos"),("/#analizador","Analizador de multas con IA (gratis)")]}
def eeat_aside(c,act):
  fecha=f' · <span>Actualizado: <time datetime="{act}">{fl(act)}</time></span>' if act else ""
  return ('<aside aria-label="Autoría y fuentes" data-eeat="1" class="mx-auto my-8 max-w-4xl px-4"><div class="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 sm:p-5">'
    f'<p class="flex flex-wrap items-center gap-x-2 gap-y-1"><span>Por <a rel="author" class="font-bold text-gray-900 underline underline-offset-2" href="/sobre-nosotros/">Daniel</a>, fundador y responsable de contenidos</span>{fecha}</p>'
    '<p class="mt-2 text-xs leading-relaxed text-gray-600"><strong class="text-gray-800">Cómo verificamos:</strong> Cada ficha de este listado se elabora con datos oficiales de la marca o fuentes citadas; lo no confirmado se marca como aproximado y nunca inventamos cifras. <a class="text-red-600 underline" href="/politica-editorial/">Política editorial y metodología</a>.</p>'
    '<p class="mt-2 text-xs leading-relaxed text-gray-600"><strong class="text-gray-800">Fuentes:</strong> '+" · ".join(f'<a href="{u}" target="_blank" rel="noopener noreferrer" class="break-words text-red-600 underline">{e(n)}</a>' for n,u in EE_FUENTES[c])+'</p>'
    '<p class="mt-2 text-xs leading-relaxed text-gray-600"><strong class="text-gray-800">Herramientas y guías:</strong> '+" · ".join(f'<a class="text-red-600 underline" href="{u}">{e(n)}</a>' for u,n in EE_HERR[c])+'</p></div></aside>')
def eeat_ld(url,nombre,act):
  o={"@context":"https://schema.org","@type":"WebPage","@id":O+url+"#webpage","url":O+url,"name":nombre,"inLanguage":"es-ES","isPartOf":{"@id":O+"/#website"},
     "author":{"@type":"Person","@id":O+"/sobre-nosotros/#daniel","name":"Daniel","url":O+"/sobre-nosotros/","jobTitle":"Fundador y responsable de contenidos de RecurreTuMulta.online"},
     "publisher":{"@type":"Organization","@id":O+"/#organization","name":"RecurreTuMulta.online","url":O+"/","logo":{"@type":"ImageObject","url":O+"/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png"}}}
  if act: o["dateModified"]=act
  return ld(o,"page-eeat")
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
# Contenido propio hubs-marca (tanda 1, 50 hubs, rama hubs-marca-188-merlin, revisado 24/10/2026):
# title/description/intro propios; el número de fichas se recalcula con los items reales.
try:
  _CONT=json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),"hubs-marca-contenido.json"),encoding="utf8"))
except Exception:
  _CONT={}
for (_c,_s),_d in pags.items():
  _o=_CONT.get(f"{_c}/{_s}")
  if not _o: continue
  _n=len(_d["items"]); _fix=lambda t: re.sub(rf'\b{_o["n"]}( fichas)',rf'{_n}\1',t)
  _t,_ds=_fix(_o["title"]),_fix(_o["description"])
  if len(_t)<=60: _d["title"]=_t
  if len(_ds)<=155: _d["description"]=_ds
  if _o.get("intro"): _d["intro"]=_fix(_o["intro"])
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
  act=max([FE[s_][1] for s_,_ in d["items"] if s_ in FE] or [None], key=lambda x: x or "")
  h=re.sub(r'<aside aria-label="Autoría y fuentes" data-eeat="1".*?</aside>','',h,flags=re.S)
  h=h.replace("<footer",eeat_aside(c,act)+"<footer",1)
  h=h.replace("</head>",eeat_ld(url,d["title"],act)+"</head>",1)
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
