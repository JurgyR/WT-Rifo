import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Button, SectionTitle } from "@/components/SiteLayout";
import { LinkList, ProbetrainingBox } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";

export const Route = createFileRoute("/einsteiger")({
  head: () => ({
    meta: [
      { title: "Für Einsteiger | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Antworten für Wing-Tschun-Einsteiger: Vorerfahrung, Fitness, Alter, Probetraining, Kleidung, Sicherheit und Trainingsfortschritt.",
      },
    ],
  }),
  component: Einsteiger,
});

const faqs = [
  {
    q: "Muss ich mich für das Probetraining anmelden?",
    a: "Nein. Du bist jederzeit zu einem unverbindlichen Probetraining während der regulären Trainingszeiten eingeladen. Wähle einfach einen Standort und komm vorbei.",
    open: true,
  },
  {
    q: "Brauche ich bereits Kampferfahrung?",
    a: "Nein. Einsteiger beginnen mit Stand, Schritten, Ausrichtung und einfachen Partnerübungen. Vorerfahrung aus anderen Kampfkünsten kann hilfreich sein, ist aber keine Voraussetzung.",
    open: true,
  },
  {
    q: "Muss ich besonders fit oder gelenkig sein?",
    a: "Nein. Gute Kondition und Beweglichkeit können das Training erleichtern, sind aber keine Eintrittsvoraussetzung. Belastung und Bewegungsumfang sollten sinnvoll gesteigert werden.",
  },
  {
    q: "Bin ich zu alt für den Einstieg?",
    a: "Das Alter allein entscheidet nicht. Wichtiger sind der gesundheitliche Zustand, eine angemessene Belastung und ein verantwortungsvoller Trainingsaufbau. Bei bestehenden Beschwerden sollte vorher ärztlicher Rat eingeholt und der Trainer informiert werden.",
  },
  {
    q: "Werde ich beim Probetraining geschlagen oder „verhauen"?",
    a: "Nein. Partnerübungen werden erklärt und kontrolliert aufgebaut. Kontakt kann zum realistischen Lernen dazugehören, die Intensität muss aber zum Können und zur Aufgabe passen. Der Trainingspartner ist nicht der Feind.",
  },
  {
    q: "Trainieren Anfänger und Fortgeschrittene zusammen?",
    a: "Das ist teilweise sinnvoll. Anfänger profitieren von erfahrenen Partnern, sofern diese kontrolliert arbeiten. Aufgaben können innerhalb einer Gruppe an unterschiedliche Erfahrungsstufen angepasst werden.",
  },
  {
    q: "Kann ich eine Begleitperson mitbringen?",
    a: "Ja, eine Begleitperson kann gerne mitkommen. Möchte sie ebenfalls mittrainieren, ist auch dafür keine vorherige Anmeldung notwendig. Ob reines Zuschauen während der gesamten Einheit möglich ist, entscheidet die jeweilige Schule vor Ort.",
  },
  {
    q: "Wie schnell kann ich mich verteidigen?",
    a: "Dafür gibt es keine seriöse feste Zeitangabe. Fortschritt hängt unter anderem von Trainingshäufigkeit, Aufmerksamkeit, körperlichen Voraussetzungen und der Situation ab. Schon früh können Wahrnehmung, Distanzverhalten und einfache Handlungsprinzipien verbessert werden; verlässliche Fähigkeiten benötigen regelmäßiges Training.",
  },
  {
    q: "Was kosten Training und Mitgliedschaft?",
    a: "Beiträge, mögliche Probeangebote und Vertragsbedingungen können sich ändern. Verbindliche aktuelle Angaben erhältst du direkt bei der Schule in Erwitte, Hamm oder Warstein.",
  },
];

function Einsteiger() {
  return (
    <SiteLayout
      breadcrumbs={[
        { to: "/", label: "Startseite" },
        { to: "/training", label: "Training" },
        { label: "Für Einsteiger" },
      ]}
      banner={{ src: sifuBanner.url, label: "Für Einsteiger" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Neu beim Wing Tschun?</h1>
          <p className="text-base mb-4">
            Du musst weder Kampferfahrung noch außergewöhnliche Kondition oder Beweglichkeit
            mitbringen. Das Training beginnt mit Grundlagen und wird an deinen aktuellen
            Lernstand angepasst.
          </p>

          <SectionTitle>Vor dem ersten Besuch</SectionTitle>
          <p>
            Wähle die Schule deiner Wahl, prüfe Trainingszeit und Adresse und komm einfach zu
            einer regulären Trainingseinheit vorbei. Eine vorherige Anmeldung ist nicht
            notwendig. Sei möglichst einige Minuten vor Trainingsbeginn da, damit du dich in
            Ruhe einfinden und den Trainer kennenlernen kannst. Verletzungen oder körperliche
            Einschränkungen solltest du dem Trainer vor Beginn mitteilen.
          </p>

          <div className="bg-[#efefef] border-t-4 border-brand-yellow p-4 my-6">
            <h2 className="text-lg font-normal mt-0 mb-2">Das reicht für den Anfang</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>bequeme Sportkleidung</li>
              <li>saubere Hallenschuhe nach Absprache</li>
              <li>etwas zu trinken</li>
              <li>Neugier und die Bereitschaft, langsam zu beginnen</li>
            </ul>
          </div>

          <SectionTitle>Häufige Fragen</SectionTitle>
          <div className="border-t border-brand-gray-line mb-6">
            {faqs.map((f, i) => (
              <details
                key={i}
                open={f.open}
                className={`border-b border-brand-gray-line ${i % 2 === 1 ? "bg-[#e5e5e5]" : "bg-[#f2f2f2]"}`}
              >
                <summary className="cursor-pointer font-bold p-3 list-none">{f.q}</summary>
                <p className="px-3 pb-3 text-sm m-0">{f.a}</p>
              </details>
            ))}
          </div>

          <SectionTitle>Probetraining sinnvoll nutzen</SectionTitle>
          <p>
            Achte nicht nur darauf, ob dir einzelne Techniken gefallen. Entscheidend sind die
            Atmosphäre, die Erklärungen des Trainers, der Umgang der Teilnehmer miteinander
            und ob kontrolliert trainiert wird. Stelle Fragen, wenn dir eine Übung oder ihre
            Intensität unklar ist.
          </p>

          <div className="my-4">
            <Button to="/schulen">Schule auswählen und vorbeikommen</Button>
          </div>
        </article>

        <aside>
          <LinkList
            title="Direkt weiterlesen"
            items={[
              { to: "/training", label: "Ablauf des Trainings" },
              { to: "/trainingsinhalte", label: "Formen und Chi Sao" },
              { to: "/prinzipien", label: "Prinzipien verstehen" },
            ]}
          />
          <ProbetrainingBox>
            <p className="text-sm mb-3">
              Sei unser Gast und komm während der regulären Trainingszeit einfach vorbei.
              Keine Anmeldung notwendig.
            </p>
          </ProbetrainingBox>
        </aside>
      </div>
    </SiteLayout>
  );
}
