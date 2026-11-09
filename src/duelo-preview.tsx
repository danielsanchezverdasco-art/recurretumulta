import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DueloVS from "./components/DueloVS";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-100">
      <DueloVS
        items={[
          {
            id: "a",
            titulo: "Toyota Yaris Cross",
            subtitulo: "Híbrido · 2025",
            imagen: "/media/toyota-yaris-cross-130h-2025-precio-ficha-tecnica-hero.webp",
          },
          {
            id: "b",
            titulo: "MG ZS Hybrid+",
            subtitulo: "Híbrido · 2025",
            imagen: "/media/mg-zs-hybrid-plus-2025-precio-ficha-tecnica-hero.webp",
          },
        ]}
        filas={[
          { etiqueta: "Precio desde", valores: ["28.500 €", "24.000 €"], ganador: 1, barras: [60, 80] },
          { etiqueta: "Potencia", valores: ["130 CV", "197 CV"], ganador: 1, barras: [55, 85] },
          { etiqueta: "Consumo", valores: ["4,8 l/100 km", "5,1 l/100 km"], ganador: 0, barras: [85, 75] },
        ]}
        veredicto="El MG ZS Hybrid+ gana por precio y potencia; el Yaris Cross por consumo y reventa."
        id="duelo"
      />
    </div>
  </StrictMode>
);
