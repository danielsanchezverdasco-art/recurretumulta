# Censo AdSense 2610 — pase global de enlaces, por chunks (solo lectura).
# Uso: python3 censo/links-chunk.py --limit 600 --pace 1.5
# Variante acotada de censo/links.py: procesa solo los N primeros pendientes
# de censo/checkpoints/links-distintos.txt (ritmo duro del censo: max 600
# por ejecucion, 1,5 s o mas entre peticiones, curl). Reanudable: las URLs
# ya presentes en censo/checkpoints/links-status.jsonl se saltan.
# Parada de seguridad: si hay 20 fallos consecutivos (status 0 o 5xx),
# se detiene el chunk y se informa, sin reintentos agresivos.
# La tienda retirada (301 a la portada) NO es un fallo: se registra aparte.
import argparse, json, os, subprocess, time

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CK = os.path.join(BASE, "censo", "checkpoints")
UA = "Mozilla/5.0 (X11; Linux x86_64) censo-adsense-2610"
HOME = "https://recurretumulta.online/"


def head(url):
    p = subprocess.run(["curl", "-s", "-o", "/dev/null", "-I", "-L", "-A", UA,
                        "--max-time", "20", "-w", "%{http_code} %{url_effective}", url],
                       capture_output=True, timeout=40)
    out = p.stdout.decode("utf-8", "replace").strip()
    parts = out.rsplit(" ", 1)
    if len(parts) == 2 and parts[0].isdigit():
        return int(parts[0]), parts[1]
    return 0, url


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=600)
    ap.add_argument("--pace", type=float, default=1.5)
    a = ap.parse_args()
    links = [l.strip() for l in open(os.path.join(CK, "links-distintos.txt"), encoding="utf-8") if l.strip()]
    out_path = os.path.join(CK, "links-status.jsonl")
    done = {}
    if os.path.exists(out_path):
        with open(out_path, encoding="utf-8") as f:
            for line in f:
                try:
                    d = json.loads(line)
                    done[d["url"]] = d
                except Exception:
                    pass
    todo = [u for u in links if u not in done][:a.limit]
    print(f"[links-chunk] distintos={len(links)} hechos={len(done)} "
          f"pendientes={len(links) - len(done)} chunk={len(todo)} pace={a.pace}", flush=True)
    n = 0
    bad_streak = 0
    stopped = False
    t0 = time.time()
    with open(out_path, "a", encoding="utf-8") as out:
        for url in todo:
            code, final = head(url)
            rec = {"url": url, "status": code, "final": final,
                   "tienda_a_portada": code == 200 and url.rstrip("/") != HOME.rstrip("/")
                   and final.rstrip("/") == HOME.rstrip("/")}
            out.write(json.dumps(rec, ensure_ascii=False) + "\n")
            out.flush()
            n += 1
            if code == 0 or code >= 500:
                bad_streak += 1
            else:
                bad_streak = 0
            if n % 100 == 0:
                print(f"[links-chunk] {n}/{len(todo)} ultimo={url} status={code}", flush=True)
            if bad_streak >= 20:
                print(f"[links-chunk] PARADA: 20 fallos consecutivos en {url}; "
                      f"chunk detenido en {n}/{len(todo)}", flush=True)
                stopped = True
                break
            time.sleep(a.pace)
    print(f"[links-chunk] hecho: {n} HEADs en {time.time()-t0:.0f}s; "
          f"total_hechos={len(done) + n} pendientes_restantes={len(links) - len(done) - n} "
          f"parada_por_errores={stopped}", flush=True)


if __name__ == "__main__":
    main()
