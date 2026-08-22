import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import bannerMeister from "@/assets/wt-rifo/banner-meister.jpg";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Wing Tschun Rifo" },
      { name: "description", content: "Impressum der Wing Tschun Rifo Website." },
      { property: "og:title", content: "Impressum | Wing Tschun Rifo" },
      { property: "og:description", content: "Impressum der Wing Tschun Rifo Website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
          Jürgen Reuter
          <br />
          Wing Tschun Rifo
          <br />
          Mörikeweg 24
          <br />
          59555 Lippstadt
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">Kontakt</h2>
        <p>
          Telefon: <a href="tel:+491752071953" className="underline hover:text-brand-gray">0175 2071953</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:juergenreuter@web.de" className="underline hover:text-brand-gray">
            juergenreuter@web.de
          </a>
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">
          Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV
        </h2>
        <p>
          Jürgen Reuter
          <br />
          Mörikeweg 24
          <br />
          59555 Lippstadt
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">Selbstständige Schulen</h2>
        <p>
          Die auf dieser Website genannten Schulen und Standorte werden von den jeweils
          angegebenen Betreibern rechtlich selbstständig geführt. Jürgen Reuter ist Betreiber
          dieses Internetauftritts, jedoch nicht automatisch Betreiber der verlinkten Schulen.
        </p>

        <h2 className="text-xl font-normal mt-6 mb-2">Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </article>
    </SiteLayout>
  );
}
