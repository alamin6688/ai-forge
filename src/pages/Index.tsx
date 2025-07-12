
import HeroSection from "../components/Home/HeroSection";
import Tools3DCarousel from "../components/Home/Tools3DCarousel";
import FeaturedTools from "../components/Home/FeaturedTools";
import HowItWorks from "../components/Home/HowItWorks";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import ContentShowcase from "../components/Home/ContentShowcase";
import AICapabilities from "../components/Home/AICapabilities";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Tools3DCarousel />
        <FeaturedTools />
        <ContentShowcase />
        <AICapabilities />
        <HowItWorks />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
