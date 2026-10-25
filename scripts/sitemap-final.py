#!/usr/bin/env python3
"""Sitemap FINAL (18/10/2026). Último paso antes de publicar (build:full y deploys parciales).

Causa del bug: seo-dist.py, adsense-dist.py, postfix-vacios.py y fix-chains.py solo QUITABAN
entradas del dist/sitemap.xml que ya hubiera, y los deploys parciales arrastraban el del 14/10.
Una ficha que salía del sitemap (noindex temporal, redirección vieja, alta posterior) no volvía
nunca, aunque hoy sea indexable: faltaban ~900 URLs 200 autocanónicas.

Ahora el sitemap se REGENERA desde cero a partir del HTML prerenderizado de dist/:
  - entra toda página dist/<ruta>/index.html que responde 200 (sin regla forzada 301!/302!/404!
    en _redirects, exacta o comodín), sin noindex y con canonical autorreferente;
  - fuera /404/, rutas con _revisar y duplicados (misma URL canónica);
  - si pasa de 45.000 URLs o 45 MB se parte por tipo (sitemap-<tipo>.xml) con sitemap.xml índice.
Uso: python3 scripts/sitemap-final.py dist [--split]   (--split fuerza el índice por tipo)
Informe: dist/../sitemap-final-informe.json (fuera de dist)."""
import os, re, sys, json, datetime

D = sys.argv[1] if len(sys.argv) > 1 else "dist"
FORZAR_SPLIT = "--split" in sys.argv
DOM = "https://recurretumulta.online"
HOY = datetime.date.today().isoformat()
ROBOTS = re.compile(r'<meta\s+name="robots"\s+content="([^"]*)"', re.I)
CANON = re.compile(r'<link\s+rel="canonical"\s+href="([^"]*)"', re.I)

# ── reglas forzadas de _redirects (con fichero presente, Netlify solo aplica las forzadas) ──
exactas, comodines = set(), []
rp = os.path.join(D, "_redirects")
if os.path.exists(rp):
    for ln in open(rp, encoding="utf8"):
        x = ln.split()
        if len(x) < 3 or x[0].startswith("#") or not x[0].startswith("/"):
            continue
        st = x[2]
        if not st.endswith("!") or st.startswith("200"):
            continue
        if x[0].endswith("*"):
            comodines.append(x[0][:-1])
        else:
            exactas.add(x[0].rstrip("/") + "/")

def redirigida(r):
    return r in exactas or any(r.startswith(c) for c in comodines)

# lastmod: el del sitemap anterior si lo había; si no, hoy.
lastmod = {}
viejo = os.path.join(D, "sitemap.xml")
if os.path.exists(viejo):
    for loc, lm in re.findall(r"<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>", open(viejo, encoding="utf8").read()):
        lastmod[loc] = lm
for sub in os.listdir(D):
    if re.match(r"sitemap-[a-z0-9-]+\.xml$", sub):
        for loc, lm in re.findall(r"<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>", open(os.path.join(D, sub), encoding="utf8").read()):
            lastmod[loc] = lm

urls, motivos, vistos = [], {}, set()
def fuera(r, m):
    motivos[m] = motivos.get(m, 0) + 1

for raiz, dirs, fs in os.walk(D):
    dirs[:] = [d for d in dirs if d != "assets"]
    if "index.html" not in fs:
        continue
    r = "/" + os.path.relpath(raiz, D).replace(os.sep, "/") + "/"
    r = "/" if r == "/./" else r
    if r == "/404/" or "_revisar" in r or "/revisar" in r:
        fuera(r, "404/_revisar"); continue
    if redirigida(r):
        fuera(r, "redirigida (301!)"); continue
    h = open(os.path.join(raiz, "index.html"), encoding="utf8", errors="ignore").read(250000)
    rb = ROBOTS.findall(h)
    if any("noindex" in x.lower() for x in rb):
        fuera(r, "noindex"); continue
    c = CANON.search(h)
    if not c or c.group(1) != DOM + r:
        fuera(r, "canonical a otra URL" if c else "sin canonical"); continue
    if r in vistos:
        fuera(r, "duplicada"); continue
    vistos.add(r)
    urls.append(r)

def tipo(r):
    s = r.strip("/").split("/")[0] if r != "/" else ""
    return s if s in ("coches", "motos", "patinetes", "blog") else "paginas"

def prio(r):
    return "1.0" if r == "/" else "0.7" if r.startswith("/blog/") else "0.8" if r.startswith("/multas/") else "0.9"

def bloque(r):
    loc = DOM + r
    return (f"  <url>\n    <loc>{loc}</loc>\n    <lastmod>{lastmod.get(loc, HOY)}</lastmod>\n"
            f"    <priority>{prio(r)}</priority>\n  </url>\n")

def urlset(lista):
    return ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "".join(bloque(r) for r in lista) + "</urlset>\n")

orden = {"paginas": 0, "coches": 1, "motos": 2, "patinetes": 3, "blog": 4}
urls.sort(key=lambda r: (orden[tipo(r)], r != "/", r))
for f in os.listdir(D):
    if re.match(r"sitemap-[a-z0-9-]+\.xml$", f):
        os.remove(os.path.join(D, f))
unico = urlset(urls)
partir = FORZAR_SPLIT or len(urls) > 45000 or len(unico.encode()) > 45 * 1024 * 1024
por_tipo = {}
for r in urls:
    por_tipo.setdefault(tipo(r), []).append(r)
if partir:
    idx = ['<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n']
    for t in sorted(por_tipo, key=lambda t: orden[t]):
        open(os.path.join(D, f"sitemap-{t}.xml"), "w", encoding="utf8").write(urlset(por_tipo[t]))
        idx.append(f"  <sitemap>\n    <loc>{DOM}/sitemap-{t}.xml</loc>\n    <lastmod>{HOY}</lastmod>\n  </sitemap>\n")
    idx.append("</sitemapindex>\n")
    open(viejo, "w", encoding="utf8").write("".join(idx))
else:
    open(viejo, "w", encoding="utf8").write(unico)
inf = {"total": len(urls), "por_tipo": {t: len(v) for t, v in por_tipo.items()}, "excluidas": motivos, "indice": partir}
json.dump(inf, open(os.path.join(os.path.dirname(os.path.abspath(D)), "sitemap-final-informe.json"), "w"), indent=1)
print("[sitemap-final]", json.dumps(inf, ensure_ascii=False))
