// Lote 11 — Volkswagen Tiguan (Euro NCAP 2024).
import type { MapaEnriquecimiento } from "./tipos";

const NCT = "https://www.euroncap.com/assessments/volkswagen/tiguan/1033/";

export const LOTE_11: MapaEnriquecimiento = {
  "volkswagen-tiguan-20-tsi-2026-precio-ficha-tecnica": {
    titulo: "Tiguan: resultados detallados de la prueba Euro NCAP de 2024",
    parrafos: [
      "Euro NCAP publicó el 29 de mayo de 2024 las cinco estrellas de la nueva generación del Tiguan: un 83 % en protección de adultos, un 88 % en niños, un 84 % en usuarios vulnerables y un 78 % en asistencias a la seguridad. El coche ensayado fue el 2.0 TDI de tracción delantera, y la lista de variantes cubiertas incluye el 2.0 TFSI de tracción total, además de los 1.5 eTSI, 1.5 eHybrid y 2.0 TDI 4Motion.",
      "En el choque frontal desplazado el habitáculo permaneció estable y las rodillas y los fémures quedaron bien protegidos. El organismo definió al Tiguan como un rival agresivo para el otro coche en una colisión frontal. En el ensayo de ancho completo, el pecho del pasajero trasero fue marginal y la pelvis mostró «submarining», un deslizamiento bajo el cinturón que penaliza el abdomen, por lo que esa zona se calificó como pobre.",
      "En el golpe lateral con barrera, los resultados fueron buenos, pero la inspección posterior halló un desgarro de unos 30 mm en el airbag de cortina, y la protección de la cabeza se rebajó a adecuada. Para el impacto del lado contrario, el asiento del conductor lleva un airbag central que evita el choque entre cabezas. Los niños recibieron máxima puntuación, y el coche incorpora un sistema indirecto de detección de menores olvidados.",
      "En peatones y ciclistas, el frenado automático rindió de forma adecuada ante peatones, casi perfecta ante ciclistas y buena ante motoristas. El sistema también contempla el caso de una puerta que se abre ante un ciclista que se acerca desde atrás. Los avisos de cinturón de serie cubren las plazas de ambas filas, y la vigilancia del conductor detecta cansancio por medios indirectos.",
    ],
    filas: [
      { etiqueta: "Euro NCAP (5 estrellas)", valor: "Adultos 83 %; niños 88 %; usuarios vulnerables 84 %; asistencias 78 %", fuente: "Euro NCAP, evaluación del Volkswagen Tiguan 2024", url: NCT, anio: "2024" },
      { etiqueta: "Fecha de publicación", valor: "29 de mayo de 2024", fuente: "Euro NCAP, ficha del Tiguan: historial de revisiones", url: NCT, anio: "2024" },
      { etiqueta: "Variante ensayada y cobertura", valor: "2.0 TDI 4x2 ensayado; vale también para 1.5 eTSI, 1.5 eHybrid, 2.0 TDI 4Motion y 2.0 TFSI 4x4", fuente: "Euro NCAP, ficha del Tiguan: variantes cubiertas", url: NCT, anio: "2024" },
      { etiqueta: "Puntos fuertes", valor: "Niños con máxima puntuación; airbag central entre asientos delanteros; frenado automático casi perfecto ante ciclistas", fuente: "Euro NCAP, veredicto del Volkswagen Tiguan", url: NCT, anio: "2024" },
      { etiqueta: "Puntos mejorables", valor: "Pelvis trasera con «submarining» (pobre); pecho trasero marginal; desgarro de 30 mm en el airbag de cortina", fuente: "Euro NCAP, veredicto del Volkswagen Tiguan", url: NCT, anio: "2024" },
    ],
  },
};
