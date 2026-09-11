import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const useCases = [
  { title: "Küchenschubladen", label: "Anwendung: Küche" },
  { title: "Werkstatt & Werkbank", label: "Anwendung: Werkstatt" },
  { title: "Büromöbel", label: "Anwendung: Büro" },
  { title: "Outdoor-Möbel", label: "Anwendung: Outdoor" },
];

export function UseCases() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Anwendungen"
          title="Für nahezu jedes Möbelstück"
          description="Ob Küche, Werkstatt oder Büro – unsere Auflageflächen lassen sich flexibel für unterschiedlichste Einsatzbereiche konfigurieren."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <div key={useCase.title}>
              <PlaceholderImage label={useCase.label} ratio="aspect-[3/4]" />
              <p className="mt-4 text-sm font-semibold text-ink">
                {useCase.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
