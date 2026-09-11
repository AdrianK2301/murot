import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export default function ServicePage() {
  return (
    <PlaceholderPage
      eyebrow="Service"
      title="Service & Support"
      description="FAQ, Lieferung, Pflege & Reinigung, Montage und Kontaktmöglichkeiten folgen hier."
      sections={["FAQ", "Lieferung", "Pflege & Reinigung", "Montage / Anwendung", "Kontakt"]}
    />
  );
}
