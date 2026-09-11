import Link from "next/link";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-ink text-white hover:bg-accent",
  secondary:
    "bg-white text-ink border border-border hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
