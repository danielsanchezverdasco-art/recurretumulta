// Lote 16 — Renault Rafale (Euro NCAP, publicada en 2024) y Opel Grandland (Euro NCAP 2025).
import type { MapaEnriquecimiento } from "./tipos";

const RAF = "https://www.euroncap.com/assessments/renault/rafale/0943pm/";
const GRA = "https://www.euroncap.com/assessments/opel-vauxhall/grandland/1196/";

export const LOTE_16: MapaEnriquecimiento = {
  "renault-rafale-2024-precio-ficha-tecnica": {
    titulo: "Rafale: la evaluación de seguridad de Euro NCAP, punto por punto",
    parrafos: [
      "Euro NCAP asigna al Renault Rafale cinco estrellas, con estos porcentajes: adultos 87 %, niños 83 %, usuarios vulnerables 69 % y asistencias a la seguridad 87 %. La ficha del organismo lleva fecha de publicación del 10 de julio de 2024 y se rige por el protocolo de 2022. El coche ensayado fue el 1.2 Tce E-Tech 200 híbrido de tracción delantera, y la tabla de variantes añade el 1.2 Tce E-Tech 230 híbrido enchufable de tracción total.",
      "En el ensayo frontal contra barrera deformable la cabina aguantó sin deformarse y las rodillas y los fémures salieron bien parados, pero el pecho del conductor se calificó de marginal y el análisis del salpicadero halló zonas que podrían lesionar más a ocupantes de otra talla. En el ensayo contra poste, el pecho también fue marginal, un resultado peor que el del Austral que no afecta a la nota global. El Rafale lleva airbag central contra el choque entre cabezas delanteras, que funcionó bien en la prueba.",
      "Con los niños, el Rafale dio protección buena o adecuada en las zonas críticas de los maniquíes de 6 y 10 años. El manual impide usar sillas universales en la plaza trasera central. En atropellos, la cabeza quedó bien protegida en general, con puntos débiles en la base del parabrisas y en sus montantes rígidos, y la protección de la pelvis fue desigual.",
      "El frenado automático detecta peatones, ciclistas y otros vehículos, y logró evitar o suavizar el golpe en casi todas las situaciones de prueba. El aviso de cinturón con detección de ocupante es de serie en todas las plazas, y el vigilante de conducción analiza los movimientos del volante para reconocer fatiga o distracción.",
    ],
    filas: [
      { etiqueta: "Calificación global", valor: "Cinco estrellas; protocolo de 2022; publicada el 10 de julio de 2024", fuente: "Ficha del Renault Rafale en Euro NCAP", url: RAF, anio: "2024" },
      { etiqueta: "Adultos y niños", valor: "Adultos 87 %; niños 83 %", fuente: "Euro NCAP, ocupantes del Renault Rafale", url: RAF, anio: "2024" },
      { etiqueta: "Peatones, ciclistas y asistencias", valor: "Usuarios vulnerables 69 %; asistencias 87 %", fuente: "Euro NCAP, apartados de usuarios vulnerables y asistencias del Rafale", url: RAF, anio: "2024" },
      { etiqueta: "Variante ensayada", valor: "1.2 Tce E-Tech 200 híbrido, 4x2 (asterisco en la tabla)", fuente: "Euro NCAP, tabla de variantes del Rafale", url: RAF, anio: "2024" },
      { etiqueta: "Variante cubierta", valor: "1.2 Tce E-Tech 230 híbrido enchufable, 4x4", fuente: "Euro NCAP, tabla de variantes del Rafale", url: RAF, anio: "2024" },
      { etiqueta: "Pecho del conductor", valor: "Marginal en el frontal desplazado y en el poste lateral", fuente: "Euro NCAP, descripción de ocupantes adultos del Rafale", url: RAF, anio: "2024" },
      { etiqueta: "Plaza trasera central", valor: "El manual excluye las sillas infantiles universales", fuente: "Euro NCAP, descripción de ocupantes infantiles del Rafale", url: RAF, anio: "2024" },
    ],
  },
  "opel-grandland-2024-precio-ficha-tecnica": {
    titulo: "Grandland: lo que dice Euro NCAP de su seguridad (cuatro estrellas)",
    parrafos: [
      "Euro NCAP publicó el 21 de mayo de 2025 el resultado del Opel Grandland: cuatro estrellas, con un 80 % en adultos, un 85 % en niños, un 79 % en usuarios vulnerables y un 62 % en asistencias. El organismo aclara que el Grandland es «gemelo corporativo» del Peugeot 3008, con idéntico equipamiento de seguridad, de modo que la nota se basa en la evaluación del Peugeot.",
      "La variante ensayada fue el híbrido enchufable Plug-in Hybrid 195 e-DSC7 de tracción delantera. La lista de variantes cubiertas incluye el Hybrid 145 e-DSC6, tres eléctricos (73 kWh con 325 de potencia, 97 kWh con 230 y 73 kWh con 210) y el propio PHEV. El Hybrid 145 de la lista no coincide con los 136 CV que figuran en la ficha de arriba, así que conviene comprobar a cuál se refiere cada dato.",
      "En el choque frontal y en los laterales la protección fue buena, con puntuación máxima en el impacto lateral y contra poste. Los dos maniquíes infantiles recibieron la máxima puntuación. A cambio, el Grandland no incorpora el airbag que evita golpes entre ocupantes en un impacto lateral, y la contención lateral se calificó de marginal. Tampoco tiene detección de niños olvidados.",
      "En peatones, el frenado automático dio una respuesta apenas adecuada, mientras que ante ciclistas y motoristas funcionó bien. La cabeza de una persona atropellada quedó bien o suficientemente protegida, salvo en los montantes rígidos y en los bordes del parabrisas.",
    ],
    filas: [
      { etiqueta: "Calificación y fecha", valor: "Cuatro estrellas; publicada el 21 de mayo de 2025", fuente: "Euro NCAP, ficha del Opel/Vauxhall Grandland", url: GRA, anio: "2025" },
      { etiqueta: "Porcentajes por área", valor: "80 % para adultos, 85 % para niños, 79 % para peatones y ciclistas, 62 % para asistencias", fuente: "Euro NCAP, desglose del Grandland", url: GRA, anio: "2025" },
      { etiqueta: "Modelo base de la nota", valor: "Peugeot 3008, gemelo corporativo con equipamiento de seguridad idéntico", fuente: "Euro NCAP, texto introductorio del Grandland", url: GRA, anio: "2025" },
      { etiqueta: "Variante ensayada", valor: "Plug-in Hybrid 195 e-DSC7, 4x2", fuente: "Euro NCAP, tabla de variantes del Grandland", url: GRA, anio: "2025" },
      { etiqueta: "Otras variantes cubiertas", valor: "Hybrid 145 e-DSC6; Electric 73 kWh 325 (4x4); Electric 97 kWh 230; Electric 73 kWh 210", fuente: "Euro NCAP, tabla de variantes del Grandland", url: GRA, anio: "2025" },
      { etiqueta: "Airbag entre ocupantes delanteros", valor: "No disponible; contención lateral marginal", fuente: "Euro NCAP, descripción de ocupantes adultos del Grandland", url: GRA, anio: "2025" },
    ],
  },
};
