import { useEffect, useState } from "react";

/**
 * Renders JSON-LD after hydration so URLs can be built from the current
 * origin without hard coding a domain.
 */
export function JsonLd({ data }: { data: () => unknown | unknown[] }) {
  const [json, setJson] = useState<string | null>(null);
  useEffect(() => {
    const value = data();
    setJson(JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!json) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
