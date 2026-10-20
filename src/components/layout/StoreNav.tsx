import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronDown, LayoutGrid } from "lucide-react";
import { STORE_LOGOS, SentralLogo } from "@/components/common/Logos";
import { STORES, type Store } from "@/data/stores";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/components/motion/Reveal";
import { MenuToggle, MobileSheet, NavShell, sheetItem } from "./NavShell";
import { useActiveSection, useMobileMenu } from "./useNavState";

function StoreMark({ store }: { store: Store }) {
  const Logo = STORE_LOGOS[store.slug];
  if (Logo) return <Logo size={44} priority />;
  const Icon = store.icon;
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-white">
      <Icon className="size-5" />
    </span>
  );
}

export function StoreNav({ store }: { store: Store }) {
  const [open, setOpen] = useMobileMenu();
  const [unitsOpen, setUnitsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const active = useActiveSection(store.sections.map((s) => s.href));
  const pillTarget = hovered ?? active;
  const others = STORES.filter((s) => s.slug !== store.slug);
  const ctaProps = store.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div style={{ "--accent": store.accent, "--dark": store.dark, "--glow": store.glow } as CSSProperties} className="contents">
      <NavShell label={`Navigasi ${store.name}`}>
        <div className="flex min-w-0 items-center gap-1.5">
          <Link
            href="/"
            aria-label="Kembali ke Sentral Sumatra"
            title="Kembali ke Sentral Sumatra"
            className="press group grid size-12 shrink-0 place-items-center rounded-full bg-soft text-ink ring-1 ring-black/[0.06] transition hover:bg-ink hover:text-white active:scale-90"
          >
            <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-0.5" />
          </Link>
          <Link href={store.href} className="flex min-w-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2">
            <StoreMark store={store} />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[1.05rem] font-bold tracking-tight text-ink">{store.name}</span>
              <span className="block truncate text-xs font-medium text-muted">by Sentral Sumatra</span>
            </span>
          </Link>
        </div>

        <ul className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
          {store.sections.map((l) => {
            const pill = pillTarget === l.href;
            return (
              <li key={l.href} className="relative" onMouseEnter={() => setHovered(l.href)}>
                <a
                  href={l.href}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-3 text-[0.97rem] font-semibold transition-colors duration-300",
                    pill ? "text-white" : "text-ink",
                  )}
                >
                  {l.label}
                </a>
                {pill && (
                  <motion.span
                    layoutId={`store-pill-${store.slug}`}
                    className="absolute inset-0 bg-[var(--accent)]" style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="relative hidden xl:block" onMouseLeave={() => setUnitsOpen(false)}>
            <button
              type="button"
              onClick={() => setUnitsOpen((v) => !v)}
              onMouseEnter={() => setUnitsOpen(true)}
              aria-expanded={unitsOpen}
              className="flex h-12 items-center gap-2 rounded-full px-4 text-[0.95rem] font-semibold text-ink transition hover:bg-soft"
            >
              <LayoutGrid className="size-4" />
              Unit lain
              <ChevronDown className={cn("size-4 transition-transform", unitsOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {unitsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="absolute right-0 top-full w-80 pt-3"
                >
                  <div className="rounded-[1.5rem] bg-white p-2 shadow-[0_24px_60px_-20px_rgba(15,42,48,0.4)] ring-1 ring-black/[0.07]">
                    <Link href="/" className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-soft">
                      <SentralLogo size={44} className="ring-1 ring-black/5" />
                      <span className="text-sm font-semibold text-ink">Sentral Sumatra</span>
                    </Link>
                    {others.map((s) => (
                      <Link key={s.slug} href={s.href} className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-soft">
                        <span className="relative size-11 shrink-0 overflow-hidden rounded-xl">
                          <Image src={s.image} alt="" fill sizes="44px" className="object-cover" />
                        </span>
                        <span className="leading-tight">
                          <span className="block text-sm font-semibold text-ink">{s.name}</span>
                          <span className="text-xs text-muted">{s.status === "available" ? s.category : "Segera hadir"}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href={store.cta.href}
            {...ctaProps}
            className="btn press hidden bg-[var(--accent)] text-white hover:brightness-110 hover:shadow-lg sm:inline-flex"
          >
            {store.cta.label}
          </a>
          <MenuToggle open={open} onToggle={() => setOpen(!open)} />
        </div>
      </NavShell>

      <MobileSheet open={open} className="bg-[var(--dark)]">
        <ul>
          {store.sections.map((l, i) => (
            <motion.li key={l.href} {...sheetItem(i)} className="border-b border-white/15">
              <a href={l.href} onClick={() => setOpen(false)} className={cn("block py-4 text-3xl font-bold tracking-tight", active === l.href && "text-[var(--glow)]")}>
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.div {...sheetItem(6)} className="mt-8">
          <a href={store.cta.href} {...ctaProps} onClick={() => setOpen(false)} className="btn press w-full bg-[var(--glow)] text-[var(--dark)]">
            {store.cta.label}
          </a>
          <p className="mt-8 text-sm font-semibold text-white/75">Unit lain</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href="/" className="press col-span-2 flex h-20 items-center gap-3 rounded-2xl bg-white/10 p-3 active:scale-95">
              <ArrowLeft className="size-5 shrink-0 text-[var(--glow)]" />
              <span className="text-sm font-bold leading-tight">Sentral Sumatra</span>
            </Link>
            {others.map((s) => (
              <Link key={s.slug} href={s.href} className="press relative h-20 overflow-hidden rounded-2xl active:scale-95">
                <Image src={s.image} alt="" fill sizes="45vw" className="object-cover" />
                <span className="absolute inset-0 bg-ink/60" />
                <span className="absolute inset-x-3 bottom-2.5 text-sm font-bold leading-tight">{s.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </MobileSheet>
    </div>
  );
}
