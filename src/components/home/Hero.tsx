import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const highlights = [
  "Millimetergenau nach Maß",
  "Robuste, langlebige Materialien",
  "Einfache Reinigung & Pflege",
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-float-up">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent uppercase">
            Auflageflächen nach Maß
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Schützt Ihre Möbel.
            <br />
            Passt sich <span className="text-accent">exakt</span> an.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Unsere Auflageflächen kleiden Schubladen, Regale und
            Arbeitsplatten passgenau ein und schützen sie zuverlässig vor
            Kratzern, Feuchtigkeit und Abnutzung – individuell konfiguriert
            für Ihr Möbelstück.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-ink"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/konfigurator" variant="primary">
              Konfigurator starten
            </Button>
            <Button href="/produkt" variant="secondary">
              Produkt entdecken
            </Button>
          </div>
        </div>

        <div className="relative">
          <PlaceholderImage
            label="Produktbild: Auflagefläche in Schublade"
            ratio="aspect-square"
            className="shadow-xl shadow-ink/5"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-lg sm:block">
            <p className="text-2xl font-semibold text-ink">100%</p>
            <p className="text-xs text-muted">nach Maß gefertigt</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
