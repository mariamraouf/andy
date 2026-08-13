import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative bg-white text-slate-900 pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 overflow-hidden">
      
      {/* Background Soft Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Top Centered Location Pill (as seen in Calpir mock) */}
        <div className="inline-block border border-[#0B1B3D]/30 bg-slate-50 px-5 py-2 rounded-full shadow-sm">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#0B1B3D] tracking-widest uppercase">
            ST. CROIX BASED CLIENT ACQUISITION & AI AUTOMATION
          </span>
        </div>

        {/* Massive Impact Stacked Headline */}
        <div className="space-y-1 sm:space-y-3">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-[0.88]">
            LAUNCH YOUR
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-[0.88]">
            DOMINANCE.
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-amber-500 tracking-tighter uppercase leading-[0.88] pt-1">
            IN 7 DAYS.
          </h1>
        </div>

        {/* Monospace Tech Subtitle */}
        <p className="max-w-3xl mx-auto font-mono text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
          Complete client acquisition infrastructure deployed in record time. Verified Apollo Data, Human Cold Callers, AI Call Recovery, and GoHighLevel CRM integrated into one powerful system.
        </p>

        {/* Hero Dual CTA Buttons (Matching Calpir structure) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto">
          <Button
            onClick={onOpenAudit}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-sm sm:text-base px-8 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
          >
            <span>BOOK STRATEGY CALL WITH ANDY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={onExploreSolutions}
            variant="outline"
            className="w-full sm:w-auto border-2 border-[#0B1B3D] text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white font-black text-sm sm:text-base px-8 py-7 rounded-xl transition-all"
          >
            TAKE THE FREE ASSESSMENT
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-mono font-bold text-slate-600 uppercase border-t border-slate-200/80 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sub-10s Missed Call Text-Back</span>
          </div>
          <div>•</div>
          <div>Apollo Verified Sourcing</div>
          <div>•</div>
          <div>Direct WhatsApp & ClickUp Dashboard</div>
        </div>

      </div>
    </section>
  );
};