# Estado del candidato `73906dbca`

Rama local `cursor/candidato-ramas-31ef`. No se ha hecho push: `netlify.toml` lanza `npm run build:full` en cualquier build de Netlify y no se puede garantizar que un push no lo dispare.

El respaldo no se ha movido: `/workspace` sigue en `dfddce39c` y `dist/assets/index-C31lVF6x.js` sigue ahí.

`CANDIDATO-LEDGER.jsonl` registra un intento de meter 954 merges limpios. Ese árbol no compilaba (claves duplicadas, `precio` donde el tipo exige `precioEur`, sintaxis rota). Se devolvió al commit `dfddce39c` y no forma parte de `73906dbca`. No es inclusión: es un intento revertido, con el motivo.

Lo que sí está en `73906dbca`: las fotos con licencia de `FOTOS-ANADIDAS-20261107.md` y el aviso único de cookies (`public/js/rtm-consent.js`), que se esconde si Funding Choices pinta el suyo. En el build de esta carpeta, la ficha de la MT-10 muestra la foto a 390 px después de cargar, y el aviso tiene Rechazar, Preferencias y Aceptar; tras rechazar no se piden anuncios y la elección sigue al recargar. No es el mensaje certificado de Google ni una aprobación de AdSense.
