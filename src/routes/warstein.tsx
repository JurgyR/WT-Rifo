import { seoMeta, breadcrumbList, sportsActivityLocation } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, Button, Note, SectionTitle } from "@/components/SiteLayout";
import { LinkList, schulenLinks } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";
import warsteinTraining from "@/assets/wt-rifo/warstein-training.jpg.asset.json";

export const Route = createFileRoute("/warstein")({
  head: () => ({
    meta: seoMeta({
      title: "Wing Tschun Warstein – Probetraining | WT Rifo",
      description:
        "Wing Tschun in Warstein mit Jürgen Reuter: mittwochs und freitags 19:00–20:30 Uhr, kostenloses Probetraining ohne Anmeldung.",
    }),
  }),
  component: Warstein,
});

const rows: [string, string | ReactNode][] = [
  ["Standort", "Warstein"],
  ["Trainer", "Jürgen Reuter"],
  ["Trainingszeiten", "Mittwoch und Freitag, 19:00–20:30 Uhr"],
  ["Trainingsadresse", "Auf'm Bruch 12, 59581 Warstein"],
  ["Kontakt", (
    <a href="tel:+491752071953" className="underline hover:text-brand-gray">
      0175 207 1953
    </a>
  )],
  ["Website", (
    <a href="https://wtrifo-warstein.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gray">
      wtrifo-warstein.com
    </a>
  )],
];

function Warstein() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Schule Warstein" }]}
      banner={{ src: sifuBanner.url, label: "Schule Warstein" }}
    >
      <JsonLd
        data={() => [
          sportsActivityLocation({
            name: "Wing Tschun Warstein",
            path: "/warstein",
            street: "Auf'm Bruch 12",
            postalCode: "59581",
            city: "Warstein",
            telephone: "+491752071953",
            image: warsteinTraining.url,
            openingHours: { days: ["Wednesday", "Friday"], opens: "19:00", closes: "20:30" },
          }),
          breadcrumbList([
            { name: "Startseite", path: "/" },
            { name: "Schule Warstein", path: "/warstein" },
          ]),
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Wing Tschun in Warstein</h1>
          <p className="mb-4">
            In Warstein leitet <strong>Jürgen Reuter</strong> das Training mittwochs und
            freitags am Standort Auf'm Bruch 12. Interessierte können kostenlos und ohne
            Anmeldung an einer regulären Trainingseinheit teilnehmen und Wing Tschun
            praktisch kennenlernen.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mb-4">
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k} className="odd:bg-white even:bg-[#f4f4f4]">
                    <th className="w-2/5 text-left align-top bg-[#e1e1e1] border border-brand-gray-line p-2 font-bold">
                      {k}
                    </th>
                    <td className="border border-brand-gray-line p-2">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Sei unser Gast</SectionTitle>
          <p>
            Du bist jederzeit herzlich zu einem{" "}
            <strong>kostenlosen und unverbindlichen Probetraining</strong> eingeladen. Komm
            einfach mittwochs oder freitags zur regulären Trainingszeit vorbei – eine
            vorherige Anmeldung ist nicht notwendig.
          </p>
          <Note>
            <strong>Probetraining in Warstein:</strong>
            <br />
            Mittwoch und Freitag, 19:00–20:30 Uhr
            <br />
            Auf'm Bruch 12, 59581 Warstein
          </Note>

          <SectionTitle>Für Einsteiger geeignet</SectionTitle>
          <p>
            Vorkenntnisse sind nicht erforderlich. Die Grundlagen werden schrittweise
            erklärt und im eigenen Lerntempo vertieft. Aufgaben und Intensität werden an
            den Lernstand angepasst, sodass Einsteiger und erfahrene Übende zusammen
            trainieren können.
          </p>
        </article>

        <aside>
          <section className="mb-6">
            <h2 className="text-lg font-normal mb-2">Warstein</h2>
            <img src={warsteinTraining.url} alt="Chi-Sao-Training in Warstein" width={260} height={195} loading="lazy" decoding="async" className="w-full mb-3" />
            <p className="text-sm mb-3">
              <strong>Schulleitung:</strong>
              <br />
              Jürgen Reuter
              <br />
              <a href="tel:+491752071953" className="underline hover:text-brand-gray">
                0175 207 1953
              </a>
            </p>
            <Button to="/einsteiger" block>
              Einfach vorbeikommen
            </Button>
            <div className="mt-2">
              <Button href="https://wtrifo-warstein.com" external variant="gray" block>
                Website Warstein
              </Button>
            </div>
          </section>
          <LinkList title="Weitere Schulen" items={schulenLinks} />
        </aside>
      </div>
    </SiteLayout>
  );
}
