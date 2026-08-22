import { seoMeta, breadcrumbList } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, Note } from "@/components/SiteLayout";
import { DefaultAside } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";

export const Route = createFileRoute("/trainingsinhalte")({
  head: () => ({
    meta: seoMeta({
      title: "Wing Tschun: Formen, Chi Sao & Partnerübungen",
      description:
        "Formen, Siu Nim Tao, Chum Kiu, Chi Sao und Partnerübungen im Wing Tschun verständlich für Einsteiger erklärt.",
    }),
  }),
  component: Inhalte,
});

const rows: [string, string][] = [
  ["Siu Nim Tao", "Die „kleine Idee“ vermittelt grundlegende Armbewegungen, Ausrichtung und einen stabilen Stand. Für Einsteiger ist sie das Fundament."],
  ["Chum Kiu", "Später werden Arme, Körperdrehung, Schritte und erste Beintechniken stärker miteinander verbunden."],
  ["Weitere Formen", "Fortgeschrittene Inhalte wie Biu Tze, Holzpuppe und Waffenformen folgen erst mit entsprechendem Trainingsstand. Die genaue Einordnung erklärt der jeweilige Trainer."],
];

function Inhalte() {
  return (
    <SiteLayout
      breadcrumbs={[
        { to: "/", label: "Startseite" },
        { to: "/wing-tschun", label: "Wing Tschun" },
        { label: "Trainingsinhalte" },
      ]}
      banner={{ src: sifuBanner.url, label: "Trainingsinhalte" }}
    >
      <JsonLd data={() => [breadcrumbList([{ name: "Startseite", path: "/" }, { name: "Training", path: "/training" }, { name: "Trainingsinhalte", path: "/trainingsinhalte" }])]} />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">
            Formen, Chi Sao und Partnerübungen
          </h1>
          <p className="text-base mb-4">
            Wing Tschun wird über mehrere miteinander verbundene Trainingsformen gelernt.
            Jede davon hat eine andere Aufgabe: Bewegungen ordnen, Wahrnehmung entwickeln und
            Fähigkeiten unter wechselnden Bedingungen anwenden.
          </p>

          <SectionTitle>Formen: Grundlagen ohne Partner</SectionTitle>
          <p>
            Formen sind festgelegte Bewegungsabläufe. Sie dienen nicht dazu, einen kompletten
            Kampf gegen einen unsichtbaren Gegner nachzuspielen. Der Trainierende kann
            einzelne Bewegungen, Haltung, Spannung und Entspannung ohne den Zeitdruck eines
            Partners untersuchen.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mb-4">
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k} className="odd:bg-white even:bg-[#f4f4f4]">
                    <th className="w-1/3 text-left align-top bg-[#e1e1e1] border border-brand-gray-line p-2 font-bold">
                      {k}
                    </th>
                    <td className="border border-brand-gray-line p-2">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Chi Sao: Wahrnehmen über Kontakt</SectionTitle>
          <p>
            Chi Sao wird häufig mit „klebende Arme“ übersetzt. Zwei Partner halten Kontakt
            über die Arme und üben zunächst vorgegebene Bewegungen. Dabei geht es nicht darum,
            die Arme krampfhaft festzukleben, sondern Druck, Richtung und Veränderungen früh
            zu spüren.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="border border-brand-gray-line border-t-4 border-t-brand-yellow bg-[#f2f2f2] p-3">
              <strong className="block mb-1 text-sm">Was wird geschult?</strong>
              <span className="text-xs block">
                Balance, Struktur, taktile Wahrnehmung, Timing und das Erkennen von Öffnungen.
              </span>
            </div>
            <div className="border border-brand-gray-line border-t-4 border-t-brand-yellow bg-[#f2f2f2] p-3">
              <strong className="block mb-1 text-sm">Wie beginnt es?</strong>
              <span className="text-xs block">
                Mit klaren Abläufen und geringem Widerstand. Erst später werden Übergänge und
                Reaktionen freier.
              </span>
            </div>
          </div>

          <SectionTitle>Partnerübungen: Technik bekommt Zusammenhang</SectionTitle>
          <p>
            Eine Bewegung aus der Form erhält im Partnertraining eine konkrete Aufgabe.
            Distanz, Winkel, Timing und Widerstand verändern sich ständig. Gute
            Partnerübungen besitzen deshalb ein klares Lernziel und eine abgesprochene
            Intensität.
          </p>

          <SectionTitle>Freie Anwendung ist nicht der Anfang</SectionTitle>
          <p>
            Je mehr Grundlagen vorhanden sind, desto offener können Übungen werden. Freieres
            Training ist sinnvoll, wenn beide Teilnehmer ihre Bewegung kontrollieren, das
            Ziel der Übung verstehen und mit Fehlern umgehen können. Es ersetzt nicht die
            präzise Grundlagenarbeit.
          </p>

          <Note>
            <strong>Zusammenhang:</strong> Formen ordnen Bewegungen. Chi Sao schult die
            Wahrnehmung im Kontakt. Partnerübungen verbinden beides mit Distanz, Timing und
            kontrolliertem Widerstand.
          </Note>
        </article>
        <DefaultAside />
      </div>
    </SiteLayout>
  );
}
