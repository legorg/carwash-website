export default function Location() {
  return (
    <section id="standort" className="bg-primary-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          Standort & Anfahrt
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Finden Sie uns ganz einfach – direkt an der Hauptstraße mit ausreichend Parkplätzen.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="AquaClean Waschstraße Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4!2d8.6821!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzM5LjIiTiA4wrA0MCc1NS42IkU!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-900">Adresse</h3>
              <p className="mt-1 text-gray-700">
                AquaClean Waschstraße
                <br />
                Musterstraße 42
                <br />
                60311 Frankfurt am Main
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-900">Kontakt</h3>
              <p className="mt-1 text-gray-700">
                Tel:{' '}
                <a href="tel:+4969123456" className="text-primary hover:underline">
                  069 / 123 456
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@aquaclean-wash.de" className="text-primary hover:underline">
                  info@aquaclean-wash.de
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-900">Anfahrt</h3>
              <p className="mt-1 text-sm text-gray-600">
                Direkt an der B1, Ausfahrt Musterstadt-Mitte. Kostenlose Parkplätze direkt vor der
                Anlage.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir//50.1109,8.6821"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Route planen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
