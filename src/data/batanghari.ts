export const BATANGHARI_WA = "6285113836877";
export const BATANGHARI_PHONE = "0851-1383-6877";

/* Isi produk mengikuti katalog resmi Batanghari River. Harga sengaja tidak ditampilkan;
   pelanggan diarahkan ke WhatsApp untuk harga terbaru dan diskon pemesanan banyak. */

export interface Aroma {
  id: string;
  name: string;
  image: string;
}

export const AROMAS: Aroma[] = [
  { id: "philux", name: "Philux", image: "/batanghari/aroma-philux.png" },
  { id: "sakura", name: "Sakura", image: "/batanghari/aroma-sakura.png" },
  { id: "snappy", name: "Snappy", image: "/batanghari/aroma-snappy.png" },
  { id: "akasia", name: "Akasia", image: "/batanghari/aroma-akasia.png" },
  { id: "classic-fresh", name: "Classic Fresh", image: "/batanghari/aroma-classic-fresh.png" },
  { id: "black-opium", name: "Black Opium", image: "/batanghari/aroma-black-opium.png" },
  { id: "ocean-fresh", name: "Ocean Fresh", image: "/batanghari/aroma-ocean-fresh.png" },
];

export const PARFUM_GRADES = [
  { id: "a", name: "Grade A Premium", description: "Wangi paling kuat dan paling tahan lama untuk laundry yang ingin pelanggannya langsung terkesan." },
  { id: "b", name: "Grade B", description: "Kualitas tetap baik dengan harga lebih hemat, cocok untuk laundry kiloan bervolume besar." },
];

export const PARFUM_SIZES = ["Botol 1 liter", "Jerigen 5 liter"];

export interface CleaningProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  /** Warna cairan di jerigen, dipakai sebagai penanda kecil di kartu */
  color: string;
}

export const CLEANING_SIZE = "Jerigen 5 liter";

export const CLEANING_PRODUCTS: CleaningProduct[] = [
  { id: "cuci-piring", name: "Sabun Cuci Piring", description: "Bersih kesat, hemat, dan ekonomis.", image: "/batanghari/cuci-piring.jpg", color: "#43b02a" },
  { id: "detergen", name: "Detergen Cair", description: "Bersih maksimal dan tetap lembut di tangan.", image: "/batanghari/detergen.jpg", color: "#1e9bd7" },
  { id: "pel-lantai", name: "Pel Lantai", description: "Wangi segar, lantai bersih dan kinclong.", image: "/batanghari/pel-lantai.jpg", color: "#e8c300" },
  { id: "pewangi", name: "Pewangi Konsentrat", description: "Wangi tahan lama, harum sepanjang hari.", image: "/batanghari/pewangi.jpg", color: "#ec4f8c" },
  { id: "pembersih-kaca", name: "Pembersih Kaca", description: "Bersih berkilau tanpa meninggalkan noda.", image: "/batanghari/pembersih-kaca.jpg", color: "#8b5cf6" },
  { id: "cuci-tangan", name: "Sabun Cuci Tangan", description: "Lembut di tangan dan aman untuk keluarga.", image: "/batanghari/cuci-tangan.jpg", color: "#f97316" },
];

export const BATANGHARI_STORY = [
  {
    mark: "2019",
    title: "Berkembang dari AJ Kristal",
    text: "Masih di tahun 2019, pendiri AJ Kristal, seorang anak Jambi lulusan Teknik Industri Universitas Brawijaya, mengembangkan usahanya ke produksi sabun dan parfum laundry.",
  },
  {
    mark: "Proses",
    title: "Pabrik kecil, standar besar",
    text: "Formula dibakukan, takaran dijaga, dan setiap batch dicek sebelum dikemas. Kualitasnya sama dari satu jerigen ke jerigen berikutnya.",
  },
  {
    mark: "Legal",
    title: "Satu-satunya yang berizin",
    text: "Batanghari River menjadi satu-satunya produksi sabun di Jambi yang sudah berizin dan legal, jadi usaha laundry bisa membeli dengan tenang.",
  },
  {
    mark: "Hemat",
    title: "Harga termurah di Jambi",
    text: "Proses yang efisien membuat harga bisa ditekan serendah mungkin, ditambah diskon untuk pemesanan dalam jumlah banyak.",
  },
];

export function parfumOrderText(grade: string, size: string, aromas: string[]) {
  const blend = aromas.length > 1 ? `racikan aroma ${aromas.join(" + ")}` : `aroma ${aromas[0]}`;
  return `Halo kak, saya ingin memesan Parfum Laundry Batanghari River ${grade}, ${size}, ${blend}. Boleh info harga dan diskon pemesanan banyak?`;
}

export function cleaningOrderText(product: CleaningProduct) {
  return `Halo kak, saya ingin memesan ${product.name} Batanghari River ${CLEANING_SIZE.toLowerCase()}. Boleh info harga dan diskon pemesanan banyak?`;
}
