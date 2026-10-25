import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

// Índice /guias/ (24/10/2026, arreglo del 404; 25/10/2026 REWORK: +3 centrales
// ZBE-etiquetas, certificado-DGT y seguro-VMP): enlaza ÚNICAMENTE las 12 guías
// publicadas en src/pages/guias/, cada una con ruta registrada en App.tsx y
// servida en vivo con 200 (censo vivo-censo.csv). Si se publica o se retira una
// guía, esta lista debe actualizarse en el mismo cambio.
const GUIAS = [
  {
    slug: "radares",
    titulo: "Multas de radar 2026: recúrrelas gratis",
    resumen:
      "Qué tipos de radar multan, qué margen de error se aplica y qué revisar para recurrir una multa de velocidad.",
  },
  {
    slug: "zbe",
    titulo: "Multas ZBE 2026: Madrid y Barcelona",
    resumen:
      "Entrar en una Zona de Bajas Emisiones cuesta 200 €: señalización, ordenanza vigente y etiquetas que debes comprobar.",
  },
  {
    slug: "prescripcion",
    titulo: "Prescripción multas 2026: plazos",
    resumen:
      "Cuándo prescribe una multa y cuándo caduca el expediente: plazos, interrupciones y qué hacer si te llega tarde.",
  },
  {
    slug: "vicios-forma",
    titulo: "Defectos que anulan multas 2026",
    resumen:
      "Errores en la tramitación que pueden anular una denuncia: matrícula, agente, notificación y recurso de reposición.",
  },
  {
    slug: "alcohol-drogas",
    titulo: "Multa por alcohol y drogas 2026: tasas",
    resumen:
      "Tasas de alcohol vigentes, sanciones por alcohol y drogas al volante y cómo recurrir una multa de alcoholemia.",
  },
  {
    slug: "patinetes-electricos",
    titulo: "Patinete eléctrico 2026: normativa y multas",
    resumen:
      "Qué VMP es legal, certificado DGT, dónde circular y la tabla de multas del patinete eléctrico.",
  },
  {
    slug: "itv-documentacion",
    titulo: "ITV 2026: neumáticos, multas y recurso",
    resumen:
      "Cada cuánto pasa la ITV cada vehículo, la multa por circular sin ella y la documentación obligatoria.",
  },
  {
    slug: "ayudas-compra-coche-electrico-2026",
    titulo: "Ayudas coche eléctrico 2026: Plan Auto+",
    resumen:
      "Plan Auto+ hasta 4.500 €: requisitos, plazos y cómo solicitar las ayudas para comprar un coche eléctrico.",
  },
  {
    slug: "comprar-coche-electrico-segunda-mano",
    titulo: "Eléctrico segunda mano: qué mirar 2026",
    resumen:
      "Degradación de la batería (SOH), garantía, historial y checklist de inspección antes de comprar un eléctrico usado.",
  },
  {
    slug: "zbe-etiquetas",
    titulo: "ZBE y etiquetas DGT 2026: qué puede circular",
    resumen:
      "Qué significa cada etiqueta DGT (Cero, ECO, C, B) y qué vehículos pueden entrar en las ZBE de Madrid, Barcelona y el resto de España.",
  },
  {
    slug: "certificado-dgt",
    titulo: "Certificado DGT del patinete: qué es y cómo comprobarlo",
    resumen:
      "Qué es el certificado de circulación de un VMP, desde cuándo es obligatorio y cómo comprobarlo antes de comprar.",
  },
  {
    slug: "seguro-vmp",
    titulo: "Seguro obligatorio del patinete 2026: Ley 5/2025 y registro",
    resumen:
      "Desde cuándo es obligatorio el seguro del patinete, cómo inscribirlo en la DGT y qué multa hay por circular sin seguro.",
  },
];

export default function GuiasIndexPage() {
  useSeo({
    title: "Guías 2026: multas, radares, ITV y coche eléctrico",
    description:
      "Las 12 guías: multas de radar y ZBE, prescripción, defectos de forma, alcohol y drogas, ITV, patinetes, ayudas para el coche eléctrico, ZBE y etiquetas, certificado DGT y seguro VMP.",
    canonical: "/guias",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Guías para conductores",
        itemListElement: GUIAS.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: g.titulo,
          url: `https://recurretumulta.online/guias/${g.slug}`,
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://recurretumulta.online/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guías",
            item: "https://recurretumulta.online/guias",
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <div className="pt-[57px]">
        <div className="relative overflow-hidden bg-slate-900">
          <CosaEnBanner imgClassName="h-28 w-auto" />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 text-center space-y-4">
            <nav aria-label="Migas de pan" className="flex items-center justify-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">Guías</span>
            </nav>
            <div>
              <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold">Guías 2026</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance">
              Guías para conductores
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Nueve guías prácticas y verificadas: cómo recurrir multas de radar, ZBE, alcohol o ITV,
              cuándo prescribe una sanción, qué defectos formales pueden anularla, y qué mirar antes
              de comprar un coche eléctrico nuevo o usado.
            </p>
            <p className="text-xs text-white/60 pt-1">
              Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Octubre de 2026
            </p>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 py-10 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {GUIAS.map((g) => (
              <Link
                key={g.slug}
                to={`/guias/${g.slug}`}
                className="block rounded-3xl border border-slate-200 bg-white p-5 hover:border-red-300 hover:shadow-md transition"
              >
                <h2 className="font-bold text-slate-900 mb-1">{g.titulo}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{g.resumen}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                  Leer la guía <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-bold text-slate-900 mb-2">Cómo están verificadas estas guías</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cada guía indica sus fuentes oficiales (DGT, normativa estatal y ordenanzas municipales)
              y su fecha de revisión. Este índice recoge únicamente las guías publicadas en la web:
              las 9 que existen hoy, ni una más.
            </p>
          </section>
        </main>
      </div>
      <SharedFooter />
    </div>
  );
}
