import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export default function UeberUnsPage() {
  return (
    <PlaceholderPage
      eyebrow="Über uns"
      title="Unsere Geschichte"
      description="Story, Vision, Fertigung, Materialien und Partner finden hier bald ihren Platz."
      sections={[
        "Story",
        "Vision",
        "Warum dieses Produkt?",
        "Fertigung",
        "Materialien",
        "Partner",
      ]}
    />
  );
}
