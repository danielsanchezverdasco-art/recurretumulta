// 25/10/2026 (arreglos-informe-2510): texto diferencial de las caravanas que el informe SEO
// marcó como casi duplicadas entre sí (gama Dethleffs c'joy 420/460/480 y Weinsberg
// CaraOne 390/400). Solo usa los datos de cada ficha (precio, medidas, tara, plazas,
// distribución) y la comparación con sus hermanas de gama; no añade cifras nuevas.
export const CARAVANAS_DIFERENCIAL: Record<string, { titulo: string; parrafos: string[] }> = {
  "dethleffs-cjoy-420-qsh-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la c'joy 420 QSH del resto de la gama",
    parrafos: [
      "Es la puerta de entrada a la c'joy: 18.999 €, 2.000 € menos que la 460 LE y 3.000 € menos que la 480 QLK. A cambio es la más corta de las tres, con 6,25 m de largo total frente a los 6,75 m de la 460 y los 7,14 m de la 480, y la más ligera, con 927 kg en orden de marcha.",
      "Ese medio metro menos se nota al maniobrar marcha atrás en un camping estrecho, al buscar plaza en un guardamuebles y al calcular el coche tractor: con poco más de 900 kg de tara, la arrastra con holgura un compacto de gasolina o diésel bien homologado para remolque.",
      "El precio de esa compacidad es la capacidad de carga, la más baja de la familia (173 kg sobre una masa máxima de 1.100 kg). Agua, bombona de gas, toldo y equipaje de dos personas se comen ese margen enseguida, así que conviene viajar con el depósito vacío y pesar el conjunto antes de la primera escapada larga.",
    ],
  },
  "dethleffs-cjoy-460-le-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la c'joy 460 LE de la 420 y la 480",
    parrafos: [
      "La clave está en las letras LE: camas individuales en lugar de una cama doble. Entre las tres c'joy de esta web es la pensada para que dos adultos duerman cada uno en su colchón, algo que muchas parejas valoran en viajes de varias semanas.",
      "Respecto a la 420 QSH crece 50 cm (6,75 m) y solo 26 kg de tara (953 kg), pero gana bastante margen de carga: 247 kg frente a 173 kg, gracias a una masa máxima de 1.200 kg. Es la que mejor equilibra peso en vacío y kilos disponibles para equipaje dentro de la serie.",
      "Frente a la 480 QLK es 1.000 € más barata y 39 cm más corta, pero se queda en tres plazas para dormir. Si no viajáis más de dos adultos y, como mucho, un niño, la 460 LE ofrece más comodidad nocturna que la 480 sin cargar con la longitud y los kilos de una caravana familiar.",
    ],
  },
  "dethleffs-cjoy-480-qlk-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la c'joy 480 QLK de sus hermanas",
    parrafos: [
      "Es la familiar de la gama: duplica las plazas para dormir de la 420 y la 460 (seis frente a tres) gracias a la combinación de cama de matrimonio, literas traseras en altura y comedor abatible, todo sobre un solo eje.",
      "Ese salto se paga con tamaño y peso: 7,14 m de largo y 1.068 kg en orden de marcha, más de 100 kg por encima de la 460 LE. La masa máxima sube a 1.300 kg, lo que exige un coche tractor con capacidad de remolque suficiente y un conjunto que no pase de 3.500 kg si quieres seguir con el carnet B.",
      "Con 232 kg de carga útil para hasta seis personas, el margen por ocupante es mucho menor que en las versiones de pareja. Antes de comprarla para una familia numerosa merece la pena preguntar al concesionario por el aumento de masa máxima homologado y revisar qué viaja en el coche y qué en la caravana.",
    ],
  },
  "weinsberg-caraone-390-qd-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la CaraOne 390 QD de la 400 LK",
    parrafos: [
      "La 390 QD y la 400 LK comparten carrocería (5,92 m de largo, 2,20 m de ancho y 2,57 m de alto) y prácticamente el mismo peso, así que la elección se hace por la distribución interior, no por el coche tractor.",
      "La 390 QD es la opción de pareja: también declara cuatro plazas para dormir, pero sin las literas fijas de la 400 LK, de modo que se orienta a dos adultos que solo de vez en cuando llevan invitados. Es además la CaraOne más barata, 16.650 € según la tarifa MJ 2027, 140 € menos que la 400 LK.",
      "Con 943 kg en orden de marcha es 5 kg más ligera que su hermana, una diferencia que en la práctica no cambia nada al remolcar. Lo que sí cambia es el uso diario: sin el mueble de literas, la parte trasera no queda ocupada por camas de niño, algo que una pareja agradece más que una familia.",
    ],
  },
  "weinsberg-caraone-400-lk-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la CaraOne 400 LK de la 390 QD",
    parrafos: [
      "Las letras LK delatan su planteamiento: literas traseras en altura para niños. Es la CaraOne familiar más compacta, con la misma caja de 5,92 m que la 390 QD, y cuesta 16.790 €, solo 140 € más según la tarifa MJ 2027.",
      "La diferencia práctica es que los niños tienen su cama fija y no hay que montar y desmontar el comedor cada noche. Eso sí, las literas son de talla infantil y juvenil, así que no sirven para cuatro adultos.",
      "Pesa 948 kg en orden de marcha, 5 kg más que la 390 QD por el mueble de las literas. Con cuatro ocupantes y su equipaje, el margen de carga es el punto a vigilar: conviene pesar la caravana cargada en una báscula pública antes del primer viaje largo.",
    ],
  },
};
