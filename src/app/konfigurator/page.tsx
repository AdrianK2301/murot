import { Container } from "@/components/ui/Container";
import { DummyConfigurator } from "@/components/configurator/DummyConfigurator";

export default function KonfiguratorPage() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
        Konfigurator
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Konfigurieren Sie Ihre Auflagefläche
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Diese Ansicht zeigt beispielhaft, wie der 2D-Konfigurator aufgebaut
        sein wird. Auswahl und Eingaben sind aktuell nur zur
        Veranschaulichung – die Vorschau rechts ist ein festes Dummybild und
        reagiert noch nicht auf Ihre Auswahl.
      </p>

      <div className="mt-12">
        <DummyConfigurator />
      </div>
    </Container>
  );
}
