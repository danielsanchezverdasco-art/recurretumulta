# Censo AdSense 2610 — crawler reanudable, solo lectura, ritmo pausado.
# Uso: python3 censo/crawl.py --list censo/universo/urls-marcas.txt --section marcas [--analyzer]
# Checkpoints en censo/checkpoints/<seccion>.jsonl (un JSON por página, append+flush).
# Enlaces internos distintos en censo/checkpoints/links-distintos.txt (global, sin duplicar).
# Estado og:image en censo/checkpoints/og-status.json (una HEAD por URL distinta).
# Reanuda solo: las URLs ya presentes en el checkpoint se saltan.
# Método validado en la muestra: curl (urllib fallaba con IncompleteRead tras el proxy).
import argparse, json, os, re, subprocess, sys, time, html as ihtml
from urllib.parse import urlparse

UA = "Mozilla/5.0 (X11; Linux x86_64) censo-adsense-2610"
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CK = os.path.join(BASE, "censo", "checkpoints")
os.makedirs(CK, exist_ok=True)

TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.I | re.S)
META_RE1 = re.compile(r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']', re.I | re.S)
META_RE2 = re.compile(r'<meta[^>]+content=["\'](.*?)["\'][^>]+name=["\']description["\']', re.I | re.S)
CANON_RE1 = re.compile(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\'](.*?)["\']', re.I | re.S)
CANON_RE2 = re.compile(r'<link[^>]+href=["\'](.*?)["\'][^>]+rel=["\']canonical["\']', re.I | re.S)
OG_RE1 = re.compile(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\'](.*?)["\']', re.I | re.S)
OG_RE2 = re.compile(r'<meta[^>]+content=["\'](.*?)["\'][^>]+property=["\']og:image["\']', re.I | re.S)
MAIN_RE = re.compile(r"<main\b[^>]*>(.*?)</main>", re.I | re.S)
H1_RE = re.compile(r"<h1\b", re.I)
A_RE = re.compile(r'<a\b[^>]+href=["\'](.*?)["\']', re.I | re.S)
AD_RE = re.compile(r"anuncio|publicidad|adsbygoogle|data-ad-client|doubleclick", re.I)
SCRIPT_RE = re.compile(r"<script\b.*?</script>", re.I | re.S)
STYLE_RE = re.compile(r"<style\b.*?</style>", re.I | re.S)
TAG_RE = re.compile(r"<[^>]+>")
PERS_RE = re.compile(r'nombre|apellido|\bdni\b|domicilio|tel[eé]fono|email|correo', re.I)
PRIV_RE = re.compile(r"privacidad|consentimiento|rgpd|pol[ií]tica de privacidad", re.I)

def curl_get(url):
    for intento in (1, 2):
        p = subprocess.run(["curl", "-sS", "--compressed", "-A", UA, "--max-time", "30",
                            "-w", "\n%{http_code}", url],
                           capture_output=True, timeout=60)
        out = p.stdout.decode("utf-8", "replace")
        if p.returncode == 0 and "\n" in out:
            body, code = out.rsplit("\n", 1)
            if code.strip().isdigit():
                return body, int(code.strip())
        time.sleep(10)
    return None, 0

def curl_head(url):
    p = subprocess.run(["curl", "-s", "-o", "/dev/null", "-I", "-L", "-A", UA,
                        "--max-time", "20", "-w", "%{http_code}", url],
                       capture_output=True, timeout=40)
    code = p.stdout.decode("utf-8", "replace").strip()
    return int(code) if code.isdigit() else 0

def clean_text(h):
    h = SCRIPT_RE.sub(" ", h)
    h = STYLE_RE.sub(" ", h)
    h = TAG_RE.sub(" ", h)
    return ihtml.unescape(h)

def analyze(url, body, status, is_tool):
    rec = {"url": url, "status": status}
    m = TITLE_RE.search(body)
    rec["title"] = ihtml.unescape(m.group(1)).strip() if m else ""
    rec["title_len"] = len(rec["title"])
    mm = META_RE1.search(body) or META_RE2.search(body)
    rec["meta"] = ihtml.unescape(mm.group(1)).strip() if mm else ""
    rec["meta_len"] = len(rec["meta"])
    rec["h1"] = len(H1_RE.findall(body))
    cm = CANON_RE1.search(body) or CANON_RE2.search(body)
    rec["canonical"] = ihtml.unescape(cm.group(1)).strip() if cm else ""
    om = OG_RE1.search(body) or OG_RE2.search(body)
    rec["og"] = ihtml.unescape(om.group(1)).strip() if om else ""
    main = MAIN_RE.search(body)
    if main:
        txt = clean_text(main.group(1))
        rec["main_words"] = len(txt.split())
        rec["main_text_sample"] = txt[:200]
        rec["aprox_sin_espacio"] = bool(re.search(r"≈\d", txt))
        rec["sin_precio_oficial"] = "Sin precio oficial" in txt
        ext = [h for h in A_RE.findall(main.group(1))
               if h.startswith("http") and "recurretumulta.online" not in h]
        rec["ext_links_main"] = len(ext)
        ads = AD_RE.findall(main.group(1))
        rec["ad_candidates"] = len(ads)
    else:
        rec["main_words"] = None
        rec["aprox_sin_espacio"] = False
        rec["sin_precio_oficial"] = False
        rec["ext_links_main"] = 0
        rec["ad_candidates"] = 0
    rec["foto_pendiente"] = "Foto pendiente de verificación" in body
    links = []
    for h in A_RE.findall(body):
        if h.startswith("#") or h.startswith("javascript:") or h.startswith("mailto:") or h.startswith("tel:"):
            continue
        if h.startswith("/"):
            links.append("https://recurretumulta.online" + h.split("#")[0])
        elif h.startswith("https://recurretumulta.online/"):
            links.append(h.split("#")[0])
    rec["internal_links_count"] = len(set(links))
    rec["internal_links_new"] = links
    if is_tool:
        rec["has_form"] = "<form" in body.lower()
        rec["personal_fields"] = bool(PERS_RE.search(body))
        rec["privacy_mention"] = bool(PRIV_RE.search(body))
    return rec

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", required=True)
    ap.add_argument("--section", required=True)
    ap.add_argument("--pace", type=float, default=1.5)
    ap.add_argument("--og-pace", type=float, default=0.5)
    ap.add_argument("--analyzer", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    a = ap.parse_args()
    urls = [l.strip() for l in open(a.list, encoding="utf-8") if l.strip()]
    if a.limit:
        urls = urls[:a.limit]
    ckfile = os.path.join(CK, a.section + ".jsonl")
    done = set()
    if os.path.exists(ckfile):
        with open(ckfile, encoding="utf-8") as f:
            for line in f:
                try:
                    done.add(json.loads(line)["url"])
                except Exception:
                    pass
    links_file = os.path.join(CK, "links-distintos.txt")
    seen_links = set()
    if os.path.exists(links_file):
        seen_links = set(l.strip() for l in open(links_file, encoding="utf-8") if l.strip())
    og_file = os.path.join(CK, "og-status.json")
    og_status = {}
    if os.path.exists(og_file):
        og_status = json.load(open(og_file, encoding="utf-8"))
    is_tool = (a.section == "herramientas")
    todo = [u for u in urls if u not in done]
    print(f"[{a.section}] lista={len(urls)} hechas={len(done)} pendientes={len(todo)}", flush=True)
    n = 0
    t0 = time.time()
    with open(ckfile, "a", encoding="utf-8") as ck, open(links_file, "a", encoding="utf-8") as lf:
        for url in todo:
            body, status = curl_get(url)
            if body is None:
                rec = {"url": url, "status": 0, "error": "curl-fallo-tras-2-intentos"}
            else:
                rec = analyze(url, body, status, is_tool)
                new_links = [l for l in set(rec.pop("internal_links_new")) if l not in seen_links]
                for l in new_links:
                    lf.write(l + "\n")
                    seen_links.add(l)
                lf.flush()
                rec["internal_links_new_count"] = len(new_links)
                og = rec.get("og", "")
                if og and og not in og_status:
                    og_status[og] = curl_head(og)
                    with open(og_file, "w", encoding="utf-8") as of:
                        json.dump(og_status, of)
                    time.sleep(a.og_pace)
                rec["og_status"] = og_status.get(og, None)
            ck.write(json.dumps(rec, ensure_ascii=False) + "\n")
            ck.flush()
            n += 1
            print(f"[{a.section}] {n}/{len(todo)} {url} status={rec['status']} main_words={rec.get('main_words')} title_len={rec.get('title_len')}", flush=True)
            time.sleep(a.pace)
        if a.analyzer and "https://recurretumulta.online/#analizador" not in done:
            body, status = curl_get("https://recurretumulta.online/")
            if body is not None:
                low = body.lower()
                idx = low.find('name="dni"')
                if idx < 0:
                    idx = low.find("dni")
                if idx < 0:
                    idx = low.find("analizador")
                window = body[max(0, idx - 2000):idx + 4000] if idx >= 0 else ""
                rec = {"url": "https://recurretumulta.online/#analizador", "status": status,
                       "analyzer_form_found": idx >= 0,
                       "personal_fields": bool(PERS_RE.search(window)),
                       "privacy_mention": bool(PRIV_RE.search(window)),
                       "consent_checkbox": bool(re.search(r'type=["\']checkbox["\']', window, re.I)),
                       "note": "registro especial: ventana alrededor del campo DNI del formulario del analizador en la portada (la portada en sí es sección de Merlín; aquí solo se verifica el formulario)"}
            else:
                rec = {"url": "https://recurretumulta.online/#analizador", "status": 0,
                       "error": "no se pudo descargar la portada para verificar el analizador"}
            ck.write(json.dumps(rec, ensure_ascii=False) + "\n")
            ck.flush()
            print(f"[herramientas] analizador: {rec}", flush=True)
    dt = time.time() - t0
    print(f"[{a.section}] hecho: {n} páginas en {dt:.0f}s ({dt/max(n,1):.2f}s/pág media)", flush=True)

if __name__ == "__main__":
    main()
