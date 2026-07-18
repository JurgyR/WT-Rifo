import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Note, Button } from "@/components/SiteLayout";
import { LinkList } from "@/components/Sidebar";
import sifuBanner from "@/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json";
import probetraining from "@/assets/wt-rifo/probetraining.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Probetraining und Kontakt | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Probetraining ohne Anmeldung und Kontakt zu den Wing Tschun Rifo Schulen in Erwitte, Hamm und Warstein.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Kontakt" }]}
      banner={{ src: sifuBanner.url, label: "Kontakt" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">Probetraining und Kontakt</h1>
          <p className="mb-4">
            <strong>Sei unser Gast!</strong> Du bist jederzeit herzlich eingeladen, das
            Training unverbindlich kennenzulernen. Komm einfach zu einer regulären
            Trainingseinheit vorbei – eine vorherige Anmeldung ist nicht notwendig.
          </p>

          <Note>
            <strong>Kontakt ist freiwillig:</strong> Du musst für ein Probetraining weder
            anrufen noch schreiben. Nutze die Kontaktdaten später nur, wenn du vorab eine
            besondere Frage klären möchtest.
          </Note>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <article className="border border-brand-gray-line bg-[#f0f0f0] p-4">
              <h2 className="text-lg font-normal mb-2">Erwitte</h2>
              <p className="text-sm mb-1">
                <strong>Erhard Jochem</strong>
              </p>
              <p className="text-sm mb-3">
                Montag und Mittwoch, 19:15–20:45 Uhr
                <br />
                Hellweg 2, 59597 Erwitte
                <br />
                <a href="tel:+491702088949" className="underline hover:text-brand-gray">
                  0170 2088 949
                </a>
              </p>
              <Button to="/erwitte">Zur Schule</Button>
            </article>
            <article className="border border-brand-gray-line bg-[#f0f0f0] p-4">
              <h2 className="text-lg font-normal mb-2">Hamm</h2>
              <p className="text-sm mb-1">
                <strong>Jürgen Potthoff</strong>
              </p>
              <p className="text-sm mb-3">Kontaktangaben noch einzutragen.</p>
              <Button to="/hamm">Zur Schule</Button>
            </article>
            <article className="border border-brand-gray-line bg-[#f0f0f0] p-4">
              <h2 className="text-lg font-normal mb-2">Warstein</h2>
              <p className="text-sm mb-1">
                <strong>Jürgen Reuter</strong>
              </p>
              <p className="text-sm mb-3">
                Mittwoch und Freitag, 19:00–20:30 Uhr
                <br />
                Auf'm Bruch 12, 59581 Warstein
                <br />
                <a href="tel:+491752071953" className="underline hover:text-brand-gray">
                  0175 207 1953
                </a>
              </p>
              <Button to="/warstein">Zur Schule</Button>
            </article>
          </div>

          <Note>
            <strong>Warum kein Kontaktformular?</strong> Ohne festgelegte Empfängeradresse und
            serverseitige Verarbeitung wäre ein Formular nicht funktionsfähig. Die statische
            Seite enthält deshalb bewusst kein Scheinformular.
          </Note>

          <h2 className="text-xl font-normal mt-6 mb-2">Kontakt nur bei Fragen</h2>
          <p>
            Eine Nachricht ist nur sinnvoll, wenn du beispielsweise gesundheitliche
            Einschränkungen, die Mitnahme einer größeren Gruppe oder eine organisatorische
            Besonderheit vorab klären möchtest. Für den normalen ersten Besuch genügt es,
            rechtzeitig zur regulären Trainingszeit zu erscheinen.
          </p>
        </article>

        <aside>
          <LinkList
            title="Informationen"
            items={[
              { to: "/einsteiger", label: "Hinweise für Einsteiger" },
              { to: "/training", label: "Ablauf des Trainings" },
              { to: "/trainingsinhalte", label: "Formen und Chi Sao" },
            ]}
          />
          <section className="mb-6">
            <h2 className="text-lg font-normal mb-2">Probetraining</h2>
            <img
              src={probetraining}
              alt="Wing Tschun Rifo Training"
              className="w-full h-40 object-cover mb-3"
            />
            <p className="text-sm">
              Mitmachen, ausprobieren und die Trainingsweise praktisch erleben – jederzeit
              während der regulären Trainingszeiten und ohne Anmeldung.
            </p>
          </section>
        </aside>
      </div>
    </SiteLayout>
  );
}
