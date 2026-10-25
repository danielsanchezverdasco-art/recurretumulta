# Registro de publicaciones propias de Facebook para la cosecha de reseñas

El cosechador (`scripts/cosechar-fb-resenas.mjs`) lee los comentarios de las
publicaciones de fichas que publicamos en grupos de Facebook y los mete en la
cola de moderación (`/moderar-resenas`). **Nunca auto-publica.**

## Formato de `fb-ficha-posts.json`

Array de objetos (JSON puro, sin comentarios):

```json
[
  {
    "post": "123456789012345",
    "tipo": "motos",
    "slug": "yamaha-mt-07-2024-ficha-tecnica-precio",
    "nombreVehiculo": "Yamaha MT-07"
  }
]
```

- `post`: **post-id** de la publicación (numérico o formato `pfbid02…`).
  También se acepta el permalink (`https://www.facebook.com/…`): el script lo
  resuelve a post-id con `facebook-cli post read --url`.
- `tipo`: `coches` | `motos` | `patinetes` (el segmento de la URL de la ficha).
- `slug`: slug de la ficha en la web (el de `/motos/<slug>`).
- `nombreVehiculo`: nombre para mostrar (opcional; por defecto el slug).

## Cómo conseguir el post-id

Tras publicar la ficha en el grupo, ejecuta:

```
facebook-cli post read --url '<permalink de la publicación>'
```

y copia el `id` de la respuesta.

## Ejecución

```
MODERACION_CLAVE='...' CONVEX_DEPLOY_KEY='...' node scripts/cosechar-fb-resenas.mjs
```

- Las claves van **por entorno, nunca en ficheros**.
- `MODERACION_CLAVE` debe coincidir con la env Convex (`npx convex env set MODERACION_CLAVE=...`).
- Watermark por post en `hidden_files/fb-cosecha-watermark.json` (persistente:
  **nunca** en `/tmp`, que se vacía con los reinicios).
- Log de cada ejecución en `hidden_files/fb-cosecha-YYYY-MM-DD.log`.

## Límites (importantes)

- **Solo publicaciones propias** listadas aquí. Nada de barridos masivos:
  el skill `facebook-cli` lo prohíbe y Facebook puede limitar la cuenta que
  usamos para la campaña de fichas.
- Se saltan los comentarios de la propia cuenta y los de menos de 15 caracteres.
- **Las fotos de los comentarios NO las expone el CLI** (la respuesta no trae
  campo de adjuntos): si un comentario trae foto, se importa a mano desde la
  pestaña "Importar" de `/moderar-resenas`.
- Todo lo cosechado entra en estado `pendiente`: hay que aprobarlo a mano.
  Las fotos con caras o matrículas visibles se revisan una a una (o se pide
  permiso respondiendo en el propio hilo de Facebook).
