import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, PhoneCall, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative overflow-hidden bg-[#07090E] text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Subtle modern radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>St. Croix Resilience & Unstoppable Grit</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              We Don't Just Run Ads. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                We Engineer Market Dominance.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              No generic agency fluff. No lost leads. <strong className="text-white font-semibold">The Cruzian</strong> helps medical practices, contractors, restaurants, and local businesses capture high-paying clients, dominate cold outreach, and outlast competitors.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                "Apollo Precision Lead Sourcing",
                "Human Cold Calling That Converts",
                "Smart AI Missed-Call Recovery",
                "Direct WhatsApp & ClickUp Access",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Button
                onClick={onOpenAudit}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 group"
              >
                <span>CLAIM YOUR FREE GROWTH AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-6 rounded-xl text-base flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Explore Playbooks</span>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4 flex items-center gap-4 border-t border-white/10">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-cyan-400 text-xs">Dr.M</div>
                <div className="w-9 h-9 rounded-full bg-indigo-600 border border-slate-700 flex items-center justify-center font-bold text-white text-xs">RF</div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 border border-slate-700 flex items-center justify-center font-bold text-white text-xs">LS</div>
              </div>
              <div>
                <p className="text-xs text-slate-400">
                  <span className="text-white font-semibold">Direct Founder Support</span> via WhatsApp & ClickUp • Zero Gatekeeping
                </p>
                <div className="flex items-center gap-1 text-cyan-400 text-xs mt-0.5">
                  {"★".repeat(5)}
                  <span className="text-slate-300 ml-1 font-medium">100% Owner-Led Execution</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column High-Tech Visual Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                    Cruzian Pipeline Engine
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ST. CROIX • US</span>
              </div>

              {/* Real-Time Lead Pipeline Simulation */}
              <div className="space-y-4">
                
                {/* Metric Box 1 */}
                <div className="bg-[#07090E]/80 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Monthly Verified Prospect Pool</p>
                    <p className="text-2xl font-bold text-cyan-400 font-mono mt-0.5">2,450+ High Intent</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Metric Box 2 */}
                <div className="bg-[#07090E]/80 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Human Outreach Channel</p>
                    <p className="text-lg font-bold text-white font-mono mt-0.5">Phone + Email + LinkedIn</p>
                  </div>
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </div>

                {/* Missed Call AI Recovery feature */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-xl p-4 border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs mb-1">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Instant Call Recovery System</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated SMS text-back picks up unanswered calls in <10s, guiding hot prospects directly to your booking calendar.
                  </p>
                </div>

                {/* Live Activity Feed item */}
                <div className="bg-[#07090E] p-3 rounded-lg border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-300 font-medium">Medical Practice Client:</span>
                  </div>
                  <span className="text-emerald-400 font-bold">+14 Consultations This Week</span>
                </div>

                {/* Guarantee Banner */}
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>
                    "We care about revenue added, not vanity impression charts." — Andy
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};