import { ImageIcon } from "lucide-react";

/**
 * Dummy-Bildkachel als Platzhalter für echtes Produkt-/Anwendungsfoto.
 * Sobald Fotomaterial vorliegt, hier durch <Image> (next/image) ersetzen.
 */
export function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-accent-soft ${ratio} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, transparent) 0px, color-mix(in srgb, var(--accent) 14%, transparent) 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent/70">
        <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium tracking-wide text-ink/50 uppercase">
          {label}
        </span>
      </div>
      <span className="absolute top-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-muted uppercase backdrop-blur">
        Dummybild
      </span>
    </div>
  );
}
