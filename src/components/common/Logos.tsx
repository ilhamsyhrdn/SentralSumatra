import Image from "next/image";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

interface RoundLogoProps extends LogoProps {
  src: string;
  alt: string;
  /** Warna latar lingkaran, disamakan dengan latar file logonya */
  bg: string;
  imgClass?: string;
}

function RoundLogo({ src, alt, bg, size = 44, className, priority, imgClass }: RoundLogoProps) {
  return (
    <span
      className={cn("relative inline-block shrink-0 overflow-hidden rounded-full", bg, className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill sizes={`${size * 2}px`} priority={priority} className={cn("object-cover", imgClass)} />
    </span>
  );
}

/** Logo bulat Sentral Sumatra; file aslinya punya latar abu di luar lingkaran, jadi diperbesar agar hanya lingkarannya yang tampil. */
export function SentralLogo(props: LogoProps) {
  return <RoundLogo {...props} src="/Logo/SentralSumatraBulat.png" alt="Logo Sentral Sumatra" bg="bg-white" imgClass="scale-[1.2]" />;
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

/** Logo persegi harimau AJ Kristal; versi bulat diperbesar ke kepala harimau */
export function KristalLogo(props: LogoProps) {
  return <RoundLogo {...props} src="/Logo/LogoAjKristal.jpeg" alt="Logo AJ Kristal" bg="bg-kr" imgClass="origin-[50%_32%] scale-[1.55]" />;
}

/** Lencana bulat Batanghari River; sudutnya sudah transparan */
export function BatanghariLogo(props: LogoProps) {
  return <RoundLogo {...props} src="/Logo/LogoBatanghariRiver.png" alt="Logo Batanghari River" bg="bg-bh" />;
}

/** Logo emas Diocca di atas hitam; versi bulat hanya menampilkan lambang wajahnya */
export function DioccaLogo(props: LogoProps) {
  return <RoundLogo {...props} src="/Logo/LogoDiocca.jpeg" alt="Logo Diocca" bg="bg-black" imgClass="origin-[42%_19%] scale-[1.75]" />;
}

/** Logo per unit usaha; unit tanpa logo memakai ikon dari data toko */
export const STORE_LOGOS: Record<string, ComponentType<LogoProps>> = {
  "aj-kristal": KristalLogo,
  "batanghari-river": BatanghariLogo,
  diocca: DioccaLogo,
};
