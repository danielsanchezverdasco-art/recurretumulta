# Grupo dígito (0-9) — VACÍO: 0 páginas para reescribir

Agente: unico-coches-50-dig-001. Orden de Cosa 24/10 20:04, texto 100 % único de coches.
Base: `unicidad-plantillas-20261024` @ `676bda2a54b5edb1b6e2b29162f22ac3d7f42dfa`.
Rama: `unico-coches-50-dig-001`. Sin main, sin Netlify, sin publicación, sin fotos, sin componentes.

## Definición del grupo (literal, como se ordenó)

Fichas y posts de coches cuyo slug empieza por un dígito (0-9). Solo dígitos, no se tocó ninguna letra.

## Verificación (3 fuentes independientes, todas 0)

1. `scripts/coches-slugs.txt` (2.538 slugs, ordenados alfabéticamente; la primera letra es "a", no hay dígito):
   `grep -cE '^[0-9]' scripts/coches-slugs.txt` → **0**
2. `scripts/blog-slugs.txt` (5.103 slugs):
   `grep -cE '^[0-9]' scripts/blog-slugs.txt` → **0**
   Además, en los ficheros de datos de esta base:
   `grep -rhoE 'id: "[0-9]' src/lib/comparador-coches-*.ts` → **0**
   `grep -rhoE 'slug: "[0-9]' src/lib/blog-posts-*.ts` → **0**
3. Censo de URLs del prerender, tablón `docs/comunicacion-ias/listas/unicidad-por-pagina-24oct-1504.csv`
   (7.686 URLs, rama `completar-fichas`):
   URLs `/coches/` que empiezan por dígito → **0**

Motivo: en este repo los slugs de coches empiezan siempre por la marca
(`abarth-500e-…`, `citroen-2cv-…`, etc.); ningún slug de coche empieza por dígito.
Los `id: "1000"`, `id: "300"` etc. que aparecen en un grep amplio de `src/` no son
slugs de coches (son ids numéricos de otros conjuntos de datos) y no se tocaron.

## Resultado

- **Páginas entregadas: 0** (no había ninguna en el grupo; no se inventó ninguna entrega).
- **Primer slug: ninguno. Último slug: ninguno.**
- **Páginas restantes del grupo: 0.**
- No se modificó ningún fichero de datos, ningún componente ni ninguna foto.
  Este fichero de verificación + el CSV con solo cabecera son el único contenido del commit,
  para dejar constancia auditable del grupo vacío.
- La verificación de 8-gramas no aplica: sin texto nuevo no hay ventanas que comprobar.
  No se da por entregada ninguna página reescrita.

## Recomendación para Niky (no es una orden, solo el hueco detectado)

Si el reparto por inicial pretendía cubrir modelos como el 500 o el 2CV, esos slugs
empiezan por marca, no por dígito; el grupo dígito, tal como está definido, no cubre
ninguna página. Conviene que Grok redefina este grupo (por ejemplo, por modelos cuyo
nombre empieza por dígito) o lo marque como vacío en el reparto, para que las 50
páginas de este lote no queden sin asignar en el cómputo total.
