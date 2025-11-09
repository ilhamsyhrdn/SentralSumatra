import { Button } from "./ui/button";
import Link from "next/link";

export function OtherProducts() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">PRODUK LAINNYA</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Temukan berbagai produk berkualitas lainnya dari Mitra Kami
          </p>
          <Link href="/sabun">
            <Button 
              className="px-8 py-6 text-lg font-semibold rounded-full"
              style={{
                backgroundColor: '#036635',
                color: 'white'
              }}
            >
              Lihat Produk Sabun
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
