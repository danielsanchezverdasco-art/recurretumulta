import re, glob, subprocess, sys, ast, os, json
WT='/home/hatch/workspace/wt-unico50-x-001'
BATCH_FICHAS=["xev-yoyo-2025-precio-ficha-tecnica","xev-yoyo-pro-2026-precio-ficha-tecnica","xiaomi-skynomad-n70-max-2026-precio-ficha-tecnica","xiaomi-skynomad-n70-pro-2026-precio-ficha-tecnica","xiaomi-skynomad-n90-max-2026-precio-ficha-tecnica","xiaomi-skynomad-n90-max-explorer-2026-precio-ficha-tecnica","xiaomi-su7-2026-precio-ficha-tecnica","xiaomi-su7-max-2025-precio-ficha-tecnica","xiaomi-su7-max-2026-precio-ficha-tecnica","xiaomi-su7-pro-2026-precio-ficha-tecnica","xiaomi-su7-ultra-2025-precio-ficha-tecnica","xiaomi-su7-ultra-2026-precio-ficha-tecnica","xiaomi-yu7-2025-precio-ficha-tecnica","xiaomi-yu7-max-2025-precio-ficha-tecnica","xiaomi-yu7-pro-2025-precio-ficha-tecnica","xiaomi-yu7-suv-electrico-llegada-europa","xpeng-g6-2025-precio-espana","xpeng-g6-2026-restyling-precio-espana","xpeng-g6-awd-performance-2026","xpeng-g6-long-range-2025-precio-ficha-tecnica","xpeng-g7-2026-precio-ficha-tecnica","xpeng-g9-2024-precio-espana","xpeng-g9-2026-restyling-precio-espana","xpeng-g9-awd-performance-2026","xpeng-l03-2026-precio-espana","xpeng-mona-m03-2025-precio-ficha-tecnica","xpeng-p5-2025-precio-ficha-tecnica","xpeng-p7-2024-precio-ficha-tecnica"]
BATCH_BLOGS=["xev-yoyo-2025-precio-ficha-tecnica","xiaomi-skynomad-lanzamiento-ventas-china-1705-km","xiaomi-skynomad-n70-max-2026-precio-ficha-tecnica","xiaomi-skynomad-n70-pro-2026-precio-ficha-tecnica","xiaomi-skynomad-n90-max-2026-precio-ficha-tecnica","xiaomi-skynomad-n90-max-explorer-2026-precio-ficha-tecnica","xiaomi-su7-2026-precio-ficha-tecnica","xiaomi-su7-max-2025-precio-ficha-tecnica","xiaomi-su7-max-2026-precio-ficha-tecnica","xiaomi-su7-pro-2026-precio-ficha-tecnica","xiaomi-su7-ultra-2025-precio-ficha-tecnica","xiaomi-su7-ultra-2026-precio-ficha-tecnica","xiaomi-yu7-2025-precio-ficha-tecnica","xiaomi-yu7-max-2025-precio-ficha-tecnica","xiaomi-yu7-pro-2025-precio-ficha-tecnica","xpeng-g6-2025-precio-espana","xpeng-g6-long-range-2025-precio-ficha-tecnica","xpeng-g7-2026-precio-ficha-tecnica","xpeng-g9-2024-precio-espana","xpeng-g9-2026-restyling-precio-espana","xpeng-mona-m03-2025-precio-ficha-tecnica","xpeng-p7-2024-precio-ficha-tecnica"]
TOK=re.compile(r'[0-9a-záéíóúñü]+')
def toks(s):
    s=re.sub(r'<[^>]+>',' ',s)
    return TOK.findall(s.lower())
def windows(tokens):
    return set(tuple(tokens[i:i+8]) for i in range(len(tokens)-7))
def scan_strings(t):
    out=[]; i=0; n=len(t)
    while i<n:
        c=t[i]
        if c in '"`':
            q=c; j=i+1; buf=[]
            while j<n:
                ch=t[j]
                if ch=='\\' and j+1<n:
                    buf.append(t[j+1]); j+=2; continue
                if ch==q:
                    break
                buf.append(ch); j+=1
            out.append(''.join(buf)); i=j+1
        else:
            i+=1
    return out
def bracket(t,i):
    d=0; s=None; esc=False
    for j in range(i,len(t)):
        c=t[j]
        if s:
            if esc: esc=False
            elif c=='\\': esc=True
            elif c==s: s=None
        else:
            if c in '"\'`': s=c
            elif c=='[': d+=1
            elif c==']':
                d-=1
                if d==0: return j
    return -1
def arr_strings(t,i):
    j=bracket(t,i); return re.findall(r'"((?:[^"\\]|\\.)*)"', t[i+1:j])
# --- NEW TEXT ---
new_by_page={}  # (kind,slug) -> list of strings
def add_new(kind,slug,s):
    if len(toks(s))>=8: new_by_page.setdefault((kind,slug),[]).append(s)
# fichas: current files
for f in glob.glob(WT+'/src/lib/comparador-coches-*.ts'):
    t=open(f,encoding='utf-8').read()
    for m in re.finditer(r'id: "([^"]+)"', t):
        sid=m.group(1)
        if sid not in BATCH_FICHAS: continue
        seg=t[m.start():m.start()+15000]
        for name in ('pros','contras'):
            mm=re.search(r'\b'+name+r': \[', seg)
            if mm:
                for s in arr_strings(seg, mm.end()-1): add_new('ficha',sid,s)
        nm=re.search(r'"notas": "([^"]*)"', seg)
        if nm and sid in ('xpeng-g6-2025-precio-espana','xpeng-g9-2024-precio-espana'): add_new('ficha',sid,nm.group(1))
# blogs: ast-extract new strings from rewrite scripts
for script in ['/tmp/rew_blog1.py','/tmp/rew_blog1b.py','/tmp/rew_blog2.py','/tmp/rew_blog2b.py','/tmp/rew_blog3.py','/tmp/rew_blog4.py','/tmp/rew_blog5.py']:
    tree=ast.parse(open(script,encoding='utf-8').read())
    for node in ast.walk(tree):
        if isinstance(node,ast.Call) and getattr(node.func,'id',None)=='apply_blog':
            slug=node.args[1].value
            if slug not in BATCH_BLOGS: continue
            for elt in node.args[2].elts:
                old,new=elt.elts[0].value, elt.elts[1].value
                if old!=new: add_new('blog',slug,new)
print("paginas con texto nuevo:", len(new_by_page))
tot_new=sum(len(v) for v in new_by_page.values()); print("cadenas nuevas:", tot_new)
# new windows per page
new_win={}  # page -> set windows
win_pages={}  # window -> set pages
for pg,strs in new_by_page.items():
    ws=set()
    for s in strs: ws|=windows(toks(s))
    new_win[pg]=ws
    for w in ws: win_pages.setdefault(w,set()).add(pg)
coll={pg:set() for pg in new_win}
examples=[]
for w,pgs in win_pages.items():
    if len(pgs)>1:
        for pg in pgs:
            coll[pg].add(w)
        examples.append(('nuevo-vs-nuevo',w,sorted(pgs)))
print("colisiones nuevo-vs-nuevo (ventanas):", sum(1 for w,p in win_pages.items() if len(p)>1))
# --- BASE CORPUS, file by file ---
def git_show(path):
    r=subprocess.run(['git','-C',WT,'show',f'676bda2a:{path}'],capture_output=True,text=True)
    return r.stdout if r.returncode==0 else ''
base_files=sorted([os.path.relpath(p,WT) for p in glob.glob(WT+'/src/lib/comparador-coches-*.ts')+glob.glob(WT+'/src/lib/blog-posts-*.ts') if 'generated' not in p])
print("ficheros base:", len(base_files))
for idx,path in enumerate(base_files):
    t=git_show(path)
    if not t: continue
    is_blog='blog-posts' in path
    # segments
    pat=r'"slug": "([^"]+)"' if is_blog else r'id: "([^"]+)"'
    ms=list(re.finditer(pat,t))
    segs=[]
    for k,m in enumerate(ms):
        segs.append((( 'blog' if is_blog else 'ficha', m.group(1)), t[m.start():ms[k+1].start() if k+1<len(ms) else m.start()+20000]))
    # file-level window map for this file only
    fwin={}
    for key,seg in segs:
        # skip table lines for corpus (etiquetas de tablas)
        seg2='\n'.join(ln for ln in seg.split('\n') if not ln.strip().startswith('|'))
        for s in scan_strings(seg2):
            for w in windows(toks(s)):
                fwin.setdefault(w,set()).add(key)
    for pg,ws in new_win.items():
        for w in ws:
            if w in fwin:
                others={k for k in fwin[w] if k!=pg}
                if others:
                    if w not in coll[pg]:
                        coll[pg].add(w)
                        if len(examples)<80: examples.append(('nuevo-vs-base',w,(pg,sorted(others)[:3])))
    if idx%50==0: print(f"  base {idx}/{len(base_files)} {path} colisiones_acum={sum(len(v) for v in coll.values())}", flush=True)
print("\n=== RESULTADO POR PAGINA ===")
total=0
for pg in sorted(new_win):
    c=len(coll[pg]); total+=c
    kind,slug=pg
    url=f"/{'coches' if kind=='ficha' else 'blog'}/{slug}/"
    print(f"{url} {c}")
print("TOTAL colisiones:", total)
print("\n=== EJEMPLOS (max 40) ===")
for kind,w,info in examples[:40]:
    print(kind, ' '.join(w), '->', info)
json.dump({f"{k[0]}:{k[1]}":sorted(' '.join(w) for w in v) for k,v in coll.items()}, open('/tmp/x-colisiones.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)
