import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

/**
 * Nicht-funktionaler Demo-Konfigurator.
 * Die Auswahlmöglichkeiten sind rein visuell (reine CSS-Interaktion über
 * :checked/peer-checked, kein State) – die Vorschau ändert sich bewusst
 * NICHT, sie dient nur als Platzhalter für die spätere echte 2D-Vorschau.
 */

const anwendungen = ["Schublade", "Regal", "Arbeitsplatte", "Werkbank", "Sonstiges"];

const materialien = [
  { name: "Standard", description: "Robust & preisbewusst" },
  { name: "Premium", description: "Besonders langlebig" },
  { name: "Outdoor", description: "Wetterbeständig" },
];

const ausfuehrungen = [
  { name: "Sand", swatch: "#d8c9b3" },
  { name: "Anthrazit", swatch: "#3a3a3a" },
  { name: "Transparent", swatch: "#e8e6df" },
  { name: "Holzoptik", swatch: "#a9744f" },
];

function StepCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
          {step}
        </span>
        <h2 className="text-base font-semibold text-ink">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function DummyConfigurator() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
      {/* Linke Spalte: Beispielfragen */}
      <div className="flex flex-col gap-6">
        <StepCard step={1} title="Für welches Möbelstück?">
          <div className="flex flex-wrap gap-2">
            {anwendungen.map((option, index) => (
              <div key={option}>
                <input
                  type="radio"
                  name="anwendung"
                  id={`anwendung-${option}`}
                  className="peer sr-only"
                  defaultChecked={index === 0}
                />
                <label
                  htmlFor={`anwendung-${option}`}
                  className="block cursor-pointer rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-colors peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-accent"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </StepCard>

        <StepCard step={2} title="Maße">
          <div className="grid grid-cols-2 gap-4 sm:max-w-sm">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">Breite (cm)</span>
              <input
                type="number"
                defaultValue={60}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">Tiefe (cm)</span>
              <input
                type="number"
                defaultValue={40}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              />
            </label>
          </div>
        </StepCard>

        <StepCard step={3} title="Material">
          <div className="grid gap-3 sm:grid-cols-3">
            {materialien.map((material, index) => (
              <div key={material.name}>
                <input
                  type="radio"
                  name="material"
                  id={`material-${material.name}`}
                  className="peer sr-only"
                  defaultChecked={index === 0}
                />
                <label
                  htmlFor={`material-${material.name}`}
                  className="block cursor-pointer rounded-xl border border-border p-4 text-left transition-colors peer-checked:border-accent peer-checked:bg-accent-soft"
                >
                  <span className="block text-sm font-semibold text-ink">
                    {material.name}
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    {material.description}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </StepCard>

        <StepCard step={4} title="Ausführung / Farbe">
          <div className="flex flex-wrap gap-4">
            {ausfuehrungen.map((farbe, index) => (
              <div key={farbe.name}>
                <input
                  type="radio"
                  name="ausfuehrung"
                  id={`ausfuehrung-${farbe.name}`}
                  className="peer sr-only"
                  defaultChecked={index === 0}
                />
                <label
                  htmlFor={`ausfuehrung-${farbe.name}`}
                  className="flex cursor-pointer flex-col items-center gap-2"
                >
                  <span
                    className="h-9 w-9 rounded-full border border-border ring-offset-2 peer-checked:ring-2 peer-checked:ring-accent"
                    style={{ backgroundColor: farbe.swatch }}
                  />
                  <span className="text-xs font-medium text-muted">
                    {farbe.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </StepCard>
      </div>

      {/* Rechte Spalte: statische Vorschau + Zusammenfassung */}
      <div className="lg:sticky lg:top-24">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">
              5. Vorschau
            </h2>
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent uppercase">
              Demo
            </span>
          </div>

          <PlaceholderImage
            label="2D-Vorschau (ändert sich in dieser Demo nicht)"
            ratio="aspect-square"
          />

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-ink">
              6. Zusammenfassung
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted">Anwendung</dt>
                <dd className="font-medium text-ink">Schublade</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted">Maße</dt>
                <dd className="font-medium text-ink">60 × 40 cm</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted">Material</dt>
                <dd className="font-medium text-ink">Standard</dd>
              </div>
              <div className="flex justify-between pb-1">
                <dt className="text-muted">Ausführung</dt>
                <dd className="font-medium text-ink">Sand</dd>
              </div>
            </dl>
            <p className="mt-2 text-xs text-muted">
              Beispielwerte – in dieser Demo noch nicht mit der Auswahl links
              verknüpft.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-ink/40 px-6 py-3 text-sm font-semibold text-white"
            title="Demo – ohne Funktion"
          >
            7. Anfrage senden (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}
