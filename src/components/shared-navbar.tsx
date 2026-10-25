// Navbar reconstruida a partir del bundle de producción 6ac8e7ec (el
// shared-navbar.tsx del export v2 era una versión anterior: sin «Fichas
// técnicas», sin WhatsApp y sin el contador de la caza de monos).
import { Link } from "react-router-dom";
import { BookOpen, MapPin, Sparkles, Building2, Wrench, ChevronDown, Menu, X, MessageCircle, CarFront, Mail, Store } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { HERRAMIENTAS, CATEGORIAS_HERRAMIENTAS } from "@/lib/herramientas-data.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import IconoCarrito from "@/components/tienda/IconoCarrito.tsx";
import ContadorMonos from "@/components/caza-monos/ContadorMonos.tsx";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";

const LOGO_URL = "/media/logo-recurretumulta-sm.webp";
const WHATSAPP_URL = "https://wa.me/34711292174?text=Hola%2C%20necesito%20ayuda%20con%20RecurreTuMulta.";
const LINK = "flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer";
const MITEM = "rtm-menu-item flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer";

interface SharedNavbarProps {
  /** "scroll": baja a #analizador en la página actual; "link": navega a /#analizador. */
  ctaMode?: "scroll" | "link";
}

export default function SharedNavbar({ ctaMode = "link" }: SharedNavbarProps) {
  const { t } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const cta =
    ctaMode === "scroll" ? (
      <button
        onClick={() => document.getElementById("analizador")?.scrollIntoView({ behavior: "smooth" })}
        className={LINK}
      >
        <Sparkles className="w-3.5 h-3.5" />
        {t("nav.recur")}
      </button>
    ) : (
      <Link to="/#analizador" className={LINK}>
        <Sparkles className="w-3.5 h-3.5" />
        {t("nav.analyze")}
      </Link>
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm rtm-navbar${scrolled ? " is-scrolled" : ""}`}
    >
      <div
        className={`max-w-4xl mx-auto px-3 sm:px-4 rtm-navbar-inner ${scrolled ? "py-1" : "py-2"} flex items-center justify-between gap-2`}
      >
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 min-w-0">
          <img src={LOGO_URL} alt="RecurreTuMulta.online logo" width={216} height={140} className="h-8 sm:h-11 w-auto shrink-0" />
          <span className="font-black text-sm sm:text-base tracking-tight text-gray-900 truncate">
            RecurreTuMulta<span className="text-red-600">.online</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Link to="/blog/" className={"hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"}>
            <BookOpen className="w-3.5 h-3.5" /> {t("nav.blog")}
          </Link>
          <Link to="/guias/" className={"hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"}>
            <BookOpen className="w-3.5 h-3.5" /> Guías
          </Link>
          <Link to="/multas/" className={"hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"}>
            <MapPin className="w-3.5 h-3.5" /> {t("nav.multasRadares")}
          </Link>
          <Link
            to="/fichas-tecnicas/"
            className="hidden sm:flex items-center gap-1 text-xs font-extrabold text-white bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 rounded-full px-2.5 py-1 shadow-sm transition-colors cursor-pointer"
          >
            <CarFront className="w-3.5 h-3.5" /> Fichas técnicas
          </Link>
          <Link to="/tienda/" className={"hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"}>
            <Store className="w-3.5 h-3.5" /> Tienda
          </Link>
          <Link to="/empresas/" className={"hidden md:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"}>
            <Building2 className="w-3.5 h-3.5" /> Empresas
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:text-[#128C7E] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={"hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer outline-none"}>
                <Wrench className="w-3.5 h-3.5" /> Herramientas <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="relative max-h-[70vh] overflow-y-auto">
              <MonoEscondido
                id={fijoId("menu-desplegable")}
                pose="mono-colgado"
                size={30}
                className="absolute top-0 right-3 z-10"
                titulo="¡Un mono en el menú! Haz clic para cazarlo 🦍"
              />
              <DropdownMenuItem asChild>
                <Link to="/herramientas/" className="cursor-pointer font-semibold">Todas las herramientas</Link>
              </DropdownMenuItem>
              {CATEGORIAS_HERRAMIENTAS.map((cat) => (
                <div key={cat}>
                  <p className="px-2 pt-2.5 pb-1 text-[10px] font-black uppercase tracking-[0.15em] text-red-600 flex items-center gap-1.5">
                    <span className="w-3 h-[2px] bg-red-600 rounded-full inline-block" aria-hidden="true" />
                    {cat}
                  </p>
                  {HERRAMIENTAS.filter((h) => h.categoria === cat).map((h) => (
                    <DropdownMenuItem key={h.slug} asChild>
                      <Link to={`/${h.slug}`} className="cursor-pointer">{h.nombre}</Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="hidden sm:contents">{cta}</span>
          <IconoCarrito />
          <ContadorMonos />
          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              if (mobileOpen) setToolsOpen(false);
              setMobileOpen(!mobileOpen);
            }}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="sm:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 shadow-lg max-h-[75vh] overflow-y-auto">
          <Link to="/blog/" onClick={() => setMobileOpen(false)} className={MITEM} style={{ "--mi": 0 } as CSSProperties}>
            <BookOpen className="w-4 h-4" /> {t("nav.blog")}
          </Link>
          <Link to="/guias/" onClick={() => setMobileOpen(false)} className={MITEM} style={{ "--mi": 0 } as CSSProperties}>
            <BookOpen className="w-4 h-4" /> Guías
          </Link>
          <Link to="/multas/" onClick={() => setMobileOpen(false)} className={MITEM} style={{ "--mi": 1 } as CSSProperties}>
            <MapPin className="w-4 h-4" /> {t("nav.multasRadares")}
          </Link>
          <Link to="/empresas/" onClick={() => setMobileOpen(false)} className={MITEM} style={{ "--mi": 2 } as CSSProperties}>
            <Building2 className="w-4 h-4" /> Empresas
          </Link>
          <Link
            to="/fichas-tecnicas/"
            onClick={() => setMobileOpen(false)}
            className="rtm-menu-item flex items-center gap-2 py-2.5 text-sm font-extrabold text-white bg-gradient-to-r from-red-700 to-red-600 rounded-full px-3 my-1 cursor-pointer"
            style={{ "--mi": 3 } as CSSProperties}
          >
            <CarFront className="w-4 h-4" /> Fichas técnicas
          </Link>
          <Link to="/tienda/" onClick={() => setMobileOpen(false)} className={MITEM} style={{ "--mi": 4 } as CSSProperties}>
            <Store className="w-4 h-4" /> Tienda
          </Link>
          <Link to="/newsletter/" onClick={() => setMobileOpen(false)} className={MITEM} style={{ "--mi": 4 } as CSSProperties}>
            <Mail className="w-4 h-4" /> Newsletter
          </Link>
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            aria-expanded={toolsOpen}
            style={{ "--mi": 5 } as CSSProperties}
            className="rtm-menu-item flex items-center justify-between gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer w-full"
          >
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Herramientas
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
          </button>
          {toolsOpen && (
            <div className="flex flex-col">
              <Link to="/herramientas/" onClick={() => setMobileOpen(false)} className="py-1.5 pl-6 text-sm font-semibold text-red-600 cursor-pointer">
                Ver todas las herramientas
              </Link>
              {CATEGORIAS_HERRAMIENTAS.map((cat) => (
                <div key={cat}>
                  <p className="pl-6 pt-3 pb-1 mt-2 text-[11px] font-black uppercase tracking-[0.15em] text-red-600 flex items-center gap-2">
                    <span className="w-4 h-[3px] bg-red-600 rounded-full inline-block" aria-hidden="true" />
                    {cat}
                  </p>
                  {HERRAMIENTAS.filter((h) => h.categoria === cat).map((h) => (
                    <Link
                      key={h.slug}
                      to={`/${h.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-1.5 pl-6 text-sm text-gray-500 hover:text-red-600 cursor-pointer"
                    >
                      {h.nombre}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{ "--mi": 6 } as CSSProperties}
            className="rtm-menu-item flex items-center gap-2 py-2.5 text-sm font-semibold text-[#25D366] hover:text-[#128C7E] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp · Ayuda
          </a>
        </nav>
      )}
    </header>
  );
}
