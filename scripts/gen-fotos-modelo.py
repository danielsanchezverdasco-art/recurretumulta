#!/usr/bin/env python3
"""Registro único de la foto principal por identidad exacta de modelo.

No elige por parecido de nombre ni por el orden de los objetos. Para cada id
de ficha (y el artículo con el mismo slug) conserva, en este orden, la fuente
que ya es usable:

1. imagenOficial de esa ficha, si el archivo existe, decodifica, no es el
   placeholder y tiene licencia abierta en public/media-creditos.md
2. si no, el campo imagen de esa misma ficha, con las mismas condiciones
3. si no, la primera imagen del artículo de ese slug, con las mismas condiciones
4. si no, un archivo cuyo nombre es exactamente ese slug más un sufijo conocido
   (hero, oficial, huntN, commons) y ya tiene crédito

La galería de la ficha no se reescribe. Un alias solo entra si está en
ALIASES_VERIFICADOS. Salida: src/lib/fotos-modelo.generated.ts y el manifiesto.
"""
from __future__ import annotations

import hashlib
import json
import os
import re
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "lib"
MEDIA = ROOT / "public" / "media"
COPIA = ROOT / "media-registro"
OUT_TS = SRC / "fotos-modelo.generated.ts"
MANIF = ROOT / "docs" / "inventario" / "fotos-modelo-manifiesto.json"
INFORME = ROOT / "docs" / "inventario" / "FOTOS-POR-QUE-20261107.md"

# Equivalencias ya comprobadas de identidad. Vacío a propósito: no se infiere
# un alias porque dos slugs se parezcan.
ALIASES_VERIFICADOS: dict[str, str] = {}

SUFIJO = re.compile(r"^-(?:hunt\d+|oficial|hero|commons|\d+)\.webp$")
PH = {
    ln.strip()
    for ln in (ROOT / "scripts" / "placeholder-md5.txt").read_text().splitlines()
    if ln.strip() and not ln.startswith("#")
}


def ok_lic(s: str) -> bool:
    if re.search(r"NC|ND|desconoc", s, re.I):
        return False
    return bool(
        re.match(
            r"^(CC0|CC BY( ?-?SA)?( \d(\.\d)?)?( de)?|dominio público.*|Public domain.*)$",
            s.strip(),
            re.I,
        )
    )


def creditos() -> dict[str, dict]:
    out = {}
    for ln in (ROOT / "public" / "media-creditos.md").read_text(encoding="utf-8").splitlines():
        if not ln.startswith("| /media/"):
            continue
        p = [x.strip() for x in ln.strip().strip("|").split("|")]
        if len(p) >= 4:
            out[p[0]] = {"fuente": p[1], "autor": p[2], "lic": p[3]}
    return out


def malas() -> set[str]:
    t = (SRC / "fotos-malas.generated.ts").read_text(encoding="utf-8")
    m = re.search(r'FOTOS_MALAS_TXT = "(.*)";', t, re.S)
    if not m:
        return set()
    body = bytes(m.group(1), "utf-8").decode("unicode_escape")
    return {x for x in body.split("\n") if x}


def notas() -> list[tuple[str, str]]:
    t = (SRC / "fotos-referencia.ts").read_text(encoding="utf-8")
    return re.findall(r'"([^"]+)":\s*"([^"]+)"', t)


def nota_de(src: str, pares: list[tuple[str, str]]) -> str:
    nombre = src.rsplit("/", 1)[-1]
    for pref, txt in pares:
        if nombre.startswith(pref):
            return txt
    return ""


def clasifica(src: str, cred: dict, mal: set) -> str:
    if not src or not src.startswith("/media/"):
        return "sin_ruta"
    fp = MEDIA / src[len("/media/") :]
    if not fp.is_file():
        return "fichero_ausente"
    digest = hashlib.md5(fp.read_bytes()).hexdigest()
    if digest in PH or src in mal:
        return "placeholder_o_rechazada"
    try:
        with Image.open(fp) as im:
            im.load()
            w, h = im.size
    except Exception:
        return "no_decodifica"
    if w < 200 or h < 120:
        return "pocos_pixeles"
    c = cred.get(src)
    if not c or not ok_lic(c["lic"]):
        return "permiso_desconocido"
    return "ok"


def bloques(texto: str):
    marcas = list(re.finditer(r'(?:id:\s*"([^"]+)"|"id":\s*"([^"]+)"|"slug":\s*"([^"]+)")', texto))
    for i, m in enumerate(marcas):
        slug = m.group(1) or m.group(2) or m.group(3)
        fin = marcas[i + 1].start() if i + 1 < len(marcas) else min(len(texto), m.end() + 4000)
        yield slug, texto[m.end() : fin]


def primera_img(bloque: str) -> str:
    m = re.search(r"<img\b[^>]*\bsrc=(\"[^\"]+\"|'[^']+'|[^\s>]+)", bloque)
    if not m:
        return ""
    return m.group(1).strip("\"'")


def campo(bloque: str, nombre: str) -> str:
    m = re.search(rf"{nombre}:\s*\"([^\"]*)\"", bloque)
    return m.group(1) if m else ""


def exactos(slug: str) -> list[str]:
    if not MEDIA.is_dir():
        return []
    out = []
    pref = slug + "-"
    for nombre in os.listdir(MEDIA):
        if not nombre.startswith(pref) or not nombre.endswith(".webp"):
            continue
        resto = nombre[len(slug) :]
        if SUFIJO.match(resto):
            out.append("/media/" + nombre)
    return sorted(out)


def main() -> None:
    cred = creditos()
    mal = malas()
    pares = notas()
    ficha: dict[str, dict] = {}
    blog: dict[str, str] = {}
    for p in SRC.rglob("*.ts"):
        if "generated" in p.name or p.name in {
            "blog-data.ts",
            "blog-posts-autocaravanas-lote125.ts",
            "blog-posts-autocaravanas-lote125-g02.ts",
        }:
            continue
        try:
            texto = p.read_text(encoding="utf-8")
        except OSError:
            continue
        for slug, bloque in bloques(texto):
            oficial = campo(bloque, "imagenOficial")
            imagen = campo(bloque, "imagen")
            foto = campo(bloque, "foto")
            if oficial or imagen or foto:
                cur = ficha.setdefault(slug, {"oficial": "", "imagen": "", "foto": ""})
                cur["oficial"] = cur["oficial"] or oficial
                cur["imagen"] = cur["imagen"] or imagen
                cur["foto"] = cur["foto"] or foto
            img = primera_img(bloque)
            if img.startswith("/media/") and slug not in blog:
                blog[slug] = img

    registro = {}
    causas = {
        "ok_ficha": 0,
        "ok_blog": 0,
        "ok_exacta": 0,
        "fichero_ausente": 0,
        "permiso_desconocido": 0,
        "placeholder_o_rechazada": 0,
        "pocos_pixeles": 0,
        "no_decodifica": 0,
        "selector_distinto": 0,
        "sin_candidato": 0,
    }
    ejemplos = {k: [] for k in causas}
    ids = sorted(set(ficha) | set(blog))
    for slug in ids:
        f = ficha.get(slug, {})
        candidatos = [
            ("ficha", f.get("oficial") or ""),
            ("ficha", f.get("imagen") or ""),
            ("ficha", f.get("foto") or ""),
            ("blog", blog.get(slug, "")),
        ]
        elegido = None
        origen = ""
        visto = []
        for ori, src in candidatos:
            if not src or src in visto:
                continue
            visto.append(src)
            estado = clasifica(src, cred, mal)
            if estado == "ok" and elegido is None:
                elegido, origen = src, ori
            elif elegido is None and estado != "sin_ruta":
                if len(ejemplos[estado]) < 8:
                    ejemplos[estado].append(f"{slug} {src}")
                # se cuenta al final solo si nadie gana
                candidatos_estado = estado
            else:
                candidatos_estado = ""
        if elegido is None:
            for src in exactos(slug):
                if clasifica(src, cred, mal) == "ok":
                    elegido, origen = src, "exacta"
                    break
        if elegido is None:
            # clasifica el primer candidato real para el informe
            estado = "sin_candidato"
            for ori, src in candidatos:
                if src:
                    estado = clasifica(src, cred, mal)
                    if estado == "ok":
                        estado = "sin_candidato"
                    break
            if estado not in causas:
                estado = "sin_candidato"
            causas[estado] += 1
            if len(ejemplos[estado]) < 8 and slug not in " ".join(ejemplos[estado]):
                ejemplos[estado].append(slug)
            continue
        blog_src = blog.get(slug, "")
        if blog_src and blog_src != elegido and clasifica(blog_src, cred, mal) == "ok":
            causas["selector_distinto"] += 1
            if len(ejemplos["selector_distinto"]) < 8:
                ejemplos["selector_distinto"].append(f"{slug}: ficha {elegido.split('/')[-1]} / blog {blog_src.split('/')[-1]}")
        c = cred[elegido]
        registro[slug] = {
            "src": elegido,
            "fuente": c["fuente"],
            "licencia": c["lic"],
            "autor": c["autor"],
            "nota": nota_de(elegido, pares),
            "origen": origen,
        }
        causas["ok_" + origen] += 1

    # 123 del informe estático: ¿el archivo estaba y la página salió sin <img>?
    informe = ROOT / ".deploy-work" / "fichas-sin-foto-informe.txt"
    ocultas = []
    if informe.is_file():
        for ln in informe.read_text().splitlines():
            slug = ln.strip().rstrip("/").split("/")[-1]
            if not slug:
                continue
            if slug in registro:
                ocultas.append(slug)
    causas["html_vacio_con_foto_verificada"] = len(ocultas)

    lineas = [
        "// GENERADO por scripts/gen-fotos-modelo.py. No editar.",
        "// Una entrada por id exacto. La ficha, el blog y la tarjeta leen esto.",
        "export const ALIAS_FOTO: Record<string, string> = "
        + json.dumps(ALIASES_VERIFICADOS, ensure_ascii=False)
        + ";",
        "export const FOTOS_MODELO: Record<string, { src: string; fuente: string; licencia: string; autor: string; nota: string; origen: string }> = "
        + json.dumps(registro, ensure_ascii=False, indent=0)
        + ";",
        "",
    ]
    OUT_TS.write_text("\n".join(lineas), encoding="utf-8")

    COPIA.mkdir(exist_ok=True)
    manifiesto = {"archivos": {}, "alias": ALIAS_VERIFICADOS if False else ALIASES_VERIFICADOS, "modelos": len(registro)}
    for slug, row in registro.items():
        src = row["src"]
        fp = MEDIA / src[len("/media/") :]
        digest = hashlib.sha256(fp.read_bytes()).hexdigest()
        destino = COPIA / f"{digest[:16]}-{fp.name}"
        if not destino.exists():
            shutil.copy2(fp, destino)
        manifiesto["archivos"].setdefault(
            src,
            {"sha256": digest, "bytes": fp.stat().st_size, "copia": str(destino.relative_to(ROOT))},
        )
    MANIF.write_text(json.dumps({"modelos": len(registro), "alias": ALIASES_VERIFICADOS, "archivos": manifiesto["archivos"]}, ensure_ascii=False, indent=0), encoding="utf-8")

    def ej(k):
        return "\n".join(f"- {x}" for x in ejemplos.get(k, [])) or "- (ninguno en la muestra)"

    INFORME.write_text(
        f"""# Por qué una ficha se queda sin foto

No es que el disco haya perdido los archivos. El recuento de abajo separa las causas. El registro único (`src/lib/fotos-modelo.generated.ts`) tiene {len(registro)} modelos con foto principal verificada. La galería de cada ficha no se ha reescrito.

## El HTML estático salió vacío y el archivo sí estaba

De las 123 fichas marcadas `data-foto-pendiente` en el dist anterior, {len(ocultas)} tienen ahora foto con licencia en el registro. En esas, el prerender abortaba la descarga de `/media/`. El `onerror` de la ficha ponía el hueco vacío aunque el archivo existiera y, al hidratar en el navegador, la misma foto sí aparecía. No es una foto borrada.

## Permiso desconocido o archivo que no sirve

Un archivo en `public/media` sin fila de licencia abierta (CC0, CC BY, CC BY-SA o dominio público) no entra en el registro. Tampoco el placeholder, ni una imagen que no decodifica, ni una de menos de 200 px. Eso no demuestra que la marca prohíba toda foto: solo que aquí no hay permiso verificable. Cecotec sigue fuera por la restricción de sus propias condiciones.

- Permiso desconocido (muestra): 
{ej("permiso_desconocido")}
- Archivo citado que no está en disco:
{ej("fichero_ausente")}
- Placeholder o foto ya rechazada:
{ej("placeholder_o_rechazada")}
- Decodifica, pero es diminuta:
{ej("pocos_pixeles")}

## La ficha y el blog no miraban el mismo archivo

{causas["selector_distinto"]} modelos tenían una foto válida en la ficha y otra distinta, también válida, en la primera imagen del artículo. El registro se queda con la de la ficha. La tarjeta deja de elegir por el orden `hunt1` / `oficial` / `hero`.

{ej("selector_distinto")}

## Cifras

| Causa | Modelos |
|---|---|
| Foto de la ficha, con licencia | {causas["ok_ficha"]} |
| Foto del propio artículo, con licencia | {causas["ok_blog"]} |
| Archivo del mismo slug, con licencia, sin campo usable | {causas["ok_exacta"]} |
| Permiso desconocido | {causas["permiso_desconocido"]} |
| Fichero ausente | {causas["fichero_ausente"]} |
| Placeholder o rechazada | {causas["placeholder_o_rechazada"]} |
| Pocos píxeles | {causas["pocos_pixeles"]} |
| No decodifica | {causas["no_decodifica"]} |
| Sin candidato | {causas["sin_candidato"]} |
| Ficha y blog apuntaban a archivos distintos | {causas["selector_distinto"]} |
""",
        encoding="utf-8",
    )
    print("registro", len(registro), "copia", len(list(COPIA.iterdir())), "ocultas_con_foto", len(ocultas))
    for k, v in causas.items():
        print(f"  {k} {v}")


if __name__ == "__main__":
    main()
