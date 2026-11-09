#!/usr/bin/env python3
# Genera src/lib/relacionados.generated.json desde /workspace/seo/enlazado-objetivo-gsc.csv (14/10/2026).
# Uso: python3 scripts/gen-relacionados.py [dist_para_titulos]
import csv,json,re,os,sys,html,collections
O="https://recurretumulta.online"; D=sys.argv[1] if len(sys.argv)>1 else "dist"
NI=set(json.load(open("src/lib/noindex.generated.json")))
M=collections.defaultdict(list)
for r in csv.DictReader(open("/workspace/seo/enlazado-objetivo-gsc.csv")):
  t=r["url_objetivo"][len(O):] or "/"
  if t in NI: continue
  an=[a.strip() for a in r["texto_ancla"].split("|") if a.strip()] or ([r["consulta_principal"]] if r["consulta_principal"] else [re.sub(r"-(precio|ficha).*","",t.strip("/").split("/")[-1]).replace("-"," ")])
  good=[a for a in an if not re.match(r"(lee sobre|qué debes saber|todas las)",a,re.I) and len(a)<=60 and "," not in a]
  a=(good or sorted(an,key=len))[0]; a=a[:1].upper()+a[1:]
  if len(a)>60: a=a[:57].rsplit(" ",1)[0]+"…"
  if a.startswith("Ficha técnica del") and os.path.isfile(f"{D}{t}index.html"):
    m=re.search(r"<h1[^>]*>(.*?)</h1>",open(f"{D}{t}index.html",errors="ignore").read(),re.S)
    if m:
      h=re.split(r":| — | \| ",html.unescape(re.sub(r"<[^>]+>","",m.group(1))).strip())[0].strip()
      if 3<len(h)<=60: a=h if h.lower().startswith("ficha") else "Ficha "+h
  for x,y in [(r"\bdgt\b","DGT"),(r"\bmadrid\b","Madrid"),(r"^Cuanto","Cuánto"),(r"\bJaen\b","Jaén"),(r"Santiago Compostela","Santiago de Compostela"),(r"\bitv\b","ITV"),(r"\bbarcelona\b","Barcelona")]: a=re.sub(x,y,a)
  for o in r["urls_origen_sugeridas"].split("|"):
    o=o.strip()[len(O):] or "/"
    if o!=t and all(e["to"]!=t for e in M[o]): M[o].append({"to":t,"txt":a})
json.dump(M,open("src/lib/relacionados.generated.json","w"),ensure_ascii=False)
print("orígenes",len(M),"enlaces",sum(map(len,M.values())))
