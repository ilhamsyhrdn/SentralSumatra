import { CONTACT } from "./site";

/** Nomor pemesanan es sekaligus WhatsApp utama Sentral Sumatra (pengaduan & lainnya) */
export const KRISTAL_WA = CONTACT.wa;
export const KRISTAL_PHONE = CONTACT.phoneDisplay;

/** Syarat agen: beli 10 bungkus dapat bonus 1 kantong */
export const AGENT_MIN_QTY = 10;

export interface IceProduct {
  id: string;
  name: string;
  /** Label singkat di atas foto, mis. "10 kg" */
  size: string;
  unit: string;
  description: string;
  uses: string[];
  image: string;
  imageAlt: string;
  /** object-position foto bila bagian tengahnya kurang menarik */
  imagePosition?: string;
}

/** Harga sengaja tidak ditampilkan; pelanggan diarahkan ke WhatsApp untuk harga terbaru */
export const ICE_PRODUCTS: IceProduct[] = [
  {
    id: "kristal-10kg",
    name: "Es Kristal 10 kg",
    size: "10 kg",
    unit: "bungkus",
    description:
      "Kemasan besar untuk kedai, rumah makan, dan acara. Es tabung bening yang keras dan tidak cepat cair, jadi stok aman seharian.",
    uses: ["Kedai minuman", "Rumah makan", "Hajatan"],
    image: "/stock/es-bungkus.jpg",
    imageAlt: "Es kristal bening dimasukkan ke kantong plastik bersih",
    imagePosition: "50% 72%",
  },
  {
    id: "kristal-5kg",
    name: "Es Kristal 5 kg",
    size: "5 kg",
    unit: "bungkus",
    description:
      "Ukuran pas untuk warung, stok tambahan, atau kebutuhan di rumah. Bening, bersih, dan menjaga minuman tetap dingin lebih lama.",
    uses: ["Warung", "Rumah tangga", "Es teh & kopi"],
    image: "/stock/es-kristal.jpg",
    imageAlt: "Tumpukan es kristal bening berbentuk silinder",
  },
  {
    id: "es-serut",
    name: "Es Serut",
    size: "Serut",
    unit: "bungkus",
    description: "Es serut halus siap pakai. Tinggal tuang ke gelas, tidak perlu menyerut sendiri.",
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
    title: "Nomor 4 di Jambi",
    text: "Sekarang AJ Kristal menjadi produsen es kristal nomor 4 di Jambi, dengan tujuan yang sama sejak awal, yaitu ikut memajukan perekonomian Jambi.",
  },
];

export function iceOrderText(product: IceProduct, qty: number) {
  const promo = qty >= AGENT_MIN_QTY ? " (promo agen beli 10 dapat bonus 1 kantong)" : "";
  return `Halo kak, saya ingin memesan ${qty} ${product.unit} ${product.name} AJ Kristal${promo}. Boleh info harga terbarunya?`;
}
