import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Missing } from "@/components/SiteLayout";
import bannerMeister from "@/assets/wt-rifo/banner-meister.jpg";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Wing Tschun Rifo" },
      { name: "description", content: "Impressum der Wing Tschun Rifo Website." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Impressum" }]}
      banner={{ src: bannerMeister, label: "Impressum" }}
    >
      <article className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-normal mb-3">Impressum</h1>
        <Missing>
          <strong>Vor Veröffentlichung vervollständigen:</strong> Betreibername beziehungsweise
          Rechtsform, ladungsfähige Anschrift, vertretungsberechtigte Person, E-Mail-Adresse,
          Telefonnummer und gegebenenfalls Register- oder Umsatzsteuerangaben.
        </Missing>
        <h2 className="text-xl font-normal mt-6 mb-2">Angaben gemäß § 5 DDG</h2>
        <p>
          [Vollständiger Betreibername]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Vertreten durch</h2>
        <p>[Name der vertretungsberechtigten Person]</p>
        <h2 className="text-xl font-normal mt-6 mb-2">Kontakt</h2>
        <p>
          Telefon: [eintragen]
          <br />
          E-Mail: [eintragen]
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Verantwortlich für den Inhalt</h2>
        <p>[Name und Anschrift eintragen]</p>
        <h2 className="text-xl font-normal mt-6 mb-2">Erstellung der Website</h2>
        <p>
          Natürlich hat KI bei der Erstellung dieser Website geholfen. Im Wing Tschun nutzen wir, was funktioniert – beim Webdesign auch. Für die Inhalte stehen wir trotzdem ganz traditionell selbst ein.
        </p>
        <p className="text-sm text-brand-gray mt-6">
          Diese Seite ist eine technische Vorlage und keine Rechtsberatung. Die Angaben müssen
          vor Veröffentlichung geprüft werden.
        </p>
      </article>
    </SiteLayout>
  );
}
