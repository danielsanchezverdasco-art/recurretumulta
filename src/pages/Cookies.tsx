import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { Cookie } from "lucide-react";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";


export default function CookiesPage() {
  useSeo({
    title: "Política de Cookies",
    description: "Política de cookies de RecurreTuMulta.online. Qué cookies usamos, para qué y cómo puedes gestionarlas.",
    canonical: "/cookies",
    keywords: ["política cookies RecurreTuMulta", "cookies web multas DGT"],
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SharedNavbar />
      <main className="max-w-3xl mx-auto px-4 pt-[73px] pb-12 space-y-8">
        {/* Migas de pan visibles (23/10/2026) */}
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-gray-900">Política de Cookies</span>
        </nav>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <Cookie className="w-5 h-5 text-red-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900">{"Política de Cookies"}</h1>
            <button
              type="button"
              onClick={() => { try { localStorage.removeItem("rtm-cookie-consent"); } catch (e) { /* sin localStorage */ } window.location.reload(); }}
              className="mt-3 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              Configurar cookies
            </button>
          </div>
          <p className="text-sm text-gray-500">{"Última actualización: 24 de octubre de 2026"}</p>
        </div>
        <img src="/media/cookies-web.webp" alt="Política de cookies: cómo usamos las cookies en tu navegador" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg" loading="lazy" />

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-black text-gray-900">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador. Sirven para recordar tus preferencias, analizar el tráfico y personalizar la experiencia.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Cookies que usamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-bold">Nombre</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-bold">Proveedor</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-bold">Tipo</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-bold">Finalidad</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-bold">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "_ga, _gid", provider: "Google Analytics", type: "Analítica", purpose: "Estadísticas de uso anónimas", duration: "2 años / 24h" },
                    { name: "_gcl_au", provider: "Google Ads / Google Tag (vinculador de conversiones)", type: "Publicitaria", purpose: "Medir conversiones de anuncios", duration: "90 días" },
                    { name: "IDE", provider: "Google DoubleClick", type: "Publicitaria", purpose: "Anuncios personalizados", duration: "1 año" },
                    { name: "__stripe_*", provider: "Stripe", type: "Técnica/pago", purpose: "Gestión segura de pagos", duration: "Sesión" },
                  ].map((c) => (
                    <tr key={c.name} className="even:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 font-mono text-xs">{c.name}</td>
                      <td className="border border-gray-200 px-4 py-2">{c.provider}</td>
                      <td className="border border-gray-200 px-4 py-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          c.type === "Técnica" || c.type === "Técnica/pago" ? "bg-blue-50 text-blue-700" :
                          c.type === "Analítica" ? "bg-green-50 text-green-700" :
                          "bg-orange-50 text-orange-700"
                        }`}>{c.type}</span>
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-xs">{c.purpose}</td>
                      <td className="border border-gray-200 px-4 py-2 text-xs">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Cómo gestionar las cookies</h2>
            <img src="/media/cookies-web.webp" alt="Ajustes de privacidad y cookies en un navegador web" className="w-full h-40 sm:h-52 object-cover rounded-2xl shadow mb-6" loading="lazy" />
            <p>Puedes configurar tu navegador para aceptar o rechazar cookies en cualquier momento:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web</li>
              <li><strong>Edge:</strong> Configuración → Privacidad → Cookies y permisos del sitio</li>
            </ul>
            <p>Para desactivar las cookies de Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter editorial={false} />
      </footer>
    </div>
  );
}
