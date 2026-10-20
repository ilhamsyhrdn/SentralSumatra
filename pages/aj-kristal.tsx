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
import { KristalLogo } from "@/components/common/Logos";
import { Chip, IconBadge, NumberBadge, Panel, SectionHead, StatGrid } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { IceScene } from "@/components/three";
import { AGENT_MIN_QTY, ICE_PRODUCTS, KRISTAL_PHONE, KRISTAL_STORY, KRISTAL_WA, iceOrderText, type IceProduct } from "@/data/kristal";
import { CONTACT, SOCIALS } from "@/data/site";
import { waLink } from "@/lib/utils";

const ORDER_WA = waLink(KRISTAL_WA, "Halo kak, saya ingin memesan es AJ Kristal. Boleh info harga terbarunya?");
const AGENT_WA = waLink(KRISTAL_WA, "Halo kak, saya ingin menjadi agen AJ Kristal");
const KR_CHIP = "bg-kr-soft text-kr-ink";
const KR_CHIP_DARK = "bg-white/10 text-kr-glow";

const HERO_STATS = [
  { value: "No. 4", label: "Es kristal di Jambi" },
  { value: "2019", label: "Mulai berdiri" },
  { value: "Gratis", label: "Antar Kota Jambi" },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Dijamin bersih", description: "Diproses higienis, aman dicampur langsung ke minuman." },
  { icon: Timer, title: "Tahan lama", description: "Es keras dan tidak cepat cair, minuman tetap dingin lebih lama." },
  { icon: BadgePercent, title: "Harga termurah di Jambi", description: "Harga terbaik untuk pedagang. Info harga terbaru langsung dari admin WhatsApp." },
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
  "Harga termurah di Jambi untuk usaha Anda",
];

const STEPS = [
  { icon: ShoppingBasket, title: "Pilih varian & jumlah", description: "Es kristal 10 kg, 5 kg, atau es serut. Atur jumlah bungkus langsung di kartu varian." },
  { icon: MessageCircle, title: "Chat admin", description: `Klik tombol pesan atau chat ${KRISTAL_PHONE}. Admin membalas dengan harga terbaru.` },
  { icon: Truck, title: "Diantar gratis", description: "Setelah pesanan dikonfirmasi, es diantar gratis ke alamat Anda di Kota Jambi." },
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
        title="Es Kristal 10 kg, 5 kg, dan Es Serut AJ Kristal"
        description="AJ Kristal, produsen es kristal nomor 4 di Jambi sejak 2019. Es kristal 10 kg, 5 kg, dan es serut dengan harga termurah di Jambi, dijamin bersih, dan gratis antar se-Kota Jambi."
      />

      {/* Hero */}
      <Panel tone="kr-dark" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center split-pad py-10">
            <motion.div {...fadeUp(0)}>
              <Chip colors={KR_CHIP_DARK}>Sejak 2019 · Kota Jambi</Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text="Es kristal asli Jambi," /> <WordsReveal text="dingin lebih lama." delay={0.18} className="text-kr" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 2xl:max-w-2xl 2xl:text-xl">
              Didirikan pada 2019 oleh seorang lulusan Teknik Industri Universitas Brawijaya asal Jambi, kini AJ Kristal
              menjadi produsen es kristal nomor 4 di Jambi. Esnya bersih, harganya termurah di Jambi, dan diantar gratis ke
              seluruh Kota Jambi.
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              <a href="#produk" className="btn press bg-kr text-kr-dark hover:bg-kr-glow">
                Lihat varian
              </a>
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-white text-kr-dark hover:bg-kr-soft">
                <SiWhatsapp className="size-4" />
                Pesan via WhatsApp
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.6)} className="mt-10">
              <StatGrid items={HERO_STATS} className="max-w-lg" cardClass="bg-white/[0.07] ring-1 ring-white/10" labelClass="text-white/75" />
            </motion.div>
          </div>
          {/* Pil ada di bawah logo (bukan menimpanya) agar teks logo tidak tertutup di layar mana pun */}
          <div className="flex min-h-[24rem] flex-col overflow-hidden rounded-[1.25rem] bg-kr sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: EASE_OUT }}
              className="relative mx-4 mt-4 min-h-[17rem] flex-1 sm:min-h-[22rem]"
            >
              <Image src="/Logo/LogoAjKristal.jpeg" alt="Logo AJ Kristal, harimau memegang tabung es kristal" fill priority sizes="(min-width:1024px) 45vw, 100vw" className="object-contain" />
            </motion.div>
            <div className="flex flex-wrap gap-2 p-3 sm:p-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-kr-dark shadow-lg">
                <BadgePercent className="size-4 text-kr-deep" />
                Harga termurah di Jambi
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-kr-dark px-3.5 py-2 text-sm font-bold text-white shadow-lg">
                <Truck className="size-4 text-kr-glow" />
                Gratis antar se-Kota Jambi
              </span>
            </div>
          </div>
        </div>
      </Panel>

      {/* Varian */}
      <Panel tone="kr-cream" id="produk">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Varian"
            chipClass={KR_CHIP}
            title="Tiga pilihan, satu standar bersih."
            description="Harga termurah di Jambi. Pilih varian dan jumlahnya, lalu pesan lewat WhatsApp. Admin langsung membalas dengan harga terbaru."
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-3">
            {ICE_PRODUCTS.map((p) => (
              <StaggerItem key={p.id} className="h-full">
                <IceCard product={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-3 flex flex-col gap-4 rounded-3xl bg-kr-dark p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <span className="flex items-center gap-4">
              <IconBadge icon={Gift} className="bg-kr text-kr-dark" />
              <span className="font-bold leading-relaxed text-white">Ingin bergabung bersama kami menjadi agen?</span>
            </span>
            <a href="#agen" className="btn press shrink-0 bg-kr text-kr-dark hover:bg-kr-glow">
              Info lebih lanjut
            </a>
          </Reveal>
        </div>
      </Panel>

      {/* Cerita */}
      <Panel tone="kr" id="cerita" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="flex min-h-[24rem] flex-col overflow-hidden rounded-[1.25rem] bg-[radial-gradient(75%_70%_at_50%_42%,#ff8a4c_0%,#c2410c_48%,#1f130d_100%)] sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <div className="relative min-h-[16rem] flex-1">
              <IceScene className="absolute inset-0" />
            </div>
            <div className="m-3 mt-0 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg sm:m-4 sm:mt-0">
              <KristalLogo size={52} />
              <p className="text-sm leading-snug text-muted">
                <span className="block font-bold text-kr-dark">Berdiri sejak 2019</span>
                Didirikan lulusan Teknik Industri Universitas Brawijaya asal Jambi.
              </p>
            </div>
          </Reveal>
          <div className="split-pad py-10 lg:py-14">
            <Reveal>
              <Chip colors="bg-kr-dark text-kr-glow">Cerita kami</Chip>
              <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">Dari anak Jambi, untuk Jambi.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed">
                Kami percaya usaha daerah bisa tumbuh besar kalau dikerjakan dengan jujur. Es harus bersih, pasokan harus
                tepat waktu, dan harganya harus masuk akal untuk pedagang kecil. Prinsip itu yang kami pegang sejak hari
                pertama.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-2">
              {KRISTAL_STORY.map((s) => (
                <StaggerItem key={s.mark} className="flex flex-col gap-3 rounded-3xl bg-white p-5 sm:flex-row sm:items-start sm:gap-5">
                  <span className="w-fit shrink-0 rounded-full bg-kr-dark px-3.5 py-1.5 text-sm font-extrabold text-kr-glow sm:min-w-20 sm:text-center">
                    {s.mark}
                  </span>
                  <span>
                    <span className="block text-lg font-bold">{s.title}</span>
                    <span className="mt-1 block leading-relaxed text-muted">{s.text}</span>
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Panel>

      {/* Keunggulan */}
      <Panel tone="kr-white" id="keunggulan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="side-photo relative min-h-[22rem] overflow-hidden rounded-[1.25rem] bg-kr-dark sm:rounded-[1.5rem]">
            <Image src="/stock/es-gelas.jpg" alt="Es batu dijatuhkan ke dalam gelas berisi air" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <div className="split-pad py-10 lg:py-14">
            <SectionHead chip="Keunggulan" chipClass={KR_CHIP} title="Bersih, tahan lama, harga termurah." />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <StaggerItem key={f.title} className="group h-full rounded-3xl bg-kr-cream p-6 transition duration-300 hover:bg-kr-dark hover:text-white">
                  <IconBadge icon={f.icon} className="bg-kr text-kr-dark group-hover:bg-kr-glow" />
                  <h3 className="mt-5 text-lg font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted transition-colors group-hover:text-white/80">{f.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-6">
              <p className="text-sm font-bold text-kr-dark">Cocok untuk</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {AUDIENCE.map((a) => (
                  <span key={a.label} className="inline-flex items-center gap-2 rounded-full bg-kr-soft px-4 py-2 text-sm font-semibold text-kr-ink">
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
      <Panel tone="kr-dark" id="agen" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead
              dark
              chip="Jadi agen"
              chipClass={KR_CHIP_DARK}
              title="Beli 10, bonus 1 kantong."
              description="Punya warung, kedai minuman, atau ingin berjualan es? Gabung jadi agen AJ Kristal dan dapatkan bonus 1 kantong untuk pembelian 10 bungkus."
            />
            <Reveal className="mt-8 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
              <div aria-hidden className="grid grid-cols-6 gap-2 sm:grid-cols-11">
                {Array.from({ length: AGENT_MIN_QTY }, (_, i) => (
                  <span key={i} className="grid aspect-square place-items-center rounded-xl bg-white/10 text-white">
                    <Snowflake className="size-4" />
                  </span>
                ))}
                <span className="grid aspect-square place-items-center rounded-xl bg-kr text-kr-dark">
                  <Gift className="size-4" />
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-white/90">
                Beli 10 bungkus <span className="text-kr-glow">+ bonus 1 kantong</span>
              </p>
            </Reveal>
            <Stagger className="mt-3 grid gap-2">
              {AGENT_PERKS.map((p) => (
                <StaggerItem key={p} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3.5 ring-1 ring-white/10">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-kr text-kr-dark">
                    <Check className="size-3.5" />
                  </span>
                  <span className="font-semibold">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={AGENT_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-kr text-kr-dark hover:bg-kr-glow">
                <SiWhatsapp className="size-4" />
                Daftar jadi agen
              </a>
              <a href={SOCIALS.kristal.instagram} target="_blank" rel="noopener noreferrer" className="btn press bg-white/10 text-white ring-1 ring-white/20 hover:bg-white hover:text-kr-dark">
                <SiInstagram className="size-4" />
                @eskristal_aj
              </a>
            </div>
          </div>
          <Reveal delay={0.1} className="side-photo relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/es-teh.jpg" alt="Segelas es teh dingin dengan irisan jeruk nipis" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-4 rounded-2xl bg-white p-4 text-kr-dark shadow-lg sm:inset-x-4 sm:bottom-4">
              <IconBadge icon={Truck} className="bg-kr text-kr-dark" />
              <p className="text-sm leading-snug text-muted">
                <span className="block font-bold text-kr-dark">Gratis antar se-Kota Jambi</span>
                Stok es untuk usaha Anda diantar sampai tujuan.
              </p>
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* Cara pesan */}
      <Panel tone="kr-white" id="pesan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead chip="Cara pesan" chipClass={KR_CHIP} title="Tiga langkah, es sampai." />
            <Stagger className="mt-8 grid gap-2">
              {STEPS.map((s, i) => (
                <StaggerItem key={s.title} className="flex items-start gap-4 rounded-3xl bg-kr-cream p-5">
                  <NumberBadge n={i + 1} className="size-11 bg-kr-dark text-white" />
                  <span>
                    <span className="flex items-center gap-2 text-lg font-bold">
                      <s.icon className="size-5 text-kr-deep" />
                      {s.title}
                    </span>
                    <span className="mt-1 block leading-relaxed text-muted">{s.description}</span>
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-kr-deep text-white hover:bg-kr-dark">
                <SiWhatsapp className="size-4" />
                Chat WhatsApp
              </a>
              <a
                href={SOCIALS.kristal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn press bg-kr-cream text-kr-dark ring-1 ring-kr/15 hover:bg-kr-soft"
              >
                <SiInstagram className="size-4" />
                @eskristal_aj
              </a>
            </div>
          </div>
          <Reveal delay={0.1} className="flex min-h-[24rem] flex-col overflow-hidden rounded-[1.25rem] bg-kr sm:rounded-[1.5rem]">
            <div className="relative mx-6 mt-6 min-h-[15rem] flex-1">
              <Image src="/Logo/LogoAjKristal.jpeg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-contain" />
            </div>
            <dl className="m-3 grid gap-3 rounded-2xl bg-white p-5 text-kr-dark shadow-lg sm:m-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted">WhatsApp admin</dt>
                <dd className="font-bold">{KRISTAL_PHONE}</dd>
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
    <article className="flex h-full flex-col rounded-3xl bg-white p-2 ring-1 ring-kr/10">
      <Tilt innerClassName="overflow-hidden rounded-2xl bg-kr-soft" max={4}>
        <div className="relative aspect-[4/3]">
          <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width:768px) 32vw, 100vw" className="object-cover" style={{ objectPosition: product.imagePosition }} />
          <span className="absolute left-3 top-3 rounded-full bg-kr px-3.5 py-1.5 text-sm font-extrabold text-kr-dark shadow-lg">{product.size}</span>
        </div>
      </Tilt>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.uses.map((u) => (
            <span key={u} className="rounded-full bg-kr-soft px-3 py-1.5 text-xs font-semibold text-kr-ink">
              {u}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div role="group" aria-label={`Jumlah ${product.name}`} className="flex items-center rounded-full bg-kr-cream p-1 ring-1 ring-kr/10">
              <button
                type="button"
                onClick={() => change(-1)}
                disabled={qty <= 1}
                aria-label={`Kurangi ${product.name}`}
                className="grid size-9 place-items-center rounded-full bg-white text-kr-dark transition hover:bg-kr-dark hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-kr-dark"
              >
                <Minus className="size-4" />
              </button>
              <span aria-live="polite" className="min-w-[4.5rem] text-center text-sm font-bold tabular-nums">
                {qty} {product.unit}
              </span>
              <button
                type="button"
                onClick={() => change(1)}
                aria-label={`Tambah ${product.name}`}
                className="grid size-9 place-items-center rounded-full bg-white text-kr-dark transition hover:bg-kr-dark hover:text-white"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-kr-ink">
              <BadgePercent className="size-4" />
              Termurah di Jambi
            </span>
          </div>

          <AnimatePresence initial={false}>
            {agent && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <span className="mt-3 flex items-center gap-2 rounded-2xl bg-kr-soft px-4 py-3 text-sm font-semibold text-kr-ink">
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
            aria-label={`Pesan ${qty} ${product.unit} ${product.name} via WhatsApp`}
            className="btn press mt-4 w-full bg-kr-deep px-4 text-white hover:bg-kr-dark"
          >
            <SiWhatsapp className="size-4" />
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
