"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const layers = [
  {
    name: "Schutzoberfläche",
    description: "Kratz- und abriebfeste Deckschicht",
    detail:
      "Die oberste Schicht hält Kratzern, Abrieb und alltäglicher Beanspruchung stand. So bleibt die Optik Ihrer Auflagefläche auch nach Jahren der Nutzung erhalten.",
    color: "bg-accent",
  },
  {
    name: "Funktionsschicht",
    description: "Wasser- und fettabweisend",
    detail:
      "Darunter sorgt eine wasser- und fettabweisende Schicht dafür, dass Feuchtigkeit und Flecken gar nicht erst bis zur Möbeloberfläche vordringen.",
    color: "bg-accent/70",
  },
  {
    name: "Trägermaterial",
    description: "Formstabil und reißfest",
    detail:
      "Das Trägermaterial gibt der Auflagefläche ihre Stabilität. Es bleibt plan, reißt nicht ein und behält seine Form auch bei starker Beanspruchung.",
    color: "bg-ink/60",
  },
  {
    name: "Rutschfeste Unterseite",
    description: "Sicherer Halt auf jeder Fläche",
    detail:
      "Die strukturierte Unterseite sorgt für sicheren Halt auf nahezu jeder Oberfläche – ganz ohne Kleben oder Schrauben.",
    color: "bg-ink/85",
  },
] as const;

const STEP_COUNT = layers.length;
const EDGE_PADDING = 0.5;
const TOTAL_UNITS = STEP_COUNT + EDGE_PADDING * 2;
const FOCUS_RAMP = 0.75;
const PUSH_DISTANCE = 170;
// Grundgröße der Kästen schon in Ruhe (vor dem Scroll-Effekt): 50 % größer
// als die ursprüngliche Kastengröße.
const BASE_SCALE = 1.5;
// Zusätzlicher Zoom obendrauf, wenn eine Schicht aktiv im Fokus ist.
const FOCUS_ZOOM = 0.7;
// Boxen sind immer voll deckend (kein Verblassen), deshalb muss der Abstand
// im Ruhestapel größer sein als die (bereits vergrößerte) Kastenhöhe, damit
// sich benachbarte Kästen nicht überlappen.
const NEUTRAL_GAP = 140;
// Feste Kastenbreite (vor BASE_SCALE/FOCUS_ZOOM), die auch bei maximaler
// Vergrößerung innerhalb der Bühne bleibt – so wird nie horizontal
// beschnitten und der border-radius bleibt an allen vier Ecken erhalten.
const BOX_WIDTH = 190;
// Zusätzlicher Zoom auf den Textblock, wenn eine Schicht im Fokus ist.
const TEXT_ZOOM = 0.15;
// Wie weit das gesamte Kasten+Text-Paar nach unten zur Bildschirmmitte
// wandert, sobald eine Schicht im Fokus ist.
const ENGAGED_SHIFT_DOWN = 60;
// Sanftes Nachziehen der angezeigten Position hinter dem eigentlichen
// Scroll-Fortschritt her (0 < SMOOTHING <= 1, kleiner = weicher).
const SMOOTHING = 0.12;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function focusFor(scaled: number, index: number) {
  const center = index + 0.5;
  const distance = Math.abs(scaled - center);
  return clamp(1 - distance / FOCUS_RAMP, 0, 1);
}

// Zielposition, wenn eine Schicht aktiv im Fokus ist: fokussierte Schicht
// wandert zur Mitte, alle anderen werden proportional zu ihrem Abstand
// weiter weggeschoben (noch nicht dran = nach unten, schon erklärt = nach oben).
function pushOffsetFor(scaled: number, index: number) {
  const center = index + 0.5;
  return (center - scaled) * PUSH_DISTANCE;
}

// Ruheposition, wenn gerade keine Schicht im Fokus ist (Start/Ende der
// Sektion sowie kurz beim Wechsel zwischen zwei Schichten): ein ruhiger,
// kompakter Stapel aller 4 Kästen.
function neutralOffsetFor(index: number) {
  return (index - (STEP_COUNT - 1) / 2) * NEUTRAL_GAP;
}

function engagementFor(scaled: number) {
  return clamp(
    layers.reduce((sum, _layer, i) => sum + focusFor(scaled, i), 0),
    0,
    1,
  );
}

function styleForIndex(scaled: number, index: number, engagement: number) {
  const focus = focusFor(scaled, index);
  const neutralY = neutralOffsetFor(index);
  const pushY = pushOffsetFor(scaled, index);
  const translateY = neutralY + (pushY - neutralY) * engagement;
  const scale = BASE_SCALE + focus * FOCUS_ZOOM;
  const textScale = 1 + focus * TEXT_ZOOM;
  return { focus, translateY, scale, textScale };
}

export function LayerShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let frameId: number;
    let current = -EDGE_PADDING;

    const targetProgress = () => {
      const el = sectionRef.current;
      if (!el) return -EDGE_PADDING;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      return raw * TOTAL_UNITS - EDGE_PADDING;
    };

    const applyStyles = (scaled: number) => {
      const engagement = engagementFor(scaled);

      const row = rowRef.current;
      if (row) {
        row.style.transform = `translateY(${engagement * ENGAGED_SHIFT_DOWN}px)`;
      }

      layers.forEach((_layer, index) => {
        const { focus, translateY, scale, textScale } = styleForIndex(
          scaled,
          index,
          engagement,
        );

        const box = boxRefs.current[index];
        if (box) {
          box.style.transform = `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`;
          box.style.zIndex = String(Math.round(focus * 100));
        }

        const text = textRefs.current[index];
        if (text) {
          text.style.opacity = String(focus);
          text.style.transform = `translateX(${(1 - focus) * 20}px) scale(${textScale})`;
          text.style.pointerEvents = focus > 0.5 ? "auto" : "none";
        }
      });
    };

    // Direkt an der korrekten Position starten, ohne beim Laden der Seite
    // einmal quer über den Bildschirm zu fliegen.
    current = targetProgress();
    applyStyles(current);

    const tick = () => {
      const target = targetProgress();
      current += (target - current) * SMOOTHING;
      if (Math.abs(target - current) < 0.001) current = target;
      applyStyles(current);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [reducedMotion]);

  return (
    <section className="overflow-x-clip bg-surface pt-10 pb-10 sm:pt-14 sm:pb-14">
      <Container>
        <SectionHeading
          eyebrow="Aufbau"
          title="Mehrschichtig aufgebaut, einfach durchdacht"
          description={
            reducedMotion
              ? "Jede Auflagefläche besteht aus mehreren funktionalen Schichten, die zusammen für Schutz, Griffigkeit und Langlebigkeit sorgen."
              : "Jede Auflagefläche besteht aus mehreren funktionalen Schichten. Scrollen Sie weiter, um jede Schicht einzeln im Detail zu erkunden."
          }
        />
      </Container>

      {reducedMotion ? (
        <Container className="mt-14 grid gap-6 sm:grid-cols-2">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className="flex gap-4 rounded-2xl border border-border bg-background p-5"
            >
              <div className={`h-full w-1.5 shrink-0 rounded-full ${layer.color}`} />
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {layer.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {layer.detail}
                </p>
              </div>
            </div>
          ))}
        </Container>
      ) : (
        <div ref={sectionRef} style={{ height: `${TOTAL_UNITS * 100}vh` }}>
          <div className="sticky top-[73px] flex h-[calc(100vh-73px)] items-start justify-center pt-4 sm:pt-8">
            <div ref={rowRef} className="w-full will-change-transform">
              <Container className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative mx-auto h-[520px] w-full max-w-xl overflow-hidden sm:h-[580px]">
                  {layers.map((layer, index) => {
                    const engagement = engagementFor(-EDGE_PADDING);
                    const initial = styleForIndex(-EDGE_PADDING, index, engagement);
                    return (
                      <div
                        key={layer.name}
                        ref={(el) => {
                          boxRefs.current[index] = el;
                        }}
                        className={`absolute top-1/2 left-1/2 flex h-24 items-center justify-center rounded-2xl border border-border/60 px-6 text-center shadow-lg will-change-transform ${layer.color}`}
                        style={{
                          width: BOX_WIDTH,
                          transform: `translate(-50%, calc(-50% + ${initial.translateY}px)) scale(${initial.scale})`,
                        }}
                      >
                        <span className="text-base font-semibold text-white">
                          {layer.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="relative h-[240px]">
                  {layers.map((layer, index) => {
                    const engagement = engagementFor(-EDGE_PADDING);
                    const initial = styleForIndex(-EDGE_PADDING, index, engagement);
                    return (
                      <div
                        key={layer.name}
                        ref={(el) => {
                          textRefs.current[index] = el;
                        }}
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{
                          opacity: initial.focus,
                          transform: `translateX(${(1 - initial.focus) * 20}px) scale(${initial.textScale})`,
                          transformOrigin: "left center",
                          pointerEvents: initial.focus > 0.5 ? "auto" : "none",
                        }}
                      >
                        <span className="text-sm font-semibold tracking-wide text-accent uppercase">
                          Schicht {index + 1} / {STEP_COUNT}
                        </span>
                        <h3 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                          {layer.name}
                        </h3>
                        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                          {layer.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
