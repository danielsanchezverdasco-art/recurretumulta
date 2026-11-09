# Parche de dist SIN prerender (13/10/2026): Caza de monos a 350, premios nuevos,
# JSON-LD (availability, Product.name, sin VideoObject) y CSS crudo sin @import.
# Uso: python3 scripts/patch-dist-monos.py dist /ruta/build-nuevo  (build-nuevo = vite build sin public)
import os,re,sys,json,shutil,html
D=sys.argv[1]; NEW=sys.argv[2]
# 1) assets nuevos (los viejos se quedan para clientes con caché)
for f in os.listdir(f"{NEW}/assets"):
    dst=f"{D}/assets/{f}"
    if not os.path.exists(dst): shutil.copy2(f"{NEW}/assets/{f}",dst)
new_idx=open(f"{NEW}/index.html").read()
entry_new=re.search(r'src="/assets/(index-[^"]+\.js)"',new_idx).group(1)
css_new=[c for c in re.findall(r'/assets/(index-[^"]+\.css)',new_idx)]
old_idx=open(f"{D}/index.html").read()
entry_old=re.search(r'src="/assets/(index-[^"]+\.js)"',old_idx).group(1)
css_old=re.findall(r'/assets/(index-[^"]+\.css)',old_idx)
# todas las entradas index-*.js antiguas de cualquier HTML, no solo la de la portada
import glob as _g
_olds={m for f in _g.glob(f"{D}/**/index.html",recursive=True) for m in re.findall(r"/assets/(index-[A-Za-z0-9_-]+\.js)",open(f,encoding="utf8",errors="ignore").read())}-{entry_new}
SWAP=[(o,entry_new) for o in sorted(_olds|{entry_old}) if o!=entry_new]+[(a,b) for a,b in zip(css_old,css_new) if a!=b]
print("swap",SWAP)
# 2) textos del juego: pares sacados del diff de las fuentes
def segs(l):
    l=l[1:].strip()
    l=re.sub(r'^(a|c|q|title|description|titulo|texto):\s*"','',l); l=re.sub(r'",?$','',l)
    l=re.sub(r'\{\s*icon:.*?titulo:\s*"','',l)
    return [x.strip() for x in re.split(r'<[^>]+>|\{[^}]*\}|", texto: ".*$',l) if x.strip()]
PARES=[]
lines=open("/workspace/patch-monos/textos.diff").read().split("\n")
menos=[l for l in lines if l.startswith("-") and not l.startswith("---")]
mas=[l for l in lines if l.startswith("+") and not l.startswith("+++")]
for a,b in zip(menos,mas):
    for x,y in zip(segs(a),segs(b)):
        if x!=y and len(x)>6: PARES.append((x,y))
PARES+=[("og-caza-monos-1000e.jpg","og-caza-monos-1500e.jpg"),("premio 1000 euros","premio 1500 euros"),
        ("Encuentra los monos y gana 1000€","Encuentra los monos y gana 1.500 €"),
        ("Del 2º al 100º, recursos gratis.","Del 2º al 50º, 1 año de recursos ilimitados.")]
HDR=[("llevas 0 de 250 monos. Ir al juego.","llevas 0 de 350 monos. Ir al juego."),
     ('title="Caza de monos: llevas 0 de 250 — ver el juego"','title="Caza de monos: llevas 0 de 350 — ver el juego"'),
     ('<span class="font-bold text-amber-700/70">/250</span>','<span class="font-bold text-amber-700/70">/350</span>')]
# 3) JSON-LD
def walk(n,h1):
    if isinstance(n,dict):
        t=n.get("@type"); ts=t if isinstance(t,list) else [t]
        if "Offer" in ts and "availability" not in n: n["availability"]="https://schema.org/InStock"
        if "Product" in ts and not n.get("name") and h1: n["name"]=h1
        for k in list(n):
            v=n[k]
            if isinstance(v,list): n[k]=[x for x in v if not (isinstance(x,dict) and x.get("@type")=="VideoObject")]
            elif isinstance(v,dict) and v.get("@type")=="VideoObject": del n[k]; continue
            walk(n[k],h1)
    elif isinstance(n,list):
        for v in n: walk(v,h1)
def fix_ld(s):
    m=re.search(r'<h1[^>]*>(.*?)</h1>',s,re.S)
    h1=html.unescape(re.sub(r'<[^>]+>','',m.group(1))).strip() if m else ""
    def rep(m):
        try: j=json.loads(m.group(2))
        except Exception: return m.group(0)
        if isinstance(j,dict) and j.get("@type")=="VideoObject": return ""
        walk(j,h1)
        return m.group(1)+json.dumps(j,ensure_ascii=False,separators=(",",":")).replace("</","<\\/")+m.group(3)
    return re.sub(r'(<script type="application/ld\+json"[^>]*>)(.*?)(</script>)',rep,s,flags=re.S)
JUEGO={"index.html","juego-monos/index.html","juego-monos/bases/index.html"}
n=0;cnt={"pares":0}
for dp,_,fs in os.walk(D):
    for fn in fs:
        if not fn.endswith(".html"): continue
        f=os.path.join(dp,fn); rel=os.path.relpath(f,D)
        s=open(f,encoding="utf-8").read(); o=s
        for a,b in SWAP+HDR: s=s.replace(a,b)
        if rel in JUEGO:
            for a,b in PARES:
                if a in s: s=s.replace(a,b); cnt["pares"]+=1
        if "application/ld+json" in s: s=fix_ld(s)
        if s!=o: open(f,"w",encoding="utf-8").write(s); n+=1
print("html modificados",n,cnt)
# 4) CSS crudo: fuera @import/@plugin/@source (pedían /assets/tailwindcss y /assets/tw-animate-css → HTML)
for f in os.listdir(f"{D}/assets"):
    if f.endswith(".css"):
        p=f"{D}/assets/{f}"; s=open(p).read()
        if s.lstrip().startswith('@import "tailwindcss"'):
            s=re.sub(r'^@(import|plugin) "[^"]+";\s*$','',s,flags=re.M)
            open(p,"w").write(s); print("css limpiado",f)
