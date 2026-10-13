# 13/10/2026 (indexación, tras prerender + apply-seo):
#  1) barra final en todos los href internos del HTML prerenderizado;
#  2) destinos 404 conocidos -> página equivalente verificada;
#  3) sitemap.xml solo con URLs 200 canónicas (canonical autorreferente, sin noindex).
import os,re,sys,html
D=sys.argv[1] if len(sys.argv)>1 else "dist"
DOM="https://recurretumulta.online"
PRES="/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo/"
FIX404={"/blog/prescripcion-multas-trafico-plazos/":PRES}
def barra(h):
    if not h.startswith("/") or h.startswith("//"): return h
    m=re.match(r"^([^?#]*)([?#].*)?$",h); r,resto=m.group(1),m.group(2) or ""
    if r=="/" or r.endswith("/") or re.search(r"\.[a-z0-9]{2,5}$",r,re.I): return h
    return r+"/"+resto
def existe(p): return os.path.exists(os.path.join(D,p.strip("/"),"index.html")) or p=="/"
paginas=[]; cambios=0; rotos={}
for raiz,_,fs in os.walk(D):
    if "index.html" not in fs or "/assets" in raiz: continue
    f=os.path.join(raiz,"index.html"); s=open(f,encoding="utf8").read()
    def rep(m):
        global cambios
        h=html.unescape(m.group(2)); n=barra(h); base=n.split("?")[0].split("#")[0]
        n=FIX404.get(base,base)+n[len(base):]
        if base.startswith("/") and not existe(FIX404.get(base,base)) and not re.search(r"\.[a-z0-9]{2,5}$",base): rotos[base]=rotos.get(base,0)+1
        if n!=h: cambios+=1; return m.group(1)+html.escape(n,quote=True)+m.group(3)
        return m.group(0)
    s2=re.sub(r'(<a\b[^>]*?\bhref=")(/[^"]*)(")',rep,s)
    if s2!=s: open(f,"w",encoding="utf8").write(s2)
    ruta="/"+os.path.relpath(raiz,D).replace(os.sep,"/")+"/"; ruta="/" if ruta=="/./" else ruta
    can=(re.findall(r'<link rel="canonical" href="([^"]*)"',s2) or [""])[0]
    noindex=re.search(r'<meta name="robots" content="[^"]*noindex',s2)
    paginas.append((ruta,can,bool(noindex)))
ok=[r for r,c,n in paginas if not n and c==DOM+r and r!="/404/"]
mal=[(r,c) for r,c,n in paginas if not n and c!=DOM+r]
import datetime
okset={DOM+r for r in ok}
viejo=open(os.path.join(D,"sitemap.xml"),encoding="utf8").read() if os.path.exists(os.path.join(D,"sitemap.xml")) else ""
bloques=re.findall(r"  <url>.*?</url>\n",viejo,re.S)
quedan=[b for b in bloques if re.search(r"<loc>([^<]+)</loc>",b).group(1) in okset]
vistos={re.search(r"<loc>([^<]+)</loc>",b).group(1) for b in quedan}
hoy=datetime.date.today().isoformat()
nuevos=[f"  <url>\n    <loc>{u}</loc>\n    <lastmod>{hoy}</lastmod>\n  </url>\n" for u in sorted(okset-vistos)]
print(f"[postfix] sitemap: {len(bloques)} antes -> quitadas {len(bloques)-len(quedan)} (no 200/canónicas), añadidas {len(nuevos)}")
xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(quedan+nuevos)+"</urlset>\n"
open(os.path.join(D,"sitemap.xml"),"w").write(xml)
open("/workspace/codigo-original/diagnostico/canonical-no-autorreferente.txt","w").write("\n".join(f"{r}\t{c}" for r,c in mal))
open("/workspace/codigo-original/diagnostico/enlaces-internos-sin-pagina.txt","w").write("\n".join(f"{n}\t{r}" for r,n in sorted(rotos.items(),key=lambda x:-x[1])))
print(f"[postfix] hrefs con barra/arreglados: {cambios}; sitemap: {len(ok)} URLs; canonical no autorreferente (excluidas): {len(mal)}; destinos internos sin página: {len(rotos)}")
