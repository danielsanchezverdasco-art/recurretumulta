import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import { CosaAvatar } from "@/components/Cosa.tsx";
import { AVATAR_COSA_404 } from "@/lib/cosa.ts";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";

export default function NotFound() {
  const location = useLocation();

  useSeo({
    title: "Página no encontrada",
    description: "La página que buscas no existe. Vuelve al inicio de RecurreTuMulta.online.",
    noindex: true,
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="text-center space-y-6 max-w-lg">
        {/* ── Cosa, perdida ── */}
        <div className="rtm-cosa-float mx-auto w-fit">
          <CosaAvatar size={104} src={AVATAR_COSA_404} className="border-4 border-white shadow-xl" />
        </div>
        <img
          src="/media/error-404.webp"
          alt="Carretera vacía al atardecer: te has salido de la ruta"
          width={768}
          height={432}
          className="w-full h-52 sm:h-64 object-cover rounded-2xl shadow-lg mx-auto"
          loading="lazy"
        />
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold">Cosa se ha perdido buscando esta página…</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Ni con su radar la encuentra: esta URL no existe o la hemos movido de sitio.
          Pero tu multa sí puede tener salida.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/#analizador">Analizar mi multa gratis</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/herramientas/">Ver las herramientas</Link>
          </Button>
        </div>
        {/* Caza de monos: hasta perdida, Cosa esconde un mono (pose despistada) */}
        {/* Caza de monos: mono superpuesto (sin hueco en el flujo) */}
        <div className="relative h-0 z-10">
          <MonoEscondido
            id={fijoId("pagina-404")}
            pose="mono-asomando"
            size={36}
            className="absolute -top-8 left-1/2 -translate-x-1/2"
            titulo="¡Hasta perdida esconde monos! Haz clic para cazarlo 🦍"
          />
        </div>
      </div>
    </main>
  );
}
