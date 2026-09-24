import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Philosophy } from "@/components/Philosophy";
import { Marquee } from "@/components/Marquee";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Philosophy />
      <Marquee />
      <CTA />
    </>
  );
}
