import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FounderManifesto } from "@/components/FounderManifesto";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { GrowthEngine } from "@/components/GrowthEngine";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { Footer } from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>(undefined);

  const handleOpenAudit = (industry?: string) => {
    if (industry) {
      setSelectedIndustry(industry);
    }
    setIsAuditOpen(true);
  };

  const scrollToSolutions = () => {
    const el = document.getElementById("solutions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Hero Section */}
      <HeroSection
        onOpenAudit={() => handleOpenAudit()}
        onExploreSolutions={scrollToSolutions}
      />

      {/* Founder Manifesto (Andy's vision & Cruzian heritage) */}
      <FounderManifesto />

      {/* Industry Tailored Playbooks */}
      <IndustrySolutions
        onSelectIndustry={(ind) => handleOpenAudit(ind)}
      />

      {/* Revenue & ROI Calculator */}
      <RevenueCalculator
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* 4-Pillar Growth Engine */}
      <GrowthEngine />

      {/* Cruzian vs Typical Agencies Comparison */}
      <ComparisonSection />

      {/* Footer */}
      <Footer />

      {/* Made with Dyad attribution */}
      <div className="bg-slate-950 border-t border-slate-900">
        <MadeWithDyad />
      </div>

      {/* Audit Booking Dialog Modal */}
      <AuditBookingModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        preselectedIndustry={selectedIndustry}
      />
    </div>
  );
};

export default Index;