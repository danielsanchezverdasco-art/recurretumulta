// Autocaravanas Westfalia — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: westfalia-mobil.com (web oficial del fabricante, página del modelo 600 D
// revisada el 18/10: «Starting from 67.650 €», Fiat Ducato 2.2 120 CV, 5,99 × 2,05 × 2,60 m,
// 4 plazas de viaje, 2 camas + 2 + 1 opcionales —hasta 5—, cama transversal 140 × 197 cm,
// calefacción diésel Eberspächer 5 kW de doble zona, nevera de compresor 90 l, agua 100/100 l).
// F9b (19/10/2026): 4 fotos oficiales (2 ext + 2 int, web oficial westfalia-mobil.com) + curiosidades.
// Precio "desde" publicado en la web oficial (mercado alemán), marcado en "aprox"; en España
// puede diferir. Carga útil calculada (565 kg) → null (prohibido calcular).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_WESTFALIA_M1: Autocaravana[] = [
  {
    id: "westfalia-columbus-600d-2026-precio-ficha-tecnica",
    marca: "Westfalia",
    modelo: "Columbus 600 D",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 67650,
    potenciaCv: 120,
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
    imagen: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5998,
    anchoMm: 2050,
    altoMm: 2600,
    pesoKg: 2935, // masa en orden de marcha según el catálogo oficial 2026
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // era calculada (3.500 − 2.935): prohibido calcular; la marca no la publica
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // oficial («Registered seats: 4»)
    plazasDormir: 2, // 2 camas de serie; hasta 5 con cama de banqueta y techo elevable opcionales
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "etiquetaDgt"],
    pros: [
      "Cama transversal trasera de 140x197 cm con somier de láminas direccionales de serie: longitud generosa para una transversal en furgón",
      "Escalabilidad nocturna real hasta 5 plazas: la banqueta plegable patentada (180x90 cm) se despliega en dos segundos y el techo elevable opcional (200x135 cm) añade una más",
      "Calefacción diésel Eberspächer de 5 kW con doble zona: funciona con el gasoil del depósito y calienta por separado habitáculo y baño",
      "Nevera de compresor Dometic de 90 l con doble apertura (interior y exterior) y 100 l de agua limpia: autonomía de serie superior a la media",
      "Menos de 6 m con maletero modular grande: maniobrabilidad en carreteras estrechas sin renunciar a zona de carga versátil",
    ],
    contras: [
      "Motor de serie de solo 120 CV para mover hasta 3.500 kg: el 140 CV con automática de 8 velocidades o el 180 CV son casi obligatorios y disparan el precio",
      "La tercera, cuarta y quinta plaza de noche no son de serie: dependen de opcionales de pago; «hasta 5 plazas» es una cifra de catálogo, no la configuración base",
      "Baño compacto con WC extraíble tipo banco: ducha real con ventana, pero el WC plegable sacrifica comodidad diaria frente a una taza fija",
      "Electrificación de serie modesta: la batería de litio de 150 Ah llega con la edición Premium y el panel solar es opcional",
      "Masa en orden de marcha oficial de 2.935 kg: con la MMA de 3.500 kg, el margen para viajeros, equipaje y agua pide vigilar la báscula",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Westfalia Columbus 600 D, vista lateral exterior",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Westfalia Columbus 600 D Premium Edition, vista exterior",
        ancho: 1200,
        alto: 720,
      },
      {
        src: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Westfalia Columbus 600 D, salón",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Interior del Westfalia Columbus 600 D, cama transversal trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: `Westfalia inventó el camper moderno hace más de medio siglo, y el Columbus 600 D demuestra que la marca alemana no vive de la nostalgia: es un furgón de 5,99 metros que duerme hasta cinco personas y que resuelve el invierno de verdad con una calefacción diésel de doble zona. No es el camper más barato del segmento ni el más llamativo; es el que mejor equilibra tamaño exterior, habitabilidad y uso en temporada fría. Para quien viaja también en enero, ese equilibrio vale más que cualquier lista de gadgets.

Los datos proceden de la página oficial del modelo en westfalia-mobil.com, revisada el 18/10/2026. El Columbus mide 5,99 m de largo, 2,05 m de ancho y 2,60 m de alto sobre Fiat Ducato, con 3.500 kg de MMA y tracción delantera: se conduce con el carnet B y se mueve como un furgón grande, entrando en parkings urbanos y carreteras estrechas de pueblo donde las autocaravanas ni lo intentan. La masa en orden de marcha oficial es de 2.935 kg; la marca no publica la carga útil, así que la ficha muestra las cifras oficiales sin calcular: con viajeros, equipaje y agua llena, la báscula pide vigilancia.

La noche se organiza con la cama transversal trasera de 140 × 197 cm con somier de láminas direccionales —197 cm de largo útil, generosos para una transversal en furgón—, a la que se suman la banqueta plegable patentada de Westfalia, de 180 × 90 cm y desplegable en dos segundos, y el techo elevable opcional de 200 × 135 cm. Las plazas de viaje oficiales son cuatro; las de dormir merecen explicación: de serie son dos, y el «hasta 5 plazas» del catálogo se alcanza con los opcionales, no en la configuración base. Conviene tenerlo claro antes de imaginar a cinco personas durmiendo de serie.

El punto fuerte técnico es la calefacción: un equipo diésel Eberspächer de 5 kW con doble zona —habitáculo y baño por separado— que tira del depósito de gasóleo, más suelo radiante y bandeja de ducha calefactada en el pack de invierno. Es un camper pensado para el frío de verdad, no para el otoño suave, y la toma de gas exterior con una sola bombona pequeña confirma la filosofía: aquí la energía es diésel y electricidad. La nevera de compresor Dometic de 90 litros con doble apertura interior y exterior, los 100 litros de agua limpia y otros 100 de grises, y la cocina variable con espacio extra junto a la cama completan una dotación de serie superior a la media del segmento.

En marcha, el punto débil está claro: el motor de serie es el Ducato 2.2 de 120 CV con cambio manual de seis marchas, justo para mover hasta 3.500 kg con alegría. Westfalia lo sabe y ofrece el 140 CV con automática de 8 velocidades —el de la edición Premium— y el 180 CV como alternativas casi obligatorias para quien viaje cargado o por puertos, con el consiguiente salto de precio. En precio, la web oficial publica un «starting from 67.650 €» que es tarifa del mercado alemán —en España el importe final lo fija la red con portes e impuestos—, por eso va marcado como aproximado.

Sus rivales son los campers premium alemanes de 6 metros, frente a los que el Columbus compite con su calefacción diésel de doble zona y su banqueta patentada. Es para parejas viajeras que hacen temporada fría, que quieren un camper compacto para todo el año y que valoran la ingeniería alemana por encima de la lista de gadgets. No es para quien busca el camper más barato —el motor base se queda corto y los opcionales que lo arreglan cuestan dinero— ni para familias de cinco sin pasar por caja. Cómo lo verificamos: el precio de partida de 67.650 €, las medidas (5,99 × 2,05 × 2,60 m), las 4 plazas de viaje, las camas —transversal de 140 × 197, banqueta de 180 × 90 y techo de 200 × 135—, la calefacción Eberspächer de 5 kW de doble zona, la nevera de 90 litros y los 100 litros de agua proceden de la página oficial del modelo en westfalia-mobil.com, revisada el 18/10/2026; el precio es tarifa alemana y va marcado como tal; la carga útil queda sin dato: Westfalia no la facilita. Resumiendo, el Columbus 600 D es el camper de 6 metros más serio para el invierno: calefacción diésel de doble zona y banqueta patentada lo distinguen, a cambio de un motor base justo que casi obliga a subir de mecánica y de un precio que con opcionales se dispara.

La red Westfalia, aunque más pequeña que la de los gigantes generalistas, es una red de especialistas: talleres que conocen el Columbus al dedillo y recambios específicos garantizados. Para un camper con soluciones propias como la banqueta patentada o la calefacción de doble zona, ese conocimiento especializado vale más que una red enorme de generalistas. Y en reventa, el nombre Westfalia sigue pesando: un Columbus bien mantenido se vende rápido porque la marca tiene una legión de seguidores que la buscan de segunda mano.`,
    analisisSlug: "westfalia-columbus-600d-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Westfalia (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Westfalia",
    },
    euroncap: null,
    notas:
      "«precio de tarifa en Alemania»: 67.650 € es el precio de partida publicado por Westfalia en su web oficial (mercado alemán); en España el importe final lo fija la red. Sin carga útil publicada: la marca no la facilita y no se calcula a partir de las masas. Para dormir: dos plazas de serie (hasta cinco con cama de banqueta y techo elevable opcionales). La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
    curiosidades:
      "La banqueta del Columbus es una cama patentada por Westfalia que se despliega en dos segundos: 180 × 90 cm que convierten el salón en una plaza extra sin montar nada. Fuente: página oficial del Columbus 600 D en westfalia-mobil.com (https://westfalia-mobil.com/en/motorhomes/columbus-600-d/).",
    fuenteNombre: "Westfalia (web oficial + catálogo 2026)",
    fuenteUrl: "https://westfalia-mobil.com/en/motorhomes/columbus-600-d/",
  },
];
