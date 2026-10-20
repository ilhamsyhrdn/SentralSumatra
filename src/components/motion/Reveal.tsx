import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, margin: "0px 0px -8% 0px" } as const;

/* Elemen yang digerakkan framer-motion tidak boleh ikut ditransisikan CSS pada opacity/transform —
   kalau tidak, keduanya saling mengejar dan animasi terlihat patah-patah. Efek hover tetap jalan. */
export const SAFE_TRANSITION = {
  transitionProperty: "color, background-color, border-color, outline-color, box-shadow, translate, scale, rotate",
};

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

export function Reveal({ delay = 0, y = 20, style, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
      style={{ ...SAFE_TRANSITION, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function Stagger({ children, style, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={groupVariants} initial="hidden" whileInView="show" viewport={VIEWPORT} style={{ ...SAFE_TRANSITION, ...style }} {...rest}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, style, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} style={{ ...SAFE_TRANSITION, ...style }} {...rest}>
      {children}
    </motion.div>
  );
}

/** Judul yang muncul per kata — dipakai untuk headline besar */
export function WordsReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: delay + i * 0.05, ease: EASE_OUT }}
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
