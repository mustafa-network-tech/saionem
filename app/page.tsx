import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { WhySaion } from "@/components/sections/WhySaion";
import { ApplicationAreas } from "@/components/sections/ApplicationAreas";
import { ProductHighlight } from "@/components/sections/ProductHighlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { ScientificBenefits } from "@/components/sections/ScientificBenefits";
import { Certificates } from "@/components/sections/Certificates";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <WhySaion />
        <ApplicationAreas />
        <ProductHighlight />
        <Testimonials />
        <ScientificBenefits />
        <Certificates />
        <BlogPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
