const programs = [
  {
    name: 'Basis',
    price: '8,90 €',
    description: 'Die schnelle Grundreinigung für den Alltag.',
    features: ['Hochdruckvorwäsche', 'Shampoo-Wäsche', 'Klarspülung', 'Trocknung'],
    highlighted: false,
  },
  {
    name: 'Komfort',
    price: '12,90 €',
    description: 'Gründliche Pflege mit Glanzfinish.',
    features: [
      'Hochdruckvorwäsche',
      'Shampoo-Wäsche',
      'Unterbodenwäsche',
      'Heißwachs-Versiegelung',
      'Klarspülung & Trocknung',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '17,90 €',
    description: 'Komplettpaket für maximalen Schutz und Glanz.',
    features: [
      'Intensiv-Vorwäsche',
      'Shampoo-Wäsche',
      'Unterbodenwäsche',
      'Felgenreinigung',
      'Nano-Versiegelung',
      'Klarspülung & Trocknung',
    ],
    highlighted: false,
  },
];

const extras = [
  { name: 'Innenreinigung (Sauger)', price: '2,00 €' },
  { name: 'Felgenreinigung intensiv', price: '3,00 €' },
  { name: 'Insektenentferner', price: '1,50 €' },
  { name: 'Duftbaum', price: '1,00 €' },
];

export default function Pricing() {
  return (
    <section id="preise" className="bg-primary-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          Unsere Waschprogramme
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Wählen Sie das passende Programm für Ihr Fahrzeug.
        </p>

        {/* Programs */}
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className={`flex flex-col rounded-2xl p-6 shadow-md transition-transform hover:scale-[1.02] ${
                program.highlighted
                  ? 'bg-primary text-white ring-4 ring-primary-200'
                  : 'bg-white text-gray-800'
              }`}
            >
              <h3
                className={`text-xl font-bold ${program.highlighted ? 'text-white' : 'text-primary-900'}`}
              >
                {program.name}
              </h3>
              <p
                className={`mt-1 text-sm ${program.highlighted ? 'text-primary-100' : 'text-gray-500'}`}
              >
                {program.description}
              </p>
              <p className="mt-4 text-3xl font-bold">{program.price}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${program.highlighted ? 'text-primary-100' : 'text-primary'}`}
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
          ))}
        </div>

        {/* Extras */}
        <div className="mt-12">
          <h3 className="mb-4 text-center text-xl font-semibold text-primary-900">
            Zusatzleistungen
          </h3>
          <div className="mx-auto grid max-w-md gap-2">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm"
              >
                <span className="text-gray-700">{extra.name}</span>
                <span className="font-semibold text-primary-700">{extra.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
