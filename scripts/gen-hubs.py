# Genera src/lib/hub-<categoria>.generated.json a partir de las fichas presentes en dist/ (13/10/2026).
import os,re,json,sys,html
D=sys.argv[1] if len(sys.argv)>1 else "dist"
out={}
for c in ["coches","motos","patinetes"]:
  L=[]
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
for c,L in out.items(): json.dump(L,open(f"src/lib/hub-{c}.generated.json","w"),ensure_ascii=False,separators=(",",":"))
print({k:len(v) for k,v in out.items()})
