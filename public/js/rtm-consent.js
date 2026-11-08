/* 05/11/2026: banner de consentimiento propio RETIRADO.
   El único mensaje de consentimiento de la web es el CMP certificado de Google
   (Funding Choices), que index.html carga de forma ejecutable en el <head>:
   es quien muestra el mensaje europeo, genera la cadena TCF y envía el
   'consent update' oficial. Este fichero queda vacío a propósito: el banner
   propio anterior (31/10/2026) se pintaba en lugar del de Google, no generaba
   cadena TCF alguna y el panel de AdSense contaba 0 mensajes mostrados.
   El botón «Configurar cookies» (pie de página y /cookies/) reabre el mensaje
   de Google con googlefc.showRevocationMessage() vía callbackQueue; ya no hay
   ningún interceptor que lo desvíe a un banner propio. Las claves antiguas de
   localStorage ('rtm_consent_v1') dejan de leerse: el consentimiento lo
   gestiona Google y se pide de nuevo con su mensaje. */
(function () { /* Sin banner propio: no-op deliberado. */ })();
