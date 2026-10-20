import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { PageIntro } from "@/components/common/PageIntro";
import { STORE_LOGOS, SentralLogo, SentralWordmark } from "@/components/common/Logos";
import { Chip, IconBadge, NumberBadge, Panel, SectionHead, StatGrid } from "@/components/ui-kit";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { STORES, getStore } from "@/data/stores";
import { SENTRAL_VALUES } from "@/data/site";
import { cn } from "@/lib/utils";

const MISSIONS = [
  "Menghadirkan produk berkualitas, higienis, dan legal dengan harga termurah di Jambi.",
  "Mendukung pertumbuhan UMKM melalui pasokan es, kemasan, dan bahan baku yang andal.",
  "Mengutamakan produksi lokal oleh anak daerah agar manfaatnya kembali ke masyarakat Jambi.",
  "Terus berinovasi dengan mendengarkan kebutuhan pelanggan.",
];

const STATS = [
  { value: "2019", label: "Mulai berdiri" },
  { value: "5", label: "Unit usaha" },
  { value: "20+", label: "Pilihan produk" },
];

const JOURNEY = [
  {
    slug: "aj-kristal",
    mark: "2019",
    title: "Berawal dari AJ Kristal",
    text: "Seorang anak Jambi lulusan Teknik Industri Universitas Brawijaya memulai semuanya dari es kristal, untuk memajukan perekonomian Provinsi Jambi. Kini AJ Kristal menjadi produsen es kristal nomor 4 di Jambi.",
  },
  {
    slug: "batanghari-river",
    mark: "2019",
    title: "Berkembang ke Batanghari River",
    text: "Masih di tahun yang sama, usahanya berkembang ke produksi sabun dan parfum laundry. Kini Batanghari River menjadi satu-satunya produksi sabun di Jambi yang berizin dan legal.",
  },
  {
    slug: "diocca",
    mark: "2019",
    title: "Lalu lahir Diocca",
    text: "Masih di 2019, hadir Diocca yang kini menyediakan susu rendah kalori tanpa tambahan gula, cokelat premium, dan kopi sachet premium.",
  },
  {
    slug: "sentral-plastik",
    mark: "Segera",
    title: "Plastik & kimia",
    text: "Sentral Plastik dan Sentral Kimia sedang disiapkan untuk kebutuhan kemasan serta bahan kimia UMKM dan industri.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Tentang Kami"
        description="Kenali Sentral Sumatra, induk usaha milik anak Jambi sejak 2019 yang menaungi AJ Kristal, Batanghari River, Diocca, Sentral Plastik, dan Sentral Kimia."
      />

      <PageIntro
        chip="Tentang kami"
        title="Tumbuh dari Jambi,"
        accent="melayani Sumatra."
        description="Sentral Sumatra didirikan pada 2019 oleh seorang anak Jambi lulusan Teknik Industri Universitas Brawijaya. Kini menaungi lima unit, dari es kristal sampai bahan kimia, dengan satu janji yang sama, yaitu produk berkualitas dengan harga termurah di Jambi."
        aside={
          <div className="grid h-full min-h-[26rem] grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
            <div className="relative row-span-2 overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
              <Image src="/stock/es-kristal.jpg" alt="Es kristal AJ Kristal" fill priority sizes="(min-width:1024px) 22vw, 50vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
              <Image src="/background/backgroundSabun.jpg" alt="Produk sabun Batanghari River" fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
              <Image src="/stock/milk-pour.jpg" alt="Susu dituang ke gelas" fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover" />
            </div>
          </div>
        }
      >
        <StatGrid items={STATS} className="mt-10 max-w-lg" cardClass="bg-soft" labelClass="text-muted" />
      </PageIntro>

      {/* Cerita */}
      <Panel tone="soft" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="split-pad py-10 lg:py-14">
            <Chip>Cerita kami</Chip>
            <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-5xl">Berawal dari anak Jambi, untuk Jambi.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Sentral Sumatra lahir dari keyakinan seorang anak Jambi lulusan Teknik Industri Universitas Brawijaya, bahwa
                kebutuhan sehari-hari orang Jambi bisa dipenuhi oleh usaha dari Jambi sendiri. Tujuannya satu, yaitu memajukan
                perekonomian Provinsi Jambi.
              </p>
              <p>
                Semuanya dimulai tahun 2019 dari <strong className="font-semibold text-ink">AJ Kristal</strong>, yang kini
                menjadi produsen es kristal nomor 4 di Jambi. Di tahun yang sama usahanya berkembang ke{" "}
                <strong className="font-semibold text-ink">Batanghari River</strong>, produksi sabun dan parfum laundry yang
                kini satu-satunya di Jambi yang sudah berizin dan legal, lalu ke{" "}
                <strong className="font-semibold text-ink">Diocca</strong> dengan susu rendah kalori, cokelat premium, dan kopi
                sachet premium.
              </p>
              <p>
                Berikutnya <strong className="font-semibold text-ink">Sentral Plastik</strong> dan{" "}
                <strong className="font-semibold text-ink">Sentral Kimia</strong> sedang disiapkan untuk kebutuhan kemasan dan
                bahan kimia bagi UMKM dan industri.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="side-photo relative min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
            <Image src="/stock/warehouse.jpg" alt="Gudang distribusi" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg sm:inset-x-4 sm:bottom-4">
              <SentralLogo size={52} className="ring-1 ring-black/5" />
              <p className="text-sm leading-snug text-muted">
                <span className="block font-bold text-ink">Satu pintu untuk kebutuhan Anda</span>
                Rumah tangga hingga pelaku usaha.
              </p>
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* Perjalanan */}
      <Panel tone="white">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Perjalanan kami"
            title="Berawal dari es kristal, kini lima unit."
            description="Semua unit lahir dari satu pendiri, seorang anak Jambi lulusan Teknik Industri Universitas Brawijaya."
          />
          <Stagger className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {JOURNEY.map((j) => {
              const store = getStore(j.slug);
              const Logo = STORE_LOGOS[j.slug];
              return (
                <StaggerItem key={j.slug} className="h-full">
                  <Link href={store.href} className="group flex h-full flex-col rounded-3xl bg-soft p-6 transition duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white">
                    <span className="flex items-center justify-between gap-3">
                      {Logo ? (
                        <Logo size={56} className="ring-1 ring-black/5" />
                      ) : (
                        <IconBadge icon={store.icon} size="lg" className="bg-ink text-mint group-hover:bg-mint group-hover:text-ink" />
                      )}
                      <span className="rounded-full bg-white px-3.5 py-1.5 text-sm font-extrabold text-ink">{j.mark}</span>
                    </span>
                    <span className="mt-6 text-xl font-bold tracking-tight">{j.title}</span>
                    <span className="mt-2 leading-relaxed text-muted transition-colors group-hover:text-white/80">{j.text}</span>
                    <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-leaf-ink transition-colors group-hover:text-mint">
                      Kunjungi {store.name}
                      <ArrowUpRight className="size-4 transition duration-500 group-hover:rotate-45" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Panel>

      {/* Visi & misi */}
      <Panel tone="ink">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-20">
          <Reveal>
            <Chip dark>Visi & misi</Chip>
            <p className="mt-6 text-3xl font-semibold leading-[1.2] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]">
              “Menjadi pusat penyedia kebutuhan rumah tangga dan usaha yang <span className="text-mint">paling dipercaya di Sumatra.</span>”
            </p>
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {MISSIONS.map((m, i) => (
              <StaggerItem key={m} className="flex h-full flex-col gap-4 rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/10">
                <NumberBadge n={i + 1} className="bg-mint text-ink" />
                <p className="text-lg leading-relaxed text-white/90">{m}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* Nilai */}
      <Panel tone="white">
        <div className="container-x py-14 lg:py-20">
          <SectionHead
            chip="Nilai kami"
            title="Prinsip di balik setiap produk."
            description="Empat nilai yang kami pegang di semua unit usaha, dari produksi hingga ke tangan pelanggan."
          />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SENTRAL_VALUES.map((v) => (
              <StaggerItem key={v.title} className="group h-full rounded-3xl bg-soft p-6 transition duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white">
                <IconBadge icon={v.icon} size="lg" className="bg-ink text-mint group-hover:bg-mint group-hover:text-ink" />
                <h3 className="mt-6 text-xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted transition-colors group-hover:text-white/80">{v.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Panel>

      {/* Struktur usaha */}
      <Panel tone="soft">
        <div className="container-x py-14 lg:py-20">
          <SectionHead chip="Struktur usaha" title="Satu induk, lima unit usaha." />

          <Reveal className="mt-10 flex flex-col items-center">
            <div className="flex items-center gap-4 rounded-full bg-white py-2.5 pl-2.5 pr-7 shadow-sm ring-1 ring-black/[0.05]">
              <SentralLogo size={56} className="ring-1 ring-black/5" />
              <SentralWordmark />
            </div>
            <div className="h-8 w-px bg-ink/25" />
          </Reveal>

          {/* Flex agar baris sisa di layar sedang tetap di tengah; 5 kolom sejajar mulai xl */}
          <div className="relative flex flex-wrap justify-center gap-3 xl:pt-8">
            {/* Garis penghubung antar-kolom; memperhitungkan 4 gap 0.75rem */}
            <div
              aria-hidden
              className="absolute left-[calc((100%-3rem)/10)] right-[calc((100%-3rem)/10)] top-0 hidden h-px bg-ink/25 xl:block"
            />
            {STORES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.06}
                className="relative w-full sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)] xl:w-[calc((100%-3rem)/5)]"
              >
                <div aria-hidden className="absolute -top-8 left-1/2 hidden h-8 w-px bg-ink/25 xl:block" />
                <Link href={s.href} className="group block h-full">
                  <Tilt className="h-full" innerClassName="flex h-full flex-col rounded-3xl bg-white p-2">
                    <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image src={s.image} alt={s.name} fill sizes="(min-width:1280px) 19vw, (min-width:1024px) 32vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                      <span
                        className={cn(
                          "absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-xs font-bold",
                          s.status === "available" ? "bg-white text-leaf-ink" : "bg-ink text-white",
                        )}
                      >
                        {s.status === "available" ? "Tersedia" : "Segera hadir"}
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col p-4">
                      <span className="flex items-start justify-between gap-2">
                        <span className="text-xl font-bold tracking-tight">{s.name}</span>
                        <ArrowUpRight className="size-5 shrink-0 text-ink transition duration-500 group-hover:rotate-45" />
                      </span>
                      <span className="mt-1 text-sm text-muted">{s.tagline}</span>
                      <span className="mt-4 flex flex-wrap gap-1.5">
                        {s.products.map((p) => (
                          <span key={p} className="rounded-full bg-soft px-2.5 py-1 text-xs font-semibold text-ink">
                            {p}
                          </span>
                        ))}
                      </span>
                    </span>
                  </Tilt>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Panel>
    </>
  );
}
