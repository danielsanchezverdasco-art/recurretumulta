import subprocess,re,collections,json,sys
R='/workspace/r24/uniq'; LIVE='c94f7b99e'; B='21abc9238'; M='origin/merlin-unicidad-2610'; PREV='7130be2c'
sh=lambda *a: subprocess.run(a,capture_output=True,text=True,cwd=R).stdout
def W(t):
    t=re.sub(r'<[^>]+>|\\n|https?://\S+',' ',t); t=re.sub(r'[A-Za-z_]\w*\s*:\s*(?=["\'`])',' | ',t); t=re.sub(r'(\d)\.(\d{3})',r'\1\2',t); return re.findall(r'[a-záéíóúñü0-9]+',t.lower())
def G(t):
    w=W(t); return {' '.join(w[i:i+8]) for i in range(len(w)-7)}
def fc(text):
    c=collections.Counter()
    for line in text.split('\n'):
        for g in G(line): c[g]+=1
    return c
allf=[f for f in sh('git','ls-tree','-r','--name-only',LIVE,'src').split() if re.search(r'\.(ts|tsx|json)$',f) and 'generated' not in f]
# batch read live
p=subprocess.run(['git','cat-file','--batch'],input=''.join(f'{LIVE}:{f}\n' for f in allf).encode(),capture_output=True,cwd=R)
data=p.stdout; i=0; livetxt={}
for f in allf:
    nl=data.index(b'\n',i); hdr=data[i:nl].split(); size=int(hdr[2]); livetxt[f]=data[nl+1:nl+1+size].decode('utf-8','replace'); i=nl+1+size+1
fcount={f:fc(t) for f,t in livetxt.items()}
co=collections.Counter()
for c in fcount.values(): co.update(c)
def state(rev,files):
    c=co.copy(); per={}
    for f in files:
        c.subtract(fcount.get(f,collections.Counter()))
        t=sh('git','show',f'{rev}:{f}'); per[f]=fc(t); c.update(per[f])
    return c,per
commits=sh('git','rev-list','--reverse',f'{PREV}..{M}').split()
res=[]
for C in commits:
    files=sh('git','diff','--name-only',f'{C}^',C).split()
    cumf=sh('git','diff','--name-only',B,C).split()
    cprev,_=state(f'{C}^',sh('git','diff','--name-only',B,f'{C}^').split())
    ccur,_=state(C,cumf)
    d=sh('git','diff','-U0',f'{C}^',C)
    add=[l[1:] for l in d.split('\n') if l.startswith('+') and not l.startswith('+++')]
    rem=[l[1:] for l in d.split('\n') if l.startswith('-') and not l.startswith('---')]
    gadd=set(g for l in add for g in G(l))
    new_vs_parent=sorted(g for g in gadd if ccur[g]>=2 and cprev[g]<2)
    new_vs_live=sorted(g for g in gadd if ccur[g]>=2 and co[g]<2)
    # repetidos totales en ficheros del commit (antes/despues), medida global
    def rep(cnt,rev,fs):
        s=0
        for f in fs:
            t=sh('git','show',f'{rev}:{f}')
            s+=sum(1 for g in set().union(*[G(l) for l in t.split('\n')]) if cnt[g]>=2)
        return s
    num=lambda ls: collections.Counter(re.findall(r'\d+(?:[.,]\d+)*',' '.join(ls)))
    na,nr=num(add),num(rem)
    urls=lambda ls: collections.Counter(re.findall(r'https?://[^\s"\'`)]+|/(?:coches|motos|patinetes|blog|media|fichas-tecnicas)/[\w\-/.]+',' '.join(ls)))
    ua,ur=urls(add),urls(rem)
    r={'commit':C[:9],'msg':sh('git','log','-1','--format=%ad %s','--date=format:%d/%m %H:%M',C).strip(),'files':files,'add':len(add),'del':len(rem),
       'nuevos8g_vs_padre':len(new_vs_parent),'nuevos8g_vs_vivo':len(new_vs_live),'lista_vs_vivo':[(ccur[g],g) for g in new_vs_live][:80],
       'rep_antes':rep(cprev,f'{C}^',files),'rep_despues':rep(ccur,C,files),
       'cifras_mas':dict(na-nr),'cifras_menos':dict(nr-na),'urls_mas':dict(ua-ur),'urls_menos':dict(ur-ua),
       'coment_html_mas':sum(l.count('<!--') for l in add)-sum(l.count('<!--') for l in rem),
       'ocurra_antes_menos':sum(l.lower().count('lo que ocurra antes') for l in rem)-sum(l.lower().count('lo que ocurra antes') for l in add),
       'valvul_mas':sum(len(re.findall(r'v[áa]lvul',l,re.I)) for l in add)-sum(len(re.findall(r'v[áa]lvul',l,re.I)) for l in rem),
       'credito_mas':sum(len(re.findall(r'cr[eé]dito|credit|autor|licencia',l,re.I)) for l in add)-sum(len(re.findall(r'cr[eé]dito|credit|autor|licencia',l,re.I)) for l in rem),
       'lineas_cambiadas_cifras':sum(1 for a,b in zip(rem,add) if collections.Counter(re.findall(r'\d+',a))!=collections.Counter(re.findall(r'\d+',b)))}
    print(r['commit'],r['msg'][:70],'| +8g padre',r['nuevos8g_vs_padre'],'vivo',r['nuevos8g_vs_vivo'],'| rep',r['rep_antes'],'->',r['rep_despues'],'| cif+',dict(list(r['cifras_mas'].items())[:10]),'cif-',dict(list(r['cifras_menos'].items())[:10]),'| url±',len(r['urls_mas']),len(r['urls_menos']),'| <!--',r['coment_html_mas'],'| ocurra-',r['ocurra_antes_menos'],'| valv+',r['valvul_mas'],flush=True)
    res.append(r)
# cumulative vs live
cumf=sh('git','diff','--name-only',B,M).split()
cfin,_=state(M,cumf)
newtot={}
for f in cumf:
    d=sh('git','diff','-U0',LIVE,M,'--',f)
    add=[l[1:] for l in d.split('\n') if l.startswith('+') and not l.startswith('+++')]
    n=sorted({g for l in add for g in G(l) if cfin[g]>=2 and co[g]<2})
    newtot[f]=[(cfin[g],g) for g in n]
print('ACUMULADO nuevos vs vivo',sum(len(v) for v in newtot.values()),{f.split('/')[-1]:len(v) for f,v in newtot.items() if v})
json.dump({'commits':res,'acumulado':newtot},open('/workspace/r24/rev-merlin-0335/rev3.json','w'),ensure_ascii=False,indent=1)
