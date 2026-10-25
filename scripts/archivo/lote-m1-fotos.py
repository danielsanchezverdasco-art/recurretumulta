#!/usr/bin/env python3
"""Lote M1 — descarga 3 fotos oficiales por modelo (75 total).
Busca con image-search, descarga, convierte a WebP <300KB (máx 1200px),
guarda en public/media/motos/<slug>-oficial[.|-2|-3].webp.
Genera fotos-dims-m1.json con dimensiones reales para el generador TS.
"""
import json, os, subprocess, sys, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA = os.path.join(ROOT, "public", "media", "motos")
os.makedirs(MEDIA, exist_ok=True)

MODELS = [
    ("seat-mo-50-2025-ficha-tecnica-precio", "Seat MO 50 scooter electrico"),
    ("segway-e125s-2025-ficha-tecnica-precio", "Segway E125S eScooter electric"),
    ("segway-e110s-2025-ficha-tecnica-precio", "Segway E110S eScooter electric"),
    ("segway-e150s-2025-ficha-tecnica-precio", "Segway E150S eScooter electric"),
    ("velca-calima-s-2025-ficha-tecnica-precio", "Velca Calima S scooter electrico"),
    ("velca-tramontana-s-2025-ficha-tecnica-precio", "Velca Tramontana S scooter electrico"),
    ("niu-mqi-plus-sport-2025-ficha-tecnica-precio", "NIU MQi+ Sport scooter electrico"),
    ("niu-fqix-150-2026-ficha-tecnica-precio", "NIU FQiX 150 scooter electrico"),
    ("vmoto-vs2-2025-ficha-tecnica-precio", "Vmoto VS2 scooter electrico"),
    ("vmoto-cpx-explorer-2025-ficha-tecnica-precio", "Vmoto CPx Explorer scooter electrico"),
    ("super-soco-tsx-50-2025-ficha-tecnica-precio", "Super Soco TSX moto electrica"),
    ("zeeho-ae8-s-plus-2025-ficha-tecnica-precio", "Zeeho AE8 S+ moto electrica"),
    ("yadea-e8s-pro-2025-ficha-tecnica-precio", "Yadea E8S Pro scooter electrico"),
    ("nerva-exe-ii-2026-ficha-tecnica-precio", "Nerva Exe II maxiscooter electrico"),
    ("nerva-lift-2026-ficha-tecnica-precio", "Nerva Lift scooter electrico"),
    ("piaggio-1-active-2025-ficha-tecnica-precio", "Piaggio 1 Active scooter electrico"),
    ("vespa-elettrica-70-2025-ficha-tecnica-precio", "Vespa Elettrica 70 moto electrica"),
    ("ebroh-veracruz-2025-ficha-tecnica-precio", "Ebroh Veracruz scooter electrico"),
    ("ebroh-bravo-cr-2025-ficha-tecnica-precio", "Ebroh Bravo CR moto electrica"),
    ("askoll-es3-2025-ficha-tecnica-precio", "Askoll ES3 scooter electrico"),
    ("blueshark-r80-lite-hs-2025-ficha-tecnica-precio", "Blueshark R80 Lite HS moto electrica"),
    ("efun-tiger-my25-2025-ficha-tecnica-precio", "Efun Tiger scooter electrico"),
    ("sunra-hawk-49e-2025-ficha-tecnica-precio", "Sunra Hawk scooter electrico"),
    ("sunra-anger-125e-2025-ficha-tecnica-precio", "Sunra Anger moto electrica"),
    ("e-zi-miniscooter-2025-ficha-tecnica-precio", "E-Zi miniscooter electrico Keeway"),
]

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

def search(query):
    p = subprocess.run(["/opt/hatch/bin/image-search", query, "--max-results", "8"],
                       capture_output=True, text=True, timeout=90)
    try:
        data = json.loads(p.stdout)
        return data.get("results", [])
    except Exception:
        return []

def download(url, dest):
    tmp = dest + ".tmp"
    r = subprocess.run(["curl", "-fsSL", "--connect-timeout", "12", "--max-time", "60",
                        "-A", UA, "-H", "Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5",
                        "-H", "Referer: https://www.google.com/", "-o", tmp, url],
                       capture_output=True, timeout=80)
    if r.returncode != 0 or not os.path.exists(tmp) or os.path.getsize(tmp) < 8000:
        if os.path.exists(tmp): os.remove(tmp)
        return False
    # validar que es imagen y convertir a webp <300KB
    conv = subprocess.run([sys.executable, "-c", f"""
from PIL import Image
import os
im = Image.open({tmp!r}).convert("RGB")
w, h = im.size
if w > 1200:
    im = im.resize((1200, int(h*1200/w)), Image.LANCZOS)
    w, h = im.size
for q in (82, 72, 62, 52):
    im.save({dest!r}, "WEBP", quality=q, method=6)
    if os.path.getsize({dest!r}) < 300*1024:
        break
print(w, h, os.path.getsize({dest!r}))
"""], capture_output=True, text=True, timeout=120)
    if os.path.exists(tmp): os.remove(tmp)
    if conv.returncode != 0 or not os.path.exists(dest):
        return False
    print("   OK", conv.stdout.strip(), os.path.basename(dest))
    return conv.stdout.strip().split()

def main():
    only = sys.argv[1:]  # opcional: filtrar slugs
    dims = {}
    log = []
    for slug, query in MODELS:
        if only and slug not in only:
            continue
        print(f"== {slug}")
        dests = [os.path.join(MEDIA, f"{slug}-oficial.webp"),
                 os.path.join(MEDIA, f"{slug}-oficial-2.webp"),
                 os.path.join(MEDIA, f"{slug}-oficial-3.webp")]
        if all(os.path.exists(d) for d in dests):
            print("   ya existen, salto")
            continue
        results = search(query)
        got = 0
        seen_hosts = set()
        for r in results:
            if got >= 3: break
            url = r.get("media_url") or r.get("thumbnail_cdn_url")
            if not url or not url.startswith("http"): continue
            host = urllib.parse.urlparse(url).netloc
            if host in seen_hosts: continue
            title = (r.get("title") or "") + " " + (r.get("page_url") or "")
            # preferir resultados que mencionen el modelo
            d = download(url, dests[got])
            if d:
                seen_hosts.add(host)
                dims.setdefault(slug, []).append({"file": os.path.basename(dests[got]), "w": int(d[0]), "h": int(d[1])})
                log.append({"slug": slug, "url": url, "page": r.get("page_url")})
                got += 1
        print(f"   conseguidas: {got}/3")
    with open(os.path.join(ROOT, "scripts", "fotos-dims-m1.json"), "w") as f:
        json.dump(dims, f, indent=1)
    with open(os.path.join(ROOT, "scripts", "fotos-fuentes-m1.json"), "w") as f:
        json.dump(log, f, indent=1)
    print("hecho")

if __name__ == "__main__":
    main()
