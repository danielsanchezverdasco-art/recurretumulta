# Cotejo de patinetes, 7/11/2026

El tar está en `/home/ubuntu/recuperacion-patinetes-0711`. No se han copiado sus fotos al candidato. El prerender en curso no se ha tocado.

## Ya dentro de este HEAD

Estos commits son ancestros de `153ccacd0`. No se vuelven a aplicar.

- v6 `9e7836fc48`, v7 `5404e412f7`, v8 `baa43d1daa`, v9 `052b57ea19`
- v10 `125a1e0976` y su reversión `82d9289f53`, que devolvió las referencias hunt y no borró archivos

## No aplicado

v11 `5870428b12` no está en este repositorio. El diff quita imágenes del Acer ES Series 3 y recorta galerías hunt de `comparador-patinetes-exp-p12.ts`. Es un WIP sin validación. Aplicarlo desharía la reversión de v10. No se aplica.

## Fotos que no se presentan como autorizadas

La investigación del equipo no encontró permiso comercial para Cecotec Bongo/Vulcano, Blade Q, Gotrax G Pro ni Zero 9. En el candidato:

- Blade Q usa `/media/patinetes/teverun-blade-q-1.webp`. Blade Q Pro es otro id y otro archivo (`teverun-blade-q-pro-1.webp`). No se cambia uno por el otro.
- Gotrax G Pro y Zero 9 siguen con su archivo `-oficial.webp`. El crédito dice «prensa», no una licencia abierta. No entran en el registro de fotos verificadas.
- La foto `cecotec-vulcano-2025-ficha-tecnica-precio-1.webp` está en la ficha de la motocicleta Vulcano, no en un patinete Executive. No hay ficha Executive que la reuse.

## Sigue pendiente

Permiso comercial de esas fotos, certificados DGT que el CSV deja en null, y la auditoría de AdSense de todas las URLs. Esa auditoría es de solo lectura y queda para después de la publicación; ahora no hay preview ni publicación.
