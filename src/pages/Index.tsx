import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CalpirModulesGrid } from "@/components/CalpirModulesGrid";
import { FounderManifesto } from "@/components/FounderManifesto";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { GrowthEngine } from "@/components/GrowthEngine";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { FloatingChatWidget } from "@/components/FloatingChatWidget";
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Recreated Calpir Hero Section (White background, stacked typography, mono text, dual buttons) */}
      <HeroSection
        onOpenAudit={() => handleOpenAudit()}
        onExploreSolutions={scrollToSolutions}
      />

      {/* Recreated Calpir 3x2 Module Cards Grid (White bg, bold titles, mono descriptors, explore links) */}
      <CalpirModulesGrid />

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
      <div className="bg-[#0B1B3D] border-t border-slate-900 text-slate-400">
        <MadeWithDyad />
      </div>

      {/* Audit Booking Dialog Modal */}
      <AuditBookingModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        preselectedIndustry={selectedIndustry}
      />

      {/* Floating Bottom Right 'We Are Here!' Chat Widget */}
      <FloatingChatWidget onOpenAudit={() => handleOpenAudit()} />
    </div>
  );
};

export default Index;