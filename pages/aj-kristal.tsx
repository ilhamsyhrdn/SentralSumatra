import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgePercent,
  Check,
  Coffee,
  Gift,
  House,
  MessageCircle,
  Minus,
  PartyPopper,
  Plus,
  ShieldCheck,
  ShoppingBasket,
  Snowflake,
  Store,
  Timer,
  Truck,
} from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { Chip, IconBadge, NumberBadge, Panel, SectionHead } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { IceScene } from "@/components/three";
import { AGENT_MIN_QTY, ICE_PRODUCTS, KRISTAL_WA, iceOrderText, type IceProduct } from "@/data/kristal";
import { CONTACT, SOCIALS } from "@/data/site";
import { formatRupiah, waLink } from "@/lib/utils";

const ORDER_WA = waLink(KRISTAL_WA, "Halo kak, saya ingin memesan es AJ Kristal");
const AGENT_WA = waLink(KRISTAL_WA, "Halo kak, saya ingin menjadi agen AJ Kristal");

const FEATURES = [
  { icon: ShieldCheck, title: "Dijamin bersih", description: "Kebersihan es kami jamin, aman dicampur langsung ke minuman." },
  { icon: Timer, title: "Tahan lama", description: "Es keras dan tidak cepat cair, minuman tetap dingin lebih lama." },
  { icon: BadgePercent, title: "Harga terbaik", description: "Es kristal Rp 10.000 dan es serut Rp 11.000 per bungkus." },
  { icon: Truck, title: "Gratis antar", description: "Pengantaran gratis ke seluruh Kota Jambi, tanpa ongkos kirim." },
];

const AUDIENCE = [
  { icon: Coffee, label: "Kedai kopi & minuman" },
  { icon: Store, label: "Warung & rumah makan" },
  { icon: PartyPopper, label: "Acara & hajatan" },
  { icon: House, label: "Rumah tangga" },
];

const AGENT_PERKS = [
  "Bonus 1 kantong untuk pembelian 10 bungkus",
  "Gratis antar ke seluruh Kota Jambi",
  "Harga terbaik untuk usaha Anda",
];

const STEPS = [
  { icon: ShoppingBasket, title: "Pilih es & jumlah", description: "Es kristal atau es serut. Atur jumlah bungkus langsung di kartu produk." },
  { icon: MessageCircle, title: "Chat admin", description: `Klik tombol pesan atau chat ${CONTACT.phoneDisplay}. Format pesanan otomatis terisi.` },
  { icon: Truck, title: "Diantar gratis", description: "Admin mengonfirmasi pesanan, lalu es diantar gratis ke alamat Anda di Kota Jambi." },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE_OUT },
});

export default function AjKristalPage() {
  return (
    <>
      <Seo
        title="Es Kristal dan Es Serut AJ Kristal"
        description="AJ Kristal menjual es kristal Rp 10.000 dan es serut Rp 11.000 per bungkus untuk minuman. Dijamin bersih, tahan lama, harga terbaik, dan gratis antar se-Kota Jambi."
      />

      {/* Hero */}
      <Panel tone="ink" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center split-pad py-10">
            <motion.div {...fadeUp(0)}>
              <Chip dark>Es kristal & es serut · Kota Jambi</Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text="Es bersih," /> <WordsReveal text="dingin lebih lama." delay={0.18} className="text-mint" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed 2xl:max-w-2xl 2xl:text-xl text-white/85">
              AJ Kristal menyediakan es kristal dan es serut untuk minuman. Kebersihannya dijamin, esnya tahan lama, dan
              harganya terbaik. Pengantaran gratis ke seluruh Kota Jambi.
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              <a href="#produk" className="btn press bg-white text-ink hover:bg-mint">
                Lihat produk
              </a>
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-teal text-white hover:bg-white hover:text-ink">
                <SiWhatsapp className="size-4" />
                Pesan via WhatsApp
              </a>
            </motion.div>
            <motion.dl {...fadeUp(0.6)} className="mt-10 grid max-w-md grid-cols-3 gap-2">
              {[
                ["10rb", "Es kristal"],
                ["11rb", "Es serut"],
                ["Gratis", "Antar se-Kota Jambi"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse rounded-2xl bg-white/[0.08] px-4 py-3.5 ring-1 ring-white/10">
                  <dt className="text-sm text-white/80">{l}</dt>
                  <dd className="text-2xl font-extrabold tracking-tight sm:text-3xl">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(75%_70%_at_50%_45%,#2b8aa0_0%,#17414d_58%,#0b2126_100%)] sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <IceScene className="absolute inset-0" />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 sm:bottom-4 sm:left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-lg">
                <ShieldCheck className="size-4 text-teal" />
                Dijamin bersih
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-sm font-bold text-white shadow-lg">
                <Truck className="size-4 text-mint" />
                Gratis antar se-Kota Jambi
              </span>
            </div>
          </div>
        </div>
      </Panel>

      {/* Produk */}
      <Panel tone="soft" id="produk">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Produk"
            title="Dua pilihan es untuk minuman."
            description="Harga per bungkus. Atur jumlahnya lalu klik pesan, format pesanan langsung terisi di WhatsApp."
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-2">
            {ICE_PRODUCTS.map((p) => (
              <StaggerItem key={p.id} className="h-full">
                <IceCard product={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-3 flex flex-col gap-4 rounded-3xl bg-ink p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <span className="flex items-center gap-4">
              <IconBadge icon={Gift} className="bg-mint text-ink" />
              <span className="font-bold leading-relaxed text-white">Ingin bergabung bersama kami menjadi agen?</span>
            </span>
            <a href="#agen" className="btn press shrink-0 bg-white text-ink hover:bg-mint">
              Info lebih lanjut
            </a>
          </Reveal>
        </div>
      </Panel>

      {/* Keunggulan */}
      <Panel tone="white" id="keunggulan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/es-bungkus.jpg" alt="Es dimasukkan ke dalam kantong plastik bersih" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[center_70%]" />
          </Reveal>
          <div className="split-pad py-10 lg:py-14">
            <SectionHead chip="Keunggulan" title="Bersih, tahan lama, harga terbaik." />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <StaggerItem key={f.title} className="group h-full rounded-3xl bg-soft p-6 transition duration-300 hover:bg-ink hover:text-white">
                  <IconBadge icon={f.icon} className="bg-teal text-white group-hover:bg-mint group-hover:text-ink" />
                  <h3 className="mt-5 text-lg font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted transition-colors group-hover:text-white/80">{f.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-6">
              <p className="text-sm font-bold text-ink">Cocok untuk</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {AUDIENCE.map((a) => (
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

      {/* Jadi agen */}
      <Panel tone="teal" id="agen" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead
              dark
              chip="Jadi agen"
              title="Beli 10, bonus 1 kantong."
              description="Punya warung, kedai minuman, atau ingin berjualan es? Gabung jadi agen AJ Kristal dan dapatkan bonus 1 kantong untuk pembelian 10 bungkus."
            />
            <Reveal className="mt-8 rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
              <div aria-hidden className="grid grid-cols-6 gap-2 sm:grid-cols-11">
                {Array.from({ length: AGENT_MIN_QTY }, (_, i) => (
                  <span key={i} className="grid aspect-square place-items-center rounded-xl bg-white/10 text-white">
                    <Snowflake className="size-4" />
                  </span>
                ))}
                <span className="grid aspect-square place-items-center rounded-xl bg-mint text-ink">
                  <Gift className="size-4" />
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-white/90">
                Beli 10 bungkus <span className="text-mint">+ bonus 1 kantong</span>
              </p>
            </Reveal>
            <Stagger className="mt-3 grid gap-2">
              {AGENT_PERKS.map((p) => (
                <StaggerItem key={p} className="flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3.5 ring-1 ring-white/10">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-ink">
                    <Check className="size-3.5" />
                  </span>
                  <span className="font-semibold">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={AGENT_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-white text-ink hover:bg-mint">
                <SiWhatsapp className="size-4" />
                Daftar jadi agen
              </a>
              <a href={SOCIALS.kristal.instagram} target="_blank" rel="noopener noreferrer" className="btn press bg-ink text-white hover:bg-black">
                <SiInstagram className="size-4" />
                @eskristal_aj
              </a>
            </div>
          </div>
          <Reveal delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/es-teh.jpg" alt="Segelas es teh dingin dengan irisan jeruk nipis" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-4 rounded-2xl bg-white p-4 text-ink shadow-lg sm:inset-x-4 sm:bottom-4">
              <IconBadge icon={Truck} className="bg-teal text-white" />
              <p className="text-sm leading-snug text-muted">
                <span className="block font-bold text-ink">Gratis antar se-Kota Jambi</span>
                Stok es untuk usaha Anda diantar sampai tujuan.
              </p>
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* Cara pesan */}
      <Panel tone="white" id="pesan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead chip="Cara pesan" title="Tiga langkah, es sampai." />
            <Stagger className="mt-8 grid gap-2">
              {STEPS.map((s, i) => (
                <StaggerItem key={s.title} className="flex items-start gap-4 rounded-3xl bg-soft p-5">
                  <NumberBadge n={i + 1} className="size-11 bg-ink text-white" />
                  <span>
                    <span className="flex items-center gap-2 text-lg font-bold">
                      <s.icon className="size-5 text-teal" />
                      {s.title}
                    </span>
                    <span className="mt-1 block leading-relaxed text-muted">{s.description}</span>
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-ink text-white hover:bg-teal">
                <SiWhatsapp className="size-4" />
                Chat WhatsApp
              </a>
              <a
                href={SOCIALS.kristal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn press bg-soft text-ink ring-1 ring-black/[0.06] hover:bg-canvas"
              >
                <SiInstagram className="size-4" />
                @eskristal_aj
              </a>
            </div>
          </div>
          <Reveal delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] bg-ink sm:rounded-[1.5rem]">
            <Image src="/stock/es-gelas.jpg" alt="Es batu dijatuhkan ke dalam gelas berisi air" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <dl className="absolute inset-x-3 bottom-3 grid gap-3 rounded-2xl bg-white p-5 text-ink shadow-lg sm:inset-x-4 sm:bottom-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted">WhatsApp admin</dt>
                <dd className="font-bold">{CONTACT.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Jam operasional</dt>
                <dd className="font-bold">
                  {CONTACT.hours[0].day}, {CONTACT.hours[0].time}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Panel>
    </>
  );
}

function IceCard({ product }: { product: IceProduct }) {
  const [qty, setQty] = useState(1);
  const agent = qty >= AGENT_MIN_QTY;
  const change = (d: number) => setQty((q) => Math.min(999, Math.max(1, q + d)));

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-2">
      <Tilt innerClassName="overflow-hidden rounded-2xl bg-soft" max={4}>
        <div className="relative aspect-[4/3]">
          <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width:768px) 48vw, 100vw" className="object-cover" />
        </div>
      </Tilt>

      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
          <p className="text-right">
            <span className="block text-2xl font-extrabold tracking-tight">{formatRupiah(product.price)}</span>
            <span className="text-sm text-muted">per {product.unit}</span>
          </p>
        </div>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.uses.map((u) => (
            <span key={u} className="rounded-full bg-soft px-3 py-1.5 text-xs font-semibold">
              {u}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div role="group" aria-label={`Jumlah ${product.name}`} className="flex items-center rounded-full bg-soft p-1">
              <button
                type="button"
                onClick={() => change(-1)}
                disabled={qty <= 1}
                aria-label={`Kurangi ${product.name}`}
                className="grid size-10 place-items-center rounded-full bg-white text-ink transition hover:bg-ink hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-ink"
              >
                <Minus className="size-4" />
              </button>
              <span aria-live="polite" className="min-w-20 text-center text-sm font-bold tabular-nums">
                {qty} {product.unit}
              </span>
              <button
                type="button"
                onClick={() => change(1)}
                aria-label={`Tambah ${product.name}`}
                className="grid size-10 place-items-center rounded-full bg-white text-ink transition hover:bg-ink hover:text-white"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <p className="text-right">
              <span className="block text-xs font-medium text-muted">Total</span>
              <span className="text-xl font-extrabold tracking-tight">{formatRupiah(product.price * qty)}</span>
            </p>
          </div>

          <AnimatePresence initial={false}>
            {agent && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <span className="mt-3 flex items-center gap-2 rounded-2xl bg-leaf-soft px-4 py-3 text-sm font-semibold text-leaf-ink">
                  <Gift className="size-4 shrink-0" />
                  Beli 10 bungkus dapat bonus 1 kantong
                </span>
              </motion.p>
            )}
          </AnimatePresence>

          <a
            href={waLink(KRISTAL_WA, iceOrderText(product, qty))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn press mt-4 w-full bg-ink text-white hover:bg-teal"
          >
            <SiWhatsapp className="size-4" />
            Pesan {qty} {product.unit} via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
