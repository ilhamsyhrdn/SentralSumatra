import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/components/motion/Reveal";

interface AccordionProps {
  items: { q: string; a: string }[];
  /** Latar setiap item, mis. "bg-dio-cream" */
  itemClass?: string;
  /** Kelas ikon saat terbuka, mis. "bg-dio text-white" */
  activeIconClass?: string;
}

export function Accordion({ items, itemClass = "bg-soft", activeIconClass = "bg-ink text-white" }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q} className={cn("rounded-[1.25rem] transition-shadow duration-300", itemClass, isOpen && "shadow-[0_10px_30px_-18px_rgba(15,42,48,0.4)]")}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
            >
              <span className="text-[1.05rem] font-bold leading-snug sm:text-lg">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-300",
                  isOpen ? activeIconClass : "bg-white text-ink ring-1 ring-black/10",
                )}
              >
                <Plus className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 leading-relaxed text-muted sm:px-6">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
