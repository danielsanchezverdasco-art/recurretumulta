"""Utilidades comunes de los scripts de publicación de recurretumulta.online.
NINGUNA clave va en este fichero: todo se lee de variables de entorno.
  NETLIFY_AUTH_TOKEN   (obligatoria)  token personal de Netlify con acceso al sitio
  NETLIFY_SITE_ID      (opcional)     por defecto el sitio de recurretumulta.online
  CF_API_TOKEN         (purga)        token de Cloudflare con permiso Zone > Cache Purge
                                      (también se acepta CLOUDFLARE_API_TOKEN)
  CF_ZONE_ID           (purga)        id de la zona recurretumulta.online en Cloudflare
  DEPLOY_WORK          (opcional)     carpeta de trabajo (por defecto ./.deploy-work)
"""
import hashlib, json, os, sys, time, urllib.request, urllib.error, urllib.parse

SITE = os.environ.get("NETLIFY_SITE_ID", "438b74cf-d05a-4685-9de8-7bf56a1ef7ee")
WORK = os.path.abspath(os.environ.get("DEPLOY_WORK", ".deploy-work"))
API = "https://api.netlify.com/api/v1"


def need(var, *alts):
    for v in (var,) + alts:
        if os.environ.get(v):
            return os.environ[v]
    sys.exit(f"FALTA la variable de entorno {var}. Pídesela a Daniel; nunca la escribas en el repo.")


def api(method, url, data=None, ct="application/json", timeout=600, raw=False):
    tok = need("NETLIFY_AUTH_TOKEN")
    err = None
    for i in range(5):
        try:
            r = urllib.request.Request(url if url.startswith("http") else API + url, method=method, data=data,
                                       headers={"Authorization": "Bearer " + tok, "Content-Type": ct})
            b = urllib.request.urlopen(r, timeout=timeout).read()
            if raw:
                return b
            return json.loads(b) if b else {}
        except urllib.error.HTTPError as e:
            if e.code in (400, 401, 403, 404, 422):
                raise SystemExit(f"Netlify {method} {url} -> HTTP {e.code}: {e.read()[:300]!r}")
            err = e
        except Exception as e:  # red, timeout
            err = e
        time.sleep(3 * (i + 1))
    raise SystemExit(f"Netlify {method} {url} falló 5 veces: {err}")


def live_id():
    return api("GET", f"/sites/{SITE}")["published_deploy"]["id"]


def site_name():
    return api("GET", f"/sites/{SITE}")["name"]


def sha1_file(p):
    h = hashlib.sha1()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def file_list(deploy_id, refresh=False):
    """Lista COMPLETA de ficheros de un deploy {ruta: sha1}. Se guarda en WORK/vivo-<id>.json."""
    os.makedirs(WORK, exist_ok=True)
    out_p = os.path.join(WORK, f"ficheros-{deploy_id}.json")
    if os.path.exists(out_p) and not refresh:
        return json.load(open(out_p))
    # Netlify devuelve como máximo 100 por página aunque pidas 1000: se piden en paralelo de 8 en 8.
    import concurrent.futures as cf
    out, page, fin = {}, 1, False
    get = lambda p: api("GET", f"/deploys/{deploy_id}/files?page={p}&per_page=100", timeout=180)
    with cf.ThreadPoolExecutor(8) as ex:
        while not fin:
            for a in ex.map(get, range(page, page + 8)):
                if not a:
                    fin = True
                    continue
                for f in a:
                    out[f["id"]] = f["sha"]
            page += 8
    json.dump(out, open(out_p, "w"))
    return out


def redirect_sources(text):
    s = set()
    for l in text.splitlines():
        p = l.split()
        if len(p) >= 2 and not l.lstrip().startswith("#"):
            s.add(p[0].rstrip("/").lower() or "/")
    return s
