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
        <h2 className="text-xl font-normal mt-6 mb-2">Angaben gemäß § 5 DDG</h2>
        <p>
          Joseph Jemirifo
          <br />
          Im Möhnetal 11
          <br />
          59519 Möhnesee
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Vertreten durch</h2>
        <p>Jürgen Reuter</p>
        <h2 className="text-xl font-normal mt-6 mb-2">Kontakt</h2>
        <p>
          Telefon: 0175 207 1953
          <br />
          E-Mail: juergenreuter@web.de
        </p>
        <h2 className="text-xl font-normal mt-6 mb-2">Verantwortlich für den Inhalt</h2>
        <p>
          Jürgen Reuter
          <br />
          Mörikeweg 24
          <br />
          59555 Lippstadt
        </p>
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
