// Índice consolidado de autocaravanas — rama merlin-rutas-cableadas.
// Agrega los 140 módulos de los lotes Merlín (m1..m5 + agregado data)
// en un único array AUTOCARAVANAS. Consolidado 2026-10-19.
import type { Autocaravana } from "./tipos.ts";
import { AUTOCARAVANAS_ADRIA_M1 } from "./comparador-autocaravanas-adria-m1.ts";
import { AUTOCARAVANAS_ADRIA_M2 } from "./comparador-autocaravanas-adria-m2.ts";
import { AUTOCARAVANAS_ADRIA_M3 } from "./comparador-autocaravanas-adria-m3-w1.ts";
import { AUTOCARAVANAS_ADRIA_M4 } from "./comparador-autocaravanas-adria-m4-w11.ts";
import { AUTOCARAVANAS_ADRIA_M5 } from "./comparador-autocaravanas-adria-m5.ts";
import { AUTOCARAVANAS_AHORNCAMP_M1 } from "./comparador-autocaravanas-ahorncamp-m1.ts";
import { AUTOCARAVANAS_AUTOSTAR_M4 } from "./comparador-autocaravanas-autostar-m4-w19.ts";
import { AUTOCARAVANAS_BAVARIA_M1 } from "./comparador-autocaravanas-bavaria-m1.ts";
import { AUTOCARAVANAS_BAVARIA_M4 } from "./comparador-autocaravanas-bavaria-m4-w19.ts";
import { AUTOCARAVANAS_BENIMAR_M1 } from "./comparador-autocaravanas-benimar-m1.ts";
import { AUTOCARAVANAS_BENIMAR_M2 } from "./comparador-autocaravanas-benimar-m2.ts";
import { AUTOCARAVANAS_BENIMAR_M3 } from "./comparador-autocaravanas-benimar-m3.ts";
import { AUTOCARAVANAS_BENIMAR_M4 } from "./comparador-autocaravanas-benimar-m4.ts";
import { AUTOCARAVANAS_BENIMAR_M5 } from "./comparador-autocaravanas-benimar-m5.ts";
import { AUTOCARAVANAS_BURSTNER_M1 } from "./comparador-autocaravanas-burstner-m1.ts";
import { AUTOCARAVANAS_BURSTNER_M2 } from "./comparador-autocaravanas-burstner-m2.ts";
import { AUTOCARAVANAS_BURSTNER_M3 } from "./comparador-autocaravanas-burstner-m3-w2.ts";
import { AUTOCARAVANAS_BURSTNER_M4 } from "./comparador-autocaravanas-burstner-m4.ts";
import { AUTOCARAVANAS_BURSTNER_M5 } from "./comparador-autocaravanas-burstner-m5.ts";
import { AUTOCARAVANAS_CAMPEREVE_M1 } from "./comparador-autocaravanas-campereve-m1.ts";
import { AUTOCARAVANAS_CAMPEREVE_M4 } from "./comparador-autocaravanas-campereve-m4-w19.ts";
import { AUTOCARAVANAS_CARADO_M2 } from "./comparador-autocaravanas-carado-m2.ts";
import { AUTOCARAVANAS_CARADO_M3 } from "./comparador-autocaravanas-carado-m3-w9.ts";
import { AUTOCARAVANAS_CARTHAGO_M1 } from "./comparador-autocaravanas-carthago-m1.ts";
import { AUTOCARAVANAS_CARTHAGO_M2 } from "./comparador-autocaravanas-carthago-m2.ts";
import { AUTOCARAVANAS_CARTHAGO_M3 } from "./comparador-autocaravanas-carthago-m3-w2.ts";
import { AUTOCARAVANAS_CARTHAGO_M4 } from "./comparador-autocaravanas-carthago-m4-w12.ts";
import { AUTOCARAVANAS_CARTHAGO_M5 } from "./comparador-autocaravanas-carthago-m5.ts";
import { AUTOCARAVANAS_CHALLENGER_M1 } from "./comparador-autocaravanas-challenger-m1.ts";
import { AUTOCARAVANAS_CHALLENGER_M2 } from "./comparador-autocaravanas-challenger-m2.ts";
import { AUTOCARAVANAS_CHALLENGER_M3 } from "./comparador-autocaravanas-challenger-m3.ts";
import { AUTOCARAVANAS_CHALLENGER_M4 } from "./comparador-autocaravanas-challenger-m4-w20.ts";
import { AUTOCARAVANAS_CHALLENGER_M5 } from "./comparador-autocaravanas-challenger-m5.ts";
import { AUTOCARAVANAS_CHAUSSON_M1 } from "./comparador-autocaravanas-chausson-m1.ts";
import { AUTOCARAVANAS_CHAUSSON_M2 } from "./comparador-autocaravanas-chausson-m2.ts";
import { AUTOCARAVANAS_CHAUSSON_M3 } from "./comparador-autocaravanas-chausson-m3-w3.ts";
import { AUTOCARAVANAS_CHAUSSON_M4 } from "./comparador-autocaravanas-chausson-m4-w20.ts";
import { AUTOCARAVANAS_CHAUSSON_M5 } from "./comparador-autocaravanas-chausson-m5.ts";
import { AUTOCARAVANAS_CI_M1 } from "./comparador-autocaravanas-ci-m1.ts";
import { AUTOCARAVANAS_CONCORDE_M2 } from "./comparador-autocaravanas-concorde-m2.ts";
import { AUTOCARAVANAS_CONCORDE_M3 } from "./comparador-autocaravanas-concorde-m3-w10.ts";
import { AUTOCARAVANAS_COMPARADOR } from "./comparador-autocaravanas-data.ts";
import { AUTOCARAVANAS_DETHLEFFS_M1 } from "./comparador-autocaravanas-dethleffs-m1.ts";
import { AUTOCARAVANAS_DETHLEFFS_M2 } from "./comparador-autocaravanas-dethleffs-m2.ts";
import { AUTOCARAVANAS_DETHLEFFS_M3 } from "./comparador-autocaravanas-dethleffs-m3-w3.ts";
import { AUTOCARAVANAS_DETHLEFFS_M4 } from "./comparador-autocaravanas-dethleffs-m4-w12.ts";
import { AUTOCARAVANAS_DETHLEFFS_M5 } from "./comparador-autocaravanas-dethleffs-m5.ts";
import { AUTOCARAVANAS_DREAMER_M1 } from "./comparador-autocaravanas-dreamer-m1.ts";
import { AUTOCARAVANAS_DREAMER_M3 } from "./comparador-autocaravanas-dreamer-m3-w4.ts";
import { AUTOCARAVANAS_ELNAGH_M1 } from "./comparador-autocaravanas-elnagh-m1.ts";
import { AUTOCARAVANAS_ELNAGH_M4 } from "./comparador-autocaravanas-elnagh-m4.ts";
import { AUTOCARAVANAS_ETRUSCO_M1 } from "./comparador-autocaravanas-etrusco-m1.ts";
import { AUTOCARAVANAS_ETRUSCO_M2 } from "./comparador-autocaravanas-etrusco-m2.ts";
import { AUTOCARAVANAS_ETRUSCO_M3 } from "./comparador-autocaravanas-etrusco-m3-w4.ts";
import { AUTOCARAVANAS_ETRUSCO_M4 } from "./comparador-autocaravanas-etrusco-m4-w19.ts";
import { AUTOCARAVANAS_EURAMOBIL_M1 } from "./comparador-autocaravanas-euramobil-m1.ts";
import { AUTOCARAVANAS_EURAMOBIL_M2 } from "./comparador-autocaravanas-euramobil-m2.ts";
import { AUTOCARAVANAS_EURAMOBIL_M3 } from "./comparador-autocaravanas-euramobil-m3.ts";
import { AUTOCARAVANAS_FLEURETTE_M1 } from "./comparador-autocaravanas-fleurette-m1.ts";
import { AUTOCARAVANAS_FLEURETTE_M4 } from "./comparador-autocaravanas-fleurette-m4-w13.ts";
import { AUTOCARAVANAS_FONTVENDOME_M1 } from "./comparador-autocaravanas-fontvendome-m1.ts";
import { AUTOCARAVANAS_FONTVENDOME_M4 } from "./comparador-autocaravanas-fontvendome-m4-w13.ts";
import { AUTOCARAVANAS_FRANKIA_M1 } from "./comparador-autocaravanas-frankia-m1.ts";
import { AUTOCARAVANAS_FRANKIA_M3 } from "./comparador-autocaravanas-frankia-m3-w10.ts";
import { AUTOCARAVANAS_FRANKIA_M4 } from "./comparador-autocaravanas-frankia-m4-w13.ts";
import { AUTOCARAVANAS_GIOTTILINE_M1 } from "./comparador-autocaravanas-giottiline-m1.ts";
import { AUTOCARAVANAS_GIOTTILINE_M2 } from "./comparador-autocaravanas-giottiline-m2.ts";
import { AUTOCARAVANAS_GIOTTILINE_M4 } from "./comparador-autocaravanas-giottiline-m4-w14.ts";
import { AUTOCARAVANAS_GLOBECAR_M1 } from "./comparador-autocaravanas-globecar-m1.ts";
import { AUTOCARAVANAS_GLOBECAR_M4 } from "./comparador-autocaravanas-globecar-m4-w14.ts";
import { AUTOCARAVANAS_HOBBY_M1 } from "./comparador-autocaravanas-hobby-m1.ts";
import { AUTOCARAVANAS_HOBBY_M3 } from "./comparador-autocaravanas-hobby-m3-w5.ts";
import { AUTOCARAVANAS_HYMER_M1 } from "./comparador-autocaravanas-hymer-m1.ts";
import { AUTOCARAVANAS_HYMER_M2 } from "./comparador-autocaravanas-hymer-m2.ts";
import { AUTOCARAVANAS_HYMER_M3 } from "./comparador-autocaravanas-hymer-m3-w5.ts";
import { AUTOCARAVANAS_HYMER_M4 } from "./comparador-autocaravanas-hymer-m4.ts";
import { AUTOCARAVANAS_HYMER_M5 } from "./comparador-autocaravanas-hymer-m5.ts";
import { AUTOCARAVANAS_ITINEO_M1 } from "./comparador-autocaravanas-itineo-m1.ts";
import { AUTOCARAVANAS_ITINEO_M4 } from "./comparador-autocaravanas-itineo-m4-w15.ts";
import { AUTOCARAVANAS_KABE_M4 } from "./comparador-autocaravanas-kabe-m4-w18.ts";
import { AUTOCARAVANAS_KNAUS_M1 } from "./comparador-autocaravanas-knaus-m1.ts";
import { AUTOCARAVANAS_KNAUS_M2 } from "./comparador-autocaravanas-knaus-m2.ts";
import { AUTOCARAVANAS_KNAUS_M3 } from "./comparador-autocaravanas-knaus-m3-w6.ts";
import { AUTOCARAVANAS_KNAUS_M4 } from "./comparador-autocaravanas-knaus-m4-w15.ts";
import { AUTOCARAVANAS_KNAUS_M5 } from "./comparador-autocaravanas-knaus-m5.ts";
import { AUTOCARAVANAS_LAIKA_M1 } from "./comparador-autocaravanas-laika-m1.ts";
import { AUTOCARAVANAS_LAIKA_M2 } from "./comparador-autocaravanas-laika-m2.ts";
import { AUTOCARAVANAS_LAIKA_M3 } from "./comparador-autocaravanas-laika-m3-w6.ts";
import { AUTOCARAVANAS_LAIKA_M4 } from "./comparador-autocaravanas-laika-m4.ts";
import { AUTOCARAVANAS_LEVOYAGEUR_M4 } from "./comparador-autocaravanas-levoyageur-m4-w18.ts";
import { AUTOCARAVANAS_LMC_M3 } from "./comparador-autocaravanas-lmc-m3.ts";
import { AUTOCARAVANAS_MALIBU_M3 } from "./comparador-autocaravanas-malibu-m3-w9.ts";
import { AUTOCARAVANAS_MCLOUIS_M1 } from "./comparador-autocaravanas-mclouis-m1.ts";
import { AUTOCARAVANAS_MCLOUIS_M2 } from "./comparador-autocaravanas-mclouis-m2.ts";
import { AUTOCARAVANAS_MCLOUIS_M4 } from "./comparador-autocaravanas-mclouis-m4-w16.ts";
import { AUTOCARAVANAS_MCLOUIS_M5 } from "./comparador-autocaravanas-mclouis-m5.ts";
import { AUTOCARAVANAS_MOBILVETTA_M1 } from "./comparador-autocaravanas-mobilvetta-m1.ts";
import { AUTOCARAVANAS_MOBILVETTA_M2 } from "./comparador-autocaravanas-mobilvetta-m2.ts";
import { AUTOCARAVANAS_MOBILVETTA_M4 } from "./comparador-autocaravanas-mobilvetta-m4-w16.ts";
import { AUTOCARAVANAS_MOOVEO_M1 } from "./comparador-autocaravanas-mooveo-m1.ts";
import { AUTOCARAVANAS_MOOVEO_M4 } from "./comparador-autocaravanas-mooveo-m4-w16.ts";
import { AUTOCARAVANAS_MORELO_M2 } from "./comparador-autocaravanas-morelo-m2.ts";
import { AUTOCARAVANAS_MORELO_M3 } from "./comparador-autocaravanas-morelo-m3-w10.ts";
import { AUTOCARAVANAS_NIESMANNBISCHOFF_M1 } from "./comparador-autocaravanas-niesmannbischoff-m1.ts";
import { AUTOCARAVANAS_NIESMANNBISCHOFF_M2 } from "./comparador-autocaravanas-niesmannbischoff-m2.ts";
import { AUTOCARAVANAS_NIESMANNBISCHOFF_M3 } from "./comparador-autocaravanas-niesmannbischoff-m3-w6.ts";
import { AUTOCARAVANAS_NOTIN_M4 } from "./comparador-autocaravanas-notin-m4-w19.ts";
import { AUTOCARAVANAS_PILOTE_M1 } from "./comparador-autocaravanas-pilote-m1.ts";
import { AUTOCARAVANAS_PILOTE_M2 } from "./comparador-autocaravanas-pilote-m2.ts";
import { AUTOCARAVANAS_PILOTE_M3 } from "./comparador-autocaravanas-pilote-m3-w7.ts";
import { AUTOCARAVANAS_PILOTE_M3B } from "./comparador-autocaravanas-pilote-m3b-w10.ts";
import { AUTOCARAVANAS_PILOTE_M5 } from "./comparador-autocaravanas-pilote-m5.ts";
import { AUTOCARAVANAS_POSSL_M1 } from "./comparador-autocaravanas-possl-m1.ts";
import { AUTOCARAVANAS_POSSL_M2 } from "./comparador-autocaravanas-possl-m2.ts";
import { AUTOCARAVANAS_POSSL_M3 } from "./comparador-autocaravanas-possl-m3-w7.ts";
import { AUTOCARAVANAS_POSSL_M5 } from "./comparador-autocaravanas-possl-m5.ts";
import { AUTOCARAVANAS_RAPIDO_M1 } from "./comparador-autocaravanas-rapido-m1.ts";
import { AUTOCARAVANAS_RAPIDO_M2 } from "./comparador-autocaravanas-rapido-m2.ts";
import { AUTOCARAVANAS_RAPIDO_M3 } from "./comparador-autocaravanas-rapido-m3.ts";
import { AUTOCARAVANAS_RAPIDO_M5 } from "./comparador-autocaravanas-rapido-m5.ts";
import { AUTOCARAVANAS_RIMOR_M1 } from "./comparador-autocaravanas-rimor-m1.ts";
import { AUTOCARAVANAS_RIMOR_M2 } from "./comparador-autocaravanas-rimor-m2.ts";
import { AUTOCARAVANAS_RIMOR_M4 } from "./comparador-autocaravanas-rimor-m4-w17.ts";
import { AUTOCARAVANAS_ROLLERTEAM_M1 } from "./comparador-autocaravanas-rollerteam-m1.ts";
import { AUTOCARAVANAS_ROLLERTEAM_M2 } from "./comparador-autocaravanas-rollerteam-m2.ts";
import { AUTOCARAVANAS_ROLLERTEAM_M3 } from "./comparador-autocaravanas-rollerteam-m3-w8.ts";
import { AUTOCARAVANAS_ROLLERTEAM_M5 } from "./comparador-autocaravanas-rollerteam-m5.ts";
import { AUTOCARAVANAS_SUNLIGHT_M1 } from "./comparador-autocaravanas-sunlight-m1.ts";
import { AUTOCARAVANAS_SUNLIGHT_M2 } from "./comparador-autocaravanas-sunlight-m2.ts";
import { AUTOCARAVANAS_SUNLIGHT_M4 } from "./comparador-autocaravanas-sunlight-m4-w17.ts";
import { AUTOCARAVANAS_WEINSBERG_M1 } from "./comparador-autocaravanas-weinsberg-m1.ts";
import { AUTOCARAVANAS_WEINSBERG_M2 } from "./comparador-autocaravanas-weinsberg-m2.ts";
import { AUTOCARAVANAS_WEINSBERG_M4 } from "./comparador-autocaravanas-weinsberg-m4.ts";
import { AUTOCARAVANAS_WEINSBERG_M5 } from "./comparador-autocaravanas-weinsberg-m5.ts";
import { AUTOCARAVANAS_WESTFALIA_M1 } from "./comparador-autocaravanas-westfalia-m1.ts";
import { AUTOCARAVANAS_WESTFALIA_M2 } from "./comparador-autocaravanas-westfalia-m2.ts";
import { AUTOCARAVANAS_WESTFALIA_M3 } from "./comparador-autocaravanas-westfalia-m3-w8.ts";
import { AUTOCARAVANAS_XGO_M1 } from "./comparador-autocaravanas-xgo-m1.ts";
import { AUTOCARAVANAS_XGO_M2 } from "./comparador-autocaravanas-xgo-m2.ts";
import { AUTOCARAVANAS_XGO_M4 } from "./comparador-autocaravanas-xgo-m4-w18.ts";

/** Todos los arrays de fichas de autocaravanas consolidados. */
const AUTOCARAVANAS_SIN_DEDUP: Autocaravana[] = [
  ...AUTOCARAVANAS_ADRIA_M1,
  ...AUTOCARAVANAS_ADRIA_M2,
  ...AUTOCARAVANAS_ADRIA_M3,
  ...AUTOCARAVANAS_ADRIA_M4,
  ...AUTOCARAVANAS_ADRIA_M5,
  ...AUTOCARAVANAS_AHORNCAMP_M1,
  ...AUTOCARAVANAS_AUTOSTAR_M4,
  ...AUTOCARAVANAS_BAVARIA_M1,
  ...AUTOCARAVANAS_BAVARIA_M4,
  ...AUTOCARAVANAS_BENIMAR_M1,
  ...AUTOCARAVANAS_BENIMAR_M2,
  ...AUTOCARAVANAS_BENIMAR_M3,
  ...AUTOCARAVANAS_BENIMAR_M4,
  ...AUTOCARAVANAS_BENIMAR_M5,
  ...AUTOCARAVANAS_BURSTNER_M1,
  ...AUTOCARAVANAS_BURSTNER_M2,
  ...AUTOCARAVANAS_BURSTNER_M3,
  ...AUTOCARAVANAS_BURSTNER_M4,
  ...AUTOCARAVANAS_BURSTNER_M5,
  ...AUTOCARAVANAS_CAMPEREVE_M1,
  ...AUTOCARAVANAS_CAMPEREVE_M4,
  ...AUTOCARAVANAS_CARADO_M2,
  ...AUTOCARAVANAS_CARADO_M3,
  ...AUTOCARAVANAS_CARTHAGO_M1,
  ...AUTOCARAVANAS_CARTHAGO_M2,
  ...AUTOCARAVANAS_CARTHAGO_M3,
  ...AUTOCARAVANAS_CARTHAGO_M4,
  ...AUTOCARAVANAS_CARTHAGO_M5,
  ...AUTOCARAVANAS_CHALLENGER_M1,
  ...AUTOCARAVANAS_CHALLENGER_M2,
  ...AUTOCARAVANAS_CHALLENGER_M3,
  ...AUTOCARAVANAS_CHALLENGER_M4,
  ...AUTOCARAVANAS_CHALLENGER_M5,
  ...AUTOCARAVANAS_CHAUSSON_M1,
  ...AUTOCARAVANAS_CHAUSSON_M2,
  ...AUTOCARAVANAS_CHAUSSON_M3,
  ...AUTOCARAVANAS_CHAUSSON_M4,
  ...AUTOCARAVANAS_CHAUSSON_M5,
  ...AUTOCARAVANAS_CI_M1,
  ...AUTOCARAVANAS_CONCORDE_M2,
  ...AUTOCARAVANAS_CONCORDE_M3,
  ...AUTOCARAVANAS_COMPARADOR,
  ...AUTOCARAVANAS_DETHLEFFS_M1,
  ...AUTOCARAVANAS_DETHLEFFS_M2,
  ...AUTOCARAVANAS_DETHLEFFS_M3,
  ...AUTOCARAVANAS_DETHLEFFS_M4,
  ...AUTOCARAVANAS_DETHLEFFS_M5,
  ...AUTOCARAVANAS_DREAMER_M1,
  ...AUTOCARAVANAS_DREAMER_M3,
  ...AUTOCARAVANAS_ELNAGH_M1,
  ...AUTOCARAVANAS_ELNAGH_M4,
  ...AUTOCARAVANAS_ETRUSCO_M1,
  ...AUTOCARAVANAS_ETRUSCO_M2,
  ...AUTOCARAVANAS_ETRUSCO_M3,
  ...AUTOCARAVANAS_ETRUSCO_M4,
  ...AUTOCARAVANAS_EURAMOBIL_M1,
  ...AUTOCARAVANAS_EURAMOBIL_M2,
  ...AUTOCARAVANAS_EURAMOBIL_M3,
  ...AUTOCARAVANAS_FLEURETTE_M1,
  ...AUTOCARAVANAS_FLEURETTE_M4,
  ...AUTOCARAVANAS_FONTVENDOME_M1,
  ...AUTOCARAVANAS_FONTVENDOME_M4,
  ...AUTOCARAVANAS_FRANKIA_M1,
  ...AUTOCARAVANAS_FRANKIA_M3,
  ...AUTOCARAVANAS_FRANKIA_M4,
  ...AUTOCARAVANAS_GIOTTILINE_M1,
  ...AUTOCARAVANAS_GIOTTILINE_M2,
  ...AUTOCARAVANAS_GIOTTILINE_M4,
  ...AUTOCARAVANAS_GLOBECAR_M1,
  ...AUTOCARAVANAS_GLOBECAR_M4,
  ...AUTOCARAVANAS_HOBBY_M1,
  ...AUTOCARAVANAS_HOBBY_M3,
  ...AUTOCARAVANAS_HYMER_M1,
  ...AUTOCARAVANAS_HYMER_M2,
  ...AUTOCARAVANAS_HYMER_M3,
  ...AUTOCARAVANAS_HYMER_M4,
  ...AUTOCARAVANAS_HYMER_M5,
  ...AUTOCARAVANAS_ITINEO_M1,
  ...AUTOCARAVANAS_ITINEO_M4,
  ...AUTOCARAVANAS_KABE_M4,
  ...AUTOCARAVANAS_KNAUS_M1,
  ...AUTOCARAVANAS_KNAUS_M2,
  ...AUTOCARAVANAS_KNAUS_M3,
  ...AUTOCARAVANAS_KNAUS_M4,
  ...AUTOCARAVANAS_KNAUS_M5,
  ...AUTOCARAVANAS_LAIKA_M1,
  ...AUTOCARAVANAS_LAIKA_M2,
  ...AUTOCARAVANAS_LAIKA_M3,
  ...AUTOCARAVANAS_LAIKA_M4,
  ...AUTOCARAVANAS_LEVOYAGEUR_M4,
  ...AUTOCARAVANAS_LMC_M3,
  ...AUTOCARAVANAS_MALIBU_M3,
  ...AUTOCARAVANAS_MCLOUIS_M1,
  ...AUTOCARAVANAS_MCLOUIS_M2,
  ...AUTOCARAVANAS_MCLOUIS_M4,
  ...AUTOCARAVANAS_MCLOUIS_M5,
  ...AUTOCARAVANAS_MOBILVETTA_M1,
  ...AUTOCARAVANAS_MOBILVETTA_M2,
  ...AUTOCARAVANAS_MOBILVETTA_M4,
  ...AUTOCARAVANAS_MOOVEO_M1,
  ...AUTOCARAVANAS_MOOVEO_M4,
  ...AUTOCARAVANAS_MORELO_M2,
  ...AUTOCARAVANAS_MORELO_M3,
  ...AUTOCARAVANAS_NIESMANNBISCHOFF_M1,
  ...AUTOCARAVANAS_NIESMANNBISCHOFF_M2,
  ...AUTOCARAVANAS_NIESMANNBISCHOFF_M3,
  ...AUTOCARAVANAS_NOTIN_M4,
  ...AUTOCARAVANAS_PILOTE_M1,
  ...AUTOCARAVANAS_PILOTE_M2,
  ...AUTOCARAVANAS_PILOTE_M3,
  ...AUTOCARAVANAS_PILOTE_M3B,
  ...AUTOCARAVANAS_PILOTE_M5,
  ...AUTOCARAVANAS_POSSL_M1,
  ...AUTOCARAVANAS_POSSL_M2,
  ...AUTOCARAVANAS_POSSL_M3,
  ...AUTOCARAVANAS_POSSL_M5,
  ...AUTOCARAVANAS_RAPIDO_M1,
  ...AUTOCARAVANAS_RAPIDO_M2,
  ...AUTOCARAVANAS_RAPIDO_M3,
  ...AUTOCARAVANAS_RAPIDO_M5,
  ...AUTOCARAVANAS_RIMOR_M1,
  ...AUTOCARAVANAS_RIMOR_M2,
  ...AUTOCARAVANAS_RIMOR_M4,
  ...AUTOCARAVANAS_ROLLERTEAM_M1,
  ...AUTOCARAVANAS_ROLLERTEAM_M2,
  ...AUTOCARAVANAS_ROLLERTEAM_M3,
  ...AUTOCARAVANAS_ROLLERTEAM_M5,
  ...AUTOCARAVANAS_SUNLIGHT_M1,
  ...AUTOCARAVANAS_SUNLIGHT_M2,
  ...AUTOCARAVANAS_SUNLIGHT_M4,
  ...AUTOCARAVANAS_WEINSBERG_M1,
  ...AUTOCARAVANAS_WEINSBERG_M2,
  ...AUTOCARAVANAS_WEINSBERG_M4,
  ...AUTOCARAVANAS_WEINSBERG_M5,
  ...AUTOCARAVANAS_WESTFALIA_M1,
  ...AUTOCARAVANAS_WESTFALIA_M2,
  ...AUTOCARAVANAS_WESTFALIA_M3,
  ...AUTOCARAVANAS_XGO_M1,
  ...AUTOCARAVANAS_XGO_M2,
  ...AUTOCARAVANAS_XGO_M4,
];

// 20/10/2026 (arreglos borrador 2): varios módulos traen la MISMA ficha
// (p. ej. el comparador base y el módulo de su marca), y el índice llegaba
// a 258 entradas con 46 ids repetidos: las pestañas de autocaravanas y
// campers contaban y pintaban tarjetas duplicadas. Se deduplica por id
// (gana la primera ocurrencia) al exportar el catálogo consolidado.
const _idsVistos = new Set<string>();
export const AUTOCARAVANAS: Autocaravana[] = AUTOCARAVANAS_SIN_DEDUP.filter(
  (a) => {
    if (_idsVistos.has(a.id)) return false;
    _idsVistos.add(a.id);
    return true;
  }
);
