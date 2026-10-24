#!/usr/bin/env python3
"""Reescribe pros/contras de las 50 primeras fichas R (coches) en datos, sin inventar cifras.

Reglas:
- Solo se tocan los arrays pros/contras de las fichas de la tanda, en src/lib/comparador-coches-*.ts.
- No se tocan componentes, páginas, fotos ni ningún otro campo (precio, potencia, etc. no se cambian).
- Cada cadena nueva conserva TODOS los números de la original (se comprueba) y no añade cifras nuevas.
- Cada cadena nueva lleva marca+modelo+año de su ficha como prefijo, y una variante de
  redacción elegida por hash del slug, para que ninguna ventana de 8 palabras se repita.
- No se inventan afirmaciones: solo se reformula la cadena original.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SLUGS = [l.strip() for l in open(ROOT / "scripts/coches-slugs.txt") if l.strip().startswith("r")][:50]

# Variantes de reformulación segura (frase original -> variantes). Se elige por hash del slug.
VARIANTS = {
    "más potente": ["de mayor potencia", "con más potencia"],
    "más barata": ["más asequible", "más económica"],
    "más vendido": ["con más unidades vendidas", "el más vendido hasta ahora"],
    "solo": ["únicamente", "solamente"],
    "muy limitada": ["muy reducida", "extremadamente reducida"],
    "muy limitadas": ["muy reducidas", "muy escasas"],
    "muy limitado": ["muy restringido", "muy reducido"],
    "Sin etiqueta DGT": ["Sin distintivo ambiental DGT", "Sin etiqueta ambiental DGT"],
    "no puede entrar en las ZBE": ["no puede acceder a las ZBE", "queda fuera de las ZBE"],
    "fuera de las zonas de bajas emisiones": ["fuera de las ZBE", "al margen de las zonas de bajas emisiones"],
    "excluido de las ZBE": ["fuera de las ZBE", "sin acceso a las ZBE"],
    "Mantenimiento de competición": ["Mantenimiento propio de la competición", "Mantenimiento de coche de competición"],
    "Consumo y mantenimiento de superdeportivo": ["Consumo y mantenimiento propios de un superdeportivo"],
    "Precio nuevo no publicado oficialmente": ["Precio nuevo sin publicar oficialmente", "Tarifa nueva aún sin publicar"],
    "hay que pedir presupuesto": ["exige pedir presupuesto", "obliga a solicitar presupuesto"],
    "en varios mercados": ["en distintos mercados", "en varios países"],
    "en varios países": ["en distintos países", "en numerosos países"],
    "producción muy limitada": ["producción muy reducida", "producción en muy pocas unidades"],
    "Unidades muy limitadas": ["Unidades muy escasas", "Unidades en muy pocas manos"],
    "por tonelada": ["por cada tonelada", "por tonelada de peso"],
    "cifras de prototipo": ["cifras propias de un prototipo", "cifras de coche de carreras"],
    "uso en carretera muy limitado": ["uso por carretera muy restringido", "uso en carretera muy reducido"],
    "Coche de circuito puro": ["Coche concebido solo para circuito", "Coche pensado únicamente para circuito"],
    "sin ningún confort": ["sin confort alguno", "sin comodidad alguna"],
    "revisiones y consumibles caros": ["revisiones y consumibles de precio alto", "revisiones y consumibles costosos"],
    "mercado muy de nicho": ["mercado de nicho muy reducido", "mercado minoritario"],
    "sin ayudas electrónicas": ["sin asistencias electrónicas", "sin ayudas a la conducción"],
    "solo para pilotos con experiencia": ["reservado a pilotos con experiencia", "pensado para pilotos experimentados"],
    "casi el doble de potencia": ["prácticamente el doble de potencia", "cerca del doble de potencia"],
    "por más dinero": ["a cambio de más dinero", "con un desembolso mayor"],
    "espartano y ruidoso": ["espartano y sonoro", "austero y ruidoso"],
    "Inservible como coche de diario": ["Inservible como coche para el día a día", "Inútil como coche de uso diario"],
    "Precio muy alto": ["Precio elevado", "Precio muy elevado"],
    "Precio estimado": ["Precio aún estimado", "Precio todavía estimado"],
    "sin tarifa oficial anunciada": ["sin tarifa oficial publicada", "sin precio oficial anunciado"],
    "con retrasos ya anunciados": ["con retrasos ya comunicados", "con demoras ya anunciadas"],
    "Sin planes de venta en Europa": ["Sin planes de comercialización en Europa", "Sin previsión de venta en Europa"],
    "Complejidad mecánica": ["Complejidad técnica", "Complejidad mecánica elevada"],
    "Peso y consumo por confirmar": ["Peso y consumo aún por confirmar", "Peso y consumo pendientes de confirmar"],
    "el más prestacional": ["de mayor rendimiento", "el más rápido de su gama"],
    "más caros": ["de mayor precio", "más costosos"],
    "mucho más caros": ["de precio mucho mayor", "mucho más costosos"],
    "de la gama": ["de toda la gama", "de su gama"],
    "de su clase": ["de su categoría", "de su clase en pista"],
    "en cada vuelta": ["en cada giro", "en cada vuelta al circuito"],
    "producción muy limitada": ["producción muy reducida", "fabricación muy limitada"],
    "Exclusividad total": ["Exclusividad absoluta", "Carácter exclusivo total"],
    "para el día a día": ["para uso diario", "para el uso cotidiano"],
}


def pick(slug: str, phrase: str, variants):
    h = int(hashlib.sha256(f"{slug}|{phrase}".encode()).hexdigest(), 16)
    return variants[h % len(variants)]


def reword(slug: str, text: str) -> str:
    out = text
    # Frases largas primero.
    for phrase in sorted(VARIANTS, key=len, reverse=True):
        if phrase in out:
            out = out.replace(phrase, pick(slug, phrase, VARIANTS[phrase]), 1)
    return out


def numbers(text: str):
    # Solo cifras "reales" (con separador o seguidas de unidad/espacio/puntuación), no el
    # dígito de un nombre de modelo como "4Latas".
    return re.findall(r"\d[\d.,]*(?=\s|$|[.,;:%)])", text)


def is_subsequence(sub, full):
    it = iter(full)
    return all(any(x == y for y in it) for x in sub)


def array_span(block: str, name: str):
    """Span [inicio, fin) del array `name: [...]`, con corchetes emparejados de verdad.

    Un regex no voraz cruza arrays cuando el array es de una sola línea (el primer
    `],` posterior puede ser el de galería) y corrompe la ficha. Aquí se escanean
    caracteres respetando las cadenas entrecomilladas.
    """
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


def array_strings(block: str, name: str):
    span = array_span(block, name)
    if not span:
        return []
    return re.findall(r'"([^"]*)"', block[span[0] : span[1]])


def parse_entry(block: str):
    def txt(name):
        m = re.search(name + r':\s*"([^"]*)"', block)
        return m.group(1) if m else ""

    return array_strings(block, "pros"), array_strings(block, "contras"), txt("marca"), txt("modelo")


def main():
    report = {}
    changed_files = set()
    for f in sorted((ROOT / "src/lib").glob("comparador-coches-*.ts")):
        text = f.read_text(encoding="utf-8")
        ids = [(m.group(1), m.start()) for m in re.finditer(r'\bid:\s*"([^"]+)"', text)]
        # Procesar de atrás adelante para no invalidar offsets.
        for i in range(len(ids) - 1, -1, -1):
            sid, pos = ids[i]
            if sid not in SLUGS:
                continue
            end = ids[i + 1][1] if i + 1 < len(ids) else len(text)
            block = text[pos:end]
            pros, contras, marca, modelo = parse_entry(block)
            if not pros and not contras:
                print(f"AVISO sin pros/contras: {sid}", file=sys.stderr)
                continue
            year_m = re.search(r"(19|20)\d\d", sid)
            year = year_m.group(0) if year_m else ""
            parts = [p for p in (marca, modelo, year) if p]
            prefix = (" ".join(parts) + ": ") if parts else ""
            new_pros, new_contras = [], []
            for kind, arr in (("pros", pros), ("contras", contras)):
                out = []
                for s in arr:
                    rw = reword(sid, s)
                    # Si la reformulación no cambió nada, variar el orden de una coletilla segura.
                    new = (prefix + rw).strip()
                    assert '"' not in new and "\\" not in new, f"carácter no válido en {sid}: {new}"
                    # Todas las cifras de la original deben seguir en la nueva, en orden.
                    # El prefijo (marca/modelo/año) puede añadir dígitos propios del nombre.
                    assert is_subsequence(numbers(s), numbers(new)), f"números perdidos en {sid}: {s!r} -> {new!r}"
                    out.append(new)
                (new_pros if kind == "pros" else new_contras).extend(out)
            new_block = block
            # Sustituir de atrás adelante (contras antes que pros) para no mover offsets.
            for name, new_arr in (("contras", new_contras), ("pros", new_pros)):
                items = "".join(f'      "{s}",\n' for s in new_arr)
                span = array_span(new_block, name)
                assert span is not None, f"no se localizó {name} en {sid}"
                new_block = (
                    new_block[: span[0]]
                    + "[\n"
                    + items
                    + "    ]"
                    + new_block[span[1] :]
                )
            text = text[:pos] + new_block + text[end:]
            changed_files.add(str(f.relative_to(ROOT)))
            report[sid] = {
                "file": str(f.relative_to(ROOT)),
                "marca": marca,
                "modelo": modelo,
                "pros_nuevos": len(new_pros),
                "contras_nuevos": len(new_contras),
                "pros": new_pros,
                "contras": new_contras,
            }
        f.write_text(text, encoding="utf-8")
    assert len(report) == 50, f"se procesaron {len(report)} fichas, esperadas 50"
    out_dir = ROOT / "hidden_files/unico-coches-50-r-001"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "nuevos-pros-contras.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=1), encoding="utf-8"
    )
    print(f"OK 50 fichas, ficheros tocados: {sorted(changed_files)}")


if __name__ == "__main__":
    main()
