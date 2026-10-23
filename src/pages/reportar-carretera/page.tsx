import { useState } from "react";
import {
  Camera, MapPin, FileCheck, ChevronDown, ChevronUp,
  BadgeCheck, CheckCircle, AlertTriangle, Construction, Signpost,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import { Link } from "react-router-dom";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { PROVINCIAS } from "@/lib/provincias-data.ts";
import { Reveal } from "@/components/anim.tsx";

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const TIPOS = [
  "Bache o firme en mal estado",
  "Señal dañada o caída",
  "Señalización confusa o contradictoria",
  "Marca vial borrada",
  "Otro",
];

const PASOS = [
  {
    n: "1",
    title: "Rellena el formulario",
    desc: "Fotos, ubicación y una breve descripción. Tardas 2 minutos; el vídeo es opcional.",
  },
  {
    n: "2",
    title: "Lo preparamos todo",
    desc: "Identificamos quién es el titular de la vía (ayuntamiento, diputación, comunidad o Ministerio) y redactamos la reclamación.",
  },
  {
    n: "3",
    title: "Lo presentamos gratis",
    desc: "Presentamos la reclamación ante la administración competente y te avisamos por email de cada novedad. Tú no haces nada más.",
  },
];

const FAQS = [
  {
    q: "¿A quién se presenta la reclamación?",
    a: "Al titular de la vía: el ayuntamiento en vías urbanas, la diputación o la comunidad autónoma en carreteras provinciales y autonómicas, y el Ministerio de Transportes en la red de carreteras del Estado. No tienes que averiguarlo tú: con la ubicación que nos das, lo identificamos nosotros.",
  },
  {
    q: "¿Cuánto tarda la administración en responder?",
    a: "Depende de cada administración, pero los procedimientos administrativos tienen plazos legales de resolución (normalmente 3 meses). Te avisamos por email de cada novedad: admisión, requerimientos y resolución.",
  },
  {
    q: "¿Es gratis de verdad? ¿Cuál es el truco?",
    a: "Sí, es 100 % gratis y no hay truco: no te cobramos nada por gestionar tu reclamación. Es parte de nuestra misión de ayudar al conductor frente a la administración.",
  },
  {
    q: "¿Y si una señal en mal estado me causó una multa?",
    a: "Entonces tienes dos frentes: reclama el arreglo de la señal y recurre la multa. Una señal defectuosa, tapada o contradictoria puede ser motivo de recurso. Analiza tu multa gratis con nuestro analizador y te decimos si es recurrible.",
  },
  {
    q: "¿Qué necesito para hacer el reporte?",
    a: "Fotos del desperfecto, la carretera o vía, el municipio y la provincia, y una breve descripción. El punto kilométrico y el vídeo son opcionales pero ayudan mucho.",
  },
  {
    q: "¿Mis datos están a salvo?",
    a: "Necesitamos tu nombre y email para presentarte como reclamante y avisarte del estado. No los compartimos con terceros salvo con la administración competente para tramitar tu reclamación.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

const inputCls =
  "w-full min-h-[48px] bg-white border border-gray-300 rounded-xl px-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500";

function Field({ label, required, children, hint }: { label: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-bold text-gray-800">
        {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

export default function ReportarCarreteraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [errorFotos, setErrorFotos] = useState("");

  useSeo({
    title: "Reportar carretera en mal estado",
    description:
      "¿Bache, señal dañada o marca vial borrada? Repórtalo en 2 minutos: presenta fotos y ubicación y nosotros presentamos la reclamación ante la administración. Gratis.",
    canonical: "/reportar-carretera",
    keywords: [
      "reportar carretera mal estado",
      "reclamar bache ayuntamiento",
      "señal dañada reclamación",
      "carretera en mal estado que hacer",
      "reclamación administración vía pública",
      "bache carretera reclamar daños",
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  const validarFotos = (e: React.FormEvent<HTMLFormElement>) => {
    const input = e.currentTarget.querySelector<HTMLInputElement>('input[name="fotos"]');
    if (input?.files && input.files.length > 3) {
      e.preventDefault();
      setErrorFotos("Puedes subir un máximo de 3 fotos. Quita alguna e inténtalo de nuevo.");
      input.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setErrorFotos("");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SharedNavbar />
      <main>

      {/* ── HERO ── */}
      <PageHero
        rounded={false}
        image="/media/reportar-carretera-hero.webp"
        imageAlt="Bache grande en una carretera española con una señal de tráfico dañada e inclinada al borde de la calzada"
        badge="🚧 Nuevo · 100 % gratis"
        title={
          <>
            ¿Carretera en mal estado?
            <br />
            <span className="text-red-500">Repórtala y olvídate</span>
          </>
        }
        subtitle={
          <>
            Baches, señales dañadas, marcas viales borradas…{" "}
            <strong className="text-white">Rellena unos datos y olvídate: nosotros presentamos la reclamación
            ante la administración gratis.</strong>
          </>
        }
      >
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          {["Sin coste", "Sin papeleos", "Te avisamos por email"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-green-400" />
              {item}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ── 3 PASOS ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center">Así funciona</h2>
          <p className="text-gray-500 mb-10 text-sm text-center">
            Tú haces la parte fácil en 2 minutos; nosotros hacemos todo lo demás.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <Card className="rounded-2xl border border-gray-200 h-full">
                  <CardContent className="p-6">
                    <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mb-4">
                      {p.n}
                    </span>
                    <h3 className="font-black text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ PUEDES REPORTAR ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">¿Qué puedes reportar?</h2>
          <img
            src="/media/radar-danado-carretera-cuerpo.webp"
            alt="Señal de tráfico dañada e inclinada en el arcén de una carretera española"
            className="w-full rounded-2xl shadow-lg mb-8"
            loading="lazy"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <Construction className="w-6 h-6 text-red-600" />, label: "Baches y firme en mal estado" },
              { icon: <Signpost className="w-6 h-6 text-red-600" />, label: "Señales dañadas o caídas" },
              { icon: <AlertTriangle className="w-6 h-6 text-red-600" />, label: "Señalización confusa" },
              { icon: <Camera className="w-6 h-6 text-red-600" />, label: "Marcas viales borradas" },
              { icon: <MapPin className="w-6 h-6 text-red-600" />, label: "Puntos peligrosos" },
              { icon: <FileCheck className="w-6 h-6 text-red-600" />, label: "Cualquier desperfecto vial" },
            ].map((item) => (
              <Card key={item.label} className="rounded-xl border border-gray-200 text-center p-4 shadow-none">
                <span className="flex justify-center mb-2">{item.icon}</span>
                <p className="text-xs font-semibold text-gray-700">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section className="py-14 px-4 bg-gray-50" id="formulario">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center">Haz tu reporte</h2>
          <p className="text-gray-500 mb-8 text-sm text-center">
            Cuantas más fotos y más precisa la ubicación, más fuerza tiene la reclamación.
          </p>

          <Card className="rounded-2xl border-2 border-gray-900 shadow-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <form
                name="reporte-carretera"
                method="POST"
                action="/reportar-carretera/gracias/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                onSubmit={validarFotos}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="reporte-carretera" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    No rellenar: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <Field label="Nombre" required>
                  <input name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" className={inputCls} />
                </Field>

                <Field label="Email" required>
                  <input name="email" type="email" required autoComplete="email" placeholder="tucorreo@ejemplo.com" className={inputCls} />
                </Field>

                <Field label="Teléfono" hint="Opcional, por si necesitamos localizarte rápido.">
                  <input name="telefono" type="tel" autoComplete="tel" placeholder="600 123 456" className={inputCls} />
                </Field>

                <Field label="Tipo de incidencia" required>
                  <select name="tipo" required defaultValue="" aria-label="Tipo de incidencia" className={inputCls}>
                    <option value="" disabled>
                      Elige el tipo…
                    </option>
                    {TIPOS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Carretera o vía" required hint="Ej.: A-2, M-30, N-340, calle Mayor…">
                  <input name="via" type="text" required placeholder="¿En qué vía está?" className={inputCls} />
                </Field>

                <Field label="Punto kilométrico" hint="Opcional, si lo sabes.">
                  <input name="pk" type="text" inputMode="decimal" placeholder="Ej.: km 12,5" className={inputCls} />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Municipio" required>
                    <input name="municipio" type="text" required autoComplete="address-level2" placeholder="Municipio" className={inputCls} />
                  </Field>
                  <Field label="Provincia" required>
                    <select name="provincia" required defaultValue="" aria-label="Provincia" className={inputCls}>
                      <option value="" disabled>
                        Elige…
                      </option>
                      {PROVINCIAS.map((p) => (
                        <option key={p.slug} value={p.nombre}>
                          {p.nombre}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Descripción" required hint="Cuéntanos qué viste: tamaño del bache, estado de la señal, peligro que supone…">
                  <textarea
                    name="descripcion"
                    required
                    rows={4}
                    placeholder="Describe la incidencia con tus palabras"
                    className={`${inputCls} py-3 resize-y`}
                  />
                </Field>

                <Field label="Fotos" required hint="Hasta 3 fotos. Que se vea bien el desperfecto y, si puedes, su entorno.">
                  <input
                    name="fotos"
                    type="file"
                    accept="image/*"
                    multiple
                    required
                    className="w-full min-h-[48px] text-sm text-gray-700 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:bg-gray-900 file:text-white file:font-bold file:text-sm file:cursor-pointer hover:file:bg-gray-700 border border-gray-300 rounded-xl px-3 py-2 bg-white"
                  />
                  {errorFotos && (
                    <p role="alert" className="text-sm font-semibold text-red-600">
                      {errorFotos}
                    </p>
                  )}
                </Field>

                <Field label="Vídeo" hint="Opcional. Un vídeo corto ayuda mucho (máx. ~8 MB).">
                  <input
                    name="video"
                    type="file"
                    accept="video/*"
                    className="w-full min-h-[48px] text-sm text-gray-700 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:bg-gray-200 file:text-gray-800 file:font-bold file:text-sm file:cursor-pointer hover:file:bg-gray-300 border border-gray-300 rounded-xl px-3 py-2 bg-white"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full min-h-[52px] bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-xl transition-colors cursor-pointer"
                >
                  Enviar reporte gratis
                </button>
                <p className="text-center text-xs text-gray-500">
                  Al enviar aceptas que gestionemos tu reclamación ante la administración competente. 100 % gratis.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Preguntas frecuentes</h2>
          <img
            src="/media/carretera-convencional-atardecer-cuerpo.webp"
            alt="Carretera convencional española al atardecer, en buen estado de conservación"
            className="w-full rounded-2xl shadow-lg mb-8"
            loading="lazy"
          />
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full min-h-[52px] flex items-center justify-between gap-3 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 text-sm md:text-base">{f.q}</span>
                    {open ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                      {f.q.includes("multa") ? (
                        <>
                          Entonces tienes dos frentes: reclama el arreglo de la señal y recurre la multa. Una señal
                          defectuosa, tapada o contradictoria puede ser motivo de recurso.{" "}
                          <Link to="/" className="text-red-600 font-semibold hover:underline">
                            Analiza tu multa gratis con nuestro analizador
                          </Link>{" "}
                          y te decimos si es recurrible.
                        </>
                      ) : (
                        f.a
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-14 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black mb-3">Rellena unos datos y olvídate</h2>
          <p className="text-gray-300 mb-6">
            Nosotros presentamos la reclamación gratis. Y si una señal en mal estado te costó una multa,{" "}
            <Link to="/" className="text-red-400 font-bold hover:underline">
              analízala gratis aquí
            </Link>
            .
          </p>
          <a
            href="#formulario"
            className="inline-block min-h-[52px] leading-[52px] px-8 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-colors"
          >
            Hacer mi reporte
          </a>
        </div>
      </section>

      </main>
      <SharedFooter />
    </div>
  );
}
