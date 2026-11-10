import { CheckCircle, Mail, FileCheck, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import { Link } from "react-router-dom";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { Reveal } from "@/components/anim.tsx";

export default function GraciasReportePage() {
  useSeo({
    title: "Reporte recibido",
    description:
      "Hemos recibido tu reporte de carretera en mal estado. Lo revisamos y presentamos la reclamación gratis ante la administración.",
    canonical: "/reportar-carretera/gracias",
    noindex: true,
    keywords: ["reporte recibido", "reclamación carretera"],
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SharedNavbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 bg-gray-50">
        <div className="max-w-xl w-full text-center">
          <Reveal>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-balance">
              ¡Reporte recibido!
            </h1>
            <p className="text-gray-600 mb-8 text-balance">
              Gracias por avisarnos. Ya nos encargamos de todo: revisamos tu reporte y{" "}
              <strong className="text-gray-900">presentamos la reclamación gratis</strong> ante la
              administración titular de la vía.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Card className="rounded-2xl border border-gray-200 text-left mb-8">
              <img
                src="/media/reportar-carretera-hero.webp"
                alt="Bache en una carretera española con señal dañada: tu reporte ya está en marcha"
                className="w-full h-40 object-cover rounded-t-2xl"
                loading="lazy"
              />
              <CardContent className="p-6 space-y-4">
                <h2 className="font-black text-gray-900">¿Qué pasa ahora?</h2>
                {[
                  { icon: <FileCheck className="w-5 h-5 text-red-600" />, text: "Revisamos tus fotos y datos y preparamos la reclamación." },
                  { icon: <Bell className="w-5 h-5 text-red-600" />, text: "La presentamos ante la administración competente." },
                  { icon: <Mail className="w-5 h-5 text-red-600" />, text: "Te avisamos por email de cada novedad. Tú no tienes que hacer nada más." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5">{s.icon}</span>
                    <p className="text-sm text-gray-700">{s.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-left">
              <h2 className="font-black text-gray-900">Qué revisamos antes de reclamar</h2>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Antes de presentar nada comprobamos que las fotos muestren el daño con claridad
                y que la ubicación sea exacta, porque la reclamación va a la administración
                titular de esa vía —ayuntamiento, diputación o DGT según la carretera— y con
                una ubicación imprecisa la desestiman. Si falta algún dato te escribimos al
                email que dejaste en el reporte.
              </p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                La reclamación pide la reparación del desperfecto y deja constancia del riesgo
                para que, si el mal estado causa un accidente, quede registrado que la
                administración ya estaba avisada. No hay un plazo fijo para que reparen: te
                avisamos por email de cada novedad, incluida la respuesta si la hay.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-block min-h-[52px] leading-[52px] px-8 bg-gray-900 hover:bg-gray-800 text-white font-black rounded-xl transition-colors"
              >
                Volver al inicio
              </Link>
              <Link
                to="/reportar-carretera/"
                className="inline-block min-h-[52px] leading-[52px] px-8 bg-white border-2 border-gray-900 text-gray-900 font-black rounded-xl hover:bg-gray-100 transition-colors"
              >
                Hacer otro reporte
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <SharedFooter editorial={false} />
    </div>
  );
}
