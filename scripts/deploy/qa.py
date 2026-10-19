#!/usr/bin/env python3
"""Paso 5a. QA HTTP de un borrador o de producción.
Uso:  python3 scripts/deploy/qa.py <URL_BASE> [--rutas FICHERO]
  URL_BASE: https://<ID_BORRADOR>--recurretumulta.netlify.app  o  https://recurretumulta.online
Comprueba: páginas clave 200, 1 solo <h1>, sin 'Algo salió mal', canonical presente, robots.txt y ads.txt 200,
sitemap con >4.000 URLs, páginas de radares con noindex, sin URLs de localhost:puerto en el HTML,
imágenes /media/ referenciadas que responden 200. Sale con código 1 si falla algo."""
import sys, re, gzip, argparse, urllib.request, urllib.error
ap = argparse.ArgumentParser(); ap.add_argument("base"); ap.add_argument("--rutas"); a = ap.parse_args()
B = a.base.rstrip("/")
UA = {"User-Agent": "Mozilla/5.0 (QA recurretumulta)", "Accept-Encoding": "gzip"}
class NR(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *x, **k): return None
op = urllib.request.build_opener(NR)
def get(p):
    try:
        r = op.open(urllib.request.Request(B + p, headers=UA), timeout=60); b = r.read()
        if r.headers.get("Content-Encoding") == "gzip": b = gzip.decompress(b)
        return r.status, b.decode("utf8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
fails = []
def ok(c, m):
    print("OK  " if c else "FAIL", m)
    if not c: fails.append(m)
RUTAS = ["/", "/coches/", "/motos/", "/patinetes/", "/blog/", "/multas/", "/multas/madrid/", "/fichas-tecnicas/"]
norm = lambda r: r if r.endswith("/") or re.search(r"\.[a-z0-9]{2,5}$", r) else r + "/"   # las páginas llevan barra final
if a.rutas: RUTAS += [norm(l.strip()) for l in open(a.rutas) if l.strip()]
RUTAS = list(dict.fromkeys(RUTAS))
imgs = set()
for p in RUTAS:
    s, h = get(p)
    n1 = len(re.findall(r"<h1[\s>]", h))
    ok(s == 200 and n1 == 1 and "Algo salió mal" not in h and 'rel="canonical"' in h, f"{p} http={s} h1={n1}")
    ok(not re.search(r"(localhost|127\.0\.0\.1):\d+", h), f"{p} sin localhost:puerto")
    imgs |= set(re.findall(r'(?:src|href)="(/media/[^"?#]+)"', h))
for p in sorted(imgs)[:60]:
    s, _ = get(p); ok(s == 200, f"imagen {p} {s}")
s, sm = get("/sitemap.xml"); n = sm.count("<loc>"); ok(s == 200 and n > 4000, f"sitemap {s} urls={n}")
for p in ["/robots.txt", "/ads.txt"]:
    s, _ = get(p); ok(s == 200, f"{p} {s}")
s, h = get("/radares/")
if s == 200:
    r = re.search(r'<meta[^>]+name="robots"[^>]*content="([^"]*)"', h)
    ok(bool(r) and "noindex" in r.group(1), f"/radares/ robots={r.group(1) if r else None} (debe ser noindex mientras no esté completa)")
print("\nRESULTADO:", "TODO OK" if not fails else f"{len(fails)} FALLOS"); sys.exit(1 if fails else 0)
