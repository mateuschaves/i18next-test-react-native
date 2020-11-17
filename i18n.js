import i18n from "i18next";
import Backend from "i18next-locize-backend";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: (callback) => {
    return Localization.getLocalizationAsync().then(({ locale }) => {
      callback(locale);
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(Backend) // loads translations from locize.com -> change to i18next-xhr-backend to load them from your own server
  .use(languageDetector) // for non expo apps use https://github.com/DylanVann/i18next-react-native-language-detector
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    load: "languageOnly", // optional - load only languages without regions
    whitelist: ["en", "pt-BR"], // optional - allowed languages

    // have a common namespace used around the full app
    ns: ["common"],
    defaultNS: "common",

    debug: false,
    saveMissing: false, // enable to send new keys to the locize project (works only when loading in reference language and apiKey is set in backend options)

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
    backend: {
      projectId: "a28471e3-aec8-4825-816e-c71f5784ec61",
      apiKey: "430d85c1-b052-458d-928f-09e165045808",
      referenceLng: "pt-BR",
    },
  });

export default i18n;
