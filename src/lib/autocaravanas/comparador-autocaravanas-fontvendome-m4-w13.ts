// Autocaravanas Font Vendôme — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Font Vendôme 2026 «RandoCamp Série S»
//   (docs.campingcar-infos.com), página oficial del Rando Camp en font-vendome.fr,
//   plein-air.fr y groupejean-auto.fr (ficha y precio anunciado).
// Verificado el 19/10/2026.
// Notas honestas: precioDesde=null (Font Vendôme no publica tarifa oficial; un
//   concesionario francés anuncia el RandoCamp desde 59.990 €). plazasDormir=2
//   de serie (3 con techo elevable opcional). El modelo 2026 se denomina RandoCamp
//   Série S (sustituye a la denominación «Rando 45», que no existe en catálogo).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_FONTVENDOME_M4: Autocaravana[] = [
  {
    id: "font-vendome-randocamp-2026-precio-ficha-tecnica",
    marca: "Font Vendôme",
    modelo: "RandoCamp",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Sin tarifa oficial; un concesionario lo anuncia desde 59.990 €
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet 140 CV
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
    imagen: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5413, // Catálogo oficial 2026 RandoCamp Série S
    anchoMm: 2050, // Catálogo oficial 2026 RandoCamp Série S
    altoMm: 2660, // Catálogo oficial 2026 RandoCamp Série S
    pesoKg: null,
    mmaKg: 3500, // PTAC 3.500 kg
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // La marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2, // Cama transversal; 3 con techo elevable opcional
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (5,413×2,05×2,66 m), PTAC 3.500 kg, 4 plazas, cama transversal " +
      "194×132,5/107 cm, 2 plazas de noche (3 en opción), motor Fiat Ducato 2.2 de " +
      "140 CV, calefacción Truma Combi D4 diésel, depósitos de agua limpia y " +
      "residuales de 100 L, frigorífico de compresión de 70 L y batería AGM de 90 Ah: " +
      "catálogo oficial Font Vendôme 2026 «RandoCamp Série S» " +
      "(https://docs.campingcar-infos.com/docs/Font-Vendome%20(vans)/FontVendome%202026%20RandoCamp%20Serie%20S.pdf) " +
      "y página oficial https://www.font-vendome.fr/van/rando-camp/. El modelo " +
      "asignado («Rando 45») no existe en ningún catálogo de la marca; se sustituyó " +
      "por el RandoCamp, el camper de 5,41 m de la gama 2026. Sin precio aplicado: la " +
      "marca no publica tarifa oficial; el concesionario Groupe Jean " +
      "(https://groupejean-auto.fr/fiche-technique-font-vendome-rando-camp/) lo  Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable." +
      "anuncia desde 59.990 €. La carga útil no la publica la marca.",
    curiosidades:
      "El RandoCamp mete una cama transversal de 194 cm de largo en un furgón de " +
      "solo 5,41 metros, una de las mejores relaciones cama/longitud del segmento " +
      "camper, y su precio anunciado parte de 59.990 €. Fuente: Groupe Jean, ficha " +
      "técnica del Font Vendôme Rando Camp " +
      "(https://groupejean-auto.fr/fiche-technique-font-vendome-rando-camp/).",
    descripcion: `El Font Vendôme RandoCamp es un camper francés de 5,41 metros que
      demuestra que no hacen falta siete metros para viajar cómodo: cama transversal
      trasera de 194 cm, salón para cuatro, cocina completa y baño con ducha, todo
      sobre un Fiat Ducato 2.2 de 140 CV y con un PTAC de 3.500 kg que permite
      conducirlo con el carnet B. Font Vendôme, el aménageur del Périgord que presume
      de ser el número uno de ventas de vans y furgones en Francia, lo encuadra en
      2026 dentro de la Série S, su serie especial de equipamiento generoso a precio
      contenido, y también lo ofrece en la gama Élégance para quien busque un acabado
      más refinado.

      Las cifras oficiales del catálogo 2026 son claras: 5.413 mm de largo, 2.050 mm
      de ancho y 2.660 mm de alto. Es, literalmente, el furgón más pequeño de la gama
      Élégance de la marca, y sin embargo su implantación no renuncia a nada
      esencial. La cama transversal trasera mide 194×132,5/107 cm sobre somier de
      lamas con colchón Premium, una longitud que permite dormir estirado a personas
      de hasta 1,90 m sin doblar las rodillas, algo que no todos los campers de 5,40
      m pueden decir. Delante, el salón con asientos de cabina pivotantes acoge a
      cuatro comensales, y la cocina equipa combinado de fregadero inoxidable con
      dos fuegos y encendido piezoeléctrico, frigorífico de compresión de 70 litros
      y encimera extensible. El baño, modulable, combina WC de cassette pivotante,
      lavabo rabattible y ducha con bac específico, con claraboya de 28×28 cm para
      ventilar.

      En técnica, el RandoCamp Série S apuesta por la autonomía: calefacción y agua
      caliente con el Truma Combi D4 diésel (adiós a depender de la bombona de gas
      para calentar), batería de célula AGM de 90 Ah, panel solar, depósitos de 100
      litros de agua limpia y 100 de residuales, ducha exterior de agua fría,
      mosquitera en la puerta lateral y marchepied eléctrico de gran anchura. Son
      detalles de uso diario que separan un camper bien pensado de uno simplemente
      barato: la moustiquaire, el escalón eléctrico y la ducha exterior se agradecen
      en cada etapa. Opcionalmente puede equiparse con techo elevable, que añade la
      tercera plaza de noche, y con el pack multimedia.

      El precio es el otro gran argumento. Font Vendôme no publica tarifa oficial —
      la venta se hace por red de concesionarios—, pero el distribuidor francés
      Groupe Jean anuncia el RandoCamp desde 59.990 €, una cifra muy competitiva
      para un camper nuevo de 2026 con este nivel de equipamiento. Para situarlo:
      un camper equivalente de marcas alemanas con calefacción diésel y 100 litros
      de agua suele partir varios miles por encima. La contrapartida es una red
      comercial concentrada en Francia: en España hay distribuidores, pero conviene
      verificar el servicio postventa antes de firmar.

      Cómo lo verificamos: dimensiones, pesos, plazas, motor, equipamiento y la
      cama de 194 cm proceden del catálogo oficial Font Vendôme 2026 «RandoCamp
      Série S», consultado el 19/10/2026, y de la página oficial del modelo en
      font-vendome.fr/van/rando-camp/; el precio anunciado de 59.990 € figura en la
      ficha del concesionario Groupe Jean. La denominación «Rando 45» asignada
      inicialmente no existe en ningún catálogo de la marca, por lo que se sustituyó
      por el RandoCamp, el modelo real de 5,41 m de la gama 2026, y así consta en el
      manifest.

      Para quién es: el RandoCamp encaja con parejas que quieren un camper ágil para
      el día a día y escapadas largas, que valoran dormir en una cama fija de 194 cm
      sin montar nada y que viajan con mentalidad de autonomía (calefacción diésel,
      100 litros de agua, panel solar). No es para familias de cuatro que necesiten
      cuatro camas fijas —aquí hay dos, tres con el techo opcional—, ni para quien
      quiera un salón enorme: con 5,41 m, el espacio se reparte con inteligencia,
      pero no se multiplica.`,
    pros: [
      "Cama transversal fija de 194 cm en solo 5,41 m: dormir estirado sin montar nada",
      "Calefacción Truma Combi D4 diésel: calor y agua caliente sin depender del gas",
      "100 litros de agua limpia y 100 de residuales, más panel solar: autonomía real",
      "Precio anunciado desde 59.990 €, muy competitivo para su equipamiento",
      "Conducible con carnet B y ágil en ciudad y carreteras secundarias",
    ],
    contras: [
      "Sin tarifa oficial de la marca: el precio final depende del concesionario",
      "Dos plazas de noche de serie; la tercera exige el techo elevable opcional",
      "Baño modulable compacto: funcional, pero no es el de una perfilada",
      "Red comercial concentrada en Francia; verificar postventa en España",
      "Batería AGM de 90 Ah de serie: quien busque mucha autonomía querrá litio",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-oficial.webp", alt: "Font Vendôme RandoCamp, vista exterior", ancho: 1620, alto: 1080 },
      { src: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-interior1.webp", alt: "Font Vendôme RandoCamp, cama transversal", ancho: 1620, alto: 1080 },
      { src: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-interior2.webp", alt: "Font Vendôme RandoCamp, salón con asientos de cabina", ancho: 1620, alto: 1080 },
      { src: "/media/font-vendome-randocamp-2026-precio-ficha-tecnica-detalle.webp", alt: "Font Vendôme RandoCamp, cocina y salón", ancho: 1620, alto: 1080 },
    ],
    analisisSlug: "font-vendome-randocamp-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Font Vendôme (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
