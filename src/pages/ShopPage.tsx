import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";

const allProducts = [
  {
    image: "https://images.unsplash.com/photo-1752327091269-56857d148787?w=400",
    name: "Velvet Matte Lipstick",
    price: "$28.00",
    category: "LIPS"
  },
  {
    image: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=400",
    name: "Hydrating Serum",
    price: "$45.00",
    category: "SKINCARE"
  },
  {
    image: "https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?w=400",
    name: "Professional Brush Set",
    price: "$65.00",
    category: "TOOLS"
  },
  {
    image: "https://images.unsplash.com/photo-1693990437506-dac9d69697a9?w=400",
    name: "Radiance Foundation",
    price: "$38.00",
    category: "FACE"
  },
  {
    image: "https://images.unsplash.com/photo-1583012279653-1575246476c0?w=400",
    name: "Eyeshadow Palette",
    price: "$52.00",
    category: "EYES"
  },
  {
    image: "https://images.unsplash.com/photo-1599847935464-fde3827639c2?w=400",
    name: "Nourishing Face Cream",
    price: "$42.00",
    category: "SKINCARE"
  },
  {
    image: "https://images.unsplash.com/photo-1586359204685-1d007c9cf2e2?w=400",
    name: "Lip Gloss Set",
    price: "$35.00",
    category: "LIPS"
  },
  {
    image: "https://images.unsplash.com/photo-1590171249256-ff77e45be1d2?w=400",
    name: "Setting Spray",
    price: "$29.00",
    category: "FACE"
  }
];

const categories = ["ALL", "LIPS", "FACE", "EYES", "SKINCARE", "TOOLS"];

export function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["ALL"]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("featured");

  const toggleCategory = (category: string) => {
    if (category === "ALL") {
      setSelectedCategories(["ALL"]);
    } else {
      const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories.filter(c => c !== "ALL"), category];
      setSelectedCategories(newCategories.length === 0 ? ["ALL"] : newCategories);
    }
  };

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategories.includes("ALL")) return true;
    return selectedCategories.includes(product.category);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">SHOP ALL PRODUCTS</h1>
        <p className="text-gray-600">
          Discover our complete range of premium beauty products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 space-y-6">
          <div>
            <h3 className="mb-4">CATEGORIES</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <label
                    htmlFor={category}
                    className="text-sm cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4">PRICE RANGE</h3>
            <Slider
              min={0}
              max={100}
              step={5}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            RESET FILTERS
          </Button>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} products
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
