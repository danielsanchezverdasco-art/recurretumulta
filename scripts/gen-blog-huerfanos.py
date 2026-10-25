# 25/10/2026 (arreglos-informe-2510): el informe SEO (rev25) encontró 217 artículos del blog
# sin ningún enlace interno: «Artículos relacionados» siempre cogía los 3 primeros de la
# misma categoría. Este script asigna a cada huérfano los 2 artículos más parecidos
# (misma categoría, más palabras en común en título y keywords), que lo enlazarán
# como primer relacionado. Cada anfitrión recibe como mucho 1 huérfano.
# Entrada: scripts/datos-seo/blog-huerfanos-20261025.txt · Salida: src/lib/blog-huerfanos.generated.json
import json,re,unicodedata,os
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
t=open(f"{R}/src/lib/blog-lite.generated.ts",encoding="utf8").read()
a=t.index("BLOG_LITE: BlogLitePost[] = ")+len("BLOG_LITE: BlogLitePost[] = ")
posts=json.JSONDecoder().raw_decode(t[a:])[0]
P={p["slug"]:p for p in posts}
orf=[l.strip() for l in open(f"{R}/scripts/datos-seo/blog-huerfanos-20261025.txt") if l.strip()]
STOP=set("de la el en y a los las del con por para un una que precio espana ficha tecnica 2024 2025 2026 2027 analisis opinion".split())
def tok(p):
  s=unicodedata.normalize("NFKD",(p["title"]+" "+" ".join(p.get("keywords",[]))+" "+p["slug"].replace("-"," ")).lower())
  s="".join(c for c in s if not unicodedata.combining(c))
  return {w for w in re.findall(r"[a-z0-9]+",s) if w not in STOP and len(w)>2}
T={s:tok(p) for s,p in P.items()}
os_=set(orf); usado={}; out={}; falta=[]
import xml.etree.ElementTree as ET
SM=set()
for f in ("public/sitemap.xml","dist/sitemap.xml"):
  if os.path.exists(f"{R}/{f}"): SM|={u.split("/blog/")[1].strip("/") for u in re.findall(r"<loc>([^<]+/blog/[^<]+)</loc>",open(f"{R}/{f}",encoding="utf8").read())}
def tipo(p):
  h=p.get("heroSrc","")
  for k in ("patinetes","motos","caravanas","campers","autocaravanas"):
    if f"/{k}/" in h or k in p["slug"]: return k
  return ""
def sc(s,o):
  j=len(T[s]&T[o])/(len(T[s]|T[o]) or 1)
  return j+(0.05 if P[s]["category"]==P[o]["category"] else 0)+(0.05 if tipo(P[s])==tipo(P[o]) else 0)
for o in orf:
  if o not in P: falta.append(o); continue
  cand=[s for s in P if s!=o and s not in usado and s not in os_ and (not SM or s in SM) and T[s]&T[o]]
  cand=sorted(cand,key=lambda s:(-sc(s,o),s))
  cand=[s for s in cand if sc(s,o)>=0.12][:2]
  if not cand: falta.append(o)
  for s in cand: usado[s]=o
out={h:{k:P[o][k] for k in ("slug","title","excerpt","category","date","locale","heroSrc","heroAlt","readTime")}|{"keywords":[]} for h,o in usado.items()}
json.dump(dict(sorted(out.items())),open(f"{R}/src/lib/blog-huerfanos.generated.json","w",encoding="utf8"),ensure_ascii=False,separators=(",",":"))
print(len(orf),"huérfanos;",len(out),"anfitriones; sin datos:",falta)
