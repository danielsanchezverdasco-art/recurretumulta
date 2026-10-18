// Autocaravanas Westfalia — lote Merlín 1 (18/10/2026).
// Datos verificados: westfalia-mobil.com (web oficial del fabricante: ficha del modelo 600 D
// + catálogo oficial 2026). Precio "desde" publicado en la web oficial (mercado alemán),
// marcado en "aprox"; en España puede diferir.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_WESTFALIA_M1: Autocaravana[] = [
  {
    id: "westfalia-columbus-600d-2026-precio-ficha-tecnica",
    marca: "Westfalia",
    modelo: "Columbus 600 D",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: 67650,
    potenciaCv: 120,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5998,
    anchoMm: 2050,
    altoMm: 2600,
    pesoKg: 2935, // masa en orden de marcha según el catálogo oficial 2026
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 565, // calculada: 3.500 - 2.935 (MMA menos peso en orden de marcha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Cama transversal trasera de 140x197 cm con somier de láminas direccionales de serie: longitud generosa para una transversal en furgón",
      "Escalabilidad nocturna real hasta 5 plazas: la banqueta plegable patentada (180x90 cm) se despliega en dos segundos y el techo elevable opcional (200x135 cm) añade una más",
      "Calefacción diésel Eberspächer de 5 kW con doble zona: funciona con el gasoil del depósito y calienta por separado habitáculo y baño",
      "Nevera de compresor Dometic de 90 l con doble apertura (interior y exterior) y 100 l de agua limpia: autonomía de serie superior a la media",
      "Menos de 6 m con maletero modular grande: maniobrabilidad en carreteras estrechas sin renunciar a zona de carga versátil",
    ],
    contras: [
      "Carga útil muy justa en la práctica: una unidad 2026 real (180 CV automática con equipamiento) declara 3.161 kg, lo que deja solo 339 kg para viajeros, equipaje y agua",
      "Motor de serie de solo 120 CV para mover hasta 3.500 kg: el 140 CV con automática de 8 velocidades o el 180 CV son casi obligatorios y disparan el precio",
      "La tercera, cuarta y quinta plaza de noche no son de serie: dependen de opcionales de pago; 'hasta 5 plazas' es una cifra de catálogo, no la configuración base",
      "Baño compacto con WC extraíble tipo banco: ducha real con ventana, pero el WC plegable sacrifica comodidad diaria frente a una taza fija",
      "Electrificación de serie modesta: la batería de litio de 150 Ah llega con la edición Premium y el panel solar es opcional",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Westfalia Columbus 600 D, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/westfalia-columbus-600d-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Westfalia Columbus 600 D, cama transversal",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "westfalia-columbus-600d-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Westfalia (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Westfalia",
    },
    euroncap: null,
    fuenteNombre: "Westfalia (web oficial + catálogo 2026)",
    fuenteUrl: "https://westfalia-mobil.com/en/motorhomes/columbus-600-d/",
  },
];
