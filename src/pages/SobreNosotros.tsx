import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { Users, ArrowLeft, GraduationCap, ShieldCheck, BookOpen } from "lucide-react";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const YEAR = new Date().getFullYear();

// Autoría: Daniel, fundador y responsable de contenidos de RecurreTuMulta.online.
const TEAM = [
  {
    name: "Daniel",
    role: "Fundador y responsable de contenidos",
    specialty: "Divulgación sobre multas de tráfico y seguridad vial",
    bio: "Daniel es el fundador de RecurreTuMulta.online y el responsable de sus contenidos. Revisa cada guía publicada contrastándola con la normativa vigente (Real Decreto Legislativo 6/2015, Ley 39/2015).",
  },
  {
    name: "Supervisión técnica de producto",
    role: "Desarrollo del analizador de IA",
    specialty: "Ingeniería de producto y modelos de lenguaje aplicados a documentos legales",
    bio: "El equipo técnico diseña y ajusta el sistema de análisis para que identifique de forma consistente los defectos de forma y plazos aplicables a cada expediente sancionador.",
  },
];

const SOURCES = [
  { name: "Dirección General de Tráfico (DGT)", url: "https://www.dgt.es" },
  { name: "Boletín Oficial del Estado (BOE)", url: "https://www.boe.es" },
  { name: "Agencia Española de Protección de Datos (AEPD)", url: "https://www.aepd.es" },
];

export default function SobreNosotrosPage() {

  useSeo({
    title: "Quiénes somos",
    description: "Conoce a Daniel, fundador de RecurreTuMulta.online: cómo verificamos la información publicada, en qué fuentes oficiales nos basamos y cuál es nuestro compromiso de transparencia.",
    canonical: "/sobre-nosotros",
    keywords: ["quiénes somos RecurreTuMulta", "fundador RecurreTuMulta", "transparencia contenido legal"],
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Quiénes somos — RecurreTuMulta.online",
      "url": "https://recurretumulta.online/sobre-nosotros",
      "inLanguage": "es-ES",
    },
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SharedNavbar />

      <main className="max-w-3xl mx-auto px-4 pt-[73px] pb-12 space-y-10">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> {"backToHome"}
        </Link>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-red-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900">¿Quién está detrás de RecurreTuMulta.online?</h1>
          </div>
          <p className="text-sm text-gray-500">Última actualización: {YEAR}</p>
        </div>

        <section className="space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            RecurreTuMulta.online es una herramienta española que combina inteligencia artificial con normativa
            de tráfico real para ayudarte a entender si tu multa tiene defectos de forma o argumentos válidos
            para recurrirla. No somos un despacho de abogados: somos un equipo de redacción y desarrollo de
            producto que trabaja para que la información sobre tus derechos como conductor sea clara, accesible
            y rigurosa.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Creemos que la transparencia sobre quién escribe y verifica el contenido es tan importante como el
            contenido en sí. Por eso publicamos esta página.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-red-600" />
            Nuestro equipo
          </h2>
          <p className="text-xs text-gray-400">
            La autoría mostrada a continuación es la oficial de RecurreTuMulta.online.          </p>
          <div className="space-y-3">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-2xl border border-gray-200 p-5 space-y-1.5">
                <p className="font-black text-sm text-gray-900">{member.name}</p>
                <p className="text-xs font-semibold text-red-600">{member.role}</p>
                <p className="text-xs text-gray-500">Especialidad: {member.specialty}</p>
                <p className="text-sm text-gray-700 leading-relaxed pt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            Cómo verificamos nuestro contenido
          </h2>
          <ul className="space-y-2">
            {[
              "Cada guía se contrasta con la Ley de Tráfico y Seguridad Vial (RDL 6/2015) y la Ley 39/2015 del Procedimiento Administrativo Común.",
              "Revisamos periódicamente los artículos para reflejar cambios normativos y actualizamos la fecha de última revisión.",
              "El analizador de IA no promete resultados: describe posibles defectos e indicios detectados en el documento, que el usuario debe valorar por su cuenta o con un profesional.",
              "No inventamos estadísticas de éxito. Cuando mencionamos datos, indicamos la fuente.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-red-600" />
            Fuentes que utilizamos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SOURCES.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:border-red-200 hover:bg-red-50 transition-colors text-center"
              >
                {s.name}
              </a>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl border border-gray-200 p-5 space-y-2">
          <p className="text-sm font-bold text-gray-900">¿Tienes dudas sobre nuestro contenido?</p>
          <p className="text-sm text-gray-600">
            Escríbenos a{" "}
            <a href="mailto:soporte@recurretumulta.online" className="text-red-600 underline">
              soporte@recurretumulta.online
            </a>{" "}
            o visita nuestra página de{" "}
            <Link to="/contacto" className="text-red-600 underline">
              contacto
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter />
      </footer>
    </div>
  );
}
