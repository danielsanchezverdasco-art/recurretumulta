import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const GUIAS = [
  { slug: "radares", titulo: "Multas de radar", desc: "Tipos de radares, márgenes de error, señalización y motivos para recurrir una multa de velocidad." },
  { slug: "vicios-forma", titulo: "Defectos de forma que anulan multas", desc: "Errores de tramitación (matrícula, identificación del agente, notificación) y modelo de recurso de reposición." },
  { slug: "prescripcion", titulo: "Prescripción y caducidad de multas", desc: "Plazos de prescripción y caducidad del expediente sancionador, cómo se interrumpen y qué hacer si llega tarde." },
  { slug: "zbe", titulo: "Multas ZBE", desc: "Zonas de Bajas Emisiones: señalización, ordenanza vigente, etiquetas y cómo recurrir." },
  { slug: "alcohol-drogas", titulo: "Alcohol y drogas al volante", desc: "Tasas de alcohol vigentes, sanciones, qué pasa en un control y cómo recurrir una multa de alcoholemia." },
  { slug: "itv-documentacion", titulo: "ITV, neumáticos y documentación", desc: "Periodicidad de la ITV, multas por circular sin ella, equivalencia de neumáticos y documentación obligatoria." },
  { slug: "patinetes-electricos", titulo: "Patinetes eléctricos", desc: "VMP legal, certificado DGT, seguro, dónde circular, multas y cómo recurrirlas." },
  { slug: "ayudas-compra-coche-electrico-2026", titulo: "Ayudas para comprar coche eléctrico 2026", desc: "Plan Auto+: cuantías, requisitos, plazos y cómo solicitarlas." },
  { slug: "comprar-coche-electrico-segunda-mano", titulo: "Comprar un eléctrico de segunda mano", desc: "Degradación de la batería (SOH), garantía, historial y checklist de inspección." },
];

const SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"CollectionPage","@id":"https://recurretumulta.online/guias/#page","url":"https://recurretumulta.online/guias/","name":"Guías de tráfico y motor","inLanguage":"es-ES"},
{"@type":"ItemList","itemListElement":[{"@type":"ListItem","position":1,"url":"https://recurretumulta.online/guias/radares/","name":"Multas de radar"},{"@type":"ListItem","position":2,"url":"https://recurretumulta.online/guias/vicios-forma/","name":"Defectos de forma que anulan multas"},{"@type":"ListItem","position":3,"url":"https://recurretumulta.online/guias/prescripcion/","name":"Prescripción y caducidad de multas"},{"@type":"ListItem","position":4,"url":"https://recurretumulta.online/guias/zbe/","name":"Multas ZBE"},{"@type":"ListItem","position":5,"url":"https://recurretumulta.online/guias/alcohol-drogas/","name":"Alcohol y drogas al volante"},{"@type":"ListItem","position":6,"url":"https://recurretumulta.online/guias/itv-documentacion/","name":"ITV, neumáticos y documentación"},{"@type":"ListItem","position":7,"url":"https://recurretumulta.online/guias/patinetes-electricos/","name":"Patinetes eléctricos"},{"@type":"ListItem","position":8,"url":"https://recurretumulta.online/guias/ayudas-compra-coche-electrico-2026/","name":"Ayudas para comprar coche eléctrico 2026"},{"@type":"ListItem","position":9,"url":"https://recurretumulta.online/guias/comprar-coche-electrico-segunda-mano/","name":"Comprar un eléctrico de segunda mano"}]},
{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias/"}]}]};

export default function GuiasIndexPage() {
  useSeo({
    title: "Guías de tráfico y motor 2026",
    description: "Todas las guías de RecurreTuMulta: multas de radar, ZBE, alcohol, prescripción, defectos de forma, ITV, patinetes y compra de coche eléctrico.",
    canonical: "/guias/",
    schema: SCHEMA,
  });
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SharedNavbar />
      <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-slate-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span>Guías</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-black leading-tight mb-3">Guías de tráfico y motor</h1>
        <p className="text-slate-600 mb-8">Guías prácticas para entender y recurrir una multa, y para tomar decisiones sobre tu vehículo. Cada guía cita la normativa y las fuentes oficiales que usa.</p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {GUIAS.map((g) => (
            <li key={g.slug}>
              <Link to={`/guias/${g.slug}/`} className="block h-full bg-white border border-slate-200 hover:border-red-300 rounded-2xl p-5 transition-colors">
                <h2 className="font-bold text-lg text-slate-900 flex items-center justify-between gap-2">{g.titulo}<ArrowRight className="w-4 h-4 text-slate-300 shrink-0" /></h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{g.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 mt-10">¿Buscas algo más concreto? Consulta el <Link to="/blog/" className="text-red-600 hover:underline font-medium">blog</Link> o las <Link to="/herramientas/" className="text-red-600 hover:underline font-medium">herramientas gratuitas</Link>.</p>
      </main>
      <SharedFooter />
    </div>
  );
}
