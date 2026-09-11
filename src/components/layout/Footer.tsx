import Link from "next/link";
import { Container } from "@/components/ui/Container";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Produkt",
    links: [
      { label: "Produktdetails", href: "/produkt" },
      { label: "Konfigurator", href: "/konfigurator" },
      { label: "Galerie", href: "/produkt#galerie" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Fertigung", href: "/ueber-uns#fertigung" },
      { label: "Partner", href: "/ueber-uns#partner" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "FAQ", href: "/service#faq" },
      { label: "Lieferung", href: "/service#lieferung" },
      { label: "Pflege & Reinigung", href: "/service#pflege" },
      { label: "Kontakt", href: "/service#kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Widerruf", href: "/widerruf" },
      { label: "Versand", href: "/versand" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="text-xl font-bold tracking-tight text-ink">
            MUROT
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Maßgefertigte Auflageflächen zum Einkleiden und Schützen von
            Möbeln.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} MUROT. Alle Rechte vorbehalten.</p>
          <p>Platzhalter-Inhalt – Website im Aufbau.</p>
        </Container>
      </div>
    </footer>
  );
}
