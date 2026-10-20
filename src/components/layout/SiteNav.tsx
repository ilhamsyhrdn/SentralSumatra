import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SentralLogo, SentralWordmark } from "@/components/common/Logos";
import { CONTACT, SENTRAL_NAV } from "@/data/site";
import { STORES } from "@/data/stores";
import { cn, waLink } from "@/lib/utils";
import { MenuToggle, MobileSheet, NavShell, sheetItem } from "./NavShell";
import { useMobileMenu } from "./useNavState";

const CONTACT_WA = waLink(CONTACT.wa, "Halo Sentral Sumatra, saya ingin bertanya tentang produk Anda.");

export function SiteNav() {
  const router = useRouter();
  const [open, setOpen] = useMobileMenu();
  const [hovered, setHovered] = useState<string | null>(null);

  const isActive = (href: string) => (href === "/" ? router.pathname === "/" : router.pathname.startsWith(href));
  const pillTarget = hovered ?? SENTRAL_NAV.find((n) => isActive(n.href))?.href;

  return (
    <>
      <NavShell label="Navigasi utama">
        <Link href="/" aria-label="Beranda Sentral Sumatra" className="group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3">
          <SentralLogo size={48} priority className="ring-1 ring-black/5 transition duration-500 group-hover:rotate-[-10deg]" />
          <SentralWordmark />
        </Link>

        <ul className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
          {SENTRAL_NAV.map((item) => {
            const pill = pillTarget === item.href;
            const isProduct = item.href === "/products";
            return (
              <li key={item.href} className="relative" onMouseEnter={() => setHovered(item.href)}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative z-10 flex items-center gap-1 rounded-full px-5 py-3 text-[0.97rem] font-semibold transition-colors duration-300",
                    pill ? "text-white" : "text-ink",
                  )}
                >
                  {item.label}
                  {isProduct && <ChevronDown className={cn("size-4 transition-transform duration-300", hovered === item.href && "rotate-180")} />}
                </Link>
                {pill && (
                  <motion.span
                    layoutId="site-nav-pill"
                    className="absolute inset-0 bg-ink"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {isProduct && <ProductMenu open={hovered === item.href} onNavigate={() => setHovered(null)} />}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn press hidden bg-leaf text-ink hover:bg-ink hover:text-white sm:inline-flex"
          >
            <SiWhatsapp className="size-4" />
            Hubungi Kami
          </a>
          <MenuToggle open={open} onToggle={() => setOpen(!open)} />
        </div>
      </NavShell>

      <MobileSheet open={open}>
        <nav aria-label="Menu seluler">
          <ul>
            {SENTRAL_NAV.map((item, i) => (
              <motion.li key={item.href} {...sheetItem(i)} className="border-b border-white/15">
                <Link href={item.href} className="flex items-center justify-between py-4 text-4xl font-bold tracking-tight">
                  <span className={isActive(item.href) ? "text-mint" : undefined}>{item.label}</span>
                  <ArrowUpRight className="size-6 text-white/70" />
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div {...sheetItem(5)} className="mt-8">
            <p className="text-sm font-semibold text-white/75">Unit usaha</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {STORES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className={cn("press relative h-24 overflow-hidden rounded-2xl active:scale-95", i === 0 && "col-span-2")}
                >
                  <Image src={s.image} alt="" fill sizes="45vw" className="object-cover" />
                  <span className="absolute inset-0 bg-ink/55" />
                  <span className="absolute inset-x-3 bottom-2.5 text-sm font-bold leading-tight">{s.name}</span>
                </Link>
              ))}
            </div>
            <a href={CONTACT_WA} target="_blank" rel="noopener noreferrer" className="btn press mt-8 w-full bg-leaf text-ink">
              <SiWhatsapp className="size-4" />
              Hubungi Kami via WhatsApp
            </a>
          </motion.div>
        </nav>
      </MobileSheet>
    </>
  );
}

/* Selalu terpasang dan hanya ditampilkan lewat transisi CSS (opacity + translate) agar mulus;
   memasang-ulang elemen dengan animasi skala via JS membuat teks bergoyang saat muncul. */
function ProductMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-20 w-[22rem] -translate-x-1/2 pt-3 transition-[opacity,translate,visibility] duration-200 ease-out",
        open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1.5 opacity-0",
      )}
    >
      <ul className="rounded-[1.5rem] bg-white p-2 shadow-[0_24px_60px_-20px_rgba(15,42,48,0.4)] ring-1 ring-black/[0.07]">
        {STORES.map((s) => (
          <li key={s.slug}>
            <Link
              href={s.href}
              onClick={(e) => {
                e.currentTarget.blur();
                onNavigate();
              }}
              className="group/item flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-canvas/60"
            >
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-ink transition-colors duration-200 group-hover/item:text-teal">{s.name}</span>
                  {s.status === "soon" && (
                    <span className="rounded-full bg-soft px-2 py-0.5 text-[0.68rem] font-bold text-muted">Segera</span>
                  )}
                </span>
                <span className="mt-0.5 block text-sm text-muted">{s.tagline}</span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 -translate-x-1 text-teal opacity-0 transition duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
