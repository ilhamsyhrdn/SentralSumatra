import { useState, type ChangeEvent, type ComponentType, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, CircleCheckBig, Clock, MapPin, Navigation, Phone, Send } from "lucide-react";
import { SiInstagram, SiShopee, SiTiktok } from "react-icons/si";
import { Seo } from "@/components/common/Seo";
import { PageIntro } from "@/components/common/PageIntro";
import { Chip, IconBadge, Panel } from "@/components/ui-kit";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CONTACT, SOCIALS } from "@/data/site";
import { BATANGHARI_PHONE, BATANGHARI_WA } from "@/data/batanghari";
import { DIOCCA_PHONE, DIOCCA_WA } from "@/data/diocca";
import { STORES, getStore } from "@/data/stores";
import { cn, waLink } from "@/lib/utils";

const TOPICS = ["Umum (Sentral Sumatra)", "Pengaduan", ...STORES.map((s) => s.name)];
const EMPTY_FORM = { name: "", phone: "", topic: TOPICS[0], subject: "", message: "" };

const fieldClass =
  "w-full rounded-2xl border border-black/10 bg-soft px-4 py-3.5 text-ink placeholder:text-muted/80 transition duration-200 focus:border-leaf focus:bg-white focus:outline-none focus:ring-4 focus:ring-leaf/20";

const SOCIAL_PILLS = [
  { brand: "AJ Kristal", label: "@eskristal_aj", href: SOCIALS.kristal.instagram, icon: SiInstagram },
  { brand: "Diocca", label: "@diocca.id", href: SOCIALS.diocca.instagram, icon: SiInstagram },
  { brand: "Diocca", label: "@diocca", href: SOCIALS.diocca.tiktok, icon: SiTiktok },
  { brand: "Diocca", label: "Shopee", href: SOCIALS.diocca.shopee, icon: SiShopee },
  { brand: "Batanghari", label: "@batanghaririver", href: SOCIALS.batanghari.instagram, icon: SiInstagram },
  { brand: "Batanghari", label: "@batanghaririver", href: SOCIALS.batanghari.tiktok, icon: SiTiktok },
];

const INFO = [
  { icon: MapPin, label: "Alamat", value: CONTACT.addressLines.join(", "), href: CONTACT.mapsLink, wide: true },
  { icon: Phone, label: "WhatsApp utama (es kristal, pengaduan, dan lainnya)", value: CONTACT.phoneDisplay, href: `https://wa.me/${CONTACT.wa}` },
  { icon: getStore("batanghari-river").icon, label: "Pemesanan sabun & parfum laundry", value: BATANGHARI_PHONE, href: `https://wa.me/${BATANGHARI_WA}` },
  { icon: getStore("diocca").icon, label: "Pemesanan Diocca", value: DIOCCA_PHONE, href: `https://wa.me/${DIOCCA_WA}` },
  { icon: Clock, label: "Jam operasional", value: CONTACT.hours.map((h) => `${h.day}: ${h.time}`).join(" · ") },
];

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Nama = ${form.name}`,
      `Nomor Telepon = ${form.phone}`,
      `Tujuan = ${form.topic}`,
      `Subjek = ${form.subject}`,
      `Pesan = ${form.message}`,
    ]
      .join("\n");
    // Pesan untuk unit tertentu langsung ke WhatsApp unit itu; umum & pengaduan ke WhatsApp utama
    const target = STORES.find((s) => s.name === form.topic)?.wa ?? CONTACT.wa;
    window.open(waLink(target, text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Hubungi Kami"
        description="Hubungi Sentral Sumatra di Kota Jambi melalui WhatsApp atau kunjungi lokasi kami. Kami siap membantu pemesanan, kemitraan, dan pengaduan."
      />

      <PageIntro
        chip="Hubungi kami"
        title="Mari"
        accent="bicara."
        description="Punya pertanyaan soal produk, mau pesan dalam jumlah besar, tertarik bermitra, atau ingin menyampaikan pengaduan? Tim kami siap membantu lewat WhatsApp."
        aside={
          <Stagger className="grid h-full gap-2 sm:grid-cols-2 sm:gap-3">
            {INFO.map(({ wide, ...item }) => (
              <StaggerItem key={item.label} className={cn("h-full", wide && "sm:col-span-2")}>
                <InfoCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        }
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {SOCIAL_PILLS.map(({ brand, label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="press group inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white active:scale-95"
            >
              <Icon className="size-4" />
              {label}
              <span className="font-medium text-muted transition-colors group-hover:text-white">· {brand}</span>
            </a>
          ))}
        </div>
      </PageIntro>

      <Panel tone="soft" className="p-2 sm:p-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="h-full rounded-[1.25rem] bg-white p-6 sm:rounded-[1.5rem] sm:p-10">
              <Chip>Formulir</Chip>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Kirim pesan</h2>
              <p className="mt-2 text-muted">
                Pesan untuk unit usaha diteruskan ke WhatsApp unit tersebut. Pertanyaan umum dan pengaduan diteruskan ke
                WhatsApp utama kami ({CONTACT.phoneDisplay}).
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Nama lengkap" htmlFor="name">
                  <input id="name" name="name" required maxLength={80} autoComplete="name" value={form.name} onChange={onChange} placeholder="Nama Anda" className={fieldClass} />
                </Field>
                <Field label="Nomor WhatsApp" htmlFor="phone">
                  <input id="phone" name="phone" type="tel" required maxLength={20} autoComplete="tel" value={form.phone} onChange={onChange} placeholder="0812 3456 7890" className={fieldClass} />
                </Field>
                <Field label="Tujuan" htmlFor="topic" className="sm:col-span-2">
                  <div className="relative">
                    <select id="topic" name="topic" value={form.topic} onChange={onChange} className={cn(fieldClass, "appearance-none pr-10")}>
                      {TOPICS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink" />
                  </div>
                </Field>
                <Field label="Subjek" htmlFor="subject" className="sm:col-span-2">
                  <input id="subject" name="subject" required maxLength={120} value={form.subject} onChange={onChange} placeholder="Perihal pesan Anda" className={fieldClass} />
                </Field>
                <Field label="Pesan" htmlFor="message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tulis pesan Anda di sini..."
                    className={cn(fieldClass, "resize-none")}
                  />
                </Field>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <span className="mt-6 flex items-start gap-3 rounded-2xl bg-leaf-soft p-4 text-sm font-medium text-leaf-ink">
                      <CircleCheckBig className="mt-0.5 size-5 shrink-0" />
                      Pesan sudah disiapkan di WhatsApp. Tekan kirim di WhatsApp untuk menyelesaikannya.
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>

              <button type="submit" className="btn press group mt-8 w-full bg-ink py-4 text-base text-white hover:bg-teal">
                Kirim via WhatsApp
                <Send className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] bg-canvas sm:rounded-[1.5rem]">
            <iframe
              src={CONTACT.mapsEmbed}
              title="Peta lokasi Sentral Sumatra"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute inset-x-3 bottom-3 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-lg sm:inset-x-4 sm:bottom-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-snug text-muted">
                <span className="block font-bold text-ink">Lokasi kami</span>
                {CONTACT.addressLines[1]}
              </p>
              <a href={CONTACT.mapsLink} target="_blank" rel="noopener noreferrer" className="btn press shrink-0 bg-ink text-white hover:bg-teal">
                <Navigation className="size-4" />
                Buka Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </Panel>
    </>
  );
}

function InfoCard({ icon, label, value, href }: { icon: ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const body = (
    <>
      <span className="flex items-start justify-between">
        <IconBadge icon={icon} className="bg-ink text-mint group-hover:bg-mint group-hover:text-ink" />
        {href && <ArrowUpRight className="size-5 text-ink transition duration-500 group-hover:rotate-45" />}
      </span>
      <span className="mt-auto block pt-6">
        <span className="block text-sm font-medium text-muted">{label}</span>
        <span className="mt-1 block font-semibold leading-snug">{value}</span>
      </span>
    </>
  );
  const cls = "group flex h-full min-h-40 flex-col rounded-[1.25rem] bg-soft p-5 transition duration-300 hover:bg-white hover:shadow-lg sm:rounded-[1.5rem] sm:p-6";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cn(cls, "press")}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

function Field({ label, htmlFor, hint, className, children }: { label: string; htmlFor: string; hint?: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 flex items-center justify-between text-sm font-semibold text-ink">
        {label}
        {hint && <span className="text-xs font-medium text-muted">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
