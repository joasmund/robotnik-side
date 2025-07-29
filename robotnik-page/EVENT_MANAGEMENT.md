# Event Management System

Denne applikasjonen bruker nå et hybrid system for arrangementshåndtering basert på Markdown-filer. Dette gjør det enkelt for styremedlemmer å opprette og redigere arrangementer uten å måtte endre kode direkte.

## Hvordan systemet fungerer

### Markdown-baserte arrangementer
- Arrangementer lagres som Markdown-filer i mappen `content/events/`
- Hver fil inneholder metadata (frontmatter) og innhold
- Arrangementene vises automatisk på arrangementer-siden
- Kun kommende arrangementer vises (basert på dagens dato)

### Filstruktur
```
content/
  events/
    2025-08-15-robotikk-workshop.md
    2025-08-22-bedriftspresentasjon-techcorp.md
    2025-08-29-quiz-night.md
```

### Filnavn-konvensjon
Bruk formatet: `YYYY-MM-DD-arrangement-navn.md`

Eksempel: `2025-08-15-robotikk-workshop.md`

## Opprette nye arrangementer

### Metode 1: Bruke Admin-grensesnittet (anbefalt)
1. Gå til `/admin` siden i nettleseren
2. Fyll ut skjemaet med arrangementsinformasjon
3. Klikk "Generer Markdown"
4. Last ned den genererte .md filen eller kopier innholdet
5. Legg filen i `content/events/` mappen

### Metode 2: Manuell opprettelse
Opprett en ny .md fil i `content/events/` med følgende struktur:

```markdown
---
title: "Arrangement Navn"
description: "Kort beskrivelse av arrangementet"
date: "2025-MM-DD"
time: "HH:MM"
location: "Sted"
category: "Kategori"
price: 0
image: "/campus.jpg"
attendees: 0
maxAttendees: 50
organizer: "Robotnik"
---

# Detaljert beskrivelse

Her kan du skrive en mer detaljert beskrivelse av arrangementet i Markdown format.

## Påmelding

Informasjon om påmelding...
```

## Tilgjengelige kategorier
- Workshop
- Bedrift
- Sosial
- Faglig
- Tur
- Annet

## Bilder
Legg bilder i `public/` mappen og referer til dem med `/bildenavn.jpg` i image-feltet.

Eksisterende bilder som kan brukes:
- `/campus.jpg`
- `/closeup.jpg`
- `/formler.jpg`
- `/Kameleon.png`
- `/Robotniklogo.png`
- `/Robotnikwide.png`
- `/sagaatnight.webp`
- `/Thorvald.png`
- `/thorvalds.jpg`
- `/tourdekringla.jpg`

## Redigere eksisterende arrangementer
1. Finn den relevante .md filen i `content/events/`
2. Rediger frontmatter eller innhold direkte
3. Lagre filen - endringene vises automatisk på nettsiden

## Slette arrangementer
Slett eller flytt .md filen ut av `content/events/` mappen.

## Tekniske detaljer

### Avhengigheter
- `gray-matter`: For parsing av frontmatter
- `remark`: For Markdown til HTML konvertering
- `remark-html`: For HTML output

### Utility-funksjoner
- `getAllEvents()`: Henter alle arrangementer fra Markdown-filer
- `getUpcomingEvents()`: Filtrerer og returnerer kun kommende arrangementer
- `getPastEvents()`: Returnerer tidligere arrangementer
- `getEventById(id)`: Henter et spesifikt arrangement

### Filplassering
- Utility-funksjoner: `utils/markdownEvents.ts`
- Event-typer: `types/event.ts`
- Arrangementssider: `app/arrangementer/`
- Admin-grensesnitt: `app/admin/`

## Fremtidige forbedringer
- Automatisk bildeopplasting
- Påmeldingssystem
- E-post notifikasjoner
- Kalendersync
- Avansert admin-grensesnitt med redigering av eksisterende arrangementer
