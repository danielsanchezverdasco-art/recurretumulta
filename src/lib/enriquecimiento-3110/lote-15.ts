// Lote 15 — Škoda Superb (Euro NCAP 2024) y MG 3 (Euro NCAP 2025).
import type { MapaEnriquecimiento } from "./tipos";

const SUP = "https://www.euroncap.com/assessments/skoda/superb/1022/";
const MG3 = "https://www.euroncap.com/assessments/mg/3/1057/";

const SRC1 = { fuente: "Euro NCAP, descripción de asistencias", url: SUP, anio: "2024" };
const SRC2 = { fuente: "Euro NCAP, descripción de ocupantes adultos del MG 3", url: MG3, anio: "2025" };

export const LOTE_15: MapaEnriquecimiento = {
  "skoda-superb-20-tdi-2026-precio-ficha-tecnica": {
    titulo: "Superb TDI: cómo se comportó en los choques de Euro NCAP",
    parrafos: [
      "Euro NCAP concedió cinco estrellas al Superb de 2024, con un 93 % en protección de los ocupantes adultos. Según el organismo, el Superb es gemelo del Volkswagen Passat: las pruebas se hicieron sobre el Volkswagen y la nota vale igual para el Škoda. Entre las variantes que cubre la evaluación figura el 2.0 TDI de tracción delantera, que aparece marcado con asterisco en la tabla de variantes.",
      "En la prueba frontal con barrera deformable, la cabina conservó su estructura y la protección fue buena en todas las zonas críticas, tanto del conductor como del acompañante, con la puntuación completa en los resultados dinámicos. Škoda demostró además que rodillas y fémures reciben la misma protección con ocupantes de distinta talla o sentados en otra posición. En el ensayo de barrera rígida de ancho completo, las zonas críticas del conductor y del pasajero trasero quedaron entre buenas y adecuadas.",
      "En los impactos lateral y contra poste la protección fue buena en todas las zonas y el coche logró el máximo de puntos. El control de la excursión lateral se calificó de adecuado, y el airbag que evita el choque entre ocupantes protegió bien las cabezas delanteras. Los asientos delanteros y los reposacabezas dieron buena protección ante el latigazo cervical, y el Superb incorpora eCall avanzado.",
    ],
    filas: [
      { etiqueta: "Protección de adultos", valor: "93 % de la puntuación posible", fuente: "Euro NCAP, apartado de ocupantes adultos del Škoda Superb", url: SUP, anio: "2024" },
      { etiqueta: "Calificación global", valor: "Cinco estrellas, publicadas el 10 de julio de 2024", fuente: "Euro NCAP, historial de la ficha del Superb", url: SUP, anio: "2024" },
      { etiqueta: "Motor 2.0 TDI en la evaluación", valor: "Figura como 2.0 diésel de tracción delantera (4x2), con asterisco de variante ensayada", fuente: "Euro NCAP, líneas TDI de la tabla del Superb", url: SUP, anio: "2024" },
      { etiqueta: "Coche sobre el que se hicieron los choques", valor: "Volkswagen Passat, gemelo del Superb", fuente: "Euro NCAP, texto introductorio de la valoración", url: SUP, anio: "2024" },
      { etiqueta: "Impacto lateral y contra poste", valor: "Protección buena en todas las zonas críticas; máximo de puntos", fuente: "Euro NCAP, descripción de ocupantes adultos", url: SUP, anio: "2024" },
    ],
  },
  "skoda-superb-20-tsi-2026-precio-ficha-tecnica": {
    titulo: "Superb TSI: niños y usuarios vulnerables según Euro NCAP 2024",
    parrafos: [
      "Dentro de la valoración de cinco estrellas que Euro NCAP publicó para el Superb en julio de 2024, los niños obtuvieron un 87 % y los usuarios vulnerables de la vía un 82 %. Entre las variantes amparadas por la nota figura el 2.0 TSI, con tracción total y con tracción delantera.",
      "En el choque frontal desplazado y en el lateral la protección de los dos maniquíes infantiles fue buena en todas las zonas críticas, con la puntuación máxima. El airbag del acompañante se puede desconectar para instalar una silla a contramarcha, y el conductor recibe información clara sobre su estado. El Superb carece de sistema de detección de niños olvidados, y todas las sillas para las que está diseñado se instalaron correctamente.",
      "Ante un atropello, la cabeza de la persona golpeada quedó protegida de forma mayormente adecuada, con resultados pobres en los montantes rígidos del parabrisas y en la base del cristal. Pelvis y fémur puntuaron al máximo, y rodilla y tibia fueron mayormente buenas. El frenado automático respondió bien ante peatones, rindió al máximo ante ciclistas y casi al máximo en el caso de una puerta abierta ante un ciclista que llega por detrás. Ante motoristas puntuó entero en el frenado y bien en el mantenimiento de carril.",
    ],
    filas: [
      { etiqueta: "Protección de niños", valor: "87 % de la puntuación posible", fuente: "Euro NCAP, apartado de ocupantes infantiles del Škoda Superb", url: SUP, anio: "2024" },
      { etiqueta: "Usuarios vulnerables de la vía", valor: "82 % de la puntuación posible", fuente: "Euro NCAP, apartado de peatones y ciclistas del Superb", url: SUP, anio: "2024" },
      { etiqueta: "Motor 2.0 TSI en la evaluación", valor: "Listado con tracción total (4x4) y con tracción delantera (4x2)", fuente: "Euro NCAP, líneas de gasolina TSI en el cuadro del Superb", url: SUP, anio: "2024" },
      { etiqueta: "Detección de niños olvidados", valor: "No disponible en el Superb", fuente: "Euro NCAP, descripción de ocupantes infantiles", url: SUP, anio: "2024" },
      { etiqueta: "Punto débil en atropellos", valor: "Montantes del parabrisas y base del cristal: resultados pobres", fuente: "Euro NCAP, descripción de usuarios vulnerables", url: SUP, anio: "2024" },
    ],
  },
  "skoda-superb-iv-hibrido-enchufable-2026-precio-ficha-tecnica": {
    titulo: "Superb iV: asistencias a la conducción valoradas por Euro NCAP",
    parrafos: [
      "El Superb de 2024 recibió de Euro NCAP un 80 % en asistencias a la seguridad, dentro de una calificación de cinco estrellas fechada el 10 de julio de 2024. La tabla de variantes cubiertas recoge el híbrido enchufable 1.5 TSI iV de tracción delantera, tanto en carrocería de cinco puertas como en cinco puertas con portón.",
      "El frenado automático de emergencia funcionó bien ante otros vehículos y evitó la colisión en la mayoría de los escenarios. El aviso de cinturón es de serie en las plazas delanteras y traseras, y un sistema indirecto de vigilancia del conductor detecta la fatiga. El asistente de carril corrige suavemente la trayectoria cuando el coche se sale y también interviene en algunas situaciones más críticas, y el asistente de velocidad identifica el límite local; el conductor puede permitir que el limitador se fije solo.",
      "Euro NCAP señala además que el eCall avanzado avisa a los servicios de emergencia tras un accidente y que existe un sistema contra impactos secundarios. Para el resto de la nota, el organismo se basa en los ensayos hechos sobre el Volkswagen Passat, gemelo del Superb.",
    ],
    filas: [
      { etiqueta: "Asistencias a la seguridad", valor: "80 % de la puntuación posible", fuente: "Euro NCAP, apartado de asistencias del Škoda Superb", url: SUP, anio: "2024" },
      { etiqueta: "Fecha de la calificación", valor: "10 de julio de 2024, cinco estrellas", fuente: "Euro NCAP, revisiones anuales del Superb", url: SUP, anio: "2024" },
      { etiqueta: "Híbrido enchufable en la evaluación", valor: "1.5 TSI iV con tracción delantera, listado en dos carrocerías", fuente: "Euro NCAP, renglón del PHEV en el listado del Superb", url: SUP, anio: "2024" },
      { etiqueta: "Vigilancia del conductor", valor: "Indirecta, de serie; detecta fatiga", ...SRC1 },
      { etiqueta: "Aviso de cinturón", valor: "De serie en plazas delanteras y traseras", ...SRC1 },
    ],
  },
  "mg3-gasolina-2025-precio-ficha-tecnica": {
    titulo: "MG 3: el fallo del asiento y la retirada, según Euro NCAP 2025",
    parrafos: [
      "El MG 3 pasó por los ensayos de Euro NCAP en 2025 con cuatro estrellas, y un 74 % en protección de adultos. Publicó el resultado el 10 de septiembre de 2025. El coche ensayado fue el 1.5 híbrido (MG 3 Hybrid), y la tabla de variantes incluye también el 1.5 de gasolina GS62.",
      "En el choque frontal desplazado, el ajuste derecho del asiento del conductor se rompió y el asiento se torció a mitad del impacto. Eso aumentó las cargas sobre la pierna derecha del maniquí y la protección de esa zona se calificó de pobre; además, la cabeza del conductor tocó fondo contra el volante a través del airbag (protección adecuada). Por ese fallo, MG no pudo demostrar la protección de ocupantes de distinta talla.",
      "El organismo explica que, tras la prueba, MG modificó el mecanismo del asiento en producción y que los coches ya vendidos son objeto de una retirada para instalar piezas que eviten ese fallo. Euro NCAP confirma que la corrección es eficaz y anima a los propietarios a hacer que se la instalen cuando MG los contacte. Si tienes un MG 3, conviene confirmar con el concesionario que la retirada se ha hecho.",
    ],
    filas: [
      { etiqueta: "Protección de adultos", valor: "74 % de la puntuación posible; cuatro estrellas globales", fuente: "Euro NCAP, apartado de ocupantes adultos del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Fecha de publicación", valor: "10 de septiembre de 2025", fuente: "Euro NCAP, historial de la ficha del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Variante ensayada", valor: "1.5 híbrido GS62 H (MG 3 Hybrid), 4x2; la tabla lista también el 1.5 de gasolina GS62", fuente: "Euro NCAP, tabla de variantes del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Fallo en el choque frontal", valor: "Rotura del ajuste derecho del asiento del conductor; pierna derecha con protección pobre", ...SRC2 },
      { etiqueta: "Medida correctora", valor: "Asiento modificado en producción y retirada de los coches ya vendidos", ...SRC2 },
    ],
  },
  "mg-3-2025-precio-ficha-tecnica": {
    titulo: "MG 3: niños, atropellos y asistencias en la valoración de Euro NCAP",
    parrafos: [
      "En la valoración de cuatro estrellas de Euro NCAP de septiembre de 2025, el MG 3 sacó un 73 % en niños, un 81 % en usuarios vulnerables y un 69 % en asistencias a la seguridad. El ensayo se hizo con el híbrido de 1.5 litros, y el informe lista también la versión de gasolina de 1.5 litros.",
      "En el impacto lateral, el maniquí de 10 años sentado en el lado golpeado hizo que el airbag tocase fondo contra el montante trasero, con lesiones altas en cabeza y pecho, por lo que no sumó puntos en ese ensayo. En el resto de zonas, la protección infantil osciló entre marginal y buena. En el choque de ancho completo, el avance de la cabeza del pasajero trasero superó el umbral y se calificó de pobre, y el pecho trasero fue marginal.",
      "En peatones y ciclistas, el frenado automático respondió bien, aunque no actúa ante personas que están detrás del coche, y carece de protección contra la apertura de puertas sobre un ciclista que viene por detrás. Ante motoristas, la respuesta fue buena. El MG 3 lleva vigilancia directa del conductor que detecta cansancio pero no distracción.",
    ],
    filas: [
      { etiqueta: "Protección de niños", valor: "73 % de la puntuación posible", fuente: "Euro NCAP, apartado de ocupantes infantiles del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Usuarios vulnerables", valor: "81 % de la puntuación posible", fuente: "Euro NCAP, valoración de peatones y ciclistas, MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Asistencias a la seguridad", valor: "69 % de la puntuación posible", fuente: "Euro NCAP, apartado de asistencias del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Maniquí de 10 años en el lateral", valor: "Airbag contra el montante trasero; cero puntos en ese ensayo", fuente: "Euro NCAP, descripción de ocupantes infantiles del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Pasajero trasero en choque frontal", valor: "Cabeza: protección pobre; pecho: marginal", fuente: "Euro NCAP, texto sobre el pasajero trasero del MG 3", url: MG3, anio: "2025" },
      { etiqueta: "Vigilancia del conductor", valor: "Directa, de serie; detecta fatiga pero no distracción", fuente: "Euro NCAP, descripción de asistencias del MG 3", url: MG3, anio: "2025" },
    ],
  },
};
