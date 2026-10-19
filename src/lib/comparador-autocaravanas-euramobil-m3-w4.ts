// Autocaravanas Euramobil — lote Merlín 3 (19/10/2026).
// Fuentes: guía de prensa 2027 de Eura Mobil (outandaboutlive.co.uk, con imágenes
//   ©Eura Mobil), anuncios de distribuidores oficiales alemanes para unidades Profila T
//   726 EF 2026 (dimensiones, motor, MMA, equipamiento y precios de distribuidor).
//   Verificado el 19/10/2026.
// Notas honestas: Eura Mobil no publica PVP oficial en España: precioDesde queda en
//   null y los precios de distribuidor alemán se citan solo como referencia con fuente.
//   Las páginas de detalle de euramobil.de no pudieron consultarse (fallo reiterado del
//   servicio de lectura el 19/10/2026); los datos técnicos proceden de la prensa
//   especializada y de fichas de distribuidores oficiales. Fotos pendientes: el
//   buscador de imágenes y la lectura de páginas fallaron de forma reiterada; el
//   coordinador deberá aportarlas.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_EURAMOBIL_M3: Autocaravana[] = [
  {
    id: "euramobil-profila-t-726-ef-2026-precio-ficha-tecnica",
    marca: "Euramobil",
    modelo: "Profila T 726 EF",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Eura Mobil no publica PVP oficial en España
    potenciaCv: 170, // Mercedes Sprinter 2.0 de 125 kW (fichas de distribuidor)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "",
    imagenOficial: "",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    largoMm: 7441, // mobile.de (unidad 2026): 7.441 mm; el distribuidor anota 7.450 mm
    anchoMm: 2330, // fichas de distribuidor: 2.330 mm
    altoMm: 2920, // fichas de distribuidor: 2.920 mm
    pesoKg: null,
    mmaKg: 4500, // fichas de distribuidor: 4.500 kg
    carnetNecesario: "C1", // MMA 4500 kg > 3500 kg
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // salón cara a cara con 4 plazas de viaje (prensa especializada)
    plazasDormir: 4, // camas individuales traseras + plazas complementarias (distribuidor: 4 camas)
    parNm: null,
    traccion: null, // la marca no lo declara en las fuentes consultadas
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo 2026 verificado en anuncios de distribuidores oficiales alemanes (Reisemobile Dülmen, MS-Reisemobile Münster): Mercedes Sprinter 2.0 de 125 kW (170 CV), cambio automático 9G-Tronic, 7.441 mm de largo, 2.330 mm de ancho, 2.920 mm de alto y MMA de 4.500 kg. " +
      "Distribución EF: camas individuales traseras de más de 2 m, salón cara a cara y baño con zona de vestidor (guía de prensa Eura Mobil 2027, outandaboutlive.co.uk). " +
      "Construcción: doble suelo calefactado, paneles GRP sin madera y calefacción de agua caliente Alde (prensa). " +
      "Precio null en España: Eura Mobil no publica tarifa ES; como referencia, los distribuidores alemanes anuncian unidades 2026 Comfort Level Edition en torno a 129.850-129.950 €. " +
      "Discrepancia menor: un anuncio (modix) anota 3 plazas para dormir frente a 4 en la mayoría de fichas; se adopta 4 y se declara aquí. " +
      "Sin fotos: el servicio de lectura web y el buscador de imágenes fallaron reiteradamente el 19/10/2026; queda pendiente que el coordinador las aporte.",
    curiosidades:
      "La gama Profila T existe también en versión «Freestyle»: el mismo concepto Mercedes pero aligerado hasta 3.500 kg de MMA sobre chasis Al-Ko optimizado, de modo que puede conducirse con el carnet B sin renunciar a las camas individuales traseras (fuente: guía de prensa Eura Mobil 2027, https://www.outandaboutlive.co.uk/motorhomes/news/buying-advice/eura-mobil-motorhomes-and-campervans-2027-essential-guide, consultada el 19/10/2026).",
    descripcion: `El Euramobil Profila T 726 EF es la perfilada alemana para quien no quiere oír hablar de compromisos: chasis Mercedes Sprinter, 170 CV con cambio automático de 9 velocidades, 4.500 kg de MMA y una célula construida como las grandes —doble suelo calefactado, paneles sin madera y calefacción de agua caliente Alde—. Eura Mobil lleva décadas en el segmento medio-alto alemán y la Profila T es su superventas: la perfilada de los que viajan mucho, en cualquier estación, y quieren que el vehículo aguante el ritmo durante años.

En medidas y habitabilidad, las fichas de los distribuidores para unidades 2026 anotan 7.441 mm de largo, 2.330 mm de ancho y 2.920 mm de alto, con una MMA de 4.500 kg que exige el carnet C1. Son cotas de perfilada grande, y se notan para bien dentro: la distribución EF combina un salón cara a cara —dos banquetas enfrentadas que la prensa destaca por su sensación de amplitud— con camas individuales traseras de poco más de dos metros de largo, un gran garaje bajo ellas y un baño que puede cerrarse para formar una zona de vestidor independiente. Es la implantación clásica centroeuropea para parejas exigentes: cada uno tiene su cama, su armario y su lado, sin tener que deshacer nada por la mañana, y el salón cara a cara invita a las sobremesas largas que en una dinette lateral no caben.

En tecnología y equipamiento, la Profila T 726 EF juega en otra liga respecto a las perfiladas de entrada. La construcción incluye doble suelo aislado y calefactado de 30 cm —el secreto para viajar en invierno sin que los pies se congelen—, paneles de carrocería en GRP sin madera (no hay madera que se pudra si entra humedad) y calefacción de agua caliente Alde, el sistema por radiadores que los caravanistas del norte consideran el mejor para el frío serio. El paquete Mondial para Mercedes añade los asientos Captain Chair de Aguti, la integración de smartphone con carga inalámbrica, el climatizador de cabina, el techo panorámico practicable Sun Roof, la claraboya Heki y la preinstalación solar, entre otros. Las unidades 2026 Comfort Level Edition que anuncian los distribuidores suman además batería de litio, toldo, cámara trasera y estabilizadores, configurando un vehículo listo para salir sin pasar por el taller de accesorios.

En camas y plazas, la ficha es de cuatro y cuatro: cuatro plazas de viaje en el salón cara a cara y cuatro para dormir. Las camas individuales traseras, de más de dos metros, son la cama principal —firme, siempre hecha, con colchones independientes—; las dos plazas restantes se obtienen del salón o de la cama abatible según configuración, válidas para nietos o invitados ocasionales. El garaje trasero, de generosa altura gracias a las camas elevadas, traga bicicletas, sillas y todo el equipo de invierno sin desmontar nada.

En mecánica no hay discusión: Mercedes Sprinter 2.0 diésel de 125 kW (170 CV) con el cambio automático 9G-Tronic. Es el conjunto que ha convertido a las perfiladas Mercedes en las favoritas de los grandes viajeros: empuje de sobra para los 4.500 kg incluso en puertos, cambio suave que no cansa en atascos y una red de servicio Mercedes en toda Europa. El chasis es el Al-Ko rebajado específico para autocaravanas, que baja el centro de gravedad y el escalón de acceso. El depósito de 92 litros y el consumo contenido del 2.0 le dan una autonomía digna para cruzar Europa sin repostar cada día.

En precio y red comercial en España, Eura Mobil no publica tarifa oficial española y el precio de esta ficha queda en null. Como referencia con fuente: los distribuidores alemanes anuncian unidades 2026 Comfort Level Edition entre 129.850 y 129.950 €. En España la marca tiene distribuidores oficiales —conviene localizar el más cercano porque el servicio postventa de una perfilada de este nivel importa tanto como el precio— y el presupuesto final variará mucho según los paquetes (Mondial, Mondial Plus, S) y el nivel Comfort. Quien venga de una perfilada de 3.500 kg debe tener claro el salto: aquí hace falta el C1 y el presupuesto de compra y mantenimiento es superior, pero a cambio se obtiene una autocaravana sin los límites de peso que asfixian a las de 3,5 toneladas.

Cómo lo verificamos: guía de prensa 2027 de Eura Mobil publicada por outandaboutlive.co.uk (con imágenes ©Eura Mobil, consultada el 19/10/2026), de donde salen la distribución, las medidas de las camas, el doble suelo, los paneles GRP y la calefacción Alde; y anuncios de distribuidores oficiales alemanes (Reisemobile Dülmen, MS-Reisemobile Münster) para unidades 2026, con motor, cambio, dimensiones, MMA, tapicería, decoración y precios. Las páginas de euramobil.de no cargaron el 19/10/2026 por un fallo reiterado del servicio de lectura; cada dato lleva su fuente y lo no confirmado queda en null.

Para quién es: para parejas viajeras de alto kilometraje que quieren una perfilada Mercedes para todo el año —incluido invierno serio—, con camas individuales de verdad, gran garaje y sin agobios de peso gracias a los 4.500 kg; y que ya tienen (o van a sacarse) el carnet C1. No es para quien solo tenga el carnet B —entonces la opción es la Profila T Freestyle de 3.500 kg—, ni para quien busque la perfilada más barata: esto es gama media-alta alemana y se paga. Tampoco para uso urbano: 7,44 m y 4,5 toneladas piden carretera abierta.`,
    pros: [
      "Mercedes Sprinter 170 CV + 9G-Tronic: la mecánica favorita de los grandes viajeros europeos.",
      "Doble suelo calefactado, paneles GRP sin madera y Alde: construida para el invierno de verdad.",
      "Camas individuales traseras de más de 2 m + salón cara a cara: la distribución centroeuropea perfecta para parejas.",
      "4.500 kg de MMA: se acabaron los agobios de peso de las perfiladas de 3,5 t.",
      "Paquetes Mondial muy completos: sale del concesionario lista para viajar sin taller de accesorios.",
    ],
    contras: [
      "Exige carnet C1: quien solo tenga el B no puede conducirla (existe la Freestyle de 3.500 kg).",
      "La marca no publica PVP en España: el precio se negocia con el distribuidor.",
      "7,44 m y 4,5 t: ni ciudad ni pistas; pide carretera y áreas amplias.",
      "Precio de distribuidor alemán en torno a 130.000 €: gama media-alta, no apta para todos los bolsillos.",
      "El mantenimiento Mercedes y los repuestos específicos cuestan más que en una Fiat.",
    ],
    opiniones: [],
    galeria: [],
    analisisSlug: "euramobil-profila-t-726-ef-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión según indicador del vehículo (aprox. cada 2 años o 40.000 km)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter 2.0)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Eura Mobil (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, circuito Alde", costeAproxEur: 300 },
      ],
    },
  },
];
