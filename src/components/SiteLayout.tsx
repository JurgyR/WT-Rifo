import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/wt-rifo/wt-rifo-logo.jpg";

const nav = [
  { to: "/wing-tschun", label: "Wing Tschun" },
  { to: "/training", label: "Training" },
  { to: "/videos", label: "Videos" },
  { to: "/schulen", label: "Schulen" },
  { to: "/kontakt", label: "Probetraining & Kontakt", highlight: true },
] as const;

type Crumb = { to?: string; label: string };

export function SiteLayout({
  children,
  breadcrumbs,
  banner,
}: {
  children: ReactNode;
  breadcrumbs?: Crumb[];
  banner?: { src: string; label: string; alt?: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-brand-ink flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-brand-yellow text-brand-ink px-3 py-2 font-bold"
      >
        Direkt zum Inhalt
      </a>

      <header className="w-full border-b border-brand-gray-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="WT-Rifo Startseite">
            <img src={logo} alt="Wing Tschun Rifo Logo" className="h-14 w-auto md:h-16" />
          </Link>
          <nav className="hidden md:flex items-center" aria-label="Hauptnavigation">
            <ul className="flex flex-wrap gap-1 text-sm font-semibold">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeProps={{ className: "bg-brand-yellow text-brand-ink" }}
                    className={`block px-3 py-2 rounded text-brand-ink hover:bg-brand-gray hover:text-white transition ${("highlight" in n && n.highlight) ? "border-b-2 border-brand-yellow" : ""}`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center gap-2 bg-brand-yellow text-brand-ink px-3 py-2 rounded font-bold"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="text-sm">Menü</span>
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-brand-gray-line bg-brand-gray" aria-label="Hauptnavigation mobil">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.to} className="border-b border-brand-gray-mid last:border-b-0">
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "bg-brand-yellow !text-brand-ink" }}
                    className="block px-4 py-3 text-white font-semibold"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Brotkrumen" className="border-b border-brand-gray-line bg-white">
          <ol className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center gap-1 text-xs text-brand-gray">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-brand-gray-line">›</span>}
                {c.to ? (
                  <Link to={c.to} className="hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <strong className="font-semibold text-brand-ink">{c.label}</strong>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {banner && (
        <div className="relative w-full overflow-hidden bg-brand-gray-light" style={{ aspectRatio: "960 / 304" }}>
          <img src={banner.src} alt={banner.alt ?? ""} className="absolute inset-0 h-full w-full object-contain object-center" />
          <span className="absolute left-4 bottom-4 sm:left-10 sm:bottom-6 bg-brand-gray/90 text-white px-3 py-2 sm:px-4 sm:py-2.5 border-l-4 sm:border-l-[7px] border-brand-yellow text-lg sm:text-2xl leading-tight max-w-[85%]">
            {banner.label}
          </span>
        </div>
      )}

      <main id="main" className="flex-1 w-full">
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">{children}</div>
      </main>

      <footer className="bg-brand-gray text-white text-xs">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="m-0">Wing Tschun Rifo Organisation — Hart Weich Toleranz</p>
          <ul className="flex gap-3">
            <li>
              <Link to="/impressum" className="hover:underline">
                Impressum
              </Link>
            </li>
            <li aria-hidden>|</li>
            <li>
              <Link to="/datenschutz" className="hover:underline">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export function Button({
  to,
  href,
  external,
  variant = "yellow",
  block,
  children,
}: {
  to?: string;
  href?: string;
  external?: boolean;
  variant?: "yellow" | "gray";
  block?: boolean;
  children: ReactNode;
}) {
  const base =
    "inline-block font-bold px-4 py-2.5 text-sm leading-tight transition no-underline";
  const cls =
    variant === "yellow"
      ? `${base} bg-brand-yellow text-brand-ink hover:bg-brand-gray hover:text-white`
      : `${base} bg-brand-gray text-white hover:bg-brand-ink`;
  const full = block ? "block text-center w-full" : "";
  const finalCls = `${cls} ${full}`;
  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={finalCls}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={finalCls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={finalCls}>
      {children}
    </a>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-brand-yellow bg-[#f2f1ed] p-3 sm:p-4 my-4 text-sm">
      {children}
    </div>
  );
}

export function Missing({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#fff6b5] border border-[#d8c500] p-3 my-3 text-sm">{children}</div>
  );
}

export function SectionTitle({
  children,
  as: As = "h2",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  const size =
    As === "h1"
      ? "text-2xl sm:text-3xl"
      : As === "h2"
      ? "text-xl sm:text-2xl"
      : "text-lg";
  return <As className={`${size} font-normal mt-6 mb-3 leading-tight`}>{children}</As>;
}
