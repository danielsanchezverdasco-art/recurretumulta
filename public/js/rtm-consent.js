/* Banner de consentimiento propio (31/10/2026). Consent Mode v2: todo denegado por defecto (script inline del <head>);
   aquí solo se envía el 'consent update' según la elección del usuario. Si el CMP de Google (Funding Choices) llega a
   mostrar su propio mensaje, este banner no se muestra (sin duplicados). */
(function () {
  if (window.__PRERENDER__ || window.__rtmConsent) return;
  window.__rtmConsent = true;
  var KEY = 'rtm_consent_v1', MAXAGE = 180 * 24 * 3600 * 1000;
  function read() { try { var v = JSON.parse(localStorage.getItem(KEY) || 'null'); if (v && v.t && Date.now() - v.t < MAXAGE) return v; } catch (e) {} return null; }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify({ a: a ? 1 : 0, t: Date.now() })); } catch (e) {} }
  function update(a) {
    var s = a ? 'granted' : 'denied';
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { ad_storage: s, analytics_storage: s, ad_user_data: s, ad_personalization: s });
      if (a) { try { window.dataLayer.push({ event: 'rtm_consent_granted' }); } catch (e) {} if (window.__rtmLoadGA) window.__rtmLoadGA(); }
    }
  }
  function fcActivo() { return !!document.querySelector('.fc-consent-root, .fc-dialog-container, .fc-choice-dialog'); }
  var box = null;
  function close() { if (box && box.parentNode) box.parentNode.removeChild(box); box = null; }
  function choose(a) { save(a); update(a); close(); }
  function show() {
    if (box || !document.body) return;
    box = document.createElement('div');
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'false'); box.setAttribute('aria-label', 'Aviso de cookies'); box.id = 'rtm-cookie-banner';
    box.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#fff;color:#111;border-top:1px solid #d4d4d8;box-shadow:0 -4px 16px rgba(0,0,0,.12);padding:14px 16px;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;';
    var inner = document.createElement('div');
    inner.style.cssText = 'max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;';
    var p = document.createElement('p'); p.style.cssText = 'margin:0;flex:1 1 380px;';
    p.innerHTML = 'Usamos cookies para medir el uso de la web (Google Analytics) y para la publicidad (Google AdSense). Puedes aceptarlas o rechazarlas; la web funciona igual. Más información en la <a href="/cookies/" style="color:#b91c1c;text-decoration:underline">política de cookies</a>.';
    var row = document.createElement('div'); row.style.cssText = 'display:flex;gap:10px;flex:0 0 auto;';
    function btn(t, a) { var b = document.createElement('button'); b.type = 'button'; b.textContent = t; b.style.cssText = 'cursor:pointer;border-radius:6px;padding:9px 18px;font:600 14px system-ui,sans-serif;border:1px solid #111;background:#fff;color:#111;min-height:40px;'; b.addEventListener('click', function () { choose(a); }); return b; }
    var rej = btn('Rechazar', false), acc = btn('Aceptar', true);
    row.appendChild(rej); row.appendChild(acc); inner.appendChild(p); inner.appendChild(row); box.appendChild(inner); document.body.appendChild(box);
  }
  var prev = read();
  if (prev) update(!!prev.a);
  function inicio() {
    if (prev) return;
    /* 31/10/2026: el CMP de Google se carga en diferido (index.html). Se espera a que haya cargado
       (máx. 9 s) + 2,5 s antes de decidir si hace falta este banner, para no duplicar mensajes. */
    var t0 = Date.now(), tFc = 0;
    (function chequear() {
      if (window.__rtmFcListo && !tFc) tFc = Date.now();
      var espera = tFc ? Date.now() - tFc >= 2500 : Date.now() - t0 >= 9000;
      if (!espera) return setTimeout(chequear, 400);
      if (!fcActivo() && !read()) show();
    })();
  }
  if (document.readyState === 'complete') inicio(); else window.addEventListener('load', inicio);
  /* Botón «Configurar cookies» del pie: si no hay mensaje de Google, reabre este banner. */
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('button,a') : null;
    if (!t || !/^\s*Configurar cookies\s*$/.test(t.textContent || '')) return;
    if (fcActivo()) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); show();
  }, true);
})();
