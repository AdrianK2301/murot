# MUROT – Website

Website für einen Hersteller von maßgefertigten Auflageflächen für Möbel
(Einkleiden & Schützen). Gebaut mit [Next.js](https://nextjs.org) (App
Router), TypeScript und Tailwind CSS.

## Entwicklung

```bash
npm run dev
```

Öffnet die Seite unter [http://localhost:3000](http://localhost:3000).

## Struktur

```
src/
  app/                  Routen (Next.js App Router)
    page.tsx            Startseite
    produkt/             Platzhalter für die Produktseite
    konfigurator/        Platzhalter für den Konfigurator
    ueber-uns/            Platzhalter für "Über uns"
    service/              Platzhalter für Service
    shop/                 Platzhalter für Bestellung/Shop
    impressum/, datenschutz/, agb/, widerruf/, versand/
                          Rechtliche Platzhalterseiten
  components/
    layout/              Header, Footer
    home/                 Sektionen der Startseite
    ui/                   Wiederverwendbare UI-Bausteine
                          (Button, Container, PlaceholderImage, …)
```

## Stand

- Grundgerüst der **Startseite** ist fertig aufgebaut (alle Sektionen aus
  der Sitemap), mit Platzhaltertexten und Dummy-Produktbildern
  (`PlaceholderImage`-Komponente).
- Für alle übrigen Hauptnavigationspunkte und rechtlichen Seiten existieren
  einfache Platzhalterseiten, damit Navigation und Footer-Links
  funktionieren.
- Marken-/Farbwerte sind in `src/app/globals.css` als CSS-Variablen
  definiert (`--accent`, `--ink`, …) und können zentral angepasst werden.
- Sobald echtes Bildmaterial vorliegt, `PlaceholderImage` durch
  `next/image` mit echten Assets ersetzen.
