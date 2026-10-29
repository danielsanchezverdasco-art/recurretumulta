# Censo AdSense 2610 — pase global de enlaces internos (solo lectura).
# Uso: python3 censo/links.py
# Lee censo/checkpoints/links-distintos.txt (conjunto distinto global reunido
# por censo/crawl.py), hace UNA HEAD por URL distinta con ritmo pausado
# (0,4 s entre HEADs, como en el manifiesto) y escribe el resultado en
# censo/checkpoints/links-status.jsonl (append+flush, reanudable: las URLs
# ya presentes se saltan). Al final imprime el recuento de no-200.
# La tienda retirada (301 a la portada) NO es un fallo: se registra aparte.
import json, os, subprocess, time

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
    todo = [u for u in links if u not in done]
    print(f"[links] distintos={len(links)} hechos={len(done)} pendientes={len(todo)}", flush=True)
    n = 0
    t0 = time.time()
    with open(out_path, "a", encoding="utf-8") as out:
        for url in todo:
            code, final = head(url)
            # La portada en sí no es "tienda a portada": solo cuentan las URLs
            # distintas de la home que terminan redirigiendo a ella (tienda retirada).
            rec = {"url": url, "status": code, "final": final,
                   "tienda_a_portada": code == 200 and url.rstrip("/") != HOME.rstrip("/")
                   and final.rstrip("/") == HOME.rstrip("/")}
            out.write(json.dumps(rec, ensure_ascii=False) + "\n")
            out.flush()
            n += 1
            if n % 500 == 0:
                print(f"[links] {n}/{len(todo)} ultimo={url} status={code}", flush=True)
            time.sleep(0.4)
    allrecs = list(done.values())
    with open(out_path, encoding="utf-8") as f:
        allrecs = []
        for line in f:
            try:
                allrecs.append(json.loads(line))
            except Exception:
                pass
    bad = [r for r in allrecs if r["status"] != 200]
    print(f"[links] hecho: {n} HEADs en {time.time()-t0:.0f}s; total={len(allrecs)} no-200={len(bad)}")
    for r in bad[:50]:
        print(f"  NO-200 {r['status']} {r['url']} -> {r['final']}")

if __name__ == "__main__":
    main()
