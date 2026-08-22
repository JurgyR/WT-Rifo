import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import probetraining from "@/assets/wt-rifo/probetraining.jpg";
import { Button } from "./SiteLayout";

export function LinkList({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-normal mb-2">{title}</h2>
      <ul className="border-t border-brand-gray-line list-none m-0 p-0">
        {items.map((it, i) => (
          <li
            key={it.to + i}
            className={`border-b border-brand-gray-line ${i % 2 === 1 ? "bg-[#e1e1e1]" : "bg-[#f0f0f0]"}`}
          >
            <Link
              to={it.to}
              className="block px-3 py-2 text-sm text-brand-ink hover:bg-brand-gray hover:text-white transition no-underline"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const einsteigerLinks = [
  { to: "/einsteiger", label: "Der erste Trainingsbesuch" },
  { to: "/trainingsinhalte", label: "Formen, Chi Sao und Partnerübungen" },
  { to: "/prinzipien", label: "Die wichtigsten Prinzipien" },
  { to: "/schulen", label: "Probetraining ohne Anmeldung" },
];

export const schulenLinks = [
  { to: "/erwitte", label: "Erwitte · Erhard Jochem" },
  { to: "/hamm", label: "Hamm · Jürgen Potthoff" },
  { to: "/warstein", label: "Warstein · Jürgen Reuter" },
];

export function ProbetrainingBox({ children }: { children?: ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-normal mb-2">Probetraining</h2>
      <img
        src={probetraining}
        alt="Training der Wing Tschun Rifo Organisation"
        width={260}
        height={160}
        loading="lazy"
        decoding="async"
        className="w-full h-40 object-cover mb-3"
      />
      {children ?? (
        <p className="text-sm mb-3">
          <strong>Sei unser Gast!</strong> Komm während der regulären Trainingszeit einfach vorbei.
          Keine Anmeldung notwendig.
        </p>
      )}
      <Button to="/schulen" block>
        Standort auswählen
      </Button>
    </section>
  );
}

export function DefaultAside() {
  return (
    <aside>
      <LinkList title="Für Einsteiger" items={einsteigerLinks} />
      <LinkList title="Trainingsorte" items={schulenLinks} />
    </aside>
  );
}
