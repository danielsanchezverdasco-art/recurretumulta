// Lote 10 — Peugeot 3008 Hybrid 145 (ficha técnica de Stellantis, mayo 2025 + Euro NCAP 2025) y Suzuki Swift (Euro NCAP 2024).
import type { MapaEnriquecimiento } from "./tipos";

const ST = "https://www.media.stellantis.com/uploads/pt/attachment/peugeot3008_technicalcaracteristics_may2025-683435d19a807.pdf";
const NC3 = "https://www.euroncap.com/assessments/peugeot/3008/1141/";
const NCS = "https://www.euroncap.com/assessments/suzuki/swift/1036/";

export const LOTE_10: MapaEnriquecimiento = {
  "peugeot-3008-hibrido-145-2026-precio-ficha-tecnica": {
    titulo: "3008 Hybrid 145: cifras de la ficha técnica de Stellantis y nota Euro NCAP",
    parrafos: [
      "La tabla técnica que Stellantis publicó en mayo de 2025 define el Hybrid 145 e-DCS6 como un conjunto de tres cilindros y 1.199 cm³ con inyección directa, un par de 230 Nm desde 1.750 rpm y una potencia de 100 kW (136 CV) a 5.500 vueltas, más un motor eléctrico de 21 kW (28 CV) y 51 Nm. La potencia combinada es de 107 kW (145 CV) y el cambio automático tiene seis marchas. La batería es de iones de litio, de 48 V, 0,43 kWh útiles y 12,1 kg.",
      "Las prestaciones de la misma tabla, medidas con el conductor solo, son 10,2 s hasta 100 km/h, 32,5 s para el kilómetro con salida parada, 6,9 s de 80 a 120 km/h y una velocidad máxima de 201 km/h. El consumo WLTP combinado va de 5,4 a 5,6 l/100 km y las emisiones de 123 a 126 g/km de CO₂. El depósito es de 55 l.",
      "El peso en orden de marcha es de 1.648 kg (1.573 kg de peso en vacío), el máximo autorizado es de 2.080 kg y el remolque con frenos admite 1.000 kg, o 1.200 kg con el gancho de origen opcional. Con el gancho de remolque instalado, la tabla anota 1.649 kg. Los neumáticos de serie de esta versión son 225/55 R19 103 V, con discos de 304 mm delante y 290 mm detrás, y el diámetro de giro es de 10,6 m.",
      "Euro NCAP evaluó el 3008 en 2025 y le dio cuatro estrellas, con estas notas: adultos 80 %, niños 85 %, peatones y ciclistas 79 %, y asistencias a la conducción 62 %. La nota se aplica a la variante Hybrid 145 e-DCS6, aunque el modelo ensayado fue el eléctrico de 73 kWh. El organismo valora que el habitáculo se mantuvo estable, que el airbag del acompañante se puede desconectar y que las protecciones de niños y de golpes laterales fueron muy buenas. Como puntos débiles, cita que el control del desplazamiento en impactos del lado contrario fue marginal, que no hay detección de niños olvidados y que los asientos traseros no tienen detector de ocupantes para el recordatorio del cinturón.",
    ],
    filas: [
      { etiqueta: "Motor térmico", valor: "1.199 cm³, 3 cilindros, inyección directa; 100 kW (136 CV); 230 Nm desde 1.750 rpm; régimen de potencia máxima 5.500 rpm", fuente: "Stellantis Media, características técnicas del Peugeot 3008 (mayo 2025)", url: ST, anio: "2025" },
      { etiqueta: "Motor eléctrico y batería", valor: "21 kW (28 CV), 51 Nm; batería de 48 V y 0,43 kWh útiles (12,1 kg); combinado 107 kW (145 CV)", fuente: "Stellantis Media, características técnicas del Peugeot 3008 (mayo 2025)", url: ST, anio: "2025" },
      { etiqueta: "Prestaciones (solo conductor)", valor: "0–100 km/h en 10,2 s; 1.000 m en 32,5 s; 80–120 km/h en 6,9 s; 201 km/h", fuente: "Stellantis Media, tabla de prestaciones del 3008 Hybrid 145", url: ST, anio: "2025" },
      { etiqueta: "Consumo y emisiones WLTP", valor: "5,4–5,6 l/100 km; 123–126 g/km de CO₂", fuente: "Stellantis Media, tabla de consumos del 3008 Hybrid 145", url: ST, anio: "2025" },
      { etiqueta: "Pesos y remolque", valor: "En orden de marcha 1.648 kg; MMA 2.080 kg; remolque con frenos 1.000 kg (1.200 kg con gancho opcional)", fuente: "Stellantis Media, tabla de pesos del 3008 Hybrid 145", url: ST, anio: "2025" },
      { etiqueta: "Cotas y maletero", valor: "4.542 × 1.895 × 1.641 mm; batalla 2.739 mm; maletero tras la segunda fila 520 dm³ VDA (588 l de agua)", fuente: "Stellantis Media, tabla de arquitectura del 3008", url: ST, anio: "2025" },
      { etiqueta: "Euro NCAP (4 estrellas)", valor: "Adultos 80 %; niños 85 %; usuarios vulnerables 79 %; asistencias 62 %; publicada el 21/05/2025", fuente: "Euro NCAP, evaluación del Peugeot 3008", url: NC3, anio: "2025" },
    ],
  },
  "suzuki-swift-2024-precio-ficha-tecnica": {
    titulo: "Swift: qué midió Euro NCAP en su prueba de 2024",
    parrafos: [
      "Euro NCAP publicó el 10 de julio de 2024 las tres estrellas del Swift, con estas notas: ocupantes adultos 67 %, niños 65 %, peatones y ciclistas 76 %, y apoyo a la conducción 62 %. El modelo ensayado fue el 1.2 gasolina GL+ con tracción delantera y volante a la izquierda, y la nota vale también para la variante 4x4 y para los acabados GL y GLX.",
      "En el impacto frontal desplazado el habitáculo se mantuvo estable y las rodillas y fémures del conductor y del acompañante quedaron bien protegidos. Sin embargo, el organismo calificó de débil la protección del pecho del conductor y de marginal la del acompañante, y apuntó que partes del salpicadero podían ser peligrosas para ocupantes de distinta talla. En el impacto frontal de ancho completo, el pecho del conductor y del pasajero trasero obtuvo calificación marginal.",
      "Los resultados laterales fueron mejores: el ensayo contra poste, más severo, dio máxima puntuación y el golpe lateral con barrera dejó el pecho en nivel adecuado y el resto en bueno. Pero la protección en un golpe del lado contrario fue pobre, porque el Swift no tiene un elemento que evite el choque entre las cabezas de los ocupantes delanteros. En niños, el cuello del dummy de 10 años quedó clasificado como pobre en el impacto frontal, y el pecho del mismo dummy en el lateral.",
      "En la parte de peatones y ciclistas, la protección de la cabeza fue en general buena o adecuada, con resultados pobres en los pilares rígidos del parabrisas. El frenado automático responde a vehículos, peatones, ciclistas y motoristas, con respuesta adecuada ante peatones y motoristas y buena ante ciclistas. No incorpora aviso contra la apertura de puertas sobre ciclistas que se acercan por detrás. El recordatorio del cinturón es de serie delante y detrás, pero Euro NCAP no concedió puntos porque la fila trasera no detecta ocupantes.",
    ],
    filas: [
      { etiqueta: "Euro NCAP (3 estrellas)", valor: "Adultos 67 %; niños 65 %; usuarios vulnerables 76 %; asistencias 62 %", fuente: "Euro NCAP, evaluación del Suzuki Swift 2024", url: NCS, anio: "2024" },
      { etiqueta: "Publicación de la nota", valor: "10 de julio de 2024", fuente: "Ficha del Swift en Euro NCAP: historial de revisiones", url: NCS, anio: "2024" },
      { etiqueta: "Variante ensayada", valor: "1.2 gasolina GL+ 4x2; la nota aplica también al 4x4 y a GL y GLX", fuente: "Euro NCAP, ficha del Swift: variantes cubiertas", url: NCS, anio: "2024" },
      { etiqueta: "Fortalezas", valor: "Poste lateral con máxima puntuación; frenado automático con ciclistas bueno; asientos con buena protección contra latigazo", fuente: "Euro NCAP, veredicto del Suzuki Swift", url: NCS, anio: "2024" },
      { etiqueta: "Puntos débiles", valor: "Pecho del conductor débil en el frontal; golpe del lado contrario pobre; sin detección de niños olvidados", fuente: "Euro NCAP, veredicto del Suzuki Swift", url: NCS, anio: "2024" },
    ],
  },
};
