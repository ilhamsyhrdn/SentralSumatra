import { Beaker, Factory, FlaskRound, SprayCan, WashingMachine } from "lucide-react";
import { ComingSoonStore } from "@/components/store/ComingSoonStore";
import { FlaskScene } from "@/components/three";
import { getStore } from "@/data/stores";

export default function SentralKimiaPage() {
  return (
    <ComingSoonStore
      store={getStore("sentral-kimia")}
      scene={FlaskScene}
      seoDescription="Sentral Kimia segera hadir di Kota Jambi: penyedia bahan kimia untuk produksi sabun, kebersihan, dan kebutuhan industri skala kecil hingga menengah."
      title={["Bahan kimia tepat,", "produksi lebih lancar."]}
      heroText="Penyedia bahan kimia untuk kebutuhan produksi, kebersihan, dan industri — dengan kualitas terjaga, informasi yang jelas, dan pasokan dari Kota Jambi."
      aboutTitle="Pemasok bahan kimia yang bisa diandalkan."
      aboutImage={{ src: "/stock/lab-bench.jpg", alt: "Meja laboratorium yang bersih dengan peralatan gelas" }}
      featureImage={{ src: "/stock/lab-beaker.jpg", alt: "Tangan bersarung memegang gelas beaker berisi cairan" }}
      aboutParagraphs={[
        "Sentral Kimia disiapkan untuk memenuhi kebutuhan bahan kimia bagi pelaku usaha — mulai dari produsen sabun rumahan, usaha laundry, hingga industri skala kecil dan menengah.",
        "Berbekal pengalaman memproduksi sabun dan pembersih Batanghari River, kami memahami pentingnya bahan baku yang konsisten kualitasnya dan mudah didapat.",
      ]}
      points={[
        "Bahan baku dengan kualitas dan spesifikasi yang jelas",
        "Pilihan kemasan eceran hingga curah",
        "Informasi penggunaan dan penanganan yang aman",
        "Didukung pengalaman produksi sabun Batanghari River",
      ]}
      audience={[
        { icon: Beaker, label: "Produsen sabun" },
        { icon: WashingMachine, label: "Usaha laundry" },
        { icon: Factory, label: "Industri kecil & menengah" },
        { icon: SprayCan, label: "Jasa kebersihan" },
      ]}
      categories={[
        {
          icon: Beaker,
          name: "Bahan Baku Sabun",
          description: "Bahan dasar untuk pembuatan sabun cair, detergen, dan cairan pembersih.",
          items: ["Surfaktan", "Pengental", "Pewarna"],
        },
        {
          icon: SprayCan,
          name: "Kimia Kebersihan",
          description: "Untuk kebersihan dan sanitasi rumah, kantor, maupun tempat usaha.",
          items: ["Disinfektan", "Pembersih serbaguna"],
        },
        {
          icon: Factory,
          name: "Kimia Industri",
          description: "Bahan kimia umum untuk mendukung produksi skala kecil hingga menengah.",
          items: ["Bahan kimia umum", "Pelarut"],
        },
        {
          icon: FlaskRound,
          name: "Pewangi & Aditif",
          description: "Bibit parfum dan bahan aditif untuk memberi wangi dan kualitas lebih pada produk Anda.",
          items: ["Bibit parfum", "Pewangi laundry", "Aditif"],
        },
      ]}
    />
  );
}
