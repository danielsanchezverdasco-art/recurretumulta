# Censo AdSense 2610 — análisis de checkpoints a filas CSV (sin duplicados de título/meta:
# esos van en un pase global final, no por sección).
# Uso: python3 censo/analiza.py --section marcas
# Salida: censo/checkpoints/rows-<seccion>.csv + resumen por pantalla.
import argparse, csv, json, os, re
from urllib.parse import urlparse

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CK = os.path.join(BASE, "censo", "checkpoints")
HOME = "https://recurretumulta.online/"
GENERIC = "og-recurretumulta"

def kind_of(url, section):
    if url.endswith("#analizador"):
        return "analyzer"
    if section == "herramientas":
        return "tool"
    p = urlparse(url).path
    if p in ("/coches/", "/multas/", "/caravanas/", "/campers/") or p.startswith("/coches/marca/"):
        return "hub"
    if section == "multas":
        return "multas"
    return "ficha"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--section", required=True)
    a = ap.parse_args()
    recs = []
    with open(os.path.join(CK, a.section + ".jsonl"), encoding="utf-8") as f:
        for line in f:
            try:
                recs.append(json.loads(line))
            except Exception:
                pass
    og_status = {}
    ogf = os.path.join(CK, "og-status.json")
    if os.path.exists(ogf):
        og_status = json.load(open(ogf, encoding="utf-8"))
    rows, obs = [], {"generic_og_hub_tool": [], "aprox": 0, "sin_precio": 0,
                     "ad_candidates": [], "form_candidates": [], "errors": []}
    for r in recs:
        url = r["url"]
        k = kind_of(url, a.section)
        if k == "analyzer":
            if r.get("status") != 200:
                obs["errors"].append((url, "portada no 200, analizador no verificable en vivo"))
                continue
            if not r.get("analyzer_form_found"):
                obs["errors"].append((url, "formulario no localizado en HTML prerenderizado"))
                continue
            if r.get("personal_fields") and not r.get("privacy_mention"):
                rows.append([url, "AdSense: privacidad y consentimiento (RGPD)",
                             "El formulario pide datos personales (nombre, DNI, domicilio, email) antes del pago y en su entorno no hay mención a privacidad, consentimiento ni enlace a /privacidad.",
                             "Añadir aviso breve de tratamiento de datos con enlace a /privacidad y casilla de consentimiento explícito antes de enviar y pagar."])
            elif r.get("personal_fields") and not r.get("consent_checkbox"):
                rows.append([url, "AdSense: privacidad y consentimiento (RGPD)",
                             "El formulario pide datos personales antes del pago y no muestra casilla de consentimiento explícito en su entorno.",
                             "Añadir casilla de consentimiento explícito antes de enviar y pagar."])
            continue
        if r.get("status", 0) == 0 or "error" in r:
            obs["errors"].append((url, r.get("error", "sin status")))
            continue
        if r["status"] != 200:
            rows.append([url, "Google: soft-404 / URL rota",
                         f"La URL está en el sitemap en vivo pero devuelve {r['status']}.",
                         "Corregir la página o sacarla del sitemap y redirigir con 301 si procede."])
            continue
        mw = r.get("main_words")
        if mw is None:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         "La página no tiene etiqueta <main> en el HTML prerenderizado.",
                         "Revisar la plantilla: el contenido principal debe ir en <main>."])
        elif k in ("ficha", "hub", "multas") and mw < 300:
            rows.append([url, "AdSense: contenido de poco valor",
                         f"Contenido escaso: {mw} palabras en <main>.",
                         "Añadir texto editorial propio útil (datos, contexto, FAQ) o valorar noindex si solo es navegación."])
        t, ml = r.get("title", ""), r.get("title_len", 0)
        if not t:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         "Title vacío.", "Escribir un title único de 50–60 caracteres con el dato principal."])
        elif ml > 60:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         f"Title de {ml} caracteres (>60).", "Acortar el title a 50–60 caracteres."])
        me, mel = r.get("meta", ""), r.get("meta_len", 0)
        if not me:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         "Meta description vacía.", "Escribir meta description única de 130–155 caracteres."])
        elif mel > 155:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         f"Meta description de {mel} caracteres (>155).", "Acortar la meta description a 130–155 caracteres."])
        if r.get("h1", 0) != 1:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         f"La página tiene {r.get('h1', 0)} etiquetas H1 (debe tener 1).",
                         "Dejar un único H1 con el tema principal de la página."])
        can = r.get("canonical", "")
        if not can:
            rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                         "Sin canonical.", "Añadir canonical propio con barra final."])
        elif can.rstrip("/") == HOME.rstrip("/") or can == HOME:
            rows.append([url, "Google: soft-404 / URL rota",
                         "El canonical apunta a la portada (contenido de la home en otra URL).",
                         "Poner canonical propio o devolver 404 real si la página no existe."])
        elif can != url:
            if can.rstrip("/") == url.rstrip("/"):
                rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                             "El canonical apunta a la misma URL pero sin barra final.",
                             "Normalizar el canonical a la versión con barra final."])
            else:
                rows.append([url, "Google: título/meta/H1 (calidad de búsqueda)",
                             f"El canonical apunta a otra URL ({can}).",
                             "Poner canonical propio, salvo que la canonicalización a otra página sea deliberada."])
        if r.get("foto_pendiente"):
            rows.append([url, "AdSense: imágenes (foto pendiente / og)",
                         "La página muestra 'Foto pendiente de verificación'.",
                         "Aportar foto real del modelo exacto o marcar honestamente que no hay foto real."])
        og = r.get("og", "")
        if not og:
            rows.append([url, "AdSense: imágenes (foto pendiente / og)",
                         "La página no tiene og:image.", "Añadir og:image propia de la página."])
        else:
            st = og_status.get(og, r.get("og_status"))
            if st is not None and st != 200:
                rows.append([url, "AdSense: imágenes (foto pendiente / og)",
                             f"La og:image ({og}) devuelve {st}.", "Corregir o sustituir la og:image."])
            if GENERIC in og:
                if k == "ficha":
                    rows.append([url, "AdSense: imágenes (foto pendiente / og)",
                                 "La og:image es la genérica del sitio, no propia del modelo.",
                                 "Poner og:image propia del modelo exacto."])
                else:
                    obs["generic_og_hub_tool"].append(url)
        if k in ("ficha", "multas") and r.get("ext_links_main", 0) == 0:
            rows.append([url, "AdSense: datos sin fuente",
                         "La página no enlaza ninguna fuente externa dentro de <main>.",
                         "Añadir fuentes oficiales o verificables enlazadas en el contenido."])
        if r.get("ad_candidates", 0):
            obs["ad_candidates"].append((url, r["ad_candidates"]))
        if r.get("aprox_sin_espacio"):
            obs["aprox"] += 1
        if r.get("sin_precio_oficial"):
            obs["sin_precio"] += 1
        if k == "tool" and r.get("has_form") and r.get("personal_fields") and not r.get("privacy_mention"):
            obs["form_candidates"].append(url)
    out = os.path.join(CK, "rows-" + a.section + ".csv")
    with open(out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["URL", "norma de AdSense/Google incumplida", "motivo", "arreglo propuesto"])
        w.writerows(rows)
    print(f"[{a.section}] páginas={len(recs)} errores-fetch={len(obs['errors'])} filas={len(rows)}")
    print(f"[{a.section}] observaciones: og-genérica-hub/tool={len(obs['generic_og_hub_tool'])} aprox-sin-espacio={obs['aprox']} sin-precio-oficial={obs['sin_precio']} candidatos-anuncio={len(obs['ad_candidates'])} candidatos-form-privacidad={len(obs['form_candidates'])}")
    for u, e in obs["errors"]:
        print(f"  ERROR {u} :: {e}")
    for u, c in obs["ad_candidates"]:
        print(f"  CANDIDATO-ANUNCIO {u} :: {c} coincidencias")
    for u in obs["form_candidates"]:
        print(f"  CANDIDATO-FORM {u}")
    print(f"[{a.section}] filas en {out}")

if __name__ == "__main__":
    main()
