// Agregado de las 50 fichas de autocaravanas (lotes Merlín, 18/10/2026).
// Necesario para scripts/gen-ficha-extra.mjs (rivales) y listados.
import type { Autocaravana } from "./autocaravanas-tipos.ts";
import { AUTOCARAVANAS_ADRIA_M1 } from "./comparador-autocaravanas-adria-m1.ts";
import { AUTOCARAVANAS_AHORNCAMP_M1 } from "./comparador-autocaravanas-ahorncamp-m1.ts";
import { AUTOCARAVANAS_BAVARIA_M1 } from "./comparador-autocaravanas-bavaria-m1.ts";
import { AUTOCARAVANAS_BENIMAR_M1 } from "./comparador-autocaravanas-benimar-m1.ts";
import { AUTOCARAVANAS_BURSTNER_M1 } from "./comparador-autocaravanas-burstner-m1.ts";
import { AUTOCARAVANAS_CAMPEREVE_M1 } from "./comparador-autocaravanas-campereve-m1.ts";
import { AUTOCARAVANAS_CARTHAGO_M1 } from "./comparador-autocaravanas-carthago-m1.ts";
import { AUTOCARAVANAS_CHALLENGER_M1 } from "./comparador-autocaravanas-challenger-m1.ts";
import { AUTOCARAVANAS_CHAUSSON_M1 } from "./comparador-autocaravanas-chausson-m1.ts";
import { AUTOCARAVANAS_CI_M1 } from "./comparador-autocaravanas-ci-m1.ts";
import { AUTOCARAVANAS_DETHLEFFS_M1 } from "./comparador-autocaravanas-dethleffs-m1.ts";
import { AUTOCARAVANAS_DREAMER_M1 } from "./comparador-autocaravanas-dreamer-m1.ts";
import { AUTOCARAVANAS_ELNAGH_M1 } from "./comparador-autocaravanas-elnagh-m1.ts";
import { AUTOCARAVANAS_ETRUSCO_M1 } from "./comparador-autocaravanas-etrusco-m1.ts";
import { AUTOCARAVANAS_EURAMOBIL_M1 } from "./comparador-autocaravanas-euramobil-m1.ts";
import { AUTOCARAVANAS_FLEURETTE_M1 } from "./comparador-autocaravanas-fleurette-m1.ts";
import { AUTOCARAVANAS_FONTVENDOME_M1 } from "./comparador-autocaravanas-fontvendome-m1.ts";
import { AUTOCARAVANAS_FRANKIA_M1 } from "./comparador-autocaravanas-frankia-m1.ts";
import { AUTOCARAVANAS_GIOTTILINE_M1 } from "./comparador-autocaravanas-giottiline-m1.ts";
import { AUTOCARAVANAS_GLOBECAR_M1 } from "./comparador-autocaravanas-globecar-m1.ts";
import { AUTOCARAVANAS_HOBBY_M1 } from "./comparador-autocaravanas-hobby-m1.ts";
import { AUTOCARAVANAS_HYMER_M1 } from "./comparador-autocaravanas-hymer-m1.ts";
import { AUTOCARAVANAS_ITINEO_M1 } from "./comparador-autocaravanas-itineo-m1.ts";
import { AUTOCARAVANAS_KNAUS_M1 } from "./comparador-autocaravanas-knaus-m1.ts";
import { AUTOCARAVANAS_LAIKA_M1 } from "./comparador-autocaravanas-laika-m1.ts";
import { AUTOCARAVANAS_MCLOUIS_M1 } from "./comparador-autocaravanas-mclouis-m1.ts";
import { AUTOCARAVANAS_MOBILVETTA_M1 } from "./comparador-autocaravanas-mobilvetta-m1.ts";
import { AUTOCARAVANAS_MOOVEO_M1 } from "./comparador-autocaravanas-mooveo-m1.ts";
import { AUTOCARAVANAS_NIESMANNBISCHOFF_M1 } from "./comparador-autocaravanas-niesmannbischoff-m1.ts";
import { AUTOCARAVANAS_PILOTE_M1 } from "./comparador-autocaravanas-pilote-m1.ts";
import { AUTOCARAVANAS_POSSL_M1 } from "./comparador-autocaravanas-possl-m1.ts";
import { AUTOCARAVANAS_RAPIDO_M1 } from "./comparador-autocaravanas-rapido-m1.ts";
import { AUTOCARAVANAS_RIMOR_M1 } from "./comparador-autocaravanas-rimor-m1.ts";
import { AUTOCARAVANAS_ROLLERTEAM_M1 } from "./comparador-autocaravanas-rollerteam-m1.ts";
import { AUTOCARAVANAS_SUNLIGHT_M1 } from "./comparador-autocaravanas-sunlight-m1.ts";
import { AUTOCARAVANAS_WEINSBERG_M1 } from "./comparador-autocaravanas-weinsberg-m1.ts";
import { AUTOCARAVANAS_WESTFALIA_M1 } from "./comparador-autocaravanas-westfalia-m1.ts";
import { AUTOCARAVANAS_XGO_M1 } from "./comparador-autocaravanas-xgo-m1.ts";

// Agregado de autocaravanas para la pestaña Autocaravana de /fichas-tecnicas/
// (formato de Niky, cosa.md 18/10/2026 22:35 CEST). Regla de Niky: entran SOLO
// las fichas que pasen (a)-(g) del veredicto de Grok de las 22:15; la que no
// pase se queda en su fichero de marca, en noindex, follow y fuera del listado
// y del sitemap. El coordinador puede podar IDS_PASAN si el equipo de fotos
// descalifica alguna ficha más.
// 18/10/2026: 44 de 50 (excluidas por orden de Grok 22:20 las 6 sin fuente de
// precio/MMA/medidas/plazas: campereve-magellan-643, etrusco-t-7400-sb,
// globecar-globescout-plus, mooveo-tei-60fb, possl-2win-plus, rapido-v55).
// 19/10/2026: 35 de 50 (excluidas por orden de Daniel las 9 sin foto principal:
// bavaria-i740fgj-nomade, benimar-amphitryon-940, benimar-mileo-243,
// benimar-sport-340-up, chausson-777-titanium-line, ci-horon-84-xt,
// dethleffs-trend-t-6717-eb, fleurette-baxter-68-lmc, laika-kosmo-l-319).
const IDS_PASAN: Set<string> = new Set([
  "adria-coral-plus-670-sl-2026-precio-ficha-tecnica",
  "adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica",
  "ahorncamp-t-690-2026-precio-ficha-tecnica",
  "burstner-lyseo-td-690-g-2026-precio-ficha-tecnica",
  "carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica",
  "challenger-v114-start-edition-2026-precio-ficha-tecnica",
  "chausson-640-titanium-2026-precio-ficha-tecnica",
  "dreamer-d55-fun-up-2026-precio-ficha-tecnica",
  "elnagh-baron-565-2026-precio-ficha-tecnica",
  "euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica",
  "font-vendome-mondea-2026-precio-ficha-tecnica",
  "frankia-neo-i-7-gdk-2026-precio-ficha-tecnica",
  "giottiline-siena-322-2026-precio-ficha-tecnica",
  "hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica",
  "hymer-b-mc-i-600-2026-precio-ficha-tecnica",
  "hymer-grand-canyon-s-2026-precio-ficha-tecnica",
  "hymer-ml-t-580-4x4-2026-precio-ficha-tecnica",
  "itineo-pf600-2026-precio-ficha-tecnica",
  "knaus-boxlife-600-mq-2026-precio-ficha-tecnica",
  "knaus-sky-ti-650-meg-2026-precio-ficha-tecnica",
  "laika-ecovip-600-2026-precio-ficha-tecnica",
  "mclouis-mc4-231-2026-precio-ficha-tecnica",
  "mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica",
  "niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica",
  "pilote-g740fgj-evidence-2026-precio-ficha-tecnica",
  "pilote-v600g-2026-precio-ficha-tecnica",
  "rapido-606f-2026-precio-ficha-tecnica",
  "rimor-superbrig-687-tc-2026-precio-ficha-tecnica",
  "roller-team-auto-roller-746-2026-precio-ficha-tecnica",
  "sunlight-a-70-2026-precio-ficha-tecnica",
  "sunlight-cliff-640-2026-precio-ficha-tecnica",
  "sunlight-t-68-2026-precio-ficha-tecnica",
  "weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica",
  "westfalia-columbus-600d-2026-precio-ficha-tecnica",
  "xgo-x-van-104-2026-precio-ficha-tecnica",
]);

export const AUTOCARAVANAS_COMPARADOR: Autocaravana[] = [
  ...AUTOCARAVANAS_ADRIA_M1,
  ...AUTOCARAVANAS_AHORNCAMP_M1,
  ...AUTOCARAVANAS_BAVARIA_M1,
  ...AUTOCARAVANAS_BENIMAR_M1,
  ...AUTOCARAVANAS_BURSTNER_M1,
  ...AUTOCARAVANAS_CAMPEREVE_M1,
  ...AUTOCARAVANAS_CARTHAGO_M1,
  ...AUTOCARAVANAS_CHALLENGER_M1,
  ...AUTOCARAVANAS_CHAUSSON_M1,
  ...AUTOCARAVANAS_CI_M1,
  ...AUTOCARAVANAS_DETHLEFFS_M1,
  ...AUTOCARAVANAS_DREAMER_M1,
  ...AUTOCARAVANAS_ELNAGH_M1,
  ...AUTOCARAVANAS_ETRUSCO_M1,
  ...AUTOCARAVANAS_EURAMOBIL_M1,
  ...AUTOCARAVANAS_FLEURETTE_M1,
  ...AUTOCARAVANAS_FONTVENDOME_M1,
  ...AUTOCARAVANAS_FRANKIA_M1,
  ...AUTOCARAVANAS_GIOTTILINE_M1,
  ...AUTOCARAVANAS_GLOBECAR_M1,
  ...AUTOCARAVANAS_HOBBY_M1,
  ...AUTOCARAVANAS_HYMER_M1,
  ...AUTOCARAVANAS_ITINEO_M1,
  ...AUTOCARAVANAS_KNAUS_M1,
  ...AUTOCARAVANAS_LAIKA_M1,
  ...AUTOCARAVANAS_MCLOUIS_M1,
  ...AUTOCARAVANAS_MOBILVETTA_M1,
  ...AUTOCARAVANAS_MOOVEO_M1,
  ...AUTOCARAVANAS_NIESMANNBISCHOFF_M1,
  ...AUTOCARAVANAS_PILOTE_M1,
  ...AUTOCARAVANAS_POSSL_M1,
  ...AUTOCARAVANAS_RAPIDO_M1,
  ...AUTOCARAVANAS_RIMOR_M1,
  ...AUTOCARAVANAS_ROLLERTEAM_M1,
  ...AUTOCARAVANAS_SUNLIGHT_M1,
  ...AUTOCARAVANAS_WEINSBERG_M1,
  ...AUTOCARAVANAS_WESTFALIA_M1,
  ...AUTOCARAVANAS_XGO_M1,
].filter((f) => IDS_PASAN.has(f.id));
