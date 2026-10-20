import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { Chip, IconBadge, Panel, SectionHead } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { EmblemScene } from "@/components/three";
import { STORES, type Store } from "@/data/stores";
import { CONTACT, SENTRAL_VALUES } from "@/data/site";
import { DIOCCA_VARIANTS } from "@/data/diocca";
import { SOAP_LINES } from "@/data/batanghari";
import { ICE_PRODUCTS } from "@/data/kristal";
import { cn, formatRupiah, waLink } from "@/lib/utils";

const STATS = [
  { value: "5", label: "Unit usaha" },
  { value: "16+", label: "Varian produk" },
  { value: "2019", label: "Berdiri sejak" },
];

const FEATURED = [
  ...ICE_PRODUCTS.map((p) => ({
    image: p.image,
    brand: "AJ Kristal",
    name: p.name,
    detail: `Per ${p.unit} · untuk minuman`,
    price: p.price,
    href: "/aj-kristal#produk",
  })),
  ...[SOAP_LINES[0], SOAP_LINES[3]].map((l) => ({
    image: l.variants[0].image,
    brand: "Batanghari River",
    name: l.name,
    detail: `${l.variants[0].size} · Wangi ${l.aroma}`,
    price: l.variants[0].price,
    href: "/batanghari-river#produk",
  })),
  ...DIOCCA_VARIANTS.map((v) => ({
    image: v.images[0],
    brand: "Diocca",
    name: v.name.replace(" Diocca", ""),
    detail: v.pack,
    price: v.price,
    href: "/diocca#menu",
  })),
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE_OUT },
});

export default function HomePage() {
  const [lead, ...others] = STORES;

  return (
    <>
      <Seo
        title="Es Kristal, Sabun, Susu, Plastik & Kimia dari Jambi"
        description="Sentral Sumatra menaungi AJ Kristal, Batanghari River, Diocca, Sentral Plastik, dan Sentral Kimia. Produk berkualitas dengan harga terjangkau langsung dari Kota Jambi."
      />

      {/* Hero */}
      <Panel tone="white" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center split-pad py-10 lg:py-12 xl:px-16">
            <motion.div {...fadeUp(0)}>
              <Chip>
                <span className="size-1.5 rounded-full bg-leaf" />
                Kota Jambi · sejak 2019
              </Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text="Kebutuhan harian," />
              <br />
              <WordsReveal text="dari satu sentral." delay={0.18} className="text-teal" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed 2xl:max-w-2xl 2xl:text-xl text-muted">
              Sentral Sumatra menaungi lima unit usaha, yaitu es kristal, sabun, susu, plastik, dan kimia. Kualitasnya kami
              jaga, harganya tetap masuk akal.
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              <Link href="/products" className="btn press group bg-ink text-white hover:bg-teal">
                Jelajahi produk
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="btn press bg-soft text-ink ring-1 ring-black/[0.06] hover:bg-canvas">
                Tentang kami
              </Link>
            </motion.div>
            <motion.dl {...fadeUp(0.6)} className="mt-10 grid max-w-lg grid-cols-3 gap-2">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-soft px-4 py-3.5">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(80%_70%_at_55%_45%,#ffffff_0%,#dceee7_55%,#c4e3d7_100%)] sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <EmblemScene className="absolute inset-0" />
            {/* 5 unit: 2 di baris atas, 3 di baris bawah (mobile: unit pertama selebar penuh) */}
            <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:inset-x-4 sm:bottom-4 sm:grid-cols-6">
              {STORES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className={cn(
                      "press group flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.05] transition duration-300 hover:bg-ink hover:text-white active:scale-95",
                      i === 0 ? "col-span-2 sm:col-span-3" : i === 1 ? "sm:col-span-3" : "sm:col-span-2",
                    )}
                  >
                    <IconBadge icon={Icon} size="sm" className="bg-ink text-mint group-hover:bg-white/10" />
                    <span className="min-w-0 leading-tight">
                      <span className="block truncate text-sm font-bold">{s.name}</span>
                      <span className="block text-xs text-muted transition-colors group-hover:text-white/80">
                        {s.status === "available" ? s.category : "Segera hadir"}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Panel>

      {/* Unit usaha — bento foto */}
      <Panel tone="ink">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            dark
            chip="Unit usaha"
            title="Lima unit, satu standar kualitas."
            description="Setiap unit punya halaman sendiri yang berisi produk, harga, dan cara pemesanan."
            action={
              <Link href="/products" className="btn press group bg-white text-ink hover:bg-mint">
                Lihat semua produk
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            }
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-4 md:grid-rows-[repeat(2,minmax(15rem,1fr))] lg:mt-12">
            <StaggerItem className="h-[26rem] md:col-span-2 md:row-span-2 md:h-auto">
              <PhotoTile store={lead} large />
            </StaggerItem>
            {others.map((s) => (
              <StaggerItem key={s.slug} className="h-72 md:h-auto">
                <PhotoTile store={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* Kenapa kami */}
      <Panel tone="white" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.25fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead
              chip="Kenapa Sentral Sumatra"
              title="Kualitas yang bisa Anda andalkan setiap hari."
              description="Produk kebutuhan harian harus aman, higienis, dan tetap terjangkau. Prinsip itu kami bawa ke setiap unit."
            />
            <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
              {SENTRAL_VALUES.map((v) => (
                <StaggerItem key={v.title} className="group h-full rounded-3xl bg-soft p-6 transition duration-300 hover:bg-ink hover:text-white">
                  <IconBadge icon={v.icon} className="bg-ink text-mint group-hover:bg-mint group-hover:text-ink" />
                  <h3 className="mt-5 text-lg font-bold tracking-tight">{v.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted transition-colors group-hover:text-white/80">{v.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal className="relative min-h-[26rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image
              src="/stock/milk-chocolate.jpg"
              alt="Susu cokelat dituang ke dalam gelas"
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
            <figure className="absolute inset-x-3 bottom-3 rounded-2xl bg-white p-5 shadow-lg sm:inset-x-4 sm:bottom-4">
              <Quote className="size-5 text-leaf" />
              <blockquote className="mt-2 font-semibold leading-snug text-ink">
                “Susu murni tanpa gula tambahan, aman diminum anak setiap hari.”
              </blockquote>
              <figcaption className="mt-2 text-sm text-muted">Pelanggan Diocca, Kota Jambi</figcaption>
            </figure>
          </Reveal>
        </div>
      </Panel>

      {/* Produk unggulan */}
      <Panel tone="soft">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Produk unggulan"
            title="Paling sering dipesan."
            action={
              <Link href="/products" className="btn press group bg-ink text-white hover:bg-teal">
                Semua produk
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            }
          />
          <Stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-6">
            {FEATURED.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <Link href={p.href} className="group block h-full">
                  <Tilt className="h-full" innerClassName="flex h-full flex-col rounded-3xl bg-white p-2">
                    <span className="relative block aspect-square overflow-hidden rounded-2xl bg-soft">
                      <Image
                        src={p.image}
                        alt={`${p.brand} ${p.name}`}
                        fill
                        sizes="(min-width:1536px) 16vw, (min-width:768px) 32vw, 48vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-3 sm:p-4">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-leaf-ink">{p.brand}</span>
                      <span className="mt-1 text-base font-bold leading-snug tracking-tight sm:text-lg">{p.name}</span>
                      <span className="text-sm text-muted">{p.detail}</span>
                      <span className="mt-auto flex items-center justify-between gap-2 pt-4">
                        <span className="text-base font-extrabold tracking-tight sm:text-xl">{formatRupiah(p.price)}</span>
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white transition duration-500 group-hover:rotate-45 group-hover:bg-teal sm:size-10">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </span>
                    </span>
                  </Tilt>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* CTA */}
      <Panel tone="teal" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-center split-pad py-12 lg:py-16">
            <Chip dark>Kerja sama</Chip>
            <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">
              Butuh pasokan rutin untuk usaha Anda?
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/85">
              Mau pesan dalam jumlah besar, jadi reseller, atau sekadar tanya stok? Tim kami siap membantu.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={waLink(CONTACT.wa, "Halo Sentral Sumatra, saya ingin bertanya tentang pemesanan dalam jumlah besar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn press bg-white text-ink hover:bg-mint"
              >
                <SiWhatsapp className="size-4" />
                Chat WhatsApp
              </a>
              <Link href="/contact" className="btn press bg-ink/40 text-white ring-1 ring-white/30 hover:bg-ink">
                Halaman kontak
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative min-h-[18rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/warehouse.jpg" alt="Gudang distribusi dengan rak penuh barang" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </Panel>
    </>
  );
}

function PhotoTile({ store, large }: { store: Store; large?: boolean }) {
  return (
    <Link href={store.href} className="group block h-full">
      <Tilt className="h-full" innerClassName="overflow-hidden rounded-3xl bg-ink-2">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes={large ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 100vw"}
          className="object-cover transition duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold",
            store.status === "available" ? "bg-white text-leaf-ink" : "bg-ink text-white ring-1 ring-white/25",
          )}
        >
          {store.status === "available" ? "Tersedia" : "Segera hadir"}
        </span>
        <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-ink transition duration-500 group-hover:rotate-45 group-hover:bg-mint">
          <ArrowUpRight className="size-5" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
          <p className="text-sm font-semibold text-mint">{store.category}</p>
          <h3 className={cn("font-bold tracking-[-0.03em]", large ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl")}>{store.name}</h3>
          {large && <p className="mt-3 max-w-md leading-relaxed text-white/85">{store.description}</p>}
        </div>
      </Tilt>
    </Link>
  );
}
