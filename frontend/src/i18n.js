// * Base
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// * Locales
import ua from './assets/locale/ua.json';
import en from './assets/locale/en.json';
import es from './assets/locale/es.json';
import de from './assets/locale/de.json';

// * Languages
const resources = {
  ua: { translation: ua },
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
};

i18n.use(initReactI18next).init({
  resources: resources,
  // * Default language
  lng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
