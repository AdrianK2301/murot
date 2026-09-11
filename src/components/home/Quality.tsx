import { Award, Factory, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const points = [
  {
    icon: Factory,
    title: "Sorgfältige Fertigung",
    description:
      "Jede Auflagefläche wird nach Bestellung präzise zugeschnitten und geprüft.",
  },
  {
    icon: Award,
    title: "Geprüfte Materialien",
    description:
      "Ausgewählte Werkstoffe für Langlebigkeit und sicheren Einsatz im Alltag.",
  },
  {
    icon: Leaf,
    title: "Verantwortungsvoll produziert",
    description:
      "Ressourcenschonende Prozesse entlang der gesamten Fertigung.",
  },
];

export function Quality() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <PlaceholderImage
          label="Produktbild: Fertigung / Zuschnitt"
          ratio="aspect-[4/3]"
          className="order-2 lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Qualität & Fertigung"
            title="Handwerk trifft Präzision"
            description="Von der Materialauswahl bis zum letzten Zuschnitt – Qualität ist bei jedem Produktionsschritt unser Maßstab."
          />

          <div className="mt-8 flex flex-col gap-6">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <point.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
