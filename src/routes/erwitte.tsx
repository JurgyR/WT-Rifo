import { seoMeta, originUrl, breadcrumbList, sportsActivityLocation } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, Button, Note, SectionTitle } from "@/components/SiteLayout";
import { LinkList, schulenLinks } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";
import erwitteTraining from "@/assets/wt-rifo/erwitte-training.jpg.asset.json";

export const Route = createFileRoute("/erwitte")({
  head: () => ({
    meta: seoMeta({
      title: "Wing Tschun Erwitte – Probetraining | WT Rifo",
      description:
        "Wing Tschun in Erwitte mit Erhard Jochem: Training montags und mittwochs, kostenloses Probetraining ohne Anmeldung am Hellweg 2.",
    }),
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
  ["Anfahrt", (
    <a href="https://www.google.com/maps/dir/?api=1&destination=Hellweg+2%2C+59597+Erwitte" target="_blank" rel="noopener noreferrer" aria-label="Route zu Wing Tschun Erwitte in Google Maps öffnen – externer Link" className="underline hover:text-brand-gray">
      Anfahrt zu Wing Tschun Erwitte ↗
    </a>
  )],
];

function Erwitte() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Schule Erwitte" }]}
      banner={{ src: sifuBanner.url, label: "Schule Erwitte" }}
    >
      <JsonLd
        data={() => [
          sportsActivityLocation({
            name: "Wing Tschun Erwitte",
            path: "/erwitte",
            street: "Hellweg 2",
            postalCode: "59597",
            city: "Erwitte",
            telephone: "+491702088949",
            image: erwitteTraining.url,
            openingHours: { days: ["Monday", "Wednesday"], opens: "19:15", closes: "20:45" },
          }),
          breadcrumbList([
            { name: "Startseite", path: "/" },
            { name: "Schule Erwitte", path: "/erwitte" },
          ]),
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Wing Tschun in Erwitte</h1>
          <p className="mb-4">
            In Erwitte kannst du Wing Tschun montags und mittwochs mit{" "}
            <strong>Erhard Jochem</strong> kennenlernen. Trainiert wird am Hellweg 2. Beim
            kostenlosen Probetraining steigst du ohne Vorkenntnisse und ohne vorherige
            Anmeldung direkt in eine reguläre Trainingseinheit ein.
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
            Du bist zu Beginn jeder regulären Trainingseinheit zu einem unverbindlichen
            Probetraining eingeladen. Komm einfach vorbei – eine vorherige Anmeldung ist
            nicht notwendig.
          </p>
          <Note>
            <strong>Probetraining in Erwitte:</strong>
            <br />
            Montag und Mittwoch, 19:15–20:45 Uhr
            <br />
            Hellweg 2, 59597 Erwitte
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
            <h2 className="text-lg font-normal mb-2">Erwitte</h2>
            <img src={erwitteTraining.url} alt="Wing-Tschun-Training in Erwitte" width={260} height={195} loading="lazy" decoding="async" className="w-full mb-3" />
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
            <div className="mt-2">
              <Button href="https://www.google.com/maps/dir/?api=1&destination=Hellweg+2%2C+59597+Erwitte" external variant="gray" block>
                Anfahrt zu Wing Tschun Erwitte
              </Button>
            </div>
          </section>
          <LinkList title="Weitere Schulen" items={schulenLinks} />
        </aside>
      </div>
    </SiteLayout>
  );
}
