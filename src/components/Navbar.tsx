import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const navKeys = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.hours', href: '#oeffnungszeiten' },
  { key: 'nav.pricing', href: '#preise' },
  { key: 'nav.technology', href: '#technologie' },
  { key: 'nav.location', href: '#standort' },
  { key: 'nav.imprint', href: '#impressum' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-700">AquaClean</span>
          </a>

          {/* Desktop tabs */}
          <div className="hidden md:flex items-center gap-1">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language switcher + Mobile menu button */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-primary-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü öffnen"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 py-3">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
