"use client";

import { useState } from "react";
import { ImageIcon, MoveHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ergebnis"
          title="Vorher / Nachher"
          description="Verschieben Sie den Regler und sehen Sie den Unterschied, den eine passgenaue Auflagefläche macht."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg shadow-ink/5">
            {/* Nachher-Ebene (voll sichtbar) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-accent-soft">
              <ImageIcon className="h-8 w-8 text-accent/70" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wide text-ink/50 uppercase">
                Dummybild: Nachher – geschützte Fläche
              </span>
            </div>

            {/* Vorher-Ebene (wird per clip-path begrenzt) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/10"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <ImageIcon className="h-8 w-8 text-ink/40" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wide text-ink/50 uppercase">
                Dummybild: Vorher – ungeschützte Fläche
              </span>
            </div>

            {/* Trennlinie + Griff */}
            <div
              className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center bg-white shadow-md"
              style={{ left: `${position}%` }}
            >
              <div className="flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md">
                <MoveHorizontal className="h-4 w-4" />
              </div>
            </div>

            <span className="absolute top-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-muted uppercase backdrop-blur">
              Vorher
            </span>
            <span className="absolute top-3 right-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-muted uppercase backdrop-blur">
              Nachher
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="mt-6 w-full accent-accent"
            aria-label="Vorher-Nachher-Vergleich verschieben"
          />
        </div>
      </Container>
    </section>
  );
}
