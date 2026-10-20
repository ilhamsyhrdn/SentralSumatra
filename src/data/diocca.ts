export interface DioccaVariant {
  id: "original" | "cokelat";
  name: string;
  short: string;
  label: string;
  tagline: string;
  milk: number;
  price: number;
  pack: string;
  weight: string;
  shopee: string;
  tiktok: string;
  images: string[];
}

export const DIOCCA_WA = "6282110004601";

export const DIOCCA_VARIANTS: DioccaVariant[] = [
  {
    id: "original",
    name: "Susu Original Diocca",
    short: "Original",
    label: "Original Milk",
    tagline: "Rasa susu murni yang lembut dan natural, tanpa perisa tambahan.",
    milk: 80,
    price: 25000,
    pack: "4 sachet × 35 g",
    weight: "140 g",
    shopee: "https://s.shopee.co.id/7Kp1JFSEl1",
    tiktok: "https://vt.tokopedia.com/t/ZSHccSXLd57H9-qKxKP/",
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
    name: "Susu Cokelat Diocca",
    short: "Cokelat",
    label: "Chocolate Milk",
    tagline: "Susu murni berpadu cokelat yang kaya rasa, tetap tanpa gula tambahan.",
    milk: 77,
    price: 25000,
    pack: "4 sachet × 35 g",
    weight: "140 g",
    shopee: "https://s.shopee.co.id/8fKOtmGbWF",
    tiktok: "https://vt.tokopedia.com/t/ZSHccSpLH7R1K-npT2t/",
    images: [
      "/gambarProduct/susuCoklat1.jpg",
      "/gambarProduct/susuCoklat2.jpg",
      "/gambarProduct/susuCoklat3.jpg",
      "/gambarProduct/susuCoklat4.jpg",
      "/gambarProduct/susuCoklat5.jpg",
    ],
  },
];

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
    a: "Susu Diocca diproduksi dari susu murni tanpa tambahan gula, pengawet, atau perisa buatan. Kandungan susunya mencapai 80% (Original) dan 77% (Cokelat), dan kami menjaga kualitas serta kesegarannya dari bahan pilihan.",
  },
  {
    q: "Apakah susu Diocca aman untuk bayi dan penderita diabetes?",
    a: "Susu Diocca terbuat dari susu murni tanpa tambahan gula, pengawet, atau perisa buatan, sehingga kandungan nutrisinya alami. Produk juga telah melalui uji kualitas dan sertifikasi. Untuk kebutuhan khusus seperti bayi atau penderita diabetes, kami tetap menyarankan berkonsultasi dengan dokter atau ahli gizi.",
  },
  {
    q: "Apakah produk Diocca sudah tersertifikasi?",
    a: "Ya. Semua produk Diocca telah melalui proses sertifikasi dan uji kualitas serta terdaftar di BPOM RI, sehingga aman dan terpercaya untuk dikonsumsi sehari-hari.",
  },
  {
    q: "Bagaimana cara pemesanan produk Diocca?",
    a: "Anda dapat memesan melalui TikTok Shop, Shopee, Instagram, atau WhatsApp. Semua tautan tersedia di bagian Cara Pesan pada halaman ini.",
  },
  {
    q: "Apakah susu Diocca aman dikonsumsi semua orang?",
    a: "Susu Diocca aman dikonsumsi mulai dari anak-anak hingga dewasa. Tanpa tambahan gula, pengawet, atau perisa buatan, Diocca cocok untuk berbagai kebutuhan kesehatan dan gaya hidup. Proses produksinya higienis dan tersertifikasi.",
  },
];
