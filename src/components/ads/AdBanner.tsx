// Componente AdSense — inyecta el script y los slots de Google AdSense
// Pasos para activar:
//  1. Cuando AdSense apruebe tu cuenta, ve a Ajustes > Secretos en el App Builder
//  2. Añade VITE_ADSENSE_PUBLISHER_ID = ca-pub-XXXXXXXXXXXXXXXX
//  3. Añade VITE_ADSENSE_SLOT_HORIZONTAL, VITE_ADSENSE_SLOT_RECTANGLE, VITE_ADSENSE_SLOT_AUTO
//     con los IDs de cada unidad de anuncio que crees en tu panel de AdSense
//  4. Republica la app

import { useEffect, useRef } from "react";

// Publisher ID de AdSense — añadir en Secretos como VITE_ADSENSE_PUBLISHER_ID
const ADSENSE_PUBLISHER_ID = import.meta.env.VITE_ADSENSE_PUBLISHER_ID ?? "";

// Slots de anuncio predefinidos para usar en toda la app
// Añadir en Secretos con los IDs reales de tu panel AdSense
export const AD_SLOTS = {
  /** Banner horizontal (728×90 o responsive) — entre secciones en páginas largas */
  horizontal: import.meta.env.VITE_ADSENSE_SLOT_HORIZONTAL ?? "0000000001",
  /** Rectángulo (300×250) — sidebar, entre artículos */
  rectangle: import.meta.env.VITE_ADSENSE_SLOT_RECTANGLE ?? "0000000002",
  /** Auto-responsive — adaptable a cualquier contenedor */
  auto: import.meta.env.VITE_ADSENSE_SLOT_AUTO ?? "0000000003",
} as const;

let scriptInjected = false;

// 13/10/2026 (PageSpeed): AdSense solo tras la primera interacción o cuando el navegador está ocioso (≥5 s).
let esperando = false;
function injectAdSenseScript() {
  if (scriptInjected || esperando || !ADSENSE_PUBLISHER_ID) return;
  esperando = true;
  const ev = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
  const ya = () => { ev.forEach((e) => window.removeEventListener(e, ya)); cargarAdSense(); };
  ev.forEach((e) => window.addEventListener(e, ya, { once: true, passive: true }));
  setTimeout(() => {
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    if (ric) ric(ya, { timeout: 10_000 }); else ya();
  }, 5000);
}
function cargarAdSense() {
  if (scriptInjected) return;
  if (location.pathname.startsWith("/juego-monos")) return;
  scriptInjected = true;
  // 14/10/2026: la etiqueta ya va en el <head> (index.html) para la revisión de AdSense.
  if (document.querySelector('script[src*="adsbygoogle.js"]')) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

type AdFormat = "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";

type AdBannerProps = {
  slotId: string;
  format?: AdFormat;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Slot de anuncio de display AdSense.
 * Uso: <AdBanner slotId="1234567890" format="auto" />
 * Reemplaza slotId con el ID de tu unidad de anuncio en AdSense.
 */
export default function AdBanner({ slotId, format = "auto", className = "", style }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!ADSENSE_PUBLISHER_ID) return;
    injectAdSenseScript();

    // Pequeño delay para que el script se cargue
    const timer = setTimeout(() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // Cola estándar: AdSense la procesa cuando el script (diferido) termina de cargar.
        const w = window as unknown as { adsbygoogle?: unknown[] };
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      } catch {
        // silencioso en dev
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Sin Publisher ID configurado (AdSense no está listo), no renderizar nada
  // en lugar de mostrar un hueco vacío de placeholder
  if (!ADSENSE_PUBLISHER_ID) {
    return null;
  }

  // Reserva de altura mínima: evita CLS cuando el anuncio carga (el <ins>
  // sin altura reservada empuja el contenido al pintarse).
  const minH = format === "horizontal" ? 90 : format === "rectangle" ? 250 : 120;
  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={{ display: "block", minHeight: minH, ...style }}
      data-ad-client={ADSENSE_PUBLISHER_ID}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
