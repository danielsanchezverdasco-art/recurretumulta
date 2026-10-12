# Genera las miniaturas -card.webp (640 px) que pide cardThumb() para cada heroSrc del blog.
# Uso: python3 scripts/gen-cards.py [dist]   (escribe en public/media y, si existe, en dist/media)
import os, re, sys
from PIL import Image
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
