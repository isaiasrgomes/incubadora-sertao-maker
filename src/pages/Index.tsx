import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ProgramsSection from "@/components/ProgramsSection";
import StartupsSection from "@/components/StartupsSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ProgramsSection />
      <StartupsSection />
      <TeamSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
