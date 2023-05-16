import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./English/Global.json"
import translationES from "./Spanish/Global.json"


const resources = {
    en: {
      translation: translationEN
    },
    es: {
      translation: translationES
    }
};

i18next
.use(initReactI18next)
.init({
    resources,
    lng:"en",
    fallbackLng:"en",
    interpolation:{
        escapeValue: false 
    }
});

export default i18next;


