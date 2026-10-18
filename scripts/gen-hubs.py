# Genera src/lib/hub-<categoria>.generated.json a partir de las fichas presentes en dist/ (13/10/2026).
import os,re,json,sys,html
D=sys.argv[1] if len(sys.argv)>1 else "dist"
out={}
def redirigidas(c):
  # fichas con 301 a otra ficha que existe en dist (duplicadas): no cuentan como publicadas
  R=set()
  try:
    fh=open(f"{D}/_redirects",encoding="utf8")
  except OSError:
    # 18/10/2026: sin dist (p. ej. caravanas aún sin publicar) no hay redirecciones
    return R
  for l in fh:
    p=l.split()
    if len(p)<3 or p[0].startswith("#") or not p[0].startswith(f"/{c}/"): continue
    dst=p[1].replace("https://recurretumulta.online","")
    if dst.startswith(f"/{c}/") and os.path.isfile(f"{D}{dst.rstrip('/')}/index.html"): R.add(p[0].strip("/").split("/")[-1])
  return R
def publicadas(c):
  R=redirigidas(c)
  # 18/10/2026: sin dist/<c> no hay publicadas (no romper)
  if not os.path.isdir(f"{D}/{c}"): return []
  return [s for s in sorted(os.listdir(f"{D}/{c}")) if s!="marca" and s not in R and os.path.isfile(f"{D}/{c}/{s}/index.html")]
for c in ["coches","motos","patinetes","caravanas"]:
  L=[]
  # 18/10/2026: si dist/<c> no existe (p. ej. caravanas aún sin publicar), no romper
  if not os.path.isdir(f"{D}/{c}"):
    out[c]=L; continue
  for s in sorted(os.listdir(f"{D}/{c}")):
    f=f"{D}/{c}/{s}/index.html"
    if not os.path.isfile(f): continue
    h=open(f,encoding="utf8",errors="ignore").read(200000)
    if re.search(r'<meta name="robots" content="[^"]*noindex',h): continue
    can=re.search(r'rel="canonical" href="https://recurretumulta\.online([^"]*)"',h)
    if can and can.group(1)!=f"/{c}/{s}/": continue
    t=re.search(r"<title>([^<]*)",h); n=t.group(1).split("|")[-1].strip() if t else s
    n=html.unescape(re.sub(r"\s+"," ",n))[:80] or s
    L.append([s,n])
  out[c]=L
json.dump({c:len(publicadas(c)) for c in out},open("src/lib/hub-conteos.generated.json","w"))
for c,L in out.items(): json.dump(L,open(f"src/lib/hub-{c}.generated.json","w"),ensure_ascii=False,separators=(",",":"))
print({k:len(v) for k,v in out.items()})
