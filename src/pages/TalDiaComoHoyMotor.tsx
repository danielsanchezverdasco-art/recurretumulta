// "Tal día como hoy en el motor" — efeméride diaria automática del mundo del
// automóvil y la moto: lanzamientos, hitos de competición, récords y curiosidades.
import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Check, Copy, ExternalLink, ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  EFEMERIDES,
  CATEGORIA_LABEL,
  efemeridesEn,
  proximasEfemerides,
  hoyMD,
  haceAnos,
  fechaCortaES,
  type EfemerideMotor,
} from "@/lib/efemerides-motor.ts";

const DOMAIN = "https://recurretumulta.online";
const RUTA = "/tal-dia-como-hoy-motor";

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const FAQ_ITEMS = [
  {
    "@type": "Question",
    name: "¿Qué es «tal día como hoy en el motor»?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Una efeméride diaria del mundo del automóvil y la moto: cada día mostramos qué pasó en esta misma fecha en otros años — lanzamientos de modelos míticos, hitos de la Fórmula 1 y MotoGP, rallies, récords de velocidad y curiosidades.",
    },
  },
  {
    "@type": "Question",
    name: "¿De dónde salen las fechas?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Cada efeméride tiene el día, mes y año verificados en al menos una fuente fiable: Wikipedia, webs oficiales de fabricantes, F1.com, MotoGP.com o medios de motor. Si una fecha no se puede verificar con exactitud, no se publica.",
    },
  },
  {
    "@type": "Question",
    name: "¿Puedo ver las efemérides de otro día?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sí: usa el explorador de fechas de esta página para elegir cualquier día y mes del año y ver qué pasó en la historia del motor en esa fecha.",
    },
  },
  {
    "@type": "Question",
    name: "¿Qué pasa si un día no tiene efeméride?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Lo decimos con honestidad y mostramos las efemérides más cercanas en el calendario. Seguimos ampliando el archivo para cubrir todo el año.",
    },
  },
];

function buildSchema(hoy: EfemerideMotor[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${DOMAIN}${RUTA}`,
        name: "Tal día como hoy en el motor: efemérides del automóvil",
        url: `${DOMAIN}${RUTA}`,
        description:
          "Cada día, la historia del motor: lanzamientos míticos, hitos de F1 y MotoGP, rallies, récords y curiosidades que pasaron tal día como hoy.",
        inLanguage: "es-ES",
      },
      {
        "@type": "ItemList",
        "@id": `${DOMAIN}${RUTA}#efemerides-hoy`,
        name: "Efemérides del motor de hoy",
        itemListElement: hoy.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${e.titular} (${e.ano})`,
          url: `${DOMAIN}${RUTA}#efe-${e.ano}-${e.mes}-${e.dia}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${DOMAIN}${RUTA}#faq`,
        mainEntity: FAQ_ITEMS,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN + "/" },
          { "@type": "ListItem", position: 2, name: "Herramientas", item: DOMAIN + "/herramientas" },
          { "@type": "ListItem", position: 3, name: "Tal día como hoy en el motor", item: DOMAIN + RUTA },
        ],
      },
    ],
  };
}

function ShareButtons({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : DOMAIN + RUTA;
  const texto = encodeURIComponent(`${titulo} — Tal día como hoy en el motor`);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Compartir</span>
      <a
        href={`https://wa.me/?text=${texto}%20${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:brightness-95"
      >
        WhatsApp
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${texto}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700"
      >
        X
      </a>
      <button
        onClick={copiar}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400"
      >
        {copiado ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
        {copiado ? "¡Copiado!" : "Copiar enlace"}
      </button>
    </div>
  );
}

function EfemerideCard({ e }: { e: EfemerideMotor }) {
  return (
    <article
      id={`efe-${e.ano}-${e.mes}-${e.dia}`}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="flex items-stretch">
        <div className="flex w-24 shrink-0 flex-col items-center justify-center bg-slate-900 px-2 py-6 text-white">
          <span className="text-3xl font-black tracking-tight">{e.ano}</span>
          <span className="mt-1 text-center text-[11px] font-semibold uppercase tracking-wide text-white/60">
            {haceAnos(e.ano)}
          </span>
        </div>
        <div className="min-w-0 flex-1 px-5 py-5 sm:px-7">
          <span className="mb-2 inline-block rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-red-600">
            {CATEGORIA_LABEL[e.categoria]}
          </span>
          <h3 className="text-lg font-extrabold leading-snug text-slate-900 sm:text-xl">{e.titular}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{e.texto}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xs text-slate-400">Verificado en: {e.fuente}</span>
            {e.enlaceInterno && (
              <Link
                to={e.enlaceInterno.url}
                className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
              >
                {e.enlaceInterno.texto}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Explorador() {
  const { mes: mesHoy, dia: diaHoy } = hoyMD();
  const [mes, setMes] = useState(mesHoy);
  const [dia, setDia] = useState(diaHoy);
  const [consultado, setConsultado] = useState(false);
  const resultados = consultado ? efemeridesEn(mes, dia) : [];

  const diasDelMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mes - 1];

  return (
    <section className="mt-12" aria-label="Explorar efemérides por fecha">
      <h2 className="text-xl font-extrabold text-slate-900 mb-2">Explora el archivo</h2>
      <p className="text-sm text-slate-600 mb-4">
        Elige cualquier día del año y descubre qué pasó en la historia del motor.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex-1">
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Día</span>
            <select
              value={dia}
              onChange={(ev) => { setDia(Number(ev.target.value)); setConsultado(false); }}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
            >
              {Array.from({ length: diasDelMes }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="flex-1">
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Mes</span>
            <select
              value={mes}
              onChange={(ev) => {
                const m = Number(ev.target.value);
                setMes(m);
                const max = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
                if (dia > max) setDia(max);
                setConsultado(false);
              }}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
            >
              {MESES.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
          </label>
          <div className="flex items-end">
            <button
              onClick={() => setConsultado(true)}
              className="w-full rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700 sm:w-auto"
            >
              Ver efemérides
            </button>
          </div>
        </div>

        {consultado && (
          <div className="mt-6">
            <h3 className="mb-3 text-base font-bold text-slate-900">
              {fechaCortaES(mes, dia).charAt(0).toUpperCase() + fechaCortaES(mes, dia).slice(1)}
            </h3>
            {resultados.length > 0 ? (
              <div className="space-y-4">
                {resultados.map((e) => (
                  <EfemerideCard key={`${e.ano}-${e.mes}-${e.dia}-${e.titular}`} e={e} />
                ))}
              </div>
            ) : (
              <p className="rounded-xl bg-slate-50 px-4 py-5 text-sm text-slate-600">
                De este día aún no tenemos efeméride registrada. Estamos ampliando el archivo: vuelve
                pronto o mira las próximas efemérides más abajo.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default function TalDiaComoHoyMotorPage() {
  const { mes, dia } = hoyMD();
  const hoy = efemeridesEn(mes, dia);
  const proximas = proximasEfemerides(5);
  const fechaHoy = fechaCortaES(mes, dia);

  useSeo({
    title: "Tal día como hoy: efemérides del motor",
    description:
      "Cada día, la historia del motor: lanzamientos míticos, hitos de F1 y MotoGP, rallies, récords de velocidad y curiosidades que pasaron tal día como hoy.",
    canonical: RUTA,
    keywords: [
      "tal día como hoy motor",
      "efemérides automóvil",
      "historia del automóvil",
      "aniversarios coches",
      "hitos fórmula 1",
    ],
    schema: buildSchema(hoy),
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <nav aria-label="Migas de pan" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-slate-500">
        <Link to="/" className="hover:text-slate-800">Inicio</Link> {" > "}
        <Link to="/herramientas/" className="hover:text-slate-800">Herramientas</Link> {" > "}
        <span className="text-slate-800 font-medium">Tal día como hoy en el motor</span>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        {/* Hero */}
        <div className="mb-8">
          <PageHero
            image="/media/tal-dia-motor-hero.webp"
            imageAlt="Coche clásico de los años 60 junto a un coche eléctrico moderno en una calle española al atardecer"
            badge="📅 Efeméride diaria"
            title="Tal día como hoy en el motor"
            subtitle="Cada día, un viaje por la historia del automóvil y la moto: lanzamientos míticos, hitos de la Fórmula 1 y MotoGP, rallies, récords de velocidad y curiosidades. Todas las fechas, verificadas."
          />
        </div>

        <section aria-label={`Efemérides de hoy, ${fechaHoy}`}>
          <h2 className="text-xl font-extrabold text-slate-900 mb-1 capitalize">
            Hoy, {fechaHoy}
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            {hoy.length > 0
              ? `${hoy.length} ${hoy.length === 1 ? "efeméride" : "efemérides"} en la historia del motor.`
              : "La historia también descansa algún día."}
          </p>

          {hoy.length > 0 ? (
            <div className="space-y-5">
              {hoy.map((e) => (
                <EfemerideCard key={`${e.ano}-${e.mes}-${e.dia}-${e.titular}`} e={e} />
              ))}
              <ShareButtons titulo={`Tal día como hoy en el motor (${fechaHoy})`} />
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-slate-300 mb-3" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Hoy no hay efeméride registrada</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6">
                De este día aún no tenemos ningún hito verificado en el archivo. Seguimos ampliándolo
                para cubrir todo el año.
              </p>
              {proximas.length > 0 && (
                <div className="text-left max-w-lg mx-auto">
                  <p className="text-sm font-bold text-slate-800 mb-3">Las más cercanas:</p>
                  <ul className="space-y-2">
                    {proximas.slice(0, 3).map((e) => (
                      <li key={`${e.ano}-${e.mes}-${e.dia}-${e.titular}`} className="text-sm text-slate-600">
                        <span className="font-bold text-red-600 capitalize">{fechaCortaES(e.mes, e.dia)}</span>
                        {" — "}{e.titular} <span className="text-slate-400">({e.ano})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>

        <Explorador />

        {/* Próximas efemérides */}
        {proximas.length > 0 && (
          <section className="mt-12" aria-label="Próximas efemérides">
                  <figure className="my-8">
        <img src="/media/tal-dia-efemeride.webp" alt="Coche clásico SEAT 124 de los años setenta en una calle empedrada de Madrid al atardecer" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-xl font-extrabold text-slate-900 mb-4">Próximas efemérides</h2>
            <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
              {proximas.map((e) => (
                <li
                  key={`${e.ano}-${e.mes}-${e.dia}-${e.titular}`}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <span className="shrink-0 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-black text-white">
                    {e.ano}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-800">{e.titular}</p>
                    <p className="text-xs text-slate-500 capitalize">
                      {fechaCortaES(e.mes, e.dia)} · {CATEGORIA_LABEL[e.categoria]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Enlaces cruzados */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-bold text-slate-900">El dato del día</p>
            <p className="text-sm text-slate-600 mb-3">Una cifra del motor explicada en dos frases.</p>
            <Link
              to="/el-dato-del-dia/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
            >
              Ver el dato de hoy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-bold text-slate-900">La pregunta del día</p>
            <p className="text-sm text-slate-600 mb-3">La duda que más busca la gente, resuelta.</p>
            <Link
              to="/la-pregunta-del-dia/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
            >
              Ver la pregunta de hoy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-10" aria-label="Preguntas frecuentes">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿Qué es «tal día como hoy en el motor»?</h3>
              <p className="text-sm text-slate-600">
                Una efeméride diaria del mundo del automóvil y la moto: cada día mostramos qué pasó en
                esta misma fecha en otros años — lanzamientos de modelos míticos, hitos de la Fórmula 1
                y MotoGP, rallies, récords de velocidad y curiosidades.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿De dónde salen las fechas?</h3>
              <p className="text-sm text-slate-600">
                Cada efeméride tiene el día, mes y año verificados en al menos una fuente fiable:
                Wikipedia, webs oficiales de fabricantes, F1.com, MotoGP.com o medios de motor. Si una
                fecha no se puede verificar con exactitud, no se publica.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿Puedo ver las efemérides de otro día?</h3>
              <p className="text-sm text-slate-600">
                Sí: usa el explorador de fechas de esta página para elegir cualquier día y mes del año y
                ver qué pasó en la historia del motor en esa fecha.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿Qué pasa si un día no tiene efeméride?</h3>
              <p className="text-sm text-slate-600">
                Lo decimos con honestidad y mostramos las efemérides más cercanas en el calendario.
                Seguimos ampliando el archivo para cubrir todo el año.
              </p>
            </div>
          </div>
        </section>

        {/* Fuentes */}
        <p className="mt-8 text-xs text-slate-400">
          Fuentes de verificación: Wikipedia, webs oficiales de fabricantes, F1.com, MotoGP.com,
          Dakar.com y medios especializados. Cada efeméride indica su fuente.
        </p>
      </main>
      <SharedFooter />
    </div>
  );
}

// Referencia para tree-shaking / cobertura: nº total de efemérides del archivo.
export const TOTAL_EFEMERIDES_REFERENCIA = EFEMERIDES.length;
