#!/usr/bin/env python3
"""
validar-mandatos.py — Puerta 6b del pipeline blindado de publicación.
Valida los MANDATOS PERMANENTES DE ESTRUCTURA (docs/MANDATOS-PERMANENTES.md)
sobre el HTML prerenderizado en dist/ para cada ruta cambiada.

Contrato (docs/ARQUITECTURA-PUBLISH.md §3.5):
    python3 scripts/validar-mandatos.py --dist DIST --routes-file RUTAS
        [--routes-json scripts/routes.json] [--strict] [--format text|json]

- Sin --routes-file: valida todo dist/ (barrido de index.html).
- Exit 0 = publica (sin fallos). Exit 1 = no publica (hay fallos).
- --strict: los avisos se convierten en fallos.
- Solo lectura: nunca toca dist/ ni despliega nada.

Valida por tipo de ruta:
- Fichas ^/(coches|motos|patinetes)/<slug>: estructura Maextro V800 + paquete
  obligatorio (EuroNCAP, mantenimiento, timeline con fotos, garantía, precio) + títulos
  V800 + enlaces.
- Blogs ^/blog/<slug>: si es de vehículo (título V800 'por [precio]' o enlace a ficha),
  estructura blog Maextro + paquete blog completo (3 fotos, ficha que resuelva, FAQ,
  tablas, CTA); si es no-vehículo, solo FAQ + tablas + enlaces + CTA (el título V800
  es aviso, no fallo).
- Resto de rutas: solo títulos + enlaces.
"""
from __future__ import annotations

import argparse
import html as htmlmod
import json
import os
import re
import sys
from collections import Counter
from html.parser import HTMLParser

CANONICAL_BASE_DEFAULT = "https://recurretumulta.online"

# ---------------------------------------------------------------- utils

def norm_route(r: str) -> str:
    r = r.strip()
    if not r:
        return ""
    if "#" in r or "?" in r:
        r = r.split("#", 1)[0].split("?", 1)[0]
    if not r.startswith("/"):
        r = "/" + r
    r = re.sub(r"/+", "/", r)
    if not r.endswith("/"):
        r = r + "/"
    return r


class LinkExtractor(HTMLParser):
    """Extrae title, h1/h2, imgs, anchors, jsonld y texto plano."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.h1 = []
        self.h2 = []
        self.imgs = []          # (src, alt)
        self.anchors = []       # (href, text)
        self.jsonld_types = []
        self.jsonld_question_count = 0
        self._cur = None        # tag en captura
        self._buf = []
        self._a_href = None
        self._in_script = False
        self._script_buf = []
        self._skip = 0          # dentro de script/style
        self._text = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("script", "style"):
            self._skip += 1
            if tag == "script":
                self._in_script = True
                self._script_buf = []
            return
        if self._skip:
            return
        if tag in ("title", "h1", "h2"):
            self._cur = tag
            self._buf = []
        elif tag == "img":
            self.imgs.append((a.get("src", ""), a.get("alt", "")))
        elif tag == "a":
            self._a_href = a.get("href", "")
            self._cur = "a"
            self._buf = []

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            if self._skip:
                self._skip -= 1
            if tag == "script":
                self._in_script = False
                src = "".join(self._script_buf)
                self.jsonld_types.extend(re.findall(r'"@type"\s*:\s*"([^"]+)"', src))
                self.jsonld_question_count += len(re.findall(r'"@type"\s*:\s*"Question"', src))
            return
        if self._skip:
            return
        if tag == "a" and self._cur == "a":
            self.anchors.append((self._a_href or "", "".join(self._buf).strip()))
            self._cur = None
            self._buf = []
            self._a_href = None
        elif self._cur == tag:
            text = "".join(self._buf).strip()
            if tag == "title":
                self.title = text
            elif tag == "h1":
                self.h1.append(text)
                self._text.append(text)  # los H1 cuentan para la detección de secciones
            elif tag == "h2":
                self.h2.append(text)
                self._text.append(text)  # los H2 cuentan para la detección de secciones
            self._cur = None
            self._buf = []

    def handle_data(self, data):
        if self._in_script:
            self._script_buf.append(data)
            return
        if self._skip:
            return
        if self._cur in ("title", "h1", "h2", "a"):
            self._buf.append(data)
        else:
            self._text.append(data)

    @property
    def text(self) -> str:
        return re.sub(r"\s+", " ", " ".join(self._text)).strip()


OFFICIAL_DOMAINS = (
    "dgt.es", "boe.es", "euro-ncap.com", "euroncap.com", "mitma.gob.es",
    "idae.es", "europa.eu", "ec.europa.eu", "mineco.gob.es", "cne.es",
    "cnmc.es", "ine.es", "trafico.es", "cuerpomultas", "lamoncloa.gob.es",
    "incual", "asepa", "fom.es",
)

TITLE_FICHA_RE = re.compile(r"^[^:]{2,}:\s.+?\s\[Ficha\s(19|20)\d{2}\]$")
TITLE_BLOG_VEHICLE_RE = re.compile(r"^[^:]{2,}:\s.+?\s+por\s+.+$")
BRAND_RE = re.compile(r"recurretumulta", re.I)
EURO_HONEST_RE = re.compile(r"sin\s+(datos|test|prueba)\s+euroncap", re.I)
CTA_TEXT_RE = re.compile(r"analiz(a|ar)\s+(tu|mi|la)?\s*multa", re.I)

FICHA_PREFIXES = ("/coches/", "/motos/", "/patinetes/")


def route_kind(route: str) -> str:
    if any(route.startswith(p) and len(route.rstrip("/").split("/")) == 3 for p in FICHA_PREFIXES):
        return "ficha"
    if route.startswith("/blog/") and len(route.rstrip("/").split("/")) == 3:
        return "blog"
    return "otra"


def model_from_title(title: str) -> str:
    part = title.split(":", 1)[0].strip()
    part = re.sub(r"\s*\|\s*.*$", "", part).strip()
    return part


# ---------------------------------------------------------------- _redirects

def load_redirect_rules(dist: str):
    """[(regex_compilado, target)] de dist/_redirects (reglas Netlify simples)."""
    rules = []
    p = os.path.join(dist, "_redirects")
    if not os.path.isfile(p):
        return rules
    with open(p, encoding="utf-8") as f:
        for line in f:
            line = line.split("#", 1)[0].strip()
            if not line:
                continue
            parts = line.split()
            if len(parts) < 2:
                continue
            src = parts[0]
            # '*' -> '.*'; escapamos el resto
            rx = "^" + re.escape(src).replace(r"\*", ".*") + "$"
            try:
                rules.append((re.compile(rx), parts[1]))
            except re.error:
                continue
    return rules


def internal_target_ok(dist: str, path: str, redirect_rules) -> bool:
    """¿Un href interno '/...' resuelve a algo servible?"""
    path = path.strip()
    if not path:
        return False
    for ruleset, repl in redirect_rules:
        if ruleset.match(path):
            return True  # regla de _redirects: lo sirve Netlify
    rel = path.lstrip("/")
    full = os.path.join(dist, rel)
    if os.path.isfile(full):
        return True
    if os.path.isfile(os.path.join(full, "index.html")):
        return True
    return False


def href_is_internal(href: str):
    """Devuelve el path interno si el href apunta a la propia web, o None."""
    href = (href or "").strip()
    if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
        return None
    if href.startswith("//"):
        return None
    m = re.match(r"^https?://([^/]+)(/.*)?$", href)
    if m:
        host = m.group(1).lower()
        if host in ("recurretumulta.online", "www.recurretumulta.online"):
            path = (m.group(2) or "/").split("#", 1)[0].split("?", 1)[0]
            return path or "/"
        return None  # externo
    if href.startswith("/"):
        return href.split("#", 1)[0].split("?", 1)[0]
    return None  # relativo: se ignora (el SPA usa relativos controlados)


def iter_h2_sections(html_src: str):
    """[(texto_del_h2, html_crudo_hasta_el_siguiente_h2)] para cada <h2>."""
    matches = list(re.finditer(r"<h2\b[^>]*>(.*?)</h2>", html_src, re.I | re.S))
    out = []
    for i, m in enumerate(matches):
        head = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", m.group(1))).strip()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(html_src)
        out.append((head, html_src[m.end():end]))
    return out


def sections_matching(html_src: str, heading_rx: str):
    """HTML crudo de las secciones cuyo H2 coincide con heading_rx."""
    return [raw for head, raw in iter_h2_sections(html_src)
            if re.search(heading_rx, head, re.I)]


def text_of(raw_html: str) -> str:
    t = re.sub(r"<script.*?</script>", " ", raw_html, flags=re.I | re.S)
    t = re.sub(r"<[^>]+>", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def is_official_external(href: str) -> bool:
    m = re.match(r"^https?://([^/]+)", (href or "").strip())
    if not m:
        return False
    host = m.group(1).lower()
    if host in ("recurretumulta.online", "www.recurretumulta.online"):
        return False
    return any(host == d or host.endswith("." + d) for d in OFFICIAL_DOMAINS)


# ---------------------------------------------------------------- validadores

class Check:
    def __init__(self):
        self.failures = []
        self.warnings = []

    def fail(self, msg):
        self.failures.append(msg)

    def warn(self, msg):
        self.warnings.append(msg)

    def ok(self) -> bool:
        return not self.failures


def check_title(check: Check, page: LinkExtractor, kind: str, route: str, is_vehicle_blog: bool):
    title = page.title.strip()
    if not title:
        check.fail("sin <title>")
        return
    if BRAND_RE.search(title):
        check.fail(f"el <title> contiene la marca ('{title[:60]}...'): prohibido por la norma de títulos")
    if len(title) > 60:
        check.fail(f"<title> de {len(title)} caracteres (>60): '{title}'")
    if kind == "ficha":
        if not TITLE_FICHA_RE.match(title):
            check.fail(f"<title> de ficha no sigue la plantilla V800 '[Modelo]: [dato] [Ficha AAAA]': '{title}'")
    elif kind == "blog":
        if is_vehicle_blog:
            if not TITLE_BLOG_VEHICLE_RE.match(title):
                check.fail(f"<title> de blog de vehículo no sigue la plantilla V800 '[Modelo]: [dato] por [precio]': '{title}'")
        else:
            if not TITLE_BLOG_VEHICLE_RE.match(title):
                check.warn(f"<title> de blog no-vehículo no sigue la plantilla V800 (aviso, no fallo): '{title}'")


def check_links(check: Check, dist: str, redirect_rules, page: LinkExtractor):
    seen = Counter()
    for href, _text in page.anchors:
        path = href_is_internal(href)
        if path is None:
            continue
        seen[norm_route(path)] += 1
        if not internal_target_ok(dist, path, redirect_rules):
            check.fail(f"enlace interno roto: href=\"{href}\" no resuelve en dist/ ni en _redirects")
    dup = [p for p, c in seen.items() if c > 1 and p not in ("/",)]
    if dup:
        check.warn(f"URLs enlazadas 2+ veces en la misma página ({len(dup)}): {', '.join(dup[:5])}")


def check_ficha(check: Check, dist: str, page: LinkExtractor, route: str, html_src: str):
    model = model_from_title(page.title)
    # --- estructura Maextro ---
    if not page.h1 or not any(len(h) >= 3 for h in page.h1):
        check.fail("ficha sin H1 con el modelo")
    elif model and not any(model.lower() in h.lower() or h.lower() in model.lower() for h in page.h1):
        check.fail(f"H1 no contiene el modelo ('{page.h1[0][:60]}' vs título '{model}')")
    low = page.text.lower()
    for section, rx in [
        ("La nota de Cosa", r"nota de cosa"),
        ("En cifras", r"en cifras"),
        ("ZBE", r"zbe"),
        ("Precio y versiones", r"precio"),
        ("Preguntas frecuentes", r"preguntas frecuentes"),
    ]:
        if not re.search(rx, low):
            check.fail(f"ficha sin sección '{section}'")
    # --- ficha técnica animada: marcador del componente o secciones que la implican ---
    raw = page.text  # ya sin scripts
    if not (re.search(r"ficha[^<>{}]{0,40}animada", raw, re.I)
            or re.search(r"data-ficha", raw, re.I)
            or re.search(r"FichaAnimada|ficha-animada", raw)):
        # Aceptamos la forma débil: "En cifras" + "Ficha técnica" presentes (componente de ficha)
        if not (re.search(r"en cifras", low) and re.search(r"ficha t[eé]cnica", low)):
            check.fail("ficha sin ficha técnica animada detectable (marcador 'animada'/'data-ficha' ni secciones 'En cifras'+'Ficha técnica')")
    # --- precio OBLIGATORIO: se busca en las secciones Precio / En cifras / Ficha técnica
    # (los € del pie genérico NO cuentan como precio del modelo) ---
    precio_raw = " ".join(
        sections_matching(html_src, r"precio")
        + sections_matching(html_src, r"en cifras|ficha t[eé]cnica")
    )
    precio_text = text_of(precio_raw) if precio_raw else page.text
    has_euro = "€" in precio_text
    oriented = re.search(r"orientativ[oa]", precio_text, re.I)
    sin_precio = re.search(
        r"no tiene precio confirmado|precio no (publicado|disponible|confirmado)|sin precio",
        precio_text, re.I)
    if not (has_euro or oriented):
        if sin_precio:
            check.fail("ficha sin precio real y sin marcarlo como 'orientativo' "
                       "(la sección Precio dice que no hay precio confirmado)")
        else:
            check.fail("ficha sin precio (obligatorio: real, o 'orientativo' marcado como tal)")
    # --- EuroNCAP: estrellas+año+enlace oficial, o texto honesto 'sin datos EuroNCAP' ---
    if EURO_HONEST_RE.search(page.text):
        pass  # honestidad: permitido
    else:
        stars = re.search(r"([1-5])\s*(?:de\s*)?5\s*estrellas|★", page.text)
        year = re.search(r"EuroNCAP[^.]{0,80}(19|20)\d{2}", page.text, re.I)
        euroncap_link = any(
            re.match(r"^https?://", (h or "").strip()) and "euro-ncap" in (h or "").lower()
            for h, _t in page.anchors
        )
        if not (re.search(r"euroncap", low) and (stars or year or euroncap_link)):
            check.fail("ficha sin datos EuroNCAP: ni estrellas/año/enlace oficial ni el texto honesto 'sin datos EuroNCAP'")
        elif re.search(r"euroncap", low) and not (stars and year):
            check.warn("EuroNCAP mencionado pero sin estrellas+año explícitos (verificar que no se inventa)")
    # --- mantenimiento con fuente ---
    if not re.search(r"mantenim|revisi[oó]n", low):
        check.fail("ficha sin sección de mantenimiento")
    elif not any(is_official_external(h) for h, _t in page.anchors):
        check.fail("ficha con mantenimiento pero sin fuente externa oficial enlazada")
    # --- historia / timeline CON FOTOS en los hitos ---
    if not re.search(r"historia|timeline|l[ií]nea de tiempo", low):
        check.fail("ficha sin historia del modelo / timeline")
    else:
        hist_secs = sections_matching(html_src, r"historia|timeline|l[ií]nea de tiempo")
        hist_imgs = []
        for sec in hist_secs:
            for m in re.finditer(r'<img\b[^>]*src="(/media/[^"]+)"', sec, re.I):
                hist_imgs.append(m.group(1))
        if not hist_imgs:
            check.fail("ficha con historia/timeline sin fotos en los hitos (se exige foto en cada hito)")
        else:
            for src in hist_imgs:
                if not os.path.isfile(os.path.join(dist, src.lstrip("/"))):
                    check.fail(f"foto de la historia no existe en disco: {src}")
                    break
    # --- garantía ---
    if not re.search(r"garant", low):
        check.fail("ficha sin mención de la garantía oficial")
    # --- FAQ 5-6 con FAQPage ---
    faq_ok = "FAQPage" in page.jsonld_types
    nq = page.jsonld_question_count
    if not faq_ok:
        check.fail("ficha sin JSON-LD FAQPage")
    elif not (5 <= nq <= 6):
        check.fail(f"FAQPage con {nq} preguntas (se exigen 5-6)")


def ficha_id_link(page: LinkExtractor):
    """Primer enlace <a href=/coches|motos|patinetes/<id>> que resuelva."""
    for href, _t in page.anchors:
        m = re.match(r"^/(coches|motos|patinetes)/([^/\"?#]+)/?$", (href or "").strip())
        if m:
            return href
    return None


def is_vehicle_title(title: str) -> bool:
    """¿El título sigue la plantilla V800 de blog de vehículo ('[Modelo]: [dato] por [precio]')?"""
    return bool(TITLE_BLOG_VEHICLE_RE.match((title or "").strip()))


def check_blog(check: Check, dist: str, redirect_rules, page: LinkExtractor, route: str,
               html_src: str, table_count: int) -> bool:
    """Devuelve True si es blog de vehículo.

    Blogs de vehículo (título V800 'por [precio]' o enlace a ficha): paquete completo.
    Blogs no-vehículo: solo FAQ + tablas + enlaces + CTA (el título V800 es aviso, no fallo).
    """
    model = model_from_title(page.title)
    low = page.text.lower()
    ficha_href = ficha_id_link(page)
    is_vehicle = bool(ficha_href) or is_vehicle_title(page.title)

    if is_vehicle:
        # --- estructura blog Maextro (solo vehículo) ---
        if not page.h2:
            check.fail("blog sin H2")
        elif model and not any(model.lower() in h.lower() or h.lower() in model.lower() for h in page.h2):
            check.fail(f"ningún H2 contiene el modelo ('{model}')")
        for section, rx in [
            ("Ficha técnica: [Modelo]", r"ficha t[eé]cnica"),
            ("explicador de la tecnología clave", r"tecnolog"),
            ("Curiosidades que lo hacen único", r"curiosidad"),
            ("gancho comparativo", r"compar"),
            ("Preguntas frecuentes", r"preguntas frecuentes"),
        ]:
            if not re.search(rx, low):
                check.fail(f"blog sin '{section}'")
        # --- 3 fotos del modelo: ≥3 <img src=/media/ con alt, y en disco ---
        media_imgs = [
            (s, a) for s, a in page.imgs
            if s.startswith("/media/") and a.strip()
            and not re.search(r"logo|og-|favicon", s, re.I)
        ]
        if len(media_imgs) < 3:
            check.fail(f"blog con {len(media_imgs)} fotos del modelo con src=/media/ y alt (se exigen ≥3)")
        else:
            for src, _alt in media_imgs:
                if not os.path.isfile(os.path.join(dist, src.lstrip("/"))):
                    check.fail(f"imagen del blog no existe en disco: {src}")
                    break
        # --- enlace a la ficha técnica que resuelva (filtro duro: blog de coche → ficha obligatoria) ---
        if not ficha_href:
            check.fail("blog de vehículo sin enlace a la ficha técnica "
                       "(<a href=/coches|motos|patinetes/<id>> que resuelva)")
        else:
            path = href_is_internal(ficha_href)
            if not (path and internal_target_ok(dist, path, redirect_rules)):
                check.fail(f"blog con enlace a ficha que no resuelve en dist/: {ficha_href}")
    else:
        # Blog no-vehículo: no se exigen estructura de modelo, fotos del modelo ni ficha.
        if not page.h2:
            check.warn("blog no-vehículo sin H2")
    # --- común a todo blog: FAQ 5-6 con FAQPage ---
    if "FAQPage" not in page.jsonld_types:
        check.fail("blog sin JSON-LD FAQPage")
    elif not (5 <= page.jsonld_question_count <= 6):
        check.fail(f"FAQPage con {page.jsonld_question_count} preguntas (se exigen 5-6)")
    # --- tablas (donde encaje): aviso si no hay ninguna ---
    if table_count < 1:
        check.warn("blog sin <table> (las tablas se exigen 'donde encaje')")
    # --- enlaces internos + fuentes oficiales ---
    internal_pages = {
        href_is_internal(h) for h, _t in page.anchors
    }
    internal_pages = {p for p in internal_pages if p and p != route}
    if len(internal_pages) < 2:
        check.warn(f"blog con pocos enlaces internos a otras páginas ({len(internal_pages)}; se esperan ≥2)")
    if not any(is_official_external(h) for h, _t in page.anchors):
        check.fail("blog sin fuentes oficiales externas enlazadas")
    # --- CTA al analizador ---
    cta = any(
        (href_is_internal(h) in ("/",) or (h or "").strip().endswith("#analizador")
         or CTA_TEXT_RE.search(t or ""))
        for h, t in page.anchors
    )
    if not cta:
        check.fail("blog sin CTA al analizador (enlace a /, #analizador o texto 'analiza tu multa')")
    return is_vehicle


def validate_route(dist: str, redirect_rules, route: str):
    route = norm_route(route)
    check = Check()
    html_path = os.path.join(dist, route.lstrip("/"), "index.html")
    if not os.path.isfile(html_path):
        check.fail(f"sin HTML prerenderizado en dist/ ({html_path} no existe)")
        return route, check
    try:
        with open(html_path, encoding="utf-8") as f:
            html_src = f.read()
    except Exception as e:  # noqa: BLE001
        check.fail(f"no se pudo leer el HTML: {e}")
        return route, check

    page = LinkExtractor()
    try:
        page.feed(html_src)
    except Exception as e:  # noqa: BLE001
        check.fail(f"HTML no parseable: {e}")
        return route, check

    kind = route_kind(route)
    table_count = len(re.findall(r"<table[\s>]", html_src, re.I))

    is_vehicle_blog = False
    if kind == "ficha":
        check_ficha(check, dist, page, route, html_src)
    elif kind == "blog":
        is_vehicle_blog = check_blog(check, dist, redirect_rules, page, route, html_src, table_count)
    # títulos + enlaces: todas las rutas
    check_title(check, page, kind, route, is_vehicle_blog)
    check_links(check, dist, redirect_rules, page)
    return route, check


def collect_dist_routes(dist: str):
    routes = []
    for root, _dirs, files in os.walk(dist):
        if "index.html" in files:
            rel = os.path.relpath(root, dist)
            routes.append("/" + rel + "/" if rel != "." else "/")
    return sorted(routes)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(
        description="Puerta 6b: valida los mandatos permanentes de estructura sobre el HTML prerenderizado."
    )
    ap.add_argument("--dist", required=True, help="directorio dist/ con el HTML prerenderizado")
    ap.add_argument("--routes-file", help="fichero con una ruta por línea (sin él: valida todo dist/)")
    ap.add_argument("--routes-json", help="scripts/routes.json (fuente de verdad de rutas; opcional)")
    ap.add_argument("--strict", action="store_true", help="los avisos se convierten en fallos")
    ap.add_argument("--format", choices=["text", "json"], default="text", help="formato de salida")
    args = ap.parse_args(argv)

    dist = os.path.abspath(args.dist)
    if not os.path.isdir(dist):
        print(f"ERROR: dist no existe: {dist}", file=sys.stderr)
        return 2

    if args.routes_file:
        with open(args.routes_file, encoding="utf-8") as f:
            routes = [norm_route(l) for l in f]
        routes = [r for r in routes if r and not r.startswith("#")]
        # quitamos comentarios inline
        routes = [r.split("#", 1)[0].strip() for r in routes]
        routes = sorted({norm_route(r) for r in routes if r})
    else:
        routes = collect_dist_routes(dist)

    redirect_rules = load_redirect_rules(dist)

    results = {}
    for route in routes:
        r, check = validate_route(dist, redirect_rules, route)
        if args.strict and check.warnings:
            check.failures = check.failures + [f"[aviso→fallo] {w}" for w in check.warnings]
            check.warnings = []
        results[r] = {
            "kind": route_kind(r),
            "ok": check.ok(),
            "failures": check.failures,
            "warnings": check.warnings,
        }

    n_fail = sum(1 for v in results.values() if not v["ok"])
    summary = {
        "routes": len(results),
        "ok": len(results) - n_fail,
        "failed": n_fail,
        "exit": 0 if n_fail == 0 else 1,
    }

    if args.format == "json":
        print(json.dumps({"summary": summary, "results": results}, ensure_ascii=False, indent=2))
    else:
        for r, v in results.items():
            status = "OK  " if v["ok"] else "FALLO"
            print(f"[{status}] {r} ({v['kind']})")
            for f_ in v["failures"]:
                print(f"   ✗ {f_}")
            for w in v["warnings"]:
                print(f"   ! {w}")
        print(f"\n{summary['ok']}/{summary['routes']} rutas en verde · "
              f"{summary['failed']} con fallos → {'PUBLICA' if n_fail == 0 else 'NO PUBLICA'}")

    return summary["exit"]


if __name__ == "__main__":
    sys.exit(main())
