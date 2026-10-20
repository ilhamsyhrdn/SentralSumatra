export const BATANGHARI_WA = "6285113836877";
export const BATANGHARI_PHONE = "0851-1383-6877";

export interface SoapVariant {
  size: string;
  price: number;
  image: string;
}

export interface SoapLine {
  id: string;
  name: string;
  aroma: string;
  description: string;
  variants: SoapVariant[];
}

const smallPacks = (big: string, priceBig: number): SoapVariant[] => [
  { size: "5 L", price: priceBig, image: big },
  { size: "550 ml", price: 7000, image: "/gambarProduct/kemasan550ml.webp" },
  { size: "120 ml", price: 2000, image: "/gambarProduct/kemasan120ml.webp" },
];

export const SOAP_LINES: SoapLine[] = [
  {
    id: "cuci-baju",
    name: "Sabun Cuci Baju",
    aroma: "Rose",
    description:
      "Detergen cair antibakteri yang mengangkat noda bandel dan menghilangkan bau apek. Tersedia jenis busa melimpah & matic.",
    variants: smallPacks("/gambarProduct/cuciBaju.jpg", 45000),
  },
  {
    id: "cuci-piring",
    name: "Sabun Cuci Piring",
    aroma: "Jeruk Nipis",
    description:
      "Ampuh mengangkat lemak dan sisa makanan, membuat peralatan makan bersih kesat dengan aroma jeruk nipis yang segar.",
    variants: smallPacks("/gambarProduct/cuciPiring.jpg", 45000),
  },
  {
    id: "pel-lantai",
    name: "Sabun Pel Lantai",
    aroma: "Fresh Apel",
    description:
      "Membersihkan debu dan kotoran di lantai sekaligus meninggalkan wangi apel segar yang tahan lama di seluruh ruangan.",
    variants: smallPacks("/gambarProduct/pel.jpg", 45000),
  },
  {
    id: "pewangi",
    name: "Pewangi Baju Konsentrat",
    aroma: "Rose",
    description:
      "Pewangi sekaligus pelembut pakaian konsentrat. Cukup sedikit untuk wangi rose yang lembut dan tahan lama.",
    variants: smallPacks("/gambarProduct/pewangiBaju.jpg", 50000),
  },
];

export function soapOrderText(line: SoapLine, size: string) {
  return `Halo kak, saya ingin memesan Batanghari River ${line.name} Kemasan ${size} (${line.aroma})`;
}
