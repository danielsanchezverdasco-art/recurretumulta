// Lote 17 — Polestar 2 (Euro NCAP 2021, con revisiones anuales hasta 2023).
import type { MapaEnriquecimiento } from "./tipos";

const P2 = "https://www.euroncap.com/assessments/polestar/2/0855/";

const SRC1 = { fuente: "Euro NCAP, variantes del Polestar 2 (tabla)", url: P2, anio: "2021" };

export const LOTE_17: MapaEnriquecimiento = {
  "polestar-2-precio-ficha-tecnica": {
    titulo: "Polestar 2: los cinco estrellas de Euro NCAP y qué cambió después",
    parrafos: [
      "Euro NCAP publicó el 3 de marzo de 2021 la valoración del Polestar 2: cinco estrellas, con un 93 % en adultos, un 89 % en niños, un 80 % en usuarios vulnerables y un 83 % en asistencias a la seguridad. La unidad que pasó por el laboratorio fue el Long Range de doble motor y tracción total. La ficha añade que el 22 de febrero de 2022 se incorporó otra variante y que el 23 de mayo de 2023 hubo una revisión anual.",
      "Los modelos de un solo motor, Long Range y Standard Range, ambos de tracción trasera, figuran en la lista de variantes cubiertas junto con el ensayado. Es la información que sirve para saber si tu versión entra en la nota: En la lista, solo el de doble motor figura como ensayado; para los de un solo motor la ficha no indica cuál fue el criterio de inclusión.",
      "Un detalle de la nota: el detector de ángulo muerto (BLIS) era de serie en el lanzamiento, pero pasó a formar parte del Pilot Pack opcional, por lo que no cuenta para la puntuación. Eso supone una pequeña diferencia en asistencias, sin cambio en las estrellas. En cuanto a los choques, el habitáculo se mantuvo estable en el frontal desplazado, aunque el organismo aplicó una penalización por ser moderadamente agresivo con el otro coche.",
      "En el impacto lateral todas las zonas críticas puntuaron como buenas y, incluso en el poste, al menos adecuada. El Polestar 2 lleva airbag central contra el choque entre ocupantes, que funcionó bien. Los niños puntuaron al máximo, el sistema de frenada multicolisión actúa tras un impacto y el eCall avanzado envía la ubicación a los servicios de emergencia.",
    ],
    filas: [
      { etiqueta: "Calificación global", valor: "Cinco estrellas; publicada el 3 de marzo de 2021", fuente: "Euro NCAP, ficha del Polestar 2", url: P2, anio: "2021" },
      { etiqueta: "Porcentajes por área", valor: "Adultos 93 %; niños 89 %; usuarios vulnerables 80 %; asistencias 83 %", fuente: "Euro NCAP, desglose del Polestar 2", url: P2, anio: "2021" },
      { etiqueta: "Variante ensayada", valor: "Long Range de doble motor eléctrico, 4x4", ...SRC1 },
      { etiqueta: "Variantes cubiertas de un motor", valor: "Long Range y Standard Range de un solo motor eléctrico, ambas 4x2", ...SRC1 },
      { etiqueta: "Revisiones de la ficha", valor: "22/02/2022: variante añadida; 23/05/2023: revisión anual", fuente: "Euro NCAP, historial del Polestar 2", url: P2, anio: "2023" },
      { etiqueta: "Detector de ángulo muerto", valor: "De serie en el lanzamiento; hoy dentro del Pilot Pack opcional y sin puntuar", fuente: "Euro NCAP, nota previa del Polestar 2", url: P2, anio: "2021" },
    ],
  },
};
