#!/usr/bin/env python3
# Variantes -480w/-828w de las fotos de portada (img.rtm-drivein) de fichas y blog + srcset/sizes
# en el HTML estático, igual que DriveInImage (src/components/motion.tsx). Idempotente.
# Uso: python3 scripts/gen-hero-variantes.py dist
import os,re,sys,glob
from PIL import Image
D=sys.argv[1] if len(sys.argv)>1 else "dist"
SIZES="(max-width: 928px) calc(100vw - 32px), 896px"
IMG=re.compile(r'<img(?=[^>]*class="rtm-drivein)[^>]*>')
hechas=set();nh=0;faltan=0
def variantes(o):
  try:
    im=None
    for w in (480,828):
      dst=o[:-5]+f"-{w}w.webp"
      if os.path.isfile(dst): continue
      if im is None: im=Image.open(o); im.load()
      x=im if im.width<=w else im.resize((w,round(im.height*w/im.width)),Image.LANCZOS)
      x.save(dst,"WEBP",quality=78,method=4)
  except Exception as e: print("ERR",o,e)
if __name__=="__main__":
  from multiprocessing import Pool
  todos=set()
  for f in glob.glob(f"{D}/**/index.html",recursive=True):
    for t in IMG.findall(open(f,encoding="utf8",errors="ignore").read()):
      s_=re.search(r' src="(/media/[^"]+\.webp)"',t)
      if s_ and 'loading="eager"' in t and os.path.isfile(D+s_.group(1)): todos.add(D+s_.group(1))
  print("a generar",len(todos),flush=True)
  with Pool(os.cpu_count()) as P: P.map(variantes,sorted(todos),chunksize=8)
for f in glob.glob(f"{D}/**/index.html",recursive=True):
  h=open(f,encoding="utf8",errors="surrogateescape").read()
  def rep(m):
    global nh,faltan
    t=m.group(0); s=re.search(r' src="(/media/[^"]+\.webp)"',t)
    if not s or "srcset=" in t or 'loading="eager"' not in t: return t
    src=s.group(1); o=D+src
    if not os.path.isfile(o): faltan+=1; return t
    if src not in hechas:
      im=Image.open(o); im.load()
      for w in (480,828):
        dst=o[:-5]+f"-{w}w.webp"
        if not os.path.isfile(dst):
          x=im if im.width<=w else im.resize((w,round(im.height*w/im.width)),Image.LANCZOS)
          x.save(dst,"WEBP",quality=78,method=4)
      hechas.add(src)
    wa=re.search(r' width="(\d+)"',t); W=int(wa.group(1)) if wa and int(wa.group(1))>828 else 1200
    ss=f'{src[:-5]}-480w.webp 480w, {src[:-5]}-828w.webp 828w, {src} {W}w'
    nh+=1
    return t.replace(f' src="{src}"',f' src="{src}" srcset="{ss}" sizes="{SIZES}"',1)
  h2=IMG.sub(rep,h)
  if h2!=h: open(f,"w",encoding="utf8",errors="surrogateescape").write(h2)
print("paginas",nh,"imagenes",len(hechas),"sin fichero",faltan)
