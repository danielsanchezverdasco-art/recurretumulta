#!/usr/bin/env python3
"""Aborta si una foto del registro falta, no decodifica o pierde la licencia.

No sustituye por el logo ni quita la referencia. Con --html DIST comprueba
además que la página prerenderizada de ese id contiene el src del registro.
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TS = ROOT / "src" / "lib" / "fotos-modelo.generated.ts"
MEDIA = ROOT / "public" / "media"
MANIF = ROOT / "docs" / "inventario" / "fotos-modelo-manifiesto.json"
PH = {
    ln.strip()
    for ln in (ROOT / "scripts" / "placeholder-md5.txt").read_text().splitlines()
    if ln.strip() and not ln.startswith("#")
}


def registro() -> dict:
    t = TS.read_text(encoding="utf-8")
    m = re.search(r"export const FOTOS_MODELO[^=]*=\s*(\{.*\});", t, re.S)
    if not m:
        sys.exit("gate-fotos: no se lee FOTOS_MODELO")
    return json.loads(m.group(1))


def main() -> None:
    html = None
    if "--html" in sys.argv:
        html = Path(sys.argv[sys.argv.index("--html") + 1])
    data = registro()
    errores = []
    for slug, row in data.items():
        src = row["src"]
        fp = MEDIA / src[len("/media/") :]
        if not fp.is_file():
            errores.append(f"{slug}: falta {src}")
            continue
        digest = hashlib.md5(fp.read_bytes()).hexdigest()
        if digest in PH:
            errores.append(f"{slug}: placeholder {src}")
            continue
        try:
            with Image.open(fp) as im:
                im.load()
                w, h = im.size
        except Exception as e:
            errores.append(f"{slug}: no decodifica {src} ({e})")
            continue
        if w < 200 or h < 120:
            errores.append(f"{slug}: {w}x{h} {src}")
        if not row.get("licencia") or not row.get("fuente"):
            errores.append(f"{slug}: sin licencia o sin fuente")
    if MANIF.is_file():
        previo = json.loads(MANIF.read_text(encoding="utf-8")).get("archivos", {})
        actuales = {row["src"] for row in data.values()}
        for src in previo:
            if src not in actuales:
                errores.append(f"el registro ya no cita {src}; no se oculta en silencio")
    if html:
        for slug, row in data.items():
            paginas = [
                html / "coches" / slug / "index.html",
                html / "motos" / slug / "index.html",
                html / "patinetes" / slug / "index.html",
                html / "blog" / slug / "index.html",
                html / "autocaravanas" / slug / "index.html",
                html / "campers" / slug / "index.html",
            ]
            presente = [p for p in paginas if p.is_file()]
            if not presente:
                continue
            src = row["src"]
            if not any(src in p.read_text(encoding="utf-8", errors="ignore") for p in presente):
                errores.append(f"{slug}: la página existe y no contiene {src}")
    if errores:
        print(f"gate-fotos: {len(errores)} errores")
        for e in errores[:40]:
            print(" ", e)
        sys.exit(1)
    print(f"gate-fotos: {len(data)} modelos, archivos presentes")


if __name__ == "__main__":
    main()
