# Texto propio de las páginas de marca (31/10/2026, auditoría A2). Se calcula en cada build a partir de las fichas publicadas
# (JSON-LD + ficha técnica visible), de modo que cifras y modelos coinciden siempre con lo que hay en la web. Nada inventado:
# si un dato no está en la ficha, la frase correspondiente no se escribe. Las frases llevan nombres de modelo y cifras
# cada pocas palabras, para que ningún trozo de 8 palabras se repita entre marcas (se comprueba con 8-gramas en el build).
import random,re,sys,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import marca_parse as MP
import marca_reg as RG
import itertools
REG=None   # lo fija gen-marcas: registro de 8-gramas de las demás páginas

def disp(n):
    """Quita la marca duplicada al principio del nombre ('Apollo Apollo Ghost' -> 'Apollo Ghost')."""
    p=n.split()
    return " ".join(p[1:]) if len(p)>=2 and p[0].lower()==p[1].lower() else n

def corto(n):
    """Nombres de 8+ palabras (p. ej. 'Nissan Juke 1.0 DIG-T 114 CV') se acortan en el texto: sin la cola de versión."""
    p=n.split()
    while len(p)>2 and len(RG.tok(" ".join(p)))>6: p.pop()
    return " ".join(p) if len(RG.tok(n))>=8 else n

def nf(x,dec=1):
    if x is None: return ""
    if abs(x-round(x))<1e-9: return f"{int(round(x)):,}".replace(",",".")
    return f"{x:.{dec}f}".rstrip("0").rstrip(".").replace(".",",")
def eur(x): return nf(x,0)+" €"
_NOM=[""]
def lista(xs,cap=4):
    xs=list(dict.fromkeys(xs))
    if len(xs)>cap: return ", ".join(xs[:cap])+f" y {len(xs)-cap} más"+(f" de {_NOM[0]}" if _NOM[0] else "")
    return xs[0] if len(xs)==1 else ", ".join(xs[:-1])+" y "+xs[-1]
def ext(P,k):
    v=[x for x in P if x.get(k) not in (None,0)]
    if len(v)<2: return None
    hi=max(v,key=lambda x:x[k]); lo=min(v,key=lambda x:x[k])
    return None if hi[k]==lo[k] else (lo,hi)
def dist(P,k):
    g={}
    for x in P:
        if x.get(k) not in (None,""): g.setdefault(x[k],[]).append(x["n"])
    return sorted(g.items(),key=lambda kv:(-len(kv[1]),str(kv[0]))),g

class Catalogo:
    """Datos de todas las fichas de una categoría (para proponer alternativas de otras marcas)."""
    def __init__(self,D,c,items_por_marca):
        self.D,self.c=D,c; self.marca={}; self.P={}; self.nom={}
        for slug,filas in items_por_marca.items():
            for s_,n in filas:
                self.marca[s_]=slug; self.nom[s_]=n
    def get(self,s_,n):
        if s_ not in self.P:
            x=MP.ficha(self.D,self.c,s_,n)
            if x: x["n"]=corto(n); x["s"]=s_
            self.P[s_]=x
        return self.P[s_]

def texto_modelo(m): return f"{m['n']}{m['y']} "+" ".join(m["chips"])

def enriquecer(D,c,slug,nombre,filas,cat_obj=None,salt=0):
    rng=random.Random(f"{c}/{slug}/{salt}"); _NOM[0]=nombre
    cur=[]; _sc=[True]   # cur: últimas 7 palabras del párrafo en curso; modo: elegir variantes con registro
    def ch(*o):
        if len(o)==1 or REG is None or not _sc[0]: return o[rng.randrange(len(o))]
        orden=list(range(len(o))); rng.shuffle(orden); mejor=None
        for i in orden:
            sc=REG.esta(RG.hashes(cur+RG.tok(o[i])))
            if mejor is None or sc<mejor[0]: mejor=(sc,o[i])
            if sc==0: break
        return mejor[1]
    class Seg(list):
        def __init__(self): super().__init__(); cur.clear()
        def append(self,x): super().append(x); cur.extend(RG.tok(x)); cur[:]=cur[-7:]
    P=[]
    for s_,n,pr,dt in filas:
        x=(cat_obj.get(s_,n) if cat_obj else None) or MP.ficha(D,c,s_,n)
        if x: x=dict(x); x["n"]=corto(disp(n)); x["s"]=s_; P.append(x)
    N=len(P)
    if not N: return {}
    cat={"coches":"coches","motos":"motos","patinetes":"patinetes eléctricos"}[c]
    art,ar2={"coches":("el coche","el"),"motos":("la moto","la"),"patinetes":("el patinete","el")}[c]
    fem=(c=="motos"); barat="barata" if fem else "barato"; cara="cara" if fem else "caro"; pot_="potente"; lig="ligera" if fem else "ligero"
    nombres=[x["n"] for x in P]
    cifras=[]
    # ---------- párrafo 1: recuento, años, precios
    # Regla de estilo: líneas cortas que llevan el nombre de la marca o de un modelo (o una cifra de 3+ dígitos) cada pocas palabras;
    # así ninguna ventana de 8 palabras es plantilla pura y no se repite entre marcas (se comprueba con huecos()).
    F=lambda k:"ficha" if k==1 else "fichas"
    s1=Seg(); s1.append(ch(f"Ahora mismo {nombre} figura con {N} {F(N)}: {lista(nombres,5)}.",
           f"{nombre} suma {N} {'modelo' if N==1 else 'modelos'} con ficha propia: {lista(nombres,5)}.",
           f"En {nombre} publicamos {N} {'modelo' if N==1 else 'modelos'}, en concreto {lista(nombres,5)}."))
    ys=sorted({x["y"] for x in P if x["y"]})
    if len(ys)>=2:
        a=min((x for x in P if x["y"]),key=lambda x:(x["y"],x["n"])); b=max((x for x in P if x["y"]),key=lambda x:(x["y"],x["n"]))
        s1.append(ch(f"Por año de modelo, {nombre} va de {a['y']} ({a['n']}) a {b['y']} ({b['n']}).",
                     f"{nombre} cubre del {a['y']} ({a['n']}) al {b['y']} ({b['n']}) en año de modelo.",
                     f"Año de modelo en {nombre}: {a['n']} abre con {a['y']} y {b['n']} cierra con {b['y']}."))
    elif len(ys)==1 and N>1:
        s1.append(ch(f"Las fichas de {nombre} con año indicado son todas del {ys[0]}.",f"{nombre} aparece solo con año de modelo {ys[0]}."))
    elif len(ys)==1:
        s1.append(f"La ficha de {P[0]['n']} es del año de modelo {ys[0]}.")
    pp=[x for x in P if x["precio"]]; est=[x for x in pp if x["precio_est"]]
    if pp:
        lo=min(pp,key=lambda x:(x["precio"],x["n"])); hi=max(pp,key=lambda x:(x["precio"],x["n"]))
        if len(pp)==1 and N>1:
            s1.append(ch(f"Solo {lo['n']} lleva {'precio estimado' if lo['precio_est'] else 'precio publicado'}, {eur(lo['precio'])}; en las otras fichas de {nombre} falta la cifra.",
                         f"En {nombre} únicamente {lo['n']} tiene {'precio estimado' if lo['precio_est'] else 'precio oficial'}: {eur(lo['precio'])}."))
        elif len(pp)==1:
            s1.append(f"{lo['n']} tiene {'un precio estimado' if lo['precio_est'] else 'un precio publicado'} de {eur(lo['precio'])}.")
        elif lo["precio"]==hi["precio"]:
            s1.append(f"En {nombre}, las {len(pp)} fichas con precio coinciden en {eur(lo['precio'])}.")
        else:
            s1.append(ch(f"{nombre} tiene precio en {len(pp)} de {N} fichas: {lo['n']} es {'la más barata' if fem else 'el más barato'} ({eur(lo['precio'])}) y {hi['n']} {'la más cara' if fem else 'el más caro'} ({eur(hi['precio'])}), {eur(hi['precio']-lo['precio'])} de diferencia.",
                         f"Horquilla de {nombre} con {len(pp)} precios en {N} fichas: de {eur(lo['precio'])} ({lo['n']}) a {eur(hi['precio'])} ({hi['n']}).",
                         f"En {nombre} hay {len(pp)} precios entre {N} fichas, desde los {eur(lo['precio'])} de {lo['n']} hasta los {eur(hi['precio'])} de {hi['n']}."))
        if est and len(est)<len(pp): s1.append(ch(f"Los precios de {lista([x['n'] for x in est],3)} son estimaciones, no tarifas oficiales.",f"En {nombre}, {lista([x['n'] for x in est],3)} llevan precio estimado y no tarifa oficial.") if len(est)>1 else ch(f"El precio de {est[0]['n']} es una estimación, no una tarifa oficial.",f"Precio estimado por nosotros, sin tarifa oficial, en {est[0]['n']}.",f"{est[0]['n']}: cifra de precio estimada, que no es tarifa oficial."))
        elif est and len(est)==len(pp) and len(pp)>1: s1.append(f"Los precios de {nombre} son estimaciones nuestras, no tarifas oficiales.")
        sp=[x["n"] for x in P if not x["precio"]]
        if sp and len(sp)<N: s1.append(ch(f"{lista(sp,4)}: sin precio en la ficha.",f"Sin precio en la ficha de {nombre}: {lista(sp,4)}.",f"{nombre} sin cifra de precio: {lista(sp,4)}."))
    else:
        s1.append(ch(f"Sin precio en las {N} {F(N)} de {nombre}: no inventamos una horquilla de precios de {nombre}.",f"{nombre} no tiene precio en ninguna de sus {N} {F(N)}; antes que suponerlo, dejamos en blanco el precio de {nombre}."))
    # ---------- párrafo 2: técnica
    cifras.append(" ".join(s1)); t=Seg()
    if c=="motos":
        e=ext(P,"cc")
        if e: t.append(ch(f"Cilindrada de {nombre}: {nf(e[0]['cc'])} cc en {e[0]['n']} y {nf(e[1]['cc'])} cc en {e[1]['n']}.",f"{nombre} va de {nf(e[0]['cc'])} cc ({e[0]['n']}) a {nf(e[1]['cc'])} cc ({e[1]['n']}) de cilindrada."))
        e=ext(P,"cv")
        if e: t.append(ch(f"Potencia de {nombre}: {nf(e[0]['cv'])} CV en {e[0]['n']}, hasta {nf(e[1]['cv'])} CV en {e[1]['n']}.",f"{nombre} declara {nf(e[0]['cv'])} CV en {e[0]['n']} y {nf(e[1]['cv'])} CV en {e[1]['n']}."))
        elif len([x for x in P if x["cv"]])==1 and N>1: x=[x for x in P if x["cv"]][0]; t.append(f"Potencia de {nombre}: {x['n']} declara {nf(x['cv'])} CV.")
        d,g=dist(P,"carnet")
        if d: t.append(ch(f"Permisos en {nombre}: "+"; ".join(f"{k} para {lista(v,3)}" for k,v in d)+".",f"{nombre} según el carnet: "+"; ".join(f"{k} en {lista(v,3)}" for k,v in d)+"."))
        d,g=dist(P,"tipo")
        if len(d)>1: t.append(ch(f"Tipos en {nombre}: "+"; ".join(f"{k} ({lista(v,3)})" for k,v in d[:4])+".",f"{nombre} por estilo: "+"; ".join(f"{k}: {lista(v,3)}" for k,v in d[:4])+"."))
        e=ext(P,"kg")
        if e: t.append(ch(f"Peso en {nombre}: {e[0]['n']} marca {nf(e[0]['kg'])} kg y {e[1]['n']} {nf(e[1]['kg'])} kg.",f"{e[0]['n']} es {'la más ligera' if fem else 'el más ligero'} de {nombre} con {nf(e[0]['kg'])} kg; {e[1]['n']} llega a {nf(e[1]['kg'])} kg."))
        e=ext(P,"vel")
        if e: t.append(f"Velocidad de {nombre}: {nf(e[0]['vel'])} km/h en {e[0]['n']} y {nf(e[1]['vel'])} km/h en {e[1]['n']}.")
        e=ext(P,"au")
        if e: t.append(f"Autonomía eléctrica en {nombre}: {e[1]['n']} anuncia {nf(e[1]['au'])} km y {e[0]['n']} {nf(e[0]['au'])} km.")
    elif c=="patinetes":
        e=ext(P,"w")
        if e: t.append(ch(f"Potencia nominal de {nombre}: {nf(e[0]['w'])} W en {e[0]['n']} y {nf(e[1]['w'])} W en {e[1]['n']}.",f"{nombre} va de {nf(e[0]['w'])} W ({e[0]['n']}) a {nf(e[1]['w'])} W ({e[1]['n']}) de potencia nominal."))
        elif len([x for x in P if x["w"]])==1 and N>1: x=[x for x in P if x["w"]][0]; t.append(f"Potencia nominal de {nombre}: {x['n']} declara {nf(x['w'])} W.")
        e=ext(P,"au")
        if e: t.append(ch(f"Autonomía declarada de {nombre}: {nf(e[0]['au'])} km en {e[0]['n']} y {nf(e[1]['au'])} km en {e[1]['n']}.",f"{e[1]['n']} presume de {nf(e[1]['au'])} km declarados en {nombre}, y {e[0]['n']} de {nf(e[0]['au'])} km."))
        elif len([x for x in P if x["au"]])==1 and N>1: x=[x for x in P if x["au"]][0]; t.append(f"Autonomía declarada de {nombre}: {nf(x['au'])} km en {x['n']}.")
        e=ext(P,"au_real")
        if e: t.append(ch(f"Autonomía real en ciudad de {nombre}, estimación nuestra y no dato oficial: {nf(e[0]['au_real'])} km en {e[0]['n']}, {nf(e[1]['au_real'])} km en {e[1]['n']}.",f"Con nuestra estimación de uso urbano ({nombre}, no es dato oficial) {e[1]['n']} rinde {nf(e[1]['au_real'])} km y {e[0]['n']} {nf(e[0]['au_real'])} km.",f"{nombre} en ciudad según nuestro cálculo: {e[0]['n']} {nf(e[0]['au_real'])} km, {e[1]['n']} {nf(e[1]['au_real'])} km; no es cifra del fabricante."))
        e=ext(P,"vel")
        if e: t.append(ch(f"Velocidad de {nombre}: {nf(e[0]['vel'])} km/h en {e[0]['n']} y {nf(e[1]['vel'])} km/h en {e[1]['n']}.",f"{nombre} va de {nf(e[0]['vel'])} km/h ({e[0]['n']}) a {nf(e[1]['vel'])} km/h ({e[1]['n']}) como punta."))
        ok=[x["n"] for x in P if x["vel"] and x["vel"]<=25]; ko=[x["n"] for x in P if x["vel"] and x["vel"]>25]
        if ok and ko: t.append(ch(f"{nombre} frente al tope VMP de 25 km/h: {lista(ok,3)} {'lo cumple' if len(ok)==1 else 'lo cumplen'} y {lista(ko,3)} {'lo supera' if len(ko)==1 else 'lo superan'}.",f"En {nombre}, {'cumple' if len(ok)==1 else 'cumplen'} el VMP {lista(ok,3)}; no lo {'cumple' if len(ko)==1 else 'cumplen'} {lista(ko,3)}, por encima de 25 km/h.",f"Sobre los 25 km/h del VMP en {nombre}: {'cumple' if len(ok)==1 else 'cumplen'} {lista(ok,3)} y se {'pasa' if len(ko)==1 else 'pasan'} {lista(ko,3)}."))
        elif ok: t.append(ch(f"{nombre} frente al tope VMP de 25 km/h: {lista(ok,3)} {'se queda' if len(ok)==1 else 'se quedan'} en 25 km/h o menos.",f"{lista(ok,3)} {'respeta' if len(ok)==1 else 'respetan'} en {nombre} el tope VMP de 25 km/h.",f"Dentro del VMP de {nombre}, {lista(ok,3)} no {'pasa' if len(ok)==1 else 'pasan'} de 25 km/h."))
        elif ko: t.append(ch(f"{nombre} y el tope VMP: {lista(ko,3)} {'lo supera' if len(ko)==1 else 'lo superan'} con la velocidad publicada.",f"En su ficha, {lista(ko,3)} de {nombre} {'rebasa' if len(ko)==1 else 'rebasan'} los 25 km/h del VMP."))
        e=ext(P,"wh")
        if e: t.append(ch(f"Batería de {nombre}: {nf(e[0]['wh'])} Wh en {e[0]['n']} y {nf(e[1]['wh'])} Wh en {e[1]['n']}.",f"{e[1]['n']} monta {nf(e[1]['wh'])} Wh y {e[0]['n']} {nf(e[0]['wh'])} Wh, los extremos de {nombre}."))
        e=ext(P,"horas")
        if e: t.append(ch(f"Carga completa en {nombre}: {nf(e[0]['horas'])} h para {e[0]['n']} y {nf(e[1]['horas'])} h para {e[1]['n']}.",f"{e[0]['n']} tarda {nf(e[0]['horas'])} h en cargarse y {e[1]['n']} {nf(e[1]['horas'])} h ({nombre})."))
        e=ext(P,"kg")
        if e: t.append(ch(f"Peso en {nombre}: {e[0]['n']} marca {nf(e[0]['kg'])} kg y {e[1]['n']} {nf(e[1]['kg'])} kg.",f"{nombre} va de {nf(e[0]['kg'])} kg ({e[0]['n']}) a {nf(e[1]['kg'])} kg ({e[1]['n']}) en la báscula."))
        e=ext(P,"carga")
        if e: t.append(ch(f"Carga máxima en {nombre}: {nf(e[0]['carga'])} kg en {e[0]['n']} y {nf(e[1]['carga'])} kg en {e[1]['n']}.",f"{e[1]['n']} admite hasta {nf(e[1]['carga'])} kg y {e[0]['n']} {nf(e[0]['carga'])} kg de usuario ({nombre})."))
        e=ext(P,"nota")
        if e: t.append(f"Nota automática de nuestra redacción para {nombre}: {nf(e[1]['nota'])} sobre 10 en {e[1]['n']} y {nf(e[0]['nota'])} en {e[0]['n']}.")
    else:
        d,g=dist(P,"comb")
        if d: t.append(ch(f"Motores en {nombre}: "+"; ".join(f"{k} en {len(set(v))} ({lista(v,3)})" for k,v in d[:4])+".",f"{nombre} por mecánica: "+", ".join(f"{len(set(v))} {k} ({lista(v,3)})" for k,v in d[:4])+".",
                      f"Mecánicas de {nombre}: "+"; ".join(f"{k}, {len(set(v))} fichas ({lista(v,2)})" for k,v in d[:4])+".",
                      f"{nombre}, según el combustible o motor: "+"; ".join(f"{len(set(v))} de tipo {k} ({lista(v,1)})" for k,v in d[:4])+"."))
        d,g=dist(P,"carr")
        if d: t.append(ch(f"Carrocerías en {nombre}: "+"; ".join(f"{k} ({len(set(v))})" for k,v in d[:5])+".",f"{nombre} ofrece estas carrocerías: "+", ".join(f"{k} ({len(set(v))})" for k,v in d[:5])+"."))
        e=ext(P,"cv")
        if e: t.append(ch(f"Potencia de {nombre}: {nf(e[0]['cv'])} CV en {e[0]['n']}, hasta {nf(e[1]['cv'])} CV en {e[1]['n']}.",f"{nombre} declara {nf(e[0]['cv'])} CV en {e[0]['n']} y {nf(e[1]['cv'])} CV en {e[1]['n']}."))
        e=ext(P,"au")
        if e: t.append(f"Autonomía en {nombre}: {e[1]['n']} llega a {nf(e[1]['au'])} km y {e[0]['n']} a {nf(e[0]['au'])} km.")
        e=ext(P,"vel")
        if e: t.append(f"Velocidad de {nombre}: {nf(e[0]['vel'])} km/h en {e[0]['n']} y {nf(e[1]['vel'])} km/h en {e[1]['n']}.")
        e=ext(P,"kg")
        if e: t.append(f"Peso en {nombre}: {e[0]['n']} marca {nf(e[0]['kg'])} kg y {e[1]['n']} {nf(e[1]['kg'])} kg.")
    d,g=dist(P,"etiqueta")
    if d and c!="patinetes": t.append(ch(f"Etiqueta DGT en {nombre}: "+"; ".join(f"{k} en {lista(v,3)}" for k,v in d)+".",f"{nombre} y la etiqueta ambiental: "+"; ".join(f"{k} para {lista(v,3)}" for k,v in d)+"."))
    campo={"motos":[("kg","el peso"),("cc","la cilindrada"),("cv","la potencia")],"patinetes":[("au","la autonomía"),("w","la potencia"),("kg","el peso")],"coches":[("cv","la potencia"),("kg","el peso")]}[c]
    for k,lab in campo:
        falta=[x["n"] for x in P if not x[k]]
        if falta and len(falta)<N and N>1: t.append(ch(f"Sin {lab.split()[1]} en la ficha de {lista(falta,3)}: esos modelos de {nombre} quedan fuera de la comparación.",f"{lista(falta,3)} no publican {lab.split()[1]} y {nombre} los deja fuera de esta comparación.",f"En {nombre}, {lista(falta,3)} carecen de {lab.split()[1]} en su ficha.")); break
    if t: cifras.append(" ".join(t))
    # ---------- párrafo 3: modelo a modelo
    ch0=ch
    def ch(*o):
        cur.clear(); return ch0(*o)
    def frase_modelo(x):
        _sc[0]=False
        if c=="motos":
            base=", ".join(z for z in [x["tipo"] and f"tipo {x['tipo']}", x["cc"] and f"{nf(x['cc'])} cc", x["cv"] and f"{nf(x['cv'])} CV"] if z)
            extra=[z for z in [x["kg"] and ch(f"{nf(x['kg'])} kg",f"pesa {nf(x['kg'])} kg",f"{nf(x['kg'])} kg de peso"), x["carnet"] and ch(f"carnet {x['carnet']}",f"permiso {x['carnet']}",f"para el carnet {x['carnet']}"), x["etiqueta"] and ch(f"etiqueta {x['etiqueta']}",f"distintivo {x['etiqueta']}",f"etiqueta DGT {x['etiqueta']}")] if z]
            if not (x["tipo"] or x["cc"] or x["cv"]) : base=""
        elif c=="patinetes":
            base=", ".join(z for z in [x["w"] and ch(f"{nf(x['w'])} W",f"motor de {nf(x['w'])} W",f"potencia de {nf(x['w'])} W"), x["au"] and ch(f"{nf(x['au'])} km de autonomía declarada",f"autonomía de {nf(x['au'])} km",f"{nf(x['au'])} km declarados"), x["vel"] and ch(f"{nf(x['vel'])} km/h",f"punta de {nf(x['vel'])} km/h",f"{nf(x['vel'])} km/h de punta")] if z)
            extra=[z for z in [x["kg"] and ch(f"{nf(x['kg'])} kg",f"pesa {nf(x['kg'])} kg",f"{nf(x['kg'])} kg de peso"), x["wh"] and ch(f"{nf(x['wh'])} Wh de batería",f"batería de {nf(x['wh'])} Wh",f"{nf(x['wh'])} Wh"), x["horas"] and ch(f"{nf(x['horas'])} h de carga",f"carga en {nf(x['horas'])} h",f"se carga en {nf(x['horas'])} h"), x["carga"] and ch(f"{nf(x['carga'])} kg de carga máxima",f"admite {nf(x['carga'])} kg",f"carga máxima de {nf(x['carga'])} kg")] if z]
        else:
            base=" ".join(z for z in [(x["carr"].upper() if x["carr"]=="suv" else (x["carr"] or "")), x["comb"]] if z)
            if x["cv"]: base=(base+", " if base else "")+f"{nf(x['cv'])} CV"
            extra=[z for z in [x["au"] and f"{nf(x['au'])} km de autonomía", x["kg"] and f"{nf(x['kg'])} kg", x["etiqueta"] and f"etiqueta {x['etiqueta']}"] if z]
        pr=x["precio"] and (f"{'precio estimado de' if x['precio_est'] else 'precio de'} {eur(x['precio'])}")
        todo=[z for z in [pr,base]+extra if z]
        if not todo: return None
        y=f" ({x['y']})" if x["y"] else ""
        chips=[]
        for z in todo: chips+=z.split(", ")
        _sc[0]=True
        return dict(s=x["s"],n=x["n"],y=y,chips=chips)
    def mejor_modelo(x):
        # 12 redacciones posibles de la misma línea; se queda la que menos ventanas repite con el resto de la web
        mejor=None
        for _ in range(12):
            r=frase_modelo(x); _sc[0]=True
            if r is None: return None
            sc=REG.esta(RG.hashes(RG.tok(texto_modelo(r)))) if REG is not None else 0
            if mejor is None or sc<mejor[0]: mejor=(sc,r)
            if sc==0: break
        return mejor[1]
    orden=sorted(P,key=lambda x:(x["precio"] is None,x["precio"] or 0,x["n"]))
    modelos=[z for z in (mejor_modelo(x) for x in orden[:8]) if z]
    # ---------- destacados con enlace
    dest=[];usados=set()
    def poner(x,rol):
        if x["s"] in usados: return
        usados.add(x["s"]); dest.append((x,rol))
    key={"motos":"cv","patinetes":"w","coches":"cv"}[c]; U={"motos":"CV","patinetes":"W","coches":"CV"}[c]
    if pp: poner(min(pp,key=lambda x:(x["precio"],x["n"])),"barato")
    cand=[x for x in P if x[key]]
    if cand: poner(max(cand,key=lambda x:(x[key],x["n"])),"potente")
    cand=[x for x in P if x["au"]]
    if cand: poner(max(cand,key=lambda x:(x["au"],x["n"])),"autonomia")
    cand=[x for x in P if x["kg"] and c!="coches"]
    if len(dest)<3 and len(cand)>=2: poner(min(cand,key=lambda x:(x["kg"],x["n"])),"ligero")
    cand=[x for x in P if x["y"]]
    if len(dest)<3 and cand: poner(max(cand,key=lambda x:(x["y"],x["n"])),"nuevo")
    for x in P:
        if len(dest)<min(3,N): poner(x,"otro")
    dm=[]
    for x,rol in dest[:3]:
        if rol=="barato": tx=ch(f"tiene el precio más bajo de {nombre}: {eur(x['precio'])}{' (estimado)' if x['precio_est'] else ''}",f"abre la gama de {nombre} desde {eur(x['precio'])}{' (estimado)' if x['precio_est'] else ''}")
        elif rol=="potente": tx=ch(f"marca el máximo de {nombre}: {nf(x[key])} {U}",f"es lo más potente de {nombre}: {nf(x[key])} {U}")
        elif rol=="autonomia": tx=ch(f"declara la mayor autonomía de {nombre}: {nf(x['au'])} km",f"llega más lejos en {nombre}: {nf(x['au'])} km")
        elif rol=="ligero": tx=ch(f"pesa lo mínimo en {nombre}: {nf(x['kg'])} kg",f"marca el menor peso de {nombre}: {nf(x['kg'])} kg")
        elif rol=="nuevo": tx=ch(f"lleva el año {x['y']}, el más reciente de {nombre}",f"es lo más nuevo de {nombre}, año {x['y']}")
        else: tx=ch(f"figura entre las {N} fichas de {nombre}",f"completa {nombre} con su ficha propia")
        dm.append(dict(s=x["s"],n=x["n"],t=tx))
    # ---------- alternativas parecidas de otras marcas (datos de nuestro propio catálogo)
    par=[]
    if cat_obj:
        propios={x["s"] for x in P}
        otros=[x for s_,m in cat_obj.marca.items() if m!=slug and s_ not in propios for x in [cat_obj.get(s_,cat_obj.nom[s_])] if x]
        refs=[]
        if pp and c=="coches": refs.append(("precio",min(pp,key=lambda x:(x["precio"],x["n"]))))
        cand=[x for x in P if x[key]]
        if cand: refs.append(("pot",max(cand,key=lambda x:(x[key],x["n"]))))
        seen=set()
        for modo,r_ in refs:
            if r_["s"] in seen: continue
            seen.add(r_["s"])
            if modo=="precio":
                pool=[x for x in otros if x["precio"] and x["comb"]==r_["comb"]]; dif=lambda x:abs(x["precio"]-r_["precio"]); val=lambda x:eur(x["precio"]); desc=f"{eur(r_['precio'])}"; met="precio"
            elif c=="motos":
                pool=[x for x in otros if x["cv"] and (not r_["carnet"] or x["carnet"]==r_["carnet"])]; dif=lambda x:abs(x["cv"]-r_["cv"]); val=lambda x:f"{nf(x['cv'])} CV"+(f", {x['carnet']}" if x["carnet"] else ""); desc=f"{nf(r_['cv'])} CV"+(f", carnet {r_['carnet']}" if r_["carnet"] else ""); met="potencia"
            elif c=="patinetes":
                pool=[x for x in otros if x["w"]]; dif=lambda x:abs(x["w"]-r_["w"]); val=lambda x:f"{nf(x['w'])} W"; desc=f"{nf(r_['w'])} W"; met="potencia nominal"
            else:
                pool=[x for x in otros if x["cv"] and x["comb"]==r_["comb"]]; dif=lambda x:abs(x["cv"]-r_["cv"]); val=lambda x:f"{nf(x['cv'])} CV"; desc=f"{nf(r_['cv'])} CV"; met="potencia"
            pool.sort(key=lambda x:(dif(x),x["n"])); pick=[]; marcas=set()
            for x in pool:
                m=cat_obj.marca.get(x["s"])
                if m in marcas: continue
                marcas.add(m); pick.append(x)
                if len(pick)==7: break
            if len(pick)>=2:
                pre=ch(f"Cerca de {r_['n']} ({desc}) en otras marcas:",
                       f"Rivales de {r_['n']} ({desc}) en otras marcas:",
                       f"Alternativas a {r_['n']} ({desc}) fuera de {nombre}:")
                mej=None
                for k in (3,2):
                    for cb in itertools.combinations(pick,k):
                        its=[dict(s=x["s"],n=x["n"],v=val(x)) for x in cb]
                        sc_=REG.esta(RG.hashes(RG.tok(pre+" "+" ".join(f"{m['n']} {m['v']}" for m in its)))) if REG is not None else 0
                        if mej is None or sc_<mej[0]: mej=(sc_,its)
                        if sc_==0: break
                    if mej and mej[0]==0: break
                par.append(dict(ref=dict(s=r_["s"],n=r_["n"]),pre=pre,items=mej[1]))
    # ---------- FAQ (2)
    Q=[]
    if pp:
        lo=min(pp,key=lambda x:(x["precio"],x["n"])); hi=max(pp,key=lambda x:(x["precio"],x["n"]))
        if lo["precio"]!=hi["precio"]: Q.append(("precio",f"¿Cuál es {art} {nombre} más {barat} y cuál {ar2} más {cara}?",ch(f"{lo['n']} es {'la más barata' if fem else 'el más barato'} de {nombre}: {eur(lo['precio'])}{' (estimado)' if lo['precio_est'] else ''}. {hi['n']} es {'la más cara' if fem else 'el más caro'}: {eur(hi['precio'])}{' (estimado)' if hi['precio_est'] else ''}. En {nombre}, {len(pp)} de {N} modelos tienen precio.",
   f"En {nombre}, {len(pp)} de {N} modelos tienen precio: {'la más barata' if fem else 'el más barato'} es {lo['n']} ({eur(lo['precio'])}{', estimado' if lo['precio_est'] else ''}) y {'la más cara' if fem else 'el más caro'} {hi['n']} ({eur(hi['precio'])}{', estimado' if hi['precio_est'] else ''}).",
   f"Entre {lo['n']} ({eur(lo['precio'])}{', estimado' if lo['precio_est'] else ''}) y {hi['n']} ({eur(hi['precio'])}{', estimado' if hi['precio_est'] else ''}) se mueve {nombre}; {len(pp)} de {N} fichas llevan precio.")))
        else: Q.append(("precio",f"¿Cuánto cuesta {lo['n']}?",f"{lo['n']} tiene {'un precio estimado' if lo['precio_est'] else 'un precio publicado'} de {eur(lo['precio'])}."+(f" Es lo único con cifra en {nombre}." if len(pp)==1 and N>1 else "")))
    else:
        Q.append(("precio",f"¿Hay precio oficial para {'las' if fem else 'los'} {cat} {nombre}?",ch(f"Las {N} fichas de {nombre} no traen precio todavía; cuando {nombre} publique tarifa oficial, pondremos la cifra.",f"Ninguna de las {N} fichas de {nombre} lleva precio: lo añadiremos si {nombre} lo publica en fuente oficial.")))
    d,g=dist(P,"carnet")
    if c=="motos" and d: Q.append(("carnet",f"¿Qué carnet piden las motos {nombre}?",f"Depende del modelo en {nombre}: "+"; ".join(f"{k} para {lista(v,3)}" for k,v in d)+"."))
    d,g=dist(P,"etiqueta")
    if c!="patinetes" and d: Q.append(("etiqueta",f"¿Qué etiqueta DGT llevan los {cat} {nombre} de nuestras fichas?",f"Se reparte así en {nombre}: "+"; ".join(f"{k} en {lista(v,3)}" for k,v in d)+"."))
    e=ext(P,"au")
    if e: Q.append(("auto",f"¿Qué {c[:-1] if c!='patinetes' else 'patinete'} {nombre} anuncia más autonomía?",f"{e[1]['n']}: {nf(e[1]['au'])} km{' declarados' if c=='patinetes' else ''}. En el extremo opuesto, {e[0]['n']}: {nf(e[0]['au'])} km."))
    e=ext(P,key)
    if e: Q.append(("pot",f"¿Cuál es {art} {nombre} más potente?",f"{e[1]['n']}: {nf(e[1][key])} {U}. Lo que menos declara {nombre} es {e[0]['n']}: {nf(e[0][key])} {U}."))
    if c=="patinetes":
        ok=[x["n"] for x in P if x["vel"] and x["vel"]<=25]; ko=[x["n"] for x in P if x["vel"] and x["vel"]>25]
        if ok or ko:
            vv=lambda L_,a_,b_: a_ if len(L_)==1 else b_
            if ok: a=ch(f"En {nombre}, {lista(ok,4)} {vv(ok,'respeta','respetan')} el límite de 25 km/h"+(f" y {lista(ko,4)} {vv(ko,'lo supera','lo superan')}." if ko else "."),
                        f"{lista(ok,4)} {vv(ok,'se queda','se quedan')} en {nombre} dentro de los 25 km/h"+(f"; {lista(ko,4)} {vv(ko,'pasa','pasan')} de esa cifra." if ko else "."))
            else: a=ch(f"Ninguna ficha de {nombre}: {lista(ko,4)} {vv(ko,'supera','superan')} esa cifra.",f"{nombre} no tiene ningún modelo dentro de los 25 km/h: {lista(ko,4)} {vv(ko,'la supera','la superan')} en ficha.")
            Q.append(("vmp",f"¿Qué patinetes {nombre} respetan el tope de 25 km/h?",a))
    e=ext(P,"kg")
    if e: Q.append(("peso",f"¿Cuál es {art} {nombre} más {lig}?",f"{e[0]['n']}: {nf(e[0]['kg'])} kg. {'La más pesada' if fem else 'El más pesado'} de {nombre} es {e[1]['n']}: {nf(e[1]['kg'])} kg."))
    Q.append(("n",f"¿Cuántos {cat} {nombre} tenéis en la web?",f"{nombre} tiene {N} {'ficha' if N==1 else 'fichas'}: {lista(nombres,6)}."))
    primera=Q[0]
    resto=[q for q in Q[1:] if q[0]!="n"] or Q[1:]
    segunda=resto[rng.randrange(len(resto))] if resto else None
    faq=[dict(q=primera[1],a=primera[2])]+([dict(q=segunda[1],a=segunda[2])] if segunda else [])
    return dict(cifras=cifras,modelos=modelos,destacadosModelos=dm,parecidos=par,faq=faq)

# ---------------------------------------------------------------- control de unicidad (8-gramas)
_STOP=set("de del la el los las y e o u con en a al un una por para que se es son su sus lo le les no ni más mas sin solo ya si sí como pero ficha fichas modelo modelos año".split())
def tk(t): return [w for w in re.findall(r"[a-záéíóúñü0-9€%]+(?:[.,/][a-záéíóúñü0-9]+)*",t.lower())]
def texto_plano(en):
    """Texto de las secciones nuevas en el mismo orden en que se pintan (para medir 8-gramas sobre la página entera)."""
    out=[x for x in en.get("cifras",[])]
    out+=[texto_modelo(m) for m in en.get("modelos",[])]
    out+=[f"{m['n']} {m['t']}." for m in en.get("destacadosModelos",[])]
    for x in en.get("parecidos",[]): out.append(x["pre"]+" "+" ".join(f"{m['n']} {m['v']}" for m in x["items"]))
    for f in en.get("faq",[]): out+=[f["q"],f["a"]]
    return out
def ventanas(en):
    return RG.hashes(RG.tok(" ".join(texto_plano(en))))
def colisiones(en):
    return REG.esta(ventanas(en)) if REG is not None else 0
def bloque_texto(en):
    out=list(en.get("cifras",[]))
    out+= [f"{m['n']} {m['t']}." for m in en.get("destacadosModelos",[])]
    for x in en.get("parecidos",[]): out.append(x["pre"]+" "+", ".join(f"{m['n']} ({m['v']})" for m in x["items"])+".")
    for f in en.get("faq",[]): out+=[f["q"],f["a"]]
    return out
def especificos(nombre,nombres,en):
    sp=set()
    for n in [nombre]+list(nombres):
        sp|={w for w in tk(n) if w not in _STOP and (len(w)>2 or re.search(r"\d",w))}
    for x in en.get("parecidos",[]):
        for m in x["items"]+[x["ref"]]: sp|={w for w in tk(m["n"]) if w not in _STOP and (len(w)>2 or re.search(r"\d",w))}
    return sp
def _es_num_esp(w):
    return bool(re.search(r"\d",w)) and (len(re.sub(r"\D","",w))>=3 or "," in w)
def gramas(en,N=8):
    G=set()
    for par in bloque_texto(en):
        w=tk(par)
        for i in range(len(w)-N+1): G.add(hash(tuple(w[i:i+N])))
    return G
def huecos(en,nombre,nombres,N=8):
    """Ventanas de N palabras sin ningún nombre ni cifra específica (plantilla pura) y conjunto de todos los 8-gramas."""
    sp=especificos(nombre,nombres,en); malas=[]; G=set()
    for par in bloque_texto(en):
        w=tk(par)
        for i in range(len(w)-N+1):
            v=w[i:i+N]; G.add(tuple(v))
            if not any(x in sp or _es_num_esp(x) for x in v): malas.append(" ".join(v))
    return malas,G
