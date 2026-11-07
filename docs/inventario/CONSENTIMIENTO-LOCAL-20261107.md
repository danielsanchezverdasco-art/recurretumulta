# Consentimiento, prueba local del 7/11/2026

No es un dictamen de cumplimiento legal. No se ha desplegado. Los nombres de cookies se citan sin su valor.

Paquete medido: `dist/` servido en `http://127.0.0.1:8099` con el bundle `index-C31lVF6x.js`, después de quitar la carga inmediata de Analytics y de AdSense. Sesión nueva de Chromium, idioma es-ES, zona Europe/Madrid. Sin proxy y sin credenciales.

## Qué se puede comprobar aquí

Antes de cualquier clic, en 390 px y en 1.366 px:

- `dataLayer` solo tiene `consent default` con `ad_storage`, `analytics_storage`, `ad_user_data` y `ad_personalization` en `denied`.
- `document.cookie` vacío. El tarro del navegador no tiene cookies de este sitio ni de terceros.
- No hay peticiones a `googletagmanager.com`, `google-analytics.com`, `pagead2.googlesyndication.com` ni `doubleclick.net`.
- Sí hay una petición a `fundingchoicesmessages.google.com`. Es el gestor de consentimiento, no el anuncio.
- El pie muestra «Configurar cookies», «Privacidad», «Términos», «Aviso Legal» y «Cookies». Ninguno queda tapado. El desborde es 0 en los dos anchos. `/privacidad/` abre con título «Política de Privacidad». `/cookies/` muestra el texto de la cookie DART y el botón «Configurar cookies».
- `localStorage` tiene la clave `cosa-cazador-id` (identificador del juego, puesto por `CazaMonosContext.tsx`). No es una cookie de analítica ni de anuncios.

Al inyectar en la consola un `gtag('consent','update', … granted)` —esto no es el botón de una persona— salen las peticiones de Analytics y de AdSense, y aparecen las cookies `_ga`, `_ga_NQD5QTRJPH` y `test_cookie` de DoubleClick. Al recargar sin repetir ese update, el `dataLayer` vuelve a `default` y no se vuelven a pedir esos scripts. Las cookies que el navegador ya guardó siguen en el tarro hasta que caduquen: este código no las borra.

## Qué no se puede comprobar aquí

Funding Choices carga y deja los marcos `googlefcPresent`, `googlefcLoaded` y `googlefcInactive`. No pinta «Aceptar» ni «Rechazar». Pulsar «Configurar cookies» llama a `googlefc.showRevocationMessage()` y no abre panel. El mensaje europeo depende del dominio publicado y de la red publicitaria; desde este entorno no aparece. Por eso no se ha podido, en local, rechazar todos, aceptar, guardar preferencias granulares, recargar y ver la elección persistida, ni revocarla desde el enlace. Eso queda para el dominio real, sin afirmar que el panel de AdSense cuente mensajes.

El banner propio se retiró el 5/11 a propósito (`public/js/rtm-consent.js` está vacío) para no tapar el mensaje de Google. No se ha vuelto a poner.
