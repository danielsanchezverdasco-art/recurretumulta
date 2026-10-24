// Análisis editorial — Lote coche-08 (Ford, Forthing, Foton, GAC, Geely, Genesis).
// 95 fichas. Cada texto: 2-3 párrafos, 150-220 palabras, redactado a partir de
// los datos de la ficha (comparador-coches-*.ts). Cero datos inventados.
// MapaAnalisis: slug de ficha -> texto editorial en español.
export type MapaAnalisis = Record<string, string>;

export const ANALISIS_COCHE_08: MapaAnalisis = {
  "ford-f-150-lightning-2025": `La F-150 Lightning es la prueba de que la electrificación no entiende de tamaños: 5.911 mm de largo, 3.127 kg y 580 CV con 1.051 Nm de par instantáneo, capaces de catapultar este mastodonte de 0 a 100 km/h en 4,0 segundos. La batería de 131 kWh promete 515 km de autonomía y admite carga rápida de 155 kW, mientras el maletero delantero de 400 litros —el famoso frunk— se convierte en su truco más ingenioso: una pick-up con dos maleteros.

El problema para el comprador español no es técnico, sino logístico: la ficha lo dice claro, no se vende oficialmente en España. Importarla por cuenta propia implica homologación individual, piezas a través de importadores y un servicio postventa inexistente en la red Ford europea. Es un capricho para coleccionistas con nave propia, no una herramienta de trabajo racional.

Para quien necesite una pick-up Ford con papeles en regla, la Ranger hace el mismo trabajo con garantía oficial. La Lightning quedará como curiosidad histórica: la primera pick-up eléctrica de gran serie, vista desde la otra orilla del Atlántico.`,

  "ford-f-150-raptor-2025": `La Raptor es la F-150 llevada al extremo del desierto: el V6 3.5 EcoBoost High Output entrega 456 CV y 691 Nm, los amortiguadores FOX Racing absorben lo que sea y los siete modos de conducción la convierten en una máquina de rally-raid matriculable. El dato que la hace especial en Europa es administrativo: está homologada aquí con garantía oficial Ford, así que se matricula en España sin el calvario de la homologación individual.

El precio, eso sí, es de otro planeta: 129.800 € antes de matricularla, territorio Range Rover. Y la ficha no esconde el coste de uso: 17-19 l/100 km reales con un depósito de 136 litros que se vacía a ritmo preocupante, más 5,91 m de largo por 2,2 m de ancho que no caben en la mayoría de parkings españoles.

Es para quien quiere la pick-up de serie más capaz del mercado y le sobra el presupuesto; no es para quien busque racionalidad, porque la Ranger Raptor europea hace el 90 % del trabajo por bastante menos. Capricho americano con papeles europeos: eso es exactamente lo que es.`,

  "ford-maverick-2025": `La Maverick es la pick-up que Europa decidió ignorar y que más sentido tendría aquí: con 5.072 mm es compacta para los estándares americanos, rinde 238 CV con 376 Nm, acelera de 0 a 100 en 7,0 s y ofrece una caja de 1.383 litros. Sobre el papel, el formato ideal para quien necesita cargar sin manejar un camión: pesa 1.693 kg, menos que muchos SUV europeos, y su consumo homologado de 9,0 l/100 km no asusta.

Pero la ficha es tajante: no se vende oficialmente en España. Y sin red oficial no hay garantía europea, ni recambios ágiles, ni valor de reventa predecible. Es el eterno dilema del importado americano: el producto encaja, el ecosistema no.

Para el profesional español, la Ranger —aunque más grande y más cara— sigue siendo la opción con papeles. La Maverick quedará como la gran ausente del catálogo Ford Europa: la pick-up racional que nunca llegó, mientras el mercado pide a gritos formatos más contenidos.`,

  "ford-ranger-ms-rt-2025": `La MS-RT es la Ranger que prefiere el asfalto al barro: mantiene el diésel de 240 CV y 600 Nm con tracción total, pero su puesta a punto mira a la carretera, con 0-100 km/h en 8,0 s y una estética de street truck que no pasa desapercibida. Es la alternativa para quien quiere la presencia de una pick-up sin renunciar a un comportamiento digno en autopista, donde la versión Raptor —más radical— se muestra torpe.

El dato que la respalda es serio: 5 estrellas Euro NCAP en 2022, algo que no todas las pick-ups pueden decir. Con 5.370 mm de largo y etiqueta C, eso sí, comparte los pecados de su especie: imposible en parkings normales y 284 g/km de CO₂ que la condenan fiscalmente.

Es para el autónomo o aficionado que usa la pick-up a diario sobre asfalto y valora la imagen; no es para quien necesite auténtico 4x4 con reductora, porque para eso están la Wildtrak o la Raptor. Una Ranger de ciudad con alma de asfalto: nicho pequeño, pero bien definido.`,

  "ford-ranger-phev-2025-precio-ficha-tecnica": `La Ranger PHEV hace historia discreta: es la primera pick-up híbrida enchufable del mercado europeo, y no llega como experimento, sino con argumentos. Sus 281 CV combinados y 697 Nm superan en par al Raptor diésel, la batería de 11,8 kWh ofrece 43 km eléctricos WLTP y la etiqueta Cero le abre las zonas de bajas emisiones que vetan a sus hermanas diésel. Todo por 43.500 €, menos que cualquier Raptor.

La honestidad obliga a matizar: 43 km eléctricos son justos para un vehículo de trabajo que recorre distancias largas, el peso se dispara a 2.586 kg y la batería resta carga útil, que es precisamente para lo que existe una pick-up. Además, no hay carga rápida en continua.

Es para el profesional con recorridos diarios cortos y base con enchufe: repartos urbanos, mantenimiento, flotas municipales. No es para quien viva en carretera, porque con la batería vacía arrastra peso muerto. El concepto es brillante; su éxito depende del enchufe nocturno.`,

  "ford-ranger-raptor-2025-precio-ficha-tecnica": `La Ranger Raptor es la referencia europea de las pick-ups prestacionales: el V6 3.0 EcoBoost de 292 CV y 491 Nm, la suspensión FOX de competición y los siete modos de conducción con el programa Baja la convierten en la única que vuela por pistas a ritmo de rally-raid sin preparaciones. El 0-100 en 7,9 s no impresiona en una berlina, pero en un armatoste de 2.553 kg con tracción total es una declaración de intenciones.

El peaje es triple: 81.884 € de precio —territorio SUV premium alemán—, 13,8 l/100 km homologados que en uso exigente superan los 18, y 315 g/km de CO₂ con etiqueta C, el castigo fiscal máximo posible.

Es para quien quiere la pick-up más divertida que se vende en Europa y asume el coste sin pestañear; no es para nadie que mire la cuenta de resultados, porque la Wildtrak diésel hace el trabajo serio por 24.000 € menos. Juguete caro, sí, pero el mejor juguete de su clase.`,

  "ford-ranger-wildtrak-2025-precio-ficha-tecnica": `La Wildtrak es la Ranger sensata: el 2.0 EcoBlue biturbo diésel de 205 CV y 500 Nm no busca titulares, pero entrega el equilibrio que necesita una herramienta de trabajo, con tracción total y reductora de verdad para cuando el asfalto se acaba. Son 8,8 l/100 km homologados y una caja de carga generosa con toma de 12 V: la pick-up como debe ser, sin postureo.

El problema es el precio y el contexto: 57.980 € por un pick-up diésel con etiqueta C es mucho dinero en 2025, cuando las ZBE aprietan y el diésel tiene los días contados en ciudad. Y los 5,37 m de largo la destierran de cualquier aparcamiento normal.

Es para el profesional rural o el aficionado al campo que necesita un 4x4 auténtico y amortiza cada euro en trabajo; no es para el urbanita que la quiere por imagen, porque la ciudad la castiga en todos los frentes. La herramienta correcta para el usuario correcto.`,
  "ford-mustang-2025-precio-ficha-tecnica": `El Mustang GT Fastback 2025 es, objetivamente, el último de su especie en Europa: un coupé de 4,81 m con V8 atmosférico de 5.0 litros y 446 CV, cambio manual o automático de 10 velocidades, 0-100 en 5,3 s y 250 km/h de punta. Por 61.828 € no hay nada parecido a la venta: el sonido, el carácter y la teatralidad del muscle car americano sobreviven aquí mientras el resto del segmento se rinde a la hibridación.

La letra pequeña es conocida: más de 12 l/100 km reales, 274 g/km de CO₂ y etiqueta C, que lo vetará de las ZBE más estrictas a medio plazo. El maletero de 381 litros es utilizable y las cuatro plazas, testimoniales atrás, pero nadie compra un Mustang por la lógica.

Es para el entusiasta que quiere un V8 atmosférico nuevo antes de que desaparezcan; no es para quien use el coche a diario en ciudad, porque entre consumo, tamaño y etiqueta, la ciudad es su peor enemigo. Comprarlo es un acto de fe en el romanticismo automovilístico.`,

  "ford-mustang-dark-horse-2025-precio-ficha-tecnica": `El Dark Horse es el Mustang de calle más potente que Ford ha vendido en Europa: 454 CV del V8 5.0, 0-100 en 4,4 s, 263 km/h de punta, frenos Brembo y un chasis con puesta a punto de circuito. No es un GT con pegatinas: la refrigeración, la aerodinámica y la calibración son específicas, y la estética propia lo distingue sin estridencias.

La pregunta incómoda la pone la ficha: 78.128 €, unos 17.000 € más que el GT Fastback por solo 8 CV extra. El salto no se paga en potencia, sino en exclusividad, chasis y equipamiento de pista. A cambio, el consumo homologado de 12,4 l/100 km y los 282 g/km de CO₂ confirman que la etiqueta C limita su uso urbano futuro.

Es para el coleccionista y el quemado de track days que quiere el Mustang definitivo de esta generación; no es para quien busque la mejor relación euros por caballo, porque el GT normal la pulveriza. Edición especial con sentido: el canto del cisne del V8, cobrado a precio de despedida.`,

  "ford-mustang-gt-convertible": `El Mustang GT Convertible ocupa un nicho casi vacío: descapotable con V8 atmosférico de 446 CV por 70.128 €, sin rival directo en precio. El 5.0 de 540 Nm con el automático de 10 velocidades, el 0-100 en 5 s y los 250 km/h de máxima componen la receta clásica del gran turismo americano al aire libre, con el sonido del V8 como banda sonora obligatoria.

Las contrapartidas son las esperadas: consumos y emisiones muy altos —282 g/km de CO₂—, etiqueta C, y unas dimensiones generosas que complican las carreteras estrechas de secundaria. El maletero se queda en 310 litros y el interior, con plásticos mejorables, recuerda que el dinero está en la mecánica.

Es para quien sueña con cruzar la costa descapotado al rugido de un V8; no es para el conductor racional ni para el purista de la eficacia, porque un coupé cerrado es más rígido y más barato. El descapotable americano asequible existe, se llama Mustang, y cada año que pasa es más raro.`,

  "ford-mustang-gt-fastback-2025-precio-ficha-tecnica": `Con 61.150 € de partida, el GT Fastback es la puerta de entrada al mito: el mismo V8 5.0 atmosférico de 446 CV, el mismo 0-100 en 5,3 s y la misma silueta inconfundible, en el formato coupé más equilibrado de la gama. La ficha subraya lo esencial: cambio manual disponible para los puristas o automático de 10 velocidades para el día a día, 381 litros de maletero que permiten viajar de verdad y un chasis que, sin ser un deportivo europeo, divierte con honestidad.

El reverso es aritmético: más de 12 l/100 km reales, etiqueta C con problemas futuros en ZBE y 4,81 m de largo que convierten aparcar en un reto diario. Son 274 g/km de CO₂ en plena era de la electrificación.

La decisión frente al Dark Horse es sencilla: por 17.000 € menos se obtiene el 98 % de la experiencia. Es para quien quiere el Mustang auténtico sin pagar el peaje de la edición especial; no es para quien necesite un coupé usable a diario en ciudad. El icono, en su forma más honesta.`,

  "ford-mustang-gtd-2025": `El GTD no es un Mustang vitaminado: es un superdeportivo con matrícula de Mustang. Los números de la ficha son de otra liga: 815 CV, 900 Nm, 0-100 en 3,4 s y 325 km/h de velocidad máxima, con un consumo homologado de 19,6 l/100 km que delata su naturaleza. Dos plazas, tracción trasera y un precio que la propia ficha sitúa en 398.500 € en España.

Su razón de ser es el Nürburgring: Ford lo concibió para plantar cara a los europeos en su propio terreno, con aerodinámica activa y soluciones de competición. Es el Mustang que deja de mirar al muscle car para mirar al 911 GT3.

No hay "para quién no es" que no sea obvio: no es un coche, es una declaración. Para el coleccionista con acceso a circuito y presupuesto ilimitado, representa la cima de la ingeniería Ford; para el resto, una curiosidad fascinante. El dato curioso es el precio: cuesta como seis GT Fastback juntos, y aun así tiene lista de espera.`,

  "ford-mustang-mach-e-2025-precio-ficha-tecnica": `El Mach-E 2025 juega la carta de la sensatez eléctrica: 268 CV con tracción trasera, batería LFP de 78 kWh con 470 km WLTP y un precio de 53.616 €. La química LFP es su argumento silencioso: más duradera, más barata de reemplazar y menos sensible a las cargas al 100 %, ideal para quien carga en casa a diario. Los 502 litros de maletero más el frunk lo hacen familiar de verdad.

El problema es el escaparate: por ese precio, el Tesla Model Y ofrece más por menos, y la carga rápida no es su fuerte frente a los rivales coreanos de 800 V. Con 4.743 mm, además, aparcar en ciudad exige pericia.

Es para el conductor que valora la diversión —es el Mach-E más ágil de la gama gracias a la propulsión— y la durabilidad de la batería por encima de la última décima de autonomía; no es para el cazador de chollos eléctricos, porque ahí la competencia aprieta. El eléctrico divertido y honesto, sin alardes.`,

  "ford-mustang-mach-e-2026-precio-ficha-tecnica": `El Mach-E 2026 es el salto que la gama necesitaba: la batería crece a 88 kWh y la autonomía se dispara a 615 km WLTP en la versión de tracción trasera, con 276 CV y un consumo de 17,7 kWh/100 km. De golpe, el Mach-E pasa de eléctrico correcto a uno de los SUV eléctricos con más autonomía del mercado, y suma el acabado GT California Special y una versión GT de 487 CV con 0-100 en 3,7 s para los impacientes.

La ficha avisa de las sombras: el precio en España aún no está confirmado, no todas las versiones llevan bomba de calor y el maletero delantero es pequeño. Detalles que Ford debería haber resuelto a estas alturas.

Es para quien esperaba la madurez del Mach-E antes de dar el salto: 615 km cambian el uso real del coche; no es para quien necesite comprar ya, porque sin precio cerrado no hay decisión posible. La evolución justa en el momento justo.`,

  "ford-mustang-mach-e-extended-2025-precio-ficha-tecnica": `El Mach-E de Rango Extendido es el viajero de la familia: 99 kWh de batería, 615 km WLTP y una autonomía real de autopista superior a 450 km, cifras que lo colocan entre las mayores autonomías del mercado eléctrico. Con 276 CV y tracción trasera mantiene el tacto divertido, y el consumo de 17,7 kWh/100 km es razonable para su tamaño.

El peaje es el precio: 67.395 €, territorio premium alemán donde el BMW iX3 y el Audi Q4 juegan con más red. Además, la batería grande implica peso alto y mayor consumo en ciudad, y la carga rápida no aprovecha al máximo los 99 kWh: parar a cargar lleva su tiempo.

Es para el que hace kilómetros de autopista y quiere un eléctrico sin planificar la vida alrededor de los cargadores; no es para el urbano, porque en ciudad una batería más pequeña rinde igual por menos dinero. Autonomía máxima a cambio de factura máxima: la ecuación es transparente.`,

  "ford-mustang-mach-e-gt-2025-precio-ficha-tecnica": `El Mach-E GT es la respuesta eléctrica al apellido Mustang: 487 CV, tracción total, 950 Nm, 0-100 en 3,8 s y frenos Brembo con puesta a punto específica. La batería de 99 kWh le permite prometer 515 km WLTP, así que las prestaciones no implican renunciar a viajar: es el Mach-E más rápido sin convertirse en un juguete inutilizable.

El coste de la diversión se mide en tres frentes: 78.579 € de precio, en plena guerra con el Model Y Performance y el BMW iX3; 21 kWh/100 km homologados, consumo de deportivo; y un peso que se nota en carreteras reviradas pese a la puesta a punto.

Es para quien quiere un SUV eléctrico que emocione de verdad y asume la factura; no es para el conductor eficiente, porque gasta como lo que es: un deportivo de 2.351 kg. El GT justifica el nombre Mustang más que ninguna otra versión de la gama.`,

  "ford-mustang-mach-e-rally-2025-precio-ficha-tecnica": `El Mach-E Rally es el Ford eléctrico más peculiar y caro de la gama —81.182 €— y también el más divertido sobre tierra: 487 CV y 950 Nm con 0-100 en 3,5 s, suspensión elevada, protecciones y un modo RallySport que lo convierten en el único eléctrico con auténtica alma de rally. Es el anti-SUV eléctrico: en lugar de prometer eficiencia, promete barro.

La ficha no oculta el precio de la fiesta: 21,3 kWh/100 km, el consumo más alto de todos los Mach-E, y una velocidad máxima limitada a 200 km/h. La batería de 91 kWh rinde 510 km WLTP, pero en uso rallystico la autonomía se evapora.

Es para el aficionado a la tierra con presupuesto generoso que quiere algo que no existe en ningún otro catálogo; no es para nadie que busque lógica, porque por 81.000 € hay opciones más rápidas, más eficientes y más prácticas. Un capricho maravilloso: el eléctrico que se compraría Colin McRae.`,
  "ford-fiesta-2025-precio-ficha-tecnica": `El Fiesta 2025 es un fantasma con etiqueta ECO: la producción terminó en julio de 2023, así que solo quedan stock y ocasión, pero la ficha lo mantiene vivo con argumentos. El 1.0 EcoBoost MHEV de 125 CV con 210 Nm, 5,0 l/100 km homologados y etiqueta ECO desde 21.521 € compone un utilitario redondo: mechero en consumo, con acceso a las ZBE y el que fue el mejor chasis de su generación.

Las limitaciones son las de un coche descatalogado: maletero de 311 litros justo para 4,07 m, prestaciones modestas con 9,4 s de 0 a 100 y, sobre todo, la incertidumbre del stock disponible y su precio real en cada concesionario.

Es para quien encuentre una unidad nueva a buen precio y quiera un utilitario divertido y eficiente con ECO; no es para quien busque novedad o garantía de futuro, porque el Fiesta ya es historia. Curiosidad honesta: comprar un coche muerto puede ser la mejor compra si el descuento acompaña, porque el producto era excelente.`,

  "ford-fiesta-st-2023": `El Fiesta ST 2023 es el epitafio de una era: 200 CV, 320 Nm, 0-100 en 6,5 s y 232 km/h de punta en un utilitario de 4,09 m y 1.205 kg. Fue el rey de los GTI pequeños, con un chasis que avergonzaba a deportivos mucho más caros y un tres cilindros lleno de carácter. La ficha lo resume con frialdad: 149 g/km de CO₂, etiqueta C y 6,7 l/100 km homologados.

Ya no se fabrica, y esa es precisamente su fuerza en el mercado de ocasión: cada año que pasa, un Fiesta ST bien cuidado vale más como objeto de culto. No hay sucesor, ni lo habrá, porque Ford ha abandonado el segmento.

Es para el entusiasta que busca el último gran utilitario deportivo de combustión y está dispuesto a pelear en el mercado de segunda mano; no es para quien necesite un coche nuevo con garantía y etiqueta ECO. Dentro de una década será un clásico; hoy ya se comporta como tal en precio.`,

  "ford-focus-2024-precio-ficha-tecnica": `El Focus 2024 representa el canto del cisne del compacto de Ford: el 1.0 EcoBoost MHEV de 125 CV con etiqueta ECO, 5,3 l/100 km y 119 g/km de CO₂, desde 24.715 € en acabado ST-Line gracias a descuentos oficiales agresivos. La ficha insiste en su gran virtud histórica: sigue siendo de los compactos más divertidos de conducir, con un chasis de referencia que sus rivales nunca igualaron del todo.

Pero es un modelo en retirada: fin de producción anunciado, interior que se nota anticuado frente a rivales renovados y un 1.0 MHEV de 125 CV que no brilla por prestaciones, con 10,2 s de 0 a 100.

Es para quien priorice el tacto de conducción y aproveche los descuentos de liquidación; no es para quien busque tecnología al día o valor de reventa, porque un modelo sin sucesor se deprecia con crueldad. El mejor chasis de su generación, vendido a precio de saldo: la despedida tiene su punto dulce.`,

  "ford-focus-2025-precio-ficha-tecnica": `El Focus 2025 es historia del automóvil en tiempo real: la producción terminó en 2025 y Ford no ha anunciado sucesor, así que este compacto cierra 27 años de saga. La ficha lo despide con el 1.0 EcoBoost MHEV de 125 CV, etiqueta ECO, 5,3 l/100 km y 392 litros de maletero desde 24.715 €: un compacto honesto, con el chasis de referencia del segmento, vendido en liquidación.

Sin sucesor a la vista, el Focus se convierte en pieza de coleccionista involuntaria: el último compacto generalista de Ford en Europa. El interior algo anticuado y los 10,2 s de 0 a 100 importan menos cuando el coche es un documento histórico.

Es para el nostálgico que quiere despedir al Focus con una unidad nueva a precio de derribo; no es para quien busque futuro, porque su futuro es el mercado de ocasión. Curiosidad: el Golf sobrevivió a todas las crisis; el Focus no sobrevivió a la era del SUV.`,

  "ford-focus-mhev-2025-precio-ficha-tecnica": `El Focus ST-Line 1.0 EcoBoost mHEV es la compra racional de la despedida: desde 24.715 €, uno de los compactos más baratos con etiqueta ECO, con 5,3 l/100 km homologados y el chasis más divertido de su clase. La combinación de precio de liquidación, consumos contenidos y dinámica de referencia lo convierte en el chollo objetivo del segmento, al menos sobre el papel.

La honestidad exige el reverso: 125 CV son justos —10,2 s de 0 a 100—, el maletero de 392 litros está por debajo de la media y el Focus dejará de fabricarse en 2025, lo que castigará la reventa.

Es para el conductor que hace kilómetros, valora un buen chasis y no necesita alardes: el coche barato que se conduce caro; no es para quien busque prestaciones o imagen, porque en ambos frentes hay rivales mejores. Comprar el mejor Focus de la historia a precio de saldo tiene su lógica impecable.`,

  "ford-focus-st-2025-precio-ficha-tecnica": `El Focus ST 2025 es el último GTI de verdad de Ford: 280 CV y 420 Nm del 2.3 EcoBoost, 0-100 en 5,7 s, 250 km/h de punta y un chasis que la ficha califica, sin exagerar, de lo mejor que se ha hecho en un compacto. Con la producción del Focus terminada, este ST es el punto final de una saga de deportivos compactos que empezó hace décadas.

El precio de la despedida es alto: 43.567 € por un compacto, 8,0 l/100 km homologados —más en uso deportivo real— y etiqueta C que lo vetará de las ZBE más estrictas a medio plazo.

Es para el quemado que quiere el último compacto deportivo de Ford nuevo, antes de que solo queden unidades de ocasión; no es para quien busque racionalidad, porque un Golf GTI hace lo mismo con mejor reventa. El ST se despide como vivió: rápido, honesto y sin concesiones.`,

  "ford-kuga-2024-precio-ficha-tecnica": `El Kuga 2024 es el SUV familiar que se compra con la calculadora: el restyling trajo nuevo frontal y SYNC 4 actualizado, la gama híbrida es completa —FHEV con ECO y PHEV con 69 km eléctricos y etiqueta Cero— y los descuentos oficiales superan los 9.000 €, dejando el 1.5 EcoBoost de 150 CV en 30.561 €. Son 6,4 l/100 km, 412 litros de maletero y un formato de 4,6 m que encaja en la vida real.

La ficha no esconde los peros: calidad de algunos plásticos por debajo de sus rivales, un SYNC 4 que sigue sin ser de los más intuitivos y un PHEV que pierde maletero frente al gasolina.

Es para la familia que quiere un SUV híbrido con etiqueta y no quiere pagar el peaje premium: el descuento lo convierte en chollo; no es para el sibarita de interiores, porque ahí los coreanos y los alemanes juegan otra liga. Mucho coche por el dinero, con asteriscos asumibles.`,

  "ford-kuga-fhev-2025-precio-ficha-tecnica": `El Kuga FHEV es el híbrido para escépticos del enchufe: 184 CV autorrecargables con tracción total, 5,8 l/100 km homologados y etiqueta ECO, sin cables ni planificaciones. Para el conductor que hace de todo —ciudad, carretera, escapadas con lluvia— el 4x4 sin complicaciones tiene un valor real, y el maletero de 536 litros lo mantiene como familiar serio.

Los 184 CV, eso sí, ofrecen menos brío que los 243 CV del PHEV, el 2.5 atmosférico suena áspero cuando se le exige y los 1.765 kg lastra la agilidad en curvas. Es un coche eficaz, no emocionante.

Es para quien quiere hibridar su vida sin cambiar sus hábitos: se conduce como un gasolina, gasta como un híbrido y entra en las ZBE; no es para el que pueda cargar en casa, porque entonces el PHEV con etiqueta Cero es mejor compra. El híbrido invisible: ni se enchufa, ni se nota, ni se paga de más.`,

  "ford-kuga-phev-2025-precio-ficha-tecnica": `El Kuga PHEV es el enchufe con sentido familiar: 69 km eléctricos WLTP con etiqueta Cero para el día a día sin gasolina, 243 CV combinados cuando hace falta viajar y un maletero de 536 litros que lo mantiene entre los PHEV más capaces del segmento. El consumo homologado de 0,6 l/100 km es un espejismo estadístico, pero con carga diaria el gasto real se desploma.

La condición es innegociable: 44.124 € solo se justifican si se carga a diario. Sin enchufe, se arrastran 1.859 kg con el depósito como lastre, y la ausencia de carga rápida en continua limita los viajes eléctricos a la autonomía de la batería de 10,7 kWh.

Es para el familiar con garaje y enchufe que convierte 69 km en su rutina completa; no es para quien aparca en la calle, porque entonces el FHEV es más barato y más honesto. El PHEV no es magia: es un contrato con tu garaje.`,
  "ford-puma-10-ecoboost-mhev": `El Puma 1.0 EcoBoost mHEV de 125 CV es el B-SUV que se vende con argumentos de ingeniero: el maletero de 456 litros con el MegaBox —un compartimento estanco bajo el piso— es el más grande del segmento, la microhibridación otorga la etiqueta ECO y el comportamiento dinámico sigue siendo la referencia entre los SUV urbanos. Por 23.805 €, con 5,4 l/100 km y 121 g/km de CO₂, la ecuación es sólida.

La ficha advierte de dos sombras: Ford ha reducido su red en España, así que conviene vigilar el servicio postventa en tu zona, y el interior usa plásticos mejorables frente a rivales más cuidados.

Es para quien busca el SUV urbano más práctico y divertido sin pagar de más: el MegaBox solo ya justifica la compra si llevas vida activa; no es para el que priorice el interior premium, porque ahí el Puma no compite. El superventas silencioso de Ford: se vende por lo que hace, no por lo que aparenta.`,

  "ford-puma-gen-e-2025-precio-ficha-tecnica": `El Puma Gen-E es la electrificación sin dramas: 168 CV, 290 Nm, 0-100 en 8,0 s y una eficiencia notable, con 13,1 kWh/100 km que exprimen 417 km WLTP de una batería de 46,8 kWh. El maletero de 523 litros más un frunk de 43 litros lo hacen más capaz que el Puma de gasolina, y los 28.526 € con etiqueta Cero le abren todas las ZBE.

La honestidad técnica matiza: la batería pequeña penaliza la autonomía real en autopista, los 160 km/h de máxima son justitos y el precio es alto frente al EcoBoost equivalente. Es un eléctrico urbano y periurbano, no un viajero.

Es para el conductor urbano con carga en casa que quiere el Puma de siempre sin gasolina; no es para el viajante de autopista, porque ahí la batería se queda corta. Curiosidad: es de los eléctricos más eficientes del segmento precisamente por no pretender ser lo que no es.`,

  "ford-puma-mhev-2025-precio-ficha-tecnica": `El Puma 1.0 EcoBoost mHEV de 155 CV con cambio Powershift es el punto dulce de la gama: 8,7 s de 0 a 100, 200 km/h de máxima, 5,7 l/100 km y etiqueta ECO por 26.303 € con descuentos. Añade el maletero de 456 litros con MegaBox y el chasis de referencia, y tienes el B-SUV redondo para quien no quiere enchufes.

La gama 2025, eso sí, perdió la opción diésel —irrelevante para casi todos—, y el interior mantiene plásticos duros que desentonan con el precio. El Powershift de doble embrague cumple sin enamorar.

Es para quien quiere el Puma más rápido sin llegar al ST: 155 CV mueven con alegría los 1.368 kg; no es para el purista del cambio manual, porque el Powershift impone su lógica. El equilibrio perfecto entre el Puma básico y el ST: ni soso, ni radical. Con 240 Nm de par, 1.368 kg y el cambio Powershift, el 155 CV es el Puma más equilibrado de la gama sin llegar al ST: la ficha lo señala como el SUV urbano más vendido en España durante varios años, y el MegaBox sigue sin rival entre los B-SUV. La plaza central trasera es estrecha, así que conviene verlo como un 4+1 antes que como un 5 plazas real.`,

  "ford-puma-st-2025-precio-ficha-tecnica": `El Puma ST es una rareza del mercado: un SUV urbano deportivo con 170 CV microhibridados, etiqueta ECO, 0-100 en 7,4 s y 210 km/h de punta, puesto a punto por Ford Performance. Deportividad sin vetos urbanos: entra en las ZBE, gasta 6,0 l/100 km homologados y divierte como pocos en su precio, con 33.641 € de tarifa.

El peaje del ST es conocido: suspensión firme que en ciudad puede resultar incómoda, y un precio que roza el de deportivos de segmento superior. No hay cambio deportivo puro: manual o Powershift, sin opción intermedia ideal.

Es para el padre o la madre que se niega a conducir un electrodoméstico: el SUV familiar que se disfruta en curvas; no es para quien priorice el confort, porque el ST no perdona. El SUV urbano más divertido de su precio sigue siendo un Ford, y eso dice mucho de la competencia. Los 248 Nm, los 1.394 kg y el chasis de 4.226 mm firmado por Ford Performance explican su fama: es el SUV urbano más divertido de su precio con un consumo contenido de 6,0 l/100 km. Eso sí, la ficha avisa de que el tres cilindros no perdona los excesos y de que la tarifa roza los 37.400 €, cerca ya de deportivos de segmento superior.`,

  "ford-puma-st-line-x-mhev-155-2025-precio-ficha-tecnica": `El Puma ST-Line X 155 es el Puma con traje deportivo y corazón sensato: 155 CV con cambio Powershift, 0-100 en 8,7 s, 200 km/h de máxima y etiqueta ECO por 29.330 €. Ofrece la estética ST, el maletero de 456 litros con MegaBox y unas prestaciones vivas sin el compromiso de la suspensión del ST de verdad.

La ficha plantea el dilema honesto: el Puma ST de 200 CV —bueno, 170 en esta generación microhibridada— cuesta poco más, así que el ST-Line X vive a la sombra de su hermano mayor. Y el Powershift de 7 velocidades es mejorable en tacto.

Es para quien quiere la imagen ST con el confort de una suspensión normal y consumos de 5,7 l/100 km; no es para el que busque el tacto genuinamente deportivo, porque para eso está el ST. El término medio con estilo: paga la estética, ahorra en compromiso. Con 240 Nm, 1.368 kg y 200 km/h de punta, el ST-Line X ofrece el tacto ágil del Puma con la estética deportiva y un maletero de 456 litros de los mejores del segmento. La ficha recuerda que no hay modo eléctrico puro: es un mild-hybrid honesto, no un híbrido al uso. Para el día a día, el equilibrio entre imagen y eficiencia es difícil de batir.`,

  "ford-tourneo-connect-phev-150-2025-precio-ficha-tecnica": `La Tourneo Connect PHEV es la combi familiar que se enchufa: 150 CV del 1.5 EcoBoost híbrido enchufable, etiqueta Cero, 0,5 l/100 km homologados y 5 plazas con gran espacio en 4.853 mm, por 38.907 €. La batería de 20 kWh promete 119 km eléctricos y admite carga rápida de 50 kW, algo raro en un PHEV y muy útil para recargas exprés.

La ficha es honesta sobre las dudas: la autonomía eléctrica carece de cifra verificada independiente, es más cara que la gasolina equivalente y solo hay tracción delantera.

Es para la familia numerosa con enchufe que necesita espacio de furgoneta con etiqueta Cero: el uso diario eléctrico cambia la economía del coche; no es para quien no pueda cargar, porque sin enchufe es una Connect cara. La furgoneta familiar electrificada existe, y tiene sentido si el cable llega al garaje. Los 350 Nm de par, las puertas correderas —ideales con niños— y el formato Grand con 5 plazas y gran espacio la convierten en la combi familiar electrificada de referencia. La ficha advierte del peso elevado por la batería: sin carga diaria, el sobrecoste frente a la Connect de gasolina no se amortiza. Con enchufe, en cambio, la ecuación cambia por completo.`,

  "ford-tourneo-courier-2025-precio-ficha-tecnica": `La Tourneo Courier es el aprovechamiento del espacio llevado al extremo: 570 litros de maletero en solo 4,34 m de largo, puertas correderas traseras que facilitan el acceso en aparcamientos estrechos y el 1.0 EcoBoost de 125 CV con cambio manual, sencillo y fiable. Por 26.652 € ofrece 5 plazas y una modularidad que ningún SUV del precio iguala.

El reverso es mecánico y administrativo: el 1.0 gasolina sin hibridación se queda con etiqueta C, los 6,7 l/100 km homologados son mejorables y los 125 CV van justos con el coche cargado y la familia dentro.

Es para la familia práctica que prioriza espacio y acceso sobre imagen: las puertas correderas con niños son una bendición; no es para quien busque eficiencia con etiqueta, porque ahí no compite. El monovolumen honesto: ni pretende ser SUV, ni lo necesita. Desde 26.652 € es el familiar Ford más barato, con 1.373 kg, cambio manual sencillo y fiable y acabados propios de un derivado de furgoneta. La ficha es clara: no pretende ser premium, pretende ser práctico. Para quien valora el espacio y el acceso sobre la imagen, no hay rival en precio en el catálogo Ford.`,

  "ford-tourneo-custom-phev-2025-precio-ficha-tecnica": `La Tourneo Custom PHEV es el monovolumen grande que se atreve con el enchufe: 232 CV combinados, 52 km eléctricos WLTP con etiqueta Cero y hasta 9 plazas en 5,45 m, por 51.699 €. Mueve con soltura lo que pesa una familia numerosa con equipaje, y el 1,8 l/100 km homologado con batería cargada promete costes irrisorios en uso urbano.

Pero 52 km eléctricos son justos para jornadas largas de un vehículo de este tamaño, el sistema híbrido resta carga útil y el precio supera con holgura al diésel equivalente.

Es para el transporte colectivo con base fija y enchufe —hoteles, lanzaderas, familias muy numerosas— que amortiza cada kilómetro eléctrico; no es para el uso intensivo en carretera, donde el diésel sigue mandando. La gran furgoneta de pasajeros entra en la era eléctrica por la puerta del enchufe nocturno. Con 525 Nm, hasta 9 plazas y la promesa de ser el equilibrio perfecto entre el diésel y el eléctrico, la Custom PHEV es la lanzadera familiar electrificada. La ficha insiste en que no hay carga rápida en continua: los viajes largos dependen del motor térmico. Es un PHEV de base fija con enchufe, no un devorador de autopistas.`,

  "ford-transit-city-2026-precio-ficha-tecnica": `La Transit City 2026 quiere ser la eléctrica de los repartidores: desde 26.400 € sin IVA, la más barata de su clase, con 150 CV, batería de 56 kWh, 254 km de autonomía y carga rápida de 87 kW. Añade 8 años de garantía y etiqueta Cero, y el argumento para flotas urbanas es redondo: coste por kilómetro imbatible y acceso libre a las ZBE.

La ficha marca los límites: una sola configuración disponible, autonomía justa para uso interurbano y una red comercial aún en despliegue que obliga a preguntar por el servicio en tu zona.

Es para el reparto urbano con rutas predecibles y base con cargador: 254 km dan para una jornada de ciudad; no es para el autónomo que hace interurbano sin planificar, porque ahí la autonomía aprieta. La furgoneta eléctrica barata ya existe; ahora falta que la red la acompañe. Los 260 Nm, las 3 plazas y los 1.915 kg la definen como herramienta urbana pura, ideal para reparto con rutas fijas e idas y vueltas a la base. La ficha la presenta como una marca nueva en el mercado español: conviene atar por escrito el servicio postventa antes de firmar una flota. El precio sin IVA de 26.400 € es su mejor argumento comercial.`,

  "ford-transit-connect-phev-2026-precio-ficha-tecnica": `La Transit Connect PHEV 2026 es la furgoneta pequeña que juega a dos bandas: 150 CV híbridos enchufables con etiqueta Cero, 110 km de autonomía eléctrica, carga de 50 kW y 3.100 litros de carga, desde 32.771 € financiando. El 0,5 l/100 km homologado y los 11 g/km de CO₂ la convierten en la Connect más limpia de la historia.

Las pegas son de formato: solo 2 plazas en la versión Van —es una herramienta de trabajo, no un familiar— y un precio superior al diésel que exige amortizar con kilómetros eléctricos.

Es para el profesional urbano con rutas diarias dentro de los 110 km eléctricos y enchufe en la base: el ahorro en combustible paga la diferencia; no es para el que necesite plazas traseras o haga larga distancia, porque no es su guerra. La furgoneta PHEV tiene sentido cuando el cable manda en la jornada. Con 350 Nm, 4,5 m de largo y 3.100 litros de carga, la Connect PHEV es la furgoneta pequeña pensada para moverse por la ZBE sin restricciones. La ficha subraya que es ideal para reparto urbano con acceso a zonas restringidas: el nicho es estrecho, pero el producto encaja como un guante para el mensajero urbano.`,
  "ford-transit-custom-2025-precio-ficha-tecnica": `La Transit Custom es la furgoneta media más vendida de Europa, y lo es por méritos contables: el 2.0 EcoBlue de 150 CV equilibra consumo —7,3 l/100 km— y prestaciones, la versión Kombi mezcla personas y carga con 9 plazas y la fiabilidad está probada en millones de kilómetros de flota. Por 41.705 € en acabado Kombi Trend compras el valor seguro del segmento.

El contexto aprieta: etiqueta C con vetos futuros en repartos urbanos, un diésel con los días contados en ciudad y unas opciones que disparan el precio rápidamente.

Es para la empresa que necesita una furgoneta probada hoy, sin experimentos: la Custom no falla; no es para quien opere en centros urbanos con ZBE estrictas a medio plazo, porque ahí la eléctrica o la PHEV mandan. La reina de las furgonetas sigue reinando, pero el reino cambia de normas. Los 360 Nm del 2.0 EcoBlue, las 9 plazas de la Kombi L1 y el título de furgoneta media más vendida de Europa la blindan como valor seguro. La ficha advierte con honestidad: confort de turismo, no de berlina —sigue siendo una furgoneta—. Para trabajar, perfecta; para viajar en familia exigente, un monovolumen como la Tourneo Custom es mejor opción.`,

  "ford-transit-custom-nugget-2025": `La Transit Custom Nugget es la camper con pedigrí: transformación firmada por Westfalia con garantía de fábrica Ford, techo elevable, 5 plazas de viaje y 4 camas en menos de 5 m, con el 2.0 EcoBlue de 170 CV como motor más potente de la gama Nugget. Es la camper compacta que se conduce como una furgoneta y se vive como un apartamento.

El precio es el debate: desde 79.250 €, la más cara de su clase, sin baño —la ducha exterior es un apaño— y con etiqueta C diésel que complica las ZBE del centro de las grandes ciudades.

Es para la familia que quiere la camper compacta de referencia y paga la prima Westfalia sin rechistar; no es para quien necesite baño integrado o entre en ciudad a diario, porque ahí la California o la PHEV tienen ventaja. La Nugget no es barata: es la que mejor envejece.`,

  "ford-transit-custom-nugget-2026-precio-ficha-tecnica": `La Nugget 2026 mantiene la fórmula que la hizo mito: conversión camper de Westfalia, referencia del sector, con el diésel EcoBlue de 170 CV —manual o automático de 8 marchas—, techo elevable, 5 plazas y 4 camas en solo 5,05 m. El precio de partida baja a unos 72.290 € en España, lo que la hace más accesible que la 2025 sin perder un ápice de su esencia.

Los peros son estructurales: etiqueta C en diésel sin ventajas en ZBE y un consumo homologado de 8,5 a 9,1 l/100 km que sube con la camper cargada hasta el techo.

Es para quien busca la camper compacta definitiva con garantía de fábrica y no le asusta el diésel; no es para el urbanita de ZBE ni para el que necesite etiqueta Cero, porque la versión PHEV Active cubre ese hueco por más dinero. Westfalia + Ford: la alianza que inventó el segmento sigue marcando el paso.`,

  "ford-transit-custom-nugget-active-2026-precio-ficha-tecnica": `La Nugget Active 2026 es la camper que rompe el molde: híbrida enchufable de 233 CV con 56 km en modo eléctrico y etiqueta 0, la primera camper compacta que entra en las ZBE sin pedir permiso. Suma la estética Active de estilo SUV —parrilla específica, protecciones, llantas de 17"— y asientos de tejido hidrófugo pensados para la vida al aire libre.

El precio ronda los 78.000 €, la batería de 11,8 kWh es justa para una camper de este tamaño y peso, y la tracción total no está disponible con la híbrida enchufable: si quieres 4x4, toca diésel.

Es para el camperista que viaja a ciudades con ZBE y quiere pernoctar sin restricciones, cargando cada noche; no es para el aventurero de pistas, porque sin tracción total su terreno es el asfalto. La primera camper PHEV seria del mercado: cara, pionera y con etiqueta 0 como arma definitiva. Con 233 CV, 5 plazas y 5,05 m, la Active PHEV es la camper que entra en la ZBE en silencio eléctrico y pernocta sin restricciones. La ficha reconoce que la autonomía eléctrica es limitada para el tamaño y el peso: es una camper de escapadas con base urbana, no de grandes travesías. Pionera con asteriscos, pero pionera al fin.`,

  "ford-transit-custom-nugget-plus-2026-precio-ficha-tecnica": `La Nugget Plus 2026 es la camper para los que la Nugget normal se les queda pequeña: la batalla larga de 5,45 m regala cocina más grande, armario empotrado mayor y, como primicia que adelantó a la Volkswagen California, aseo integrado opcional. El diésel EcoBlue de 170 CV con automático de 8 marchas mueve el conjunto con soltura.

Desde unos 75.000 €, el precio es elevado, los 5,45 m complican aparcar y entrar en parkings, y la etiqueta C del diésel no ayuda en ciudad.

Es para la pareja o familia que prioriza el confort interior y el baño propio por encima de la compacidad: la Plus es casi una autocaravana; no es para quien busque la camper ágil de 5 m, porque esos 45 cm extra se notan en cada maniobra. El baño integrado en una camper de este tamaño era impensable hace una década: Westfalia lo ha hecho realidad.`,

  "ford-transit-nugget-plus-2025": `La Nugget Plus 2025 anticipó lo que la 2026 consolidó: la camper larga de Ford con 5,34 m, 5 plazas, 170 CV y 390 Nm del 2.0 EcoBlue, capaz de 180 km/h de punta y con un consumo de 8,0 l/100 km. La ficha advierte con honestidad: el precio de unos 75.000 € es aproximado y no oficial, así que conviene confirmar en concesionario.

Comparte virtudes y pecados con su sucesora: espacio generoso para una camper, pero etiqueta C y dimensiones que la destierran de los parkings.

Es para quien encuentre una unidad de 2025 con descuento frente a la 2026: mismo concepto por menos dinero; no es para quien exija el último grito, porque la 2026 afina la fórmula. En el mercado camper, un año de diferencia se paga: la 2025 es la oportunidad del comprador paciente. Con 390 Nm, 5 plazas y 180 km/h de punta, la Plus 2025 ofrece el formato largo con el 2.0 EcoBlue de 170 CV y un consumo de 8,0 l/100 km. La ficha es honesta: sin datos EuroNCAP específicos y con el maletero por verificar, conviene revisar a fondo la unidad concreta. El precio aproximado de 75.000 € no es PVP oficial: hay que confirmarlo en concesionario.`,

  "ford-nugget-active-2026-precio-ficha-tecnica": `La Nugget Active diésel es la camper con look aventurero: el acabado Active añade detalles exclusivos que la convierten en la Nugget más equipada visualmente de la gama, con el 2.0 EcoBlue de 170 CV y 405 Nm —el más potente de la gama Nugget—, techo elevable con cama doble y banco trasero convertible para 4 plazas.

La ficha es transparente: el precio no está publicado por Ford España, hay que pedir presupuesto en concesionario, el acabado Active encarece frente al Titanium y el baño sigue siendo de compromiso, con ducha exterior o pack opcional.

Es para quien quiere la Nugget con la estética más campera y el motor más potente sin dar el salto a la PHEV; no es para quien busque el mejor precio, porque el Active se paga. Entre la Titanium y la PHEV Active, esta diésel es el término medio con carácter: la que mejor luce en el camping.`,
  "forthing-friday-ev-2025-precio-ficha-tecnica": `El Friday EV es el SUV eléctrico chino que juega al despiste: 204 CV, 340 Nm, 0-100 en 7,9 s y una batería de 85,9 kWh que promete hasta 600 km en ciclo CLTC y 480 km en la ficha, con un maletero de 541 litros de los grandes del segmento. Por una estimación de 32.990 €, la relación batería/precio es de las mejores del mercado.

Los asteriscos son importantes: sin precio europeo oficial, potencia de carga rápida sin publicar y una marca con presencia testimonial en España. Comprar un Friday hoy es un acto de fe en el importador.

Es para el early adopter que quiere mucha batería por poco dinero y asume la incertidumbre de la red; no es para quien necesite servicio postventa garantizado, porque Forthing en España es casi una incógnita. El dato curioso: 85,9 kWh por ~33.000 € es una oferta que ningún europeo iguala, si el coche llega de verdad.`,

  "forthing-friday-reev-2025-precio-ficha-tecnica": `El Friday REEV propone la cuadratura del círculo: 200 km en modo 100 % eléctrico y 1.137 km de autonomía total gracias al extensor, con 261 CV y 370 Nm de par instantáneo y etiqueta Cero de la DGT. Es el SUV que promete la semana eléctrica y el viaje sin escalas, con el maletero de 541 litros intacto.

La ficha enfría el entusiasmo con honestidad: precio sin confirmar, capacidad de la batería sin publicar y consumo con el extensor en marcha por confirmar. Demasiadas incógnitas para un lanzamiento en curso.

Es para quien quiera lo mejor de los dos mundos y pueda esperar a que el producto madure; no es para comprar hoy, porque faltan los datos básicos. El REEV —eléctrico con extensor— es la tecnología más sensata para España, y el Friday la ofrece en formato SUV familiar: cuando llegue con precios, habrá que mirarlo en serio. Los 370 Nm de par instantáneo y el extensor que genera electricidad en marcha eliminan la ansiedad de autonomía: 1.137 km totales con etiqueta Cero y 200 km eléctricos para el día a día. La ficha pide cautela: sin red en España y con el consumo del extensor por confirmar, es un producto para observar de cerca, no para comprar hoy.`,

  "forthing-s7-ev-2025-precio-ficha-tecnica": `El S7 EV es la berlina eléctrica eficiente que nadie conoce: 218 CV y 310 Nm con tracción trasera, 0-100 en 6,7 s y un consumo de 11,9 kWh/100 km que exprime 565 km de autonomía CLTC de solo 59,4 kWh. La eficiencia es su superpoder: recorre más con menos batería que casi cualquier rival, en una berlina de 4.935 mm con maletero de 541 litros.

Sin precio europeo oficial —estimación de 31.990 €—, velocidad máxima limitada a 165 km/h y una marca sin presencia en España, el S7 es hoy un ejercicio teórico.

Es para el enamorado de la eficiencia que sigue el mercado chino y sueña con su llegada; no es para comprar mañana, porque no hay dónde. La lección del S7 es técnica: la autonomía no se compra solo con kilovatios-hora, se gana con eficiencia. 565 km con 59,4 kWh es una masterclass que los europeos deberían estudiar.`,

  "forthing-s7-reev-2026-precio-ficha-tecnica": `El S7 REEV es la berlina de la autonomía imposible: 235 km eléctricos CLTC con batería LFP de 28,4 kWh y hasta 1.250 km de alcance combinado con el extensor 1.5, todo con 218 CV, 310 Nm, tracción trasera y 0-100 en 7,2 s. Por 17.251 € en China —129.900 yuanes—, es una de las berlinas tecnológicamente más avanzadas por el precio de un utilitario europeo.

El matiz es geográfico: solo se vende en China, el motor 1.5 de 105 CV solo genera electricidad y la marca no tiene red en España.

Es para el observador del mercado que quiere entender hacia dónde va la industria: el REEV chino ofrece autonomía total sin ansiedad eléctrica; no es para el comprador europeo, porque no existe aquí. 1.250 km sin repostar ni enchufar: la ansiedad de autonomía, resuelta a la china. Con 1.810 kg, un Cx de 0,191 y portón trasero tipo liftback, el S7 REEV combina eficiencia aerodinámica y practicidad diaria. La ficha detalla la batería LFP de 28,4 kWh y advierte de que la autonomía es CLTC, no WLTP: la real será menor. Aun así, 1.250 km combinados con tracción trasera impresionan en una berlina de 17.251 €.`,

  "forthing-t5-2025-precio-ficha-tecnica": `El T5 es el SUV de 7 plazas al precio de un 5 plazas europeo: casi 4,8 m de largo, motor 1.5 turbo de 190 CV con cambio DCT y un espacio interior generoso para siete ocupantes. La propuesta es simple y demoledora: el formato familiar grande sin el peaje premium.

Sin precio ni venta confirmada en Europa, sin etiqueta ECO —gasolina Euro 6 pura— y con un consumo elevado para su tamaño, el T5 es hoy una promesa lejana.

Es para la familia numerosa que mira a China con esperanza y paciencia; no es una opción de compra real en España. El dato que duele: en Europa, 7 plazas útiles por menos de 35.000 € casi no existen; en China, el T5 demuestra que es posible. Cuando los chinos desembarquen en serio, este segmento temblará. Con 7,2 l/100 km, 7 plazas y una tercera fila utilizable, el T5 es el familiar grande honesto que Europa ya no fabrica. La ficha advierte de la ausencia de datos Euro NCAP: sin estrellas no hay compra racional posible. Si algún día llega con 5 estrellas y precio cerrado, el segmento de los 7 plazas asequibles temblará.`,

  "forthing-t5-evo-2025-precio-ficha-tecnica": `El T5 EVO es el SUV chino con diseño italiano: 4.565 mm de líneas que parecen de un segmento superior, motor 1.5 turbo Mitsubishi de 177 CV —robusto y probado—, cambio DCT de 7 marchas y buen nivel de equipamiento por 30.180 €. Son 174 g/km de CO₂ y 7,4 l/100 km, cifras honestas de gasolina sin hibridar.

Sin etiqueta ECO, con 9,5 s de 0 a 100 sin pretensiones deportivas y una red de servicio muy pequeña en Europa, el EVO se vende por diseño y precio, no por tecnología.

Es para quien quiere un SUV con presencia por poco dinero y no le importa la etiqueta; no es para el conductor concienciado con las ZBE, porque la C limita. Curiosidad: el motor Mitsubishi es su mejor argumento de fiabilidad, una rareza en un chino: mecánica japonesa probada bajo diseño italiano a precio chino. Globalización en estado puro. Los 285 Nm, los 1.500 kg y el techo panorámico con doble pantalla digital redondean un SUV vistoso por 30.180 €. La ficha avisa de que el consumo real supera los 7,4 l/100 km homologados: el 1.5 turbo Mitsubishi gasta lo que anda. Diseño italiano y mecánica japonesa probada; la etiqueta C, en contra.`,

  "forthing-t5-evo-hev-2025-precio-ficha-tecnica": `El T5 EVO HEV es la versión sensata del EVO: 245 CV combinados con solo 4,9 l/100 km homologados, etiqueta ECO de la DGT y 0-100 en 8,2 s, más rápido que el gasolina puro. Por una estimación de 33.990 € ofrece potencia, eficiencia y acceso a las ZBE en un SUV de 4.595 mm con 480 litros de maletero.

No es enchufable —sin etiqueta Cero ni autonomía eléctrica— y el peso extra del sistema híbrido se nota, pero el salto frente al gasolina es notable en consumo y prestaciones.

Es para quien quiere el EVO con conciencia: gasta menos, corre más y entra en la ciudad; no es para el que busque el enchufe, porque no existe en esta gama. 245 CV con 4,9 l/100 km era ciencia ficción hace una década en un SUV de este tamaño: la hibridación china ya está aquí. Con el mismo equipamiento premium —techo panorámico y ADAS— y 245 CV, el HEV justifica su sobreprecio en el surtidor: 4,9 frente a 7,4 l/100 km del gasolina. La ficha confirma que es más rápido que el gasolina puro: aquí la hibridación suma prestaciones, no solo eficiencia. Lástima la red comercial mínima en España.`,

  "forthing-u-tour-2025-precio-ficha-tecnica": `El U-Tour es el monovolumen que se niega a morir: 7 plazas reales en 4.850 mm, puertas correderas con gran acceso a la tercera fila, motor 1.5 turbo de 177 CV con DCT de 7 marchas y 180 g/km de CO₂, por 31.180 € de referencia. En un mercado que ha abandonado las vans, el U-Tour recuerda por qué existían: espacio de verdad para siete.

Sin etiqueta ECO, con 7,6 l/100 km de consumo y sin venta oficial en España, es un producto para otros mercados.

Es para la familia numerosa que echa de menos los monovolúmenes de verdad y no quiere un SUV disfrazado; no es comprable en Europa hoy. El dato honesto: mientras Europa finge que los SUV de 7 plazas son monovolúmenes, China sigue fabricando los de verdad. El U-Tour es un fósil viviente, y los fósiles a veces tienen razón. Con 1.790 kg, 180 g/km de CO₂ y un nivel de equipamiento alto con techo panorámico y ADAS, el U-Tour es la van completa por 31.180 €. La ficha reconoce prestaciones modestas para el peso: el 1.5 turbo mueve 7 plazas sin alardes. Es un producto de otros mercados, pero el concepto —monovolumen de verdad— merece reivindicarse.`,

  "forthing-u-tour-hev-2025-precio-ficha-tecnica": `El U-Tour HEV es el monovolumen híbrido más potente de su precio: 252 CV combinados, etiqueta ECO de la DGT para una van de 7 plazas y asientos con ventilación, calefacción y masaje para el conductor. Son 4.850 mm de versatilidad familiar con consumos de híbrido y acceso a las ZBE.

El precio europeo está por confirmar —referencia argentina convertida de 37.600 €—, el consumo homologado no está publicado y no hay venta oficial en España: demasiados "por confirmar" para una decisión.

Es para el que sueña con la van híbrida definitiva y puede esperar; no es una compra inmediata. La idea, eso sí, es impecable: 252 CV híbridos en un 7 plazas con etiqueta ECO resuelve el dilema de la familia numerosa urbana. Si Forthing lo trae a Europa con precio cerrado, los monovolúmenes europeos deberían preocuparse. Con 10 airbags y ADAS completo de serie, el U-Tour HEV no escatima en seguridad para sus 7 plazas. La ficha advierte del peso elevado por el sistema híbrido: 252 CV tienen que mover una van grande. El precio argentino convertido de 37.600 € es orientativo y en Europa costaría más. De momento, paciencia.`,

  "forthing-v9-2025-precio-ficha-tecnica": `El V9 es la van ejecutiva híbrida enchufable: 160 km de autonomía eléctrica pura —la semana sin gasolina—, 1.300 km de autonomía combinada con el depósito de 67 litros y 7 plazas con asientos de masaje en 5.230 mm. Son 252 CV y 310 Nm con etiqueta Cero: la lanzadera de hotel que se mueve en silencio eléctrico.

Por una referencia de 42.900 € sin confirmar en Europa, con 5,23 m que complican aparcar en ciudad y la capacidad de la batería sin publicar, el V9 es un producto de nicho premium.

Es para el servicio VIP, el hotel o la familia adinerada que quiere el máximo confort con conciencia eléctrica; no es para el particular medio, por tamaño y precio. 160 km eléctricos en una van de este porte era impensable hace cinco años: la tecnología PHEV china no tiene techo. Con 310 Nm, 7 plazas y etiqueta Cero, el V9 es la van ejecutiva electrificada por 42.900 € de referencia. La ficha insiste en que la capacidad de la batería no está publicada: sin ese dato no hay cálculo de eficiencia posible. El comprador VIP exige transparencia; de momento, el V9 ofrece expectación.`,
  "foton-general-g9-2026-precio-ficha-tecnica": `La General G9 es la pick-up china de la abundancia: 5.340 mm —hasta 5,63 m en algunas versiones—, 238 CV del 2.0T gasolina con 390 Nm, versiones diésel 2.0T de 163 CV y 2.5T de 150 CV con cambio automático de 8 velocidades, todo desde unos 15.600 € convertidos desde China. Es de las pick-up más grandes por el precio más pequeño del planeta.

No se vende en España, el tamaño es excesivo para la ciudad europea y el consumo es alto: tres razones que explican por qué no la veremos por aquí.

Es para el mercado chino y latinoamericano que necesita mucho coche por poco dinero; no es una opción europea. El dato que impresiona: por lo que cuesta un utilitario en España, en China compras una pick-up de 5,6 m con 238 CV. La brecha de precios entre continentes, en un solo ejemplo. Con 390 Nm, tracción 4x4 y presencia en Chile, Colombia y otros mercados, la G9 es una pick-up global probada fuera de Europa. La ficha es clara: sin datos EuroNCAP ni venta en España, no es una opción aquí. Pero 238 CV por unos 15.600 € explican por qué Foton crece: el valor por dinero es imbatible en su continente.`,

  "foton-tunland-v7-2025-precio-ficha-tecnica": `La Tunland V7 tiene un título único en su precio: diésel microhíbrido con etiqueta ECO, algo inédito entre las pick-up asequibles. Suma el cambio ZF de 8 velocidades, 4x4 con reductora, 175 CV con 451 Nm, 8,5 l/100 km y hasta 1.000 kg de carga útil, por unos 50.000 € de referencia. Es la pick-up de trabajo que entra en las ZBE sin pedir perdón.

No se vende en Europa —sin red ni postventa—, mide 5,62 m imposibles en ciudad y la marca es desconocida en el segmento europeo.

Es para flotas y profesionales de mercados donde Foton opera, que valoran la ECO en un vehículo de trabajo; no es para Europa. La lección es para los fabricantes europeos: un diésel microhíbrido con ECO en una pick-up de trabajo es una idea brillante que nadie ofrece aquí. Foton la tuvo primero. Con 451 Nm, reductora, 4x4 y 5 años o 150.000 km de garantía, la V7 es una herramienta seria por unos 50.000 €. La ficha advierte del consumo real elevado en carga: los 8,5 l/100 km homologados son con la caja vacía. La etiqueta ECO es su pasaporte a las ZBE; la ausencia de red europea, su condena en España.`,

  "gac-aion-rt-2025-precio-ficha-tecnica": `El Aion RT es el escándalo de la relación precio/autonomía: 650 km CLTC con batería CATL LFP de 68,1 kWh, 221 CV, 320 Nm, 0-100 en 7,5 s y carga del 30 al 80 % en 18 minutos con tecnología SiC, por unos 13.000 € en China. Es la berlina eléctrica que hace parecer caras a todas las demás.

La ficha matiza con rigor: no se vende en Europa —solo el Aion V y el UT tienen planes—, los 650 km CLTC son unos 500 reales y la marca Aion aún despega en España.

Es para entender el abismo tecnológico y de precios con China: una berlina eléctrica de 650 km por 13.000 €; no es una compra posible aquí. El RT demuestra que el coche eléctrico barato con gran autonomía ya existe: solo falta que cruce el océano con aranceles asumibles. Con 320 Nm, 170 km/h de punta y baterías CATL LFP, el RT combina prestaciones y durabilidad por unos 13.000 €. La ficha recuerda que los 650 km CLTC equivalen a unos 500 reales y que no hay datos Euro NCAP: sin estrellas, Europa no lo aceptará. De momento, solo el Aion V y el UT tienen planes europeos.`,

  "gac-aion-v-2024-precio-ficha-tecnica": `El Aion V es el chino que sí puedes comprar en España: 204 CV, batería LFP de 75,3 kWh con 510 km WLTP, carga rápida de 180 kW —del 10 al 80 % en 24 minutos— y 5 estrellas Euro NCAP en 2025 con airbag central de serie, por 37.995 €. Es de las mayores autonomías por ese precio, con la seguridad certificada que muchos chinos aún no tienen.

El diseño polarizante divide opiniones, el maletero de 427 litros es justo para 4,6 m y la máxima de 160 km/h limita en autobahn, aunque en España basta.

Es para quien quiere un SUV eléctrico con gran autonomía, carga rápida y 5 estrellas sin pagar peaje premium; no es para el que busque maletero XL o imagen establecida, porque Aion aún construye su nombre. El primer GAC serio en Europa: 510 km, 180 kW y 5 estrellas por 38.000 € es una carta de presentación contundente.`,

  "gac-emkoo-2025-precio-ficha-tecnica": `El Emkoo es el híbrido con carácter: 237 CV combinados con un consumo real bajísimo probado en prensa, diseño agresivo de 4,68 m que no pasa desapercibido y caja DHT específica híbrida, suave en ciudad y resolutiva en carretera. Por unos 32.000 € de referencia ofrece prestaciones de SUV superior con gastos de utilitario.

Es híbrido no enchufable —etiqueta ECO, no Cero—, no se vende oficialmente en Europa y la batería de 2,1 kWh hace testimonial el modo eléctrico.

Es para mercados donde GAC opera y buscan un SUV híbrido con personalidad; no es comprable en España. El Emkoo demuestra que GAC sabe hacer híbridos eficientes y con diseño propio: cuando la marca desembarque en Europa en serio, este es el tipo de producto que traerá. 237 CV gastando como un utilitario: la hibridación bien hecha. Con 300 Nm, 1.540 kg, 5,2 l/100 km, 6 airbags y ADAS completo, el Emkoo es el híbrido equipado por unos 32.000 €. La ficha destaca el consumo real bajísimo probado en prensa: no es marketing, son pruebas independientes. La marca está en despliegue fuera de Asia y Latinoamérica; en Europa, todavía no existe.`,

  "gac-empow-2024-precio-ficha-tecnica": `El Empow es la berlina deportiva low-cost: 177 CV del 1.5 turbo con cambio 7DCT y modo Sport, estética agresiva, 0-100 en 7,0 s y 6,5 l/100 km, por unos 13.000 €. En Chile, donde se vende, ofrece 6 años o 250.000 km de garantía con motor de por vida: una apuesta de confianza inaudita.

No se vende en Europa, la tracción delantera lo aleja del deportivo de verdad y GAC es desconocida en berlinas en Occidente.

Es para el joven latinoamericano o de Oriente Medio que quiere deportividad visual por poco dinero; no es una opción europea. La garantía de motor de por vida es el dato curioso: ningún fabricante europeo se atreve a tanto. El Empow no es un gran deportivo, pero es una gran declaración de intenciones comercial. Con 270 Nm, 4,70 m, maletero de 415 litros y 6,5 l/100 km, el Empow es la berlina deportiva práctica por unos 13.000 €. La ficha matiza los acabados: deportivos a la vista, plásticos duros al tacto. A ese precio nadie regala nada, pero 177 CV con modo Sport y cambio 7DCT tampoco los ofrece nadie.`,

  "gac-gs8-2025-precio-ficha-tecnica": `El GS8 es el SUV familiar grande de GAC: 7 plazas reales en 4.980 mm con batalla de 2,92 m, 2.0 turbo de 248 CV y 400 Nm con cambio Aisin de 8 velocidades, versiones 4x2 y 4x4, por unos 30.000 € de referencia. Es el familiar que también sale al campo, con presencia de premium y precio de generalista.

No se vende oficialmente en España ni en Europa, la etiqueta C pagará en las ZBE más exigentes y el consumo es elevado con 7 plazas y 2 toneladas.

Es para familias numerosas de mercados GAC que necesitan espacio de verdad sin arruinarse; no es comprable aquí. El GS8 enseña el hueco del mercado europeo: un 7 plazas capaz por 30.000 € no existe en las marcas tradicionales. Cuando GAC decida venir, este segmento será su autopista de entrada. Con 400 Nm, batalla de 2,92 m, pantalla de 14,6 pulgadas, HUD y cámara de 540°, el GS8 es el SUV tecnológico familiar por unos 30.000 €. La ficha advierte del maletero de 181 litros con las 7 plazas en uso: con toda la familia, el equipaje viaja en el techo. Son 1.920 kg y 9,4 l/100 km: la física no perdona.`,

  "gac-m8-2026-precio-ficha-tecnica": `El M8 es el monovolumen híbrido enchufable de lujo chino: 372 CV y 630 Nm combinados, 180 km eléctricos, 1.038 km de autonomía total con 25,57 kWh y depósito de 56 litros, 7 plazas reales con asientos de segunda fila ajustables 480 mm y maletero de 516 litros. Por unos 46.800 € ofrece el confort de una clase V con tecnología PHEV.

No se vende en Europa —sin red ni postventa en España—, mide 5,21 m difíciles de aparcar y el interior responde al gusto chino, no al europeo.

Es para el mercado chino de ejecutivos y familias adineradas; no es una opción española. El M8 anticipa el futuro de las vans premium: 372 CV híbridos enchufables con 180 km eléctricos. Cuando este concepto llegue a Europa —y llegará—, los monovolúmenes de lujo alemanes tendrán un problema serio. Con 630 Nm, 7 plazas y 1.038 km de autonomía total, el M8 es la van de los largos recorridos por unos 46.800 € orientativos. La ficha es prudente con el precio: sin tarifa europea, todo es conversión. El interior al gusto chino puede chirriar en Europa; la ingeniería PHEV de 372 CV, no. Es el futuro de las vans premium, en chino mandarín.`,

  "gac-trumpchi-es9-2024-precio-ficha-tecnica": `El Trumpchi ES9 es el PHEV familiar más potente de GAC: 373 CV y 630 Nm combinados, 143 km CLTC en eléctrico, 7 plazas —o 6 en versión Traveler— en 5,02 m y etiqueta Cero, por unos 28.200 € de referencia. Es el SUV grande que promete el día a día eléctrico y el viaje sin límites, con potencia de deportivo.

Los 2.220 kg se notan en consumo con la batería vacía, la autonomía CLTC será menor en real y no se vende oficialmente en Europa ni en España.

Es para la familia china que quiere todo —espacio, potencia, etiqueta— por poco dinero; no es comprable aquí. El ES9 resume la estrategia china: PHEV potentes y grandes a precio de generalista europeo. 373 CV y 7 plazas por 28.000 € es una ecuación que en Europa no cuadra para nadie. Con 630 Nm, caja DHT de 2 velocidades específica para híbridos y 5,02 m, el ES9 es el PHEV familiar con ingeniería propia por unos 28.200 €. La ficha reconoce el diseño conservador frente a rivales más modernos: GAC apuesta por la sustancia. Y 373 CV con 7 plazas y etiqueta Cero son sustancia de sobra.`,

  "gac-trumpchi-gs3-emzoom-2025-precio-ficha-tecnica": `El GS3 Emzoom es el B-SUV con carácter deportivo: 1.5T de 174 CV y 270 Nm con cambio 7DCT, 0-100 en unos 8,8 s, 5,9 l/100 km y diseño afilado con parrilla Star Diamond que no pasa desapercibido, por unos 20.000 € orientativos. Es el SUV urbano que se compra con el corazón sin arruinar la cartera.

Sin tarifa europea —no se vende en España—, versión de gasolina con etiqueta C sin hibridación y sin red oficial GAC en el país, el Emzoom es un deseo lejano.

Es para jóvenes de mercados emergentes que quieren estilo y prestaciones accesibles; no es una opción española. El Emzoom demuestra que el segmento B-SUV admite deportividad honesta por 20.000 €: en Europa, esa combinación con etiqueta ECO sería un superventas. GAC lo sabe; la pregunta es cuándo viene. Con 270 Nm, 5,9 l/100 km y presencia en los mercados donde GAC vende, el Emzoom es el B-SUV probado por unos 20.000 €. La ficha advierte de que la versión base lleva solo 2 airbags en algunos mercados: conviene exigir el equipamiento completo. El carácter deportivo no debería costar seguridad.`,

  "gac-trumpchi-gs4-max-2026-precio-ficha-tecnica": `El GS4 Max es el superventas de GAC con argumentos: 1.5T de 174 CV y 270 Nm con 7DCT, maletero de 638 litros —de los mayores del segmento— y versión híbrida HEV con más de 1.000 km de autonomía, por unos 28.000 € orientativos. Es el SUV familiar que vende cientos de miles de unidades al año en China por hacer bien lo básico: espacio, fiabilidad y precio.

Sin tarifa europea —se vende en Latinoamérica—, sin red oficial en España y con la versión de gasolina en etiqueta C, el Max no es comprable aquí.

Es para la familia que necesita el SUV total sin complicaciones; no es una opción española hoy. 638 litros de maletero y un híbrido de 1.000 km por 28.000 €: el GS4 explica por qué GAC vende tanto. Cuando llegue a Europa, los Qashqai y Tucson tendrán que mirar por el retrovisor. Con 270 Nm, 8 airbags, asistente ADiGO Pilot y versión híbrida HEV de más de 1.000 km, el GS4 Max es el superventas con todas las cartas por unos 28.000 €. La ficha echa en falta datos de consumo y aceleración confirmados: GAC comunica a medias. Aun así, 638 litros de maletero hablan por sí solos.`,
  "gac-trumpchi-xiangwang-s7-2025-precio-ficha-tecnica": `El Xiangwang S7 es el SUV insignia de la serie Xiangwang: 335 CV con tracción total i4WD, 153 km eléctricos NEDC y 860 km combinados, batería de 36,3 kWh con carga rápida de 100 kW —poco común en un híbrido enchufable— y etiqueta Cero, por unos 36.000 € orientativos. Es el GAC más tecnológico con tracción total.

Precio convertido sin tarifa europea, sin venta oficial en España y con la garantía de batería sin publicar: la ficha pide prudencia.

Es para el mercado chino premium que busca el SUV tecnológico total; no es comprable en Europa. El S7 anticipa el estándar futuro: PHEV con 4x4, 150 km eléctricos y carga rápida de 100 kW. Cuando los PHEV europeos alcancen ese nivel por 36.000 €, hablamos; de momento, GAC va por delante. Con V2L de 3,3 kW —el coche alimenta dispositivos externos—, 335 CV y tracción total i4WD, el S7 es el SUV tecnológico total por unos 36.000 € orientativos. La ficha echa en falta datos de aceleración y velocidad máxima confirmados: el producto va por delante de su comunicación. La carga rápida de 100 kW en un PHEV es su firma técnica.`,

  "gac-trumpchi-xiangwang-s9-2025-precio-ficha-tecnica": `El Xiangwang S9 es el buque insignia tecnológico de GAC: 5,06 m con 6 plazas, tecnología Huawei ADS con LiDAR opcional para conducción inteligente avanzada, baterías CATL de litio ternario con carga rápida y etiqueta Cero, por unos 45.000 € orientativos. Es el SUV donde GAC enseña todo lo que sabe: lujo, tamaño y tecnología de conducción autónoma.

Los datos de potencia, batería y autonomía aún no están publicados, no hay precio oficial ni tarifa europea y no se vende en España.

Es para el tecnófilo chino con presupuesto que quiere el LiDAR en el techo; no es una opción real fuera de China. El S9 es un escaparate rodante: Huawei + CATL + GAC en un 6 plazas. La alianza tecnológica china en su máxima expresión, aunque Europa aún no pueda comprarla. Con 6 plazas, diseño robusto de líneas cuadradas y presentación en Shanghái 2025, el S9 aún está en fase de lanzamiento. La ficha reconoce que faltan potencia, batería y autonomía por publicar: hoy es un escaparate, no un producto cerrado. Huawei ADS con LiDAR opcional es su gran baza; el precio orientativo de 45.000 €, su incógnita.`,

  "geely-atlas-2025-precio-ficha-tecnica": `El Atlas es el SUV más vendido de Geely en el mundo, y se nota en la fórmula: 2.0 turbo de 218 CV y 325 Nm con DCT de 7 velocidades, 4,67 m con batalla de 2.777 mm —habitabilidad de segmento D— y una fiabilidad probada en millones de unidades. Es el SUV global que lo hace todo bien sin alardes.

Sin venta oficial en España, solo gasolina sin versiones híbridas en Europa y con cifras WLTP sin publicar, el Atlas es una referencia lejana.

Es para los mercados donde Geely vende turismos y buscan el SUV fiable de siempre; no es comprable aquí. El Atlas demuestra la base industrial de Geely: cuando el superventas mundial de una marca no se vende en tu país, el problema es comercial, no técnico. Algún día llegará, y vendrá con la lección aprendida. Con 325 Nm, plataforma CMA con genes Volvo y el título de SUV más vendido de Geely en el mundo, el Atlas es la apuesta segura de la marca. La ficha lamenta un diseño menos rompedor que el del Monjaro: el Atlas vende por fiabilidad probada, no por estilo. Sin versiones híbridas, su eventual llegada a Europa tendría que ser electrificada.`,

  "geely-binrui-cool-2025-precio-ficha-tecnica": `El Binrui Cool es la berlina barata que corre: 181 CV y 290 Nm del 1.5T, 0-100 en 7,1 s, 210 km/h de máxima y cambio de doble embrague de 7 velocidades, por unos 10.500 €. Son prestaciones de compacto deportivo europeo por el precio de un utilitario básico, en una berlina de 4.710 mm con 480 litros de maletero.

No se vende en Europa, el consumo es elevado para un 1.5T sin hibridación y las calidades interiores son mejorables.

Es para el joven de mercados emergentes que quiere prestaciones sin pagarlas; no es una opción española. 210 km/h por 10.500 € es el dato que resume al Binrui: la democratización de la velocidad a la china. En Europa, con etiqueta ECO, sería una tentación; sin ella, una curiosidad. Con 290 Nm, maletero de 480 litros y cambio de doble embrague de 7 velocidades, el Binrui Cool es la berlina completa por unos 10.500 €. La ficha aclara que la versión Cool es la deportiva y las básicas son más modestas: el apellido importa. A ese precio, 181 CV y 210 km/h de máxima son una anomalía del mercado mundial.`,

  "geely-cityray-2025-precio-ficha-tecnica": `El Cityray es el SUV compacto tecnológico barato: 1.5 turbo de 172 CV y 290 Nm con DCT de 7 velocidades, 0-100 en 7,9 s, maletero de 571 litros ampliable a 1.271 y un interior con pantalla de 13,2", cuadro digital de 10,2" y ADAS completo de serie, por unos 11.200 €. Es el SUV que ofrece equipamiento de premium a precio de utilitario.

Sin presencia oficial de Geely turismos en España, solo gasolina sin etiqueta ECO y consumo WLTP sin publicar para Europa, el Cityray es una promesa.

Es para mercados donde Geely opera y el comprador joven prioriza tecnología; no es comprable aquí. El Cityray enseña el listón chino: ADAS completo y pantallas gigantes de serie por 11.200 €. Los europeos cobran eso como extras: la diferencia de filosofía, en un ejemplo. Con 290 Nm, 1.455 kg, garantía oficial en sus mercados y ADAS completo de serie, el Cityray es el SUV equipado por unos 11.200 €. La ficha menciona el aislamiento acústico mejorable según pruebas: el punto débil de un producto por lo demás redondo. Con 571 litros de maletero ampliables a 1.271, perdonar un poco de ruido es fácil.`,

  "geely-coolray-2025-precio-ficha-tecnica": `El Coolray es el B-SUV ágil de Geely: 1.5 turbo de 177 CV, 0-100 en 7,9 s, 195 km/h de máxima y 4,38 m de agilidad urbana, con diseño juvenil y 6,6 l/100 km homologados. Por unos 10.900 € de referencia ofrece diversión y estilo en formato compacto.

El precio en España sin confirmar, el maletero de 330 litros justo y la ausencia de prueba EuroNCAP publicada enfrían el entusiasmo.

Es para el conductor joven que quiere un SUV compacto con chispa por poco dinero; no es para la familia que necesita maletero, porque 330 litros son escasos. El Coolray es el anti-SUV aburrido: pequeño, rápido y barato. Si Geely lo trae a España con precio cerrado y 5 estrellas, el segmento B se pone interesante. Con 255 Nm, 6,6 l/100 km y la noticia de que Geely vuelve a España con red oficial, el Coolray es el B-SUV a vigilar por unos 10.900 €. La ficha advierte de que la marca está en relanzamiento europeo: los primeros compradores serán pioneros. Sin prueba EuroNCAP publicada, las estrellas son la asignatura pendiente.`,

  "geely-e2-electrico-espana-13990-euros-ficha": `El E2 es el eléctrico barato con credenciales serias: desde 13.990 € con la oferta de lanzamiento, 80 CV, 252 km WLTP con batería de 35 kWh, tracción trasera con suspensión multibrazo —inédito en el segmento— y 5 estrellas Euro NCAP. Cinco plazas y hasta 1.320 litros de maletero en 4,13 m completan un urbano redondo.

La letra pequeña: el precio incluye campañas, Plan Auto+ y financiación —sin ayudas sube—, los 252 km son justos para carretera y la potencia de carga DC no está publicada en kW, aunque promete 30-80 % en 25 minutos.

Es para el urbano concienciado que quiere el eléctrico más barato con 5 estrellas; no es para viajar, porque 80 CV y 252 km limitan. El E2 demuestra que lo barato ya no es sinónimo de inseguro: 5 estrellas Euro NCAP por 13.990 € es un hito del mercado. Con 150 Nm, 1.290 kg, garantía de 8 años y red en expansión, el E2 es el urbano eléctrico con respaldo por 13.990 €. La ficha detalla que el 30-80 % se completa en 25 minutos: la carga rápida existe aunque los kW no se publiquen. La versión de 345 km cuesta más: la autonomía, como siempre, se paga aparte.`,

  "geely-e5-2026-precio-ficha-tecnica": `El E5 es el C-SUV eléctrico asequible de verdad: hasta 475 km WLTP con batería LFP de gran durabilidad, 218 CV, carga rápida del 30 al 80 % en 20 minutos y consumo de solo 16,7 kWh/100 km, desde 37.490 € —25.485 € con campañas y Plan Auto+. Es el eléctrico familiar grande al precio de un generalista de combustión.

La versión de acceso Pro se queda en 430 km —la de 475 exige el Pro+ de 39.990 €—, el tacto es confortable sin buscar emociones y no hay frunk ni cifra de maletero destacada.

Es para la familia que quiere el salto eléctrico sin pagar peaje premium: 475 km y carga en 20 minutos resuelven el uso real; no es para el quemado, porque no busca emociones. El E5 es la prueba de que el eléctrico familiar ya compite en precio con el de combustión, ayudas mediante. Con 320 Nm, 4.615 mm y batería LFP de gran durabilidad, el E5 es el C-SUV eléctrico consistente desde 37.490 €. La ficha compara versiones: el Pro+ de 39.990 € ofrece 475 km frente a los 430 del Pro. La diferencia de 45 km cuesta 2.500 € y cada comprador decidirá si la necesita. Con 16,7 kWh/100 km, la eficiencia acompaña.`,

  "geely-emgrand-2025-precio-ficha-tecnica": `El Emgrand es la berlina de la sencillez: 1.5 atmosférico de 127 CV, mecánica simple y fiable, garantía oficial de 5 años en los mercados donde se vende y el aval de ser una de las berlinas más vendidas de China durante años. Por unos 10.000 € ofrece transporte honesto sin complicaciones.

No se vende en España de momento, los 127 CV son modestos para 4.638 mm y la ausencia de hibridación penaliza el consumo frente a los híbridos.

Es para quien necesita una berlina fiable y barata en mercados Geely; no es una opción española. El Emgrand representa una especie en extinción: la berlina atmosférica sencilla y barata. En un mundo de turbos e híbridos, su éxito en China recuerda que millones de compradores solo quieren un coche que funcione. Con 152 Nm, 4.638 mm y un diseño correcto aunque poco emocionante, el Emgrand es la berlina honesta por unos 10.000 €. La ficha destaca sus años como una de las berlinas más vendidas de China: millones de unidades avalan la fiabilidad del 1.5 atmosférico. Menos tecnología, menos averías: la sencillez como virtud.`,

  "geely-ex2-2025-precio-ficha-tecnica": `El EX2 es el coche más vendido de China en 2025 —465.775 unidades— y se entiende por qué: 116 CV eléctricos, 325 km de autonomía con 40,2 kWh, tracción trasera en un urbano —casi único en su precio—, frunk de 70 litros más maletero de 375 y consumo de 12,8 kWh/100 km. Es el urbano eléctrico redondo.

En China cuesta unos 8.700 €; en Europa costará bastante más, la llegada está confirmada pero sin fecha ni precio, y los 116 CV son justos en autopista.

Es para el europeo paciente que espera el urbano eléctrico definitivo a precio rompedor; no es comprable aún. El dato es demoledor: 465.775 unidades en un año. El EX2 no es una promesa, es el coche eléctrico más exitoso del mundo ahora mismo. Cuando llegue a Europa, el Dacia Spring tendrá pesadillas. Con 150 Nm, 1.300 kg, batería LFP Blade con estructura cell-to-body y 12,8 kWh/100 km, el EX2 es el urbano eléctrico con ingeniería seria. La ficha advierte de que la red europea aún es pequeña: los primeros compradores sufrirán la postventa. Pero 465.775 unidades vendidas en China en 2025 son la mejor garantía posible.`,

  "geely-monjaro-2025-precio-ficha-tecnica": `El Monjaro es el SUV chino con chasis europeo: 2.0 turbo de 238 CV y 350 Nm con automático de 8 velocidades y tracción total, 0-100 en 7,5 s, 215 km/h de máxima y la plataforma CMA desarrollada con Volvo. Por unos 17.100 € ofrece prestaciones y chasis de primer nivel con 562 litros de maletero.

Geely aún no vende turismos en España —solo importadores—, el consumo WLTP de 7,8 l/100 km es elevado y no hay etiqueta ECO al ser gasolina pura.

Es para quien busca el SUV prestacional con base técnica sólida y acepta el importador; no es para el comprador de etiqueta. La plataforma CMA es su mejor argumento: el mismo ADN que los Volvo y Lynk & Co. El Monjaro demuestra que "chino" ya no significa chasis dudoso: significa Volvo a precio chino. Con 350 Nm, 1.675 kg y tracción total, el Monjaro es el SUV prestacional con base sólida por unos 17.100 €. La ficha reconoce que el peso penaliza la agilidad en curvas: 1.675 kg se notan. A cambio, 238 CV con chasis CMA desarrollado con Volvo son una oferta única; el consumo de 7,8 l/100 km, el peaje a pagar.`,

  "geely-panda-mini-2026-precio-ficha-tecnica": `El Panda Mini es el eléctrico más barato del mundo: desde unos 5.990 € en China, 41 CV, 210 km CLTC con 17,2 kWh, carga rápida DC de 22 kW —30 a 80 % en 30 minutos— y solo 3,15 m de largo con 4 plazas. Aparca en cualquier hueco y cuesta menos que muchas motos.

No se vende en España, los 100 km/h de máxima lo limitan a ciudad y el maletero de 69 litros es testimonial.

Es para la megaciudad china como segundo coche urbano; no es un coche europeo. Pero el concepto importa: 5.990 € por un eléctrico con carga rápida cuestiona todo el mercado. Si algo así llegara a Europa por 10.000 €, el Dacia Spring y los cuadriciclos tendrían un problema existencial. El futuro barato ya existe; solo está lejos. Con 110 Nm, 4 plazas, facelift 2025 con 2 airbags y 210 km CLTC —unos 170 reales—, el Panda Mini es el urbano mínimo viable por unos 5.990 €. La ficha es honesta: 69 litros de maletero no dan para la compra semanal. Como segundo coche urbano es perfecto; como único coche, imposible.`,

  "geely-preface-2025-precio-ficha-tecnica": `El Preface es la berlina china más potente de su precio: 2.0 turbo de 272 CV y 400 Nm, plataforma CMA con Volvo, pantalla de 14,6" con Flyme Auto y 4,83 m de berlina premium por unos 12.100 €. Es la berlina que ofrece lujo y potencia de alemán por precio de utilitario.

Sin comercialización en España ni Europa, solo gasolina sin hibridación ni ECO y con el 0-100 sin publicar oficialmente, el Preface es un sueño lejano.

Es para el mercado chino que quiere la berlina grande sin pagarla; no es una opción europea. 272 CV por 12.100 €: la cifra que resume la disrupción china. En Europa, esa potencia cuesta cuatro veces más. El Preface no necesita venderse aquí para influir: su existencia presiona los precios de todos. Con 400 Nm, 1.550 kg, 215 km/h de máxima y 7,15 l/100 km, el Preface es la berlina potente y sorprendentemente eficiente por unos 12.100 €. La ficha echa en falta la cifra de maletero oficial: un descuido en un producto por lo demás completo. Con plataforma CMA y pantalla de 14,6 pulgadas, el valor es escandaloso.`,

  "geely-starray-em-i-2026-precio-ficha-tecnica": `El Starray EM-i es el PHEV de la autonomía eléctrica generosa: hasta 136 km eléctricos y 1.055 km totales, 262 CV, carga rápida del 30 al 80 % en 16 minutos —insólita en un híbrido enchufable— y un precio desde 33.490 €, 26.215 € con promociones. Es el SUV familiar que promete la semana eléctrica y el viaje largo.

Si no se carga, el consumo se dispara —5,5 a 7,3 l/100 km en autovía según pruebas—, el cambio de una sola relación patina en aceleraciones fuertes y solo hay tracción delantera con 170 km/h de máxima.

Es para el familiar con enchufe que hará casi todo en eléctrico: 136 km cubren la rutina; no es para quien no cargue, porque entonces es un gasolina caro. El Starray demuestra que el PHEV madura: 136 km eléctricos eran territorio de eléctricos puros hace nada. Con 1.805 kg, 54 g/km de CO₂ y carga del 30 al 80 % en 16 minutos, el Starray es el PHEV con credenciales desde 33.490 €. La ficha insiste: sin carga diaria no hay compra racional, porque el consumo se dispara. Con promociones que lo dejan en 26.215 €, el descuento inicial es agresivo; el coste real lo pone el enchufe nocturno.`,
  "geely-galaxy-a7-em-i-2025-precio-ficha-tecnica": `El Galaxy A7 EM-i es la berlina de la autonomía total: 2.100 km declarados CLTC —la mayor de su segmento—, 150 km eléctricos con la batería de 18,4 kWh, 235 CV, 0-100 en 7,1 s y 2,67 l/100 km, por unos 10.250 € en China. Es una berlina media de 4.918 mm por el precio de un utilitario europeo.

Solo se vende en China, la carga rápida DC está limitada a unos 36 kW y el motor 1.5 atmosférico de 82 kW depende del apoyo eléctrico para brillar.

Es para el conductor chino que quiere olvidarse de repostar; no es una opción europea. 2.100 km de autonomía total por 10.250 €: la cifra que debería enmarcarse. El A7 demuestra que la hibridación enchufable china ya juega en otra liga de eficiencia y precio. Europa aún discute; China ya circula. Con 262 Nm, 1.735 kg, maletero de 535 litros y 0-100 en 7,1 s, el A7 es la berlina completa por unos 10.250 €. La ficha lo compara con el Starshine 8: acabados más sencillos a cambio de menor precio. La sencillez interior se perdona; 2.100 km de autonomía total, no.`,

  "geely-galaxy-battleship-700-2026-precio-ficha-tecnica": `El Battleship 700 es el 4x4 híbrido más potente de su precio: 1.113 CV, 0-100 en 3,95 s, 247 km eléctricos WLTP con batería CATL LFP de 47,14 kWh y, lo importante, chasis de largueros, bloqueo trasero y 800 mm de vadeo: un 4x4 de verdad, no un SUV disfrazado. Por unos 26.500 € de preventa en China.

Solo se vende en China sin plan europeo confirmado, el PVP final puede variar y las casi 3 toneladas lastra la eficiencia.

Es para el aficionado chino al todoterreno extremo con presupuesto contenido; no es comprable fuera. 1.113 CV con chasis de largueros y bloqueo trasero por 26.500 € es una combinación que no existe en ningún otro mercado. El Battleship es la prueba de que el 4x4 serio también se ha electrificado a lo bestia. Con modo de flotación de emergencia, giro W y 800 mm de vadeo, el Battleship es el 4x4 tecnológico por unos 26.500 € de preventa. La ficha advierte del peso cercano a las 3 toneladas: la eficiencia sufre con 1.113 CV que mover. Chasis de largueros y bloqueo trasero: un todoterreno de verdad, no un SUV disfrazado.`,

  "geely-galaxy-e8-2024-precio-ficha-tecnica": `El Galaxy E8 es la berlina eléctrica grande a precio de compacto: 5,01 m, 272 CV con tracción trasera, 460 km WLTP con 62 kWh, carga de 150 kW y 12,7 kWh/100 km, desde unos 21.550 € en China. Y existe una versión Performance con 646 CV, 800 V y 0-100 en 3,49 s. Es la berlina que hace parecer caras a las premium alemanas.

No se vende en Europa de momento, la Performance de 360 kW de carga aún no está disponible ni en China y el maletero de 465 litros es justo para 5,01 m.

Es para el mercado chino que quiere la berlina eléctrica grande sin pagarla; no es una opción europea. El E8 enseña el futuro: 5 m, 460 km y 272 CV por 21.500 €. Cuando Galaxy desembarque en Europa —los planes existen—, las berlinas eléctricas europeas tendrán que justificar cada euro. Con 343 Nm, 1.905 kg, pantalla panorámica de 45 pulgadas y 12,7 kWh/100 km, el E8 es la berlina tecnológica y eficiente por unos 21.550 €. La ficha critica el maletero de 465 litros para 5,01 m: el diseño fastback penaliza la practicidad. Aun así, la relación tamaño/precio sigue siendo imbatible en el mercado.`,

  "geely-galaxy-l6-em-i-2025-precio-ficha-tecnica": `El Galaxy L6 EM-i nació para una guerra concreta: destronar al BYD Qin L, el híbrido enchufable que define el mercado chino. Sus armas son el sistema NordThor de nueva generación, 218 CV, 140 km de recorrido eléctrico con la batería LFP de 19,09 kWh y un alcance combinado homologado de 2.000 km CLTC, con un gasto declarado de 2,9 l/100 km. Todo por unos 11.700 €: el precio de un utilitario básico en España.

El 0-100 estimado en 7,7 s no tiene cifras oficiales publicadas y la recarga en continua se queda en unos 22 kW, así que los viajes con paradas exprés no son su fuerte. Además, solo se comercializa en China sin planes europeos confirmados.

Su público es el comprador chino que elige bando en la batalla de los PHEV asequibles; en Europa no existe como opción. Con 2.000 km entre repostajes, el L6 convierte la gasolinera en una visita mensual. La hibridación enchufable china ya no discute de consumos: discute de miles de kilómetros.`,

  "geely-galaxy-l7-em-i-2025-precio-ficha-tecnica": `El Galaxy L7 EM-i es el PHEV chino más popular: más de 200.000 unidades acumuladas, 115 km eléctricos CLTC, 1.240 km de autonomía total, 218 CV con el sistema NordThor EM-i y 1,3 l/100 km, por unos 15.000 € en China. Es el SUV familiar que el mercado ha votado con la cartera.

Solo se vende en China sin fecha europea, las prestaciones son modestas —0-100 estimado en 8,2 s— y la carga DC está limitada a 22 kW.

Es para la familia china que quiere el SUV híbrido probado por cientos de miles; no es comprable en Europa. 200.000 unidades no mienten: el L7 es el Toyota RAV4 híbrido de China, pero enchufable y a mitad de precio. El éxito comercial es el mejor análisis: el mercado ya ha decidido. Con 262 Nm, 1.890 kg, 1,3 l/100 km y un diseño continuista respecto al L7 de 2023, el L7 EM-i es la evolución prudente por unos 15.000 €. La ficha destaca el interior espacioso: la familia viaja cómoda. Con más de 200.000 unidades vendidas, el mercado ya ha dictado su veredicto.`,

  "geely-galaxy-m9-2025-precio-ficha-tecnica": `El Galaxy M9 es el buque insignia de Galaxy: 858 CV y 1.165 Nm en la versión tope, 0-100 en 4,5 s con 2,5 toneladas, 210 km eléctricos CLTC —172 WLTP en Europa— con 41,46 kWh, 6 plazas reales en configuración 2+2+2 y 5,21 m, por unos 23.900 € en China. Es el SUV grande que lo tiene todo: potencia, autonomía eléctrica y lujo.

Aún no se vende en Europa —lanzamiento global en curso desde septiembre de 2025—, el peso de hasta 2.530 kg penaliza en modo descarga y en Europa costará sensiblemente más.

Es para quien espere su llegada y quiera el SUV grande PHEV definitivo; no es comprable aún. 858 CV y 6 plazas por 23.900 € en China: el M9 es el Range Rover chino a precio de Tucson. Su llegada a Europa será uno de los eventos del mercado. Con 1.165 Nm, 4,8 l/100 km, 6 plazas en configuración 2+2+2 y 5.205 mm, el M9 es el buque insignia familiar por unos 23.900 € en China. La ficha advierte de la anchura: aparcar 5,21 m exige pericia. Probado por la prensa china con buenas notas, llegará a Europa con vitola de favorito y 172 km WLTP eléctricos.`,

  "geely-galaxy-starshine-8-2025-precio-ficha-tecnica": `El Starshine 8 es la berlina PHEV rápida y tecnológica: versión EM-P con 375 CV, 605 Nm y 0-100 en 6,49 s, hasta 1.600 km de autonomía total, 5,02 m con LiDAR en el techo en versiones altas y 27 sensores ADAS, por unos 16.350 € en China. Es la berlina que combina prestaciones de deportivo con tecnología de conducción avanzada.

Solo se vende en China sin planes europeos, el consumo en modo descarga ronda los 4 l/100 km y el maletero de 405 litros es justo para 5 m.

Es para el tecnófilo chino que quiere LiDAR y 375 CV por poco dinero; no es una opción europea. LiDAR de serie en una berlina de 16.350 €: el Starshine adelanta un futuro donde la conducción avanzada no es un lujo. Europa lo verá llegar; la pregunta es cuándo y a qué precio. Con 605 Nm, 3,43 l/100 km, pantalla de 15,4 pulgadas como único centro de mando y 27 sensores ADAS, el Starshine 8 es la berlina tecnológica por unos 16.350 €. La ficha critica la dependencia total de la pantalla táctil: todo pasa por 15,4 pulgadas. A cambio, 375 CV con LiDAR en el techo son el futuro a precio de presente.`,

  "geely-galaxy-xingjian-7-2025-precio-ficha-tecnica": `El Xingjian 7 es el SUV de cruzar España sin repostar: 1.420 km de autonomía total, 120 km eléctricos para la semana sin gasolina, 215 CV con 0-100 en 7,5 s y consumo mínimo, con 35 g/km de CO₂ y etiqueta Cero, por unos 16.300 €. Es el PHEV familiar que elimina la planificación.

No se vende en Europa —sin red ni postventa—, los 1.420 km son en ciclo CLTC y la marca Galaxy es desconocida fuera de China.

Es para el mercado chino que quiere el SUV total; no es comprable aquí. 1.420 km de autonomía realista por 16.300 € con etiqueta Cero: el Xingjian resume la propuesta china en una cifra. En Europa, un PHEV con 120 km eléctricos cuesta el doble. La diferencia no es tecnológica: es industrial. Con 262 Nm, 1,5 l/100 km y un precio de derribo de unos 16.300 € en China, el Xingjian 7 es el PHEV imbatible en valor. La ficha echa en falta datos de seguridad Euro NCAP: sin estrellas, Europa exigirá pruebas antes de abrirle la puerta. Con 120 km eléctricos y etiqueta Cero, el concepto está claro; falta el desembarco.`,

  "geely-galaxy-xingyuan-2024-precio-ficha-tecnica": `El Xingyuan es el eléctrico más vendido de China en 2025 —más de 465.000 unidades— y el análisis es el mercado mismo: 116 CV, batería CATL LFP de 40,16 kWh, 10,7 kWh/100 km, propulsión trasera en un urbano de 4,13 m —casi único en su segmento— y carga de 70 kW, por unos 9.100 €. Es el urbano eléctrico que el mundo ha elegido.

En Europa se vende como Geely EX2 con disponibilidad aún limitada, la máxima de 135 km/h lo ciñe a ciudad y carretera secundaria y las prestaciones son discretas.

Es para quien espere al EX2 europeo y quiera el urbano eléctrico probado por medio millón de personas; no es comprable aún en España. 465.000 unidades en un año: el Xingyuan no necesita análisis editorial, necesita distribución. El coche eléctrico del pueblo ya existe; se llama Xingyuan. Con 150 Nm, 1.285 kg, 10,7 kWh/100 km y 0-100 estimado en 9,5 s, el Xingyuan es el urbano eficiente por unos 9.100 €. La ficha recuerda que en Europa se venderá como Geely EX2: mismo coche, otra marca. Sin cifras WLTP publicadas, la homologación europea dirá la última palabra sobre su autonomía real.`,

  "geely-galaxy-zhanjian-700-2026-precio-ficha-tecnica": `El Zhanjian 700 parece diseñado por un estudio de videojuegos: tres propulsores eléctricos que suman 830 kW, una batería CATL LFP de 47,14 kWh con arquitectura de 800 voltios para 305 km de marcha eléctrica CLTC, y un repertorio de trucos —flotación de emergencia, giro lateral tipo cangrejo y 800 mm de vadeo— que ningún rival ofrece junto. La preventa arrancó en China en septiembre de 2026 por unos 26.000 €.

Los precios definitivos aún no se han anunciado —la ficha lo fecha a 10/10/2026— y de momento solo existe en el mercado chino, aunque se estudia traerlo a Europa bajo el nombre Battleship 700. Sus 2.880 kg penalizan el comportamiento fuera del asfalto: la física no entiende de kilovatios.

Su comprador es el coleccionista chino de máquinas extremas; en Europa no se puede comprar. Si el desembarco se confirma, el Defender y el G tendrán un adversario llegado de otro planeta tecnológico.`,
  "genesis-electrified-g80-2026": `El Electrified G80 es el lujo coreano en formato eléctrico: berlina de 5,14 m con 370 CV y 700 Nm, tracción total, batería de 94,5 kWh con unos 570 km WLTP y carga ultrarrápida de 800 V hasta 350 kW —del 10 al 80 % en unos 25 minutos—. Por 77.400 € compite con el BMW i5 y el Mercedes EQE básicos, con más autonomía que muchos.

La red de concesionarios Genesis en España sigue muy limitada a grandes ciudades, el maletero de 354 litros es justo para 5,14 m y el precio entra en territorio alemán con más red de servicio.

Es para quien quiere diferenciarse del trío alemán con una berlina eléctrica lujosa y con gran autonomía; no es para quien necesite concesionario en cada provincia, porque Genesis aún construye su red. El lujo eléctrico coreano existe y es serio: 570 km y 350 kW por 77.400 € es una propuesta honesta.`,

  "genesis-g70-2025": `El G70 es la berlina deportiva que Europa no puede comprar: 245 CV, 353 Nm, 0-100 en 6,1 s, 240 km/h de máxima y tracción trasera o total en 4.685 mm, con 330 litros de maletero y 8,5 l/100 km. Es el rival coreano del BMW Serie 3 que nunca llegó oficialmente a España.

No se vende oficialmente en España y carece de datos EuroNCAP específicos: dos razones que lo dejan fuera del mercado.

Es para los mercados donde Genesis opera y buscan la berlina deportiva alternativa; no es una opción española. El G70 resume la frustración europea con Genesis: el producto existe y es bueno, pero la marca avanza con cautela. Una berlina trasera de 245 CV con 6,1 s tendría su público aquí; de momento, ese público mira a Múnich. Con 353 Nm, 4.685 mm, 8,5 l/100 km y maletero de 330 litros, el G70 es la berlina deportiva compacta de formato clásico. La ficha confirma 5 plazas y tracción trasera o total: la receta del segmento sin atajos. Sin venta oficial en España ni datos EuroNCAP, su análisis es académico: el producto existe y es bueno, el mercado europeo no.`,

  "genesis-g80-2025": `El G80 de gasolina es la berlina ejecutiva que prioriza el confort sobre la deportividad: 304 CV y 422 Nm con tracción total, 0-100 en 6,0 s y 250 km/h de máxima, en un formato de 4.995 mm con 424 litros de maletero. La ficha aporta un dato que lo distingue: 5 estrellas Euro NCAP en 2021, la certificación de seguridad que muchos rivales chinos aún persiguen. Es el E-Class coreano: silencio, suavidad y presencia.

No se vende en España —sin etiqueta DGT asignada—, el consumo aproximado no oficial ronda los 9,5 l/100 km y el precio es el del mercado de origen, así que el análisis es académico para el comprador español.

Es para los mercados con red Genesis que buscan la berlina de confort alternativa a los alemanes; no es una opción española. El G80 anticipa la estrategia de la marca: primero el confort térmico, después el salto eléctrico con el Electrified G80. Dos caminos, mismo lujo.`,

  "genesis-gv60-2025-precio-ficha-tecnica": `El GV60 es el eléctrico premium con la mejor garantía del segmento: 5 años sin límite de kilometraje, algo único entre los rivales. Suma 561 km WLTP con la batería de 84 kWh en la versión de 229 CV trasera —la mayor autonomía del restyling—, plataforma de 800 V con carga ultrarrápida y 680 litros de maletero, por 55.900 €.

La red comercial en España es mínima de momento, el AWD de 318 CV baja a 512 km y el maletero tiene formas poco aprovechables pese a los 680 litros.

Es para quien quiere un SUV eléctrico premium distinto con la tranquilidad de la garantía total; no es para quien necesite servicio en cualquier ciudad, porque la red es escasa. 5 años sin límite de km: Genesis compra la confianza que aún no tiene. Con 561 km y 800 V, el producto acompaña la promesa. Con 350 Nm, 2.020 kg, 19,6 kWh/100 km y 4.545 mm, el GV60 es el SUV eléctrico compacto premium desde 55.900 €. La ficha sitúa el Magma en 87.100 €: la gama estira hasta lo deportivo extremo con 650 CV. La versión trasera de 229 CV con 561 km es la compra racional; la garantía de 5 años sin límite, el argumento definitivo.`,

  "genesis-gv60-magma-2026": `El GV60 Magma es el Genesis más potente y rápido de la historia: 650 CV, 790 Nm con modo Boost, 0-100 en 3,4 s, 264 km/h de máxima y un chasis recalibrado por el equipo de competición de la marca. No es solo potencia: es precisión, con el Porsche Macan Turbo como rival declarado. La batería de 84 kWh rinde 448 km WLTP con carga de 350 kW.

Por 87.100 € es más caro que el Hyundai Ioniq 5 N con la misma base técnica, la autonomía se resiente del rendimiento y el maletero de 432 litros es menos práctico que un GV70.

Es para el que quiere el eléctrico prestacional coreano más exclusivo y asume la prima sobre el Ioniq 5 N; no es para el racional, porque la base técnica compartida invita a la comparación. Magma es la división deportiva de Genesis: el GV60 es su primera declaración de guerra.`,

  "genesis-gv70-2025-precio-ficha-tecnica": `El GV70 eléctrico es el SUV premium que no disimula su potencia: 490 CV y 700 Nm con modo Boost, 0-100 en 4,4 s, arquitectura de 800 V —del 10 al 80 % en 18 minutos a 350 kW— y 479 km WLTP con 84 kWh, por 69.400 €. Es el formato familiar de 4.715 mm con prestaciones de deportivo y maletero de 542 litros.

El precio entra en territorio premium alemán, los 2.280 kg se notan y el consumo de 23 kWh/100 km es elevado: la potencia se paga en la factura de la luz.

Es para quien quiere el SUV eléctrico premium con carácter y carga ultrarrápida; no es para el eficiente, porque 23 kWh/100 km no engañan. El GV70 demuestra que Genesis compite de tú a tú con los alemanes en tecnología —800 V y 350 kW—, aunque la red española aún esté en despliegue. Con 700 Nm, 2.280 kg, 4.715 mm y una red limitada a Madrid, Barcelona y Valencia, el GV70 es el SUV premium de nicho desde 69.400 €. La ficha destaca los 5 años de garantía sin límite de kilometraje: la confianza como argumento de venta. Frente a alemanes con más red, el GV70 responde con más potencia y 800 V.`,

  "genesis-gv80-2025": `El GV80 juega en el segmento que más crece: el SUV grande premium. Con 4.945 mm, 304 CV, 422 Nm, tracción total y un maletero de 735 litros —de los mayores de su clase—, ofrece el formato familiar definitivo con 0-100 en 6,9 s y 230 km/h de punta. La ficha le otorga 5 estrellas Euro NCAP en 2021: seguridad contrastada para viajar con la familia.

No se vende en España, no tiene etiqueta DGT y el consumo aproximado no oficial es de 10,0 l/100 km: tres avisos que lo dejan fuera del mercado nacional.

Es para los mercados donde Genesis opera y el comprador duda entre un X5 y algo distinto; no es una opción española. 735 litros de maletero en un SUV premium de 304 CV: el GV80 es el formato que Europa compra en masa. Cuando Genesis complete su desembarco, este modelo será su caballo de Troya.`,
};
