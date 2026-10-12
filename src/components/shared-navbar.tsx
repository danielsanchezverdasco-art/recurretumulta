import { Link } from "react-router-dom";
import { BookOpen, MapPin, Sparkles, Building2, Wrench, ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";

import { api } from "@/convex/_generated/api.js";
import { HERRAMIENTAS } from "@/lib/herramientas-data.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

const LOGO_URL = "/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png";

interface SharedNavbarProps {
  /** CTA button behaviour: "scroll" scrolls to #analizador on the current page,
   *  "link" navigates to /#analizador (for pages other than the homepage). */
  ctaMode?: "scroll" | "link";
}

export default function SharedNavbar({ ctaMode = "link" }: SharedNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const ctaButton = ctaMode === "scroll" ?
  <Button
    size="sm"
    className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-full px-2 sm:px-4 cursor-pointer"
    onClick={() => document.getElementById("analizador")?.scrollIntoView({ behavior: "smooth" })}>
    
      Recurrir multa
    </Button> :

  <Link to="/#analizador">
      <Button
      size="sm"
      className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-full px-2 sm:px-4 cursor-pointer">
      
        <Sparkles className="w-3.5 h-3.5 mr-1" />
        Analizar mi multa
      </Button>
    </Link>;


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-3 sm:px-2 sm:px-4 py-2 flex items-center justify-between gap-2">
        {/* Logo + wordmark */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 min-w-0">
          <img
            src={LOGO_URL}
            alt="RecurreTuMulta.online logo"
            className="h-8 sm:h-11 w-auto shrink-0" style={{height: "32px", width: "auto", maxWidth: "120px"}} />
          
          <span className="font-black text-sm sm:text-base tracking-tight text-gray-900 truncate">
            RecurreTuMulta<span className="text-red-600">.online</span>
          </span>
        </Link>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            
            <BookOpen className="w-3.5 h-3.5" /> Blog
          </Link>
          <Link
            to="/multas"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            
            <MapPin className="w-3.5 h-3.5" /> Provincias
          </Link>
          <Link
            to="/empresas"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            
            <Building2 className="w-3.5 h-3.5" /> Empresas
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer outline-none">
                <Wrench className="w-3.5 h-3.5" /> Herramientas <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link to="/herramientas" className="cursor-pointer font-semibold">
                  Todas las herramientas
                </Link>
              </DropdownMenuItem>
              {HERRAMIENTAS.map((h) => (
                <DropdownMenuItem key={h.slug} asChild>
                  <Link to={`/${h.slug}`} className="cursor-pointer">
                    {h.nombre}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href="https://wa.me/34711292174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer font-semibold text-green-700"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" /> WhatsApp
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          

          {ctaButton}

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <nav className="sm:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 shadow-lg">
          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
            <BookOpen className="w-4 h-4" /> Blog
          </Link>
          <Link
            to="/multas"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
            <MapPin className="w-4 h-4" /> Provincias
          </Link>
          <Link
            to="/empresas"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
            <Building2 className="w-4 h-4" /> Empresas
          </Link>
          <a
            href="https://wa.me/34711292174"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2.5 text-sm font-semibold text-green-700 hover:text-green-800 cursor-pointer">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <Link
            to="/herramientas"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
            <Wrench className="w-4 h-4" /> Herramientas
          </Link>
          {HERRAMIENTAS.map((h) => (
            <Link
              key={h.slug}
              to={`/${h.slug}`}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 py-1.5 pl-6 text-sm text-gray-500 hover:text-red-600 cursor-pointer">
              {h.nombre}
            </Link>
          ))}
        </nav>
      )}
    </header>);

}