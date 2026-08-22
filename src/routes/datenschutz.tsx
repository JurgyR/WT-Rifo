import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import bannerMeister from "@/assets/wt-rifo/banner-meister.jpg";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der Wing Tschun Rifo Website: Verantwortlicher, Hosting, Cookies, Rechte betroffener Personen.",
      },
      { property: "og:title", content: "Datenschutzerklärung | Wing Tschun Rifo" },
      {
        property: "og:description",
        content: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Datenschutz,
});

const linkCls = "underline hover:text-brand-gray";

function Datenschutz() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Datenschutz" }]}
      banner={{ src: bannerMeister, label: "Datenschutz" }}
    >
      <article className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-normal mb-3">Datenschutzerklärung</h1>

        <h2 className="text-xl font-normal mt-6 mb-2">1. Verantwortlicher</h2>
        <p>
          Jürgen Reuter
          <br />
          Mörikeweg 24
          <br />
          59555 Lippstadt
          <br />
          Telefon: <a href="tel:+491752071953" className={linkCls}>0175 2071953</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:juergenreuter@web.de" className={linkCls}>
            juergenreuter@web.de
          </a>
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">2. Aufruf und Hosting der Website</h2>
        <p className="mb-3">
          Beim Aufruf dieser Website können technisch erforderliche Daten verarbeitet werden.
          Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
          übertragene Datenmenge, Referrer-URL, Browser, Betriebssystem und HTTP-Statuscode.
        </p>
        <p className="mb-3">
          Die Verarbeitung erfolgt, um die Website sicher und fehlerfrei bereitzustellen und
          Angriffe oder Missbrauch zu erkennen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          Das berechtigte Interesse liegt im sicheren und zuverlässigen Betrieb der Website.
        </p>
        <p className="mb-3">
          Die Website wird über Lovable bereitgestellt. Dabei können Dienste von Lovable Labs
          Incorporated, 1 Lincoln Street, Boston, MA 02111, USA, und Cloudflare, Inc., 101
          Townsend Street, San Francisco, CA 94107, USA, eingesetzt werden. Eine Übermittlung in
          die USA kann nicht ausgeschlossen werden. Sie erfolgt nach Angaben der Anbieter
          insbesondere auf Grundlage der EU-Standardvertragsklauseln.
        </p>
        <p className="mb-2">
          Lovable kann technische Protokolldaten nach eigenen Angaben regelmäßig bis zu 90 Tage
          und bestimmte Sicherheitsprotokolle bis zu einem Jahr speichern. Weitere
          Informationen:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer" className={linkCls}>
              https://lovable.dev/privacy
            </a>
          </li>
          <li>
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-6 mb-2">3. Cookies und Besucherstatistik</h2>
        <p className="mb-3">
          Diese Website verwendet keine Reichweitenmessung, keine Marketing-Cookies, keine
          Nutzerprofile und kein seitenübergreifendes Tracking.
        </p>
        <p className="mb-3">
          Für Sicherheitsfunktionen kann Cloudflare das technisch erforderliche Cookie{" "}
          <code>__cf_bm</code> einsetzen. Es dient der Erkennung automatisierter Zugriffe und
          läuft nach ungefähr 30 Minuten ohne weitere Aktivität ab. Rechtsgrundlagen sind § 25
          Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Einwilligungspflichtige Cookies oder Dienste werden nicht eingesetzt. Deshalb ist kein
          Einwilligungsbanner erforderlich.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">4. Kontaktaufnahme</h2>
        <p className="mb-3">
          Eine Kontaktaufnahme ist telefonisch oder per E-Mail möglich. Dabei werden die
          übermittelten Angaben ausschließlich zur Bearbeitung der Anfrage verwendet.
        </p>
        <p className="mb-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn die Anfrage auf einen Vertrag
          oder vorvertragliche Maßnahmen gerichtet ist. In anderen Fällen erfolgt die
          Verarbeitung nach Art. 6 Abs. 1 lit. f DSGVO aufgrund des berechtigten Interesses an
          der Beantwortung von Anfragen.
        </p>
        <p className="mb-3">
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine
          gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
        <p>
          Bitte übermittle per E-Mail keine Diagnosen, medizinischen Unterlagen oder sonstigen
          ausführlichen Gesundheitsdaten. Bei gesundheitlichen Einschränkungen sollen nur die
          für das Training notwendigen organisatorischen Fragen telefonisch geklärt werden.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">5. Selbstständige Schulen und externe Links</h2>
        <p className="mb-3">
          Die genannten Schulen werden rechtlich selbstständig betrieben. Bei einer direkten
          Kontaktaufnahme mit einer Schule oder beim Aufruf ihrer Website ist der jeweilige
          Betreiber für die anschließende Datenverarbeitung verantwortlich.
        </p>
        <p className="mb-3">
          YouTube-, Vimeo- und Google-Maps-Inhalte werden nicht eingebettet. Es werden
          ausschließlich externe Links verwendet. Erst nach dem Anklicken gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>
        <p>
          Schriftarten, Bilder und andere Medien werden lokal beziehungsweise über das Hosting
          dieser Website ausgeliefert. Extern geladene Google Fonts werden nicht verwendet.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">6. Minderjährige</h2>
        <p>
          Minderjährige sollen personenbezogene Daten nicht ohne Zustimmung ihrer
          Erziehungsberechtigten übermitteln. Anfragen zum Kinder- oder Jugendtraining sollen
          durch die Erziehungsberechtigten erfolgen.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">7. Rechte betroffener Personen</h2>
        <p>
          Betroffene Personen haben nach Maßgabe der DSGVO insbesondere das Recht auf Auskunft,
          Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
          Widerspruch. Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft
          widerrufen werden.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">8. Widerspruch</h2>
        <p>
          Soweit personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet
          werden, besteht aus Gründen, die sich aus der besonderen Situation der betroffenen
          Person ergeben, ein Recht auf Widerspruch gemäß Art. 21 DSGVO.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">9. Beschwerderecht</h2>
        <p className="mb-2">Zuständige Aufsichtsbehörde:</p>
        <p>
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
          <br />
          Kavalleriestraße 2–4
          <br />
          40213 Düsseldorf
          <br />
          Telefon: <a href="tel:+49211384240" className={linkCls}>0211 38424-0</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:poststelle@ldi.nrw.de" className={linkCls}>
            poststelle@ldi.nrw.de
          </a>
          <br />
          <a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer" className={linkCls}>
            https://www.ldi.nrw.de/
          </a>
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">10. Stand</h2>
        <p>Stand: August 2026</p>
      </article>
    </SiteLayout>
  );
}
