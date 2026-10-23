#!/usr/bin/env python3
"""18/10/2026: enlaces internos <a href> que apuntan a una URL con 301 en _redirects
(p. ej. /coches/honda-eny1-2025-precio-ficha-tecnica/ -> /coches/honda-e-ny1-2026-...)
pasan a apuntar directamente al destino final, solo si el destino existe en dist.
Uso: python3 scripts/fix-enlaces-301.py dist"""
import os,re,sys
D=sys.argv[1] if len(sys.argv)>1 else "dist"; DOM="https://recurretumulta.online"
R={}
for l in open(os.path.join(D,"_redirects"),encoding="utf8"):
    p=l.split()
    if len(p)>=3 and not p[0].startswith("#") and p[2].startswith("301") and "*" not in p[0] and ":" not in p[0]:
        R.setdefault(p[0].rstrip("/")+"/", p[1].replace(DOM,""))
def fin(t):
    seen=set()
    while (t.split("#")[0].rstrip("/")+"/") in R and t not in seen:
        seen.add(t); t=R[t.split("#")[0].rstrip("/")+"/"]
    return t
def existe(p): q=p.split("#")[0].split("?")[0].strip("/"); return q=="" or os.path.isfile(os.path.join(D,q,"index.html"))
A=re.compile(r'(<a\b[^>]*?\shref=")((?:'+re.escape(DOM)+r')?(/[^"#?]*))([^"]*")')
n=0;paginas=0
for raiz,_,fs in os.walk(D):
    if "index.html" not in fs or "/assets" in raiz: continue
    f=os.path.join(raiz,"index.html"); s=open(f,encoding="utf8").read()
    def rep(m):
        global n
        path=m.group(3); k=path.rstrip("/")+"/"
        if k not in R: return m.group(0)
        # 23/10/2026 (cierre v4.5.5): si el destino YA existe como fichero en dist
        # (p. ej. un post restaurado por el frente H tras el borrado de
        # adsense-dist), la URL NO pasa por un 301 en el despliegue final
        # (fix-redirects deja _redirects sin esa regla): no reescribir.
        if existe(path): return m.group(0)
        t=fin(path)
        if t.startswith("http") or not existe(t) or t.rstrip("/")+"/"==k: return m.group(0)
        n+=1; return m.group(1)+(DOM if m.group(2).startswith(DOM) else "")+t+m.group(4)
    s2=A.sub(rep,s)
    if s2!=s: open(f,"w",encoding="utf8").write(s2); paginas+=1
print("enlaces 301 corregidos",n,"en",paginas,"paginas")
