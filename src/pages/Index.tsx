import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { TruthSection } from "@/components/landing/TruthSection";
import { AuthoritySection } from "@/components/landing/AuthoritySection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { QualificationSection } from "@/components/landing/QualificationSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <TruthSection />
      <AuthoritySection />
      <SolutionSection />
      <ModulesSection />
      <QualificationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
