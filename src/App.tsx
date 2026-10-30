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
const ComunidadesIndexPage = lazy(() => import("./pages/comunidades/page.tsx"));
const ProvinciasIndexPage = lazy(() => import("./pages/provincias/page.tsx"));
const ProvinciaRadaresPage = lazy(() => import("./pages/provincias/[provincia].tsx"));
const PrivacidadPage = lazy(() => import("./pages/Privacidad.tsx"));
const TerminosPage = lazy(() => import("./pages/Terminos.tsx"));
const CookiesPage = lazy(() => import("./pages/Cookies.tsx"));
const ContactoPage = lazy(() => import("./pages/Contacto.tsx"));
// 12/10/2026: moderación de reseñas (privada: noindex, fuera de sitemap y prerender).
const ModerarResenasPage = lazy(() => import("./pages/ModerarResenas.tsx"));
const SobreNosotrosPage = lazy(() => import("./pages/SobreNosotros.tsx"));
const ExplorarPorMarcaPage = lazy(() => import("./pages/ExplorarPorMarca.tsx"));
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
// 19/10/2026 (router 5/6): índices y fichas de autocaravanas + índice de radares
// (la ruta radares/:id ya la registró el agente de páginas). Lazy para no
// engordar el chunk inicial.
const AutocaravanasIndexPage = lazy(() => import("./pages/AutocaravanasIndex.tsx"));
const AutocaravanasFichaPage = lazy(() => import("./pages/AutocaravanasFicha.tsx"));
// 20/10/2026 (merlin-caravanas-rutas-v4): índice y fichas de caravanas
// (/caravanas/ y /caravanas/<slug>/). Las 72 fichas existían en datos
// (comparador-caravanas-*.ts) pero ninguna ruta las servía: 404.
const CaravanasIndexPage = lazy(() => import("./pages/CaravanasIndex.tsx"));
const CaravanasFichaPage = lazy(() => import("./pages/CaravanasFicha.tsx"));
// 19/10/2026 (campers 7/9): índice y fichas de campers (/campers/ y /campers/<slug>/).
const CampersIndexPage = lazy(() => import("./pages/CampersIndex.tsx"));
const CampersFichaPage = lazy(() => import("./pages/CampersFicha.tsx"));
const RadaresIndexPage = lazy(() => import("./pages/RadaresIndex.tsx"));
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
const PoliticaEditorialPage = lazy(() => import("./pages/PoliticaEditorial.tsx"));
const GuiasIndexPage = lazy(() => import("./pages/guias/index.tsx"));
const GuiaRadaresPage = lazy(() => import("./pages/guias/radares.tsx"));
const RadarPage = lazy(() => import("./pages/RadarPage.tsx"));
const GuiaZbePage = lazy(() => import("./pages/guias/zbe.tsx"));
const GuiaPrescripcionPage = lazy(() => import("./pages/guias/prescripcion.tsx"));
const GuiaViciosFormaPage = lazy(() => import("./pages/guias/vicios-forma.tsx"));
const GuiaAlcoholDrogasPage = lazy(() => import("./pages/guias/alcohol-drogas.tsx"));
const GuiaPatinetesPage = lazy(() => import("./pages/guias/patinetes-electricos.tsx"));
const GuiaItvDocumentacionPage = lazy(() => import("./pages/guias/itv-documentacion.tsx"));
const GuiaZbeEtiquetasPage = lazy(() => import("./pages/guias/zbe-etiquetas.tsx"));
const GuiaCertificadoDgtPage = lazy(() => import("./pages/guias/certificado-dgt.tsx"));
const GuiaSeguroVmpPage = lazy(() => import("./pages/guias/seguro-vmp.tsx"));
const JuegoMonosPage = lazy(() => import("./pages/JuegoMonos.tsx"));
const JuegoMonosBasesPage = lazy(() => import("./pages/JuegoMonosBases.tsx"));
const HubFichas = lazy(() => import("./pages/HubFichas.tsx"));
const HubMarca = lazy(() => import("./pages/HubMarca.tsx"));
const FavoritosDelMesPage = lazy(() => import("./pages/FavoritosDelMes.tsx"));
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
      <Route path="blog/zeekr-9x-precio-espana-lanzamiento-octubre-2026" element={<Navigate to="/coches/zeekr-9x-2026-precio-ficha-tecnica/" replace />} />
      <Route path="blog/:slug" element={<BlogPostPage />} />
      <Route path="multas" element={<MultasIndexPage />} />
      <Route path="multas/:provincia" element={<MultaProvinciaPage />} />
      <Route path="comunidades" element={<ComunidadesIndexPage />} />
      <Route path="comunidades/:ccaa" element={<ComunidadPage />} />
      <Route path="provincias" element={<ProvinciasIndexPage />} />
      <Route path="provincias/:provincia" element={<ProvinciaRadaresPage />} />
      <Route path="privacidad" element={<PrivacidadPage />} />
      <Route path="politica-privacidad" element={<Navigate to="/privacidad/" replace />} />
      <Route path="terminos" element={<TerminosPage />} />
      <Route path="cookies" element={<CookiesPage />} />
      <Route path="politica-cookies" element={<Navigate to="/cookies/" replace />} />
      <Route path="contacto" element={<ContactoPage />} />
      {/* 12/10/2026: privada, no enlazar desde ningún sitio */}
      <Route path="moderar-resenas" element={<ModerarResenasPage />} />
      <Route path="sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="explorar-por-marca" element={<ExplorarPorMarcaPage />} />
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
      <Route path="coches" element={<HubFichas categoria="coches" />} />
      <Route path="motos" element={<HubFichas categoria="motos" />} />
      <Route path="patinetes" element={<HubFichas categoria="patinetes" />} />
      <Route path="coches/marca/:slug" element={<HubMarca />} />
      <Route path="motos/marca/:slug" element={<HubMarca />} />
      <Route path="patinetes/marca/:slug" element={<HubMarca />} />
      <Route path="coches/:slug" element={<CochesFichaPage />} />
      <Route path="comparador-motos" element={<ComparadorMotosPage />} />
      <Route path="fichas-tecnicas" element={<FichasTecnicasPage />} />
      <Route path="favoritos-del-mes" element={<FavoritosDelMesPage />} />
      <Route path="motos/:slug" element={<MotosFichaPage />} />
      <Route path="comparador-patinetes" element={<ComparadorPatinetesPage />} />
      <Route path="comparador/mas-vendidos" element={<MasVendidosPage />} />
      <Route path="patinetes/:slug" element={<PatinetesFichaPage />} />
      {/* 19/10/2026 (router 5/6): autocaravanas y radares, junto a las fichas */}
      <Route path="autocaravanas" element={<AutocaravanasIndexPage />} />
      <Route path="autocaravanas/:slug" element={<AutocaravanasFichaPage />} />
      {/* 19/10/2026 (campers 7/9): campers, junto a las autocaravanas */}
      <Route path="campers" element={<CampersIndexPage />} />
      <Route path="campers/:slug" element={<CampersFichaPage />} />
      {/* 20/10/2026 (merlin-caravanas-rutas-v4): caravanas, junto a las campers */}
      <Route path="caravanas" element={<CaravanasIndexPage />} />
      <Route path="caravanas/:slug" element={<CaravanasFichaPage />} />
      <Route path="radares" element={<RadaresIndexPage />} />
      <Route path="rankings" element={<RankingsIndexPage />} />
      <Route path="rankings/:slug" element={<RankingsPage />} />
      <Route path="calendario-lanzamientos" element={<Navigate to="/calendario-lanzamientos-2026-2027/" replace />} />
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
      <Route path="politica-editorial" element={<PoliticaEditorialPage />} />
      <Route path="guias" element={<GuiasIndexPage />} />
      <Route path="guias/radares" element={<GuiaRadaresPage />} />
      <Route path="radares/:id" element={<RadarPage />} />
      <Route path="guias/zbe" element={<GuiaZbePage />} />
      <Route path="guias/prescripcion" element={<GuiaPrescripcionPage />} />
      <Route path="guias/vicios-forma" element={<GuiaViciosFormaPage />} />
      <Route path="guias/alcohol-drogas" element={<GuiaAlcoholDrogasPage />} />
      <Route path="guias/patinetes-electricos" element={<GuiaPatinetesPage />} />
      <Route path="guias/itv-documentacion" element={<GuiaItvDocumentacionPage />} />
      <Route path="guias/zbe-etiquetas" element={<GuiaZbeEtiquetasPage />} />
      <Route path="guias/certificado-dgt" element={<GuiaCertificadoDgtPage />} />
      <Route path="guias/seguro-vmp" element={<GuiaSeguroVmpPage />} />
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
      {/* 21/10/2026 (v4.5.3): bloque «Relacionados» eliminado por orden del usuario. */}
      {/* Caza de monos (05/10/2026): inyección 100% en cliente del mono aleatorio
          de la ruta actual. Suspense propio con fallback null para no bloquear
          el render de la página. Sin tocar el prerender. */}
      <Suspense fallback={null}>
        <MonoEnRuta />
      </Suspense>
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
            <Suspense fallback={<PageLoader />}>
              <FadedRoutes />
            </Suspense>
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
