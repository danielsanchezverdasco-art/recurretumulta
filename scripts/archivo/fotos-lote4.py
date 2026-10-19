#!/usr/bin/env python3
"""Descarga 3 fotos reales por modelo del LOTE 4 (25 modelos) a public/media/.
Uso: python3 scripts/fotos-lote4.py
Log: scripts/fotos-lote4-manifest.json (rutas persistentes, nunca /tmp).
"""
import json, os, subprocess, sys, urllib.request

REPO = os.path.expanduser("~/workspace/recurretumulta-v2")
MEDIA = os.path.join(REPO, "public/media")
MANIFEST = os.path.join(REPO, "scripts/fotos-lote4-manifest.json")

MODELOS = [
    ("bugatti-tourbillon-2026-precio-ficha-tecnica", "Bugatti Tourbillon"),
    ("rimac-nevera-r-2025-precio-ficha-tecnica", "Rimac Nevera R"),
    ("koenigsegg-gemera-2025-precio-ficha-tecnica", "Koenigsegg Gemera"),
    ("pagani-utopia-roadster-2026-precio-ficha-tecnica", "Pagani Utopia Roadster"),
    ("de-tomaso-p72-2025-precio-ficha-tecnica", "De Tomaso P72"),
    ("de-tomaso-p900-2025-precio-ficha-tecnica", "De Tomaso P900"),
    ("ariel-hipercar-2026-precio-ficha-tecnica", "Ariel Hipercar"),
    ("ac-cobra-gt-roadster-2025-precio-ficha-tecnica", "AC Cobra GT Roadster"),
    ("dallara-stradale-2025-precio-ficha-tecnica", "Dallara Stradale"),
    ("pininfarina-battista-2025-precio-ficha-tecnica", "Pininfarina Battista"),
    ("hennessey-venom-f5-2025-precio-ficha-tecnica", "Hennessey Venom F5"),
    ("ssc-tuatara-2025-precio-ficha-tecnica", "SSC Tuatara"),
    ("czinger-21c-2025-precio-ficha-tecnica", "Czinger 21C"),
    ("gordon-murray-t50-2025-precio-ficha-tecnica", "Gordon Murray T.50"),
    ("gordon-murray-t33-2025-precio-ficha-tecnica", "Gordon Murray T.33"),
    ("brabham-bt62-2024-precio-ficha-tecnica", "Brabham BT62"),
    ("ats-gt-2025-precio-ficha-tecnica", "ATS GT 2017"),
    ("iso-rivolta-gtz-2025-precio-ficha-tecnica", "Iso Rivolta GTZ Zagato"),
    ("maserati-mcxtrema-2025-precio-ficha-tecnica", "Maserati MCXtrema"),
    ("chevrolet-corvette-zr1-2025-precio-ficha-tecnica", "Chevrolet Corvette ZR1 C8"),
    ("chevrolet-corvette-zr1x-2026-precio-ficha-tecnica", "Chevrolet Corvette ZR1X"),
    ("cadillac-celestiq-2025-precio-ficha-tecnica", "Cadillac Celestiq"),
    ("cadillac-escalade-iq-2025-precio-ficha-tecnica", "Cadillac Escalade IQ"),
    ("gmc-hummer-ev-2025-precio-ficha-tecnica", "GMC Hummer EV pickup"),
    ("aptera-2026-precio-ficha-tecnica", "Aptera solar car"),
]
SUF = ["-hero", "-oficial", "-galeria-1"]


def image_search(query):
    p = subprocess.run(
        ["/opt/hatch/bin/image-search", query, "--max-results", "8"],
        capture_output=True, text=True, timeout=180)
    # el CLI imprime JSON y luego un WARN al final; extraer el JSON
    out = p.stdout
    end = out.rfind('"}]}')
    if end == -1:
        raise RuntimeError("sin JSON en salida: " + out[-300:])
    return json.loads(out[: end + 4])["results"]


def download(url, dest):
    # preflight + descarga como un navegador, referer cruzado
    UA = "Mozilla/5.0"
    ref = "https://www.google.com/"
    req = urllib.request.Request(url, headers={"User-Agent": UA,
        "Accept": "image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5",
        "Referer": ref})
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            ct = r.headers.get("Content-Type", "")
            data = r.read(25_000_000)
    except Exception as e:
        return False, f"fetch fail: {e}"
    if "image" not in ct:
        return False, f"content-type no imagen: {ct}"
    tmp = dest + ".raw"
    with open(tmp, "wb") as f:
        f.write(data)
    # convertir a webp con PIL: solo reducir (nunca ampliar), <300KB
    from PIL import Image
    ok = False
    try:
        im = Image.open(tmp).convert("RGB")
        im.thumbnail((1600, 1600), Image.LANCZOS)
        for q in (82, 75, 68, 60, 50):
            im.save(dest, "WEBP", quality=q, method=6)
            if os.path.getsize(dest) < 300_000:
                ok = True
                break
    except Exception as e:
        os.path.exists(dest) and os.remove(dest)
        os.remove(tmp)
        return False, f"PIL fail: {e}"
    os.remove(tmp)
    if not ok:
        os.path.exists(dest) and os.remove(dest)
        return False, "no bajó de 300KB"
    w, h = im.size
    return True, f"{os.path.getsize(dest)//1024}KB {w}x{h}"


def main():
    os.makedirs(MEDIA, exist_ok=True)
    manifest = {}
    if os.path.exists(MANIFEST):
        manifest = json.load(open(MANIFEST))
    for slug, query in MODELOS:
        entry = manifest.get(slug, {"fotos": [], "fallos": []})
        fotos = entry["fotos"]
        done_urls = {f["url"] for f in fotos}
        need = 3 - len(fotos)
        if need <= 0:
            manifest[slug] = entry
            continue
        print(f"[{slug}] buscando: {query}", flush=True)
        try:
            results = image_search(query)
        except Exception as e:
            entry["fallos"].append(f"search: {e}")
            manifest[slug] = entry
            continue
        got = 0
        for r in results:
            if got >= need:
                break
            url = r.get("media_url") or ""
            if not url or not url.startswith("https") or url in done_urls:
                continue
            dest = os.path.join(MEDIA, slug + SUF[len(fotos)] + ".webp")
            print(f"  -> {url[:80]}...", flush=True)
            ok, info = download(url, dest)
            if ok:
                fotos.append({"file": os.path.basename(dest), "url": url,
                              "info": info, "page": r.get("page_url", ""),
                              "title": r.get("title", "")[:80]})
                done_urls.add(url)
                got += 1
                print(f"     OK {info}", flush=True)
            else:
                entry["fallos"].append(f"{url[:60]}: {info}")
                print(f"     FAIL {info}", flush=True)
        manifest[slug] = entry
        json.dump(manifest, open(MANIFEST, "w"), indent=1, ensure_ascii=False)
    json.dump(manifest, open(MANIFEST, "w"), indent=1, ensure_ascii=False)
    print("HECHO. Resumen:")
    for slug, e in manifest.items():
        print(f"  {slug}: {len(e['fotos'])}/3")


if __name__ == "__main__":
    main()
