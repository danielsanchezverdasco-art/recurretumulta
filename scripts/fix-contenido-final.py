#!/usr/bin/env python3
"""31/10/2026 (re-auditoría en vivo 11:44-11:54). Red de seguridad sobre dist, tras el prerender y antes del sitemap.
No inventa datos ni borra páginas; solo limpia texto/enlaces. Cubre:
  B2  texto interno visible (null, precioDesde, cargaUtilKg, «prohibido calcular», «primer lote», Grok, «deja/queda sin dato»…):
      se elimina la FRASE que lo contiene (en texto visible, metas y JSON-LD).
  A1  autor «Merlín» -> «la redacción de RecurreTuMulta» (visible, metas, JSON-LD).
  A3  «% de viabilidad» -> «valoración orientativa de los motivos para recurrir (sin porcentajes)».
  A7  enlaces /comparador-*/?a=…&b=… con slug que da 301 -> slug final (de dist/_redirects, solo si la ficha final existe).
  A6  slug de comparador cuya ficha no existe -> se quita ese parámetro (el enlace sigue funcionando); nada de 301 nuevos.
  IMG <img> sin src: solo la miniatura decorativa h-12 w-20 -> recuadro; el resto se cuenta pero NO se borra (es media por arreglar).
Uso: fix-contenido-final.py dist [--solo-informe]"""
import os, re, sys, json, html as H
D = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else "dist"
INFORME = "--solo-informe" in sys.argv
DOM = "https://recurretumulta.online"
MARK = re.compile(r"\bnull\b|\bundefined\b|\bNaN\b|precioDesde|cargaUtilKg|carnetNecesario|pesoKg\b|prohibido calcul\w*|(?:antes|fuera)[^.]{0,40}primer lote|\bGrok\b|(?:deja|dejan|queda|quedan|quedar\w*)\s+(?:en\s+)?sin dato", re.I)
MARK_CS = re.compile(r"\bnull\b|\bundefined\b|\bNaN\b|precioDesde|cargaUtilKg|carnetNecesario|pesoKg\b|prohibido calcul\w*|(?:antes|fuera)[^.]{0,40}primer lote|\bGrok\b|(?:deja|dejan|queda|quedan|quedar\w*)\s+(?:en\s+)?sin dato")
SPLIT = re.compile(r"(?<=[.!?;:])\s+(?=[A-ZÁÉÍÓÚÑ¿¡«“\"(])")
CAT = {"comparador-coches": "coches", "comparador-motos": "motos", "comparador-patinetes": "patinetes"}
R = {}
try:
    for l in open(os.path.join(D, "_redirects"), encoding="utf8"):
        p = l.split()
        if len(p) >= 3 and not p[0].startswith("#") and p[2].startswith("301") and "*" not in p[0] and ":" not in p[0]:
            R.setdefault(p[0].rstrip("/") + "/", p[1].replace(DOM, ""))
except OSError: pass
def existe(p):
    q = p.split("#")[0].split("?")[0].strip("/")
    return q != "" and os.path.isfile(os.path.join(D, q, "index.html"))
def final(p):
    seen = set()
    while p in R and p not in seen: seen.add(p); p = R[p]
    return p
ST = dict(frases=0, merlin=0, viab=0, cmp301=0, cmpdead=0, img=0, img_otros=0, paginas=0)

SUB = [
  (r"precioDesde\s*=\s*null", "el precio de partida no está publicado"),
  (r"\bconsta como null\b", "no consta"),
  (r"\bel campo a null\b", "el dato sin publicar"),
  (r"\btodos figuran a null\b", "ninguno figura"),
  (r"\bdeja las estrellas a null\b", "no otorga estrellas"),
  (r"\b(?:quedan|queda)\s+sin dato\b", "no constan"),
  (r"\b(?:dejan|deja)\s+sin dato\b", "no publican"),
  (r"\ba null\b", "sin dato"), (r"\bcomo null\b", "como no disponible"), (r"\bnull\b|\bundefined\b|\bNaN\b", "no disponible"),
  (r"precioDesde", "precio de partida"), (r"cargaUtilKg", "carga útil"),
]
def subst(t):
    for rx, rp in SUB: t = re.sub(rx, rp, t)
    return t
def limpia_frases(t):
    """Quita las frases con marcas internas de un texto plano. Devuelve (texto, n)."""
    if not MARK.search(t): return t, 0
    partes = SPLIT.split(t)
    keep = [x for x in partes if not MARK.search(x)]
    n = len(partes) - len(keep)
    if not keep:   # el nodo entero es una sola frase interna: no se vacía, se reescribe con sustituciones neutras
        return subst(t), 1
    return " ".join(keep), n

ME = [
  (re.compile(r"Redactad[oa] por\s+(?:<strong>)?Merl[íi]n(?:</strong>)?"), "Redactado por el equipo de RecurreTuMulta"),
  (re.compile(r"\bPor\s+(<strong>)?Merl[íi]n(</strong>)?"), r"Por \1la redacción de RecurreTuMulta\2"),
  (re.compile(r"Redacción:\s*Merl[íi]n"), "Redacción: RecurreTuMulta"),
  (re.compile(r"(<strong>)Merl[íi]n(</strong>)"), r"\1la redacción de RecurreTuMulta\2"),
  (re.compile(r"Merl[íi]n"), "la redacción de RecurreTuMulta"),
]
VIAB = [(re.compile(r"el % de viabilidad"), "una valoración orientativa de los motivos para recurrir (sin porcentajes)")]

def txt_str(s):
    """Para una cadena de texto (ya des-escapada): frases + Merlín + viabilidad."""
    s2, n = limpia_frases(s); ST["frases"] += n
    for rx, rp in ME:
        s3 = rx.sub(rp, s2)
        if s3 != s2: ST["merlin"] += 1; s2 = s3
    for rx, rp in VIAB:
        s3 = rx.sub(rp, s2)
        if s3 != s2: ST["viab"] += 1; s2 = s3
    return s2

def walk(o):
    if isinstance(o, dict): return {k: walk(v) for k, v in o.items()}
    if isinstance(o, list): return [walk(v) for v in o]
    if isinstance(o, str) and not o.startswith("http"): return txt_str(o)
    return o

LD = re.compile(r'(<script type="application/ld\+json"[^>]*>)(.*?)(</script>)', re.S)
def fix_ld(m):
    try: j = json.loads(m.group(2))
    except Exception: return m.group(0)
    raw = json.dumps(walk(j), ensure_ascii=False, separators=(",", ":"))
    return m.group(1) + raw + m.group(3)

TXT = re.compile(r">([^<>]+)<")
def fix_txt(m):
    t = m.group(1)
    if not (MARK.search(t) or "Merl" in t or "viabilidad" in t): return m.group(0)
    # des-escapa entidades mínimas para trabajar y vuelve a escapar solo & < >
    raw = H.unescape(t)
    nuevo = txt_str(raw)
    if nuevo == raw: return m.group(0)
    return ">" + H.escape(nuevo, quote=False) + "<"

META = re.compile(r'(<meta\b[^>]*?\scontent=")([^"]*)(")')
def fix_meta(m):
    v = m.group(2)
    if not (MARK.search(v) or "Merl" in v or "viabilidad" in v): return m.group(0)
    raw = H.unescape(v); nuevo = txt_str(raw)
    if nuevo == raw: return m.group(0)
    return m.group(1) + H.escape(nuevo, quote=True) + m.group(3)

CMPL = re.compile(r'(href=")((?:' + re.escape(DOM) + r')?/(comparador-(?:coches|motos|patinetes))/\?)([^"]*)(")')
def fix_cmp(m):
    cat = CAT[m.group(3)]; q = m.group(4)
    partes = q.split("&amp;"); out = []; cambio = False
    for pt in partes:
        k, _, v = pt.partition("=")
        if k in ("a", "b") and v:
            ruta = "/%s/%s/" % (cat, v)
            if ruta in R:
                f = final(ruta)
                if f.startswith("/%s/" % cat) and len(f.strip("/").split("/")) == 2 and existe(f):
                    pt = "%s=%s" % (k, f.strip("/").split("/")[1]); ST["cmp301"] += 1; cambio = True
                else:  # el 301 no acaba en una ficha existente del mismo tipo: se quita el parámetro (no se añaden 301 nuevos)
                    ST["cmpdead"] += 1; cambio = True; continue
            elif not existe(ruta):
                ST["cmpdead"] += 1; cambio = True; continue
        out.append(pt)
    if not cambio: return m.group(0)
    return m.group(1) + m.group(2)[:-1] + ("?" + "&amp;".join(out) if out else "") + m.group(5)

IMG = re.compile(r"<img\b[^>]*>")
def fix_img(m):
    t = m.group(0)
    if re.search(r"\ssrc=", t) or re.search(r"\sdata-fb", t): return t
    # Un <img> sin src en una ficha es un fallo de MEDIA (se arregla en origen/rellenar-media), nunca se borra: solo se cuenta.
    # Única excepción: miniatura decorativa h-12 w-20 (comparador-garantia-bateria) -> recuadro vacío.
    if "h-12 w-20" in t:
        ST["img"] += 1
        return '<span class="h-12 w-20 shrink-0 rounded-lg bg-gray-100" aria-hidden="true"></span>'
    ST["img_otros"] += 1
    return t

def trata(s):
    s = LD.sub(fix_ld, s)
    # texto visible fuera de scripts/styles
    partes = re.split(r"(<script\b.*?</script>|<style\b.*?</style>|<title\b.*?</title>)", s, flags=re.S)
    for i in range(0, len(partes), 2):
        partes[i] = TXT.sub(fix_txt, partes[i])
        partes[i] = META.sub(fix_meta, partes[i])
        partes[i] = CMPL.sub(fix_cmp, partes[i])
        partes[i] = IMG.sub(fix_img, partes[i])
    return "".join(partes)

for raiz, ds, fs in os.walk(D):
    if "/assets" in raiz or "index.html" not in fs: continue
    f = os.path.join(raiz, "index.html")
    s = open(f, encoding="utf-8").read(); s2 = trata(s)
    if s2 != s:
        ST["paginas"] += 1
        if not INFORME: open(f, "w", encoding="utf-8").write(s2)
print("fix-contenido-final: páginas tocadas=%(paginas)d frases quitadas=%(frases)d merlín=%(merlin)d viabilidad=%(viab)d comparador 301→final=%(cmp301)d comparador slug muerto=%(cmpdead)d img miniatura sin src=%(img)d img sin src restantes (no tocados)=%(img_otros)d" % ST)
