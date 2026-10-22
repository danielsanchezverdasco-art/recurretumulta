# Auditoría total de blogs generales + accesorios — fotos

**Rama:** merlin-auditoria-blogs · **Fecha:** 2026-10-20 · **Orden del usuario:** «Fotos de portada en TODAS las fichas, fotos, precios OBLIGATORIO. Revisa CADA ficha, CADA blog».

## Resumen

- **Posts auditados:** 3494 (3.492 en main + 2 accesorios de la rama `origin/merlin-blogs-accesorios`, auditados en lectura).
- **Alcance:** todos los `src/lib/blog-posts-*.ts` de main y los posts inline de `src/lib/blog-data.ts`.
  Excluidos (los audita otro equipo): `blog-posts-autocaravanas-merlin1..5.ts` y `blog-posts-campers-*.ts` (eu2-a/b/c/d, niky, nuevos-7, vw).
- **Hero OK:** 2466 · **Hero NO (foto no existe):** 1022 · **Sin hero:** 5 · **Hero externo:** 1
- **Heroes arreglados en esta rama:** 194
- **Posts con fotos de contenido aún rotas:** 1585 (2451 fotos)
- **Posts con fotos de contenido corregidas:** 16
- **Posts con hero imposible de arreglar:** 1025 (sin ninguna foto del modelo en `public/media/`; documentados abajo)

## Metodología

- El hero es la primera `<img>` del contenido (`postHeroImage` de `src/lib/blog-image.ts`).
- Una foto cuenta como OK si existe en `public/media/`; EXT si es URL externa (no verificable localmente).
- Arreglos aplicados (nada inventado): si el fichero existe con otra ruta/nombre se corrige la referencia; si el post no tenía hero y el modelo tiene fotos en `public/media/`, se asigna la foto principal del modelo (prioridad: `-hero`, `-oficial`, base, `-ext`…), solo si es del mismo modelo; los duplicados con el mismo nombre solo se usan si son byte-idénticos. Los posts sin foto disponible quedan documentados.
- La columna «ficha con foto» indica si la primera ficha enlazada (`/coches/…`, `/motos/…`, `/patinetes/…`) tiene alguna foto en `public/media/`; es solo una nota, no se ha modificado ninguna ficha.

## Accesorios

Los 2 blogs de accesorios viven en la rama remota `origin/merlin-blogs-accesorios` (`src/lib/blog-posts-accesorios.ts`) y no están en main: se auditaron en lectura y aparecen en la tabla marcados como tal. Sus arreglos (si los necesitan) quedan pendientes en su rama.

## Tabla completa (slug → hero / fotos de contenido)

Leyenda hero: OK = existe · NO = referencia rota · SIN = el post no tiene imagen · EXT = URL externa.
Contenido: OK = todas las fotos existen · NO (n) = n fotos rotas · — = el post no lleva más fotos además del hero.

| Slug | Fichero | Hero | Contenido | Ficha con foto | Acción / nota |
|---|---|---|---|---|---|
| `aion-v-2025-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-ut-2025-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-rt-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-s-max-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-s-plus-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-y-plus-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-y-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-v-plus-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-lx-plus-2024-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aion-ray7-2026-precio-ficha-tecnica` | blog-posts-aion-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m5-2024-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m5-ultra-2025-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m5-ultra-ev-2025-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m6-2026-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m6-ev-2026-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m7-pro-2024-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m7-ultra-2024-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m7-2025-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m7-ev-2025-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m8-ev-2025-precio-ficha-tecnica` | blog-posts-aito-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-city-pack-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-city-sport-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-city-pack-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-city-sport-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-city-gto-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-city-eclipse-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-coupe-sport-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-coupe-gti-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-coupe-gti-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-crossline-pack-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-crossover-premium-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-crossover-premium-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-scouty-evo-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-d-truck-furgon-van-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-truck-furgon-van-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-truck-plataforma-aluminio-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-minauto-access-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-e-minauto-chic-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-minauto-access-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-easy-access-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-easy-chic-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-easy-access-diesel-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aixam-easy-chic-diesel-2025-precio-ficha-tecnica` | blog-posts-aixam-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-junior-elettrica-156-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-junior-elettrica-veloce-280-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-tonale-hibrida-160-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-tonale-phev-q4-280-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-giulia-veloce-280-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-stelvio-2-2-diesel-160-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-33-stradale-v6-620-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-junior-ibrida-145-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-junior-ibrida-q4-145-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-tonale-hibrida-130-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-tonale-ibrida-175-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-tonale-diesel-130-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-tonale-phev-q4-270-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-giulia-diesel-160-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-giulia-diesel-210-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-giulia-quadrifoglio-520-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-stelvio-20-turbo-280-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-stelvio-diesel-210-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-stelvio-quadrifoglio-520-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alfa-romeo-33-stradale-elettrica-750-precio-ficha-tecnica` | blog-posts-alfa-romeo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a110-s-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a110-gts-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a110-r-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a110-r-ultime-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a290-gt-premium-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a290-gt-performance-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a290-gts-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a390-gts-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a110-252-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a110-r70-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a290-gt-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a290-gts-premiere-edition-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a390-gt-2026-precio-ficha-tecnica` | blog-posts-alpine-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-db12-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-db12-volante-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-vantage-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-vantage-s-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-vantage-s-roadster-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-dbx-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-dbx707-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-dbx-s-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-dbx-gt-2026-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-vanquish-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-vanquish-volante-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-valhalla-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-valiant-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-valkyrie-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-valkyrie-spider-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-dbs-770-ultimate-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-valour-2024-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-db12-goldfinger-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aston-martin-vantage-roadster-2025-precio-ficha-tecnica` | blog-posts-aston-martin-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a1-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a3-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-s3-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a5-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-s5-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a6-e-tron-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a6-avant-e-tron-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q3-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q5-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-sq5-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q6-e-tron-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q7-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q8-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-e-tron-gt-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs-e-tron-gt-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a8-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs-q8-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs6-avant-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q2-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs5-avant-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-sq6-e-tron-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-sq7-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-s6-avant-e-tron-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q4-e-tron-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs3-sportback-2025-precio-ficha-tecnica` | blog-posts-audi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-yep-2024-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-yep-plus-2024-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-yunduo-2024-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-yunhai-ev-2024-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-yunhai-phev-2024-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-xiangjing-ev-2025-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-xiangjing-phev-2025-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baojun-kiwi-ev-2024-precio-ficha-tecnica` | blog-posts-baojun-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q5-e-hybrid-367-2026-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q7-55-tfsi-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs-q8-performance-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs3-sedan-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs6-avant-performance-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-s3-sportback-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-sq5-sportback-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `avatr-06-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `avatr-07-2024-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `avatr-11-2024-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `avatr-12-2024-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baic-beijing-5-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baic-beijing-x55-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baic-bj30-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `baic-bj40-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m2-cs-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m240i-xdrive-2026-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m4-cs-2024-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-2-active-tourer-225e-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x5-m60i-2026-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-05-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-cs35-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-cs55-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-cs75-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-eado-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-hunter-reev-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-lumin-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-uni-k-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-uni-k-idd-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-uni-t-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-uni-v-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-uni-v-idd-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-uni-z-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-4-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chevrolet-corvette-c8-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-2cv-electrico-2028` | blog-posts-batch2b-1.ts | OK | — | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-l06-2026-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-500-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-aeolus-l7-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-aeolus-l8-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-epi-008-ev-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-3-0-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-4-0-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-5-0-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-6-0-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-7-0-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-ickx-k2-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-sportequipe-7-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-sportequipe-8-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-3-2025-precio-ficha-tecnica` | blog-posts-batch2b-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-4-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-5-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-6-2026-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-7-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-cross-4-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-aion-v-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-coolray-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-cannon-alpha-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-cannon-alpha-phev-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-haval-h6-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-poer-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-cool-dog-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h7-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-shenshou-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-g919-2026-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | — | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs5-phev-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-tiangong-08-2026-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `icar-03-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-l6-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls6-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls7-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-motors-l6-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `isuzu-d-max-2026-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-j6-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-dashing-i-dm-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-shanhai-l7-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x70l-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-ypsilon-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-ypsilon-hf-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-110-d300-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-110-d350-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-110-p400e-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-110-p525-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-130-d300-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-130-p400-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-90-p400-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-defender-octa-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-discovery-p360-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-discovery-sport-d200-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-discovery-sport-p270e-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-evoque-d200-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-evoque-p270e-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-p400-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-p530-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-sport-d350-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-sport-p550e-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-sport-sv-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-velar-d300-2025-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-a10-2026-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-r7-2024-precio-ficha-tecnica` | blog-posts-batch2b-2.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-s7-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-z20-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maextro-s800-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-edeliver-7-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-edeliver-9-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-eterron-9-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-mifa-9-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-t60-max-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-t90-ev-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-cla-45-s-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-cle-53-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-glc-63-s-e-performance-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-s-63-e-performance-2026-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-cla-shooting-brake-2026-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-clase-a-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-clase-e-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-clase-g-450-d-2026-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-eqe-suv-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-glb-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-3-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-3-hybrid-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-4-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-4-xpower-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-5-ev-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-aceman-e-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-aceman-jcw-e-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-aceman-se-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-c-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-cabrio-c-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-cabrio-s-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-e-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-jcw-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-jcw-e-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-s-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-cooper-se-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-countryman-jcw-all4-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-countryman-se-all4-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moke-electrico-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-et7-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-micra-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-c7-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `onvo-l60-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-frontera-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ora-ballet-cat-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-cayenne-electric-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `range-rover-electric-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rox-01-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stelato-s9-2024-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stelato-s9t-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-ignis-2025-precio-ficha-tecnica` | blog-posts-batch2b-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-g01-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-g01f-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-g03f-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-g05-pro-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tank-330-2024-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-buzz-gtx-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-polo-gti-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voyah-courage-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voyah-dream-plus-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voyah-free-plus-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xev-yoyo-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-g7-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-001-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mobilize-duo-45-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mobilize-duo-80-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mobilize-bento-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-ariya-87kwh-242-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-leaf-2026-52-kwh-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-leaf-2026-75-kwh-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s04-l6e-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s04-l7e-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `abarth-600e-scorpionissima-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `invicta-pocco-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `invicta-pony-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `invicta-spartan-ev-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `invicta-d2s-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q5-20-tdi-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-ux-300h-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-yaris-130h-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-lbx-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-corolla-5p-140h-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i30-15-tgdi-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i4-m60-xdrive-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-cla-350-4matic-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-countryman-c-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mini-countryman-d-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-1-m135-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x1-m35i-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x2-m35i-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x3-30e-xdrive-2025-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-glc-43-2026-precio-ficha-tecnica` | blog-posts-batch2b-4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-5-520i-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix-m70-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-911-carrera-4-gts-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-electrico-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-spazio-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-6-hev-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-g03-edi-phev-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dr-5-stilnovo-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `morgan-supersport-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-gamma-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `isuzu-d-max-ev-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `arcfox-t1-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `icaur-v25-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tank-800-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `caterham-project-v-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-es9-2024-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `polestar-7-2028-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-gamma-hf-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-10-em-p-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-ora-5-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-emkoo-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-gs8-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-t11-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-ex2-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-es8-2025-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `icaur-03t-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-9-e-tense-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-cross-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i3-neue-klasse-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-super-n-ev-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz3x-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `polestar-6-roadster-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-u9-ev-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-rexton-sports-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-d90-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-tiger-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-hipster-2027-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-rich-6-ev-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-k4-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-boreal-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-gt-electrico-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tvr-griffith-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rivian-r2-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lucid-gravity-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vinfast-vf-6-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vinfast-vf-7-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `togg-t10x-2026-precio-ficha-tecnica` | blog-posts-batch2b-5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-tiguan` | blog-posts-batch2b-6.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-shark-6-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-p7-2025-nueva-generacion-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-4-urban-ev-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-06-ev-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-08-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-song-l-dm-i-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls6-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-05-dm-i-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-qin-l-ev-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-8-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fangchengbao-bao-3-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-xiangwang-s7-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs3-phev-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-a9l-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-gs4-max-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-ep9-2024-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-x5-plus-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-yueyi-07-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-gs3-emzoom-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-xiangwang-s9-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6l-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volvo-em90-2024-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-song-pro-dm-i-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-xia-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg5-2026-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-sl-63-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id5-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id7-gtx-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-arteon-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-touran-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-1-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-2-gran-coupe-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-3-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-4-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x4-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-tt-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-r8-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs7-sportback-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-a35-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-a45-s-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-c43-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-c63-s-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-g63-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-one-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-gls-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-i-pace-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-f-pace-2025-precio-ficha-tecnica` | blog-posts-batch2b-6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-x55-2025-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-bj30-hev-2025-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-bj40-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-bj40e-2025-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-bj60-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-x7-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beijing-x5-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `arcfox-alfa-t5-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `arcfox-alfa-s5-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `arcfox-kaola-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `arcfox-kaola-s-2024-precio-ficha-tecnica` | blog-posts-beijing-baic-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gt-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gt-azure-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gt-speed-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gt-mulliner-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gtc-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gtc-azure-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gtc-speed-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-continental-gtc-mulliner-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-flying-spur-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-flying-spur-azure-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-flying-spur-speed-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-flying-spur-mulliner-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-azure-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-speed-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-ewb-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-ewb-azure-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-ewb-mulliner-2026-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-batur-2024-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-batur-convertible-2024-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-s-2024-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bentley-bentayga-s-black-edition-2024-precio-ficha-tecnica` | blog-posts-bentley-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-b70-2026-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-b70s-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-t55-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-t77-2026-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-t90-2026-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-t99-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-e01-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-nat-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-m9-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-pony-2025-precio-ficha-tecnica` | blog-posts-bestune-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-1-120-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-2-gran-coupe-220-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-3-320d-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-3-330e-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-4-420d-gran-coupe-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-5-520d-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-5-530e-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i5-edrive40-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix1-xdrive30-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix2-xdrive30-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix3-50-xdrive-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix-xdrive60-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i4-m50-xdrive-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i7-xdrive60-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x1-sdrive20i-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x2-sdrive20i-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x3-20-xdrive-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x5-xdrive40i-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x7-xdrive40i-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-xm-50e-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m5-berlina-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix3-40-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x5-xdrive50e-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m235-xdrive-gran-coupe-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i5-m60-xdrive-2026-precio-ficha-tecnica` | blog-posts-bmw-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-dolphin-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-2024-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-excellence-2024-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-u-ev-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-6-dm-i-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-6-dm-i-touring-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-7-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-7-excellence-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-han-2024-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-tang-2024-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-atto-3-evo-2025-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-u-ev-design-87kwh-2026-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-dolphin-active-95-2026-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-dolphin-g-dmi-active-2026-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-dolphin-g-dmi-boost-2026-precio-ficha-tecnica` | blog-posts-byd-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-great-tang-2026-precio-ficha-tecnica` | blog-posts-byd-great-tang.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-ti7-2026-precio-ficha-tecnica` | blog-posts-byd-ti7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/byd-ti7-2026-precio-ficha-tecnica-hero.webp` |
| `changan-e06-2026-precio-ficha-tecnica` | blog-posts-changan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-4-csh-2026-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-9-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-9l-2026-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-x-2027-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-q-2027-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-7-csh-2026-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-8-csh-2025-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-9-csh-2026-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-arrizo-5-2025-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-arrizo-5-plus-2025-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-arrizo-8-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-arrizo-8-csh-2026-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-a8l-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-t9-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-t10-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-eq1-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-eq7-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-explorer-06-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-explorer-06-c-dm-2024-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-himla-2026-precio-ficha-tecnica` | blog-posts-chery-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-icaur-v27-2027-precio-ficha-tecnica` | blog-posts-chery-a.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/chery-icaur-v27-2027-precio-ficha-tecnica-hero.webp` |
| `citroen-c3-hibrido-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-c3-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c3-aircross-hibrido-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c4-hibrido-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c4-x-hibrido-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-c4-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-c4-x-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-aircross-hibrido-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-aircross-phev-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-x-hibrido-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-berlingo-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-spacetourer-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-berlingo-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-spacetourer-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-ami-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-c3-aircross-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-aircross-hibrido-2025-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-c5-aircross-2025-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-aircross-phev-2025-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-x-phev-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-jumpy-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-jumper-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c3-aircross-gasolina-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c3-gasolina-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-jumpy-diesel-2026-precio-ficha-tecnica` | blog-posts-citroen-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ineos-grenadier-station-wagon-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ineos-grenadier-quartermaster-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ineos-grenadier-trialmaster-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `morgan-plus-four-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `morgan-plus-six-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `morgan-super-3-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `caterham-seven-170-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `caterham-seven-340-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `caterham-super-seven-600-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `caterham-super-seven-2000-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `donkervoort-f22-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `donkervoort-d8-gto-jd70-r-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-ora-03-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-ora-07-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-ypsilon-hybrid-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-ypsilon-electric-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `abarth-500e-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `abarth-600e-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-3-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-4-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-7-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-n8-2025-precio-ficha-tecnica` | blog-posts-coches-exp10.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s400-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s700-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s800-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s400-excellence-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-s05-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-s07-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-g318-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-l07-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-l6-2026-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls6-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls7-2026-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `levc-l380-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `levc-tx-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `onvo-l60-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `onvo-l90-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-s7-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-r7-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lepas-l4-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lepas-l6-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lepas-l8-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seres-3-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seres-5-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seres-m7-2025-precio-ficha-tecnica` | blog-posts-coches-exp11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-j5-ev-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-j7-shs-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-j8-shs-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-7-gasolina-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-4-shs-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-4-ev-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-5-ev-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-9-shs-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-xpower-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg5-ev-long-range-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg3-hybrid-plus-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-zs-hybrid-plus-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xiaomi-yu7-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xiaomi-su7-ultra-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xiaomi-su7-max-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-firefly-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-et5-touring-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-el6-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-7x-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-001-fr-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-7-gt-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-p7-plus-standard-range-2026-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-mona-m03-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-g6-long-range-2025-precio-ficha-tecnica` | blog-posts-coches-exp12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-spring-extreme-2025-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-e-5008-2026-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-e-5008-long-range-2026-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-ami-buggy-2025-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-frontera-electric-44kwh-2025-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-corsa-12-100-2025-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-500e-giorgio-armani-2025-precio-ficha-tecnica` | blog-posts-coches-exp13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-polo-2026-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tayron-ehybrid-204-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-7-tourer-pro-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-gte-272-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tiguan-ehybrid-272-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-elroq-85-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-enyaq-85x-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-kodiaq-iv-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-tavascan-vz-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-terramar-vz-ehybrid-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-raval-vz-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a6-avant-e-tron-performance-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q6-e-tron-performance-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q4-e-tron-45-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-ix1-edrive20-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-530e-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-cla-250-plus-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-glc-300-e-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-eqa-250-plus-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-urban-cruiser-2026-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-c-hr-plus-230-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz4x-224-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-ioniq-9-long-range-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-electrico-135-2025-precio-ficha-tecnica` | blog-posts-coches-exp14.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-hilux-ev-2026-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-gr-supra-final-edition-2026-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-rav4-gr-sport-phev-2026-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-yaris-cross-gr-sport-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-c-hr-gr-sport-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-proace-verso-electric-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-proace-max-electric-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-corolla-gr-sport-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-lbx-morizo-rr-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rz-550e-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rz-500e-2026-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rz-350e-2026-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-nx-overtrail-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-lc-500-cabrio-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-es-300h-2025-precio-ficha-tecnica` | blog-posts-coches-exp15.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cr-v-ehev-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-civic-ehev-2026-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-hr-v-ehev-2024-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-hr-v-ehev-2026-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-jazz-ehev-2024-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-zr-v-ehev-2024-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-e-ny1-2026-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-3-25-e-skyactiv-g-sedan-2026-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-mx-5-rf-15-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-2-hybrid-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-80-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-5-25-e-skyactiv-g-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-3-20-e-skyactiv-x-sedan-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-30-25-e-skyactiv-g-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-mx-30-e-skyactiv-r-ev-2025-precio-ficha-tecnica` | blog-posts-coches-exp16.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-amarok-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-r-variant-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-touareg-30-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-variant-r-line-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tiguan-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-taigo-15-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-t-cross-15-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tayron-15-etsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tayron-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-octavia-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-octavia-combi-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-kodiaq-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-superb-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-fabia-15-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp17.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-ioniq-6-n-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-nexo-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i10-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-electrico-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i20-n-line-mhev-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-pv5-2025-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sportage-gt-line-mhev-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-ioniq-5-n-line-2025-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev4-gt-line-fastback-2025-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-phev-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-hibrido-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ceed-gt-line-2025-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-hibrido-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i30-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-16-tgdi-180-n-line-2026-precio-ficha-tecnica` | blog-posts-coches-exp18.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-austral-2026-e-tech-200-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-arkana-2026-tce-140-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-symbioz-2026-e-tech-145-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-megane-e-tech-2026-lfp-67-kwh-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-espace-2026-e-tech-200-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-rafale-e-tech-200-2026-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-5-e-tech-40-kwh-2026-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-4-e-tech-52-kwh-2026-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-scenic-e-tech-60-kwh-2026-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-2026-mild-hybrid-140-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-2026-hybrid-155-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-2026-eco-g-120-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-2026-tce-140-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-2026-hybrid-155-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `alpine-a290-rallye-2026-precio-ficha-tecnica` | blog-posts-coches-exp19.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-boxer-22-bluehdi-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-partner-15-bluehdi-130-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-2008-12-puretech-100-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-308-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-expert-15-bluehdi-120-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-rifter-long-15-bluehdi-130-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-e-c5-aircross-long-range-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-jumper-22-bluehdi-140-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-berlingo-talla-xl-15-bluehdi-130-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-zafira-20-diesel-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-3-e-tense-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-n4-e-tense-213-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-n4-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-n8-long-range-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-n8-awd-350-2026-precio-ficha-tecnica` | blog-posts-coches-exp20.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m3-competition-touring-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x3-m50-xdrive-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x6-xdrive40d-2026-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m340i-xdrive-2026-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m5-touring-2026-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-amg-c-43-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-e-200-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-gle-300-d-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-amg-a-35-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-s-450-d-2026-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a6-berlina-2026-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs-q3-sportback-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-sq6-sportback-e-tron-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-s6-e-tron-2025-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q3-sportback-35-tfsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp21.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-ypsilon-2024-precio` | blog-posts-coches-exp26.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-micra-2025-precio` | blog-posts-coches-exp26.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-05-2025-precio` | blog-posts-coches-exp26.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-j6-2025-precio` | blog-posts-coches-exp26.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-haval-h6-2024-precio` | blog-posts-coches-exp26.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-passat-variant-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-passat-variant-ehybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tayron-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tayron-ehybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tiguan-15-etsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tiguan-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-variant-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-t-roc-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-gti-clubsport-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id4-gtx-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id7-gtx-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-touareg-r-ehybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a5-avant-e-hybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a6-avant-e-hybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q5-sportback-e-hybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q3-sportback-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q3-e-hybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-sq8-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a3-allstreet-tfsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q4-sportback-e-tron-45-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-q6-sportback-e-tron-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-elroq-60-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-elroq-50-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-octavia-combi-rs-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-superb-combi-iv-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-superb-combi-20-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-octavia-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-kamiq-15-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-scala-monte-carlo-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-kamiq-monte-carlo-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-ibiza-fr-15-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-arona-fr-15-tsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-ateca-fr-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-leon-15-etsi-150-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-ibiza-fr-10-tsi-115-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-terramar-15-etsi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-terramar-20-tsi-204-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-formentor-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-formentor-20-tsi-204-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-leon-sportstourer-20-tdi-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-tavascan-endurance-286-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-born-204-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-tavascan-190-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-macan-electric-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-macan-4s-electric-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-taycan-turbo-s-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-cayenne-s-e-hybrid-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-panamera-gts-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-911-carrera-cabriolet-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `porsche-cayenne-gts-2026-precio-ficha-tecnica` | blog-posts-coches-exp7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-e-3008-dual-motor-325-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-e-5008-320-dual-motor-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-e-308-sw-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-208-12-puretech-100-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-e-boxer-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-rifter-15-bluehdi-130-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-expert-20-bluehdi-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-3008-12-hybrid-136-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-5008-12-hybrid-136-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-jumper-22-bluehdi-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c4-12-puretech-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c4-x-12-puretech-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-c5-aircross-12-puretech-130-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-ami-cargo-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-rocks-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-astra-12-turbo-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-astra-sports-tourer-12-turbo-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-mokka-12-turbo-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-grandland-12-turbo-130-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-combo-15-diesel-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-vivaro-20-diesel-180-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-movano-22-diesel-180-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-e-scudo-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-e-ducato-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-scudo-20-mjt-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-ducato-22-mjt-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-600-12-turbo-100-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-tipo-16-mjt-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-500e-cabrio-118-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-4xe-phev-195-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-15-e-hybrid-130-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-16-mjt-130-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-13-t-130-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-4xe-240-2025-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-renegade-16-multijet-130-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-renegade-10-t3-120-2024-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-5-turbo-3e-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-espace-2025-e-tech-200-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-trafic-e-tech-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-master-e-tech-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-captur-2026-e-tech-160-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-arkana-2026-e-tech-145-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-grand-kangoo-e-tech-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-trafic-20-dci-170-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-master-23-dci-180-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-captur-2026-tce-90-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-hybrid-155-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-logan-tce-90-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-hybrid-g-150-4x4-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-hybrid-g-150-4x4-2026-precio-ficha-tecnica` | blog-posts-coches-exp8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sportage-hev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev9-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev2-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-qashqai-e-power-190-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-puma-mhev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-focus-mhev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x3-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i4-edrive35-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x1-xdrive25e-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i5-edrive40-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-2-coupe-220i-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-4-420i-coupe-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m440i-xdrive-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-yaris-cross-130h-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-land-cruiser-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz4x-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-gr86-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-civic-ehev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-corolla-5p-140h-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-hr-v-ehev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-e-ny1-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-jazz-ehev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-micra-ev-52kwh-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-capri-ev-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-camry-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-corolla-sedan-140h-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-cla-250-plus-eq-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-glc-400-eq-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-cla-sb-250-plus-eq-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x6-xdrive40i-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-3-320i-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-8-840i-gc-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-z4-m40i-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-cle-200-coupe-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-gla-250-e-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-gle-450-e-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-g-580-eq-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-eqs-suv-580-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-gt-43-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-eqv-300-largo-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-clase-b-200-2026-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volvo-s90-b5-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volvo-s60-b5-2025-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-swift-2025-12-83cv-hibrido-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-space-star-2025-10-71cv-precio-ficha-tecnica` | blog-posts-coches-exp9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-leon-2025-precio-ficha-tecnica` | blog-posts-cupra-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-leon-sportstourer-2025-precio-ficha-tecnica` | blog-posts-cupra-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-raval-2026-precio-ficha-tecnica` | blog-posts-cupra-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-sandero-tce-90-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-sandero-eco-g-100-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-sandero-hybrid-155-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-sandero-stepway-tce-90-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-sandero-stepway-eco-g-100-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-sandero-stepway-hybrid-155-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-tce-130-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-tce-130-4x4-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-eco-g-100-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-tce-140-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-tce-130-4x4-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-tce-110-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-eco-g-120-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-tce-110-7-plazas-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-eco-g-120-7-plazas-2026-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-spring-electric-45-2024-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-spring-electric-65-2024-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-hybrid-140-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-hybrid-155-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-eco-g-140-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-hybrid-140-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-jogger-hybrid-140-7-plazas-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-logan-eco-g-100-2025-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-duster-blue-dci-115-2024-precio-ficha-tecnica` | blog-posts-dacia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tasa-unica-alcohol-02-reforma` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_lH36sq52hwtB62b5mG5PTiN0.webp` |
| `descubre-las-nuevas-medidas-de-la-dgt-para-octubre-uso-obligatorio-de-guantes-y-calzado-para-motoristas-fin-de-exenciones-del-cinturon-y-como-recurrir-multas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_OpUts9ah6esIitoCimDpGfoD.webp` |
| `guantes-calzado-obligatorios-moto-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_zC1X95ScWnv8CV8Vg87CX8Z3.webp` |
| `como-recurrir-multa-de-patinete-electrico-vmp-modelo-gratis` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_Rg3lNWCmuJFceYG5fnr5GxkV.jpg` |
| `multas-a-patinetes-electricos-vmp-en-espana-2027-millones-en-recaudacion-normativa-de-seguros-preguntas-callejeras-y-como-recurrir` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_HXsc74ugJdRcrD6OUbWw6UYq.webp` |
| `como-recurrir-multas-de-la-zbe-en-madrid-barcelona-y-toda-espana-guia-definitiva-y-modelos-con-ia` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_WssTD2LL45WN2edIRTqJafQK.webp` |
| `margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_4Gs93taXVql5TCAhTiPRXcmV.jpg` |
| `autocaravanas-aparcar-norma-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_fgdgudOvVKs0aUhgTfCneTcC.webp` |
| `el-coche-te-vigila-obligatoriedad-del-sistema-addw-antidistracciones-camaras-de-control-de-mirada-y-multas-de-la-dgt` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_VXXdoXUOkY5Ok4EJcLQC3Rwb.webp` |
| `patinete-electrico-normativa-dgt-2026-multas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_F5pOIfRNbW2zwMuYBxtqNVJp.webp` |
| `plataforma-unica-prioridad-peaton` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_BgIXd1FXf5rDAxTesOs8u5UA.webp` |
| `radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_LbTIcL2qqVQAhrzxPbrOcH97.webp` |
| `casco-obligatorio-bicicleta-carretera-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_G1WwUcEv8jWczz67F5KQR1xp.webp` |
| `adelantar-ciclistas-nueva-norma-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_wx3IAH46m8dZsFDO5XWwSaRH.webp` |
| `nuevas-marcas-viales-en-forma-de-circulo-que-significan-multan-y-como-afectan-a-las-curvas-en-espana` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_426BI0BW97IGaLdej25Up3d2.jpg` |
| `como-adelantar-ahora-a-ciclistas-y-coches-averiados-para-que-la-dgt-no-te-cruja-a-multas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_II6qQ1S8OB3yoN8lhl9acX1X.webp` |
| `el-nuevo-carril-de-emergencia-obligatorio-en-retenciones-como-abrir-pasillo-a-ambulancias-y-bomberos-para-evitar-multas-de-la-dgt` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_FLa7XV3eZhvDBCsZHP59jp9c.webp` |
| `prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_771tEknqCBqh15FElxO3a1Og.jpg` |
| `te-van-a-multar-por-llevar-los-cristales-delanteros-tintados-lo-que-la-dgt-no-te-cuenta-multas-de-infarto-y-por-que-te-tiran-en-la-itv` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_Pr2wQ26s58BlQLCUs1Ys8aJN.jpg` |
| `multas-absurdas-de-la-dgt-tabla-oficial-de-sanciones-y-los-casos-mas-raros-que-te-costaran-puntos-y-dinero` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_ztymn5quGBdk7TkEhb6Fwd4B.webp` |
| `atropello-de-jabali-o-animal-en-la-carretera-quien-paga-los-danos-del-coche-segun-la-ley-en-2024-guia-definitiva-para-reclamar` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_mbybwsrf6KVGj8pgcLVYo12P.jpg` |
| `normas-de-trafico-mas-raras-y-estrictas-en-europa-delito-penal-en-francia-prohibicion-del-movil-en-semaforos-y-multas-absurdas-al-volante` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_DYWTcDVsS8FZ9cH5hJfSHKqm.webp` |
| `itv-cada-cuanto-me-toca-tabla-por-anos-multas-por-circular-sin-ella-y-que-pasa-si-llevo-reformas-en-el-coche` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_kbZyyCrxi4nUKUC0U207Sk99.jpg` |
| `como-recurrir-multas-de-trafico-en-ceuta-y-melilla-guia-legal-especifica-plazos-peculiaridades-fronterizas-y-recursos-eficaces` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_WSebgBwttreXq13QaKisyzA7.webp` |
| `balizas-v16-vs-triangulos-el-gran-debate-nacional-estadisticas-de-atropellos-y-la-multa-por-no-llevar-la-luz-conectada` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_C9GYItbbYrI9gA2GpM1x0TIC.webp` |
| `coches-autonomos-de-nivel-3-y-4-en-espana-quien-asume-la-responsabilidad-legal-en-caso-de-accidente` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_i6WEHDBAS6oxpaoF4BCyzZ84.jpg` |
| `preinstalacion-obligatoria-de-alcoholimetros-alcolock-en-coches-nuevos-normativa-europea-gsr2-multas-y-como-afecta-en-espana-francia-italia-y-portugal` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_9vbnKlcgkwRO4a6NCLrf5uMQ.webp` |
| `motos-arcen-atascos-nueva-norma` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_yyeNxONrPfytpAPLwjOOfePi.webp` |
| `entornos-escolares-seguros-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_ryjetwBYSxXVQObcJtfdJB9X.webp` |
| `homologacion-camper-y-caravanas-en-espana-vacios-legales-itv-y-como-evitar-multas-de-la-dgt` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_9sIxG51YwHguMGfBzrlTt4VF.jpg` |
| `ruedas-de-km0-chollo-o-timo-pros-contras-precios-reales-y-multas-por-neumaticos-caducados-o-gastados` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_cvJ7JCB8yWCnOhtHMAvNgcRr.jpg` |
| `patinetes-15-anos-casco-obligatorio` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_ZQpmn5eiriITOvWig4WfBdJH.webp` |
| `multas-de-trafico-en-barcelona-y-la-zbe-como-recurrir-sanciones-de-la-dgt-y-el-ayuntamiento-al-instante` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_3Vfla3ZGND2Uk7vEE3E2SS1f.webp` |
| `multas-dgt` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_okJhFDtFUaQsQ4wtq34TS40P.jpg` |
| `multas-de-aparcamiento-y-grua-en-madrid-como-recuperar-tu-coche-y-recurrir-la-sancion-con-exito` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_7rL5w9IdWEI27UmmT1XKZsHv.webp` |
| `me-ha-llegado-una-multa-de-la-dgt-pero-el-conductor-no-era-yo-quien-paga-como-identificarlo-y-plazos-para-evitar-multas-triplicadas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_voXiZi4ClJrQAer1k09aIzba.jpg` |
| `revolucion-al-volante-nuevas-normativas-de-la-dgt-el-fin-del-semaforo-ambar-y-multas-en-la-a-2` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_hsdOOLGHlAjFDivjDV42U8TJ.webp` |
| `codigo-78-carnet-automatico-manual-curso-7-horas` | blog-posts-db.ts | NO | NO (2 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_7Ud5oyjmlKLYJhwprkUGQt2D.webp` |
| `nieve-prohibido-adelantar-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_s04r78hSIBj4idcUCn4f1Asp.webp` |
| `dgt-anuncia-reforma-entra-en-vigor-1-octubre` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_YzeQb0jkGvlYor09qKKewgYu.webp` |
| `camaras-ocultas-de-la-dgt-para-movil-y-cinturon-como-funciona-el-gran-ojo-invisible-multas-de-200-euros-y-trucos-legales-para-recurrirlas-con-exito` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_x6EXgMpFV0gywPgTGKZ4lWqI.webp` |
| `te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_7BZGaqdCfXMfpOoI5wtzHIk6.webp` |
| `multa-fantasma-testra-dgt-que-hacer` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_YP2T4AC5bKp1T69G1WRrXvAR.webp` |
| `como-recurrir-multas-de-trafico-en-canarias-guia-legal-especifica-peculiaridades-insulares-plazos-y-recursos-en-las-islas` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_cnV5G0LW63m7mAjJdhTEbRlM.webp` |
| `multas-en-la-m-30-y-madrid-central-como-evitar-sanciones-y-recurrirlas-si-te-desplazas-por-la-capital` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_UTN3jdCM2nFjdob0KvJgrdAM.webp` |
| `falsa-multa-dgt-sms-correo-phishing` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_USFcUag8X3yXCoK2Rs6n5sUg.webp` |
| `robar-romper-radar-dgt-consecuencias` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_EXDBMY29PDnPM92z8eFmcnSj.webp` |
| `multas-de-trafico-en-el-extranjero-francia-portugal-italia-alemania-como-recurrir-multa-radar-extranjero-en-espana-conductor-extranjero-multado-en-espana-dgt-anular-multa-ztl-italia-antai-francia-convenio-intercambio-datos-trafico-union-europea` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_OTKoFSlvOttXyPp6ho66za2U.webp` |
| `llevas-la-nueva-luz-v16-conectada-en-el-coche-descubre-la-normativa-oficial-de-la-dgt-el-importe-de-las-multas-y-como-evitar-sanciones` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_29AfMZtT37ffgxzKahnqeUub.webp` |
| `deca-digital-obligatorio-5-octubre-2026` | blog-posts-db.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/file_deca-digital-2026.webp` |
| `deepal-s05-2026-precio-ficha-tecnica` | blog-posts-deepal-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-s05-awd-2026-precio-ficha-tecnica` | blog-posts-deepal-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-s05-phev-2026-precio-ficha-tecnica` | blog-posts-deepal-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `delage-d12-gt-2025-precio-ficha-tecnica` | blog-posts-delage-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `delage-d12-club-2025-precio-ficha-tecnica` | blog-posts-delage-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `pagar-multa-con-descuento-y-recurrir` | blog-posts-demanda-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/pagar-multa-descuento-hero.webp` |
| `como-saber-si-tengo-multas-pendientes` | blog-posts-demanda-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/testra-multas-pendientes-hero.webp` |
| `cuanto-tarda-dgt-en-responder-recurso` | blog-posts-demanda-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/plazos-dgt-recurso-hero.webp` |
| `denza-d9-dm-i-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-d9-ev-2025-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-n7-2024-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-n8-dm-p-2024-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-n8-ev-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-n8l-dm-2025-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-n8l-ev-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z9-dm-2024-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z9-ev-2024-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z9s-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo (la única coincidente era un placeholder idéntico para varios modelos) `/media/denza-z9s-lanzamiento-2026-hero.webp` |
| `denza-z9gt-dm-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z9gt-ev-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z-coupe-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z-spider-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z-racing-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-bao-5-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-bao-8-2026-precio-ficha-tecnica` | blog-posts-denza-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-600-2026-precio-ficha-tecnica` | blog-posts-dfsk-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-f5-2026-precio-ficha-tecnica` | blog-posts-dfsk-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-seres-3-2026-precio-ficha-tecnica` | blog-posts-dfsk-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-seres-5-2026-precio-ficha-tecnica` | blog-posts-dfsk-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-seres-5-4wd-2026-precio-ficha-tecnica` | blog-posts-dfsk-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-e5-plus-2026-precio-ficha-tecnica` | blog-posts-dfsk-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-box-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-huge-hev-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-epi-007-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-epi-008-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-nammi-06-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-shine-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-shine-gs-2025-precio-ficha-tecnica` | blog-posts-dongfeng-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s700-hibrido-2026-precio-ficha-tecnica` | blog-posts-ebro-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s700-phev-2026-precio-ficha-tecnica` | blog-posts-ebro-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s900-phev-2026-precio-ficha-tecnica` | blog-posts-ebro-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ebro-s800-phev-2027-perfiles-adas-personales` | blog-posts-ebro-adas-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/ebro-s800-phev-2027-perfiles-adas-hero.webp` |
| `radares-que-mas-multan-espana-2024-mapa-datos` | blog-posts-estudios-geo.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/caso-radar-madrid.jpg` |
| `cuanto-cuesta-multa-espana-pagar-descuento-recurrir` | blog-posts-estudios-geo.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/como-pagar-multa-dgt.webp` |
| `zbe-espana-2026-ciudades-multan-cuanto-multa` | blog-posts-estudios-geo.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/pilar-zbe.webp` |
| `coches-mas-seguros-2026-euroncap-ranking` | blog-posts-euroncap-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/coches-mas-seguros-2026-euroncap-hero.webp` |
| `exeed-lx-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-lx-c-dm-2024-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-txl-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-vx-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-vx-c-dm-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-rx-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-rx-c-dm-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-sterra-et-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-sterra-et-reev-2024-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-sterra-es-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-sterra-es-reev-2025-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `exeed-et5-2026-precio-ficha-tecnica` | blog-posts-exeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-n7-nueva-generacion-salon-paris-2026` | blog-posts-feed-2026-10-06.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/ds-n7-nueva-generacion-salon-paris-2026-hero.webp` |
| `xiaomi-skynomad-lanzamiento-ventas-china-1705-km` | blog-posts-feed-2026-10-06.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-skynomad-lanzamiento-ventas-china-1705-km-hero.webp` |
| `ferrari-12cilindri-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-12cilindri-spider-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-purosangue-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-296-gtb-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-296-gts-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-296-speciale-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-296-speciale-a-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-sf90-stradale-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-sf90-spider-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-sf90-xx-stradale-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-sf90-xx-spider-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-roma-spider-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-amalfi-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-daytona-sp3-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-f80-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-roma-2024-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/ferrari-roma-2024-precio-ficha-tecnica/ferrari-roma-2024-precio-ficha-tecnica-hero.webp |
| `ferrari-amalfi-spider-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ferrari-luce-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/ferrari-luce-2026-precio-ficha-tecnica/ferrari-luce-2026-precio-ficha-tecnica-hero.webp |
| `ferrari-296-speciale-piloti-2025-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/ferrari-296-speciale-piloti-2025-precio-ficha-tecnica/ferrari-296-speciale-piloti-2025-precio-ficha-tecnica-hero.webp |
| `ferrari-812-gts-2024-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/ferrari-812-gts-2024-precio-ficha-tecnica/ferrari-812-gts-2024-precio-ficha-tecnica-hero.webp |
| `ferrari-12cilindri-manuale-2026-precio-ficha-tecnica` | blog-posts-ferrari-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/ferrari-12cilindri-manuale-2026-precio-ficha-tecnica/ferrari-12cilindri-manuale-2026-precio-ficha-tecnica-hero.webp |
| `fiat-500e-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-500-hibrido-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-pandina-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-grande-panda-hibrido-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-600e-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-600-sport-145cv-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-tipo-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-doblo-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-e-doblo-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-e-ulysse-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-topolino-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-grande-panda-ev-113-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/fiat-grande-panda-ev-113-2025-precio-ficha-tecnica/fiat-grande-panda-ev-113-2025-precio-ficha-tecnica-hero.webp |
| `fiat-600-hybrid-110-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/fiat-600-hybrid-110-2025-precio-ficha-tecnica/fiat-600-hybrid-110-2025-precio-ficha-tecnica-hero.webp |
| `fiat-ulysse-20-bluehdi-180-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-500e-3plus1-118-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/fiat-500e-3plus1-118-2025-precio-ficha-tecnica/fiat-500e-3plus1-118-2025-precio-ficha-tecnica-hero.webp |
| `fiat-tipo-cross-hybrid-130-2024-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/fiat-tipo-cross-hybrid-130-2024-precio-ficha-tecnica/fiat-tipo-cross-hybrid-130-2024-precio-ficha-tecnica-hero.webp |
| `fiat-doblo-12-puretech-110-2025-precio-ficha-tecnica` | blog-posts-fiat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/fiat-doblo-12-puretech-110-2025-precio-ficha-tecnica/fiat-doblo-12-puretech-110-2025-precio-ficha-tecnica-hero.webp |
| `nuevo-bmw-serie-3-i3-electrico-2026-precio-ficha-tecnica` | blog-posts-flash-2026.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-spring-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | — | Imposible: sin foto disponible del modelo en el repo `/media/dacia-spring-baja-precio-octubre-2026-hero.webp` |
| `dacia-sandero-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i20-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-i20-baja-precio-octubre-2026/hyundai-i20-baja-precio-octubre-2026-hero.webp |
| `nuevo-hyundai-tucson-2027-presentacion-precio-ficha-tecnica` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/nuevo-hyundai-tucson-2027-hero.webp` |
| `audi-a2-e-tron-2026-precio-ficha-tecnica` | blog-posts-flash-2026.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `plan-auto-ayudas-autonomos-empresas-coche-electrico` | blog-posts-flash-2026.ts | NO | NO (2 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/plan-auto-ayudas-autonomos-empresas-coche-electrico.webp` |
| `dacia-tribrid-150-4x4-tres-energias` | blog-posts-flash-2026.ts | OK | NO (1 rotas) | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev3-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/kia-ev3-baja-precio-octubre-2026-hero.webp` |
| `opel-frontera-electric-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/opel-frontera-electric-baja-precio-octubre-2026-hero.webp` |
| `citroen-e-c3-aircross-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/citroen-e-c3-aircross-baja-precio-octubre-2026-hero.webp` |
| `silence-s01-plus-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/silence-s01-plus-baja-precio-octubre-2026-hero.webp` |
| `nissan-qashqai-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/nissan-qashqai-baja-precio-octubre-2026-hero.webp` |
| `cupra-tavascan-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cupra-tavascan-baja-precio-octubre-2026-hero.webp` |
| `robotaxis-madrid-furgonetas-mapeo-octubre-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/robotaxis-madrid-furgonetas-mapeo-octubre-2026-hero.webp` |
| `zbe-vitoria-multas-6000-euros-octubre-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/zbe-vitoria-multas-6000-euros-octubre-2026-hero.webp` |
| `leapmotor-t03-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/leapmotor-t03-baja-precio-octubre-2026-hero.webp` |
| `toyota-corolla-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/toyota-corolla-baja-precio-octubre-2026-hero.webp` |
| `toyota-yaris-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/toyota-yaris-baja-precio-octubre-2026-hero.webp` |
| `seat-ibiza-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-ibiza-baja-precio-octubre-2026-hero.webp` |
| `leapmotor-c10-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/leapmotor-c10-baja-precio-octubre-2026-hero.webp` |
| `byd-seal-u-ev-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/byd-seal-u-ev-baja-precio-octubre-2026-hero.webp` |
| `niu-mqi-gt-evo-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/niu-mqi-gt-evo-baja-precio-octubre-2026-hero.webp` |
| `nuevo-radar-fijo-a67-torrelavega` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/nuevo-radar-fijo-a67-torrelavega-hero.webp` |
| `cumbre-mundial-motos-seguras-zaragoza-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/cumbre-motos-zaragoza-hero.webp` |
| `zero-s-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/zero-s-baja-precio-octubre-2026-hero.webp` |
| `operativo-dgt-puente-pilar-2026-57-millones` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/puente-pilar-2026-operativo-dgt-hero.webp` |
| `francia-retira-carnet-movil-al-volante` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/francia-movil-carnet-hero.webp` |
| `toyota-corolla-touring-sports-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-corolla-touring-sports-baja-precio-octubre-2026-hero.webp` |
| `ford-puma-gen-e-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/ford-puma-gen-e-baja-precio-octubre-2026-hero.webp` |
| `ford-puma-st-baja-precio-octubre-2026` | blog-posts-flash-2026.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/ford-puma-st-baja-precio-octubre-2026-hero.webp` |
| `aito-m9-2024-precio-ficha-tecnica` | blog-posts-flash-2026.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m9-2025-precio-ficha-tecnica` | blog-posts-flash-2026.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-a5-e-hybrid-367-2026-precio-ficha-tecnica` | blog-posts-flash-2026.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-puma-gen-e-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-puma-st-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-kuga-phev-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-kuga-fhev-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-focus-st-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-gt-fastback-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-dark-horse-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-mach-e-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-mach-e-extended-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-mach-e-gt-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-mach-e-rally-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-explorer-electrico-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-explorer-electrico-awd-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-capri-electrico-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-e-tourneo-custom-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-tourneo-custom-phev-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-transit-custom-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-ranger-wildtrak-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-ranger-raptor-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-ranger-phev-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-tourneo-courier-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-e-transit-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-tourneo-connect-phev-150-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-e-transit-courier-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-puma-st-line-x-mhev-155-2025-precio-ficha-tecnica` | blog-posts-ford-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-t5-evo-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-t5-evo-hev-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-t5-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-friday-ev-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-friday-reev-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-s7-ev-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-s7-reev-2026-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-u-tour-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-u-tour-hev-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `forthing-v9-2025-precio-ficha-tecnica` | blog-posts-forthing-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-e5-2026-precio-ficha-tecnica` | blog-posts-geely-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-starray-em-i-2026-precio-ficha-tecnica` | blog-posts-geely-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-e8-2024-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-l6-em-i-2025-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-l7-em-i-2025-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-xingyuan-2024-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-starshine-8-2025-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-a7-em-i-2025-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-m9-2025-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-zhanjian-700-2026-precio-ficha-tecnica` | blog-posts-geely-galaxy-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-jolion-pro-2025-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6-hev-2025-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6-phev-2025-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-jolion-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6-gt-2025-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h9-2025-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h3-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h5-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-dargo-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-dargo-x-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-raptor-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-raptor-plus-2026-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-xiaolong-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-xiaolong-max-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-chitu-2024-precio-ficha-tecnica` | blog-posts-haval-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-civic-type-r-2026-precio-ficha-tecnica` | blog-posts-honda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-civic-type-r-ultimate-edition-2025-precio-ficha-tecnica` | blog-posts-honda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-jazz-crosstar-2026-precio-ficha-tecnica` | blog-posts-honda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-zr-v-ehev-2025-precio-ficha-tecnica` | blog-posts-honda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cr-v-ephev-2026-precio-ficha-tecnica` | blog-posts-honda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-prelude-ehev-2026-precio-ficha-tecnica` | blog-posts-honda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-eh7-2024-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-ehs7-2025-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-tiangong-05-2025-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-tiangong-06-2025-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs3-2023-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs5-2023-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs6-phev-2025-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs7-phev-2024-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs7-2023-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-h5-2023-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-h5-hev-2024-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-h6-2023-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-h7-phev-2026-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-h9-2024-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-e-qm5-2025-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hq9-phev-2024-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hq9-2023-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-guoya-2024-precio-ficha-tecnica` | blog-posts-hongqi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyptec-gt-2024-precio-ficha-tecnica` | blog-posts-hyptec-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyptec-ht-2025-precio-ficha-tecnica` | blog-posts-hyptec-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyptec-hl-erev-2025-precio-ficha-tecnica` | blog-posts-hyptec-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyptec-ssr-2024-precio-ficha-tecnica` | blog-posts-hyptec-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyptec-s600-2026-precio-ficha-tecnica` | blog-posts-hyptec-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyptec-a800-2026-precio-ficha-tecnica` | blog-posts-hyptec-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-electrico-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-hibrido-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-hibrido-enchufable-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-ioniq-5-n-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-ioniq-9-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-staria-hibrido-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-nexo-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-santa-fe-hibrido-enchufable-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-gasolina-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-inster-cross-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-gasolina-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-16-tgdi-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i30-10-tgdi-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i20-10-tgdi-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-electrico-49-kwh-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-diesel-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-ioniq-5-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-ioniq-5-2026-precio-ficha-tecnica/hyundai-ioniq-5-2026-precio-ficha-tecnica-hero.webp |
| `hyundai-ioniq-6-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-ioniq-6-2025-precio-ficha-tecnica/hyundai-ioniq-6-2025-precio-ficha-tecnica-hero.webp |
| `hyundai-inster-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-inster-2025-precio-ficha-tecnica/hyundai-inster-2025-precio-ficha-tecnica-hero.webp |
| `hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica/hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica-hero.webp |
| `hyundai-kona-hibrido-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-kona-hibrido-2025-precio-ficha-tecnica/hyundai-kona-hibrido-2025-precio-ficha-tecnica-hero.webp |
| `hyundai-bayon-10-tgdi-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-bayon-10-tgdi-2025-precio-ficha-tecnica/hyundai-bayon-10-tgdi-2025-precio-ficha-tecnica-hero.webp |
| `hyundai-i30-15-tgdi-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-i30-15-tgdi-2025-precio-ficha-tecnica/hyundai-i30-15-tgdi-2025-precio-ficha-tecnica-hero.webp |
| `hyundai-staria-diesel-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-staria-diesel-2025-precio-ficha-tecnica/hyundai-staria-diesel-2025-precio-ficha-tecnica-hero.webp |
| `hyundai-tucson-16-tgdi-150-2025-precio-ficha-tecnica` | blog-posts-hyundai-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/hyundai-tucson-16-tgdi-150-2025-precio-ficha-tecnica/hyundai-tucson-16-tgdi-150-2025-precio-ficha-tecnica-hero.webp |
| `im-l6-2025-precio-ficha-tecnica` | blog-posts-im-motors-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-l7-2024-precio-ficha-tecnica` | blog-posts-im-motors-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls7-2025-precio-ficha-tecnica` | blog-posts-im-motors-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-e30x-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-t9-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-t9-ev-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-t9-phev-2026-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-qx-phev-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-qx-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-x8-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-rf8-phev-2026-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-e40x-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-js4-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-j7-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-ej7-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-t8-pro-2024-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-js2-pro-2024-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jac-a5-plus-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sehol-e10x-2025-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sehol-x6-2024-precio-ficha-tecnica` | blog-posts-jac-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-7-gasolina-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-7-shs-hibrido-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-5-shs-hibrido-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-5-ev-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-8-shs-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-6-ev-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-6-ev-awd-2026-precio-ficha-tecnica` | blog-posts-jaecoo-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-avenger-e-hybrid-110-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-avenger-gasolina-100-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-avenger-4xe-145-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-renegade-e-hybrid-130-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-renegade-4xe-190-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-e-hybrid-145-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-e-hybrid-plug-in-225-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-electrico-231-long-range-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-4xe-electrico-375-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-wrangler-4xe-380-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-grand-cherokee-4xe-380-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-avenger-electric-156-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-compass-electric-213-2026-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-renegade-4xe-240-2025-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-wrangler-20t-272-2025-precio-ficha-tecnica` | blog-posts-jeep-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x50-2025-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-dashing-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x70-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x70-plus-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x70-pro-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x90-plus-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-x95-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-t2-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-t1-2025-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-t1-i-dm-2025-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-t2-i-dm-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-t2-i-dm-xwd-2026-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-shanhai-l6-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-shanhai-l7-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-shanhai-l9-2024-precio-ficha-tecnica` | blog-posts-jetour-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-torres-g15t-gasolina-2025-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-torres-hev-hibrido-2026-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-actyon-gasolina-2025-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-korando-g15t-2025-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-tivoli-g15t-2025-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-rexton-diesel-2025-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-musso-diesel-2026-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-musso-evx-electrico-2026-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-korando-emotion-electrico-2026-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/kgm-korando-emotion-electrico-2026-precio-ficha-tecnica/kgm-korando-emotion-electrico-2026-precio-ficha-tecnica-hero.webp |
| `kgm-tivoli-grand-g15t-2026-precio-ficha-tecnica` | blog-posts-kgm-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev4-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev5-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev9-2024-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev6-gt-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-niro-ev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-niro-phev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sportage-phev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sorento-hev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sorento-phev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ceed-sw-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-proceed-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-picanto-gt-line-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev3-gt-line-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sportage-mhev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-xceed-phev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ceed-15-tgdi-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sorento-diesel-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-stonic-10-tgdi-2026-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-sportage-diesel-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ceed-sw-phev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev6-gt-line-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-xceed-15-mhev-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev4-long-range-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ceed-10-tgdi-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev3-air-2025-precio-ficha-tecnica` | blog-posts-kia-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-revuelto-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-temerario-2025-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-urus-se-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-urus-performante-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-urus-s-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-huracan-tecnica-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-huracan-sto-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-huracan-evo-spyder-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-huracan-evo-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lamborghini-huracan-evo-2024-precio-ficha-tecnica/lamborghini-huracan-evo-2024-precio-ficha-tecnica-hero.webp |
| `lamborghini-huracan-evo-rwd-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: lamborghini-huracan-evo-rwd-2024-precio-ficha-tecnica) -> /media/fotos-reales/lamborghini-huracan-evo-rwd-2024-precio-ficha-tecnica/lamborghini-huracan-evo-rwd-2024-precio-ficha-tecnica-interior-oficial.webp |
| `lamborghini-huracan-evo-rwd-spyder-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lamborghini-huracan-evo-rwd-spyder-2024-precio-ficha-tecnica/lamborghini-huracan-evo-rwd-spyder-2024-precio-ficha-tecnica-hero.webp |
| `lamborghini-urus-se-performante-2026-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lamborghini-urus-se-performante-2026-precio-ficha-tecnica/lamborghini-urus-se-performante-2026-precio-ficha-tecnica-hero.webp |
| `lamborghini-huracan-stj-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-huracan-sterrato-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lamborghini-huracan-sterrato-2024-precio-ficha-tecnica/lamborghini-huracan-sterrato-2024-precio-ficha-tecnica-hero.webp |
| `lamborghini-countach-lpi-800-4-2024-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lamborghini-fenomeno-2025-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lamborghini-fenomeno-2025-precio-ficha-tecnica/lamborghini-fenomeno-2025-precio-ficha-tecnica-hero.webp |
| `lamborghini-fenomeno-roadster-2026-precio-ficha-tecnica` | blog-posts-lamborghini-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c10-reev-2025-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-b10-reev-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-b05-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-b03x-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c01-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c01-erev-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c01-4wd-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c11-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c11-erev-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c16-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c16-erev-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c16-erev-280-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-d19-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-d19-erev-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-paris-2026-b03-d19-debut-europa` | blog-posts-leapmotor-a.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo `/media/leapmotor-paris-2026-b03-d19-debut.webp` |
| `leapmotor-b03-2026-precio-ficha-tecnica` | blog-posts-leapmotor-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lepas-l4-ev-2026-precio-ficha-tecnica` | blog-posts-lepas-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lepas-l6-ev-2026-precio-ficha-tecnica` | blog-posts-lepas-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `levc-tx-2024-precio-ficha-tecnica` | blog-posts-levc-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `levc-tx-shuttle-2024-precio-ficha-tecnica` | blog-posts-levc-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `levc-vn5-2024-precio-ficha-tecnica` | blog-posts-levc-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `levc-l380-2024-precio-ficha-tecnica` | blog-posts-levc-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-ux-300e-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-nx-350h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-nx-450h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rx-350h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rx-450h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rx-500h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rz-300e-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-rz-450e-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-es-300h-2026-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-es-350e-2026-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-es-500e-2026-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-ls-500h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-lc-500-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lexus-lc-500h-2024-precio-ficha-tecnica` | blog-posts-lexus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `li-auto-l7-2025-precio-ficha-tecnica` | blog-posts-liauto-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `li-auto-l8-2026-precio-ficha-tecnica` | blog-posts-liauto-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `li-auto-l9-2026-precio-ficha-tecnica` | blog-posts-liauto-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `li-auto-mega-2026-precio-ficha-tecnica` | blog-posts-liauto-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `li-auto-i6-2025-precio-ficha-tecnica` | blog-posts-liauto-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `li-auto-i9-2026-precio-ficha-tecnica` | blog-posts-liauto-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/li-auto-i9-home-2026-oficial-v2-hero.webp` |
| `ligier-myli-2025-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-myli-diesel-2025-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-myli-l7e-2025-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-myli-lab-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-myli-max-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-myli-max-confort-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-myli-max-confort-l7e-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-js50-select-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-js50-select-confort-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-js50-elite-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-js50-ultimate-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ligier-js50-electrico-2026-precio-ficha-tecnica` | blog-posts-ligier-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-x3-pro-2025-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-x6-pro-2025-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-s6-pro-2024-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-7-2024-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-8-2025-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-9-2024-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-maple-60s-2024-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livan-maple-80v-2024-precio-ficha-tecnica` | blog-posts-livan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `como-recuperar-puntos-carnet` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/como-recuperar-puntos-carnet.webp` |
| `multa-conducir-sin-seguro` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multa-conducir-sin-seguro.webp` |
| `tabla-multas-exceso-velocidad-2026` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/tabla-multas-exceso-velocidad-2026.webp` |
| `como-pagar-multa-dgt` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/como-pagar-multa-dgt.webp` |
| `que-pasa-si-no-pagas-una-multa` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/que-pasa-si-no-pagas-una-multa.webp` |
| `multa-drogas-al-volante` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multa-drogas-al-volante.webp` |
| `cuanto-tarda-en-llegar-una-multa-de-radar` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp` |
| `multa-saltarse-stop` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multa-saltarse-stop.webp` |
| `cinemometro-laser-como-funciona-multa` | blog-posts-longtail-1.ts | NO | NO (3 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/cinemometro-laser-velolaser.webp` |
| `testra-dgt-consultar-multas-publicadas` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/testra-dgt-consultar-multas-publicadas.webp` |
| `chatgpt-vs-analizador-multas` | blog-posts-longtail-1.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/chatgpt-vs-analizador-multas-hero.webp` |
| `lancia-gamma-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `isuzu-d-max-ev-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `arcfox-t1-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `icaur-v25-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tank-800-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `caterham-project-v-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-es9-2024-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `polestar-7-2028-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lancia-gamma-hf-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-10-em-p-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-ora-5-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-emkoo-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-gs8-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-t11-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-ex2-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-es8-2025-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `icaur-03t-2026-precio-autonomia` | blog-posts-lote1.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-fort-250-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/qjmotor-fort-250-2026-ficha-tecnica-precio-1.webp` |
| `benelli-302s-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/benelli-302s-2026-ficha-tecnica-precio-1.webp` |
| `ajp-pr3-240-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ajp-pr3-240-2026-ficha-tecnica-precio-1.webp` |
| `rieju-aventura-500-legend-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/rieju-aventura-500-legend-2026-ficha-tecnica-precio-1.webp` |
| `macbor-xr1-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/macbor-xr1-125-2026-ficha-tecnica-precio-1.webp` |
| `wottan-storm-s-300-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/wottan-storm-s-300-2026-ficha-tecnica-precio-1.webp` |
| `ebroh-bravo-gle-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ebroh-bravo-gle-2026-ficha-tecnica-precio-1.webp` |
| `mutt-mastiff-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/mutt-mastiff-125-2026-ficha-tecnica-precio-1.webp` |
| `bullit-hero-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bullit-hero-125-2026-ficha-tecnica-precio-1.webp` |
| `bluroc-legend-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bluroc-legend-125-2026-ficha-tecnica-precio-1.webp` |
| `fb-mondial-flex-300-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/fb-mondial-flex-300-2026-ficha-tecnica-precio-1.webp` |
| `fb-mondial-imola-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/fb-mondial-imola-125-2026-ficha-tecnica-precio-1.webp` |
| `bsa-bantam-350-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bsa-bantam-350-2026-ficha-tecnica-precio-1.webp` |
| `norton-v4sv-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/norton-v4sv-2026-ficha-tecnica-precio-1.webp` |
| `tm-en-300-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/tm-en-300-2026-ficha-tecnica-precio-1.webp` |
| `vent-baja-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/vent-baja-125-2026-ficha-tecnica-precio-1.webp` |
| `hero-vida-v1-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/hero-vida-v1-2026-ficha-tecnica-precio-1.webp` |
| `revolt-rv400-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/revolt-rv400-2026-ficha-tecnica-precio-1.webp` |
| `tvs-iqube-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/tvs-iqube-2026-ficha-tecnica-precio-1.webp` |
| `kymco-ionex-s7-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kymco-ionex-s7-2026-ficha-tecnica-precio-1.webp` |
| `malaguti-rst-125-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/malaguti-rst-125-2026-ficha-tecnica-precio-1.webp` |
| `bultaco-brinco-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bultaco-brinco-2026-ficha-tecnica-precio-1.webp` |
| `mecatecno-t8-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/mecatecno-t8-2026-ficha-tecnica-precio-1.webp` |
| `electric-motion-escape-r-2026-precio-ficha-tecnica` | blog-posts-lote10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/electric-motion-escape-r-2026-ficha-tecnica-precio-1.webp` |
| `byd-shark-6-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-p7-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-4-urban-ev-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-06-ev-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-08-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-song-l-dm-i-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls6-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-05-dm-i-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-qin-l-ev-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-8-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fangchengbao-bao-3-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-xiangwang-s7-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hongqi-hs3-phev-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-a9l-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-gs4-max-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-ep9-2024-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-x5-plus-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bestune-yueyi-07-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-gs3-emzoom-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gac-trumpchi-xiangwang-s9-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6l-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volvo-em90-2024-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-song-pro-dm-i-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-xia-2025-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg5-2026-precio-autonomia` | blog-posts-lote11.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-sl-63-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id5-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id7-gtx-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-arteon-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-touran-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-1-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-2-gran-coupe-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-3-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-serie-4-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-x4-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-tt-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-r8-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `audi-rs7-sportback-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-a35-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-a45-s-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-c43-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-c63-s-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-g63-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-amg-one-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-gls-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-i-pace-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-f-pace-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-e-pace-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-f-type-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-fiesta-2025-precio-autonomia` | blog-posts-lote12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-eny1-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-evitara-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `genesis-gv60-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chevrolet-spark-euv-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz7-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-gt-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-patrol-2025-precio-v6` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `subaru-trailseeker-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-ez-60-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz5-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-fronx-2025-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-palisade-2026-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-tasman-2025-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `genesis-gv70-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `genesis-gv90-2027-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jeep-cherokee-2026-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chevrolet-blazer-ev-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tesla-model-y-l-2026-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tesla-cybercab-2026-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gmc-sierra-ev-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `skoda-kylaq-2025-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-murano-2025-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ram-1500-ramcharger-2026-precio-ficha` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-prologue-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chevrolet-silverado-ev-2025-precio-autonomia` | blog-posts-lote13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lifan-kpt-400-trail-42-cv-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/lifan-kpt-400-1.webp` |
| `hanway-sc-125-s-precio-ficha` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/hanway-sc-125-s-1.webp` |
| `cyclone-rx1-125-trail-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-rx1-1.webp` |
| `cyclone-ra2-125-custom-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-ra2-1.webp` |
| `qjmotor-srk-400rs-4-cilindros-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srk-400rs-1.webp` |
| `cfmoto-250sr-deportiva-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-250sr-1.webp` |
| `cfmoto-250cl-x-neo-retro-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-250cl-x-1.webp` |
| `voge-300acx-scrambler-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-300acx-1.webp` |
| `voge-625r-naked-64-cv-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-625r-1.webp` |
| `cfmoto-150nk-naked-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-150nk-1.webp` |
| `voge-525r-naked-a2-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/voge-525r-1.webp` |
| `lifan-kpf-150-urbana-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/lifan-kpf-150-1.webp` |
| `qjmotor-srk-921rr-deportiva-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srk-921rr-1.webp` |
| `qjmotor-srk-125s-precio-garantia` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srk-125s-1.webp` |
| `cyclone-battlo-125-naked-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-battlo-1.webp` |
| `morbidelli-t352x-trail-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/morbidelli-t352x-1.webp` |
| `fb-mondial-hps-125-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/fb-mondial-hps-125-1.webp` |
| `zontes-125c-custom-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zontes-125c-1.webp` |
| `zontes-e125-scooter-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zontes-e125-1.webp` |
| `zontes-368e-maxiscooter-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zontes-368e-1.webp` |
| `keeway-k-light-250v-custom-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/keeway-k-light-250v-1.webp` |
| `keeway-v302c-custom-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/keeway-v302c-1.webp` |
| `motron-x-nord-125-trail-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motron-x-nord-125-1.webp` |
| `kove-510f-scrambler-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-510f-1.webp` |
| `fb-mondial-piega-125-precio` | blog-posts-lote14.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/fb-mondial-piega-125-1.webp` |
| `ducati-panigale-v4-tricolore-2025-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-panigale-v4-tricolore-2025-ficha-tecnica-precio-1.webp` |
| `ducati-multistrada-v4-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-multistrada-v4-2026-ficha-tecnica-precio-1.webp` |
| `aprilia-rs-457-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/aprilia-rs-457-2026-ficha-tecnica-precio-1.webp` |
| `ducati-scrambler-icon-800-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-scrambler-icon-800-2026-ficha-tecnica-precio-1.webp` |
| `moto-guzzi-v85-tt-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/moto-guzzi-v85-tt-2026-ficha-tecnica-precio-1.webp` |
| `mv-agusta-enduro-veloce-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/mv-agusta-enduro-veloce-2026-ficha-tecnica-precio-1.webp` |
| `ktm-390-smc-r-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ktm-390-smc-r-2026-ficha-tecnica-precio-1.webp` |
| `ktm-1390-super-duke-r-evo-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ktm-1390-super-duke-r-evo-2026-ficha-tecnica-precio-1.webp` |
| `ktm-1390-super-adventure-s-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ktm-1390-super-adventure-s-2026-ficha-tecnica-precio-1.webp` |
| `husqvarna-svartpilen-801-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/husqvarna-svartpilen-801-2026-ficha-tecnica-precio-1.webp` |
| `triumph-tiger-1200-gt-pro-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/triumph-tiger-1200-gt-pro-2026-ficha-tecnica-precio-1.webp` |
| `triumph-tiger-sport-800-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/triumph-tiger-sport-800-2026-ficha-tecnica-precio-1.webp` |
| `triumph-daytona-660-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/triumph-daytona-660-2026-ficha-tecnica-precio-1.webp` |
| `bmw-r-12-gs-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-r-12-gs-2026-ficha-tecnica-precio-1.webp` |
| `bmw-f-900-gs-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-f-900-gs-2026-ficha-tecnica-precio-1.webp` |
| `honda-cb1000-hornet-sp-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cb1000-hornet-sp-2026-ficha-tecnica-precio-1.webp` |
| `honda-cl500-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cl500-2026-ficha-tecnica-precio-1.webp` |
| `yamaha-mt-09-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-mt-09-2026-ficha-tecnica-precio-1.webp` |
| `yamaha-tenere-700-rally-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-tenere-700-rally-2026-ficha-tecnica-precio-1.webp` |
| `kawasaki-z900-se-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kawasaki-z900-se-2026-ficha-tecnica-precio-1.webp` |
| `kawasaki-ninja-500-se-2025-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kawasaki-ninja-500-se-2025-ficha-tecnica-precio-1.webp` |
| `suzuki-v-strom-800-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-v-strom-800-2026-ficha-tecnica-precio-1.webp` |
| `triumph-scrambler-1200-xe-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/triumph-scrambler-1200-xe-2026-ficha-tecnica-precio-1.webp` |
| `royal-enfield-guerrilla-450-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/royal-enfield-guerrilla-450-2026-ficha-tecnica-precio-1.webp` |
| `royal-enfield-interceptor-650-2026-precio-ficha` | blog-posts-lote15.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/royal-enfield-interceptor-650-2026-ficha-tecnica-precio-1.webp` |
| `volkswagen-caddy-california-2025-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-grand-california-2026-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-transit-custom-nugget-2025-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-marco-polo-2025-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-vito-2025-precio-ficha` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-citan-tourer-2025-precio-ficha` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-sprinter-2025-precio-furgon` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-crafter-2025-precio-furgon` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `iveco-daily-2025-precio-furgon` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-e-vito-2025-precio-electrica` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `opel-zafira-life-2025-precio-ficha` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-trafic-spaceclass-2025-precio-ficha` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `citroen-spacetourer-campster-2025-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benimar-mileo-286-2026-precio-autocaravana` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `adria-matrix-supreme-2026-precio-autocaravana` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclouis-menfys-2026-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chausson-640-2026-precio-autocaravana` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `roller-team-zefiro-696-2026-precio-autocaravana` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `possl-summit-600-2026-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hobby-vantana-2026-precio-camper` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `carado-t-447-2026-precio-autocaravana` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fiat-panda-pandina-2025-precio-hibrido` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-4-2025-precio-electrico` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `microlino-2026-precio-microcoche` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `smart-fortwo-eq-2025-precio-electrico` | blog-posts-lote16.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ds-9-e-tense-250-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-cross-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-i3-neue-klasse-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-super-n-ev-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz3x-electrico-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `polestar-6-roadster-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-u9-ev-pickup-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kgm-rexton-sports-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-d90-suv-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-tiger-suv-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-hipster-2027-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dongfeng-rich-6-ev-pickup-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-k4-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-boreal-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaguar-gt-electrico-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tvr-griffith-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rivian-r2-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lucid-gravity-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vinfast-vf-6-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vinfast-vf-7-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `togg-t10x-2026-precio-ficha` | blog-posts-lote3.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bugatti-tourbillon-2026-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rimac-nevera-r-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `koenigsegg-gemera-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `pagani-utopia-roadster-2026-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `de-tomaso-p72-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `de-tomaso-p900-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ariel-hipercar-2026-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ac-cobra-gt-roadster-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dallara-stradale-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `pininfarina-battista-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hennessey-venom-f5-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ssc-tuatara-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `czinger-21c-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gordon-murray-t50-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gordon-murray-t33-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brabham-bt62-2024-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ats-gt-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `iso-rivolta-gtz-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-mcxtrema-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chevrolet-corvette-zr1-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chevrolet-corvette-zr1x-2026-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cadillac-celestiq-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cadillac-escalade-iq-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gmc-hummer-ev-2025-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aptera-2026-precio-ficha-tecnica` | blog-posts-lote4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kove-450-rally-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-450-rally-2026-ficha-tecnica-precio-1.webp` |
| `kove-800x-rally-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-800x-rally-2026-ficha-tecnica-precio-1.webp` |
| `kove-625x-pro-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-625x-pro-2026-ficha-tecnica-precio-1.webp` |
| `kove-800x-gt-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-800x-gt-2026-ficha-tecnica-precio-1.webp` |
| `kove-nk-125r-2025-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-nk-125r-2025-ficha-tecnica-precio-1.webp` |
| `voge-ds800-rally-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-ds800-rally-2026-ficha-tecnica-precio-1.webp` |
| `voge-rr660s-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-rr660s-2026-ficha-tecnica-precio-1.webp` |
| `cfmoto-1000mt-x-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-1000mt-x-2026-ficha-tecnica-precio-1.webp` |
| `cfmoto-250-dual-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-250-dual-2026-ficha-tecnica-precio-1.webp` |
| `qjmotor-srt-900-sx-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srt-900-sx-2026-ficha-tecnica-precio-1.webp` |
| `qjmotor-srk-550-rs-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srk-550-rs-2026-ficha-tecnica-precio-1.webp` |
| `qjmotor-srk-900-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srk-900-2026-ficha-tecnica-precio-1.webp` |
| `qjmotor-sq-200-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-sq-200-2026-ficha-tecnica-precio-1.webp` |
| `morbidelli-t1002vx-2025-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/morbidelli-t1002vx-2025-ficha-tecnica-precio-1.webp` |
| `benelli-trk-902-xplorer-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/benelli-trk-902-xplorer-2026-ficha-tecnica-precio-1.webp` |
| `cyclone-ra-600-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-ra-600-2026-ficha-tecnica-precio-1.webp` |
| `cyclone-rc-600-2025-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-rc-600-2025-ficha-tecnica-precio-1.webp` |
| `cyclone-carrera-125-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-carrera-125-2026-ficha-tecnica-precio-1.webp` |
| `cyclone-rx2-125-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-rx2-125-2026-ficha-tecnica-precio-1.webp` |
| `cyclone-rx6-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-rx6-2026-ficha-tecnica-precio-1.webp` |
| `cyclone-re5-2026-ficha-tecnica-precio` | blog-posts-lote7.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cyclone-re5-2026-ficha-tecnica-precio-1.webp` |
| `cfmoto-500sr-voom-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-500sr-voom-2026-ficha-tecnica-precio-1.webp` |
| `yadea-kemper-2025-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yadea-kemper-2025-ficha-tecnica-precio-1.webp` |
| `italjet-speedster-125-2025-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/italjet-speedster-125-2025-ficha-tecnica-precio-1.webp` |
| `fantic-stealth-500-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/fantic-stealth-500-2026-ficha-tecnica-precio-1.webp` |
| `moto-morini-calibro-bagger-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/moto-morini-calibro-bagger-2026-ficha-tecnica-precio-1.webp` |
| `moto-morini-kanguro-300-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/moto-morini-kanguro-300-2026-ficha-tecnica-precio-1.webp` |
| `moto-morini-x-cape-1200-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/moto-morini-x-cape-1200-2026-ficha-tecnica-precio-1.webp` |
| `yadea-kemper-rc-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yadea-kemper-rc-2026-ficha-tecnica-precio-1.webp` |
| `yadea-voltguard-2023-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yadea-voltguard-2023-ficha-tecnica-precio-1.webp` |
| `moto-morini-rumble-350-2025-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/moto-morini-rumble-350-2025-ficha-tecnica-precio-1.webp` |
| `fb-mondial-hps-300-2018-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/fb-mondial-hps-300-2018-ficha-tecnica-precio-1.webp` |
| `keeway-tx-125-2012-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/keeway-tx-125-2012-ficha-tecnica-precio-1.webp` |
| `voge-500dsx-2021-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-500dsx-2021-ficha-tecnica-precio-1.webp` |
| `voge-300-acx-2021-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-300-acx-2021-ficha-tecnica-precio-1.webp` |
| `kove-500x-2023-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kove-500x-2023-ficha-tecnica-precio-1.webp` |
| `swm-varez-125-2023-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/swm-varez-125-2023-ficha-tecnica-precio-1.webp` |
| `hanway-furious-nk-125-2024-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/hanway-furious-nk-125-2024-ficha-tecnica-precio-1.webp` |
| `benda-napoleon-450-2025-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/benda-napoleon-450-2025-ficha-tecnica-precio-1.webp` |
| `benda-chinchilla-450-2024-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/benda-chinchilla-450-2024-ficha-tecnica-precio-1.webp` |
| `zontes-703t-etc-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zontes-703t-etc-2026-ficha-tecnica-precio-1.webp` |
| `zontes-125x-2026-ficha-tecnica-precio` | blog-posts-lote8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sur-ron-light-bee-x-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/sur-ron-light-bee-x-2025-ficha-tecnica-precio-1.webp` |
| `sur-ron-ultra-bee-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/sur-ron-ultra-bee-2025-ficha-tecnica-precio-1.webp` |
| `sur-ron-storm-bee-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/sur-ron-storm-bee-2025-ficha-tecnica-precio-1.webp` |
| `talaria-sting-r-mx4-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/talaria-sting-r-mx4-2025-ficha-tecnica-precio-1.webp` |
| `talaria-sting-rmx5-pro-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/talaria-sting-rmx5-pro-2025-ficha-tecnica-precio-1.webp` |
| `talaria-xxx-tl2500-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/talaria-xxx-tl2500-2025-ficha-tecnica-precio-1.webp` |
| `alrendo-ts-bravo-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/alrendo-ts-bravo-2025-ficha-tecnica-precio-1.webp` |
| `tinbot-rs1-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/tinbot-rs1-2025-ficha-tecnica-precio-1.webp` |
| `tromox-mino-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/tromox-mino-2025-ficha-tecnica-precio-1.webp` |
| `doohan-itank-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/doohan-itank-2025-ficha-tecnica-precio-1.webp` |
| `felo-fw-06-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/felo-fw-06-2025-ficha-tecnica-precio-1.webp` |
| `ovaobike-mcr-s-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ovaobike-mcr-s-2025-ficha-tecnica-precio-1.webp` |
| `rgnt-no-1-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/rgnt-no-1-2025-ficha-tecnica-precio-1.webp` |
| `zeeho-city-sport-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/zeeho-city-sport-2025-ficha-tecnica-precio-1.webp` |
| `gogoro-2-plus-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/gogoro-2-plus-2025-ficha-tecnica-precio-1.webp` |
| `honda-u-go-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-u-go-2025-ficha-tecnica-precio-1.webp` |
| `yamaha-e01-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-e01-2025-ficha-tecnica-precio-1.webp` |
| `suzuki-e-access-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-e-access-2025-ficha-tecnica-precio-1.webp` |
| `bajaj-chetak-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bajaj-chetak-2025-ficha-tecnica-precio-1.webp` |
| `ather-450x-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ather-450x-2025-ficha-tecnica-precio-1.webp` |
| `ola-s1-pro-2025-ficha-tecnica-precio` | blog-posts-lote9.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ola-s1-pro-2025-ficha-tecnica-precio-1.webp` |
| `lotus-eletre-600-2025-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-eletre-900-sport-2025-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-eletre-x-h550-2026-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-eletre-x-h1000-2026-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-emeya-600-2025-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-emeya-900-sport-2025-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-emira-turbo-2026-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-emira-turbo-se-2025-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-emira-v6-se-2026-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-emira-420-sport-2026-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-evija-2026-precio-ficha-tecnica` | blog-posts-lotus-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-s7-2026-precio-ficha-tecnica` | blog-posts-luxeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-v9-2026-precio-ficha-tecnica` | blog-posts-luxeed-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-01-phev-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-08-phev-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-03-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-03-2025-precio-ficha-tecnica/lynk-co-03-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-03-plus-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-03-plus-2025-precio-ficha-tecnica/lynk-co-03-plus-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-05-emp-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-05-emp-2025-precio-ficha-tecnica/lynk-co-05-emp-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-06-emp-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-06-emp-2025-precio-ficha-tecnica/lynk-co-06-emp-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-07-emp-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-07-emp-2025-precio-ficha-tecnica/lynk-co-07-emp-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-09-mhev-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-09-mhev-2025-precio-ficha-tecnica/lynk-co-09-mhev-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-900-emp-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-900-emp-2025-precio-ficha-tecnica/lynk-co-900-emp-2025-precio-ficha-tecnica-hero.webp |
| `lynk-co-z10-electrico-2025-precio-ficha-tecnica` | blog-posts-lynk-co-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/lynk-co-z10-electrico-2025-precio-ficha-tecnica/lynk-co-z10-electrico-2025-precio-ficha-tecnica-hero.webp |
| `maextro-s800-2025-precio-ficha-tecnica` | blog-posts-maextro-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maextro-s800-erev-2025-precio-ficha-tecnica` | blog-posts-maextro-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `electricos-mas-vendidos-espana-septiembre-2026` | blog-posts-mas-vendidos-mensual.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/electricos-mas-vendidos-espana-septiembre-2026-hero.webp` |
| `maserati-grecale-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-grecale-modena-v6-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/maserati-grecale-modena-v6-2027-precio-ficha-tecnica-hero.webp` |
| `maserati-grecale-trofeo-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/maserati-grecale-trofeo-2027-precio-ficha-tecnica-hero.webp` |
| `maserati-grecale-folgore-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/maserati-grecale-folgore-2027-precio-ficha-tecnica-hero.webp` |
| `maserati-granturismo-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-granturismo-trofeo-590-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-granturismo-folgore-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-grancabrio-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-grancabrio-trofeo-590-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-grancabrio-folgore-2027-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-mcpura-2025-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-mcpura-cielo-2025-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-gt2-stradale-2025-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-levante-gt-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-levante-gt-2024-precio-ficha-tecnica/maserati-levante-gt-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-levante-gt-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-levante-gt-2024-precio-ficha-tecnica/maserati-levante-gt-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-levante-modena-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-levante-modena-2024-precio-ficha-tecnica/maserati-levante-modena-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-levante-modena-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-levante-modena-2024-precio-ficha-tecnica/maserati-levante-modena-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-levante-trofeo-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-levante-trofeo-2024-precio-ficha-tecnica/maserati-levante-trofeo-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-levante-trofeo-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-levante-trofeo-2024-precio-ficha-tecnica/maserati-levante-trofeo-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-ghibli-gt-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-ghibli-gt-2024-precio-ficha-tecnica/maserati-ghibli-gt-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-ghibli-gt-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-ghibli-gt-2024-precio-ficha-tecnica/maserati-ghibli-gt-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-ghibli-modena-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-ghibli-modena-2024-precio-ficha-tecnica/maserati-ghibli-modena-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-ghibli-modena-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-ghibli-modena-2024-precio-ficha-tecnica/maserati-ghibli-modena-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-ghibli-trofeo-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-ghibli-trofeo-2024-precio-ficha-tecnica/maserati-ghibli-trofeo-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-ghibli-trofeo-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-ghibli-trofeo-2024-precio-ficha-tecnica/maserati-ghibli-trofeo-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-quattroporte-gt-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-quattroporte-gt-2024-precio-ficha-tecnica/maserati-quattroporte-gt-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-quattroporte-gt-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-quattroporte-gt-2024-precio-ficha-tecnica/maserati-quattroporte-gt-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-quattroporte-modena-q4-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maserati-quattroporte-trofeo-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-quattroporte-trofeo-2024-precio-ficha-tecnica/maserati-quattroporte-trofeo-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-quattroporte-trofeo-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-quattroporte-trofeo-2024-precio-ficha-tecnica/maserati-quattroporte-trofeo-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-mc20-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-mc20-2024-precio-ficha-tecnica/maserati-mc20-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-mc20-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-mc20-2024-precio-ficha-tecnica/maserati-mc20-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-mc20-cielo-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/maserati-mc20-cielo-2024-precio-ficha-tecnica/maserati-mc20-cielo-2024-precio-ficha-tecnica-hero.webp; contenido: ruta corregida maserati-mc20-cielo-2024-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/maserati-mc20-cielo-2024-precio-ficha-tecnica/maserati-mc20-cielo-2024-precio-ficha-tecnica-oficial.webp |
| `maserati-mc20-notte-2024-precio-ficha-tecnica` | blog-posts-maserati-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: maserati-mc20-notte-2024-precio-ficha-tecnica) -> /media/fotos-reales/maserati-mc20-notte-2024-precio-ficha-tecnica/maserati-mc20-notte-2024-precio-ficha-tecnica-1.webp |
| `mazda-2-hybrid-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-3-25-e-skyactiv-g-5p-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-3-20-e-skyactiv-x-5p-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-3-20-e-skyactiv-x-sedan-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-30-20-e-skyactiv-x-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-mx-5-20-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-mx-5-rf-20-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-mx-30-e-skyactiv-r-ev-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-60-e-skyactiv-phev-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-60-33-e-skyactiv-d-200-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-60-33-e-skyactiv-d-254-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-80-25-e-skyactiv-phev-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-6e-2025-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-6e-long-range-2025-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-6e-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-2-15-e-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mazda-2-15-e-skyactiv-g-2026-precio-ficha-tecnica/mazda-2-15-e-skyactiv-g-2026-precio-ficha-tecnica-hero.webp |
| `mazda-cx-5-25-e-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mazda-cx-5-25-e-skyactiv-g-2026-precio-ficha-tecnica) -> /media/fotos-reales/mazda-cx-5-25-e-skyactiv-g-2026-precio-ficha-tecnica/mazda-cx-5-25-e-skyactiv-g-2026-precio-ficha-tecnica-1.webp |
| `mazda-cx-30-25-e-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mazda-cx-30-25-e-skyactiv-g-2026-precio-ficha-tecnica/mazda-cx-30-25-e-skyactiv-g-2026-precio-ficha-tecnica-hero.webp |
| `mazda-mx-5-15-skyactiv-g-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mazda-mx-5-15-skyactiv-g-2026-precio-ficha-tecnica/mazda-mx-5-15-skyactiv-g-2026-precio-ficha-tecnica-hero.webp |
| `mazda-mx-30-e-skyactiv-ev-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mazda-mx-30-e-skyactiv-ev-2026-precio-ficha-tecnica/mazda-mx-30-e-skyactiv-ev-2026-precio-ficha-tecnica-hero.webp |
| `mazda-cx-80-33-e-skyactiv-d-2026-precio-ficha-tecnica` | blog-posts-mazda-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mazda-cx-80-33-e-skyactiv-d-2026-precio-ficha-tecnica/mazda-cx-80-33-e-skyactiv-d-2026-precio-ficha-tecnica-hero.webp |
| `mclaren-750s-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclaren-750s-spider-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclaren-artura-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclaren-artura-spider-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclaren-gts-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclaren-w1-2026-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mclaren-750s-le-mans-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mclaren-750s-le-mans-2025-precio-ficha-tecnica) -> /media/fotos-reales/mclaren-750s-le-mans-2025-precio-ficha-tecnica/mclaren-750s-le-mans-2025-precio-ficha-tecnica-1.webp |
| `mclaren-788hs-2026-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mclaren-788hs-2026-precio-ficha-tecnica) -> /media/fotos-reales/mclaren-788hs-2026-precio-ficha-tecnica/mclaren-788hs-2026-precio-ficha-tecnica-1.webp |
| `mclaren-gt-2024-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mclaren-gt-2024-precio-ficha-tecnica) -> /media/fotos-reales/mclaren-gt-2024-precio-ficha-tecnica/mclaren-gt-2024-precio-ficha-tecnica-1.webp |
| `mclaren-artura-1000gp-2026-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mclaren-artura-1000gp-2026-precio-ficha-tecnica) -> /media/fotos-reales/mclaren-artura-1000gp-2026-precio-ficha-tecnica/mclaren-artura-1000gp-2026-precio-ficha-tecnica-1.webp |
| `mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica` | blog-posts-mclaren-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica) -> /media/fotos-reales/mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica/mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica-1.webp |
| `mercedes-benz-clase-a-200-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-cla-200-electrico-2025-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-cla-250-e-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-e-220-d-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-e-300-e-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-gla-200-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-glb-200-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-glc-200-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-glc-220-d-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-glc-300-de-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-gle-350-de-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-gle-450-d-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-g-500-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-eqa-250-plus-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-eqb-350-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-eqe-350-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-eqe-suv-500-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-eqs-450-plus-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-s-500-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-amg-a-45-s-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-amg-c-63-s-e-performance-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-amg-gt-63-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-v-300-d-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mercedes-benz-clase-c-200-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mercedes-benz-clase-c-200-precio-ficha-tecnica) -> /media/fotos-reales/mercedes-benz-clase-c-200-precio-ficha-tecnica/mercedes-benz-clase-c-200-precio-ficha-tecnica-1.webp |
| `mercedes-benz-amg-g-63-precio-ficha-tecnica` | blog-posts-mercedes-benz-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mercedes-benz-amg-g-63-precio-ficha-tecnica/mercedes-benz-amg-g-63-precio-ficha-tecnica-hero.webp |
| `mg3-hybrid-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg3-gasolina-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-zs-gasolina-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-hs-gasolina-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-hs-hybrid-plus-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-electric-standard-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-electric-comfort-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-electric-luxury-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-electric-extended-range-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-electric-xpower-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg4-urban-2026-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg5-electric-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-marvel-r-2024-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-cyberster-trophy-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-cyberster-gt-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-s5-ev-standard-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-s5-ev-long-range-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-zs-ev-2024-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mg-zs-ev-2024-precio-ficha-tecnica) -> /media/fotos-reales/mg-zs-ev-2024-precio-ficha-tecnica/mg-zs-ev-2024-precio-ficha-tecnica-1.webp |
| `mg-zs-ev-standard-2024-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mg-zs-ev-standard-2024-precio-ficha-tecnica) -> /media/fotos-reales/mg-zs-ev-standard-2024-precio-ficha-tecnica/mg-zs-ev-standard-2024-precio-ficha-tecnica-1.webp |
| `mg5-electric-standard-2025-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mg5-electric-standard-2025-precio-ficha-tecnica) -> /media/fotos-reales/mg5-electric-standard-2025-precio-ficha-tecnica/mg5-electric-standard-2025-precio-ficha-tecnica-1.webp |
| `mg-marvel-r-performance-2024-precio-ficha-tecnica` | blog-posts-mg-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mg-marvel-r-performance-2024-precio-ficha-tecnica) -> /media/fotos-reales/mg-marvel-r-performance-2024-precio-ficha-tecnica/mg-marvel-r-performance-2024-precio-ficha-tecnica-1.webp |
| `mitsubishi-outlander-phev-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-grandis-hev-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-eclipse-cross-electrico-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-asx-130t-mhev-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-colt-hev-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-grandis-130t-mhev-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/mitsubishi-grandis-130t-mhev-2025-precio-ficha-tecnica/mitsubishi-grandis-130t-mhev-2025-precio-ficha-tecnica-hero.webp |
| `mitsubishi-colt-100t-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mitsubishi-colt-100t-2025-precio-ficha-tecnica) -> /media/fotos-reales/mitsubishi-colt-100t-2025-precio-ficha-tecnica/mitsubishi-colt-100t-2025-precio-ficha-tecnica-1.webp |
| `mitsubishi-colt-100t-glp-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-asx-100t-2025-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mitsubishi-asx-100t-2025-precio-ficha-tecnica) -> /media/fotos-reales/mitsubishi-asx-100t-2025-precio-ficha-tecnica/mitsubishi-asx-100t-2025-precio-ficha-tecnica-1.webp |
| `mitsubishi-asx-120t-2026-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitsubishi-asx-130t-7dct-2026-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mitsubishi-asx-130t-7dct-2026-precio-ficha-tecnica) -> /media/fotos-reales/mitsubishi-asx-130t-7dct-2026-precio-ficha-tecnica/mitsubishi-asx-130t-7dct-2026-precio-ficha-tecnica-1.webp |
| `mitsubishi-eclipse-cross-ev-lfp-2026-precio-ficha-tecnica` | blog-posts-mitsubishi-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: mitsubishi-eclipse-cross-ev-lfp-2026-precio-ficha-tecnica) -> /media/fotos-reales/mitsubishi-eclipse-cross-ev-lfp-2026-precio-ficha-tecnica/mitsubishi-eclipse-cross-ev-lfp-2026-precio-ficha-tecnica-1.webp |
| `fangchengbao-byd-marca-desconocida-formula-s-bao-5` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/fangchengbao-desconocidos-hero.webp` |
| `yangwang-byd-u8-u9-europa-2027` | blog-posts-modelos-desconocidos.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/yangwang-byd-u8-u9-europa-2027/yangwang-desconocidos-hero.webp |
| `avatr-changan-huawei-catl-06t-t09` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/avatr-desconocidos-hero.webp` |
| `rox-01-erev-pininfarina-autonomia-1115-km` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/rox-01-desconocidos-hero.webp` |
| `im-motors-ls6-nuevo-suv-electrico-model-y` | blog-posts-modelos-desconocidos.ts | OK | OK | no | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/im-motors-ls6-nuevo-suv-electrico-model-y/im-motors-desconocidos-hero.webp |
| `icaur-chery-marca-aventura-europa-espana-2027` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/icaur-v23-chery-hero.webp` |
| `li-auto-i8-suv-electrico-6-plazas-precio-2026` | blog-posts-modelos-desconocidos.ts | OK | OK | no | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/li-auto-i8-suv-electrico-6-plazas-precio-2026/li-auto-i8-hero.webp |
| `volkswagen-id-unyx-09-electrico-china-755-km` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/volkswagen-id-unyx-09-electrico-china-755-km-hero.webp` |
| `geely-galaxy-tt-berlina-electrica-china` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/geely-galaxy-tt-desconocidos-hero.webp` |
| `aiva-me7-seres-catl-paris-2026` | blog-posts-modelos-desconocidos.ts | OK | NO (1 rotas) | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-galaxy-battleship-700-zhanjian-700` | blog-posts-modelos-desconocidos.ts | OK | NO (1 rotas) | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jetour-zongheng-g700-903-cv` | blog-posts-modelos-desconocidos.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/jetour-g700-zongheng-hero.webp` |
| `hongqi-g919-4x4-electrico-831-cv` | blog-posts-modelos-desconocidos.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `salon-paris-2026-20-marcas-chinas-aranceles` | blog-posts-motor-2026-n.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/salon-paris-2026-20-marcas-chinas-aranceles-hero.webp` |
| `renault-8-gordini-concept-paris-2026` | blog-posts-motor-2026-o.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-b03-electrico-paris-2026` | blog-posts-motor-2026-o.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/leapmotor-b03-electrico-paris-2026-oficial.webp` |
| `fiat-grizzly-fastback-paris-2026` | blog-posts-motor-2026-o.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-mission-efficiency-record-1278-km` | blog-posts-motor-2026-o.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-desmo450-eds-2026-precio-ficha-tecnica` | blog-posts-motor-2026-o.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-desmo450-sm-2026-precio-ficha-tecnica` | blog-posts-motor-2026-o.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tesla-roadster-2026-retraso-precio-ficha-tecnica` | blog-posts-motor-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/tesla-roadster-2026-hero.webp` |
| `maextro-v800-huawei-precio-ficha-tecnica` | blog-posts-motor-chinos-d.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb1000-hornet-sp-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb650r-e-clutch-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cbr650r-e-clutch-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-rebel-500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-forza-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-forza-750-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-nc750x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-nx500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb500-hornet-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cl500-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-crf300l-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-crf300-rally-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-sh125i-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-pcx125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-vision-110-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-07-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-xsr900-gp-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yzf-r3-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tracer-7-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-03-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-xmax-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-nmax-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tricity-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tricity-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-delight-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-500-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z500-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-7-hybrid-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z7-hybrid-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-versys-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-e-1-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-versys-1100-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-zx-6r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-zx-4r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z-h2-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-1100sx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z-e-1-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-v-strom-800-tech-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-v-strom-650-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-v-strom-1050-tech-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-s1000gx-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-sv650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-burgman-400-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-burgman-street-125ex-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-avenis-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-8tt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-dr-z4s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-hayabusa-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m1.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-09-y-amt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m10.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tracer-9-gt-plus-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m10.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-multistrada-v4-rs-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m10.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-monster-sp-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m10.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-800mt-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-450cl-c-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-700cl-x-heritage-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-700cl-x-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-300rally-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-500ac-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-sr16-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-cu625-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-fort-125n-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-atr-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-fort-350-evo-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-703rr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-368k-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-125d-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-251-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-leoncino-250-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-tornado-naked-t-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-coaster-407-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-tango-125i-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-tango-125i-scrambler-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-xr5-500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brixton-crossfire-125-xs-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brixton-crossfire-500-storr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m11.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v7-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v85-strada-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v85-tt-travel-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v100-mandello-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-morini-x-cape-700-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-morini-corsaro-750-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-morini-alltrhike-450-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-bullet-650-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-flying-flea-c6-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-goan-classic-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-v200-special-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-v50-special-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-elettra-s-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `italjet-dragster-459-twin-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `italjet-roadster-400-founders-edition-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-cruisym-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-maxsym-gt-400-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-fugue-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-agility-s-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-super-dink-gt-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-people-s-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-ftr-1200-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-sport-chief-rt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-pursuit-dark-horse-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m12.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-300-sef-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-500-sef-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-125-se-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-rr-480-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-xtrainer-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-alp-200-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xe-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xef-450-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-caballero-700-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-ec-350f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-mc-450f-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-sm-700-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-350-exc-f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-500-exc-f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-fe-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-701-enduro-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-crf300l-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-crf450rx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-wr450f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yz250f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mv-agusta-brutale-1000-rr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mv-agusta-enduro-veloce-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bimota-kb4-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bimota-tesi-h2-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m13.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-dax-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-dax-125-2025-ficha-tecnica-precio-hero.webp` |
| `honda-monkey-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-monkey-125-2025-ficha-tecnica-precio-hero.webp` |
| `honda-super-cub-c125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-super-cub-c125-2025-ficha-tecnica-precio-hero.webp` |
| `honda-nx500-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-nx500-2024-ficha-tecnica-precio-hero.webp` |
| `honda-xl750-transalp-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-xl750-transalp-2026-ficha-tecnica-precio-hero.webp` |
| `honda-nt1100-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-nt1100-2026-ficha-tecnica-precio-hero.webp` |
| `honda-cb750-hornet-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-cb750-hornet-2026-ficha-tecnica-precio-hero.webp` |
| `honda-forza-350-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-forza-350-2026-ficha-tecnica-precio-hero.webp` |
| `yamaha-mt-09-sp-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-mt-09-sp-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-mt-10-sp-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-mt-10-sp-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-yz450f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-yz450f-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-wr250f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-wr250f-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-mt-07-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-mt-07-2026-ficha-tecnica-precio-hero.webp` |
| `yamaha-tracer-9-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-tracer-9-2026-ficha-tecnica-precio-hero.webp` |
| `yamaha-xsr900-gp-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m16.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-xsr900-gp-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-m-1000-xr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-m-1000-xr-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-m-1000-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-m-1000-r-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-g-310-r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-g-310-r-2024-ficha-tecnica-precio-hero.webp` |
| `bmw-r-18-roctane-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-r-18-roctane-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-k-1600-gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-k-1600-gt-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-streetfighter-v2-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-streetfighter-v2-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-panigale-v4-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-panigale-v4-r-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-multistrada-v4-s-grand-tour-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-multistrada-v4-s-grand-tour-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-scrambler-800-full-throttle-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-scrambler-800-full-throttle-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-hypermotard-v2-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-hypermotard-v2-2026-ficha-tecnica-precio-hero.webp` |
| `honda-cuv-e-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cuv-e-2025-ficha-tecnica-precio-hero.webp` |
| `honda-em1-e-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-em1-e-2024-ficha-tecnica-precio-hero.webp` |
| `zeeho-ae8-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeeho-ae8-s-2025-ficha-tecnica-precio-hero.webp` |
| `vmoto-tc-max-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/vmoto-tc-max-2025-ficha-tecnica-precio-hero.webp` |
| `segway-e300se-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m18.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/segway-e300se-2025-ficha-tecnica-precio-hero.webp` |
| `honda-cb500-hornet-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-cb500-hornet-2024-ficha-tecnica-precio-hero.webp` |
| `honda-cb650r-e-clutch-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-cb650r-e-clutch-2024-ficha-tecnica-precio-hero.webp` |
| `honda-cbr650r-e-clutch-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-cbr650r-e-clutch-2024-ficha-tecnica-precio-hero.webp` |
| `honda-rebel-1100-dct-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-rebel-1100-dct-2025-ficha-tecnica-precio-hero.webp` |
| `honda-cb300r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-cb300r-2024-ficha-tecnica-precio-hero.webp` |
| `honda-cb1000r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-cb1000r-2024-ficha-tecnica-precio-hero.webp` |
| `honda-grom-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-grom-125-2025-ficha-tecnica-precio-hero.webp` |
| `honda-africa-twin-adventure-sports-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-africa-twin-adventure-sports-2024-ficha-tecnica-precio-hero.webp` |
| `honda-sh-mode-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-sh-mode-125-2025-ficha-tecnica-precio-hero.webp` |
| `honda-forza-750-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/honda-forza-750-2024-ficha-tecnica-precio-hero.webp` |
| `yamaha-tracer-9-gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-tracer-9-gt-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-nmax-155-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-nmax-155-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-mt-07-y-amt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-mt-07-y-amt-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-tracer-7-gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-tracer-7-gt-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-tmax-560-tech-max-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-tmax-560-tech-max-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-mt-07-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-mt-07-2024-ficha-tecnica-precio-hero.webp` |
| `yamaha-xmax-300-tech-max-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-xmax-300-tech-max-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-mt-09-sp-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-mt-09-sp-2024-ficha-tecnica-precio-hero.webp` |
| `yamaha-xsr700-legacy-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-xsr700-legacy-2025-ficha-tecnica-precio-hero.webp` |
| `yamaha-tracer-7-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m19.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yamaha-tracer-7-2024-ficha-tecnica-precio-hero.webp` |
| `ktm-390-duke-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-390-adventure-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-1390-super-duke-r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | OK | sí | contenido: ruta corregida ktm-1390-super-duke-r-2024-ficha-tecnica-precio-2.webp -> /media/ktm-1390-super-duke-r-2024-ficha-tecnica-precio-2.webp; contenido: ruta corregida ktm-1390-super-duke-r-2024-ficha-tecnica-precio-3.webp -> /media/ktm-1390-super-duke-r-2024-ficha-tecnica-precio-3.webp |
| `ktm-990-duke-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-rc-390-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-svartpilen-401-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-vitpilen-401-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-vitpilen-801-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-norden-901-expedition-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-vitpilen-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-f-900-gs-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-s-1000-xr-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-18-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-g-310-gs-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-12-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-multistrada-v4-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-diavel-v4-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-hypermotard-698-mono-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-desertx-rally-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-supersport-950-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-xdiavel-v4-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-speed-400-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-scrambler-400-x-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-trident-660-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-speed-twin-900-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-speed-twin-1200-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-tiger-sport-660-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-rs-457-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-sr-gt-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-sr-gt-200-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-tuareg-660-rally-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mv-agusta-brutale-1000-rr-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mv-agusta-superveloce-800-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mv-agusta-turismo-veloce-800-r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v85-tt-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v100-mandello-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v7-special-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-guzzi-v9-bobber-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-morini-x-cape-650-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-morini-calibro-700-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `moto-morini-seiemmezzo-scr-650-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bimota-tesi-h2-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bimota-kb4-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bimota-tesi-h2-tera-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m2.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-w800-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-w800-2025-ficha-tecnica-precio-hero.webp` |
| `kawasaki-kle500-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-kle500-2026-ficha-tecnica-precio-hero.webp` |
| `kawasaki-z900-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-z900-2024-ficha-tecnica-precio-hero.webp` |
| `kawasaki-ninja-650-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-ninja-650-2026-ficha-tecnica-precio-hero.webp` |
| `kawasaki-vulcan-s-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-vulcan-s-2026-ficha-tecnica-precio-hero.webp` |
| `kawasaki-z650rs-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-z650rs-2026-ficha-tecnica-precio-hero.webp` |
| `kawasaki-ninja-500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-ninja-500-2025-ficha-tecnica-precio-hero.webp` |
| `kawasaki-z500-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-z500-2026-ficha-tecnica-precio-hero.webp` |
| `kawasaki-eliminator-500-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-eliminator-500-2026-ficha-tecnica-precio-hero.webp` |
| `kawasaki-versys-650-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/kawasaki-versys-650-2026-ficha-tecnica-precio-hero.webp` |
| `suzuki-burgman-400-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-burgman-400-2025-ficha-tecnica-precio-hero.webp` |
| `suzuki-address-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-address-125-2025-ficha-tecnica-precio-hero.webp` |
| `suzuki-sv650-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-sv650-2024-ficha-tecnica-precio-hero.webp` |
| `suzuki-sv650x-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-sv650x-2024-ficha-tecnica-precio-hero.webp` |
| `suzuki-gsx-s1000gx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-gsx-s1000gx-2025-ficha-tecnica-precio-hero.webp` |
| `suzuki-avenis-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-avenis-125-2024-ficha-tecnica-precio-hero.webp` |
| `suzuki-burgman-street-125ex-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-burgman-street-125ex-2024-ficha-tecnica-precio-hero.webp` |
| `suzuki-v-strom-650xt-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-v-strom-650xt-2024-ficha-tecnica-precio-hero.webp` |
| `suzuki-gsx-s125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-gsx-s125-2024-ficha-tecnica-precio-hero.webp` |
| `suzuki-v-strom-800-tech-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m20.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/suzuki-v-strom-800-tech-2026-ficha-tecnica-precio-hero.webp` |
| `ktm-790-duke-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-790-duke-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-990-duke-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-990-duke-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-1390-super-duke-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-1390-super-duke-r-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-390-adventure-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-390-adventure-x-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-790-adventure-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-790-adventure-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-1390-super-adventure-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-1390-super-adventure-r-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-125-duke-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-125-duke-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-r-18-b-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-r-18-b-2025-ficha-tecnica-precio-hero.webp` |
| `ktm-990-duke-r-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-990-duke-r-2026-ficha-tecnica-precio-hero.webp` |
| `ktm-390-duke-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ktm-390-duke-2026-ficha-tecnica-precio-hero.webp` |
| `bmw-r-1300-gs-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-r-1300-gs-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-r-1300-gs-adventure-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-r-1300-gs-adventure-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-f-900-gs-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-f-900-gs-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-f-800-gs-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-f-800-gs-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-r-12-ninet-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-r-12-ninet-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-r-18-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-r-18-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-f-900-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-f-900-r-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-s-1000-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-s-1000-r-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-r-12-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-r-12-2025-ficha-tecnica-precio-hero.webp` |
| `bmw-ce-04-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m21.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/bmw-ce-04-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-panigale-v4-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-panigale-v4-s-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-streetfighter-v4-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-streetfighter-v4-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-monster-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-monster-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-desertx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-desertx-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-multistrada-v4-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-multistrada-v4-s-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-scrambler-icon-800-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-scrambler-icon-800-2025-ficha-tecnica-precio-hero.webp` |
| `ducati-diavel-v4-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ducati-diavel-v4-2025-ficha-tecnica-precio-hero.webp` |
| `triumph-street-triple-765-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/triumph-street-triple-765-2025-ficha-tecnica-precio-hero.webp` |
| `triumph-bonneville-t120-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/triumph-bonneville-t120-2025-ficha-tecnica-precio-hero.webp` |
| `triumph-tiger-900-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/triumph-tiger-900-2025-ficha-tecnica-precio-hero.webp` |
| `triumph-scrambler-900-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/triumph-scrambler-900-2025-ficha-tecnica-precio-hero.webp` |
| `triumph-bonneville-speedmaster-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/triumph-bonneville-speedmaster-2025-ficha-tecnica-precio-hero.webp` |
| `triumph-scrambler-400-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/triumph-scrambler-400-x-2025-ficha-tecnica-precio-hero.webp` |
| `aprilia-rs-660-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/aprilia-rs-660-2025-ficha-tecnica-precio-hero.webp` |
| `aprilia-tuono-660-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/aprilia-tuono-660-2025-ficha-tecnica-precio-hero.webp` |
| `aprilia-rsv4-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/aprilia-rsv4-2025-ficha-tecnica-precio-hero.webp` |
| `aprilia-tuareg-660-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/aprilia-tuareg-660-2025-ficha-tecnica-precio-hero.webp` |
| `aprilia-sr-gt-200-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/aprilia-sr-gt-200-2025-ficha-tecnica-precio-hero.webp` |
| `aprilia-sx-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/aprilia-sx-125-2025-ficha-tecnica-precio-hero.webp` |
| `moto-guzzi-v7-stone-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m22.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/moto-guzzi-v7-stone-2025-ficha-tecnica-precio-hero.webp` |
| `royal-enfield-interceptor-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/royal-enfield-interceptor-650-2025-ficha-tecnica-precio-hero.webp` |
| `royal-enfield-continental-gt-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/royal-enfield-continental-gt-650-2025-ficha-tecnica-precio-hero.webp` |
| `royal-enfield-classic-650-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/royal-enfield-classic-650-2026-ficha-tecnica-precio-hero.webp` |
| `royal-enfield-himalayan-450-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/royal-enfield-himalayan-450-2026-ficha-tecnica-precio-hero.webp` |
| `royal-enfield-super-meteor-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/royal-enfield-super-meteor-650-2025-ficha-tecnica-precio-hero.webp` |
| `cfmoto-800mt-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/cfmoto-800mt-sport-2025-ficha-tecnica-precio-hero.webp` |
| `cfmoto-800mt-touring-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/cfmoto-800mt-touring-2025-ficha-tecnica-precio-hero.webp` |
| `cfmoto-450sr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/cfmoto-450sr-2025-ficha-tecnica-precio-hero.webp` |
| `cfmoto-700cl-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/cfmoto-700cl-x-2025-ficha-tecnica-precio-hero.webp` |
| `cfmoto-800nk-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/cfmoto-800nk-2025-ficha-tecnica-precio-hero.webp` |
| `zontes-368g-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/zontes-368g-2026-ficha-tecnica-precio-hero.webp` |
| `zontes-350x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/zontes-350x-2025-ficha-tecnica-precio-hero.webp` |
| `zontes-125u-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/zontes-125u-2025-ficha-tecnica-precio-hero.webp` |
| `qjmotor-srt-800-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/qjmotor-srt-800-2025-ficha-tecnica-precio-hero.webp` |
| `qjmotor-srt-800-sx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/qjmotor-srt-800-sx-2025-ficha-tecnica-precio-hero.webp` |
| `voge-525dsx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/voge-525dsx-2025-ficha-tecnica-precio-hero.webp` |
| `voge-900-dsx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/voge-900-dsx-2025-ficha-tecnica-precio-hero.webp` |
| `macbor-shifter-125-evo-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/macbor-shifter-125-evo-2026-ficha-tecnica-precio-hero.webp` |
| `rieju-aventura-500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/rieju-aventura-500-2025-ficha-tecnica-precio-hero.webp` |
| `mitt-530-tt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m23.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/mitt-530-tt-2025-ficha-tecnica-precio-hero.webp` |
| `wottan-storm-125-2025-precio` | blog-posts-motos-exp-m28.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wottan-storm-125-2025-precio-hero.webp` |
| `voge-sr150gt-2025-precio` | blog-posts-motos-exp-m28.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-sr150gt-2025-precio-hero.webp` |
| `qjmotor-srt-800sx-2024-precio` | blog-posts-motos-exp-m28.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-srt-800sx-2024-precio-hero.webp` |
| `qjmotor-svt-650-2024-precio` | blog-posts-motos-exp-m28.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/qjmotor-svt-650-2024-precio-hero.webp` |
| `swm-superdual-650-2024-precio` | blog-posts-motos-exp-m29.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/swm-superdual-650-2024-precio-hero.webp` |
| `cfmoto-450mt-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-450nk-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-450sr-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-700mt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-800nk-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srk-800rr-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srk-800-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srt-550-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srv-300-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srt-700-on-road-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-350e-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-350t-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-703f-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-350r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-525dsx-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-525acx-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-125r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-350ac-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-702-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-702x-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-502-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-502x-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-imperiale-400-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-eight-mile-500-street-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-montana-xr5-510-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-eight-mile-125-lc-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-rockster-125-evo-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `keeway-rkf-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `keeway-vieste-300-xdv-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `keeway-rkv-125c-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `keeway-k-light-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brixton-crossfire-500-x-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brixton-cromwell-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brixton-felsberg-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `brixton-cromwell-250-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-aventura-500-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-marathon-125-europe-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-mrt-125-sm-lc-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-nkd-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitt-tt-530-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitt-gp2-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mitt-nk-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `wottan-storm-x-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `wottan-rebbe-401-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-hoku-400-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-sm-500-r-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `swm-six-days-500-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `malaguti-drakon-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `malaguti-madison-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mondial-hps-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mondial-flat-track-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m3.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-rs-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m30.ts | SIN | — | no | Imposible: sin foto disponible del modelo en el repo |
| `aprilia-rs-457-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m30.ts | SIN | — | no | Imposible: sin foto disponible del modelo en el repo |
| `aprilia-rs-660-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m30.ts | SIN | — | no | Imposible: sin foto disponible del modelo en el repo |
| `aprilia-sr-gt-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m30.ts | SIN | — | no | Imposible: sin foto disponible del modelo en el repo |
| `royal-enfield-classic-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-guerrilla-450-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-hunter-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-meteor-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-himalayan-450-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `harley-davidson-low-rider-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `harley-davidson-breakout-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `harley-davidson-heritage-classic-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `harley-davidson-street-glide-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `harley-davidson-fat-boy-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-scout-bobber-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-sport-scout-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-scout-classic-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-101-scout-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `indian-chief-bobber-dark-horse-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-beverly-310-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-medley-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-mp3-530-exclusive-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-liberty-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-mp3-400-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vespa-gts-310-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vespa-gtv-310-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vespa-primavera-rst-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vespa-sprint-rst-125-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vespa-gts-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `italjet-dragster-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `italjet-dragster-200-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `italjet-dragster-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `italjet-dragster-700-twin-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-x300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-g350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-x125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-j-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lambretta-v125-special-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-alloy-gp-300-s-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-alloy-tg-300-s-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-alloy-gp-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-alloy-tg-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-ttlbt-508-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-joymax-z-plus-300-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-adx-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-adxtg-400-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-adx-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-symphony-st-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-jet-x-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-xciting-vs-400-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-dtx-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-super-dink-gt-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-agility-nx-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-dtx-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m4.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-ds-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-dsr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-fx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-xe-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-xb-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-ls1-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-nqi-gts-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-nqix-500-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-nqix-300-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-nqix-150-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-fqix-300-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s02-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s03-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `horwin-ek1-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `horwin-sk3-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `horwin-ht5-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `horwin-cr6-pro-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vmoto-stash-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `super-soco-tc-wanderer-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `super-soco-ts-hunter-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `super-soco-cu-mini-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yadea-c1s-pro-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yadea-g5-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `torrot-muvi-city-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `torrot-muvi-executive-l3-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stark-varg-ex-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stark-varg-sm-skoll-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stark-varg-ex-factory-edition-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maeving-rm1s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livewire-s2-alpinista-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livewire-s2-mulholland-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m5.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-ec-300-2t-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | contenido: ruta corregida gasgas-ec-300-2t-2025-ficha-tecnica-precio-2.webp -> /media/gasgas-ec-300-2t-2025-ficha-tecnica-precio-2.webp; contenido: ruta corregida gasgas-ec-300-2t-2025-ficha-tecnica-precio-3.webp -> /media/gasgas-ec-300-2t-2025-ficha-tecnica-precio-3.webp |
| `gasgas-ec-250-2t-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-ec-250f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-ec-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-mc-450f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-es-700-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-txt-gp-250-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xe-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xef-250-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xef-310-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xef-450-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-caballero-500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-caballero-700-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-300-se-factory-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-300-sef-factory-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-450-sef-factory-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sherco-st-250-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `montesa-cota-4rt-260r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `montesa-cota-4ride-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-rr-x-pro-300-2t-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-rr-x-pro-350-4t-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-xtrainer-300-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-evo-250-2t-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-evo-250-2t-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-alp-4-0-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-alp-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-rr-4t-125-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-rr-2t-200-race-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ajp-pr7-650-adventure-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ajp-pr5-250-extreme-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `scorpa-sc-300-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `scorpa-sc-250-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `scorpa-sc-125-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `trs-one-r-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `trs-one-r-250-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `trs-one-rr-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `trs-xtrack-250-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `trs-one-r-electric-start-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vertigo-nitro-rs3-300-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vertigo-nitro-rs3-250-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vertigo-combat-camo-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `vertigo-nitro-dl12-300-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mecatecno-dragonfly-e-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stark-future-varg-mx-1-2-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stark-future-varg-ex-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-mrt-50-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-aventura-125-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-mr-pro-300i-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-mr-racing-300-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-aventura-rally-307-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cbr600rr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-nt1100-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-crf1100l-africa-twin-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-xl750-transalp-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb750-hornet-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cbr1000rr-r-fireblade-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-adv350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-rebel-1100-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-sh350i-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-forza-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb125r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-msx125-grom-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-gold-wing-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-09-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-10-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yzf-r7-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tenere-700-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-xmax-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tracer-9-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tmax-560-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-xsr900-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yzf-r125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-xsr700-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tenere-700-world-raid-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-zx-10r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-500-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-zx-6r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-zx-4r-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-vulcan-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z650rs-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-eliminator-500-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-1000sx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-h2-sx-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-8r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-8s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-s1000-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-v-strom-800de-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-v-strom-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-r125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-dr-z4sm-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-address-125-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-s125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-katana-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-r1000r-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-v-strom-1050de-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-gsx-s1000gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m7.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-125-smc-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-390-smc-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-390-enduro-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-125-enduro-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-1390-super-adventure-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-1390-super-adventure-s-evo-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-1390-super-duke-gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-990-rc-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-890-smt-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-690-enduro-r-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-c-400-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-12-g-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-s-1000-rr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-1300-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-1300-rs-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-m-1000-rr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-f-450-gs-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-12-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-f-900-xr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-c-400-gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-18-transcontinental-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-desertx-discovery-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-multistrada-v4-rally-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-streetfighter-v4-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-multistrada-v4-pikes-peak-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-multistrada-v2-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-hypermotard-v2-sp-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-diavel-v4-rs-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-streetfighter-v2-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-tiger-sport-800-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-speed-triple-1200-rs-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-scrambler-1200-xe-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-rocket-3-storm-gt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-bonneville-bobber-tfc-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-bonneville-t100-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-trident-660-triple-tribute-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-tiger-900-rally-pro-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-rsv4-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-tuono-v4-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-rs-660-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-tuono-660-factory-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-tuono-457-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-bear-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-classic-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-bullet-350-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `royal-enfield-shotgun-650-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-701-enduro-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-fe-450-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-te-300-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-norden-901-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m8.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-450sr-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-450mt-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-450nk-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-675sr-r-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-125nk-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-800mt-explore-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srk600-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srk400-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srt-600sx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srk-125j-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-srv-600v-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-350ac-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-525acx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-ds525x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-sr4-max-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-300ac-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-e-tango-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-ray-7-7-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-x-over-357-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-xplora-557-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-e-tango-sm-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-xplora-707-x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rieju-aventura-rally-307-r-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zero-sr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s04-l6e-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s04-l7e-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-rqi-sport-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-675nk-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cfmoto-675nk-aspar-2026-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-125x-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-125v-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-fort-4-0-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-625dsx-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-sr1-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voge-sr1-adv-125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-502c-2024-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-shifter-125-evo-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-rockster-flat-125-evo-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-rockster-410-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-eight-mile-500-scr-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-tornado-550-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-702-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-bkx-300-s-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-leoncino-800-trail-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-902-stradale-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-350d-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-368g-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | contenido: ruta corregida zontes-368g-2025-ficha-tecnica-precio-2.webp -> /media/zontes-368g-2025-ficha-tecnica-precio-2.webp |
| `zontes-703f-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-368m-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zontes-gk125-2025-ficha-tecnica-precio` | blog-posts-motos-exp-m9.ts | OK | NO (1 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `beta-evo-300-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ducati-panigale-v2-2025-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `harley-davidson-sportster-s-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | NO | — | sí | Imposible: sin foto disponible del modelo en el repo `\"/media/motos/harley-davidson-sportster-s-2024-ficha-tecnica-precio.webp\"` |
| `kawasaki-vulcan-s-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | NO | — | no | Imposible: sin foto disponible del modelo en el repo `\"/media/motos/kawasaki-vulcan-s-2024-ficha-tecnica-precio.webp\"` |
| `kawasaki-z650rs-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | NO | — | sí | Imposible: sin foto disponible del modelo en el repo `\"/media/motos/kawasaki-z650rs-2024-ficha-tecnica-precio.webp\"` |
| `kawasaki-z900-2025-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maeving-rm1-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-maxsym-tl-508-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tenere-700-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-xsr700-2024-analisis-opinion` | blog-posts-motos-rescate-m1.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-beverly-400-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-s-1000-rr-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-rebel-1100-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-adxtg-400-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `husqvarna-norden-901-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z500-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-niken-gt-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-tuono-660-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tmax-560-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | SIN | — | sí | Imposible: sin foto disponible del modelo en el repo |
| `bmw-r-1300-rt-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-adx-300-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-trk-902-stradale-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-z125-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-ec-250-2t-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `suzuki-hayabusa-2025-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-890-adventure-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-gold-wing-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ktm-1390-super-duke-r-2024-analisis-opinion` | blog-posts-motos-rescate-m2.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aprilia-rs-660-2024-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `benelli-leoncino-800-2024-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `bmw-r-12-ninet-2024-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `fantic-xe-125-2025-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kymco-downtown-350-2024-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `livewire-one-2024-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `macbor-rockster-410-2025-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `niu-rqi-sport-2025-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `qjmotor-fort-125n-2026-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `super-soco-cpx-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `triumph-tiger-900-gt-2024-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-neos-analisis-opinion` | blog-posts-motos-rescate-m3.ts | OK | — | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-aya-2025-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-x-2024-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-s-2024-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-s-shooting-brake-2024-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-gt-2024-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-l-2024-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `neta-l-erev-2024-precio-ficha-tecnica` | blog-posts-neta-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-et5-2025-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-et5-touring-2025-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-et7-2024-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-el6-2024-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-el7-2024-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-el8-2024-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-ec6-2024-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-ec7-2024-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-et5-75-kwh-2026-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nio-et5-75-kwh-2026-precio-ficha-tecnica/nio-et5-75-kwh-2026-precio-ficha-tecnica-hero.webp |
| `nio-et5-touring-75-kwh-2026-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-hero.webp |
| `nio-et7-75-kwh-2025-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nio-et7-75-kwh-2025-precio-ficha-tecnica/nio-et7-75-kwh-2025-precio-ficha-tecnica-hero.webp |
| `nio-el6-75-kwh-2025-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nio-el6-75-kwh-2025-precio-ficha-tecnica/nio-el6-75-kwh-2025-precio-ficha-tecnica-hero.webp |
| `nio-el7-75-kwh-2025-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nio-el7-75-kwh-2025-precio-ficha-tecnica/nio-el7-75-kwh-2025-precio-ficha-tecnica-hero.webp |
| `nio-et9-2026-precio-ficha-tecnica` | blog-posts-nio-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nio-et9-2026-precio-ficha-tecnica/nio-et9-2026-precio-ficha-tecnica-hero.webp |
| `nissan-qashqai-mhev-158-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-juke-10-dig-t-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-x-trail-e-power-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-x-trail-e-4orce-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-leaf-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-ariya-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-micra-electrico-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-townstar-combi-13g-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-townstar-ev-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-primastar-combi-dci-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-leaf-e-plus-62kwh-2023-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: nissan-leaf-e-plus-62kwh-2023-precio-ficha-tecnica) -> /media/fotos-reales/nissan-leaf-e-plus-62kwh-2023-precio-ficha-tecnica/nissan-leaf-e-plus-62kwh-2023-precio-ficha-tecnica-1.webp |
| `nissan-ariya-63kwh-218-2025-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nissan-ariya-63kwh-218-2025-precio-ficha-tecnica/nissan-ariya-63kwh-218-2025-precio-ficha-tecnica-hero.webp |
| `nissan-ariya-e4orce-306-2025-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nissan-ariya-e4orce-306-2025-precio-ficha-tecnica/nissan-ariya-e4orce-306-2025-precio-ficha-tecnica-hero.webp |
| `nissan-ariya-nismo-435-2025-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/nissan-ariya-nismo-435-2025-precio-ficha-tecnica/nissan-ariya-nismo-435-2025-precio-ficha-tecnica-hero.webp |
| `nissan-micra-ev-40kwh-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: nissan-micra-ev-40kwh-2026-precio-ficha-tecnica) -> /media/fotos-reales/nissan-micra-ev-40kwh-2026-precio-ficha-tecnica/nissan-micra-ev-40kwh-2026-precio-ficha-tecnica-1.webp |
| `nissan-townstar-evalia-ev-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: nissan-townstar-evalia-ev-2026-precio-ficha-tecnica) -> /media/fotos-reales/nissan-townstar-evalia-ev-2026-precio-ficha-tecnica/nissan-townstar-evalia-ev-2026-precio-ficha-tecnica-1.webp |
| `nissan-primastar-combi-dci170-2026-precio-ficha-tecnica` | blog-posts-nissan-a.ts | OK | OK | sí | hero: foto del modelo (stem del hero: nissan-primastar-combi-dci170-2026-precio-ficha-tecnica) -> /media/fotos-reales/nissan-primastar-combi-dci170-2026-precio-ficha-tecnica/nissan-primastar-combi-dci170-2026-precio-ficha-tecnica-1.webp |
| `noble-m500-2025-precio-ficha-tecnica` | blog-posts-noble-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-9x-2026-precio-ficha-tecnica` | blog-posts-novedades-coches-c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-twingo-e-tech-2026-precio-ficha-tecnica` | blog-posts-novedades-coches-c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-atto-2-dm-i-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-sealion-05-dm-i-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-qin-l-dm-i-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-song-l-ev-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-06-gt-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-yuan-up-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-s6-ev-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-zs-hybrid-plus-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg7-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mg-s5-ev-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-4-pro-15t-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-7-pro-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-tiggo-8-pro-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `icaur-v23-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `chery-fulwin-t8-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `changan-deepal-s07-my26-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-monjaro-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-cityray-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-preface-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-atlas-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-jolion-hev-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-ora-05-2026-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-ora-03-gt-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gwm-poer-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `haval-h6s-2025-precio-ficha-tecnica` | blog-posts-nuevos-c1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `jaecoo-5-gasolina-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-glory-580-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m8-erev-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-edeliver-3-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-deliver-7-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `maxus-edeliver-5-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xpeng-p7-plus-long-range-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-001-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-x-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-007-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-ec6-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nio-el8-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-n7-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-01-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m7-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-c10-reev-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lynk-co-08-emp-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dfsk-f5-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-5-shs-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-t03-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-d9-dm-i-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z9-dm-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `leapmotor-b01-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `denza-z9-gt-2025-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `evo-cuatro-2026-precio-ficha-tecnica` | blog-posts-nuevos-c2.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-yaris-cross-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-land-cruiser-250-2025-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-bz4x-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-qashqai-e-power-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-juke-hibrido-2025-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `nissan-interstar-ev-2025-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `mazda-cx-5-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i10-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-tucson-n-line-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-kona-n-line-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i20-n-line-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hyundai-i30-n-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev9-gt-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-stonic-hibrido-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-pv5-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev5-gt-line-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kia-ev3-gt-line-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-bronco-2025-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-transit-city-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-mustang-mach-e-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-focus-2025-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ford-transit-connect-phev-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tesla-model-s-plaid-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tesla-model-x-plaid-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tesla-cybertruck-2026-precio-ficha-tecnica` | blog-posts-nuevos-c4.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `seat-mo-50-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/seat-mo-50-2025-ficha-tecnica-precio-oficial.webp` |
| `segway-e125s-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/segway-e125s-2025-ficha-tecnica-precio-oficial.webp` |
| `segway-e110s-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/segway-e110s-2025-ficha-tecnica-precio-oficial.webp` |
| `segway-e150s-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/segway-e150s-2025-ficha-tecnica-precio-oficial.webp` |
| `velca-calima-s-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/velca-calima-s-2025-ficha-tecnica-precio-oficial.webp` |
| `velca-tramontana-s-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/velca-tramontana-s-2025-ficha-tecnica-precio-oficial.webp` |
| `niu-mqi-plus-sport-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/niu-mqi-plus-sport-2025-ficha-tecnica-precio-oficial.webp` |
| `niu-fqix-150-2026-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/niu-fqix-150-2026-ficha-tecnica-precio-oficial.webp` |
| `vmoto-vs2-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/vmoto-vs2-2025-ficha-tecnica-precio-oficial.webp` |
| `vmoto-cpx-explorer-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/vmoto-cpx-explorer-2025-ficha-tecnica-precio-oficial.webp` |
| `super-soco-tsx-50-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/super-soco-tsx-50-2025-ficha-tecnica-precio-oficial.webp` |
| `zeeho-ae8-s-plus-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/zeeho-ae8-s-plus-2025-ficha-tecnica-precio-oficial.webp` |
| `yadea-e8s-pro-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/yadea-e8s-pro-2025-ficha-tecnica-precio-oficial.webp` |
| `nerva-exe-ii-2026-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/nerva-exe-ii-2026-ficha-tecnica-precio-oficial.webp` |
| `nerva-lift-2026-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/nerva-lift-2026-ficha-tecnica-precio-oficial.webp` |
| `piaggio-1-active-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/piaggio-1-active-2025-ficha-tecnica-precio-oficial.webp` |
| `vespa-elettrica-70-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/vespa-elettrica-70-2025-ficha-tecnica-precio-oficial.webp` |
| `ebroh-veracruz-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ebroh-veracruz-2025-ficha-tecnica-precio-oficial.webp` |
| `ebroh-bravo-cr-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/ebroh-bravo-cr-2025-ficha-tecnica-precio-oficial.webp` |
| `askoll-es3-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/askoll-es3-2025-ficha-tecnica-precio-oficial.webp` |
| `blueshark-r80-lite-hs-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/blueshark-r80-lite-hs-2025-ficha-tecnica-precio-oficial.webp` |
| `efun-tiger-my25-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/efun-tiger-my25-2025-ficha-tecnica-precio-oficial.webp` |
| `sunra-hawk-49e-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/sunra-hawk-49e-2025-ficha-tecnica-precio-oficial.webp` |
| `sunra-anger-125e-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/sunra-anger-125e-2025-ficha-tecnica-precio-oficial.webp` |
| `e-zi-miniscooter-2025-ficha-tecnica-precio` | blog-posts-nuevos-m1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/e-zi-miniscooter-2025-ficha-tecnica-precio-oficial.webp` |
| `askoll-es2-evo-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/askoll-es2-evo-2025-ficha-tecnica-precio-oficial.webp` |
| `askoll-es3-evo-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/askoll-es3-evo-2025-ficha-tecnica-precio-oficial.webp` |
| `askoll-ngs2-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/askoll-ngs2-2025-ficha-tecnica-precio-oficial.webp` |
| `askoll-ngs3-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/askoll-ngs3-2025-ficha-tecnica-precio-oficial.webp` |
| `askoll-xkp-80-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/askoll-xkp-80-2025-ficha-tecnica-precio-oficial.webp` |
| `govecs-e-schwalbe-l1e-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/govecs-e-schwalbe-l1e-2025-ficha-tecnica-precio-oficial.webp` |
| `govecs-e-schwalbe-l3e-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/govecs-e-schwalbe-l3e-2025-ficha-tecnica-precio-oficial.webp` |
| `sunra-robo-s-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/sunra-robo-s-2025-ficha-tecnica-precio-oficial.webp` |
| `sunra-miku-max-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/sunra-miku-max-2025-ficha-tecnica-precio-oficial.webp` |
| `sunra-miku-super-125e-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/sunra-miku-super-125e-2025-ficha-tecnica-precio-oficial.webp` |
| `sunra-rs-125e-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/sunra-rs-125e-2025-ficha-tecnica-precio-oficial.webp` |
| `next-nx1-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/next-nx1-2025-ficha-tecnica-precio-oficial.webp` |
| `next-nxplus-ls-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/next-nxplus-ls-2025-ficha-tecnica-precio-oficial.webp` |
| `next-nxplus-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/next-nxplus-2025-ficha-tecnica-precio-oficial.webp` |
| `next-mojito-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/next-mojito-2025-ficha-tecnica-precio-oficial.webp` |
| `next-nx2-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/next-nx2-2025-ficha-tecnica-precio-oficial.webp` |
| `rieju-nuuk-cargopro-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rieju-nuuk-cargopro-2025-ficha-tecnica-precio-oficial.webp` |
| `cake-makka-flex-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cake-makka-flex-2025-ficha-tecnica-precio-oficial.webp` |
| `cake-kalk-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cake-kalk-2025-ficha-tecnica-precio-oficial.webp` |
| `efun-pusa-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/efun-pusa-2025-ficha-tecnica-precio-oficial.webp` |
| `efun-puma-v2-2025-ficha-tecnica-precio` | blog-posts-nuevos-m2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/efun-puma-v2-2025-ficha-tecnica-precio-oficial.webp` |
| `honda-pcx125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-pcx125-2026-ficha-tecnica-precio-oficial.webp` |
| `honda-sh125i-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-sh125i-2026-ficha-tecnica-precio-oficial.webp` |
| `honda-sh-mode-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-sh-mode-125-2026-ficha-tecnica-precio-oficial.webp` |
| `yamaha-xmax-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-xmax-125-2026-ficha-tecnica-precio-oficial.webp` |
| `yamaha-nmax-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-nmax-125-2026-ficha-tecnica-precio-oficial.webp` |
| `yamaha-rayzr-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-rayzr-125-2025-ficha-tecnica-precio-oficial.webp` |
| `aprilia-sr-gt-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/aprilia-sr-gt-125-2025-ficha-tecnica-precio-oficial.webp` |
| `vespa-gts-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/vespa-gts-125-2026-ficha-tecnica-precio-oficial.webp` |
| `piaggio-liberty-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/piaggio-liberty-125-2026-ficha-tecnica-precio-oficial.webp` |
| `kymco-people-s-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kymco-people-s-125-2026-ficha-tecnica-precio-oficial.webp` |
| `kymco-agility-s-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kymco-agility-s-125-2026-ficha-tecnica-precio-oficial.webp` |
| `sym-fiddle-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/sym-fiddle-125-2026-ficha-tecnica-precio-oficial.webp` |
| `sym-symphony-st-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/sym-symphony-st-125-2025-ficha-tecnica-precio-oficial.webp` |
| `peugeot-tweet-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-tweet-125-2025-ficha-tecnica-precio-oficial.webp` |
| `honda-cb125r-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cb125r-2026-ficha-tecnica-precio-oficial.webp` |
| `honda-cb125f-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cb125f-2026-ficha-tecnica-precio-oficial.webp` |
| `honda-cb300r-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cb300r-2026-ficha-tecnica-precio-oficial.webp` |
| `yamaha-mt-125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-mt-125-2026-ficha-tecnica-precio-oficial.webp` |
| `yamaha-xsr125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-xsr125-2026-ficha-tecnica-precio-oficial.webp` |
| `yamaha-ys125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-ys125-2025-ficha-tecnica-precio-oficial.webp` |
| `kawasaki-z125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kawasaki-z125-2025-ficha-tecnica-precio-oficial.webp` |
| `aprilia-tuono-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/aprilia-tuono-125-2025-ficha-tecnica-precio-oficial.webp` |
| `suzuki-gsx-s125-2026-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-gsx-s125-2026-ficha-tecnica-precio-oficial.webp` |
| `benelli-bn-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/benelli-bn-125-2025-ficha-tecnica-precio-oficial.webp` |
| `benelli-tnt-125-2025-ficha-tecnica-precio` | blog-posts-nuevos-m3.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/benelli-tnt-125-2025-ficha-tecnica-precio-oficial.webp` |
| `honda-cb500x-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cb500x-2025-ficha-tecnica-precio-oficial.webp` |
| `ktm-390-adventure-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ktm-390-adventure-2025-ficha-tecnica-precio-oficial.webp` |
| `bmw-f-750-gs-2024-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/bmw-f-750-gs-2024-ficha-tecnica-precio-oficial.webp` |
| `triumph-tiger-850-sport-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/triumph-tiger-850-sport-2025-ficha-tecnica-precio-oficial.webp` |
| `kawasaki-versys-x-300-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kawasaki-versys-x-300-2025-ficha-tecnica-precio-oficial.webp` |
| `suzuki-v-strom-250sx-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-v-strom-250sx-2025-ficha-tecnica-precio-oficial.webp` |
| `honda-nx500-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-nx500-2026-ficha-tecnica-precio-oficial.webp` |
| `cfmoto-450mt-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/cfmoto-450mt-2026-ficha-tecnica-precio-oficial.webp` |
| `voge-300rally-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voge-300rally-2026-ficha-tecnica-precio-oficial.webp` |
| `honda-cbr500r-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cbr500r-2025-ficha-tecnica-precio-oficial.webp` |
| `kawasaki-ninja-zx-4rr-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/kawasaki-ninja-zx-4rr-2025-ficha-tecnica-precio-oficial.webp` |
| `ktm-rc-125-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ktm-rc-125-2025-ficha-tecnica-precio-oficial.webp` |
| `ktm-rc-390-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ktm-rc-390-2025-ficha-tecnica-precio-oficial.webp` |
| `aprilia-rs-125-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/aprilia-rs-125-2026-ficha-tecnica-precio-oficial.webp` |
| `zontes-703r-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zontes-703r-2025-ficha-tecnica-precio-oficial.webp` |
| `yamaha-yzf-r125-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yamaha-yzf-r125-2026-ficha-tecnica-precio-oficial.webp` |
| `suzuki-gsx-r125-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-gsx-r125-2026-ficha-tecnica-precio-oficial.webp` |
| `triumph-bonneville-t100-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/triumph-bonneville-t100-2026-ficha-tecnica-precio-oficial.webp` |
| `royal-enfield-classic-350-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/royal-enfield-classic-350-2026-ficha-tecnica-precio-oficial.webp` |
| `royal-enfield-meteor-350-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/royal-enfield-meteor-350-2026-ficha-tecnica-precio-oficial.webp` |
| `honda-cl500-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/honda-cl500-2025-ficha-tecnica-precio-oficial.webp` |
| `ducati-scrambler-800-nightshift-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/ducati-scrambler-800-nightshift-2025-ficha-tecnica-precio-oficial.webp` |
| `benelli-leoncino-500-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/benelli-leoncino-500-2026-ficha-tecnica-precio-oficial.webp` |
| `macbor-eight-mile-500-scr-2026-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/macbor-eight-mile-500-scr-2026-ficha-tecnica-precio-oficial.webp` |
| `keeway-superlight-125v-2025-precio` | blog-posts-nuevos-m4.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/keeway-superlight-125v-2025-ficha-tecnica-precio-oficial.webp` |
| `piaggio-1-plus-2025-ficha-tecnica-precio` | blog-posts-nuevos-m5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/piaggio-1-plus-2025-ficha-tecnica-precio-oficial.webp` |
| `zeeho-ae6-plus-2025-ficha-tecnica-precio` | blog-posts-nuevos-m5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/zeeho-ae6-plus-2025-ficha-tecnica-precio-oficial.webp` |
| `seat-mo-125-performance-2025-ficha-tecnica-precio` | blog-posts-nuevos-m5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/seat-mo-125-performance-2025-ficha-tecnica-precio-oficial.webp` |
| `quazzar-e-divine-2025-ficha-tecnica-precio` | blog-posts-nuevos-m5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/motos/quazzar-e-divine-2025-ficha-tecnica-precio-oficial.webp` |
| `multa-patinete-octubre-2026-que-hacer-como-recurrir` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/patinete-multa-octubre-2026.webp` |
| `intercomunicador-casco-moto-legal-octubre-2026` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/intercomunicador-casco-octubre-2026.webp` |
| `cinturon-seguridad-repartidores-pierden-exencion-octubre-2026` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/cinturon-repartidores-octubre-2026.webp` |
| `campana-dgt-distracciones-octubre-2026` | blog-posts-octubre-2026.ts | NO | NO (2 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/campana-dgt-distracciones-octubre-2026.webp` |
| `velocidad-variable-ap7-ap2-limites-paneles` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/velocidad-variable-ap7-ap2-paneles.webp` |
| `balance-siniestralidad-septiembre-2026-dgt` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/balance-siniestralidad-septiembre-2026-dgt.webp` |
| `radares-tramo-bidireccionales-dgt-2026-ubicaciones` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/radares-tramo-bidireccionales-2026-hero.webp` |
| `multas-pernoctar-autocaravana-2026-como-recurrir` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multas-pernoctar-autocaravana-2026-hero.webp` |
| `peugeot-salon-paris-2026-stand-dos-concepts` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-salon-paris-2026-stand-hero.webp` |
| `alfa-romeo-cuorerosso-concept-salon-paris-2026` | blog-posts-octubre-2026.ts | NO | NO (2 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/alfa-romeo-cuorerosso-concept-paris-2026-hero.webp` |
| `multa-no-ceder-paso-glorieta-200-euros-4-puntos` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multa-no-ceder-paso-glorieta-200-euros-4-puntos-hero.webp` |
| `multa-tirar-colilla-coche-500-euros-6-puntos` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multa-tirar-colilla-coche-500-euros-6-puntos-hero.webp` |
| `citroen-2cv-electrico-2026-paris` | blog-posts-octubre-2026.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `multa-dron-dgt-que-infracciones-cazan` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/dron-dgt-multas-hero.webp` |
| `detector-radar-vs-avisador-legal-multa` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/detector-radar-gps-coche.webp` |
| `marcas-coche-mas-garantia-2026` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/marcas-coche-mas-garantia-2026-portada.webp` |
| `electricos-baratos-record-europa-2026` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/electricos-baratos-record-europa-2026.webp` |
| `dgt-ayudas-airbag-moto-21-por-ciento` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/airbag-moto-dgt-ayudas.webp` |
| `multa-itv-caducada-200-500-euros-recurrir` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/multa-itv-caducada-2026.webp` |
| `irlanda-norte-noveles-restriccion-nocturna-multas` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/irlanda-norte-noveles-restriccion-nocturna.webp` |
| `multa-carnet-caducado-200-euros` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/carnet-caducado-multa-hero.webp` |
| `multa-distancia-seguridad-200-euros-4-puntos` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/distancia-seguridad-multa-hero.webp` |
| `radar-senal-falsa-400-multas-como-recurrir` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/radar-senal-falsa-hero.webp` |
| `frenar-antes-radar-multa-200-euros` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/frenazo-antes-radar-hero.webp` |
| `carril-emergencia-atascos-multa-200-euros` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/carril-emergencia-atasco-hero.webp` |
| `motos-arcen-30-kmh-atascos-norma-dgt` | blog-posts-octubre-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/motos-arcen-30kmh-hero.webp` |
| `omoda-5-gasolina-2026-precio-ficha-tecnica` | blog-posts-omoda-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/omoda-5-gasolina-2026-precio-ficha-tecnica-hero.webp` |
| `omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica` | blog-posts-omoda-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica-hero.webp` |
| `omoda-7-shs-2026-precio-ficha-tecnica` | blog-posts-omoda-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/omoda-7-shs-2026-precio-ficha-tecnica-hero.webp` |
| `omoda-4-2026-precio-ficha-tecnica` | blog-posts-omoda-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `omoda-s5-2026-precio-ficha-tecnica` | blog-posts-omoda-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/omoda-s5-2026-precio-ficha-tecnica/omoda-s5-2026-precio-ficha-tecnica-hero.webp |
| `onvo-l60-2026-precio-ficha-tecnica` | blog-posts-onvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/onvo-l60-2026-precio-ficha-tecnica-hero.webp` |
| `onvo-l80-2026-precio-ficha-tecnica` | blog-posts-onvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/onvo-l80-2026-precio-ficha-tecnica-hero.webp` |
| `opel-corsa-hibrido-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-corsa-hibrido-2025-precio-ficha-tecnica-hero.webp` |
| `opel-corsa-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-corsa-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-corsa-gse-2026-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-corsa-gse-2026-precio-ficha-tecnica-hero.webp` |
| `opel-frontera-hibrido-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-frontera-hibrido-2025-precio-ficha-tecnica-hero.webp` |
| `opel-frontera-electrico-54kwh-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-frontera-electrico-54kwh-2025-precio-ficha-tecnica-hero.webp` |
| `opel-mokka-hibrido-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-mokka-hibrido-2025-precio-ficha-tecnica-hero.webp` |
| `opel-mokka-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-mokka-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-astra-hibrido-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-astra-hibrido-2025-precio-ficha-tecnica-hero.webp` |
| `opel-astra-hibrido-enchufable-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-astra-hibrido-enchufable-2025-precio-ficha-tecnica-hero.webp` |
| `opel-astra-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-astra-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-astra-sports-tourer-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-astra-sports-tourer-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-astra-sports-tourer-phev-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-astra-sports-tourer-phev-2025-precio-ficha-tecnica-hero.webp` |
| `opel-astra-sports-tourer-hibrido-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-astra-sports-tourer-hibrido-2025-precio-ficha-tecnica-hero.webp` |
| `opel-grandland-hibrido-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-grandland-hibrido-2025-precio-ficha-tecnica-hero.webp` |
| `opel-grandland-hibrido-enchufable-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-grandland-hibrido-enchufable-2025-precio-ficha-tecnica-hero.webp` |
| `opel-grandland-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-grandland-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-grandland-electrico-long-range-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-grandland-electrico-long-range-2025-precio-ficha-tecnica-hero.webp` |
| `opel-grandland-electrico-awd-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-grandland-electrico-awd-2025-precio-ficha-tecnica-hero.webp` |
| `opel-combo-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-combo-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-zafira-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-zafira-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-vivaro-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/opel-vivaro-electrico-2025-precio-ficha-tecnica-hero.webp` |
| `opel-mokka-gse-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: opel-mokka-gse-2025-precio-ficha-tecnica) -> /media/fotos-reales/opel-mokka-gse-2025-precio-ficha-tecnica/opel-mokka-gse-2025-precio-ficha-tecnica-1.webp |
| `opel-combo-xl-diesel-130-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: opel-combo-xl-diesel-130-2025-precio-ficha-tecnica) -> /media/fotos-reales/opel-combo-xl-diesel-130-2025-precio-ficha-tecnica/opel-combo-xl-diesel-130-2025-precio-ficha-tecnica-1.webp |
| `opel-astra-diesel-130-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: opel-astra-diesel-130-2025-precio-ficha-tecnica) -> /media/fotos-reales/opel-astra-diesel-130-2025-precio-ficha-tecnica/opel-astra-diesel-130-2025-precio-ficha-tecnica-1.webp |
| `opel-movano-electrico-2025-precio-ficha-tecnica` | blog-posts-opel-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: opel-movano-electrico-2025-precio-ficha-tecnica) -> /media/fotos-reales/opel-movano-electrico-2025-precio-ficha-tecnica/opel-movano-electrico-2025-precio-ficha-tecnica-1.webp |
| `multa-patinete-sin-registro-1220-euros` | blog-posts-patinete-registro-multa-2026.ts | NO | NO (1 rotas) | — | Imposible: sin foto disponible del modelo en el repo `/media/patinete-registro-dgt-multa-2026.webp` |
| `xiaomi-electric-scooter-5-max` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-5-max-1.webp` |
| `xiaomi-electric-scooter-4-pro-2nd-gen` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-4-pro-2nd-gen-1.webp` |
| `xiaomi-electric-scooter-4-lite-2nd-gen` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-4-lite-2nd-gen-1.webp` |
| `xiaomi-electric-scooter-6` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-6-1.webp` |
| `xiaomi-electric-scooter-6-lite` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-6-lite-1.webp` |
| `xiaomi-electric-scooter-6-pro` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-6-pro-1.webp` |
| `xiaomi-electric-scooter-6-max` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-6-max-1.webp` |
| `xiaomi-electric-scooter-6-ultra` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-6-ultra-1.webp` |
| `segway-ninebot-max-g3` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-max-g3-1.webp` |
| `segway-ninebot-f3-pro` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-f3-pro-1.webp` |
| `segway-ninebot-e3-pro` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-e3-pro-1.webp` |
| `segway-ninebot-e2-pro` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-e2-pro-1.webp` |
| `segway-ninebot-gt3-e` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-gt3-e-1.webp` |
| `niu-kqi-300p` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi-300p-1.webp` |
| `niu-kqi-200p` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi-200p-1.webp` |
| `niu-kqi-200f` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi-200f-1.webp` |
| `niu-kqi-100p` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi-100p-1.webp` |
| `navee-s40` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-s40-1.webp` |
| `navee-gt3-max` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-gt3-max-1.webp` |
| `navee-st3-pro` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-st3-pro-1.webp` |
| `pure-air-5` | blog-posts-patinetes-exp-p1.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-5-1.webp` |
| `acer-es-series-5-advance` | blog-posts-patinetes-exp-p10.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/acer-es-series-5-advance.webp` |
| `aprilia-esr2-evo` | blog-posts-patinetes-exp-p10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/aprilia-esr2-evo.webp` |
| `cecotec-bongo-serie-a-plus-max-45-connected` | blog-posts-patinetes-exp-p10.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-a-plus-max-45-connected.webp` |
| `ducati-pro-3` | blog-posts-patinetes-exp-p10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/ducati-pro-3.webp` |
| `fiat-500-iride` | blog-posts-patinetes-exp-p10.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/fiat-500-iride.webp` |
| `cecotec-bongo-d40-xl-connected` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-d40-xl-connected-1.webp` |
| `cecotec-bongo-d20-xl-connected` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-d20-xl-connected-1.webp` |
| `cecotec-bongo-d20-mobile` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-d20-mobile-1.webp` |
| `cecotec-bongo-serie-s-infinity` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-s-infinity-1.webp` |
| `cecotec-bongo-gs50-xxl-connected` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-gs50-xxl-connected-1.webp` |
| `cecotec-bongo-serie-a-advance-connected-max` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-a-advance-connected-max-1.webp` |
| `cecotec-bongo-d40-xl-suspension-connected` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-d40-xl-suspension-connected-1.webp` |
| `cecotec-bongo-z-plus` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-z-plus-1.webp` |
| `cecotec-bongo-serie-a-advance-connected` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-a-advance-connected-1.webp` |
| `smartgyro-rockway-evo` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-rockway-evo-1.webp` |
| `smartgyro-rockway-pro-evo` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-rockway-pro-evo-1.webp` |
| `smartgyro-rockway-gt` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-rockway-gt-1.webp` |
| `smartgyro-rockway-gt-dual` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-rockway-gt-dual-1.webp` |
| `smartgyro-rockway-gts` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-rockway-gts-1.webp` |
| `smartgyro-rockway-pro` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-rockway-pro-1.webp` |
| `smartgyro-k1` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-k1-1.webp` |
| `smartgyro-k5-pro-lr` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-k5-pro-lr-1.webp` |
| `smartgyro-raptor-dual-evo-lr` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-raptor-dual-evo-lr-1.webp` |
| `dualtron-thunder-3` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-thunder-3-1.webp` |
| `dualtron-new-storm-limited` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-new-storm-limited-1.webp` |
| `dualtron-x-limited` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-x-limited-1.webp` |
| `dualtron-victor-limited` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-victor-limited-1.webp` |
| `dualtron-togo` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-togo-1.webp` |
| `dualtron-togo-plus` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-togo-plus-1.webp` |
| `dualtron-spider-2` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-spider-2-1.webp` |
| `kaabo-mantis-urban` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-urban-1.webp` |
| `kaabo-mantis-10-plus-v2` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-10-plus-v2-1.webp` |
| `kaabo-mantis-x-pro` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-x-pro-1.webp` |
| `kaabo-mantis-10-eco` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-10-eco-1.webp` |
| `kaabo-wolf-king-gtr` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-king-gtr-1.webp` |
| `kaabo-wolf-warrior-x-gt` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-warrior-x-gt-1.webp` |
| `kaabo-skywalker-8s` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-skywalker-8s-1.webp` |
| `kaabo-mantis-8-eco-800` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-8-eco-800-1.webp` |
| `kaabo-wolf-king-gtr-max` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-king-gtr-max-1.webp` |
| `vsett-8-plus` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-8-plus-1.webp` |
| `vsett-9` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-9-1.webp` |
| `vsett-9-apex` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-9-apex-1.webp` |
| `vsett-10-plus-apex` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-10-plus-apex-1.webp` |
| `vsett-10-plus-r` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-10-plus-r-1.webp` |
| `vsett-10-plus-super` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-10-plus-super-1.webp` |
| `vsett-11-plus` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-11-plus-1.webp` |
| `vsett-11-plus-super-72` | blog-posts-patinetes-exp-p2.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/vsett-11-plus-super-72-1.webp` |
| `soflow-so4-pro-gen-2` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/soflow-so4-pro-gen-2-1.webp` |
| `soflow-so-one-plus` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/soflow-so-one-plus-1.webp` |
| `soflow-so4-pro-gt` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/soflow-so4-pro-gt-1.webp` |
| `soflow-so2-air-gen-3` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/soflow-so2-air-gen-3-1.webp` |
| `walberg-egret-pro` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/walberg-egret-pro-1.webp` |
| `walberg-egret-ey-1` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/walberg-egret-ey-1-1.webp` |
| `walberg-egret-ey-6` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/walberg-egret-ey-6-1.webp` |
| `walberg-egret-gt` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/walberg-egret-gt-1.webp` |
| `isinwheel-s10max` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/isinwheel-s10max-1.webp` |
| `isinwheel-s10pro` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/isinwheel-s10pro-1.webp` |
| `isinwheel-gt1` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/isinwheel-gt1-1.webp` |
| `isinwheel-s9pro` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/isinwheel-s9pro-1.webp` |
| `isinwheel-s10plus` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/isinwheel-s10plus-1.webp` |
| `gotrax-gx1` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-gx1-1.webp` |
| `gotrax-gx2` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-gx2-1.webp` |
| `gotrax-g6` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-g6-1.webp` |
| `gotrax-gxl-v2` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-gxl-v2-1.webp` |
| `gotrax-g3-plus` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-g3-plus-1.webp` |
| `gotrax-gx-zero` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-gx-zero-1.webp` |
| `gotrax-gx3` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-gx3-1.webp` |
| `apollo-go` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-go-1.webp` |
| `razor-c25` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/razor-c25-1.webp` |
| `denver-sel-10800f` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/denver-sel-10800f-1.webp` |
| `denver-sel-10810fdb` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/denver-sel-10810fdb-1.webp` |
| `zwheel-e12` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/zwheel-e12-1.webp` |
| `zwheel-e9d` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/zwheel-e9d-1.webp` |
| `zwheel-e9t` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/zwheel-e9t-1.webp` |
| `zwheel-zwolf-duo` | blog-posts-patinetes-exp-p5.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/zwheel-zwolf-duo-1.webp` |
| `urban-glide-e-cross-pro-2` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-e-cross-pro-2-1.webp` |
| `urban-glide-ecross-go` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ecross-go-1.webp` |
| `urban-glide-all-road-6-2x2` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-all-road-6-2x2-1.webp` |
| `urban-glide-ride-100-pro-2` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ride-100-pro-2-1.webp` |
| `urban-glide-ride-100-max` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ride-100-max-1.webp` |
| `urban-glide-1000gt-2x2` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-1000gt-2x2-1.webp` |
| `urban-glide-all-road-2` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-all-road-2-1.webp` |
| `urban-glide-e-cross-one` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-e-cross-one-1.webp` |
| `urban-glide-ride-85-evo` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ride-85-evo-1.webp` |
| `urban-glide-e-cross-pro-boost-2` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-e-cross-pro-boost-2-1.webp` |
| `urban-glide-500ct` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-500ct-1.webp` |
| `urban-glide-all-road-5` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-all-road-5-1.webp` |
| `urban-glide-ecross-pro-xs` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ecross-pro-xs-1.webp` |
| `urban-glide-ride-100-city` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ride-100-city-1.webp` |
| `urban-glide-100-shark` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-100-shark-1.webp` |
| `urban-glide-eon-x` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-eon-x-1.webp` |
| `urban-glide-urbanride-85-plus` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-urbanride-85-plus-1.webp` |
| `urban-glide-urbanride-85-city` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-urbanride-85-city-1.webp` |
| `urban-glide-ride-100xs` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/urban-glide-ride-100xs-1.webp` |
| `hiley-tiger-10-gtr` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiley-tiger-10-gtr-1.webp` |
| `hiley-tiger-supra-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiley-tiger-supra-pro-1.webp` |
| `hiley-maxspeed-x10` | blog-posts-patinetes-exp-p6.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `hiley-maxspeed-x8` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiley-maxspeed-x8-1.webp` |
| `hiley-tiger-10-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiley-tiger-10-pro-1.webp` |
| `hiley-tiger-10-lite` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiley-tiger-10-lite-1.webp` |
| `hiley-tiger-8-gtr-v4` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiley-tiger-8-gtr-v4-1.webp` |
| `smartgyro-raptor-dual-evo` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-raptor-dual-evo-1.webp` |
| `cecotec-bongo-doble-y85-2x2-xxl-connected` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-doble-y85-2x2-xxl-connected-1.webp` |
| `cecotec-bongo-serie-doble-z75` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-doble-z75-1.webp` |
| `cecotec-bongo-serie-doble-z85` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-doble-z85-1.webp` |
| `cecotec-bongo-serie-z-off-road` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-z-off-road-1.webp` |
| `cecotec-bongo-serie-x65-connected` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-x65-connected-1.webp` |
| `cecotec-bongo-serie-x45-sport-connected` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-serie-x45-sport-connected-1.webp` |
| `cecotec-bongo-d30-xl-connected` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/cecotec-bongo-d30-xl-connected-1.webp` |
| `speedway-leger-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/speedway-leger-pro-1.webp` |
| `speedway-leger` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/speedway-leger-1.webp` |
| `speedway-mini-4-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/speedway-mini-4-pro-1.webp` |
| `sxt-light-plus-v` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/sxt-light-plus-v-1.webp` |
| `segway-superscooter-gt3-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-superscooter-gt3-pro-1.webp` |
| `segway-ninebot-f2-ii` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-f2-ii-1.webp` |
| `segway-ninebot-f2-pro-ii` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-f2-pro-ii-1.webp` |
| `navee-v40i` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v40i-1.webp` |
| `navee-v50i` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v50i-1.webp` |
| `navee-n65i` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-n65i-1.webp` |
| `navee-v25i-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v25i-pro-1.webp` |
| `navee-v40-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v40-pro-1.webp` |
| `niu-kqi1-pro` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi1-pro-1.webp` |
| `ruptor-r3` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/ruptor-r3-1.webp` |
| `ruptor-r6` | blog-posts-patinetes-exp-p6.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/ruptor-r6-1.webp` |
| `xiaomi-electric-scooter-6-essential` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-6-essential-1.webp` |
| `segway-ninebot-e2-ii` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-e2-ii-1.webp` |
| `segway-ninebot-gt3-pro-e` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-gt3-pro-e-1.webp` |
| `segway-ninebot-zt3-max` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-zt3-max-1.webp` |
| `segway-ninebot-max-g3-pro` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-max-g3-pro-1.webp` |
| `navee-gt3-pro` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-gt3-pro-1.webp` |
| `navee-v25` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v25-1.webp` |
| `navee-v25i-pro-ii` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v25i-pro-ii-1.webp` |
| `navee-v40i-pro` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v40i-pro-1.webp` |
| `navee-v40i-pro-ii` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v40i-pro-ii-1.webp` |
| `navee-v50i-pro` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v50i-pro-1.webp` |
| `navee-v40` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-v40-1.webp` |
| `niu-kqi3-sport` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi3-sport-1.webp` |
| `niu-kqi1-sport` | blog-posts-patinetes-exp-p7.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi1-sport-1.webp` |
| `pure-advance` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-advance-1.webp` |
| `pure-advance-flex` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-advance-flex-1.webp` |
| `pure-advance-plus` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-advance-plus-1.webp` |
| `pure-x-mclaren` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-x-mclaren-1.webp` |
| `pure-air-4` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-4-1.webp` |
| `pure-air-4-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-4-pro-1.webp` |
| `pure-air-6` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-6-1.webp` |
| `pure-air-6-pro-plus` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-6-pro-plus-1.webp` |
| `pure-air-6-ultra` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-6-ultra-1.webp` |
| `pure-air-6-ultra-max` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-air-6-ultra-max-1.webp` |
| `pure-escape-pro-plus` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-escape-pro-plus-1.webp` |
| `pure-escape-ultra-max` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/pure-escape-ultra-max-1.webp` |
| `dualtron-pop` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-pop-1.webp` |
| `dualtron-pop-dual` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-pop-dual-1.webp` |
| `dualtron-mini-special` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-mini-special-1.webp` |
| `dualtron-mini-special-dual` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-mini-special-dual-1.webp` |
| `dualtron-aminia` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-aminia-1.webp` |
| `dualtron-aminia-long` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-aminia-long-1.webp` |
| `dualtron-raptor-2` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-raptor-2-1.webp` |
| `dualtron-compact` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-compact-1.webp` |
| `dualtron-eagle-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-eagle-pro-1.webp` |
| `dualtron-victory` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-victory-1.webp` |
| `dualtron-city` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-city-1.webp` |
| `dualtron-sonic-a` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-sonic-a-1.webp` |
| `dualtron-new-storm-ltd` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-new-storm-ltd-1.webp` |
| `dualtron-spider-max` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-spider-max-1.webp` |
| `dualtron-ultra-2-upgrade` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-ultra-2-upgrade-1.webp` |
| `dualtron-achilleus` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-achilleus-1.webp` |
| `dualtron-x2-up` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/dualtron-x2-up-1.webp` |
| `kaabo-wolf-warrior-11-plus` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-warrior-11-plus-1.webp` |
| `kaabo-wolf-warrior-gt-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-warrior-gt-pro-1.webp` |
| `kaabo-mantis-10-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-10-pro-1.webp` |
| `kaabo-mantis-8-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-mantis-8-pro-1.webp` |
| `kaabo-skywalker-10s` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-skywalker-10s-1.webp` |
| `kaabo-wolf-warrior-x-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-warrior-x-pro-1.webp` |
| `kaabo-wolf-warrior-2` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-warrior-2-1.webp` |
| `kaabo-wolf-warrior-x` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-wolf-warrior-x-1.webp` |
| `kaabo-skywalker-8` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-skywalker-8-1.webp` |
| `kaabo-skywalker-10` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kaabo-skywalker-10-1.webp` |
| `apollo-phantom-2` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-phantom-2-1.webp` |
| `apollo-phantom-stellar` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-phantom-stellar-1.webp` |
| `apollo-city-2` | blog-posts-patinetes-exp-p8.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (slug del post) -> /media/patinetes/apollo-city-2.webp |
| `apollo-city-stellar` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-city-stellar-1.webp` |
| `apollo-city-pro` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-city-pro-1.webp` |
| `apollo-pro-2024` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-pro-2024-1.webp` |
| `apollo-explore-2024` | blog-posts-patinetes-exp-p8.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/apollo-explore-2024-1.webp` |
| `gotrax-eclipse` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-eclipse-1.webp` |
| `smartgyro-raptor-black` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-raptor-black-1.webp` |
| `smartgyro-z-one` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-z-one-1.webp` |
| `inokim-light-2-max` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/inokim-light-2-max-1.webp` |
| `inokim-quick-4-hero` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/inokim-quick-4-hero-1.webp` |
| `inokim-light-3` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/inokim-light-3-1.webp` |
| `etwow-booster-plus-s` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/etwow-booster-plus-s-1.webp` |
| `etwow-s2-booster-plus` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/etwow-s2-booster-plus-1.webp` |
| `etwow-booster-sport` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/etwow-booster-sport-1.webp` |
| `gotrax-rival` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-rival-1.webp` |
| `gotrax-g5` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-g5-1.webp` |
| `turboant-m10` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/turboant-m10-1.webp` |
| `turboant-x7` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/turboant-x7-1.webp` |
| `razor-e-prime` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/razor-e-prime-1.webp` |
| `razor-e-prime-air` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/razor-e-prime-air-1.webp` |
| `hiboy-nex3` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiboy-nex3-1.webp` |
| `hiboy-nex5` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiboy-nex5-1.webp` |
| `iscooter-i10-pro` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/iscooter-i10-pro-1.webp` |
| `kugoo-kirin-s1-pro` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kugoo-kirin-s1-pro-1.webp` |
| `kugoo-kirin-s4` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kugoo-kirin-s4-1.webp` |
| `evercross-a1` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/evercross-a1-1.webp` |
| `gotrax-fusion` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-fusion-1.webp` |
| `gotrax-xr-elite` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-xr-elite-1.webp` |
| `hiboy-s2r` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/hiboy-s2r-1.webp` |
| `kugoo-kirin-m3` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/kugoo-kirin-m3-1.webp` |
| `inokim-quick-3` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/inokim-quick-3-1.webp` |
| `smartgyro-xtreme` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-xtreme-1.webp` |
| `segway-ninebot-d38e` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-d38e-1.webp` |
| `segway-ninebot-d28e` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-d28e-1.webp` |
| `gotrax-g-pro` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-g-pro-1.webp` |
| `gotrax-xr-ultra` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-xr-ultra-1.webp` |
| `segway-ninebot-f30` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-f30-1.webp` |
| `segway-ninebot-e22e` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-e22e-1.webp` |
| `niu-kqi-300x` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/niu-kqi-300x-1.webp` |
| `navee-n65` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/navee-n65-1.webp` |
| `inokim-quick-4-super` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/inokim-quick-4-super-1.webp` |
| `yadea-ks5-pro` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/yadea-ks5-pro-1.webp` |
| `okai-neon-pro` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/okai-neon-pro-1.webp` |
| `emove-touring` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/emove-touring-1.webp` |
| `zero-10` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/zero-10-1.webp` |
| `zero-9` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/zero-9-1.webp` |
| `gotrax-g3` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/gotrax-g3-1.webp` |
| `turboant-thunder-t1` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/turboant-thunder-t1-1.webp` |
| `xiaomi-electric-scooter-4-pro-plus` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/xiaomi-electric-scooter-4-pro-plus-1.webp` |
| `segway-ninebot-f40e` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-f40e-1.webp` |
| `smartgyro-dual-max-2` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/smartgyro-dual-max-2-1.webp` |
| `segway-ninebot-e25e` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/segway-ninebot-e25e-1.webp` |
| `okai-neon` | blog-posts-patinetes-exp-p9.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/patinetes/okai-neon-1.webp` |
| `peugeot-e-208-electrico-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-208-electrico-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-208-hibrido-110-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-208-hibrido-110-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-2008-electrico-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-2008-electrico-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-208-gti-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-208-gti-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-308-electrico-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-308-electrico-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-308-phev-195-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-308-phev-195-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-308-sw-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-308-sw-hibrido-145-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-308-sw-phev-195-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-308-sw-phev-195-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-408-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-408-hibrido-145-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-408-phev-240-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-408-phev-240-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-408-electrico-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-408-electrico-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-3008-electrico-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-3008-electrico-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-3008-long-range-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-3008-long-range-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-3008-phev-195-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-3008-phev-195-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-5008-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-5008-hibrido-145-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-5008-phev-225-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-5008-phev-225-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-508-phev-225-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-508-phev-225-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-508-sw-phev-225-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-508-sw-phev-225-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-rifter-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-rifter-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-e-traveller-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/peugeot-e-traveller-2026-precio-ficha-tecnica-hero.webp` |
| `peugeot-3008-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: peugeot-3008-hibrido-145-2026-precio-ficha-tecnica) -> /media/fotos-reales/peugeot-3008-hibrido-145-2026-precio-ficha-tecnica/peugeot-3008-hibrido-145-2026-precio-ficha-tecnica-1.webp |
| `peugeot-5008-phev-195-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: peugeot-5008-phev-195-2026-precio-ficha-tecnica) -> /media/fotos-reales/peugeot-5008-phev-195-2026-precio-ficha-tecnica/peugeot-5008-phev-195-2026-precio-ficha-tecnica-1.webp |
| `peugeot-2008-hibrido-145-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: peugeot-2008-hibrido-145-2026-precio-ficha-tecnica) -> /media/fotos-reales/peugeot-2008-hibrido-145-2026-precio-ficha-tecnica/peugeot-2008-hibrido-145-2026-precio-ficha-tecnica-1.webp |
| `peugeot-e-partner-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: peugeot-e-partner-2026-precio-ficha-tecnica) -> /media/fotos-reales/peugeot-e-partner-2026-precio-ficha-tecnica/peugeot-e-partner-2026-precio-ficha-tecnica-1.webp |
| `peugeot-e-expert-2026-precio-ficha-tecnica` | blog-posts-peugeot-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: peugeot-e-expert-2026-precio-ficha-tecnica) -> /media/fotos-reales/peugeot-e-expert-2026-precio-ficha-tecnica/peugeot-e-expert-2026-precio-ficha-tecnica-1.webp |
| `polestar-2-precio-ficha-tecnica` | blog-posts-polestar-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/polestar-2-precio-ficha-tecnica-hero.webp` |
| `polestar-3-precio-ficha-tecnica` | blog-posts-polestar-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/polestar-3-precio-ficha-tecnica-hero.webp` |
| `polestar-4-suv-precio-ficha-tecnica` | blog-posts-polestar-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/polestar-4-suv-precio-ficha-tecnica-hero.webp` |
| `polestar-5-precio-ficha-tecnica` | blog-posts-polestar-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/polestar-5-precio-ficha-tecnica-hero.webp` |
| `polestar-2-long-range-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-2-long-range-precio-ficha-tecnica/polestar-2-long-range-precio-ficha-tecnica-hero.webp |
| `polestar-2-long-range-dual-motor-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-2-long-range-dual-motor-precio-ficha-tecnica/polestar-2-long-range-dual-motor-precio-ficha-tecnica-hero.webp |
| `polestar-2-performance-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-2-performance-precio-ficha-tecnica/polestar-2-performance-precio-ficha-tecnica-hero.webp |
| `polestar-3-dual-motor-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-3-dual-motor-precio-ficha-tecnica/polestar-3-dual-motor-precio-ficha-tecnica-hero.webp |
| `polestar-3-performance-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-3-performance-precio-ficha-tecnica/polestar-3-performance-precio-ficha-tecnica-hero.webp |
| `polestar-4-suv-dual-motor-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-4-suv-dual-motor-precio-ficha-tecnica/polestar-4-suv-dual-motor-precio-ficha-tecnica-hero.webp |
| `polestar-5-performance-precio-ficha-tecnica` | blog-posts-polestar-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/polestar-5-performance-precio-ficha-tecnica/polestar-5-performance-precio-ficha-tecnica-hero.webp |
| `yamaha-xsr900-2024-ficha-tecnica-precio` | blog-posts-prio-1a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-forza-350-2024-ficha-tecnica-precio` | blog-posts-prio-1a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yzf-r1-2024-ficha-tecnica-precio` | blog-posts-prio-1a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-adv350-2024-ficha-tecnica-precio` | blog-posts-prio-1a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cbr650r-2024-ficha-tecnica-precio` | blog-posts-prio-1a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-10-2024-ficha-tecnica-precio` | blog-posts-prio-1b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yzf-r9-2025-ficha-tecnica-precio` | blog-posts-prio-1b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-austral-2024-precio-ficha-tecnica` | blog-posts-prio-1b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb750-hornet-2024-ficha-tecnica-precio` | blog-posts-prio-1b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb125r-2024-ficha-tecnica-precio` | blog-posts-prio-1b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-x-adv-750-2025-ficha-tecnica-precio` | blog-posts-prio-1b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-bigster-2025-precio-ficha-tecnica` | blog-posts-prio-1c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-tracer-9-gt-2024-ficha-tecnica-precio` | blog-posts-prio-1c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-mt-09-2024-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-xl750-transalp-2024-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `cupra-formentor-2024-precio-ficha-tecnica` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-yzf-r7-2024-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `renault-rafale-2024-precio-ficha-tecnica` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cbr600rr-2024-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `dacia-spring-2024-precio-ficha-tecnica` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `sym-maxsym-tl-508-2024-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `gasgas-sm-700-2024-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `pursang-e-track-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `can-am-pulse-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `yamaha-niken-gt-2025-ficha-tecnica-precio` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `peugeot-2008-2024-precio-ficha-tecnica` | blog-posts-prio-3.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `honda-cb1000-hornet-2024-ficha-tecnica-precio` | blog-posts-prio2-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `piaggio-beverly-400-2024-ficha-tecnica-precio` | blog-posts-prio2-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seal-u-dm-i-precio-ficha-tecnica` | blog-posts-prio2-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `silence-s01-ficha-tecnica-precio` | blog-posts-prio2-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `kawasaki-ninja-650-2024-ficha-tecnica-precio` | blog-posts-prio2-1.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `geely-record-ventas-2026-almussafes` | blog-posts-radar-20261018.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `byd-seagull-2027-carga-flash-9-minutos` | blog-posts-radar-20261019.ts | OK | OK | no | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `radical-sr1-xxr-2025-precio-ficha-tecnica` | blog-posts-radical-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/radical-sr1-xxr-2025-precio-ficha-tecnica-hero.webp` |
| `radical-sr3-xxr-2025-precio-ficha-tecnica` | blog-posts-radical-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/radical-sr3-xxr-2025-precio-ficha-tecnica-hero.webp` |
| `radical-sr10-xxr-2025-precio-ficha-tecnica` | blog-posts-radical-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/radical-sr10-xxr-2025-precio-ficha-tecnica-hero.webp` |
| `radical-rxc-2025-precio-ficha-tecnica` | blog-posts-radical-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/radical-rxc-2025-precio-ficha-tecnica-hero.webp` |
| `radical-rxc-spyder-2025-precio-ficha-tecnica` | blog-posts-radical-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/radical-rxc-spyder-2025-precio-ficha-tecnica-hero.webp` |
| `renault-clio-vi-2025-e-tech-160-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-clio-vi-2025-e-tech-160-precio-ficha-tecnica-hero.webp` |
| `renault-symbioz-2024-e-tech-145-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-symbioz-2024-e-tech-145-precio-ficha-tecnica-hero.webp` |
| `renault-arkana-2024-e-tech-145-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-arkana-2024-e-tech-145-precio-ficha-tecnica-hero.webp` |
| `renault-arkana-2024-tce-140-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-arkana-2024-tce-140-precio-ficha-tecnica-hero.webp` |
| `renault-austral-2025-e-tech-200-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-austral-2025-e-tech-200-precio-ficha-tecnica-hero.webp` |
| `renault-austral-2025-mild-hybrid-150-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-austral-2025-mild-hybrid-150-precio-ficha-tecnica-hero.webp` |
| `renault-rafale-2024-e-tech-4x4-300-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-rafale-2024-e-tech-4x4-300-precio-ficha-tecnica-hero.webp` |
| `renault-rafale-2025-atelier-alpine-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-rafale-2025-atelier-alpine-precio-ficha-tecnica-hero.webp` |
| `renault-megane-e-tech-2026-precio-autonomia` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-megane-e-tech-2026-precio-autonomia-hero.webp` |
| `renault-kangoo-e-tech-combi-2024-precio-autonomia` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-kangoo-e-tech-combi-2024-precio-autonomia-hero.webp` |
| `renault-kangoo-2024-tce-130-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-kangoo-2024-tce-130-precio-ficha-tecnica-hero.webp` |
| `renault-5-e-tech-roland-garros-2025-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-5-e-tech-roland-garros-2025-precio-ficha-tecnica-hero.webp` |
| `renault-5-e-tech-52-kwh-2025-precio-autonomia` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-5-e-tech-52-kwh-2025-precio-autonomia-hero.webp` |
| `renault-4-e-tech-52-kwh-2025-precio-autonomia` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-4-e-tech-52-kwh-2025-precio-autonomia-hero.webp` |
| `renault-captur-2024-tce-90-precio-ficha-tecnica` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-captur-2024-tce-90-precio-ficha-tecnica-hero.webp` |
| `renault-scenic-e-tech-60-kwh-2024-precio-autonomia` | blog-posts-renault-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/renault-scenic-e-tech-60-kwh-2024-precio-autonomia-hero.webp` |
| `renault-5-e-tech-40-kwh-2025-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-5-e-tech-40-kwh-2025-precio-ficha-tecnica/renault-5-e-tech-40-kwh-2025-precio-ficha-tecnica-hero.webp |
| `renault-4-e-tech-40-kwh-2025-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-4-e-tech-40-kwh-2025-precio-ficha-tecnica/renault-4-e-tech-40-kwh-2025-precio-ficha-tecnica-hero.webp |
| `renault-scenic-e-tech-87-kwh-2025-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-scenic-e-tech-87-kwh-2025-precio-ficha-tecnica/renault-scenic-e-tech-87-kwh-2025-precio-ficha-tecnica-hero.webp |
| `renault-captur-e-tech-145-2024-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-captur-e-tech-145-2024-precio-ficha-tecnica/renault-captur-e-tech-145-2024-precio-ficha-tecnica-hero.webp |
| `renault-rafale-e-tech-200-2025-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-rafale-e-tech-200-2025-precio-ficha-tecnica/renault-rafale-e-tech-200-2025-precio-ficha-tecnica-hero.webp |
| `renault-kangoo-blue-dci-95-2024-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-kangoo-blue-dci-95-2024-precio-ficha-tecnica/renault-kangoo-blue-dci-95-2024-precio-ficha-tecnica-hero.webp |
| `renault-clio-vi-tce-115-2025-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-clio-vi-tce-115-2025-precio-ficha-tecnica/renault-clio-vi-tce-115-2025-precio-ficha-tecnica-hero.webp |
| `renault-megane-e-tech-40-kwh-2024-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-megane-e-tech-40-kwh-2024-precio-ficha-tecnica/renault-megane-e-tech-40-kwh-2024-precio-ficha-tecnica-hero.webp |
| `renault-austral-mild-hybrid-160-2024-precio-ficha-tecnica` | blog-posts-renault-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/renault-austral-mild-hybrid-160-2024-precio-ficha-tecnica/renault-austral-mild-hybrid-160-2024-precio-ficha-tecnica-hero.webp |
| `riddara-rd6-2025-precio-ficha-tecnica` | blog-posts-riddara-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/riddara-rd6-2025-precio-ficha-tecnica-hero.webp` |
| `riddara-rd6-em-p-2025-precio-ficha-tecnica` | blog-posts-riddara-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/riddara-rd6-em-p-2025-precio-ficha-tecnica-hero.webp` |
| `rising-r7-2025-precio-ficha-tecnica` | blog-posts-rising-auto-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rising-r7-2025-precio-ficha-tecnica-hero.webp` |
| `rising-f7-2025-precio-ficha-tecnica` | blog-posts-rising-auto-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rising-f7-2025-precio-ficha-tecnica-hero.webp` |
| `rising-rc7-2025-precio-ficha-tecnica` | blog-posts-rising-auto-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rising-rc7-2025-precio-ficha-tecnica-hero.webp` |
| `roewe-d7-ev-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-d7-ev-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-d7-dmh-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-d7-dmh-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-d5x-dmh-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-d5x-dmh-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-d6-2025-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-d6-2025-precio-ficha-tecnica-hero.webp` |
| `roewe-m7-dmh-2025-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-m7-dmh-2025-precio-ficha-tecnica-hero.webp` |
| `roewe-rx5-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-rx5-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-erx5-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-erx5-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-rx9-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-rx9-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-i5-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-i5-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-ei5-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-ei5-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-imax8-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-imax8-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-imax8-dmh-2024-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-imax8-dmh-2024-precio-ficha-tecnica-hero.webp` |
| `roewe-i6-2026-precio-ficha-tecnica` | blog-posts-roewe-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/roewe-i6-2026-precio-ficha-tecnica-hero.webp` |
| `roewe-jiayue-07-2026-precio-ficha-tecnica` | blog-posts-roewe-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `rolls-royce-phantom-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-phantom-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-phantom-extended-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-phantom-extended-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-ghost-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-ghost-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-ghost-extended-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-ghost-extended-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-cullinan-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-cullinan-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-cullinan-series-ii-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-cullinan-series-ii-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-spectre-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-spectre-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-spectre-series-ii-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/rolls-royce-spectre-series-ii-2026-precio-ficha-tecnica-hero.webp` |
| `rolls-royce-ghost-series-ii-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-ghost-series-ii-2026-precio-ficha-tecnica/rolls-royce-ghost-series-ii-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-ghost-extended-series-ii-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-ghost-extended-series-ii-2026-precio-ficha-tecnica/rolls-royce-ghost-extended-series-ii-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-ghost-black-badge-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-ghost-black-badge-2026-precio-ficha-tecnica/rolls-royce-ghost-black-badge-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-cullinan-black-badge-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-cullinan-black-badge-2026-precio-ficha-tecnica/rolls-royce-cullinan-black-badge-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-cullinan-series-ii-black-badge-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-cullinan-series-ii-black-badge-2026-precio-ficha-tecnica/rolls-royce-cullinan-series-ii-black-badge-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-spectre-black-badge-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-spectre-black-badge-2026-precio-ficha-tecnica/rolls-royce-spectre-black-badge-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-droptail-2024-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-droptail-2024-precio-ficha-tecnica/rolls-royce-droptail-2024-precio-ficha-tecnica-hero.webp |
| `rolls-royce-ghost-prism-2024-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-ghost-prism-2024-precio-ficha-tecnica/rolls-royce-ghost-prism-2024-precio-ficha-tecnica-hero.webp |
| `rolls-royce-phantom-series-ii-2026-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-phantom-series-ii-2026-precio-ficha-tecnica/rolls-royce-phantom-series-ii-2026-precio-ficha-tecnica-hero.webp |
| `rolls-royce-spectre-2024-precio-ficha-tecnica` | blog-posts-rolls-royce-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/rolls-royce-spectre-2024-precio-ficha-tecnica/rolls-royce-spectre-2024-precio-ficha-tecnica-hero.webp |
| `ofensiva-china-salon-paris-2026-20-marcas` | blog-posts-salon-paris-china-2026.ts | EXT | OK | sí | — |
| `renault-scenic-e-tech-lfp-67-kwh-2026-precio-autonomia` | blog-posts-scenic-lfp-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/renault-scenic-e-tech-lfp-67-kwh-2026-hero.webp` |
| `seat-leon-sportstourer-15-tsi-2025-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-leon-sportstourer-15-tsi-2025-precio-ficha-tecnica-hero.webp` |
| `seat-ibiza-10-tsi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-ibiza-10-tsi-2026-precio-ficha-tecnica-hero.webp` |
| `seat-arona-15-tsi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-arona-15-tsi-2026-precio-ficha-tecnica-hero.webp` |
| `seat-leon-15-etsi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-leon-15-etsi-2026-precio-ficha-tecnica-hero.webp` |
| `seat-leon-20-tdi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-leon-20-tdi-2026-precio-ficha-tecnica-hero.webp` |
| `seat-leon-15-ehybrid-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-leon-15-ehybrid-2026-precio-ficha-tecnica-hero.webp` |
| `seat-ateca-15-tsi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-ateca-15-tsi-2026-precio-ficha-tecnica-hero.webp` |
| `seat-ateca-20-tdi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/seat-ateca-20-tdi-2026-precio-ficha-tecnica-hero.webp` |
| `seat-ibiza-15-tsi-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-ibiza-15-tsi-2026-precio-ficha-tecnica/seat-ibiza-15-tsi-2026-precio-ficha-tecnica-hero.webp; contenido: ruta corregida seat-ibiza-15-tsi-2026-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/seat-ibiza-15-tsi-2026-precio-ficha-tecnica/seat-ibiza-15-tsi-2026-precio-ficha-tecnica-oficial.webp |
| `seat-arona-10-tsi-95-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-arona-10-tsi-95-2026-precio-ficha-tecnica/seat-arona-10-tsi-95-2026-precio-ficha-tecnica-hero.webp; contenido: ruta corregida seat-arona-10-tsi-95-2026-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/seat-arona-10-tsi-95-2026-precio-ficha-tecnica/seat-arona-10-tsi-95-2026-precio-ficha-tecnica-oficial.webp |
| `seat-leon-15-tsi-115-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-15-tsi-115-2026-precio-ficha-tecnica/seat-leon-15-tsi-115-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-15-etsi-115-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-15-etsi-115-2026-precio-ficha-tecnica/seat-leon-15-etsi-115-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-20-tdi-115-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-20-tdi-115-2026-precio-ficha-tecnica/seat-leon-20-tdi-115-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica/seat-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-sportstourer-15-etsi-115-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-sportstourer-15-etsi-115-2026-precio-ficha-tecnica/seat-leon-sportstourer-15-etsi-115-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-sportstourer-15-etsi-150-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-sportstourer-15-etsi-150-2026-precio-ficha-tecnica/seat-leon-sportstourer-15-etsi-150-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-sportstourer-20-tdi-150-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-sportstourer-20-tdi-150-2026-precio-ficha-tecnica/seat-leon-sportstourer-20-tdi-150-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-sportstourer-20-tdi-115-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-sportstourer-20-tdi-115-2026-precio-ficha-tecnica/seat-leon-sportstourer-20-tdi-115-2026-precio-ficha-tecnica-hero.webp |
| `seat-leon-sportstourer-15-ehybrid-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-leon-sportstourer-15-ehybrid-2026-precio-ficha-tecnica/seat-leon-sportstourer-15-ehybrid-2026-precio-ficha-tecnica-hero.webp |
| `seat-ateca-20-tdi-115-2026-precio-ficha-tecnica` | blog-posts-seat-a.ts | OK | OK | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/seat-ateca-20-tdi-115-2026-precio-ficha-tecnica/seat-ateca-20-tdi-115-2026-precio-ficha-tecnica-hero.webp; contenido: ruta corregida seat-ateca-20-tdi-115-2026-precio-ficha-tecnica-oficial.webp -> /media/fotos-reales/seat-ateca-20-tdi-115-2026-precio-ficha-tecnica/seat-ateca-20-tdi-115-2026-precio-ficha-tecnica-oficial.webp |
| `skoda-elroq-85-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-elroq-85-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-elroq-rs-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-elroq-rs-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-enyaq-85-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-enyaq-85-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-enyaq-rs-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-enyaq-rs-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-enyaq-coupe-85-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-enyaq-coupe-85-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-enyaq-coupe-rs-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-enyaq-coupe-rs-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-octavia-rs-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-octavia-rs-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-octavia-combi-20-tdi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-octavia-combi-20-tdi-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-superb-combi-20-tdi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-superb-combi-20-tdi-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-superb-iv-hibrido-enchufable-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-superb-iv-hibrido-enchufable-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-superb-20-tdi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-superb-20-tdi-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-kodiaq-rs-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-kodiaq-rs-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-kodiaq-iv-hibrido-enchufable-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-kodiaq-iv-hibrido-enchufable-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-scala-10-tsi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-scala-10-tsi-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-epiq-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-epiq-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-fabia-monte-carlo-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/skoda-fabia-monte-carlo-2026-precio-ficha-tecnica-hero.webp` |
| `skoda-octavia-15-tsi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: skoda-octavia-15-tsi-2026-precio-ficha-tecnica) -> /media/fotos-reales/skoda-octavia-15-tsi-2026-precio-ficha-tecnica/skoda-octavia-15-tsi-2026-precio-ficha-tecnica-1.webp |
| `skoda-octavia-combi-15-tsi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/skoda-octavia-combi-15-tsi-2026-precio-ficha-tecnica/skoda-octavia-combi-15-tsi-2026-precio-ficha-tecnica-hero.webp |
| `skoda-superb-15-tsi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: skoda-superb-15-tsi-2026-precio-ficha-tecnica) -> /media/fotos-reales/skoda-superb-15-tsi-2026-precio-ficha-tecnica/skoda-superb-15-tsi-2026-precio-ficha-tecnica-1.webp |
| `skoda-kodiaq-20-tdi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/skoda-kodiaq-20-tdi-2026-precio-ficha-tecnica/skoda-kodiaq-20-tdi-2026-precio-ficha-tecnica-hero.webp |
| `skoda-kodiaq-15-tsi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/skoda-kodiaq-15-tsi-2026-precio-ficha-tecnica/skoda-kodiaq-15-tsi-2026-precio-ficha-tecnica-hero.webp |
| `skoda-kamiq-10-tsi-2025-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/skoda-kamiq-10-tsi-2025-precio-ficha-tecnica/skoda-kamiq-10-tsi-2025-precio-ficha-tecnica-hero.webp |
| `skoda-scala-15-tsi-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/skoda-scala-15-tsi-2026-precio-ficha-tecnica/skoda-scala-15-tsi-2026-precio-ficha-tecnica-hero.webp |
| `skoda-enyaq-60-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/skoda-enyaq-60-2026-precio-ficha-tecnica/skoda-enyaq-60-2026-precio-ficha-tecnica-hero.webp |
| `skoda-enyaq-coupe-60-2026-precio-ficha-tecnica` | blog-posts-skoda-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: skoda-enyaq-coupe-60-2026-precio-ficha-tecnica) -> /media/fotos-reales/skoda-enyaq-coupe-60-2026-precio-ficha-tecnica/skoda-enyaq-coupe-60-2026-precio-ficha-tecnica-1.webp |
| `smart-2-2026-precio-autonomia-paris` | blog-posts-smart-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `smart-3-2026-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: smart-3-2026-precio-ficha-tecnica) -> /media/fotos-reales/smart-3-2026-precio-ficha-tecnica/smart-3-2026-precio-ficha-tecnica-1.webp |
| `smart-3-brabus-2026-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: smart-3-brabus-2026-precio-ficha-tecnica) -> /media/fotos-reales/smart-3-brabus-2026-precio-ficha-tecnica/smart-3-brabus-2026-precio-ficha-tecnica-1.webp |
| `smart-1-pure-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-pure-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-pure-2025-precio-ficha-tecnica/smart-1-pure-2025-precio-ficha-tecnica-1.webp |
| `smart-1-pure-plus-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-pure-plus-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-pure-plus-2025-precio-ficha-tecnica/smart-1-pure-plus-2025-precio-ficha-tecnica-1.webp |
| `smart-1-pro-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-pro-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-pro-2025-precio-ficha-tecnica/smart-1-pro-2025-precio-ficha-tecnica-1.webp |
| `smart-1-pro-plus-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-pro-plus-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-pro-plus-2025-precio-ficha-tecnica/smart-1-pro-plus-2025-precio-ficha-tecnica-1.webp |
| `smart-1-premium-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-premium-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-premium-2025-precio-ficha-tecnica/smart-1-premium-2025-precio-ficha-tecnica-1.webp |
| `smart-1-pulse-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-pulse-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-pulse-2025-precio-ficha-tecnica/smart-1-pulse-2025-precio-ficha-tecnica-1.webp |
| `smart-1-brabus-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-1-brabus-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-1-brabus-2025-precio-ficha-tecnica/smart-1-brabus-2025-precio-ficha-tecnica-1.webp |
| `smart-3-pro-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-3-pro-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-3-pro-2025-precio-ficha-tecnica/smart-3-pro-2025-precio-ficha-tecnica-1.webp |
| `smart-3-pro-plus-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-3-pro-plus-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-3-pro-plus-2025-precio-ficha-tecnica/smart-3-pro-plus-2025-precio-ficha-tecnica-1.webp |
| `smart-5-pro-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-5-pro-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-5-pro-2025-precio-ficha-tecnica/smart-5-pro-2025-precio-ficha-tecnica-1.webp |
| `smart-5-pro-plus-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-5-pro-plus-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-5-pro-plus-2025-precio-ficha-tecnica/smart-5-pro-plus-2025-precio-ficha-tecnica-1.webp |
| `smart-5-premium-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-5-premium-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-5-premium-2025-precio-ficha-tecnica/smart-5-premium-2025-precio-ficha-tecnica-1.webp |
| `smart-5-pulse-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-5-pulse-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-5-pulse-2025-precio-ficha-tecnica/smart-5-pulse-2025-precio-ficha-tecnica-1.webp |
| `smart-5-summit-edition-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-5-summit-edition-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-5-summit-edition-2025-precio-ficha-tecnica/smart-5-summit-edition-2025-precio-ficha-tecnica-1.webp |
| `smart-5-brabus-2025-precio-ficha-tecnica` | blog-posts-smart-a.ts | OK | NO (1 rotas) | sí | hero: foto del modelo (stem del hero: smart-5-brabus-2025-precio-ficha-tecnica) -> /media/fotos-reales/smart-5-brabus-2025-precio-ficha-tecnica/smart-5-brabus-2025-precio-ficha-tecnica-1.webp |
| `byd-tang-l-2026-precio-ficha-tecnica` | blog-posts-solkuno-a.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo (la única coincidente era un placeholder idéntico para varios modelos) `/media/byd-tang-l-dron-dji-techo.webp` |
| `nio-es9-2026-precio-ficha-tecnica` | blog-posts-solkuno-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `lotus-eletre-r-plus-2026-precio-ficha-tecnica` | blog-posts-solkuno-a.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo (la única coincidente era un placeholder idéntico para varios modelos) `/media/lotus-eletre-r-plus.webp` |
| `stelato-s9-huawei-2026-precio-ficha-tecnica` | blog-posts-solkuno-b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `luxeed-r7-huawei-2026-precio-ficha-tecnica` | blog-posts-solkuno-b.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo (la única coincidente era un placeholder idéntico para varios modelos) `/media/luxeed-r7-huawei-suv-coupe.webp` |
| `onvo-l90-nio-2026-precio-ficha-tecnica` | blog-posts-solkuno-b.ts | NO | OK | sí | Imposible: sin foto disponible del modelo en el repo (la única coincidente era un placeholder idéntico para varios modelos) `/media/onvo-l90-nio-suv-familiar.webp` |
| `denza-n9-byd-2026-precio-ficha-tecnica` | blog-posts-solkuno-b.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `aito-m8-huawei-2026-precio-ficha-tecnica` | blog-posts-solkuno-c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `deepal-s09-2026-precio-ficha-tecnica` | blog-posts-solkuno-c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `im-ls9-2026-precio-ficha-tecnica` | blog-posts-solkuno-c.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stelato-s9-erev-2025-precio-ficha-tecnica` | blog-posts-stelato-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/stelato-s9-erev-2025-precio-ficha-tecnica-hero.webp` |
| `stelato-s9t-2026-precio-ficha-tecnica` | blog-posts-stelato-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/stelato-s9t-2026-precio-ficha-tecnica-hero.webp` |
| `stelato-s9t-erev-2026-precio-ficha-tecnica` | blog-posts-stelato-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/stelato-s9t-erev-2026-precio-ficha-tecnica-hero.webp` |
| `stelato-g9-2026-precio-ficha-tecnica` | blog-posts-stelato-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `stelato-g9-erev-2026-precio-ficha-tecnica` | blog-posts-stelato-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `subaru-forester-2025-precio-ficha-tecnica` | blog-posts-subaru-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/subaru-forester-2025-precio-ficha-tecnica-hero.webp` |
| `subaru-crosstrek-2025-precio-ficha-tecnica` | blog-posts-subaru-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/subaru-crosstrek-2025-precio-ficha-tecnica-hero.webp` |
| `subaru-solterra-2026-precio-ficha-tecnica` | blog-posts-subaru-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/subaru-solterra-2026-precio-ficha-tecnica-hero.webp` |
| `subaru-outback-2025-precio-ficha-tecnica` | blog-posts-subaru-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/subaru-outback-2025-precio-ficha-tecnica-hero.webp` |
| `subaru-uncharted-2026-precio-ficha-tecnica` | blog-posts-subaru-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/subaru-uncharted-2026-precio-ficha-tecnica-hero.webp` |
| `subaru-e-outback-2026-precio-ficha-tecnica` | blog-posts-subaru-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/subaru-e-outback-2026-precio-ficha-tecnica-hero.webp` |
| `subaru-solterra-trek-4wd-2026-precio-ficha-tecnica` | blog-posts-subaru-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/subaru-solterra-trek-4wd-2026-precio-ficha-tecnica/subaru-solterra-trek-4wd-2026-precio-ficha-tecnica-hero.webp |
| `subaru-uncharted-field-2026-precio-ficha-tecnica` | blog-posts-subaru-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/subaru-uncharted-field-2026-precio-ficha-tecnica/subaru-uncharted-field-2026-precio-ficha-tecnica-hero.webp |
| `subaru-uncharted-touring-2026-precio-ficha-tecnica` | blog-posts-subaru-a.ts | OK | NO (1 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/subaru-uncharted-touring-2026-precio-ficha-tecnica/subaru-uncharted-touring-2026-precio-ficha-tecnica-hero.webp |
| `suzuki-vitara-strong-hybrid-2025-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-vitara-strong-hybrid-2025-precio-ficha-tecnica-hero.webp` |
| `suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica-hero.webp` |
| `suzuki-s-cross-strong-hybrid-2025-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-s-cross-strong-hybrid-2025-precio-ficha-tecnica-hero.webp` |
| `suzuki-across-2025-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-across-2025-precio-ficha-tecnica-hero.webp` |
| `suzuki-swace-hybrid-2025-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-swace-hybrid-2025-precio-ficha-tecnica-hero.webp` |
| `suzuki-e-vitara-2025-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/suzuki-e-vitara-2025-precio-ficha-tecnica-hero.webp` |
| `suzuki-swift-sport-2024-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: suzuki-swift-sport-2024-precio-ficha-tecnica) -> /media/fotos-reales/suzuki-swift-sport-2024-precio-ficha-tecnica/suzuki-swift-sport-2024-precio-ficha-tecnica-1.webp |
| `suzuki-jimny-pro-2026-precio-ficha-tecnica` | blog-posts-suzuki-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: suzuki-jimny-pro-2026-precio-ficha-tecnica) -> /media/fotos-reales/suzuki-jimny-pro-2026-precio-ficha-tecnica/suzuki-jimny-pro-2026-precio-ficha-tecnica-1.webp |
| `tank-300-diesel-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-300-diesel-2025-precio-ficha-tecnica-hero.webp` |
| `tank-300-hi4-t-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-300-hi4-t-2025-precio-ficha-tecnica-hero.webp` |
| `tank-300-hev-2024-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-300-hev-2024-precio-ficha-tecnica-hero.webp` |
| `tank-300-2-0t-2024-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-300-2-0t-2024-precio-ficha-tecnica-hero.webp` |
| `tank-300-hooke-trail-2026-precio-ficha-tecnica` | blog-posts-tank-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `tank-400-hi4-t-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-400-hi4-t-2025-precio-ficha-tecnica-hero.webp` |
| `tank-400-hi4-z-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-400-hi4-z-2025-precio-ficha-tecnica-hero.webp` |
| `tank-500-3-0t-2024-precio-ficha-tecnica` | blog-posts-tank-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: tank-500-3-0t-2024-precio-ficha-tecnica) -> /media/tank-500-3-0t-2024-precio-ficha-tecnica-1.webp |
| `tank-500-hev-2024-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-500-hev-2024-precio-ficha-tecnica-hero.webp` |
| `tank-500-hi4-t-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-500-hi4-t-2025-precio-ficha-tecnica-hero.webp` |
| `tank-500-hi4-z-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-500-hi4-z-2025-precio-ficha-tecnica-hero.webp` |
| `tank-700-hi4-t-2024-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-700-hi4-t-2024-precio-ficha-tecnica-hero.webp` |
| `tank-700-lwb-hi4-z-2025-precio-ficha-tecnica` | blog-posts-tank-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tank-700-lwb-hi4-z-2025-precio-ficha-tecnica-hero.webp` |
| `tesla-model-3-performance-2025-precio-ficha-tecnica` | blog-posts-tesla-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tesla-model-3-performance-2025-precio-ficha-tecnica-hero.webp` |
| `tesla-model-3-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tesla-model-3-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica-hero.webp` |
| `tesla-model-y-performance-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | NO | NO (1 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tesla-model-y-performance-2026-precio-ficha-tecnica-hero.webp` |
| `tesla-model-y-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/tesla-model-y-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica-hero.webp` |
| `tesla-model-3-gran-autonomia-traccion-total-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: tesla-model-3-gran-autonomia-traccion-total-2026-precio-ficha-tecnica) -> /media/fotos-reales/tesla-model-3-gran-autonomia-traccion-total-2026-precio-ficha-tecnica/tesla-model-3-gran-autonomia-traccion-total-2026-precio-ficha-tecnica-1.webp |
| `tesla-model-y-standard-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: tesla-model-y-standard-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica) -> /media/fotos-reales/tesla-model-y-standard-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica/tesla-model-y-standard-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica-1.webp |
| `tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica) -> /media/fotos-reales/tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica/tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica-1.webp |
| `tesla-model-y-7-plazas-2026-precio-ficha-tecnica` | blog-posts-tesla-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: tesla-model-y-7-plazas-2026-precio-ficha-tecnica) -> /media/fotos-reales/tesla-model-y-7-plazas-2026-precio-ficha-tecnica/tesla-model-y-7-plazas-2026-precio-ficha-tecnica-1.webp |
| `toyota-corolla-touring-sports-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-corolla-touring-sports-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-c-hr-phev-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-c-hr-phev-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-gr-yaris-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-gr-yaris-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-aygo-x-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-aygo-x-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-bz4x-touring-2026-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-bz4x-touring-2026-precio-ficha-tecnica-hero.webp` |
| `toyota-rav4-phev-2026-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-rav4-phev-2026-precio-ficha-tecnica-hero.webp` |
| `toyota-corolla-berlina-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-corolla-berlina-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-proace-max-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-gr-supra-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-gr-supra-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-highlander-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-highlander-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-urban-cruiser-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-urban-cruiser-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-c-hr-plus-2026-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-c-hr-plus-2026-precio-ficha-tecnica-hero.webp` |
| `toyota-hilux-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-hilux-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-proace-city-verso-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-proace-city-verso-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-proace-verso-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-proace-verso-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-corolla-cross-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-corolla-cross-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-mirai-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/toyota-mirai-2025-precio-ficha-tecnica-hero.webp` |
| `toyota-yaris-130h-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-yaris-130h-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-yaris-130h-2025-precio-ficha-tecnica/toyota-yaris-130h-2025-precio-ficha-tecnica-1.webp |
| `toyota-rav4-hev-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-rav4-hev-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-rav4-hev-2025-precio-ficha-tecnica/toyota-rav4-hev-2025-precio-ficha-tecnica-1.webp |
| `toyota-prius-phev-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `toyota-aygo-x-hybrid-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-aygo-x-hybrid-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-aygo-x-hybrid-2025-precio-ficha-tecnica/toyota-aygo-x-hybrid-2025-precio-ficha-tecnica-1.webp |
| `toyota-c-hr-200h-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-c-hr-200h-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-c-hr-200h-2025-precio-ficha-tecnica/toyota-c-hr-200h-2025-precio-ficha-tecnica-1.webp |
| `toyota-hilux-mhev-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-hilux-mhev-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-hilux-mhev-2025-precio-ficha-tecnica/toyota-hilux-mhev-2025-precio-ficha-tecnica-1.webp |
| `toyota-proace-city-verso-electric-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-proace-city-verso-electric-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-proace-city-verso-electric-2025-precio-ficha-tecnica/toyota-proace-city-verso-electric-2025-precio-ficha-tecnica-1.webp |
| `toyota-corolla-cross-200h-2025-precio-ficha-tecnica` | blog-posts-toyota-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: toyota-corolla-cross-200h-2025-precio-ficha-tecnica) -> /media/fotos-reales/toyota-corolla-cross-200h-2025-precio-ficha-tecnica/toyota-corolla-cross-200h-2025-precio-ficha-tecnica-1.webp |
| `toyota-corolla-cross-2026-precio-restyling` | blog-posts-toyota-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `ue-china-freno-hibridos-enchufables` | blog-posts-ue-china-hibridos-2026.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/ue-china-hibridos-acuerdo-hero.webp` |
| `volkswagen-golf-8-2026-precio-ficha-tecnica` | blog-posts-vag-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-california-t7-2026-precio-ficha-tecnica` | blog-posts-vag-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id-buzz-2026-precio-ficha-tecnica` | blog-posts-vag-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id3-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id7-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id7-tourer-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-tiguan-2024-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volkswagen-tiguan-2024-precio-ficha-tecnica-hero.webp` |
| `volkswagen-touareg-2024-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volkswagen-touareg-2024-precio-ficha-tecnica-hero.webp` |
| `volkswagen-multivan-t7-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-caravelle-t7-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-transporter-t7-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volkswagen-transporter-t7-2026-precio-ficha-tecnica-hero.webp` |
| `volkswagen-caddy-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-gti-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-r-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-polo-gti-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volkswagen-polo-gti-2026-precio-ficha-tecnica-hero.webp` |
| `volkswagen-tayron-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volkswagen-tayron-2026-precio-ficha-tecnica-hero.webp` |
| `volkswagen-golf-15-etsi-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-variant-15-etsi-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-golf-gte-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-polo-10-tsi-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volkswagen-polo-10-tsi-2026-precio-ficha-tecnica) -> /media/fotos-reales/volkswagen-polo-10-tsi-2026-precio-ficha-tecnica/volkswagen-polo-10-tsi-2026-precio-ficha-tecnica-1.webp |
| `volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica) -> /media/fotos-reales/volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica/volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica-1.webp |
| `volkswagen-t-cross-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volkswagen-t-cross-2026-precio-ficha-tecnica) -> /media/fotos-reales/volkswagen-t-cross-2026-precio-ficha-tecnica/volkswagen-t-cross-2026-precio-ficha-tecnica-1.webp |
| `volkswagen-taigo-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volkswagen-taigo-2026-precio-ficha-tecnica) -> /media/fotos-reales/volkswagen-taigo-2026-precio-ficha-tecnica/volkswagen-taigo-2026-precio-ficha-tecnica-1.webp |
| `volkswagen-id3-gtx-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id4-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-id5-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volkswagen-passat-variant-20-tdi-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volkswagen-passat-variant-20-tdi-2026-precio-ficha-tecnica) -> /media/fotos-reales/volkswagen-passat-variant-20-tdi-2026-precio-ficha-tecnica/volkswagen-passat-variant-20-tdi-2026-precio-ficha-tecnica-1.webp |
| `volkswagen-tiguan-ehybrid-2026-precio-ficha-tecnica` | blog-posts-volkswagen-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volkswagen-tiguan-ehybrid-2026-precio-ficha-tecnica) -> /media/fotos-reales/volkswagen-tiguan-ehybrid-2026-precio-ficha-tecnica/volkswagen-tiguan-ehybrid-2026-precio-ficha-tecnica-1.webp |
| `volkswagen-id-tiguan-2026-precio-ficha-tecnica` | blog-posts-volkswagen-id-tiguan.ts | OK | NO (2 rotas) | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `volvo-ex90-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-ex90-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-es90-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-es90-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-ex60-2026-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-ex60-2026-precio-ficha-tecnica-hero.webp` |
| `volvo-ex60-cross-country-2026-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-ex60-cross-country-2026-precio-ficha-tecnica-hero.webp` |
| `volvo-ex30-cross-country-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-ex30-cross-country-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-ec40-2024-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-ec40-2024-precio-ficha-tecnica-hero.webp` |
| `volvo-ex40-2024-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-ex40-2024-precio-ficha-tecnica-hero.webp` |
| `volvo-xc60-b5-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-xc60-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-xc60-t8-2026-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-xc60-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-xc90-b5-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-xc90-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-xc90-t8-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-xc90-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-xc40-b3-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-xc40-b3-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-v60-b4-2024-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-v60-2024-precio-ficha-tecnica-hero.webp` |
| `volvo-v60-t6-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-v60-2024-precio-ficha-tecnica-hero.webp` |
| `volvo-v90-t6-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/volvo-v90-t6-2025-precio-ficha-tecnica-hero.webp` |
| `volvo-ex30-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-ex30-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-ex30-2025-precio-ficha-tecnica/volvo-ex30-2025-precio-ficha-tecnica-1.webp |
| `volvo-ex30-twin-motor-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-ex30-twin-motor-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-ex30-twin-motor-2025-precio-ficha-tecnica/volvo-ex30-twin-motor-2025-precio-ficha-tecnica-1.webp |
| `volvo-xc40-b5-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-xc40-b5-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-xc40-b5-2025-precio-ficha-tecnica/volvo-xc40-b5-2025-precio-ficha-tecnica-1.webp |
| `volvo-xc60-b6-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-xc60-b6-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-xc60-b6-2025-precio-ficha-tecnica/volvo-xc60-b6-2025-precio-ficha-tecnica-1.webp |
| `volvo-xc60-t6-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-xc60-t6-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-xc60-t6-2025-precio-ficha-tecnica/volvo-xc60-t6-2025-precio-ficha-tecnica-1.webp |
| `volvo-xc90-b6-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-xc90-b6-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-xc90-b6-2025-precio-ficha-tecnica/volvo-xc90-b6-2025-precio-ficha-tecnica-1.webp |
| `volvo-v60-b5-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-v60-b5-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-v60-b5-2025-precio-ficha-tecnica/volvo-v60-b5-2025-precio-ficha-tecnica-1.webp |
| `volvo-v60-t8-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-v60-t8-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-v60-t8-2025-precio-ficha-tecnica/volvo-v60-t8-2025-precio-ficha-tecnica-1.webp |
| `volvo-v60-cross-country-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-v60-cross-country-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-v60-cross-country-2025-precio-ficha-tecnica/volvo-v60-cross-country-2025-precio-ficha-tecnica-1.webp |
| `volvo-v90-b5-2025-precio-ficha-tecnica` | blog-posts-volvo-a.ts | OK | NO (2 rotas) | sí | hero: foto del modelo (stem del hero: volvo-v90-b5-2025-precio-ficha-tecnica) -> /media/fotos-reales/volvo-v90-b5-2025-precio-ficha-tecnica/volvo-v90-b5-2025-precio-ficha-tecnica-1.webp |
| `voyah-free-2025-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-free-2025-precio-ficha-tecnica-hero.webp` |
| `voyah-free-erev-2025-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-free-erev-2025-precio-ficha-tecnica-hero.webp` |
| `voyah-passion-2024-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-passion-2024-precio-ficha-tecnica-hero.webp` |
| `voyah-passion-l-2026-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-passion-l-2026-precio-ficha-tecnica-hero.webp` |
| `voyah-passion-s-2026-precio-ficha-tecnica` | blog-posts-voyah-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `voyah-courage-2024-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-courage-2024-precio-ficha-tecnica-hero.webp` |
| `voyah-courage-awd-2024-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-courage-awd-2024-precio-ficha-tecnica-hero.webp` |
| `voyah-courage-109kwh-2025-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-courage-109kwh-2025-precio-ficha-tecnica-hero.webp` |
| `voyah-taishan-2026-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-taishan-2026-precio-ficha-tecnica-hero.webp` |
| `voyah-dream-9-2026-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-dream-9-2026-precio-ficha-tecnica-hero.webp` |
| `voyah-dream-9-phev-2026-precio-ficha-tecnica` | blog-posts-voyah-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/voyah-dream-9-phev-2026-precio-ficha-tecnica-hero.webp` |
| `wey-03-2024-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-03-2024-precio-ficha-tecnica-hero.webp` |
| `wey-05-2024-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-05-2024-precio-ficha-tecnica-hero.webp` |
| `wey-07-2024-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-07-2024-precio-ficha-tecnica-hero.webp` |
| `wey-gaoshan-7-2025-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-gaoshan-7-2025-precio-ficha-tecnica-hero.webp` |
| `wey-gaoshan-8-2025-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-gaoshan-8-2025-precio-ficha-tecnica-hero.webp` |
| `wey-gaoshan-9-2025-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-gaoshan-9-2025-precio-ficha-tecnica-hero.webp` |
| `wey-v8x-2026-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-v8x-2026-precio-ficha-tecnica-hero.webp` |
| `wey-v9x-2026-precio-ficha-tecnica` | blog-posts-wey-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wey-v9x-2026-precio-ficha-tecnica-hero.webp` |
| `wiesmann-project-thunderball-2025-precio-ficha-tecnica` | blog-posts-wiesmann-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wiesmann-project-thunderball-2025-precio-ficha-tecnica-hero.webp` |
| `wuling-hongguang-mini-ev-2025-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-hongguang-mini-ev-2025-precio-ficha-tecnica-hero.webp` |
| `wuling-air-ev-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-air-ev-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-bingo-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-bingo-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-bingo-plus-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-bingo-plus-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-cloud-ev-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-cloud-ev-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-starlight-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-starlight-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-starlight-ev-2025-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-starlight-ev-2025-precio-ficha-tecnica-hero.webp` |
| `wuling-starlight-s-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-starlight-s-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-starlight-s-ev-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-starlight-s-ev-2024-precio-ficha-tecnica-hero.webp` |
| `wuling-starlight-730-2025-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-starlight-730-2025-precio-ficha-tecnica-hero.webp` |
| `wuling-starlight-730-ev-2025-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-starlight-730-ev-2025-precio-ficha-tecnica-hero.webp` |
| `wuling-zhiguang-ev-2025-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-zhiguang-ev-2025-precio-ficha-tecnica-hero.webp` |
| `wuling-yangguang-ev-2024-precio-ficha-tecnica` | blog-posts-wuling-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/wuling-yangguang-ev-2024-precio-ficha-tecnica-hero.webp` |
| `xiaomi-su7-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-su7-2026-precio-ficha-tecnica-hero.webp` |
| `xiaomi-su7-pro-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-su7-pro-2026-precio-ficha-tecnica-hero.webp` |
| `xiaomi-su7-max-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-su7-max-2026-precio-ficha-tecnica-hero.webp` |
| `xiaomi-su7-ultra-2025-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-su7-ultra-2025-precio-ficha-tecnica-hero.webp` |
| `xiaomi-yu7-pro-2025-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-yu7-pro-2025-precio-ficha-tecnica-hero.webp` |
| `xiaomi-yu7-max-2025-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `xiaomi-skynomad-n70-pro-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-skynomad-n70-pro-2026-precio-ficha-tecnica-hero.webp` |
| `xiaomi-skynomad-n70-max-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-skynomad-n70-max-2026-precio-ficha-tecnica-hero.webp` |
| `xiaomi-skynomad-n90-max-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-skynomad-n90-max-2026-precio-ficha-tecnica-hero.webp` |
| `xiaomi-skynomad-n90-max-explorer-2026-precio-ficha-tecnica` | blog-posts-xiaomi-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xiaomi-skynomad-n90-max-explorer-2026-precio-ficha-tecnica-hero.webp` |
| `xpeng-g9-2026-restyling-precio-espana` | blog-posts-xpeng-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xpeng-g9-2026-restyling-precio-espana-hero.webp` |
| `xpeng-x9-2026-precio-europa` | blog-posts-xpeng-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xpeng-x9-2026-precio-europa-hero.webp` |
| `xpeng-p7-2024-precio-ficha-tecnica` | blog-posts-xpeng-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/xpeng-p7-2024-precio-ficha-tecnica-hero.webp` |
| `xpeng-g6-2025-precio-espana` | blog-posts-xpeng-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/xpeng-g6-2025-precio-espana/xpeng-g6-2025-precio-espana-hero.webp |
| `xpeng-g9-2024-precio-espana` | blog-posts-xpeng-a.ts | OK | NO (2 rotas) | sí | hero: ruta corregida (mismo fichero en otra carpeta) -> /media/fotos-reales/xpeng-g9-2024-precio-espana/xpeng-g9-2024-precio-espana-hero.webp |
| `yangwang-u8-2024-precio-ficha-tecnica` | blog-posts-yangwang-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yangwang-u8-2024-precio-ficha-tecnica-hero.webp` |
| `yangwang-u8l-2025-precio-ficha-tecnica` | blog-posts-yangwang-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yangwang-u8l-2025-precio-ficha-tecnica-hero.webp` |
| `yangwang-u9-2024-precio-ficha-tecnica` | blog-posts-yangwang-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yangwang-u9-2024-precio-ficha-tecnica-hero.webp` |
| `yangwang-u9-xtreme-2025-precio-ficha-tecnica` | blog-posts-yangwang-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yangwang-u9-xtreme-2025-precio-ficha-tecnica-hero.webp` |
| `yangwang-u7-2025-precio-ficha-tecnica` | blog-posts-yangwang-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yangwang-u7-2025-precio-ficha-tecnica-hero.webp` |
| `yangwang-u7-phev-2026-precio-ficha-tecnica` | blog-posts-yangwang-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/yangwang-u7-phev-2026-precio-ficha-tecnica-hero.webp` |
| `zeekr-001-2024-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-001-2024-precio-ficha-tecnica-hero.webp` |
| `zeekr-001-fr-2024-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-001-fr-2024-precio-ficha-tecnica-hero.webp` |
| `zeekr-007-2025-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-007-2025-precio-ficha-tecnica-hero.webp` |
| `zeekr-007-gt-2026-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-007-gt-2026-precio-ficha-tecnica-hero.webp` |
| `zeekr-7x-2025-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-7x-2025-precio-ficha-tecnica-hero.webp` |
| `zeekr-x-2024-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-x-2024-precio-ficha-tecnica-hero.webp` |
| `zeekr-009-2026-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-009-2026-precio-ficha-tecnica-hero.webp` |
| `zeekr-009-grand-2024-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | OK | OK | sí | Sin foto disponible en el pase de corrección; el hero verifica OK en el estado final |
| `zeekr-8x-2026-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-8x-2026-precio-ficha-tecnica-hero.webp` |
| `zeekr-mix-2025-precio-ficha-tecnica` | blog-posts-zeekr-a.ts | NO | NO (2 rotas) | no | Imposible: sin foto disponible del modelo en el repo `/media/zeekr-mix-2025-precio-ficha-tecnica-hero.webp` |
| `zontes-552g-531cc-homologacion-china` | blog-posts-zontes-552g.ts | NO | NO (1 rotas) | sí | Imposible: sin foto disponible del modelo en el repo `/media/motos/zontes-552g-2027-ficha-tecnica-precio-1.webp` |
| `accesorios-caravana-autocaravana-virales-gadgets-chinos-2026` | blog-posts-accesorios.ts [rama origin/merlin-blogs-accesorios — no en main] | NO | NO (26 rotas) | — | — `\"https://whatsupdownunder.com.au/wp-content/uploads/2026/02/starlink-mini-caravan-outfit-hero.webp\"` |
| `accesorios-patinete-electrico-silla-bebe-gadgets-2026` | blog-posts-accesorios.ts [rama origin/merlin-blogs-accesorios — no en main] | NO | NO (16 rotas) | — | — `\"https://www.bfgcdn.com/600_600_90/870-2965/m-wave-atlas-k-11-usb-set-fietslampenset.jpg\"` |
