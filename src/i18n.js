import { createI18n } from 'vue-i18n';
import pt from './lang/pt';
import en from './lang/en';

const i18n = createI18n({
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en',
  messages: { en, pt }
});

export default i18n;