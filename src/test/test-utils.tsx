import type { ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from '../i18n/locales/de.json';
import en from '../i18n/locales/en.json';

// Create a test-specific i18n instance
const i18nTest = i18n.createInstance();
i18nTest.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  lng: 'de',
  fallbackLng: 'de',
  interpolation: { escapeValue: false },
});

export { i18nTest };

/**
 * Custom render that wraps components with i18n provider
 */
export function renderWithI18n(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <I18nextProvider i18n={i18nTest}>{children}</I18nextProvider>;
  }

  return render(ui, { wrapper: Wrapper, ...options });
}
