// Juego de monos en pausa (14/10/2026, decisión de Daniel). Se muestra en /juego-monos/ y sus bases
// mientras JUEGO_MONOS_ACTIVO (src/config/juego.ts) sea false. Sin premios ni anuncios.
// 10/11/2026 (AdSense 10): cada página trae su propio título/meta (antes ambas
// mostraban el mismo) y prosa real sobre qué era el juego y qué pasa ahora.
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

export default function JuegoPausa({
  canonical,
  tituloSeo,
  descripcionSeo,
  tituloVisible,
  esBases,
}: {
  canonical: string;
  tituloSeo: string;
  descripcionSeo: string;
  tituloVisible: string;
  esBases?: boolean;
}) {
  useSeo({ title: tituloSeo, description: descripcionSeo, canonical, noindex: true });
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-xl mx-auto px-4 pt-[97px] pb-16 space-y-4">
        <h1 className="text-2xl font-black text-gray-900 text-center">{tituloVisible}</h1>
        <p className="text-gray-600 leading-relaxed">
          La «Caza de monos» fue el juego de RecurreTuMulta.online en su Temporada 1
          (octubre de 2026): 350 monos escondidos por toda la web —artículos, fichas de
          coches, motos y patinetes, comparadores y herramientas— más un mono legendario
          dorado escondido en una página profunda. El primero en cazar los 350 ganaba
          1.500 € por transferencia y un año de recursos ilimitados, y quien encontraba
          el dorado, un año de recursos gratis.
        </p>
        <p className="text-gray-600 leading-relaxed">
          El juego está en pausa desde el 14 de octubre de 2026, sin fecha anunciada de
          vuelta y sin premios activos. La pausa no borra nada: tu progreso sigue guardado
          en este navegador, donde se guardaba desde el primer mono, y si la caza vuelve lo
          encontrarás tal como lo dejaste. Mientras tanto no se pueden cazar monos nuevos
          ni generar códigos de reclamo.
        </p>
        {esBases ? (
          <p className="text-gray-600 leading-relaxed">
            Estas son las bases legales de la Temporada 1, que se mantienen publicadas
            como referencia del concurso tal como se jugó: organizador, mecánica por
            temporadas, premios, verificación anti-fraude y datos personales. Si la caza
            vuelve con una temporada nueva, sus bases se publicarán en esta misma página.
          </p>
        ) : (
          <p className="text-gray-600 leading-relaxed">
            Mientras el juego está parado, la web sigue funcionando con normalidad: puedes
            analizar tu multa gratis con la IA, consultar las fichas técnicas y las guías
            de multas por comunidad, y leer las novedades del motor. Cuando haya noticias
            sobre la caza, se anunciarán en esta página.
          </p>
        )}
        <p className="text-center pt-2">
          <Link to="/" className="font-bold text-red-600 underline">Volver al inicio</Link>
          {" · "}
          <Link to="/#analizador" className="font-bold text-red-600 underline">Analizar mi multa gratis</Link>
        </p>
      </main>
      <SharedFooter />
    </div>
  );
}
