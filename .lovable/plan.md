## Ziel

Fotos den Schulen zuordnen und Warstein-Website ergänzen.

## Änderungen

**1. Assets als Lovable Assets hochladen** (aus `/mnt/user-uploads/`):

- `094_wtrifo_sommercamp_2009.jpg` → Portrait Jürgen Potthoff (Hamm)
- `1000043427_1.jpg` → Chi-Sao-Übung (Warstein)
- `WhatsApp_Image_2026-06-14_at_18.07.29.jpeg` → Gruppenfoto Trainingshalle (Erwitte)

**2. `src/routes/hamm.tsx**`

- Bild von Jürgen Potthoff in der Sidebar/Hauptbereich einbinden (statt Platzhalter `gemeinschaft.webp`).

**3. `src/routes/warstein.tsx**`

- Sidebar-Bild ersetzen durch neues Warstein-Foto.
- Neue Zeile in `rows`: „Website" → Link `https://wtrifo-warstein.com` (externer Link, target=_blank).
- Optional: zusätzlicher Button in Sidebar zur Website.

**4. `src/routes/erwitte.tsx**`

- Sidebar-Bild ersetzen durch neues Erwitte-Trainingsfoto.

**5. Optional `src/routes/kontakt.tsx` / `schulen.tsx**`

- Keine Änderungen nötig (Karten enthalten keine Fotos).

## Technisch

- Upload via `lovable-assets create --file /mnt/user-uploads/... > src/assets/wt-rifo/<name>.jpg.asset.json`
- Import als `import xy from "@/assets/wt-rifo/<name>.jpg.asset.json"` und `src={xy.url}`.