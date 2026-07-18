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
            Wing Tschun stützt sich nicht auf eine große Sammlung fester Techniken, sondern
            auf wenige Grundregeln. Diese Prinzipien beschreiben, <em>wie</em> gehandelt
            wird – im Umgang mit dem Partner (Kampfprinzipien) und im Umgang mit der
            eingesetzten Energie (Kraftprinzipien).
          </p>

          <SectionTitle>Die vier Kampfprinzipien</SectionTitle>
          <p>
            Die vier Kampfprinzipien lassen sich als kurze Handlungsanweisungen lesen. Sie
            werden im Partnertraining Schritt für Schritt eingeübt.
          </p>
          <div className="border-l-4 border-brand-yellow bg-[#f4f4f4] p-4 my-4">
            <ol className="list-decimal pl-5 space-y-2 text-sm m-0">
              <li><strong>Ist der Weg frei, gehe vor.</strong> Steht dir nichts entgegen, handle direkt.</li>
              <li><strong>Ist der Weg versperrt, bleibe kleben.</strong> Nutze den Kontakt, um die Absicht des Partners zu spüren.</li>
              <li><strong>Ist die Kraft des Gegners größer, gib nach.</strong> Leite den Druck um, statt starr dagegenzuhalten.</li>
              <li><strong>Zieht der Gegner zurück, folge ihm.</strong> Verliere den Kontakt nicht und nutze die entstehende Öffnung.</li>
            </ol>
          </div>

          <SectionTitle>Direkt und zielgerichtet handeln</SectionTitle>
          <p>
            Unnötige Umwege kosten Zeit und erschweren die Kontrolle. Im Training wird
            deshalb untersucht, welcher Weg in einer konkreten Situation einfach, stabil und
            direkt ist. „Direkt“ bedeutet dabei nicht hektisch oder rücksichtslos, sondern
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

          <SectionTitle>Die vier Kraftprinzipien</SectionTitle>
          <p>
            Die Kraftprinzipien beschreiben, wie mit eigener und fremder Energie umgegangen
            wird.
          </p>
          <div className="border-l-4 border-brand-yellow bg-[#f4f4f4] p-4 my-4">
            <ol className="list-decimal pl-5 space-y-2 text-sm m-0">
              <li><strong>Befreie dich von der eigenen Kraft.</strong> Unnötige Spannung macht langsam und blockiert die Wahrnehmung.</li>
              <li><strong>Befreie dich von der Kraft des Gegners.</strong> Halte nicht stur dagegen, sondern weiche der einwirkenden Richtung aus.</li>
              <li><strong>Nutze die Kraft des Gegners.</strong> Leite seinen Druck um und richte ihn dorthin, wo er dir nützt.</li>
              <li><strong>Setze die eigene Kraft hinzu.</strong> Ergänze die umgeleitete Energie mit einer eigenen, klaren Bewegung.</li>
            </ol>
          </div>

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
              <strong className="block mb-2">Umleiten und ergänzen</strong>
              <p className="text-xs m-0">
                Die umgeleitete Energie des Partners wird mit einer eigenen, stabilen und
                zielgerichteten Aktion verbunden.
              </p>
            </article>
          </div>

          <SectionTitle>Kampfdistanzen</SectionTitle>
          <p>
            Wing Tschun kennt vier Distanzen, in denen unterschiedliche Werkzeuge sinnvoll
            sind. Im Training wird geübt, sie bewusst wahrzunehmen und zwischen ihnen zu
            wechseln.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
            <li><strong>Trittdistanz:</strong> größter Abstand, Beintechniken sind das primäre Mittel.</li>
            <li><strong>Faustdistanz:</strong> Handtechniken werden möglich, Beine wirken flankierend.</li>
            <li><strong>Ellbogen- und Kniedistanz:</strong> kurze, kraftvolle Werkzeuge auf engem Raum.</li>
            <li><strong>Anti-Grappling-Distanz:</strong> Körperkontakt, Kontrolle von Struktur und Balance.</li>
          </ul>

          <Note>
            <strong>Wichtig:</strong> Prinzipien sind keine Garantie für den Ausgang einer
            realen Auseinandersetzung. Sie sind Lernwerkzeuge, die unter wechselnden
            Bedingungen verantwortungsvoll erprobt werden müssen. Der beste Umgang mit
            Konflikten bleibt Deeskalation – die eigene und fremde Sicherheit hat immer
            Vorrang vor dem Anwenden von Techniken.
          </Note>
        </article>
        <DefaultAside />
      </div>
    </SiteLayout>
  );
}
