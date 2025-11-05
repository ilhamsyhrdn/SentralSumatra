import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

const collections = [
  {
    title: "The Signature Collection",
    description: "Our most iconic products crafted with premium ingredients",
    image: "https://images.unsplash.com/photo-1650725737108-63718b7e8977?w=800",
    products: 12
  },
  {
    title: "Natural Skincare",
    description: "Clean, sustainable skincare for healthy glowing skin",
    image: "https://images.unsplash.com/photo-1599847935464-fde3827639c2?w=800",
    products: 8
  },
  {
    title: "Bold Lips",
    description: "Statement lipsticks in rich, vibrant shades",
    image: "https://images.unsplash.com/photo-1752327091269-56857d148787?w=800",
    products: 15
  },
  {
    title: "Everyday Essentials",
    description: "Your daily beauty routine, simplified and elevated",
    image: "https://images.unsplash.com/photo-1586359204685-1d007c9cf2e2?w=800",
    products: 10
  },
  {
    title: "Professional Tools",
    description: "High-quality brushes and tools for flawless application",
    image: "https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?w=800",
    products: 6
  },
  {
    title: "Radiant Complexion",
    description: "Foundations and concealers for every skin tone",
    image: "https://images.unsplash.com/photo-1590171249256-ff77e45be1d2?w=800",
    products: 9
  }
];

export function CollectionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4">OUR COLLECTIONS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed to help you express your unique beauty
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h2>{collection.title}</h2>
                  <p className="text-gray-600">{collection.description}</p>
                  <p className="text-sm text-gray-500">{collection.products} Products</p>
                  <Button variant="outline" className="mt-4">
                    EXPLORE COLLECTION
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
