import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-24 text-white" style={{ backgroundColor: '#036635' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-white">BERGABUNG DENGAN KAMI</h2>
          <p className="mb-8 text-gray-300">
            Dapatkan informasi promo, tips produk, dan penawaran eksklusif langsung ke email Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              className="bg-white text-black flex-1"
            />
            <Button className="bg-white text-black hover:bg-gray-100 px-8">
              DAFTAR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
