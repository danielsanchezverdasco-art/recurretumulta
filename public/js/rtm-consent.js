/* Banner único (31/10/2026, recuperado y ampliado el 7/11).
   Consent Mode v2: el head deja todo denegado. Este fichero envía el update.
   Si Funding Choices pinta su diálogo, este banner no sale: un solo aviso.
   Si el mensaje de Google no aparece, aquí están aceptar, rechazar,
   preferencias, la elección guardada y el botón «Configurar cookies». */
(function () {
  if (window.__PRERENDER__ || window.__rtmConsent) return;
  window.__rtmConsent = true;
  var KEY = "rtm_consent_v1", MAXAGE = 180 * 24 * 3600 * 1000;
  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || "null");
      if (v && v.t && Date.now() - v.t < MAXAGE && ("an" in v || "a" in v)) return v;
    } catch (e) {}
    return null;
  }
  function save(an, ad) {
    try { localStorage.setItem(KEY, JSON.stringify({ an: an ? 1 : 0, ad: ad ? 1 : 0, t: Date.now() })); } catch (e) {}
  }
  function update(an, ad) {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: an ? "granted" : "denied",
      ad_storage: ad ? "granted" : "denied",
      ad_user_data: ad ? "granted" : "denied",
      ad_personalization: ad ? "granted" : "denied",
    });
    if (an && window.__rtmLoadGA) window.__rtmLoadGA();
    if (ad && window.__rtmLoadAds) window.__rtmLoadAds();
  }
  function fcActivo() {
    return !!document.querySelector(".fc-consent-root, .fc-dialog-container, .fc-choice-dialog");
  }
  var box = null;
  function close() { if (box && box.parentNode) box.parentNode.removeChild(box); box = null; }
  function choose(an, ad) { save(an, ad); update(an, ad); close(); }
  function btn(label, primary, fn) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.style.cssText = "cursor:pointer;border-radius:6px;padding:9px 16px;font:600 14px system-ui,sans-serif;min-height:40px;border:1px solid #111;" + (primary ? "background:#111;color:#fff;" : "background:#fff;color:#111;");
    b.addEventListener("click", fn);
    return b;
  }
  function show(prefs) {
    if (!document.body) return;
    close();
    if (!prefs && fcActivo()) return;
    box = document.createElement("div");
    box.id = "rtm-cookie-banner";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Aviso de cookies");
    box.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#fff;color:#111;border-top:1px solid #d4d4d8;box-shadow:0 -4px 16px rgba(0,0,0,.12);padding:14px 16px;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;";
    var inner = document.createElement("div");
    inner.style.cssText = "max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;";
    var p = document.createElement("p");
    p.style.cssText = "margin:0;flex:1 1 280px;";
    p.innerHTML = 'Medimos el uso con Google Analytics y mostramos anuncios con Google AdSense solo si lo aceptas. La web funciona igual si rechazas. <a href="/cookies/" style="color:#b91c1c">Política de cookies</a>.';
    var row = document.createElement("div");
    row.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;";
    if (!prefs) {
      row.appendChild(btn("Rechazar", false, function () { choose(false, false); }));
      row.appendChild(btn("Preferencias", false, function () { show(true); }));
      row.appendChild(btn("Aceptar", true, function () { choose(true, true); }));
    } else {
      var cur = read() || { an: 0, ad: 0 };
      function check(text, on) {
        var lab = document.createElement("label");
        lab.style.cssText = "display:flex;gap:6px;align-items:center;min-height:40px;";
        var c = document.createElement("input");
        c.type = "checkbox";
        c.checked = !!on;
        lab.appendChild(c);
        lab.appendChild(document.createTextNode(text));
        row.appendChild(lab);
        return c;
      }
      var an = check("Analítica", cur.an);
      var ad = check("Anuncios", cur.ad);
      row.appendChild(btn("Guardar", true, function () { choose(an.checked, ad.checked); }));
    }
    inner.appendChild(p);
    inner.appendChild(row);
    box.appendChild(inner);
    document.body.appendChild(box);
  }
  var prev = read();
  if (prev) update(!!(prev.an != null ? prev.an : prev.a), !!(prev.ad != null ? prev.ad : prev.a));
  function inicio() {
    if (prev || fcActivo()) return;
    show(false);
  }
  if (document.readyState === "complete") inicio();
  else window.addEventListener("load", inicio);
  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest("button,a") : null;
    if (!t || !/^\s*Configurar cookies\s*$/.test(t.textContent || "")) return;
    if (fcActivo()) return;
    e.preventDefault();
    e.stopPropagation();
    show(true);
  }, true);
})();
