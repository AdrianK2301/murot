import {
  Droplets,
  Footprints,
  Scissors,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Zuverlässiger Schutz",
    description:
      "Bewahrt Oberflächen vor Kratzern, Stößen und Abnutzung im Alltag.",
  },
  {
    icon: Droplets,
    title: "Wasserabweisend",
    description: "Feuchtigkeit und Flecken perlen einfach ab.",
  },
  {
    icon: Footprints,
    title: "Rutschfest",
    description: "Sicherer Halt dank griffiger Unterseite.",
  },
  {
    icon: Scissors,
    title: "Individuell zuschneidbar",
    description: "Passt sich jeder Schublade und Fläche exakt an.",
  },
  {
    icon: Timer,
    title: "Langlebig",
    description: "Hochwertige Materialien für dauerhaften Einsatz.",
  },
  {
    icon: Sparkles,
    title: "Pflegeleicht",
    description: "Mit wenigen Handgriffen sauber und gepflegt.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Eigenschaften"
          title="Was kann die Matte?"
          description="Entwickelt, um Möbeloberflächen dauerhaft zu schützen – ohne Kompromisse bei Optik und Komfort."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <feature.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
