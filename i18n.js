import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./src/languages/en.json";
import pt_br from "./src/languages/pt_br.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en,
    pt_br,
  },
  fallbackLng: "pt_br",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
