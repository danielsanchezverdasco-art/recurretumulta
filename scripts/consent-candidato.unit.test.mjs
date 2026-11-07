/**
 * UNITARIO. Señales falsas. No llama a Google, no abre el dominio y no lee
 * cookies ni tokens. Ejecuta el stub de index.html y public/js/rtm-consent.js
 * del candidato en un DOM de mentira.
 */
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const root = new URL("..", import.meta.url);
const html = readFileSync(new URL("index.html", root), "utf8");
const consentSrc = readFileSync(new URL("public/js/rtm-consent.js", root), "utf8");
const marcaStub = "window.__rtmLoadAds = loadAds;";
const finStub = html.indexOf(marcaStub);
const iniStub = html.lastIndexOf("(function () {", finStub);
const stub = html.slice(iniStub, html.indexOf("})();", finStub) + "})();".length);

function nodo(etiqueta) {
  return {
    etiqueta,
    id: "",
    style: {},
    attrs: {},
    children: [],
    parentNode: null,
    textContent: "",
    listeners: {},
    setAttribute(k, v) {
      this.attrs[k] = v;
      if (k === "id") this.id = v;
    },
    appendChild(hijo) {
      hijo.parentNode = this;
      this.children.push(hijo);
      return hijo;
    },
    removeChild(hijo) {
      this.children = this.children.filter((n) => n !== hijo);
      hijo.parentNode = null;
    },
    addEventListener(tipo, fn) {
      this.listeners[tipo] = fn;
    },
  };
}

function buscar(nodoRaiz, pred) {
  if (pred(nodoRaiz)) return nodoRaiz;
  for (const hijo of nodoRaiz.children || []) {
    const hallado = buscar(hijo, pred);
    if (hallado) return hallado;
  }
  return null;
}

function arrancar({ tcf, storage } = {}) {
  const head = nodo("head");
  const body = nodo("body");
  const sandbox = {
    __PRERENDER__: false,
    document: {
      head,
      body,
      readyState: "complete",
      createElement: (etiqueta) => nodo(etiqueta),
      addEventListener() {},
      querySelector() {
        return null;
      },
    },
    localStorage: {
      getItem: (k) => (storage && k in storage ? storage[k] : null),
      setItem: (k, v) => {
        storage[k] = String(v);
      },
    },
    addEventListener() {},
    dataLayer: [],
  };
  sandbox.window = sandbox;
  sandbox.document.defaultView = sandbox;
  if (tcf) sandbox.__tcfapi = tcf;
  runInNewContext(`${stub}\n${consentSrc}`, sandbox);
  return sandbox;
}

function actualizaciones(sandbox) {
  return sandbox.dataLayer
    .map((item) => Array.from(item))
    .filter((a) => a[0] === "consent" && a[1] === "update");
}

function srcs(sandbox) {
  return sandbox.document.head.children.map((n) => n.src).filter(Boolean);
}

describe("UNITARIO consentimiento candidato, señales falsas", () => {
  it("un TCF useractioncomplete con fines aceptados no concede anuncios ni analítica", () => {
    const escuchas = [];
    const sandbox = arrancar({
      tcf(cmd, _ver, cb) {
        escuchas.push(cmd);
        if (cmd === "addEventListener") {
          cb({ eventStatus: "useractioncomplete", gdprApplies: true, purpose: { consents: { 1: true, 3: true, 4: true, 7: true } } }, true);
        }
      },
    });
    expect(escuchas).toContain("addEventListener");
    expect(actualizaciones(sandbox)).toEqual([]);
    expect(srcs(sandbox)).toEqual([]);
    expect(buscar(sandbox.document.body, (n) => n.id === "rtm-cookie-banner")).toBeNull();
  });

  it("la mera existencia de __tcfapi, o cmpuishown, no concede nada", () => {
    const soloApi = arrancar({ tcf() {} });
    expect(actualizaciones(soloApi)).toEqual([]);
    expect(buscar(soloApi.document.body, (n) => n.id === "rtm-cookie-banner")).toBeNull();

    const ui = arrancar({
      tcf(cmd, _ver, cb) {
        if (cmd === "addEventListener") cb({ eventStatus: "cmpuishown", gdprApplies: true }, true);
      },
    });
    expect(actualizaciones(ui)).toEqual([]);
    expect(srcs(ui)).toEqual([]);
  });

  it("el banner propio concede analítica y deja los anuncios denegados", () => {
    const sandbox = arrancar();
    const boton = buscar(sandbox.document.body, (n) => n.textContent === "Aceptar analítica");
    expect(boton).not.toBeNull();
    boton.listeners.click();
    expect(actualizaciones(sandbox)).toEqual([
      ["consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }],
    ]);
    expect(srcs(sandbox)).toEqual(["https://www.googletagmanager.com/gtag/js?id=G-NQD5QTRJPH"]);
  });

  it("un consent update falso con ad_storage granted es lo único que inserta adsbygoogle.js", () => {
    const sandbox = arrancar();
    sandbox.gtag("consent", "update", { ad_storage: "denied", analytics_storage: "denied" });
    expect(srcs(sandbox)).toEqual([]);
    sandbox.gtag("consent", "update", { ad_storage: "granted" });
    expect(srcs(sandbox)).toContain("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4234009516943468");
  });

  const ENUM = { UNKNOWN: 0, GRANTED: 1, DENIED: 2, NOT_APPLICABLE: 3, NOT_CONFIGURED: 4 };

  function modo(parcial) {
    return {
      adStoragePurposeConsentStatus: ENUM.NOT_CONFIGURED,
      adUserDataPurposeConsentStatus: ENUM.NOT_CONFIGURED,
      adPersonalizationPurposeConsentStatus: ENUM.NOT_CONFIGURED,
      analyticsStoragePurposeConsentStatus: ENUM.NOT_CONFIGURED,
      ...parcial,
    };
  }

  function disparar(sandbox, valores, enumExtra) {
    sandbox.googlefc.getGoogleConsentModeValues = () => valores;
    sandbox.googlefc.ConsentModePurposeStatusEnum = enumExtra || ENUM;
    const item = sandbox.googlefc.callbackQueue.find((x) => x && typeof x.CONSENT_MODE_DATA_READY === "function");
    expect(item).toBeTruthy();
    item.CONSENT_MODE_DATA_READY();
  }

  it("UNITARIO: anuncios GRANTED y analítica NOT_CONFIGURED conceden solo anuncios", () => {
    const sandbox = arrancar();
    disparar(sandbox, modo({
      adStoragePurposeConsentStatus: ENUM.GRANTED,
      adUserDataPurposeConsentStatus: ENUM.GRANTED,
      adPersonalizationPurposeConsentStatus: ENUM.DENIED,
    }));
    expect(actualizaciones(sandbox)).toEqual([
      ["consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "denied",
        analytics_storage: "denied",
      }],
    ]);
    expect(srcs(sandbox)).toEqual([
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4234009516943468",
    ]);
  });

  it("UNITARIO: los cuatro NOT_CONFIGURED quedan denied y no cargan anuncios", () => {
    const sandbox = arrancar();
    disparar(sandbox, modo({}));
    expect(actualizaciones(sandbox)[0][2]).toEqual({
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    expect(srcs(sandbox)).toEqual([]);
  });

  it("UNITARIO: fines TCF aceptados no conceden si el enum sigue NOT_CONFIGURED", () => {
    let oir;
    const sandbox = arrancar({
      tcf(cmd, _ver, cb) {
        if (cmd === "addEventListener") oir = cb;
      },
    });
    const estado = modo({});
    sandbox.googlefc.getGoogleConsentModeValues = () => estado;
    sandbox.googlefc.ConsentModePurposeStatusEnum = ENUM;
    const tc = { eventStatus: "useractioncomplete", gdprApplies: true, purpose: { consents: { 1: true, 3: true, 4: true, 7: true } } };
    oir(tc, true);
    expect(actualizaciones(sandbox).at(-1)[2].ad_storage).toBe("denied");
    expect(actualizaciones(sandbox).at(-1)[2].analytics_storage).toBe("denied");
    estado.adStoragePurposeConsentStatus = ENUM.GRANTED;
    estado.adUserDataPurposeConsentStatus = ENUM.GRANTED;
    oir(tc, true);
    expect(actualizaciones(sandbox).at(-1)[2].ad_storage).toBe("granted");
    expect(actualizaciones(sandbox).at(-1)[2].analytics_storage).toBe("denied");
    estado.adStoragePurposeConsentStatus = ENUM.DENIED;
    estado.adUserDataPurposeConsentStatus = ENUM.DENIED;
    oir(tc, true);
    expect(actualizaciones(sandbox).at(-1)[2].ad_storage).toBe("denied");
    expect(srcs(sandbox).some((s) => s.includes("googletagmanager.com"))).toBe(false);
  });

  it("UNITARIO: UNKNOWN no escribe; una revocación posterior pasa de granted a denied", () => {
    const sandbox = arrancar();
    const antes = actualizaciones(sandbox).length;
    disparar(sandbox, modo({ adStoragePurposeConsentStatus: ENUM.UNKNOWN }));
    expect(actualizaciones(sandbox)).toHaveLength(antes);
    const estado = modo({
      adStoragePurposeConsentStatus: ENUM.GRANTED,
      adUserDataPurposeConsentStatus: ENUM.GRANTED,
      adPersonalizationPurposeConsentStatus: ENUM.GRANTED,
    });
    disparar(sandbox, estado);
    estado.adStoragePurposeConsentStatus = ENUM.DENIED;
    estado.adUserDataPurposeConsentStatus = ENUM.DENIED;
    estado.adPersonalizationPurposeConsentStatus = ENUM.DENIED;
    disparar(sandbox, estado);
    const ups = actualizaciones(sandbox);
    expect(ups.at(-2)[2].ad_storage).toBe("granted");
    expect(ups.at(-1)[2].ad_storage).toBe("denied");
    expect(ups.at(-1)[2].analytics_storage).toBe("denied");
  });

  it("UNITARIO: NOT_APPLICABLE no se traduce a granted", () => {
    const sandbox = arrancar();
    disparar(sandbox, modo({
      adStoragePurposeConsentStatus: ENUM.NOT_APPLICABLE,
      analyticsStoragePurposeConsentStatus: ENUM.NOT_APPLICABLE,
    }));
    expect(actualizaciones(sandbox)[0][2].ad_storage).toBe("denied");
    expect(actualizaciones(sandbox)[0][2].analytics_storage).toBe("denied");
    expect(srcs(sandbox)).toEqual([]);
  });

  it("una aceptación vieja del banner concede analítica aunque ahora exista __tcfapi; sigue sin conceder anuncios", () => {
    const storage = { rtm_consent_v1: JSON.stringify({ an: 1, ad: 0, t: Date.now() }) };
    const sandbox = arrancar({ storage, tcf() {} });
    expect(actualizaciones(sandbox)).toEqual([
      ["consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }],
    ]);
    expect(srcs(sandbox).some((s) => s.includes("adsbygoogle.js"))).toBe(false);
    expect(buscar(sandbox.document.body, (n) => n.id === "rtm-cookie-banner")).toBeNull();
  });
});
