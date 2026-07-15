import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, Button, Note, SectionTitle } from "@/components/SiteLayout";
import { LinkList, schulenLinks } from "@/components/Sidebar";
import bannerGeduld from "@/assets/wt-rifo/banner-geduld.jpg";
import gemeinschaft from "@/assets/wt-rifo/gemeinschaft.webp";

export const Route = createFileRoute("/warstein")({
  head: () => ({
    meta: [
      { title: "Wing Tschun Warstein | Jürgen Reuter" },
      {
        name: "description",
        content:
          "Wing Tschun Rifo in Warstein mit Jürgen Reuter. Kostenloses Probetraining ohne Anmeldung, mittwochs und freitags 19:00–20:30 Uhr.",
      },
    ],
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
];

function Warstein() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Schule Warstein" }]}
      banner={{ src: bannerGeduld, label: "Schule Warstein" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Wing Tschun in Warstein</h1>
          <p className="mb-4">
            Die Schule in Warstein wird von <strong>Jürgen Reuter</strong> geleitet.
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
            vorherige Anmeldung ist nicht notwendig. Sei möglichst einige Minuten vor 19:00
            Uhr da, damit du dich in Ruhe umziehen und die Gruppe kennenlernen kannst.
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
            Vorkenntnisse sind nicht erforderlich. Die Grundlagen werden schrittweise erklärt
            und im eigenen Lerntempo vertieft.
          </p>
        </article>

        <aside>
          <section className="mb-6">
            <h2 className="text-lg font-normal mb-2">Warstein</h2>
            <img src={gemeinschaft} alt="Gemeinsames Wing-Tschun-Training" className="w-full mb-3" />
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
          </section>
          <LinkList title="Weitere Schulen" items={schulenLinks} />
        </aside>
      </div>
    </SiteLayout>
  );
}
