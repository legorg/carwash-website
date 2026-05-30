import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-900 py-8 text-primary-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AquaClean Waschstraße GmbH. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#impressum" className="hover:text-white transition-colors">
              {t('nav.imprint')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
