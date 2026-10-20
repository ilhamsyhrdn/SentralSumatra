import Link from "next/link";
import { SiInstagram, SiShopee, SiTiktok } from "react-icons/si";
import { SentralLogo, SentralWordmark } from "@/components/common/Logos";
import { CONTACT, SENTRAL_NAV, SOCIALS } from "@/data/site";
import { STORES } from "@/data/stores";
import { BATANGHARI_PHONE, BATANGHARI_WA } from "@/data/batanghari";
import { DIOCCA_PHONE, DIOCCA_WA } from "@/data/diocca";

const WA_LINES = [
  { phone: CONTACT.phoneDisplay, wa: CONTACT.wa, note: "Es kristal, pengaduan & lainnya" },
  { phone: BATANGHARI_PHONE, wa: BATANGHARI_WA, note: "Sabun & parfum laundry" },
  { phone: DIOCCA_PHONE, wa: DIOCCA_WA, note: "Diocca" },
];

const SOCIAL_LINKS = [
  { label: "Instagram AJ Kristal", href: SOCIALS.kristal.instagram, icon: SiInstagram },
  { label: "Instagram Diocca", href: SOCIALS.diocca.instagram, icon: SiInstagram },
  { label: "TikTok Diocca", href: SOCIALS.diocca.tiktok, icon: SiTiktok },
  { label: "Shopee Diocca", href: SOCIALS.diocca.shopee, icon: SiShopee },
  { label: "Instagram Batanghari River", href: SOCIALS.batanghari.instagram, icon: SiInstagram },
  { label: "TikTok Batanghari River", href: SOCIALS.batanghari.tiktok, icon: SiTiktok },
];

export function Footer() {
  return (
    <footer className="panel mb-2 bg-ink text-white sm:mb-3">
      <div className="container-x grid gap-10 py-12 lg:grid-cols-[1.2fr_2fr] lg:py-14">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <SentralLogo size={48} />
            <SentralWordmark light />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            Es kristal, sabun, susu, plastik, dan kimia dari Kota Jambi untuk Sumatra.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="press grid size-11 place-items-center rounded-full bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-mint hover:text-ink active:scale-90"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm sm:grid-cols-3">
          <FooterList title="Unit usaha" items={STORES.map((s) => ({ label: s.name, href: s.href }))} />
          <FooterList title="Perusahaan" items={SENTRAL_NAV} />
          <div className="col-span-2 sm:col-span-1">
            <p className="font-bold text-mint">Kontak</p>
            <ul className="mt-3 space-y-2.5 text-white/85">
              {WA_LINES.map((l) => (
                <li key={l.wa}>
                  <a href={`https://wa.me/${l.wa}`} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    WhatsApp {l.phone}
                  </a>
                  <span className="block text-xs text-white/70">{l.note}</span>
                </li>
              ))}
              <li>
                {CONTACT.hours[0].day}, {CONTACT.hours[0].time}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-x flex flex-col gap-2 border-t border-white/15 py-5 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Sentral Sumatra</p>
        <p>{CONTACT.addressLines.join(", ")}</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-bold text-mint">{title}</p>
      <ul className="mt-3 space-y-2.5 text-white/85">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="transition hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
