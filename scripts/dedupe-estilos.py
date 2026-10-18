#!/usr/bin/env python3
"""18/10/2026: el prerender repite el <style> de sonner (toasts) en cada captura (hasta ~20 copias,
~15 KB cada una). Se deja UNA copia de cada bloque <style> idéntico que contenga data-sonner-toaster.
Uso: python3 scripts/dedupe-estilos.py dist"""
import os,re,sys
D=sys.argv[1] if len(sys.argv)>1 else "dist"
ST=re.compile(r'<style[^>]*>(?:(?!</style>).)*data-sonner-toaster(?:(?!</style>).)*</style>',re.S)
pag=0;quitados=0;ahorro=0
for raiz,_,fs in os.walk(D):
    if "index.html" not in fs or "/assets" in raiz: continue
    f=os.path.join(raiz,"index.html"); s=open(f,encoding="utf8").read()
    vistos=set()
    def rep(m):
        global quitados,ahorro
        b=m.group(0)
        if b in vistos: quitados+=1; ahorro+=len(b); return ""
        vistos.add(b); return b
    s2=ST.sub(rep,s)
    if s2!=s: open(f,"w",encoding="utf8").write(s2); pag+=1
print("sonner <style> duplicados quitados",quitados,"en",pag,"paginas;",round(ahorro/1e6,1),"MB")
