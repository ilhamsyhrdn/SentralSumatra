import { CONTACT } from "./site";

/** Nomor pemesanan es sekaligus WhatsApp utama Sentral Sumatra (pengaduan & lainnya) */
export const KRISTAL_WA = CONTACT.wa;

/** Syarat agen: beli 10 bungkus dapat bonus 1 kantong */
export const AGENT_MIN_QTY = 10;

export interface IceProduct {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  uses: string[];
  image: string;
  imageAlt: string;
}

export const ICE_PRODUCTS: IceProduct[] = [
  {
    id: "es-kristal",
    name: "Es Kristal",
    price: 10000,
    unit: "bungkus",
    description:
      "Es tabung bening berlubang di tengah yang keras dan tidak cepat cair, jadi minuman tetap dingin lebih lama.",
    uses: ["Es teh", "Kopi susu", "Jus buah"],
    image: "/stock/es-kristal.jpg",
    imageAlt: "Tumpukan es kristal bening berbentuk silinder",
  },
  {
    id: "es-serut",
    name: "Es Serut",
    price: 11000,
    unit: "bungkus",
    description: "Es serut halus siap pakai untuk minuman. Tinggal tuang ke gelas, tidak perlu menyerut sendiri.",
    uses: ["Es campur", "Es buah", "Es teler"],
    image: "/stock/es-serut.jpg",
    imageAlt: "Minuman dingin dalam gelas plastik penuh es serut",
  },
];

export function iceOrderText(product: IceProduct, qty: number) {
  const promo = qty >= AGENT_MIN_QTY ? " (promo agen beli 10 dapat bonus 1 kantong)" : "";
  return `Halo kak, saya ingin memesan ${qty} ${product.unit} ${product.name} AJ Kristal${promo}`;
}
