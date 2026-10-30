// Footer reconstruido a partir del bundle de producción 6ac8e7ec.
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Camera, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import FirmaEditorial, { type EditorialProps } from "@/components/eeat/FirmaEditorial.tsx";

const LOGO_URL = "/media/logo-recurretumulta-sm.webp";
const L = "hover:text-red-600 underline decoration-gray-300 underline-offset-2 transition-colors";
const LI = `inline-flex items-center gap-1 ${L}`;

/**
 * E-E-A-T 17/10/2026: antes del <footer> se pinta el bloque de autoría, fechas,
 * «cómo verificamos», fuentes y herramientas (FirmaEditorial). Cada plantilla le
 * pasa sus datos en `editorial`; sin datos sale el bloque genérico (sin fechas).
 * `editorial={false}` lo quita (páginas legales, bajas, juegos).
 */
export default function SharedFooter({ editorial }: { editorial?: EditorialProps | false } = {}) {
  const { t } = useTranslation("common");
  const items = [
    <Link to="/blog/" className={L}>{t("nav.blog")} DGT</Link>,
    <Link to="/guias/" className={L}>Guías</Link>,
    <Link to="/provincias/" className={L}>52 {t("nav.provinces")}</Link>,
    <Link to="/provincias/" className={L}>Radares</Link>,
    <Link to="/herramientas/" className={L}>Herramientas</Link>,
    <Link to="/newsletter/" className={L}>Newsletter</Link>,
    <Link to="/glosario-multa/" className={L}>Glosario</Link>,
    <Link to="/explorar-por-marca/" className={L}>Explorar por marca</Link>,
    <Link to="/metodologia/" className={L}>Metodología</Link>,
    <Link to="/politica-editorial/" className={L}>Política editorial</Link>,
    <Link to="/sobre-nosotros/" className={L}>Quiénes somos</Link>,
    <Link to="/comparativa/" className={L}>IA vs abogado vs gestor</Link>,
    <Link to="/contacto/" className={L}>{t("footer.contact")}</Link>,
    <a href="https://wa.me/34711292174?text=Hola%2C%20necesito%20ayuda%20con%20RecurreTuMulta." target="_blank" rel="noopener noreferrer" className={LI}>
      <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" /> WhatsApp · Ayuda
    </a>,
    <a href="https://www.instagram.com/soycosa.ia/" target="_blank" rel="noopener noreferrer" title="La IA detrás de esta web" className={LI}>
      <Camera className="w-3.5 h-3.5 text-[#E1306C]" /> Instagram · @soycosa.ia
    </a>,
    <Link to="/privacidad/" className={L}>{t("footer.privacy")}</Link>,
    <Link to="/terminos/" className={L}>{t("footer.terms")}</Link>,
    <Link to="/aviso-legal/" className={L}>Aviso Legal</Link>,
    <Link to="/cookies/" className={L}>{t("footer.cookies")}</Link>,
    <button key="cmp" type="button" className={L} onClick={() => { const w = window as unknown as { googlefc?: { callbackQueue: unknown[]; showRevocationMessage: () => void } }; w.googlefc = w.googlefc || ({ callbackQueue: [] } as never); w.googlefc!.callbackQueue.push(() => w.googlefc!.showRevocationMessage()); }}>Configurar cookies</button>,
  ];
  return (
    <>
    {editorial !== false && <FirmaEditorial {...(editorial ?? {})} />}
    <footer className="border-t border-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <img src={LOGO_URL} alt="RecurreTuMulta.online logo" width={216} height={140} className="h-10 w-auto" />
          <span className="font-black text-sm text-gray-900">
            RecurreTuMulta<span className="text-red-600">.online</span>
          </span>
        </div>
        <nav aria-label="Footer navegación" className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600">
          {items.map((el, i) => (
            <Fragment key={i}>
              {i > 0 && <span aria-hidden="true">·</span>}
              {el}
            </Fragment>
          ))}
        </nav>
        <p className="text-xs text-gray-600">{t("footer.disclaimer")}</p>
        <p className="text-xs text-gray-600">
          {`© ${new Date().getFullYear()} RecurreTuMulta.online · `}
          <a href="mailto:soporte@recurretumulta.online" className="text-red-600 underline underline-offset-2">soporte@recurretumulta.online</a>
        </p>
        <div className="relative h-0 z-10">
          <MonoEscondido
            id={fijoId("footer")}
            pose="mono-durmiendo"
            size={30}
            className="absolute -top-9 right-6"
            titulo="¡Un mono al fondo de la página! Haz clic para cazarlo 🦍"
          />
        </div>
      </div>
    </footer>
    </>
  );
}
