#!/usr/bin/env python3
"""Puerta de verificación para deploys de recurretumulta.online.

Comprueba que dist/ está completo y sano ANTES de desplegar.
Si alguna puerta falla -> exit 1 y NO se despliega.

Uso:
  python3 scripts/verify-dist.py --dist dist --routes-file rutas.txt --min-pages 5800 [--strict] [--routes-json scripts/routes.json]

Puertas:
  1. Recuento: nº de index.html >= min-pages (el árbol estable nunca puede encoger).
     NOTA DE CONTRATO (v2, R1): safe-publish-v2.sh le pasa
     --min-pages = max(paginas_backup, 5844, 5800),
     donde 5844 = nº de index.html del baseline ~/workspace/backups/dist-20261008-preprod
     y 5800 es el suelo duro. NUNCA autorreferencial al dist/ que se va a publicar.
  2. Rutas cambiadas: cada ruta tiene su HTML (>2000 chars, </html>, canonical EXACTO
     esperado = canonicalBase + ruta + "/"). En --strict además anti-shell (R11):
     <title> distinto al del shell (leído de index.html de la plantilla), ausencia
     de [data-pageloader], og:title presente.
  3. Assets: toda referencia /assets/*.js|css en el HTML existe en disco.
  4. Portada: HTML renderizado (tamaño, title, canonical EXACTO https://recurretumulta.online/).
     En --strict además las señales anti-shell.

--routes-json: ruta a scripts/routes.json (fuente única de verdad, creada por PIPELINE).
  Si existe, se lee canonicalBase (y baseline.* para documentar). Si el agente
  PIPELINE aún no lo ha creado, funciona igual con --routes-file/--min-pages
  (canonicalBase por defecto = https://recurretumulta.online).
"""
import argparse, json, os, re, sys, glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
DEFAULT_CANONICAL_BASE = "https://recurretumulta.online"
HOME = DEFAULT_CANONICAL_BASE + "/"

def fail(msg):
    print(f"  ✗ FAIL: {msg}")
    return False

def ok(msg):
    print(f"  ✓ {msg}")
    return True

def get_canonical(html):
    # Independiente del orden de atributos: <link rel="canonical" href="...">
    # o <link href="..." rel="canonical"> deben valer igual.
    m = re.search(r'<link\b[^>]*\brel=["\']canonical["\'][^>]*>', html, re.IGNORECASE)
    if not m:
        return None
    h = re.search(r'href=["\']([^"\']+)["\']', m.group(0), re.IGNORECASE)
    return h.group(1) if h else None

def get_title(html):
    m = re.search(r"<title>([^<]*)</title>", html)
    return m.group(1) if m else None

def has_og_title(html):
    return re.search(r'<meta\s+property=["\']og:title["\']', html) is not None

def has_pageloader(html):
    return "data-pageloader" in html

def expected_canonical(canonical_base, route):
    # Misma normalización que src/hooks/use-seo.ts: "/" -> base + "/",
    # resto -> base + ruta + "/".
    if route == "/":
        return canonical_base.rstrip("/") + "/"
    return canonical_base.rstrip("/") + route.rstrip("/") + "/"

def shell_title():
    """Lee el <title> de la plantilla (index.html del repo): es el title del shell sin prerenderizar.
    Se lee en runtime (no hardcodeado) porque TÍTULOS-SEO puede cambiarlo."""
    try:
        with open(os.path.join(REPO_ROOT, "index.html"), encoding="utf-8", errors="ignore") as f:
            t = get_title(f.read())
            if t:
                return t
    except OSError:
        pass
    # Fallback: valor a 11/10/2026 (index.html:48, ya sin marca tras TÍTULOS-SEO).
    # Solo se usa si index.html no se puede leer; en uso normal se lee en runtime.
    return "Recurre tu multa DGT gratis con IA"

def load_routes_json(path):
    """Lee scripts/routes.json si existe; {} si no (PIPELINE aún no lo ha creado)."""
    if not path:
        return {}
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError) as e:
        print(f"  ! aviso: no se pudo leer routes.json ({path}): {e}; usando valores por defecto")
        return {}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dist", default=os.path.expanduser("~/workspace/recurretumulta-v2/dist"))
    ap.add_argument("--routes-file", default=None, help="rutas cambiadas, una por línea")
    ap.add_argument("--min-pages", type=int, default=5800,
                    help="suelo de páginas. CONTRATO v2 (R1): safe-publish-v2.sh pasa "
                         "--min-pages = max(paginas_backup, 5844, 5800), donde 5844 es el nº de "
                         "index.html del baseline ~/workspace/backups/dist-20261008-preprod "
                         "(routes.json → baseline) y 5800 el suelo duro. NUNCA autorreferencial "
                         "al dist/ que se publica.")
    ap.add_argument("--strict", action="store_true",
                    help="anti-shell R11: title != title del shell, sin data-pageloader, og:title presente")
    ap.add_argument("--routes-json", default=None,
                    help="ruta a scripts/routes.json (si se omite, se autodetecta en scripts/)")
    args = ap.parse_args()
    dist = args.dist.rstrip("/")

    # --routes-json: autodetección en scripts/ si no se pasa explícitamente
    routes_json_path = args.routes_json
    if routes_json_path is None:
        candidate = os.path.join(SCRIPT_DIR, "routes.json")
        routes_json_path = candidate if os.path.exists(candidate) else None
    routes_json = load_routes_json(routes_json_path)
    canonical_base = routes_json.get("canonicalBase", DEFAULT_CANONICAL_BASE).rstrip("/")
    sh_title = shell_title()
    errores = 0

    print(f"== Verificando {dist} ==")
    print(f"   canonicalBase={canonical_base} strict={'SI' if args.strict else 'NO'}")

    # 1. Recuento
    htmls = glob.glob(os.path.join(dist, "**/index.html"), recursive=True)
    # excluir assets (por si acaso)
    htmls = [h for h in htmls if "/assets/" not in h]
    # R12 (12/10/2026): detectar rutas fantasma. Un `cp --parents` con ruta
    # absoluta mete los HTML en dist/home/hatch/... en vez de dist/<ruta>:
    # el recuento pasaba pero el árbol real estaba vacío -> soft 404 masivo.
    # Cualquier segmento típico de fuera del árbol es un FAIL duro.
    GHOST_SEGS = {"home", "root", "tmp", "workspace", "backups", "opt", "srv",
                  "mnt", "private", "Users", "var"}
    ghosts = [h for h in htmls
              if any(seg in GHOST_SEGS
                     for seg in os.path.relpath(h, dist).replace("\\", "/").split("/"))]
    if ghosts:
        errores += 1
        fail(f"dist/ contiene {len(ghosts)} rutas FANTASMA (p. ej. {ghosts[0]}): "
             "el árbol está malformado, reconstruir dist desde cero")
        # Las fantasmas no cuentan como páginas reales
        htmls = [h for h in htmls if h not in ghosts]
    n = len(htmls)
    if n < args.min_pages:
        errores += 1; fail(f"solo {n} páginas HTML (mínimo {args.min_pages}): el árbol se ha encogido")
    else:
        ok(f"{n} páginas HTML (>= {args.min_pages})")

    # 2. Rutas cambiadas
    routes = []
    if args.routes_file and os.path.exists(args.routes_file):
        with open(args.routes_file) as f:
            routes = [l.strip() for l in f if l.strip().startswith("/")]
    for route in routes:
        rel = route.strip("/")
        path = os.path.join(dist, rel, "index.html") if rel else os.path.join(dist, "index.html")
        expected = expected_canonical(canonical_base, route)
        if not os.path.exists(path):
            errores += 1; fail(f"falta HTML para {route}"); continue
        with open(path, encoding="utf-8", errors="ignore") as f:
            html = f.read()
        if len(html) < 2000 or "</html>" not in html:
            errores += 1; fail(f"{route}: HTML incompleto ({len(html)} chars)"); continue
        can = get_canonical(html)
        if can != expected:
            errores += 1; fail(f"{route}: canonical no EXACTO ({can} != {expected})"); continue
        if args.strict:
            title = get_title(html)
            if title == sh_title:
                errores += 1; fail(f"{route}: <title> idéntico al del shell ({title})"); continue
            if has_pageloader(html):
                errores += 1; fail(f"{route}: contiene [data-pageloader] (loader sin hidratar)"); continue
            if not has_og_title(html):
                errores += 1; fail(f"{route}: falta og:title"); continue
        ok(f"{route}: HTML propio ({len(html)//1024} KB, canonical exacto)")

    # 3. Assets: toda referencia /assets/*.js|css debe existir
    patron = re.compile(r"/assets/[A-Za-z0-9_@./-]+\.(?:js|css)")
    faltan = set()
    total_refs = 0
    for p in htmls:
        try:
            with open(p, encoding="utf-8", errors="ignore") as f:
                html = f.read()
        except OSError:
            continue
        for r in set(patron.findall(html)):
            total_refs += 1
            if not os.path.exists(os.path.join(dist, r.lstrip("/"))):
                faltan.add(r)
    if faltan:
        errores += 1
        fail(f"{len(faltan)} assets referenciados no existen (de {total_refs} refs)")
        for r in sorted(faltan)[:10]:
            print(f"      - {r}")
    else:
        ok(f"assets: {total_refs} referencias, todas existen en disco")

    # 4. Portada renderizada
    hp = os.path.join(dist, "index.html")
    expected_home = expected_canonical(canonical_base, "/")
    if os.path.exists(hp):
        with open(hp, encoding="utf-8", errors="ignore") as f:
            html = f.read()
        title = get_title(html)
        can = get_canonical(html)
        if len(html) < 20000:
            errores += 1; fail(f"portada demasiado pequeña ({len(html)} chars): parece shell sin prerenderizar")
        elif not title:
            errores += 1; fail("portada sin <title>")
        elif can != expected_home:
            errores += 1; fail(f"portada con canonical no EXACTO: {can} (esperado {expected_home})")
        elif args.strict and title == sh_title:
            errores += 1; fail(f"portada con <title> del shell ({title})")
        elif args.strict and has_pageloader(html):
            errores += 1; fail("portada con [data-pageloader] (loader sin hidratar)")
        elif args.strict and not has_og_title(html):
            errores += 1; fail("portada sin og:title")
        else:
            ok(f"portada renderizada ({len(html)//1024} KB, title ok, canonical exacto)")
    else:
        errores += 1; fail("no existe dist/index.html")

    print(f"== Resultado: {'OK' if errores == 0 else f'{errores} FALLOS'} ==")
    sys.exit(0 if errores == 0 else 1)

if __name__ == "__main__":
    main()
