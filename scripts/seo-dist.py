#!/usr/bin/env python3
# Arreglos SEO seguros sobre dist/ (13/10/2026, errores-indexacion.md):
#  - hubs /coches/ /motos/ /patinetes/ (HTML estático; la SPA los pinta igual)
#  - enlaces internos: barra final, destino final 200 (sin saltos), 404 corregidos
#  - canonical autorreferente si falta o es la variante sin barra
#  - _redirects: cada regla apunta directamente a una URL final 200
#  - sitemap: solo URLs 200, autocanónicas y sin noindex
# Uso: python3 scripts/seo-dist.py dist   (idempotente). Informe en /tmp/seo-dist.log
import os,re,sys,json,html,difflib
D=sys.argv[1] if len(sys.argv)>1 else "dist"; ORIG="https://recurretumulta.online"
log=open("/tmp/seo-dist.log","w")
def L(*a): print(*a,file=log)
HUBS=json.load(open(os.path.join(os.path.dirname(__file__),"hubs-meta.json")))
# ── 1. páginas ──
def paginas():
  P={}
  for r,_,F in os.walk(D):
    if "index.html" in F and "/assets" not in r:
      p="/"+os.path.relpath(r,D).replace("\\","/")+"/"; P["/" if p=="/./" else p]=os.path.join(r,"index.html")
  return P
# ── 2. hubs estáticos (desde la plantilla del glosario) ──
def hubs():
  base=open(f"{D}/glosario/index.html",encoding="utf8").read()
  for c,m in HUBS.items():
    ruta=f"{D}/{c}/index.html"
    L_=[]
    RED=set()
    for l in open(f"{D}/_redirects",encoding="utf8"):
      p=l.split()
      if len(p)<3 or p[0].startswith("#") or not p[0].startswith(f"/{c}/"): continue
      # 18/10/2026: cualquier 301 forzado = redirigida (mismo criterio que gen-hubs y *_PUBLICADOS)
      if p[2].startswith("301") and p[0].strip("/").count("/")==1: RED.add(p[0].strip("/").split("/")[-1])
    for s in sorted(os.listdir(f"{D}/{c}")):
      f=f"{D}/{c}/{s}/index.html"
      if s=="marca" or s in RED or not os.path.isfile(f): continue
      h=open(f,encoding="utf8",errors="ignore").read(60000)
      t=re.search(r"<title>([^<]*)",h); L_.append((s,html.unescape(t.group(1).split("|")[-1].strip() if t else s)))
    g={}
    for s,n in L_: g.setdefault(n.split(" ")[0],[]).append((s,n))
    e=html.escape
    cuerpo=(f'<main class="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6"><nav aria-label="Migas de pan" class="text-xs text-gray-500"><a href="/">Inicio</a> / <span>{e(m["nombre"])}</span></nav>'
      f'<h1 class="text-3xl font-black text-gray-900">{e(m["h1"])}</h1><p class="text-sm text-gray-600 max-w-2xl">{e(m["description"])}</p>'
      f'<p class="text-xs text-gray-500">{len(L_)} fichas · {len(g)} marcas</p>'
      + "".join(f'<section class="space-y-2"><h2 class="text-lg font-black text-gray-900">{e(k)}</h2><ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">'
        + "".join(f'<li><a href="/{c}/{s}/" class="text-sm text-gray-700 hover:text-red-600">{e(n)}</a></li>' for s,n in v) + "</ul></section>"
        for k,v in sorted(g.items(),key=lambda x:x[0].lower()))+"</main>")
    h=base
    # se sustituye el contenido del glosario (hero+main) por el hub, conservando navbar/footer
    i=h.index('<div id="root">'); w=h.index('<div class="pt-[57px]">',i)+len('<div class="pt-[57px]">')
    b=h.index("</main>",h.index("<main",w))+7
    h=h[:w]+cuerpo.replace("pt-[81px]","pt-6",1)+h[b:]
    h=re.sub(r"<title>[^<]*</title>",f"<title>{e(m['title'])}</title>",h,1)
    h=re.sub(r'(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*',lambda x:x.group(1)+e(m["description"]),h)
    h=re.sub(r'(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*',lambda x:x.group(1)+e(m["title"]),h)
    h=re.sub(r'(<meta property="og:url" content=")[^"]*',lambda x:x.group(1)+f"{ORIG}/{c}/",h)
    h=re.sub(r'(rel="canonical" href=")[^"]*',lambda x:x.group(1)+f"{ORIG}/{c}/",h)
    # 18/10/2026: fuera TODO el JSON-LD heredado del glosario (también page-schema = FAQ/términos y
    # page-eeat = WebPage del glosario, que llevan data-seo-id). El hub lleva su CollectionPage propio;
    # el BreadcrumbList (Inicio > hub) lo añade gen-marcas.py (bc-static).
    h=re.sub(r'<script type="application/ld\+json"[^>]*>.*?</script>','',h,flags=re.S)
    cp={"@context":"https://schema.org","@type":"CollectionPage","@id":f"{ORIG}/{c}/#webpage","url":f"{ORIG}/{c}/","name":m["title"],"description":m["description"],"inLanguage":"es-ES","isPartOf":{"@type":"WebSite","@id":f"{ORIG}/#website","url":f"{ORIG}/"},"numberOfItems":len(L_)}
    h=h.replace("</head>",'<script type="application/ld+json" data-seo-id="page-schema">'+json.dumps(cp,ensure_ascii=False).replace("</","<\\/")+"</script></head>",1)
    open(ruta,"w",encoding="utf8").write(h); L("hub",c,len(L_))
hubs()
# ── 2b. Portada: mono estático (sin párpados animados) y tamaños reales del mono ──
fi=f"{D}/index.html"; h=open(fi,encoding="utf8").read(); o=h
h=re.sub(r'<div aria-hidden="true" class="hj-parpado"[^>]*></div>','',h)
h=h.replace("cosa-jungla-apoyado-sm.webp 400w","cosa-jungla-apoyado-sm.webp 240w").replace("cosa-jungla-manos-sm.webp 400w","cosa-jungla-manos-sm.webp 240w")
h=re.sub(r'(<img class="hj-(?:cuerpo|manos)")(?![^>]*width=)',r'\1 width="240" height="326"',h)
if h!=o: open(fi,"w",encoding="utf8").write(h); L("portada: mono estático")
P=paginas()
# ── 3. redirecciones exactas ──
R={}; lineas=open(f"{D}/_redirects",encoding="utf8").read().split("\n")
for ln in lineas:
  x=ln.split()
  if len(x)>=3 and x[0].startswith("/") and "*" not in x[0] and ":" not in x[0] and x[2].startswith("30"): R[x[0]]=x[1]
SEC={}
for p in P:
  s=p.strip("/").split("/")
  if len(s)==2: SEC.setdefault(s[0],[]).append(s[1])
cache={}
def fix404(p):
  s=p.strip("/").split("/")
  if len(s)==2:
    for c in ("coches","motos","patinetes"):
      if s[0]=="blog" and f"/{c}/{s[1]}/" in P: return f"/{c}/{s[1]}/"
    for c in [s[0]]+(["coches","motos","patinetes"] if s[0]=="blog" else []):
      m=difflib.get_close_matches(s[1],SEC.get(c,[]),1,0.82)
      if m: return f"/{c}/{m[0]}/"
    if s[0]=="blog":  # p. ej. prescripcion-multas-trafico-plazos → post que mejor contenga las palabras
      pal=set(s[1].split("-")); mejor=max(SEC.get("blog",[]),key=lambda b:len(pal&set(b.split("-")))-len(b)/1000,default=None)
      if mejor and len(pal&set(mejor.split("-")))>=max(2,len(pal)-1): return f"/blog/{mejor}/"
  return None
def resolver(p):
  if p in cache: return cache[p]
  q=p; vistos=set()
  for _ in range(10):
    if q in P: break
    if q+"/" in P and not q.endswith("/"): q=q+"/"; continue
    if q in vistos: q=None; break
    vistos.add(q)
    if q in R: q=R[q].split("#")[0].split("?")[0]; q=q[len(ORIG):] if q.startswith(ORIG) else q; continue
    if q.endswith("/") and q[:-1] in R: q=R[q[:-1]]; continue
    f=fix404(q); q=f if f else None; break
  cache[p]=q if q in P else None
  return cache[p]
# ── 4. HTML: enlaces + canonical ──
HREF=re.compile(r'href="((?:https://recurretumulta\.online)?)(/[^"#?\s]*)([?#][^"]*)?"')
nl=nc=0; rotos={}
def esPagina(p): return not re.search(r"\.[a-z0-9]{2,5}$",p,re.I) and not p.startswith(("/assets/","/media/","/fonts/","/api/",".netlify"))
for p,f in P.items():
  h=open(f,encoding="utf8").read(); o=h
  def rep(m):
    global nl
    pre,ruta,suf=m.group(1),m.group(2),m.group(3) or ""
    if not esPagina(ruta) or ruta in P: return m.group(0)
    r=resolver(ruta)
    if not r: rotos[ruta]=rotos.get(ruta,0)+1; return m.group(0)
    nl+=1; return f'href="{pre}{r}{suf}"'
  h=HREF.sub(rep,h)
  can=re.search(r'<link rel="canonical" href="([^"]*)"',h)
  if not can:
    h=h.replace("</head>",f'<link rel="canonical" href="{ORIG}{p}"/></head>',1); nc+=1
  elif can.group(1).rstrip("/")+"/"==f"{ORIG}{p}" and can.group(1)!=f"{ORIG}{p}":
    h=h.replace(can.group(0),f'<link rel="canonical" href="{ORIG}{p}"',1); nc+=1
  if h!=o: open(f,"w",encoding="utf8").write(h)
L("enlaces corregidos",nl,"canonicals",nc); L("SIN RESOLVER",len(rotos),sorted(rotos.items(),key=lambda x:-x[1])[:60])
# ── 5. _redirects: destino final directo ──
out=[];nr=0
for ln in lineas:
  x=ln.split()
  if len(x)>=3 and x[0].startswith("/") and x[2].startswith("30") and "*" not in x[0] and ":" not in x[1]:
    t=x[1][len(ORIG):] if x[1].startswith(ORIG) else x[1]
    base,suf=re.match(r"([^?#]*)(.*)",t).groups()
    if base not in P and esPagina(base):
      r=resolver(base)
      if r and r!=base: ln=ln.replace(x[1],r+suf,1); nr+=1
  out.append(ln)
open(f"{D}/_redirects","w",encoding="utf8").write("\n".join(out)); L("redirects reapuntados",nr)
# ── 6. sitemap ──
sm=open(f"{D}/sitemap.xml",encoding="utf8").read()
urls=re.findall(r"<url>.*?</url>",sm,re.S); keep=[];vis=set()
def ok(p):
  f=P.get(p)
  if not f: return False
  h=open(f,encoding="utf8").read(80000)
  if re.search(r'name="robots" content="[^"]*noindex',h): return False
  c=re.search(r'<link rel="canonical" href="([^"]*)"',h)
  return not c or c.group(1)==ORIG+p
for u in urls:
  p=re.search(r"<loc>([^<]*)</loc>",u).group(1)[len(ORIG):]
  r=p if p in P else resolver(p)
  if r and r not in vis and ok(r): vis.add(r); keep.append(u.replace(f"<loc>{ORIG}{p}</loc>",f"<loc>{ORIG}{r}</loc>"))
for c in HUBS:
  if f"/{c}/" not in vis: keep.append(f"  <url>\n    <loc>{ORIG}/{c}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>")
open(f"{D}/sitemap.xml","w",encoding="utf8").write(sm[:sm.index("<url>")]+"\n  ".join(keep)+"\n</urlset>\n")
L("sitemap",len(urls),"->",len(keep))
print(open("/tmp/seo-dist.log").read()[:3000])
