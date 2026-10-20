import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

/** Logo bulat Sentral Sumatra; file aslinya punya latar abu di luar lingkaran, jadi diperbesar agar hanya lingkarannya yang tampil. */
export function SentralLogo({ size = 44, className, priority }: LogoProps) {
  return (
    <span
      className={cn("relative inline-block shrink-0 overflow-hidden rounded-full bg-white", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/Logo/SentralSumatraBulat.png"
        alt="Logo Sentral Sumatra"
        fill
        sizes={`${size * 2}px`}
        priority={priority}
        className="scale-[1.2] object-cover"
      />
    </span>
  );
}

export function SentralWordmark({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-[1.2rem] font-extrabold tracking-[0.06em]",
          light ? "text-white" : "text-ink-2",
        )}
      >
        SENTRAL
      </span>
      <span
        className={cn(
          "mt-[3px] font-display text-[0.62rem] font-semibold tracking-[0.52em]",
          light ? "text-leaf" : "text-leaf-ink",
        )}
      >
        SUMATRA
      </span>
    </span>
  );
}

export function DioccaLogo({ size = 44, className, priority }: LogoProps) {
  return (
    <span
      className={cn("relative inline-block shrink-0 overflow-hidden rounded-full bg-dio", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/gambarProduct/Logo.jpg"
        alt="Logo Diocca"
        fill
        sizes={`${size * 2}px`}
        priority={priority}
        className="scale-[1.1] object-cover"
        style={{ objectPosition: "50% 68%" }}
      />
    </span>
  );
}
