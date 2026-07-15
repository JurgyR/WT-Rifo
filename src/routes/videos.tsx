import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, Note, Button } from "@/components/SiteLayout";
import { LinkList } from "@/components/Sidebar";
import bannerHartWeich from "@/assets/wt-rifo/banner-hart-weich.jpg";
import videoSifu from "@/assets/wt-rifo/video-sifu-jimmy-jemirifo.jpg";
import videoMitte from "@/assets/wt-rifo/video-die-mitte-der-welt.jpg";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos | Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Ausgewählte Videos der Wing Tschun Rifo Organisation mit Einblicken in Training und Lehrgänge.",
      },
    ],
  }),
  component: Videos,
});

function VideoCard({
  img,
  href,
  alt,
  title,
  text,
  actions,
  portrait,
}: {
  img: string;
  href: string;
  alt: string;
  title: string;
  text: string;
  actions: React.ReactNode;
  portrait?: boolean;
}) {
  return (
    <article className="border border-brand-gray-line bg-[#f2f2f2]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden bg-[#d7d7d7] aspect-video"
      >
        <img
          src={img}
          alt={alt}
          className={`w-full h-full ${portrait ? "object-contain bg-[#e7e7e7]" : "object-cover"}`}
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full grid place-items-center bg-brand-gray/90 border-4 border-brand-yellow text-white text-2xl pl-1"
        >
          ▶
        </span>
      </a>
      <div className="p-3">
        <h2 className="text-lg font-normal mb-2">{title}</h2>
        <p className="text-sm mb-3">{text}</p>
        <div className="flex flex-wrap gap-2">{actions}</div>
      </div>
    </article>
  );
}

function Videos() {
  return (
    <SiteLayout
      breadcrumbs={[{ to: "/", label: "Startseite" }, { label: "Videos" }]}
      banner={{ src: bannerHartWeich, label: "Videos" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <article>
          <h1 className="text-2xl sm:text-3xl font-normal mb-4">
            Wing Tschun Rifo in bewegten Bildern
          </h1>
          <p className="mb-4">
            Die Videos vermitteln einen Eindruck von Training, Bewegung und Atmosphäre. Sie
            stammen aus dem bisherigen öffentlichen Auftritt der Wing Tschun Rifo Organisation.
          </p>

          <Note>
            <strong>Datenschutzfreundlich gelöst:</strong> Die Filme werden nicht automatisch
            eingebettet. Erst beim Anklicken öffnet sich YouTube oder Vimeo in einem neuen
            Browserfenster.
          </Note>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <VideoCard
              img={videoSifu}
              alt="Partnertraining aus dem Video WT-Rifo Sifu Jimmy Jemirifo"
              href="https://www.youtube.com/watch?v=wK98GkgzGMM"
              title="WT-Rifo Sifu Jimmy Jemirifo"
              text="Ein ausführlicher Einblick in einen Wing-Tschun-Rifo-Intensivlehrgang und die Trainingsarbeit mit Sifu Jimmy Jemirifo."
              actions={
                <Button href="https://www.youtube.com/watch?v=wK98GkgzGMM" external>
                  Auf YouTube ansehen ↗
                </Button>
              }
            />
            <VideoCard
              portrait
              img={videoMitte}
              alt="Motiv des Films Die Mitte der Welt"
              href="https://vimeo.com/34304898"
              title="Die Mitte der Welt"
              text="Ein künstlerischer Kurzfilm über Wing Tschun Rifo, Bewegung und die Suche nach der eigenen Mitte."
              actions={
                <>
                  <Button href="https://vimeo.com/34304898" external>
                    Auf Vimeo ansehen ↗
                  </Button>
                  <Button
                    href="https://www.youtube.com/watch?v=brDtpyTAiaw"
                    external
                    variant="gray"
                  >
                    Auf YouTube ansehen ↗
                  </Button>
                </>
              }
            />
          </div>

          <SectionTitle>Weitere Videos</SectionTitle>
          <p>
            Weitere veröffentlichte Filme findest du direkt auf dem bisherigen YouTube-Kanal
            der Organisation.
          </p>
          <div className="mt-2">
            <Button
              href="https://www.youtube.com/@wingtschunrifo"
              external
              variant="gray"
            >
              YouTube-Kanal öffnen ↗
            </Button>
          </div>
        </article>

        <aside>
          <section className="mb-6">
            <h2 className="text-lg font-normal mb-2">Training kennenlernen</h2>
            <p className="text-sm mb-3">
              Videos geben einen ersten Eindruck. Entscheidend ist das eigene Erleben im
              Training.
            </p>
            <p className="text-sm mb-3">
              <strong>Sei unser Gast:</strong> Komm während einer regulären Trainingseinheit
              einfach vorbei. Eine vorherige Anmeldung ist nicht notwendig.
            </p>
            <Button to="/schulen" block>
              Schule auswählen
            </Button>
          </section>
          <LinkList
            title="Mehr erfahren"
            items={[
              { to: "/einsteiger", label: "Informationen für Einsteiger" },
              { to: "/trainingsinhalte", label: "Formen und Chi Sao" },
              { to: "/prinzipien", label: "Wing-Tschun-Prinzipien" },
            ]}
          />
        </aside>
      </div>
    </SiteLayout>
  );
}
