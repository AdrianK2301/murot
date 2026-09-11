"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Produkt", href: "/produkt" },
  { label: "Konfigurator", href: "/konfigurator" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Service", href: "/service" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-ink">
          MUROT
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/shop"
            className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
          >
            Warenkorb
          </Link>
          <Link
            href="/konfigurator"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Konfigurator starten
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-accent-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-accent-soft"
              onClick={() => setOpen(false)}
            >
              Warenkorb
            </Link>
            <Link
              href="/konfigurator"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Konfigurator starten
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
