import re,json,html
def _g(h):
    m=re.search(r'data-seo-id="page-schema">(.*?)</script>',h,re.S)
    if not m: return {}
    try: g=json.loads(m.group(1)).get("@graph",[])
    except Exception: return {}
    out={}
    for x in g:
        if x.get("@type") in ("Car","Motorcycle","Product","Vehicle"): out["p"]=x
        if x.get("@type")=="FAQPage": out["faq"]=[(q["name"],q["acceptedAnswer"]["text"]) for q in x["mainEntity"]]
    return out
def _texto(h):
    m=re.search(r"<main.*?</main>",h,re.S)
    t=m.group(0) if m else h
    t=re.sub(r"<script.*?</script>|<style.*?</style>","",t,flags=re.S)
    return html.unescape(re.sub(r"\s+"," ",re.sub(r"<[^>]+>"," ",t)))
def num(s): 
    s=s.strip()
    if re.fullmatch(r"\d{1,3}(\.\d{3})+",s): return float(s.replace(".",""))
    return float(s.replace(",","."))
def ficha(D,c,s,nombre):
    try: h=open(f"{D}/{c}/{s}/index.html",encoding="utf8",errors="ignore").read()
    except OSError: return None
    g=_g(h); p=g.get("p",{}); faq=g.get("faq",[]); t=_texto(h)
    r=dict(s=s,n=nombre,y=None,precio=None,precio_est=False,cv=None,kw=None,cc=None,carnet=None,etiqueta=None,kg=None,au=None,vel=None,w=None,wh=None,carga=None,tipo=None,comb=None,plazas=None,mal=None,par=None)
    d=p.get("description","")
    if p.get("vehicleModelDate"): r["y"]=int(re.sub(r"\D","",str(p["vehicleModelDate"]))[:4] or 0) or None
    of=p.get("offers") or {}
    if of.get("price"): r["precio"]=float(of["price"])
    pw=((p.get("vehicleEngine") or {}).get("enginePower") or {})
    if pw.get("value"):
        v=float(pw["value"]); 
        if pw.get("unitText")=="kW": r["kw"]=v; r["cv"]=round(v*1.35962)
        else: r["cv"]=v
    m=re.search(r"(\d[\d.,]*) CV",d)
    if m: r["cv"]=num(m.group(1))
    m=re.search(r"de (\d[\d.]*) cc",d)
    if m: r["cc"]=num(m.group(1))
    m=re.search(r"carnet ([A-Z0-9]+)",d) or re.search(r"[Cc]arnet ([A-Z0-9]+)",(dict(faq).get("") or ""))
    for q,a in faq:
        if "carnet" in q.lower():
            mm=re.search(r"[Cc]arnet ([A-Z0-9]+)",a); 
            if mm: m=mm
        if "etiqueta" in q.lower():
            mm=re.search(r"«([^»]+)»",a) or re.search(r"(CERO|ECO|B|C)\b",a)
            if mm: r["etiqueta"]=mm.group(1).capitalize() if mm.group(1).isupper() and len(mm.group(1))>1 else mm.group(1)
        if "precio" in q.lower() or "cuánto cuesta" in q.lower():
            if "≈" in a or "estimaci" in a: r["precio_est"]=True
    if m: r["carnet"]=m.group(1)
    m=re.search(r"(?:con|de) (\d[\d.,]*) km de autonom",d) or re.search(r"(\d[\d.,]*) km de autonom",d)
    if m: r["au"]=num(m.group(1))
    m=re.search(r"(?:Homologa|Declarada:?) (\d[\d.,]*) km",t) 
    if r["au"] is None and m: r["au"]=num(m.group(1))
    w=(p.get("weight") or {}).get("value")
    if w: r["kg"]=float(w)
    sp=(p.get("speed") or {}).get("value")
    if sp: r["vel"]=float(sp)
    r["tipo"]=(re.search(r"es una (?:moto|scooter) ([a-záéíóúñ ]+?)(?: eléctrica)?(?: de | con |\.|,)",d) or [None,None])[1]
    r["comb"]=(p.get("fuelType") or "").lower() or None
    r["carr"]=(p.get("bodyType") or "").lower() or None
    r["plazas"]=p.get("numberOfSeats")
    if c=="patinetes":
        def L(lab,unit):
            m=re.search(lab+r"\s+(?:≈\s*)?(\d[\d.,]*)\s*"+unit,t); return num(m.group(1)) if m else None
        r["w"]=L("Potencia nominal","W"); r["au"]=L("Autonomía declarada","km") or r["au"]
        r["vel"]=L("Velocidad máxima","km/h") or r["vel"]
        m=re.search(r"y (\d[\d.,]*) kg de peso",t); r["kg"]=num(m.group(1)) if m else (L("Peso","kg") or r["kg"])
        r["carga"]=L("Carga máxima","kg"); r["wh"]=L("Batería","Wh")
        r["horas"]=L("Tiempo de carga","horas?"); r["au_real"]=L("Autonomía real estimada","km")
        m=re.search(r"La nota de Cosa (\d[\d,]*) /10",t); r["nota"]=num(m.group(1)) if m else None
        m=re.search(r"Precio oficial\s+(≈)?\s*(\d[\d.]*) €",t)
        if m: r["precio"]=num(m.group(2)); r["precio_est"]=bool(m.group(1))
        m=re.search(r"Precio estimado desde\s+(≈)?\s*(\d[\d.]*) €",t)
        if m and not r["precio"]: r["precio"]=num(m.group(2)); r["precio_est"]=True
        m=re.search(r"Certificado DGT: ([A-Za-zéÉ ]+?)(?: [A-Z|]|\s{2}|$)",t)
        r["cert"]=m.group(1).strip() if m else None
    else:
        if of.get("price"): r["precio_est"]=False
        elif r["precio"] is None:
            for q,a in faq:
                if "cuesta" in q.lower():
                    m=re.search(r"(\d[\d.]*) €",a)
                    if m: r["precio"]=num(m.group(1)); r["precio_est"]=True
    return r
