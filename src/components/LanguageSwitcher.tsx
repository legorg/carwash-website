import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Inline SVG flags to avoid emoji rendering issues on Windows
function FlagDE() {
  return (
    <svg className="h-4 w-6 rounded-sm" viewBox="0 0 60 40">
      <rect width="60" height="13.33" fill="#000" />
      <rect y="13.33" width="60" height="13.33" fill="#D00" />
      <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg className="h-4 w-6 rounded-sm" viewBox="0 0 60 40">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFF" strokeWidth="6" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#FFF" strokeWidth="10" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagBG() {
  return (
    <svg className="h-4 w-6 rounded-sm" viewBox="0 0 60 40">
      <rect width="60" height="13.33" fill="#FFF" />
      <rect y="13.33" width="60" height="13.33" fill="#00966E" />
      <rect y="26.67" width="60" height="13.33" fill="#D62612" />
    </svg>
  );
}

const flags: Record<string, React.ReactNode> = {
  de: <FlagDE />,
  en: <FlagGB />,
  bg: <FlagBG />,
};

const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'bg', label: 'Български' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary-200 hover:bg-primary-50"
        aria-label="Sprache wählen"
      >
        {flags[currentLang.code]}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-36 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-primary-50 ${
                lang.code === i18n.language
                  ? 'bg-primary-50 font-semibold text-primary-700'
                  : 'text-gray-700'
              }`}
            >
              {flags[lang.code]}
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
