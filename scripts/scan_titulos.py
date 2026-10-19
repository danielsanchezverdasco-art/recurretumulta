import os,re,html,csv,unicodedata,collections
import json as _j,os as _o
SKIP=set(_j.load(open("scripts/live/mapa.json"))) if _o.path.exists("scripts/live/mapa.json") else set()
from difflib import SequenceMatcher
root="dist";rows=[]
for d,_,fs in os.walk(root):
  if "index.html" not in fs: continue
  _r=os.path.relpath(d,root); _u="/" if _r=="." else "/"+_r+"/"
  if _u in SKIP: continue
  s=open(os.path.join(d,"index.html"),encoding="utf-8",errors="ignore").read()
  if re.search(r'<meta name="robots" content="[^"]*noindex',s): continue
  t=re.search(r"<title>(.*?)</title>",s,re.S); m=re.search(r'<meta name="description" content="([^"]*)"',s)
  rel=os.path.relpath(d,root); url="/" if rel=="." else "/"+rel+"/"
  rows.append((url,html.unescape(t.group(1).strip()) if t else "",html.unescape(m.group(1)) if m else ""))
def norm(x): x=unicodedata.normalize("NFKD",x.lower()); x="".join(c for c in x if not unicodedata.combining(c)); return re.sub(r"[^a-z0-9 ]+"," ",x).split()
STOP=set("de la el en y a los las del con por para un una su sus al o 2025 2026 precio ficha tecnica".split())
out=[];cnt=collections.Counter()
for campo,i in (("titulo",1),("meta",2)):
  g=collections.defaultdict(list)
  for r in rows:
    if r[i]: g[r[i].strip().lower()].append(r)
  for k,v in g.items():
    if len(v)>1:
      cnt[f"{campo}_exacto_grupos"]+=1; cnt[f"{campo}_exacto_urls"]+=len(v)
      for a in v[1:]: out.append((campo,"exacto",1.0,v[0][0],a[0],v[0][i],a[i]))
  # casi duplicados: bloques por las 2 primeras palabras significativas (familia/modelo)
  blk=collections.defaultdict(list)
  for r in rows:
    w=[x for x in norm(r[i]) if x not in STOP]
    if len(w)>=1: blk[" ".join(w[:2])].append(r)
  seen=set()
  for k,v in blk.items():
    if len(v)>300: continue
    for a in range(len(v)):
      for b in range(a+1,len(v)):
        x,y=v[a],v[b]
        if x[i].strip().lower()==y[i].strip().lower(): continue
        r_=SequenceMatcher(None,x[i].lower(),y[i].lower()).ratio()
        if r_>=0.85:
          key=(campo,x[0],y[0])
          if key in seen: continue
          seen.add(key); cnt[f"{campo}_similar_pares"]+=1
          out.append((campo,"similar",round(r_,3),x[0],y[0],x[i],y[i]))
out.sort(key=lambda r:(r[0],r[1]!="exacto",-r[2]))
with open("/tmp/titulos-similares.csv","w",newline="",encoding="utf-8") as f:
  w=csv.writer(f);w.writerow(["campo","tipo","similitud","url_a","url_b","texto_a","texto_b"]);w.writerows(out)
print("paginas",len(rows),dict(cnt),"filas",len(out))
print("sin titulo",sum(1 for r in rows if not r[1]),"sin meta",sum(1 for r in rows if not r[2]))
