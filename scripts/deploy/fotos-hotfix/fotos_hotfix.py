#!/usr/bin/env python3
"""Sustituye fotos falsas (IA) por fotos REALES ya publicadas, o por el aviso 'Foto real próximamente'.
Uso:  python3 scripts/deploy/fotos-hotfix/fotos_hotfix.py <dir_media> [--bajar-origenes] [--lista-salida FICHERO]
  <dir_media>        p.ej. dist/media  (modifica EN SITIO, mismas dimensiones, idempotente)
  --bajar-origenes   si falta en <dir_media> una foto real de origen, la baja del deploy en vivo (verificada por sha1)
  --lista-salida     escribe las rutas /media/... tocadas (pásala a mkdraft.py --media-forzar)
Mapas: todos los fotos-hotfix-map*.json junto a este script (destino -> origen | "PLACEHOLDER").
Para un hotfix nuevo, añade un fichero fotos-hotfix-map-N.json; nunca borres entradas.
Si un origen no existe y no se puede bajar: ABORTA (nunca pone un aviso donde debería ir una foto real)."""
import json, os, sys, math, argparse, urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter
H = os.path.dirname(os.path.abspath(__file__))
ap = argparse.ArgumentParser(); ap.add_argument("media"); ap.add_argument("--bajar-origenes", action="store_true"); ap.add_argument("--lista-salida")
a = ap.parse_args(); D = a.media
import glob
M = {}
for mp in sorted(glob.glob(os.path.join(H, "fotos-hotfix-map*.json"))):   # map, map-3, map-4, map-extra...
    M.update(json.load(open(mp)))
VAR = ["", "-480w", "-828w", "-card", "-1200w"]
def font(sz):
    for f in ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", "/Library/Fonts/Arial Bold.ttf", "C:/Windows/Fonts/arialbd.ttf"]:
        try: return ImageFont.truetype(f, sz)
        except Exception: pass
    return ImageFont.load_default()
_PH = {}
def placeholder(w, h):
    if (w, h) not in _PH:
        im = Image.new("RGB", (w, h), (229, 231, 235)); d = ImageDraw.Draw(im)
        for t, f, y in (("Foto real próximamente", font(max(12, w // 18)), h / 2 - w // 22),
                        ("Hemos retirado una imagen que no era del modelo real", font(max(9, w // 48)), h / 2 + w // 40)):
            d.text(((w - d.textlength(t, font=f)) / 2, y), t, fill=(75, 85, 99), font=f)
        _PH[(w, h)] = im
    return _PH[(w, h)]
def fit(src, w, h):
    sw, sh = src.size
    if abs(math.log((w / h) / (sw / sh))) <= 0.25: return ImageOps.fit(src, (w, h), Image.LANCZOS, centering=(0.5, 0.55))
    bg = ImageOps.fit(src, (w, h), Image.LANCZOS).filter(ImageFilter.GaussianBlur(max(8, w // 40)))
    fg = ImageOps.contain(src, (w, h), Image.LANCZOS); bg.paste(fg, ((w - fg.size[0]) // 2, (h - fg.size[1]) // 2)); return bg
_live = None
def bajar(name):
    global _live
    sys.path.insert(0, os.path.dirname(H)); from comun import live_id, file_list, site_name, sha1_file
    if _live is None:
        lid = live_id(); _live = (lid, file_list(lid), site_name())
    lid, fl, sn = _live; rel = "/media/" + name + ".webp"
    if rel not in fl: return False
    p = os.path.join(D, name + ".webp")
    open(p, "wb").write(urllib.request.urlopen(urllib.request.Request(f"https://{lid}--{sn}.netlify.app{rel}", headers={"User-Agent": "Mozilla/5.0"}), timeout=120).read())
    return sha1_file(p) == fl[rel]
def src_img(spec):
    name, _, op = spec.partition("|"); p = os.path.join(D, name + ".webp")
    if not os.path.exists(p) and not (a.bajar_origenes and bajar(name)):
        sys.exit(f"ABORT: falta la foto real de origen {name}.webp (usa --bajar-origenes)")
    im = Image.open(p).convert("RGB")
    if op == "crop":
        w, h = im.size; im = im.crop((int(w * 0.54), int(h * 0.17), int(w * 0.965), int(h * 0.86)))
    return im
cache = {}
for k, v in M.items():   # cargar TODOS los orígenes antes de escribir nada
    if not k.startswith("_") and v != "PLACEHOLDER" and v not in cache: cache[v] = src_img(v)
done = []
for k, v in M.items():
    if k.startswith("_"): continue
    for s in VAR:
        p = os.path.join(D, k + s + ".webp")
        if not os.path.exists(p): continue
        w, h = Image.open(p).size
        (placeholder(w, h) if v == "PLACEHOLDER" else fit(cache[v], w, h)).save(p, "WEBP", quality=82, method=4)
        done.append("/media/" + k + s + ".webp")
print("sustituidos", len(done))
if a.lista_salida: open(a.lista_salida, "w").write("\n".join(sorted(done)) + "\n")
