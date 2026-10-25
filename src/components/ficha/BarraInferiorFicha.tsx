// 18/10/2026 (rediseño fichas): UNA barra inferior que sustituye al CTA fijo de
// comparar + la burbuja de WhatsApp (que tapaban contenido a 390 px). Aparece
// cuando se ha pasado la cabecera; deja hueco abajo para no tapar el final.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftRight, MessageCircle } from "lucide-react";
import { fmtEur } from "@/lib/formato.ts";

const WHATSAPP_HREF = "https://wa.me/34711292174?text=Hola%2C%20necesito%20ayuda%20con%20RecurreTuMulta.";

export default function BarraInferiorFicha({ compararHref, precio, aprox, mostrarTras = "ficha-cabecera" }: {
  compararHref: string;
  precio: number | null;
  aprox?: boolean;
  /** id del elemento tras el cual aparece la barra */
  mostrarTras?: string;
}) {
  const [ver, setVer] = useState(false);
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.getElementById(mostrarTras);
        const lim = el ? el.getBoundingClientRect().bottom + window.scrollY : 600;
        setVer(window.scrollY + 64 > lim);
      });
    };
    window.addEventListener("scroll", calc, { passive: true });
    calc();
    return () => { window.removeEventListener("scroll", calc); cancelAnimationFrame(raf); };
  }, [mostrarTras]);

  return (
    <>
      {/* hueco para que la barra nunca tape el último contenido */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <div
        className={`fixed inset-x-0 bottom-0 z-[65] border-t border-gray-200 bg-white/95 px-3 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 print:hidden lg:hidden ${ver ? "translate-y-0" : "translate-y-full"}`}
        aria-hidden={!ver}
      >
        <div className="mx-auto flex max-w-xl items-center gap-2">
          {precio != null && (
            <span className="shrink-0 text-sm font-black text-gray-900">{aprox && "≈"}{fmtEur(precio)}</span>
          )}
          <Link to={compararHref} tabIndex={ver ? 0 : -1} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-2.5 text-sm font-black text-white">
            <ArrowLeftRight className="h-4 w-4" /> Comparar
          </Link>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" tabIndex={ver ? 0 : -1} aria-label="Ayuda por WhatsApp"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
