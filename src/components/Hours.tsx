const hours = [
  { day: 'Montag', time: '07:00 – 21:00' },
  { day: 'Dienstag', time: '07:00 – 21:00' },
  { day: 'Mittwoch', time: '07:00 – 21:00' },
  { day: 'Donnerstag', time: '07:00 – 21:00' },
  { day: 'Freitag', time: '07:00 – 21:00' },
  { day: 'Samstag', time: '08:00 – 20:00' },
  { day: 'Sonntag', time: '09:00 – 18:00' },
];

function getCurrentDay(): number {
  const day = new Date().getDay();
  // Convert Sunday=0 to index 6, Monday=1 to index 0, etc.
  return day === 0 ? 6 : day - 1;
}

export default function Hours() {
  const today = getCurrentDay();

  return (
    <section id="oeffnungszeiten" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          Öffnungszeiten
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Wir sind fast jeden Tag für Sie da – auch am Wochenende.
        </p>

        <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-primary-50 shadow-md">
          {hours.map((entry, index) => (
            <div
              key={entry.day}
              className={`flex items-center justify-between px-6 py-4 ${
                index !== hours.length - 1 ? 'border-b border-primary-100' : ''
              } ${index === today ? 'bg-primary-200/60 font-semibold' : ''}`}
            >
              <span className="text-gray-800">
                {entry.day}
                {index === today && (
                  <span className="ml-2 inline-block rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                    Heute
                  </span>
                )}
              </span>
              <span className="text-gray-700">{entry.time}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          An gesetzlichen Feiertagen gelten ggf. abweichende Öffnungszeiten.
        </p>
      </div>
    </section>
  );
}
