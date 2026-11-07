# Lote que sí queda en el candidato `40a2d1f24`

No se ha publicado. No hay push: Netlify construye con `netlify.toml`.

Frente a `dfddce39c` hay 203 ficheros. De ellos, 186 son texto de ramas que entra sin romper el compilado ni crear ventanas nuevas de ocho palabras (`rev3b` contra `9cf8ef85` = 0). `tsc -b` sale 0.

Se probaron los 1.246 grupos de merge limpio, fichero a fichero. Se descartó con motivo, no en silencio:

- 323 ficheros creaban 13.706 ventanas nuevas. Vuelven a la versión de `80b93b7fb`.
- 52 ficheros no pasaban el tipo (`precio` donde el tipo pide `precioEur`, o reabrían la tienda, o el tipo `caravanas` que el carrusel protegido no cubre). Vuelven a `dfddce39c`.
- Los tres protegidos sin autorización no se han tocado.
- No se han añadido 301 ni noindex.

La foto del MONA L05 que cita CnEVPost no se usa como permiso: esa página no publica licencia. El resto de fotos con licencia de Commons sigue en el commit `80b93b7fb`.

El aviso propio no es un CMP certificado. Si Google pinta el suyo, el propio no sale. No se afirma cumplimiento de AdSense.
