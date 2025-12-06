"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FeaturesHero from "@/components/sections/FeaturesHero";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CTASection from "@/components/sections/CTASection";

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <FeaturesHero />
      <ServicesShowcase />
      <ProcessSection />
      <WhyChooseSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </main>
  );
}