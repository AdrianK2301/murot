import { HelpCircle, Truck, SprayCan, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Antworten auf die häufigsten Fragen.",
    href: "/service#faq",
  },
  {
    icon: Truck,
    title: "Lieferung",
    description: "Alles zu Versand und Lieferzeiten.",
    href: "/service#lieferung",
  },
  {
    icon: SprayCan,
    title: "Pflege & Reinigung",
    description: "So bleibt Ihre Auflagefläche lange schön.",
    href: "/service#pflege",
  },
  {
    icon: PhoneCall,
    title: "Kontakt",
    description: "Persönliche Beratung bei Fragen.",
    href: "/service#kontakt",
  },
];

export function ServiceTeaser() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Service"
          title="Wir sind für Sie da"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <service.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
