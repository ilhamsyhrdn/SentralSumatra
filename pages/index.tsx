import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategorySection } from "@/components/CategorySection";
import { OtherProducts } from "@/components/OtherProducts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <OtherProducts />
      <CategorySection />
    </>
  );
}
