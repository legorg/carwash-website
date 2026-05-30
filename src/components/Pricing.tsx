import { useTranslation } from 'react-i18next';

const programKeys = ['basic', 'comfort', 'premium'] as const;
const extraKeys = ['interior', 'wheels', 'insects', 'scent'] as const;

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="preise" className="bg-primary-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          {t('pricing.title')}
        </h2>
        <p className="mb-12 text-center text-gray-600">{t('pricing.subtitle')}</p>

        {/* Programs */}
        <div className="grid gap-6 md:grid-cols-3">
          {programKeys.map((key) => {
            const highlighted = key === 'comfort';
            const features = t(`pricing.programs.${key}.features`, {
              returnObjects: true,
            }) as string[];

            return (
              <div
                key={key}
                className={`flex flex-col rounded-2xl p-6 shadow-md transition-transform hover:scale-[1.02] ${
                  highlighted
                    ? 'bg-primary text-white ring-4 ring-primary-200'
                    : 'bg-white text-gray-800'
                }`}
              >
                <h3
                  className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-primary-900'}`}
                >
                  {t(`pricing.programs.${key}.name`)}
                </h3>
                <p className={`mt-1 text-sm ${highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
                  {t(`pricing.programs.${key}.description`)}
                </p>
                <p className="mt-4 text-3xl font-bold">{t(`pricing.programs.${key}.price`)}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? 'text-primary-100' : 'text-primary'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Extras */}
        <div className="mt-12">
          <h3 className="mb-4 text-center text-xl font-semibold text-primary-900">
            {t('pricing.extras')}
          </h3>
          <div className="mx-auto grid max-w-md gap-2">
            {extraKeys.map((key) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm"
              >
                <span className="text-gray-700">{t(`pricing.extrasList.${key}.name`)}</span>
                <span className="font-semibold text-primary-700">
                  {t(`pricing.extrasList.${key}.price`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
