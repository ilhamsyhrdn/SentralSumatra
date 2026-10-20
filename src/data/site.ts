import { BadgePercent, Factory, Leaf, ShieldCheck } from "lucide-react";

export const SENTRAL_VALUES = [
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description: "Setiap produk melewati kontrol kualitas yang ketat sebelum sampai ke tangan Anda.",
  },
  {
    icon: Leaf,
    title: "Higienis & Aman",
    description: "Diproduksi dengan standar kebersihan tinggi dan aman untuk seluruh keluarga.",
  },
  {
    icon: BadgePercent,
    title: "Harga Terjangkau",
    description: "Kualitas premium dengan harga bersahabat, baik untuk rumah tangga maupun usaha.",
  },
  {
    icon: Factory,
    title: "Produksi Lokal",
    description: "Diproduksi di Jambi untuk mendukung ekonomi daerah dan lebih dekat dengan pelanggan di Sumatra.",
  },
];

export const CONTACT = {
  company: "Sentral Sumatra",
  addressLines: [
    "Jl. Sersan Anwar Bay, RT.01/RW.01, Bagan Pete",
    "Kec. Alam Barajo, Kota Jambi, Jambi 36361",
  ],
  /** WhatsApp utama: pembelian es, pengaduan, dan keperluan lainnya */
  phoneDisplay: "0819-0534-1580",
  wa: "6281905341580",
  hours: [
    { day: "Senin – Sabtu", time: "08.00 – 16.00 WIB" },
    { day: "Minggu & Hari Libur", time: "Tutup" },
  ],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1981895044096!2d103.56312927501392!3d-1.6328669983519501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e25876cfb90b0f7%3A0xab74201606701a6f!2sCV.%20Agrotech%20Sumatera%20Mandiri!5e0!3m2!1sid!2sid!4v1762434525450!5m2!1sid!2sid",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=-1.6328669983519501,103.56312927501392",
};

export const SOCIALS = {
  kristal: {
    instagram: "https://www.instagram.com/eskristal_aj",
  },
  diocca: {
    instagram: "https://www.instagram.com/diocca.id",
    tiktok: "https://www.tiktok.com/@diocca",
    shopee: "https://shopee.co.id/diocca.id",
  },
  batanghari: {
    instagram: "https://www.instagram.com/batanghaririver",
  },
};

export const SENTRAL_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/products" },
  { label: "Contact", href: "/contact" },
];
