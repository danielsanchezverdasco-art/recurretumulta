import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Sitio 100% en español. i18next se usa solo como sistema de textos internos
// (namespaces "common", "pages", "analyzer"), sin selector de idioma ni URLs
// con prefijo de idioma.
export const DEFAULT_LOCALE = "es" as const;

// Eagerly import all translation files - bundled at build time for instant access
const translationModules = import.meta.glob<{ default: Record<string, string> }>(
  "./locales/*/*.json",
  { eager: true },
);

const resources: Record<string, Record<string, Record<string, string>>> = {};

for (const [path, module] of Object.entries(translationModules)) {
  const match = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/);
  if (match) {
    const [, lng, ns] = match;
    if (!resources[lng]) {
      resources[lng] = {};
    }
    resources[lng][ns] = module.default;
  }
}

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: [DEFAULT_LOCALE],
    defaultNS: "common",
    interpolation: { escapeValue: false }, // React already escapes values
    react: { useSuspense: false },
  });

document.documentElement.lang = DEFAULT_LOCALE;
document.documentElement.dir = "ltr";

export default i18n;
