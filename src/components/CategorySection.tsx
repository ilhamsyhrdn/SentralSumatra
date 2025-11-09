import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square overflow-hidden flex items-center justify-center bg-gray-100">
              <ImageWithFallback
                src="/gambarProduct/Logo.jpg"
                alt="Koleksi Produk"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <h2 className="mb-6">KENAPA MEMILIH KAMI?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Diocca menghadirkan produk susu murni berkualitas premium tanpa tambahan gula dan tanpa bahan pengawet. Susu kami diproses secara higienis dari peternakan pilihan, sehingga aman dan menyehatkan untuk seluruh keluarga. Produk Diocca telah tersertifikasi dan teruji, memberikan rasa asli dan manfaat terbaik setiap hari.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Pilih Diocca untuk kualitas, rasa, dan keamanan terbaik bagi keluarga Anda.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8">
              <a href="/products" className="block w-full h-full text-white no-underline">LIHAT SEMUA PRODUK</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
