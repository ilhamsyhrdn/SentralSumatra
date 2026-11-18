import { CONTACT } from "./site";

/** Nomor pemesanan es sekaligus WhatsApp utama Sentral Sumatra (pengaduan & lainnya) */
export const KRISTAL_WA = CONTACT.wa;
export const KRISTAL_PHONE = CONTACT.phoneDisplay;

/** Syarat agen: beli 10 kantong dapat bonus 1 kantong */
export const AGENT_MIN_QTY = 10;

export interface IceProduct {
  id: string;
  name: string;
  /** Label singkat di atas foto */
  size: string;
  unit: string;
  description: string;
  uses: string[];
  image: string;
  imageAlt: string;
}

/** Dijual per kantong. Harga sengaja tidak ditampilkan; pelanggan diarahkan ke WhatsApp untuk harga terbaru */
export const ICE_PRODUCTS: IceProduct[] = [
  {
    id: "es-kristal",
    name: "Es Kristal",
    size: "Per kantong",
    unit: "kantong",
    description:
      "Es tabung bening yang keras dan tidak cepat cair, jadi minuman tetap dingin lebih lama. Dijual per kantong, pas untuk kedai, warung, sampai acara.",
    uses: ["Kedai minuman", "Warung & rumah makan", "Hajatan"],
    image: "/stock/es-kristal.jpg",
    imageAlt: "Tumpukan es kristal bening berbentuk silinder",
  },
  {
    id: "es-serut",
    name: "Es Serut",
    size: "Per kantong",
    unit: "kantong",
    description: "Es serut halus siap pakai, dijual per kantong. Tinggal tuang ke gelas, tidak perlu menyerut sendiri.",
    uses: ["Es campur", "Es buah", "Es teler"],
    image: "/stock/es-serut.jpg",
    imageAlt: "Minuman dingin dalam gelas plastik penuh es serut",
  },
];

export const KRISTAL_STORY = [
  {
    mark: "2019",
    title: "Pulang untuk membangun Jambi",
    text: "AJ Kristal didirikan oleh seorang lulusan Teknik Industri Universitas Brawijaya yang berasal dari Jambi, dengan tujuan memajukan perekonomian Provinsi Jambi. Langkah pertamanya dimulai dari kebutuhan kedai dan warung akan es yang bersih.",
  },
  {
    mark: "Tumbuh",
    title: "Diantar sendiri, dipercaya pelanggan",
    text: "Awalnya es diantar sendiri ke kedai di sekitar. Kualitas yang konsisten membuat pelanggan bertahan, dan di tahun yang sama usahanya berkembang ke Batanghari River lalu Diocca.",
  },
  {
    mark: "Kini",
    title: "Nomor 2 di Jambi",
    text: "Sekarang AJ Kristal menjadi produsen es kristal nomor 2 di Jambi, dengan tujuan yang sama sejak awal, yaitu ikut memajukan perekonomian Jambi.",
  },
];

export function iceOrderText(product: IceProduct, qty: number) {
  const promo = qty >= AGENT_MIN_QTY ? " (promo agen beli 10 kantong dapat bonus 1 kantong)" : "";
  return `Halo kak, saya ingin memesan ${qty} ${product.unit} ${product.name} AJ Kristal${promo}. Boleh info harga terbarunya?`;
}
