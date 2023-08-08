import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from 'src/translations/en/default.json';
import translationES from 'src/translations/es/default.json';

const resources = {
  en: {
    name: 'English',
    translation:  translationEN ,
  },
  es: {
    name: 'Spanish',
    translation:  translationES ,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true, //change in production (TODO: use a env variable)
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    resources,
  });

export default i18next;
