import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const layers = [
  {
    name: "Schutzoberfläche",
    description: "Kratz- und abriebfeste Deckschicht",
    color: "bg-accent",
    hoverOffset: "group-hover:-translate-y-16",
  },
  {
    name: "Funktionsschicht",
    description: "Wasser- und fettabweisend",
    color: "bg-accent/70",
    hoverOffset: "group-hover:-translate-y-5",
  },
  {
    name: "Trägermaterial",
    description: "Formstabil und reißfest",
    color: "bg-ink/60",
    hoverOffset: "group-hover:translate-y-5",
  },
  {
    name: "Rutschfeste Unterseite",
    description: "Sicherer Halt auf jeder Fläche",
    color: "bg-ink/85",
    hoverOffset: "group-hover:translate-y-16",
  },
] as const;

export function LayerShowcase() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Aufbau"
            title="Mehrschichtig aufgebaut, einfach durchdacht"
            description="Jede Auflagefläche besteht aus mehreren funktionalen Schichten, die zusammen für Schutz, Griffigkeit und Langlebigkeit sorgen. Fahren Sie über die Darstellung, um den Aufbau zu erkunden."
          />
        </div>

        <div className="group relative mx-auto h-72 w-full max-w-sm sm:h-80">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            {layers.map((layer, index) => (
              <div
                key={layer.name}
                className={`flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-border/60 px-4 shadow-sm transition-transform duration-500 ease-out ${layer.color} ${layer.hoverOffset}`}
                style={{ zIndex: layers.length - index }}
              >
                <span className="text-sm font-semibold text-white">
                  {layer.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {layers.map((layer) => (
          <div key={layer.name} className="text-center">
            <div
              className={`mx-auto mb-3 h-2 w-10 rounded-full ${layer.color}`}
            />
            <p className="text-sm font-semibold text-ink">{layer.name}</p>
            <p className="mt-1 text-xs text-muted">{layer.description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
