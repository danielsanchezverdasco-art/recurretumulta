// Lote 22 — Hyundai Bayon, BMW Serie 5 530e, BMW X3, Cupra Terramar, Kia Sportage HEV, Peugeot 5008 PHEV (Euro NCAP).
import type { MapaEnriquecimiento } from "./tipos";

const BAYON = "https://www.euroncap.com/assessments/hyundai/bayon/0891/";
const S5 = "https://www.euroncap.com/assessments/bmw/5-series/1032/";
const X3 = "https://www.euroncap.com/assessments/bmw/x3/1126/";
const TERRA = "https://www.euroncap.com/assessments/cupra/terramar/1107/";
const SPORT = "https://www.euroncap.com/assessments/kia/sportage/0951/";
const P5008 = "https://www.euroncap.com/assessments/peugeot/5008/1191/";

export const LOTE_22: MapaEnriquecimiento = {
  "hyundai-bayon-2024-precio-ficha-tecnica": {
    titulo: "Hyundai Bayon: cuatro estrellas de Euro NCAP, con el mild hybrid dentro de la lista",
    parrafos: [
      "El Bayon se midió en 2021 y su nota, publicada el 27 de octubre de ese año, fue de cuatro estrellas: 76 % en adultos, 82 % en niños, 76 % en peatones y ciclistas y 67 % en asistencias. Euro NCAP la revisó otras dos veces, en octubre de 2022 y octubre de 2023, y no consta ningún cambio en la valoración.",
      "El coche de pruebas fue un 1.0 T-GDI GL sin hibridación, con volante a la izquierda y 1.230 kg en vacío. La lista de variantes incluye de forma expresa la fila 1.0 T-GDI 48V MHEV, de tracción delantera, que corresponde a la mecánica de 100 CV de esta ficha, y también el 1.2 MPI.",
      "El informe anota varios reparos: estructuras del salpicadero con riesgo para las piernas del conductor, con penalización; pecho trasero «débil» en el choque de ancho completo; nada que evite que los ocupantes se golpeen entre sí en un choque lateral, y un control «pobre» del desplazamiento hacia el lado contrario. Sí tiene eCall avanzado y freno de colisiones secundarias.",
    ],
    filas: [
      { etiqueta: "Nota del Bayon", valor: "Cuatro estrellas; publicada el 27 de octubre de 2021", fuente: "Ficha de Hyundai BAYON en Euro NCAP (octubre de 2021)", url: BAYON, anio: "2021" },
      { etiqueta: "Resultado del Bayon por áreas", valor: "Adultos 76; niños 82; vulnerables 76; asistencias 67 (en %)", fuente: "Euro NCAP, cuadro de áreas del BAYON", url: BAYON, anio: "2021" },
      { etiqueta: "Bayon que se probó", valor: "1.0 T-GDI GL, volante a la izquierda, 1.230 kg", fuente: "Euro NCAP, modelo ensayado del BAYON", url: BAYON, anio: "2021" },
      { etiqueta: "Fila del Bayon ligero híbrido", valor: "1.0 T-GDI 48V MHEV, 4x2; también 1.2 MPI", fuente: "Euro NCAP, variantes cubiertas del BAYON", url: BAYON, anio: "2021" },
      { etiqueta: "Revisiones anuales del Bayon", valor: "27 de octubre de 2022 y 27 de octubre de 2023", fuente: "Euro NCAP, historial de revisiones del BAYON", url: BAYON, anio: "2023" },
    ],
  },
  "bmw-serie-5-530e-2026-precio-ficha-tecnica": {
    titulo: "BMW 530e: cinco estrellas de Euro NCAP, pero se ensayó el i5 eléctrico",
    parrafos: [
      "Euro NCAP valoró la Serie 5 de la generación actual el 6 de diciembre de 2023 con cinco estrellas: 89 % de protección a adultos, 85 % a niños, 86 % a usuarios vulnerables y 78 % en asistencias. Quien se rompió fue el BMW i5 eDrive40, con 2.345 kg, no el híbrido enchufable.",
      "El 530e figura sin embargo entre las variantes cubiertas, tanto en berlina como en la carrocería de cinco puertas, con tracción trasera y con xDrive. Esa es la base para trasladarle la nota; la ficha del organismo no da potencia ni batería, de modo que los 299 CV que anunciamos aquí no tienen contraste allí.",
      "Del texto del informe sobresalen el pecho en el choque contra poste, con protección marginal, y que la Serie 5 carece de detector de niños olvidados en el coche. Entre lo positivo, BMW demostró que puertas y ventanillas seguirían funcionando bajo el agua el tiempo suficiente para salir.",
    ],
    filas: [
      { etiqueta: "Estrellas de la Serie 5", valor: "Cinco; fecha de publicación 6 de diciembre de 2023", fuente: "Ficha de BMW 5 Series en Euro NCAP (diciembre de 2023)", url: S5, anio: "2023" },
      { etiqueta: "Resultado de la Serie 5", valor: "89 % adultos; 85 % niños; 86 % vulnerables; 78 % asistencias", fuente: "Euro NCAP, desglose de áreas del 5 Series", url: S5, anio: "2023" },
      { etiqueta: "Coche probado de la Serie 5", valor: "i5 eDrive40; 2.345 kg", fuente: "Euro NCAP, modelo ensayado del 5 Series", url: S5, anio: "2023" },
      { etiqueta: "Filas del 530e en la lista", valor: "2.0 petrol hybrid 530e y 530e xDrive; 4x2 y 4x4", fuente: "Euro NCAP, variantes del 5 Series con motor híbrido", url: S5, anio: "2023" },
      { etiqueta: "Detector de niños olvidados (Serie 5)", valor: "No equipado", fuente: "Euro NCAP, apartado infantil del 5 Series", url: S5, anio: "2023" },
    ],
  },
  "bmw-x3-20-xdrive-2026-precio-ficha-tecnica": {
    titulo: "BMW X3 20 xDrive: el X3 que Euro NCAP rompió en 2025 es justo este",
    parrafos: [
      "A diferencia de otras fichas, aquí coincide el coche exacto: la versión ensayada por Euro NCAP en la valoración del X3 publicada el 15 de octubre de 2025 fue el X3 20 xDrive con paquete M Sport, volante a la izquierda y 1.976 kg en vacío. Sacó cinco estrellas con un 88 % en adultos, un 84 % en niños, un 77 % en usuarios vulnerables y un 80 % en asistencias.",
      "La misma nota cubre al 20d xDrive, al 30e xDrive híbrido enchufable, al 40d xDrive y al M50 xDrive, todos con tracción a las cuatro ruedas. El informe califica el pecho del conductor como marginal en el frontal desplazado y el del pasajero trasero igual en el choque de ancho completo; el lateral con barrera dio puntuación máxima.",
    ],
    filas: [
      { etiqueta: "Valoración del X3", valor: "Cinco estrellas; publicada el 15 de octubre de 2025", fuente: "Ficha de BMW X3 en Euro NCAP (octubre de 2025)", url: X3, anio: "2025" },
      { etiqueta: "Puntos del X3 por área", valor: "88 % adultos; 84 % niños; 77 % vulnerables; 80 % asistencias", fuente: "Euro NCAP, apartados de puntuación del X3", url: X3, anio: "2025" },
      { etiqueta: "Versión del X3 que se ensayó", valor: "20 xDrive M Sport, 4x4, volante a la izquierda; 1.976 kg", fuente: "Euro NCAP, modelo probado del X3", url: X3, anio: "2025" },
      { etiqueta: "Otros X3 cubiertos", valor: "20d, 30e (híbrido), 40d y M50, todos xDrive", fuente: "Euro NCAP, lista de variantes del X3", url: X3, anio: "2025" },
    ],
  },
  "cupra-terramar-2024-precio-ficha-tecnica": {
    titulo: "Cupra Terramar: nota de cinco estrellas en Euro NCAP y qué motores abarca",
    parrafos: [
      "El Terramar fue valorado por Euro NCAP en abril de 2025 con cinco estrellas. Sus notas parciales fueron 89 % en adultos, 87 % en niños, 82 % en vulnerables y 76 % en las ayudas a la conducción. El coche del ensayo fue el 1.5 TSI de 200 kW eHybrid VZ, con 1.839 kg en vacío.",
      "La lista incluye el 1.5 eTSI de 110 kW, de tracción delantera, equivalente a los 150 CV de esta ficha, junto al 1.5 eHybrid de 150 kW, un 2.0 TSI de 150 kW y el 2.0 TSI VZ de 195 kW, estos dos con tracción total. Euro NCAP considera al Terramar un compañero de choque algo agresivo en un frontal con otro vehículo, y el pecho del pasajero trasero quedó marginal en la prueba de ancho completo.",
    ],
    filas: [
      { etiqueta: "Cinco estrellas del Terramar", valor: "Valoración de abril de 2025", fuente: "Ficha de CUPRA TERRAMAR en Euro NCAP (abril de 2025)", url: TERRA, anio: "2025" },
      { etiqueta: "Los cuatro porcentajes del Terramar", valor: "89, 87, 82 y 76 % (adultos, niños, vulnerables, asistencias)", fuente: "Euro NCAP, desglose del TERRAMAR", url: TERRA, anio: "2025" },
      { etiqueta: "Terramar de pruebas", valor: "1.5 TSI 200 kW eHybrid VZ, 4x2; 1.839 kg", fuente: "Euro NCAP, modelo ensayado del TERRAMAR", url: TERRA, anio: "2025" },
      { etiqueta: "Fila del Terramar de 150 CV", valor: "1.5 eTSI 110 kW, 4x2", fuente: "Euro NCAP, variantes cubiertas del TERRAMAR", url: TERRA, anio: "2025" },
    ],
  },
  "kia-sportage-hev-239": {
    titulo: "Kia Sportage híbrido: cinco estrellas en 2022, con el HEV 4x2 y 4x4 en la lista",
    parrafos: [
      "El Sportage de quinta generación recibió en Euro NCAP, el 6 de julio de 2022, cinco estrellas, con un 87 % en adultos, un 86 % en niños, un 66 % en vulnerables y un 72 % en asistencias. Se ensayó el 1.6 T-GDI HEV de tracción total, con 1.748 kg en vacío.",
      "La lista recoge el 1.6 T-GDI HEV tanto en 4x2 como en 4x4, lo que cubre la tracción delantera de esta ficha, además de las variantes diésel, microhíbridas y enchufables. El informe aclara que el Sportage comparte plataforma con el Hyundai Tucson ensayado el año anterior, y que en algunos apartados se usaron los resultados del Tucson. Frente a eso, el pecho del conductor puntuó marginal en la prueba de ancho completo y la protección trasera contra latigazo cervical también fue marginal.",
    ],
    filas: [
      { etiqueta: "Nota del Sportage", valor: "Cinco estrellas desde el 6 de julio de 2022", fuente: "Ficha de Kia Sportage en Euro NCAP (julio de 2022)", url: SPORT, anio: "2022" },
      { etiqueta: "Desglose del Sportage", valor: "87 adultos; 86 niños; 66 vulnerables; 72 asistencias (%)", fuente: "Euro NCAP, áreas del Sportage", url: SPORT, anio: "2022" },
      { etiqueta: "Sportage ensayado", valor: "1.6 T-GDI HEV, 4x4, volante a la izquierda; 1.748 kg", fuente: "Euro NCAP, modelo probado del Sportage", url: SPORT, anio: "2022" },
      { etiqueta: "Filas del Sportage híbrido", valor: "1.6 T-GDI HEV en 4x2 y en 4x4", fuente: "Euro NCAP, variantes con HEV del Sportage", url: SPORT, anio: "2022" },
      { etiqueta: "Base compartida del Sportage", valor: "Plataforma del Hyundai Tucson; se reutilizaron pruebas", fuente: "Euro NCAP, comentario inicial del Sportage", url: SPORT, anio: "2022" },
    ],
  },
  "peugeot-5008-phev-195-2026-precio-ficha-tecnica": {
    titulo: "Peugeot 5008 híbrido enchufable: cuatro estrellas en Euro NCAP, con base en el 3008",
    parrafos: [
      "La valoración del 5008 salió el 21 de mayo de 2025: cuatro estrellas, con 80 % de nota en adultos, 85 % en niños, 79 % en vulnerables y 62 % en asistencias. El organismo explica que el 5008 es un modelo hermano del 3008 y solo se diferencia por más largo trasero para la tercera fila opcional, así que la nota parte de las pruebas del 3008, con ensayos adicionales donde hizo falta.",
      "El coche usado fue el e3008 eléctrico de 73 kWh, con 2.104 kg y volante a la izquierda, y entre las filas cubiertas figura la del enchufable de 195 CV con caja e-DSC7 y eje delantero, que es la de esta ficha. Entre las pegas, el control de la inercia hacia el otro costado fue marginal y falta la contramedida que reduce el choque entre ocupantes en un impacto lateral.",
    ],
    filas: [
      { etiqueta: "Estrellas del 5008", valor: "Cuatro; salió el 21 de mayo de 2025", fuente: "Ficha de Peugeot 5008 en Euro NCAP (mayo de 2025)", url: P5008, anio: "2025" },
      { etiqueta: "Porcentajes del 5008", valor: "80 adultos; 85 niños; 79 vulnerables; 62 asistencias (en %)", fuente: "Euro NCAP, cuadro de resultados del 5008", url: P5008, anio: "2025" },
      { etiqueta: "Coche base del 5008", valor: "e3008 de 73 kWh, LHD; 2.104 kg", fuente: "Euro NCAP, coche usado en la prueba del 5008", url: P5008, anio: "2025" },
      { etiqueta: "Fila del 5008 enchufable", valor: "Versión enchufable de 195 con caja e-DSC7; eje delantero", fuente: "Euro NCAP, variantes cubiertas del 5008", url: P5008, anio: "2025" },
    ],
  },
};
