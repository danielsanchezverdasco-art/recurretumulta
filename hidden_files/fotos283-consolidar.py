#!/usr/bin/env python3
"""Consolida fragmentos de trabajadores fotos-283-niky-wNNN en la rama fotos-283-niky.
Uso: python3 hidden_files/fotos283-consolidar.py w001 w002 ...
- Copia public/media/<fichero> de cada rama trabajadora al worktree actual.
- Anexa sus filas a docs/comunicacion-ias/listas/fotos-283-niky.csv (cabecera slug|fuente|url).
- NO hace commit ni push: eso lo hace el coordinador tras revisar el recuento.
"""
import subprocess, sys, os, csv
def run(*a, check=True):
    r = subprocess.run(a, capture_output=True, text=True)
    if check and r.returncode != 0:
        raise SystemExit(f"FALLO {' '.join(a)}: {r.stderr[:500]}")
    return r.stdout
def ls_tree(branch, path):
    out = run('git','ls-tree','-r','--name-only',f'origin/{branch}',path, check=False)
    return [l for l in out.splitlines() if l.strip()]
main_csv = 'docs/comunicacion-ias/listas/fotos-283-niky.csv'
existing = set()
if os.path.exists(main_csv):
    with open(main_csv, newline='', encoding='utf-8') as f:
        for row in csv.reader(f, delimiter='|'):
            if row: existing.add(row[0])
else:
    os.makedirs(os.path.dirname(main_csv), exist_ok=True)
    open(main_csv,'w',encoding='utf-8').write('slug|fuente|url\n')
nuevas = []
for w in sys.argv[1:]:
    branch = f'fotos-283-niky-{w}'
    run('git','fetch','origin',f'+refs/heads/{branch}:refs/remotes/origin/{branch}')
    frag = f'hidden_files/fotos283-{w}/fragment.csv'
    if not ls_tree(branch, frag):
        print(f'{w}: SIN fragment.csv en {branch}, se salta'); continue
    txt = run('git','show',f'origin/{branch}:{frag}')
    rows = list(csv.DictReader(txt.splitlines(), delimiter='|'))
    for row in rows:
        slug = (row.get('slug') or '').strip()
        if not slug or slug in existing: continue
        estado = (row.get('estado') or '').strip()
        fuente = (row.get('fuente') or '').strip()
        url = (row.get('url') or '').strip()
        notas = (row.get('notas') or '').strip()
        if estado == 'sin foto real':
            fuente_out = f"sin foto real: {notas}" if notas else "sin foto real"
            url_out = ''
        else:
            fuente_out = fuente
            url_out = url
            for fp in ls_tree(branch, 'public/media/'):
                fn = os.path.basename(fp)
                dest = os.path.join('public/media', fn)
                if os.path.exists(dest): continue
                data = subprocess.run(['git','show',f'origin/{branch}:{fp}'], capture_output=True)
                if data.returncode != 0: continue
                os.makedirs('public/media', exist_ok=True)
                open(dest,'wb').write(data.stdout)
                print(f'{w}: copiado {fn} ({len(data.stdout)} bytes)')
        with open(main_csv,'a',encoding='utf-8',newline='') as f:
            f.write(f"{slug}|{fuente_out}|{url_out}\n")
        existing.add(slug); nuevas.append(slug)
print(f"Filas nuevas anexadas: {len(nuevas)}")
for s in nuevas: print(" ", s)
