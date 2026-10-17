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
