import { useTranslation } from 'react-i18next';

const dayKeys = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

const times = [
  '07:00 – 21:00',
  '07:00 – 21:00',
  '07:00 – 21:00',
  '07:00 – 21:00',
  '07:00 – 21:00',
  '08:00 – 20:00',
  '09:00 – 18:00',
];

function getCurrentDay(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

export default function Hours() {
  const { t } = useTranslation();
  const today = getCurrentDay();

  return (
    <section id="oeffnungszeiten" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          {t('hours.title')}
        </h2>
        <p className="mb-12 text-center text-gray-600">{t('hours.subtitle')}</p>

        <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-primary-50 shadow-md">
          {dayKeys.map((dayKey, index) => (
            <div
              key={dayKey}
              className={`flex items-center justify-between px-6 py-4 ${
                index !== dayKeys.length - 1 ? 'border-b border-primary-100' : ''
              } ${index === today ? 'bg-primary-200/60 font-semibold' : ''}`}
            >
              <span className="text-gray-800">
                {t(`hours.days.${dayKey}`)}
                {index === today && (
                  <span className="ml-2 inline-block rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                    {t('hours.today')}
                  </span>
                )}
              </span>
              <span className="text-gray-700">{times[index]}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">{t('hours.holiday')}</p>
      </div>
    </section>
  );
}
