// Historias reales con fuente por provincia (fusión radares↔provincias, 24/10/2026).
// Curaduría de Merlín: noticias reales verificadas 1x1 (URL abierta y titular
// comprobado el 24/10/2026; resumen redactado con palabras propias, no copiado
// del medio). Si una provincia queda sin historias verificables, queda con
// lista vacía (no se inventa ninguna).
export type HistoriaProvincia = {
  titulo: string;
  resumen: string;
  fuente: string; // nombre del medio
  url: string; // URL exacta verificada
  fecha: string; // AAAA-MM-DD o "" si no visible
};

export const HISTORIAS_PROVINCIA: Record<string, HistoriaProvincia[]> = {
  "a-coruna": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "El cinemómetro del km 11 de la AG-55 figura entre los 50 radares más activos de España, con 14.052 denuncias por velocidad en 2025 según el informe anual de AEA.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Oficial DGT: llegan 24 nuevos radares que ya están operativos en estas carreteras de España",
      resumen: "La DGT incluyó a A Coruña en su tanda de 24 nuevos radares: dos fijos en la AC-221 (km 2,550) y la AC-841 (km 9,800) y uno de tramo en la AC-552.",
      fuente: "Unión Rayo",
      url: "https://unionrayo.com/actualidad/oficial-dgt-nuevos-radares/",
      fecha: "",
    },
  ],
  "albacete": [
    {
      titulo: "La Guardia Civil de Albacete investiga a una persona que trató de hurtar y causó daños a un equipo de radar",
      resumen: "Un vecino de La Roda de 32 años fue investigado por intentar robar, en patinete eléctrico, un radar móvil de la Guardia Civil en la N-301; el equipo sufrió daños por 4.000 euros.",
      fuente: "Tribuna Benemérita",
      url: "https://www.tribunabenemerita.es/index.php/actualidad/31398-la-guardia-civil-de-albacete-investiga-a-una-persona-que-trató-de-hurtar-y-causó-daños-a-un-equipo-de-radar-con-el-que-se-hallaban-operando-componentes-de-la-agrupación-de-tráfico.html",
      fecha: "2026-09-28",
    },
    {
      titulo: "Nuevos radares de la DGT: dónde están los cinco controles que comienzan a funcionar este lunes",
      resumen: "La DGT estrenó cinco nuevos puntos de control en Soria, Segovia y Albacete: en Albacete, un radar de tramo bidireccional en la CM-412 (pk 202,5 a 208,15).",
      fuente: "El Diario de Madrid",
      url: "https://www.eldiariodemadrid.es/articulo/movilidad/nuevos-radares-dgt-controles-velocidad-soria-segovia-albacete/20260906163317140886.html",
      fecha: "2026-09-06",
    },
  ],
  "alicante": [
    {
      titulo: "Paterna y Torrevieja lideran las multas de radar en España: casi 450 denuncias diarias entre dos dispositivos",
      resumen: "El radar de la CV-905 km 7 en Torrevieja fue el segundo más multón de España en 2025 con 72.557 denuncias en un tramo limitado a 50 km/h, unas 199 sanciones diarias de media.",
      fuente: "Noticias Ciudadanas",
      url: "https://noticiasciudadanas.com/paterna-y-torrevieja-lideran-las-multas-de-radar-en-espana-casi-450-denuncias-diarias-entre-dos-dispositivos/",
      fecha: "2026-10-16",
    },
    {
      titulo: "La DGT ya ha activado 33 nuevos radares en 2026: consulta las carreteras y kilómetros",
      resumen: "La DGT activó tres radares de tramo nuevos en Alicante (A-31 pk 216+550 y 211+700, A-7 pk 523+360) dentro de los 33 nuevos puntos de control de 2026.",
      fuente: "ADSLZone",
      url: "https://www.adslzone.net/e-movilidad/noticias-en-marcha/dgt-33-nuevos-radares-2026-carreteras-kilometros/",
      fecha: "2026-08-01",
    },
  ],
  "almeria": [
    {
      titulo: "Ya están operativos 24 nuevos radares en carreteras del norte, este y sur de la Península",
      resumen: "La DGT puso en servicio 24 radares en la península, tres de ellos en Almería: dos fijos (A-1050 pk 1,2 y AL-3117 pk 1,4) y uno de tramo (A-370 pk 8,4 a 9,4), con un mes de aviso antes de empezar a multar.",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250123-operativos-24-nuevos-radares-carreteras-norte-este-y-sur",
      fecha: "2025-01-23",
    },
    {
      titulo: "El radar que más multa de toda Andalucía está en una autovía de Málaga y acumula 45.050 denuncias al año",
      resumen: "El radar de la AL-3117 (pk 1) en Almería sumó cerca de 30.000 denuncias en 2025, entre los cinemómetros más activos de Andalucía según el informe de AEA.",
      fuente: "Andalucía Informa",
      url: "https://andaluciainforma.es/actualidad/radar-que-mas-multa-45050-denuncias-a7-malaga/",
      fecha: "2026-07-26",
    },
  ],
  "avila": [
    {
      titulo: "El radar que más multa en Ávila: AP-6 km 106",
      resumen: "AEA publicó el ranking de radares con más denuncias en Castilla y León en 2024: en Ávila lidera el de la AP-6 (km 106) con 6.625 denuncias, seguido del de la CL-501 (km 18) con 3.271.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/wp-content/uploads/2025/07/CASTILLA-Y-LEON.pdf",
      fecha: "2025-07",
    },
    {
      titulo: "La DGT activa 4 nuevos radares de tramo en Ávila",
      resumen: "La DGT puso en marcha 33 nuevos radares en 11 comunidades autónomas; en Ávila se activaron cuatro de tramo: dos en la AV-562 (PK 11+435 al 9+190, ambos sentidos) y dos en la N-403 (PK 86+250 al 83+320, ambos sentidos).",
      fuente: "DGT",
      url: "https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/nota_prensa/2026/27022026-NOTA-DE-PRENSA.pdf",
      fecha: "2026-02-27",
    },
  ],
  "badajoz": [
    {
      titulo: "Las multas por velocidad caen un 18% en Badajoz",
      resumen: "AEA cifra la recaudación por velocidad en Badajoz en 2.764.032 € en 2025 (-18,36% vs 2024), sobre un total de 8.002.471 € en multas de tráfico.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Radares pedagógicos en 172 municipios de Badajoz",
      resumen: "La Diputación de Badajoz avanza en su Plan Provincial de Radares Pedagógicos: 172 municipios beneficiarios con una inversión de 879.085 € en dispositivos que muestran la velocidad e invitan a reducirla, sin denunciar.",
      fuente: "Diputación de Badajoz",
      url: "http://www.dip-badajoz.es/agenda/index.php?id=3&agenda=23251&3=10&4=40&7=1",
      fecha: "2025-08-06",
    },
  ],
  "barcelona": [
    {
      titulo: "Barcelona instala 2 nuevos radares de velocidad en la Ronda Litoral a la altura de Zona Franca",
      resumen: "El Ayuntamiento de Barcelona puso en marcha dos radares fijos nuevos en la Ronda Litoral (B-10), uno por sentido en el km 16,1 a la altura de Zona Franca, para reducir la siniestralidad.",
      fuente: "Ant-Co.in (Europa Press)",
      url: "https://ant-co.in/news/barcelona-instala-2-nuevos-radares-de-velocidad-en-la-ronda-litoral-a-la-altura-de-zona-franca-20251212aca2645390a4e.html",
      fecha: "2025-12-12",
    },
    {
      titulo: "Llegan los radares remolque a España",
      resumen: "El Servei Català de Trànsit estrenó los radares remolque en la C-31 y la AP-7: en tres días controlaron 65.120 vehículos y sancionaron a casi 10.000; prevé llegar a 26 dispositivos en 2026.",
      fuente: "RACE",
      url: "https://www.race.es/radares-remolque",
      fecha: "2025-03-10",
    },
  ],
  "bilbao": [
    {
      titulo: "El radar de tramo de Trabakua impuso más de 8.300 multas en dos años: 11 al día en solo cuatro kilómetros",
      resumen: "El radar de tramo de Trabakua (BI-633, Vizcaya) impuso 8.313 multas entre 2024 y 2025: 11 sanciones diarias en solo 4 km limitados a 60 km/h, con una recaudación total de 332.350 euros.",
      fuente: "Cadena SER (Radio Bilbao)",
      url: "https://cadenaser.com/euskadi/2026/02/23/el-radar-de-tramo-de-trabakua-impuso-mas-de-8300-multas-en-dos-anos-11-al-dia-en-solo-cuatro-kilometros-radio-bilbao/",
      fecha: "2026-02-23",
    },
    {
      titulo: "La Ertzaintza impuso más de 131.000 denuncias de tráfico en Bizkaia en 2025",
      resumen: "La Ertzaintza impuso 131.772 denuncias de tráfico en Bizkaia en 2025; la A-8 lideró con 43.378 y el radar de Kukularra (Erandio) fue de los más activos con casi 5.900 infracciones por velocidad.",
      fuente: "Cadena SER (Radio Bilbao)",
      url: "https://cadenaser.com/euskadi/2026/04/08/la-ertzaintza-impuso-mas-de-131000-denuncias-de-trafico-en-bizkaia-en-2025-radio-bilbao/",
      fecha: "2026-04-08",
    },
  ],
  "burgos": [
    {
      titulo: "Golpe a las carreras ilegales en Burgos: 75 denuncias y multas que podrían llegar a los 95.000 euros",
      resumen: "La Policía Local desmanteló una carrera ilegal en el polígono de Villalonquéjar: 75 denuncias, 372 puntos retirados y multas de hasta 95.000 euros; habrá un nuevo radar para controlar la velocidad.",
      fuente: "Europa Press",
      url: "https://ant-co.in/news/Golpe-a-las-carreras-ilegales-en-Burgos:-75-denuncias-y-multas-que-podrían-llegar-a-los-95.000-euros-20250609a4a9c65be0e79.html",
      fecha: "2026-06-09",
    },
    {
      titulo: "El radar de la A-1 (pk 234) de Burgos, entre los 50 que más multan de España",
      resumen: "El radar de la A-1 (pk 234) en Burgos formuló 22.518 denuncias en 2025 y se sitúa entre los 50 cinemómetros más activos de España, según el informe de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "caceres": [
    {
      titulo: "Interceptado un furgón a 183 km/h en una vía limitada a 90 en Cáceres",
      resumen: "La Guardia Civil investigó al conductor de un furgón captado por radar móvil a 183 km/h en la EX-A1 (Malpartida de Plasencia), con límite de 90: delito contra la seguridad vial.",
      fuente: "NoticiasDe.es (Europa Press)",
      url: "https://www.noticiasde.es/extremadura/caceres/intercetado-conduciendo-un-furgon-a-183-km-hora-en-una-via-limitada-a-90-en-caceres/",
      fecha: "2025-10-24",
    },
    {
      titulo: "Cáceres, una de las provincias con menos ingresos por multas de velocidad",
      resumen: "El informe AEA de verano 2026 coloca a Cáceres entre las «zonas de tregua»: solo 1.697.493 € recaudados por exceso de velocidad en 2025, un 22,12% menos que en 2024.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "cadiz": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "Los cinemómetros del km 74 de la A-381 (36.925 denuncias) y del km 1.107 de la A-7 (28.091) sitúan a Cádiz como tercera provincia de España en ingresos por multas, con 16,5 millones.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Detenido a 212 km/h en Cádiz con el carné suspendido",
      resumen: "La Guardia Civil detuvo en Medina Sidonia a un conductor cazado a 212 km/h en la A-381 (Jerez-Los Barrios) con el permiso suspendido por orden judicial: dos delitos contra la seguridad vial.",
      fuente: "Veo Andalucía",
      url: "https://veoandalucia.com/detenido-212-kmh-cadiz-carne-suspendido-a381/",
      fecha: "2026-10-23",
    },
  ],
  "castellon": [
    {
      titulo: "La DGT activa dos radares de tramo en la N-340 en Castellón",
      resumen: "Entre los 17 nuevos radares que la DGT puso en marcha en marzo de 2025 hay dos de tramo en la N-340 en Castellón (PK 960+050 al 961+000, ambos sentidos), del plan de 122 nuevos puntos de control.",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250324-entran-en-funcionamiento-17-nuevos-radares/",
      fecha: "2025-03-24",
    },
    {
      titulo: "Dos radares de la AP-7 en Castellón, entre los 50 que más multan de España",
      resumen: "El informe AEA mete dos cinemómetros de Castellón en el top 50 nacional de 2025: el de la AP-7 (km 356) con 17.220 denuncias y el del km 390 con 16.555; la velocidad sumó 5,6 millones de euros en la provincia.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "ceuta": [
    {
      titulo: "Las multas por velocidad en Ceuta crecen un 88,7% en 2025",
      resumen: "El informe AEA de verano 2026 cifra la recaudación por exceso de velocidad en Ceuta en 89.023 € en 2025, un 88,74% más que en 2024, dentro de un total de 1.199.952 € en multas de tráfico.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Ceuta y Melilla, las cifras más bajas del récord de 6,1 millones de multas",
      resumen: "El Anuario de la DGT de 2025 marcó un récord de 6.106.354 denuncias; en la distribución territorial, Ceuta y Melilla registran las cifras más bajas de España, ligadas a su volumen demográfico y extensión.",
      fuente: "Actualidad Motor (datos DGT)",
      url: "https://www.actualidadmotor.com/record-de-multas-de-la-dgt-mas-de-seis-millones-de-sanciones-durante-el-ano-2025/",
      fecha: "2026-04-07",
    },
  ],
  "ciudad-real": [
    {
      titulo: "La DGT desarrolla esta semana una campaña especial de control de la velocidad en Ciudad Real",
      resumen: "La DGT lanzó una semana de controles especiales de velocidad en la provincia, con radares fijos y móviles, controles dinámicos y vigilancia aérea en los tramos con mayor siniestralidad.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/castillalamancha/2026/04/12/la-dgt-desarrolla-esta-semana-una-campana-especial-de-control-de-la-velocidad-en-ciudad-real-ser-ciudad-real/",
      fecha: "2026-04-12",
    },
    {
      titulo: "El radar de la A-4 (pk 230) de Ciudad Real, entre los 50 que más multan de España",
      resumen: "El radar de la A-4 (pk 230) en Ciudad Real formuló 15.783 denuncias en 2025 y está entre los 50 cinemómetros más activos del país según el informe de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "cordoba": [
    {
      titulo: "El radar más temido de España está en Andalucía: impone una media de 123 multas diarias",
      resumen: "El radar de la A-4 en Córdoba formuló 21.792 denuncias en 2025, entre los más activos de Andalucía según el informe de AEA, con un incremento muy importante respecto al año anterior.",
      fuente: "Diario AS",
      url: "https://as.com/actualidad/sociedad/el-radar-mas-temido-de-espana-esta-en-andalucia-impone-una-media-de-123-multas-diarias-f202607-n/",
      fecha: "",
    },
  ],
  "cuenca": [
    {
      titulo: "Más de 900 conductores, 'cazados' por exceso de velocidad en una semana en las carreteras de Cuenca",
      resumen: "La Guardia Civil controló casi 22.300 vehículos en 63 puntos de la provincia durante la semana del 3 al 9 de agosto y sancionó a más de 900 conductores, el 4,1% de los controlados.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/castillalamancha/2026/08/20/mas-de-900-conductores-cazados-por-exceso-de-velocidad-en-una-semana-en-las-carreteras-de-cuenca-ser-cuenca/",
      fecha: "2026-08-20",
    },
    {
      titulo: "Investigado por conducir a 231 kilómetros por hora por la AP-36 en la provincia de Cuenca",
      resumen: "Un conductor de 49 años fue investigado por circular a 231 km/h por la AP-36, limitada a 120, tras ser detectado por la Guardia Civil de Cuenca; se enfrenta a posibles penas de cárcel.",
      fuente: "TorrijosToday",
      url: "https://es.paperblog.com/investigado-por-conducir-a-231-kilometros-por-hora-por-la-ap-36-en-la-provincia-de-cuenca-10375954/",
      fecha: "2026-03-31",
    },
  ],
  "girona": [
    {
      titulo: "El radar de la C-31 en Platja d'Aro lidera las multas de Girona con 67.300 sanciones en 2025",
      resumen: "Con 67.300 multas en 2025 (más de 180 al día), el cinemómetro del km 312,7 de la C-31 en Castell-Platja d'Aro es el radar más activo de Girona; la demarcación sumó más de 240.000 expedientes por velocidad.",
      fuente: "Cadena SER (Ràdio Girona)",
      url: "https://cadenaser.com/cataluna/2026/04/01/el-radar-de-la-c-31-a-platja-daro-lidera-les-multes-a-girona-amb-67300-sancions-el-2025-radio-girona/",
      fecha: "2026-04-01",
    },
    {
      titulo: "Detenido por circular a 233 km/h en un tramo limitado a 90 en Navata",
      resumen: "Los Mossos detuvieron a un conductor de 37 años por delito vial tras captarlo a 233 km/h en la N-260 en Navata (límite 90), con adelantamientos prohibidos que pusieron en riesgo a otros usuarios.",
      fuente: "Diari de Girona",
      url: "http://bibgirona.cat/assets/documents/000/538/626/article.pdf",
      fecha: "2026-02-15",
    },
  ],
  "granada": [
    {
      titulo: "Un radar multa a dos patrullas de la Guardia Civil que acudían a un atraco y cuatro agentes terminan ante el juez: la Fiscalía pide archivar el caso",
      resumen: "Dos patrullas de la Guardia Civil fueron captadas por un radar cuando acudían a un atraco en una localidad de Granada; los cuatro agentes declararon ante el juez y la Fiscalía pidió archivar el caso.",
      fuente: "Diario AS",
      url: "https://as.com/actualidad/sociedad/un-radar-multa-a-dos-patrullas-de-la-guardia-civil-que-acudian-a-un-atraco-y-cuatro-agentes-terminan-ante-el-juez-la-fiscalia-pide-archivar-el-caso-f202610-n/",
      fecha: "",
    },
    {
      titulo: "Ya están operativos 24 nuevos radares en carreteras del norte, este y sur de la Península",
      resumen: "La DGT puso en servicio un radar fijo nuevo en la N-432 (pk 425+950) en la provincia de Granada dentro de los 24 nuevos puntos de control activados a principios de 2025.",
      fuente: "DGT (nota de prensa oficial)",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250123-operativos-24-nuevos-radares-carreteras-norte-este-y-sur",
      fecha: "2025-01-23",
    },
  ],
  "guadalajara": [
    {
      titulo: "El radar no perdona: dos motoristas, cazados a casi 200 km/h en Guadalajara en un tramo de 90 km/h",
      resumen: "La Guardia Civil investiga a dos motoristas de 36 y 33 años por circular a 197 y 185 km/h por la CM-2028 en Armuña de Tajuña, limitada a 90; el caso ya está en el juzgado.",
      fuente: "Alcarria TV",
      url: "https://www.alcarria.tv/portada/el-radar-no-perdona-dos-motoristas-cazados-a-casi-200-km-h-en-guadalajara-en-un-tramo-de-90-km-h/",
      fecha: "",
    },
    {
      titulo: "El radar de la A-2 (pk 122) de Guadalajara, entre los 50 que más multan de España",
      resumen: "El radar de la A-2 (pk 122) en Guadalajara disparó su actividad hasta 17.029 denuncias en 2025, más de cuatro veces las 4.179 de 2024, según el informe de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "huelva": [
    {
      titulo: "Un conductor, investigado por circular a 214 km/h por la A-49 en Gibraleón",
      resumen: "La Guardia Civil de Huelva investiga a un conductor por delito contra la seguridad vial tras circular a 214 km/h por la A-49 en Gibraleón, en una vía limitada a 120 km/h.",
      fuente: "HuelvaYA",
      url: "https://huelvaya.es/2026/06/15/conductor-investigado-214-kmh-a49-gibraleon/",
      fecha: "2026-06-15",
    },
    {
      titulo: "'Cazado' en la A-49 a 204 kilómetros por hora en un tramo limitado a 100",
      resumen: "Un conductor fue investigado por la Guardia Civil de Huelva tras ser detectado a 204 km/h en la A-49 dirección Portugal, en un tramo limitado a 100, durante un control nocturno de velocidad.",
      fuente: "HuelvaYA",
      url: "https://huelvaya.es/2025/04/04/cazado-a-204-kilometros-por-hora-por-a-49/",
      fecha: "2025-04-04",
    },
  ],
  "huesca": [
    {
      titulo: "El radar más multón de Huesca: N-230 km 48",
      resumen: "El informe AEA de los radares más activos de Aragón coloca en Huesca el de la N-230 (km 48) con 5.491 denuncias en 2024, seguido del de la N-123 (km 3) con 4.395 y el de la A-136 (km 12) con 4.154.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/wp-content/uploads/2025/07/ARAGON.pdf",
      fecha: "2025-07",
    },
    {
      titulo: "Huesca recauda 2,4 millones en multas por velocidad en 2025",
      resumen: "El informe AEA de verano 2026 cifra los ingresos por exceso de velocidad en Huesca en 2.402.004 € en 2025, un 3,21% más que en 2024, sobre un total de 5.819.119 € en multas de tráfico.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "jaen": [
    {
      titulo: "La Policía Local de Jaén controla 1.935 vehículos y denuncia a 174 conductores en una campaña de velocidad",
      resumen: "La Policía Local hizo balance de la campaña de velocidad del 13 al 19 de abril: controló 1.935 vehículos y denunció a 174 conductores por exceso de velocidad dentro del casco urbano.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/andalucia/2026/04/22/la-policia-local-de-jaen-controla-1935-vehiculos-y-denuncia-a-174-conductores-en-una-campana-de-velocidad-radio-jaen/",
      fecha: "2026-04-22",
    },
    {
      titulo: "La Policía Local de Jaén intercepta un quad cuyo conductor tenía el carné retirado y acumulaba varias infracciones",
      resumen: "Agentes interceptaron a un conductor que circulaba a gran velocidad en un quad; tenía el carné retirado por pérdida de puntos y acumulaba otras infracciones como ITV caducada y ruedas lisas.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/andalucia/2026/09/03/la-policia-local-de-jaen-intercepta-un-quad-cuyo-conductor-tenia-el-carne-retirado-y-acumulaba-varias-infracciones-radio-jaen/",
      fecha: "2026-09-03",
    },
  ],
  "las-palmas": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "El informe anual de AEA sitúa el cinemómetro de la GC-1 en el km 42 entre los más activos de España, con 15.927 denuncias por velocidad en 2025, frente a 11.403 del año anterior.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Así son y aquí están los nuevos radares de la DGT",
      resumen: "La DGT puso en servicio un radar fijo en la GC-20 y un control de tramo en la GC-23 de Gran Canaria dentro de su plan de 122 nuevos puntos, con un mes de avisos antes de sancionar.",
      fuente: "Actualidad Motor",
      url: "https://www.actualidadmotor.com/asi-son-y-aqui-estan-los-nuevos-radares-de-la-dgt/",
      fecha: "2026-03-16",
    },
  ],
  "leon": [
    {
      titulo: "El radar de la A-66 en León es el más multón y bate récord con 22.298 sanciones en un año",
      resumen: "El radar de la A-66 (pk 160), en Valdevimbre, es el que más multa de León: 22.298 sanciones en 2025, récord provincial; la provincia recaudó 9,48 millones en multas.",
      fuente: "Heraldo de León",
      url: "https://www.heraldodeleon.es/leon/radar-66-leon-es-mas-multon-bate-record-22298-multas-2025/20260723111957101158.html",
      fecha: "2026-07-23",
    },
    {
      titulo: "León alcanza los 61 radares y se consolida entre las provincias con mayor vigilancia",
      resumen: "León ya dispone de 61 radares, cinco más que hace un año, y es la tercera provincia de Castilla y León con más controles de velocidad.",
      fuente: "Heraldo de León",
      url: "https://www.heraldodeleon.es/leon/leon-alcanza-61-radares-consolida-entre-provincias-mayor-vigilancia/20260629080636097289.html",
      fecha: "2026-06-29",
    },
  ],
  "lleida": [
    {
      titulo: "224 conductores multados cada día por exceso de velocidad en Lleida",
      resumen: "Los radares fijos de Lleida detectaron 81.665 excesos en 2025 (224 al día de media); el de la AP-2 en L'Albi repite como el más activo, con 26.902 sanciones, tres de cada diez del total.",
      fuente: "Segre (Garrigues TV)",
      url: "https://www.garriguestv.cat/ca/turisme/garriguestv/db/multats-224-conductors-cada-dia-per-exces-de-velocitat-a-les-carreteres-lleidatanes/13696.pdf",
      fecha: "2026-04-20",
    },
    {
      titulo: "Trànsit activa cuatro nuevos radares en las carreteras de Lleida",
      resumen: "El Servei Català de Trànsit instaló cuatro nuevos radares en Lleida por el repunte mortal (19 muertos hasta julio de 2025): A-2 en Cervera (km 524,2) y Vilagrassa (km 501,5), y C-12 en Balaguer.",
      fuente: "Segre (Infolleida / Segria TV)",
      url: "https://www.segriatv.cat/ca/turisme/segriatv/actualitat/50781/transit-activa-quatre-nous-radars-a-les-carreteres-de-lleida-per-frenar-lalta-sinistralitat/11730.pdf",
      fecha: "2025-08-04",
    },
  ],
  "logrono": [
    {
      titulo: "La Comisión de Tráfico de La Rioja analiza actuaciones para mejorar la seguridad vial, con nuevos radares fijos y más controles en las carreteras",
      resumen: "La jefa provincial de Tráfico anunció que la DGT ha pedido cuatro nuevos radares para La Rioja, previstos para la N-232 y la N-111, las vías con más accidentes por velocidad inadecuada.",
      fuente: "Radio Arnedo",
      url: "https://www.radioarnedo.com/2024/01/noticias/la-comision-de-trafico-de-la-rioja-analiza-actuaciones-para-mejorar-la-seguridad-vial-con-nuevos-radares-fijos-y-mas-controles-en-las-carreteras/",
      fecha: "2024-01-18",
    },
    {
      titulo: "La campaña de la DGT para el control de la velocidad se salda con 1.122 vehículos denunciados en La Rioja",
      resumen: "La DGT denunció 1.122 vehículos en La Rioja durante su campaña del 7 al 13 de abril de 2025, el 6,81% de los 16.456 controlados por la Guardia Civil y policías locales.",
      fuente: "Europa Press",
      url: "https://ant-co.in/news/La-campaña-de-la-DGT-para-el-control-de-la-velocidad-se-salda-con-1.122-vehículos-denunciados-en-La-Rioja-20250425a2e3bc6ede3cc.html",
      fecha: "2025-04-25",
    },
  ],
  "lugo": [
    {
      titulo: "Nuevo radar fijo de la DGT en la LU-862 en Lugo",
      resumen: "La DGT puso en servicio en enero de 2025 un radar fijo en Lugo: en la LU-862, punto kilométrico 74+150 D, dentro de la remesa de 24 nuevos puntos de control de velocidad en el norte, este y sur de la Península.",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250123-operativos-24-nuevos-radares-carreteras-norte-este-y-sur",
      fecha: "2025-01-23",
    },
    {
      titulo: "Lugo registra la mayor caída de España en multas por velocidad: -37%",
      resumen: "El informe AEA de verano 2026 cifra los ingresos por exceso de velocidad en Lugo en 4.183.788 € en 2025, un 37,11% menos que en 2024, el mayor descenso provincial del país.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "madrid": [
    {
      titulo: "Los radares más \"multones\" de Madrid: El de Avda Portugal encabeza el ranking con 21.160 sanciones y 2,28 millones",
      resumen: "El radar del túnel de la avenida de Portugal (M-30, km 4,150) lideró las multas en Madrid el primer semestre de 2025 con 21.610 denuncias y 2,28 millones recaudados, según Automovilistas Europeos Asociados.",
      fuente: "NoticiasDe.es",
      url: "https://www.noticiasde.es/comunidad-de-madrid-2/los-radares-mas-multones-de-madrid-el-de-avda-portugal-encabeza-el-ranking-con-21-160-sanciones-y-228-millones/",
      fecha: "2025-12-06",
    },
    {
      titulo: "Hasta 20 multas por minuto: así funciona el nuevo radar remolque que la DGT ha instalado en Madrid y llegará a más ciudades",
      resumen: "La DGT estrenó en la A-1 (km 45, Pedrezuela) su primer radar remolque: un cinemómetro autónomo con baterías para 14 días que puede tramitar hasta 20 multas por minuto en tramos de obras.",
      fuente: "ADSLZone",
      url: "https://www.adslzone.net/e-movilidad/noticias-en-marcha/nuevo-radar-remolque-madrid-multas/",
      fecha: "2026-04-24",
    },
  ],
  "malaga": [
    {
      titulo: "El radar que más multa de toda Andalucía está en una autovía de Málaga y acumula 45.050 denuncias al año",
      resumen: "El radar de la A-7 km 968 en Rincón de la Victoria es el que más multa de Andalucía y el quinto de España: 45.050 denuncias en 2025, una media de 123 al día, aunque bajó desde las 67.502 de 2024.",
      fuente: "Andalucía Informa",
      url: "https://andaluciainforma.es/actualidad/radar-que-mas-multa-45050-denuncias-a7-malaga/",
      fecha: "2026-07-26",
    },
    {
      titulo: "Instalan en la ciudad de Málaga los primeros radares que informan, pero no multan",
      resumen: "Málaga instaló los primeros cuatro radares pedagógicos de un plan de 22: paneles LED que muestran la velocidad con caras verde o roja y registran datos anónimos de más de un millón de vehículos sin multar.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/andalucia/2026/05/29/instalan-en-la-ciudad-de-malaga-los-primeros-radares-que-informan-pero-no-multan-ser-malaga/",
      fecha: "2026-05-29",
    },
  ],
  "melilla": [
    {
      titulo: "Melilla activa el sistema de Foto Rojo, con multas de 200 euros y retirada de cuatro puntos",
      resumen: "El sistema Foto Rojo de Melilla se activó el 16/06/2026 en los cruces de General Polavieja con Alfonso Gurrea y de Álvaro de Bazán con General Ordóñez; saltarse el semáforo en rojo supone 200 euros y 4 puntos.",
      fuente: "El Faro de Melilla",
      url: "https://elfarodemelilla.es/melilla-activa-el-sistema-de-foto-rojo-con-multas-de-200-euros-y-retirada-de-cuatro-puntos/",
      fecha: "2026-06-16",
    },
    {
      titulo: "Melilla, entre las cifras más bajas del récord de multas de la DGT",
      resumen: "El Anuario de la DGT de 2025 marcó un récord de 6.106.354 denuncias; Ceuta y Melilla registran las cifras más bajas. El informe AEA cifra el total de multas en Melilla en 884.719 € en 2025.",
      fuente: "Actualidad Motor / AEA",
      url: "https://www.actualidadmotor.com/record-de-multas-de-la-dgt-mas-de-seis-millones-de-sanciones-durante-el-ano-2025/",
      fecha: "2026-04-07",
    },
  ],
  "murcia": [
    {
      titulo: "La DGT ya ha activado 33 nuevos radares en 2026: consulta las carreteras y kilómetros",
      resumen: "La DGT activó un radar fijo nuevo en la RM-620 (pk 4+228) dentro de los 33 nuevos puntos de control de 2026, ya señalizado y publicado en la web oficial de Tráfico.",
      fuente: "ADSLZone",
      url: "https://www.adslzone.net/e-movilidad/noticias-en-marcha/dgt-33-nuevos-radares-2026-carreteras-kilometros/",
      fecha: "2026-08-01",
    },
    {
      titulo: "El impacto de los radares de tráfico en las ciudades españolas: ubicación, sanciones y nuevas tecnologías",
      resumen: "El cinemómetro de la MU-30 km 9 (El Palmar) es el radar más multón de la Región de Murcia: sanciona una media de 35 conductores al día y concentra más del 17% de las multas por velocidad de la comunidad.",
      fuente: "meteorologiaenred.com",
      url: "https://www.meteorologiaenred.com/el-impacto-de-los-radares-de-trafico-en-las-ciudades-espanolas-ubicacion-sanciones-y-nuevas-tecnologias.html",
      fecha: "2025-07-30",
    },
  ],
  "ourense": [
    {
      titulo: "La DGT estrena radar fijo y radar de tramo en Ourense",
      resumen: "La remesa de 24 nuevos radares de enero de 2025 llevó a Ourense un cinemómetro fijo en la N-525 (km 237+880 C) y un radar de tramo en la OU-536 (del km 25+850 al 28+040 C).",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250123-operativos-24-nuevos-radares-carreteras-norte-este-y-sur",
      fecha: "2025-01-23",
    },
    {
      titulo: "Ourense, entre las provincias con menos ingresos por multas de velocidad",
      resumen: "El informe AEA de verano 2026 sitúa a Ourense entre las «zonas de tregua»: 1.352.898 € recaudados por exceso de velocidad en 2025, un 32,29% más que en 2024 pero de las cifras más bajas de España.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "oviedo": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "El cinemómetro del km 377 de la N-634 figura entre los 50 radares más activos de España, con 19.062 denuncias por velocidad en 2025 según el informe anual de AEA.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Oficial DGT: llegan 24 nuevos radares que ya están operativos en estas carreteras de España",
      resumen: "Entre los 24 nuevos radares anunciados por la DGT, Asturias recibió tres: un fijo en la N-634 (km 377,850), otro en la GJ-10 y uno de tramo en la AS-112, con un mes inicial de avisos.",
      fuente: "Unión Rayo",
      url: "https://unionrayo.com/actualidad/oficial-dgt-nuevos-radares/",
      fecha: "",
    },
  ],
  "palencia": [
    {
      titulo: "Los radares de tramo de Palencia redujeron las muertes de tráfico de 17 a 3 en seis años",
      resumen: "Los radares de tramo de las carreteras hacia Guardo y Sahagún redujeron las muertes de 17 a 3 en seis años, según el jefe provincial de Tráfico; la provincia tramita unas 2.500 sanciones de velocidad al mes.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/castillayleon/2026/07/31/los-radares-de-tramo-de-palencia-redujeron-las-muertes-de-trafico-de-17-a-3-en-seis-anos-radio-palencia/",
      fecha: "2026-07-31",
    },
    {
      titulo: "Investigado por circular a 227 km/h en una carretera de Palencia",
      resumen: "La Guardia Civil investiga a un conductor que circuló a 227 km/h tras ser identificado por el GIAT gracias a un vídeo que su propio copiloto subió a redes sociales.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/castillayleon/2026/09/03/investigado-por-circular-a-227-kmh-en-una-carretera-de-palencia-radio-palencia/",
      fecha: "2026-09-03",
    },
  ],
  "palma-mallorca": [
    {
      titulo: "El Consell de Mallorca aprueba instalar unas 60 cámaras de control en las carreteras de la Sierra de Tramuntana para prevenir las carreras ilegales",
      resumen: "El Consell de Mallorca aprobó instalar 60 cámaras de control de velocidad en la Serra de Tramuntana y 210 aparatos de radar y videovigilancia en toda la isla, homologados por la DGT para poder multar.",
      fuente: "Consell de Mallorca (nota oficial)",
      url: "https://www.conselldemallorca.es/es/todas-las-noticias/-/asset_publisher/bqOupoVYvgPA/content/el-consell-de-mallorca-aprova-instal%C2%B7lar-unes-60-c%C3%A0meres-de-control-a-les-carreteres-de-la-serra-de-tramuntana-per-prevenir-les-carreres-il%C2%B7legals/695139?p_r_p_assetEntryId=15900541&p_r_p_resetCur=false&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA_type=content&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA_groupId=695139&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA_urlTitle=el-consell-de-mallorca-aprova-instal%25C2%25B7lar-unes-60-c%25C3%25A0meres-de-control-a-les-carreteres-de-la-serra-de-tramuntana-per-prevenir-les-carreres-il%25C2%25B7legals&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA_redirect=https%3A%2F%2Fwww.conselldemallorca.es%2Fes%2Ftodas-las-noticias%3Fp_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_r_p_assetEntryId%3D15900541%26p_r_p_resetCur=false%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA_cur%3D5%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA_delta%3D27%23p_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_bqOupoVYvgPA",
      fecha: "2025-10-26",
    },
    {
      titulo: "180 km/h en la Ma-13: por qué Mallorca debe endurecer su acción contra los conductores temerarios",
      resumen: "Un dispositivo de control registró a una conductora de 21 años circulando a más de 180 km/h en la Ma-13 (km 39,4, entre Sa Pobla y Alcúdia), donde el límite es de 80: se enfrenta a una posible causa penal.",
      fuente: "Mallorca Magic",
      url: "https://www.mallorcamagic.es/news/velocidad-excesiva-ma-13-180-kmh-mallorca",
      fecha: "",
    },
  ],
  "pamplona": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "El cinemómetro del km 127 de la A-15 en Navarra formuló 67.445 denuncias por velocidad en 2025, según el informe de AEA, y es el tercer radar más activo del país.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Tráfico Navarra instala dos nuevos radares de tramo con el objetivo de incrementar la seguridad en las carreteras",
      resumen: "El Gobierno de Navarra colocó dos radares de tramo en la A-68 (Cortes-Tudela) y la N-121-A (túneles de Belate y Almandoz), en fase de pruebas y con capacidad sancionadora prevista para el primer trimestre de 2026.",
      fuente: "Gobierno de Navarra",
      url: "https://www.navarra.es/es/detallenoticia?p_p_id=es_navarra_base_pdf_web_portlet_PdfWebPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&_es_navarra_base_pdf_web_portlet_PdfWebPortlet_groupId=48192&_es_navarra_base_pdf_web_portlet_PdfWebPortlet_articleId=55884205&p_p_resource_id=exportPdf&_es_navarra_base_pdf_web_portlet_PdfWebPortlet__com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_errtkfgDcbj6_mvcPath=%2Fview_content.jsp&_es_navarra_base_pdf_web_portlet_PdfWebPortlet__com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_errtkfgDcbj6_type=content&_es_navarra_base_pdf_web_portlet_PdfWebPortlet_pageBackId=363032&_es_navarra_base_pdf_web_portlet_PdfWebPortlet__com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_errtkfgDcbj6_assetEntryId=55884216&_es_navarra_base_pdf_web_portlet_PdfWebPortlet_back=true&_es_navarra_base_pdf_web_portlet_PdfWebPortlet__com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_errtkfgDcbj6_languageId=es_ES",
      fecha: "2025-12-30",
    },
  ],
  "pontevedra": [
    {
      titulo: "La DGT activa un nuevo radar fijo en la VG-20 en Pontevedra",
      resumen: "Entre los 33 nuevos radares puestos en marcha el 27 de febrero de 2026 figura uno fijo en Pontevedra: en la VG-20, punto kilométrico 10+280 D. Durante el primer mes los excesos solo se avisan con carta informativa.",
      fuente: "DGT",
      url: "https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/nota_prensa/2026/27022026-NOTA-DE-PRENSA.pdf",
      fecha: "2026-02-27",
    },
    {
      titulo: "Las multas por velocidad crecen un 11,3% en Pontevedra",
      resumen: "El informe AEA de verano 2026 cifra la recaudación por exceso de velocidad en Pontevedra en 8.979.238 € en 2025, un 11,31% más que en 2024, dentro de un total de 17.683.152 € en multas de tráfico.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "salamanca": [
    {
      titulo: "Entran en funcionamiento 17 nuevos radares en carreteras de seis Comunidades Autónomas",
      resumen: "La DGT puso en marcha 17 nuevos radares, uno de tramo en Salamanca (SA-20, pk 91+975 a 92+436), dentro del plan de 122 puntos de control para 2025.",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250324-entran-en-funcionamiento-17-nuevos-radares/",
      fecha: "2025-03-24",
    },
    {
      titulo: "El radar más activo de Salamanca en 2024 fue el de la CL-517 (pk 16), con 3.182 denuncias",
      resumen: "El cinemómetro de la CL-517 (pk 16) lideró las denuncias por radar en Salamanca en 2024 con 3.182 sanciones, seguido del de la CL-517 (pk 4), según los datos provinciales de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/wp-content/uploads/2025/07/CASTILLA-Y-LEON.pdf",
      fecha: "",
    },
  ],
  "san-sebastian": [
    {
      titulo: "Resolución de 8 de agosto de 2025: cabinas de radar en el túnel de Belabieta (A-15)",
      resumen: "La Dirección de Tráfico del Gobierno Vasco autorizó instalar cabinas de radar en el túnel de Belabieta (A-15, Andoain), que funciona en doble sentido durante las obras del tubo sentido San Sebastián.",
      fuente: "Boletín Oficial del País Vasco",
      url: "https://www.euskadi.eus/web01-bopv/es/bopv2/datos/2025/09/2503735a.shtml",
      fecha: "2025-09-03",
    },
    {
      titulo: "De los “caballitos” a los 300 km/h: la Ertzaintza investiga a dos motoristas por conducción temeraria",
      resumen: "La Ertzaintza investiga a dos jóvenes por conducción temeraria: vídeos a 273 y 300 km/h en la A-15 (Urnieta) y 240 km/h en la N-634 (Zumaia); les incautaron las motocicletas.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/euskadi/2026/09/25/de-los-caballitos-a-los-300-kmh-la-ertzaintza-investiga-a-dos-motoristas-por-conduccion-temeraria-radio-bilbao/",
      fecha: "2026-09-25",
    },
  ],
  "santa-cruz-tenerife": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "El informe de AEA coloca el cinemómetro de la TF-2 en el km 1 como cuarto más activo de España, con 49.641 denuncias en 2025; los ingresos por velocidad en la provincia subieron un 75%.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Entran en funcionamiento 17 nuevos radares en carreteras de seis Comunidades Autónomas",
      resumen: "La DGT activó en Tenerife tres radares fijos (TF-5, TF-66, TF-65) y dos de tramo en la TF-655, dentro de la tanda de 17 nuevos cinemómetros que entraron en servicio en marzo de 2025.",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250324-entran-en-funcionamiento-17-nuevos-radares/",
      fecha: "2025-03-24",
    },
  ],
  "santander": [
    {
      titulo: "INFORME AEA: Los radares que más multan en toda España",
      resumen: "El cinemómetro del km 144 de la A-8 en Cantabria formuló 18.783 denuncias por velocidad en 2025, según el informe anual de AEA sobre los radares que más multan.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Campaña especial de vigilancia de la velocidad: uno de cada cuatro siniestros mortales en 2024 estuvo relacionado con el exceso de velocidad",
      resumen: "La DGT activó nuevos radares fijos y de tramo en Cantabria dentro de su plan de 122 puntos y lanzó la campaña especial de velocidad del 4 al 10 de agosto, coordinada a nivel europeo con RoadPol.",
      fuente: "El Cantabro",
      url: "https://elcantabro.es/cantabria-noticias/campana-especial-de-vigilancia-de-la-velocidad-uno-de-cada-cuatro-siniestros-mortales-en-2024-estuvo-relacionado-con-el-exceso-de-velocidad/",
      fecha: "2025-08-04",
    },
  ],
  "segovia": [
    {
      titulo: "Nuevos radares de la DGT: dónde están los cinco controles que comienzan a funcionar este lunes",
      resumen: "La DGT estrenó cinco nuevos puntos de control en Soria, Segovia y Albacete: en Segovia, un radar de tramo bidireccional en la N-110 (pk 158,7 a 161,3).",
      fuente: "El Diario de Madrid",
      url: "https://www.eldiariodemadrid.es/articulo/movilidad/nuevos-radares-dgt-controles-velocidad-soria-segovia-albacete/20260906163317140886.html",
      fecha: "2026-09-06",
    },
    {
      titulo: "La cuesta de Los Hoyos, renovada y con radar: Segovia vigila la velocidad en dos calles de 30 km/h",
      resumen: "El Ayuntamiento de Segovia instalará controles de radar en la renovada cuesta de Los Hoyos y la calle San Gabriel, con límite de 30 km/h, y tramita la adquisición de un radar de tramo.",
      fuente: "Tribuna de Segovia",
      url: "https://www.tribunasegovia.com/noticias/461757/la-cuesta-de-los-hoyos-renovada-y-con-radar-segovia-vigila-la-velocidad-en-dos-calles-de-30-km-h",
      fecha: "",
    },
  ],
  "sevilla": [
    {
      titulo: "Este es el nuevo radar de tramo que ya está multando en una de las principales ciudades de España: dónde está y cómo funciona",
      resumen: "La DGT activó un radar de tramo en la A-4 junto al aeropuerto de San Pablo (km 532+675 a 531+000, sentido Sevilla) que multa la velocidad media por encima de 120 km/h con un margen técnico del 3%.",
      fuente: "ADSLZone",
      url: "https://www.adslzone.net/e-movilidad/noticias-en-marcha/nuevo-radar-tramo-sevilla-multas/",
      fecha: "2025-09-18",
    },
    {
      titulo: "Otro radar fijo acaba por los suelos en la A-92: \"Creo que es del aire, aquí hace mucho aire\"",
      resumen: "Un radar fijo de la A-92 apareció completamente derribado en Alcalá de Guadaíra (Sevilla); el conductor que difundió las imágenes ironizó con que fue \"del aire\", sin que se sepa si fue vandalismo o un impacto.",
      fuente: "elmotero.es",
      url: "https://www.elmotero.es/articulo/trending/radar-fijo-acaba-suelos-92-creo-que-es-aire-aqui-hace-mucho-aire/20261010172111010357.html",
      fecha: "2026-10-10",
    },
  ],
  "soria": [
    {
      titulo: "Nuevos radares de la DGT: dónde están los cinco controles que comienzan a funcionar este lunes",
      resumen: "La DGT estrenó cinco nuevos puntos de control en Soria, Segovia y Albacete: en Soria, un radar fijo en la CL-101 (pk 7,020, sentido decreciente).",
      fuente: "El Diario de Madrid",
      url: "https://www.eldiariodemadrid.es/articulo/movilidad/nuevos-radares-dgt-controles-velocidad-soria-segovia-albacete/20260906163317140886.html",
      fecha: "2026-09-06",
    },
    {
      titulo: "El radar más activo de Soria en 2024 fue el de la N-234 (pk 340), con 4.986 denuncias",
      resumen: "El cinemómetro de la N-234 (pk 340) lideró las denuncias por radar en Soria en 2024 con 4.986 sanciones, seguido del de la N-234 (pk 337) con 4.953, según los datos provinciales de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/wp-content/uploads/2025/07/CASTILLA-Y-LEON.pdf",
      fecha: "",
    },
  ],
  "tarragona": [
    {
      titulo: "El radar que más multa de España está en la AP-7 de Tarragona",
      resumen: "El cinemómetro del km 325 de la AP-7, en Tarragona, formuló 67.582 denuncias y fue el radar más activo de España, según el II Observatorio de Radares; Cataluña concentra 700 dispositivos, la mayor red del país.",
      fuente: "Estadio Deportivo",
      url: "https://www.estadiodeportivo.com/estar-al-dia/dgt-descubren-radar-que-mas-multas-pone-espana-20230424-417845.html",
      fecha: "2023-04-24",
    },
  ],
  "teruel": [
    {
      titulo: "El radar más multón de Teruel: A-23 km 165",
      resumen: "El informe AEA de los radares más activos de Aragón sitúa en Teruel el de la A-23 (km 165) con 11.406 denuncias en 2024, más del doble que en 2023 (5.196); le siguen la N-232 (km 128, 8.305) y la A-23 (km 88, 7.311).",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/wp-content/uploads/2025/07/ARAGON.pdf",
      fecha: "2025-07",
    },
    {
      titulo: "Las multas por velocidad en Teruel crecen un 6,3% en 2025",
      resumen: "El informe AEA de verano 2026 cifra la recaudación por exceso de velocidad en Teruel en 2.655.319 € en 2025, un 6,33% más que en 2024, dentro de un total de 5.069.624 € en multas de tráfico.",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "toledo": [
    {
      titulo: "El radar de la A-4 (pk 67) de Toledo, entre los 50 que más multan de España",
      resumen: "El cinemómetro de la A-4 (pk 67) en Toledo tramitó 15.288 denuncias en 2025 y entra en el top 50 de los radares que más multan en España, según el informe de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
    {
      titulo: "Entran en funcionamiento 17 nuevos radares en carreteras de seis Comunidades Autónomas",
      resumen: "La DGT activó 17 nuevos radares en seis comunidades, uno fijo en Toledo (CM-4010 pk 1,8), con un primer mes de cartas informativas antes de empezar a sancionar.",
      fuente: "DGT",
      url: "https://www.dgt.es/comunicacion/notas-de-prensa/20250324-entran-en-funcionamiento-17-nuevos-radares/",
      fecha: "2025-03-24",
    },
  ],
  "valencia": [
    {
      titulo: "Paterna y Torrevieja lideran las multas de radar en España: casi 450 denuncias diarias entre dos dispositivos",
      resumen: "El radar de la A-7 km 326 (La Canyada, Paterna) fue el más multón de España en 2025 con 90.766 denuncias, unas 249 al día; en 2024 solo formuló seis porque estuvo casi todo el año inactivo.",
      fuente: "Noticias Ciudadanas",
      url: "https://noticiasciudadanas.com/paterna-y-torrevieja-lideran-las-multas-de-radar-en-espana-casi-450-denuncias-diarias-entre-dos-dispositivos/",
      fecha: "2026-10-16",
    },
    {
      titulo: "El impacto de los radares de tráfico en las ciudades españolas: ubicación, sanciones y nuevas tecnologías",
      resumen: "Valencia instaló un nuevo radar pedagógico en la calle Guadalquivir de El Forn d'Alcedo, que se suma a otros seis puntos (Ronda Nord, bulevar sur, Ciutadella) con paneles que muestran la velocidad sin multar.",
      fuente: "meteorologiaenred.com",
      url: "https://www.meteorologiaenred.com/el-impacto-de-los-radares-de-trafico-en-las-ciudades-espanolas-ubicacion-sanciones-y-nuevas-tecnologias.html",
      fecha: "2025-07-30",
    },
  ],
  "valladolid": [
    {
      titulo: "La DGT ya ha activado 33 nuevos radares en 2026: consulta las carreteras y kilómetros",
      resumen: "La DGT activó un radar fijo nuevo en la VA-30 (pk 16+160) dentro de los 33 nuevos puntos de control de 2026, ya señalizado en carretera y publicado en la web oficial.",
      fuente: "ADSLZone",
      url: "https://www.adslzone.net/e-movilidad/noticias-en-marcha/dgt-33-nuevos-radares-2026-carreteras-kilometros/",
      fecha: "2026-08-01",
    },
    {
      titulo: "Buenos días Valladolid - Una avenida cortada, el radar de las 28.000 multas y dos fichajes",
      resumen: "El radar fijo de la N-601 km 170, en La Pedraja de Portillo, formuló 28.076 denuncias en 2025, casi cuatro veces más que en 2024, y es el decimonoveno radar más multón de España.",
      fuente: "Buenos Días Valladolid",
      url: "https://www.buenosdiasvalladolid.es/p/buenos-dias-valladolid-c44de381f4cc3115",
      fecha: "2026-07-27",
    },
  ],
  "vitoria": [
    {
      titulo: "Este es el ranking de las carreteras de Álava donde más multa la Ertzaintza",
      resumen: "En 2025 la Ertzaintza impuso 64.013 denuncias de tráfico en Álava, tres de cada cuatro por exceso de velocidad; la AP-68 lidera con 14.561, seguida de la A-1 con 11.318.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/euskadi/2026/04/08/este-es-el-ranking-de-las-carreteras-de-alava-donde-mas-multa-la-ertzaintza-ser-vitoria/",
      fecha: "2026-04-08",
    },
    {
      titulo: "Vitoria renueva sus radares y coloca cuatro nuevos puntos de control",
      resumen: "El Ayuntamiento comprará dos radares multicarril y ocho cabinas para renovar un sistema obsoleto tras dos décadas y crear nuevos controles en Cantábrico, Zadorra-Donostia, Zumabide y Urartea, por 172.000 euros.",
      fuente: "Cadena SER",
      url: "https://cadenaser.com/euskadi/2026/03/27/vitoria-renueva-sus-radares-y-coloca-cuatro-nuevos-puntos-de-control-ser-vitoria/",
      fecha: "2026-03-27",
    },
  ],
  "zamora": [
    {
      titulo: "El Supremo pide al Senado el suplicatorio para juzgar a Baltar (PP) por un delito contra la seguridad vial",
      resumen: "El Supremo pidió al Senado el suplicatorio para juzgar al senador Baltar (PP): un radar lo captó a 215 km/h en la A-52 a la altura de Asturianos (Zamora) en abril de 2023.",
      fuente: "Europa Press",
      url: "https://www.iustel.com/diario_del_derecho/noticia.asp?ref_iustel=1242172",
      fecha: "",
    },
    {
      titulo: "El radar de la A-52 (pk 99) de Zamora, entre los 50 que más multan de España",
      resumen: "El radar de la A-52 (pk 99) en Zamora disparó su actividad hasta 30.301 denuncias en 2025, casi el triple que en 2024, y entra en el top 50 nacional según el informe de AEA.",
      fuente: "AEA",
      url: "https://aeaclub.org/radares-que-mas-multan/",
      fecha: "2026-07-23",
    },
  ],
  "zaragoza": [
    {
      titulo: "La DGT ya ha activado 33 nuevos radares en 2026: consulta las carreteras y kilómetros",
      resumen: "La DGT activó dos radares fijos nuevos en la N-232 (pk 244+220 y 244+945, ambos sentidos) dentro del plan de 33 nuevos cinemómetros de 2026, ya señalizados y publicados en la web de Tráfico.",
      fuente: "ADSLZone",
      url: "https://www.adslzone.net/e-movilidad/noticias-en-marcha/dgt-33-nuevos-radares-2026-carreteras-kilometros/",
      fecha: "2026-08-01",
    },
    {
      titulo: "Los radares más \"multones\" de Aragón",
      resumen: "Según AEA, el radar más multón de Zaragoza en 2024 fue el de la A-2 km 272 con 10.019 denuncias, seguido del N-330 km 508 (8.359) y la A-2 km 297 (8.099).",
      fuente: "AEA (Automovilistas Europeos Asociados)",
      url: "https://aeaclub.org/wp-content/uploads/2025/07/ARAGON.pdf",
      fecha: "",
    },
  ],
};

export const FECHA_VERIFICACION_HISTORIAS = "2026-10-24";
