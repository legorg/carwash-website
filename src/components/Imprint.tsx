import { useTranslation } from 'react-i18next';

export default function Imprint() {
  const { t } = useTranslation();

  return (
    <section id="impressum" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          {t('imprint.title')}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-primary-900">{t('imprint.legalTitle')}</h3>
            <p className="mt-2 text-gray-700">
              {t('imprint.company')}
              <br />
              {t('location.street')}
              <br />
              {t('location.city')}
            </p>
            <p className="mt-4 text-gray-700">
              <strong>{t('imprint.representedBy')}</strong>
              <br />
              {t('imprint.ceo')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-900">{t('imprint.contact')}</h3>
            <p className="mt-2 text-gray-700">
              Telefon: {t('location.phone')}
              <br />
              E-Mail: {t('location.email')}
            </p>

            <h3 className="mt-6 text-lg font-semibold text-primary-900">{t('imprint.registry')}</h3>
            <p className="mt-2 text-gray-700">
              {t('imprint.registryCourt')}
              <br />
              {t('imprint.registryNumber')}
            </p>

            <h3 className="mt-6 text-lg font-semibold text-primary-900">{t('imprint.vatId')}</h3>
            <p className="mt-2 text-gray-700">
              {t('imprint.vatIdText')}
              <br />
              {t('imprint.vatNumber')}
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-primary-100 bg-primary-50/50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">{t('imprint.disclaimer')}</h3>
          <p className="mt-2 text-sm text-gray-600">{t('imprint.disclaimerText')}</p>
        </div>
      </div>
    </section>
  );
}
