# Genera las miniaturas -card.webp (640 px) que pide cardThumb() para cada heroSrc del blog.
# Uso: python3 scripts/gen-cards.py [dist]   (escribe en public/media y, si existe, en dist/media)
import os, re, sys, shutil
from PIL import Image
# 1) Fotos obtenidas a mano (Wikimedia/prensa) versionadas en media-fuentes/: se copian a public/media.
for raiz, _, fs in os.walk("media-fuentes"):
    for f in fs:
        src = os.path.join(raiz, f); dst = os.path.join("public/media", os.path.relpath(src, "media-fuentes"))
        if not os.path.exists(dst):
            os.makedirs(os.path.dirname(dst), exist_ok=True); shutil.copy2(src, dst)
src = open("src/lib/blog-lite.generated.ts", encoding="utf8").read()
heroes = sorted(set(re.findall(r'"heroSrc":\s*"(/media/[^"]+\.webp)"', src)))
hechas = faltan = 0; sin_fuente = []
for h in heroes:
    if h.endswith("-card.webp"): continue
    f = "public" + h; c = f[:-5] + "-card.webp"
    if os.path.exists(c): continue
    if not os.path.exists(f): sin_fuente.append(h); continue
    im = Image.open(f).convert("RGB")
    if im.width > 640: im = im.resize((640, round(im.height * 640 / im.width)), Image.LANCZOS)
    im.save(c, "WEBP", quality=72); hechas += 1
    if os.path.isdir("dist/media"):
        d = "dist" + h[:-5] + "-card.webp"; os.makedirs(os.path.dirname(d), exist_ok=True); im.save(d, "WEBP", quality=72)
print("heroes", len(heroes), "cards generadas", hechas, "sin fuente", len(sin_fuente))
open("/tmp/heroes-sin-fuente.txt", "w").write("\n".join(sin_fuente))

# 3) Créditos visibles: public/media-creditos.md -> src/lib/creditos-fotos.generated.ts
#    (solo licencias que exigen atribución: CC BY / CC BY-SA).
import json as _json
_cred = {}
for _l in open("public/media-creditos.md", encoding="utf8"):
    _c = [x.strip() for x in _l.strip().strip("|").split("|")]
    if len(_c) >= 4 and _c[0].startswith("/media/") and re.match(r"CC BY", _c[3]):
        _cred[_c[0]] = {"autor": re.sub(r"\s+", " ", _c[2]), "licencia": _c[3], "url": _c[1]}
open("src/lib/creditos-fotos.generated.ts", "w", encoding="utf8").write(
    "// GENERADO por scripts/gen-cards.py desde public/media-creditos.md. No editar.\n"
    "export const CREDITOS_FOTOS: Record<string, { autor: string; licencia: string; url: string }> = "
    + _json.dumps(_cred, ensure_ascii=False, indent=0) + ";\n")
print(f"[gen-cards] créditos visibles: {len(_cred)}")
