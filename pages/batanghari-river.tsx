import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  BadgePercent,
  Blend,
  Check,
  Flower2,
  MessageCircle,
  PackageCheck,
  PiggyBank,
  ShieldCheck,
  Shirt,
  ShoppingBasket,
  Sparkles,
} from "lucide-react";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { BatanghariLogo } from "@/components/common/Logos";
import { Chip, IconBadge, NumberBadge, Panel, SectionHead } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { BubblesScene } from "@/components/three";
import {
  AROMAS,
  BATANGHARI_PHONE,
  BATANGHARI_STORY,
  BATANGHARI_WA,
  CLEANING_PRODUCTS,
  CLEANING_SIZE,
  PARFUM_GRADES,
  PARFUM_SIZES,
  cleaningOrderText,
  parfumOrderText,
  type CleaningProduct,
} from "@/data/batanghari";
import { CONTACT, SOCIALS } from "@/data/site";
import { cn, waLink } from "@/lib/utils";

const ORDER_WA = waLink(BATANGHARI_WA, "Halo kak, saya ingin memesan sabun atau parfum laundry Batanghari River. Boleh info harga dan diskonnya?");
const BLEND_WA = waLink(BATANGHARI_WA, "Halo kak, saya ingin konsultasi paket racikan parfum laundry (custom blend) Batanghari River untuk laundry saya.");
const BH_CHIP = "bg-bh text-bh-navy";
const BH_CHIP_DARK = "bg-white/10 text-bh-sun";

const PARFUM_PERKS = [
  { icon: Flower2, label: "Wangi tahan lama" },
  { icon: ShieldCheck, label: "Bersih & anti bau" },
  { icon: Shirt, label: "Cocok untuk semua jenis kain" },
];

const CLEANING_PERKS = [
  { icon: PiggyBank, label: "Hemat ekonomis" },
  { icon: Sparkles, label: "Bersih maksimal" },
  { icon: ShieldCheck, label: "Aman digunakan" },
  { icon: Flower2, label: "Wangi tahan lama" },
];

const STEPS = [
  { icon: ShoppingBasket, title: "Pilih produk", description: "Tentukan parfum laundry atau produk kebersihan yang Anda butuhkan, lengkap dengan kemasannya." },
  { icon: MessageCircle, title: "Chat admin", description: `Klik tombol pesan atau chat ${BATANGHARI_PHONE}. Admin membalas dengan harga terbaru.` },
  { icon: PackageCheck, title: "Konfirmasi & terima", description: "Admin mengonfirmasi stok, diskon pemesanan banyak, serta pengiriman atau pengambilan." },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE_OUT },
});

export default function BatanghariRiverPage() {
  return (
    <>
      <Seo
        title="Parfum Laundry dan Sabun Batanghari River"
        description="Batanghari River, produksi parfum laundry dan sabun asli Jambi sejak 2019 yang sudah berizin dan legal. Parfum laundry Grade A dan B, 7 pilihan aroma, serta produk kebersihan 5 liter dengan harga termurah di Jambi."
      />

      {/* Hero */}
      <Panel tone="bh-navy" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center split-pad py-10">
            <motion.div {...fadeUp(0)}>
              <Chip colors={BH_CHIP_DARK}>Asli Jambi · sejak 2019</Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text="Bersih maksimal," /> <WordsReveal text="harum tahan lama." delay={0.18} className="text-bh" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 2xl:max-w-2xl 2xl:text-xl">
              Parfum laundry dan sabun rumah tangga produksi Jambi. Satu-satunya produksi sabun di Jambi yang sudah berizin
              dan legal, dengan harga termurah di Jambi dan diskon untuk pemesanan banyak.
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              <a href="#parfum" className="btn press bg-bh text-bh-navy hover:bg-bh-sun">
                Lihat produk
              </a>
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-white text-bh-navy hover:bg-bh-soft">
                <SiWhatsapp className="size-4" />
                Pesan via WhatsApp
              </a>
            </motion.div>
            <motion.dl {...fadeUp(0.6)} className="mt-10 grid max-w-md grid-cols-3 gap-2">
              {[
                ["Legal", "Berizin resmi"],
                [String(AROMAS.length), "Aroma parfum"],
                ["Diskon", "Pesan banyak"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse rounded-2xl bg-white/[0.07] px-4 py-3.5 ring-1 ring-white/10">
                  <dt className="text-sm text-white/75">{l}</dt>
                  <dd className="text-2xl font-extrabold tracking-tight sm:text-3xl">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <div className="relative grid min-h-[26rem] place-items-center overflow-hidden rounded-[1.25rem] bg-[radial-gradient(70%_70%_at_50%_40%,#ffb066_0%,#fb7102_55%,#c2500a_100%)] pb-16 pt-6 sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: EASE_OUT }}
              className="relative aspect-square w-[78%] max-w-[30rem] drop-shadow-[0_30px_40px_rgba(11,31,77,0.35)]"
            >
              <Image src="/Logo/LogoBatanghariRiver.png" alt="Logo Batanghari River dengan jembatan di tepi sungai saat senja" fill priority sizes="(min-width:1024px) 36vw, 78vw" />
            </motion.div>
            {/* screen: bagian gelap shader gelembung hilang di latar terang, hanya kilaunya yang tampil */}
            <BubblesScene className="absolute inset-0 mix-blend-screen" count={12} />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 sm:bottom-4 sm:left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-bh-navy shadow-lg">
                <ShieldCheck className="size-4 text-bh-deep" />
                Berizin & legal
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-bh-navy px-3.5 py-2 text-sm font-bold text-white shadow-lg">
                <BadgePercent className="size-4 text-bh-sun" />
                Harga termurah di Jambi
              </span>
            </div>
          </div>
        </div>
      </Panel>

      {/* Parfum laundry */}
      <Panel tone="bh-cream" id="parfum">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Parfum laundry"
            chipClass={BH_CHIP}
            title="Parfum laundry yang bikin pelanggan balik lagi."
            description="Tersedia Grade A Premium dan Grade B, dalam botol 1 liter dan jerigen 5 liter. Harga termurah di Jambi, makin hemat dengan diskon pemesanan banyak."
          />
          <div className="mt-10 grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="flex flex-col rounded-3xl bg-white p-2">
              <Tilt className="flex-1" innerClassName="overflow-hidden rounded-2xl bg-bh-soft" max={3}>
                <div className="relative aspect-[500/680] w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]">
                  <Image
                    src="/batanghari/parfum-laundry.jpg"
                    alt="Parfum laundry Batanghari River Grade A Premium dalam jerigen 5 liter dan botol 1 liter"
                    fill
                    sizes="(min-width:1024px) 38vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </Tilt>
              <ul className="grid gap-2 p-2 pt-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {PARFUM_PERKS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 rounded-2xl bg-bh-cream px-3.5 py-3 text-sm font-semibold text-bh-navy">
                    <Icon className="size-5 shrink-0 text-bh-deep" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <ParfumOrder />
            </Reveal>
          </div>
          <Reveal className="mt-3 flex flex-col gap-5 rounded-3xl bg-bh-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <span className="flex items-start gap-4">
              <IconBadge icon={Blend} className="bg-bh text-bh-navy" />
              <span>
                <span className="block text-lg font-bold">Paket racikan (custom blend)</span>
                <span className="mt-1 block max-w-2xl leading-relaxed text-white/80">
                  Pihak laundry bisa memilih campuran wangi khusus, jadi aroma laundry Anda punya ciri khas sendiri yang mudah
                  diingat pelanggan.
                </span>
              </span>
            </span>
            <a href={BLEND_WA} target="_blank" rel="noopener noreferrer" className="btn press shrink-0 bg-bh text-bh-navy hover:bg-bh-sun">
              <SiWhatsapp className="size-4" />
              Konsultasi racikan
            </a>
          </Reveal>
        </div>
      </Panel>

      {/* Produk kebersihan */}
      <Panel tone="bh-white" id="kebersihan">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Produk kebersihan"
            chipClass={BH_CHIP}
            title="Enam pembersih harian, jerigen 5 liter."
            description="Bersih higienis, hemat, dan wangi tahan lama. Harga termurah di Jambi dengan diskon untuk pemesanan banyak. Tersedia juga karbol, tanyakan ke admin."
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {CLEANING_PRODUCTS.map((p, i) => (
              <StaggerItem key={p.id} className="h-full">
                <CleaningCard product={p} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-3 grid grid-cols-2 gap-2 rounded-3xl bg-bh-cream p-2 lg:grid-cols-4">
            {CLEANING_PERKS.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-bh-navy">
                <Icon className="size-5 shrink-0 text-bh-deep" />
                {label}
              </span>
            ))}
          </Reveal>
        </div>
      </Panel>

      {/* Cerita */}
      <Panel tone="bh" id="cerita" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <Reveal>
              <Chip colors="bg-bh-navy text-bh-sun">Cerita kami</Chip>
              <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">Ilmu teknik industri, pulang membangun Jambi.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed">
                Nama Batanghari diambil dari sungai terpanjang di Sumatra yang mengalir melewati Kota Jambi. Nama itu kami pilih
                sebagai pengingat bahwa produk ini lahir dan tumbuh di Jambi, untuk orang Jambi.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-2 sm:grid-cols-2">
              {BATANGHARI_STORY.map((s) => (
                <StaggerItem key={s.mark} className="h-full rounded-3xl bg-white p-5">
                  <span className="inline-block rounded-full bg-bh-navy px-3.5 py-1.5 text-sm font-extrabold text-bh-sun">{s.mark}</span>
                  <span className="mt-4 block text-lg font-bold">{s.title}</span>
                  <span className="mt-1 block leading-relaxed text-muted">{s.text}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/laundry-folded.jpg" alt="Tumpukan pakaian bersih yang sudah dilipat" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg sm:inset-x-4 sm:bottom-4">
              <BatanghariLogo size={56} />
              <p className="text-sm leading-snug text-muted">
                <span className="block font-bold text-bh-navy">Berizin dan legal</span>
                Satu-satunya produksi sabun berizin di Jambi.
              </p>
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* Cara pesan */}
      <Panel tone="bh-navy" id="pesan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead dark chip="Cara pesan" chipClass={BH_CHIP_DARK} title="Pesan mudah, harga termurah." />
            <Stagger className="mt-8 grid gap-2">
              {STEPS.map((s, i) => (
                <StaggerItem key={s.title} className="flex items-start gap-4 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                  <NumberBadge n={i + 1} className="size-11 bg-bh text-bh-navy" />
                  <span>
                    <span className="flex items-center gap-2 text-lg font-bold">
                      <s.icon className="size-5 text-bh-sun" />
                      {s.title}
                    </span>
                    <span className="mt-1 block leading-relaxed text-white/85">{s.description}</span>
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-3 flex items-start gap-4 rounded-3xl bg-bh p-5 text-bh-navy">
              <IconBadge icon={BadgePercent} className="bg-bh-navy text-bh-sun" />
              <p className="leading-relaxed">
                <span className="block font-bold">Diskon untuk pemesanan banyak</span>
                Untuk usaha laundry, hotel, atau reseller, tanyakan harga khusus langsung ke admin.
              </p>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-bh text-bh-navy hover:bg-bh-sun">
                <SiWhatsapp className="size-4" />
                Chat WhatsApp
              </a>
              <a href={SOCIALS.batanghari.instagram} target="_blank" rel="noopener noreferrer" className="btn press bg-white/10 text-white ring-1 ring-white/20 hover:bg-white hover:text-bh-navy">
                <SiInstagram className="size-4" />
                @batanghaririver
              </a>
              <a href={SOCIALS.batanghari.tiktok} target="_blank" rel="noopener noreferrer" className="btn press bg-white/10 text-white ring-1 ring-white/20 hover:bg-white hover:text-bh-navy">
                <SiTiktok className="size-4" />
                TikTok
              </a>
            </div>
          </div>
          <Reveal delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/laundry-basket.jpg" alt="Keranjang berisi cucian bersih" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <dl className="absolute inset-x-3 bottom-3 grid gap-3 rounded-2xl bg-white p-5 text-bh-navy shadow-lg sm:inset-x-4 sm:bottom-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted">WhatsApp admin</dt>
                <dd className="font-bold">{BATANGHARI_PHONE}</dd>
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

/** Pilih grade, kemasan, dan aroma; lebih dari satu aroma berarti pesanan racikan */
function ParfumOrder() {
  const [gradeIndex, setGradeIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(1);
  const [selected, setSelected] = useState<string[]>([AROMAS[0].id]);
  const grade = PARFUM_GRADES[gradeIndex];
  const size = PARFUM_SIZES[sizeIndex];
  const names = AROMAS.filter((a) => selected.includes(a.id)).map((a) => a.name);
  const blend = names.length > 1;

  // Minimal satu aroma harus tetap terpilih
  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? (s.length > 1 ? s.filter((x) => x !== id) : s) : [...s, id]));

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-bh-navy sm:text-3xl">Susun pesanan parfum Anda</h3>
      <p className="mt-2 leading-relaxed text-muted">Pilih grade, kemasan, dan aroma. Format pesanan langsung terisi di WhatsApp.</p>

      <p className="mt-7 text-sm font-bold text-bh-navy">Grade</p>
      <div role="radiogroup" aria-label="Grade parfum" className="mt-3 grid gap-2 sm:grid-cols-2">
        {PARFUM_GRADES.map((g, i) => {
          const active = i === gradeIndex;
          return (
            <button
              key={g.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setGradeIndex(i)}
              className={cn(
                "flex flex-col justify-start rounded-2xl p-4 text-left ring-2 transition duration-300",
                active ? "bg-bh-soft ring-bh" : "bg-bh-cream ring-transparent hover:ring-bh/40",
              )}
            >
              <span className="flex items-center justify-between gap-2 font-bold text-bh-navy">
                {g.name}
                <span className={cn("grid size-5 place-items-center rounded-full transition", active ? "bg-bh-navy text-white" : "bg-white ring-1 ring-bh-navy/20")}>
                  {active && <Check className="size-3" />}
                </span>
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-muted">{g.description}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm font-bold text-bh-navy">Kemasan</p>
      <LayoutGroup id="parfum-size">
        <div role="radiogroup" aria-label="Kemasan parfum" className="mt-3 grid grid-cols-2 rounded-full bg-bh-cream p-1">
          {PARFUM_SIZES.map((s, i) => {
            const active = i === sizeIndex;
            return (
              <button
                key={s}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSizeIndex(i)}
                className={cn("relative rounded-full py-3 text-sm font-semibold transition-colors duration-300", active ? "text-white" : "text-bh-navy hover:text-bh-deep")}
              >
                {active && <motion.span layoutId="parfum-size-pill" className="absolute inset-0 bg-bh-navy" style={{ borderRadius: 9999 }} transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <span className="relative">{s}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-bold text-bh-navy">Aroma</p>
        <AnimatePresence initial={false}>
          {blend && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-bh-navy px-3 py-1 text-xs font-bold text-bh-sun"
            >
              <Blend className="size-3.5" />
              Racikan
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <p className="mt-1 text-sm text-muted">Pilih satu aroma, atau beberapa sekaligus untuk racikan khas laundry Anda.</p>
      <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-4 sm:grid-cols-7">
        {AROMAS.map((a) => {
          const active = selected.includes(a.id);
          return (
            <button
              key={a.id}
              type="button"
              aria-pressed={active}
              onClick={() => toggle(a.id)}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span
                className={cn(
                  "relative size-14 rounded-full ring-[3px] ring-offset-2 transition duration-300 group-active:scale-90 sm:size-[3.75rem]",
                  active ? "ring-bh" : "ring-transparent group-hover:ring-bh/40",
                )}
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <Image src={a.image} alt="" fill sizes="64px" className="object-cover" />
                </span>
                {active && (
                  <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-bh-navy text-white ring-2 ring-white">
                    <Check className="size-3" />
                  </span>
                )}
              </span>
              <span className={cn("text-xs font-semibold leading-tight", active ? "text-bh-navy" : "text-muted")}>{a.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-8">
        <p className="rounded-2xl bg-bh-cream px-4 py-3 text-sm leading-relaxed text-bh-navy">
          <span className="font-bold">{grade.name}</span>, {size.toLowerCase()}, {blend ? "racikan " : "aroma "}
          {names.join(" + ")}
        </p>
        <a
          href={waLink(BATANGHARI_WA, parfumOrderText(grade.name, size.toLowerCase(), names))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn press mt-3 w-full bg-bh-deep text-white hover:bg-bh-navy"
        >
          <SiWhatsapp className="size-4" />
          Pesan via WhatsApp
        </a>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm font-semibold text-bh-deep">
          <BadgePercent className="size-4" />
          Harga termurah di Jambi, diskon untuk pemesanan banyak
        </p>
      </div>
    </div>
  );
}

function CleaningCard({ product, index }: { product: CleaningProduct; index: number }) {
  return (
    <article className="flex h-full gap-4 rounded-3xl bg-bh-cream p-2">
      <div className="relative w-32 shrink-0 overflow-hidden rounded-2xl bg-white sm:w-36">
        <Image src={product.image} alt={`${product.name} Batanghari River ${CLEANING_SIZE.toLowerCase()}`} fill sizes="144px" className="object-cover object-[68%_50%]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col py-2 pr-2">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
          <span aria-hidden className="size-2.5 rounded-full" style={{ backgroundColor: product.color }} />
          {String(index + 1).padStart(2, "0")} · 5 liter
        </span>
        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-bh-navy">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{product.description}</p>
        <a
          href={waLink(BATANGHARI_WA, cleaningOrderText(product))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pesan ${product.name} via WhatsApp`}
          className="btn press mt-4 min-h-10 w-fit bg-bh-navy px-4 py-2 text-sm text-white hover:bg-bh-deep"
        >
          <SiWhatsapp className="size-4" />
          Pesan
        </a>
      </div>
    </article>
  );
}
