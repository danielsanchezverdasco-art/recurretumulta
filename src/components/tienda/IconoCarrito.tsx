import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { leerCarrito } from "./carrito-store.ts";

// Icono del carrito en la cabecera: tamaño fijo (sin CLS) y el contador se lee tras montar.
export default function IconoCarrito() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const upd = () => setN(leerCarrito().reduce((a, i) => a + i.cantidad, 0));
    upd();
    window.addEventListener("rtm-carrito", upd);
    window.addEventListener("storage", upd);
    return () => { window.removeEventListener("rtm-carrito", upd); window.removeEventListener("storage", upd); };
  }, []);
  return (
    <Link to="/tienda/carrito/" aria-label={n ? `Carrito (${n})` : "Carrito"} className="relative flex items-center justify-center w-9 h-9 rounded-full text-gray-700 hover:bg-gray-100 cursor-pointer shrink-0">
      <ShoppingCart className="w-5 h-5" />
      {n > 0 && <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-red-600 text-white text-[10px] font-black leading-4 text-center">{n}</span>}
    </Link>
  );
}
