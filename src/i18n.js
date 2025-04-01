import { createI18n } from 'vue-i18n';
import en from './lang/en';
import pt from './lang/pt';

const i18n = createI18n({
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en',
  messages: { en, pt }
});

export default i18n;