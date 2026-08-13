import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { GrowthEngine } from "@/components/GrowthEngine";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { FounderManifesto } from "@/components/FounderManifesto";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { Footer } from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Clean Navigation Bar */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Spacious Visual Hero Section */}
      <HeroSection
        onOpenAudit={() => handleOpenAudit()}
        onExploreSolutions={scrollToSolutions}
      />

      {/* 3 Core System Pillars */}
      <GrowthEngine />

      {/* Industry Tailored Playbooks */}
      <IndustrySolutions
        onSelectIndustry={(ind) => handleOpenAudit(ind)}
      />

      {/* Founder Manifesto & Heritage */}
      <FounderManifesto />

      {/* Interactive ROI Calculator */}
      <RevenueCalculator
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Side-by-Side Comparison */}
      <ComparisonSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Direct Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to Win Your Local Market?</h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base font-normal">
                Get a personalized 30-day customer acquisition strategy directly from Andy.
              </p>
            </div>
            <Button
              onClick={() => handleOpenAudit()}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-xl text-base shadow-lg shrink-0"
            >
              Claim Free Audit Now
            </Button>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <Footer />

      {/* Attribution */}
      <div className="bg-[#0B1B3D] border-t border-slate-800 text-slate-400">
        <MadeWithDyad />
      </div>

      {/* Audit Modal */}
      <AuditBookingModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        preselectedIndustry={selectedIndustry}
      />
    </div>
  );
};

export default Index;