import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Heart, Leaf, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Berkualitas Tinggi",
    description: "Semua produk kami telah tersertifikasi dan melewati quality control yang ketat."
  },
  {
    icon: Leaf,
    title: "Higienis & Aman",
    description: "Diproduksi dengan standar kebersihan tinggi dan aman untuk seluruh keluarga."
  },
  {
    icon: Sparkles,
    title: "Harga Terjangkau",
    description: "Kualitas premium dengan harga yang ramah di kantong untuk semua kalangan."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden" style={{ backgroundColor: '#036635' }}>
        <img
          src="/background/backgroundAbout.jpg"
          alt="Background About"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ minHeight: '100%', height: '100%', maxHeight: '100vh' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 py-12">
          <div className="bg-white/80 rounded-lg px-6 py-8 max-w-2xl mx-auto text-center">
            <h1 className="mb-4 text-2xl md:text-4xl font-bold text-green-900 drop-shadow">TENTANG KAMI</h1>
            <p className="text-lg md:text-xl text-gray-800 font-semibold drop-shadow mb-2">
              DIOCCA, susu segar berkualitas untuk keluarga Indonesia. Tersedia varian original dan cokelat, aman dikonsumsi setiap hari, bergizi lengkap, dan sudah bersertifikat. Pilihan tepat untuk kesehatan dan kebahagiaan keluarga Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2>KOMITMEN KAMI UNTUK KUALITAS</h2>
            <p className="text-gray-600 leading-relaxed">
              Didirikan pada tahun 2020, AJProduct lahir dari komitmen sederhana: menyediakan 
              produk berkualitas tinggi yang terjangkau untuk setiap keluarga Indonesia. Kami 
              memahami pentingnya produk sehari-hari yang aman, higienis, sehat dan dapat diandalkan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Produk susu kami dibuat dengan kandungan terpercaya yang dimana bebas dari gula dan bahan pengawet.
              lalu dikemas dengan hiegienis untuk menjaga kebaikan didalamnya dan kualitasnya.
              kami juga membuat produk ini dengan sepenuh hati agar bisa dinikmati semua kalangan usia.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Saat ini, AJProduct telah menjadi pilihan utama ribuan keluarga di seluruh Indonesia. 
              Kami terus berinovasi dan meningkatkan kualitas produk untuk memberikan yang terbaik 
              bagi pelanggan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">NILAI-NILAI KAMI</h2>
            <p className="text-gray-600">
              Prinsip yang menjadi landasan dalam setiap produk kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuCoklat1.jpg"
                alt="Susu Coklat 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuCoklat2.jpg"
                alt="Susu Coklat 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuCoklat3.jpg"
                alt="Susu Coklat 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuCoklat4.jpg"
                alt="Susu Coklat 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuCoklat5.jpg"
                alt="Susu Coklat 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuPutih1.jpg"
                alt="Susu Putih 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuPutih2.jpg"
                alt="Susu Putih 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/SusuPutih3.jpg"
                alt="Susu Putih 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuPutih4.jpg"
                alt="Susu Putih 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="/gambarProduct/susuPutih5.jpg"
                alt="Susu Putih 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
