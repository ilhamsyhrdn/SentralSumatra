import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { BadgePercent, Flower2, MessageCircle, PackageCheck, ShieldCheck, ShoppingBasket, Sparkles, WashingMachine } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { Chip, IconBadge, NumberBadge, Panel, SectionHead } from "@/components/ui-kit";
import { EASE_OUT, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { BubblesScene } from "@/components/three";
import { BATANGHARI_PHONE, BATANGHARI_WA, SOAP_LINES, soapOrderText, type SoapLine } from "@/data/batanghari";
import { CONTACT, SOCIALS } from "@/data/site";
import { cn, formatRupiah, waLink } from "@/lib/utils";

const ORDER_WA = waLink(BATANGHARI_WA, "Halo kak, saya ingin memesan sabun Batanghari River");
const SIZES = SOAP_LINES[0].variants.map((v) => v.size);

const FEATURES = [
  { icon: ShieldCheck, title: "Antibakteri", description: "Formula antibakteri pada detergen cair untuk pakaian yang lebih higienis." },
  { icon: Sparkles, title: "Angkat noda bandel", description: "Mengangkat noda membandel dan bau apek tanpa merusak serat kain." },
  { icon: BadgePercent, title: "Hemat hingga 50%", description: "Kualitas terjamin dengan harga jauh lebih hemat, mulai Rp 2.000." },
  { icon: Flower2, title: "Wangi tahan lama", description: "Aroma Rose, Jeruk Nipis, dan Fresh Apel yang segar sepanjang hari." },
];

const STEPS = [
  { icon: ShoppingBasket, title: "Pilih produk & ukuran", description: "Tentukan jenis sabun dan kemasan: 5 L, 550 ml, atau 120 ml." },
  { icon: MessageCircle, title: "Chat admin", description: "Klik tombol pesan — format pesanan otomatis terisi sesuai pilihan." },
  { icon: PackageCheck, title: "Konfirmasi & terima", description: "Admin mengonfirmasi stok, total harga, dan pengiriman atau pengambilan." },
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
        title="Batanghari River — Sabun & Pembersih Rumah Tangga"
        description="Sabun cuci baju, sabun cuci piring, pembersih lantai, dan pewangi pakaian Batanghari River produksi Jambi. Kemasan 5 L, 550 ml, dan 120 ml mulai Rp 2.000."
      />

      {/* Hero */}
      <Panel tone="ink" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center split-pad py-10">
            <motion.div {...fadeUp(0)}>
              <Chip dark>Produksi Jambi · sabun & pembersih</Chip>
            </motion.div>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl xl:text-7xl 2xl:text-[5.4rem]">
              <WordsReveal text="Bersih maksimal," /> <WordsReveal text="wangi tahan lama." delay={0.18} className="text-mint" />
            </h1>
            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-lg leading-relaxed 2xl:max-w-2xl 2xl:text-xl text-white/85">
              Sabun cuci baju, cuci piring, pembersih lantai, dan pewangi pakaian berkualitas dengan harga hemat — mengangkat
              noda membandel sambil menjaga kelembutan kain.
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
                ["4", "Jenis produk"],
                ["3", "Pilihan ukuran"],
                ["2rb", "Harga mulai"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse rounded-2xl bg-white/[0.08] px-4 py-3.5 ring-1 ring-white/10">
                  <dt className="text-sm text-white/80">{l}</dt>
                  <dd className="text-2xl font-extrabold tracking-tight sm:text-3xl">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] sm:min-h-[30rem] sm:rounded-[1.5rem]">
            <Image src="/background/backgroundSabun.jpg" alt="Rangkaian produk Batanghari River" fill priority sizes="(min-width:1024px) 48vw, 100vw" className="object-cover" />
            <BubblesScene className="absolute inset-0" count={12} />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 sm:bottom-4 sm:left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-lg">
                <ShieldCheck className="size-4 text-teal" />
                Antibakteri
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-sm font-bold text-white shadow-lg">
                <BadgePercent className="size-4 text-mint" />
                Hemat s.d. 50%
              </span>
            </div>
          </div>
        </div>
      </Panel>

      {/* Keunggulan */}
      <Panel tone="white" id="keunggulan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/laundry-folded.jpg" alt="Tumpukan pakaian bersih yang sudah dilipat" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <div className="split-pad py-10 lg:py-14">
            <SectionHead chip="Keunggulan" title="Bau apek dan noda bandel? Lewat." />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <StaggerItem key={f.title} className="group h-full rounded-3xl bg-soft p-6 transition duration-300 hover:bg-ink hover:text-white">
                  <IconBadge icon={f.icon} className="bg-teal text-white group-hover:bg-mint group-hover:text-ink" />
                  <h3 className="mt-5 text-lg font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted transition-colors group-hover:text-white/80">{f.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-3 flex items-start gap-4 rounded-3xl bg-teal p-6 text-white">
              <IconBadge icon={WashingMachine} className="bg-white/15 text-white" />
              <p className="leading-relaxed text-white/90">
                <span className="font-bold text-white">Detergen cair tersedia 2 jenis:</span> busa melimpah untuk cuci tangan, dan
                matic (sedikit busa) yang aman untuk mesin cuci.
              </p>
            </Reveal>
          </div>
        </div>
      </Panel>

      {/* Produk */}
      <Panel tone="soft" id="produk">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Produk"
            title="Pilih produk & ukurannya."
            description="Klik ukuran kemasan untuk melihat harga, lalu pesan — format pesanan otomatis terisi."
          />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {SOAP_LINES.map((line) => (
              <StaggerItem key={line.id} className="h-full">
                <SoapCard line={line} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* Daftar harga */}
      <Panel tone="white" id="harga">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Daftar harga"
            title="Harga transparan."
            description="Harga dapat berubah sewaktu-waktu. Untuk pembelian dalam jumlah besar atau reseller, silakan hubungi admin."
          />
          <Reveal className="mt-10">
            <div className="grid gap-2 sm:grid-cols-2 lg:hidden">
              {SOAP_LINES.map((l) => (
                <div key={l.id} className="rounded-3xl bg-soft p-5">
                  <p className="font-bold">{l.name}</p>
                  <p className="text-sm text-muted">Wangi {l.aroma}</p>
                  <dl className="mt-4 grid grid-cols-3 gap-2">
                    {l.variants.map((v) => (
                      <div key={v.size} className="flex flex-col-reverse rounded-2xl bg-white px-3 py-2.5">
                        <dt className="text-xs font-medium text-muted">{v.size}</dt>
                        <dd className="whitespace-nowrap text-[0.82rem] font-extrabold sm:text-sm">{formatRupiah(v.price)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <div className="hidden overflow-hidden rounded-3xl bg-soft lg:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-ink text-white">
                    <th scope="col" className="px-8 py-5 text-sm font-semibold">Produk</th>
                    <th scope="col" className="px-8 py-5 text-sm font-semibold">Aroma</th>
                    {SIZES.map((s) => (
                      <th key={s} scope="col" className="px-8 py-5 text-right text-sm font-semibold">
                        {s}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SOAP_LINES.map((l) => (
                    <tr key={l.id} className="border-t border-line transition-colors hover:bg-white">
                      <th scope="row" className="px-8 py-5 text-lg font-bold">
                        {l.name}
                      </th>
                      <td className="px-8 py-5 text-muted">{l.aroma}</td>
                      {l.variants.map((v) => (
                        <td key={v.size} className="whitespace-nowrap px-8 py-5 text-right text-lg font-extrabold">
                          {formatRupiah(v.price)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* Cara pesan */}
      <Panel tone="teal" id="pesan" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.2fr_1fr]">
          <div className="split-pad py-10 lg:py-14">
            <SectionHead dark chip="Cara pesan" title="Tiga langkah mudah." />
            <Stagger className="mt-8 grid gap-2">
              {STEPS.map((s, i) => (
                <StaggerItem key={s.title} className="flex items-start gap-4 rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
                  <NumberBadge n={i + 1} className="size-11 bg-white text-ink" />
                  <span>
                    <span className="flex items-center gap-2 text-lg font-bold">
                      <s.icon className="size-5 text-mint" />
                      {s.title}
                    </span>
                    <span className="mt-1 block leading-relaxed text-white/90">{s.description}</span>
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="btn press bg-white text-ink hover:bg-mint">
                <SiWhatsapp className="size-4" />
                Chat WhatsApp
              </a>
              <a href={SOCIALS.batanghari.instagram} target="_blank" rel="noopener noreferrer" className="btn press bg-ink text-white hover:bg-black">
                <SiInstagram className="size-4" />
                @batanghaririver
              </a>
            </div>
          </div>
          <Reveal delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/laundry-basket.jpg" alt="Keranjang berisi cucian bersih" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <dl className="absolute inset-x-3 bottom-3 grid gap-3 rounded-2xl bg-white p-5 text-ink shadow-lg sm:inset-x-4 sm:bottom-4 sm:grid-cols-2">
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

function SoapCard({ line }: { line: SoapLine }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const variant = line.variants[sizeIndex];

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-2">
      <Tilt innerClassName="overflow-hidden rounded-2xl bg-soft" max={4}>
        <div className="relative aspect-square">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={variant.size}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="absolute inset-0"
            >
              <Image
                src={variant.image}
                alt={`Batanghari River ${line.name} ${variant.size}`}
                fill
                sizes="(min-width:1280px) 24vw, (min-width:640px) 48vw, 100vw"
                className={cn("object-cover", variant.size !== "5 L" && "object-bottom")}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Tilt>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <Chip className="normal-case tracking-normal">Wangi {line.aroma}</Chip>
        <h3 className="mt-3 text-xl font-bold tracking-tight">{line.name}</h3>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{line.description}</p>

        <div className="mt-auto pt-5">
          <LayoutGroup id={`size-${line.id}`}>
            <div role="radiogroup" aria-label={`Ukuran ${line.name}`} className="grid grid-cols-3 rounded-full bg-soft p-1">
              {line.variants.map((v, i) => {
                const active = i === sizeIndex;
                return (
                  <button
                    key={v.size}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setSizeIndex(i)}
                    className={cn("relative rounded-full py-2.5 text-sm font-semibold transition-colors duration-300", active ? "text-white" : "text-ink hover:text-teal")}
                  >
                    {active && <motion.span layoutId={`size-pill-${line.id}`} className="absolute inset-0 bg-teal" style={{ borderRadius: 9999 }} transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                    <span className="relative">{v.size}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="relative h-8 flex-1 overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.p
                  key={variant.size}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="text-2xl font-extrabold tracking-tight"
                >
                  {formatRupiah(variant.price)}
                </motion.p>
              </AnimatePresence>
            </div>
            <a
              href={waLink(BATANGHARI_WA, soapOrderText(line, variant.size))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pesan ${line.name} ${variant.size} via WhatsApp`}
              className="btn press shrink-0 bg-ink px-5 text-white hover:bg-teal"
            >
              <SiWhatsapp className="size-4" />
              Pesan
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
