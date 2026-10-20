import { Coffee, CupSoda, Shirt, Store, WashingMachine } from "lucide-react";
import { ComingSoonStore } from "@/components/store/ComingSoonStore";
import { CupLidIcon, StrawIcon } from "@/components/common/icons";
import { CupScene } from "@/components/three";
import { getStore } from "@/data/stores";

export default function SentralPlastikPage() {
  return (
    <ComingSoonStore
      store={getStore("sentral-plastik")}
      scene={CupScene}
      seoDescription="Sentral Plastik segera hadir di Kota Jambi dengan cup gelas, tutup gelas, pipet, dan plastik laundry untuk kedai minuman, UMKM kuliner, dan usaha laundry."
      title={["Kemasan rapi,", "usaha makin laris."]}
      heroText="Cup gelas, tutup gelas, pipet, dan plastik laundry dengan harga bersahabat. Cocok untuk kedai minuman, UMKM kuliner, sampai usaha laundry di Jambi."
      aboutTitle="Partner kemasan untuk usaha Anda."
      aboutImage={{ src: "/stock/cups-business.jpg", alt: "Pelaku usaha menyiapkan minuman dalam cup plastik" }}
      featureImage={{ src: "/stock/cups-boba.jpg", alt: "Empat minuman boba dalam cup plastik bening" }}
      aboutParagraphs={[
        "Sentral Plastik adalah unit usaha Sentral Sumatra yang fokus pada kemasan plastik sekali pakai. Banyak pelaku usaha di Jambi membutuhkan pasokan kemasan yang stabil, lengkap, dan terjangkau.",
        "Mulai dari gelas untuk minuman kekinian, tutupnya, pipet, sampai plastik pembungkus cucian, semuanya ingin kami sediakan di satu tempat. Jadi Anda bisa lebih fokus mengembangkan usaha.",
      ]}
      points={[
        "Pilihan ukuran lengkap dan saling cocok antara cup dan tutupnya",
        "Mengutamakan bahan yang aman untuk kemasan makanan & minuman",
        "Harga bersahabat untuk eceran maupun grosir",
        "Stok dekat dengan Anda di Kota Jambi",
      ]}
      audience={[
        { icon: CupSoda, label: "Kedai minuman" },
        { icon: Coffee, label: "Kafe & resto" },
        { icon: Store, label: "UMKM kuliner" },
        { icon: WashingMachine, label: "Usaha laundry" },
      ]}
      categories={[
        {
          icon: CupSoda,
          name: "Cup Gelas",
          description: "Gelas plastik bening untuk minuman dingin seperti es teh, kopi susu, dan jus.",
          items: ["Cup PP", "Cup PET", "Berbagai ukuran"],
        },
        {
          icon: CupLidIcon,
          name: "Tutup Gelas",
          description: "Tutup yang pas dan rapat agar minuman aman dibawa pulang.",
          items: ["Tutup datar", "Tutup cembung"],
        },
        {
          icon: StrawIcon,
          name: "Pipet",
          description: "Pipet higienis untuk berbagai minuman, termasuk yang bertopping.",
          items: ["Lurus", "Bengkok", "Boba"],
        },
        {
          icon: Shirt,
          name: "Plastik Laundry",
          description: "Plastik pembungkus pakaian yang bening, kuat, dan membuat hasil laundry tampak rapi.",
          items: ["Laundry kiloan", "Laundry satuan", "Berbagai ukuran"],
        },
      ]}
    />
  );
}
