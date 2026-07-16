import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, Button, SectionTitle } from "@/components/SiteLayout";
import { LinkList, schulenLinks } from "@/components/Sidebar";
import bannerGeduld from "@/assets/wt-rifo/banner-geduld.jpg";
import juergenPotthoff from "@/assets/wt-rifo/juergen-potthoff.jpg.asset.json";

export const Route = createFileRoute("/hamm")({
  head: () => ({
    meta: [
      { title: "Wing Tschun Hamm | Jürgen Potthoff" },
      {
        name: "description",
        content: "Wing Tschun Rifo in Hamm unter der Leitung von Jürgen Potthoff.",
      },
    ],
  }),
  component: Hamm,
});

const rows: [string, string | ReactNode][] = [
  ["Standort", "Hamm"],
  ["Trainer", "Jürgen Potthoff"],
  ["Trainingszeiten", "Montag und Donnerstag, 19:30 - 21:00 Uhr"],
  ["Trainingsadresse", "An der Marienkirche 10, 59073 Hamm"],
  ["Kontakt", (
    <a href="tel:+4917664181156" className="underline hover:text-brand-gray">
      0176 6418 1156
    </a>
  )],
  ["Website", (
    <a href="https://www.wtrifo-hamm.de/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gray">
      wtrifo-hamm.de
    </a>
  )],
];

function Hamm() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Schule Hamm" }]}
      banner={{ src: bannerGeduld, label: "Schule Hamm" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Wing Tschun in Hamm</h1>
          <p className="mb-4">
            Die Schule in Hamm wird von <strong>Jürgen Potthoff</strong> geleitet.
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
            <h2 className="text-lg font-normal mb-2">Hamm</h2>
            <img src={juergenPotthoff.url} alt="Jürgen Potthoff, Schulleitung Hamm" className="w-full mb-3" />
            <p className="text-sm mb-3">
              <strong>Schulleitung:</strong>
              <br />
              Jürgen Potthoff
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
