#!/usr/bin/env python3
"""17/10/2026: corrige el JSON-LD de las fichas prerenderizadas (coches/motos/patinetes).
 - Car/Motorcycle/Product.name vacío -> nombre del modelo (H1); url con barra final.
 - BreadcrumbList posición 3: name vacío -> H1; item con barra final (como el canonical).
 - WebPage (plantilla de portada) -> name = <title> de la ficha, url = canonical, @id propio.
 - Car/Product con offers sin image -> og:image de la propia ficha; si no hay imagen, fuera offers. Se quita availability (no vendemos).
Uso: python3 scripts/fix-jsonld-fichas.py dist   (imprime cuántas páginas cambia)"""
import os,re,sys,json,html
D=sys.argv[1]; O="https://recurretumulta.online"
LD=re.compile(r'(<script type="application/ld\+json"[^>]*>)(.*?)(</script>)',re.S)
T=lambda h:html.unescape(re.sub(r'<[^>]+>','',h)).strip()
tocadas=0; stats={"name":0,"bc":0,"webpage":0,"image":0,"avail":0}
for cat in ("coches","motos","patinetes"):
  base=os.path.join(D,cat)
  if not os.path.isdir(base): continue
  for slug in os.listdir(base):
    f=os.path.join(base,slug,"index.html")
    if slug=="marca" or not os.path.isfile(f): continue
    s=open(f,encoding="utf-8").read()
    m=re.search(r'<h1\b[^>]*>(.*?)</h1>',s,re.S); h1=T(m.group(1)) if m else ""
    m=re.search(r'<title>(.*?)</title>',s,re.S); title=T(m.group(1)) if m else ""
    m=re.search(r'rel="canonical" href="([^"]+)"',s); canon=m.group(1) if m else f"{O}/{cat}/{slug}/"
    m=re.search(r'property="og:image" content="([^"]+)"',s); og=m.group(1) if m else ""
    if og.endswith("og-recurretumulta-online.png"): og=""
    if not h1: continue
    url=f"{O}/{cat}/{slug}/"
    def fix(mm):
      raw=mm.group(2)
      try: data=json.loads(raw)
      except Exception: return mm.group(0)
      ch=False
      for n in (data.get("@graph") if isinstance(data,dict) and "@graph" in data else [data]):
        if not isinstance(n,dict): continue
        t=n.get("@type")
        if t in ("Car","Motorcycle","Product","Vehicle"):
          if not n.get("name"): n["name"]=h1; stats["name"]+=1; ch=True
          if n.get("url")==url.rstrip("/"): n["url"]=url; ch=True
          if "offers" in n:
            if not n.get("image") and og: n["image"]=og; stats["image"]+=1; ch=True
            # 17/10/2026: sin availability (no vendemos) y sin Offer si no hay imagen (Google exige name+image).
            off=n["offers"]
            for o in (off if isinstance(off,list) else [off]):
              if isinstance(o,dict) and "availability" in o: del o["availability"]; stats["avail"]+=1; ch=True
            if not n.get("image"): del n["offers"]; stats["image"]+=1; ch=True
        elif t=="BreadcrumbList":
          for it in n.get("itemListElement",[]):
            if it.get("position")==3:
              if not it.get("name"): it["name"]=h1; stats["bc"]+=1; ch=True
              if it.get("item")==url.rstrip("/"): it["item"]=url; ch=True
        elif t=="WebPage" and title and n.get("name")!=title and (n.get("name")=="Recurrir Multa DGT Gratis con IA" or n.get("@id")==canon+"#webpage"):
          n["name"]=title; n["url"]=canon; n["@id"]=canon+"#webpage"; stats["webpage"]+=1; ch=True
      if not ch: return mm.group(0)
      return mm.group(1)+json.dumps(data,ensure_ascii=False,separators=(",",":")).replace("</","<\\/")+mm.group(3)
    s2=LD.sub(fix,s)
    if s2!=s: open(f,"w",encoding="utf-8").write(s2); tocadas+=1
print("paginas corregidas",tocadas,stats)
