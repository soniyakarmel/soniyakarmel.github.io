import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <FeaturedDesigns />
      <AboutPreview />
      <Testimonials />
    </>
  );
}
