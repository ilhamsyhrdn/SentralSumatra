import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BellRing, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { Chip, IconBadge, Panel, SectionHead } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { STORES, type Store } from "@/data/stores";
import { cn, waLink } from "@/lib/utils";

type IconType = ComponentType<{ className?: string }>;

export interface ComingSoonContent {
  store: Store;
  scene: ComponentType<{ className?: string }>;
  seoDescription: string;
  title: [string, string];
  heroText: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutImage: { src: string; alt: string };
  featureImage: { src: string; alt: string };
  points: string[];
  audience: { icon: IconType; label: string }[];
  categories: { icon: IconType; name: string; description: string; items: string[] }[];
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE_OUT },
});

export function ComingSoonStore({
  store,
  scene: Scene,
  seoDescription,
  title,
  heroText,
  aboutTitle,
  aboutParagraphs,
  aboutImage,
  featureImage,
  points,
  audience,
  categories,
}: ComingSoonContent) {
  const notifyWa = waLink(store.wa, store.waText);
  const available = STORES.filter((s) => s.status === "available");
  const [first, ...rest] = categories;

  return (
    <>
      <Seo title={`${store.name} — Segera Hadir`} description={seoDescription} />

      {/* Hero */}
      <Panel tone="ink" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center split-pad py-10">
            <motion.div {...fadeUp(0)}>
              <Chip dark>
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
                  <span className="relative size-2 rounded-full bg-mint" />
                </span>
                Segera hadir
              </Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text={title[0]} /> <WordsReveal text={title[1]} delay={0.18} className="text-mint" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed 2xl:max-w-2xl 2xl:text-xl text-white/85">
              {heroText}
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              <a href={notifyWa} target="_blank" rel="noopener noreferrer" className="btn press bg-mint text-ink hover:bg-white">
                <BellRing className="size-4" />
                Kabari saya
              </a>
              <a href="#kategori" className="btn press bg-white/10 text-white ring-1 ring-white/25 hover:bg-white hover:text-ink">
                Lihat rencana produk
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap gap-2">
              {store.products.map((p) => (
                <span key={p} className="rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
                  {p}
                </span>
              ))}
            </motion.div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(75%_70%_at_50%_45%,#2b6d7c_0%,#17414d_55%,#0b2126_100%)] sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <Scene className="absolute inset-0" />
          </div>
        </div>
      </Panel>

      {/* Tentang */}
      <Panel tone="white" id="tentang" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src={aboutImage.src} alt={aboutImage.alt} fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" />
          </Reveal>
          <div className="split-pad py-10 lg:py-14">
            <Reveal>
              <Chip>Tentang {store.name}</Chip>
              <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">{aboutTitle}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                {aboutParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Stagger className="mt-8 grid gap-2 sm:grid-cols-2">
              {points.map((p) => (
                <StaggerItem key={p} className="flex h-full items-start gap-3 rounded-2xl bg-soft p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-mint">
                    <Check className="size-3.5" />
                  </span>
                  <span className="font-medium leading-snug">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-6">
              <p className="text-sm font-bold text-ink">Cocok untuk</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {audience.map((a) => (
                  <span key={a.label} className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-2 text-sm font-semibold text-leaf-ink">
                    <a.icon className="size-4" />
                    {a.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Panel>

      {/* Kategori */}
      <Panel tone="soft" id="kategori">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Rencana kategori"
            title="Produk yang akan tersedia."
            description={`Detail varian, ukuran, dan harga akan kami umumkan saat ${store.name} resmi dibuka.`}
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-3 md:grid-rows-2">
            <StaggerItem className="h-[24rem] md:row-span-2 md:h-auto">
              <Tilt className="h-full" innerClassName="overflow-hidden rounded-3xl bg-ink text-white" max={3}>
                <Image src={featureImage.src} alt={featureImage.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <IconBadge icon={first.icon} className="bg-mint text-ink" />
                  <h3 className="mt-5 text-3xl font-bold tracking-tight">{first.name}</h3>
                  <p className="mt-2 leading-relaxed text-white/85">{first.description}</p>
                  <p className="mt-4 text-sm font-semibold text-mint">{first.items.join(" · ")}</p>
                </div>
              </Tilt>
            </StaggerItem>
            {rest.map((c, i) => (
              <StaggerItem key={c.name} className={cn("h-full", i === 2 && "md:col-span-2")}>
                <div className="group flex h-full flex-col rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(15,42,48,0.4)] sm:p-7">
                  <IconBadge icon={c.icon} className="bg-ink text-mint group-hover:-rotate-6 group-hover:scale-110" />
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">{c.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {c.items.map((item) => (
                      <span key={item} className="rounded-full bg-soft px-3 py-1.5 text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* Kabar */}
      <Panel tone="ink" id="kabar">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:py-20">
          <Reveal>
            <Chip dark>Kabar terbaru</Chip>
            <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">Jadilah yang pertama tahu.</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/85">
              Kirim pesan dan kami kabari begitu {store.name} resmi dibuka — termasuk info harga perdana.
            </p>
            <a href={notifyWa} target="_blank" rel="noopener noreferrer" className="btn press mt-8 bg-mint text-ink hover:bg-white">
              <SiWhatsapp className="size-4" />
              Kabari saya via WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-bold text-mint">Unit yang sudah tersedia</p>
            <div className="mt-3 grid gap-2">
              {available.map((s) => (
                <Link key={s.slug} href={s.href} className="press group flex items-center gap-4 rounded-3xl bg-white/[0.07] p-2 pr-5 ring-1 ring-white/10 transition duration-300 hover:bg-white hover:text-ink active:scale-[0.98]">
                  <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl">
                    <Image src={s.image} alt="" fill sizes="80px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold tracking-tight">{s.name}</span>
                    <span className="block text-sm text-white/80 transition-colors group-hover:text-muted">{s.tagline}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 transition duration-500 group-hover:rotate-45" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Panel>
    </>
  );
}
