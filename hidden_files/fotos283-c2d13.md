# Fotos 283 — trabajador c2d13

- Base: `origin/fotos-283-niky` en `83a99b8c0` (fotos283 coord4 lote 4), rama propia `fotos-283-niky-c2d13`.
- Comprobación previa: en `docs/comunicacion-ias/listas/fotos-283-niky.csv` de esa base, grep de `iscooter-i9` da 0 filas: ni `iscooter-i9` ni `iscooter-i9max` estaban entregados. Verificado dos veces (antes y después de que la base avanzara de `3164cdb35` a `83a99b8c0`).
- Entradas de datos (`src/lib/comparador-patinetes-base.ts`, rama base):
  - `iscooter-i9`: marca iScooter, modelo i9, 350 W nominal, 30 km, 12,5 kg, ruedas 8,5" tipo panal, `foto: "/media/patinetes/iscooter-i9.webp"`.
  - `iscooter-i9max`: marca iScooter, modelo i9Max, 500 W, 40 km, 16,3 kg, ruedas 10" tipo panal, doble suspensión, certificado DGT, `foto: "/media/patinetes/iscooter-i9max.webp"`.
  - Por eso cada hero lleva exactamente el nombre de `foto` (sin sufijo `-oficial`: en patinetes no hay campo `imagenOficial` distinto).
- Estado: ENTREGADOS los 2 (foto real, NO "sin foto real", NO IA).

## Filas para el CSV del coordinador

```
iscooter-i9|Tienda oficial iScooter UK (producto oficial, imagen destacada i9)|https://www.iscooterglobal.co.uk/products/iscooter-i9-electric-scooter-for-adults
iscooter-i9max|Tienda oficial iScooter UK (producto oficial, imagen destacada i9Max)|https://www.iscooterglobal.co.uk/products/iscooter-i9max-electric-scooter
```

## Ficheros entregados (public/media/patinetes/, todos WebP < 300 KB)

| Fichero | Tamaño (bytes) | Dimensiones | Contenido |
|---|---|---|---|
| `iscooter-i9.webp` | 56208 | 1000x1000 | Hero: iScooter i9 negro completo, tres cuartos, ruedas 8,5" tipo panal con aro rojo, app Tuya en inset y vista plegada en inset (sha256 `cc577b3f119045dbcc8625783168802217112118acd7ecf8d10490f73825c57d`) |
| `iscooter-i9max.webp` | 63314 | 1000x1000 | Hero: iScooter i9Max negro completo, tres cuartos, ruedas 10" tipo panal con aro naranja, doble suspensión delantera visible, app en inset y vista plegada en inset (sha256 `492b9c1dfd69bde38cd4e531c2f1b6add0c94ac59636feab5c3e9f42f1666603`) |

## Fuente de cada foto

- `iscooter-i9.webp`: imagen destacada (posición 1, `featured_image`) del producto oficial iScooter i9 en la tienda oficial iScooter UK.
  - Origen del fichero: `https://cdn.shopify.com/s/files/1/0605/4549/9286/files/i9_with_tuya_app.jpg?v=1769758989`
  - Página oficial: https://www.iscooterglobal.co.uk/products/iscooter-i9-electric-scooter-for-adults
  - Licencia: no verificada como libre; foto de producto del fabricante, uso editorial como el resto de fotos de prensa del proyecto. No se afirma CC ni dominio público.
- `iscooter-i9max.webp`: imagen destacada (posición 1, `featured_image`) del producto oficial iScooter i9Max en la tienda oficial iScooter UK.
  - Origen del fichero: `https://cdn.shopify.com/s/files/1/0605/4549/9286/files/i9MaxiScooterClubAPP.png?v=1785288477`
  - Página oficial: https://www.iscooterglobal.co.uk/products/iscooter-i9max-electric-scooter
  - Licencia: igual que arriba (fabricante, no libre verificada).

## Cómo se verificó que es el modelo exacto

- Verificación visual directa de ambas imágenes originales antes de convertir (y del WebP i9Max tras convertir; la reconversión tras el reinicio dio bytes idénticos, mismo sha256):
  - i9: patinete ligero de ruedas pequeñas (8,5") con aro rojo y sin la doble suspensión prominente del i9Max; coincide con los datos (350 W, 12,5 kg, 8,5" panal). NO es el i9 Pro ni el i10 (otros slugs distintos en datos).
  - i9Max: ruedas grandes (10") tipo panal con aro naranja, horquilla delantera con suspensión visible y trasera, display y freno de disco; coincide con los datos (500 W, 16,3 kg, 10" panal, doble suspensión, certificado DGT).
  - Descartados como hero otros candidatos oficiales por ser solo detalles: `i9Max.1494_1.jpg` (cierre de plegado), `13_….jpg` y `176.jpg` (detalles de manillar/rueda), y la foto de oferta del i9 (gráfica con texto de precio).
- Formato: `file` confirma WebP en ambos; 56.208 y 63.314 bytes, ambos < 300 KB. Sin marcas de agua prominentes (solo el logo iScooter propio del patinete y el inset de la app oficial).
- Sin IA: fotografías de producto del fabricante, con reflejos, texturas y distintivos coherentes.

## Incidencias (honestas, sin efecto en el resultado)

- El primer worktree `wt-fotos-c2d13` desapareció durante la tarea por una limpieza externa de disco; se recreó con el mismo nombre desde `origin/fotos-283-niky` (base actualizada a `83a99b8c0`) y se re-verificó el CSV.
- La VM se reinició a mitad de la tarea (uptime 2 min, `/tmp` vacío): los WebP se volvieron a descargar de las mismas URLs oficiales y a convertir con los mismos parámetros; los bytes resultantes son idénticos a los verificados antes del reinicio (mismo tamaño y mismo sha256 en i9Max).
- No se tocó `main` ni `fotos-283-niky`; no se publicó nada en Netlify. No se borra el worktree: lo limpia el coordinador tras consolidar.
- Solo se trabajaron estos 2 slugs; ningún otro slug tocado.
