
import HeroSection from "../components/Home/HeroSection";
import FeaturedTools from "../components/Home/FeaturedTools";
import HowItWorks from "../components/Home/HowItWorks";
import ContentShowcase from "../components/Home/ContentShowcase";
import AICapabilities from "../components/Home/AICapabilities";
import WhyDifferentSection from "../components/Home/WhyDifferentSection";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="section-bg">
          <FeaturedTools />
        </div>
        <div className="section-bg-alt">
          <ContentShowcase />
        </div>
        <div className="section-bg">
          <AICapabilities />
        </div>
        <div className="section-bg-alt">
          <WhyDifferentSection />
        </div>
        <div className="section-bg">
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
