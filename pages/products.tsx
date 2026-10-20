import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { PageIntro } from "@/components/common/PageIntro";
import { Chip, Panel } from "@/components/ui-kit";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { STORES, type Store, type StoreStatus } from "@/data/stores";
import { CONTACT } from "@/data/site";
import { cn, waLink } from "@/lib/utils";

type Filter = "all" | StoreStatus;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "available", label: "Tersedia" },
  { id: "soon", label: "Segera hadir" },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = STORES.filter((s) => filter === "all" || s.status === filter);
  const count = (f: Filter) => STORES.filter((s) => f === "all" || s.status === f).length;

  return (
    <>
      <Seo
        title="Produk & Unit Usaha"
        description="Jelajahi produk Sentral Sumatra, mulai dari es kristal dan es serut AJ Kristal, sabun Batanghari River, susu Diocca, sampai Sentral Plastik dan Sentral Kimia yang segera hadir."
      />

      <PageIntro
        chip="Produk kami"
        title="Lima unit,"
        accent="beragam kebutuhan."
        description="Setiap unit punya halaman sendiri berisi detail produk, harga, dan cara pemesanan. Pilih yang Anda butuhkan."
        aside={
          <div className="grid h-full min-h-[20rem] grid-cols-2 gap-2 sm:gap-3">
            {STORES.map((s, i) => (
              <Link
                key={s.slug}
                href={s.href}
                className={cn("group relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]", i === 0 && "col-span-2")}
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes={i === 0 ? "(min-width:1024px) 44vw, 100vw" : "(min-width:1024px) 22vw, 50vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute inset-x-3 bottom-3 text-sm font-bold text-white sm:text-base">{s.name}</span>
              </Link>
            ))}
          </div>
        }
      >
        <LayoutGroup id="product-filter">
          <div role="tablist" aria-label="Filter unit usaha" className="mt-9 inline-flex max-w-full gap-1 rounded-full bg-soft p-1.5 ring-1 ring-black/[0.05]">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-[0.82rem] font-semibold transition-colors duration-300 sm:gap-2 sm:px-5 sm:text-sm",
                    active ? "text-white" : "text-ink hover:text-teal",
                  )}
                >
                  {active && (
                    <motion.span layoutId="filter-pill" className="absolute inset-0 bg-ink" style={{ borderRadius: 9999 }} transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                  )}
                  <span className="relative">{f.label}</span>
                  <span
                    className={cn(
                      "relative grid min-w-6 place-items-center rounded-full px-1.5 text-xs tabular-nums",
                      active ? "bg-white/20 text-white" : "bg-white text-ink",
                    )}
                  >
                    {count(f.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </PageIntro>

      <AnimatePresence mode="popLayout" initial={false}>
        {list.map((s, i) => (
          <motion.div
            key={s.slug}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <StoreRow store={s} index={STORES.indexOf(s)} flip={i % 2 === 1} />
          </motion.div>
        ))}
      </AnimatePresence>

      <Panel tone="ink">
        <Reveal className="container-x flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center lg:py-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Belum menemukan yang Anda cari?</h2>
            <p className="mt-1 text-white/80">Ceritakan kebutuhan Anda, tim kami bantu carikan solusinya.</p>
          </div>
          <a
            href={waLink(CONTACT.wa, "Halo Sentral Sumatra, saya sedang mencari produk berikut:")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn press shrink-0 bg-mint text-ink hover:bg-white"
          >
            <SiWhatsapp className="size-4" />
            Tanya tim kami
          </a>
        </Reveal>
      </Panel>
    </>
  );
}

function StoreRow({ store, index, flip }: { store: Store; index: number; flip: boolean }) {
  const available = store.status === "available";
  return (
    <Panel tone="white" className="p-2 sm:p-3">
      <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
        <Link href={store.href} className={cn("group block h-72 sm:h-96 lg:h-auto lg:min-h-[28rem]", flip && "lg:order-2")}>
          <Tilt className="h-full" innerClassName="overflow-hidden rounded-[1.25rem] bg-ink sm:rounded-[1.5rem]" max={3}>
            <Image src={store.image} alt={store.name} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-1000 ease-out group-hover:scale-105" />
            <span
              className={cn(
                "absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold",
                available ? "bg-white text-leaf-ink" : "bg-ink text-white",
              )}
            >
              {available ? "Tersedia" : "Segera hadir"}
            </span>
          </Tilt>
        </Link>

        <div className="flex flex-col justify-center split-pad py-8 lg:py-12">
          <Chip>
            {String(index + 1).padStart(2, "0")} · Unit {store.category.toLowerCase()}
          </Chip>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">{store.name}</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">{store.description}</p>
          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
            {store.products.map((p) => (
              <li key={p} className="flex items-center gap-2.5 rounded-2xl bg-soft px-4 py-3 font-semibold">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink text-mint">
                  <Check className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            <Link href={store.href} className="btn press group bg-ink text-white hover:bg-teal">
              {available ? `Masuk ke ${store.name}` : "Lihat rencana produk"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={waLink(store.wa, store.waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn press bg-soft text-ink ring-1 ring-black/[0.06] hover:bg-canvas"
            >
              <SiWhatsapp className="size-4" />
              {available ? "Pesan via WhatsApp" : "Kabari saya"}
            </a>
          </div>
        </div>
      </div>
    </Panel>
  );
}
