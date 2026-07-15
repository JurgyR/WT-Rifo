import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionTitle } from "@/components/SiteLayout";
import { DefaultAside } from "@/components/Sidebar";
import bannerMeister from "@/assets/wt-rifo/banner-meister.jpg";

export const Route = createFileRoute("/wing-tschun")({
  head: () => ({
    meta: [
      { title: "Wing Tschun Rifo | Kampfkunst und Prinzipien" },
      {
        name: "description",
        content:
          "Was Wing Tschun auszeichnet: Prinzipien, Formen, Chi Sao, Partnertraining und verantwortungsvolle Selbstverteidigung.",
      },
    ],
  }),
  component: WingTschun,
});

function Card({ to, title, text }: { to: string; title: string; text: string }) {
  return (
    <Link
      to={to}
      className="block border border-brand-gray-line border-t-4 border-t-brand-yellow bg-[#f2f2f2] p-3 hover:bg-brand-gray hover:text-white transition no-underline min-h-[110px]"
    >
      <strong className="block mb-1 text-sm">{title}</strong>
      <span className="block text-xs leading-relaxed">{text}</span>
    </Link>
  );
}

function WingTschun() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Wing Tschun" }]}
      banner={{ src: bannerMeister, label: "Wing Tschun" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-4 leading-tight">Wing Tschun Rifo</h1>
          <p className="text-base mb-4">
            Wing Tschun ist eine chinesisch geprägte Kampfkunst. Im Mittelpunkt stehen nicht
            möglichst viele Einzeltechniken, sondern verständliche Prinzipien für
            Körperstruktur, Distanz, Timing und Reaktion.
          </p>

          <SectionTitle>Wenige Grundregeln statt starrer Antworten</SectionTitle>
          <p>
            Eine Bewegung funktioniert nicht in jeder Situation gleich. Deshalb wird im Wing
            Tschun nicht nur eine feste Technik kopiert. Der Trainierende lernt, den direkten
            Weg zu erkennen, Kontakt wahrzunehmen, mit Druck umzugehen und eine passende
            Antwort zu finden.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
            <Card
              to="/prinzipien"
              title="Prinzipien"
              text="Direkt handeln, Kontakt nutzen, nachgeben ohne die Struktur zu verlieren."
            />
            <Card
              to="/trainingsinhalte"
              title="Trainingsinhalte"
              text="Formen, Partnerübungen und Chi Sao verständlich erklärt."
            />
            <Card
              to="/einsteiger"
              title="Neu im Training"
              text="Was dich beim ersten Besuch erwartet und was du mitbringen solltest."
            />
          </div>

          <SectionTitle>Wahrnehmen und anpassen</SectionTitle>
          <p>
            Im Partnertraining lernst du, Bewegungsrichtung und Druck früh zu erkennen. Ist
            Widerstand vorhanden, wird nicht automatisch mit mehr Kraft dagegen gearbeitet.
            Ziel ist, stabil zu bleiben, unnötige Spannung zu vermeiden und die Situation
            kontrolliert zu lösen.
          </p>

          <SectionTitle>Formen und Partnertraining</SectionTitle>
          <p>
            Formen sind festgelegte Bewegungsabläufe, mit denen Grundlagen zunächst ohne
            Partner geübt werden. Im Partnertraining werden diese Bewegungen auf Distanz,
            Kontakt und wechselnden Widerstand übertragen. Chi Sao – häufig als „klebende
            Arme" übersetzt – schult dabei besonders die Wahrnehmung über den direkten
            Körperkontakt.
          </p>

          <blockquote className="border-l-8 border-brand-yellow bg-[#efefef] p-4 my-6 text-lg">
            Hart · Weich · Toleranz
            <cite className="block text-xs text-brand-gray mt-2 not-italic">
              Leitgedanken der Wing Tschun Rifo Organisation
            </cite>
          </blockquote>

          <SectionTitle>Selbstverteidigung beginnt vor dem Kampf</SectionTitle>
          <p>
            Aufmerksamkeit, klare Grenzen, Distanz und Deeskalation gehören ebenso zur
            Selbstverteidigung wie körperliche Fähigkeiten. Das Training soll nicht zu
            leichtfertigen Auseinandersetzungen ermutigen, sondern zu einem ruhigen und
            verantwortungsvollen Verhalten beitragen.
          </p>
        </article>
        <DefaultAside />
      </div>
    </SiteLayout>
  );
}
