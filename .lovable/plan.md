Basierend auf der bestehenden Planung und dem aktuellen Upload (vier Bilder in `/mnt/user-uploads/`) werden die Schulenseiten mit passenden Fotos ergänzt.

## Ziel

Schulenseiten und Startseite mit echten Trainings- und Trainerfotos versehen. Warstein-Seite zusätzlich um den Website-Link erweitern.

## Änderungen

### 1. Bilder als Lovable Assets hochladen

Quelle `/mnt/user-uploads/` → Ziel `src/assets/wt-rifo/` als `.asset.json`-Pointer:

| Datei | Verwendung | Ziel-Name |
|-------|------------|-----------|
| `094_wtrifo_sommercamp_2009.jpg` | Portrait Jürgen Potthoff (Hamm) | `juergen-potthoff.jpg` |
| `1000043427_1.jpg` | Chi-Sao-Übung in Warstein | `warstein-training.jpg` |
| `WhatsApp_Image_2026-06-14_at_18.07.29.jpeg` | Gruppenfoto Trainingshalle (Erwitte) | `erwitte-training.jpg` |
| `20240607_180030.jpg` | Warstein-Training (Startseite / Warstein) | `warstein-home.jpg` |

### 2. `src/routes/hamm.tsx`

- Sidebar-Bild durch `juergen-potthoff.jpg` ersetzen (Platzhalter entfernen).
- Alt-Text: "Jürgen Potthoff, Schulleitung Hamm".

### 3. `src/routes/warstein.tsx`

- Sidebar-Bild durch `warstein-training.jpg` ersetzen (Chi-Sao-Übung).
- Alt-Text: "Chi-Sao-Training in Warstein".
- Neue Tabellenzeile "Website" → `https://wtrifo-warstein.com` (extern, `target="_blank"`, `rel="noopener noreferrer"`).
- Optionaler zusätzlicher Button in der Sidebar zur Website.

### 4. `src/routes/erwitte.tsx`

- Sidebar-Bild durch `erwitte-training.jpg` ersetzen (Gruppenfoto Trainingshalle).
- Alt-Text: "Wing-Tschun-Training in Erwitte".

### 5. `src/routes/index.tsx`

- Warstein-News-Item-Bild (`gemeinschaft.webp`) durch `warstein-home.jpg` ersetzen.
- Alt-Text: "Wing-Tschun-Training in Warstein".

### 6. Weitere Seiten

- `src/routes/kontakt.tsx` und `src/routes/schulen.tsx` bleiben unverändert, da sie keine betroffenen Fotos enthalten.

## Technisch

- Upload via `lovable-assets create --file /mnt/user-uploads/<datei> --filename <ziel>.jpg > src/assets/wt-rifo/<ziel>.jpg.asset.json`.
- Import als `import xy from "@/assets/wt-rifo/<ziel>.jpg.asset.json"` und Nutzung mit `src={xy.url}`.
- Abschließend `bun run build` zur Verifikation.

Soll ich den Plan so umsetzen?