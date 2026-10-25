#!/usr/bin/env python3
"""17/10/2026 (GSC: Rutas de exploración / Fragmentos de productos / Fichas de comerciantes).
Pasa por TODO el HTML de dist:
 - WebPage global (plantilla index.html): fuera su "breadcrumb" de un solo elemento («Inicio») (cada página lleva UN BreadcrumbList propio).
 - SoftwareApplication global (#app): fuera "offers" (no es el producto de la página).
 - Offers de Car/Motorcycle/Product: fuera "availability" (no vendemos); sin image -> fuera offers.
 - BreadcrumbList: position 1..n, item absoluto.
Uso: python3 scripts/fix-jsonld-global.py dist"""
import os,re,sys,json
D=sys.argv[1];O="https://recurretumulta.online"
LD=re.compile(r'(<script type="application/ld\+json"[^>]*>)(.*?)(</script>)',re.S)
st={"paginas":0,"webpage_bc":0,"app_offers":0,"avail":0,"offers_sin_img":0,"bc":0}
def nodos(d):
  if isinstance(d,list):
    for x in d: yield from nodos(x)
  elif isinstance(d,dict):
    yield d
    for v in d.values():
      if isinstance(v,(dict,list)): yield from nodos(v)
def tipos(n):
  t=n.get("@type"); return t if isinstance(t,list) else [t]
for dp,_,fs in os.walk(D):
  for fn in fs:
    if not fn.endswith(".html"): continue
    f=os.path.join(dp,fn); s=open(f,encoding="utf-8").read()
    def fix(mm):
      try: data=json.loads(mm.group(2))
      except Exception: return mm.group(0)
      ch=False
      for n in list(nodos(data)):
        ts=tipos(n)
        bcw=n.get("breadcrumb") if "WebPage" in ts else None
        if isinstance(bcw,dict) and len(bcw.get("itemListElement") or [])<=1: del n["breadcrumb"]; st["webpage_bc"]+=1; ch=True
        if "SoftwareApplication" in ts and n.get("@id")==O+"/#app" and "offers" in n: del n["offers"]; st["app_offers"]+=1; ch=True
        if any(t in ("Car","Motorcycle","Product","Vehicle") for t in ts) and "offers" in n:
          if not n.get("image"): del n["offers"]; st["offers_sin_img"]+=1; ch=True
          else:
            off=n["offers"]
            for o in (off if isinstance(off,list) else [off]):
              if isinstance(o,dict) and "availability" in o: del o["availability"]; st["avail"]+=1; ch=True
        if "BreadcrumbList" in ts:
          for i,it in enumerate(n.get("itemListElement") or []):
            if it.get("position")!=i+1: it["position"]=i+1; st["bc"]+=1; ch=True
            u=it.get("item")
            if isinstance(u,str) and u.startswith("/"): it["item"]=O+u; st["bc"]+=1; ch=True
      if not ch: return mm.group(0)
      return mm.group(1)+json.dumps(data,ensure_ascii=False,separators=(",",":")).replace("</","<\\/")+mm.group(3)
    s2=LD.sub(fix,s)
    if s2!=s: open(f,"w",encoding="utf-8").write(s2); st["paginas"]+=1
print(st)
