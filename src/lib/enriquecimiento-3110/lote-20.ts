// Lote 20 — Hyundai Kona (Euro NCAP 2023), Toyota Corolla Cross (Euro NCAP 2022) y Dacia Spring (Euro NCAP 2021).
import type { MapaEnriquecimiento } from "./tipos";

const KONA = "https://www.euroncap.com/assessments/hyundai/kona/1051/";
const SPRING = "https://www.euroncap.com/assessments/dacia/spring/0910/";
const CCROSS = "https://www.euroncap.com/assessments/toyota/corolla-cross/0994/";

export const LOTE_20: MapaEnriquecimiento = {
  "hyundai-kona-hibrido-n-line-2026-precio-ficha-tecnica": {
    titulo: "Hyundai Kona híbrido: cuatro estrellas de Euro NCAP, con tres puntos flojos",
    parrafos: [
      "El Kona de la generación actual pasó por Euro NCAP y el resultado se publicó el 6 de diciembre de 2023: cuatro estrellas, con un 80 % en ocupantes adultos, un 83 % en niños, un 64 % en usuarios vulnerables de la vía y un 60 % en asistencias a la conducción. El organismo comentó en su nota de prensa que el Kona se había librado por poco de las tres estrellas.",
      "La lista de variantes cubiertas incluye una fila llamada 1.6 petrol hybrid, KONA Hybrid, de tracción delantera, que es la mecánica de esta ficha. El acabado N Line no aparece nombrado en la lista, así que no se puede afirmar que figure en ella por separado. El coche ensayado fue el eléctrico GLS, no el híbrido, con 1.750 kg en vacío y volante a la izquierda.",
      "El informe señala que unas estructuras del salpicadero suponían riesgo de lesión para ocupantes de distinta talla y recibieron penalización, que el pecho del conductor quedó en «marginal» en el frontal desplazado y en «débil» en el de ancho completo, donde el maniquí además se deslizó bajo el cinturón. En cambio, en los dos choques laterales, barrera y poste, la protección fue buena y se logró la puntuación máxima.",
    ],
    filas: [
      { etiqueta: "Estrellas del Kona", valor: "Cuatro; publicadas el 6 de diciembre de 2023", fuente: "Ficha de Hyundai KONA en Euro NCAP (diciembre de 2023)", url: KONA, anio: "2023" },
      { etiqueta: "Porcentajes del Kona", valor: "80 % adultos; 83 % niños; 64 % vulnerables; 60 % asistencias", fuente: "Euro NCAP, desglose de áreas del KONA", url: KONA, anio: "2023" },
      { etiqueta: "Fila de la lista que coincide", valor: "1.6 petrol hybrid, KONA Hybrid, 4x2", fuente: "Euro NCAP, tabla de variantes cubiertas del KONA", url: KONA, anio: "2023" },
      { etiqueta: "Kona ensayado", valor: "GLS eléctrico, volante a la izquierda; 1.750 kg", fuente: "Euro NCAP, modelo probado del KONA", url: KONA, anio: "2023" },
      { etiqueta: "Pecho del conductor", valor: "Marginal en el frontal desplazado; débil en el de ancho completo", fuente: "Euro NCAP, comentario sobre los impactos frontales del KONA", url: KONA, anio: "2023" },
    ],
  },
  "dacia-spring-2024-precio-ficha-tecnica": {
    titulo: "Dacia Spring: la estrella de Euro NCAP con sus cifras, su fecha y lo que le faltaba",
    parrafos: [
      "La ficha habla de «la estrella» de Euro NCAP sin más detalle. El organismo publicó el 8 de diciembre de 2021 su valoración del Dacia Spring eléctrico: una estrella, con un 49 % en adultos, un 56 % en niños, un 39 % en usuarios vulnerables y un 32 % en asistencias. Es una nota de 2021, y la ficha del organismo no recoge ningún restyling posterior.",
      "El coche ensayado fue el Spring eléctrico de 33 kW con volante a la izquierda, y pesaba 970 kg en vacío; esta página da 1.051 kg, cifra de otra fuente que no se ha podido contrastar. La lista de variantes tiene una sola fila, el E2 Comfort Plus de 33 kW y tracción delantera, que es también la potencia de 45 CV de esta ficha.",
      "Los comentarios del informe son duros: protección pobre de piernas, pecho y pelvis del conductor en el frontal desplazado; sin airbag central en los choques laterales; AEB que solo reacciona ante otros vehículos, y no ante peatones ni ciclistas; sin alerta de fatiga ni mantenimiento de carril; marcas de los anclajes Isofix invisibles; y ninguna fijación i-Size, de modo que no admite esas sillas infantiles.",
    ],
    filas: [
      { etiqueta: "Estrellas del Spring", valor: "Una; publicada el 8 de diciembre de 2021", fuente: "Ficha de Dacia Spring en Euro NCAP (diciembre de 2021)", url: SPRING, anio: "2021" },
      { etiqueta: "Porcentajes del Spring", valor: "49 % adultos; 56 % niños; 39 % vulnerables; 32 % asistencias", fuente: "Euro NCAP, cuadro de resultados del Spring", url: SPRING, anio: "2021" },
      { etiqueta: "Spring ensayado", valor: "Eléctrico de 33 kW, volante a la izquierda; 970 kg", fuente: "Euro NCAP, modelo probado del Spring", url: SPRING, anio: "2021" },
      { etiqueta: "Única fila de la lista del Spring", valor: "E2 Comfort Plus, 33 kW, 4x2", fuente: "Euro NCAP, variantes cubiertas del Spring", url: SPRING, anio: "2021" },
      { etiqueta: "Equipo ausente en el Spring", valor: "Sin airbag central, sin alerta de fatiga ni mantenimiento de carril, sin i-Size", fuente: "Euro NCAP, comentarios sobre equipamiento del Spring", url: SPRING, anio: "2021" },
    ],
  },
  "toyota-corolla-cross-2026": {
    titulo: "Toyota Corolla Cross: la nota de Euro NCAP es de 2022 y se midió con el 2.0 híbrido",
    parrafos: [
      "Euro NCAP publicó el 16 de noviembre de 2022 la valoración del Corolla Cross: cinco estrellas, con 85 % en adultos, 83 % en niños, 87 % en vulnerables y 82 % en asistencias. Se ensayó con la mecánica híbrida de 2,0 litros, con volante a la izquierda y 1.500 kg en vacío.",
      "Dos matices para quien mira esta ficha de 2026. La tabla de variantes cubiertas del organismo aparece vacía en la ficha consultada, de modo que no se puede confirmar con ella que la mecánica de 140 CV esté incluida. Además, la nota es anterior al restyling de 2026 y no se ha localizado ninguna revisión que la actualice.",
      "Como puntos débiles, el informe cita que el pecho del conductor obtuvo una protección «débil» en el frontal desplazado, que el control de movimiento hacia el lado contrario fue «marginal» y que Toyota no demostró que el airbag central protegiera de forma robusta a ocupantes de distintas tallas. Entre los aciertos están un freno de colisiones secundarias y el eCall avanzado, y la protección de las piernas de peatones, buena en todos los puntos.",
    ],
    filas: [
      { etiqueta: "Valoración del Corolla Cross", valor: "Cinco estrellas; publicada el 16 de noviembre de 2022", fuente: "Ficha de Toyota Corolla Cross en Euro NCAP (noviembre de 2022)", url: CCROSS, anio: "2022" },
      { etiqueta: "Resultado en las cuatro áreas", valor: "85 % adultos, 83 % niños, 87 % vulnerables y 82 % asistencias", fuente: "Euro NCAP, porcentajes del Corolla Cross", url: CCROSS, anio: "2022" },
      { etiqueta: "Mecánica ensayada del Corolla Cross", valor: "2.0 híbrido, volante a la izquierda; 1.500 kg", fuente: "Euro NCAP, modelo probado del Corolla Cross", url: CCROSS, anio: "2022" },
      { etiqueta: "Variantes cubiertas del Corolla Cross", valor: "La tabla de la ficha aparece sin filas; no consta el 140 CV", fuente: "Euro NCAP, apartado de variantes del Corolla Cross", url: CCROSS, anio: "2022" },
      { etiqueta: "Airbag central", valor: "Toyota no demostró protección robusta para distintas tallas", fuente: "Euro NCAP, comentario sobre impactos laterales del Corolla Cross", url: CCROSS, anio: "2022" },
    ],
  },
};
