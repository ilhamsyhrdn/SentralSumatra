import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT, WordsReveal } from "@/components/motion/Reveal";
import { Chip, Panel } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

interface PageIntroProps {
  chip: string;
  title: string;
  accent?: string;
  description: ReactNode;
  /** Media/konten di sisi kanan; mengisi tinggi panel penuh */
  aside?: ReactNode;
  children?: ReactNode;
}

/** Pembuka halaman About/Product/Contact: teks kiri + media kanan di dalam satu panel */
export function PageIntro({ chip, title, accent, description, aside, children }: PageIntroProps) {
  return (
    <Panel tone="white" className="p-2 sm:p-3">
      <div className={cn("grid gap-2 sm:gap-3", aside && "lg:grid-cols-[1.1fr_1fr]")}>
        <div className="flex min-w-0 flex-col justify-center split-pad py-10 lg:py-14">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }}>
            <Chip>{chip}</Chip>
          </motion.div>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
            <WordsReveal text={title} />
            {accent && (
              <>
                {" "}
                <WordsReveal text={accent} delay={0.18} className="text-teal" />
              </>
            )}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed 2xl:max-w-2xl 2xl:text-xl text-muted"
          >
            {description}
          </motion.p>
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45, ease: EASE_OUT }}
            >
              {children}
            </motion.div>
          )}
        </div>
        {aside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
            className="min-h-[20rem]"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </Panel>
  );
}
