import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE_OUT } from "@/components/motion/Reveal";

/** Bingkai navbar: pil putih solid yang menempel di atas, dipakai navbar utama & navbar sub-toko */
export function NavShell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <header className="sticky top-0 z-50 px-2 pb-2 pt-2 sm:px-3 sm:pb-3 sm:pt-3">
      <nav
        aria-label={label}
        className="flex h-16 items-center justify-between gap-3 rounded-full bg-white px-2 shadow-[0_12px_32px_-14px_rgba(15,42,48,0.35)] ring-1 ring-black/[0.07] sm:h-[4.5rem]"
      >
        {children}
      </nav>
    </header>
  );
}

export function MenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Tutup menu" : "Buka menu"}
      aria-expanded={open}
      className="press grid size-12 shrink-0 place-items-center rounded-full bg-ink text-white transition active:scale-90 lg:hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? "x" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/** Menu layar penuh di mobile; dibuka dengan efek lingkaran dari tombol menu */
export function MobileSheet({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "circle(0% at calc(100% - 2.75rem) 2.75rem)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 2.75rem) 2.75rem)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 2.75rem) 2.75rem)" }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          data-lenis-prevent
          className="fixed inset-0 z-40 overflow-y-auto bg-ink px-5 pb-8 pt-28 text-white lg:hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const sheetItem = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 + i * 0.05, duration: 0.45, ease: EASE_OUT },
});
