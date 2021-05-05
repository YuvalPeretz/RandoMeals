import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import cookies from "js-cookie"

(function currentDir() {
    if (cookies.get("i18next") === "en" || !cookies.get("i18next"))
        document.dir = "ltr";   
    else document.dir = "rtl"
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
            cache: ['cookie'],
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        }
    }, (error) => {
        console.log(error);
    });