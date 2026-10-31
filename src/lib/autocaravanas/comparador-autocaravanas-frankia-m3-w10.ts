// Autocaravanas Frankia — lote Merlín 3 (19/10/2026).
// Fuentes: ficha del expositor Frankia en el NEC Motorhome Show 2026 vía findmyleisurevehicle
// (PDF: año-modelo 2026, plazas, medidas 7.080 x 2.300 x 3.110 mm, MiRO 3.390 kg, MMA 4.500 kg,
// precio guía £130.530); catálogo oficial "FRANKIA F-Line Experience" (gama F-Line 2026: layouts
// I 640/I 680/I 740/I 790/I 840, 4,5 t, redondel de asientos); pruebas de Out & About Live
// (F-Line I 680 SG y Together I 740 Plus: Thermo Guard Plus, garantía de estanqueidad 11 años,
// cocina MaxiFlex, garaje). Verificado el 19/10/2026.
// NOTA DE SUSTITUCIÓN: el layout asignado "F-Line I 680 QD" no figura en el catálogo oficial
// vigente de la gama F-Line (los layouts de 7 m son I 680, I 680 SG y I 680 PLUS). Se sustituye
// por el Frankia F-Line I 680 SG, layout vigente con ficha de expositor 2026 verificada.
// Notas honestas: precio ES no publicado (guía UK £130.530); potencia por layout no publicada
// (gama F-Line en Fiat Ducato 140/180 CV); carga útil de 1.110 kg según la ficha del expositor
// (no dato de marca), por lo que cargaUtilKg queda sin dato.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_FRANKIA_M3: Autocaravana[] = [
  {
    id: "frankia-f-line-i-680-sg-2026-precio-ficha-tecnica",
    marca: "Frankia",
    modelo: "F-Line I 680 SG",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // sin tarifa ES publicada; guía UK £130.530 (expositor NEC 2026)
    potenciaCv: null, // no publicado por layout; gama F-Line en Fiat Ducato 140/180 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // base diésel Euro 6; etiqueta no declarada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7080, // ficha del expositor NEC 2026
    anchoMm: 2300, // ficha del expositor NEC 2026
    altoMm: 3110, // ficha del expositor NEC 2026
    pesoKg: 3390, // MiRO 3.390 kg (ficha del expositor)
    mmaKg: 4500, // MTPLM 4.500 kg (ficha del expositor y catálogo oficial)
    carnetNecesario: "C1",
    cargaUtilKg: null, // 1.110 kg según la ficha del expositor (no dato de marca)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje con cinturón
    plazasDormir: 2, // 2 plazas (cama abatible)
    parNm: null,
    traccion: "delantera", // base Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos de la ficha del expositor oficial de Frankia en el NEC Motorhome Show 2026 (vía " +
      "findmyleisurevehicle.co.uk, PDF descargado y verificado el 19/10/2026): año-modelo 2026, integral " +
      "(A-Class), 4 plazas de viaje, 2 plazas, 7.080 x 2.300 x 3.110 mm, MiRO 3.390 kg, MMA 4.500 kg, " +
      "precio guía £130.530. Sustitución documentada: el layout 'I 680 QD' asignado no existe en el " +
      "catálogo oficial vigente de la gama F-Line (los layouts de 7 m son I 680, I 680 SG y I 680 PLUS, " +
      "según el catálogo 'F-Line Experience'); se sustituye por el I 680 SG. La potencia por layout no " +
      "la publica Frankia (la gama F-Line monta Fiat Ducato 2.2 de 140/180 CV); la carga útil de 1.110 kg " +
      "sin tarifa oficial vigente verificable para esta designación." +
      "sin precio oficial publicado. Carnet C1 obligatorio (4.500 kg).",
    curiosidades:
      "Frankia ofrece 11 años de garantía contra la entrada de agua gracias a su construcción Thermo Guard Plus (fuente: prueba del Frankia Together I 740 Plus en Out & About Live, https://www.outandaboutlive.co.uk/motorhomes/reviews/frankia-together-i-740-plus-motorhome). " +
      "La construcción Thermo Guard Plus (PRFV resistente al granizo y ventanas Seitz S7 enrasadas), una de las garantías de " +
      "estanqueidad más largas del sector. Fuente: https://www.outandaboutlive.co.uk/motorhomes/reviews/frankia-together-i-740-plus-motorhome",
    descripcion: `El Frankia F-Line I 680 SG es la integral compacta con la que la manufactura de Marktschorgast
demuestra que el lujo no necesita nueve metros: 7,08 metros de eslora sobre Fiat Ducato, 4.500 kg de
MMA y una distribución pensada para dos personas que viajan mucho y bien. La sigla SG esconde camas
gemelas y el planteamiento es el clásico de Frankia: redondel de asientos delantero, cocina
MaxiFlex lateral, baño separado y garaje trasero generoso, todo con doble suelo calefactado. La
ficha del expositor oficial en el NEC Motorhome Show 2026 lo confirma como año-modelo 2026, con
precio guía de £130.530 en el Reino Unido; en España no hay tarifa pública y cada importador
cotiza su unidad.

Con 7.080 mm de largo, 2.300 de ancho y 3.110 de alto, el I 680 SG se mueve en el formato que en
España permite viajar sin la logística de un liner pero con espacio de verdad dentro. La MMA de
4.500 kg obliga al carnet C1, el peaje habitual de las integrales premium con doble suelo y
equipamiento serio: la masa en orden de marcha es de 3.390 kg y la ficha del expositor declara
1.110 kg de carga útil teórica, una cifra generosa que en la práctica se come con las opciones.
La base es el Fiat Ducato 2.2, que Frankia ofrece en 140 y 180 CV; la marca no desglosa la potencia
por layout en su documentación pública, así que conviene confirmar la motorización de la unidad
concreta en el concesionario.

La construcción es el argumento técnico de Frankia: el sistema Thermo Guard Plus con PRFV
resistente al granizo, ventanas de habitáculo Seitz S7 enrasadas y doble suelo con los depósitos en
su interior, lo que da unas cualidades térmicas excelentes para viajar en invierno. La marca
respalda esa construcción con 11 años de garantía contra la entrada de agua, entre las más largas
del mercado. Dentro, el redondel de asientos —la seña de identidad de la casa— ofrece un salón
amplio con mesa regulable, la cocina MaxiFlex viene con horno integrado y los acabados admiten
seis mundos de diseño (Venice, Milan, Naples, Pyrite, Marble, Aquamarine) con hasta 35 colores de
cuero a elegir: pocas marcas permiten tanta personalización en este tamaño. El baño separado con
ducha independiente, el garaje trasero con gran portón y el suelo plano en toda la zona de día
completan un planteamiento muy pensado para el uso intensivo.

En equipamiento, la gama F-Line incluye de serie faros Full LED, cámara de marcha atrás, espejos
tipo autobús de doble lente y una dotación de seguridad completa sobre la base Fiat. La calefacción
es por aire soplado y la dotación eléctrica admite paquetes de litio para quien busque autonomía.
Dentro del catálogo Frankia, la F-Line es la puerta de entrada a las integrales de la marca sobre
Fiat Ducato: por encima están la M-Line (sobre Mercedes Sprinter), la Platin y la Titan para
quienes buscan liners de 8,5 a 8,9 metros y 5,5 toneladas. El catálogo 2026 organiza la F-Line en
tres longitudes —6,5 m (I 640), 7,0 m (I 680), 7,5 m (I 740), 7,9 m (I 790) y 8,5 m (I 840)— todas
con 4,5 toneladas salvo las grandes, y con layouts que van del redondel clásico al PLUS con cama
abatible longitudinal de 2 metros sobre el salón. También existe la serie especial Together,
lanzada para el 65.º aniversario, que sobre la base del I 740 Plus añade el chasis pesado Ducato 40
con 180 CV, 758 kg de carga útil declarada en su ficha y extras como toldo Thule manual, cierre
centralizado de cabina y habitáculo y estabilizadores traseros. Esa escalera de gamas es útil para
ubicar el I 680 SG: es el Frankia integral más compacto y asequible del catálogo, pero comparte
construcción, garantía y filosofía con sus hermanos mayores.

Cómo lo verificamos: medidas, pesos, plazas y precio guía proceden de la ficha del expositor
oficial de Frankia en el NEC 2026 (PDF descargado y leído el 19/10/2026); la vigencia del layout
I 680 SG y las características de la gama (4,5 t, redondel, doble suelo), del catálogo oficial
"F-Line Experience"; la garantía de 11 años y la construcción Thermo Guard Plus, de la prueba de
Out & About Live. El "I 680 QD" asignado no existe en el catálogo vigente y se sustituyó por el
I 680 SG. Quedan sin dato el precio en España, la potencia por layout, la carga útil de marca, el
consumo y las emisiones, por no estar publicados.

Para quién es: para parejas que quieren una integral premium compacta, con la calidad de
construcción y la personalización de Frankia, sin subir a los 7,5-8 metros. Encaja si tienes el C1,
viajas todo el año —el doble suelo y la garantía de 11 años invitan al invierno— y valoras el
redondel de asientos y la cocina MaxiFlex. No encaja si tu carnet es solo el B, si necesitas más
de dos plazas para dormir de forma habitual o si buscas precio cerrado en la web: en España todo
pasa por el importador y la factura final depende del motor y las opciones elegidas.`,
    pros: [
      "Integral premium en solo 7,08 m: formato manejable con calidad de liner",
      "11 años de garantía de estanqueidad con construcción Thermo Guard Plus",
      "Doble suelo calefactado con depósitos interiores: apta para viajar en invierno",
      "Redondel de asientos y cocina MaxiFlex con horno, señas de la casa",
      "Personalización extrema: 6 mundos de diseño y 35 colores de cuero",
    ],
    contras: [
      "Obliga al carnet C1: 4.500 kg de MMA",
      "Solo 2 plazas para dormir de serie",
      "Sin tarifa oficial en España: el precio se cotiza por unidad en el importador",
      "Frankia no publica la potencia por layout: hay que confirmarla por unidad",
      "La carga útil teórica de 1.110 kg se reduce rápido con opciones",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-oficial.webp", alt: "Frankia F-Line I 680 SG, vista exterior", ancho: 1000, alto: 600 },
      { src: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-interior1.webp", alt: "Frankia F-Line I 680 SG, salón interior", ancho: 1000, alto: 1000 },
      { src: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-interior2.webp", alt: "Frankia F-Line I 680 SG, cocina", ancho: 1000, alto: 1000 },
      { src: "/media/frankia-f-line-i-680-sg-2026-precio-ficha-tecnica-detalle.webp", alt: "Frankia F-Line I 680 SG, baño", ancho: 1000, alto: 1000 },
    ],
    analisisSlug: "frankia-f-line-i-680-sg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Frankia (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, Alde/aire", costeAproxEur: 300 },
      ],
    },
  },
];
