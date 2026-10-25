# Genera src/lib/hub-<categoria>.generated.json a partir de las fichas presentes en dist/ (13/10/2026).
import os,re,json,sys,html
D=sys.argv[1] if len(sys.argv)>1 else "dist"
out={}
def redirigidas(c):
  # fichas con 301 a otra ficha que existe en dist (duplicadas): no cuentan como publicadas
  R=set()
  for l in open(f"{D}/_redirects",encoding="utf8"):
    p=l.split()
    if len(p)<3 or p[0].startswith("#") or not p[0].startswith(f"/{c}/"): continue
    # 18/10/2026: cualquier 301 forzado cuenta como redirigida (a otra ficha o al hub de marca, que en un
    # dist limpio aún no existe porque gen-marcas va después). Mismo criterio que *_PUBLICADOS.
    if p[2].startswith("301") and p[0].strip("/").count("/")==1: R.add(p[0].strip("/").split("/")[-1])
  return R
def publicadas(c):
  R=redirigidas(c)
  return [s for s in sorted(os.listdir(f"{D}/{c}")) if s!="marca" and s not in R and os.path.isfile(f"{D}/{c}/{s}/index.html")]
for c in ["coches","motos","patinetes"]:
  L=[]; R=redirigidas(c)
  for s in sorted(os.listdir(f"{D}/{c}")):
    f=f"{D}/{c}/{s}/index.html"
    # 18/10/2026: las fichas con 301 a otra ficha (p. ej. honda-eny1 -> honda-e-ny1) no se listan en el hub
    if s=="marca" or s in R or not os.path.isfile(f): continue
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
