import type { LucideIcon } from "lucide-react";
import { CupSoda, Droplets, FlaskConical, Milk } from "lucide-react";
import { waLink } from "@/lib/utils";

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

const plastikWa = "Halo kak, saya tertarik dengan produk Sentral Plastik. Mohon kabari saya saat sudah tersedia.";
const kimiaWa = "Halo kak, saya tertarik dengan produk Sentral Kimia. Mohon kabari saya saat sudah tersedia.";

export const STORES: Store[] = [
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
    wa: "6282110004601",
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
    wa: "6282110004602",
    waText: "Halo kak, saya ingin memesan sabun Batanghari River",
    sections: [
      { label: "Keunggulan", href: "#keunggulan" },
      { label: "Produk", href: "#produk" },
      { label: "Daftar Harga", href: "#harga" },
      { label: "Cara Pesan", href: "#pesan" },
    ],
    cta: {
      label: "Pesan via WhatsApp",
      href: waLink("6282110004602", "Halo kak, saya ingin memesan sabun Batanghari River"),
      external: true,
    },
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
    wa: "6282110004602",
    waText: plastikWa,
    sections: SOON_SECTIONS,
    cta: { label: "Kabari Saya", href: waLink("6282110004602", plastikWa), external: true },
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
    wa: "6282110004602",
    waText: kimiaWa,
    sections: SOON_SECTIONS,
    cta: { label: "Kabari Saya", href: waLink("6282110004602", kimiaWa), external: true },
  },
];

export function getStore(slug: string) {
  return STORES.find((s) => s.slug === slug)!;
}

export function getStoreByPath(pathname: string) {
  return STORES.find((s) => s.href === pathname);
}
