# Universo del censo AdSense 2610 (mis secciones) — manifiesto

## Sitemap en vivo (26/10/2026)
- Método: `curl --compressed https://recurretumulta.online/sitemap.xml`.
  Sin gzip el proxy de egress truncaba la respuesta (~1 MB, solo se leía el prefijo
  de 3.370 URLs, como le pasó a la muestra). Con gzip: 44.223 bytes transferidos,
  982.202 bytes en disco, COMPLETO (termina en `</urlset>`).
- Total: **5.746 URLs, 5.746 únicas** (0 `<sitemap>`: es un urlset, no un índice).
- Referencia: GSC la mañana del 26/10 daba 5.751 URLs en el sitemap (delta −5,
  sin explicar; el sitemap lleva lastmod 2026-10-24).

## Mi universo: 2.600 ítems = 2.599 URLs del sitemap + 1 fragmento (analizador)
| Sección | Ítems | Desglose |
|---|---|---|
| coches | 2.302 | hub 1 + fichas 2.301 |
| marcas | 105 | todos los hubs /coches/marca/ |
| multas | 48 | hub 1 + 47 |
| caravanas | 73 | hub 1 + 72 |
| campers | 51 | hub 1 + 50 |
| herramientas | 21 | 20 URLs del sitemap + analizador (/#analizador) |
| **TOTAL** | **2.600** | |

Herramientas (20 del sitemap): 5 calculadoras (alcoholemia, autonomía-real,
consumo-camper, etiqueta-dgt, kw-a-cv), comparador-coches, comparador-garantia-bateria,
comparador-motos, comparador-patinetes, comparador/mas-vendidos, comparativa,
equivalencia-neumaticos-itv, favoritos-del-mes, mejor-coche-por-presupuesto,
valor-venal-vehiculo, herramientas/ (hub), herramientas/contrato-compraventa-vehiculo,
herramientas/precio-itv, buscador-coches, buscador-codigo-multa.
Base de la muestra: 16 (15 + analizador). El censo añade 5 (las 3 de /herramientas/
y las 2 de /buscador/).

## Fuera de mi alcance (explícito, no silenciado)
- **/autocaravanas/: 163 URLs (hub + 162 fichas).** No está en ninguna de las dos
  mitades del reparto ORD-20261026-1157 (ni Niky ni Merlín): hueco de asignación.
  NO se incluye en este censo; si se asigna, se cubre con el mismo método.
- Merlín (ORD-1157): blog 1.100, motos 1.267, patinetes 555, portada 1.
- Resto: comunidades 18, guías 13, glosario 11, rankings 4, singulares 15
  (calendario-lanzamientos-2026-2027, el-dato-del-dia, empresas, explorar-por-marca,
  fichas-tecnicas, glosario-multa, la-pregunta-del-dia, metodologia, newsletter,
  politica-editorial, provincias, reportar-carretera, senales-trafico,
  sobre-nosotros, tal-dia-como-hoy-motor).
- Comprobación: 2.599 + 163 + 2.923 + 18 + 13 + 11 + 4 + 15 = 5.746. Cuadra.

## Cruce con las listas de slugs del repo (26/10/2026)
- `scripts/coches-slugs.txt`: 2.405 líneas únicas.
  - En sitemap pero NO en la lista: 81 (p. ej. adria-twin-600-spb-2026,
    alfa-romeo-giulietta-2025, audi-q9-2026-precio-ficha-tecnica).
  - En la lista pero NO en sitemap: 185, incluidos los 3 Grecale huérfanos
    (maserati-grecale-folgore-2027-precio-ficha-tecnica,
    maserati-grecale-modena-v6-2027-precio-ficha-tecnica,
    maserati-grecale-trofeo-2027-precio-ficha-tecnica).
  - Causa probable (AGENTS.md 03/10): `gen-sitemap.mjs` NO corre solo; el sitemap
    se regenera a mano y las listas han cambiado desde el 24/10.
  - Consecuencia: el universo del censo es el sitemap en vivo. Los 185 slugs del
    repo fuera del sitemap NO se rastrean aquí (posibles páginas vivas sin
    sitemap: verificación pendiente, fuera de este censo salvo orden expresa).
- `scripts/campers-slugs.txt`: 32 líneas frente a 50 fichas /campers/ en el
  sitemap (lista incompleta; el sitemap manda).

## Reglas de fila (censo, iguales que la muestra salvo lo indicado)
- Contenido escaso: <300 palabras en `<main>` (fichas, multas, hubs).
  Herramientas exentas (el valor es la función, no la prosa).
- Title vacío o >60 car.; meta vacía o >155 car.; H1 distinto de 1.
- Canonical: ausente, a la portada (soft-404), sin barra final, o a otra URL.
- «Foto pendiente de verificación»; og ausente, rota (HEAD != 200) o genérica
  (solo fila en fichas; en hubs/multas/herramientas es observación, como en la muestra).
  REGLA DE VERIFICACIÓN: un HEAD con estado 0 es un fallo transitorio del proxy,
  no una imagen rota: antes de convertirlo en fila se re-verifica con HEAD+GET
  (caso precio-itv 26/10: el HEAD del censo dio 0 y la re-verificación dio 200
  dos veces + GET 200 con 589.938 bytes; la fila se descartó).
- Sin fuente: fichas y multas con 0 enlaces externos dentro de `<main>`.
- Privacidad: formularios que piden datos personales sin aviso ni consentimiento.
- Duplicados de title/meta: pase global final (no por sección).
- NO cubre este censo (declarado): 8-gramas entre páginas (lo lleva la tanda de
  unicidad ORD-20261026-0345, en curso, para no duplicar trabajo ni colisionar)
  ni inspección visual de logos en imágenes (no automatizable a escala).

## Ritmo y reanudación
- 1,5 s entre GETs; 0,5 s entre HEADs de og:image (una HEAD por URL distinta);
  0,4 s entre HEADs de enlaces internos (conjunto distinto global, pase aparte).
- Checkpoints por página en `censo/checkpoints/<seccion>.jsonl` (append+flush).
  Si un proceso muere, se reanuda desde el checkpoint, no desde cero.
- Solo lectura contra el vivo. Sin ediciones de contenido (unicidad en curso).
