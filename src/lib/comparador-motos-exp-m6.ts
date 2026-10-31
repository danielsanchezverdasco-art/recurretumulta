// Lote M6 (05/10/2026) — 50 motos: GasGas, Fantic, Sherco, Beta, Montesa,
// AJP, Scorpa, TRS, Vertigo, Mecatecno, Stark Future y Rieju.
// Solo datos verificados (webs oficiales, motofichas.com, trialworld.es,
// concesionarios). Dato no verificado = null; estimaciones en `aprox`.
import type { MotoComparador } from "./comparador-motos-data.ts";

export const MOTOS_EXP_M6: MotoComparador[] = [
  {
    id: "gasgas-ec-300-2t-2025-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "EC 300",
    version: "2T 2025",
    cilindradaCc: 300,
    categoria: "Enduro",
    precioDesde: 10315,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 107.6,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Inyección electrónica TBI: arranque inmediato y sin carburador que ajustar",
      "Chasis actualizado para 2025 con mejor paso por curva",
      "Ligera para su cilindrada: 107,6 kg sin combustible",
      "Horquilla WP Xplor 48 y frenos Braktec de eficacia probada",
      "Precio oficial 10.315 €, por debajo de sus primas KTM y Husqvarna con la misma base",
      "Homologada Euro5+: se puede matricular y usar a diario"
    ],
    contras: [
      "Motor 2T: hay que preparar la mezcla de gasolina y aceite",
      "Mantenimiento más frecuente que una 4T equivalente",
      "Depósito de 9 litros: autonomía justa en rutas largas",
      "Asiento alto (956 mm): complicada para pilotos de poca estatura",
      "Vibraciones y consumo superiores a una 4T de enduro",
      "Seguro y neumáticos de enduro más caros que en una trail"
    ],
    curiosidades: [
      "GasGas pertenece al grupo KTM (Pierer Mobility) y comparte plataforma con la KTM 300 EXC",
      "La inyección TBI (en el cuerpo de aceleración) sustituyó al carburador en la gama 2024",
      "El cambio es un Pankl de 6 velocidades, el mismo proveedor que en MotoGP",
      "De serie monta neumáticos Maxxis y manillar Neken de aluminio"
    ],
    imagen: "/media/gasgas-ec-300-2t-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/gasgas-ec-300-2t-2025-ficha-tecnica-precio-2.webp", alt: "GasGas EC 300 GP 2025, vista trasera tres cuartos", ancho: 918, alto: 629 },
      
      { src: "/media/gasgas-ec-300-2t-2025-ficha-tecnica-precio-4.webp", alt: "GasGas EC 300 2025, vista lateral", ancho: 600, alto: 338 },
    ],
    videoId: "wdUUQBSsGbU",
    videoCanal: "Michael Boggess",
    fuenteNombre: "motofichas.com",
    fuenteUrl: "https://www.motofichas.com/marcas/gasgas/ec-300-2025",
    analisisSlug: "gasgas-ec-300-2t-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Sin premezcla: la bomba electrónica dosifica el aceite 2T (media 60:1); el testigo del cuadro avisa cuando el nivel baja (dato oficial GasGas)"]
    },
  },
  {
    id: "gasgas-ec-250-2t-2025-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "EC 250",
    version: "2T 2025",
    cilindradaCc: 250,
    categoria: "Enduro",
    precioDesde: 9955,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 107.6,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Motor 2T de 249 cc con inyección Keihin EFI de 39 mm: respuesta limpia en todo el régimen",
      "Centralita EMS de Vitesco y batería de iones de litio de serie",
      "Chasis de doble cuna en acero 25CrMo4 actualizado para 2025",
      "Suspensiones WP con 300 mm de recorrido delante y detrás",
      "Homologada Euro5+: matriculable y usable a diario",
      "Precio 9.955 €: la 250 2T austriaca más asequible del trío KTM/Husky/GasGas"
    ],
    contras: [
      "Hay que hacer la mezcla de gasolina sin plomo 98 y aceite 2T",
      "Menos par a bajo régimen que su hermana EC 300",
      "Depósito de 9 litros: hay que planificar los repostajes",
      "Asiento a 956 mm de altura: no es para todos los públicos",
      "El 2T exige más atención al mantenimiento que un 4T",
      "Sonoridad y humo del 2T, aunque cumple Euro5+"
    ],
    curiosidades: [
      "Su diámetro por carrera es de 72 x 66,4 mm, cotas típicas de las 250 2T de competición",
      "El embrague es multidisco DS en baño de aceite con accionamiento hidráulico Braktec",
      "Monta cadena con junta en X de paso 520, pensada para durar en el barro",
      "Comparte la base técnica con la KTM 250 EXC del mismo año"
    ],
    imagen: "/media/motos/gasgas-ec-250-2t-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/gasgas-ec-250-2t-2025-ficha-tecnica-precio-2.webp", alt: "Detalle del chasis y suspensiones WP de la GasGas EC 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/gasgas-ec-250-2t-2025-ficha-tecnica-precio-3.webp", alt: "GasGas EC 250 2025 rodando por una pista forestal", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "MP Racing (concesionario GasGas)",
    fuenteUrl: "https://mpracing.es/gasgas-motos/100672-moto-gas-gas-ec-250-2t-2025.html",
    analisisSlug: "gasgas-ec-250-2t-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Sin premezcla: la bomba electrónica dosifica el aceite 2T (media 60:1); el testigo del cuadro avisa cuando el nivel baja (dato oficial GasGas)"]
    },
  },
  {
    id: "gasgas-ec-250f-2025-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "EC 250F",
    version: "4T 2025",
    cilindradaCc: 250,
    categoria: "Enduro",
    precioDesde: 10955,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 109.5,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Motor 4T de 249,9 cc: entrega suave y apta para pilotos que suben de cilindrada",
      "Eje de balance que reduce las vibraciones del monocilíndrico",
      "Chasis y basculante evolucionados para 2025, con mejor rigidez",
      "Cambio Pankl de 6 velocidades con embrague de diafragma amortiguado",
      "Homologada y matriculable: vale para ir al trabajo entre semana",
      "Nueva pinza de freno trasero de mayor tamaño para 2025"
    ],
    contras: [
      "10.955 €: más cara que la EC 250 2T con la misma cilindrada nominal",
      "109,5 kg: algo más pesada que las 2T de la gama",
      "El 4T exige reglajes de válvulas periódicos",
      "Menos explosiva que una 250 2T en zonas muy técnicas",
      "Repuestos del motor 4T más caros que los del 2T",
      "Asiento alto, típico de enduro de competición"
    ],
    curiosidades: [
      "Es la puerta de acceso a la gama 4T de enduro de GasGas",
      "Para 2025 estrena botones de arranque y parada reubicados en el manillar",
      "El acelerador lleva un mecanismo reforzado nuevo este año",
      "Su decoración roja con gráficos 2025 la distingue de un vistazo"
    ],
    imagen: "/media/motos/gasgas-ec-250f-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/gasgas-ec-250f-2025-ficha-tecnica-precio-2.webp", alt: "Motor 4T de 249,9 cc de la GasGas EC 250F 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/gasgas-ec-250f-2025-ficha-tecnica-precio-3.webp", alt: "GasGas EC 250F 2025 en una crono de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "InNd5speD6A",
    videoCanal: "Steve Shaw",
    fuenteNombre: "motofichas.com",
    fuenteUrl: "https://www.motofichas.com/marcas/gasgas/ec-250f",
    analisisSlug: "gasgas-ec-250f-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-50 para el motor (especificación verificada)"
    },
  },
  {
    id: "gasgas-ec-125-2025-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "EC 125",
    version: "2T 2025",
    cilindradaCc: 125,
    categoria: "Enduro",
    precioDesde: 9499,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 99.5,
    plazas: 1,
    carnet: "A1",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Se conduce con el carnet A1 (o el B con 3 años de experiencia)",
      "Solo 99,5 kg: la más ligera de la gama EC de enduro",
      "Motor 2T de 124,8 cc divertidísimo y barato de mantener",
      "Homologada Euro5+: se puede matricular",
      "Ideal para jóvenes que vienen del 50 y para pilotos ligeros",
      "Precio 9.499 €: acceso a la plataforma austriaca por menos de 10.000 €"
    ],
    contras: [
      "124,8 cc: hay que llevarla alta de vueltas para que rinda",
      "No apta para pilotos pesados o uso en carretera abierta",
      "Mezcla de gasolina y aceite obligatoria",
      "Autonomía limitada con su depósito de enduro",
      "Requiere más técnica que una 250 para ir rápido",
      "El 2T pequeño exige cuidar el embrague en zonas lentas"
    ],
    curiosidades: [
      "Es la moto con la que muchos pilotos dan el salto del 50 al enduro de verdad",
      "Su motor 2T de 124,8 cc deriva de la plataforma de motocross MC 125",
      "Pesa menos de 100 kg sin combustible, como una bici con motor",
      "GasGas la anuncia como la enduro más divertida de pilotar de su catálogo"
    ],
    imagen: "/media/motos/gasgas-ec-125-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/gasgas-ec-125-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la parte ciclo de la GasGas EC 125 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/gasgas-ec-125-2025-ficha-tecnica-precio-3.webp", alt: "GasGas EC 125 2025 en un tramo de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "3lhiXOTvavY",
    videoCanal: "Andrea Vignone",
    fuenteNombre: "MP Racing (concesionario GasGas)",
    fuenteUrl: "https://mpracing.es/776-enduro-gasgas",
    analisisSlug: "gasgas-ec-125-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Sin premezcla: la bomba electrónica dosifica el aceite 2T (media 60:1); el testigo del cuadro avisa cuando el nivel baja (dato oficial GasGas)"]
    },
  },
  {
    id: "gasgas-mc-450f-2025-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "MC 450F",
    version: "2025",
    cilindradaCc: 450,
    categoria: "Motocross",
    precioDesde: 11925,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 104.1,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: ["Monocilíndrico SOHC de 449,9 cc con inyección Keihin de 44 mm y compresión 13,1:1, señalado en las comparativas como el 450 austriaco de entrega más progresiva", "Horquilla WP XACT AER de 48 mm: trabaja con aire a presión, sin muelles, y su tarado de serie resulta más permisivo que el de la KTM para pilotos aficionados", "Embrague DDS con hidráulica Braktec y compensación automática del desgaste: tacto constante manga tras manga sin andar ajustando la maneta", "El bastidor de acero 25CrMo4 estrena en esta 2025 los recortes junto a la pipa y al anclaje del amortiguador que antes solo montaba la Factory Edition", "Manillar Neken de aluminio colocado 12 mm más alto que en la 450 SX-F, con una postura algo más relajada para rodar tandas largas", "Dentro del grupo Pierer ocupa el escalón de acceso a las 450: recorta en tijas forjadas e hidráulica Braktec para costar menos que sus hermanas naranja y blanca"],
    contras: ["En el manillar solo hay botones de arranque y parada: los dos mapas, el control de tracción, la ayuda de salida y el cambio rápido exigen comprar aparte el conmutador Map Select", "Viene bloqueada en su cartografía suave y, sin cámara de resonancia en el colector, responde con menos inmediatez que la SX-F cuando se busca el último empujón", "Su plan oficial se cuenta en horas, no en kilómetros: aceite y filtro nuevos tras la primera hora y después en cada escalón de 15 horas de uso", "Nació únicamente para recintos cerrados: carece de alumbrado y de homologación viaria, así que cada jornada arranca cargándola en remolque o furgoneta", "Asiento a 956 mm del suelo y empuje de 450 en un conjunto pensado para competir: en mangas largas castiga brazos y piernas a quien no entrene", "La horquilla neumática obliga a vigilar su presión con bomba específica antes de rodar; quien prefiera olvidarse de ajustes echará en falta unos muelles clásicos"],
    curiosidades: ["Jorge Prado se coronó campeón del mundo de MXGP en 2023 con el equipo oficial Red Bull GASGAS Factory Racing, sobre la base de esta misma MC 450F", "Es la única 450 de cross que confía frenos y embrague a Braktec; el resto de la parrilla de su clase recurre a Brembo o a Nissin", "Su escape prescinde de la cámara de resonancia del colector y alarga el silencioso con una boca menor, receta que ablanda el carácter frente a las SX-F y FC 450", "La familia MC llegó al catálogo en 2021, el estreno de la marca española en el motocross moderno ya integrada en el grupo austriaco"],
    imagen: "/media/motos/gasgas-mc-450f-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/gasgas-mc-450f-2025-ficha-tecnica-precio-2.webp", alt: "Motor 4T de 449,9 cc de la GasGas MC 450F 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/gasgas-mc-450f-2025-ficha-tecnica-precio-3.webp", alt: "GasGas MC 450F 2025 saltando en un circuito de motocross", ancho: 1200, alto: 800 }
    ],
    videoId: "0lgyb1Bh9wc",
    videoCanal: "motorbikemag",
    fuenteNombre: "GasGas España",
    fuenteUrl: "https://mpracing.es/774-gasgas-motos",
    analisisSlug: "gasgas-mc-450f-2025-ficha-tecnica-precio",
    mantenimientoDIY: {"aceiteTipo": "SAE 10W-50 para el monocilíndrico de 449,9 cc; en cada escalón se renueva junto al filtro y se limpian los tamices metálicos del circuito de engrase", "cadenaPasos": ["Con la rueda trasera elevada, comprueba la tensión de la cadena 520 sin retenes en el punto central del ramal inferior, tal como exige la tabla en cada escalón.", "Límpiala con un producto compatible con cadenas sin retenes y retira la arena acumulada en plato y piñón de ataque antes de lubricar.", "Aplica lubricante específico para uso fuera de asfalto y revisa el desgaste de la corona y del piñón, piezas de consumo rápido en una 450."], "filtroAirePasos": ["Retira la tapa lateral de la caja y saca el elemento de espuma con cuidado de que no caiga tierra dentro de la admisión de 44 mm.", "Lávalo con limpiador específico para filtros de espuma, déjalo secar por completo y vuelve a impregnarlo con aceite para filtros sin escurrirlo a lo bruto.", "Limpia también el interior de la caja y recoloca el elemento comprobando que selle en todo el contorno antes de cerrar la tapa."], "intervaloMantenimiento": "Calendario por horas de funcionamiento, como manda su condición de moto de carreras: primera visita tras 1 hora y escalones siguientes cada 15 horas, con hitos ampliados a las 45 y a las 90 horas", "trucos": ["Gobierna todo por el cuentahoras: anota las horas tras cada manga y no dejes que la suma supere el escalón de 15 sin cambiar aceite y filtro.", "Antes de salir a pista, verifica la presión de aire de la horquilla AER con una bomba de suspensiones; sin muelles, ese valor manda en todo el tren delantero."]},
    planMantenimiento: {"costeAnualAproxEur": null, "fuente": "Manual del propietario GASGAS MC 450F, tabla de servicio por horas de funcionamiento", "intervalo": "Por horas de funcionamiento según el manual del propietario: primera revisión tras 1 hora y siguientes cada 15 horas, con operaciones ampliadas en los hitos de 45 y 90 horas", "revisiones": [{"costeAproxEur": null, "nombre": "Tras la primera hora", "queSeCambia": "Aceite SAE 10W-50 y su filtro, limpieza de tamices, lectura de la memoria de averías con la herramienta de diagnóstico y comprobación general de aprietes"}, {"costeAproxEur": null, "nombre": "Cada 15 horas", "queSeCambia": "Aceite y filtro renovados, filtro de aire limpio, control de tensión y estado de la cadena 520 y repaso de pastillas y discos Braktec de 260 mm delante y 220 mm detrás"}, {"costeAproxEur": null, "nombre": "Hitos de 45 y 90 horas", "queSeCambia": "A lo anterior se suman bujía y su capuchón, filtro de combustible, servicio de la horquilla WP XACT AER y del amortiguador trasero, y comprobación de la holgura de válvulas"}]},
  },
  {
    id: "gasgas-es-700-2024-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "ES 700",
    version: "2024",
    cilindradaCc: 700,
    categoria: "Supermotard",
    precioDesde: 11449,
    potenciaKw: null,
    potenciaCv: 74,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 146,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Monocilíndrico de 692,7 cc con 74 CV: el supermotard grande por excelencia",
      "Parte ciclo de supermoto real: llantas 17\", frenos potentes y geometría agresiva",
      "Electrónica completa: modos de conducción, control de tracción y ABS en curva",
      "Matriculable y usable a diario con etiqueta C",
      "Base KTM 690 SMC R con el toque rojo GasGas y precio 11.449 €",
      "Diversión máxima en carreteras de curvas y puertos de montaña"
    ],
    contras: [
      "146 kg y 74 CV: exige respeto, no es una 125 con esteroides",
      "Monocilíndrico grande: vibra y consume en uso tranquilo",
      "Postura y asiento pensados para atacar, no para viajar",
      "Neumáticos deportivos de 17\" caros y de corta duración",
      "El depósito limita la autonomía en ruta",
      "Seguro a todo riesgo elevado por potencia y perfil"
    ],
    curiosidades: [
      "Comparte motor y base con la KTM 690 SMC R, la reina de las supermotard",
      "Su nombre ES viene de 'Enduro Supermoto', la familia asfáltica de GasGas",
      "Es una de las pocas supermotard grandes homologadas Euro5 del mercado",
      "El monocilíndrico de 692,7 cc es uno de los más grandes en producción"
    ],
    imagen: "/media/motos/gasgas-es-700-2024-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/gasgas-es-700-2024-ficha-tecnica-precio-2.webp", alt: "Detalle del frontal supermotard de la GasGas ES 700 2024", ancho: 1200, alto: 800 },
      { src: "/media/motos/gasgas-es-700-2024-ficha-tecnica-precio-3.webp", alt: "GasGas ES 700 2024 derrapando en una carretera de curvas", ancho: 1200, alto: 800 }
    ],
    videoId: "D3Y9fcsWfMQ",
    videoCanal: "Big Rock Moto",
    fuenteNombre: "MP Racing (concesionario GasGas)",
    fuenteUrl: "https://mpracing.es/774-gasgas-motos",
    analisisSlug: "gasgas-es-700-2024-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Cada 10.000 km o 12 meses (dato oficial GasGas)"
    },
  },
  {
    id: "gasgas-txt-gp-250-2025-ficha-tecnica-precio",
    marca: "GasGas",
    modelo: "TXT GP 250",
    version: "2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: 8425,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 67,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: ["pesoKg"],
    pros: [
      "Versión GP: la TXT de trial con el equipamiento más racing de la gama",
      "Motor 2T de 250 cc con entrega dócil y precisa para zonas técnicas",
      "Parte ciclo específica de trial: ligera, estrecha y con geometría de giro cerrado",
      "Precio oficial 8.425 €: trial de competición asequible",
      "Ideal para competir en autonómicos y nacionales de trial",
      "Mantenimiento sencillo y barato comparado con enduro o cross"
    ],
    contras: [
      "Moto de trial pura: no homologada para circular por carretera",
      "Sin etiqueta DGT: solo zonas y circuitos",
      "El 2T de trial exige mezcla y un pilotaje muy técnico",
      "No vale como moto de paseo: asiento mínimo y sin autonomía",
      "Mercado de segunda mano muy especializado",
      "Requiere remolque o furgoneta para desplazarla"
    ],
    curiosidades: [
      "Las siglas GP identifican la versión más equipada de la familia TXT",
      "GasGas domina el trial moderno junto a Montesa, TRS y Vertigo",
      "El trial es la disciplina con más campeones del mundo españoles de la historia",
      "Una moto de trial moderna pesa alrededor de 67 kg, menos que su piloto"
    ],
    imagen: "/media/motos/gasgas-txt-gp-250-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/gasgas-txt-gp-250-2025-ficha-tecnica-precio-2.webp", alt: "Detalle del motor de trial de la GasGas TXT GP 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/gasgas-txt-gp-250-2025-ficha-tecnica-precio-3.webp", alt: "GasGas TXT GP 250 2025 superando una zona de rocas", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "GasGas España",
    fuenteUrl: "https://mpracing.es/774-gasgas-motos",
    analisisSlug: "gasgas-txt-gp-250-2025-ficha-tecnica-precio"
  },
  {
    id: "fantic-xe-125-2025-ficha-tecnica-precio",
    marca: "Fantic",
    modelo: "XE 125",
    version: "2T 2025",
    cilindradaCc: 125,
    categoria: "Enduro",
    precioDesde: 9990, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 101,
    plazas: 1,
    carnet: "A1",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "125 2T homologada Euro5: se matricula y se conduce con el A1",
      "Solo 101 kg en seco: agilidad total en zonas técnicas",
      "Horquilla KYB de 48 mm, la referencia japonesa en suspensiones",
      "Motor 2T con carácter racing heredado de la competición",
      "Estética italiana muy cuidada, distinta a las austriacas",
      "Precio contenido (~9.908 €) para una 125 de este nivel"
    ],
    contras: [
      "125 2T: hay que llevarla siempre en la zona buena del cuentavueltas",
      "Mezcla de gasolina y aceite obligatoria",
      "Red de concesionarios Fantic más pequeña que la de KTM o Yamaha",
      "Autonomía justa para rutas largas",
      "Asiento alto y postura de competición",
      "El 2T pequeño castiga el embrague en trialeras lentas"
    ],
    curiosidades: [
      "Fantic es una marca italiana histórica resucitada que hoy compite en Moto2 y en enduro",
      "La XE 125 comparte filosofía con las 125 de competición del Italiano de Enduro",
      "KYB es el mismo proveedor de suspensiones de Yamaha",
      "Su precio la sitúa como alternativa italiana a las 125 austriacas"
    ],
    imagen: "/media/motos/fantic-xe-125-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/fantic-xe-125-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la horquilla KYB de la Fantic XE 125 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/fantic-xe-125-2025-ficha-tecnica-precio-3.webp", alt: "Fantic XE 125 2025 en un tramo de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "fV5GKTJdjlo",
    videoCanal: "𝐁𝐀𝐓𝐓.",
    fuenteNombre: "Fantic Motor España",
    fuenteUrl: null,
    analisisSlug: "fantic-xe-125-2025-ficha-tecnica-precio"
  },
  {
    id: "fantic-xef-250-2025-ficha-tecnica-precio",
    marca: "Fantic",
    modelo: "XEF 250",
    version: "4T 2025",
    cilindradaCc: 250,
    categoria: "Enduro",
    precioDesde: 10890, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 4T de 250 cc con base Yamaha: fiabilidad legendaria",
      "Entrega de potencia suave y progresiva, ideal para progresar",
      "Parte ciclo de competición con componentes de primer nivel",
      "La 250 4T es la cilindrada más equilibrada del enduro",
      "Estética racing italiana muy valorada",
      "Buena base para preparar una moto de carreras"
    ],
    contras: [
      "Versión de competición: sin homologación para carretera",
      "Precio (~10.650 €) en la franja alta de las 250",
      "El 4T exige reglaje de válvulas periódico",
      "Menos ligera que una 250 2T equivalente",
      "Red de servicio más limitada que las grandes marcas",
      "Repuestos específicos con plazos más largos"
    ],
    curiosidades: [
      "El motor deriva de la Yamaha WR250F, una de las 250 4T más laureadas",
      "Fantic volvió a la competición de enduro con la gama XEF",
      "La marca italiana también fabrica las Caballero de estilo vintage",
      "En Italia la XEF es una de las enduro más vendidas de su segmento"
    ],
    imagen: "/media/motos/fantic-xef-250-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/fantic-xef-250-2025-ficha-tecnica-precio-2.webp", alt: "Motor 4T de la Fantic XEF 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/fantic-xef-250-2025-ficha-tecnica-precio-3.webp", alt: "Fantic XEF 250 2025 en una especial de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Fantic Motor España",
    fuenteUrl: null,
    analisisSlug: "fantic-xef-250-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "10W-40 4T API SG o superior, JASO MA (manual oficial Fantic; no usar aceites minerales)"
    },
  },
  {
    id: "fantic-xef-310-2025-ficha-tecnica-precio",
    marca: "Fantic",
    modelo: "XEF 310",
    version: "4T 2025",
    cilindradaCc: 304,
    categoria: "Enduro",
    precioDesde: 11390, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 106,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "304 cc 4T con cilindro Athena: más par que la 250 sin el peso de la 450",
      "3 mapas de motor + control de tracción de 10 niveles con app WiGET",
      "Horquilla Kayaba SSS de 48 mm y chasis perimetral de aluminio",
      "El punto dulce para enduro técnico y pilotos de nivel medio-alto",
      "Homologada Euro5+: se puede matricular y circular",
      "PVP de 10.790 €, por debajo de gran parte de su competencia"
    ],
    contras: [
      "Precio superior al de muchas 250 de la competencia",
      "Cilindrada poco común: menos oferta de repuestos específicos",
      "El 4T exige reglaje de válvulas periódico",
      "Como enduro racing, pide mantenimiento frecuente",
      "Asiento alto (955 mm): no apta para pilotos bajos",
      "Red de concesionarios limitada en España"
    ],
    curiosidades: [
      "Su motor de 304 cc lo firma Athena: 85,0 x 53,6 mm y compresión 12,8:1",
      "La desarrolló con el excampeón del mundo Alex Salvini",
      "Lleva el sistema WiFi COM: se ajusta el motor desde el móvil con la app WiGET",
      "Enduromagazine la probó en 2024: «equilibrio perfecto entre la 250 y la 450»"
    ],
    imagen: "/media/motos/fantic-xef-310-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/fantic-xef-310-2025-ficha-tecnica-precio-2.webp", alt: "Fantic XEF 310 2025, vista delantera tres cuartos", ancho: 1200, alto: 800 },
      { src: "/media/motos/fantic-xef-310-2025-ficha-tecnica-precio-3.webp", alt: "Fantic XEF 310 2025 en acción en el monte", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Enduromagazine (prueba XEF 310 4T)",
    fuenteUrl: "https://enduromagazine.com/test-fantic-xe-300-2t-y-xef-310-4t/",
    analisisSlug: "fantic-xef-310-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "10W-40 4T API SG o superior, JASO MA (manual oficial Fantic; no usar aceites minerales)"
    },
    planMantenimiento: {
      intervalo: "Sin plan oficial público: enduro de competición con mantenimiento por horas de uso",
      revisiones: [
        {
          nombre: "Tras cada salida",
          queSeCambia: "Aceite 10W-40 4T JASO MA + limpieza y engrase de cadena + revisión del filtro de aire",
          costeAproxEur: null,
        },
        {
          nombre: "Cada 15-20 horas de uso",
          queSeCambia: "Control de holgura de válvulas + bujía + líquidos",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Fantic Motor: la XEF 310 es una enduro de competición; intervalos por uso, no públicos",
    },
  },
  {
    id: "fantic-xef-450-2025-ficha-tecnica-precio",
    marca: "Fantic",
    modelo: "XEF 450",
    version: "4T 2025",
    cilindradaCc: 450,
    categoria: "Enduro",
    precioDesde: 12290, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 119,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 4T de 450 cc: la referencia en potencia del enduro",
      "119 kg en seco, contenida para una 450 de competición",
      "Entrega potente pero dosificable gracias a la electrónica",
      "Suspensiones y frenos de nivel mundialista",
      "Ideal para pilotos expertos y especiales rápidas",
      "Base Yamaha: mecánica probada en años de competición"
    ],
    contras: [
      "11.850 €: la más cara de la gama XEF",
      "Moto de competición, sin matrícula ni etiqueta DGT",
      "El 450 exige físico y experiencia: no perdona errores",
      "Mantenimiento de 4T de carreras: frecuente y caro",
      "Consumo y desgaste elevados en uso intensivo",
      "Excesiva para el aficionado medio en zonas técnicas"
    ],
    curiosidades: [
      "Es la enduro grande con la que Fantic asalta las clasificaciones absolutas",
      "Su motor deriva del bloque Yamaha YZ450F de motocross",
      "Pesa solo 119 kg en seco, menos que muchas 250 de hace una década",
      "Fantic la ofrece también en versión de rally para pruebas de navegación"
    ],
    imagen: "/media/motos/fantic-xef-450-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/fantic-xef-450-2025-ficha-tecnica-precio-2.webp", alt: "Motor 450 4T de la Fantic XEF 450 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/fantic-xef-450-2025-ficha-tecnica-precio-3.webp", alt: "Fantic XEF 450 2025 a fondo en una pista de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Fantic Motor España",
    fuenteUrl: null,
    analisisSlug: "fantic-xef-450-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "10W-40 4T API SG o superior, JASO MA (manual oficial Fantic; no usar aceites minerales)"
    },
  },
  {
    id: "fantic-caballero-500-2025-ficha-tecnica-precio",
    marca: "Fantic",
    modelo: "Caballero 500",
    version: "2025",
    cilindradaCc: 500,
    categoria: "Trail",
    precioDesde: 7090, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: 29.4,
    potenciaCv: 40,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Estética scrambler vintage italiana que enamora",
      "Motor de 449 cc con 40 CV y 43 Nm: suficiente y con carácter",
      "Apta para el carnet A2 y con 2 plazas de verdad",
      "Matriculable con etiqueta C: uso diario sin problemas",
      "Precio base (~7.090 €) muy competitivo frente a rivales retro",
      "Versiones Deluxe y Anniversary para quien quiera más equipamiento"
    ],
    contras: [
      "40 CV: justa si vienes de motos más potentes",
      "Protección aerodinámica nula para viajar",
      "Suspensiones sencillas comparadas con una trail moderna",
      "El estilo prima sobre la practicidad: poco espacio de carga",
      "Red de talleres Fantic limitada fuera de grandes ciudades",
      "El escape alto puede molestar con pasajero y equipaje"
    ],
    curiosidades: [
      "Caballero fue en los 70 la moto con la que Fantic se hizo famosa en el enduro",
      "La gama 500 se ofrece en versiones base, Deluxe y Anniversary",
      "Su motor de 449 cc rinde 29,4 kW, justo en el límite del A2",
      "Es una de las scrambler A2 más vendidas en Italia"
    ],
    imagen: "/media/motos/fantic-caballero-500-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/fantic-caballero-500-2025-ficha-tecnica-precio-2.webp", alt: "Detalle del depósito vintage de la Fantic Caballero 500 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/fantic-caballero-500-2025-ficha-tecnica-precio-3.webp", alt: "Fantic Caballero 500 2025 en una carretera secundaria", ancho: 1200, alto: 800 }
    ],
    videoId: "UQYjy0rycug",
    videoCanal: "motos.net",
    fuenteNombre: "Fantic Motor España",
    fuenteUrl: null,
    analisisSlug: "fantic-caballero-500-2025-ficha-tecnica-precio"
  },
  {
    id: "fantic-caballero-700-2025-ficha-tecnica-precio",
    marca: "Fantic",
    modelo: "Caballero 700",
    version: "2025",
    cilindradaCc: 700,
    categoria: "Trail",
    precioDesde: 9990, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Motor de 689 cc: el salto natural desde la Caballero 500",
      "Estética scrambler con prestaciones de moto grande",
      "Matriculable con etiqueta C y 2 plazas",
      "Precio de oferta (~9.490 €) muy atractivo para su cilindrada",
      "Sonido y carácter del bicilíndrico en una scrambler ligera",
      "Ideal para quien quiere estilo retro sin renunciar a viajar"
    ],
    contras: [
      "Requiere carnet A: no vale el A2",
      "9.990 € de tarifa oficial: en la franja alta de las scrambler bicilíndricas",
      "Menos protección y capacidad de carga que una trail al uso",
      "Suspensiones orientadas al estilo más que al off-road serio",
      "Consumo superior al de la 500 en uso urbano",
      "Red de servicio Fantic aún en crecimiento en España"
    ],
    curiosidades: [
      "Su motor de 689 cc la coloca entre las scrambler medias más potentes",
      "La Caballero 700 es la hermana mayor de la exitosa 500",
      "Fantic la posiciona como scrambler polivalente para carretera y pistas",
      "El precio de oferta la deja al nivel de muchas 500 de la competencia"
    ],
    imagen: "/media/motos/fantic-caballero-700-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/fantic-caballero-700-2025-ficha-tecnica-precio-2.webp", alt: "Motor de 689 cc de la Fantic Caballero 700 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/fantic-caballero-700-2025-ficha-tecnica-precio-3.webp", alt: "Fantic Caballero 700 2025 en una ruta por montaña", ancho: 1200, alto: 800 }
    ],
    videoId: "_4bvBsswJwU",
    videoCanal: "Sir",
    fuenteNombre: "Fantic Motor España",
    fuenteUrl: null,
    analisisSlug: "fantic-caballero-700-2025-ficha-tecnica-precio"
  },
  {
    id: "sherco-300-se-factory-2026-ficha-tecnica-precio",
    marca: "Sherco",
    modelo: "300 SE Factory",
    version: "2026",
    cilindradaCc: 300,
    categoria: "Enduro",
    precioDesde: null, // Sherco no publica tarifa oficial accesible en España para la 300 SE Factory (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 105,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 2T de 293 cc: el rey del hard enduro con par desde ralentí",
      "Solo 105 kg: ligereza extrema para zonas imposibles",
      "Horquilla KYB de 48 mm y frenos Brembo (260/220 mm)",
      "Versión Factory: equipamiento de carreras de serie",
      "Depósito de 10,4 litros, generoso para una 2T de enduro",
      "Sherco es especialista francesa en enduro y trial con gran palmarés"
    ],
    contras: [
      "Sin precio oficial publicado: Sherco no difunde PVP en España para su gama de enduro",
      "Moto de competición: sin homologación para carretera",
      "Precio (~10.949 €) en la franja alta del enduro 2T",
      "El 300 2T exige técnica en zonas lentas para no calar",
      "Mezcla de gasolina y aceite obligatoria",
      "Mantenimiento intensivo si se compite",
      "Red de concesionarios Sherco reducida en España"
    ],
    curiosidades: [
      "Sherco nació en Francia de la mano del trialero Marc Teissier",
      "La gama Factory es la que usan sus pilotos oficiales en el Mundial",
      "El 300 SE es la moto favorita de los especialistas en hard enduro",
      "KYB y Brembo son los mismos proveedores de las japonesas de MX"
    ],
    imagen: "/media/motos/sherco-300-se-factory-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/sherco-300-se-factory-2026-ficha-tecnica-precio-2.webp", alt: "Motor 2T de 293 cc de la Sherco 300 SE Factory 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/sherco-300-se-factory-2026-ficha-tecnica-precio-3.webp", alt: "Sherco 300 SE Factory 2026 en una zona de hard enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "u5VfrYpbWwo",
    videoCanal: "Xplore Enduro",
    fuenteNombre: "Sherco España",
    fuenteUrl: null,
    analisisSlug: "sherco-300-se-factory-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Premezcla de aceite 2T al 2% con gasolina de 95 octanos como mínimo (manual oficial Sherco)"]
    },
  },
  {
    id: "sherco-300-sef-factory-2026-ficha-tecnica-precio",
    marca: "Sherco",
    modelo: "300 SEF Factory",
    version: "2026",
    cilindradaCc: 300,
    categoria: "Enduro",
    precioDesde: 12690,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 4T de 303,68 cc: el equilibrio perfecto entre 250 y 450",
      "Versión Factory con lo mejor del catálogo Sherco",
      "Entrega lineal y tracción excelente en terreno roto",
      "Chasis y suspensiones de nivel mundialista",
      "Ideal para enduro clásico y pilotos que vienen del 2T",
      "Electrónica con mapas de potencia seleccionables"
    ],
    contras: [
      "12.690 €: una de las 300 4T más caras del mercado",
      "Sin homologación: solo competición",
      "El 4T exige reglaje de válvulas y más horas de taller",
      "Más pesada y menos ágil que la 300 SE 2T",
      "Repuestos Factory con precio premium",
      "Poca oferta de segunda mano"
    ],
    curiosidades: [
      "La SEF (Sherco Enduro Four) es la familia 4T de la marca francesa",
      "Los 303,68 cc la sitúan justo entre las 250 y las 350",
      "Sherco compite con ella en el Mundial de EnduroGP",
      "La versión Factory incluye gráficos y componentes de los pilotos oficiales"
    ],
    imagen: "/media/motos/sherco-300-sef-factory-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/sherco-300-sef-factory-2026-ficha-tecnica-precio-2.webp", alt: "Motor 4T de la Sherco 300 SEF Factory 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/sherco-300-sef-factory-2026-ficha-tecnica-precio-3.webp", alt: "Sherco 300 SEF Factory 2026 en una crono de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "mVmKzmC52kw",
    videoCanal: "ADBMagazine",
    fuenteNombre: "Sherco España",
    fuenteUrl: null,
    analisisSlug: "sherco-300-sef-factory-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Cambio de aceite y filtro cada 6 meses o 1.000 km (manual del propietario Sherco)"
    },
  },
  {
    id: "sherco-450-sef-factory-2026-ficha-tecnica-precio",
    marca: "Sherco",
    modelo: "450 SEF Factory",
    version: "2026",
    cilindradaCc: 450,
    categoria: "Enduro",
    precioDesde: 12999,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 109,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 4T de 449,4 cc: máxima potencia de la gama Sherco",
      "Horquilla KYB de 48 mm y frenos Brembo de 260/220 mm",
      "~109 kg: contenida para una 450 de enduro",
      "Depósito de 9,8 litros para las especiales largas",
      "Versión Factory: preparada para correr de serie",
      "Tracción y estabilidad de referencia en pistas rápidas"
    ],
    contras: [
      "12.999 €: el tope de la gama Sherco",
      "Sin homologación para uso en carretera",
      "El 450 intimida: solo para pilotos con experiencia",
      "Mantenimiento de carreras, frecuente y costoso",
      "Peso y potencia la penalizan en trialeras muy lentas",
      "Seguro y consumibles de alto coste"
    ],
    curiosidades: [
      "Es la moto con la que Sherco lucha por el EnduroGP absoluto",
      "Sus 449,4 cc la dejan justo bajo el límite clásico de la categoría E3",
      "La horquilla KYB de 48 mm es la misma especificación que en el MX japonés",
      "Sherco fabrica sus motos en Nîmes, Francia"
    ],
    imagen: "/media/motos/sherco-450-sef-factory-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/sherco-450-sef-factory-2026-ficha-tecnica-precio-2.webp", alt: "Motor 450 4T de la Sherco 450 SEF Factory 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/sherco-450-sef-factory-2026-ficha-tecnica-precio-3.webp", alt: "Sherco 450 SEF Factory 2026 a fondo en pista", ancho: 1200, alto: 800 }
    ],
    videoId: "Z1RyRxQXw2E",
    videoCanal: "Deano_Ventures",
    fuenteNombre: "MP Racing (concesionario Sherco)",
    fuenteUrl: null,
    analisisSlug: "sherco-450-sef-factory-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Cambio de aceite y filtro cada 6 meses o 1.000 km (manual del propietario Sherco)"
    },
  },
  {
    id: "sherco-st-250-factory-2025-ficha-tecnica-precio",
    marca: "Sherco",
    modelo: "ST 250 Factory",
    version: "2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: 9120, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "250 2T de trial con entrega dócil: la cilindrada ideal para progresar",
      "Versión Factory con componentes de competición",
      "Ligereza y geometría específicas para zonas técnicas",
      "Precio (~8.500 €) contenido para una Factory",
      "Sherco tiene gran tradición en trial con pilotos de élite",
      "Mantenimiento sencillo y económico"
    ],
    contras: [
      "Moto de trial: sin homologación ni etiqueta DGT",
      "El 250 exige más técnica que el 125 para no cometer errores",
      "Sin autonomía ni comodidad para otro uso que el trial",
      "Mercado de ocasión muy especializado",
      "Hay que transportarla en remolque o furgoneta",
      "La versión Factory encarece repuestos específicos"
    ],
    curiosidades: [
      "ST son las siglas de Sherco Trial, la familia con la que nació la marca",
      "El trial es la disciplina donde más brilla la ingeniería francesa de Sherco",
      "Una 250 de trial moderna ronda los 67 kg de peso",
      "Sherco ha ganado pruebas del Mundial de trial con esta plataforma"
    ],
    imagen: "/media/motos/sherco-st-250-factory-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/sherco-st-250-factory-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la Sherco ST 250 Factory 2025 de trial", ancho: 1200, alto: 800 },
      { src: "/media/motos/sherco-st-250-factory-2025-ficha-tecnica-precio-3.webp", alt: "Sherco ST 250 Factory 2025 en una zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: "https://trialworld.es/tienda-trial/es/113-motos-trial?q=Marca-Scorpa-Sherco",
    analisisSlug: "sherco-st-250-factory-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    },
  },
  {
    id: "montesa-cota-4rt-260r-2025-ficha-tecnica-precio",
    marca: "Montesa",
    modelo: "Cota 4RT 260R",
    version: "2027", // gama 2027: misma base, nueva decoración rojo/negro
    cilindradaCc: 298,
    categoria: "Trial",
    precioDesde: 8200, // tarifa oficial gama 2027 (10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 4T de 258,9 cc con la fiabilidad legendaria Honda",
      "Homologada Euro5+: se puede matricular",
      "Suspensiones Showa de alta calidad",
      "La 4RT es la base de la moto de Toni Bou, 30+ veces campeón del mundo",
      "Entrega suave y predecible, ideal para aprender técnica",
      "Precio oficial 8.000 €: la 4T de trial más asequible de Montesa"
    ],
    contras: [
      "El 4T pesa y responde con menos chispa que un 2T",
      "Mantenimiento del 4T más complejo (válvulas, aceite)",
      "Sin etiqueta DGT a pesar de estar homologada",
      "Es una moto solo para trial: sin uso polivalente",
      "Los repuestos oficiales Honda tienen precio premium",
      "Para competir al máximo nivel, la 301RR ofrece más"
    ],
    curiosidades: [
      "Montesa es el único fabricante español de motos en activo desde 1945",
      "Se han fabricado más de 160.000 Cota en 50 años de historia",
      "Toni Bou ha ganado todos los mundiales de trial desde 2007 con una 4RT",
      "La Cota celebró en 2024 sus bodas de oro con una edición limitada de 50 unidades"
    ],
    imagen: "/media/motos/montesa-cota-4rt-260r-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/montesa-cota-4rt-260r-2025-ficha-tecnica-precio-2.webp", alt: "Motor 4T de la Montesa Cota 4RT 260R 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/montesa-cota-4rt-260r-2025-ficha-tecnica-precio-3.webp", alt: "Montesa Cota 4RT 260R 2025 en una zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Montesa Honda España",
    fuenteUrl: null,
    analisisSlug: "montesa-cota-4rt-260r-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-30 4T para el motor (0,41 L) y 75W para la transmisión (0,54 L), según el manual oficial Montesa"
    },
  },
  {
    id: "montesa-cota-4ride-2026-ficha-tecnica-precio",
    marca: "Montesa",
    modelo: "Cota 4Ride",
    version: "2027", // gama 2027: sin cambios técnicos ni estéticos
    cilindradaCc: 258,
    categoria: "Trial",
    precioDesde: 8450, // tarifa oficial gama 2027 (10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "El concepto trial-excursión: trialera para salir al campo sin competir",
      "Asiento más amplio y depósito mayor que una trial pura",
      "Motor 4T Honda de 260 cc: suave, fiable y económico",
      "Matriculable con etiqueta C: excursiones legales por pistas",
      "Precio 8.250 €: la Montesa más polivalente",
      "Ideal para redescubrir el campo sin la exigencia de la competición"
    ],
    contras: [
      "Ni trial pura ni trail: un nicho muy específico",
      "Prestaciones modestas si buscas emociones fuertes",
      "Pesa más que una trial de competición",
      "Oferta de segunda mano casi inexistente",
      "Los puristas del trial la ven blanda; los traileros, limitada",
      "Accesorios y personalización escasos"
    ],
    curiosidades: [
      "La 4Ride recuperó el espíritu de las trail-trial de los años 80",
      "Es la única moto del mercado en el segmento trial-excursión homologada",
      "Comparte la base mecánica 4T con la familia Cota 4RT",
      "Montesa la presenta como la moto para 'disfrutar del trial sin dorsales'"
    ],
    imagen: "/media/motos/montesa-cota-4ride-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/montesa-cota-4ride-2026-ficha-tecnica-precio-2.webp", alt: "Detalle de la Montesa Cota 4Ride 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/montesa-cota-4ride-2026-ficha-tecnica-precio-3.webp", alt: "Montesa Cota 4Ride 2026 de excursión por el campo", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Montesa Honda España",
    fuenteUrl: null,
    analisisSlug: "montesa-cota-4ride-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-30 4T; capacidad 0,6 L de motor y 0,57 L de transmisión (datos Honda)"
    },
  },
  {
    id: "beta-rr-x-pro-300-2t-2026-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "RR X-Pro 300",
    version: "2T 2026",
    cilindradaCc: 292.6,
    categoria: "Enduro",
    precioDesde: 9670,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 103.5,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 2T de 292,6 cc: par demoledor desde bajo régimen",
      "Gama X-Pro 2026: chasis rediseñado con columna más rígida",
      "Solo 103,5 kg: ligereza de referencia",
      "Nueva horquilla Sachs ZF SHC de un solo muelle, más ligera",
      "Asiento más bajo que la generación anterior",
      "Precio 9.670 €: la 300 2T italiana más competitiva"
    ],
    contras: [
      "Moto de competición sin homologación",
      "El 2T exige mezcla y mantenimiento frecuente",
      "Carburador Keihin PWK 36: hay que afinarlo según altitud y temperatura",
      "Postura y dureza de moto de carreras",
      "Sin etiqueta DGT: solo campo y circuitos",
      "El 300 intimida a pilotos que suben de cilindrada"
    ],
    curiosidades: [
      "El apellido X-Pro debutó en 2025 para marcar el salto generacional de la gama RR",
      "Su motor usa láminas Moto Tassinari, especialistas italianos en admisión 2T",
      "La horquilla de un solo muelle ahorra peso respecto a la anterior de doble muelle",
      "Beta equipa de serie correa de rescate en el guardabarros delantero"
    ],
    imagen: "/media/motos/beta-rr-x-pro-300-2t-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-rr-x-pro-300-2t-2026-ficha-tecnica-precio-2.webp", alt: "Beta RR X-Pro 300 2T 2026, perfil lateral en estudio (foto betatrueba.com)", ancho: 800, alto: 490 },
      { src: "/media/motos/beta-rr-x-pro-300-2t-2026-ficha-tecnica-precio-3.webp", alt: "Beta RR X-Pro 300 2T 2026, foto oficial de prensa Beta", ancho: 1200, alto: 775 }
    ],
    videoId: "yGcWmkaGar0",
    videoCanal: "MOTO-CAR TV",
    fuenteNombre: "Betamotor",
    fuenteUrl: "https://www.betamotor.com/en/moto/rr-x-pro-2t-300/",
    analisisSlug: "beta-rr-x-pro-300-2t-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-40 para el embrague (manual oficial)",
      trucos: ["Revisa la tensión de la cadena antes de cada salida: el 2T la castiga"]
    }
  },
  {
    id: "beta-rr-x-pro-350-4t-2026-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "RR X-Pro 350",
    version: "4T 2026",
    cilindradaCc: 350,
    categoria: "Enduro",
    precioDesde: 10761,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 107.5,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 4T de 349,1 cc: la cilindrada favorita del enduro moderno",
      "107,5 kg: ligera para una 350 de competición",
      "Chasis X-Pro 2026 más rígido y asiento más bajo",
      "Entrega eléctrica y tracción perfecta en subidas técnicas",
      "Suspensiones Sachs con nueva válvula de amortiguador para 2025+",
      "Ideal para pilotos que buscan una moto 'para todo'"
    ],
    contras: [
      "10.761 €: precio de moto oficial",
      "Sin homologación: competición pura",
      "El 4T exige reglaje de válvulas periódico",
      "Más pesada y menos explosiva que la 300 2T",
      "Mantenimiento de carreras con costes elevados",
      "Para sacarle partido hay que rodar rápido"
    ],
    curiosidades: [
      "La 350 4T es la cilindrada que más mundiales de EnduroGP ha ganado",
      "Beta la fabrica íntegramente en Rignano sull'Arno, Italia",
      "La gama X-Pro heredó soluciones del equipo oficial de motocross de Beta",
      "Su pinza de freno trasero Nissin es más grande desde 2025"
    ],
    imagen: "/media/motos/beta-rr-x-pro-350-4t-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-rr-x-pro-350-4t-2026-ficha-tecnica-precio-2.webp", alt: "Motor 4T de la Beta RR X-Pro 350 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-rr-x-pro-350-4t-2026-ficha-tecnica-precio-3.webp", alt: "Beta RR X-Pro 350 2026 en una especial de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "jz99ailwQjI",
    videoCanal: "Odyssey Offroad",
    fuenteNombre: "Betamotor España",
    fuenteUrl: null,
    analisisSlug: "beta-rr-x-pro-350-4t-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-40 para el embrague (manual oficial)",
      trucos: ["Controla el nivel de aceite del motor con la moto vertical y en frío"]
    }
  },
  {
    id: "beta-xtrainer-300-2026-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "Xtrainer 300",
    version: "2026",
    cilindradaCc: 300,
    categoria: "Enduro",
    precioDesde: 7690,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 99,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "El concepto 'enduro fácil': asiento bajo y moto manejable",
      "Motor 2T de 292,3 cc suave, sin el carácter racing de la RR",
      "Solo 99 kg: la enduro grande más ligera del mercado",
      "Homologada Euro5+: matriculable con etiqueta C",
      "Precio 7.690 €: la forma más barata de entrar al enduro grande",
      "Perfecta para pilotos que retoman o de estatura contenida"
    ],
    contras: [
      "Suspensiones más blandas: sufre si se rueda muy rápido",
      "No es una moto de carreras: la RR X-Pro está en otro nivel",
      "El 2T exige mezcla aunque sea dócil",
      "Autonomía limitada para grandes rutas",
      "Acabados más sencillos que la gama RR",
      "Revalorización menor que una RR en segunda mano"
    ],
    curiosidades: [
      "La Xtrainer creó el segmento del 'enduro amable' hace una década",
      "Su asiento está notablemente más bajo que el de cualquier RR",
      "Es la Beta más vendida entre aficionados que no compiten",
      "Comparte el motor 300 2T con la RR pero con carácter dulcificado"
    ],
    imagen: "/media/motos/beta-xtrainer-300-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-xtrainer-300-2026-ficha-tecnica-precio-2.webp", alt: "Detalle de la Beta Xtrainer 300 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-xtrainer-300-2026-ficha-tecnica-precio-3.webp", alt: "Beta Xtrainer 300 2026 en una ruta de enduro suave", ancho: 1200, alto: 800 }
    ],
    videoId: "yfEZAXDpDFw",
    videoCanal: "Cross Training Enduro",
    fuenteNombre: "motofichas.com",
    fuenteUrl: null,
    analisisSlug: "beta-xtrainer-300-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-40 para el cambio y el embrague (especificación oficial Beta)",
      trucos: ["Engrase por bomba electrónica: mantén siempre nivel en el depósito de aceite 2T"]
    },
  },
  {
    id: "beta-evo-250-2t-2025-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "EVO 250",
    version: "2T 2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: null, // Beta no publica tarifa oficial accesible de la EVO 250 (2025); solo precios de concesionario (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "250 2T: la cilindrada más equilibrada para aprender trial en serio",
      "Carácter dócil y par suficiente sin la brusquedad del 300",
      "Nuevas suspensiones Ollé para 2025: horquilla y amortiguador renovados",
      "Precio (~7.700 €) entre los más bajos del trial de competición",
      "Beta es una potencia histórica del trial con gran soporte",
      "Mantenimiento simple y barato"
    ],
    contras: [
      "Sin precio oficial publicado: Beta no difunde tarifa pública de la gama EVO",
      "Moto de trial: sin homologación ni uso en carretera",
      "El 250 se queda corto frente al 300 en zonas de máximo nivel",
      "Mezcla 2T obligatoria",
      "Sin asiento útil ni autonomía para pasear",
      "Hay que transportarla en remolque",
      "La versión Factory ofrece más por un poco más de dinero"
    ],
    curiosidades: [
      "La EVO es la trialera con la que Beta lleva años en la élite mundial",
      "Para 2025 estrenó una estética renovada muy comentada",
      "Las suspensiones Ollé son de fabricación española",
      "Es la moto ideal para el aficionado que quiere competir en sociales"
    ],
    imagen: "/media/motos/beta-evo-250-2t-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-evo-250-2t-2025-ficha-tecnica-precio-2.webp", alt: "Motor 2T de la Beta EVO 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-evo-250-2t-2025-ficha-tecnica-precio-3.webp", alt: "Beta EVO 250 2025 en una zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: "iWVznZQZD2M",
    videoCanal: "AndyFireblade TV",
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "beta-evo-250-2t-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-30 para la caja de cambios (550 cc); mezcla al 1,5% con aceite sintético (manual oficial Beta)",
      trucos: ["Cambia el aceite de la caja de cambios tras las 5 primeras horas de rodaje"]
    },
  },
  {
    id: "beta-evo-250-2t-factory-2025-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "EVO 250 Factory",
    version: "2T 2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: null, // Beta no publica tarifa oficial accesible de la EVO 250 Factory (2025); solo precios de concesionario (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "La EVO 250 con la preparación racing de los pilotos oficiales",
      "Mejoras en chasis y motor respecto a la EVO estándar",
      "Máxima trazabilidad y maniobrabilidad para competir",
      "Componentes de mayor nivel sin llegar al precio de una 300",
      "Ideal para el aficionado exigente que busca lo máximo",
      "Decoración Factory exclusiva"
    ],
    contras: [
      "Sin precio oficial publicado: Beta no difunde tarifa pública de la gama EVO",
      "~600 € más que la EVO 250 estándar por mejoras sutiles",
      "Sin homologación: solo trial",
      "El extra racing no se aprovecha sin nivel alto",
      "Repuestos Factory más caros",
      "Mezcla 2T y mantenimiento de competición",
      "Para la mayoría, la estándar ya sobra"
    ],
    curiosidades: [
      "Factory es la denominación que Beta reserva a sus versiones de carreras",
      "Comparte la plataforma básica con la EVO estándar de 2025",
      "La gama Factory nació para los pilotos del equipo oficial",
      "Es la 250 de trial más racing del catálogo italiano"
    ],
    imagen: "/media/motos/beta-evo-250-2t-factory-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-evo-250-2t-factory-2025-ficha-tecnica-precio-2.webp", alt: "Detalle Factory de la Beta EVO 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-evo-250-2t-factory-2025-ficha-tecnica-precio-3.webp", alt: "Beta EVO 250 Factory 2025 en competición de trial", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "MP Racing (concesionario Beta)",
    fuenteUrl: "https://mpracing.es/10182-beta-moto",
    analisisSlug: "beta-evo-250-2t-factory-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-30 para la caja de cambios (550 cc); mezcla al 1,5% con aceite sintético (manual oficial Beta)",
      trucos: ["Cambia el aceite de la caja de cambios tras las 5 primeras horas de rodaje"]
    },
  },
  {
    id: "beta-alp-4-0-2025-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "Alp 4.0",
    version: "2025",
    cilindradaCc: 349,
    categoria: "Trail",
    precioDesde: 6910, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: 26,
    potenciaCv: 35,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 144,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "El regreso de la mítica Alp: trial-excursión sencilla y honesta",
      "Motor 350 cc con 35 CV: suficiente para disfrutar sin complicaciones",
      "Asiento a 865 mm y 144 kg en seco: accesible para casi todos",
      "Ruedas de 21\" y 18\" con tacos: apta para pistas de verdad",
      "Matriculable con etiqueta C y carnet A2",
      "Precio (~6.910 €) muy razonable para una moto tan especial"
    ],
    contras: [
      "35 CV: no esperes prestaciones de trail moderna",
      "Equipamiento básico: sin electrónica ni florituras",
      "Una plaza: sin opción de pasajero",
      "Autonomía limitada para grandes viajes",
      "Estética particular que no gusta a todo el mundo",
      "Red de concesionarios Beta pequeña"
    ],
    curiosidades: [
      "La Alp original de los 2000 fue un icono del trail ligero español",
      "La nueva Alp 4.0 se presentó junto a su hermana scrambler, la Alp X",
      "Con 270 mm de distancia libre al suelo supera a muchas trail",
      "Beta la define como la moto para 'volver a lo esencial'"
    ],
    imagen: "/media/motos/beta-alp-4-0-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-alp-4-0-2025-ficha-tecnica-precio-2.webp", alt: "Detalle del faro con máscara de la Beta Alp 4.0 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-alp-4-0-2025-ficha-tecnica-precio-3.webp", alt: "Beta Alp 4.0 2025 en una pista de montaña", ancho: 1200, alto: 800 }
    ],
    videoId: "nZk7K5VmQxM",
    videoCanal: "Big Rock Moto",
    fuenteNombre: "MP Racing (concesionario Beta)",
    fuenteUrl: "https://mpracing.es/10182-beta-moto",
    analisisSlug: "beta-alp-4-0-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 5W-40 sintético 4T (manual oficial Beta)"
    },
  },
  {
    id: "beta-alp-x-2025-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "Alp X",
    version: "2025",
    cilindradaCc: 349,
    categoria: "Trail",
    precioDesde: 6910, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: 26,
    potenciaCv: 35,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 142,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "La versión scrambler de la Alp: faro redondo y estilo todo uso",
      "Ruedas de 19\" y 17\" más anchas: mejor en asfalto que la 4.0",
      "Asiento a 855 mm: aún más accesible",
      "142 kg en seco: 2 kg menos que la Alp 4.0",
      "Motor 350 cc de 35 CV apto para el A2",
      "Precio (~6.910 €) idéntico al de su hermana campera"
    ],
    contras: [
      "Menos apta para campo roto que la Alp 4.0",
      "35 CV se quedan justos en carretera abierta",
      "Una plaza y equipamiento básico",
      "Neumáticos menos tacos: peor en barro",
      "Estética scrambler que no es para todos",
      "Poca oferta de accesorios específicos"
    ],
    curiosidades: [
      "La Alp X fue la gran novedad de la familia Alp junto a la 4.0",
      "Sus colores grises la distinguen de la 4.0 blanca o roja",
      "El radiador va 'al aire', sin plásticos, al estilo scrambler clásico",
      "Beta la orienta a un uso mixto ciudad-carretera-pista fácil"
    ],
    imagen: "/media/motos/beta-alp-x-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-alp-x-2025-ficha-tecnica-precio-2.webp", alt: "Faro redondo de la Beta Alp X 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-alp-x-2025-ficha-tecnica-precio-3.webp", alt: "Beta Alp X 2025 en una carretera rural", ancho: 1200, alto: 800 }
    ],
    videoId: "wEXjCGafYbY",
    videoCanal: "Christianja_on_tour",
    fuenteNombre: "voromv.com",
    fuenteUrl: "https://www.voromv.com/2023/11/novedades-2024-beta-alp-40-y-alp-x-el.html",
    analisisSlug: "beta-alp-x-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 5W-40 sintético 4T (manual oficial Beta)"
    },
  },
  {
    id: "beta-rr-4t-125-r-2025-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "RR 4T 125 R",
    version: "Enduro 2025",
    cilindradaCc: 125,
    categoria: "Enduro",
    precioDesde: 5795,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 107,
    plazas: 1,
    carnet: "A1",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Enduro de verdad con carnet A1: 124,66 cc y 107 kg",
      "Motor 4T suave y económico, ideal para aprender",
      "Precio 5.795 €: la enduro italiana más asequible",
      "Homologada con etiqueta C: se puede usar a diario",
      "Parte ciclo seria con suspensiones de largo recorrido",
      "Perfecta para jóvenes que suben del 50"
    ],
    contras: [
      "Potencia limitada: el 125 4T no tiene la chispa del 2T",
      "107 kg para 125 cc: se nota en zonas técnicas",
      "No apta para pilotos pesados o autopista",
      "Acabados sencillos acordes a su precio",
      "Reventa limitada fuera del público A1",
      "La versión T es aún más barata si buscas ahorrar"
    ],
    curiosidades: [
      "La gama RR 125 4T se amplió para cubrir desde el novel al experto",
      "Comparte la filosofía de las RR grandes en formato pequeño",
      "Beta la vende también en versión motard con ruedas de 17\"",
      "Es una de las pocas enduro 125 4T con auténtico ADN de carreras"
    ],
    imagen: "/media/motos/beta-rr-4t-125-r-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-rr-4t-125-r-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la Beta RR 4T 125 R 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-rr-4t-125-r-2025-ficha-tecnica-precio-3.webp", alt: "Beta RR 4T 125 R 2025 en un sendero", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "motofichas.com",
    fuenteUrl: "https://www.motofichas.com/marcas/enduro/beta/125cc",
    analisisSlug: "beta-rr-4t-125-r-2025-ficha-tecnica-precio"
  },
  {
    id: "beta-rr-2t-200-race-2026-ficha-tecnica-precio",
    marca: "Beta",
    modelo: "RR 2T 200 Race",
    version: "2026",
    cilindradaCc: 200,
    categoria: "Enduro",
    precioDesde: 10453, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Versión Race: la RR 200 con preparación de competición de serie",
      "Motor 2T de 200 cc: ligereza de 125 con par de 250",
      "Modificaciones en motor, suspensiones y equipamiento",
      "Ideal para pilotos que compiten en E1 o sub-23",
      "Exclusividad: pocas 200 de carreras en el mercado",
      "Base RR probada con el extra racing"
    ],
    contras: [
      "~10.453 €: precio de 300 por una 200",
      "Sin homologación: solo competición",
      "La 200 exige llevarla alta de vueltas",
      "Mantenimiento 2T intensivo",
      "Reventa complicada por su especificidad",
      "Para la mayoría, la RR 200 estándar ya es suficiente"
    ],
    curiosidades: [
      "Las RR Race son las versiones 'preparadas para correr' de la gama Enduro Beta",
      "Beta las distingue con componentes y ajustes del equipo de carreras",
      "La 200 2T es una cilindrada clásica del enduro europeo",
      "El lema de la gama es 'RideAbility': facilidad de pilotaje ante todo"
    ],
    imagen: "/media/motos/beta-rr-2t-200-race-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/beta-rr-2t-200-race-2026-ficha-tecnica-precio-2.webp", alt: "Detalle racing de la Beta RR 2T 200 Race 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/beta-rr-2t-200-race-2026-ficha-tecnica-precio-3.webp", alt: "Beta RR 2T 200 Race 2026 en competición", ancho: 1200, alto: 800 }
    ],
    videoId: "yp04yRq1lJA",
    videoCanal: "Dirtbike Magazine",
    fuenteNombre: "MP Racing (concesionario Beta)",
    fuenteUrl: "https://mpracing.es/10182-beta-moto",
    analisisSlug: "beta-rr-2t-200-race-2026-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "SAE 10W-40 para el embrague (manual oficial)",
      trucos: ["Revisa la tensión de la cadena antes de cada salida: el 2T la castiga"]
    },
  },
  {
    id: "ajp-pr7-650-adventure-2025-ficha-tecnica-precio",
    marca: "AJP",
    modelo: "PR7 650 Adventure",
    version: "2025",
    cilindradaCc: 650,
    categoria: "Trail",
    precioDesde: 11650, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: 60,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 152,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Trail ligera de verdad: 152 kg en seco para una 600",
      "Motor 4T de 600 cc con ~60 CV: empuje sano sin excesos",
      "Horquilla Sachs de 48 mm totalmente regulable",
      "Depósito de 17 litros: autonomía para viajar",
      "Asiento a 920 mm y ergonomía de rally",
      "Precio (~11.650 €) muy inferior a las trail medias europeas"
    ],
    contras: [
      "Marca portuguesa minoritaria: pocos concesionarios en España",
      "Acabados más rústicos que una KTM o Yamaha",
      "~60 CV se quedan justos frente a bicilíndricas de 70+ CV",
      "Reventa complicada por desconocimiento de la marca",
      "Repuestos con plazos más largos",
      "Asiento alto (920 mm) no apto para todos"
    ],
    curiosidades: [
      "AJP fabrica motos desde 1987 en Penafiel, Portugal",
      "El depósito va bajo el asiento, seña de identidad de la marca",
      "La PR7 nació como moto de rally-raid para el Dakar de los privados",
      "Su chasis combina acero y aluminio de forma peculiar"
    ],
    imagen: "/media/motos/ajp-pr7-650-adventure-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/ajp-pr7-650-adventure-2025-ficha-tecnica-precio-2.webp", alt: "Detalle del depósito bajo el asiento de la AJP PR7 650 Adventure 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/ajp-pr7-650-adventure-2025-ficha-tecnica-precio-3.webp", alt: "AJP PR7 650 Adventure 2025 en una pista de tierra", ancho: 1200, alto: 800 }
    ],
    videoId: "0KMshFhnCuE",
    videoCanal: "Cross Training Adventure",
    fuenteNombre: "AJP Motos",
    fuenteUrl: null,
    analisisSlug: "ajp-pr7-650-adventure-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Cambio de aceite cada 5.000 km (manual del propietario)",
      aceiteTipo: "SAE 10W-50 4T (especificación Motorex para el modelo)"
    },
  },
  {
    id: "ajp-pr5-250-extreme-2025-ficha-tecnica-precio",
    marca: "AJP",
    modelo: "PR5 250 Extreme",
    version: "2025",
    cilindradaCc: 250,
    categoria: "Enduro",
    precioDesde: 5950,
    potenciaKw: 22.07,
    potenciaCv: 30,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 119,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "La enduro portuguesa más equipada: escape Doma de titanio y carbono",
      "Motor propio de 249 cc con inyección Delphi: 30 CV fiables",
      "Suspensiones Sachs de 48 mm totalmente regulables con 300 mm de recorrido",
      "119 kg: 4 kg menos que la PR5 estándar",
      "Discos Galfer de mayor diámetro y detalles anodizados en rojo",
      "Precio 5.950 €: imbatible para su nivel de equipamiento"
    ],
    contras: [
      "30 CV: menos potente que las 250 4T japonesas o austriacas",
      "Marca minoritaria: red de servicio muy limitada",
      "Acabados por debajo de las premium",
      "Reventa difícil fuera del mundillo",
      "El escape Doma es ruidoso según las pruebas",
      "Embrague de tacto duro según la prensa especializada"
    ],
    curiosidades: [
      "El motor es de fabricación propia de AJP, refrigerado por líquido",
      "La versión Extreme añade el escape completo Doma de titanio y carbono",
      "La revista suiza TÖFF la probó y destacó su manejabilidad",
      "Su depósito bajo el asiento centra las masas como en las motos de rally"
    ],
    imagen: "/media/motos/ajp-pr5-250-extreme-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/ajp-pr5-250-extreme-2025-ficha-tecnica-precio-2.webp", alt: "Escape Doma de la AJP PR5 250 Extreme 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/ajp-pr5-250-extreme-2025-ficha-tecnica-precio-3.webp", alt: "AJP PR5 250 Extreme 2025 en un sendero de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "FYEop0XznNI",
    videoCanal: "Barpex",
    fuenteNombre: "motofichas.com",
    fuenteUrl: "https://www.motofichas.com/marcas/ajp/pr5-250-enduro-extreme",
    analisisSlug: "ajp-pr5-250-extreme-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Cambio de aceite y filtro cada 3.000 km o 6 meses (manual oficial AJP)",
      aceiteTipo: "SAE 10W-50 4T (especificación Motorex para el modelo)"
    },
  },
  {
    id: "scorpa-sc-300-factory-2025-ficha-tecnica-precio",
    marca: "Scorpa",
    modelo: "SC 300 Factory",
    version: "2025",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: 9120, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 67,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 2T de 300 cc con inyección: potencia máxima del trial",
      "Solo 67 kg: ligereza extrema",
      "Horquilla Tech de 39 mm y amortiguador Reiger de 3 vías",
      "Frenos Braktec específicos de trial",
      "Versión Factory: lo máximo del catálogo Scorpa",
      "Ideal para pilotos expertos y zonas de alto nivel"
    ],
    contras: [
      "9.120 €: precio de trialera tope de gama",
      "Sin homologación: solo competición",
      "El 300 exige mucha técnica para no cometer errores",
      "Depósito de 2,2 litros: solo para zonas",
      "Mezcla 2T obligatoria",
      "Para la mayoría, la 250 ya es más que suficiente"
    ],
    curiosidades: [
      "Scorpa es la marca francesa hermana de Sherco en el trial",
      "El amortiguador Reiger de 3 vías es de nivel mundialista",
      "Su motor 2T lleva inyección electrónica en lugar de carburador",
      "El trial francés tiene una cantera histórica con Scorpa"
    ],
    imagen: "/media/motos/scorpa-sc-300-factory-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/scorpa-sc-300-factory-2025-ficha-tecnica-precio-2.webp", alt: "Detalle técnico de la Scorpa SC 300 Factory 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/scorpa-sc-300-factory-2025-ficha-tecnica-precio-3.webp", alt: "Scorpa SC 300 Factory 2025 en una zona extrema", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: "https://trialworld.es/tienda-trial/es/113-motos-trial?q=Marca-Scorpa-Sherco",
    analisisSlug: "scorpa-sc-300-factory-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    },
  },
  {
    id: "scorpa-sc-250-factory-2025-ficha-tecnica-precio",
    marca: "Scorpa",
    modelo: "SC 250 Factory",
    version: "2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: 9120, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 67,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "250 2T con inyección: el equilibrio ideal del trial moderno",
      "67 kg y componentes Factory de primer nivel",
      "Más dócil que la 300 en zonas técnicas",
      "Horquilla Tech 39 mm y Reiger 3 vías",
      "La cilindrada favorita de los pilotos de nivel medio-alto",
      "Precio 9.120 €, igual que la 300 Factory"
    ],
    contras: [
      "Mismo precio que la 300: cuesta justificar no ir a por la grande",
      "Sin homologación ni etiqueta DGT",
      "Mezcla 2T y mantenimiento de competición",
      "Sin uso polivalente: solo trial",
      "Transporte en remolque o furgoneta",
      "Red Scorpa limitada en España"
    ],
    curiosidades: [
      "La 250 es la cilindrada más vendida del trial de competición",
      "Comparte casi todo con la SC 300 salvo el cilindro",
      "Scorpa equipa frenos Braktec como sus primas Sherco",
      "Su inyección 2T facilita el arranque en cualquier condición"
    ],
    imagen: "/media/motos/scorpa-sc-250-factory-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/scorpa-sc-250-factory-2025-ficha-tecnica-precio-2.webp", alt: "Motor de la Scorpa SC 250 Factory 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/scorpa-sc-250-factory-2025-ficha-tecnica-precio-3.webp", alt: "Scorpa SC 250 Factory 2025 superando un escalón", ancho: 1200, alto: 800 }
    ],
    videoId: "SX849jm1ij8",
    videoCanal: "Slavco",
    fuenteNombre: "trialworld.es",
    fuenteUrl: "https://trialworld.es/tienda-trial/es/113-motos-trial?q=Marca-Scorpa-Sherco",
    analisisSlug: "scorpa-sc-250-factory-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    },
  },
  {
    id: "scorpa-sc-125-factory-2025-ficha-tecnica-precio",
    marca: "Scorpa",
    modelo: "SC 125 Factory",
    version: "2025",
    cilindradaCc: 125,
    categoria: "Trial",
    precioDesde: 9120, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 65,
    plazas: 1,
    carnet: "A1",
    carga: null,
    etiquetaDgt: null,
    aprox: ["pesoKg"],
    pros: [
      "125 de trial Factory: la puerta de entrada a la competición",
      "Ligera y manejable, ideal para jóvenes y pilotos ligeros",
      "Componentes Factory a precio más contenido (~8.500 €)",
      "Motor 2T dócil para aprender técnica sin sustos",
      "Mantenimiento el más barato de la gama",
      "Perfecta para categorías junior y de promoción"
    ],
    contras: [
      "125 cc: se queda corta en zonas de máximo nivel",
      "Sin homologación para carretera",
      "Mezcla 2T obligatoria",
      "Reventa limitada al público juvenil",
      "El salto a la 250 llegará pronto si se progresa",
      "Sin autonomía para otro uso"
    ],
    curiosidades: [
      "Es la trialera con la que empiezan muchos campeones",
      "Scorpa la ofrece con el mismo chasis Factory que las grandes",
      "El 125 de trial es la categoría de formación por excelencia",
      "Pesa en torno a 65 kg, menos que la mayoría de sus pilotos"
    ],
    imagen: "/media/motos/scorpa-sc-125-factory-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/scorpa-sc-125-factory-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la Scorpa SC 125 Factory 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/scorpa-sc-125-factory-2025-ficha-tecnica-precio-3.webp", alt: "Scorpa SC 125 Factory 2025 en una zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: "https://trialworld.es/tienda-trial/es/113-motos-trial?q=Marca-Scorpa-Sherco",
    analisisSlug: "scorpa-sc-125-factory-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    },
  },
  {
    id: "trs-one-r-300-2025-ficha-tecnica-precio",
    marca: "TRS",
    modelo: "One R 300",
    version: "2025",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: null, // TRS Motorcycles no publica tarifa oficial accesible de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 66,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 2T de 294,1 cc con bajos demoledores",
      "Solo 66 kg (68,5 con arranque eléctrico opcional)",
      "Horquilla Tech de 39 mm y amortiguador Reiger",
      "Frenos Galfer y Braktec específicos",
      "Carburador Keihin PWK 28 de respuesta inmediata",
      "TRS es la marca española del trial moderno, nacida de Jotagas"
    ],
    contras: [
      "Sin precio oficial: TRS no publica tarifa de la One R 300, así que no mostramos ninguna cifra",
      "Sin homologación: competición pura",
      "El 300 exige técnica para no irse de las manos",
      "Mezcla al 1% con gasolina de 98 obligatoria",
      "Depósito mínimo: solo para zonas",
      "Componentes y planteamiento en la media-alta del trial",
      "Sin uso en carretera"
    ],
    curiosidades: [
      "TRS significa Trial Racing Spain y fabrica en Barcelona",
      "La fundó Jordi Tarrés, 7 veces campeón del mundo de trial",
      "Su mezcla recomendada es al 1% con gasolina de 98 octanos",
      "El Reiger trasero es el mismo concepto que usan los mundialistas"
    ],
    imagen: "/media/motos/trs-one-r-300-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/trs-one-r-300-2025-ficha-tecnica-precio-2.webp", alt: "Motor 2T de la TRS One R 300 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/trs-one-r-300-2025-ficha-tecnica-precio-3.webp", alt: "TRS One R 300 2025 en una zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: "Nd_OgkEV6PY",
    videoCanal: "FreeBornEnduro",
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "trs-one-r-300-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    }
  },
  {
    id: "trs-one-r-250-2025-ficha-tecnica-precio",
    marca: "TRS",
    modelo: "One R 250",
    version: "2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: null, // TRS Motorcycles no publica tarifa oficial accesible de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 66,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Motor 2T de 247,7 cc: dócil y preciso",
      "66 kg de peso: agilidad máxima",
      "La cilindrada ideal para progresar en trial",
      "Componentes de nivel: Tech, Reiger, Galfer, Braktec",
      "Más fácil de llevar que la 300 en zonas lentas",
      "Precio (~8.500 €) en línea con la competencia"
    ],
    contras: [
      "Sin precio oficial: TRS no publica tarifa de la One R 250, así que no mostramos ninguna cifra",
      "Sin homologación ni etiqueta DGT",
      "El 250 se queda justo en pasos de máximo nivel",
      "Mezcla al 1% con gasolina 98",
      "Sin polivalencia: solo trial",
      "Transporte en remolque necesario",
      "La 300 cuesta lo mismo y ofrece más"
    ],
    curiosidades: [
      "La 250 es la cilindrada más elegida por los aficionados al trial",
      "TRS la equipa con el mismo chasis que la 300",
      "Su carburador Keihin PWK 28 es un clásico del trial",
      "Jordi Tarrés sigue involucrado en el desarrollo de la gama"
    ],
    imagen: "/media/motos/trs-one-r-250-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/trs-one-r-250-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la TRS One R 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/trs-one-r-250-2025-ficha-tecnica-precio-3.webp", alt: "TRS One R 250 2025 en una trialera", ancho: 1200, alto: 800 }
    ],
    videoId: "3AtI5p2PEAM",
    videoCanal: "TrialTube",
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "trs-one-r-250-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    }
  },
  {
    id: "trs-one-rr-300-2025-ficha-tecnica-precio",
    marca: "TRS",
    modelo: "One RR 300",
    version: "2025",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: null, // TRS Motorcycles no publica tarifa oficial accesible de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 66,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "La One R 300 con el acabado RR: lo máximo de TRS",
      "Componentes y detalles de competición superiores",
      "Motor 294,1 cc con el mejor tacto de la gama",
      "66 kg y geometría de carreras",
      "Para quien quiere la TRS definitiva sin preparaciones",
      "Decoración RR exclusiva"
    ],
    contras: [
      "Sin precio oficial: TRS no publica tarifa de la One RR 300, así que no mostramos ninguna cifra",
      "Las mejoras sobre la One R son sutiles para el aficionado",
      "Sin homologación",
      "Mezcla al 1% con gasolina 98",
      "Repuestos RR con precio premium",
      "Excesiva si no se compite a alto nivel"
    ],
    curiosidades: [
      "RR son las siglas de la versión más racing de cada modelo TRS",
      "Es la moto con la que los pilotos TRS disputan el Mundial",
      "Su desarrollo lo lideran exmundialistas españoles",
      "Cada RR sale de la fábrica de Barcelona lista para correr"
    ],
    imagen: "/media/motos/trs-one-rr-300-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/trs-one-rr-300-2025-ficha-tecnica-precio-2.webp", alt: "Acabado RR de la TRS One RR 300 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/trs-one-rr-300-2025-ficha-tecnica-precio-3.webp", alt: "TRS One RR 300 2025 en competición", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "trs-one-rr-300-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    }
  },
  {
    id: "trs-xtrack-250-2025-ficha-tecnica-precio",
    marca: "TRS",
    modelo: "Xtrack 250",
    version: "2025",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: null, // TRS Motorcycles no publica tarifa oficial accesible de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "El concepto trial-excursión de TRS: para salir al campo",
      "Motor 2T de 247,7 cc dócil y divertido",
      "Asiento y depósito más generosos que una trial pura",
      "Ideal para rutas por pistas sin competir",
      "Ligereza de trial con un punto más de confort",
      "La forma más divertida de redescubrir el monte"
    ],
    contras: [
      "Sin precio oficial: TRS no publica tarifa de la Xtrack 250, así que no mostramos ninguna cifra",
      "Nicho muy específico: ni trial ni trail",
      "Sin homologación para carretera abierta",
      "Mezcla 2T obligatoria",
      "Autonomía limitada para grandes rutas",
      "Poca oferta de segunda mano",
      "Los accesorios específicos son escasos"
    ],
    curiosidades: [
      "Xtrack mezcla las siglas de trial (T) y track (pista)",
      "Es la respuesta española al concepto de la Montesa 4Ride",
      "Comparte la base mecánica con la One R 250",
      "TRS la presenta como la moto del 'trial de excursión'"
    ],
    imagen: "/media/motos/trs-xtrack-250-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/trs-xtrack-250-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la TRS Xtrack 250 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/trs-xtrack-250-2025-ficha-tecnica-precio-3.webp", alt: "TRS Xtrack 250 2025 de excursión por pistas", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "trs-xtrack-250-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    }
  },
  {
    id: "trs-one-r-electric-start-300-2025-ficha-tecnica-precio",
    marca: "TRS",
    modelo: "One R Electric Start 300",
    version: "2025",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: null, // TRS Motorcycles no publica tarifa oficial accesible de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 68.5,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Arranque eléctrico de serie: adiós a la palanca en las zonas",
      "Motor 294,1 cc con la comodidad del botón",
      "68,5 kg: solo 2,5 kg más que la versión de patada",
      "Ideal para pilotos que calan en zonas comprometidas",
      "Mismo chasis y componentes que la One R 300",
      "Un lujo que se agradece en cada salida"
    ],
    contras: [
      "Sin precio oficial: TRS no publica tarifa de la One R Electric Start, así que no mostramos ninguna cifra",
      "2,5 kg más y más complejidad eléctrica",
      "La batería añade un mantenimiento extra",
      "Sin homologación",
      "Mezcla al 1% con gasolina 98",
      "Los puristas prefieren la patada por simplicidad"
    ],
    curiosidades: [
      "El arranque eléctrico en trial parecía imposible hace una década",
      "TRS fue pionera en ofrecerlo de serie en sus 300",
      "El sistema suma solo 2,5 kg al conjunto",
      "En zonas embarradas, el botón vale su peso en oro"
    ],
    imagen: "/media/motos/trs-one-r-electric-start-300-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/trs-one-r-electric-start-300-2025-ficha-tecnica-precio-2.webp", alt: "Detalle del arranque eléctrico de la TRS One R 300 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/trs-one-r-electric-start-300-2025-ficha-tecnica-precio-3.webp", alt: "TRS One R Electric Start 300 2025 en zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "trs-one-r-electric-start-300-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 1% con gasolina de 98 octanos (dato verificado)"]
    }
  },
  {
    id: "vertigo-nitro-rs3-300-2026-ficha-tecnica-precio",
    marca: "Vertigo",
    modelo: "Nitro RS3 300",
    version: "2026",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: null, // Vertigo no publica tarifa oficial de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "La Vertigo más avanzada: tercera generación del modelo RS",
      "Motor 2T de 300 cc con inyección electrónica propia",
      "Chasis y soluciones técnicas innovadoras de la marca",
      "La trialera más tecnológica del mercado",
      "Diseño vanguardista que no deja indiferente",
      "Para pilotos que buscan lo último en trial"
    ],
    contras: [
      "Sin precio oficial: Vertigo no publica tarifa de la Nitro RS3, así que no mostramos ninguna cifra",
      "Sin homologación: competición pura",
      "Tecnología propia: menos mecánicos la conocen",
      "Repuestos específicos con plazos variables",
      "La inyección propia exige diagnóstico específico",
      "Excesiva para el aficionado medio"
    ],
    curiosidades: [
      "Vertigo Motors nació en 2015 en Girona de la mano de Manel Jané",
      "La RS3 es la tercera evolución de la Nitro original",
      "Su motor 2T con inyección fue pionero en el trial moderno",
      "La marca compite en el Mundial con pilotos de primer nivel"
    ],
    imagen: "/media/motos/vertigo-nitro-rs3-300-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/vertigo-nitro-rs3-300-2026-ficha-tecnica-precio-2.webp", alt: "Motor de la Vertigo Nitro RS3 300 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/vertigo-nitro-rs3-300-2026-ficha-tecnica-precio-3.webp", alt: "Vertigo Nitro RS3 300 2026 en una zona técnica", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "vertigo-nitro-rs3-300-2026-ficha-tecnica-precio"
  },
  {
    id: "vertigo-nitro-rs3-250-2026-ficha-tecnica-precio",
    marca: "Vertigo",
    modelo: "Nitro RS3 250",
    version: "2026",
    cilindradaCc: 250,
    categoria: "Trial",
    precioDesde: null, // Vertigo no publica tarifa oficial de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "La tecnología RS3 en la cilindrada más equilibrada",
      "250 2T con inyección: dócil y precisa",
      "Más fácil de pilotar que la 300 en zonas lentas",
      "Chasis innovador y ligereza de trialera moderna",
      "Ideal para progresar con la mejor tecnología",
      "La favorita de los pilotos de nivel medio-alto"
    ],
    contras: [
      "Sin precio oficial: Vertigo no publica tarifa de la Nitro RS3, así que no mostramos ninguna cifra",
      "Sin homologación ni etiqueta DGT",
      "Tecnología propia con servicio especializado",
      "La 300 cuesta similar y ofrece más motor",
      "Mantenimiento de trialera de carreras",
      "Sin polivalencia fuera del trial"
    ],
    curiosidades: [
      "La 250 es la cilindrada más vendida de la gama Nitro",
      "Comparte toda la tecnología RS3 con la 300",
      "Vertigo fabrica sus motos en Santa Maria de Palautordera",
      "Su inyección electrónica elimina el carburador del trial clásico"
    ],
    imagen: "/media/motos/vertigo-nitro-rs3-250-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/vertigo-nitro-rs3-250-2026-ficha-tecnica-precio-2.webp", alt: "Detalle de la Vertigo Nitro RS3 250 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/vertigo-nitro-rs3-250-2026-ficha-tecnica-precio-3.webp", alt: "Vertigo Nitro RS3 250 2026 en trial", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "vertigo-nitro-rs3-250-2026-ficha-tecnica-precio"
  },
  {
    id: "vertigo-combat-camo-300-2025-ficha-tecnica-precio",
    marca: "Vertigo",
    modelo: "Combat Camo 300",
    version: "2025",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: null, // Vertigo no publica tarifa oficial de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "La Vertigo más accesible: puerta de entrada a la marca",
      "Motor 300 2T con el carácter Vertigo a mejor precio (~9.500 €)",
      "Decoración Camo exclusiva y agresiva",
      "Tecnología de la casa sin el precio de la RS3",
      "Ideal para descubrir la marca sin arruinarse",
      "Base excelente para progresar en trial"
    ],
    contras: [
      "Sin precio oficial: Vertigo no publica tarifa de la Combat Camo, así que no mostramos ninguna cifra",
      "Por debajo de la RS3 en componentes y acabados",
      "Sin homologación",
      "El 300 puede intimidar a principiantes",
      "Mezcla 2T y mantenimiento de competición",
      "Reventa más lenta que las japonesas o Montesa",
      "Servicio técnico especializado"
    ],
    curiosidades: [
      "Combat es la gama de acceso de Vertigo bajo la Nitro",
      "La decoración Camo la hace inconfundible en las zonas",
      "Comparte la filosofía de inyección 2T de sus hermanas mayores",
      "Es la Vertigo favorita de los aficionados por su relación precio-tecnología"
    ],
    imagen: "/media/motos/vertigo-combat-camo-300-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/vertigo-combat-camo-300-2025-ficha-tecnica-precio-2.webp", alt: "Decoración Camo de la Vertigo Combat 300 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/vertigo-combat-camo-300-2025-ficha-tecnica-precio-3.webp", alt: "Vertigo Combat Camo 300 2025 en acción", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "vertigo-combat-camo-300-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Mezcla de aceite 2T al 0,75% (manual oficial Vertigo)"]
    },
  },
  {
    id: "vertigo-nitro-dl12-300-2026-ficha-tecnica-precio",
    marca: "Vertigo",
    modelo: "Nitro DL12 300",
    version: "Dougie Lampkin 2026",
    cilindradaCc: 300,
    categoria: "Trial",
    precioDesde: null, // Vertigo no publica tarifa oficial de este modelo (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Edición especial Dougie Lampkin: el tope de la gama Vertigo",
      "La Nitro RS3 con la preparación del 12 veces campeón del mundo",
      "Componentes y ajustes exclusivos de la edición",
      "Pieza de coleccionista además de arma de competición",
      "El trial más exclusivo que se puede comprar",
      "Decoración y detalles únicos DL12"
    ],
    contras: [
      "Sin precio oficial: Vertigo no publica tarifa de la Nitro DL12, así que no mostramos ninguna cifra",
      "Sin homologación",
      "Las mejoras sobre la RS3 estándar son para muy pocos",
      "Repuestos de la edición con precio y plazos especiales",
      "Excesiva para cualquiera que no compita al máximo",
      "Reventa a un público reducidísimo"
    ],
    curiosidades: [
      "DL12 son las iniciales y el dorsal de Dougie Lampkin",
      "Lampkin ganó 12 mundiales de trial, 7 outdoor y 5 indoor",
      "Es embajador de Vertigo y participa en el desarrollo de sus motos",
      "Las ediciones de pilotos campeones son tradición en el trial"
    ],
    imagen: "/media/motos/vertigo-nitro-dl12-300-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/vertigo-nitro-dl12-300-2026-ficha-tecnica-precio-2.webp", alt: "Detalles DL12 de la Vertigo Nitro 300 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/vertigo-nitro-dl12-300-2026-ficha-tecnica-precio-3.webp", alt: "Vertigo Nitro DL12 300 2026 en zona extrema", ancho: 1200, alto: 800 }
    ],
    videoId: "1hTXMyuI-XY",
    videoCanal: "TrialTube",
    fuenteNombre: "trialworld.es",
    fuenteUrl: null,
    analisisSlug: "vertigo-nitro-dl12-300-2026-ficha-tecnica-precio"
  },
  {
    id: "mecatecno-dragonfly-e-2025-ficha-tecnica-precio",
    marca: "Mecatecno",
    modelo: "Dragonfly-E",
    version: "2025",
    cilindradaCc: null,
    categoria: "Trial",
    precioDesde: 11979,
    potenciaKw: null,
    potenciaCv: 15,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: 1.875,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 60,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "Trial eléctrica: cero humos, cero ruido, cero mezcla",
      "Solo 60 kg: la más ligera de todo el lote",
      "Más de 15 CV y 100 Nm desde cero revoluciones",
      "3 mapas de potencia seleccionables",
      "Frenos Braktec y componentes de trial de verdad",
      "Se puede entrenar sin molestar: ideal para zonas urbanas"
    ],
    contras: [
      "11.979 €: la trial eléctrica más cara del mercado",
      "Autonomía limitada: batería de 1,875 kWh de serie (2,4 kWh opcional)",
      "Hay que gestionar la carga entre zonas",
      "Sin el tacto ni el sonido del 2T clásico",
      "Reventa incierta: mercado eléctrico de trial en pañales",
      "Peso de la batería si se quiere más autonomía"
    ],
    curiosidades: [
      "Mecatecno es una marca española pionera en trial eléctrica",
      "La Dragonfly-E nació como proyecto de competición eléctrica",
      "Sus 100 Nm de par la ponen al nivel de las 300 2T en salida",
      "El trial eléctrico es la apuesta de futuro para entrenar en ciudad"
    ],
    imagen: "/media/motos/mecatecno-dragonfly-e-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/mecatecno-dragonfly-e-2025-ficha-tecnica-precio-2.webp", alt: "Batería y motor eléctrico de la Mecatecno Dragonfly-E 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/mecatecno-dragonfly-e-2025-ficha-tecnica-precio-3.webp", alt: "Mecatecno Dragonfly-E 2025 en una zona de trial", ancho: 1200, alto: 800 }
    ],
    videoId: "gUqcIbA3xPA",
    videoCanal: "TrialTube",
    fuenteNombre: "hibridosyelectricos.com",
    fuenteUrl: null,
    analisisSlug: "mecatecno-dragonfly-e-2025-ficha-tecnica-precio"
  },
  {
    id: "stark-future-varg-mx-1-2-2025-ficha-tecnica-precio",
    marca: "Stark Future",
    modelo: "Varg MX 1.2",
    version: "Standard 60 CV",
    cilindradaCc: null,
    categoria: "Motocross",
    precioDesde: 12490,
    potenciaKw: 44,
    potenciaCv: 60,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: 7.2,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 118,
    plazas: 1,
    carnet: "A2",
    carga: "Carga completa en unas 2 horas",
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "La eléctrica que planta cara a las 450 de gasolina",
      "60 CV en la Standard y 80 CV en la Alpha, con par instantáneo",
      "Batería de 7,2 kWh: autonomía para una manga completa",
      "118 kg: en la media de las 450 de cross",
      "Suspensiones KYB con 310 mm de recorrido",
      "Cero mantenimiento de motor: sin aceite, sin filtros, sin gasolina"
    ],
    contras: [
      "12.490 € (Standard) y 13.490 € (Alpha): precio premium",
      "Autonomía limitada a la duración de las mangas",
      "Hay que planificar la carga: 2 horas para el 100%",
      "Sin el sonido ni las sensaciones del 4T",
      "Reventa incierta en un mercado aún térmico",
      "Peso alto para tratarse de una eléctrica de cross"
    ],
    curiosidades: [
      "Stark Future es una startup sueco-española con fábrica en Barcelona",
      "La Varg fue la primera eléctrica aceptada en competiciones de MX",
      "Su nombre significa 'fuerte' en sueco",
      "La versión Alpha de 80 CV supera en potencia a cualquier 450 de serie"
    ],
    imagen: "/media/motos/stark-future-varg-mx-1-2-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/stark-future-varg-mx-1-2-2025-ficha-tecnica-precio-2.webp", alt: "Batería de 7,2 kWh de la Stark Future Varg MX 1.2 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/stark-future-varg-mx-1-2-2025-ficha-tecnica-precio-3.webp", alt: "Stark Future Varg MX 1.2 2025 en un circuito de motocross", ancho: 1200, alto: 800 }
    ],
    videoId: "x534dKd5ISs",
    videoCanal: "Charged Cycle Works",
    fuenteNombre: "Stark Future",
    fuenteUrl: null,
    analisisSlug: "stark-future-varg-mx-1-2-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Engrasar la cadena antes y después de cada salida; aceite de horquillas cada 15 horas o 12 meses (manual oficial Stark)",
      trucos: ["Cambio de aceite de rodaje a las 5 horas de uso", "Purga el aire de las horquillas después de cada salida"]
    },
  },
  {
    id: "stark-future-varg-ex-2025-ficha-tecnica-precio",
    marca: "Stark Future",
    modelo: "Varg EX",
    version: "2025",
    cilindradaCc: null,
    categoria: "Enduro",
    precioDesde: 12900,
    potenciaKw: 44,
    potenciaCv: 60,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: 7.2,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 118,
    plazas: 1,
    carnet: "A1",
    carga: "Carga completa en unas 2 horas",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "La Varg matriculable: enduro eléctrica legal para carretera",
      "Etiqueta Cero de la DGT: acceso total a las ZBE",
      "Se puede conducir con carnet A1 o B según configuración",
      "60 CV con par instantáneo y 118-120 kg",
      "Silencio total: enduro sin molestar ni ser oído",
      "Cero emisiones y mantenimiento mínimo"
    ],
    contras: [
      "12.900 € (y 13.900 € la versión más potente)",
      "Autonomía justa para rutas largas de enduro",
      "Infraestructura de carga en el campo inexistente",
      "Peso elevado para zonas muy técnicas",
      "Sin la autonomía ni la red de las térmicas",
      "El silencio resta sensaciones a los puristas"
    ],
    curiosidades: [
      "Es una de las primeras enduro eléctricas matriculables del mundo",
      "Stark la homologó para poder usarla a diario",
      "Su etiqueta Cero le abre todas las zonas de bajas emisiones",
      "La fábrica de Barcelona produce para todo el mundo"
    ],
    imagen: "/media/motos/stark-future-varg-ex-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/stark-future-varg-ex-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la Stark Future Varg EX 2025 matriculable", ancho: 1200, alto: 800 },
      { src: "/media/motos/stark-future-varg-ex-2025-ficha-tecnica-precio-3.webp", alt: "Stark Future Varg EX 2025 en una pista de enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "GvtksJopFxk",
    videoCanal: "Jo & Will / Electric Off-Road",
    fuenteNombre: "Stark Future",
    fuenteUrl: null,
    analisisSlug: "stark-future-varg-ex-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      intervaloMantenimiento: "Engrasar la cadena antes y después de cada salida; aceite de horquillas cada 15 horas o 12 meses (manual oficial Stark)",
      trucos: ["Cambio de aceite de rodaje a las 5 horas de uso", "Purga el aire de las horquillas después de cada salida"]
    },
  },
  {
    id: "rieju-mrt-50-2025-ficha-tecnica-precio",
    marca: "Rieju",
    modelo: "MRT 50",
    version: "2025",
    cilindradaCc: 50,
    categoria: "Enduro",
    precioDesde: 3406,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 85,
    plazas: 1,
    carnet: "AM",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: ["Con 85 kg declarados en esta ficha de 2025, se mueve en parado y a baja velocidad sin la torpeza de una moto de mayor cilindrada para quien estrena el carnet AM.", "Su precio de partida de 3.406 € la sitúa, dentro de las 50 de estética grande, como una vía de acceso concreta y no como un capricho de escaparate.", "El depósito de mezcla separada evita andar preparando la gasolina con aceite a mano: la propia ficha recoge aceite sintético 2T y una capacidad de 1,2 L para ese depósito.", "Se fabrica en Figueres por Rieju, un dato que en una 50 juvenil pesa: red y recambios no dependen de una marca importada sin presencia propia en España.", "Figura con etiqueta C de la DGT y una sola plaza, un planteamiento muy claro: ciclomotard de uso individual para aprender, no moto para todo."],
    contras: ["Es una 50 y esta ficha ni siquiera consigna potencia ni velocidad máxima: fuera del entorno urbano y de pistas fáciles, el margen para circular entre tráfico rápido es escaso.", "El motor de dos tiempos obliga a vigilar el nivel del depósito de mezcla y a usar el aceite 2T específico que indica Rieju; descuidarlo no es una opción.", "Con una sola plaza registrada, queda descartada para llevar pasajero, algo que conviene asumir antes de comprarla pensando en compartir trayectos.", "Su vida útil para muchos usuarios será corta por edad: quien la compra con el AM suele mirar la 125 en cuanto cumple los requisitos, y ese salto encarece el cambio."],
    curiosidades: ["Rieju lleva fabricando en Figueres (Girona) desde 1942, según recoge la propia ficha, por lo que esta MRT 50 de 2025 no es una importada remarcada con otro nombre.", "El manual citado en la ficha nombra un aceite concreto para la mezcla separada, el GRO MIX 3, en lugar de limitarse a decir aceite de dos tiempos a secas."],
    imagen: "/media/motos/rieju-mrt-50-2025-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/rieju-mrt-50-2025-ficha-tecnica-precio-2.webp", alt: "Detalle de la Rieju MRT 50 2025", ancho: 1200, alto: 800 },
      { src: "/media/motos/rieju-mrt-50-2025-ficha-tecnica-precio-3.webp", alt: "Rieju MRT 50 2025 en una pista de tierra", ancho: 1200, alto: 800 }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Rieju",
    fuenteUrl: null,
    analisisSlug: "rieju-mrt-50-2025-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "Sintético 2T para el depósito de mezcla separada (Rieju recomienda GRO MIX 3); capacidad 1,2 L (manual oficial Rieju)"
    },
  },
  {
    id: "rieju-aventura-125-2024-ficha-tecnica-precio",
    marca: "Rieju",
    modelo: "Aventura 125",
    version: "2024",
    cilindradaCc: 125,
    categoria: "Trail",
    precioDesde: 3595,
    potenciaKw: 11,
    potenciaCv: 15,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 138,
    plazas: 1,
    carnet: "A1",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: ["Puedes conducirla con el A1 y también con el B si ya sumas tres años de permiso", "Figura en esta ficha por 3.595 €, un importe contenido entre las trail de iniciación", "Llenar sus 14 litros permite espaciar bastante las visitas a la gasolinera", "La frenada combinada de serie aporta un plus de aplomo al detenerte", "Su aspecto de aventurera en miniatura convence sin necesidad de exagerar el diseño", "Es un producto de Figueres, ensamblado aquí en España"],
    contras: ["En seco declara 138 kg, un registro elevado frente a rivales más ligeras de igual cilindrada", "Esos 15 CV se quedan escasos cuando pretendes rodar cargado en trayectos largos", "La terminación es honesta pero modesta, en línea con lo ajustado de su tarifa", "El conjunto de suspensiones cumple en pista fácil, pero flojea si el terreno se complica de verdad", "En vías rápidas el motor de un solo cilindro transmite temblores molestos al manillar", "No esperes ayudas electrónicas ni programas de motor seleccionables: aquí todo es sencillo y analógico"],
    curiosidades: ["Con esta trail de acceso, la casa catalana busca hacerse hueco frente a las propuestas japonesas del octavo de litro", "Pocas motos de su clase ofrecen una capacidad de combustible tan generosa como la de esta Rieju", "La familia Aventura no se detiene en este modelo: existe una hermana mayor pensada para quienes ya tienen el A2", "Al apretar la maneta, el sistema combinado distribuye el esfuerzo de detención entre la rueda delantera y la trasera"],
    imagen: "/media/motos/rieju-aventura-125-2024-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/rieju-aventura-125-2024-ficha-tecnica-precio-2.webp", alt: "Detalle trail de la Rieju Aventura 125 2024", ancho: 1200, alto: 800 },
      { src: "/media/motos/rieju-aventura-125-2024-ficha-tecnica-precio-3.webp", alt: "Rieju Aventura 125 2024 en una ruta de aventura", ancho: 1200, alto: 800 }
    ],
    videoId: "Qi0B0jIzuso",
    videoCanal: "Gonzaventuras",
    fuenteNombre: "Rieju",
    fuenteUrl: null,
    analisisSlug: "rieju-aventura-125-2024-ficha-tecnica-precio",
    mantenimientoDIY: {
      aceiteTipo: "10W-40 (manual del propietario Rieju)"
    },
  },
  {
    id: "rieju-mr-pro-300i-2026-ficha-tecnica-precio",
    marca: "Rieju",
    modelo: "MR Pro 300i",
    version: "2026",
    cilindradaCc: 298,
    categoria: "Enduro",
    precioDesde: 10299,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 103.5,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: null,
    aprox: ["pesoKg"],
    pros: [
      "Inyección electrónica TFI en el 300 2T: fin del carburador",
      "La enduro española más avanzada de la historia de Rieju",
      "Motor 300 con bajos potentes y entrega limpia",
      "Precio oficial 10.299 €: competitiva frente a las austriacas",
      "Componentes de primer nivel en la versión Pro",
      "Desarrollada con la experiencia de Rieju en competición"
    ],
    contras: [
      "Sin homologación: la inyección no la hace matriculable",
      "10.299 €: el salto a la inyección se paga",
      "La electrónica TFI es nueva: menos historial que la TBI austriaca",
      "Mantenimiento 2T de competición",
      "Red Rieju de enduro más pequeña que KTM o GasGas",
      "Sin etiqueta DGT"
    ],
    curiosidades: [
      "La 'i' de 300i indica la inyección electrónica TFI con 2 inyectores Bosch",
      "Es la primera 2T de inyección fabricada en España",
      "3 mapas de potencia: Race, Forest y Wet, seleccionables en marcha",
      "La gama MR es la heredera de las míticas Marathon de los 80",
      "Válvula de escape electrónica y eje de balance contrarrotante de serie",
      "103,5 kg en seco: de las 300 2T más ligeras con inyección"
    ],
    imagen: "/media/motos/rieju-mr-pro-300i-2026-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/rieju-mr-pro-300i-2026-ficha-tecnica-precio-2.webp", alt: "Rieju MR Pro 300i 2026, vista lateral de estudio", ancho: 1068, alto: 739 },
      { src: "/media/motos/rieju-mr-pro-300i-2026-ficha-tecnica-precio-3.webp", alt: "Rieju MR Pro 300i 2026 en acción, hard enduro", ancho: 1200, alto: 800 }
    ],
    videoId: "a0fURbAYX1g",
    videoCanal: "Motorbike Magazine",
    fuenteNombre: "Directomotor (ficha técnica Rieju)",
    fuenteUrl: "https://directomotor.com/rieju-mr-pro-300i-2026/",
    analisisSlug: "rieju-mr-pro-300i-2026-ficha-tecnica-precio"
  },
  {
    id: "rieju-mr-racing-300-2024-ficha-tecnica-precio",
    marca: "Rieju",
    modelo: "MR Racing 300",
    version: "2024",
    cilindradaCc: 300,
    categoria: "Enduro",
    precioDesde: 8487,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 105,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: null,
    aprox: [],
    pros: [
      "300 2T con clara influencia de las motos de competición de la marca",
      "105 kg: ligera para su cilindrada",
      "Precio 8.487 €: la 300 española más asequible",
      "Motor 299,3 cc con carácter racing",
      "Buena base para correr sin grandes inversiones",
      "El espíritu Racing a precio contenido"
    ],
    contras: [
      "Sin homologación para carretera",
      "Por debajo de la MR Pro en componentes",
      "Carburador tradicional frente a la inyección de la 300i",
      "Mantenimiento 2T frecuente",
      "Menos refinada que las austriacas equivalentes",
      "Reventa limitada"
    ],
    curiosidades: [
      "La gama Racing traslada la imagen del equipo de competición a la serie",
      "Su motor de 299,3 cc es de los más grandes del enduro 2T",
      "Rieju la posiciona como la 300 para pilotos que compiten",
      "Es la antecesora conceptual de la MR Pro 300i"
    ],
    imagen: "/media/motos/rieju-mr-racing-300-2024-ficha-tecnica-precio-1.webp",
    galeria: [
      { src: "/media/motos/rieju-mr-racing-300-2024-ficha-tecnica-precio-2.webp", alt: "Detalle racing de la Rieju MR Racing 300 2024", ancho: 1200, alto: 800 },
      { src: "/media/motos/rieju-mr-racing-300-2024-ficha-tecnica-precio-3.webp", alt: "Rieju MR Racing 300 2024 en competición", ancho: 1200, alto: 800 }
    ],
    videoId: "kqf1XndLd1k",
    videoCanal: "RIEJU",
    fuenteNombre: "motofichas.com",
    fuenteUrl: "https://www.motofichas.com/marcas/rieju",
    analisisSlug: "rieju-mr-racing-300-2024-ficha-tecnica-precio",
    mantenimientoDIY: {
      trucos: ["Líquido de frenos recomendado: DOT4 (manual oficial Rieju)", "La cadena es de retenes: usa un lubricante específico para este tipo"]
    },
  },
  {
    id: "rieju-aventura-rally-307-2026-ficha-tecnica-precio",
    marca: "Rieju",
    modelo: "Aventura Rally 307",
    version: "2026",
    cilindradaCc: 307,
    categoria: "Trail",
    precioDesde: 4649,
    potenciaKw: null,
    potenciaCv: 33.5,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 137,
    plazas: 1,
    carnet: "A2",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Estética rally-raid auténtica por 4.649 €",
      "Motor de 293 cc con 33,5 CV: el doble que la Aventura 125",
      "137 kg: ligera para una trail de su estilo",
      "Apta para el carnet A2",
      "Matriculable con etiqueta C",
      "La trail española con más carácter aventurero por su precio"
    ],
    contras: [
      "33,5 CV: justos para viajar cargado",
      "Versión R aún más cara si quieres lo máximo (5.099 €)",
      "Acabados sencillos",
      "Protección aerodinámica limitada",
      "Suspensiones básicas para el look que lleva",
      "Una plaza"
    ],
    curiosidades: [
      "Su estética imita a las motos del Dakar",
      "La versión R (5.099 €) lleva el espíritu offroad aún más lejos",
      "Es la trail media más asequible con look rally",
      "Rieju la desarrolló para acercar el estilo raid a todos los públicos"
    ],
    imagen: null,
    galeria: [
      { src: "/media/motos/rieju-aventura-rally-307-2026-ficha-tecnica-precio-1.webp", alt: "Rieju Aventura Rally 307 (foto: MotorideSA / Wikimedia Commons, licencia CC BY-SA 4.0)", ancho: 1400, alto: 1050 },
      { src: "/media/motos/rieju-aventura-rally-307-2026-ficha-tecnica-precio-2.webp", alt: "Frontal rally de la Rieju Aventura Rally 307 2026", ancho: 1200, alto: 800 },
      { src: "/media/motos/rieju-aventura-rally-307-2026-ficha-tecnica-precio-3.webp", alt: "Rieju Aventura Rally 307 2026 en una pista de tierra", ancho: 1200, alto: 800 }
    ],
    videoId: "bqrQo_jXM64",
    videoCanal: "Motorbike Magazine",
    fuenteNombre: "motofichas.com",
    fuenteUrl: "https://www.motofichas.com/marcas/rieju",
    analisisSlug: "rieju-aventura-rally-307-2026-ficha-tecnica-precio"
  }
];
