import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, Note, Button } from "@/components/SiteLayout";
import { DefaultAside } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";

export const Route = createFileRoute("/prinzipien")({
  head: () => ({
    meta: [
      { title: "Prinzipien im Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Die acht WT-Rifo-Kampfprinzipien von Sifu Jimmy Jemirifo verständlich erklärt: direkt handeln, Kontakt nutzen, nachgeben und im richtigen Moment reagieren.",
      },
      {
        property: "og:title",
        content: "Prinzipien im Wing Tschun Rifo",
      },
      {
        property: "og:description",
        content:
          "Die acht WT-Rifo-Kampfprinzipien von Sifu Jimmy Jemirifo verständlich erklärt: direkt handeln, Kontakt nutzen, nachgeben und im richtigen Moment reagieren.",
      },
    ],
  }),
  component: Prinzipien,
});

function Prinzipien() {
  return (
    <SiteLayout
      breadcrumbs={[
        { to: "/", label: "Startseite" },
        { to: "/wing-tschun", label: "Wing Tschun" },
        { label: "Prinzipien" },
      ]}
      banner={{ src: sifuBanner.url, label: "Prinzipien" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Prinzipien im Wing Tschun</h1>
          <p className="text-base mb-4">
            Wing Tschun Rifo arbeitet nicht mit einer starren Antwort für jede denkbare Situation. Statt Hunderte Techniken auswendig zu lernen, orientieren sich die Schüler an verständlichen Prinzipien. Sie helfen dabei, Druck, Bewegungsrichtung und freie Wege wahrzunehmen und angemessen zu handeln.
          </p>

          <div className="border-l-4 border-brand-yellow bg-[#f4f4f4] p-4 my-4">
            <h2 className="text-lg font-normal mb-2 leading-tight">Von vier Leitsätzen zu acht WT-Rifo-Kampfprinzipien</h2>
            <p className="text-sm m-0">
              Traditionell wird die Handlungslogik des Wing Chun häufig in vier Kampfprinzipien zusammengefasst. Sifu Jimmy Jemirifo hat diese Grundlage für das Wing Tschun Rifo zu acht differenzierten Prinzipien weiterentwickelt. Dadurch lassen sich die Übergänge zwischen direktem Handeln, Kontakt, Nachgeben und erneuter Initiative genauer vermitteln und trainieren.
            </p>
          </div>

          <SectionTitle>Klar und direkt handeln</SectionTitle>
          <p>
            Im Wing Tschun Rifo wird nach einem einfachen und direkten Handlungsweg gesucht. Ist ein sinnvoller Weg frei, wird nicht unnötig gezögert oder über einen größeren Umweg gearbeitet. Direkt bedeutet dabei nicht hektisch oder aggressiv, sondern klar, koordiniert und der Situation angemessen.
          </p>

          <SectionTitle>Kontakt als Information nutzen</SectionTitle>
          <p>
            Trifft eine Bewegung auf Widerstand, wird der Kontakt nicht sofort aufgegeben. Über ihn können Druck, Richtung und Veränderungen wahrgenommen werden. Der Schüler lernt, aufmerksam zu bleiben und auf den nächsten Impuls zu reagieren, statt blind zurückzuziehen oder nur stärker zu drücken.
          </p>

          <SectionTitle>Nachgeben und handlungsfähig bleiben</SectionTitle>
          <p>
            Ist die einwirkende Kraft größer, ist starres Gegenhalten häufig ungünstig. Nachgeben bedeutet jedoch nicht, Haltung und Kontrolle vollständig aufzugeben. Ziel ist, den Druck zu verarbeiten, die Balance zu behalten und eine neue Handlungsmöglichkeit zu finden.
          </p>

          <SectionTitle>Den richtigen Moment nutzen</SectionTitle>
          <p>
            Wird ein Weg frei, kann die eigene Bewegung ohne unnötige Verzögerung fortgesetzt werden. Erfolgt kein verwertbarer Impuls, bleibt der Schüler nicht unbegrenzt passiv, sondern lernt, selbst einen passenden Weg zu schaffen. So wechseln Wahrnehmen und Handeln miteinander ab.
          </p>

          <div className="border-l-4 border-brand-yellow bg-[#f4f4f4] p-4 my-6">
            <h2 className="text-lg font-normal mb-2 leading-tight">Prinzipien versteht man am besten in der Bewegung</h2>
            <p className="text-sm mb-3">
              Im Probetraining erlebst du, wie direkter Weg, Kontakt, Nachgeben und Timing praktisch geübt werden. Vorkenntnisse sind nicht erforderlich.
            </p>
            <Button to="/schulen" block>Standort für Probetraining wählen</Button>
          </div>

          <details className="border border-brand-gray-line bg-white p-4 my-4 text-sm">
            <summary className="font-bold cursor-pointer">Alle acht WT-Rifo-Kampfprinzipien anzeigen</summary>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li>Alle Wege zum Gegner müssen geradlinig, gezielt und direkt sein.</li>
              <li>Ist der geradlinige Weg zu deinem Gegner frei, greife ihn direkt an.</li>
              <li>Stößt der Angriff auf Widerstand, bleib kleben.</li>
              <li>Warte geduldig, um auf weitere Impulse zu reagieren.</li>
              <li>Ist der Weg wieder frei, stoß vor.</li>
              <li>Ist die Kraft des Gegners zu groß, gib nach.</li>
              <li>Erfolgt kein Impuls: Mach den Weg frei, dann stoß vor.</li>
              <li>Zieht sich der Gegner zurück, folge ihm. Greif ihn geradlinig, gezielt und direkt an.</li>
            </ol>
            <p className="text-xs mt-3 mb-0">
              Die Leitsätze beschreiben das Handeln innerhalb einer fortbestehenden Angriffssituation. „Folgen“ bedeutet nicht, einen bereits flüchtenden Menschen zu verfolgen.
            </p>
          </details>

          <SectionTitle>Mit Kraft intelligent umgehen</SectionTitle>
          <p>
            Die Kraftprinzipien erklären, wie eigene Spannung und gegnerischer Druck behandelt werden. Unnötige eigene Kraft wird gelöst, größerem gegnerischem Druck nicht starr entgegengewirkt und vorhandene Bewegung für eine eigene klare Aktion genutzt.
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-sm mb-4">
            <li>Befreie dich von unnötiger eigener Kraft.</li>
            <li>Befreie dich von der Kraft des Gegners.</li>
            <li>Nutze die Kraft des Gegners.</li>
            <li>Füge im richtigen Moment deine eigene Kraft hinzu.</li>
          </ol>

          <SectionTitle>Training in unterschiedlichen Distanzen</SectionTitle>
          <p>
            Die Prinzipien werden in unterschiedlichen Distanzen trainiert – vom größeren Abstand bis zum engen Körperkontakt. Wie Formen, Chi Sao und Partnerübungen dabei zusammenspielen, erfährst du bei den Trainingsinhalten.
          </p>
          <p className="mb-4">
            <Button to="/trainingsinhalte">Trainingsinhalte kennenlernen</Button>
          </p>

          <Note>
            <strong>Wichtig:</strong> Prinzipien sind keine Garantie für den Ausgang einer realen Auseinandersetzung. Sie werden im Training kontrolliert und verantwortungsvoll erprobt. Aufmerksamkeit, Distanz, Deeskalation sowie die eigene und fremde Sicherheit haben Vorrang.
          </Note>
        </article>
        <DefaultAside />
      </div>
    </SiteLayout>
  );
}
