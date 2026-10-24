#!/usr/bin/env python3
"""Limpieza manual de las 18 cadenas con pilas de coletillas del romper automático.

Cada reescritura cambia la redacción del segmento que colisionaba (sin tocar cifras
ni añadir datos nuevos) y deja una única frase limpia, sin coletillas apiladas.
Se localiza la cadena por ficha+campo+subcadena clave, y se sustituye solo dentro
del array pros/contras de esa ficha.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "hidden_files/unico-coches-50-r-001"

# (slug, campo, subcadena clave en la cadena actual, cadena nueva limpia)
FIXES = [
    ("renault-4-e-tech-precio-autonomia", "pros", "Remolque de 750 kg",
     "Renault 4 E-Tech: puede remolcar 750 kg, algo raro en un urbano eléctrico"),
    ("renault-4-e-tech-precio-autonomia", "pros", "Fabricado",
     "Renault 4 E-Tech: Fabricado en Europa, comparte el 68 % de sus piezas con el exitoso R5"),
    ("renault-4-e-tech-precio-autonomia", "contras", "versión de 122",
     "Renault 4 E-Tech: Con 122 CV, la versión básica queda corta en prestaciones: 9,2 s"),
    ("renault-5-e-tech-2026-precio-autonomia", "pros", "Gemini por OTA",
     "Renault 5 E-Tech 2026: Tecnología al día: Gemini por OTA, carga inalámbrica Qi2 y 2 GB mensuales de datos"),
    ("renault-5-e-tech-2026-precio-autonomia", "contras", "cargador AC de 22 kW",
     "Renault 5 E-Tech 2026: El cargador de alterna de 22 kW supone 1.530 € extra, y los cables van aparte"),
    ("renault-5-e-tech-2026-precio-autonomia", "contras", "Solo 5 puertas",
     "Renault 5 E-Tech 2026: Solo se ofrece con 5 puertas, sin versión de 3 como el R5 clásico"),
    ("renault-5-e-tech-40-kwh-2026-precio-ficha-tecnica", "pros", "Carga rápida",
     "Renault R5 E-Tech 40 kWh 2026: Carga en continua a 80 kW y en alterna a 11 kW"),
    ("renault-espace-2026-e-tech-200-precio-ficha-tecnica", "contras", "9,0 s en el 0-100",
     "Renault Espace E-Tech 200 2026: Necesita 9,0 segundos para llegar a cien, así que no destaca por agilidad"),
    ("renault-arkana-2026-tce-140-precio-ficha-tecnica", "pros", "Consumo contenido",
     "Renault Arkana TCe 140 2026: Consumo contenido, 5,8 litros cada 100 km en ciclo WLTP"),
    ("renault-austral-2026-e-tech-200-precio-ficha-tecnica", "pros", "200 CV con 4,7",
     "Renault Austral E-Tech 200 2026: 200 CV y 4,7 litros cada 100 km: el híbrido más equilibrado del segmento C-SUV"),
    ("ram-1500-ramcharger-2026-precio-ficha-tecnica", "pros", "660",
     "Ram 1500 Ramcharger 2026: 660 CV y 830 Nm, y de parado a cien en 4,5 segundos"),
    ("range-rover-electric-2025-precio-ficha-tecnica", "pros", "550 CV",
     "Land Rover Range Rover Electric 2025: 550 CV y 850 Nm con tracción total, y de parado a cien en cuatro segundos y medio"),
    ("range-rover-electric-2025-precio-ficha-tecnica", "pros", "Carga de 350 kW",
     "Land Rover Range Rover Electric 2025: Carga a 350 kW con arquitectura de 800 voltios: del 10 al 80 % en 22 minutos"),
    ("range-rover-electric-2025-precio-ficha-tecnica", "pros", "capacidades todoterreno",
     "Land Rover Range Rover Electric 2025: Conserva sus capacidades todoterreno: vadeo de 900 mm y pendientes de hasta 45 grados"),
    ("range-rover-electric-2025-precio-ficha-tecnica", "contras", "peso ni el maletero",
     "Land Rover Range Rover Electric 2025: Peso y maletero definitivos aún sin publicar por la marca"),
    ("radical-sr10-xxr-2025-precio-ficha-tecnica", "pros", "0-100 km/h en",
     "Radical SR10 XXR 2025: Acelera de parado a cien en 2,4 segundos y alcanza 290 km/h de velocidad máxima"),
    ("radical-sr1-xxr-2025-precio-ficha-tecnica", "pros", "2:11 en Silverstone",
     "Radical SR1 XXR 2025: 2:11 en Silverstone, a la altura de superdeportivos mucho más costosos"),
    ("renault-kangoo-2024-tce-130-precio-ficha-tecnica", "contras", "Etiqueta C",
     "Renault Kangoo Combi TCe 130 2024: Con etiqueta C, sin acceso libre a las ZBE más estrictas"),
]


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


def sustituir(texto, sid, campo, vieja, nueva):
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
        assert trozo.count(objetivo) == 1, f"{sid}/{campo}: aparece {trozo.count(objetivo)} veces"
        nuevo_bloque = bloque[: span[0]] + trozo.replace(objetivo, f'"{nueva}"', 1) + bloque[span[1] :]
        return texto[:pos] + nuevo_bloque + texto[end:]
    raise AssertionError(f"ficha no encontrada: {sid}")


def main():
    nuevos = json.loads((OUT_DIR / "nuevos-pros-contras.json").read_text(encoding="utf-8"))
    textos = {}
    for sid, campo, clave, nueva in FIXES:
        v = nuevos[sid]
        cands = [x for x in v[campo] if clave in x]
        assert len(cands) == 1, f"{sid}/{campo}: {len(cands)} candidatas para {clave!r}"
        vieja = cands[0]
        f = ROOT / v["file"]
        if str(f) not in textos:
            textos[str(f)] = f.read_text(encoding="utf-8")
        textos[str(f)] = sustituir(textos[str(f)], sid, campo, vieja, nueva)
        v[campo] = [nueva if x == vieja else x for x in v[campo]]
        print(f"OK {sid} [{campo}]: {nueva[:80]}")
    for path, txt in textos.items():
        Path(path).write_text(txt, encoding="utf-8")
    (OUT_DIR / "nuevos-pros-contras.json").write_text(
        json.dumps(nuevos, ensure_ascii=False, indent=1), encoding="utf-8"
    )
    print(f"Total: {len(FIXES)} cadenas limpiadas a mano")


if __name__ == "__main__":
    main()
