import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const allProducts = [
  {
    image: "/gambarProduct/susuPutih1.jpg",
    name: "Susu Original Diocca",
    price: "Rp 25.000",
    category: "SUSU",
    shopeeLink: "https://s.shopee.co.id/7Kp1JFSEl1",
    tiktokLink: "https://vt.tokopedia.com/t/ZSHccSXLd57H9-qKxKP/"
  },
  {
    image: "/gambarProduct/susuCoklat1.jpg",
    name: "Susu Cokelat Diocca",
    price: "Rp 25.000",
    category: "SUSU",
    shopeeLink: "https://s.shopee.co.id/8fKOtmGbWF",
    tiktokLink: "https://vt.tokopedia.com/t/ZSHccSpLH7R1K-npT2t/"
  }
];

const categories = ["SEMUA", "SUSU", "SABUN", "ES KRISTAL"];

export default function ProductPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["SEMUA"]);
  const [sortBy, setSortBy] = useState("featured");

  const toggleCategory = (category: string) => {
    if (category === "SEMUA") {
      setSelectedCategories(["SEMUA"]);
    } else {
      const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories.filter(c => c !== "SEMUA"), category];
      setSelectedCategories(newCategories.length === 0 ? ["SEMUA"] : newCategories);
    }
  };

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategories.includes("SEMUA")) return true;
    return selectedCategories.includes(product.category);
  });

  return (
  <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">PRODUK KAMI</h1>
        <p className="text-gray-600">
          Temukan produk berkualitas terbaik untuk kebutuhan Anda
        </p>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {allProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
