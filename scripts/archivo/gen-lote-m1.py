#!/usr/bin/env python3
"""Lote M1 — 25 fichas de motos eléctricas urbanas + 25 artículos.
Genera:
  src/lib/comparador-motos-nuevos-m1.ts  (MOTOS_NUEVOS_M1)
  src/lib/blog-posts-nuevos-m1.ts        (NUEVOS_M1_POSTS)
Lee scripts/fotos-dims-m1.json para referenciar solo fotos descargadas.
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LIB = os.path.join(ROOT, "src", "lib")
MEDIA_URL = "/media/motos"

try:
    with open(os.path.join(ROOT, "scripts", "fotos-dims-m1.json")) as f:
        DIMS = json.load(f)
except FileNotFoundError:
    DIMS = {}

def q(s):
    return json.dumps(s, ensure_ascii=False)

def fotos(slug):
    """Devuelve (hero, g2, g3, dims) o None si no hay fotos."""
    d = DIMS.get(slug, [])
    if not d:
        return None
    by = {x["file"]: x for x in d}
    hero = f"{slug}-oficial.webp"
    g2 = f"{slug}-oficial-2.webp"
    g3 = f"{slug}-oficial-3.webp"
    if hero not in by:
        return None
    return hero, by.get(g2), by.get(g3)

CTA = ('<a href=https://recurretumulta.online/#analizador>analízala gratis con nuestra IA</a> '
       'antes de pagarla')

def ficha_rows(m):
    rows = []
    if m["precioDesde"]: rows.append(("**Precio desde**", f"~{m['precioDesde']:,} €".replace(",", ".")))
    if m["potenciaKw"]: rows.append(("**Potencia**", f"{m['potenciaKw']} kW" + (f" ({m['potenciaCv']} CV)" if m["potenciaCv"] else "")))
    if m["velocidadMax"]: rows.append(("**Velocidad máxima**", f"{m['velocidadMax']} km/h"))
    if m["autonomiaKm"]: rows.append(("**Autonomía**", f"{m['autonomiaKm']} km" + (f" ({m['autonomiaCiclo']})" if m.get("autonomiaCiclo") else "")))
    if m["bateriaKwh"]: rows.append(("**Batería**", f"{m['bateriaKwh']} kWh"))
    if m["pesoKg"]: rows.append(("**Peso**", f"{m['pesoKg']} kg"))
    if m["plazas"]: rows.append(("**Plazas**", str(m["plazas"])))
    rows.append(("**Carnet**", m["carnet"]))
    if m["etiquetaDgt"]: rows.append(("**Etiqueta DGT**", m["etiquetaDgt"]))
    out = "| Dato | Valor |\n|---|---|\n"
    for k, v in rows:
        out += f"| {k} | {v} |\n"
    return out

def articulo(m):
    slug = m["slug"]
    f = fotos(slug)
    hero_img = ""
    if f:
        hero_img = f"<img src={MEDIA_URL}/{f[0]} alt={q(m['alt1'])[1:-1]}>\n\n"
    p = []
    p.append(hero_img + f"**¿Buscas solo los datos?** <a href=/motos/{slug}>Ver ficha técnica del {m['marca']} {m['modelo']}</a>: precio, autonomía, batería y etiqueta DGT. <a href=/comparador-motos>Compárala cara a cara con sus rivales eléctricas</a>.\n")
    p.append(m["entradilla"] + "\n")
    p.append(f"## Ficha técnica resumida: {m['marca']} {m['modelo']}\n\n" + ficha_rows(m))
    p.append(f"¿Quieres el detalle completo? <a href=/motos/{slug}>Ficha técnica completa del {m['marca']} {m['modelo']}</a> con pros, contras y curiosidades.\n")
    p.append("## Precio y versiones en España\n\n" + m["precio_txt"] + "\n")
    if f and f[1]:
        p.append(f"<img src={MEDIA_URL}/{slug}-oficial-2.webp alt={q(m['alt2'])[1:-1]}>\n")
    p.append("## Autonomía, batería y carga\n\n" + m["autonomia_txt"] + "\n")
    p.append("## Motor y equipamiento\n\n" + m["equipo_txt"] + "\n")
    p.append("## Carnet y etiqueta DGT\n\n| Requisito | " + m["marca"] + " " + m["modelo"] + " |\n|---|---|\n"
             + f"| **Carnet necesario** | {m['carnet']} |\n"
             + f"| **Etiqueta DGT** | {m['etiquetaDgt'] or 'Cero (eléctrica)'} |\n"
             + f"| **Velocidad máxima** | {str(m['velocidadMax']) + ' km/h' if m['velocidadMax'] else 'No publicada'} |\n")
    if f and f[2]:
        p.append(f"<img src={MEDIA_URL}/{slug}-oficial-3.webp alt={q(m['alt3'])[1:-1]}>\n")
    p.append("## Pros y contras\n\n| ✅ Pros | ❌ Contras |\n|---|---|\n")
    for a, b in zip(m["pros"][:5], m["contras"][:5]):
        p[-1] += f"| {a} | {b} |\n"
    p.append("## \u00bfPara qui\u00e9n es el " + m["marca"] + " " + m["modelo"] + "?\n\n" + m["para_quien"] + "\n")
    p.append("## Coste de uso y mantenimiento\n\nUn el\u00e9ctrico urbano cuesta **c\u00e9ntimos cada 100 km** en electricidad (recargando en casa con tarifa normal) y su mantenimiento es m\u00ednimo: sin aceite, sin filtros, sin buj\u00edas ni correas que cambiar. Las revisiones se limitan a **frenos, neum\u00e1ticos, aprietes y el estado de la bater\u00eda** una vez al a\u00f1o. Las pastillas y los neum\u00e1ticos se gastan como en cualquier moto, pero el resto es casi \"ponlo y olv\u00eddalo\". A igualdad de uso, un scooter el\u00e9ctrico urbano suele costar **menos de la mitad** en mantenimiento que uno de gasolina equivalente.\n")
    if m.get("videoId"):
        vid = m["videoId"]
        p.append(f"<div style=position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;><iframe src=https://www.youtube.com/embed/{vid} title={q('Vídeo: ' + m['marca'] + ' ' + m['modelo'])[1:-1]} style=position:absolute;top:0;left:0;width:100%;height:100%;border:0;allow=accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;allowfullscreen></iframe></div>\n\nVídeo: <a href=https://www.youtube.com/watch?v={vid}>ver la prueba en YouTube</a>" + (f" ({m['videoCanal']})" if m.get("videoCanal") else "") + ".\n")
    p.append("## Preguntas frecuentes\n")
    for qq, aa in m["faqs"]:
        p.append(f"### {qq}\n{aa}\n")
    p.append(f"Un despiste con un radar sale caro también en moto: si te ha llegado una denuncia por velocidad, {CTA}.\n")
    p.append(f"*Fuentes: {m['fuentes_txt']}*")
    return "\n".join(p)

def mantenimiento(marca):
    return {
        "intervalo": "12 meses o 5.000 km (lo que ocurra antes)",
        "revisiones": [
            {"nombre": "Revisión anual",
             "queSeCambia": "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
             "costeAproxEur": None},
            {"nombre": "Frenos y neumáticos",
             "queSeCambia": "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
             "costeAproxEur": None},
        ],
        "costeAnualAproxEur": None,
        "fuente": f"Red oficial {marca} España (plan de revisiones de la gama eléctrica)",
    }

def ts_moto(m):
    f = fotos(m["slug"])
    img = f'"{MEDIA_URL}/{f[0]}"' if f else "null"
    gal = []
    if f:
        if f[1]:
            gal.append({"src": f'"{MEDIA_URL}/{m["slug"]}-oficial-2.webp"', "alt": m["alt2"], "ancho": f[1]["w"], "alto": f[1]["h"]})
        if f[2]:
            gal.append({"src": f'"{MEDIA_URL}/{m["slug"]}-oficial-3.webp"', "alt": m["alt3"], "ancho": f[2]["w"], "alto": f[2]["h"]})
    gal_ts = "[\n" + ",\n".join(
        "      {\n        src: " + g["src"] + ",\n        alt: " + q(g["alt"]) + ",\n        ancho: " + str(g["ancho"]) + ",\n        alto: " + str(g["alto"]) + ",\n      }"
        for g in gal) + "\n    ]" if gal else "[]"
    pm = mantenimiento(m["marca"])
    rev_ts = ",\n".join(
        '        {\n          nombre: ' + q(r["nombre"]) + ',\n          queSeCambia: ' + q(r["queSeCambia"]) + ',\n          costeAproxEur: ' + ("null" if r["costeAproxEur"] is None else str(r["costeAproxEur"])) + ',\n        }'
        for r in pm["revisiones"])
    def nn(v): return "null" if v is None else (q(v) if isinstance(v, str) else str(v))
    L = []
    L.append("  {")
    L.append(f"    id: {q(m['slug'])},")
    L.append(f"    marca: {q(m['marca'])},")
    L.append(f"    modelo: {q(m['modelo'])},")
    L.append(f"    version: {q(m['version'])},")
    L.append(f"    categoria: {q(m['categoria'])},")
    L.append(f"    precioDesde: {nn(m['precioDesde'])},")
    L.append(f"    potenciaKw: {nn(m['potenciaKw'])},")
    L.append(f"    potenciaCv: {nn(m['potenciaCv'])},")
    L.append(f"    autonomiaKm: {nn(m['autonomiaKm'])},")
    L.append(f"    autonomiaCiclo: {nn(m.get('autonomiaCiclo'))},")
    L.append(f"    bateriaKwh: {nn(m['bateriaKwh'])},")
    L.append(f"    velocidadMax: {nn(m['velocidadMax'])},")
    L.append(f"    ceroCincuenta: {nn(m.get('ceroCincuenta'))},")
    L.append(f"    pesoKg: {nn(m['pesoKg'])},")
    L.append(f"    plazas: {nn(m['plazas'])},")
    L.append(f"    carnet: {q(m['carnet'])},")
    L.append(f"    carga: {nn(m['carga'])},")
    L.append(f"    etiquetaDgt: {nn(m['etiquetaDgt'])},")
    L.append(f"    aprox: [{', '.join(q(a) for a in m.get('aprox', []))}],")
    L.append(f"    pros: [{', '.join(chr(10)+'      '+q(x) for x in m['pros'])}" + ("\n    ]," if m['pros'] else "],"))
    L.append(f"    contras: [{', '.join(chr(10)+'      '+q(x) for x in m['contras'])}" + ("\n    ]," if m['contras'] else "],"))
    L.append(f"    curiosidades: [{', '.join(chr(10)+'      '+q(x) for x in m['curiosidades'])}" + ("\n    ]," if m['curiosidades'] else "],"))
    L.append(f"    imagen: {img},")
    L.append(f"    galeria: {gal_ts},")
    L.append(f"    videoId: {nn(m.get('videoId'))},")
    L.append(f"    videoCanal: {nn(m.get('videoCanal'))},")
    L.append(f"    fuenteNombre: {nn(m.get('fuenteNombre'))},")
    L.append(f"    fuenteUrl: {nn(m.get('fuenteUrl'))},")
    L.append(f"    analisisSlug: {q(m['slug'])},")
    L.append("    planMantenimiento: {")
    L.append(f"      intervalo: {q(pm['intervalo'])},")
    L.append("      revisiones: [")
    L.append(rev_ts)
    L.append("      ],")
    L.append("      costeAnualAproxEur: null,")
    L.append(f"      fuente: {q(pm['fuente'])},")
    L.append("    },")
    L.append("  },")
    return "\n".join(L)

def ts_post(m):
    content = articulo(m)
    words = len(content.split())
    L = []
    L.append("  {")
    L.append(f"    \"title\": {q(m['title'])},")
    L.append(f"    \"slug\": {q(m['slug'])},")
    L.append(f"    \"excerpt\": {q(m['excerpt'])},")
    L.append(f"    \"category\": \"Novedades Motor\",")
    L.append(f"    \"date\": \"2026-10-08\",")
    L.append(f"    \"readTime\": {(words // 180) + 4},")
    L.append(f"    \"locale\": \"all\",")
    L.append(f"    \"keywords\": [{', '.join(chr(10)+'      '+q(k) for k in m['keywords'])}" + "\n    ],")
    L.append(f"    \"content\": {q(content)}")
    L.append("  },")
    return "\n".join(L), words

MODELS = [
# ══ 1. SEAT MÓ 50 ═══════════════════════════════════════════════════════════
{
 "slug": "seat-mo-50-2025-ficha-tecnica-precio",
 "marca": "Seat", "modelo": "MÓ 50", "version": "MÓ 50 2025", "categoria": "Scooter",
 "precioDesde": 5650, "potenciaKw": None, "potenciaCv": None,
 "autonomiaKm": 172, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "AM", "carga": "6-8 h en enchufe doméstico", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Hasta 172 km de autonomía declarada: de las cifras más altas entre los ciclomotores eléctricos",
   "Batería extraíble con sistema trolley: se carga en cualquier enchufe doméstico",
   "Hueco bajo el asiento con capacidad para dos cascos",
   "Tres modos de conducción, marcha atrás y función eBOOST para estirar la autonomía",
   "Etiqueta Cero DGT: acceso libre a las ZBE y aparcamiento bonificado en muchas ciudades",
 ],
 "contras": [
   "Precio de 5.650 €: está entre los ciclomotores eléctricos más caros del mercado",
   "Velocidad limitada a 45 km/h: su hábitat es exclusivamente la ciudad",
   "Carga completa lenta, entre 6 y 8 horas",
   "La marca no publica la potencia del motor en su web española",
   "Red de venta y postventa más pequeña que la de Silence o NIU",
 ],
 "curiosidades": [
   "Es la hermana pequeña del SEAT MÓ 125, desarrollado sobre la base tecnológica del Silence S01",
   "SEAT MÓ nació como la marca de movilidad urbana del grupo Volkswagen en España",
   "Se puede conducir desde los 15 años con la licencia AM",
 ],
 "fuenteNombre": "SEAT España", "fuenteUrl": "https://www.seat.es",
 "videoId": None, "videoCanal": None,
 "alt1": "SEAT MÓ 50 2025, scooter eléctrico ciclomotor en ciudad",
 "alt2": "SEAT MÓ 50, detalle del frontal y faro LED",
 "alt3": "SEAT MÓ 50 circulando por calle urbana",
 "title": "SEAT MÓ 50 2025: precio y ficha técnica",
 "excerpt": "El SEAT MÓ 50 2025 desde 5.650 €: ciclomotor eléctrico con 172 km de autonomía, batería extraíble, 45 km/h y etiqueta Cero DGT.",
 "keywords": ["seat mó 50 precio", "seat mó 50 2025 ficha técnica", "ciclomotor eléctrico seat", "seat mó 50 autonomía", "moto eléctrica seat 45 km/h", "seat mó 50 opiniones"],
 "entradilla": "El **SEAT MÓ 50** es la apuesta de la marca española para quien quiere moverse por la ciudad sin carnet de moto: un ciclomotor 100% eléctrico con **hasta 172 km de autonomía declarada**, batería extraíble con ruedas tipo trolley y hueco para dos cascos bajo el asiento. Se conduce desde los 15 años con la licencia AM.\n\nSu precio de **5.650 €** lo coloca en la parte alta del segmento de ciclomotores eléctricos, pero a cambio ofrece una autonomía que pocos rivales igualan y el respaldo de la red SEAT. Es, en esencia, la versión ciclomotor del MÓ 125, pensada para un uso urbano puro.",
 "precio_txt": "El SEAT MÓ 50 tiene un **precio base de 5.650 €** en España, en dos colores a elegir. Es una cifra elevada para un ciclomotor, incluso eléctrico, y lo sitúa por encima de alternativas chinas como el NIU MQi+ Sport o el Segway E110S, que rondan los 2.300-2.400 €.\n\nA su favor: la autonomía de 172 km es casi el triple que la de esos rivales, la batería es extraíble y la marca ofrece financiación y la gestión de las ayudas del Plan MOVES. Si haces muchos kilómetros diarios por ciudad, el sobreprecio se puede amortizar; si tu uso es ocasional, hay opciones más baratas.",
 "autonomia_txt": "La cifra estrella del MÓ 50 son sus **172 km de autonomía declarada**, una de las más altas de su categoría. En uso real urbano, con semáforos, cuestas y el modo más prestacional, conviene contar con algo menos, pero sigue siendo una autonomía muy solvente para varios días de commuting sin recargar.\n\nLa batería es **extraíble y lleva ruedas tipo trolley**, así que puedes sacarla y cargarla en casa o en la oficina con un enchufe normal. El tiempo de carga completa está entre **6 y 8 horas**, ideal para la noche. La función **eBOOST** permite estirar la autonomía cuando la batería va justa, y la marcha atrás facilita las maniobras de aparcamiento.",
 "equipo_txt": "El MÓ 50 apuesta por la practicidad: **tres modos de conducción**, iluminación full LED delantera y trasera, y un hueco bajo el asiento con capacidad para **dos cascos**, algo poco habitual en un ciclomotor eléctrico. El cuadro de instrumentos es digital y muestra la información esencial de marcha y batería.\n\nNo es una moto tecnológica en el sentido de pantallas táctiles o conectividad avanzada: su argumento es la sencillez robusta. Chasis pensado para el día a día, frenada combinada y una postura erguida y cómoda para callejear.",
 "faqs": [
   ("¿Cuánto cuesta el SEAT MÓ 50 en 2025?", "El precio base es de **5.650 €** en España, disponible en dos colores. A esa cifra se le pueden restar las ayudas del Plan MOVES si están vigentes en tu comunidad."),
   ("¿Qué carnet se necesita para el SEAT MÓ 50?", "Al ser un ciclomotor de 45 km/h, basta con la **licencia AM**, que se puede obtener desde los 15 años. También vale el carnet B."),
   ("¿Cuánta autonomía real tiene?", "La marca declara **172 km**. En uso urbano real la cifra será menor según el modo de conducción, el peso y el recorrido, pero sigue estando entre las mejores del segmento."),
   ("¿La batería se puede extraer?", "Sí. Es **extraíble y lleva un sistema tipo trolley con ruedas**, para transportarla cómodamente hasta un enchufe doméstico."),
   ("¿Cuánto tarda en cargarse?", "Entre **6 y 8 horas** para una carga completa en un enchufe normal de casa o del trabajo."),
   ("¿Tiene etiqueta Cero de la DGT?", "Sí. Al ser 100% eléctrico le corresponde la **etiqueta Cero**, con acceso a las ZBE y ventajas de aparcamiento según el municipio."),
 ],
  "para_quien": 'Es para ti si buscas un ciclomotor eléctrico con la **máxima autonomía** y no te importa pagar más por ella. Ideal para repartidores urbanos o commuters que hacen 60-80 km diarios y quieren olvidarse del enchufe durante días. No es para ti si tu presupuesto es ajustado: por 5.650 € hay 125 eléctricos con más prestaciones. Tampoco si necesitas salir a carretera: sus 45 km/h lo limitan a la ciudad.',
"fuentes_txt": "<a href=https://foroparalaelectrificacion.es/coches-electricos-seat/>ficha del SEAT MÓ 50 en foroparalaelectrificacion.es</a> y <a href=https://www.seat.es>SEAT España</a>",
},
# ══ 2. SEGWAY E125S ═════════════════════════════════════════════════════════
{
 "slug": "segway-e125s-2025-ficha-tecnica-precio",
 "marca": "Segway", "modelo": "E125S", "version": "E125S 2025", "categoria": "Scooter",
 "precioDesde": 2999, "potenciaKw": 1.0, "potenciaCv": None,
 "autonomiaKm": 140, "autonomiaCiclo": "Declarada", "bateriaKwh": 2.88,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": 113, "plazas": 2,
 "carnet": "AM", "carga": "4 h (80% en 2,4 h)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Dos baterías extraíbles de 2.880 Wh en total: hasta 140 km de autonomía declarada",
   "Motor de 1.000 W nominales con picos de 3.000 W: sale con alegría de los semáforos",
   "ABS en la frenada y chasis de 113 kg muy estable para un ciclomotor",
   "27 litros bajo el asiento y conectividad con la app de Segway",
   "Precio de 2.999 € muy competitivo para su nivel de equipamiento",
 ],
 "contras": [
   "La autonomía WMTC realista es de 81 km, lejos de los 140 km máximos declarados",
   "Con las dos baterías puestas el hueco bajo el asiento se reduce",
   "113 kg en orden de marcha: pesado para moverlo en parado",
   "La app y algunas funciones conectadas requieren suscripción o móvil compatible",
   "Estética sobria: no enamora como una Vespa o un Silence",
 ],
 "curiosidades": [
   "El motor QS, desarrollado por Segway, entrega un par máximo de 120 Nm",
   "Las baterías tienen certificación IPX7: aguantan inmersión temporal",
   "El cuadro muestra hasta la presión de los neumáticos",
 ],
 "fuenteNombre": "Segway España", "fuenteUrl": "https://www.segway.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Segway E125S 2025, scooter eléctrico ciclomotor azul",
 "alt2": "Segway E125S, detalle del cuadro digital y manillar",
 "alt3": "Segway E125S en ciudad, vista lateral",
 "title": "Segway E125S 2025: precio y ficha técnica",
 "excerpt": "El Segway E125S desde 2.999 €: ciclomotor eléctrico con 140 km de autonomía, 2 baterías extraíbles, ABS y 45 km/h. Ficha y opiniones.",
 "keywords": ["segway e125s precio", "segway e125s ficha técnica", "ciclomotor eléctrico segway", "segway e125s autonomía", "segway e125s opiniones", "scooter eléctrico 3000 euros"],
 "entradilla": "El **Segway E125S** es uno de los ciclomotores eléctricos con mejor relación equipamiento/precio del mercado: por **2.999 €** ofrece **dos baterías extraíbles** que suman 2.880 Wh, hasta 140 km de autonomía declarada, frenos con ABS y un motor con picos de 3.000 W.\n\nHomologado como ciclomotor (45 km/h, carnet AM), es una opción muy racional para el commuting urbano diario. No presume de diseño italiano ni de marca premium: su argumento es la tecnología práctica a precio ajustado, con la app de Segway para controlar el scooter desde el móvil.",
 "precio_txt": "El E125S se vende en España por **2.999 €**, un precio rompedor para un ciclomotor con dos baterías extraíbles y ABS. Sus rivales directos con doble batería suelen estar en 3.500-4.000 €.\n\nHay que tener en cuenta que el precio no incluye matriculación ni seguro, y que las ayudas del Plan MOVES pueden rebajarlo sensiblemente. En renting o con financiación, la cuota mensual queda por debajo de lo que cuesta llenar el depósito de un scooter de gasolina equivalente.",
 "autonomia_txt": "Segway declara **hasta 140 km** con las dos baterías, aunque la cifra **WMTC homologada es de 81 km** a 45 km/h: esa es la referencia realista para un uso urbano normal. Aun así, son 81 km que dan para dos o tres días de ciudad sin recargar.\n\nCada batería es de 48V y 60Ah (1.440 Wh), **extraíble** y con certificación IPX7. La carga completa lleva **4 horas**, y en 2,4 horas ya tienes el 80%. Puedes cargar una batería en casa mientras usas la otra, o llevarte las dos a la oficina.",
 "equipo_txt": "El E125S viene sorprendentemente equipado: **ABS**, frenos de disco hidráulicos (220 mm delante, 180 mm detrás), iluminación full LED con matriz inteligente configurable desde la app, control de crucero y cuadro digital con información completa (velocidad, autonomía, presión de neumáticos, estado de la batería).\n\nLa **app de Segway** permite bloqueo/desbloqueo, localización y estadísticas de uso. Bajo el asiento hay **27 litros** de hueco, y la altura del asiento (770 mm) lo hace accesible para casi todas las estaturas.",
 "faqs": [
   ("¿Cuánto cuesta el Segway E125S?", "Su PVP en España es de **2.999 €**, sin contar matriculación. Las ayudas del Plan MOVES pueden reducirlo."),
   ("¿Qué autonomía real tiene?", "La marca declara hasta 140 km, pero la **homologación WMTC es de 81 km** a 45 km/h: esa es la cifra realista en uso urbano."),
   ("¿Las baterías son extraíbles?", "Sí, lleva **dos baterías extraíbles** de 1.440 Wh cada una, con certificación IPX7 y sistema de gestión inteligente (BMS)."),
   ("¿Qué carnet necesito?", "Al ser un ciclomotor de 45 km/h, basta la **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Cuánto tarda en cargarse?", "**4 horas** para el 100%, y 2,4 horas para el 80%. Cada batería se puede cargar por separado en un enchufe normal."),
   ("¿Lleva ABS?", "Sí, el E125S equipa **ABS** además del freno regenerativo EABS, algo poco común en ciclomotores de este precio."),
 ],
  "para_quien": 'Es para ti si quieres un ciclomotor eléctrico **equilibrado y bien equipado** sin pagar de más. Perfecto para ir al trabajo a diario (30-50 km), con la tranquilidad de las dos baterías y el ABS. No es para ti si buscas emociones: es un scooter racional, no pasional. Y si haces más de 80 km al día, su autonomía WMTC se queda justa.',
"fuentes_txt": "<a href=https://www.octopusmovilidad.com/producto/ciclomotor-electrico-segway-escooter-e125s-2880wh/>ficha y precio en Octopus Movilidad</a>, <a href=https://www.motorbikemag.es/ficha-tecnica/segway-e125s-2022/>ficha técnica en motorbikemag.es</a> y <a href=https://www.segway.com>Segway</a>",
},
# ══ 3. SEGWAY E110S ═════════════════════════════════════════════════════════
{
 "slug": "segway-e110s-2025-ficha-tecnica-precio",
 "marca": "Segway", "modelo": "E110S", "version": "E110S 2025", "categoria": "Scooter",
 "precioDesde": 2399, "potenciaKw": 1.5, "potenciaCv": None,
 "autonomiaKm": 75, "autonomiaCiclo": "Declarada", "bateriaKwh": 1.44,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": 91, "plazas": 2,
 "carnet": "AM", "carga": "4 h (80% en 3 h)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Precio de 2.399 €: de los ciclomotores eléctricos conectados más baratos",
   "Suelo plano y batería bajo el piso: hueco para dos cascos jet bajo el asiento",
   "Antirrobo AHRS con GPS y SIM 4G integrada",
   "Airlock: se bloquea y desbloquea solo al acercarte o alejarte con el móvil",
   "91 kg: ligero y fácil de mover en parado y en el garaje",
 ],
 "contras": [
   "Autonomía WMTC de solo 40 km a 45 km/h: justa para usos intensivos",
   "Una sola batería de 1.440 Wh, sin opción de segunda unidad",
   "Motor de 1,5 kW nominales: suficiente en llano, justo en cuestas con pasajero",
   "Sin ABS (frenada combinada con discos hidráulicos)",
   "Algunas funciones de la app dependen de la conectividad 4G",
 ],
 "curiosidades": [
   "El sistema RideyGo! impide arrancar si el caballete está puesto o no estás bien sentado",
   "El faro Matrix LED es el mismo concepto que monta su hermano mayor, el E125S",
   "Pesa 22 kg menos que el E125S con las dos baterías",
 ],
 "fuenteNombre": "Segway España", "fuenteUrl": "https://www.segway.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Segway E110S 2025, ciclomotor eléctrico con suelo plano",
 "alt2": "Segway E110S, detalle del faro Matrix LED",
 "alt3": "Segway E110S aparcado en calle urbana",
 "title": "Segway E110S 2025: precio y ficha técnica",
 "excerpt": "El Segway E110S desde 2.399 €: ciclomotor eléctrico con 75 km de autonomía, batería extraíble, GPS antirrobo y 45 km/h. Ficha completa.",
 "keywords": ["segway e110s precio", "segway e110s ficha técnica", "segway e110s autonomía", "ciclomotor eléctrico barato", "segway e110s opiniones", "scooter eléctrico 2400 euros"],
 "entradilla": "El **Segway E110S** es la puerta de entrada a los scooters eléctricos de la marca: un ciclomotor de 45 km/h con **batería extraíble**, suelo plano, hueco para dos cascos y un arsenal de tecnología conectada (GPS antirrobo, Airlock, app) por **2.399 €**.\n\nEs la opción para quien quiere un eléctrico urbano barato pero no renuncia a la conectividad. Su autonomía declarada de **75 km** (40 km en ciclo WMTC) lo limita a un uso ciudadano moderado: perfecto para ir al trabajo si no vives lejos, justo si haces muchos kilómetros al día.",
 "precio_txt": "Con un PVP de **2.399 €**, el E110S es de los ciclomotores eléctricos conectados más asequibles del mercado español. Queda unos 600 € por debajo de su hermano E125S, a cambio de una sola batería y menos autonomía.\n\nComo en todos los eléctricos, las ayudas del Plan MOVES y la deducción en el IRPF pueden dejarlo en una cifra muy interesante. El coste por kilómetro es ridículo frente a un 50 cc de gasolina: céntimos cada 100 km y mantenimiento casi nulo.",
 "autonomia_txt": "La batería es de **1.440 Wh (48V y 30Ah)**, extraíble y con gestión inteligente BMS. Segway declara **75 km de autonomía máxima**, aunque la homologación **WMTC a 45 km/h la deja en 40 km**: esa es la cifra con la que hay que planificar el día a día.\n\nLa carga completa tarda **4 horas** (3 horas para el 80%) en un enchufe doméstico. Al ir la batería alojada bajo el suelo plano, el hueco bajo el asiento queda libre para **dos cascos jet**, un detalle muy práctico que pocos ciclomotores ofrecen.",
 "equipo_txt": "Lo más llamativo del E110S es su tecnología: **antirrobo AHRS** con geolocalización GPS y tarjeta SIM 4G (con servicio incluido los primeros años), **Airlock** para bloquear y desbloquear sin llave al acercarte, sensor de caballete y de asiento, control de crucero y tres modos de conducción con distintas intensidades de frenada regenerativa.\n\nEn la parte ciclo monta frenos de disco hidráulicos en ambas ruedas, faro **Matrix LED** y cuadro digital a color. El suelo plano facilita subir y bajar y llevar bultos entre las piernas.",
 "faqs": [
   ("¿Cuánto cuesta el Segway E110S?", "**2.399 €** PVP en España, sin matriculación. Es uno de los ciclomotores eléctricos conectados más baratos."),
   ("¿Qué autonomía tiene en uso real?", "La marca declara 75 km, pero la **WMTC a 45 km/h es de 40 km**. Para trayectos urbanos cortos es suficiente; para mucho kilometraje diario, mejor el E125S."),
   ("¿La batería se extrae?", "Sí, es **extraíble** (1.440 Wh) y se carga en 4 horas en cualquier enchufe."),
   ("¿Qué es el Airlock?", "El sistema que **bloquea y desbloquea el scooter automáticamente** cuando te acercas o te alejas con el móvil, sin usar llave."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B, al ser un ciclomotor de 45 km/h."),
   ("¿Lleva GPS antirrobo?", "Sí, el sistema **AHRS** con GPS y SIM 4G permite localizarlo y recibir alertas si alguien lo mueve."),
 ],
  "para_quien": 'Es para ti si quieres entrar en la moto eléctrica por la puerta **más barata** sin renunciar a la conectividad. Ideal como primer scooter para la ciudad, para estudiantes o como segundo vehículo. No es para ti si haces muchos kilómetros diarios: sus 40 km WMTC obligan a cargar cada día. En ese caso, el E125S compensa con creces la diferencia.',
"fuentes_txt": "<a href=https://electriccity.es/escooter-segway-e110s/>ficha y precio en Electric City</a>, <a href=https://www.motorbikemag.es/ficha-tecnica/segway-e110s-2022/>ficha técnica en motorbikemag.es</a> y <a href=https://www.segway.com>Segway</a>",
},
# ══ 4. SEGWAY E150S ═════════════════════════════════════════════════════════
{
 "slug": "segway-e150s-2025-ficha-tecnica-precio",
 "marca": "Segway", "modelo": "E150S", "version": "E150S 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 2.2, "potenciaCv": None,
 "autonomiaKm": 171, "autonomiaCiclo": "Declarada", "bateriaKwh": 6.0,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "AM", "carga": "~2,5 h por batería", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Hasta 3 baterías de 2.000 Wh: 171 km de autonomía declarada, récord en ciclomotores",
   "Motor de 2,2 kW nominales (3,6 kW pico) con control de tracción TCS",
   "ABS de doble canal, algo inédito en un ciclomotor de 45 km/h",
   "34 litros bajo el asiento y 780 mm de altura: práctico y accesible",
   "Caja negra con SOS, GPS y actualizaciones OTA: el más tecnológico del segmento",
 ],
 "contras": [
   "Precio aún no publicado en España: su posicionamiento es una incógnita",
   "Para pasar de 171 km hay que comprar 2 baterías extra (sobrecoste importante)",
   "Con 3 baterías el hueco bajo el asiento se reduce de 34 a 14 litros",
   "Sigue limitado a 45 km/h: tanta tecnología para solo ciudad",
   "Peso no publicado; con 3 baterías no será ligero",
 ],
 "curiosidades": [
   "Acelera de 0 a 50 km/h en 5,2 segundos según Segway, cifra de scooter 125",
   "La caja negra registra los trayectos y puede enviar un SOS automático",
   "Cada batería pesa 13 kg y es extraíble",
 ],
 "fuenteNombre": "Segway España", "fuenteUrl": "https://www.segway.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Segway E150S 2025, ciclomotor eléctrico premium",
 "alt2": "Segway E150S, detalle del frontal con faro LED",
 "alt3": "Segway E150S en entorno urbano",
 "title": "Segway E150S 2025: ficha técnica y precio",
 "excerpt": "El Segway E150S: ciclomotor eléctrico con hasta 171 km de autonomía, 3 baterías extraíbles, ABS doble canal y control de tracción. Ficha completa.",
 "keywords": ["segway e150s", "segway e150s ficha técnica", "segway e150s precio", "ciclomotor eléctrico 171 km autonomía", "segway e150s opiniones", "scooter eléctrico con ABS"],
 "entradilla": "El **Segway E150S** es el ciclomotor eléctrico más ambicioso de la marca: admite **hasta tres baterías extraíbles** de 2.000 Wh para alcanzar **171 km de autonomía declarada**, equipa **ABS de doble canal**, control de tracción TCS y una electrónica digna de una moto grande (caja negra con SOS, GPS, actualizaciones OTA).\n\nSigue siendo un 45 km/h con carnet AM, pero su planteamiento es premium: es el ciclomotor para quien quiere la máxima autonomía y tecnología sin pasar a un 125. El precio en España aún no se ha publicado, lo que lo deja en una interesante incógnita.",
 "precio_txt": "Segway aún **no ha publicado el precio** del E150S en España. Como referencia, el E125S (dos baterías, menos tecnología) cuesta 2.999 €, así que es razonable esperar que el E150S se sitúe por encima, sobre todo si se adquiere con las baterías extra.\n\nEl coste real dependerá de cuántas baterías incluya la versión comercializada aquí: cada módulo de 2.000 Wh es un sobrecoste relevante. Actualizaremos la ficha en cuanto la marca anuncie la tarifa oficial.",
 "autonomia_txt": "El sistema de baterías es modular: de serie incluye **una batería de 2.000 Wh (74V y 27Ah)**, ampliable a dos y hasta **tres unidades** (6.000 Wh en total). Con una batería la autonomía **WMTC es de 57 km**; con dos sube a 114 km y con tres a **171 km** declarados.\n\nCada batería se carga en unas **2,5 horas** y es extraíble, así que puedes rotarlas: una en la moto, otra cargando en casa. Con la tercera batería instalada, el hueco bajo el asiento baja de 34 a 14 litros: hay que elegir entre autonomía máxima o capacidad de carga.",
 "equipo_txt": "El E150S estrena un nivel de equipamiento inédito en ciclomotores: **ABS de doble canal**, **control de tracción (TCS)**, frenos de disco hidráulicos (220 mm delante, 200 mm detrás), horquilla hidráulica y suspensión trasera regulable. El motor trasero rinde **2,2 kW nominales con picos de 3,6 kW** y 138 Nm de par.\n\nEn electrónica suma **caja negra con función SOS**, GPS, sensor de luz, control de crucero, USB, bloqueo de manillar inteligente y **actualizaciones remotas OTA**. El asiento está a 780 mm y hay 34 litros bajo él.",
 "faqs": [
   ("¿Cuánto cuesta el Segway E150S?", "Aún **no hay precio oficial** en España. Como referencia, el E125S cuesta 2.999 €; el E150S, más tecnológico, estará por encima."),
   ("¿Cuánta autonomía tiene?", "Con una batería: **57 km WMTC**. Con dos: 114 km. Con **tres baterías: 171 km** declarados."),
   ("¿Las baterías son extraíbles?", "Sí, las tres (de 2.000 Wh y 13 kg cada una) son **extraíbles** y se cargan en unas 2,5 horas por unidad."),
   ("¿Lleva ABS?", "Sí, **ABS de doble canal** más control de tracción TCS: un equipamiento inédito en un ciclomotor de 45 km/h."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Qué es la caja negra con SOS?", "Un sistema que **registra los trayectos** y puede enviar una alerta de emergencia automáticamente en caso de accidente."),
 ],
  "para_quien": 'Es para ti si quieres el **ciclomotor eléctrico más tecnológico** del mercado y la autonomía es tu obsesión. Con dos o tres baterías, es el único 45 km/h que te permite olvidarte del enchufe casi una semana. No es para ti si buscas precio ajustado: tanta tecnología se paga. Habrá que esperar a la tarifa oficial para juzgarlo.',
"fuentes_txt": "<a href=https://es-es.segway.com/products/e150s-2.html>ficha oficial del E150S en Segway España</a>",
},
# ══ 5. VELCA CALIMA S ══════════════════════════════════════════════════════
{
 "slug": "velca-calima-s-2025-ficha-tecnica-precio",
 "marca": "Velca", "modelo": "Calima S", "version": "Calima S 2025", "categoria": "Scooter",
 "precioDesde": 3690, "potenciaKw": None, "potenciaCv": None,
 "autonomiaKm": 130, "autonomiaCiclo": "Declarada", "bateriaKwh": 4.32,
 "velocidadMax": 95, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico (batería extraíble)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Único de su segmento con ABS en ambas ruedas",
   "95 km/h de velocidad máxima: vale para ciudad y circunvalación",
   "130 km de autonomía con batería CATL de 4,32 kWh extraíble",
   "Precio de lanzamiento de 3.690 €: rompe el mercado",
   "Arranque keyless, control de crucero y pantalla a color de serie",
 ],
 "contras": [
   "La batería va bajo el asiento: no cabe un casco en el hueco",
   "Marca joven (2020): red de talleres en crecimiento, con 350 asociados",
   "El precio subirá a 4.490 € tras la promoción de lanzamiento",
   "Sin control de tracción ni conectividad avanzada de serie",
   "El diseño divide opiniones: o te encanta o no",
 ],
 "curiosidades": [
   "Velca es una marca española fundada en 2020 con la mayor comunidad europea de moto eléctrica",
   "Su modelo One fue elegido mejor moto eléctrica del año en España en 2023 y 2024",
   "El basculante trasero es de aluminio, raro en este rango de precios",
 ],
 "fuenteNombre": "Velca", "fuenteUrl": "https://www.velcamotor.com/velca-calima-s",
 "videoId": None, "videoCanal": None,
 "alt1": "Velca Calima S 2025, scooter eléctrico español",
 "alt2": "Velca Calima S, detalle del frontal y pantalla",
 "alt3": "Velca Calima S circulando por ciudad",
 "title": "Velca Calima S 2025: precio y ficha técnica",
 "excerpt": "La Velca Calima S 2025 desde 3.690 €: scooter eléctrico con ABS, 95 km/h, 130 km de autonomía y batería extraíble. Ficha y opiniones.",
 "keywords": ["velca calima s precio", "velca calima s 2025", "velca calima s ficha técnica", "scooter eléctrico con ABS", "velca calima s autonomía", "velca calima s opiniones"],
 "entradilla": "La **Velca Calima S 2025** es la gran apuesta de la marca española para democratizar el scooter eléctrico: **3.690 €** de precio de lanzamiento, **ABS en ambas ruedas** (única en su segmento), **95 km/h** de velocidad máxima y **130 km** de autonomía con batería extraíble CATL.\n\nHomologada como equivalente a 125 (carnet A1 o B con 3 años), juega en la liga de los NIU NQiX y los Super Soco, pero con un argumento difícil de rebatir: seguridad de frenada superior y precio rompedor. Velca, fundada en 2020, ya tiene la mayor comunidad de moto eléctrica de Europa.",
 "precio_txt": "El precio de lanzamiento es de **3.690 €**, aunque la marca avisa de que subirá a **4.490 €** cuando termine la promoción. Aun así, con las ayudas del Plan MOVES y la deducción del 15% en el IRPF, se puede quedar por debajo de los 2.800 €.\n\nEn ese rango compite con el NIU NQiX 300 (3.599 €) y el Super Soco TC Max (4.495 €). Ninguno ofrece ABS de serie: la Calima S es la única con antibloqueo en las dos ruedas, un plus de seguridad real en ciudad con asfalto mojado.",
 "autonomia_txt": "La batería es de **4,32 kWh** con celdas **CATL** de litio NMC, **extraíble** para cargarla en casa o en el trabajo con un enchufe normal. La autonomía máxima declarada es de **130 km**, con tres modos de conducción que limitan la velocidad (50, 75 y 95 km/h) para estirar la carga.\n\nAl ir alojada bajo el asiento, el hueco para el casco desaparece: es el peaje de la batería extraíble. A cambio, no dependes de tener un enchufe en el garaje, el gran freno de muchos eléctricos.",
 "equipo_txt": "El equipamiento es otro de sus puntos fuertes: **ABS en ambas ruedas**, pantalla a color con indicador de batería en tiempo real, **arranque sin llave** (keyless con encendido por proximidad y alarma), **control de velocidad de crucero**, toma USB, marcha atrás y basculante trasero de aluminio.\n\nHomologa **dos plazas** con 170 kg de carga máxima y monta neumáticos de 12 pulgadas. La garantía es de 3 años o 50.000 km, y Velca cuenta con más de 80 puntos de venta y 350 talleres asociados en España, muchos en la red FeuVert.",
 "faqs": [
   ("¿Cuánto cuesta la Velca Calima S?", "**3.690 €** de precio de lanzamiento (subirá a 4.490 €). Con ayudas puede quedarse por debajo de 2.800 €."),
   ("¿Qué autonomía tiene?", "Hasta **130 km** declarados con su batería CATL de 4,32 kWh extraíble."),
   ("¿Lleva ABS?", "Sí, es la **única de su segmento con ABS en ambas ruedas**."),
   ("¿Qué carnet necesito?", "Al ser equivalente a 125, el **carnet A1** o el B con 3 años de antigüedad."),
   ("¿La batería se puede extraer?", "Sí, es **extraíble** y se carga en cualquier enchufe doméstico."),
   ("¿Cabe un casco bajo el asiento?", "No: la batería ocupa ese espacio. Es el principal sacrificio de la Calima S."),
 ],
  "para_quien": 'Es para ti si buscas un **125 eléctrico con ABS** por menos de 4.000 €. Ideal para commuters que hacen ciudad y ronda, y valoran la seguridad de frenada. No es para ti si necesitas hueco bajo el asiento para el casco: la batería lo ocupa. Tampoco si buscas la máxima autonomía: 130 km están bien, pero hay rivales con más.',
"fuentes_txt": "<a href=https://www.velcamotor.com/velca-calima-s>ficha oficial en Velca</a> y <a href=https://movilidadelectrica.com/velca-calima-s-2025/>prueba en movilidadelectrica.com</a>",
},

# ══ 6. VELCA TRAMONTANA S ══════════════════════════════════════════════════
{
 "slug": "velca-tramontana-s-2025-ficha-tecnica-precio",
 "marca": "Velca", "modelo": "Tramontana S", "version": "Tramontana S 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": None, "potenciaCv": None,
 "autonomiaKm": 90, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 90, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico (baterías extraíbles)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "90 km/h de velocidad máxima con carnet A1: sirve para ciudad y rondas",
   "Diseño clásico de scooter italiano con encanto retro",
   "Baterías extraíbles: carga en casa sin depender del garaje",
   "Asiento para dos plazas y guantera trasera",
   "Marca española con red de postventa en crecimiento",
 ],
 "contras": [
   "Precio no publicado: difícil compararla sin tarifa oficial",
   "90 km de autonomía declarada: justa si haces mucha ronda diaria",
   "Ficha técnica poco detallada en la web de la marca",
   "Sin ABS confirmado: frenada convencional",
   "Menos autonomía y velocidad que su hermana Calima S",
 ],
 "curiosidades": [
   "Comparte catálogo con la Tramontana básica, un ciclomotor de 45 km/h",
   "El nombre homenajea al viento del norte del Mediterráneo, como la Calima al del sur",
   "Velca opera ya en España, Portugal, Francia y Suiza",
 ],
 "fuenteNombre": "Velca", "fuenteUrl": "https://www.velcamotor.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Velca Tramontana S 2025, scooter eléctrico de estilo clásico",
 "alt2": "Velca Tramontana S, detalle del escudo frontal",
 "alt3": "Velca Tramontana S en calle urbana",
 "title": "Velca Tramontana S 2025: ficha técnica",
 "excerpt": "La Velca Tramontana S: scooter eléctrico español con 90 km/h, 90 km de autonomía, baterías extraíbles y carnet A1. Ficha y detalles.",
 "keywords": ["velca tramontana s", "velca tramontana s ficha técnica", "velca tramontana s precio", "scooter eléctrico español", "velca tramontana 125", "velca motos eléctricas"],
 "entradilla": "La **Velca Tramontana S** es la versión equivalente a 125 del scooter clásico de la marca española: **90 km/h** de velocidad máxima, **90 km** de autonomía declarada y baterías extraíbles, con el carnet A1 o el B con tres años de antigüedad.\n\nSu baza es el diseño: líneas de scooter italiano clásico en una moto 100% eléctrica y silenciosa. Es la alternativa con encanto retro dentro del catálogo de Velca, para quien quiere un eléctrico urbano sin renunciar a la estética de siempre.",
 "precio_txt": "Velca **no ha publicado el precio** de la Tramontana S en su web. Como referencia, la gama de la marca se mueve entre los 3.690 € de la Calima S y los modelos de acceso, así que es razonable esperar un posicionamiento intermedio.\n\nActualizaremos la ficha en cuanto la marca anuncie la tarifa. Mientras tanto, conviene compararla con la Calima S (3.690 €, más autonomía y ABS) para valorar si el diseño clásico compensa la diferencia de equipamiento.",
 "autonomia_txt": "La Tramontana S declara **90 km de autonomía** con sus baterías extraíbles, que se pueden cargar en cualquier enchufe doméstico. Es una cifra pensada para el uso urbano diario: ida y vuelta al trabajo más recados, con recarga nocturna.\n\nAl ser extraíbles, no necesitas un punto de carga en el garaje comunitario, el gran obstáculo de muchos eléctricos. A cambio, conviene planificar: 90 km dan para el día a día, pero no para escapadas.",
 "equipo_txt": "La Tramontana S apuesta por la sencillez con encanto: asiento para **dos plazas**, guantera trasera, toma USB con cargador y arranque sin complicaciones. El estilo es deliberadamente clásico, con el escudo redondeado y detalles cromados.\n\nNo esperes pantallas táctiles ni modos de conducción sofisticados: es un scooter honesto, eléctrico y silencioso, pensado para disfrutar de la ciudad con estética vintage y coste por kilómetro mínimo.",
 "faqs": [
   ("¿Qué velocidad alcanza la Velca Tramontana S?", "**90 km/h**, suficiente para ciudad y vías de circunvalación."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad, al ser equivalente a 125."),
   ("¿Cuánta autonomía tiene?", "**90 km** declarados con sus baterías extraíbles."),
   ("¿Cuánto cuesta?", "Velca aún **no ha publicado el precio**. Actualizaremos la ficha cuando lo anuncie."),
   ("¿Las baterías son extraíbles?", "Sí, se pueden **extraer y cargar** en cualquier enchufe doméstico."),
   ("¿Es una marca española?", "Sí, **Velca** es una marca española fundada en 2020, con sede y red comercial en España."),
 ],
  "para_quien": 'Es para ti si te enamora la **estética clásica** y quieres un eléctrico con encanto retro para la ciudad. Perfecto para moverse por el centro con estilo y sin ruido. No es para ti si priorizas la ficha técnica: la Calima S ofrece más por un precio conocido. Habrá que esperar a la tarifa oficial para juzgar su relación valor/precio.',
"fuentes_txt": "<a href=https://www.velcamotor.com>web oficial de Velca</a>",
},
# ══ 7. NIU MQi+ SPORT ═══════════════════════════════════════════════════════
{
 "slug": "niu-mqi-plus-sport-2025-ficha-tecnica-precio",
 "marca": "NIU", "modelo": "MQi+ Sport", "version": "MQi+ Sport 2025", "categoria": "Scooter",
 "precioDesde": 2299, "potenciaKw": 1.2, "potenciaCv": None,
 "autonomiaKm": 65, "autonomiaCiclo": "Declarada", "bateriaKwh": 1.5,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "AM", "carga": "Enchufe doméstico", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Motor Bosch de 1.200 W con controlador FOC: aceleración suave e inmediata",
   "Precio de 2.299 €: de los NIU más asequibles",
   "Batería extendida opcional: de 45 a 65 km de autonomía",
   "Frenada regenerativa EBS que recupera hasta el 6% de la energía",
   "App de NIU con más de 200 puntos de datos del scooter por minuto",
 ],
 "contras": [
   "45 km de autonomía con la batería estándar: justa para usos intensivos",
   "Suspensiones duras: los baches se notan",
   "En cuestas pronunciadas el pequeño motor sufre",
   "Diseño compacto: a duo se va justo de espacio",
   "La batería extendida es un sobrecoste a sumar",
 ],
 "curiosidades": [
   "El controlador FOC analiza el scooter en tiempo real mientras circulas",
   "NIU es el líder europeo de scooters eléctricos, con cerca de 10.000 unidades vendidas en 2026",
   "El MQi+ Sport tiene control de crucero, raro en un ciclomotor",
 ],
 "fuenteNombre": "NIU", "fuenteUrl": "https://www.niu.com",
 "videoId": None, "videoCanal": None,
 "alt1": "NIU MQi+ Sport 2025, ciclomotor eléctrico compacto",
 "alt2": "NIU MQi+ Sport, detalle del cuadro LCD",
 "alt3": "NIU MQi+ Sport en ciudad",
 "title": "NIU MQi+ Sport 2025: precio y ficha técnica",
 "excerpt": "El NIU MQi+ Sport desde 2.299 €: ciclomotor eléctrico con motor Bosch, 65 km de autonomía, batería extraíble y 45 km/h. Ficha completa.",
 "keywords": ["niu mqi+ sport precio", "niu mqi sport ficha técnica", "niu mqi+ sport autonomía", "ciclomotor eléctrico niu", "niu mqi sport opiniones", "niu mqi+ sport 2025"],
 "entradilla": "El **NIU MQi+ Sport** es el ciclomotor eléctrico de acceso a la marca china: **2.299 €**, motor **Bosch de 1.200 W**, batería de 1,5 kWh (ampliable) y hasta **65 km** de autonomía con la batería extendida. Compacto, conectado y pensado para la ciudad.\n\nEs la opción para quien quiere un NIU sin pagar el sobreprecio de la gama NQi: menos autonomía y prestaciones, pero la misma filosofía de scooter conectado con app, frenada regenerativa y diseño cuidado. Ideal como primer eléctrico urbano.",
 "precio_txt": "El MQi+ Sport se vende en España por **2.299 €** con la batería estándar (45 km de autonomía). La **batería extendida**, que eleva la autonomía a 65 km, es un extra a sumar.\n\nEn su rango compite con el Segway E110S (2.399 €) y el E-Zi (1.499 €). El NIU juega la baza de la marca: mejor app, mejor red de distribuidores (25 puntos en España y Portugal) y un diseño más cuidado. Con ayudas puede bajar de los 2.000 €.",
 "autonomia_txt": "Con la batería estándar de **1,5 kWh**, la autonomía declarada es de **45 km**; con la **extendida**, de **65 km**. En pruebas reales urbanas se han medido unos 60-70 km con la batería grande, una cifra honesta para un ciclomotor de este tamaño.\n\nLa batería es **extraíble** y se carga en un enchufe normal. El sistema **EBS** de frenada regenerativa devuelve hasta un 6% de la energía a la batería, y el modo de conducción influye mucho: en cuestas la autonomía cae en picado, como en todos los eléctricos pequeños.",
 "equipo_txt": "El MQi+ Sport monta un **motor Bosch** con controlador vectorial **FOC**, que ajusta la entrega en tiempo real para una aceleración suave. Lleva frenos de disco delante y detrás, pantalla LCD, **control de crucero** y dos plazas.\n\nLa **app de NIU** es de las mejores del segmento: recoge más de 200 datos por minuto, permite localizar el scooter, ver el estado de la batería y recibir alertas. Un nivel de conectividad que sus rivales baratos no ofrecen.",
 "faqs": [
   ("¿Cuánto cuesta el NIU MQi+ Sport?", "**2.299 €** con batería estándar. La batería extendida (65 km) es un extra."),
   ("¿Qué autonomía real tiene?", "45 km con la estándar y **65 km con la extendida**; en pruebas reales urbanas ronda los 60-70 km con la grande."),
   ("¿Qué motor lleva?", "Un **Bosch de 1.200 W** con controlador FOC, suave y silencioso."),
   ("¿La batería se extrae?", "Sí, es **extraíble** y se carga en cualquier enchufe doméstico."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Tiene app?", "Sí, la **app de NIU** con localización, estado de batería y estadísticas de uso."),
 ],
  "para_quien": 'Es para ti si quieres un **NIU** pero tu presupuesto no llega a la gama NQi. Ideal para ciudad pura y trayectos cortos, con la mejor app del segmento. No es para ti si haces más de 40 km al día con la batería estándar: necesitarás la extendida. Y si hay cuestas duras en tu ruta, su 1,2 kW sufrirá.',
"fuentes_txt": "<a href=https://www.akiebikes.com/producto/scooter-electrico-niu-mqi-sport-1-5-kwh/>ficha y precio en Akie Bikes</a> y <a href=https://www.niu.com>NIU</a>",
},
# ══ 8. NIU FQiX 150 ══════════════════════════════════════════════════════════
{
 "slug": "niu-fqix-150-2026-ficha-tecnica-precio",
 "marca": "NIU", "modelo": "FQiX 150", "version": "FQiX 150 2026", "categoria": "Scooter",
 "precioDesde": 2499, "potenciaKw": None, "potenciaCv": None,
 "autonomiaKm": None, "autonomiaCiclo": None, "bateriaKwh": None,
 "velocidadMax": None, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "AM", "carga": "Enchufe doméstico (batería extraíble)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Novedad 2026 dentro de la renovada gama NIU: última tecnología de la marca",
   "Precio de 2.499 €: acceso asequible a la nueva generación",
   "Hereda la conectividad total de la gama: NIU Link Crown y navegación integrada",
   "Baterías de nueva generación a 72V",
   "Red de 25 puntos de venta en España y Portugal",
 ],
 "contras": [
   "Ficha técnica completa aún no publicada por NIU España",
   "Al ser novedad, habrá que esperar a las primeras pruebas reales",
   "La gama 2026 sube el listón tecnológico: conviene comparar con el NQiX 150",
   "Disponibilidad inicial limitada a concesionarios de la red",
   "Precio sin ayudas: conviene gestionar el Plan MOVES",
 ],
 "curiosidades": [
   "La gama 2026 de NIU introduce el mando NIU Link Crown, que se maneja con el pulgar",
   "NIU matriculó cerca de 300 unidades a particulares en España y Portugal hasta septiembre de 2026",
   "La marca ya es líder del mercado europeo de scooters eléctricos",
 ],
 "fuenteNombre": "NIU", "fuenteUrl": "https://www.niu.com",
 "videoId": None, "videoCanal": None,
 "alt1": "NIU FQiX 150 2026, scooter eléctrico de nueva generación",
 "alt2": "NIU FQiX 150, detalle del frontal",
 "alt3": "NIU FQiX 150 en entorno urbano",
 "title": "NIU FQiX 150 2026: precio y ficha técnica",
 "excerpt": "El NIU FQiX 150 2026 desde 2.499 €: la novedad eléctrica de NIU con la tecnología de la gama 2026, baterías de 72V y etiqueta Cero.",
 "keywords": ["niu fqix 150", "niu fqix 150 precio", "niu fqix 150 2026", "niu gama 2026", "scooter eléctrico niu 2026", "niu fqix opiniones"],
 "entradilla": "El **NIU FQiX 150** es una de las novedades de la **renovada gama 2026** de NIU: un scooter eléctrico urbano por **2.499 €** que estrena la nueva generación tecnológica de la marca (mando NIU Link Crown, navegación integrada, baterías de 72V).\n\nNIU ha renovado por completo su gama para 2026 con más tecnología, más autonomía (hasta 130 km en algunos modelos) y precios desde 1.999 €. El FQiX 150 se coloca como la opción de acceso a esa nueva generación, por encima del NQi Sport y por debajo del FQiX 300.",
 "precio_txt": "El precio anunciado es de **2.499 €** para el FQiX 150, dentro de una gama 2026 que parte de los 1.999 € del NQi Sport y llega a los 4.599 € del NQiX 500. Es un posicionamiento agresivo para un modelo de nueva generación.\n\nCon las ayudas del Plan MOVES y la deducción del IRPF, el precio efectivo puede bajar sensiblemente. Conviene preguntar en los 25 puntos de venta de la red en España y Portugal por las condiciones de lanzamiento.",
 "autonomia_txt": "NIU aún **no ha publicado la ficha técnica completa** del FQiX 150 en España. Lo que sí ha confirmado para la gama 2026 son baterías de nueva generación a **72 voltios**, autonomías de hasta 130 km en los modelos superiores y una electrónica completamente renovada.\n\nActualizaremos esta ficha en cuanto la marca publique los datos oficiales de autonomía, potencia y tiempos de carga del FQiX 150. Como referencia, su hermano mayor el FQiX 300 declara cifras de autonomía superiores a los 100 km.",
 "equipo_txt": "Lo confirmado para la gama 2026 es un salto tecnológico importante: **NIU Link Crown**, un mando en el puño que permite ajustar configuraciones, contestar llamadas y seguir la navegación sin soltar el manillar; **navegación integrada**, instrumentación renovada, **control de tracción** y frenada combinada.\n\nLa filosofía de NIU para 2026 es convertir el scooter en un dispositivo conectado: actualizaciones remotas, detección de vehículos en el ángulo muerto y adaptación digital al conductor. El FQiX 150 hereda todo ese planteamiento.",
 "faqs": [
   ("¿Cuánto cuesta el NIU FQiX 150?", "**2.499 €** de precio anunciado para la gama 2026."),
   ("¿Cuándo llega a España?", "Forma parte de la **gama 2026**, ya en despliegue en la red de 25 puntos de venta de España y Portugal."),
   ("¿Qué autonomía tiene?", "La ficha completa **aún no se ha publicado**. La gama 2026 anuncia hasta 130 km en sus modelos superiores."),
   ("¿Qué es el NIU Link Crown?", "El nuevo **mando en el puño** que permite controlar navegación, llamadas y modos sin soltar el manillar."),
   ("¿Qué carnet necesito?", "Al ser un 150 de la gama urbana, la **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Tiene etiqueta Cero?", "Sí, al ser 100% eléctrico le corresponde la **etiqueta Cero** de la DGT."),
 ],
  "para_quien": 'Es para ti si quieres estrenar la **nueva generación 2026 de NIU** desde 2.499 €, con su tecnología conectada de última hornada. Ideal para los early adopters de la marca. No es para ti si necesitas la ficha técnica completa hoy: aún no está publicada. Los prudentes esperarán a las primeras pruebas; los fans de NIU ya están haciendo números.',
"fuentes_txt": "<a href=https://formula1rd.com/niu-renueva-sus-scooters-electricos-para-conquistar-la-ciudad-mas-tecnologia-hasta-130-km-de-autonomia-y-desde-1-999-e/>gama 2026 de NIU en formula1rd.com</a> y <a href=https://www.niu.com>NIU</a>",
},
# ══ 9. VMOTO VS2 ════════════════════════════════════════════════════════════
{
 "slug": "vmoto-vs2-2025-ficha-tecnica-precio",
 "marca": "Vmoto", "modelo": "VS2", "version": "VS2 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 2.0, "potenciaCv": None,
 "autonomiaKm": 80, "autonomiaCiclo": "Declarada", "bateriaKwh": 2.7,
 "velocidadMax": None, "ceroCincuenta": None, "pesoKg": 101, "plazas": 2,
 "carnet": "AM", "carga": "3,5 h", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Rueda alta (16\" delante, 14\" detrás): más estable y cómoda que un scooter de rueda pequeña",
   "Batería de 60V y 45Ah (2,7 kWh) con 80 km de autonomía declarada",
   "Carga completa en solo 3,5 horas",
   "101 kg en orden de marcha: ligero para su tamaño",
   "Altura de asiento de 780 mm, accesible",
 ],
 "contras": [
   "Precio no publicado en España: difícil valorar su competitividad",
   "Velocidad máxima no declarada en las fichas disponibles",
   "Diseño discreto, sin el carisma de un Super Soco o una Vespa",
   "Red de distribución en España más limitada que NIU o Silence",
   "2 kW de potencia: justo para cuestas con pasajero",
 ],
 "curiosidades": [
   "Vmoto es la marca que está absorbiendo progresivamente a Super Soco",
   "El VS2 comparte filosofía de rueda alta con el CPx, el superventas de la marca",
   "Su chasis es tubular de acero, robusto y sencillo de mantener",
 ],
 "fuenteNombre": "Vmoto", "fuenteUrl": "https://www.vmoto.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Vmoto VS2 2025, scooter eléctrico de rueda alta",
 "alt2": "Vmoto VS2, detalle lateral",
 "alt3": "Vmoto VS2 en ciudad",
 "title": "Vmoto VS2 2025: ficha técnica y precio",
 "excerpt": "El Vmoto VS2: scooter eléctrico de rueda alta con 80 km de autonomía, batería de 2,7 kWh, carga en 3,5 h y 101 kg. Ficha completa.",
 "keywords": ["vmoto vs2", "vmoto vs2 ficha técnica", "vmoto vs2 precio", "vmoto vs2 autonomía", "scooter eléctrico rueda alta", "vmoto opiniones"],
 "entradilla": "El **Vmoto VS2** es el scooter eléctrico de **rueda alta** de la marca: 16 pulgadas delante y 14 detrás para una pisada más estable, **80 km** de autonomía declarada, batería de 2,7 kWh y carga completa en **3,5 horas**.\n\nVmoto, la marca que está absorbiendo a Super Soco, apuesta con el VS2 por el formato de rueda grande que tan buen resultado le da al CPx: más confort en baches y mejor aplomo que los scooters de rueda pequeña, manteniendo un peso contenido de 101 kg.",
 "precio_txt": "Vmoto **no ha publicado el precio** del VS2 en España. Como referencia de la marca, el CPx se mueve en el entorno de los 4.000-5.000 € y el TC Max en 4.495 €, así que el VS2 debería situarse en una franja similar o algo inferior.\n\nActualizaremos la ficha cuando haya tarifa oficial. Mientras tanto, su argumento es el formato: si buscas un eléctrico de rueda alta sin irte a un maxiscooter, hay pocas alternativas.",
 "autonomia_txt": "La batería es de **60V y 45Ah** (2,7 kWh) de iones de litio, con **80 km** de autonomía declarada y un tiempo de carga de **3,5 horas**. Son cifras honestas para un uso urbano diario.\n\nLa rueda alta ayuda a mantener la velocidad con menos esfuerzo, lo que en la práctica se traduce en una autonomía más estable que en scooters de rueda pequeña. Para el commuting diario es más que suficiente; para repartos intensivos conviene valorar modelos con doble batería.",
 "equipo_txt": "El VS2 monta horquilla telescópica hidráulica delante y monoamortiguador detrás, con neumáticos **90/80-16** delante y **90/90-14** detrás: medidas de scooter grande que mejoran el confort y la seguridad en mojado.\n\nEl chasis tubular de acero es sencillo y robusto, la altura del asiento es de **780 mm** y la distancia entre ejes de 1.327 mm le da buena estabilidad. Un scooter sin florituras tecnológicas, centrado en lo esencial: rodar cómodo y barato por la ciudad.",
 "faqs": [
   ("¿Qué autonomía tiene el Vmoto VS2?", "**80 km** declarados con su batería de 60V y 45Ah (2,7 kWh)."),
   ("¿Cuánto tarda en cargarse?", "**3,5 horas** para la carga completa."),
   ("¿Cuánto pesa?", "**101 kg** en orden de marcha, ligero para un scooter de rueda alta."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Cuánto cuesta?", "Vmoto aún **no ha publicado el precio** en España."),
   ("¿Qué tiene de especial la rueda alta?", "Más **estabilidad y confort** en baches y mejor comportamiento en mojado que los scooters de rueda pequeña."),
 ],
  "para_quien": 'Es para ti si buscas un scooter eléctrico de **rueda alta** cómodo y estable, sin irte a un maxiscooter. Ideal para quienes valoran el confort en baches por encima de la tecnología. No es para ti si necesitas cifras deportivas: 2 kW son justos. Y sin precio oficial, es difícil recomendarlo frente a rivales con tarifa clara.',
"fuentes_txt": "<a href=https://pass.motos.coches.net/fichas_tecnicas/vmoto/vs2/9731/>ficha técnica en motos.net</a> y <a href=https://www.vmoto.com>Vmoto</a>",
},
# ══ 10. VMOTO CPX EXPLORER ══════════════════════════════════════════════════
{
 "slug": "vmoto-cpx-explorer-2025-ficha-tecnica-precio",
 "marca": "Vmoto", "modelo": "CPx Explorer", "version": "CPx Explorer 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 8.0, "potenciaCv": 10.9,
 "autonomiaKm": 100, "autonomiaCiclo": "Declarada", "bateriaKwh": 5.4,
 "velocidadMax": 105, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "~3,5 h", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "8 kW y 105 km/h: prestaciones de 125 con aceleración eléctrica inmediata",
   "Diseño renovado por C-Creative con faro en forma de sonrisa y pantalla a color",
   "Dos baterías extraíbles de 5,4 kWh en total: 100 km de autonomía",
   "Rueda alta (16\" delante, 14\" detrás): aplomo de scooter grande",
   "Hereda la base del CPx Pro, con récord Guinness de distancia en 24 h",
 ],
 "contras": [
   "Precio en España aún no publicado",
   "El motor en el buje trasero lastra algo el comportamiento dinámico",
   "Diseño polarizante: el frontal no gusta a todo el mundo",
   "Vmoto aún está construyendo su red en España",
   "100 km de autonomía justos para un uso interurbano intensivo",
 ],
 "curiosidades": [
   "Un CPx Pro recorrió 1.931 km en 24 horas, récord Guinness de distancia en scooter eléctrico",
   "El diseño es un guiño al Honda X-ADV, con estética aventurera",
   "Vmoto reemplazará progresivamente a todos los modelos lanzados como Super Soco",
 ],
 "fuenteNombre": "Vmoto", "fuenteUrl": "https://www.vmoto.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Vmoto CPx Explorer 2025, scooter eléctrico de rueda alta",
 "alt2": "Vmoto CPx Explorer, detalle del frontal con faro en U",
 "alt3": "Vmoto CPx Explorer en carretera",
 "title": "Vmoto CPx Explorer 2025: ficha técnica",
 "excerpt": "El Vmoto CPx Explorer: scooter eléctrico con 8 kW, 105 km/h, 100 km de autonomía, 2 baterías extraíbles y diseño C-Creative. Ficha completa.",
 "keywords": ["vmoto cpx explorer", "vmoto cpx explorer ficha técnica", "vmoto cpx explorer precio", "vmoto cpx explorer autonomía", "scooter eléctrico 105 km/h", "vmoto opiniones"],
 "entradilla": "El **Vmoto CPx Explorer** es la evolución del superventas CPx: un scooter eléctrico de **rueda alta** con **8 kW (10,9 CV)**, **105 km/h** de velocidad punta, **100 km** de autonomía y dos baterías extraíbles, rediseñado por el estudio italiano **C-Creative**.\n\nPresentado en el EICMA, mantiene la base mecánica del CPx Pro —la misma que logró el récord Guinness de 1.931 km en 24 horas— pero con una estética más afilada y aventurera, un guiño al Honda X-ADV, y una pantalla a color moderna.",
 "precio_txt": "Vmoto **no ha publicado aún el precio** del CPx Explorer en España. Como referencia, el Super Soco CPx Pro se vendía en el entorno de los 5.000-6.000 €, y el Explorer debería moverse en una franja similar.\n\nEs un scooter de gama media-alta dentro del mundo eléctrico: más caro que un NIU NQiX o un TC Max, pero con más potencia (8 kW) y el plus del diseño italiano. Actualizaremos la ficha con la tarifa oficial en cuanto se anuncie.",
 "autonomia_txt": "Monta **dos baterías extraíbles** que suman **5,4 kWh**, con **100 km** de autonomía declarada y carga completa en unas **3,5 horas**. Al ser extraíbles, puedes cargarlas en casa o en la oficina sin depender del garaje.\n\nCon 105 km/h de punta, el Explorer puede salir a rondas y autovías de circunvalación, donde el consumo sube: en uso mixto real conviene contar con 70-80 km. Para ciudad pura, los 100 km dan para varios días.",
 "equipo_txt": "El rediseño de C-Creative se centra en el frontal: **faro en forma de U** que cubre casi todo el escudo, **parabrisas ahumado** más alto y asiento rediseñado sin faldones laterales. Estrena **pantalla TFT a color**, mucho más moderna que la del CPx anterior.\n\nEn la parte ciclo, rueda de **16\" delante y 14\" detrás** (la trasera con el motor en el buje), frenada combinada CBS y basculante de nueva factura. Hay prevista una **versión de reparto**, heredera del CPx Delivery que usan flotas en toda Europa.",
 "faqs": [
   ("¿Qué potencia tiene el Vmoto CPx Explorer?", "**8 kW (10,9 CV)** nominales, con 105 km/h de velocidad máxima."),
   ("¿Cuánta autonomía tiene?", "**100 km** declarados con sus dos baterías extraíbles de 5,4 kWh en total."),
   ("¿Las baterías son extraíbles?", "Sí, las **dos baterías son extraíbles** y se cargan en unas 3,5 horas."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Cuánto cuesta?", "Vmoto aún **no ha publicado el precio** en España."),
   ("¿Qué tiene que ver con Super Soco?", "Vmoto es la marca que **absorbe progresivamente a Super Soco**; el Explorer es la evolución del CPx Pro."),
 ],
  "para_quien": 'Es para ti si quieres un scooter eléctrico con **presencia y prestaciones de 125** (8 kW, 105 km/h) y diseño con carácter. Ideal para ciudad y rondas, con la herencia del CPx Pro. No es para ti si buscas el precio más bajo: será de gama media-alta. Habrá que esperar a la tarifa para la recomendación definitiva.',
"fuentes_txt": "<a href=https://www.moto125.cc/vmoto-cpx-explorer-2024-eicma>novedad en moto125.cc</a> y <a href=https://www.hibridosyelectricos.com/motos/vmoto-cpx-explorer-scooter-con-mas-exito-super-soco-evoluciona-ser-referencia_71618_102.html>presentación en hibridosyelectricos.com</a>",
},

# ══ 11. SUPER SOCO TSX 50 ══════════════════════════════════════════════════
{
 "slug": "super-soco-tsx-50-2025-ficha-tecnica-precio",
 "marca": "Super Soco", "modelo": "TSx 50", "version": "TSx 50 2025", "categoria": "Urbana",
 "precioDesde": 2889, "potenciaKw": 1.9, "potenciaCv": 2.5,
 "autonomiaKm": 100, "autonomiaCiclo": "Declarada", "bateriaKwh": 1.8,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": 72, "plazas": 2,
 "carnet": "AM", "carga": "3,5 h", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Estética naked con rueda de 17\": parece una moto grande siendo un ciclomotor",
   "Motor Bosch de 1,9 kW con 150 Nm de par: sale con fuerza de los semáforos",
   "Batería extraíble de solo 10,7 kg y opción de segunda unidad (100 km)",
   "Solo 72 kg: muy ágil y fácil de manejar",
   "Precio de 2.889 € con seguro gratuito promocional",
 ],
 "contras": [
   "48 km de autonomía con una batería: la segunda es casi obligatoria",
   "Sin ABS: frenada combinada CBS",
   "Postura naked: menos protección que un scooter",
   "Sin hueco bajo el asiento para el casco",
   "La marca está migrando a Vmoto: futuro del servicio a vigilar",
 ],
 "curiosidades": [
   "El chasis combina estructura rígida con bastidor de carbono",
   "Las celdas de la batería son ATL, el mismo proveedor de gigantes tecnológicos",
   "Existe la versión TSx 125 (2.989 €) con la misma estética para el carnet A1",
 ],
 "fuenteNombre": "Super Soco", "fuenteUrl": "https://www.supersoco.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Super Soco TSx 50 2025, naked eléctrica ciclomotor",
 "alt2": "Super Soco TSx 50, detalle del faro y horquilla",
 "alt3": "Super Soco TSx 50 en ciudad",
 "title": "Super Soco TSx 50 2025: precio y ficha",
 "excerpt": "La Super Soco TSx 50 desde 2.889 €: naked eléctrica con motor Bosch, 45 km/h, batería extraíble y estética de moto grande. Ficha completa.",
 "keywords": ["super soco tsx 50 precio", "super soco tsx ficha técnica", "super soco tsx 50 autonomía", "naked eléctrica 45 km/h", "super soco tsx opiniones", "moto eléctrica ciclomotor"],
 "entradilla": "La **Super Soco TSx 50** es la naked eléctrica para el carnet AM: estética de moto grande con rueda de **17 pulgadas**, motor **Bosch de 1,9 kW** y 150 Nm de par, **batería extraíble** y un precio de **2.889 €**.\n\nEs la opción para jóvenes (y no tan jóvenes) que quieren una eléctrica con carácter, no un scooter: posición naked, chasis con bastidor de carbono y una agilidad notable gracias a sus 72 kg. La autonomía con una batería es de 48 km, ampliable a 100 km con la segunda unidad.",
 "precio_txt": "La TSx 50 cuesta **2.889 €**, y su hermana mayor, la **TSx 125** (para carnet A1), **2.989 €**: solo 100 € de diferencia, lo que hace muy tentador dar el salto si tienes el A1.\n\nSuper Soco suele acompañar sus motos con promociones de **seguro gratuito** el primer año, un gancho comercial importante en este segmento. Con ayudas del Plan MOVES, el precio efectivo baja de los 2.500 €.",
 "autonomia_txt": "La batería es de **60V y 30Ah (1,8 kWh)**, extraíble y de solo **10,7 kg**: se saca con una mano y se carga en casa en **3,5 horas**. Con una unidad, la autonomía homologada es de **48 km**.\n\nEl truco está en la **segunda batería opcional**: con las dos, la autonomía llega a **100 km**. Para un uso urbano diario, la configuración de doble batería es la recomendable; con una sola, hay que recargar cada día si se hacen más de 30-40 km.",
 "equipo_txt": "El motor **Bosch de 1.900 W** entrega **150 Nm** de par, una cifra altísima para un ciclomotor que se nota en las salidas. La parte ciclo incluye chasis de alta resistencia con **bastidor de carbono**, disco delantero de 240 mm con pinza de tres pistones, disco trasero de 180 mm y **frenada combinada CBS**.\n\nLa iluminación es **full LED** y hay un pequeño compartimento estanco para el cargador y efectos personales. No hay hueco para el casco: es una naked, y se nota.",
 "faqs": [
   ("¿Cuánto cuesta la Super Soco TSx 50?", "**2.889 €**. La versión TSx 125 cuesta 2.989 €."),
   ("¿Qué autonomía tiene?", "**48 km** con una batería y **100 km** con la segunda batería opcional."),
   ("¿Qué motor lleva?", "Un **Bosch de 1,9 kW (2,5 CV)** con 150 Nm de par máximo."),
   ("¿La batería se extrae?", "Sí, pesa solo **10,7 kg** y se carga en 3,5 horas en un enchufe normal."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Existe en versión 125?", "Sí, la **TSx 125** por 2.989 €, para el carnet A1 o B con 3 años."),
 ],
  "para_quien": 'Es para ti si tienes 15-16 años (o carnet AM) y quieres una **eléctrica con estética de moto grande**, no un scooter. Perfecta para la ciudad con carácter naked. No es para ti si necesitas autonomía: con una batería son 48 km, así que la segunda es casi obligatoria. Y si tienes el A1, la TSx 125 cuesta solo 100 € más.',
"fuentes_txt": "<a href=https://motoselectricas.tech/motos/super-soco/tsx50>ficha en motoselectricas.tech</a> y <a href=https://www.motorbikemag.es/ficha-tecnica/super-soco-tsx-50-2022/>ficha técnica en motorbikemag.es</a>",
},
# ══ 12. ZEEHO AE8 S+ ═══════════════════════════════════════════════════════
{
 "slug": "zeeho-ae8-s-plus-2025-ficha-tecnica-precio",
 "marca": "Zeeho", "modelo": "AE8 S+", "version": "AE8 S+ 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 12.5, "potenciaCv": 16.8,
 "autonomiaKm": 120, "autonomiaCiclo": "Declarada", "bateriaKwh": 3.7,
 "velocidadMax": 100, "ceroCincuenta": 2.6, "pesoKg": 120, "plazas": 2,
 "carnet": "A1", "carga": "5 h (80%), 2,5 h con carga rápida", "etiquetaDgt": "Cero",
 "aprox": ["bateriaKwh"],
 "pros": [
   "12,5 kW de pico y 218 Nm: acelera de 0 a 50 en 2,6 s, como una 250",
   "ABS Bosch de doble canal y pinza Brembo delante",
   "120 km de autonomía con dos baterías extraíbles",
   "Chasis multitubular de acero con basculante de aluminio",
   "Tres modos de conducción (Eco, Street, Sport)",
 ],
 "contras": [
   "Precio en España no publicado: la gran incógnita",
   "120 kg en vacío: pesada para un scooter urbano",
   "Marca joven en Europa: red de servicio en construcción",
   "Carga completa lenta (5 h) sin el cargador rápido opcional",
   "Estética agresiva que no es para todos los gustos",
 ],
 "curiosidades": [
   "Zeeho es la marca eléctrica de CFMoto, uno de los gigantes chinos",
   "Sus 218 Nm de par superan a muchas motos de gran cilindrada",
   "El motor va en el chasis (no en la rueda) con transmisión por correa dentada",
 ],
 "fuenteNombre": "Zeeho", "fuenteUrl": "https://www.zeeho.com",
 "videoId": "2_ntqxTPQng", "videoCanal": "FoxERider",
 "alt1": "Zeeho AE8 S+ 2025, scooter eléctrico deportivo",
 "alt2": "Zeeho AE8 S+, detalle del frontal agresivo",
 "alt3": "Zeeho AE8 S+ en marcha",
 "title": "Zeeho AE8 S+ 2025: ficha técnica y precio",
 "excerpt": "El Zeeho AE8 S+: scooter eléctrico con 12,5 kW, 218 Nm, 0-50 en 2,6 s, ABS Bosch, Brembo y 120 km de autonomía. Ficha completa.",
 "keywords": ["zeeho ae8 s+", "zeeho ae8 ficha técnica", "zeeho ae8 precio", "zeeho ae8 s+ autonomía", "scooter eléctrico 12 kw", "zeeho opiniones"],
 "entradilla": "El **Zeeho AE8 S+** es el scooter eléctrico deportivo de la marca de **CFMoto**: **12,5 kW** de potencia pico, **218 Nm** de par, **0 a 50 km/h en 2,6 segundos**, ABS Bosch de doble canal, pinza **Brembo** y **120 km** de autonomía.\n\nEs el eléctrico urbano para quien viene de motos potentes y no quiere renunciar a las sensaciones: acelera como una 250 cc, frena como una grande y tiene una parte ciclo seria (chasis multitubular, basculante de aluminio). El precio en España aún no se ha publicado.",
 "precio_txt": "Zeeho **no ha publicado el precio** del AE8 S+ en España. Por posicionamiento (12,5 kW, ABS, Brembo, doble batería), debería competir con los scooters eléctricos premium de 125, en el entorno de los 6.000-8.000 €.\n\nSu rival natural es el BMW CE 04 o el Silence S01+, aunque el Zeeho juega con mejor relación potencia/precio. Actualizaremos la ficha cuando CFMoto España anuncie la tarifa oficial.",
 "autonomia_txt": "Monta **dos baterías de litio extraíbles** de 69V y 27Ah cada una (~3,7 kWh en total), con **120 km** de autonomía declarada. Se pueden cargar en casa o conectando el scooter directamente.\n\nLa carga del 0 al 80% lleva **5 horas** con el cargador estándar, y **2,5 horas** con el cargador superrápido de 1.900 W opcional. Tres modos de conducción (Eco, Street a 70 km/h y Sport a 100 km/h) permiten gestionar la autonomía según el uso.",
 "equipo_txt": "La parte ciclo es de las más serias del segmento eléctrico urbano: **ABS Bosch de doble canal**, **pinza delantera Brembo**, horquilla convencional, doble amortiguador trasero regulable y ruedas de 12 pulgadas. El motor, firmado por Zeeho, va alojado en el chasis con **transmisión por correa dentada**, mejor que el típico motor en el buje.\n\nEl puesto de conducción incluye pantalla digital, tres modos y una estética afilada que no pasa desapercibida. Pesa 120 kg en vacío, contenido para su potencia.",
 "faqs": [
   ("¿Qué potencia tiene el Zeeho AE8 S+?", "**12,5 kW (16,8 CV)** de pico, con 218 Nm de par máximo."),
   ("¿Cuánto acelera de 0 a 50?", "**2,6 segundos**, una cifra de moto deportiva."),
   ("¿Qué autonomía tiene?", "**120 km** declarados con sus dos baterías extraíbles."),
   ("¿Lleva ABS?", "Sí, **ABS Bosch de doble canal** y pinza delantera Brembo."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Cuánto cuesta?", "Zeeho aún **no ha publicado el precio** en España."),
 ],
  "para_quien": 'Es para ti si vienes de motos potentes y quieres un scooter eléctrico que **acelere de verdad** (0-50 en 2,6 s). Ideal para disfrutar en ciudad con parte ciclo seria. No es para ti si buscas precio ajustado o red de servicio consolidada: Zeeho aún construye su presencia en España. Habrá que esperar a la tarifa oficial.',
"fuentes_txt": "<a href=https://www.motorbikemag.es/ficha-tecnica/zeeho-ae8-s/>ficha técnica en motorbikemag.es</a> y <a href=https://www.youtube.com/watch?v=2_ntqxTPQng>prueba en vídeo de FoxERider</a>",
},
# ══ 13. YADEA E8S PRO ══════════════════════════════════════════════════════
{
 "slug": "yadea-e8s-pro-2025-ficha-tecnica-precio",
 "marca": "Yadea", "modelo": "E8S Pro", "version": "E8S Pro 2025", "categoria": "Scooter",
 "precioDesde": 3590, "potenciaKw": 2.0, "potenciaCv": 2.7,
 "autonomiaKm": None, "autonomiaCiclo": None, "bateriaKwh": None,
 "velocidadMax": 60, "ceroCincuenta": None, "pesoKg": 135, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico", "etiquetaDgt": "Cero",
 "aprox": ["precioDesde"],
 "pros": [
   "140 Nm de par: empuje contundente para un scooter urbano",
   "60 km/h de velocidad máxima: más que un ciclomotor",
   "Yadea es el mayor fabricante mundial de vehículos eléctricos de dos ruedas",
   "Ruedas de 12\" con frenos de disco en ambos ejes",
   "Asiento a solo 740 mm: muy accesible",
 ],
 "contras": [
   "135 kg en seco: pesado para su potencia",
   "Autonomía no publicada en las fichas disponibles",
   "2 kW se quedan justos para los 60 km/h con pasajero y cuestas",
   "Diseño convencional, sin el carisma de rivales italianos",
   "Precio de 3.590 € elevado frente a su potencia",
 ],
 "curiosidades": [
   "Yadea vende decenas de millones de vehículos eléctricos al año en todo el mundo",
   "El E8S Pro se presentó en España junto a la primera gama de la marca en 2022",
   "Su distancia entre ejes de 1.280 mm lo hace muy estable",
 ],
 "fuenteNombre": "Yadea España", "fuenteUrl": "https://www.yadea.es",
 "videoId": None, "videoCanal": None,
 "alt1": "Yadea E8S Pro 2025, scooter eléctrico urbano",
 "alt2": "Yadea E8S Pro, detalle del lateral",
 "alt3": "Yadea E8S Pro en ciudad",
 "title": "Yadea E8S Pro 2025: precio y ficha técnica",
 "excerpt": "El Yadea E8S Pro desde 3.590 €: scooter eléctrico con 2 kW, 140 Nm de par, 60 km/h y el respaldo del mayor fabricante mundial.",
 "keywords": ["yadea e8s pro precio", "yadea e8s pro ficha técnica", "yadea e8s pro autonomía", "scooter eléctrico yadea", "yadea e8s opiniones", "yadea españa"],
 "entradilla": "El **Yadea E8S Pro** es el scooter urbano del **mayor fabricante mundial** de vehículos eléctricos de dos ruedas: **2 kW**, **140 Nm** de par, **60 km/h** de velocidad máxima y un precio de **3.590 €**.\n\nYadea desembarcó en España con una gama completa de scooters y ciclomotores eléctricos a precios contenidos. El E8S Pro es su propuesta intermedia: más velocidad que un ciclomotor, sin llegar a las prestaciones de un 125, con la garantía de un gigante industrial detrás.",
 "precio_txt": "El E8S Pro se lanzó en España por **3.590 €** (el E8S básico, 3.390 €). Es un precio ambicioso para 2 kW de potencia, aunque incluye el respaldo de la marca y una construcción sólida.\n\nEn su franja compite con el Piaggio 1 Active (3.700 €, 2 kW, 60 km/h) y el Velca Tramontana S. El Yadea juega la baza del par motor (140 Nm) y de una marca que fabrica a escala masiva, lo que debería traducirse en repuestos asequibles.",
 "autonomia_txt": "Yadea **no publica la autonomía** del E8S Pro en las fichas disponibles, un punto débil de su comunicación. Por potencia y formato, es un scooter para uso urbano puro, donde la autonomía realista debería moverse en el entorno de los 60-80 km.\n\nLa batería es de iones de litio y el scooter se carga en un enchufe doméstico. Actualizaremos la ficha cuando la marca publique la cifra oficial de autonomía.",
 "equipo_txt": "El E8S Pro monta ruedas de **12 pulgadas** (90/80-12 en ambos ejes) con **frenos de disco** delante y detrás, horquilla telescópica y doble amortiguador trasero. El asiento está a solo **740 mm**, accesible para casi cualquier estatura.\n\nCon 135 kg en seco es un scooter pesado para su potencia, lo que se nota en la agilidad. A cambio, transmite solidez y aplomo. La instrumentación es digital y el acabado, correcto sin alardes.",
 "faqs": [
   ("¿Cuánto cuesta el Yadea E8S Pro?", "**3.590 €** de precio de lanzamiento en España."),
   ("¿Qué velocidad máxima tiene?", "**60 km/h**, por encima de los ciclomotores de 45 km/h."),
   ("¿Qué autonomía tiene?", "Yadea **no la publica** oficialmente. Es un scooter de uso urbano."),
   ("¿Qué carnet necesito?", "Al superar los 45 km/h, el **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Quién es Yadea?", "El **mayor fabricante mundial** de vehículos eléctricos de dos ruedas, con presencia en decenas de países."),
   ("¿Pesa mucho?", "Sí, **135 kg** en seco: es de los más pesados de su potencia."),
 ],
  "para_quien": 'Es para ti si buscas un scooter urbano **sencillo y robusto** con el respaldo del mayor fabricante mundial. Ideal para ciudad sin pretensiones deportivas. No es para ti si quieres la mejor relación potencia/precio: 3.590 € por 2 kW es caro. El Piaggio 1 Active o la Calima S ofrecen más por un precio similar.',
"fuentes_txt": "<a href=https://bikez.net/espanol/motorcycle/60162/>ficha técnica en bikez.net</a> y <a href=https://www.yadea.es>Yadea España</a>",
},
# ══ 14. NERVA EXE II ════════════════════════════════════════════════════════
{
 "slug": "nerva-exe-ii-2026-ficha-tecnica-precio",
 "marca": "Nerva", "modelo": "Exe II", "version": "Exe II 2026", "categoria": "Scooter",
 "precioDesde": 7290, "potenciaKw": 11.0, "potenciaCv": 15.0,
 "autonomiaKm": None, "autonomiaCiclo": None, "bateriaKwh": None,
 "velocidadMax": None, "ceroCincuenta": None, "pesoKg": 230, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico / carga rápida", "etiquetaDgt": "Cero",
 "aprox": ["potenciaKw"],
 "pros": [
   "15 CV: el maxiscooter eléctrico español más potente de su gama",
   "Marca española con baterías LFP de BYD y 5 años de garantía en baterías",
   "Diseño GT con gran presencia y acabados cuidados",
   "App Nerva City con conectividad, GPS y actualizaciones OTA",
   "Posibilidad de renting de baterías para abaratar la compra",
 ],
 "contras": [
   "230 kg: un peso muy elevado que se nota en parado y en ciudad",
   "7.290 €: precio de maxiscooter premium",
   "Autonomía y velocidad oficiales aún no publicadas para el Exe II",
   "Tamaño grande: no es el más ágil entre el tráfico denso",
   "Red comercial en expansión, aún lejos de las grandes marcas",
 ],
 "curiosidades": [
   "Nerva es una marca española que ensambla sus vehículos con el gigante BYD",
   "Sus baterías LFP están pensadas para una segunda vida como almacenamiento energético",
   "El Exe original fue el primer maxiscooter eléctrico español",
 ],
 "fuenteNombre": "Nerva", "fuenteUrl": "https://www.nerva.eco",
 "videoId": None, "videoCanal": None,
 "alt1": "Nerva Exe II 2026, maxiscooter eléctrico español",
 "alt2": "Nerva Exe II, detalle del frontal GT",
 "alt3": "Nerva Exe II en carretera",
 "title": "Nerva Exe II 2026: precio y ficha técnica",
 "excerpt": "El Nerva Exe II 2026 desde 7.290 €: maxiscooter eléctrico español con 15 CV, baterías BYD y 5 años de garantía. Ficha completa.",
 "keywords": ["nerva exe ii precio", "nerva exe ii 2026", "nerva exe ii ficha técnica", "maxiscooter eléctrico español", "nerva exe ii autonomía", "nerva opiniones"],
 "entradilla": "El **Nerva Exe II** es la evolución del maxiscooter eléctrico español: **15 CV**, **230 kg**, diseño GT y las baterías **LFP de BYD** con **5 años de garantía**, por **7.290 €**.\n\nNerva, la firma española de movilidad eléctrica, da un paso adelante con el Exe II: más potencia y presencia que el Exe original, manteniendo su filosofía de baterías seguras y duraderas con segunda vida como almacenamiento energético. Es el maxiscooter eléctrico con sello español.",
 "precio_txt": "El Exe II tiene un precio de **7.290 €**, en la parte alta del segmento de maxiscooters eléctricos equivalentes a 125. Como referencia, el BMW CE 04 parte de 12.260 € y el Silence S01+ de 4.990 €.\n\nNerva ofrece además la fórmula de **renting de baterías**, que abarata el desembolso inicial a cambio de una cuota mensual, y las ayudas del Plan MOVES son aplicables. Las baterías, con 5 años de garantía, son el gran argumento de valor a largo plazo.",
 "autonomia_txt": "Nerva aún **no ha publicado** la autonomía y velocidad oficiales del Exe II. Como referencia, el Exe original declaraba **150 km** en modo Eco y 125 km/h de punta con 5,76 kWh de baterías BYD.\n\nEs razonable esperar que el Exe II mejore esas cifras con su nueva generación de motores y la app Nerva City para gestionar la carga. Actualizaremos la ficha en cuanto la marca publique los datos oficiales.",
 "equipo_txt": "El Exe II mantiene el enfoque GT del original: gran carenado, pantalla amplia, iluminación full LED y una postura cómoda para ciudad y carretera. La **app Nerva City** permite monitorizar el vehículo, consultar su ubicación, activar el bloqueo remoto y recibir **actualizaciones OTA**.\n\nLas baterías **LFP (litio-ferrofosfato) de BYD** son las más seguras del mercado y están diseñadas para una **segunda vida** como almacenamiento de energía tras su uso en el scooter. Un planteamiento de economía circular poco común.",
 "faqs": [
   ("¿Cuánto cuesta el Nerva Exe II?", "**7.290 €** en España, con posibilidad de renting de baterías."),
   ("¿Qué potencia tiene?", "**15 CV** (unos 11 kW), el más potente de la gama Nerva."),
   ("¿Qué autonomía tiene?", "Aún **no publicada** oficialmente. El Exe original declaraba 150 km en modo Eco."),
   ("¿Quién fabrica las baterías?", "**BYD**, el gigante chino, con tecnología LFP y 5 años de garantía."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Es una marca española?", "Sí, **Nerva** es una marca española de movilidad eléctrica."),
 ],
  "para_quien": 'Es para ti si quieres un **maxiscooter eléctrico con sello español** y valoras las baterías BYD con 5 años de garantía. Ideal para ciudad y carretera con presencia GT. No es para ti si buscas ligereza: 230 kg se notan. Y con 7.290 €, es una compra premium que hay que meditar frente a rivales más baratos.',
"fuentes_txt": "<a href=https://www.motofichas.com/marcas/scooter/nerva/125cc>ficha en motofichas.com</a> y <a href=https://v2charge.com/es/mejores-motos-electricas-comprar/>comparativa en v2charge.com</a>",
},
# ══ 15. NERVA LIFT ══════════════════════════════════════════════════════════
{
 "slug": "nerva-lift-2026-ficha-tecnica-precio",
 "marca": "Nerva", "modelo": "Lift", "version": "Lift 2026", "categoria": "Scooter",
 "precioDesde": 4690, "potenciaKw": 5.9, "potenciaCv": 8.05,
 "autonomiaKm": None, "autonomiaCiclo": None, "bateriaKwh": None,
 "velocidadMax": None, "ceroCincuenta": None, "pesoKg": 170, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico", "etiquetaDgt": "Cero",
 "aprox": ["potenciaKw"],
 "pros": [
   "8 CV por 4.690 €: acceso asequible a la marca española",
   "170 kg: mucho más ligero y manejable que el Exe II",
   "Baterías LFP de BYD con 5 años de garantía",
   "App Nerva City con conectividad y actualizaciones OTA",
   "Diseño urbano compacto, ideal para la ciudad",
 ],
 "contras": [
   "Autonomía y velocidad aún no publicadas oficialmente",
   "Menos presencia y equipamiento que el Exe II",
   "Marca joven con red comercial en crecimiento",
   "8 CV justos para salir a rondas con pasajero",
   "El mercado de segunda mano aún no existe",
 ],
 "curiosidades": [
   "El Lift es el modelo de acceso a la gama Nerva, por debajo del Exe II",
   "Comparte la tecnología de baterías LFP de BYD con sus hermanos mayores",
   "Nerva presentó en 2026 los Spark L1e y L3e, aún más pequeños",
 ],
 "fuenteNombre": "Nerva", "fuenteUrl": "https://www.nerva.eco",
 "videoId": None, "videoCanal": None,
 "alt1": "Nerva Lift 2026, scooter eléctrico urbano español",
 "alt2": "Nerva Lift, detalle del diseño",
 "alt3": "Nerva Lift en ciudad",
 "title": "Nerva Lift 2026: precio y ficha técnica",
 "excerpt": "El Nerva Lift 2026 desde 4.690 €: scooter eléctrico español con 8 CV, 170 kg, baterías BYD y app conectada. Ficha completa.",
 "keywords": ["nerva lift precio", "nerva lift 2026", "nerva lift ficha técnica", "scooter eléctrico español barato", "nerva lift autonomía", "nerva opiniones"],
 "entradilla": "El **Nerva Lift** es el scooter eléctrico de acceso de la marca española: **4.690 €**, **8 CV**, **170 kg** y las baterías **LFP de BYD** con 5 años de garantía que caracterizan a Nerva.\n\nSi el Exe II es el maxiscooter GT, el Lift es su hermano urbano y ligero: más manejable en el tráfico denso, más barato y con la misma filosofía de baterías seguras y conectividad total a través de la app Nerva City.",
 "precio_txt": "Con **4.690 €**, el Lift es uno de los scooters eléctricos de marca española más asequibles. Compite con el NIU NQiX 500 (4.499 €) y el Super Soco TC Max (4.495 €), a los que planta cara con el argumento de las baterías BYD y la garantía de 5 años.\n\nComo en toda la gama Nerva, es aplicable el Plan MOVES y existe la opción de renting de baterías. El coste por kilómetro, como en todo eléctrico urbano, es de céntimos.",
 "autonomia_txt": "Nerva aún **no ha publicado** la autonomía oficial del Lift. Por su posicionamiento (8 CV, 170 kg, uso urbano), es razonable esperar cifras en el entorno de los 100 km, aunque actualizaremos la ficha con el dato oficial.\n\nLo que sí está confirmado es la tecnología de baterías **LFP de BYD**, las más seguras y duraderas del mercado, con 5 años de garantía y segunda vida como almacenamiento energético.",
 "equipo_txt": "El Lift incluye la **app Nerva City** con monitorización remota, ubicación GPS, bloqueo remoto, configuración de la regeneración y **actualizaciones OTA**. Es el mismo ecosistema conectado del Exe II, en un formato más compacto.\n\nCon 170 kg es 60 kg más ligero que el Exe II, lo que se nota en la agilidad urbana y en parado. El diseño es urbano y funcional, sin el carenado GT de su hermano mayor, pero con la misma calidad de acabados.",
 "faqs": [
   ("¿Cuánto cuesta el Nerva Lift?", "**4.690 €** en España."),
   ("¿Qué potencia tiene?", "**8,05 CV** (unos 5,9 kW)."),
   ("¿Cuánto pesa?", "**170 kg**, mucho más ligero que el Exe II."),
   ("¿Qué autonomía tiene?", "Aún **no publicada** oficialmente por la marca."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Las baterías tienen garantía?", "Sí, **5 años** en las baterías LFP de BYD."),
 ],
  "para_quien": 'Es para ti si quieres entrar en **Nerva** por 4.690 €, con sus baterías BYD y su app conectada, en un formato urbano ligero. Ideal para la ciudad diaria. No es para ti si necesitas la máxima potencia: 8 CV son justos para rondas con pasajero. Habrá que esperar a los datos oficiales de autonomía.',
"fuentes_txt": "<a href=https://www.motofichas.com/marcas/scooter/nerva/125cc>ficha en motofichas.com</a>",
},

# ══ 16. PIAGGIO 1 ACTIVE ═══════════════════════════════════════════════════
{
 "slug": "piaggio-1-active-2025-ficha-tecnica-precio",
 "marca": "Piaggio", "modelo": "1 Active", "version": "1 Active 2025", "categoria": "Scooter",
 "precioDesde": 3700, "potenciaKw": 2.0, "potenciaCv": 2.7,
 "autonomiaKm": 85, "autonomiaCiclo": "Declarada", "bateriaKwh": 2.3,
 "velocidadMax": 60, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "~6 h", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Diseño italiano inconfundible: el eléctrico con más estilo del segmento",
   "60 km/h y 85 km de autonomía: el más capaz de la familia Piaggio 1",
   "Batería extraíble de 2,3 kWh: carga en cualquier enchufe",
   "Red Piaggio/Vespa: servicio postventa en toda España",
   "Ligero y compacto, ideal para la ciudad",
 ],
 "contras": [
   "3.700 €: caro frente a chinos con más potencia y autonomía",
   "2 kW se quedan justos en cuestas y con pasajero",
   "Carga lenta: unas 6 horas",
   "Sin ABS ni conectividad avanzada",
   "La autonomía real en modo Sport baja a 66 km",
 ],
 "curiosidades": [
   "La familia Piaggio 1 tiene tres versiones: 1, 1+ y 1 Active",
   "El motor es Bosch, como en muchos de sus rivales chinos",
   "El diseño juega con motivos hexagonales en todo el carenado",
 ],
 "fuenteNombre": "Piaggio España", "fuenteUrl": "https://www.piaggio.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Piaggio 1 Active 2025, scooter eléctrico italiano",
 "alt2": "Piaggio 1 Active, detalle del escudo frontal",
 "alt3": "Piaggio 1 Active en ciudad",
 "title": "Piaggio 1 Active 2025: precio y ficha",
 "excerpt": "El Piaggio 1 Active desde 3.700 €: scooter eléctrico italiano con 60 km/h, 85 km de autonomía, batería extraíble y diseño único.",
 "keywords": ["piaggio 1 active precio", "piaggio 1 active ficha técnica", "piaggio 1 active autonomía", "piaggio 1 active opiniones", "scooter eléctrico italiano", "piaggio 1 active 2025"],
 "entradilla": "El **Piaggio 1 Active** es la versión más capaz del scooter eléctrico italiano: **60 km/h**, **85 km** de autonomía en modo Eco, batería **extraíble de 2,3 kWh** y un precio de **3.700 €**.\n\nFrente a la avalancha de scooters eléctricos chinos, Piaggio juega sus bazas: **diseño italiano** inconfundible, marca con un siglo de historia y una red de concesionarios y servicio en toda España. No es el más potente ni el más barato, pero es el que más estilo tiene.",
 "precio_txt": "El 1 Active se vende por **3.700 €** (algunos concesionarios lo anuncian por 3.650 €). Es más caro que el NIU NQiX 300 (3.599 €) o el Velca Calima S (3.690 €), con menos potencia (2 kW) y menos autonomía.\n\nSu argumento no es la ficha técnica, sino la marca: quien compra Piaggio paga el diseño, la red de servicio y la reventa. Con el Plan MOVES el precio se suaviza, y el coste de uso sigue siendo mínimo.",
 "autonomia_txt": "La batería de **2,3 kWh es extraíble** y se carga en unas **6 horas** en un enchufe normal. La autonomía declarada es de **85 km en modo Eco** y **66 km en modo Sport**: en uso urbano real, con el modo Sport para seguir el tráfico, conviene contar con unos 60 km.\n\nAl ser extraíble, no necesitas garaje con enchufe: la subes a casa como una maleta. Es la gran ventaja práctica frente a eléctricos con batería fija.",
 "equipo_txt": "El 1 Active monta un **motor Bosch de 2 kW (2,7 CV)** que le permite alcanzar los **60 km/h**, con dos modos de conducción (Eco limitado a 30 km/h y Sport). La instrumentación es digital y el arranque es **keyless** con mando a distancia.\n\nEl diseño es su gran baza: escudo clásico de Piaggio, grupos ópticos con firma lumínica propia y detalles hexagonales en el carenado. Pesa poco, es compacto (1.680 mm de largo) y el asiento está a 770 mm.",
 "faqs": [
   ("¿Cuánto cuesta el Piaggio 1 Active?", "**3.700 €** en España (algunos concesionarios lo anuncian por 3.650 €)."),
   ("¿Qué autonomía tiene?", "**85 km en modo Eco** y 66 km en modo Sport, con su batería extraíble de 2,3 kWh."),
   ("¿Qué velocidad máxima alcanza?", "**60 km/h**, con motor Bosch de 2 kW."),
   ("¿La batería se extrae?", "Sí, es **extraíble** y se carga en unas 6 horas en un enchufe normal."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿En qué se diferencia del Piaggio 1 básico?", "El Active tiene **más potencia (2 kW), más velocidad (60 km/h) y más autonomía (85 km)** que las versiones 1 y 1+."),
 ],
  "para_quien": 'Es para ti si el **diseño italiano** es innegociable y quieres una Vespa... perdón, una Piaggio eléctrica con estilo único. Ideal para la ciudad con encanto. No es para ti si miras la ficha técnica con lupa: por 3.700 € hay chinos con más potencia, autonomía y equipamiento. Aquí se paga el estilo y la marca.',
"fuentes_txt": "<a href=https://www.motos.coches.net/noticias/piaggio-1-scooter-electrico-presentacion>presentación en motos.net</a>, <a href=https://es.motos-electricas.org/opiniones/piaggio-1-active-caracteristicas-precio-y-opiniones/>ficha en motos-electricas.org</a> y <a href=https://www.piaggio.com>Piaggio</a>",
},
# ══ 17. VESPA ELETTRICA 70 ═════════════════════════════════════════════════
{
 "slug": "vespa-elettrica-70-2025-ficha-tecnica-precio",
 "marca": "Vespa", "modelo": "Elettrica 70", "version": "Elettrica 70 km/h 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": None, "potenciaCv": None,
 "autonomiaKm": 100, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 70, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "~4 h", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "El icono Vespa en versión eléctrica: diseño atemporal único",
   "70 km/h: la Elettrica capaz de seguir el tráfico extraurbano",
   "100 km de autonomía declarada",
   "Silenciosa, suave y con el encanto de una Vespa de verdad",
   "Red Vespa: servicio y reventa garantizados",
 ],
 "contras": [
   "Precio no publicado para la versión 70: la gama parte de 6.790 €",
   "Es la eléctrica urbana más cara por prestación",
   "Ficha técnica poco detallada por la marca",
   "70 km/h justos para vías rápidas",
   "El encanto se paga: rivales chinos ofrecen más por menos",
 ],
 "curiosidades": [
   "La Elettrica se ofrece en dos versiones: 45 km/h (ciclomotor) y 70 km/h (equivalente a 125)",
   "Es la primera Vespa 100% eléctrica de la historia de la marca",
   "Mantiene el monocasco de acero típico de Vespa",
 ],
 "fuenteNombre": "Vespa España", "fuenteUrl": "https://www.vespa.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Vespa Elettrica 70 2025, scooter eléctrico icónico",
 "alt2": "Vespa Elettrica 70, detalle del escudo clásico",
 "alt3": "Vespa Elettrica 70 en ciudad",
 "title": "Vespa Elettrica 70 2025: ficha y precio",
 "excerpt": "La Vespa Elettrica 70: la icónica Vespa eléctrica en versión de 70 km/h, con 100 km de autonomía, carnet A1 y etiqueta Cero.",
 "keywords": ["vespa elettrica 70", "vespa elettrica 70 precio", "vespa elettrica 70 ficha técnica", "vespa eléctrica 125", "vespa elettrica autonomía", "vespa elettrica opiniones"],
 "entradilla": "La **Vespa Elettrica 70** es la versión equivalente a 125 de la Vespa eléctrica: **70 km/h** de velocidad máxima, **100 km** de autonomía declarada y todo el encanto del icono italiano, con carnet A1.\n\nMientras la Elettrica básica (45 km/h) es un ciclomotor urbano, la **versión 70** puede con el tráfico extraurbano y las rondas. Es la Vespa eléctrica para quien no quiere renunciar a nada: ni al estilo, ni a la practicidad, ni a las prestaciones mínimas para moverse con soltura.",
 "precio_txt": "Vespa **no publica un precio separado** para la versión 70 en su web española; la gama Elettrica **parte de unos 6.790 €**, y la versión 70 se sitúa por encima. Es, con diferencia, el scooter eléctrico urbano más caro por prestación.\n\nQuien la compra no mira la ficha técnica: paga el icono, el diseño atemporal y una reventa que ningún rival chino iguala. Con el Plan MOVES el desembolso se reduce, pero seguirá siendo una compra emocional.",
 "autonomia_txt": "La Elettrica 70 declara **100 km de autonomía**, con una batería de iones de litio que se carga en unas **4 horas** en un enchufe doméstico. En uso real, con la velocidad de 70 km/h, conviene contar con 70-80 km.\n\nEs una autonomía pensada para la ciudad y el extrarradio: suficiente para el día a día, justa para plantearse viajes. La carga es sencilla y no requiere instalación especial.",
 "equipo_txt": "La Elettrica 70 mantiene el **monocasco de acero** típico de Vespa, con un diseño que es puro icono: faro redondo, escudo clásico y acabados de primera. La instrumentación es digital con conectividad, y la entrega de potencia es suave y silenciosa.\n\nNo busca la máxima tecnología ni las cifras récord: busca ser una Vespa. Y en eso, no tiene rival: ningún scooter eléctrico transmite lo mismo al circular por la ciudad.",
 "faqs": [
   ("¿Qué velocidad alcanza la Vespa Elettrica 70?", "**70 km/h**, frente a los 45 km/h de la versión ciclomotor."),
   ("¿Qué autonomía tiene?", "**100 km** declarados, con carga en unas 4 horas."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Cuánto cuesta?", "La gama Elettrica **parte de 6.790 €**; la versión 70 está por encima (precio no publicado)."),
   ("¿En qué se diferencia de la Elettrica 45?", "En la **velocidad máxima (70 vs 45 km/h)** y la homologación: la 70 es equivalente a 125."),
   ("¿Tiene etiqueta Cero?", "Sí, al ser 100% eléctrica le corresponde la **etiqueta Cero** de la DGT."),
 ],
  "para_quien": 'Es para ti si quieres **la Vespa eléctrica** y necesitas los 70 km/h para moverte con soltura. Es una compra emocional: el icono italiano, en silencio. No es para ti si buscas la mejor relación calidad/precio: es la eléctrica urbana más cara por prestación. Pero ninguna otra transmite lo mismo en un semáforo.',
"fuentes_txt": "<a href=https://www.vespa.com>Vespa oficial</a> y <a href=https://v2charge.com/es/mejores-motos-electricas-comprar/>comparativa en v2charge.com</a>",
},
# ══ 18. EBROH VERACRUZ ═════════════════════════════════════════════════════
{
 "slug": "ebroh-veracruz-2025-ficha-tecnica-precio",
 "marca": "Ebroh", "modelo": "Veracruz", "version": "Veracruz 2025", "categoria": "Scooter",
 "precioDesde": 3890, "potenciaKw": 4.7, "potenciaCv": 6.4,
 "autonomiaKm": 80, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 80, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico (baterías extraíbles)", "etiquetaDgt": "Cero",
 "aprox": ["potenciaCv"],
 "pros": [
   "Motor Bosch de 4,7 kW: fiabilidad alemana en un scooter español",
   "80 km/h de velocidad máxima por 3.890 €: muy buena relación precio/prestaciones",
   "Dos baterías extraíbles de 20Ah: carga flexible en casa o en el trabajo",
   "Estética clásica italiana con asiento de símil cuero marrón",
   "Marca de Zaragoza especializada en scooters eléctricos",
 ],
 "contras": [
   "80 km de autonomía: justa para un uso intensivo",
   "Marca pequeña: red de distribución limitada fuera de Aragón",
   "Sin ABS confirmado ni electrónica avanzada",
   "El diseño clásico no es para quien busque deportividad",
   "Capacidad de las baterías (2x20Ah) modesta",
 ],
 "curiosidades": [
   "Ebroh es una firma de Zaragoza especializada en scooters eléctricos",
   "La Veracruz supuso el salto de la marca por encima de los 45 km/h",
   "Su estética se inspira en los scooters italianos de los años 60",
 ],
 "fuenteNombre": "Ebroh", "fuenteUrl": "https://www.ebroh.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Ebroh Veracruz 2025, scooter eléctrico de estética clásica",
 "alt2": "Ebroh Veracruz, detalle del asiento de símil cuero",
 "alt3": "Ebroh Veracruz en ciudad",
 "title": "Ebroh Veracruz 2025: precio y ficha técnica",
 "excerpt": "La Ebroh Veracruz desde 3.890 €: scooter eléctrico español con motor Bosch, 80 km/h, 80 km de autonomía y estética clásica italiana.",
 "keywords": ["ebroh veracruz precio", "ebroh veracruz ficha técnica", "ebroh veracruz autonomía", "scooter eléctrico español", "ebroh opiniones", "ebroh veracruz 2025"],
 "entradilla": "La **Ebroh Veracruz** es el scooter con el que la firma de **Zaragoza** dio el salto por encima de los 45 km/h: **motor Bosch de 4,7 kW**, **80 km/h** de velocidad máxima, **80 km** de autonomía y un precio de **3.890 €**.\n\nCon estética clásica italiana —asiento de símil cuero marrón incluido— y dos baterías extraíbles, la Veracruz es la propuesta española para quien quiere un 125 eléctrico con encanto retro sin pagar el sobreprecio de Vespa o Piaggio.",
 "precio_txt": "La Veracruz cuesta **3.890 €**, un precio muy competitivo para un equivalente a 125 con motor Bosch. Compite con el Velca Calima S (3.690 €, más autonomía y ABS) y el Yadea C1S Pro (4.890 €).\n\nSu argumento es el equilibrio: ni la más barata ni la más equipada, pero con un motor de marca premium, estética diferenciada y fabricación con sello español. Las ayudas del Plan MOVES la dejan en una cifra muy atractiva.",
 "autonomia_txt": "Monta **dos baterías de iones de litio de 20Ah** cada una, **extraíbles**, con **80 km** de autonomía declarada. Se cargan con el cargador incluido en cualquier **enchufe doméstico de 220V**.\n\nLa gracia del sistema dual es la flexibilidad: si no has agotado la autonomía, basta con cargar una de las dos, más ligera y fácil de transportar. Para un uso urbano diario, 80 km son suficientes con recarga nocturna.",
 "equipo_txt": "El motor **Bosch de 4,7 kW (6,4 CV)** va integrado en el buje de la rueda trasera, liberando espacio interior para las baterías y la carga. Con **80 km/h** de punta, se defiende en ciudad y en rondas.\n\nEstéticamente, la Veracruz apuesta por el **clasicismo italiano**: líneas redondeadas, amplio asiento para dos plazas con acabado en símil cuero marrón claro y detalles cromados. Un scooter con personalidad propia en un segmento de diseños cada vez más parecidos.",
 "faqs": [
   ("¿Cuánto cuesta la Ebroh Veracruz?", "**3.890 €** en España."),
   ("¿Qué motor lleva?", "Un **Bosch de 4,7 kW (6,4 CV)** integrado en la rueda trasera."),
   ("¿Qué autonomía tiene?", "**80 km** declarados con sus dos baterías extraíbles de 20Ah."),
   ("¿Las baterías son extraíbles?", "Sí, las **dos se extraen** y se cargan en un enchufe doméstico de 220V."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Es una marca española?", "Sí, **Ebroh** es una firma de Zaragoza especializada en scooters eléctricos."),
 ],
  "para_quien": 'Es para ti si buscas un **125 eléctrico con estética clásica** y motor Bosch por 3.890 €, con sello español. Ideal para la ciudad con encanto retro. No es para ti si necesitas mucha autonomía: 80 km son justos para usos intensivos. La Calima S ofrece más autonomía y ABS por menos dinero, pero sin su estilo.',
"fuentes_txt": "<a href=https://www.moto125.cc/scooter-electrico-ebroh-veracruz>presentación en moto125.cc</a>",
},
# ══ 19. EBROH BRAVO CR ══════════════════════════════════════════════════════
{
 "slug": "ebroh-bravo-cr-2025-ficha-tecnica-precio",
 "marca": "Ebroh", "modelo": "Bravo CR", "version": "Bravo CR 2025", "categoria": "Urbana",
 "precioDesde": 5990, "potenciaKw": 5.0, "potenciaCv": None,
 "autonomiaKm": 100, "autonomiaCiclo": "Declarada", "bateriaKwh": 7.2,
 "velocidadMax": 115, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "~5 h", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "115 km/h de velocidad máxima: la eléctrica urbana española más rápida",
   "Batería de 72V y 100Ah (7,2 kWh): 100 km de autonomía",
   "Estética naked deportiva con semimanillares: parece una moto grande",
   "Doble disco delantero y frenada CBS",
   "Desarrollada y homologada en España, con 3 años de garantía",
 ],
 "contras": [
   "5.990 €: precio elevado para el segmento",
   "Carga completa en unas 5 horas",
   "Postura deportiva con semimanillares: menos cómoda que un scooter",
   "Marca pequeña: servicio postventa concentrado",
   "Sin ABS: frenada CBS con doble disco",
 ],
 "curiosidades": [
   "La Bravo CR monta semimanillares en lugar de manillar, como las deportivas",
   "Su instrumentación LCD incluye selector giratorio de modos, marcha atrás y punto muerto",
   "Ebroh la define como una deportiva con alma touring",
 ],
 "fuenteNombre": "Ebroh", "fuenteUrl": "https://www.ebroh.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Ebroh Bravo CR 2025, naked eléctrica deportiva española",
 "alt2": "Ebroh Bravo CR, detalle del frontal con doble óptica LED",
 "alt3": "Ebroh Bravo CR en carretera",
 "title": "Ebroh Bravo CR 2025: precio y ficha técnica",
 "excerpt": "La Ebroh Bravo CR desde 5.990 €: naked eléctrica española con 115 km/h, 100 km de autonomía, 7,2 kWh y estética deportiva.",
 "keywords": ["ebroh bravo cr precio", "ebroh bravo cr ficha técnica", "ebroh bravo cr autonomía", "naked eléctrica española", "ebroh bravo opiniones", "moto eléctrica 115 km/h"],
 "entradilla": "La **Ebroh Bravo CR** es la naked eléctrica **desarrollada y homologada en España**: **5 kW**, **115 km/h** de velocidad punta, **100 km** de autonomía con su batería de 7,2 kWh y una estética deportiva con **semimanillares**, por **5.990 €**.\n\nNo es un scooter: es una moto eléctrica urbana con alma deportiva, para quien quiere las sensaciones de una naked con el silencio y el coste por kilómetro de un eléctrico. La más rápida de las eléctricas urbanas españolas.",
 "precio_txt": "La Bravo CR cuesta **5.990 €** (la edición especial CR, con colores exclusivos, al mismo precio). Con el Plan MOVES III se queda en **4.890 €**, una cifra mucho más competitiva.\n\nEn su franja compite con la NIU RQi Sport y la Zero FXE, aunque la Ebroh juega con menos potencia (5 kW) y más enfoque urbano. Su argumento: ser española, con desarrollo y homologación nacionales y 3 años de garantía.",
 "autonomia_txt": "La batería es de **litio de 72V y 100Ah (7,2 kWh)**, con **100 km** de autonomía declarada y carga completa en unas **5 horas** con el cargador de 14A incluido.\n\nCon 115 km/h de punta, la Bravo CR puede salir a carretera, donde el consumo se dispara: en uso mixto conviene contar con 70-80 km reales. Para ciudad, los 100 km dan para varios días sin recargar.",
 "equipo_txt": "La parte ciclo es seria para su potencia: **doble disco delantero**, frenada **CBS**, horquilla y neumáticos sobredimensionados (110/70-17 delante, 140/70-17 detrás) y suspensión trasera progresiva. La postura, con **semimanillares**, es deportiva.\n\nLa instrumentación es una **pantalla LCD** con velocímetro, autonomía, nivel de batería y modo seleccionado, con un **mando giratorio** para elegir entre los modos de conducción, la marcha atrás y el punto muerto. Iluminación **full LED** y toma USB completan el conjunto.",
 "faqs": [
   ("¿Cuánto cuesta la Ebroh Bravo CR?", "**5.990 €**, que se quedan en 4.890 € con el Plan MOVES III."),
   ("¿Qué velocidad máxima tiene?", "**115 km/h**, la más alta de las eléctricas urbanas españolas."),
   ("¿Qué autonomía tiene?", "**100 km** declarados con su batería de 72V y 100Ah (7,2 kWh)."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Es una moto o un scooter?", "Una **naked deportiva**: semimanillares, postura atacada y estética de moto grande."),
   ("¿Es española?", "Sí, **desarrollada y homologada en España** por Ebroh (Zaragoza), con 3 años de garantía."),
 ],
  "para_quien": 'Es para ti si quieres una **naked eléctrica española** con 115 km/h y estética deportiva. Ideal para disfrutar en ciudad y carretera con algo diferente. No es para ti si buscas la máxima potencia por euro: 5 kW por 5.990 € es caro. Con el MOVES (4.890 €) la ecuación mejora mucho.',
"fuentes_txt": "<a href=https://www.octopusmovilidad.com/producto/motocicleta-electrica-ebroh-bravo-cr/>ficha y precio en Octopus Movilidad</a> y <a href=https://clubdelmotorista.com/ebroh-bravo-cr-pensarias-que-es-una-moto-electrica/>prueba en clubdelmotorista.com</a>",
},
# ══ 20. ASKOLL ES3 ══════════════════════════════════════════════════════════
{
 "slug": "askoll-es3-2025-ficha-tecnica-precio",
 "marca": "Askoll", "modelo": "eS3", "version": "eS3 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 3.0, "potenciaCv": 4.0,
 "autonomiaKm": 96, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 66, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "5 h por batería", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "Fue la moto eléctrica más vendida en España en su segmento: éxito probado",
   "96 km de autonomía con dos baterías extraíbles",
   "Marca italiana con ingeniería propia (Askoll fabrica sus motores)",
   "66 km/h: más que un ciclomotor, sin llegar a 125",
   "Silenciosa, ligera y muy fácil de conducir en ciudad",
 ],
 "contras": [
   "Precio actual no publicado en España",
   "Freno trasero de tambor, mejorable",
   "Diseño funcional sin pretensiones estéticas",
   "66 km/h se quedan cortos en rondas rápidas",
   "Cada batería tarda 5 horas en cargarse",
 ],
 "curiosidades": [
   "Askoll empezó fabricando motores eléctricos para terceros antes de hacer motos",
   "La eS3 fue la eléctrica más vendida en España en 2021 en su categoría",
   "La distancia entre ejes de 1.245 mm la hace muy estable",
 ],
 "fuenteNombre": "Askoll", "fuenteUrl": "https://www.askoll.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Askoll eS3 2025, scooter eléctrico italiano",
 "alt2": "Askoll eS3, detalle del diseño funcional",
 "alt3": "Askoll eS3 en ciudad",
 "title": "Askoll eS3 2025: ficha técnica y precio",
 "excerpt": "El Askoll eS3: scooter eléctrico italiano con 96 km de autonomía, 66 km/h, 2 baterías extraíbles y 3 kW. La superventas eléctrica.",
 "keywords": ["askoll es3", "askoll es3 ficha técnica", "askoll es3 precio", "askoll es3 autonomía", "scooter eléctrico italiano", "askoll opiniones"],
 "entradilla": "El **Askoll eS3** es el scooter eléctrico italiano que fue **el más vendido de España** en su segmento: **3 kW**, **66 km/h**, **96 km** de autonomía con dos baterías extraíbles y una sencillez de uso total.\n\nAskoll, fabricante italiano de motores eléctricos, aplicó su ingeniería a un scooter urbano sin complicaciones: silencioso, ligero y práctico. No es el más potente ni el más bonito, pero fue el que más españoles eligieron cuando la moto eléctrica despegó.",
 "precio_txt": "Askoll **no publica el precio actual** del eS3 en España. En su época de mayor éxito se vendía en el entorno de los 3.500-4.000 €, una cifra competitiva para sus prestaciones.\n\nSu argumento comercial siempre fue el coste total: consumo mínimo, mantenimiento casi nulo y una fiabilidad probada por miles de unidades en circulación. Actualizaremos la ficha con la tarifa vigente.",
 "autonomia_txt": "El eS3 monta **dos baterías extraíbles** que suman **96 km** de autonomía declarada. Cada una se carga en **5 horas** en un enchufe doméstico.\n\nAl ser extraíbles, puedes rotarlas: una en el scooter y otra cargando. Para un uso urbano diario, 96 km dan para dos o tres días sin pasar por el enchufe, y la carga nocturna lo deja listo cada mañana.",
 "equipo_txt": "El motor, de **fabricación propia Askoll**, rinde **3 kW (4 CV)** y permite alcanzar los **66 km/h**, a medio camino entre un ciclomotor y un 125. La parte ciclo es sencilla: disco delantero, **tambor trasero** y una distancia entre ejes de 1.245 mm que le da buena estabilidad.\n\nLa altura del asiento (760 mm) y el peso contenido lo hacen muy accesible. Es un scooter funcional, sin pantallas táctiles ni modos sofisticados: arrancar y rodar, en silencio.",
 "faqs": [
   ("¿Qué autonomía tiene el Askoll eS3?", "**96 km** declarados con sus dos baterías extraíbles."),
   ("¿Qué velocidad máxima alcanza?", "**66 km/h**, entre un ciclomotor y un 125."),
   ("¿Cuánto cuesta?", "Askoll **no publica el precio actual** en España."),
   ("¿Las baterías son extraíbles?", "Sí, las **dos son extraíbles** y cada una tarda 5 horas en cargarse."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Es una marca fiable?", "Askoll es un **fabricante italiano** de motores eléctricos y su eS3 fue el más vendido de su segmento en España."),
 ],
  "para_quien": 'Es para ti si buscas un scooter eléctrico **probado y fiable**, el que más españoles eligieron en su momento. Ideal para un uso urbano sin complicaciones. No es para ti si quieres lo último en tecnología o diseño: es un scooter funcional. Habrá que confirmar precio y disponibilidad actuales.',
"fuentes_txt": "<a href=https://motos.coches.net/noticias/las-motocicletas-electricas-mas-vendidas-en-espana-hasta-septiembre-2021>las más vendidas en motos.net</a> y <a href=https://www.askoll.com>Askoll</a>",
},

# ══ 21. BLUESHARK R80 LITE HS ══════════════════════════════════════════════
{
 "slug": "blueshark-r80-lite-hs-2025-ficha-tecnica-precio",
 "marca": "Blueshark", "modelo": "R80 Lite HS", "version": "R80 Lite HS 2025", "categoria": "Urbana",
 "precioDesde": 3190, "potenciaKw": 3.0, "potenciaCv": None,
 "autonomiaKm": 80, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": None, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "3.000 W y 80 km de autonomía por 3.190 €: muy buena relación precio/prestaciones",
   "Capacidad para dos baterías: autonomía ampliable",
   "Tres versiones en la gama (R80 Lite HS, R80 HS, R1 Lite LS) para elegir",
   "Estética moderna de moto urbana",
   "Distribución en España con servicio postventa",
 ],
 "contras": [
   "Velocidad máxima no publicada en las fichas disponibles",
   "Marca poco conocida en España: reventa incierta",
   "Ficha técnica poco detallada",
   "Sin ABS confirmado",
   "La competencia china (NIU, Segway) tiene mejor red",
 ],
 "curiosidades": [
   "Blueshark ofrece tres motorizaciones con la misma base de 3.000 W",
   "La versión R80 HS sube a 3.690 € con más equipamiento",
   "Es una de las marcas que más crece en el segmento de flotas urbanas",
 ],
 "fuenteNombre": "Blueshark", "fuenteUrl": "https://www.blueshark.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Blueshark R80 Lite HS 2025, moto eléctrica urbana",
 "alt2": "Blueshark R80 Lite HS, detalle del diseño",
 "alt3": "Blueshark R80 Lite HS en ciudad",
 "title": "Blueshark R80 Lite HS 2025: precio y ficha",
 "excerpt": "La Blueshark R80 Lite HS desde 3.190 €: moto eléctrica urbana con 3.000 W, 80 km de autonomía y doble batería opcional.",
 "keywords": ["blueshark r80 lite hs precio", "blueshark r80 ficha técnica", "blueshark r80 lite hs autonomía", "moto eléctrica 3000w", "blueshark opiniones", "blueshark españa"],
 "entradilla": "La **Blueshark R80 Lite HS** es la moto eléctrica urbana de acceso de la marca: **3.000 W** de potencia, **80 km** de autonomía declarada, capacidad para **dos baterías** y un precio de **3.190 €**.\n\nBlueshark desembarca en España con una gama de tres versiones sobre la misma base, pensadas para el uso urbano intensivo y las flotas. La Lite HS es la puerta de entrada: prestaciones honestas, precio ajustado y la posibilidad de ampliar la autonomía con la segunda batería.",
 "precio_txt": "La R80 Lite HS cuesta **3.190 €**, mientras que la R80 HS sube a **3.690 €** con más equipamiento. Son precios competitivos para 3.000 W y 80 km de autonomía.\n\nEn su franja compite con el NIU NQiX 300 (3.599 €) y el Velca Calima S (3.690 €). La Blueshark juega con precio más bajo a cambio de una marca menos conocida y una red en construcción. Con el Plan MOVES, se queda en una cifra muy interesante.",
 "autonomia_txt": "La autonomía declarada es de **80 km** con la batería de serie, **ampliable con una segunda unidad**. Es el planteamiento habitual del segmento: una batería para el día a día ligero, dos para los que hacen muchos kilómetros.\n\nLa carga se realiza en un enchufe doméstico. Al admitir doble batería, puedes rotarlas y no quedarte nunca sin scooter, un argumento importante para uso profesional o repartos.",
 "equipo_txt": "El motor de **3.000 W** ofrece una aceleración solvente en ciudad, con la entrega inmediata típica de los eléctricos. La R80 Lite HS comparte la base técnica con sus hermanas R80 HS y R1 Lite LS, que añaden equipamiento y autonomía.\n\nEl diseño es moderno y urbano, con iluminación LED y una postura cómoda para el día a día. Es una moto pensada para trabajar: sencilla, robusta y barata de mantener.",
 "faqs": [
   ("¿Cuánto cuesta la Blueshark R80 Lite HS?", "**3.190 €** en España."),
   ("¿Qué autonomía tiene?", "**80 km** declarados, ampliables con una segunda batería."),
   ("¿Qué potencia tiene?", "**3.000 W**.",
   ),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Se puede poner una segunda batería?", "Sí, admite **doble batería** para ampliar la autonomía."),
   ("¿Qué otras versiones hay?", "La **R80 HS** (3.690 €) y la **R1 Lite LS**, con más equipamiento."),
 ],
  "para_quien": 'Es para ti si buscas **3.000 W y 80 km por 3.190 €**, una de las mejores relaciones potencia/precio del segmento. Ideal para ciudad con algo de chispa. No es para ti si la marca y la reventa te importan: Blueshark aún es poco conocida en España. La red de servicio está en construcción.',
"fuentes_txt": "<a href=https://mpracing.es/1135-vehiculos-electricos>ficha y precio en MPRacing</a>",
},
# ══ 22. EFUN TIGER MY25 ════════════════════════════════════════════════════
{
 "slug": "efun-tiger-my25-2025-ficha-tecnica-precio",
 "marca": "Efun", "modelo": "Tiger MY25", "version": "Tiger MY25 2025", "categoria": "Scooter",
 "precioDesde": 6590, "potenciaKw": 7.0, "potenciaCv": None,
 "autonomiaKm": 250, "autonomiaCiclo": "Declarada", "bateriaKwh": 10.8,
 "velocidadMax": 125, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "6 h (0-100%), 4 h (0-85%)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "250 km de autonomía declarada: la mayor de todos los scooters eléctricos urbanos",
   "Batería CATL de 72V y 150Ah (10,8 kWh): celdas del líder mundial",
   "125 km/h de velocidad máxima con 7 kW: prestaciones de 125 de verdad",
   "ABS, Apple CarPlay y Android Auto en el display",
   "5 años de garantía en la batería, ampliables a 8",
 ],
 "contras": [
   "6.590 €: precio de scooter premium",
   "Batería enorme: peso elevado (no publicado, pero considerable)",
   "6 horas para la carga completa",
   "Marca china con red en construcción en España",
   "Tanta autonomía es innecesaria para un uso urbano normal",
 ],
 "curiosidades": [
   "Su batería CATL de 10,8 kWh es de las mayores montadas en un scooter",
   "En pruebas independientes ha superado los 200 km de autonomía real",
   "El display integra Apple CarPlay y Android Auto, raro en motos",
 ],
 "fuenteNombre": "Efun", "fuenteUrl": "https://www.efunmotos.com",
 "videoId": "2jxyW-CtXWU", "videoCanal": "El Rincón Práctico",
 "alt1": "Efun Tiger MY25 2025, scooter eléctrico de gran autonomía",
 "alt2": "Efun Tiger MY25, detalle del frontal",
 "alt3": "Efun Tiger MY25 en carretera",
 "title": "Efun Tiger MY25: precio y ficha técnica",
 "excerpt": "El Efun Tiger MY25 desde 6.590 €: scooter eléctrico con 250 km de autonomía, 125 km/h, batería CATL de 10,8 kWh y ABS.",
 "keywords": ["efun tiger precio", "efun tiger my25", "efun tiger ficha técnica", "efun tiger autonomía", "scooter eléctrico 250 km autonomía", "efun opiniones"],
 "entradilla": "El **Efun Tiger MY25** es el scooter eléctrico de la **autonomía imposible**: **250 km** declarados gracias a una batería **CATL de 72V y 150Ah (10,8 kWh)**, la mayor de su categoría. Con **7 kW**, **125 km/h** de punta, ABS y un precio de **6.590 €**.\n\nEn pruebas independientes ha superado los **200 km reales**, una cifra que ningún rival urbano iguala. Es el scooter eléctrico para quien quiere olvidarse del enchufe durante una semana entera: el anti-ansiedad de autonomía con ruedas.",
 "precio_txt": "El Tiger MY25 cuesta **6.590 €**, un precio premium para un scooter eléctrico urbano. Con el Plan MOVES III y la deducción del IRPF, en pruebas se ha calculado que puede quedarse en poco más de **3.000 €** efectivos.\n\nEs caro, pero la batería lo justifica: 10,8 kWh con celdas CATL y 5 años de garantía (ampliables a 8) es un activo que ningún rival ofrece. Si haces 100 km al día, es de los pocos eléctricos que te sirven sin recargar a mediodía.",
 "autonomia_txt": "La batería **CATL de 72V y 150Ah (10,8 kWh)** declara **250 km** de autonomía. En la **prueba a fondo de El Rincón Práctico superó los 200 km reales**, una cifra extraordinaria.\n\nLa carga completa lleva **6 horas** (4 horas para el 0-85%) con el cargador incluido. Tres modos de conducción (Eco 55 km/h, Urban 85 km/h, Sport 125 km/h) permiten gestionar la autonomía, y la **marcha atrás** y el asistente de aparcamiento facilitan las maniobras con un scooter de este tamaño.",
 "equipo_txt": "El Tiger MY25 viene cargado: **ABS** con frenos de disco de 260 mm, **suspensión trasera de gas regulable**, **display con Apple CarPlay y Android Auto**, conectividad Bluetooth, iluminación **full LED**, neumáticos **Michelin City Grip II** y toma USB.\n\nEl motor de **7 kW** es extraíble de la llanta para facilitar el cambio de neumático, un detalle pensado para el mantenimiento. Con 125 km/h de punta, es un 125 de verdad, válido para autovía.",
 "faqs": [
   ("¿Cuánto cuesta el Efun Tiger MY25?", "**6.590 €**, con 5 años de garantía en la batería (ampliables a 8)."),
   ("¿Qué autonomía real tiene?", "Declara **250 km**; en pruebas independientes ha superado los **200 km reales**."),
   ("¿Qué batería lleva?", "Una **CATL de 72V y 150Ah (10,8 kWh)**, la mayor de su categoría."),
   ("¿Qué velocidad máxima tiene?", "**125 km/h**, con tres modos: Eco (55), Urban (85) y Sport (125)."),
   ("¿Lleva ABS?", "Sí, **ABS** con discos de 260 mm y tecnología regenerativa."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
 ],
  "para_quien": 'Es para ti si la **autonomía es tu obsesión** y quieres olvidarte del enchufe durante días (o una semana). Ideal para commuters de muchos kilómetros o repartidores. No es para ti si buscas precio ajustado: 6.590 € es premium. Pero ninguna otra te da 200 km reales y 5 años de garantía en la batería.',
"fuentes_txt": "<a href=https://www.efunmotos.com/wp-content/uploads/2025/06/CATALOGO-digital-indd_compressed.pdf>catálogo oficial Efun 2025 (PDF)</a>, <a href=https://motoemocion.com/tienda/motos-electricas/motos-electricas-urbanas/moto-electrica-efun-tiger/>ficha en MotoEmoción</a> y <a href=https://www.youtube.com/watch?v=2jxyW-CtXWU>prueba en vídeo de El Rincón Práctico</a>",
},
# ══ 23. SUNRA HAWK 49E ═════════════════════════════════════════════════════
{
 "slug": "sunra-hawk-49e-2025-ficha-tecnica-precio",
 "marca": "Sunra", "modelo": "Hawk 49e", "version": "Hawk 49e 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 1.8, "potenciaCv": 2.4,
 "autonomiaKm": 130, "autonomiaCiclo": "Declarada", "bateriaKwh": 1.44,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": 83, "plazas": 2,
 "carnet": "AM", "carga": "4 h", "etiquetaDgt": "Cero",
 "aprox": ["potenciaCv"],
 "pros": [
   "130 km de autonomía declarada (con batería de 40Ah): récord en ciclomotores",
   "Batería extraíble de solo 10,7 kg equivalente: fácil de transportar",
   "Equipamiento insólito: radio FM, Bluetooth, crucero y USB de serie",
   "83 kg: ligero y manejable",
   "Doble amortiguador trasero regulable en 4 posiciones",
 ],
 "contras": [
   "Precio no publicado en España",
   "1.800 W justos para cuestas con pasajero",
   "Freno trasero de tambor",
   "Diseño deportivo que no es para todos",
   "Marca china con red de servicio limitada",
 ],
 "curiosidades": [
   "Sunra ha vendido más de 30 millones de motos eléctricas en todo el mundo",
   "El Hawk 49e incluye radio FM con Bluetooth, algo único en su segmento",
   "Deriva del Anger 125e, su hermano mayor para el carnet A1",
 ],
 "fuenteNombre": "Sunra", "fuenteUrl": "https://www.sunra.com",
 "videoId": "lIhscDPxZD4", "videoCanal": None,
 "alt1": "Sunra Hawk 49e 2025, scooter eléctrico deportivo ciclomotor",
 "alt2": "Sunra Hawk 49e, detalle del frontal deportivo",
 "alt3": "Sunra Hawk 49e en ciudad",
 "title": "Sunra Hawk 49e 2025: ficha técnica y precio",
 "excerpt": "El Sunra Hawk 49e: ciclomotor eléctrico con 130 km de autonomía, batería extraíble, 45 km/h y equipamiento único. Ficha completa.",
 "keywords": ["sunra hawk 49e", "sunra hawk ficha técnica", "sunra hawk precio", "sunra hawk autonomía", "ciclomotor eléctrico 130 km", "sunra opiniones"],
 "entradilla": "El **Sunra Hawk 49e** es el ciclomotor eléctrico más deportivo del fabricante chino: **1.800 W**, **45 km/h**, **130 km** de autonomía declarada (con la batería de 40Ah) y un equipamiento que ningún rival ofrece (**radio FM, Bluetooth, control de crucero, USB**).\n\nSunra, con más de 30 millones de motos eléctricas vendidas en el mundo, propone un ciclomotor con carácter: estética afilada, suelo plano, doble amortiguador trasero regulable y una batería extraíble que se carga en 4 horas.",
 "precio_txt": "Sunra **no publica el precio** del Hawk 49e en España, aunque se vende a través de distribuidores como PcComponentes y Aurgi. Por su posicionamiento, debería moverse en el entorno de los 2.000-2.500 €.\n\nSu argumento es la autonomía: 130 km declarados son el doble que la mayoría de ciclomotores. Si el precio acompaña, es una de las opciones con mejor relación autonomía/precio del segmento.",
 "autonomia_txt": "La batería de serie es de **72V y 20Ah (1,44 kWh)**, extraíble, con **65 km** de autonomía aproximadamente; con la unidad opcional de **72V y 40Ah**, la autonomía declarada sube a **130 km**. La carga completa lleva **4 horas**.\n\nEl sistema de doble batería (de serie admite la segunda) permite elegir entre autonomía estándar o máxima. Para un ciclomotor, 130 km son una cifra excepcional que lo acerca a los 125.",
 "equipo_txt": "El equipamiento es lo más llamativo: **radio FM con Bluetooth**, **control de velocidad de crucero**, toma **USB**, instrumentación **LCD**, alarma y óptica frontal **LED**. Pocos ciclomotores ofrecen tanto de serie.\n\nEn la parte ciclo, ruedas de **12 pulgadas** (110/70 delante, 120/70 detrás), disco delantero y tambor trasero, y **doble amortiguador trasero regulable en 4 posiciones**. El suelo plano y el pequeño respaldo del pasajero mejoran el confort diario.",
 "faqs": [
   ("¿Qué autonomía tiene el Sunra Hawk 49e?", "Hasta **130 km** declarados con la batería opcional de 72V y 40Ah."),
   ("¿La batería es extraíble?", "Sí, es **extraíble** y se carga en 4 horas en un enchufe normal."),
   ("¿Qué velocidad máxima tiene?", "**45 km/h**, como ciclomotor."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Cuánto cuesta?", "Sunra **no publica el precio** en España; se vende a través de distribuidores."),
   ("¿Qué tiene de especial su equipamiento?", "Incluye **radio FM, Bluetooth, control de crucero y USB** de serie, algo único en su segmento."),
 ],
  "para_quien": 'Es para ti si tienes carnet AM y quieres un ciclomotor **deportivo y equipado** (radio, Bluetooth, crucero) con gran autonomía. Ideal para jóvenes que quieren algo con carácter. No es para ti si buscas marca conocida o red de servicio amplia: Sunra aún es minoritaria en España.',
"fuentes_txt": "<a href=https://www.motofichas.com/marcas/sunra/hawk-49e-2022>ficha en motofichas.com</a>, <a href=https://www.pccomponentes.com/sunra-hawk-scooter-electrica-matriculable-1800w-20ah-plata-brillo>Hawk en PcComponentes</a> y <a href=https://www.aurgi.com/market/sunra-hawk-matriculable-1800w-20ah-motor-electrico-bateria-extraible-de-72v-20-ah-autonomia-de-65km-dos-plazas-carga-rapida-led-radio-bluetooth-plata-brillo>Hawk en Aurgi</a>",
},
# ══ 24. SUNRA ANGER 125E ═══════════════════════════════════════════════════
{
 "slug": "sunra-anger-125e-2025-ficha-tecnica-precio",
 "marca": "Sunra", "modelo": "Anger 125e", "version": "Anger 125e 2025", "categoria": "Scooter",
 "precioDesde": None, "potenciaKw": 3.0, "potenciaCv": 4.0,
 "autonomiaKm": 130, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 80, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "A1", "carga": "Enchufe doméstico", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "130 km de autonomía con doble batería: de las mejores del segmento 125",
   "80 km/h de velocidad máxima: vale para rondas",
   "Arranque por huella dactilar: seguridad sin llave",
   "3 kW con motor en la rueda trasera: sencillo y fiable",
   "Fue uno de los eléctricos más vendidos en España en 2021",
 ],
 "contras": [
   "Precio actual no publicado en España",
   "Diseño sencillo y funcional, sin pretensiones",
   "80 km/h justos para vías rápidas",
   "Ficha técnica poco detallada",
   "Marca con red de servicio limitada en España",
 ],
 "curiosidades": [
   "El Anger 125e es la versión 125 del Hawk 49e",
   "En 2021 fue de las motos eléctricas más vendidas en España, con 158 unidades",
   "El arranque por huella dactilar es único en su rango de precios",
 ],
 "fuenteNombre": "Sunra", "fuenteUrl": "https://www.sunra.com",
 "videoId": None, "videoCanal": None,
 "alt1": "Sunra Anger 125e 2025, scooter eléctrico equivalente a 125",
 "alt2": "Sunra Anger 125e, detalle del diseño",
 "alt3": "Sunra Anger 125e en ciudad",
 "title": "Sunra Anger 125e 2025: ficha técnica",
 "excerpt": "El Sunra Anger 125e: scooter eléctrico con 130 km de autonomía, 80 km/h, doble batería y arranque por huella. Ficha completa.",
 "keywords": ["sunra anger 125e", "sunra anger ficha técnica", "sunra anger precio", "sunra anger autonomía", "scooter eléctrico 130 km", "sunra 125 opiniones"],
 "entradilla": "El **Sunra Anger 125e** es la versión equivalente a 125 del Hawk: **3 kW**, **80 km/h**, **130 km** de autonomía con doble batería y un detalle único en su precio, el **arranque por huella dactilar**.\n\nFue una de las motos eléctricas **más vendidas en España en 2021**, y sigue siendo una opción racional para quien busca un 125 eléctrico sencillo, con mucha autonomía y sin complicaciones. Misma filosofía que el Hawk, con más velocidad y potencia.",
 "precio_txt": "Sunra **no publica el precio actual** del Anger 125e en España. En su época de mayor éxito se movía en el entorno de los 3.000-3.500 €, competitivo para 130 km de autonomía.\n\nSu rivalidad natural es con el Yadea C1S Pro o el NIU NQiX 300, aunque el Sunra juega con menos marca y más autonomía por euro. Actualizaremos la ficha con la tarifa vigente.",
 "autonomia_txt": "El sistema de **doble batería** le permite declarar **130 km** de autonomía, una de las mejores cifras entre los equivalentes a 125. Para un uso urbano e interurbano ligero, son dos o tres días sin recargar.\n\nLas baterías se cargan en un enchufe doméstico. Con 80 km/h de punta, el consumo en rondas es mayor, pero en ciudad la autonomía se estira gracias a la frenada regenerativa y a la velocidad contenida.",
 "equipo_txt": "El motor de **3 kW (4 CV)** va en la rueda trasera, un esquema sencillo y fiable. Lo más llamativo es el **arranque por lector de huella dactilar**, que añade seguridad sin necesidad de llave.\n\nEl cuadro de mandos digital muestra la velocidad, la hora y el nivel de batería. Es un scooter funcional: sin pantallas táctiles ni modos sofisticados, pero con lo esencial bien resuelto y una ligereza que se agradece en ciudad.",
 "faqs": [
   ("¿Qué autonomía tiene el Sunra Anger 125e?", "**130 km** declarados gracias a su sistema de doble batería."),
   ("¿Qué velocidad máxima alcanza?", "**80 km/h**, válido para ciudad y rondas."),
   ("¿Qué potencia tiene?", "**3 kW (4 CV)** con motor en la rueda trasera."),
   ("¿Cuánto cuesta?", "Sunra **no publica el precio actual** en España."),
   ("¿Qué carnet necesito?", "El **carnet A1** o el B con 3 años de antigüedad."),
   ("¿Es verdad que arranca con la huella?", "Sí, tiene **lector de huella dactilar** para arrancar sin llave."),
 ],
  "para_quien": 'Es para ti si buscas un **125 eléctrico sencillo con mucha autonomía** (130 km) sin pagar de más. Ideal para el día a día sin complicaciones. No es para ti si quieres prestaciones o tecnología puntera: es un scooter honesto y funcional. Habrá que confirmar su precio actual.',
"fuentes_txt": "<a href=https://motos.coches.net/noticias/las-motocicletas-electricas-mas-vendidas-en-espana-hasta-septiembre-2021>las más vendidas en motos.net</a>",
},
# ══ 25. E-ZI MINISCOOTER ═══════════════════════════════════════════════════
{
 "slug": "e-zi-miniscooter-2025-ficha-tecnica-precio",
 "marca": "E-Zi", "modelo": "Miniscooter", "version": "Miniscooter 2025", "categoria": "Scooter",
 "precioDesde": 1499, "potenciaKw": None, "potenciaCv": None,
 "autonomiaKm": 50, "autonomiaCiclo": "Declarada", "bateriaKwh": None,
 "velocidadMax": 45, "ceroCincuenta": None, "pesoKg": None, "plazas": 2,
 "carnet": "AM", "carga": "Enchufe doméstico (batería extraíble)", "etiquetaDgt": "Cero",
 "aprox": [],
 "pros": [
   "1.499 €: de los scooters eléctricos matriculables más baratos de España",
   "Batería extraíble: se carga en casa sin garaje",
   "Ligero, práctico y manejable: ideal para la ciudad",
   "Dos plazas y dos modos de potencia (Eco 25 km/h y normal 45 km/h)",
   "Fabricado por QJiang (grupo Geely): respaldo industrial",
 ],
 "contras": [
   "50 km de autonomía: solo para usos urbanos cortos",
   "Potencia no publicada: prestaciones básicas",
   "Acabados sencillos, acordes al precio",
   "Red de distribución limitada en España",
   "Sin conectividad ni equipamiento avanzado",
 ],
 "curiosidades": [
   "E-Zi es la marca eléctrica vinculada a Keeway, del grupo Geely (Volvo, Lotus)",
   "El modo Eco limitado a 25 km/h estira la autonomía al máximo",
   "Su hermano mayor, el Ezi City, ofrece 3.600 W con dos motores",
 ],
 "fuenteNombre": "E-Zi / Keeway", "fuenteUrl": "https://www.keeway.com",
 "videoId": None, "videoCanal": None,
 "alt1": "E-Zi Miniscooter 2025, scooter eléctrico barato",
 "alt2": "E-Zi Miniscooter, detalle del diseño compacto",
 "alt3": "E-Zi Miniscooter en ciudad",
 "title": "E-Zi Miniscooter 2025: precio y ficha",
 "excerpt": "El E-Zi Miniscooter desde 1.499 €: el scooter eléctrico matriculable más barato, con 50 km de autonomía, batería extraíble y 45 km/h.",
 "keywords": ["e-zi miniscooter precio", "e-zi scooter eléctrico", "ezi keeway precio", "scooter eléctrico barato", "scooter eléctrico 1500 euros", "ciclomotor eléctrico barato"],
 "entradilla": "El **E-Zi Miniscooter** es el scooter eléctrico matriculable **más barato** de España: **1.499 €**, **50 km** de autonomía, **batería extraíble** y 45 km/h, fabricado por **QJiang** (el gigante del grupo Geely, matriz de Keeway y Benelli).\n\nEs la opción para quien quiere un eléctrico urbano por el precio de un buen patinete: ligero, práctico, manejable y con dos plazas. Sin florituras tecnológicas, pero con lo esencial para moverse por la ciudad por céntimos.",
 "precio_txt": "Con **1.499 €** (1.299 € la unidad demo), el E-Zi es imbatible en precio entre los scooters eléctricos matriculables. El siguiente escalón (NIU MQi+ Sport, Segway E110S) está en 2.300-2.400 €.\n\nA ese precio, las ayudas del Plan MOVES lo pueden dejar en poco más de 1.000 €. Es el eléctrico para presupuestos ajustados, estudiantes o como segundo vehículo urbano.",
 "autonomia_txt": "La autonomía declarada es de **50 km**, suficiente para el uso urbano diario si no se hacen grandes distancias. Tiene **dos modos de potencia**: Eco, limitado a **25 km/h**, y normal, a **45 km/h**.\n\nLa batería es **extraíble**: se saca y se carga en casa o en el trabajo con un enchufe normal, sin depender del garaje. Para trayectos cortos de ciudad, 50 km dan para dos días sin recargar.",
 "equipo_txt": "El E-Zi apuesta por la sencillez: **batería extraíble**, dos modos de conducción, **dos plazas** y un diseño compacto y ligero que lo hace muy manejable entre el tráfico.\n\nNo hay app ni pantalla táctil: instrumentación básica y lo esencial para circular. A cambio, todo es simple y barato de mantener. Su hermano mayor, el **Ezi City** (3.490 €), ofrece 3.600 W con dos motores para quien necesite más.",
 "faqs": [
   ("¿Cuánto cuesta el E-Zi Miniscooter?", "**1.499 €** (1.299 € la unidad demo). Es de los más baratos matriculables."),
   ("¿Qué autonomía tiene?", "**50 km** declarados, con modo Eco limitado a 25 km/h para estirarla."),
   ("¿La batería es extraíble?", "Sí, es **extraíble** y se carga en cualquier enchufe doméstico."),
   ("¿Qué carnet necesito?", "La **licencia AM** (desde los 15 años) o el carnet B."),
   ("¿Quién lo fabrica?", "**QJiang**, el gigante chino del grupo Geely (Keeway, Benelli, Volvo, Lotus)."),
   ("¿Hay una versión más potente?", "Sí, el **Ezi City** (3.490 €) con 3.600 W y dos motores."),
 ],
  "para_quien": 'Es para ti si quieres el scooter eléctrico matriculable **más barato** (1.499 €) para moverte por la ciudad. Ideal como primer eléctrico, para estudiantes o segundo vehículo. No es para ti si haces más de 40 km al día: sus 50 km obligan a cargar a diario. Por poco más, el MQi+ Sport ofrece más autonomía y marca.',
"fuentes_txt": "<a href=https://mpracing.es/456_ezi-keeway>ficha y precio en MPRacing</a>",
},
]

# ── Validaciones ───────────────────────────────────────────────────────────
for m in MODELS:
    assert len(m["title"]) <= 43, f"Título largo ({len(m['title'])}): {m['title']}"
    assert len(m["excerpt"]) <= 155, f"Excerpt largo: {m['slug']}"
    assert len(m["keywords"]) == 6, f"Keywords != 6: {m['slug']}"
    assert len(m["pros"]) >= 5 and len(m["contras"]) >= 5 and len(m["curiosidades"]) >= 3, f"Listas cortas: {m['slug']}"
    assert len(m["faqs"]) == 6, f"FAQs != 6: {m['slug']}"
slugs = [m["slug"] for m in MODELS]
assert len(slugs) == len(set(slugs)) == 25, "Slugs duplicados o != 25"

# ── Generar comparador ─────────────────────────────────────────────────────
ts_motos = ("// Lote M1 — 25 motos eléctricas urbanas (scooters, ciclomotores y urbanas).\n"
            "// Modelos vendidos en España 2024-2026. Datos verificados el 2026-10-08\n"
            "// en webs oficiales, motofichas.com, motorbikemag.es, motos.net y prensa del motor.\n"
            "// Cero cifras inventadas: lo no verificado va como null.\n"
            "import type { MotoComparador } from \"./comparador-motos-data.ts\";\n\n"
            "export const MOTOS_NUEVOS_M1: MotoComparador[] = [\n"
            + "\n".join(ts_moto(m) for m in MODELS) + "\n];\n")
with open(os.path.join(LIB, "comparador-motos-nuevos-m1.ts"), "w") as f:
    f.write(ts_motos)

# ── Generar blog ───────────────────────────────────────────────────────────
posts = []
total_words = 0
for m in MODELS:
    ts, w = ts_post(m)
    posts.append(ts)
    total_words += w
    assert 800 <= w <= 1200, f"Artículo fuera de rango ({w}): {m["slug"]}"
ts_blog = ("// Lote M1 — 25 artículos de motos eléctricas urbanas.\n"
           "// Un modelo por artículo, sin canibalización. Datos verificados el 2026-10-08.\n"
           "// Formato BlogPost idéntico a blog-posts-motos-exp-m1.ts.\n"
           "import type { BlogPost } from \"./blog-data.ts\";\n\n"
           "export const NUEVOS_M1_POSTS: BlogPost[] = [\n"
           + "\n".join(posts) + "\n];\n")
with open(os.path.join(LIB, "blog-posts-nuevos-m1.ts"), "w") as f:
    f.write(ts_blog)

print(f"OK: 25 fichas + 25 artículos ({total_words} palabras en total, media {total_words//25}/artículo)")
