// Autocaravanas Carthago — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial de Carthago — chic c-line I (EN/DE/FR/NL/IT)
// (https://www.carthago.com/en/motorhomes/a-class-motorhomes/chic-c-line/),
// exposé de distribuidor Carthago con datos técnicos
// (https://caraworld-frontend.hst.edition-software.de/print/cw26895060-de-DE1-expose.pdf),
// anuncio de unidad en Camperis (https://www.camperis.com/camper/carthago-chic-cline-i-59-xl-le-00058065/).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: el modelo asignado (carthago-chic-c-line-i-61-xl-le) no se ha podido
// verificar —la denominación «I 61 XL LE» corresponde en la gama actual a la chic E-LINE,
// no a la C-LINE— y se sustituye por el Carthago chic c-line I 5.9 XL LE, su equivalente
// XL vigente y documentado en la web oficial. Carthago no publica tarifa oficial para
// España: precioDesde queda sin dato (se citan precios de lista alemanes y franceses como
// referencia). La potencia indicada (170 CV) es la de la versión Mercedes-Benz Sprinter;
// la versión Fiat Ducato monta 180 CV. Fotos (verificación 19/10/2026): exterior,
// salón y dormitorio son fotos oficiales de carthago.com del I 5.9 XL LE de
// generación 2026 (frontal «v-face», mobiliario «Essenza»); la foto de detalle (WC)
// es de un anuncio de distribuidor de una unidad I 5.9 XL LE, mismo modelo y
// distribución.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CARTHAGO_M3: Autocaravana[] = [
  {
    id: "carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica",
    marca: "Carthago",
    modelo: "chic c-line I 5.9 XL LE",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Carthago no publica tarifa oficial para España
    potenciaCv: 170, // Mercedes-Benz Sprinter 170 CV 9G-Tronic; la versión Fiat Ducato monta 180 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8395, // versión Fiat Ducato según carthago.com; 8.525 mm en versión Mercedes-Benz Sprinter
    anchoMm: null, // no publicado en la web oficial para la generación 2026
    altoMm: null, // no publicado en la web oficial para la generación 2026
    pesoKg: null, // no publicado para la generación 2026
    mmaKg: 5000, // 5,0 t (hasta 5,5 t en versión Fiat según carthago.com)
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // el fabricante no publica una cifra base (depende del equipamiento)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2, // dos camas individuales longitudinales; cama basculante opcional
    parNm: null,
    traccion: null, // delantera en Fiat, trasera en Mercedes; la marca no declara una única
    emisionesCo2: null,
    aprox: [],
    notas:
      "Integral XL con doble eje AL-KO. Según carthago.com: versión Fiat Ducato de 8.395 mm y versión Mercedes-Benz Sprinter de 8.525 mm, MMA de 5,0 t (hasta 5,5 t en Fiat), motores Mercedes 2.0 CDI de 170 CV con 9G-Tronic o Fiat 2.2 Multijet de 180 CV, agua limpia 170 l / grises 140 l, calefacción Truma Combi 6 (Alde de serie en los XL), frigorífico de 153 l con congelador de 29 l, 4 plazas homologadas, camas individuales longitudinales de 200 x 85 cm transformables en doble y armario de suelo a techo. Precio de lista en Reino Unido (web oficial, octubre 2026): 146.570 £ / 148.530 £ — referencia extranjera; Carthago no publica tarifa oficial para España. sin PVP abierto verificable.",
    curiosidades:
      "La gama chic c-line I quedó 3.ª en la categoría de integrales de más de 95.000 € del premio «Motorhome of the Year 2026» de la revista alemana promobil, el galardón con más votantes de Europa. Fuente: sección de premios de la web oficial de Carthago (https://www.carthago.com/en/motorhomes/a-class-motorhomes/chic-c-line/).",
    descripcion: `El Carthago chic c-line I 5.9 XL LE es la puerta de entrada al mundo de los «liners» de verdad sin llegar a los precios estratosféricos de la serie superior: un integral de 8,40 metros con doble eje trasero, muebles de diseño y una dotación de serie que en otras marcas se paga a base de paquetes. Las siglas lo dicen todo: «I» de integral, «5.9» de la longitud aproximada, «XL» porque todo —salón, baño, camas— va en talla grande, y «LE» por las camas individuales longitudinales traseras. Es el formato favorito de las parejas que viajan mucho y bien.

    En medidas, la versión sobre Fiat Ducato mide 8.395 mm y la Mercedes-Benz Sprinter 8.525 mm, con una masa máxima de 5,0 toneladas (ampliable a 5,5 t en la versión Fiat). El doble eje AL-KO no es un capricho estético: reparte mejor el peso, da una estabilidad en autopista muy superior a la de un eje simple y permite una carga útil generosa para un vehículo que invita a llevar de todo. Con 5 toneladas el carnet C1 es obligatorio, y con 8,5 metros hay que planificar dónde se duerme: este no es un vehículo para improvisar en pueblos pequeños.

    La distribución XL es su razón de ser. Delante, un salón XL con un largo sofá lateral pensado para estirarse a leer o a ver una película, frente a los asientos de cabina giratorios. La cocina esquinera «comfort» presume de encimera amplia, un mueble bar de diseño iluminado y un frigorífico de 153 litros con congelador separado de 29, cifras más propias de un apartamento que de una autocaravana. El baño XL es de los que justifican el apellido: aseo y WC separados, zona de lavado abierta, ducha redonda espaciosa y un vestidor completamente separable que por la noche convierte la zona trasera en una suite privada. Y al fondo, las dos camas individuales longitudinales de 200 x 85 cm sobre el sistema de descanso Carawinx, unibles en cama doble con el suplemento central, con un armario ropero de suelo a techo que traga ropa para meses. El doble suelo continuo, con 22 cm de altura útil y calefactado con efecto de suelo radiante, añade un almacén enorme y protegido de las heladas, con acceso por trampillas exteriores e interiores.

    En tecnología, el 5.9 XL LE viene de serie con lo que Carthago considera innegociable en su clase: faros full LED, puerta de célula XL «premium two 2.0» de 63 cm con doble cierre, espejos tipo autobús, panel de control táctil y calefacción Alde por agua caliente de serie en los XL —la mejor opción para quien viaja en invierno de verdad—. La generación 2026 estrena además el frontal «v-face» en las versiones Mercedes, con una imagen mucho más dinámica, y el nuevo mobiliario «Essenza» de líneas limpias y puertas sin tiradores. La carrocería, sin madera, con techo exterior de poliéster anti-granizo y paredes de aluminio por dentro y por fuera para acumular calor, es la seña de identidad constructiva de la marca de Aulendorf.

    Mecánicamente hay dos mundos a elegir: el Fiat Ducato 2.2 Multijet de 180 CV o el Mercedes-Benz Sprinter 2.0 CDI de 170 CV con el cambio automático 9G-Tronic, más todos los asistentes de la estrella (distronic, mantenimiento de carril, reconocimiento de señales). Para un vehículo de 5 toneladas, el Mercedes automático es la opción descansada; el Fiat, la más racional en coste de mantenimiento.

    En precio, Carthago no publica tarifa para España, así que no hay cifra oficial: cada importador y concesionario fija el suyo según equipamiento. Como referencia, en Francia la versión Mercedes parte de unos 165.900 € de lista y en Alemania los distribuidores anuncian unidades equipadas entre 180.000 y 210.000 €. En España, la red Carthago —con importador y servicios oficiales— permite configurarlo a medida y probarlo antes de firmar.

    Y un apunte práctico: el doble eje trasero no solo estabiliza, sino que reparte el desgaste de los neumáticos y mejora la tracción en firmes delicados, algo que se agradece cuando se aparca fuera del asfalto. Cómo lo verificamos: longitudes, masas, motores, aguas, calefacción y descripción de la distribución proceden de la web oficial carthago.com (versiones en inglés, alemán, francés, neerlandés e italiano, año-modelo 2026); el detalle del equipamiento opcional y los precios de lista de referencia, de exposés de distribuidores oficiales alemanes. Todo verificado el 19/10/2026. Quedan sin dato el precio español, la anchura, la altura, el peso en orden de marcha y la carga útil base, no publicados por el fabricante.

    Para quién es: el chic c-line I 5.9 XL LE encaja con parejas viajeras de alto presupuesto, con carnet C1, que hacen largas estancias y quieren confort de apartamento —baño XL, camas individuales, doble suelo— sin subir a un liner de tres ejes. No es para quien tenga solo el carnet B, para quien busque algo manejable en ciudad ni para presupuestos contenidos: aquí el ticket de entrada está muy por encima de los 150.000 €.`,
    pros: [
      "Doble eje AL-KO: estabilidad y carga útil de auténtico liner",
      "Baño XL con aseo separado, ducha redonda y vestidor separable",
      "Calefacción Alde por agua caliente de serie en los XL",
      "Doble suelo continuo calefactado con gran capacidad de almacenaje",
      "Carrocería sin madera con techo anti-granizo y gran aislamiento",
    ],
    contras: [
      "Exige carnet C1 y planificación: 8,5 m y 5 t no son para improvisar",
      "Precio de lista por encima de los 160.000 € sin contar extras",
      "Carthago no publica tarifa para España: precio a negociar con el distribuidor",
      "Solo dos camas fijas de serie (la basculante es opcional)",
      "Mantenimiento y seguro de un 5 toneladas: costes elevados",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Carthago chic c-line I 5.9 XL LE, vista exterior",
        ancho: 2048,
        alto: 1536,
      },
      {
        src: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Carthago chic c-line I 5.9 XL LE, salón XL",
        ancho: 2048,
        alto: 1536,
      },
      {
        src: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Carthago chic c-line I 5.9 XL LE, cocina",
        ancho: 2048,
        alto: 1536,
      },
      {
        src: "/media/carthago-chic-c-line-i-59-xl-le-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Carthago chic c-line I 5.9 XL LE, cuarto de baño",
        ancho: 2048,
        alto: 1536,
      },
    ],
    analisisSlug: "carthago-chic-c-line-i-59-xl-le-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato / Mercedes Sprinter: revisión cada 2 años o 48.000 km (según plan del fabricante de la base)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat/Mercedes)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Carthago (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades, Alde",
          costeAproxEur: 300,
        },
      ],
    },
  },
];
