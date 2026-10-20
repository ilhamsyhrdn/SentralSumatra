import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export type Tone =
  | "white"
  | "soft"
  | "ink"
  | "teal"
  | "dio"
  | "dio-dark"
  | "dio-mint"
  | "dio-cream"
  | "kr"
  | "kr-dark"
  | "kr-cream"
  | "kr-white"
  | "bh"
  | "bh-navy"
  | "bh-cream"
  | "bh-white";

const TONES: Record<Tone, string> = {
  white: "bg-white text-ink",
  soft: "bg-soft text-ink",
  ink: "bg-ink text-white",
  teal: "bg-teal text-white",
  dio: "bg-dio text-white",
  "dio-dark": "bg-dio-dark text-white",
  "dio-mint": "bg-dio-mint text-dio-dark",
  "dio-cream": "bg-dio-cream text-dio-dark",
  kr: "bg-kr text-kr-dark",
  "kr-dark": "bg-kr-dark text-white",
  "kr-cream": "bg-kr-cream text-kr-dark",
  "kr-white": "bg-white text-kr-dark",
  bh: "bg-bh text-bh-navy",
  "bh-navy": "bg-bh-navy text-white",
  "bh-cream": "bg-bh-cream text-bh-navy",
  "bh-white": "bg-white text-bh-navy",
};

export const isDark = (tone: Tone) => ["ink", "teal", "dio", "dio-dark", "kr-dark", "bh-navy"].includes(tone);

/** Blok halaman berbentuk panel membulat; semua section memakai ini agar radius & jarak seragam */
export function Panel({
  tone = "white",
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("panel relative", TONES[tone], className)}>
      {children}
    </section>
  );
}

/** `colors` menggantikan warna bawaan (bukan ditambahkan) agar tidak bentrok dengan kelas warna default */
export function Chip({
  children,
  dark = false,
  colors,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  colors?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em]",
        colors ?? (dark ? "bg-black/25 text-mint" : "bg-leaf-soft text-leaf-ink"),
        className,
      )}
    >
      {children}
    </span>
  );
}

interface SectionHeadProps {
  chip: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  dark?: boolean;
  chipClass?: string;
  className?: string;
}

export function SectionHead({ chip, title, description, action, dark = false, chipClass, className }: SectionHeadProps) {
  return (
    <Reveal className={cn("flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-3xl">
        <Chip dark={dark} colors={chipClass}>
          {chip}
        </Chip>
        <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">{title}</h2>
        {description && (
          <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", dark ? "text-white/80" : "text-muted")}>{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}

export function IconBadge({
  icon: Icon,
  className,
  size = "md",
}: {
  icon: ComponentType<{ className?: string }>;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box = { sm: "size-10 rounded-xl", md: "size-12 rounded-2xl", lg: "size-14 rounded-2xl" }[size];
  const ico = { sm: "size-4", md: "size-5", lg: "size-6" }[size];
  return (
    <span className={cn("grid shrink-0 place-items-center transition duration-500", box, className)}>
      <Icon className={ico} />
    </span>
  );
}

export function NumberBadge({ n, className }: { n: number; className?: string }) {
  return (
    <span className={cn("grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold tabular-nums", className)}>
      {String(n).padStart(2, "0")}
    </span>
  );
}
