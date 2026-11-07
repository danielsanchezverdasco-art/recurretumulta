/* Banner propio (31/10/2026, ajustado el 7/11).
   Solo Consent Mode de analítica. No crea una TC string ni activa AdSense.
   Si el CMP de Google expone __tcfapi, este aviso no compite con él.
   No se usa un temporizador ni el DOM para dar por hecho el consentimiento. */
(function () {
  if (window.__PRERENDER__ || window.__rtmConsent) return;
  window.__rtmConsent = true;
  var KEY = "rtm_consent_v1", MAXAGE = 180 * 24 * 3600 * 1000;
  var fcVisto = false;
  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || "null");
      if (v && v.t && Date.now() - v.t < MAXAGE && ("an" in v || "a" in v)) return v;
    } catch (e) {}
    return null;
  }
  function save(an) {
    try { localStorage.setItem(KEY, JSON.stringify({ an: an ? 1 : 0, ad: 0, t: Date.now() })); } catch (e) {}
  }
  function update(an) {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: an ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    if (an && window.__rtmLoadGA) window.__rtmLoadGA();
  }
  function numero(E, corto, largo, defecto) {
    if (E && typeof E[corto] === "number") return E[corto];
    if (E && typeof E[largo] === "number") return E[largo];
    return defecto;
  }
  /* Solo el enum de getGoogleConsentModeValues. GRANTED es 1.
     NOT_CONFIGURED (4), DENIED (2), NOT_APPLICABLE (3) y cualquier otro
     valor quedan denied. UNKNOWN (0) significa que aún no está listo:
     no se escribe ninguna concesión. No se leen los fines TCF. */
  function aplicarModo() {
    var fc = window.googlefc;
    if (!fc || typeof fc.getGoogleConsentModeValues !== "function" || typeof window.gtag !== "function") return;
    var st;
    try { st = fc.getGoogleConsentModeValues(); } catch (e) { return; }
    if (!st) return;
    var E = fc.ConsentModePurposeStatusEnum;
    var listo = numero(E, "UNKNOWN", "CONSENT_MODE_PURPOSE_STATUS_UNKNOWN", 0);
    var si = numero(E, "GRANTED", "CONSENT_MODE_PURPOSE_STATUS_GRANTED", 1);
    var vals = [
      st.adStoragePurposeConsentStatus,
      st.adUserDataPurposeConsentStatus,
      st.adPersonalizationPurposeConsentStatus,
      st.analyticsStoragePurposeConsentStatus,
    ];
    for (var i = 0; i < vals.length; i++) if (vals[i] === listo) return;
    function a(v) { return v === si ? "granted" : "denied"; }
    window.gtag("consent", "update", {
      ad_storage: a(st.adStoragePurposeConsentStatus),
      ad_user_data: a(st.adUserDataPurposeConsentStatus),
      ad_personalization: a(st.adPersonalizationPurposeConsentStatus),
      analytics_storage: a(st.analyticsStoragePurposeConsentStatus),
    });
  }
  function encolarModo() {
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    window.googlefc.callbackQueue.push({ CONSENT_MODE_DATA_READY: aplicarModo });
  }
  function oirTcf() {
    var api = window.__tcfapi;
    if (typeof api !== "function") return false;
    api("addEventListener", 2, function (tcData, ok) {
      if (!ok || !tcData) return;
      var st = tcData.eventStatus;
      if (st === "cmpuishown" || st === "tcloaded" || st === "useractioncomplete") {
        fcVisto = true;
        close();
      }
      if (st === "tcloaded" || st === "useractioncomplete") aplicarModo();
    });
    return true;
  }
  var box = null;
  function close() { if (box && box.parentNode) box.parentNode.removeChild(box); box = null; }
  function choose(an) { save(an); update(an); close(); }
  function btn(label, primary, fn) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.style.cssText = "cursor:pointer;border-radius:6px;padding:9px 16px;font:600 14px system-ui,sans-serif;min-height:40px;border:1px solid #111;" + (primary ? "background:#111;color:#fff;" : "background:#fff;color:#111;");
    b.addEventListener("click", fn);
    return b;
  }
  function show(prefs) {
    if (!document.body || fcVisto || typeof window.__tcfapi === "function") return;
    close();
    box = document.createElement("div");
    box.id = "rtm-cookie-banner";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Aviso de cookies");
    box.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#fff;color:#111;border-top:1px solid #d4d4d8;box-shadow:0 -4px 16px rgba(0,0,0,.12);padding:14px 16px;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;";
    var inner = document.createElement("div");
    inner.style.cssText = "max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;";
    var p = document.createElement("p");
    p.style.cssText = "margin:0;flex:1 1 280px;";
    p.innerHTML = 'Este aviso solo cubre la medición de la web. No activa anuncios: eso, si corresponde, lo pide el mensaje de Google. <a href="/cookies/" style="color:#b91c1c">Política de cookies</a>.';
    var row = document.createElement("div");
    row.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;";
    if (!prefs) {
      row.appendChild(btn("Rechazar", false, function () { choose(false); }));
      row.appendChild(btn("Aceptar analítica", true, function () { choose(true); }));
    } else {
      var cur = read() || { an: 0 };
      var lab = document.createElement("label");
      lab.style.cssText = "display:flex;gap:6px;align-items:center;min-height:40px;";
      var c = document.createElement("input");
      c.type = "checkbox";
      c.checked = !!(cur.an != null ? cur.an : cur.a);
      lab.appendChild(c);
      lab.appendChild(document.createTextNode("Analítica"));
      row.appendChild(lab);
      row.appendChild(btn("Guardar", true, function () { choose(c.checked); }));
    }
    inner.appendChild(p);
    inner.appendChild(row);
    box.appendChild(inner);
    document.body.appendChild(box);
  }
  var prev = read();
  if (prev) update(!!(prev.an != null ? prev.an : prev.a));
  function inicio() {
    encolarModo();
    oirTcf();
    if (prev || fcVisto || typeof window.__tcfapi === "function") return;
    show(false);
  }
  if (document.readyState === "complete") inicio();
  else window.addEventListener("load", inicio);
  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest("button,a") : null;
    if (!t || !/^\s*Configurar cookies\s*$/.test(t.textContent || "")) return;
    if (fcVisto || typeof window.__tcfapi === "function") return;
    e.preventDefault();
    e.stopPropagation();
    show(true);
  }, true);
})();
