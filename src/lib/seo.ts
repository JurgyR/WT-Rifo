export type SeoInput = { title: string; description: string };

/** Central head meta builder: title, description, Open Graph and Twitter. */
export function seoMeta({ title, description }: SeoInput) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

/** Absolute URL from the current origin; relative path during SSR. */
export function originUrl(path: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}${path}`;
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: originUrl(it.path),
    })),
  };
}

export function sportsActivityLocation(school: {
  name: string;
  path: string;
  street: string;
  postalCode: string;
  city: string;
  telephone: string;
  image: string;
  openingHours: { days: string[]; opens: string; closes: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: school.name,
    url: originUrl(school.path),
    image: originUrl(school.image),
    telephone: school.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: school.street,
      postalCode: school.postalCode,
      addressLocality: school.city,
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: school.openingHours.days,
        opens: school.openingHours.opens,
        closes: school.openingHours.closes,
      },
    ],
  };
}
