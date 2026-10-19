#!/usr/bin/env python3
# LOTE 7 — descarga 3 fotos reales por modelo a public/media/<id>-{1,2,3}.webp
# Uso: python3 scripts/fotos-lote7.py [--only <id>]
# Filtra resultados: la page_url o el título debe mencionar la marca o el modelo.
import json, os, re, subprocess, sys, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA = os.path.join(ROOT, "public", "media")
IMGSEARCH = "/opt/hatch/bin/image-search"

MODELOS = [
    # (id, query, tokens_obligatorios_en_fuente)
    ("kove-450-rally-2026-ficha-tecnica-precio", "Kove 450 Rally", ["kove", "450"]),
    ("kove-800x-rally-2026-ficha-tecnica-precio", "Kove 800X Rally", ["kove", "800x"]),
    ("kove-625x-pro-2026-ficha-tecnica-precio", "Kove 625X Pro", ["kove", "625"]),
    ("kove-800x-gt-2026-ficha-tecnica-precio", "Kove 800X GT", ["kove", "800x"]),
    ("kove-nk-125r-2025-ficha-tecnica-precio", "Kove NK 125R", ["kove", "nk"]),
    ("voge-ds800-rally-2026-ficha-tecnica-precio", "Voge DS800 Rally", ["voge", "ds800"]),
    ("voge-rr660s-2026-ficha-tecnica-precio", "Voge RR660S", ["voge", "rr660"]),
    ("cfmoto-1000mt-x-2026-ficha-tecnica-precio", "CFMoto 1000MT-X", ["cfmoto", "1000mt"]),
    ("cfmoto-250-dual-2026-ficha-tecnica-precio", "CFMoto 250 Dual", ["cfmoto", "250"]),
    ("qjmotor-srt-900-sx-2026-ficha-tecnica-precio", "QJMotor SRT 900 SX", ["qj", "900"]),
    ("qjmotor-srk-550-rs-2026-ficha-tecnica-precio", "QJMotor SRK 550 RS", ["qj", "550"]),
    ("qjmotor-srk-900-2026-ficha-tecnica-precio", "QJMotor SRK 900", ["qj", "srk"]),
    ("qjmotor-sq-200-2026-ficha-tecnica-precio", "QJMotor SQ 200 scooter", ["qj", "sq"]),
    ("morbidelli-t1002vx-2025-ficha-tecnica-precio", "Morbidelli T1002VX", ["morbidelli", "t1002"]),
    ("benelli-trk-902-xplorer-2026-ficha-tecnica-precio", "Benelli TRK 902 Xplorer", ["benelli", "902"]),
    ("cyclone-ra-600-2026-ficha-tecnica-precio", "Cyclone RA 600", ["cyclone", "ra"]),
    ("cyclone-rc-600-2025-ficha-tecnica-precio", "Cyclone RC 600", ["cyclone", "rc"]),
    ("cyclone-carrera-125-2026-ficha-tecnica-precio", "Cyclone Carrera 125", ["cyclone", "carrera"]),
    ("cyclone-rx2-125-2026-ficha-tecnica-precio", "Cyclone RX2 125", ["cyclone", "rx2"]),
    ("cyclone-rx6-2026-ficha-tecnica-precio", "Cyclone RX6", ["cyclone", "rx6"]),
    ("cyclone-re5-2026-ficha-tecnica-precio", "Cyclone RE5", ["cyclone", "re5"]),
]

def buscar(query):
    p = subprocess.run([IMGSEARCH, query, "--max-results", "10"],
                       capture_output=True, text=True, timeout=90)
    try:
        return json.loads(p.stdout).get("results", [])
    except Exception as e:
        print(f"  !! image-search fallo para {query}: {e}", flush=True)
        return []

def relevante(r, tokens):
    blob = ((r.get("page_url") or "") + " " + (r.get("title") or "")).lower()
    return all(t in blob for t in tokens)

def descargar(url, dest_tmp):
    ref = "https://www.google.com/"
    # preflight HEAD
    h = subprocess.run(["curl", "-fsSLI", "-A", "Mozilla/5.0",
                        "-H", "Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5",
                        "-H", f"Referer: {ref}",
                        "--connect-timeout", "10", "--max-time", "30", url],
                       capture_output=True, timeout=45)
    if h.returncode != 0:
        return False
    d = subprocess.run(["curl", "-fsSL", "--connect-timeout", "10", "--max-time", "60",
                        "-A", "Mozilla/5.0",
                        "-H", "Accept: image/png,image/jpeg,image/gif,image/webp,image/*;q=0.5",
                        "-H", f"Referer: {ref}",
                        "-o", dest_tmp, url],
                       capture_output=True, timeout=75)
    if d.returncode != 0:
        return False
    with open(dest_tmp, "rb") as f:
        magic = f.read(12)
    ok = (magic[:3] == b"\xff\xd8\xff" or magic[:8] == b"\x89PNG\r\n\x1a\n"
          or magic[:4] == b"RIFF" or magic[:4] == b"GIF8")
    return ok

def a_webp(src, dest):
    # 1200px máx, webp; si >300KB baja calidad
    for q in (80, 65, 50):
        r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", src,
                            "-vf", "scale=1200:-2", "-q:v", str(int((100-q)/100*100)),
                            dest], capture_output=True, timeout=120)
        # nota: -q:v en webp de ffmpeg: 0 mejor .. 100 peor; usamos crf equivalente
        if r.returncode == 0 and os.path.getsize(dest) <= 300*1024:
            return True
    # último intento: 1000px, q 50
    r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", src,
                        "-vf", "scale=1000:-2", "-q:v", "50", dest],
                       capture_output=True, timeout=120)
    return r.returncode == 0

def main():
    only = sys.argv[2] if len(sys.argv) > 2 and sys.argv[1] == "--only" else None
    os.makedirs(MEDIA, exist_ok=True)
    resumen = []
    for mid, query, tokens in MODELOS:
        if only and mid != only:
            continue
        print(f"== {mid}", flush=True)
        res = buscar(query)
        cands = [r for r in res if r.get("media_url") and relevante(r, tokens)]
        # si el filtro es muy estricto, relaja a solo marca
        if len(cands) < 3:
            cands = [r for r in res if r.get("media_url") and tokens[0] in ((r.get("page_url") or "") + " " + (r.get("title") or "")).lower()]
        elegidas = cands[:3]
        print(f"  candidatas: {len(cands)} -> uso {len(elegidas)}", flush=True)
        for i, r in enumerate(elegidas, 1):
            dest = os.path.join(MEDIA, f"{mid}-{i}.webp")
            tmp = dest + ".tmp"
            url = r["media_url"]
            ok = False
            try:
                if descargar(url, tmp):
                    ok = a_webp(tmp, dest)
            except Exception as e:
                print(f"  !! error {url[:60]}: {e}", flush=True)
            finally:
                if os.path.exists(tmp):
                    os.remove(tmp)
            kb = os.path.getsize(dest)//1024 if ok and os.path.exists(dest) else 0
            print(f"  [{i}] {'OK' if ok else 'FALLO'} {kb}KB <- {url[:80]}", flush=True)
            print(f"       fuente: {r.get('page_url','')[:90]}", flush=True)
        resumen.append((mid, [os.path.exists(os.path.join(MEDIA, f"{mid}-{i}.webp")) for i in (1,2,3)]))
    print("\n==== RESUMEN ====")
    for mid, oks in resumen:
        print(f"{mid}: {' '.join('OK' if o else 'FALTA' for o in oks)}")

if __name__ == "__main__":
    main()
