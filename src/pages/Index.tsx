
import HeroSection from "@/components/Home/HeroSection";
import FeaturedTools from "@/components/Home/FeaturedTools";
import HowItWorks from "@/components/Home/HowItWorks";
import PricingSection from "@/components/Home/PricingSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTools />
        <HowItWorks />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
