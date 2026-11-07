# Delta focal sobre el sello 2109346d

Siete ficheros del dist ya compuesto. No es un build, no reescribe el manifiesto de 52482 ficheros y no publica. `public/` y `src/` no cambian: siguen siendo las entradas del sello, y la reutilización de esas entradas no se abre. `tools/publicar/no-tocar.txt` tiene 33 rutas; ninguna entra aquí. Los títulos de las cuatro páginas quedan como estaban.

## Qué se sustituye

- `media/volkswagen-golf-20-tdi-2026-precio-ficha-tecnica-hero.webp`. La foto anterior llevaba insignia R. La nueva es el archivo de Commons `Volkswagen_Golf_2.0_TDI_Mk8_CD1_Atlantic_Blue_Metallic_(2).jpg`, Damian B Oh, CC BY-SA 4.0. En el coche se lee GOLF y no hay insignia R. La palabra TDI no está en la foto: la da el archivo del autor. El crédito queda escrito en la ficha y en el blog.
- `media/peugeot-e-308-electrico-2026-precio-ficha-tecnica-hero.webp` y `...-oficial.webp`. Las dos decían «Nouvelle 308 Hybride». Las dos pasan a ser `Peugeot_e-308_Auto_Zuerich_2023_1X7A1207.jpg`, Alexander-93, CC BY-SA 4.0. El coche lee NEW E-308 y «100 % elektrisch». La ficha y el blog dejan de citar a A.BourgeoisP y el fichero del 308 III. La oficial también es la miniatura de MG4, Mégane E-Tech, Kia EV4 y dos Cupra Born: al cambiar el fichero, esas miniaturas muestran el e-308 sin editar esas páginas.

## Qué no se toca

- El Cupra León Sportstourer 2.0 TDI sigue con la foto de tapa de carga. En Commons, la categoría Cupra Leon Mk4 no tiene un Sportstourer 2.0 TDI: hay VZ, e-Hybrid y 1.5 TSI. Poner una de esas sería otro coche. El mapa `scripts/deploy/fotos-hotfix/fotos-hotfix-map.json` ya apuntaba este fichero al ehybrid. No se borra y no se reetiqueta. Raybar sigue fuera del HTML y no se borra.
- La foto `volkswagen-golf-20-tdi-2026-precio-ficha-tecnica-oficial.webp` no es la de la insignia R. Sigue la primera de la ficha. No confirma el 2.0 TDI.

## Presupuesto en la caja

Libre citado: 1003360256 bytes. Reserva 1000000000. Margen 3360256. Los siete ficheros suman 750703 bytes. Con bloque de 4096 y un bloque extra por fichero, el manifiesto anota 794624. Cabe. Hay que sumar además el bundle de este commit; si bundle + estos ficheros + el margen de directorio pasan de 3360256, no se aplica.

Aplicar sobre el árbol ya compuesto, sin rehacer los 52481 enlaces y sin borrar el base. Cada ruta de esta lista se escribe como fichero nuevo. El base 282b y el sello 210 no se modifican.
