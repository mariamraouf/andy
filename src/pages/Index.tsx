import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { GrowthArchitecture } from "@/components/GrowthArchitecture";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { FounderManifesto } from "@/components/FounderManifesto";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { Footer } from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

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
      {/* Modern Navigation */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Hero with Interactive Command Desk */}
      <HeroSection
        onOpenAudit={() => handleOpenAudit()}
        onExploreSolutions={scrollToSolutions}
      />

      {/* Growth Architecture & Live Phone Rescue Mockup */}
      <GrowthArchitecture />

      {/* Industry Tailored Playbooks */}
      <IndustrySolutions
        onSelectIndustry={(ind) => handleOpenAudit(ind)}
      />

      {/* Founder Manifesto & Heritage */}
      <FounderManifesto />

      {/* Interactive Financial ROI Calculator */}
      <RevenueCalculator
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Side-by-Side Comparison */}
      <ComparisonSection />

      {/* Elegant High-Impact Call to Action Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800 relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 text-amber-400 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Risk • Founder Consultation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Ready to Claim Your Local Territory?
              </h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base font-normal">
                Receive a bespoke 30-day client acquisition blueprint drafted directly by Andy. We inspect your local competition and show you where deals are slipping.
              </p>
            </div>

            <Button
              onClick={() => handleOpenAudit()}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-2xl text-base shadow-xl shrink-0 z-10 flex items-center gap-2"
            >
              <span>CLAIM FREE AUDIT NOW</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
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