import { ProductCard } from "@/components/ProductCard";

export default function SabunPage() {
  const sabunProducts = [
    {
      image: "/gambarProduct/cuciBaju.jpg",
      name: "Batanghari River Sabun Cuci Baju Kemasan 5 L (Rose)",
      price: "Rp 45.000",
      category: "SABUN CUCI BAJU"
    },
    {
      image: "/gambarProduct/kemasan550ml.webp",
      name: "Batanghari River Sabun Cuci Baju Kemasan 550ml (Rose)",
      price: "Rp 7.000",
      category: "SABUN CUCI BAJU"
    },
    {
      image: "/gambarProduct/kemasan120ml.webp",
      name: "Batanghari River Sabun Cuci Baju Kemasan 120ml (Rose)",
      price: "Rp 2.000",
      category: "SABUN CUCI BAJU"
    },
    {
      image: "/gambarProduct/cuciPiring.jpg",
      name: "Batanghari River Sabun Cuci Piring Kemasan 5 L (Jeruk Nipis)",
      price: "Rp 45.000",
      category: "SABUN CUCI PIRING"
    },
    {
      image: "/gambarProduct/kemasan550ml.webp",
      name: "Batanghari River Sabun Cuci Piring Kemasan 550ml (Jeruk Nipis)",
      price: "Rp 7.000",
      category: "SABUN CUCI PIRING"
    },
    {
      image: "/gambarProduct/kemasan120ml.webp",
      name: "Batanghari River Sabun Cuci Piring Kemasan 120ml (Jeruk Nipis)",
      price: "Rp 2.000",
      category: "SABUN CUCI PIRING"
    },
    {
      image: "/gambarProduct/pel.jpg",
      name: "Batanghari River Sabun Pel Lantai Kemasan 5 L (Fresh Apel)",
      price: "Rp 45.000",
      category: "SABUN PEL LANTAI"
    },
    {
      image: "/gambarProduct/kemasan550ml.webp",
      name: "Batanghari River Sabun Pel Lantai Kemasan 550ml (Fresh Apel)",
      price: "Rp 7.000",
      category: "SABUN PEL LANTAI"
    },
    {
      image: "/gambarProduct/kemasan120ml.webp",
      name: "Batanghari River Sabun Pel Lantai 120ml (Fresh Apel)",
      price: "Rp 2.000",
      category: "SABUN PEL LANTAI"
    },
    {
      image: "/gambarProduct/pewangiBaju.jpg",
      name: "Batanghari River Pewangi Baju Konsentrat Kemasan 5 L (Rose)",
      price: "Rp 50.000",
      category: "PEWANGI BAJU"
    },
    {
      image: "/gambarProduct/kemasan550ml.webp",
      name: "Batanghari River Pewangi Baju Konsentrat Kemasan 550ml (Rose)",
      price: "Rp 7.000",
      category: "PEWANGI BAJU"
    },
    {
      image: "/gambarProduct/kemasan120ml.webp",
      name: "Batanghari River Pewangi Baju Konsentrat Kemasan 120ml (Rose)",
      price: "Rp 2.000",
      category: "PEWANGI BAJU"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Local Image Background styled like Diocca Home */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <img
          src="/background/backgroundSabun.jpg"
          alt="Background Sabun"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minHeight: '100%', height: '100%', maxHeight: '100vh' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-12">
          <h1
            className="font-bold text-white text-center leading-none drop-shadow-lg"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontFamily: 'Georgia, serif',
              fontWeight: 900,
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.9)'
            }}
          >
            BATANGHARI RIVER
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Sabun Cuci Berkualitas Premium
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Batanghari River menghadirkan sabun cuci dengan kualitas terbaik yang dijamin memberikan 
              kebersihan maksimal untuk pakaian Anda. Diformulasikan khusus untuk mengangkat noda 
              membandel sambil menjaga kelembutan kain.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Dengan wangi yang segar dan tahan lama, sabun kami memberikan kesegaran alami yang 
              membuat pakaian Anda tetap harum sepanjang hari. Aman untuk semua jenis kain dan 
              ramah lingkungan.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">PRODUK SABUN KAMI</h2>
            <p className="text-gray-600 text-lg">
              Berbagai pilihan sabun berkualitas untuk kebutuhan sehari-hari Anda
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {sabunProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                waNumber="6282110004602"
                waMessage="Halo kak, saya ingin memesan sabun Batanghari River"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
