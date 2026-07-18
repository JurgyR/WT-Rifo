import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, Note } from "@/components/SiteLayout";
import { DefaultAside } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";

export const Route = createFileRoute("/prinzipien")({
  head: () => ({
    meta: [
      { title: "Prinzipien | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Die wichtigsten Wing-Tschun-Prinzipien für Einsteiger: direkt handeln, Kontakt nutzen, mit Kraft umgehen und handlungsfähig bleiben.",
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
            Nicht Hunderte von Techniken müssen für jede denkbare Situation auswendig gelernt
            werden. Wenige Grundregeln helfen, Bewegungen zu verstehen und anzupassen.
          </p>

          <SectionTitle>Direkt und zielgerichtet handeln</SectionTitle>
          <p>
            Unnötige Umwege kosten Zeit und erschweren die Kontrolle. Im Training wird
            deshalb untersucht, welcher Weg in einer konkreten Situation einfach, stabil und
            direkt ist. \u201EDirekt\u201C bedeutet dabei nicht hektisch oder rücksichtslos, sondern
            klar und ohne überflüssige Bewegung.
          </p>

          <SectionTitle>Kontakt nicht sofort aufgeben</SectionTitle>
          <p>
            Trifft eine Bewegung auf Widerstand, liefert der Kontakt Informationen: Woher
            kommt der Druck? In welche Richtung bewegt sich der Partner? Wo entsteht eine
            Öffnung? Statt blind zurückzuziehen oder nur stärker zu drücken, wird gelernt,
            diese Information zu nutzen.
          </p>

          <SectionTitle>Nachgeben, ohne zusammenzubrechen</SectionTitle>
          <p>
            Ist die einwirkende Kraft größer, ist starres Gegenhalten häufig ungünstig.
            Nachgeben heißt im Wing Tschun nicht, die eigene Haltung vollständig aufzugeben.
            Ziel ist, den Druck umzuleiten, die Balance zu behalten und handlungsfähig zu
            bleiben.
          </p>

          <SectionTitle>Eine Öffnung konsequent nutzen</SectionTitle>
          <p>
            Wird ein Weg frei, soll die Reaktion nicht unnötig verzögert werden. In Übungen
            geschieht das kontrolliert und mit klarer Absprache. Schnelligkeit entsteht
            zunächst aus einer einfachen Entscheidung und einer gut koordinierten Bewegung –
            nicht aus unkontrollierter Härte.
          </p>

          <SectionTitle>Der Umgang mit Kraft</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            <article className="border border-brand-gray-line bg-[#f2f2f2] p-3">
              <strong className="block mb-2">Unnötige eigene Spannung lösen</strong>
              <p className="text-xs m-0">
                Zu viel Muskelspannung macht Bewegungen langsam und vermindert die Wahrnehmung.
              </p>
            </article>
            <article className="border border-brand-gray-line bg-[#f2f2f2] p-3">
              <strong className="block mb-2">Die Richtung des Drucks erkennen</strong>
              <p className="text-xs m-0">
                Die Kraft des Partners wird nicht isoliert bekämpft, sondern als Information
                über seine Bewegung genutzt.
              </p>
            </article>
            <article className="border border-brand-gray-line bg-[#f2f2f2] p-3">
              <strong className="block mb-2">Eigene Struktur hinzufügen</strong>
              <p className="text-xs m-0">
                Nachgeben ist nur sinnvoll, wenn daraus wieder eine stabile und
                zielgerichtete eigene Aktion entstehen kann.
              </p>
            </article>
          </div>

          <Note>
            <strong>Wichtig:</strong> Prinzipien sind keine Garantie für den Ausgang einer
            realen Auseinandersetzung. Sie sind Lernwerkzeuge, die unter wechselnden
            Bedingungen verantwortungsvoll erprobt werden müssen.
          </Note>
        </article>
        <DefaultAside />
      </div>
    </SiteLayout>
  );
}
