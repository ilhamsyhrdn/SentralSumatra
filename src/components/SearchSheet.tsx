import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SearchSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockResults = [
  {
    name: "Susu Original Diocca",
    price: "Rp 25.000",
    category: "Susu",
    image: "/gambarProduct/susuPutih1.jpg"
  },
  {
    name: "Susu Cokelat Diocca",
    price: "Rp 25.000",
    category: "Susu",
    image: "/gambarProduct/susuCoklat1.jpg"
  },
  {
    name: "Sabun Cuci Baju Batanghari River",
    price: "Rp 15.000",
    category: "Sabun",
    image: "https://images.unsplash.com/photo-1661450159298-d58a3b98f3a4?w=100"
  },
  {
    name: "Sabun Cuci Baju Batanghari River",
    price: "Rp 15.000",
    category: "Sabun",
    image: "https://images.unsplash.com/photo-1661450159298-d58a3b98f3a4?w=100"
  },
  {
    name: "Es Kristal Batu AJ 20kg",
    price: "Rp 20.000",
    category: "Es Kristal",
    image: "https://images.unsplash.com/photo-1579170714070-e6f684b3d00c?w=100"
  },
  {
    name: "Es Kristal Batu AJ 10kg",
    price: "Rp 10.000",
    category: "Es Kristal",
    image: "https://images.unsplash.com/photo-1579170714070-e6f684b3d00c?w=100"
  },
  {
    name: "Es Kristal Batu AJ 5kg",
    price: "Rp 5.000",
    category: "Es Kristal",
    image: "https://images.unsplash.com/photo-1579170714070-e6f684b3d00c?w=100"
  }
];

export function SearchSheet({ open, onOpenChange }: SearchSheetProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = searchQuery
    ? mockResults.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockResults;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="top" className="h-[80vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Cari Produk</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari produk..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mt-8">
            {searchQuery && (
              <p className="text-sm text-gray-500 mb-4">
                {filteredResults.length} hasil untuk "{searchQuery}"
              </p>
            )}
            <div className="space-y-4">
              {filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
