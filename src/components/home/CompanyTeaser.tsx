import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function CompanyTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Unternehmen
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Warum wir MUROT gegründet haben
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            Aus dem Wunsch heraus, Möbel länger schön und funktional zu
            erhalten, entwickeln wir Auflageflächen, die Schutz und Ästhetik
            miteinander verbinden.
          </p>
          <div className="mt-8">
            <Button href="/ueber-uns" variant="secondary">
              Mehr über uns erfahren
            </Button>
          </div>
        </div>

        <PlaceholderImage label="Bild: Team / Werkstatt" ratio="aspect-[4/3]" />
      </Container>
    </section>
  );
}
