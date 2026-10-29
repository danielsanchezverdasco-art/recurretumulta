# Censo AdSense 2610 — pase global de duplicados de title/meta (solo lectura local).
# Uso: python3 censo/duplicados.py
# Lee todos los checkpoints de sección de Niky (coches, marcas, multas,
# caravanas, campers, herramientas), agrupa por title y por meta exactos y
# escribe censo/checkpoints/rows-duplicados.csv + resumen por pantalla.
# Una fila por URL miembro de un grupo duplicado (no solo a partir de la
# segunda): así el CSV permite corregir cada URL afectada. Sin duplicados
# de title/meta: esos van en un pase global final, no por sección (manifiesto).
import csv, json, os
from collections import defaultdict

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CK = os.path.join(BASE, "censo", "checkpoints")
SECTIONS = ["coches", "marcas", "multas", "caravanas", "campers", "herramientas"]

def main():
    recs = []
    for sec in SECTIONS:
        p = os.path.join(CK, sec + ".jsonl")
        if not os.path.exists(p):
            print(f"[duplicados] sin checkpoint: {sec} (pendiente)")
            continue
        n = 0
        with open(p, encoding="utf-8") as f:
            for line in f:
                try:
                    d = json.loads(line)
                except Exception:
                    continue
                if d.get("status") != 200:
                    continue
                recs.append(d)
                n += 1
        print(f"[duplicados] {sec}: {n} registros 200")
    by_title, by_meta = defaultdict(list), defaultdict(list)
    for r in recs:
        t = (r.get("title") or "").strip()
        m = (r.get("meta") or "").strip()
        if t:
            by_title[t].append(r["url"])
        if m:
            by_meta[m].append(r["url"])
    rows = []
    for t, urls in sorted(by_title.items()):
        if len(urls) > 1:
            for u in urls:
                rows.append([u, "Google: título/meta/H1 (calidad de búsqueda)",
                             f"Title duplicado con {len(urls)} páginas: «{t}».",
                             "Escribir un title único de 50–60 caracteres con el dato principal de esta página."])
    for m, urls in sorted(by_meta.items()):
        if len(urls) > 1:
            for u in urls:
                rows.append([u, "Google: título/meta/H1 (calidad de búsqueda)",
                             f"Meta description duplicada con {len(urls)} páginas: «{m}».",
                             "Escribir una meta description única de 130–155 caracteres con datos propios de esta página."])
    out = os.path.join(CK, "rows-duplicados.csv")
    with open(out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["URL", "norma de AdSense/Google incumplida", "motivo", "arreglo propuesto"])
        w.writerows(rows)
    print(f"[duplicados] páginas 200 analizadas={len(recs)} "
          f"grupos-title-dup={sum(1 for v in by_title.values() if len(v) > 1)} "
          f"grupos-meta-dup={sum(1 for v in by_meta.values() if len(v) > 1)} "
          f"filas={len(rows)} -> {out}")
    for t, urls in sorted(by_title.items(), key=lambda kv: -len(kv[1]))[:10]:
        if len(urls) > 1:
            print(f"  TITLE x{len(urls)}: {t[:100]}")
    for m, urls in sorted(by_meta.items(), key=lambda kv: -len(kv[1]))[:10]:
        if len(urls) > 1:
            print(f"  META x{len(urls)}: {m[:100]}")

if __name__ == "__main__":
    main()
