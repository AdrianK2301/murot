import { Ruler, Layers, Palette, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  { icon: Ruler, label: "Maße eingeben" },
  { icon: Layers, label: "Material wählen" },
  { icon: Palette, label: "Ausführung festlegen" },
  { icon: Eye, label: "Live-Vorschau ansehen" },
];

export function ConfiguratorTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="overflow-hidden rounded-3xl bg-ink px-8 py-14 sm:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
              Konfigurator
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ihre Auflagefläche, in wenigen Schritten konfiguriert
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
              Maße, Material und Ausführung ganz nach Ihren Wünschen – inklusive
              Live-Vorschau, bevor Sie bestellen.
            </p>
            <div className="mt-8">
              <Button href="/konfigurator" variant="primary" className="bg-accent hover:bg-accent/90">
                Jetzt konfigurieren
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-xs font-semibold text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon className="mt-3 h-5 w-5 text-accent" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-medium text-white">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
