#!/usr/bin/env python3
"""Diversifica el boilerplate repetido entre los 10 posts del lote5-g1
y añade una sección H2 única por post (+~200 palabras).
Uso: python3 diversificar-g1.py (se ejecuta en ~/workspace/wt-caravanas-lote-2)"""
import re

PATH = "src/lib/blog-posts-caravanas-lote5-g1.ts"
txt = open(PATH, encoding="utf-8").read()

# ---------- variantes de boilerplate ----------
INTROS = [
    "**¿Vas con prisa?** Aquí tienes <a href=/caravanas/{id}/>la ficha técnica de la {mod} 2026</a> con precio, MMA, plazas y fotos, y <a href=/comparador-coches/>el comparador para medirla con sus rivales</a>.",
    "**Lo esencial, en dos clics:** <a href=/caravanas/{id}/>ficha técnica de la {mod} 2026</a> (precio, medidas, plazas, galería) y <a href=/comparador-coches/>comparador frente a frente con la competencia</a>.",
    "**¿Solo quieres los números?** <a href=/caravanas/{id}/>Ficha técnica completa de la {mod} 2026</a>: precio, dimensiones, MMA y fotos. <a href=/comparador-coches/>O compárala directamente con sus rivales</a>.",
    "**Datos primero, opinión después:** <a href=/caravanas/{id}/>la ficha de la {mod} 2026</a> reúne precio, MMA, plazas y galería; <a href=/comparador-coches/>el comparador</a> la enfrenta a sus alternativas.",
]
TABLA_LINKS = [
    "<a href=/caravanas/{id}/>Ficha completa y galería de fotos de la {mod}</a>",
    "<a href=/caravanas/{id}/>Todos los datos técnicos y las fotos, en su ficha</a>",
    "<a href=/caravanas/{id}/>Ver todos los datos y la galería en la ficha técnica</a>",
]
PROS = ["**Lo mejor:**", "**Puntos fuertes:**", "**Nos convence:**", "**Nos encanta:**"]
CONTRAS = ["**A mejorar:**", "**Puntos débiles:**", "**Nos convence menos:**", "**Mejoraría:**"]
CTAS = [
    "**¿Te ha caído una multa?** No la pagues a ciegas: <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito</a> y te decimos si se puede recurrir.",
    "**Un consejo antes de irte:** si te han multado, <a href=https://recurretumulta.online/#analizador>analiza la multa gratis con nuestra IA</a> antes de pagarla o recurrirla.",
    "**¿Multa a la vista?** <a href=https://recurretumulta.online/#analizador>Comprueba gratis si es recurrible</a> antes de decidir si la pagas.",
    "**¿Te han puesto una multa?** Antes de pagarla o recurrirla, <a href=https://recurretumulta.online/#analizador>analízala gratis con nuestra IA</a> y descubre si es recurrible.",
]
FUENTES = ["*Fuentes consultadas:*", "*Documentación:*", "*De dónde salen los datos:*", "*Fuentes:*"]

FAQ_Q = [
    ("### ¿Cuánto cuesta la {mod} 2026?",
     "### ¿Cuál es el precio de la {mod} 2026?"),
    ("### ¿Qué carnet necesito?",
     "### ¿Qué carnet hace falta para remolcarla?"),
    ("### ¿Cuánto mide y pesa?",
     "### ¿Cuáles son sus medidas y su peso?"),
]

# ---------- secciones H2 únicas (sin comillas dobles) ----------
NUEVAS = [
"""## Precio de tarifa: qué significa «desde 18.300 €»

El precio que publica LMC es la **tarifa oficial para Austria**: el fabricante fija ese «desde» y cada distribuidor compone el PVP final según el equipamiento. En España no hay un PVP oficial por modelo, así que el precio de la etiqueta lo pone el concesionario con los paquetes que monte.

¿Qué suele entrar en ese «desde»? La caravana en acabado base, con su equipamiento de serie. ¿Qué suele quedar fuera? El transporte, la documentación, y los extras que casi todo el mundo acaba pidiendo: el **mover** para aparcar sin esfuerzo (unos 1.500-2.500 € instalado), el **avance** o toldo, el aire acondicionado de techo y los paquetes de confort. Con dos o tres extras razonables, una 430 D «lista para viajar» se va fácilmente 3.000-5.000 € por encima de la tarifa base.

El consejo práctico: pide siempre el **precio «llave en mano»** por escrito —caravana, transporte, documentación y extras instalados— y compara entre dos o tres distribuidores. En una compra de 20.000 €, las diferencias entre concesionarios pueden pagar las vacaciones del primer año.""",

"""## De la 430 D a la 470 K: ¿cuándo compensa subir?

La pregunta que más se hacen los compradores de la Sassino es si merece la pena el salto a la 470 K: son **2.100 €** de diferencia en tarifa y casi un metro más de caravana. La respuesta depende de una sola cosa: **cuántas bocas duermen dentro**.

Con dos adultos y un niño pequeño, la 430 D va sobrada: cama doble para los padres y el salón convertible para el peque. Pero en cuanto hay **dos niños** —o uno que crece rápido—, la 470 K cambia la vida: cada uno tiene su cama, nadie monta ni desmonta nada, y las vacaciones dejan de organizarse alrededor de quién duerme dónde.

Hay otro factor: la **reventa**. Las 6 plazas con literas tienen un mercado de segunda mano muy activo entre familias, y la 470 K se vende mejor que la 430 D cuando llega el momento de cambiar. Si dudas entre las dos y el presupuesto lo permite, la 470 K es la compra con menos arrepentimiento a medio plazo.""",

"""## Edición 70 aniversario: el capricho con sentido

LMC cumple **70 años** y lo celebra con una edición especial de la gama Style: decoración exclusiva, detalles conmemorativos y un equipamiento ampliado respecto a la 450 D estándar. Es la versión para quien quiere que su caravana se distinga nada más verla en el camping.

¿Compensa frente a la estándar? Depende del sobreprecio que aplique el distribuidor y de cuánto valores los extras incluidos: si el paquete aniversario reúne opciones que ibas a pedir de todos modos (toldo, mover, confort interior), puede salir a cuenta frente a configurarlas por separado. Si no, la 450 D estándar ofrece la misma base —mismo chasis, mismas medidas, mismo diseño escandinavo— por menos dinero.

Un aviso: las ediciones aniversario suelen tener **disponibilidad limitada** y se agotan antes que las versiones normales. Si te gusta, no la dejes para la temporada alta.""",

"""## La cama elevable en el día a día

El mecanismo de la cama elevable es más sencillo de lo que parece: una estructura con **guías laterales y cinchas o muelles** que se desbloquea y baja hasta su posición de descanso, y se vuelve a subir por la mañana. Según el equipamiento puede ser manual o con asistencia, pero en ambos casos es una operación de un minuto.

El truco que la hace práctica: **la ropa de cama se queda puesta**. Edredón, almohadas y todo suben con la cama al techo, así que por la noche solo hay que bajarla y meterse dentro. Los niños la adoran —dormir «arriba» tiene su punto— y los padres agradecen no convertir el salón cada noche.

En el mantenimiento anual conviene revisar las **guías, los topes y las cinchas** del mecanismo: es un sistema robusto, pero como todo lo móvil, agradece una inspección. Y un consejo de uso: no dejes objetos sueltos sobre la cama al subirla; todo lo que esté encima viaja hasta el techo.""",

"""## El baño trasero: el lujo silencioso de las estancias largas

La distribución 580 D coloca el **baño en la parte trasera**, separado del dormitorio y del salón: es la configuración que prefieren quienes pasan semanas seguidas a bordo. ¿Por qué? Porque un baño trasero amplio permite una **ducha separada de verdad**, con espacio para moverse, y porque su uso nocturno no molesta a quien duerme en la cama fija delantera.

En las estancias largas —un mes en el mismo camping, la invernada en el sur— el baño deja de ser un «aseo de emergencia» y se convierte en tu cuarto de baño: almacenaje para neceseres, toallas que se secan sin estorbar, ventilación independiente. La 580 D está pensada exactamente para ese uso.

Es también una distribución que **envejece bien**: las parejas que empiezan con escapadas y acaban haciendo grandes viajes agradecen cada año un poco más esos metros extra en el baño.""",

"""## Construcción escandinava: qué significa en la práctica

«Construcción para el invierno escandinavo» suena a eslogan, pero en una Kabe se traduce en cosas concretas: **aislamiento más grueso** en paredes, suelo y techo; **calefacción dimensionada** para temperaturas bajo cero; ventanas con buen sellado; y una **ventilación** pensada para evitar condensaciones cuando fuera hiela y dentro hay 20 grados.

En la práctica, esto significa que la Ametist 560 GLE se puede usar en un fin de semana de febrero en la sierra sin pasar frío —algo que no todas las caravanas de su precio permiten—. También significa que el **consumo de gas** en invierno será menor que en una caravana menos aislada, y que la célula sufre menos con los cambios bruscos de temperatura.

Ojo con un detalle: una caravana de invierno necesita **usarse en invierno** de vez en cuando o, al menos, ventilarse bien en parado. La humedad es el enemigo de cualquier caravana, y las bien aisladas no son una excepción si se abandonan meses sin ventilación.""",

"""## 200 kg de carga útil, con ejemplos

La carga útil es el peso que puedes añadir a la tara: personas aparte, todo lo que metes en la caravana cuenta. Con **200 kg publicados**, la Royal 560 GLE da un margen razonable. Vamos a repartirlos:

Un **avance** ligero pesa unos 25-35 kg; cuatro **sillas y una mesa** de camping, otros 15 kg; la **despensa y el menaje** de una semana para cuatro, 30-40 kg; **ropa y calzado**, 20-30 kg; dos **bicicletas** normales, 25-30 kg. Suma: unos 120-160 kg. Queda margen para la barbacoa, los juguetes de playa o ese capricho de última hora.

El consejo de los veteranos: **pesa la caravana cargada** en una báscula pública al menos la primera vez (cuesta unos pocos euros). La mayoría de las sobrecargas son por despiste, no por exceso: el agua del depósito (un litro = un kilo), las bombonas de repuesto y las «cajas por si acaso» son los culpables habituales.""",

"""## Segunda residencia: la caravana de las estancias largas

La Royal 600 CXL está pensada para un uso que crece cada año: la **estancia larga**. Un mes en el mismo camping, el invierno en la costa, el teletrabajo con vistas cambiantes. Con 8,20 metros para dos, la célula deja de ser «la caravana de las vacaciones» y se convierte en una segunda residencia con ruedas.

El planteamiento cambia: se elige la **parcela** con calma (sombra en verano, orientación, cercanía a los servicios), se monta un **avance** amplio como salón-comedor exterior, y se establece una rutina —compra semanal, colada, paseos—. Muchos campings ofrecen **tarifas de larga estancia** que dejan el coste por noche muy por debajo de cualquier apartamento turístico.

Para este uso, la 600 CXL tiene dos bazas: el espacio interior para los días de lluvia y la **carga útil** —aquí sí hay que planificar, porque en estancias largas se tiende a llevar «de todo»—. La regla de oro: lo que no uses en la primera semana, probablemente no lo necesites.""",

"""## 2,50 m de ancho: qué cambia en la práctica

Los **2,50 metros** de la Imperial 630 TDL son el ancho máximo legal para circular en Europa, y se notan en dos sitios: dentro y en la carretera. Dentro, 20 cm extra sobre una caravana convencional se traducen en un **pasillo** por el que se cruzan dos personas, una **cama doble** sin laterales encajonados y un salón donde cuatro adultos cenan con holgura.

En carretera, la anchura exige **espejos retrovisores adicionales** —obligatorios cuando la caravana supera el ancho del tractor— y un poco más de atención en carreteras estrechas, peajes y entradas a campings. Nada que un conductor con experiencia no gestione, pero conviene probarlo antes de la primera gran ruta.

Un detalle a favor: en los **peajes** y en la mayoría de los campings, 2,50 m no suponen recargo ni problemas de acceso; las parcelas estándar los absorben sin drama. La anchura King Size es un lujo interior con un peaje exterior mínimo.""",

"""## El carnet BE: qué es y cómo conseguirlo

El **carnet BE** autoriza conjuntos de hasta 7.000 kg de MMA: es el que necesita la Imperial 780 TDL sin discusión. Obtenerlo exige tener el B y superar una **prueba práctica** con remolque —no hay examen teórico adicional— en la que se evalúan las maniobras específicas: enganche y desenganche, marcha atrás en recta y en curva, y circulación con el conjunto.

El coste ronda los **800-1.200 €** entre autoescuela, tasas y prácticas, y el proceso suele llevar de **uno a tres meses** según la disponibilidad. Es una inversión que se amortiza rápido si se viaja con caravanas grandes: abre la puerta a cualquier conjunto turístico.

Un consejo: sácalo **antes de comprar** la caravana. Probar la 780 TDL con el BE ya en el bolsillo permite juzgar con criterio si sus 9,40 metros son para ti —y evita tener una caravana parada meses esperando el carnet—.""",
]

# ---------- procesar ----------
posts = re.split(r'(  \{\n    "title")', txt)
# posts[0] = cabecera; luego pares (separador, bloque)
assert len(posts) == 21, f"esperaba 21 partes, hay {len(posts)}"
head = posts[0]
out = [head]
for i in range(10):
    sep = posts[1 + 2 * i]
    blk = posts[2 + 2 * i]
    m_id = re.search(r'"slug":\s*"([a-z0-9-]+?)-analisis-opinion"', blk)
    slug = m_id.group(1)
    m_mod = re.search(r'"marca":\s*"([^"]+)"', blk)  # no existe en blog; usar título
    mod = re.search(r': "(.+?) 2026:', blk).group(1)

    # 1. intro
    blk = re.sub(
        r'\*\*¿Buscas solo los datos\?\*\* <a href=/caravanas/[a-z0-9-/]+?>Ver la ficha técnica de la [^<]+</a>: precio, MMA, plazas, dimensiones y galería\. <a href=/comparador-coches/>Compárala cara a cara con sus rivales</a>\.',
        INTROS[i % 4].format(id=slug, mod=mod), blk, count=1)

    # 2. link bajo la tabla
    blk = re.sub(
        r'<a href=/caravanas/[a-z0-9-/]+?>Ver la ficha técnica completa de la [^<]+ con galería</a>',
        TABLA_LINKS[i % 3].format(id=slug, mod=mod), blk, count=1)

    # 3. lo bueno / lo mejorable
    blk = blk.replace("**Nos encanta:**", PROS[i % 4], 1)
    blk = blk.replace("**Mejoraría:**", CONTRAS[i % 4], 1)

    # 4. CTA final
    blk = blk.replace(
        "**¿Te han puesto una multa?** Antes de pagarla o recurrirla, <a href=https://recurretumulta.online/#analizador>analízala gratis con nuestra IA</a> y descubre si es recurrible.",
        CTAS[i % 4], 1)

    # 5. fuentes
    blk = blk.replace("*Fuentes:", FUENTES[i % 4], 1)

    # 6. un par de preguntas FAQ
    for q_old, q_new in FAQ_Q:
        if i % 3 == 0:
            blk = blk.replace(q_old.format(mod=mod), q_new.format(mod=mod), 1)
            break

    # 7. nueva sección H2 antes de ## Rivales
    nueva = NUEVAS[i].replace("\n", "\\n")
    blk = blk.replace("\\n## Rivales", "\\n" + nueva + "\\n\\n## Rivales", 1)

    out.append(sep)
    out.append(blk)

open(PATH, "w", encoding="utf-8").write("".join(out))
print("diversificación aplicada a 10 posts")
