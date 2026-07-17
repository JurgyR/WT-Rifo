import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, Button, SectionTitle } from "@/components/SiteLayout";
import { LinkList, einsteigerLinks, schulenLinks } from "@/components/Sidebar";
import bannerHartWeich from "@/assets/wt-rifo/banner-hart-weich.jpg";
import bannerMeister from "@/assets/wt-rifo/banner-meister.jpg";
import bannerGeduld from "@/assets/wt-rifo/banner-geduld.jpg";
import taoTeKing from "@/assets/wt-rifo/tao-te-king.jpg";
import hammTraining from "@/assets/wt-rifo/hamm-training.jpg.asset.json";
import technik from "@/assets/wt-rifo/technik.webp";
import warsteinHome from "@/assets/wt-rifo/warstein-home.jpg.asset.json";
import selbstverteidigung from "@/assets/wt-rifo/selbstverteidigung.webp";
import probetraining from "@/assets/wt-rifo/probetraining.jpg";
import videoSifu from "@/assets/wt-rifo/video-sifu-jimmy-jemirifo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wing Tschun Rifo" },
      {
        name: "description",
        content:
          "Wing Tschun Rifo Kampfkunst an den Standorten Erwitte, Hamm und Warstein.",
      },
    ],
  }),
  component: Index,
});

const slides = [
  { src: bannerHartWeich, alt: "Hart Weich Toleranz – gemeinsam trainieren und bewusst handeln" },
  { src: bannerMeister, alt: "Ein wahrer Meister ist immer ein Lehrling" },
  { src: bannerGeduld, alt: "Geduld – auf den richtigen Augenblick warten können" },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      className="relative w-full overflow-hidden bg-brand-gray-light mb-6"
      style={{ aspectRatio: "16/7" }}
      aria-label="Bildmotive der Wing Tschun Rifo Organisation"
    >
      {slides.map((s, idx) => (
        <img
          key={idx}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute right-3 bottom-3 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-current={idx === i}
            onClick={() => setI(idx)}
            aria-label={`Bild ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-white ${idx === i ? "bg-brand-yellow" : "bg-brand-gray/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

function NewsItem({
  img,
  alt,
  to,
  title,
  children,
}: {
  img: string;
  alt: string;
  to: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="grid grid-cols-[110px_1fr] sm:grid-cols-[150px_1fr] gap-3 pb-4 mb-4 border-b border-[#ddd] last:border-b-0">
      <img src={img} alt={alt} className="w-full h-20 sm:h-24 object-cover" />
      <div>
        <h3 className="font-bold text-sm mb-1">
          <Link to={to} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-xs sm:text-sm m-0">{children}</p>
      </div>
    </article>
  );
}

function Index() {
  return (
    <SiteLayout>
      <HeroSlider />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8">
        <section aria-labelledby="welcome-title">
          <img
            src={taoTeKing}
            alt="Wing-Tschun-Training und ein Gedanke aus dem Tao Te King"
            className="w-full mb-4"
          />
          <h1 id="welcome-title" className="text-2xl sm:text-3xl font-normal mb-3 leading-tight">
            Willkommen bei Wing Tschun Rifo
          </h1>
          <p className="text-base leading-relaxed mb-3">
            Wing Tschun Rifo verbindet praktische Selbstverteidigung mit Körpergefühl,
            Aufmerksamkeit und persönlicher Entwicklung.
          </p>
          <p className="mb-4">
            Heute wird an drei Standorten trainiert: <strong>Erwitte</strong>,{" "}
            <strong>Hamm</strong> und <strong>Warstein</strong>. Die Schulen werden von
            erfahrenen Trainern persönlich geleitet.
          </p>

          <SectionTitle>
            <Link to="/schulen" className="hover:underline">
              Unsere Schulen
            </Link>
          </SectionTitle>

          <NewsItem
            img={technik}
            alt="Kontrollierte Technikübung"
            to="/erwitte"
            title="Erwitte"
          >
            Training unter der Leitung von <strong>Erhard Jochem</strong>. Informationen zu
            Trainingsort und Zeiten erhältst du direkt bei der Schule.
          </NewsItem>
          <NewsItem
            img={hammTraining.url}
            alt="Wing-Tschun-Partnertraining in Hamm"
            to="/hamm"
            title="Hamm"
          >
            Training unter der Leitung von <strong>Jürgen Potthoff</strong>. Zum
            Probetraining kannst du ohne vorherige Anmeldung vorbeikommen.
          </NewsItem>
          <NewsItem
            img={warsteinHome.url}
            alt="Wing-Tschun-Training in Warstein"
            to="/warstein"
            title="Warstein"
          >
            Training unter der Leitung von <strong>Jürgen Reuter</strong>, mittwochs und
            freitags von 19:00 bis 20:30 Uhr.
          </NewsItem>
        </section>

        <aside>
          <SectionTitle>
            <Link to="/training" className="hover:underline">
              Training
            </Link>
          </SectionTitle>
          <img
            src={selbstverteidigung}
            alt="Wing-Tschun-Selbstverteidigung"
            className="w-full mb-3"
          />
          <p className="text-sm mb-4">
            Das Training entwickelt Struktur, Koordination, Distanzgefühl und
            kontrolliertes Handeln.
          </p>

          <LinkList title="Für Einsteiger" items={einsteigerLinks} />
          <LinkList title="Trainingsorte" items={schulenLinks} />

          <div className="mb-6">
            <Button to="/training" block>
              Training kennenlernen
            </Button>
          </div>

          <SectionTitle>
            <Link to="/videos" className="hover:underline">
              Videos
            </Link>
          </SectionTitle>
          <a
            href="https://www.youtube.com/watch?v=wK98GkgzGMM"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden mb-3"
            aria-label="Video WT-Rifo Sifu Jimmy Jemirifo auf YouTube öffnen"
          >
            <img src={videoSifu} alt="Trainingsszene WT-Rifo Sifu Jimmy Jemirifo" className="w-full" />
            <span className="absolute left-2 bottom-2 bg-brand-gray/90 text-white text-xs font-bold px-2 py-1 border-l-4 border-brand-yellow">
              Video ansehen
            </span>
          </a>
          <div className="mb-4">
            <Button to="/videos" variant="gray" block>
              Alle Videolinks
            </Button>
          </div>

          <div className="mt-6">
            <SectionTitle>
              <Link to="/schulen" className="hover:underline">
                Probetraining
              </Link>
            </SectionTitle>
            <img
              src={probetraining}
              alt="Training der Wing Tschun Rifo Organisation"
              className="w-full h-40 object-cover mb-3"
            />
            <p className="text-sm mb-3">
              <strong>Sei unser Gast!</strong> Du bist jederzeit herzlich eingeladen,
              unser Training unverbindlich kennenzulernen. Komm einfach zu einer regulären
              Trainingseinheit vorbei – eine Anmeldung ist nicht erforderlich.
            </p>
            <Button to="/schulen" block>
              Standort auswählen
            </Button>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
