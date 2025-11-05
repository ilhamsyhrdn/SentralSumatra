import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

export function ProductCard({ image, name, price, category }: ProductCardProps) {
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
      <p className="text-gray-900">{price}</p>
    </div>
  );
}
