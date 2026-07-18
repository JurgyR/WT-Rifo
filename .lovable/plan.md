Plan: Banner auf der Trainings-Seite austauschen

1. Ziel
   Das aktuelle Banner auf der Trainings-Seite (`/training`) durch das vorhandene Sifu-Jimmy-Jemirifo-Banner-Asset ersetzen.

2. Schritte
   a) In `src/routes/training.tsx` den aktuellen Banner-Import durch `src/assets/wt-rifo/sifu-jimmy-jemirifo-banner.jpg.asset.json` ersetzen.
   b) Die `SiteLayout`-Banner-Prop auf die neue CDN-URL (`/__l5e/assets-v1/...`) umstellen.
   c) Alt-Text beibehalten oder anpassen, damit er weiterhin zum Training passt.
   d) Build laufen lassen, um sicherzustellen, dass Import und Pfad korrekt aufgelöst werden.

3. Ergebnis
   Die Trainings-Seite zeigt das neue Sifu-Jimmy-Jemirifo-Banner als Full-Width-Banner.