import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, Note, Button } from "@/components/SiteLayout";
import { DefaultAside } from "@/components/Sidebar";
import bannerGeduld from "@/assets/wt-rifo/banner-geduld.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Ablauf des Wing-Tschun-Trainings: Grundlagen, Formen, Partnerübungen, Chi Sao und Hinweise für den ersten Besuch.",
      },
    ],
  }),
  component: Training,
});

const steps = [
  {
    title: "Ankommen und erklären",
    body:
      "Neue Teilnehmer lernen den Trainer, die Gruppe und die grundlegenden Regeln des Partnertrainings kennen.",
  },
  {
    title: "Grundlagen üben",
    body:
      "Stand, Schritte, Ausrichtung, Koordination und einfache Bewegungsabläufe werden verständlich aufgebaut.",
  },
  {
    title: "Mit einem Partner trainieren",
    body:
      "Distanz, Kontakt und Reaktion werden mit kontrolliertem Tempo und klarer Aufgabenstellung geübt.",
  },
  {
    title: "Anwendung einordnen",
    body:
      "Der Trainer zeigt, wofür eine Übung gedacht ist, wo ihre Grenzen liegen und wie sie sicher trainiert wird.",
  },
];

const table = [
  ["Grundlagen", "Stand, Schritte, Ausrichtung, Schlagmechanik und sichere Bewegungsmuster."],
  ["Formen", "Festgelegte Bewegungsabläufe helfen, Koordination und Struktur zunächst ohne Partner zu entwickeln."],
  ["Partnerübungen", "Distanz, Timing, Kontakt, Reaktion und kontrollierter Widerstand."],
  ["Chi Sao", "Übungen mit Armkontakt schulen taktile Wahrnehmung, Balance und den Umgang mit Druck."],
  ["Anwendung", "Mit wachsender Erfahrung werden Aufgaben offener, ohne die Sicherheit der Partner aus den Augen zu verlieren."],
];

function Training() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Training" }]}
      banner={{ src: bannerGeduld, label: "Training" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-4">So läuft das Training ab</h1>
          <p className="text-base mb-4">
            Der Einstieg erfolgt schrittweise. Vorerfahrung ist nicht erforderlich.
            Aufmerksamkeit, Regelmäßigkeit und die Bereitschaft zu lernen sind wichtiger als
            besondere Kraft oder Beweglichkeit.
          </p>

          <SectionTitle>Ein typischer Trainingsabend</SectionTitle>
          <ol className="list-none p-0 m-0 my-4 space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="relative pl-14 min-h-[42px]">
                <span className="absolute left-0 top-0 w-9 h-9 rounded-full bg-brand-yellow grid place-items-center font-bold">
                  {i + 1}
                </span>
                <strong className="block mb-1">{s.title}</strong>
                <span className="block text-sm text-brand-gray">{s.body}</span>
              </li>
            ))}
          </ol>

          <SectionTitle>Vom Einfachen zum Freieren</SectionTitle>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {table.map(([h, b]) => (
                  <tr key={h} className="odd:bg-white even:bg-[#f4f4f4]">
                    <th className="w-1/3 text-left align-top bg-[#e1e1e1] border border-brand-gray-line p-2 font-bold">
                      {h}
                    </th>
                    <td className="border border-brand-gray-line p-2">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Anfänger und Fortgeschrittene</SectionTitle>
          <p>
            Einsteiger und erfahrene Schüler können Teile des Trainings gemeinsam absolvieren.
            Die konkrete Aufgabe und die Intensität werden dem jeweiligen Stand angepasst.
            Fortgeschrittene sollen nicht einfach „gewinnen", sondern dem Einsteiger ein
            kontrolliertes und hilfreiches Lernen ermöglichen.
          </p>

          <Note>
            <strong>Grundsatz im Partnertraining:</strong> Dein Trainingspartner ist nicht dein
            Gegner. Beide tragen Verantwortung dafür, dass konzentriert, realistisch und ohne
            unnötige Verletzungen geübt werden kann.
          </Note>

          <SectionTitle>Was du mitbringen solltest</SectionTitle>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
            <li>bequeme, saubere Sportkleidung</li>
            <li>saubere Hallenschuhe, sofern die Schule sie verlangt</li>
            <li>etwas zu trinken</li>
            <li>respektvollen Umgang und die Bereitschaft, Hinweise anzunehmen</li>
          </ul>

          <div className="mb-4">
            <Button to="/einsteiger">Weitere Antworten für Einsteiger</Button>
          </div>

          <Note>
            <strong>Probetraining ohne Anmeldung:</strong> Du kannst jederzeit während einer
            regulären Trainingseinheit einsteigen und das Training unverbindlich kennenlernen.
            Wähle einfach einen Standort und komm vorbei.
          </Note>
        </article>
        <DefaultAside />
      </div>
    </SiteLayout>
  );
}
