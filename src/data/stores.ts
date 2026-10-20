import type { LucideIcon } from "lucide-react";
import { CupSoda, Droplets, FlaskConical, Milk, Snowflake } from "lucide-react";
import { waLink } from "@/lib/utils";
import { BATANGHARI_WA } from "./batanghari";
import { DIOCCA_WA, dioccaOrderText } from "./diocca";
import { CONTACT } from "./site";
import { KRISTAL_WA } from "./kristal";

export type StoreStatus = "available" | "soon";

export interface NavLink {
  label: string;
  href: string;
}

export interface Store {
  slug: string;
  href: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: StoreStatus;
  icon: LucideIcon;
  /** Warna dari logo tiap unit. accent untuk latar bertulisan putih, dark untuk menu mobile, glow untuk sorotan di atas dark */
  accent: string;
  dark: string;
  glow: string;
  image: string;
  products: string[];
  wa: string;
  waText: string;
  sections: NavLink[];
  cta: NavLink & { external?: boolean };
}

const SOON_SECTIONS: NavLink[] = [
  { label: "Tentang", href: "#tentang" },
  { label: "Kategori", href: "#kategori" },
  { label: "Kabar Terbaru", href: "#kabar" },
];

const kristalWa = "Halo kak, saya ingin memesan es AJ Kristal. Boleh info harga terbarunya?";
const batanghariWa = "Halo kak, saya ingin memesan sabun atau parfum laundry Batanghari River. Boleh info harga dan diskonnya?";
const plastikWa = "Halo kak, saya tertarik dengan produk Sentral Plastik. Mohon kabari saya saat sudah tersedia.";
const kimiaWa = "Halo kak, saya tertarik dengan produk Sentral Kimia. Mohon kabari saya saat sudah tersedia.";

/** Urutan di sini menentukan urutan unit di seluruh situs */
export const STORES: Store[] = [
  {
    slug: "aj-kristal",
    href: "/aj-kristal",
    name: "AJ Kristal",
    category: "Es Kristal",
    tagline: "Es kristal 10 kg, 5 kg & es serut",
    description:
      "Produsen es kristal nomor 4 di Jambi, didirikan tiga anak asli Jambi sejak 2019. Es kristal 10 kg, 5 kg, dan es serut dengan harga termurah di Jambi serta gratis antar se-Kota Jambi.",
    status: "available",
    icon: Snowflake,
    accent: "#C2410C",
    dark: "#1F130D",
    glow: "#FF9A5C",
    image: "/stock/es-kristal.jpg",
    products: ["Es Kristal 10 kg", "Es Kristal 5 kg", "Es Serut"],
    wa: KRISTAL_WA,
    waText: kristalWa,
    sections: [
      { label: "Varian", href: "#produk" },
      { label: "Cerita", href: "#cerita" },
      { label: "Jadi Agen", href: "#agen" },
      { label: "Cara Pesan", href: "#pesan" },
    ],
    cta: { label: "Pesan via WhatsApp", href: waLink(KRISTAL_WA, kristalWa), external: true },
  },
  {
    slug: "batanghari-river",
    href: "/batanghari-river",
    name: "Batanghari River",
    category: "Sabun & Parfum Laundry",
    tagline: "Parfum laundry & sabun rumah tangga",
    description:
      "Parfum laundry dan sabun rumah tangga asli Jambi sejak 2019, satu-satunya produksi sabun di Jambi yang sudah berizin dan legal. Harga termurah di Jambi dengan diskon untuk pemesanan banyak.",
    status: "available",
    icon: Droplets,
    accent: "#C2500A",
    dark: "#0B1F4D",
    glow: "#FFC861",
    image: "/background/backgroundSabun.jpg",
    products: ["Parfum Laundry", "Detergen Cair", "Sabun Cuci Piring", "Pel Lantai", "Pewangi Konsentrat", "Pembersih Kaca", "Sabun Cuci Tangan"],
    wa: BATANGHARI_WA,
    waText: batanghariWa,
    sections: [
      { label: "Parfum Laundry", href: "#parfum" },
      { label: "Kebersihan", href: "#kebersihan" },
      { label: "Cerita", href: "#cerita" },
      { label: "Cara Pesan", href: "#pesan" },
    ],
    cta: {
      label: "Pesan via WhatsApp",
      href: waLink(BATANGHARI_WA, batanghariWa),
      external: true,
    },
  },
  {
    slug: "diocca",
    href: "/diocca",
    name: "Diocca",
    category: "Susu, Cokelat & Kopi",
    tagline: "Susu rendah kalori, cokelat & kopi premium",
    description:
      "Susu original dan cokelat rendah kalori dengan 80% susu murni dan 0% sukrosa, ditambah cokelat premium dan kopi sachet premium. Harga termurah di Jambi.",
    status: "available",
    icon: Milk,
    accent: "#00754A",
    dark: "#1E3932",
    glow: "#D4A72C",
    image: "/stock/milk-pour.jpg",
    products: ["Susu Original", "Susu Cokelat", "Cokelat Premium", "Kopi Sachet Premium"],
    wa: DIOCCA_WA,
    waText: dioccaOrderText(),
    sections: [
      { label: "Menu", href: "#menu" },
      { label: "Keunggulan", href: "#keunggulan" },
      { label: "Cerita", href: "#cerita" },
      { label: "Cara Pesan", href: "#cara-pesan" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Pesan via WhatsApp", href: waLink(DIOCCA_WA, dioccaOrderText()), external: true },
  },
  {
    slug: "sentral-plastik",
    href: "/sentral-plastik",
    name: "Sentral Plastik",
    category: "Plastik",
    tagline: "Kemasan plastik untuk usaha Anda",
    description:
      "Cup gelas, tutup gelas, pipet, dan plastik laundry untuk kedai minuman, UMKM kuliner, hingga usaha laundry.",
    status: "soon",
    icon: CupSoda,
    accent: "#17414D",
    dark: "#0F2A30",
    glow: "#7FE0BD",
    image: "/stock/cups-business.jpg",
    products: ["Cup Gelas", "Tutup Gelas", "Pipet", "Plastik Laundry"],
    wa: CONTACT.wa,
    waText: plastikWa,
    sections: SOON_SECTIONS,
    cta: { label: "Kabari Saya", href: waLink(CONTACT.wa, plastikWa), external: true },
  },
  {
    slug: "sentral-kimia",
    href: "/sentral-kimia",
    name: "Sentral Kimia",
    category: "Kimia",
    tagline: "Bahan kimia untuk usaha & industri",
    description:
      "Penyedia bahan kimia untuk kebutuhan produksi, kebersihan, dan industri skala kecil hingga menengah.",
    status: "soon",
    icon: FlaskConical,
    accent: "#17414D",
    dark: "#0F2A30",
    glow: "#7FE0BD",
    image: "/stock/lab-beaker.jpg",
    products: ["Bahan Baku Sabun", "Kimia Kebersihan", "Kimia Industri", "Pewangi & Aditif"],
    wa: CONTACT.wa,
    waText: kimiaWa,
    sections: SOON_SECTIONS,
    cta: { label: "Kabari Saya", href: waLink(CONTACT.wa, kimiaWa), external: true },
  },
];

export function getStore(slug: string) {
  return STORES.find((s) => s.slug === slug)!;
}

export function getStoreByPath(pathname: string) {
  return STORES.find((s) => s.href === pathname);
}
