// Histórico de PVP "desde" por ficha de coche (id de COCHES_COMPARADOR).
//
// Fuente ÚNICA: radar diario de precios (cron recurretumulta-radar-precios),
// logs en goals/recurretumulta-online-daily-blog-publishing/hidden_files/radar-precios-*.md
// Solo precios verificados contra webs oficiales / km77 / carwow. NUNCA inventar puntos:
// cada punto viene de un cambio registrado por el radar con su fecha.
// El cron añade un punto {fecha, precio} cuando el PVP cambia respecto al último punto.

export interface PuntoPrecio {
  /** Fecha del registro, ISO yyyy-mm-dd */
  fecha: string;
  /** PVP "desde" en euros */
  precio: number;
}

export const HISTORICO_PRECIOS: Record<string, PuntoPrecio[]> = {
  "dacia-spring-2026-nueva-generacion-precio": [
    { fecha: "2026-10-03", precio: 16245 },

    { fecha: "2026-10-07", precio: 17045 },  ],
  "dacia-sandero-baja-precio-octubre-2026": [
    { fecha: "2026-10-03", precio: 13502 },
    { fecha: "2026-10-04", precio: 14490 },
  ],
  "hyundai-i20-baja-precio-octubre-2026": [
    { fecha: "2026-10-03", precio: 20910 },

    { fecha: "2026-10-06", precio: 21520 },  ],
  "zeekr-9x-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-03", precio: 121500 },
  ],
  "ebro-s700-precio-ficha-tecnica": [
    { fecha: "2026-10-03", precio: 27641 },
  ],
  "suzuki-swift-2024-precio-ficha-tecnica": [
    { fecha: "2026-10-03", precio: 18850 },
  ],
  "seat-leon-15-etsi-115-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-03", precio: 25490 },
    { fecha: "2026-10-04", precio: 29400 },
  ],
  "peugeot-e-5008-electrico-7-plazas-precio": [
    { fecha: "2026-10-03", precio: 44500 },
  ],
  "seat-ibiza-2026": [
    { fecha: "2026-10-03", precio: 18660 },

    { fecha: "2026-10-06", precio: 15390 },  ],
  "skoda-octavia-combi-20-tdi-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-03", precio: 38242 },
    { fecha: "2026-10-04", precio: 38600 },
  ],
  "kia-ev3-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 28620 },

    { fecha: "2026-10-07", precio: 37020 },  ],
  "opel-frontera-electric-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 25350 },
  ],
  "citroen-e-c3-aircross-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 25690 },

    { fecha: "2026-10-06", precio: 28740 },  ],
  "fiat-grande-panda-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 21135 },
  ],
  "leapmotor-b10-electrico-precio-espana": [
    { fecha: "2026-10-04", precio: 27900 },

    { fecha: "2026-10-12", precio: 29900 },  ],
  "leapmotor-c10-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 38400 },

    { fecha: "2026-10-06", precio: 37765 },  ],
  "leapmotor-t03-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 20410 },

    { fecha: "2026-10-06", precio: 20110 },  ],
  "ebro-s400-hibrido-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 27490 },
  ],
  "xpeng-g6-2026-restyling-precio-espana": [
    { fecha: "2026-10-04", precio: 43083 },
  ],
  "dacia-bigster-hybrid-precio-espana": [
    { fecha: "2026-10-04", precio: 29420 },
  ],
  "omoda-9-shs-precio-ficha-tecnica": [
    { fecha: "2026-10-04", precio: 50900 },
  ],
  "nissan-qashqai-mhev-158-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 27600 },
  ],
  "cupra-tavascan-2024-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 42530 },

    { fecha: "2026-10-07", precio: 43500 },  ],
  "fiat-500-hibrido-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 19140 },
  ],
  "fiat-600e-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 32400 },
  ],
  "peugeot-2008-hibrido-145-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 24200 },
  ],
  "tesla-model-3-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 36990 },
  ],
  "skoda-enyaq-60-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-05", precio: 40610 },
  ],
  "renault-megane-e-tech-2026-precio-autonomia": [
    { fecha: "2026-10-05", precio: 37685 },
  ],
  "volkswagen-polo-2026": [
    { fecha: "2026-10-05", precio: 21135 },
  ],
  "toyota-corolla-140h": [
    { fecha: "2026-10-06", precio: 25450 },
  ],
  "toyota-c-hr-140h": [
    { fecha: "2026-10-06", precio: 31725 },
  ],
  "toyota-yaris-120h": [
    { fecha: "2026-10-06", precio: 21500 },
  ],
  "peugeot-208-2026": [
    { fecha: "2026-10-06", precio: 17820 },
  ],
  "citroen-c3-2026": [
    { fecha: "2026-10-06", precio: 16240 },
  ],
  "volkswagen-id-buzz-electrico-precio-ficha-tecnica": [
    { fecha: "2026-10-06", precio: 57995 },
  ],
  "byd-seal-u-ev-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 43790 },
  ],
  "smart-1-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 29690 },
  ],
  "citroen-e-c3-aircross-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 28740 },
  ],
  "mg-hs-gasolina-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 29990 },
  ],
  "byd-dolphin-surf-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 20140 },
  ],
  "dacia-jogger-eco-g-120-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 18940 },
  ],
  "nissan-juke-10-dig-t-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-07", precio: 23975 },
  ],
  "audi-a6-e-tron-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 68290 },
  ],
  "audi-rs5-avant-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 128000 },
  ],
  "renault-rafale-e-tech-200-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 44225 },
  ],
  "renault-austral-2025-mild-hybrid-150-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 33008 },
  ],
  "byd-dolphin-g-dmi-boost-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 28200 },
  ],
  "mg3-hybrid-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 19340 },
  ],
  "mg3-gasolina-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 17990 },
  ],
  "seat-arona-10-tsi-95-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-08", precio: 20589 },
  ],
  "mercedes-benz-clase-a-200-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 43178 },
  ],
  "porsche-911-carrera-t-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 171776 },
  ],
  "aion-v-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 37995 },
  ],
  "byd-seal-u-ev-design-87kwh-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 47290 },
  ],
  "deepal-s05-awd-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 43390 },
  ],
  "ford-puma-gen-e-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 28526 },
  ],
  "ford-puma-st-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 33641 },
  ],
  "toyota-corolla-touring-sports-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-09", precio: 27450 },
  ],
  "toyota-hilux-ev-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-11", precio: 50000 },
  ],
  "mini-cooper-e-2024-precio-ficha-tecnica": [
    { fecha: "2026-10-11", precio: 28150 },
  ],
  "dacia-jogger-eco-g-120-7-plazas-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 19795 },
  ],
  "renault-master-e-tech-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 27332 },
  ],
  "bestune-t90-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 31990 },
  ],
  "denza-z9-gt-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 115000 },
  ],
  "citroen-c3-2024-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 16240 },
  ],
  "isuzu-d-max-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 42600 },
  ],
  "lotus-eletre-r-plus-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 149290 },
  ],
  "mercedes-benz-amg-c-43-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 93563 },
  ],
  "bmw-x1-m35i-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 73750 },
  ],
  "porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 237102 },
  ],
  "porsche-911-carrera-4-gts-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 214689 },
  ],
  "porsche-911-targa-4-gts-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 230714 },
  ],
  "porsche-panamera-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 137547 },
  ],
  "porsche-cayenne-e-hybrid-2026-precio-ficha-tecnica": [
    { fecha: "2026-10-12", precio: 121497 },
  ],
};
