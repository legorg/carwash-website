export default function Imprint() {
  return (
    <section id="impressum" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          Impressum
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-primary-900">Angaben gemäß § 5 TMG</h3>
            <p className="mt-2 text-gray-700">
              AquaClean Waschstraße GmbH
              <br />
              Musterstraße 42
              <br />
              60311 Frankfurt am Main
            </p>
            <p className="mt-4 text-gray-700">
              <strong>Vertreten durch:</strong>
              <br />
              Max Mustermann, Geschäftsführer
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-900">Kontakt</h3>
            <p className="mt-2 text-gray-700">
              Telefon: 069 / 123 456
              <br />
              E-Mail: info@aquaclean-wash.de
            </p>

            <h3 className="mt-6 text-lg font-semibold text-primary-900">Registereintrag</h3>
            <p className="mt-2 text-gray-700">
              Handelsregister: Amtsgericht Frankfurt am Main
              <br />
              Registernummer: HRB 12345
            </p>

            <h3 className="mt-6 text-lg font-semibold text-primary-900">Umsatzsteuer-ID</h3>
            <p className="mt-2 text-gray-700">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
              <br />
              DE 123 456 789
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-primary-100 bg-primary-50/50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Haftungsausschluss</h3>
          <p className="mt-2 text-sm text-gray-600">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </div>
      </div>
    </section>
  );
}
