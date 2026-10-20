import type { LucideIcon } from "lucide-react";
import { CupSoda, Droplets, FlaskConical, Milk, Snowflake } from "lucide-react";
import { waLink } from "@/lib/utils";
import { BATANGHARI_WA } from "./batanghari";
import { DIOCCA_WA } from "./diocca";
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
  /** Satu warna aksen per unit, semuanya dari keluarga teal–hijau logo */
  accent: string;
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

const kristalWa = "Halo kak, saya ingin memesan es AJ Kristal";
const plastikWa = "Halo kak, saya tertarik dengan produk Sentral Plastik. Mohon kabari saya saat sudah tersedia.";
const kimiaWa = "Halo kak, saya tertarik dengan produk Sentral Kimia. Mohon kabari saya saat sudah tersedia.";

/** Urutan di sini menentukan urutan unit di seluruh situs */
export const STORES: Store[] = [
  {
    slug: "aj-kristal",
    href: "/aj-kristal",
    name: "AJ Kristal",
    category: "Es Kristal",
    tagline: "Es kristal & es serut untuk minuman",
    description:
      "Es kristal dan es serut untuk minuman yang dijamin bersih, tahan lama, dan harganya terbaik. Gratis antar se-Kota Jambi.",
    status: "available",
    icon: Snowflake,
    accent: "#1D7F95",
    image: "/stock/es-kristal.jpg",
    products: ["Es Kristal", "Es Serut"],
    wa: KRISTAL_WA,
    waText: kristalWa,
    sections: [
      { label: "Produk", href: "#produk" },
      { label: "Keunggulan", href: "#keunggulan" },
      { label: "Jadi Agen", href: "#agen" },
      { label: "Cara Pesan", href: "#pesan" },
    ],
    cta: { label: "Pesan via WhatsApp", href: waLink(KRISTAL_WA, kristalWa), external: true },
  },
  {
    slug: "batanghari-river",
    href: "/batanghari-river",
    name: "Batanghari River",
    category: "Sabun",
    tagline: "Sabun & pembersih rumah tangga",
    description:
      "Sabun cuci baju, sabun cuci piring, pembersih lantai, dan pewangi pakaian produksi Jambi dengan harga hemat.",
    status: "available",
    icon: Droplets,
    accent: "#2B6D7C",
    image: "/background/backgroundSabun.jpg",
    products: ["Sabun Cuci Baju", "Sabun Cuci Piring", "Pembersih Lantai", "Pewangi Baju"],
    wa: BATANGHARI_WA,
    waText: "Halo kak, saya ingin memesan sabun Batanghari River",
    sections: [
      { label: "Keunggulan", href: "#keunggulan" },
      { label: "Produk", href: "#produk" },
      { label: "Daftar Harga", href: "#harga" },
      { label: "Cara Pesan", href: "#pesan" },
    ],
    cta: {
      label: "Pesan via WhatsApp",
      href: waLink(BATANGHARI_WA, "Halo kak, saya ingin memesan sabun Batanghari River"),
      external: true,
    },
  },
  {
    slug: "diocca",
    href: "/diocca",
    name: "Diocca",
    category: "Susu",
    tagline: "Susu murni tanpa tambahan gula",
    description:
      "Susu bubuk dengan 80% susu murni, 0% sukrosa, tanpa perisa dan pengawet. Tersedia varian Original dan Cokelat.",
    status: "available",
    icon: Milk,
    accent: "#00754A",
    image: "/stock/milk-pour.jpg",
    products: ["Susu Original", "Susu Cokelat"],
    wa: DIOCCA_WA,
    waText: "Halo kak, saya mau memesan produk susu DIOCCA",
    sections: [
      { label: "Menu", href: "#menu" },
      { label: "Keunggulan", href: "#keunggulan" },
      { label: "Cerita", href: "#cerita" },
      { label: "Cara Pesan", href: "#cara-pesan" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Pesan Sekarang", href: "#cara-pesan" },
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
