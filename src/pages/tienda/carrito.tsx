import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { PRODUCTOS_TIENDA, CHECKOUT_ACTIVO } from "@/lib/tienda-catalogo.ts";
import { leerCarrito, guardarCarrito, type LineaCarrito } from "@/components/tienda/carrito-store.ts";

// Carrito + checkout. El pago (Stripe Checkout, modo test) solo se activa con
// VITE_TIENDA_CHECKOUT=1 y las claves en variables de entorno de Netlify. Por defecto: «Próximamente».
export default function CarritoPage() {
  useSeo({ title: "Carrito · Tienda RecurreTuMulta", description: "Tu carrito de la tienda de RecurreTuMulta.", canonical: "/tienda/carrito", noindex: true });
  const [lineas, setLineas] = useState<LineaCarrito[]>([]);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => setLineas(leerCarrito()), []);
  const items = lineas.map((l) => ({ ...l, p: PRODUCTOS_TIENDA.find((p) => p.slug === l.slug) })).filter((x) => x.p && x.p.estado === "disponible" && x.p.precio !== null);
  const total = items.reduce((a, x) => a + (x.p!.precio as number) * x.cantidad, 0);
  const cambiar = (slug: string, d: number) => {
    const n = lineas.map((l) => (l.slug === slug ? { ...l, cantidad: l.cantidad + d } : l)).filter((l) => l.cantidad > 0);
    setLineas(n); guardarCarrito(n);
  };
  const pagar = async () => {
    setEnviando(true); setError("");
    try {
      const r = await fetch("/.netlify/functions/tienda-checkout", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lineas: items.map((x) => ({ slug: x.slug, cantidad: x.cantidad })) }) });
      const j = await r.json();
      if (!r.ok || !j.url) throw new Error(j.error || "No se pudo iniciar el pago");
      location.href = j.url;
    } catch (e) { setError((e as Error).message); setEnviando(false); }
  };
  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <div className="pt-[57px] max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-black text-gray-900 mb-4">Tu carrito</h1>
        {items.length === 0 ? (
          <p className="text-gray-600">El carrito está vacío. <Link to="/tienda/" className="text-red-600 font-bold">Ver la tienda</Link></p>
        ) : (
          <ul className="divide-y divide-gray-100 mb-6">
            {items.map((x) => (
              <li key={x.slug} className="py-3 flex items-center justify-between gap-3">
                <span className="font-semibold text-gray-900">{x.p!.nombre}</span>
                <span className="flex items-center gap-2">
                  <button onClick={() => cambiar(x.slug, -1)} className="w-7 h-7 rounded-full bg-gray-100" aria-label="Quitar uno">−</button>
                  {x.cantidad}
                  <button onClick={() => cambiar(x.slug, 1)} className="w-7 h-7 rounded-full bg-gray-100" aria-label="Añadir uno">+</button>
                </span>
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && <p className="text-lg font-black mb-4">Total: {total.toFixed(2).replace(".", ",")} € <span className="text-xs font-normal text-gray-500">+ envío aparte</span></p>}
        {CHECKOUT_ACTIVO && items.length > 0 ? (
          <button onClick={pagar} disabled={enviando} className="rounded-full bg-gradient-to-r from-red-700 to-red-600 px-5 py-2.5 text-sm font-extrabold text-white disabled:opacity-60">{enviando ? "Redirigiendo…" : "Pagar (modo prueba)"}</button>
        ) : (
          <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"><strong>Compra próximamente.</strong> El pago en la tienda aún no está activo. El recurso PDF se compra desde el <Link to="/#analizador" className="font-bold underline">analizador</Link>.</p>
        )}
        {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
      </div>
      <SharedFooter />
    </div>
  );
}
