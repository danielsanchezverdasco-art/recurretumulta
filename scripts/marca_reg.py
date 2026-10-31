# Registro de 8-gramas de todo el texto ya publicado en dist (<main> de cada página, sin las marcas que se regeneran),
# para que el texto nuevo de las marcas no repita ni una ventana de 8 palabras de ninguna otra página (mismo tokenizador que rev3b).
import re,os,zlib,html
try: import numpy as np
except Exception: np=None
M64=(1<<64)-1
K=[0x9E3779B97F4A7C15,0xC2B2AE3D27D4EB4F,0x165667B19E3779F9,0x85EBCA77C2B2AE63,0x27D4EB2F165667C5,0xFF51AFD7ED558CCD,0xC4CEB9FE1A85EC53,0x94D049BB133111EB]
_id={}
def tok(t):
    t=re.sub(r'(\d)\.(\d{3})',r'\1\2',t.lower())
    return re.findall(r'[a-záéíóúñü0-9]+',t)
def _tid(w):
    v=_id.get(w)
    if v is None: v=_id[w]=zlib.crc32(w.encode())+1
    return v
def hashes(toks):
    """Hashes (lista de ints) de todas las ventanas de 8 tokens."""
    n=len(toks)-7
    if n<=0: return []
    ids=[_tid(w) for w in toks]
    if np is not None:
        a=np.array(ids,dtype=np.uint64); h=np.zeros(n,dtype=np.uint64)
        with np.errstate(over="ignore"):
            for j in range(8): h=h+a[j:j+n]*np.uint64(K[j])
        return h
    return [sum(ids[i+j]*K[j] for j in range(8))&M64 for i in range(n)]
TAGS=re.compile(r"<(script|style|noscript)\b.*?</\1>",re.S)
def main_text(h):
    m=re.search(r"<main\b.*?</main>",h,re.S)
    m=m.group(0) if m else h
    m=TAGS.sub(" ",m)
    return html.unescape(re.sub(r"<[^>]+>"," ",m))
class Registro:
    def __init__(self): self.partes=[]; self.set=set(); self.arr=None
    def anadir_pagina(self,h):
        hs=hashes_pagina(h)
        if len(hs): self.partes.append(np.unique(hs) if np is not None else set(hs))
    def cerrar(self):
        if np is not None:
            self.arr=np.unique(np.concatenate(self.partes)) if self.partes else np.zeros(0,dtype=np.uint64)
        else:
            for p in self.partes: self.set|=p
        self.partes=[]
    def esta(self,hs):
        """Cuántas ventanas de hs están en el registro (o en lo ya añadido con poner())."""
        if len(hs)==0: return 0
        if np is not None:
            a=np.asarray(hs,dtype=np.uint64); n=0
            if self.arr is not None and len(self.arr):
                i=np.searchsorted(self.arr,a); i[i>=len(self.arr)]=0; n=int((self.arr[i]==a).sum())
            return n+sum(1 for x in a.tolist() if x in self.set)
        return sum(1 for x in hs if x in self.set)
    def mascara(self,hs):
        if len(hs)==0: return []
        a=[int(x) for x in hs]
        return [self._una(x) for x in a]
    def _una(self,x):
        if x in self.set: return True
        if np is not None and self.arr is not None and len(self.arr):
            i=int(np.searchsorted(self.arr,np.uint64(x)))
            return i<len(self.arr) and int(self.arr[i])==x
        return False
    def poner(self,hs): self.set|={int(x) for x in hs}
def construir(D,excluir=(),saltar_marcas=False):
    """Registro con todas las páginas HTML bajo D excepto las URLs de `excluir` (p.ej. /coches/marca/byd/)."""
    R=Registro(); ex={u.strip("/") for u in excluir}
    for dp,dn,fn in os.walk(D):
        if "index.html" not in fn and not any(f.endswith(".html") for f in fn): continue
        rel=os.path.relpath(dp,D).strip("./")
        if rel in ex or (saltar_marcas and "/marca/" in "/"+rel+"/"): continue
        for f in fn:
            if f.endswith(".html"):
                try: R.anadir_pagina(open(os.path.join(dp,f),encoding="utf8",errors="ignore").read())
                except Exception: pass
    R.cerrar(); return R

# --- texto por bloques (cada <p>, <li>, <td>, <h*> es un segmento) sin las etiquetas de navegación (<li>/<td> con solo un enlace)
_SEG=re.compile(r'</(?:p|li|h\d|td|th|tr|section|div|ul|nav|a)>|<br\s*/?>',re.I)
_NAV=re.compile(r'<(li|td)\b[^>]*>\s*<a\b[^>]*>[^<]*</a>\s*</\1>',re.I)
def lineas(h):
    m=re.search(r"<main\b.*?</main>",h,re.S)
    m=m.group(0) if m else h
    m=_NAV.sub(" ",TAGS.sub(" ",m)); m=_SEG.sub("\n",m)
    return html.unescape(re.sub(r"<[^>]+>"," ",m)).split("\n")
def hashes_pagina(h):
    a=[hashes(tok(l)) for l in lineas(h)]
    a=[x for x in a if len(x)]
    if not a: return []
    return np.concatenate(a) if np is not None else [y for x in a for y in x]
