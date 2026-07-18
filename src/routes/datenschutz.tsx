import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Missing } from "@/components/SiteLayout";
import bannerMeister from "@/assets/wt-rifo/banner-meister.jpg";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Wing Tschun Rifo" },
      {
        name: "description",
        content: "Datenschutzhinweise für die statische Wing Tschun Rifo Website.",
      },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Datenschutz" }]}
      banner={{ src: bannerMeister, label: "Datenschutz" }}
    >
      <article className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-normal mb-3">Datenschutz</h1>
        <p className="text-base mb-4">
          Diese Website bindet keine Analyse- oder Tracking-Werkzeuge und keine
          Social-Media-Plugins ein. Für den Betrieb und die Auslieferung werden jedoch
          Dienste eines Hosting-Anbieters genutzt, bei denen einzelne Cookies technisch
          notwendig sein können.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Hosting und Auslieferung</h2>
        <p>
          Die Website wird auf der Lovable-Plattform gehostet und über die Cloudflare-
          Infrastruktur ausgeliefert. Beim Aufruf werden technisch notwendige
          Verbindungsdaten (unter anderem IP-Adresse, Datum und Uhrzeit, angeforderte URL,
          User-Agent) verarbeitet, um die Seite bereitzustellen und vor Missbrauch zu
          schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          am sicheren Betrieb).
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Kontaktaufnahme</h2>
        <p>
          Die Website enthält derzeit kein Kontaktformular. Werden später E-Mail-Adressen
          oder Formulare ergänzt, müssen Zweck, Rechtsgrundlage, Speicherdauer und Empfänger
          der Daten erläutert werden.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Cookies</h2>
        <p>
          Cloudflare kann als Teil des Bot- und Missbrauchsschutzes ein technisch
          notwendiges Cookie (<code>__cf_bm</code>) setzen. Dieses dient ausschließlich der
          Unterscheidung menschlicher Besucher von automatisierten Zugriffen und wird nach
          kurzer Zeit (in der Regel 30 Minuten) automatisch gelöscht. Weitere Cookies werden
          von dieser Website nicht gesetzt.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Schriftarten</h2>
        <p>
          Schriftarten werden über den Hosting-Anbieter ausgeliefert. Es findet dabei keine
          Einbindung von externen Google-Fonts-Servern im Nutzerbrowser statt.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Videolinks zu YouTube und Vimeo</h2>
        <p>
          Die Videoseite enthält ausschließlich normale Links zu YouTube und Vimeo. Beim
          bloßen Aufruf dieser Website wird dadurch keine Verbindung zu den Plattformen
          hergestellt. Erst wenn du einen Videolink anklickst, verlässt du diese Website;
          anschließend gelten die Datenschutzbestimmungen des jeweiligen Plattformbetreibers.
        </p>
        <Missing>
          <strong>Vor Veröffentlichung:</strong> Verantwortlichen, Datenschutzkontakt,
          Hosting-Anbieter, konkrete Protokollierung und alle später ergänzten Dienste
          eintragen und rechtlich prüfen.
        </Missing>
      </article>
    </SiteLayout>
  );
}
