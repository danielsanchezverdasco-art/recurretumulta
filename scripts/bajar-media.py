# Descarga a public/media/ todas las imágenes del deploy publicado (necesario antes de publicar).
# Uso: NETLIFY_AUTH_TOKEN=... python3 scripts/bajar-media.py
import json,os,urllib.request,concurrent.futures as cf
SITE="438b74cf-d05a-4685-9de8-7bf56a1ef7ee";T=os.environ["NETLIFY_AUTH_TOKEN"]
H={"Authorization":"Bearer "+T}
get=lambda u:urllib.request.urlopen(urllib.request.Request(u,headers=H),timeout=120).read()
dep=json.loads(get(f"https://api.netlify.com/api/v1/sites/{SITE}"))["published_deploy"]["id"]
files=[];p=1
while True:
    b=json.loads(get(f"https://api.netlify.com/api/v1/deploys/{dep}/files?page={p}&per_page=1000"))
    if not b: break
    files+=[f["id"] for f in b if f["id"].startswith("/media/")];p+=1
base=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","public")
def dl(path):
    dst=base+path
    if os.path.exists(dst): return
    os.makedirs(os.path.dirname(dst),exist_ok=True)
    open(dst,"wb").write(urllib.request.urlopen("https://recurretumulta.online"+urllib.parse.quote(path),timeout=120).read())
import urllib.parse
with cf.ThreadPoolExecutor(12) as ex: list(ex.map(dl,files))
print("media",len(files))
