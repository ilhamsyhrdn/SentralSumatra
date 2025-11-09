import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
  waNumber?: string;
  waMessage?: string;
  shopeeLink?: string;
  tiktokLink?: string;
}

export function ProductCard({ image, name, price, category, waNumber, waMessage, shopeeLink, tiktokLink }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden mb-4 bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {category && (
        <p className="text-gray-500 text-sm mb-1">{category}</p>
      )}
      <h3 className="mb-2">{name}</h3>
      <p className="text-gray-900 mb-3">{price}</p>
      {/* Tombol WhatsApp untuk sabun */}
      {waNumber && waMessage && (
        <a
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition-colors text-sm font-semibold mb-2"
        >
          Beli via WhatsApp
        </a>
      )}
      {/* Tombol Shopee dan TikTok untuk produk Diocca */}
      {(shopeeLink || tiktokLink) && (
        <div className="flex gap-2 mt-2">
          {shopeeLink && (
            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition-colors text-sm font-semibold"
            >
              Beli via Shopee
            </a>
          )}
          {tiktokLink && (
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition-colors text-sm font-semibold"
            >
              Beli via TikTok
            </a>
          )}
        </div>
      )}
    </div>
  );
}
