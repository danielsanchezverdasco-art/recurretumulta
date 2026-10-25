#!/usr/bin/env python3
"""Expande scripts/routes.json a la lista plana de rutas del sitio.

Una ruta por línea, deduplicada y ordenada. Es la forma en que bash
(safe-publish-v2.sh) consume la única fuente de verdad de rutas.

Uso:
    python3 scripts/routes-list.py [--out rutas.txt] [--count]

Exit 0 si el JSON y todos los ficheros de slugs existen; exit 1 con mensaje
si falta alguno (fail-closed: mejor no prerenderizar que prerenderizar
parcial sin avisar).
"""
import argparse
import json
import os
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
ROUTES_JSON = os.path.join(ROOT, "scripts", "routes.json")


def read_slugs(path):
    with open(path, encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]


def expand():
    """Devuelve la lista ordenada y deduplicada de rutas."""
    try:
        with open(ROUTES_JSON, encoding="utf-8") as f:
            cfg = json.load(f)
    except Exception as e:
        print(f"routes-list.py: no se puede leer {ROUTES_JSON}: {e}", file=sys.stderr)
        sys.exit(1)

    routes = []
    routes += cfg["staticRoutes"]
    routes += [f"/multas/{p}" for p in cfg["provinceSlugs"]]
    routes += [f"/comunidades/{c}" for c in cfg["communitySlugs"]]
    for sf in cfg["slugFiles"]:
        fp = os.path.join(ROOT, sf["file"])
        if not os.path.exists(fp):
            print(f"routes-list.py: falta el fichero de slugs {sf['file']} (fail-closed)",
                  file=sys.stderr)
            sys.exit(1)
        routes += [sf["prefix"] + s for s in read_slugs(fp)]
    return sorted(set(routes))


def main():
    ap = argparse.ArgumentParser(description="Expande scripts/routes.json a lista de rutas")
    ap.add_argument("--out", default=None, help="fichero de salida (por defecto: stdout)")
    ap.add_argument("--count", action="store_true", help="imprime solo el número de rutas")
    args = ap.parse_args()

    routes = expand()

    if args.count:
        print(len(routes))
        return 0

    text = "\n".join(routes) + "\n"
    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(text)
    else:
        sys.stdout.write(text)
    return 0


if __name__ == "__main__":
    sys.exit(main())
