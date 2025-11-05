import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="mb-4">PRODUK</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Semua Produk</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Susu</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sabun</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Es Kristal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">TENTANG</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Kualitas Produk</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sertifikasi</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Mitra Kami</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">BANTUAN</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Pengiriman</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cara Pemesanan</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">IKUTI KAMI</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-gray-600">
          <p>&copy; 2025 AJProduct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
