import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import { ErrorBoundary } from "./components/error-boundary.tsx";
import { LazyConvexProvider } from "./components/providers/convex-lazy.tsx";

import ScrollToTop from "./components/scroll-to-top.tsx";
import WhatsAppBubble from "./components/whatsapp-bubble.tsx";
// ReferralCapture: solo trabaja con ?ref= en la URL. Lazy para no meter
// convex/react en el chunk inicial (07/10/2026, PageSpeed). Retorna null.
const ReferralCapture = lazy(() => import("./components/creadores/ReferralCapture.tsx"));
import { CazaMonosProvider } from "./components/caza-monos/CazaMonosContext.tsx";
import MonoEscondido from "./components/caza-monos/MonoEscondido.tsx";
import { fijoId } from "./components/caza-monos/CazaMonosContext.tsx";
// Caza de monos (05/10/2026): el JS del juego va en chunk diferido para no tocar
// el LCP (exigencia de Daniel). El provider (contexto) sí es estático y ligero.
const MonoEnRuta = lazy(() => import("./components/caza-monos/MonoEnRuta.tsx"));
const TutorialCaza = lazy(() => import("./components/caza-monos/TutorialCaza.tsx"));
const HitosCaza = lazy(() => import("./components/caza-monos/HitosCaza.tsx"));
import { Splash } from "./components/splash.tsx";
// Carga diferida también para la portada (05/10/2026, rendimiento): Index
// importaba BLOG_LITE (1.5MB) y lo metía en el chunk principal que cargan
// TODAS las páginas. El HTML prerenderizado pinta igual de rápido.
const Index = lazy(() => import("./pages/Index.tsx"));

// Lazy loading para todas las demás rutas — no se cargan hasta que el usuario las visita
const BlogPage = lazy(() => import("./pages/blog/page.tsx"));
const BlogPostPage = lazy(() => import("./pages/blog/[slug].tsx"));
const MultasIndexPage = lazy(() => import("./pages/multas/page.tsx"));
const MultaProvinciaPage = lazy(() => import("./pages/multas/[provincia].tsx"));
const ComunidadPage = lazy(() => import("./pages/comunidades/[ccaa].tsx"));
const PrivacidadPage = lazy(() => import("./pages/Privacidad.tsx"));
const TerminosPage = lazy(() => import("./pages/Terminos.tsx"));
const CookiesPage = lazy(() => import("./pages/Cookies.tsx"));
const ContactoPage = lazy(() => import("./pages/Contacto.tsx"));
// 12/10/2026: moderación de reseñas (privada: noindex, fuera de sitemap y prerender).
const ModerarResenasPage = lazy(() => import("./pages/ModerarResenas.tsx"));
const SobreNosotrosPage = lazy(() => import("./pages/SobreNosotros.tsx"));
const ComparativaPage = lazy(() => import("./pages/Comparativa.tsx"));
const AvisoLegalPage = lazy(() => import("./pages/AvisoLegal.tsx"));
const EmpresasPage = lazy(() => import("./pages/empresas/page.tsx"));
const ReportarCarreteraPage = lazy(() => import("./pages/reportar-carretera/page.tsx"));
const GraciasReportePage = lazy(() => import("./pages/reportar-carretera/gracias.tsx"));
const HerramientasIndexPage = lazy(() => import("./pages/herramientas/page.tsx"));
const ContratoCompraventaPage = lazy(() => import("./pages/herramientas/contrato-compraventa-vehiculo/page.tsx"));
const PrecioItvPage = lazy(() => import("./pages/herramientas/precio-itv/page.tsx"));
const CalculadoraKwACvPage = lazy(() => import("./pages/calculadora-kw-a-cv/page.tsx"));
const CalculadoraConsumoCamperPage = lazy(() => import("./pages/calculadora-consumo-camper/page.tsx"));
const EquivalenciaNeumaticosItvPage = lazy(() => import("./pages/equivalencia-neumaticos-itv/page.tsx"));
const ValorVenalVehiculoPage = lazy(() => import("./pages/valor-venal-vehiculo/page.tsx"));
const BuscadorInfraccionesPage = lazy(() => import("./pages/BuscadorInfracciones.tsx"));
const BuscadorCochesPage = lazy(() => import("./pages/BuscadorCoches.tsx"));
const MejorCochePresupuestoPage = lazy(() => import("./pages/MejorCochePresupuesto.tsx"));
const SenalesTraficoPage = lazy(() => import("./pages/SenalesTrafico.tsx"));
const ComparadorCochesPage = lazy(() => import("./pages/ComparadorCoches.tsx"));
const ComparadorGarantiaBateriaPage = lazy(() => import("./pages/ComparadorGarantiaBateria.tsx"));
const CochesFichaPage = lazy(() => import("./pages/CochesFicha.tsx"));
const ComparadorMotosPage = lazy(() => import("./pages/ComparadorMotos.tsx"));
const FichasTecnicasPage = lazy(() => import("./pages/FichasTecnicas.tsx"));
const MotosFichaPage = lazy(() => import("./pages/MotosFicha.tsx"));
const ComparadorPatinetesPage = lazy(() => import("./pages/ComparadorPatinetes.tsx"));
const PatinetesFichaPage = lazy(() => import("./pages/PatinetesFicha.tsx"));
const MasVendidosPage = lazy(() => import("./pages/MasVendidos.tsx"));
const RankingsPage = lazy(() => import("./pages/Rankings.tsx"));
const RankingsIndexPage = lazy(() =>
  import("./pages/Rankings.tsx").then((m) => ({ default: m.RankingsIndex }))
);
const CalendarioLanzamientosPage = lazy(() => import("./pages/CalendarioLanzamientos.tsx"));
const CalculadoraAutonomiaRealPage = lazy(() => import("./pages/calculadora-autonomia-real/page.tsx"));
const CalculadoraEtiquetaDgtPage = lazy(() => import("./pages/calculadora-etiqueta-dgt/page.tsx"));
const CalculadoraAlcoholemiaPage = lazy(() => import("./pages/calculadora-alcoholemia/page.tsx"));
const GuiaAyudasPage = lazy(() => import("./pages/guias/ayudas-compra-coche-electrico-2026.tsx"));
const GuiaSegundaManoPage = lazy(() => import("./pages/guias/comprar-coche-electrico-segunda-mano.tsx"));
const GlosarioMotorIndexPage = lazy(() => import("./pages/glosario/page.tsx"));
const NewsletterBajaPage = lazy(() => import("./pages/newsletter/baja.tsx"));
const AlertasBajaPage = lazy(() => import("./pages/alertas/baja.tsx"));
const NewsletterPage = lazy(() => import("./pages/Newsletter.tsx"));
const DatoDelDiaPage = lazy(() => import("./pages/DatoDelDia.tsx"));
const PreguntaDelDiaPage = lazy(() => import("./pages/PreguntaDelDia.tsx"));
const TalDiaComoHoyMotorPage = lazy(() => import("./pages/TalDiaComoHoyMotor.tsx"));
const GlosarioMotorTerminoPage = lazy(() => import("./pages/glosario/[termino].tsx"));
const GlosarioMultaPage = lazy(() => import("./pages/GlosarioMulta.tsx"));
const MetodologiaPage = lazy(() => import("./pages/Metodologia.tsx"));
const GuiaRadaresPage = lazy(() => import("./pages/guias/radares.tsx"));
const GuiaZbePage = lazy(() => import("./pages/guias/zbe.tsx"));
const GuiaPrescripcionPage = lazy(() => import("./pages/guias/prescripcion.tsx"));
const GuiaViciosFormaPage = lazy(() => import("./pages/guias/vicios-forma.tsx"));
const GuiaAlcoholDrogasPage = lazy(() => import("./pages/guias/alcohol-drogas.tsx"));
const GuiaPatinetesPage = lazy(() => import("./pages/guias/patinetes-electricos.tsx"));
const GuiaItvDocumentacionPage = lazy(() => import("./pages/guias/itv-documentacion.tsx"));
const JuegoMonosPage = lazy(() => import("./pages/JuegoMonos.tsx"));
const JuegoMonosBasesPage = lazy(() => import("./pages/JuegoMonosBases.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Spinner mínimo mientras carga la ruta lazy.
// data-pageloader: el prerender espera a que desaparezca (señal de que el
// chunk lazy de la ruta ya renderizó; el canonical solo no basta porque el
// HTML servido ya lo trae del prerender anterior).
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white" data-pageloader="1">
      <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Rutas de contenido. El sitio es 100% en español, sin prefijos de idioma.
function LocaleRedirect() {
  const { pathname, search, hash } = useLocation();
  const to = pathname.replace(/^\/(en|fr|de|pt)(?=\/|$)/, "") || "/";
  return <Navigate to={to + search + hash} replace />;
}

function ContentRoutes() {
  return (
    <>
      <Route index element={<Index />} />
      <Route path="blog" element={<BlogPage />} />
      {/* Redirects de contenido fusionado/eliminado (auditoría 03/10/2026): van ANTES de blog/:slug */}
      <Route path="blog/zeekr-9x-precio-espana-lanzamiento-octubre-2026" element={<Navigate to="/blog/zeekr-9x-2026-precio-ficha-tecnica" replace />} />
      <Route path="blog/:slug" element={<BlogPostPage />} />
      <Route path="multas" element={<MultasIndexPage />} />
      <Route path="multas/:provincia" element={<MultaProvinciaPage />} />
      <Route path="comunidades/:ccaa" element={<ComunidadPage />} />
      <Route path="privacidad" element={<PrivacidadPage />} />
      <Route path="politica-privacidad" element={<Navigate to="/privacidad" replace />} />
      <Route path="terminos" element={<TerminosPage />} />
      <Route path="cookies" element={<CookiesPage />} />
      <Route path="politica-cookies" element={<Navigate to="/cookies" replace />} />
      <Route path="contacto" element={<ContactoPage />} />
      {/* 12/10/2026: privada, no enlazar desde ningún sitio */}
      <Route path="moderar-resenas" element={<ModerarResenasPage />} />
      <Route path="sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="comparativa" element={<ComparativaPage />} />
      <Route path="aviso-legal" element={<AvisoLegalPage />} />
      <Route path="empresas" element={<EmpresasPage />} />
      <Route path="reportar-carretera" element={<ReportarCarreteraPage />} />
      <Route path="reportar-carretera/gracias" element={<GraciasReportePage />} />
      <Route path="herramientas" element={<HerramientasIndexPage />} />
      <Route path="herramientas/contrato-compraventa-vehiculo" element={<ContratoCompraventaPage />} />
      <Route path="herramientas/precio-itv" element={<PrecioItvPage />} />
      <Route path="calculadora-kw-a-cv" element={<CalculadoraKwACvPage />} />
      <Route path="calculadora-consumo-camper" element={<CalculadoraConsumoCamperPage />} />
      <Route path="equivalencia-neumaticos-itv" element={<EquivalenciaNeumaticosItvPage />} />
      <Route path="valor-venal-vehiculo" element={<ValorVenalVehiculoPage />} />
      <Route path="buscador-codigo-multa" element={<BuscadorInfraccionesPage />} />
      <Route path="buscador-coches" element={<BuscadorCochesPage />} />
      <Route path="mejor-coche-por-presupuesto" element={<MejorCochePresupuestoPage />} />
      <Route path="senales-trafico" element={<SenalesTraficoPage />} />
      <Route path="comparador-coches" element={<ComparadorCochesPage />} />
      <Route path="comparador-garantia-bateria" element={<ComparadorGarantiaBateriaPage />} />
      <Route path="coches/:slug" element={<CochesFichaPage />} />
      <Route path="comparador-motos" element={<ComparadorMotosPage />} />
      <Route path="fichas-tecnicas" element={<FichasTecnicasPage />} />
      <Route path="motos/:slug" element={<MotosFichaPage />} />
      <Route path="comparador-patinetes" element={<ComparadorPatinetesPage />} />
      <Route path="comparador/mas-vendidos" element={<MasVendidosPage />} />
      <Route path="patinetes/:slug" element={<PatinetesFichaPage />} />
      <Route path="rankings" element={<RankingsIndexPage />} />
      <Route path="rankings/:slug" element={<RankingsPage />} />
      <Route path="calendario-lanzamientos" element={<Navigate to="/calendario-lanzamientos-2026-2027" replace />} />
      <Route path="calendario-lanzamientos-2026-2027" element={<CalendarioLanzamientosPage />} />
      <Route path="calculadora-autonomia-real" element={<CalculadoraAutonomiaRealPage />} />
      <Route path="calculadora-etiqueta-dgt" element={<CalculadoraEtiquetaDgtPage />} />
      <Route path="calculadora-alcoholemia" element={<CalculadoraAlcoholemiaPage />} />
      <Route path="guias/ayudas-compra-coche-electrico-2026" element={<GuiaAyudasPage />} />
      <Route path="guias/comprar-coche-electrico-segunda-mano" element={<GuiaSegundaManoPage />} />
      <Route path="glosario" element={<GlosarioMotorIndexPage />} />
      <Route path="newsletter/baja" element={<NewsletterBajaPage />} />
      <Route path="alertas/baja" element={<AlertasBajaPage />} />
      <Route path="newsletter" element={<NewsletterPage />} />
      <Route path="el-dato-del-dia" element={<DatoDelDiaPage />} />
      <Route path="la-pregunta-del-dia" element={<PreguntaDelDiaPage />} />
      <Route path="tal-dia-como-hoy-motor" element={<TalDiaComoHoyMotorPage />} />
      <Route path="glosario/:termino" element={<GlosarioMotorTerminoPage />} />
      <Route path="glosario-multa" element={<GlosarioMultaPage />} />
      <Route path="metodologia" element={<MetodologiaPage />} />
      <Route path="guias/radares" element={<GuiaRadaresPage />} />
      <Route path="guias/zbe" element={<GuiaZbePage />} />
      <Route path="guias/prescripcion" element={<GuiaPrescripcionPage />} />
      <Route path="guias/vicios-forma" element={<GuiaViciosFormaPage />} />
      <Route path="guias/alcohol-drogas" element={<GuiaAlcoholDrogasPage />} />
      <Route path="guias/patinetes-electricos" element={<GuiaPatinetesPage />} />
      <Route path="guias/itv-documentacion" element={<GuiaItvDocumentacionPage />} />
      {/* Caza de monos (05/10/2026) */}
      <Route path="juego-monos" element={<JuegoMonosPage />} />
      <Route path="juego-monos/bases" element={<JuegoMonosBasesPage />} />
      <Route path="/gana-dinero" element={<Navigate to="/" replace />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    </>
  );
}

// Fundido entre páginas (interactividad global 03/10/2026): remonta el
// contenedor con cada ruta para que la animación rtm-page-enter se dispare
// en cada navegación. Debe vivir dentro del BrowserRouter (useLocation).
function FadedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="rtm-page-enter relative">
      <Routes>
        {/* Español (idioma por defecto) — sin prefijo de idioma en la URL */}
        {ContentRoutes()}

        {/* Redirecciones de idiomas eliminados → español */}
        <Route path="/en/*" element={<LocaleRedirect />} />

        <Route path="/fr/*" element={<LocaleRedirect />} />


        <Route path="/de/*" element={<LocaleRedirect />} />


        <Route path="/pt/*" element={<LocaleRedirect />} />



        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Caza de monos (05/10/2026): inyección 100% en cliente del mono aleatorio
          de la ruta actual. Suspense propio con fallback null para no bloquear
          el render de la página. Sin tocar el prerender. */}
      <Suspense fallback={null}>
        <MonoEnRuta />
      </Suspense>
    </div>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { let c = null; try { c = localStorage.getItem("rtm-cookie-consent"); } catch (e) { /* Sin acceso a localStorage; se muestra el banner por defecto */ } if (!c) requestAnimationFrame(() => setVisible(true)); }, []);
  if (!visible) return null;
  const accept = () => { try { localStorage.setItem("rtm-cookie-consent", "accepted"); } catch (e) { /* No se pudo persistir; se oculta el banner igualmente */ } setVisible(false); };
  const reject = () => { try { localStorage.setItem("rtm-cookie-consent", "rejected"); } catch (e) { /* No se pudo persistir; se oculta el banner igualmente */ } setVisible(false); };
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3" role="dialog" aria-label="Aviso de cookies">
      <div className="relative max-w-3xl mx-auto bg-gray-950 text-white rounded-xl shadow-lg border border-gray-800 p-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Caza de monos: el mono de la galleta, fijo temático (05/10/2026) */}
        <MonoEscondido
          id={fijoId("cookies-banner")}
          pose="mono-galleta"
          size={34}
          className="absolute -top-3 left-4"
          titulo="¡Un mono con su galleta! Haz clic para cazarlo 🍪"
        />
        <p className="text-xs sm:text-sm text-gray-300 flex-1">Usamos cookies propias para que la web funcione correctamente. Más información en nuestra <Link to="/cookies" className="underline hover:text-white">política de cookies</Link>.</p>
        <div className="flex gap-2 shrink-0">
          <button onClick={reject} className="text-sm font-semibold px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors">Rechazar</button>
          <button onClick={accept} className="bg-white text-gray-950 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <DefaultProviders>
        <BrowserRouter>
          <CazaMonosProvider>
            <ScrollToTop />
            <Suspense fallback={null}>
              {/* 16/10/2026 (fix radar): ReferralCapture usa useQuery/useMutation
                  de convex/react; sin LazyConvexProvider crashea ("Could not find
                  Convex client") si renderiza antes de que el AuthProvider diferido
                  tenga el cliente listo. Mismo patrón que BlogPage. */}
              <LazyConvexProvider>
                <ReferralCapture />
              </LazyConvexProvider>
            </Suspense>
            <Splash />
            <Suspense fallback={<PageLoader />}>
              <FadedRoutes />
            </Suspense>
            <CookieBanner />
            <WhatsAppBubble />
            {/* Mini-tutorial al cazar el primer mono (una sola vez) + hitos.
                Chunk diferido con fallback null: no bloquea el LCP. */}
            <Suspense fallback={null}>
              <TutorialCaza />
              <HitosCaza />
            </Suspense>
          </CazaMonosProvider>
        </BrowserRouter>
      </DefaultProviders>
    </ErrorBoundary>
  );
}
