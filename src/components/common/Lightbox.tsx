import Image from "next/image";
import { useEffect, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { lockScroll } from "@/lib/scroll";

interface LightboxProps {
  images: string[];
  index: number | null;
  alt: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, index, alt, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const go = (step: number) => onIndexChange((index! + step + images.length) % images.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    lockScroll(true);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, index, images.length, onClose, onIndexChange]);

  const step = (n: number) => (e: MouseEvent) => {
    e.stopPropagation();
    onIndexChange((index! + n + images.length) % images.length);
  };

  const navBtn =
    "press absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black active:scale-90";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="press absolute right-4 top-4 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black active:scale-90"
          >
            <X className="size-5" />
          </button>
          <button type="button" onClick={step(-1)} aria-label="Sebelumnya" className={`${navBtn} left-3 sm:left-6`}>
            <ChevronLeft className="size-6" />
          </button>
          <button type="button" onClick={step(1)} aria-label="Berikutnya" className={`${navBtn} right-3 sm:right-6`}>
            <ChevronRight className="size-6" />
          </button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative aspect-square w-[min(78vh,88vw)] overflow-hidden rounded-3xl bg-white"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={images[index]}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={images[index]} alt={`${alt} ${index + 1}`} fill sizes="88vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tabular-nums text-white">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
