import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from '../localization/en.json'
import fr from '../localization/fr.json'


// Initialize i18next
i18n
  .use(initReactI18next) // Passes i18n down to React
  .init({
    compatibilityJSON: 'v3', // Required for using i18next v3 in React Native
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    lng: Localization.locale, // Detect device language
    fallbackLng: 'en', // Fallback language if the detected language is not available
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;
