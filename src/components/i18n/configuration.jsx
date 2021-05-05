import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import cookies from "js-cookies"

(function currentDir() {
    if (cookies.getItem("i18next") === "en" || cookies.getItem("i18next") === null) {
      document.body.dir = "ltr";
      console.log("setted to ltr");
    }
    else {
      console.log("setted to rtl");
      document.body.dir = "rtl"
    }
  }())

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'he', 'ar'],
        fallbackLng: 'en',
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        }
    }, (error) => {
        console.log(error);
    });