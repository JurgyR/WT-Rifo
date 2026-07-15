import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Button, Note } from "@/components/SiteLayout";
import bannerHartWeich from "@/assets/wt-rifo/banner-hart-weich.jpg";

export const Route = createFileRoute("/schulen")({
  head: () => ({
    meta: [
      { title: "Schulen | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Wing Tschun Rifo Schulen in Erwitte, Hamm und Warstein mit den jeweiligen Trainern.",
      },
    ],
  }),
  component: Schulen,
});

const schools = [
  {
    name: "Erwitte",
    trainer: "Erhard Jochem",
    body: "Informationen über die Schule, das Training und die noch einzutragenden Kontaktdaten.",
    to: "/erwitte",
  },
  {
    name: "Hamm",
    trainer: "Jürgen Potthoff",
    body: "Informationen über die Schule, das Training und die noch einzutragenden Kontaktdaten.",
    to: "/hamm",
  },
  {
    name: "Warstein",
    trainer: "Jürgen Reuter",
    body: "Training mittwochs und freitags von 19:00 bis 20:30 Uhr.",
    to: "/warstein",
  },
];

function Schulen() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Schulen" }]}
      banner={{ src: bannerHartWeich, label: "Schulen" }}
    >
      <h1 className="text-2xl sm:text-3xl font-normal mb-3">Schulen und Trainer</h1>
      <p className="mb-6">
        Die Wing Tschun Rifo Organisation ist aktuell an drei Standorten vertreten. Andere
        frühere Schulen und Schulleiter sind in dieser Neufassung nicht enthalten.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {schools.map((s) => (
          <article key={s.name} className="border border-brand-gray-line bg-[#f3f3f3] flex flex-col">
            <header className="bg-brand-gray text-white p-3 border-b-4 border-brand-yellow">
              <h2 className="text-xl font-normal m-0">{s.name}</h2>
              <p className="m-0 text-xs mt-1">Trainer {s.trainer}</p>
            </header>
            <div className="p-3 flex-1 flex flex-col">
              <p className="text-sm mb-3 flex-1">{s.body}</p>
              <Button to={s.to} block>
                Schule {s.name}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <h2 className="text-xl font-normal mb-2">Dein Einstieg</h2>
      <Note>
        <strong>Einfach mitmachen und ausprobieren:</strong> Du bist an jedem Standort
        jederzeit zu einem unverbindlichen Probetraining während der regulären Trainingszeiten
        eingeladen. Eine vorherige Anmeldung ist nicht notwendig.
      </Note>
      <p>
        Wähle die Schule, die für dich am besten erreichbar ist, informiere dich über
        Trainingsort und Trainingszeit und komm einfach vorbei. Siehe auch{" "}
        <Link to="/einsteiger" className="underline">
          Informationen für Einsteiger
        </Link>
        .
      </p>
    </SiteLayout>
  );
}
