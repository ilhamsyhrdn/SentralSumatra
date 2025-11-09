import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image - Full Cover */}
      <img
        src="/background/backgroundHome.jpg"
        alt="Diocca Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient Overlay for better text readability */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          {/* Main Title with Strong Shadow */}
          <h1 
            className="font-bold mb-4 lg:mb-6 tracking-wider text-white leading-none"
            style={{ 
              fontSize: 'clamp(60px, 12vw, 180px)', 
              fontFamily: 'Georgia, serif',
              fontWeight: 900,
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.9)'
            }}
          >
            DIOCCA
          </h1>

          {/* Subtitle */}
          <h2 
            className="mb-4 lg:mb-6 tracking-widest text-white uppercase font-bold"
            style={{
              fontSize: 'clamp(16px, 2.5vw, 28px)',
              letterSpacing: '0.15em',
              textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.7)'
            }}
          >
            PRODUK BERKUALITAS
          </h2>

          {/* Description */}
          <div className="mb-8 lg:mb-10 mx-auto text-white font-medium" style={{fontSize: 'clamp(12px, 1.5vw, 18px)', letterSpacing: '0.05em', textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)'}}>
            <p className="mb-1">SUSU BERKUALITAS PREMIUM YANG MURNI</p>
            <p className="">TANPA BAHAN PENGAWET DAN GULA TAMBAHAN</p>
          </div>

          {/* CTA Button - Modern Design */}
          <Button 
            className="px-8 py-6 lg:px-12 lg:py-7 text-base lg:text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#000000',
              color: 'white',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            LET'S GO HIDUP SEHAT
          </Button>
        </div>
      </div>
    </section>
  );
}
