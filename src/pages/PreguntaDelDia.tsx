// "La pregunta del día" — cada día, la duda que más busca la gente
// (multas, DGT, coches eléctricos), respondida sin relleno y con fuente oficial.
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HelpCircle, ExternalLink, ArrowRight, MessageCircleQuestion } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  PREGUNTAS_REALES,
  preguntaDeHoy,
  fechaLargaES,
  hoyES,
} from "@/lib/pregunta-del-dia.ts";

const DOMAIN = "https://recurretumulta.online";

function buildFaqSchema() {
  const ultimas = PREGUNTAS_REALES.slice(0, 10);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${DOMAIN}/la-pregunta-del-dia#faq`,
        mainEntity: ultimas.map((p) => ({
          "@type": "Question",
          name: p.pregunta,
          acceptedAnswer: { "@type": "Answer", text: p.respuesta },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN + "/" },
          { "@type": "ListItem", position: 2, name: "Herramientas", item: DOMAIN + "/herramientas" },
          { "@type": "ListItem", position: 3, name: "La pregunta del día", item: DOMAIN + "/la-pregunta-del-dia" },
        ],
      },
    ],
  };
}

export default function PreguntaDelDiaPage() {
  const { hash } = useLocation();

  // Los enlaces con #fecha (p. ej. desde el dato del día) hacen scroll al ancla
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  useSeo({
    title: "Pregunta del día: multas y coches",
    description:
      "Cada día respondemos la pregunta que más busca la gente sobre multas, DGT y coches eléctricos. Respuestas directas, sin relleno, con fuente oficial.",
    canonical: "/la-pregunta-del-dia",
    keywords: ["pregunta del día", "dudas multas tráfico", "preguntas coche eléctrico", "dudas DGT"],
    schema: buildFaqSchema(),
  });

  const destacada = preguntaDeHoy();
  const archivo = PREGUNTAS_REALES.filter((p) => p !== destacada);

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <nav aria-label="Migas de pan" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-slate-500">
        <Link to="/" className="hover:text-slate-800">Inicio</Link> {" > "}
        <Link to="/herramientas/" className="hover:text-slate-800">Herramientas</Link> {" > "}
        <span className="text-slate-800 font-medium">La pregunta del día</span>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        {/* Hero */}
        <div className="mb-8">
          <PageHero
            image="/media/la-pregunta-del-dia.webp"
            imageAlt="Conductor pensativo apoyado en el techo de su coche al atardecer"
            badge="❓ Micro-contenido diario"
            title="La pregunta del día"
            subtitle="La duda que más busca la gente, respondida en cristiano: sin relleno y con fuente oficial."
          />
        </div>

        {destacada ? (
          <article
            id={destacada.fecha}
            className="rounded-3xl border border-red-100 bg-white p-6 sm:p-10 shadow-sm scroll-mt-24"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              {fechaLargaES(destacada.fecha)}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-5 flex gap-3">
              <HelpCircle className="h-8 w-8 shrink-0 text-red-600" />
              {destacada.pregunta}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">{destacada.respuesta}</p>
            {destacada.enlacesInternos && destacada.enlacesInternos.length > 0 && (
              <div className="mb-5 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Para saber más
                </p>
                <ul className="space-y-1.5">
                  {destacada.enlacesInternos.map((e) => (
                    <li key={e.url}>
                      <Link
                        to={e.url}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
                      >
                        {e.texto} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-sm text-slate-500">
              Fuente:{" "}
              <a
                href={destacada.fuenteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 underline decoration-red-300 underline-offset-2 hover:text-red-600"
              >
                {destacada.fuenteNombre}
                <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
              </a>
            </p>
          </article>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <MessageCircleQuestion className="mx-auto h-10 w-10 text-slate-300 mb-3" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">La primera pregunta llega muy pronto</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Respondemos una duda nueva cada día. Hoy ({fechaLargaES(hoyES())}) aún no hay ninguna:
              vuelve mañana.
            </p>
          </div>
        )}

        {/* Enlace cruzado */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div>
            <p className="font-bold text-slate-900">¿Prefieres una cifra en vez de una pregunta?</p>
            <p className="text-sm text-slate-600">Cada día, el dato del motor que de verdad importa.</p>
          </div>
          <Link
            to="/el-dato-del-dia/"
            className="shrink-0 inline-flex items-center justify-center gap-1 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            El dato del día <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Archivo con anchors */}
        {archivo.length > 0 && (
          <section className="mt-10" aria-label="Preguntas de días anteriores">
                  <figure className="my-8">
        <img src="/media/pregunta-dia-test.webp" alt="Hoja de examen teórico de conducir con preguntas tipo test y un bolígrafo rojo" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-xl font-extrabold text-slate-900 mb-4">Preguntas anteriores</h2>
            <div className="space-y-4">
              {archivo.map((p) => (
                <article
                  key={p.fecha}
                  id={p.fecha}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 scroll-mt-24"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    {fechaLargaES(p.fecha)}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.pregunta}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">{p.respuesta}</p>
                  {p.enlacesInternos && p.enlacesInternos.length > 0 && (
                    <p className="text-sm mb-2">
                      {p.enlacesInternos.map((e, i) => (
                        <span key={e.url}>
                          {i > 0 && " · "}
                          <Link to={e.url} className="font-semibold text-red-600 hover:underline">
                            {e.texto}
                          </Link>
                        </span>
                      ))}
                    </p>
                  )}
                  <p className="text-xs text-slate-500">
                    Fuente:{" "}
                    <a
                      href={p.fuenteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline decoration-red-300 underline-offset-2 hover:text-red-600"
                    >
                      {p.fuenteNombre}
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <SharedFooter />
    </div>
  );
}
