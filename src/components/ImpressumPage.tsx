import { LegalPage } from "@/components/LegalPage";

export function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Impressum"
      lede="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      sections={[
        {
          heading: "Verantwortlich",
          body: (
            <p>
              Odin Kammerloher
              <br />
              Siedlerstraße 7a
              <br />
              85774 Unterföhring
              <br />
              Deutschland
            </p>
          ),
        },
        {
          heading: "Kontakt",
          body: (
            <>
              <p>E-Mail: elmonoxo (at) tutamail (punkt) com</p>
              <p>Bitte ersetzen Sie „(at)" durch „@" und „(punkt)" durch „.".</p>
            </>
          ),
        },
        {
          heading: "Verantwortlich für den Inhalt",
          body: (
            <p>
              Verantwortlicher für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2
              Medienstaatsvertrag (MStV):
              <br />
              Odin Kammerloher
            </p>
          ),
        },
        {
          heading: "Haftung für Inhalte",
          body: (
            <>
              <p>
                Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem
                Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte
                unverzüglich entfernen.
              </p>
            </>
          ),
        },
        {
          heading: "Haftung für Links",
          body: (
            <>
              <p>
                Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser
                direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können
                wir für die Inhalte der externen Links keine Gewähr übernehmen. Für die Inhalte der
                externen Links sind die jeweiligen Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
              <p>
                Die externen Links wurden zum Zeitpunkt der Linksetzung auf mögliche Rechtsverstöße
                überprüft und waren zu diesem Zeitpunkt frei von rechtswidrigen Inhalten. Eine
                ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht möglich. Werden uns Rechtsverletzungen bekannt, werden
                wir die betreffenden externen Links unverzüglich entfernen.
              </p>
            </>
          ),
        },
        {
          heading: "Urheberrecht",
          body: (
            <>
              <p>
                Die auf unserer Webseite veröffentlichten Inhalte und Werke unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen
                schriftlichen Zustimmung des jeweiligen Urhebers. Downloads und Kopien dieser Seite
                sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt.
              </p>
              <p>
                Soweit Inhalte auf dieser Webseite nicht von uns erstellt wurden, werden die
                Urheberrechte Dritter beachtet und solche Inhalte als solche kenntlich gemacht.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
                um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Inhalte unverzüglich entfernen.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
