import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SAFE_TRANSITION } from "./Reveal";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Kelas untuk permukaan yang dimiringkan (radius, overflow, latar) */
  innerClassName?: string;
  max?: number;
  glare?: boolean;
}

/** Kartu yang miring mengikuti kursor dengan kilau cahaya; diam saja di perangkat sentuh. */
export function Tilt({ children, className, innerClassName, max = 4, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const rotateX = useSpring(rx, { stiffness: 160, damping: 20, mass: 0.6 });
  const rotateY = useSpring(ry, { stiffness: 160, damping: 20, mass: 0.6 });
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.28), rgba(255,255,255,0) 55%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, ...SAFE_TRANSITION }}
        className={cn("group/tilt relative h-full", innerClassName)}
      >
        {children}
        {glare && (
          <motion.span
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}
