import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export default function ShopPage() {
  return (
    <PlaceholderPage
      eyebrow="Bestellung"
      title="Warenkorb & Bestellung"
      description="Warenkorb, Kundendaten, Bestellung und Bestätigung entstehen hier, sobald der Konfigurator steht."
      sections={["Warenkorb", "Kundendaten", "Bestellung", "Bestätigung"]}
    />
  );
}
