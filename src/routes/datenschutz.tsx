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
          Diese statische Fassung bindet keine Tracker, Analysewerkzeuge, externen
          Schriftarten, Karten oder Social-Media-Plugins ein.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Server-Protokolldaten</h2>
        <p>
          Beim Aufruf einer Website kann der Hosting-Anbieter technisch notwendige
          Protokolldaten verarbeiten. Welche Daten gespeichert werden, wie lange dies
          geschieht und auf welcher Grundlage die Verarbeitung erfolgt, hängt vom später
          gewählten Hosting ab und muss hier vor Veröffentlichung konkret beschrieben werden.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Kontaktaufnahme</h2>
        <p>
          Die Website enthält derzeit kein Kontaktformular. Werden später E-Mail-Adressen
          oder Formulare ergänzt, müssen Zweck, Rechtsgrundlage, Speicherdauer und Empfänger
          der Daten erläutert werden.
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Cookies und externe Dienste</h2>
        <p>
          In dieser Version werden keine Cookies gesetzt und keine externen Inhalte
          automatisch geladen.
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
