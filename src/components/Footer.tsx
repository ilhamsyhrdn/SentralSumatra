import { Facebook, Twitter, Leaf, ShoppingBag } from "lucide-react";
import { Instagram as LucideInstagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-white border-t py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="mb-4">PRODUK</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/products" className="hover:text-black transition-colors">Susu</a></li>
              <li><a href="/sabun" className="hover:text-black transition-colors">Sabun</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">TENTANG</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Tentang Kami</a></li>
              <li><a href="/sabun" className="hover:text-black transition-colors">Mitra Kami</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">BANTUAN</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/contact" className="hover:text-black transition-colors">Hubungi Kami</a></li>
              <li><a href="/cara-pemesanan" className="hover:text-black transition-colors">Cara Pemesanan</a></li>
              <li><a href="/faq" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-center">IKUTI KAMI</h3>
            <div className="flex flex-col items-center justify-center space-y-5">
              <div className="text-lg font-semibold text-gray-800 mb-1 text-center">DIOCCA</div>
              <div className="flex flex-row items-center justify-center space-x-8 mb-2">
                <a href="https://www.instagram.com/diocca.id?igsh=OXR4dHA0dThldW9o" target="_blank" rel="noopener noreferrer" aria-label="Instagram Diocca" className="text-gray-600 hover:text-black">
                  <LucideInstagram size={36} />
                </a>
                <a href="https://www.tiktok.com/@diocca?_r=1&_t=ZS-91ArPyD3XyG" target="_blank" rel="noopener noreferrer" aria-label="TikTok Diocca" className="text-gray-600 hover:text-black">
                  <SiTiktok size={36} />
                </a>
                <a href="https://shopee.co.id/diocca.id?fbclid=PAb21jcAN5gilleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaenbSoGcLfSdECT5dJrPBVYrcLdDZH4SYpEJH2t74YvtYeKZH_8FshBI1STYg_aem_ofU9f1iqXaqF42f0qq1WSg" target="_blank" rel="noopener noreferrer" aria-label="Shopee Diocca" className="text-gray-600 hover:text-black">
                  <ShoppingBag size={36} />
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1 text-center">BATANGHARI RIVER</div>
              <div className="flex flex-row items-center justify-center">
                <a href="https://www.instagram.com/batanghaririver?igsh=MXFtMmdqenlmNjh4cQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram Batanghari River" className="text-gray-600 hover:text-black">
                  <LucideInstagram size={36} />
                </a>
              </div>
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
