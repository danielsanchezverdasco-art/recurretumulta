// 25/10/2026 (informe SEO rev25): ampliación «A fondo» de cada término del glosario,
// con datos verificables y la norma o fuente oficial enlazada. Sin cifras de relleno.
export type AFondo = { parrafos: string[]; fuentes: { nombre: string; url: string }[] };

export const GLOSARIO_A_FONDO: Record<string, AFondo> = {
  "par-motor": {
    parrafos: [
      "Par y potencia están unidos por una fórmula sencilla: potencia en kW = par en Nm × revoluciones por minuto ÷ 9.549. Un motor que da 300 Nm a 3.000 rpm entrega unos 94 kW, es decir, alrededor de 128 CV (1 CV equivale a 0,7355 kW). Por eso dos coches con la misma potencia pueden sentirse muy distintos: el que tiene más par a bajas vueltas empuja antes sin tener que reducir de marcha.",
      "En las fichas técnicas de los coches de combustión el par aparece con su régimen, por ejemplo «400 Nm entre 1.750 y 3.000 rpm». Cuanto más ancha y baja sea esa franja, más elástico resulta el motor en adelantamientos y cuestas con el coche cargado. En un eléctrico el par máximo suele estar disponible desde 0 rpm y se mantiene hasta velocidades medias, así que la cifra importa sobre todo para la aceleración en ciudad y en incorporaciones.",
      "Las marcas miden potencia y par según el Reglamento n.º 85 de la CEPE/ONU, el que fija cómo se homologa la potencia neta de los motores en la Unión Europea.",
    ],
    fuentes: [],
  },
  wltp: {
    parrafos: [
      "El WLTP sustituyó al antiguo ciclo NEDC: es obligatorio para los nuevos tipos homologados desde septiembre de 2017 y para todos los coches nuevos matriculados desde septiembre de 2018, según el Reglamento (UE) 2017/1151. Su ciclo dura 30 minutos, recorre 23,25 km en cuatro fases (baja, media, alta y extra alta), llega a 131,3 km/h y tiene una velocidad media de 46,5 km/h, bastante más realista que el NEDC.",
      "En España el WLTP también tiene efecto fiscal: las emisiones de CO₂ homologadas deciden el tipo del impuesto de matriculación en la Península y Baleares (0 % hasta 120 g/km, 4,75 % entre 120 y 160, 9,75 % entre 160 y 200 y 14,75 % por encima, según el artículo 70 de la Ley 38/1992). Por eso dos versiones del mismo modelo pueden pagar impuestos diferentes solo por llantas o equipamiento que suben unos gramos.",
      "En los eléctricos, muchas fichas dan además la autonomía WLTP en ciudad, que suele ser mayor que la combinada porque a baja velocidad el consumo baja y se recupera más energía al frenar.",
    ],
    fuentes: [
      { nombre: "Reglamento (UE) 2017/1151, EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32017R1151" },
      { nombre: "Ley 38/1992 de Impuestos Especiales, art. 70, BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28741" },
    ],
  },
  cltc: {
    parrafos: [
      "El ciclo CLTC-P para turismos se definió en la norma china GB/T 38146.1-2019. Dura 1.800 segundos, recorre unos 14,5 km y no pasa de 114 km/h, con una velocidad media cercana a 29 km/h; casi un tercio del tiempo el coche está parado. Comparado con los 131,3 km/h de máxima y los 46,5 km/h de media del WLTP, se entiende por qué la cifra china siempre sale más alta.",
      "Como orientación, la autonomía WLTP de un mismo eléctrico suele quedar entre un 15 % y un 25 % por debajo de la CLTC; no es una conversión oficial, solo una referencia para no comparar cifras de ciclos distintos. La estadounidense EPA es todavía más exigente que el WLTP.",
      "Para comprar en España vale la cifra WLTP de la homologación europea: es la que aparece en la ficha de venta y la que usan las ayudas y los impuestos.",
    ],
    fuentes: [{ nombre: "Reglamento (UE) 2017/1151 (WLTP), EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32017R1151" }],
  },
  kwh: {
    parrafos: [
      "En las fichas verás a veces dos cifras de batería: capacidad bruta y capacidad útil (o neta). La útil es la que de verdad puedes usar, porque la marca reserva un margen arriba y abajo para alargar la vida de las celdas; para calcular autonomía hay que usar esta. La cuenta es directa: 60 kWh útiles con un consumo de 17 kWh/100 km dan unos 350 km.",
      "Los kWh también sirven para calcular lo que cuesta cargar: multiplica los kWh que metes por el precio del kWh. Con una tarifa doméstica de 0,15 €/kWh, recorrer 100 km a 16 kWh/100 km cuesta unos 2,40 €; en un cargador rápido público, con precios que a menudo superan los 0,50 €/kWh, el mismo trayecto puede costar tres veces más. Ten en cuenta además que en la carga se pierde algo de energía en forma de calor, más en corriente alterna que en continua.",
    ],
    fuentes: [{ nombre: "Reglamento (UE) 2023/1804 (AFIR): precio por kWh visible en cargadores públicos, EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32023R1804" }],
  },
  "carga-rapida-dc": {
    parrafos: [
      "En Europa el conector estándar para la carga rápida es el CCS2 (Combo 2), que añade dos pines de corriente continua al conector Tipo 2 de la carga en alterna. El CHAdeMO, que usaban algunos modelos japoneses, está desapareciendo de los puntos nuevos. En corriente alterna el coche carga con su cargador interno, normalmente de 7,4 u 11 kW, y algunos admiten 22 kW.",
      "El Reglamento (UE) 2023/1804, conocido como AFIR, obliga a que los cargadores públicos nuevos de 50 kW o más instalados desde el 13 de abril de 2024 acepten pago con tarjeta bancaria sin necesidad de app ni registro, y a que el precio por kWh se muestre antes de empezar a cargar. También fija objetivos de potencia de carga cada 60 km en la red transeuropea de carreteras.",
      "Para viajes, fíjate más en el tiempo del 10 % al 80 % que en la potencia máxima: un coche que mantiene 150 kW durante casi toda la carga puede acabar antes que otro que alcanza 250 kW solo unos minutos.",
    ],
    fuentes: [{ nombre: "Reglamento (UE) 2023/1804 (AFIR), EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32023R1804" }],
  },
  "etiqueta-dgt": {
    parrafos: [
      "Los criterios están en el anexo II del Reglamento General de Vehículos. Etiqueta CERO: eléctricos de batería, de autonomía extendida, de pila de combustible e híbridos enchufables con al menos 40 km de autonomía eléctrica. ECO: híbridos enchufables por debajo de 40 km, híbridos no enchufables y vehículos de gas (GNC, GNL o GLP). C: turismos de gasolina Euro 4, 5 y 6 y diésel Euro 6. B: gasolina Euro 3 y diésel Euro 4 y 5. Los que no llegan a la B se quedan sin etiqueta.",
      "Puedes consultar la que le corresponde a cualquier coche con su matrícula en la web de la DGT, y el adhesivo se compra en Correos o en talleres autorizados. La Ley 7/2021 de cambio climático obliga a los municipios de más de 50.000 habitantes a tener zona de bajas emisiones, y cada ayuntamiento decide qué etiquetas pueden entrar y con qué horarios, así que conviene revisar la ordenanza de cada ciudad.",
    ],
    fuentes: [
      { nombre: "DGT · Distintivo ambiental", url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/" },
      { nombre: "Ley 7/2021 de cambio climático, art. 14, BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447" },
    ],
  },
  "bomba-de-calor": {
    parrafos: [
      "La eficiencia de una bomba de calor se mide con el COP (coeficiente de rendimiento): un COP de 3 significa que por cada kWh que saca de la batería entrega unos 3 kWh de calor al habitáculo. Una calefacción de resistencias (PTC) tiene un COP de 1 como mucho, porque convierte la electricidad en calor sin aprovechar el del exterior. Con temperaturas muy bajas, por debajo de unos -10 °C, el COP cae y muchos coches combinan la bomba con resistencias de apoyo.",
      "Para sacarle partido en invierno ayuda preacondicionar el coche mientras está enchufado: el habitáculo y la batería se calientan con energía de la red y no de la batería. Los asientos y el volante calefactados también gastan muy poco comparado con calentar todo el aire del interior.",
      "Antes de comprar, comprueba en la ficha o en la configuración si la bomba de calor viene de serie o es un extra; algunas marcas la incluyen solo en los acabados altos.",
    ],
    fuentes: [],
  },
  v2l: {
    parrafos: [
      "V2L no es lo mismo que V2H ni V2G. Con V2L el coche alimenta aparatos enchufados directamente a él; con V2H (vehicle to home) alimenta la instalación de una vivienda a través de un equipo bidireccional instalado por un electricista; y con V2G (vehicle to grid) devuelve energía a la red eléctrica, algo que en España todavía está en pruebas.",
      "La potencia típica del V2L ronda los 3,6 kW con una toma de 230 V tipo schuko, suficiente para una placa de inducción pequeña o un hervidor, aunque no para todo a la vez. El sistema deja de dar corriente cuando la batería baja del mínimo que fijes en el menú, para que no te quedes sin autonomía para volver.",
      "Si vas a usarlo en acampadas, recuerda que las normas de cada camping o espacio natural pueden limitar el uso de aparatos eléctricos al aire libre.",
    ],
    fuentes: [],
  },
  "autonomia-extendida-erev": {
    parrafos: [
      "En España los eléctricos de autonomía extendida llevan la etiqueta CERO de la DGT, como los eléctricos de batería, siempre que cumplan el mínimo de 40 km de autonomía eléctrica que se exige a los enchufables. Eso les da acceso a las zonas de bajas emisiones con las mismas condiciones que un eléctrico puro.",
      "En la homologación WLTP el consumo de gasolina de un EREV se calcula ponderando los kilómetros que hace con la batería y los que hace con el generador, igual que en un híbrido enchufable. Por eso la cifra oficial suele ser muy baja; en un viaje largo con la batería ya gastada, el generador consume más de lo que sugiere la homologación.",
      "Ejemplos que se venden en Europa son el Leapmotor C10 REEV y el Mazda MX-30 R-EV, que usa un pequeño motor rotativo como generador.",
    ],
    fuentes: [{ nombre: "DGT · Distintivo ambiental", url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/" }],
  },
  "hibrido-enchufable-phev": {
    parrafos: [
      "La etiqueta depende de la autonomía eléctrica homologada: con 40 km WLTP o más un PHEV lleva la etiqueta CERO; por debajo, la ECO. Por eso casi todos los enchufables recientes anuncian más de 40 km.",
      "El consumo oficial de un PHEV (a veces 1 l/100 km o menos) sale de ponderar el uso eléctrico y el térmico con un «factor de utilidad». Con la norma Euro 6e-bis, que el Reglamento (UE) 2023/443 aplica a los nuevos tipos desde 2025 y a todas las matriculaciones desde 2026, ese factor se corrige para reflejar que los usuarios cargan menos de lo previsto, y las cifras homologadas de consumo y CO₂ suben.",
      "La mayoría carga en alterna a 3,7 o 7,4 kW, así que una batería de 20 kWh necesita unas tres horas en un wallbox; solo algunos admiten carga rápida en continua.",
    ],
    fuentes: [
      { nombre: "Reglamento (UE) 2023/443 (Euro 6e-bis), EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32023R0443" },
      { nombre: "DGT · Distintivo ambiental", url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/" },
    ],
  },
};
