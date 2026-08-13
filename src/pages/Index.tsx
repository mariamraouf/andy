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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Hero Section */}
      <HeroSection
        onOpenAudit={() => handleOpenAudit()}
        onExploreSolutions={scrollToSolutions}
      />

      {/* Tool Integration Ticker Strip */}
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
            Powered By Integrated Growth Tech Infrastructure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
            {["Apollo.io Lead Sourcing", "GoHighLevel CRM", "Meta Lead Ads", "Google Search Ads", "ClickUp Management", "WhatsApp Direct"].map((tool, idx) => (
              <span key={idx} className="font-bold text-sm text-[#0B1B3D] tracking-tight">
                • {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Pillar Customer Acquisition Engine */}
      <GrowthEngine />

      {/* Industry Tailored Playbooks */}
      <IndustrySolutions
        onSelectIndustry={(ind) => handleOpenAudit(ind)}
      />

      {/* Founder Manifesto (Andy's vision & Cruzian heritage) */}
      <FounderManifesto />

      {/* Interactive Revenue & ROI Calculator */}
      <RevenueCalculator
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Cruzian vs Typical Agencies Comparison Table */}
      <ComparisonSection />

      {/* Final Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Direct Founder Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to Win Your Local Market?</h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base font-medium">
                Get a personalized 30-day customer acquisition blueprint directly from Andy. No pressure, no generic sales pitch.
              </p>
            </div>
            <Button
              onClick={() => handleOpenAudit()}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-2xl text-base shadow-xl shrink-0"
            >
              Claim Free Audit Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Made with Dyad attribution */}
      <div className="bg-[#0B1B3D] border-t border-slate-800 text-slate-400">
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