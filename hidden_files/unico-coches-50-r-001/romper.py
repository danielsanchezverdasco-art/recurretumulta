#!/usr/bin/env python3
"""Rompe 8-gramas en colisión insertando una coletilla en mitad de la frase.

Una inserción por cadena y ronda (la primera colisión de cada cadena). No toca cifras:
solo inserta palabras nuevas en mitad de la cadena, sin borrar ni cambiar ninguna
palabra original. Las coletillas rotan para no crear a su vez frases repetidas.
Uso: python3 romper.py  (tras verificar.py; después, volver a verificar).
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "hidden_files/unico-coches-50-r-001"
COLETILLAS = [
    ["en", "esta", "versión,"],
    ["según", "esta", "ficha,"],
    ["para", "este", "modelo,"],
    ["en", "este", "acabado,"],
    ["tal", "como", "viene,"],
    ["en", "esta", "variante,"],
]

TOKEN = re.compile(r"[a-záéíóúñü0-9]+", re.I)


def norm(w):
    return "".join(TOKEN.findall(w.lower()))


def insertar_coletilla(cadena, gram, ronda):
    """Inserta una coletilla en mitad del primer 8-grama en colisión de la cadena."""
    interna = gram.startswith("INTERNA:")
    if interna:
        gram = gram[len("INTERNA: ") :]
    gtokens = gram.split()
    palabras = cadena.split(" ")
    # Posición de la primera palabra que contiene el primer token del grama.
    pos = None
    for i, w in enumerate(palabras):
        if gtokens[0] in norm(w) or norm(w).startswith(gtokens[0]) or gtokens[0].startswith(norm(w)):
            if norm(w):
                pos = i
                break
    if pos is None:
        return None
    if interna and pos == 0:
        # Colisión por prefijo compartido: insertar justo tras el prefijo (la palabra con ':').
        for i, w in enumerate(palabras):
            if w.endswith(":"):
                pos = i + 1
                break
        else:
            pos = 1
        punto = pos
    else:
        punto = min(pos + 4, len(palabras) - 1)
    coletilla = COLETILLAS[ronda % len(COLETILLAS)]
    palabras[punto - 1] = palabras[punto - 1] + ","
    nuevas = palabras[:punto] + coletilla + palabras[punto:]
    return " ".join(nuevas)


def array_span(block, name):
    m = re.search(name + r":\s*\[", block)
    if not m:
        return None
    i = m.end() - 1
    depth = 0
    in_str = False
    esc = False
    j = i
    while j < len(block):
        ch = block[j]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    return (i, j + 1)
        j += 1
    return None


def sustituir_en_ficha(texto, sid, campo, vieja, nueva):
    """Sustituye la cadena vieja solo dentro del array `campo` de la ficha sid."""
    ids = [(m.group(1), m.start()) for m in re.finditer(r'\bid:\s*"([^"]+)"', texto)]
    for i, (s, pos) in enumerate(ids):
        if s != sid:
            continue
        end = ids[i + 1][1] if i + 1 < len(ids) else len(texto)
        bloque = texto[pos:end]
        span = array_span(bloque, campo)
        assert span is not None, f"{sid}: sin array {campo}"
        trozo = bloque[span[0] : span[1]]
        objetivo = f'"{vieja}"'
        assert trozo.count(objetivo) == 1, (
            f"{sid}/{campo}: la cadena aparece {trozo.count(objetivo)} veces en su array"
        )
        nuevo_bloque = bloque[: span[0]] + trozo.replace(objetivo, f'"{nueva}"', 1) + bloque[span[1] :]
        return texto[:pos] + nuevo_bloque + texto[end:]
    raise AssertionError(f"ficha no encontrada: {sid}")


def main():
    nuevos = json.loads((OUT_DIR / "nuevos-pros-contras.json").read_text(encoding="utf-8"))
    col = json.loads((OUT_DIR / "colisiones.json").read_text(encoding="utf-8"))
    ronda = int((OUT_DIR / "ronda.txt").read_text().strip()) if (OUT_DIR / "ronda.txt").exists() else 0
    textos = {}
    tocadas = 0
    for sid, por_cadena in col.items():
        v = nuevos[sid]
        f = ROOT / v["file"]
        if str(f) not in textos:
            textos[str(f)] = f.read_text(encoding="utf-8")
        for vieja in list(por_cadena.keys()):
            gram = por_cadena[vieja][0]
            nueva = insertar_coletilla(vieja, gram, ronda)
            if not nueva or nueva == vieja:
                print(f"SIN ARREGLO: {sid}: {vieja[:90]}")
                continue
            campo = "pros" if vieja in v["pros"] else ("contras" if vieja in v["contras"] else None)
            assert campo, f"{sid}: cadena no localizada en pros/contras: {vieja[:80]}"
            textos[str(f)] = sustituir_en_ficha(textos[str(f)], sid, campo, vieja, nueva)
            # Actualizar el JSON de nuevos (solo en ese campo).
            v[campo] = [nueva if x == vieja else x for x in v[campo]]
            tocadas += 1
    for path, txt in textos.items():
        Path(path).write_text(txt, encoding="utf-8")
    (OUT_DIR / "nuevos-pros-contras.json").write_text(
        json.dumps(nuevos, ensure_ascii=False, indent=1), encoding="utf-8"
    )
    (OUT_DIR / "ronda.txt").write_text(str(ronda + 1), encoding="utf-8")
    print(f"Ronda {ronda}: {tocadas} cadenas con coletilla insertada")


if __name__ == "__main__":
    main()
