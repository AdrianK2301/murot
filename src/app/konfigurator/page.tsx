import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export default function KonfiguratorPage() {
  return (
    <PlaceholderPage
      eyebrow="Konfigurator"
      title="Konfigurieren Sie Ihre Auflagefläche"
      description="Der interaktive Konfigurator mit Live-Vorschau folgt in einem der nächsten Schritte."
      sections={[
        "Produkt / Anwendung",
        "Maße",
        "Material",
        "Ausführung",
        "Vorschau",
        "Zusammenfassung",
        "Bestellung / Anfrage",
      ]}
    />
  );
}
