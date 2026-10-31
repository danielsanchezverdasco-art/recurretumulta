// Lote 23 — Santa Fe, Taigo, Jazz Crosstar, Clase E 200, Sandero Stepway TCe 90, Kona Hybrid 138, Compass e-Hybrid 145 (Euro NCAP).
import type { MapaEnriquecimiento } from "./tipos";

const SANTAFE = "https://www.euroncap.com/assessments/hyundai/santa+fe/1078/";
const TAIGO = "https://www.euroncap.com/assessments/volkswagen/taigo/0878/";
const JAZZ = "https://www.euroncap.com/assessments/honda/jazz/0830/";
const CLASEE = "https://www.euroncap.com/assessments/mercedes-benz/e-class/1064/";
const SANDERO = "https://www.euroncap.com/assessments/dacia/sandero+stepway/0861/";
const KONA = "https://www.euroncap.com/assessments/hyundai/kona/1051/";
const COMPASS = "https://www.euroncap.com/assessments/jeep/compass/1218/";

export const LOTE_23: MapaEnriquecimiento = {
  "hyundai-santa-fe-2024-precio-ficha-tecnica": {
    titulo: "Hyundai Santa Fe híbrido: cuatro estrellas de Euro NCAP a finales de 2024",
    parrafos: [
      "El Santa Fe de nueva generación se valoró en Euro NCAP el 4 de diciembre de 2024 y obtuvo cuatro estrellas, con 84 % en protección de adultos, 88 % en la de niños, 70 % en usuarios vulnerables y 69 % en asistencias. El ejemplar del ensayo fue un Santa Fe HEV AWD de volante a la izquierda y 2.050 kg de tara.",
      "La lista de variantes recoge tres filas con una descripción genérica: Hybrid de tracción delantera, Hybrid de tracción total y Plug-in Hybrid de tracción total. El organismo no detalla en ellas la potencia, así que los 239 CV de la ficha no se pueden comprobar en esa tabla.",
      "Dos detalles del informe: el pecho del conductor puntuó marginal en el frontal y el pecho en el poste lateral también, mientras que en la barrera lateral se lograron todos los puntos. Hay además una contramedida contra lesiones entre ocupantes en un impacto desde el lado opuesto.",
    ],
    filas: [
      { etiqueta: "Estrellas del Santa Fe", valor: "Cuatro; resultado del 4 de diciembre de 2024", fuente: "Ficha de Hyundai Santa Fe en Euro NCAP (diciembre de 2024)", url: SANTAFE, anio: "2024" },
      { etiqueta: "Porcentajes del Santa Fe", valor: "84 adultos; 88 niños; 70 vulnerables; 69 asistencias", fuente: "Euro NCAP, desglose de áreas del Santa Fe", url: SANTAFE, anio: "2024" },
      { etiqueta: "Santa Fe del ensayo", valor: "HEV AWD, volante a la izquierda; 2.050 kg", fuente: "Euro NCAP, coche ensayado del Santa Fe", url: SANTAFE, anio: "2024" },
      { etiqueta: "Filas del Santa Fe cubiertas", valor: "Hybrid 4x2; Hybrid 4x4; Plug-in Hybrid 4x4", fuente: "Euro NCAP, variantes del Santa Fe con rótulo genérico", url: SANTAFE, anio: "2024" },
    ],
  },
  "volkswagen-taigo-2024-precio-ficha-tecnica": {
    titulo: "Volkswagen Taigo: cinco estrellas de Euro NCAP heredadas del Polo",
    parrafos: [
      "El Taigo recibió cinco estrellas de Euro NCAP el 2 de marzo de 2022, con un 94 % en adultos, un 84 % en niños, un 71 % en vulnerables y un 70 % en asistencias. El organismo explica que el Taigo es estructuralmente idéntico al Polo y comparte su equipamiento de seguridad, de modo que hizo pruebas adicionales solo donde podía haber diferencias y tomó el resto de la evaluación del Polo de 2022.",
      "El coche que figura como ensayado es un VW Polo 1.0 TSI Life de volante a la izquierda, con 1.216 kg en vacío. La lista del Taigo tiene dos filas, ambas de tracción delantera y carrocería de cinco puertas: 1.0 TSI y 1.5 TSI.",
      "Entre los detalles del informe destacan que el control del desplazamiento hacia el otro costado fue adecuado, que existe una contramedida para impactos entre ocupantes y que, en el lateral con barrera, la cabeza del maniquí de diez años se calificó como marginal.",
    ],
    filas: [
      { etiqueta: "Nota del Taigo", valor: "Cinco estrellas desde el 2 de marzo de 2022", fuente: "Ficha de Volkswagen Taigo en Euro NCAP (marzo de 2022)", url: TAIGO, anio: "2022" },
      { etiqueta: "Valores del Taigo por área", valor: "Adultos 94; niños 84; vulnerables 71; asistencias 70 (%)", fuente: "Euro NCAP, cuadro de puntuación del Taigo", url: TAIGO, anio: "2022" },
      { etiqueta: "Coche base del Taigo", valor: "Polo 1.0 TSI Life, volante a la izquierda; 1.216 kg", fuente: "Euro NCAP, modelo de pruebas citado en el Taigo", url: TAIGO, anio: "2022" },
      { etiqueta: "Filas del Taigo", valor: "1.0 TSI y 1.5 TSI, de gasolina, 4x2", fuente: "Euro NCAP, variantes cubiertas del Taigo", url: TAIGO, anio: "2022" },
    ],
  },
  "honda-jazz-crosstar-2026-precio-ficha-tecnica": {
    titulo: "Honda Jazz Crosstar: cinco estrellas de 2020 que Euro NCAP cita por su nombre",
    parrafos: [
      "El Jazz de la generación actual se valoró en Euro NCAP el 12 de noviembre de 2020 con cinco estrellas: 87 % en adultos, 83 % en niños, 80 % en usuarios vulnerables y 76 % en asistencias. Hubo revisiones anuales el 12 de noviembre de 2021 y 2022. Con los seis años de vigencia que da el organismo, esta nota termina a finales de 2026.",
      "La lista incluye la fila 1.5 litre hybrid, Crosstar, de tracción delantera, junto a otra con los acabados SE, SR y EX; el coche ensayado fue un Jazz 1.5 Hybrid Elegance con 1.246 kg y volante a la izquierda.",
      "En el informe, el pecho del conductor se calificó como débil en el frontal desplazado y el control del desplazamiento en un golpe por el lado contrario como marginal, aunque el Jazz lleva un airbag central que funcionó bien. Una sillita infantil no pudo fijarse con estabilidad en la plaza central trasera.",
    ],
    filas: [
      { etiqueta: "Estrellas del Jazz", valor: "Cinco; ficha del 12 de noviembre de 2020", fuente: "Ficha de Honda Jazz en Euro NCAP (noviembre de 2020)", url: JAZZ, anio: "2020" },
      { etiqueta: "Notas parciales del Jazz", valor: "87 adultos; 83 niños; 80 vulnerables; 76 asistencias", fuente: "Euro NCAP, áreas puntuadas del Jazz", url: JAZZ, anio: "2020" },
      { etiqueta: "Jazz ensayado", valor: "1.5 Hybrid Elegance, volante a la izquierda; 1.246 kg", fuente: "Euro NCAP, unidad de pruebas del Jazz", url: JAZZ, anio: "2020" },
      { etiqueta: "Fila del Crosstar", valor: "1.5 litre hybrid, Crosstar, 4x2", fuente: "Euro NCAP, variantes del Jazz con nombre Crosstar", url: JAZZ, anio: "2020" },
      { etiqueta: "Revisiones del Jazz", valor: "12 de noviembre de 2021 y 12 de noviembre de 2022", fuente: "Euro NCAP, historial anual del Jazz", url: JAZZ, anio: "2022" },
    ],
  },
  "mercedes-benz-clase-e-200-2025-precio-ficha-tecnica": {
    titulo: "Clase E 200 de Mercedes: cinco estrellas de Euro NCAP, ensayo con el E 300 de",
    parrafos: [
      "Euro NCAP valoró el Clase E en julio de 2024 (día 10) con cinco estrellas: 92 % en adultos, 90 % en niños, 84 % en usuarios vulnerables y 87 % en asistencias. El coche ensayado fue un Mercedes-Benz E 300 de, diésel híbrido enchufable, con 2.255 kg en vacío.",
      "La lista de variantes incluye al E 200 de gasolina en berlina y en la variante de cinco puertas, ambas 4x2, y también con 4MATIC. Entre los hallazgos, en el choque de ancho completo la protección fue buena para el conductor y buena o adecuada para el pasajero trasero, y el airbag del acompañante se desactiva solo cuando se coloca una sillita.",
      "El Clase E incorpora un sistema indirecto que avisa si se ha dejado a un niño en el coche y en los dos laterales, barrera y poste, logró la puntuación máxima.",
    ],
    filas: [
      { etiqueta: "Valoración del Clase E", valor: "Cinco estrellas; fecha 2024-07-10", fuente: "Ficha de Mercedes-Benz E-Class en Euro NCAP (julio de 2024)", url: CLASEE, anio: "2024" },
      { etiqueta: "Áreas del Clase E", valor: "92 adultos; 90 niños; 84 vulnerables; 87 asistencias (%)", fuente: "Euro NCAP, resultados por áreas del E-Class", url: CLASEE, anio: "2024" },
      { etiqueta: "Clase E de las pruebas", valor: "E 300 de, 2.255 kg", fuente: "Euro NCAP, vehículo ensayado del E-Class", url: CLASEE, anio: "2024" },
      { etiqueta: "Filas del E 200", valor: "2.0 petrol E 200: berlina y cinco puertas, 4x2; con 4MATIC, 4x4", fuente: "Euro NCAP, variantes del E-Class con gasolina", url: CLASEE, anio: "2024" },
    ],
  },
  "dacia-sandero-stepway-tce-90-2026-precio-ficha-tecnica": {
    titulo: "Sandero Stepway TCe 90 de Dacia: dos estrellas de Euro NCAP en 2021",
    parrafos: [
      "Euro NCAP publicó el 14 de abril de 2021 la valoración del Sandero Stepway: dos estrellas, con 70 % en adultos, 72 % en niños, 41 % en usuarios vulnerables y 42 % en asistencias. El coche ensayado fue un Sandero Stepway 1.0 TCe de volante a la izquierda, con 1.111 kg en vacío. Con los seis años de vigencia, la nota llega hasta finales de 2027.",
      "La ficha oficial no despliega lista de variantes, de modo que no consta qué potencia concreta tenía ese 1.0 TCe y no se puede afirmar que sea el de 91 CV de esta página.",
      "El informe anota estructuras del salpicadero que degradaron la protección de las rodillas a marginal, pecho marginal en los dos ocupantes delanteros, control pobre en un golpe por el lado contrario y ausencia de un airbag central para ese caso. Para el maniquí de diez años, el pecho y el cuello se calificaron como débiles en el frontal, y una sillita de espalda a la marcha a tamaño completo se dio por fallida porque el manual de Dacia indica que el coche no puede alojarla.",
    ],
    filas: [
      { etiqueta: "Estrellas del Sandero Stepway", valor: "Dos; fecha de la ficha 14 de abril de 2021", fuente: "Ficha de Dacia Sandero Stepway en Euro NCAP (abril de 2021)", url: SANDERO, anio: "2021" },
      { etiqueta: "Puntos del Sandero Stepway", valor: "70 adultos; 72 niños; 41 vulnerables; 42 asistencias (%)", fuente: "Euro NCAP, desglose del Sandero Stepway", url: SANDERO, anio: "2021" },
      { etiqueta: "Stepway ensayado", valor: "1.0 TCe, volante a la izquierda; 1.111 kg", fuente: "Euro NCAP, modelo ensayado del Sandero Stepway", url: SANDERO, anio: "2021" },
    ],
  },
  "hyundai-kona-hybrid-138": {
    titulo: "Hyundai Kona Hybrid: lo que Euro NCAP dijo de peatones, ciclistas y niños",
    parrafos: [
      "Esta ficha mira la otra mitad de la nota del Kona, valorado el 6 de diciembre de 2023 con cuatro estrellas. En el área de usuarios vulnerables sacó un 64 %: la cabeza de un peatón o ciclista golpeado quedó en general bien o adecuadamente protegida, con zonas pobres en la base del parabrisas y en los montantes rígidos, y la pelvis casi sin puntos.",
      "El frenado automático del Kona respondió adecuadamente a los peatones, bien a casi todas las pruebas con ciclistas, salvo la apertura de puertas y el giro cruzando la trayectoria de la bici, y obtuvo todos los puntos con motoristas. En la parte infantil, con un 83 %, solo el cuello del maniquí de diez años resultó débil en el frontal.",
      "El modelo aparece en la lista con el rótulo KONA Hybrid, mecánica 1.6 híbrida de gasolina y tracción delantera, y dispone de detección indirecta de niño olvidado. El coche ensayado, sin embargo, fue un Kona GLS eléctrico.",
    ],
    filas: [
      { etiqueta: "Nota de vulnerables del Kona Hybrid", valor: "64 %, dentro de las cuatro estrellas de 2023", fuente: "Euro NCAP, capítulo de vulnerables del KONA", url: KONA, anio: "2023" },
      { etiqueta: "Nota infantil del Kona Hybrid", valor: "83 %; cuello del maniquí de 10 años, débil", fuente: "Euro NCAP, apartado de niños del KONA", url: KONA, anio: "2023" },
      { etiqueta: "Fila del Kona Hybrid", valor: "Rótulo KONA Hybrid; mecánica híbrida 1.6; delantera", fuente: "Euro NCAP, variantes con mecánica híbrida del KONA", url: KONA, anio: "2023" },
      { etiqueta: "Detector de niño olvidado del Kona", valor: "Sistema indirecto, de serie en lo ensayado", fuente: "Euro NCAP, equipamiento infantil del KONA", url: KONA, anio: "2023" },
    ],
  },
  "jeep-compass-e-hybrid-145-2026-precio-ficha-tecnica": {
    titulo: "Compass e-Hybrid 145 de Jeep: cuatro estrellas de Euro NCAP, ensayo con el eléctrico",
    parrafos: [
      "El Compass se valoró en Euro NCAP el 10 de diciembre de 2025 con cuatro estrellas: 80 % en adultos, 85 % en niños, 74 % en usuarios vulnerables y 66 % en asistencias. Se ensayó el Compass eléctrico de 74 kWh, tracción delantera, acabado Altitude, con 2.115 kg y volante a la izquierda.",
      "La lista contiene la fila MHEV 145 FWD, de tracción delantera, que corresponde a la microhibridación de 145 CV de esta ficha, además del PHEV 195 y dos eléctricos de 96 kWh. El 145 solo figura en el nombre de la fila: la tabla no da potencia en CV ni en kW.",
      "El informe anota un control marginal del desplazamiento en un golpe por el costado contrario y la falta de contramedida entre ocupantes. El Compass tampoco tiene detector de niños olvidados, y su frenado automático rindió solo de forma marginal ante peatones y no protege a quien esté detrás del coche.",
    ],
    filas: [
      { etiqueta: "Estrellas del Compass", valor: "Cuatro; resultado del 10 de diciembre de 2025", fuente: "Ficha de Jeep Compass en Euro NCAP (diciembre de 2025)", url: COMPASS, anio: "2025" },
      { etiqueta: "Puntuaciones del Compass", valor: "80 adultos; 85 niños; 74 vulnerables; 66 asistencias", fuente: "Euro NCAP, áreas del Compass", url: COMPASS, anio: "2025" },
      { etiqueta: "Compass probado", valor: "Eléctrico 74 kWh FWD Altitude; 2.115 kg", fuente: "Euro NCAP, modelo de ensayo del Compass", url: COMPASS, anio: "2025" },
      { etiqueta: "Fila del e-Hybrid 145", valor: "MHEV 145 FWD, 4x2", fuente: "Euro NCAP, variantes cubiertas del Compass", url: COMPASS, anio: "2025" },
    ],
  },
};
