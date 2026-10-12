import { Link } from "react-router-dom";

const LOGO_URL = "/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png";

export default function SharedFooter() {

  return (
    <footer className="border-t border-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        {/* Logo + wordmark */}
        <div className="flex items-center justify-center gap-2">
          <img
            src={LOGO_URL}
            alt="RecurreTuMulta.online logo"
            className="h-10 w-auto"
          />
          <span className="font-black text-sm text-gray-900">
            RecurreTuMulta<span className="text-red-600">.online</span>
          </span>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Footer navegación"
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400"
        >
          <Link to="/blog" className="hover:text-red-600 transition-colors">
            Blog
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/multas" className="hover:text-red-600 transition-colors">
            Provincias
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/herramientas" className="hover:text-red-600 transition-colors">
            Herramientas
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/sobre-nosotros" className="hover:text-red-600 transition-colors">
            Quiénes somos
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/contacto" className="hover:text-red-600 transition-colors">
            Contacto
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/privacidad" className="hover:text-red-600 transition-colors">
            Privacidad
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/terminos" className="hover:text-red-600 transition-colors">
            Términos
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/aviso-legal" className="hover:text-red-600 transition-colors">
            Aviso Legal
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/cookies" className="hover:text-red-600 transition-colors">
            Cookies
          </Link>
        </nav>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400">
          Servicio de redacción asistida por IA. No somos un despacho de abogados. Contenido orientativo.
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} RecurreTuMulta.online ·{" "}
          <a
            href="mailto:soporte@recurretumulta.online"
            className="text-red-600 hover:underline"
          >
            soporte@recurretumulta.online
          </a>
          {" · "}
          <a
            href="https://wa.me/34711292174"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            WhatsApp +34 711 29 21 74
          </a>
        </p>
      </div>
    </footer>
  );
}
