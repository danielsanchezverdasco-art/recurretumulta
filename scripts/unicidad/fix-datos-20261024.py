# 24/10/2026 unicidad: frases de plantilla metidas en ficheros de datos (>=20 páginas).
# Regla: si no aporta nada se quita; si aporta un dato se deja solo el dato. Sin sinónimos, nada inventado.
import re,os,csv,sys
ROOT='/workspace/r24/uniq/src'
DATA=re.compile(r'lib/(comparador-|blog-posts|blog-lite|analisis-editorial/|autocaravanas/|campers/|euroncap|seguridad-|comunidades-data|buscador-coches)|/data/|/content/|\.generated\.')
CTA=r'(?:<a href=https://recurretumulta\.online/(?:#analizador)?>[^<]*</a>)'
RULES=[
 # CTA del analizador dentro de los textos: no aporta nada
 ('cta-antes-de-pagarla', re.compile(r' ?Antes de pagarla o recurrirla, '+CTA+r' y descubre si es recurrible\.'), ''),
 ('cta-te-ha-caido', re.compile(r'\*\*¿Te ha caído una multa\?\*\* '+CTA+r' con nuestra IA antes de pagarla\.'), ''),
 ('cta-antes-de-pagarla-2', re.compile(r'(?:\*\*¿[^*]{0,60}multa\?\*\* )?Antes de pagarla(?: o recurrirla)?, <a href=(?:https://recurretumulta\.online)?/#analizador>[^<]*</a> y descubre si es recurrible\.'), ''),
 ('coste-estimacion-con', re.compile(r'\b[Ee]stimación con (?=15\.000 km/año)'), ''),
 ('coste-recarga', re.compile(r'recarga doméstica (?:aprox\. )?a (0,\d+) ?(?:€|eur)/kWh'), r'\1 €/kWh (doméstica)'),
 ('coste-todo-riesgo', re.compile(r'(?:,| y|;) seguro a todo riesgo'), '; todo riesgo'),
 ('euroncap-no-probado', re.compile(r'Sin datos EuroNCAP: modelo no probado(?: por Euro NCAP)?'), 'Sin test EuroNCAP'),
 ('plegado', re.compile(r'Aprieta los tornillos del manillar y del mecanismo de plegado; comprueba que el cierre queda firme\.'), 'Tornillos de manillar y plegado.'),
 ('moto-vertical', re.compile(r'Comprueba la tensión con la moto en vertical (?:y ajusta )?según el manual(?: del propietario)?\.'), 'Tensión según el manual del propietario.'),
 ('cta-frase-analizador', re.compile(r'(?:(?<=\. )|(?<=\\n)|(?<=")|(?<=\*\* ))[^.\n"<>\\]{0,160}<a href=(?:https://recurretumulta\.online)?/(?:#analizador)?>[^<]{0,90}</a>[^.\n"<\\]{0,160}\.(?: (?=[A-Z¿¡*]))?'), lambda m: m.group(0) if re.search(r'\d',m.group(0).split('<a ')[0]) else ''),
 ('p-vacio', re.compile(r'<p>\s*</p>'), ''),
 # costes: solo los supuestos
 ('coste-elec', re.compile(r'Estimación con 15\.000 km/año,? (?:y )?recarga doméstica a 0,18 €/kWh(?: y (?:seguro a )?todo riesgo)?\.'), '15.000 km/año; 0,18 €/kWh; todo riesgo.'),
 ('coste-gas', re.compile(r'Estimación con 15\.000 km/año,? (?:y )?(gasolina|diésel|gasóleo) a (\d,\d+) €/l(?: y (?:seguro a )?(todo riesgo|seguro ampliado))?\.'), lambda m: f'15.000 km/año; {m[1]} {m[2]} €/l'+(f'; {m[3]}' if m[3] else '')+'.'),
 ('coste-orientativo', re.compile(r' ?Seguro, mantenimiento e impuesto orientativos; varían según perfil y municipio\.'), ''),
 # mantenimiento: quitar coletillas
 ('lo-que-ocurra-antes', re.compile(r' \(lo que ocurra antes(?:, según plan [^)]*)?\)| \(según plan del fabricante\)|, lo que ocurra antes'), ''),
 ('revision-cada', re.compile(r'revisión cada (\d+) años? o ([\d.]+) km'), r'\1 años / \2 km'),
]
def run(apply):
    log=[]
    for d,_,fs in os.walk(ROOT):
        for f in fs:
            p=os.path.join(d,f); rel=p[len(ROOT)+1:]
            if not f.endswith(('.ts','.json','.tsx')) or not DATA.search(rel): continue
            s=open(p,encoding='utf8').read(); o=s
            for name,rx,rep in RULES:
                def sub(m,name=name,rep=rep):
                    new=rep(m) if callable(rep) else m.expand(rep)
                    (new!=m.group(0)) and log.append((rel,name,m.group(0),new)); return new
                s=rx.sub(sub,s)
            if apply and s!=o: open(p,'w',encoding='utf8').write(s)
    return log
if __name__=='__main__':
    log=run('--apply' in sys.argv)
    w=csv.writer(open('/workspace/seo/rev24/datos/cambios.csv','w',newline='')); w.writerow(['fichero','regla','antes','despues']); w.writerows(log)
    import collections; print(len(log),collections.Counter(x[1] for x in log))
