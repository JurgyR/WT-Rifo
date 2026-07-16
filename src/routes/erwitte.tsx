import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, Button, Missing, SectionTitle } from "@/components/SiteLayout";
import { LinkList, schulenLinks } from "@/components/Sidebar";
import bannerGeduld from "@/assets/wt-rifo/banner-geduld.jpg";
import erwitteTraining from "@/assets/wt-rifo/erwitte-training.jpg.asset.json";

export const Route = createFileRoute("/erwitte")({
  head: () => ({
    meta: [
      { title: "Wing Tschun Erwitte | Erhard Jochem" },
      {
        name: "description",
        content: "Wing Tschun Rifo in Erwitte unter der Leitung von Erhard Jochem.",
      },
    ],
  }),
  component: Erwitte,
});

const rows: [string, string | ReactNode][] = [
  ["Standort", "Erwitte"],
  ["Trainer", "Erhard Jochem"],
  ["Trainingszeiten", "Montag und Mittwoch, 19:15–20:45 Uhr"],
  ["Trainingsadresse", "Hellweg 2, 59597 Erwitte"],
  ["Kontakt", (
    <a href="tel:+491702088949" className="underline hover:text-brand-gray">
      0170 2088 949
    </a>
  )],
];

function Erwitte() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Schule Erwitte" }]}
      banner={{ src: bannerGeduld, label: "Schule Erwitte" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Wing Tschun in Erwitte</h1>
          <p className="mb-4">
            Die Schule in Erwitte wird von <strong>Erhard Jochem</strong> geleitet.
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
            Du bist jederzeit herzlich eingeladen, Unterricht, Gruppe und Trainingsweise bei
            einem unverbindlichen Probetraining kennenzulernen. Komm einfach zu einer
            regulären Trainingseinheit vorbei – eine vorherige Anmeldung ist nicht notwendig.
          </p>

          <SectionTitle>Für Einsteiger geeignet</SectionTitle>
          <p>
            Vorkenntnisse sind nicht erforderlich. Die Grundlagen werden schrittweise erklärt
            und im eigenen Lerntempo vertieft.
          </p>
        </article>

        <aside>
          <section className="mb-6">
            <h2 className="text-lg font-normal mb-2">Erwitte</h2>
            <img src={gemeinschaft} alt="Gemeinsames Wing-Tschun-Training" className="w-full mb-3" />
            <p className="text-sm mb-3">
              <strong>Schulleitung:</strong>
              <br />
              Erhard Jochem
              <br />
              <a href="tel:+491702088949" className="underline hover:text-brand-gray">
                0170 2088 949
              </a>
            </p>
            <Button to="/einsteiger" block>
              Hinweise zum Probetraining
            </Button>
          </section>
          <LinkList title="Weitere Schulen" items={schulenLinks} />
        </aside>
      </div>
    </SiteLayout>
  );
}
