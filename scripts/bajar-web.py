# Descarga a dist/ una copia EXACTA de toda la web publicada (html, js, media) del deploy publicado (necesario antes de publicar).
# Uso: NETLIFY_AUTH_TOKEN=... python3 scripts/bajar-media.py
import json,os,urllib.request,urllib.parse,concurrent.futures as cf
SITE="438b74cf-d05a-4685-9de8-7bf56a1ef7ee";T=os.environ["NETLIFY_AUTH_TOKEN"]
H={"Authorization":"Bearer "+T}
get=lambda u:urllib.request.urlopen(urllib.request.Request(u,headers=H),timeout=120).read()
site=json.loads(get(f"https://api.netlify.com/api/v1/sites/{SITE}"));dep=site["published_deploy"]["id"]
ORIG=f"https://{dep}--{site['name']}.netlify.app"  # directo a Netlify, sin Cloudflare
print("deploy en vivo",dep,flush=True)
files=[];p=1
while True:
    b=json.loads(get(f"https://api.netlify.com/api/v1/deploys/{dep}/files?page={p}&per_page=1000"))
    if not b: break
    files+=[f["id"] for f in b ];p+=1
base=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","dist")
FALLOS=[]
def fetch(path):
    for i in range(4):
        try: return urllib.request.urlopen(urllib.request.Request(ORIG+urllib.parse.quote(path),headers={"User-Agent":"Mozilla/5.0"}),timeout=120).read()
        except Exception as e: err=e
    raise err
def dl(path):
    dst=base+path
    if os.path.exists(dst): return
    os.makedirs(os.path.dirname(dst),exist_ok=True)
    try: data=fetch(path)
    except Exception as e: FALLOS.append(path); return
    open(dst,"wb").write(data)
import shutil
INTERNOS={"/_redirects","/_headers"}  # Netlify no los sirve: se copian de scripts/live/ (Cosa los mantiene al día)
for f in INTERNOS & set(files):
    shutil.copy(os.path.join(os.path.dirname(os.path.abspath(__file__)),"live",f[1:]),base+f)
files=[f for f in files if f not in INTERNOS]
with cf.ThreadPoolExecutor(12) as ex: list(ex.map(dl,files))
print("deploy en vivo",dep,"ficheros",len(files))
if FALLOS:
    print("NO DESCARGADOS (no publiques hasta resolverlo):",len(FALLOS));[print(" ",f) for f in FALLOS]
else: print("OK, copia completa")
