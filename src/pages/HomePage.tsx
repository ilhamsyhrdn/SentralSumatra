import { Hero } from "../components/Hero";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { CategorySection } from "../components/CategorySection";
import { Newsletter } from "../components/Newsletter";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <Newsletter />
    </>
  );
}
