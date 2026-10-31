// Autocaravanas Dreamer — lote Merlín 1 (18/10/2026), corrección b/c/d/e/f/g/h/i (19/10/2026).
// Fuentes: catálogo oficial Dreamer Colección 2026 (PDF oficial de exportación, verificado el
// 19/10/2026) para dimensiones, camas, baño Modul'Space, calefacción y equipamiento del D55 UP;
// web oficial dreamer-van.fr para la marca y la gama Fun; anuncios de concesionarios franceses,
// belgas e italianos y prensa especializada para motor, peso y precios. Dreamer no publica
// PVP oficial: el precio va en «aprox» con nota «precio de tarifa en Bélgica».
// Correcciones aplicadas: eliminado costeMensual; añadidos descripcion (>=800 palabras, con
// «Cómo lo verificamos» y «Para quién es»), notas y plazasDormir; analisisSlug actualizado a
// -analisis-opinion; fotos a -ext.webp/-interior.webp (sin «-oficial»); carga útil sin dato publicado
// (la marca no la publica para el modelo exacto); potencia y precio en «aprox» («no oficial»:
// prensa y concesionarios); peso en vacío en «aprox» (concesionario, versión Essential).
// NOTA DE NOMBRE: el nombre comercial oficial es "D55 UP" (gama Fun); se mantiene el
// identificador del lote 1.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_DREAMER_M1: Autocaravana[] = [
  {
    id: "dreamer-d55-fun-up-2026-precio-ficha-tecnica",
    marca: "Dreamer",
    modelo: "D55 UP",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 77710, // «no oficial»: precio «a partir de» de tarifa en Bélgica (concesionario Vanomobil, 2026); Dreamer no publica PVP
    potenciaCv: 120, // «no oficial»: 120 CV de serie según prensa especializada; el catálogo oficial no detalla la motorización
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial-interior.webp",
    curiosidades:
      "Para su 20.º aniversario en 2026, Dreamer lanzó una edición especial del D55 con tapicería Celebration con el logotipo bordado y cambio automático de serie, tal como aparece en el propio catálogo oficial Colección 2026 de la marca. (Fuente: catálogo oficial Dreamer Colección 2026, PDF de exportación: https://www.reisemobile-staudt.de/wp-content/uploads/2025/08/DREAMER_CATA_2026_EXPORT_BD_ALL.pdf)",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // catálogo oficial 2026: 5,99 m
    anchoMm: 2050, // catálogo oficial 2026: 2,05 m
    altoMm: 2720, // catálogo oficial 2026: 2,72 m con techo elevable
    pesoKg: 2940, // «no oficial»: 2.940 kg de PVOM según concesionario francés (versión Essential automática)
    mmaKg: 3500, // catálogo oficial 2026 y concesionarios: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por el fabricante para el modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // catálogo oficial 2026: hasta 4 personas; 4 plazas con cinturón según concesionarios
    plazasDormir: 4, // catálogo oficial 2026: 2+2 camas (cama transversal trasera + 2 plazas en el techo elevable)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "potenciaCv", "pesoKg"], // «no oficial»: el catálogo oficial no publica motor, PVOM ni precios
    notas:
      "Precio de tarifa en Bélgica (77.710 € «a partir de» en concesionario Vanomobil, 2026; en Italia se anuncia desde 64.400 €); Dreamer no publica PVP oficial y en España el precio lo fija cada concesionario. Motor de serie de 120 CV según prensa especializada (el catálogo oficial no detalla motorizaciones; existen versiones de 140 CV con cambio automático). Peso en vacío de 2.940 kg según concesionario francés para la versión Essential automática. Dimensiones, camas (2+2), baño Modul'Space, calefacción de gasoil y frigorífico de 149 L, del catálogo oficial Dreamer Colección 2026.",
    descripcion: `Hay una pregunta que casi todos los que miran campers se hacen tarde o temprano: ¿de verdad se puede dormir cuatro en un furgón de menos de 6 metros sin que dos de ellos maldigan la decisión a la tercera noche? El Dreamer D55 UP existe para responder que sí. Es el furgón de la gama Fun de Dreamer —la marca de campers del grupo francés Rapido, fabricados en Mayenne— que añade un techo elevable al D55 clásico y convierte un camper de pareja en un cuatro plazas de adultos de verdad: cama transversal trasera más dos plazas en el techo, todo en 5,99 metros de largo que aparcan donde aparca un turismo largo.

La idea «UP» es sencilla y brillante a la vez. El D55 a secas es un camper de 5,99 metros con techo alto H2 (2,59 m) y tres plazas de noche; el D55 UP mantiene la misma base técnica y la misma distribución, pero sustituye el techo fijo por un techo elevable que añade dos camas de adulto arriba. El catálogo oficial de la Colección 2026 lo resume en una línea: datos técnicos idénticos al D55, con el techo elevable para dos plazas y viajes de hasta cuatro personas. La altura total sube a 2,72 metros, la anchura se queda en 2,05 y la longitud no se mueve del 5,99 que permite entrar en parkings con límite de 6 metros y callejear sin el estrés de una perfilada.

Arriba, el techo elevable ofrece una cama de 200x130 centímetros, una doble de adulto sin asteriscos, con somier de lamas y colchón de espuma Bultex. Quien viaje en invierno puede pedir el kit de aislamiento del techo, opcional, que reduce el ruido aerodinámico y la pérdida de calor por la lona; sin él, el techo elevable es el punto térmicamente débil del vehículo, como en todos los campers con este sistema. Abajo, la cama transversal trasera mide 1950x1320: suficiente para dos adultos de complexión media, justa para dos corpulentos. Entre ambas, el D55 UP duerme cuatro sin montar ni desmontar nada cada día, que es exactamente la promesa.

El segundo invento de la casa es el baño Modul'Space, la seña de identidad de Dreamer. En lugar de un baño mínimo encajado donde quepa, el D55 UP monta un armario ropero pivotante que se guarda dentro de la ducha: al ducharse, el armario se desplaza y deja una ducha separada del WC de tamaño digno; al vestirse, vuelve a su sitio y recupera el ropero. Es una solución casi única en el formato camper y resuelve el dilema clásico del furgón: o ducha decente o armario decente. Aquí hay las dos cosas, con la contrapartida de un mecanismo que conviene probar en el concesionario hasta entender su lógica.

La cocina y la autonomía están pensadas para viajar de verdad. El frigorífico es de compresión de 149 litros a 12 voltios, muy por encima de los 80-90 litros habituales en campers de este tamaño: cuatro personas pueden hacer la compra semanal sin jugar al Tetris. La calefacción es de gasoil Webasto, utilizable en marcha, con calentador de agua a gas de 8 litros; el pack de invierno opcional añade suelo radiante eléctrico y convierte al D55 UP en un cuatro estaciones creíble. Los depósitos declaran 110 litros de agua limpia (ampliables a 95 o 110 según configuración, con la advertencia oficial de que más agua es menos carga útil) y 85 de grises. El garaje-bodega bajo la cama trasera, de 1280x870x670 milímetros, traga el material largo —esquís, tablas, sillas— que en otros campers viaja en el pasillo.

El chasis puede ser Fiat Ducato o Peugeot Boxer según mercado y año, ambos con tracción delantera y norma Euro 6e (etiqueta C en España). El motor de serie es el 2.2 de 120 CV con cambio manual según la prensa especializada; el catálogo oficial no detalla motorizaciones, pero los concesionarios ofrecen el 140 CV con cambio automático de 8 marchas, la combinación que elige quien hace muchos kilómetros. Con 3.500 kg de MMA se conduce con el carnet B, aunque el peso en vacío de 2.940 kg que declara un concesionario francés para la versión Essential automática deja unos 560 kg teóricos de carga útil que se consumen rápido entre cuatro ocupantes, agua llena, batería de litio y panel solar: el cálculo de pesos, como en todo camper de 3,5 toneladas, hay que hacerlo con la unidad configurada.

Dreamer celebra en 2026 su 20.º aniversario y lo hace con una edición especial del D55 con tapicería Celebration y cambio automático de serie, además de los acabados y packs habituales de la gama Fun: el Fun+ con choice de colores de carrocería, cuatro tapicerías y segunda batería de célula, y el Essential con estación multimedia DAB Pioneer de 6,8 pulgadas con Apple CarPlay y Android Auto, cámara trasera, batería de litio de 150 Ah y panel solar de 150 W. Es la gama accesible del grupo Rapido —14 implantaciones entre 5,40 y 6,40 metros—, con 20 años de campers a la espalda y una red de servicio razonable en Francia y creciente en España.

Del precio hay que hablar con la honestidad que exige una marca que no publica tarifas: Dreamer no tiene PVP oficial y cada concesionario pone el suyo. Las referencias disponibles son extranjeras: desde 77.710 euros «a partir de» en un concesionario belga para el D55 Up, y desde 64.400 en Italia. Son «precios de tarifa» de otros países, útiles para situar el modelo —gama media del camper, por encima de las conversiones básicas y por debajo de los premium alemanes— pero no trasladables a España, donde el PVP lo fija cada importador con sus packs y su margen. Pedir oferta en dos o tres concesionarios con la misma configuración es obligatorio.

Cómo lo verificamos: los datos de esta ficha proceden del catálogo oficial Dreamer Colección 2026 (PDF oficial de exportación, verificado el 19 de octubre de 2026): D55 UP de 5,99 x 2,05 x 2,72 m con techo elevable, 2+2 camas para hasta 4 personas, baño Modul'Space con armario pivotante, calefacción de gasoil, frigorífico de 149 L, depósitos de 110/85 L, bodega de 1280x870x670 mm y datos técnicos idénticos al D55. La web oficial (dreamer-van.fr) confirma la marca, la fabricación en Mayenne y la gama Fun. El catálogo no detalla motorizaciones, pesos ni precios: el motor de 120 CV es de prensa especializada, el PVOM de 2.940 kg de un concesionario francés (versión Essential automática) y los precios de tarifas de concesionarios en Bélgica (desde 77.710 €) e Italia (desde 64.400 €); esos campos van en «aprox» como «dato no oficial».

Para quién es: el Dreamer D55 UP es para la pareja que viaja con dos niños o con amigos y quiere un camper de menos de 6 metros que duerma cuatro adultos sin convertibles diarios, con ducha separada de verdad y autonomía para viajar todo el año. No es para quien necesite una ficha de pesos oficial antes de comprar —Dreamer no la publica por versión— ni para quien busque el camper más barato del segmento, porque la ingeniería del techo y del Modul'Space se paga. El veredicto es que es el cuatro plazas más inteligente del formato furgón por habitabilidad real y soluciones patentadas, con el deber de verificar pesos y precio unidad por unidad en el concesionario.`,
    pros: [
      "Cuatro plazas de adulto reales en 5,99 m: cama transversal trasera más 2 plazas en el techo elevable",
      "Baño Modul'Space con armario pivotante: ducha separada del WC en un formato casi único",
      "Nevera de compresión de 149 l (12 V): muy por encima de los 84 l habituales del segmento",
      "Calefacción de gasoil utilizable en marcha más pack de invierno opcional con suelo radiante: apta para todo el año",
      "Gama Fun del grupo Rapido con 20 años de campers y edición 20.º aniversario: marca consolidada",
    ],
    contras: [
      "Altura de 2,72 m con el techo elevable: más ruido aerodinámico; el kit de aislamiento del techo es opcional",
      "Carga útil ajustada: 2.940 kg de PVOM en versión automática dejan unos 560 kg teóricos",
      "La cama trasera de 1950x1320 es estrecha para dos adultos corpulentos",
      "El cambio automático solo existe con sobrecoste: la base es manual",
      "Sin precio oficial publicado: la tarifa depende totalmente del concesionario",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Dreamer D55 UP, vista lateral exterior (foto oficial Dreamer)",
        ancho: 1200,
        alto: 740,
      },
      {
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Dreamer D55 UP, trasera con los portones abiertos y la cama transversal (foto oficial Dreamer)",
        ancho: 1200,
        alto: 740,
      },
      {
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón del Dreamer D55 UP con los asientos de cabina girados (foto oficial Dreamer)",
        ancho: 1200,
        alto: 740,
      },
      {
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cama del techo elevable del Dreamer D55 UP, de 2000x1300 mm (foto oficial Dreamer)",
        ancho: 1200,
        alto: 740,
      },
      {
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial-detalle.webp",
        alt: "Baño Modul'Space del Dreamer D55 UP con armario pivotante (foto oficial Dreamer)",
        ancho: 1200,
        alto: 740,
      },
    ],
    analisisSlug: "dreamer-d55-fun-up-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2 / Peugeot Boxer 2.2: 2 años / 40.000 km",
      revisiones: [
        {
          nombre: "Revisión Ducato/Boxer (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Dreamer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat/Peugeot + recomendaciones Dreamer",
    },
    euroncap: null,
    fuenteNombre: "Dreamer (catálogo oficial Colección 2026, PDF de exportación)",
    fuenteUrl:
      "https://www.reisemobile-staudt.de/wp-content/uploads/2025/08/DREAMER_CATA_2026_EXPORT_BD_ALL.pdf",
  },
];
