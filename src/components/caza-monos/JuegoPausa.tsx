// Juego de monos en pausa (14/10/2026, decisión de Daniel). Se muestra en /juego-monos/ y sus bases
// mientras JUEGO_MONOS_ACTIVO (src/config/juego.ts) sea false. Sin premios ni anuncios.
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

export default function JuegoPausa({ canonical }: { canonical: string }) {
  useSeo({ title: "Caza de monos: juego en pausa", description: "El juego Caza de monos de RecurreTuMulta.online está en pausa.", canonical, noindex: true });
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-xl mx-auto px-4 pt-[97px] pb-16 text-center space-y-4">
        <h1 className="text-2xl font-black text-gray-900">Juego en pausa</h1>
        <p className="text-gray-600">El juego «Caza de monos» está en pausa por ahora. Gracias por participar.</p>
        <p><Link to="/" className="font-bold text-red-600 underline">Volver al inicio</Link></p>
      </main>
      <SharedFooter />
    </div>
  );
}
