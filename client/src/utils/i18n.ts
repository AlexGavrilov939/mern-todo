import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { HTML_ALLOWED_TAGS_LIST } from "../config/config";

export enum SupportedLanguagesEnum {
  EN = "en",
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    load: "currentOnly",
    defaultNS: "translation",
    detection: {
      order: ["querystring", "cookie", "header", "localStorage", "navigator"],
      caches: ["cookie"],
    },
    fallbackLng: SupportedLanguagesEnum.EN,
    supportedLngs: Object.values(SupportedLanguagesEnum),
    nsSeparator: "::",
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: HTML_ALLOWED_TAGS_LIST,
    },
  });
export default i18n;
