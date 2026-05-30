import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-16"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
          {t('hero.title')}
          <br />
          <span className="text-primary">{t('hero.titleHighlight')}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{t('hero.subtitle')}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#preise"
            className="rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            {t('hero.ctaPrograms')}
          </a>
          <a
            href="#standort"
            className="rounded-full border-2 border-primary px-8 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary-50"
          >
            {t('hero.ctaLocation')}
          </a>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 52C120 44 240 28 360 32C480 36 600 60 720 68C840 76 960 68 1080 56C1200 44 1320 28 1380 20L1440 12V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
