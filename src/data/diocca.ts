import type { LucideIcon } from "lucide-react";
import type { Stat } from "@/components/ui-kit";
import { BadgeCheck, CandyOff, Coffee, CupSoda, Flame, HeartPulse, Package, Sparkles, Zap } from "lucide-react";

export const DIOCCA_WA = "6287825984419";
export const DIOCCA_PHONE = "0878-2598-4419";

export interface DioccaProduct {
  id: string;
  name: string;
  short: string;
  label: string;
  tagline: string;
  /** Angka kandungan; hanya untuk varian susu */
  stats?: Stat[];
  highlights: { icon: LucideIcon; text: string }[];
  images: string[];
  /** Foto ilustrasi sementara sampai foto kemasan aslinya tersedia */
  illustrative?: boolean;
}

/** Harga sengaja tidak ditampilkan; semua pemesanan diarahkan ke WhatsApp Diocca */
export const DIOCCA_PRODUCTS: DioccaProduct[] = [
  {
    id: "original",
    name: "Susu Original Rendah Kalori",
    short: "Original",
    label: "Original Milk",
    tagline: "Rasa susu murni yang lembut dan natural, rendah kalori, tanpa perisa tambahan.",
    stats: [
      { value: "80%", label: "Susu murni" },
      { value: "0%", label: "Sukrosa" },
      { value: "0%", label: "Perisa" },
    ],
    highlights: [
      { icon: Package, text: "Isi 4 sachet × 35 g" },
      { icon: Zap, text: "Rendah kalori" },
      { icon: BadgeCheck, text: "Terdaftar BPOM RI" },
      { icon: CandyOff, text: "Tanpa gula tambahan" },
    ],
    images: [
      "/gambarProduct/susuPutih1.jpg",
      "/gambarProduct/susuPutih2.jpg",
      "/gambarProduct/SusuPutih3.jpg",
      "/gambarProduct/susuPutih4.jpg",
      "/gambarProduct/susuPutih5.jpg",
    ],
  },
  {
    id: "cokelat",
    name: "Susu Cokelat Rendah Kalori",
    short: "Cokelat",
    label: "Chocolate Milk",
    tagline: "Susu murni berpadu cokelat yang kaya rasa, tetap rendah kalori dan tanpa gula tambahan.",
    stats: [
      { value: "77%", label: "Susu murni" },
      { value: "0%", label: "Sukrosa" },
      { value: "0%", label: "Perisa" },
    ],
    highlights: [
      { icon: Package, text: "Isi 4 sachet × 35 g" },
      { icon: Zap, text: "Rendah kalori" },
      { icon: BadgeCheck, text: "Terdaftar BPOM RI" },
      { icon: HeartPulse, text: "Aman diminum setiap hari" },
    ],
    images: [
      "/gambarProduct/susuCoklat1.jpg",
      "/gambarProduct/susuCoklat2.jpg",
      "/gambarProduct/susuCoklat3.jpg",
      "/gambarProduct/susuCoklat4.jpg",
      "/gambarProduct/susuCoklat5.jpg",
    ],
  },
  {
    id: "cokelat-premium",
    name: "Cokelat Premium",
    short: "Cokelat Premium",
    label: "Premium Chocolate",
    tagline: "Cokelat bubuk premium untuk minuman cokelat yang kental dan pekat, nikmat disajikan panas maupun dingin.",
    highlights: [
      { icon: Sparkles, text: "Cokelat bubuk premium" },
      { icon: CupSoda, text: "Rasa pekat dan kaya" },
      { icon: Flame, text: "Enak panas atau dingin" },
      { icon: Package, text: "Mudah diseduh" },
    ],
    images: ["/stock/cokelat-premium.jpg"],
    illustrative: true,
  },
  {
    id: "kopi",
    name: "Kopi Sachet Premium",
    short: "Kopi",
    label: "Premium Coffee",
    tagline: "Kopi bubuk premium dalam kemasan sachet. Praktis diseduh kapan saja, di rumah maupun di kantor.",
    highlights: [
      { icon: Coffee, text: "Kopi bubuk premium" },
      { icon: Package, text: "Kemasan sachet praktis" },
      { icon: Sparkles, text: "Aroma kopi yang harum" },
      { icon: Flame, text: "Tinggal seduh air panas" },
    ],
    images: ["/stock/kopi.jpg"],
    illustrative: true,
  },
];

export function dioccaOrderText(product?: DioccaProduct) {
  return product
    ? `Halo kak, saya mau memesan ${product.name} DIOCCA. Boleh info harga terbarunya?`
    : "Halo kak, saya mau memesan produk DIOCCA. Boleh info harga terbarunya?";
}

export const DIOCCA_TESTIMONIALS = [
  {
    name: "Rani Pratiwi",
    initials: "RP",
    quote:
      "Saya memilih susu Diocca untuk anak karena kandungan susunya lebih tinggi dibanding merek lain, sampai 80%! Tanpa gula tambahan dan tanpa perisa, jadi lebih aman diminum setiap hari. Rasanya natural dan bikin saya tenang memberi yang terbaik untuk keluarga.",
  },
  {
    name: "Lestari Anggraini",
    initials: "LA",
    quote:
      "Anak-anak saya suka sekali dengan susu bubuk Diocca, baik yang original maupun coklat. Rasanya enak tapi tetap sehat karena tanpa gula tambahan. Jadi mereka semangat minum susu tiap hari, dan saya tidak khawatir soal efek samping.",
  },
];

export const DIOCCA_FAQ = [
  {
    q: "Apa keunggulan susu Diocca dibandingkan susu lain?",
    a: "Susu Diocca rendah kalori dan diproduksi dari susu murni tanpa tambahan gula, pengawet, atau perisa buatan. Kandungan susunya mencapai 80% (Original) dan 77% (Cokelat), dan kami menjaga kualitas serta kesegarannya dari bahan pilihan.",
  },
  {
    q: "Berapa harga produk Diocca?",
    a: `Harga Diocca termurah di Jambi. Karena sering ada promo dan diskon pembelian banyak, harga terbaru selalu kami berikan langsung lewat WhatsApp admin Diocca di ${DIOCCA_PHONE}.`,
  },
  {
    q: "Apakah susu Diocca aman untuk bayi dan penderita diabetes?",
    a: "Susu Diocca terbuat dari susu murni tanpa tambahan gula, pengawet, atau perisa buatan, sehingga kandungan nutrisinya alami. Produk juga telah melalui uji kualitas dan sertifikasi. Untuk kebutuhan khusus seperti bayi atau penderita diabetes, kami tetap menyarankan berkonsultasi dengan dokter atau ahli gizi.",
  },
  {
    q: "Apakah produk Diocca sudah tersertifikasi?",
    a: "Ya. Susu Diocca telah melalui proses sertifikasi dan uji kualitas serta terdaftar di BPOM RI, sehingga aman dan terpercaya untuk dikonsumsi sehari-hari.",
  },
  {
    q: "Bagaimana cara pemesanan produk Diocca?",
    a: `Pemesanan dilayani lewat WhatsApp admin Diocca di ${DIOCCA_PHONE}. Pilih produk, tekan tombol pesan, lalu admin membalas dengan harga terbaru dan info pengirimannya.`,
  },
  {
    q: "Apakah susu Diocca aman dikonsumsi semua orang?",
    a: "Susu Diocca aman dikonsumsi mulai dari anak-anak hingga dewasa. Tanpa tambahan gula, pengawet, atau perisa buatan, Diocca cocok untuk berbagai kebutuhan kesehatan dan gaya hidup. Proses produksinya higienis dan tersertifikasi.",
  },
];
