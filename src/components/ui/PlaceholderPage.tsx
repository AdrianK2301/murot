import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections?: string[];
}) {
  return (
    <Container className="py-20 sm:py-28">
      <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
        {eyebrow}
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        {description}
      </p>

      {sections && sections.length > 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-6">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">
            Geplante Inhalte
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {sections.map((section) => (
              <li
                key={section}
                className="rounded-lg bg-accent-soft px-3 py-2 text-sm font-medium text-ink"
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10">
        <Button href="/" variant="secondary">
          Zurück zur Startseite
        </Button>
      </div>
    </Container>
  );
}
