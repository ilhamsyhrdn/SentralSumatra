import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const products = [
    {
      image: "/gambarProduct/susuPutih1.jpg",
      name: "Susu Original Diocca",
      price: "Rp 25.000",
      category: "SUSU"
    },
    {
      image: "/gambarProduct/susuCoklat1.jpg",
      name: "Susu Cokelat Diocca",
      price: "Rp 25.000",
      category: "SUSU"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">PRODUK UNGGULAN</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Produk terlaris dan paling diminati pelanggan kami
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
