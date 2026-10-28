# rev3b: version acumulada de tools/rev3/rev3.py (mismo medidor W/G/fc). Uso: rev3b.py REPO LIVE BASE RAMA   (salida: $REV3_OUT o ./rev3new.json)
import subprocess,re,collections,sys,json
R,LIVE,B,M=sys.argv[1:5]
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
def readall(rev,files):
    p=subprocess.run(['git','cat-file','--batch'],input=''.join(f'{rev}:{f}\n' for f in files).encode(),capture_output=True,cwd=R)
    data=p.stdout;i=0;out={}
    for f in files:
        nl=data.index(b'\n',i); hdr=data[i:nl].split()
        if hdr[-1]==b'missing': out[f]=''; i=nl+1; continue
        size=int(hdr[2]); out[f]=data[nl+1:nl+1+size].decode('utf-8','replace'); i=nl+1+size+1
    return out
ok=lambda f: re.search(r'\.(ts|tsx|json)$',f) and 'generated' not in f and f.startswith('src')
allf=[f for f in sh('git','ls-tree','-r','--name-only',LIVE,'src').split() if ok(f)]
livetxt=readall(LIVE,allf)
fcount={f:fc(t) for f,t in livetxt.items()}
co=collections.Counter()
for c in fcount.values(): co.update(c)
cumf=[f for f in sh('git','diff','--name-only',B,M).split() if ok(f)]
mt=readall(M,cumf)
cfin=co.copy(); per={}
for f in cumf:
    cfin.subtract(fcount.get(f,collections.Counter())); per[f]=fc(mt[f]); cfin.update(per[f])
new={};rep_after=0;rep_before=0
for f in cumf:
    d=sh('git','diff','-U0',LIVE,M,'--',f)
    add=[l[1:] for l in d.split('\n') if l.startswith('+') and not l.startswith('+++')]
    n=sorted({g for l in add for g in G(l) if cfin[g]>=2 and co[g]<2})
    if n: new[f]=[(cfin[g],g) for g in n]
    rep_after+=sum(1 for g in set().union(*[G(l) for l in mt[f].split('\n')]) if cfin[g]>=2)
    rep_before+=sum(1 for g in set().union(*[G(l) for l in livetxt.get(f,'').split('\n')]) if co[g]>=2)
tot_live=sum(1 for g,v in co.items() if v>=2); tot_after=sum(1 for g,v in cfin.items() if v>=2)
print(M,'ficheros src cambiados vs base:',len(cumf))
print('8-gramas repetidos EN ESOS FICHEROS: vivo',rep_before,'-> rama',rep_after)
print('8-gramas repetidos TOTAL web: vivo',tot_live,'-> rama',tot_after)
json.dump({f:[g for c,g in v] for f,v in new.items()},open(__import__("os").environ.get("REV3_OUT","rev3new.json"),"w"),ensure_ascii=False)
print('ACUMULADO nuevos 8-gramas repetidos vs vivo:',sum(len(v) for v in new.values()),{f.split('/')[-1]:len(v) for f,v in new.items()})
for f,v in new.items():
    for c,g in v[:5]: print('  ',f.split('/')[-1],c,g)
