# Sube limpio/dist al deploy borrador EXISTENTE (sin build). Reanudable: cada
# Uso: crea antes un deploy vacío (POST /api/v1/sites/SITE/deploys con {"draft":true,"files":{}}) y pasa su id: python3 scripts/deploy_api.py <deploy_id>
# OJO: el deploy contiene SOLO lo que hay en dist. Si falta public/media completo, las fotos desaparecen.
# ejecución pide a Netlify los ficheros que aún faltan y sube solo esos.
import hashlib,json,os,sys,time,urllib.request,urllib.parse,concurrent.futures as cf
SITE="438b74cf-d05a-4685-9de8-7bf56a1ef7ee";D=sys.argv[1];T=os.environ["NETLIFY_AUTH_TOKEN"];ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","dist")
H={"Authorization":"Bearer "+T}
def api(method,url,data=None,ctype="application/json",timeout=600):
    for i in range(5):
        try:
            r=urllib.request.Request(url,method=method,data=data,headers={**H,"Content-Type":ctype})
            b=urllib.request.urlopen(r,timeout=timeout).read(); return json.loads(b) if b else {}
        except urllib.error.HTTPError as e:
            if e.code in (400,401,403,404,422): raise
            err=e
        except Exception as e: err=e
        time.sleep(3*(i+1))
    raise err
CACHE=os.path.join(ROOT,"..","hashes.json")
def sha(p):
    h=hashlib.sha1()
    with open(p,"rb") as f:
        for b in iter(lambda:f.read(1<<20),b""): h.update(b)
    return h.hexdigest()
files={"/"+os.path.relpath(os.path.join(dp,f),ROOT):os.path.join(dp,f) for dp,_,fs in os.walk(ROOT) for f in fs}
with cf.ThreadPoolExecutor(8) as ex: hashes=dict(zip(files,ex.map(sha,files.values())))
json.dump(hashes,open(CACHE,"w")); print("ficheros",len(hashes),flush=True)
d=api("PUT",f"https://api.netlify.com/api/v1/sites/{SITE}/deploys/{D}",json.dumps({"files":hashes,"draft":True}).encode())
req=set(d.get("required") or []); print("estado",d.get("state"),"faltan",len(req),flush=True)
by={}
for rel,h in hashes.items(): by.setdefault(h,rel)
todo=[by[h] for h in req]
def up(rel):
    try:
        api("PUT",f"https://api.netlify.com/api/v1/deploys/{D}/files"+urllib.parse.quote(rel),open(files[rel],"rb").read(),"application/octet-stream",300); return 0
    except Exception as e: print("FALLO",rel,e,flush=True); return 1
n=0;fails=0
with cf.ThreadPoolExecutor(12) as ex:
    for r in ex.map(up,todo):
        n+=1;fails+=r
        if n%500==0: print("subidos",n,"/",len(todo),flush=True)
d=api("GET",f"https://api.netlify.com/api/v1/deploys/{D}")
print("FIN subidos",n-fails,"fallos",fails,"estado",d.get("state"),d.get("deploy_ssl_url"),flush=True)
