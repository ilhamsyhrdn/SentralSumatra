import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { BadgeCheck, BadgePercent, CandyOff, Expand, MessageCircle, Milk, ShoppingBasket, Star, Truck, Zap } from "lucide-react";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { DioccaLogo } from "@/components/common/Logos";
import { Accordion } from "@/components/common/Accordion";
import { Lightbox } from "@/components/common/Lightbox";
import { Chip, IconBadge, NumberBadge, Panel, SectionHead, StatGrid } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { DIOCCA_FAQ, DIOCCA_PHONE, DIOCCA_PRODUCTS, DIOCCA_TESTIMONIALS, DIOCCA_WA, dioccaOrderText } from "@/data/diocca";
import { SOCIALS } from "@/data/site";
import { cn, waLink } from "@/lib/utils";

const ORDER_WA = waLink(DIOCCA_WA, dioccaOrderText());
const DIO_CHIP = "bg-dio-mint text-dio-dark";

const HERO_STATS = [
  { value: "80%", label: "Susu murni" },
  { value: "0%", label: "Sukrosa" },
  { value: "Rendah", label: "Kalori" },
];

const PERKS = [
  { icon: Milk, title: "80% susu murni", description: "Kandungan susu murni hingga 80% (Original) dan 77% (Cokelat)." },
  { icon: Zap, title: "Rendah kalori", description: "Susu original dan cokelat yang rendah kalori, ringan untuk diminum setiap hari." },
  { icon: CandyOff, title: "0% sukrosa", description: "Tanpa tambahan gula pasir, cocok untuk Anda yang sedang menjaga asupan gula." },
  { icon: BadgeCheck, title: "Terdaftar BPOM", description: "Susu Diocca diproduksi higienis oleh CV Sentral Produksi Sumatra." },
];

const STEPS = [
  { icon: ShoppingBasket, title: "Pilih produk", description: "Susu original, susu cokelat, cokelat premium, atau kopi sachet premium." },
  { icon: MessageCircle, title: "Chat admin Diocca", description: `Tekan tombol pesan atau chat ${DIOCCA_PHONE}. Admin membalas dengan harga terbaru.` },
  { icon: Truck, title: "Pesanan dikirim", description: "Setelah pesanan dikonfirmasi, produk dikirim atau bisa diambil langsung." },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE_OUT },
});

type LightboxState = { images: string[]; index: number } | null;

export default function DioccaPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const openImage = useCallback((images: string[], index: number) => setLightbox({ images, index }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const changeIndex = useCallback((index: number) => setLightbox((lb) => (lb ? { ...lb, index } : lb)), []);

  return (
    <>
      <Seo
        title="Susu Rendah Kalori, Cokelat & Kopi Premium Diocca"
        description="Diocca menghadirkan susu original dan cokelat rendah kalori dengan 80% susu murni dan 0% sukrosa, serta cokelat premium dan kopi sachet premium. Harga termurah di Jambi, pesan lewat WhatsApp."
      />

      {/* Hero */}
      <Panel tone="dio-mint" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-2">
          <div className="flex flex-col justify-center split-pad py-10">
            <motion.div {...fadeUp(0)}>
              <Chip colors="bg-white text-dio-dark">Susu, cokelat & kopi · Jambi</Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] text-dio-dark sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text="Rendah kalori," /> <WordsReveal text="tanpa tambahan gula." delay={0.18} className="text-dio" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed text-dio-dark/85 2xl:max-w-2xl 2xl:text-xl">
              Susu original dan cokelat rendah kalori dengan lebih banyak susu murni, ditambah cokelat premium dan kopi sachet
              premium. Harga termurah di Jambi, pesan langsung lewat WhatsApp.
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-dio text-white hover:bg-dio-dark">
                <SiWhatsapp className="size-4" />
                Pesan via WhatsApp
              </a>
              <a href="#menu" className="btn press bg-white text-dio-dark hover:bg-dio-dark hover:text-white">
                Lihat menu
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.6)} className="mt-10">
              <StatGrid items={HERO_STATS} className="max-w-lg" cardClass="bg-white" valueClass="text-dio" labelClass="text-dio-dark/80" />
            </motion.div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: EASE_OUT }} className="absolute inset-0">
              <Image src="/stock/milk-pour.jpg" alt="Susu segar dituang ke dalam gelas" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[50%_65%]" />
            </motion.div>
            <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-full bg-dio-dark py-2 pl-2 pr-5 shadow-lg sm:bottom-4 sm:left-4">
              <DioccaLogo size={40} className="ring-1 ring-dio-gold/40" />
              <span className="text-sm font-bold text-white">
                Harga <span className="text-dio-gold">termurah</span> di Jambi
              </span>
            </div>
          </div>
        </div>
      </Panel>

      <MenuSection onOpenImage={openImage} />

      {/* Keunggulan */}
      <Panel tone="dio-dark" id="keunggulan">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            dark
            chip="Keunggulan"
            chipClass="bg-white/10 text-dio-gold"
            title="Itulah Diocca."
            description="Empat alasan keluarga memilih susu Diocca untuk diminum setiap hari."
          />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <StaggerItem key={p.title} className="group h-full rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-dio-dark">
                <IconBadge icon={p.icon} size="lg" className="bg-dio-gold text-dio-dark group-hover:bg-dio group-hover:text-white" />
                <h3 className="mt-6 text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/80 transition-colors group-hover:text-muted">{p.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* Cerita */}
      <Panel tone="white" id="cerita" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
          <Reveal className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/kid-milk.jpg" alt="Anak kecil tertawa sambil memegang segelas susu" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[50%_30%]" />
          </Reveal>
          <div className="flex flex-col justify-center split-pad py-10 lg:py-14">
            <Reveal>
              <Chip colors={DIO_CHIP}>Cerita kami</Chip>
              <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] text-dio-dark sm:text-5xl">
                0% sukrosa, 0% perisa, <span className="text-dio">0% rasa khawatir.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Susu kami dibuat dengan kandungan terpercaya, rendah kalori, bebas gula tambahan dan pengawet, lalu dikemas
                higienis untuk menjaga kualitasnya. Jadi bisa dinikmati semua kalangan usia.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Testimonials />
            </Reveal>
          </div>
        </div>
      </Panel>

      {/* Cara pesan */}
      <Panel tone="dio-cream" id="cara-pesan">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Cara pesan"
            chipClass={DIO_CHIP}
            title={<span className="text-dio-dark">Pesan langsung lewat WhatsApp.</span>}
            description="Harga termurah di Jambi. Admin Diocca membalas dengan harga terbaru, promo, dan info pengiriman."
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(30,57,50,0.45)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <IconBadge icon={s.icon} size="lg" className="bg-dio-mint text-dio-dark group-hover:bg-dio group-hover:text-white" />
                    <NumberBadge n={i + 1} className="bg-dio-dark text-dio-gold" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-dio-dark">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-3 flex flex-col gap-5 rounded-3xl bg-dio-dark p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <span className="flex items-center gap-4">
              <IconBadge icon={SiWhatsapp} className="bg-dio-gold text-dio-dark" />
              <span>
                <span className="block text-sm text-white/75">WhatsApp admin Diocca</span>
                <span className="block text-2xl font-extrabold tracking-tight">{DIOCCA_PHONE}</span>
              </span>
            </span>
            <div className="flex flex-wrap gap-2">
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-dio-gold text-dio-dark hover:bg-white">
                <SiWhatsapp className="size-4" />
                Chat admin
              </a>
              <a href={SOCIALS.diocca.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Diocca" className="btn press bg-white/10 px-4 text-white ring-1 ring-white/20 hover:bg-white hover:text-dio-dark">
                <SiInstagram className="size-4" />
              </a>
              <a href={SOCIALS.diocca.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok Diocca" className="btn press bg-white/10 px-4 text-white ring-1 ring-white/20 hover:bg-white hover:text-dio-dark">
                <SiTiktok className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* FAQ */}
      <Panel tone="white" id="faq">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:py-20">
          <Reveal className="flex flex-col gap-6">
            <div>
              <Chip colors={DIO_CHIP}>FAQ</Chip>
              <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] text-dio-dark sm:text-5xl">Pertanyaan yang sering diajukan.</h2>
            </div>
            <div className="rounded-3xl bg-dio p-6 text-white">
              <p className="text-lg font-bold">Masih ada pertanyaan?</p>
              <p className="mt-1 text-white/85">Admin Diocca siap membantu setiap hari kerja.</p>
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press mt-5 bg-white text-dio-dark hover:bg-dio-mint">
                <SiWhatsapp className="size-4" />
                Tanya admin
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={DIOCCA_FAQ} itemClass="bg-dio-cream" activeIconClass="bg-dio text-white" />
          </Reveal>
        </div>
      </Panel>

      {/* CTA */}
      <Panel tone="dio">
        <Reveal className="container-x flex flex-col items-center py-14 text-center lg:py-20">
          <motion.div
            whileHover={{ rotate: -4, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative size-36 overflow-hidden rounded-[2rem] bg-black shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)] ring-4 ring-dio-gold/30 sm:size-44"
          >
            <Image src="/Logo/LogoDiocca.jpeg" alt="Logo Diocca" fill sizes="176px" className="scale-110 object-cover" />
          </motion.div>
          <h2 className="mt-8 text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Let&apos;s go hidup sehat.</h2>
          <p className="mt-4 max-w-xl text-lg text-white/90">Mulai kebiasaan sehat keluarga dengan susu rendah kalori tanpa tambahan gula.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-white text-dio-dark hover:bg-dio-mint">
              <SiWhatsapp className="size-4" />
              Pesan via WhatsApp
            </a>
            <a href="#menu" className="btn press bg-dio-dark text-white hover:bg-black">
              Lihat menu
            </a>
          </div>
        </Reveal>
      </Panel>

      <Lightbox images={lightbox?.images ?? []} index={lightbox?.index ?? null} alt="Foto produk Diocca" onClose={closeLightbox} onIndexChange={changeIndex} />
    </>
  );
}

function MenuSection({ onOpenImage }: { onOpenImage: (images: string[], index: number) => void }) {
  const [productId, setProductId] = useState(DIOCCA_PRODUCTS[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const v = DIOCCA_PRODUCTS.find((x) => x.id === productId)!;

  const selectProduct = (id: string) => {
    setProductId(id);
    setImageIndex(0);
  };

  return (
    <Panel tone="dio-cream" id="menu">
      <div className="container-x py-14 lg:py-20">
        <SectionHead
          chip="Menu"
          chipClass={DIO_CHIP}
          title={<span className="text-dio-dark">Empat produk, satu standar.</span>}
          description="Harga termurah di Jambi. Pilih produk, lalu pesan lewat WhatsApp untuk harga terbaru."
        />

        <LayoutGroup id="product">
          <div role="tablist" aria-label="Produk Diocca" className="mt-8 grid grid-cols-2 gap-1 rounded-[1.75rem] bg-white p-1.5 ring-1 ring-black/[0.05] sm:inline-flex sm:rounded-full">
            {DIOCCA_PRODUCTS.map((x) => {
              const active = x.id === productId;
              return (
                <button
                  key={x.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectProduct(x.id)}
                  className={cn(
                    "relative flex min-w-0 items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 text-left text-sm font-bold transition-colors duration-300",
                    active ? "text-white" : "text-dio-dark",
                  )}
                >
                  {active && <motion.span layoutId="product-pill" className="absolute inset-0 bg-dio-dark" style={{ borderRadius: 9999 }} transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                  <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/5">
                    <Image src={x.images[0]} alt="" fill sizes="40px" className={cn("object-cover", !x.illustrative && "origin-[0%_40%] scale-[2.1]")} />
                  </span>
                  <span className="relative leading-tight">{x.short}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-white p-2">
            <Tilt innerClassName="overflow-hidden rounded-2xl bg-white" max={3}>
              <button type="button" onClick={() => onOpenImage(v.images, imageIndex)} aria-label="Perbesar foto produk" className="group relative block aspect-square w-full">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={v.images[imageIndex]}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="absolute inset-0"
                  >
                    <Image src={v.images[imageIndex]} alt={`${v.name} foto ${imageIndex + 1}`} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
                {v.illustrative && (
                  <span className="absolute left-3 top-3 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dio-dark">Foto ilustrasi</span>
                )}
                <span className="absolute bottom-3 right-3 z-20 grid size-11 place-items-center rounded-full bg-dio-dark text-white shadow-lg transition duration-300 group-hover:scale-110">
                  <Expand className="size-4" />
                </span>
              </button>
            </Tilt>
            {v.images.length > 1 && (
              <div className="mt-2 grid grid-cols-5 gap-2">
                {v.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    aria-label={`Tampilkan foto ${i + 1}`}
                    aria-current={i === imageIndex}
                    className={cn(
                      "press relative aspect-square overflow-hidden rounded-xl ring-2 transition duration-300 active:scale-90",
                      i === imageIndex ? "ring-dio" : "opacity-60 ring-transparent hover:opacity-100",
                    )}
                  >
                    <Image src={src} alt="" fill sizes="110px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          <div className="rounded-3xl bg-white p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={v.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className="flex h-full flex-col"
              >
                <Chip colors={DIO_CHIP}>{v.label}</Chip>
                <h3 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] text-dio-dark sm:text-5xl">{v.name}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{v.tagline}</p>

                {v.stats && <StatGrid items={v.stats} className="mt-7" cardClass="bg-dio-mint" valueClass="text-dio" labelClass="text-dio-dark" />}

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {v.highlights.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 rounded-2xl bg-dio-cream px-4 py-3 text-[0.95rem] font-semibold text-dio-dark">
                      <Icon className="size-5 shrink-0 text-dio" />
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <p className="flex items-center gap-2 font-bold text-dio-dark">
                    <BadgePercent className="size-5 text-dio" />
                    Harga termurah di Jambi
                  </p>
                  <p className="mt-1 text-muted">Harga terbaru dan promo langsung dari admin WhatsApp Diocca.</p>
                  <a
                    href={waLink(DIOCCA_WA, dioccaOrderText(v))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn press mt-6 w-full bg-dio text-white hover:bg-dio-dark"
                  >
                    <SiWhatsapp className="size-4" />
                    Pesan {v.short} via WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = DIOCCA_TESTIMONIALS[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % DIOCCA_TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <figure onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mt-8 rounded-3xl bg-dio-cream p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-dio-gold" aria-label="Rating 5 dari 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <div className="flex gap-2">
          {DIOCCA_TESTIMONIALS.map((x, i) => (
            <button
              key={x.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Testimoni ${x.name}`}
              aria-current={i === index}
              className={cn("h-2.5 rounded-full transition-all duration-500", i === index ? "w-8 bg-dio" : "w-2.5 bg-dio-dark/30 hover:bg-dio-dark/50")}
            />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: EASE_OUT }}>
          <blockquote className="mt-4 text-lg leading-relaxed text-dio-dark">“{t.quote}”</blockquote>
          <figcaption className="mt-5 flex items-center gap-3 text-sm">
            <span className="grid size-10 place-items-center rounded-full bg-dio font-bold text-white">{t.initials}</span>
            <span>
              <span className="block font-bold text-dio-dark">{t.name}</span>
              <span className="text-muted">Ibu & pelanggan Diocca</span>
            </span>
          </figcaption>
        </motion.div>
      </AnimatePresence>
    </figure>
  );
}
