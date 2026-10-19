# Instrucciones para completar páginas de recurretumulta.online

Lista de páginas: paginas-a-completar.txt (1.967 URLs, fuera de Google por ahora). Empieza por las fichas de coches con más visitas.

## Cómo trabajar
1. Haz siempre `git pull` antes de empezar. Trabaja sobre origin/main.
2. Sube tus cambios SOLO a GitHub, en la rama `completar-fichas`. Nunca a `main`.
3. NUNCA publiques en Netlify ni subas una carpeta `dist`. Cosa revisa y publica.
4. No toques el código de la app (App.tsx, rutas, componentes, .env, _redirects). Solo los archivos de datos de fichas/posts y las fotos.
5. Haz commits pequeños (20-50 páginas), con la lista de slugs en el mensaje.

## Qué debe tener cada ficha (modelo: ficha del Toyota GR Supra Final Edition)
- Todos los datos clave rellenos: precio, potencia (CV y kW), par, motor/batería, autonomía o consumo, 0-100, velocidad máxima, medidas, peso, maletero, plazas, etiqueta DGT.
- Ninguna celda vacía ni con «—».
- Cada dato sale de una fuente fiable (web oficial de la marca, nota de prensa, km77, etc.). Pon el enlace en `fuenteUrl`, y debe ser de ESE modelo y versión exacta.
- Si un dato oficial no existe, se puede usar el de la versión anterior o una estimación, pero marcado como aproximado («dato no oficial · en revisión»). No cuenta para sacar la ficha de noindex.
- Nunca inventar ni calcular datos (p. ej. autonomía = depósito × consumo NO vale).
- Fotos reales del modelo y año exactos: portada + al menos 3 de galería (exterior, interior, detalle), en webp, con nombre de archivo nuevo. Comprueba con tus ojos que la foto ES ese modelo, no otro de la marca ni un prototipo antiguo.
- Texto propio de al menos 800 palabras: análisis, para quién es, pros y contras, rivales con enlace a sus fichas, mantenimiento, Euro NCAP si existe.

## Qué debe tener cada post del blog
- No debe repetir la ficha: análisis propio, contexto, opinión fundamentada, pros y contras, rivales, enlace a la ficha.
- Mínimo 1.000 palabras, H1 único, título y meta descripción propios, foto de portada real del modelo.

## Al terminar cada lote
Envía a Cosa la lista de slugs completados. Indica en cada uno qué datos son oficiales y cuáles aproximados. Cosa los revisa, los saca de noindex si están completos con datos oficiales y los publica.

## Correcciones tras el lote 1 (rechazado entero, ver docs/REVISION-LOTE1.md)
- Cada ficha va COMPLETA en el mismo commit: datos + texto propio + fotos nuevas. Si falta algo, no la subas.
- "800 palabras" = texto propio en prosa (análisis, pros/contras, rivales, mantenimiento), SIN contar tablas ni datos. Va en el campo de texto/análisis de la ficha.
- Fotos: súbelas con `git add -f public/media/`. Mínimo portada + 3 reales. Prohibido usar renders hechos con IA y la imagen `-hero`.
- Mira con tus ojos la portada que ya existe: si no es ese modelo, generación y año, cámbiala.
- Cada cifra tiene que aparecer en su `fuenteUrl` (web oficial, nota de prensa, km77...). No valen anuncios de ocasión, concesionarios, Scribd, PDF anónimos, buscadores ni exportadores.
- No calcules nada (ni autonomía, ni consumo, ni potencias sumadas). Peso = en vacío, nunca la MMA.
- Precio = tarifa en España sin ayudas. Si es de otro país o aproximado, márcalo como aproximado.
- Estrellas Euro NCAP solo con enlace a euroncap.com (los furgones no tienen estrellas).
- Antes de editar, comprueba que la URL no redirige a otra ficha.
- Lotes de 20-30 fichas, con la lista exacta de slugs en el commit.

## Orden de trabajo y extras (17-10)
- Trabaja en el orden de `docs/ORDEN-PRIORIDAD-GSC.csv` (las fichas con más impresiones en Google). Antes de editar, comprueba a qué ficha real lleva la URL (algunas /blog/ redirigen a /motos/ o /patinetes/).
- Cada ficha añade también: 4-5 preguntas frecuentes reales (precio en España, autonomía/consumo, etiqueta DGT, garantía...) con respuesta basada en datos de la ficha, y 3 rivales con enlace a sus fichas en la web.
