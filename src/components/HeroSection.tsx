import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Flame, Zap, PhoneCall, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-transparent border border-amber-500/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-300">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Rooted in St. Croix Resilience & Unstoppable Grit</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              We Don't Just Run Ads. <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                We Build Unstoppable Market Dominance.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              No generic fluff. No phantom leads. <strong className="text-white font-semibold">The Cruzian</strong> helps medical practices, contractors, restaurants, and local businesses capture high-paying clients, dominate cold outreach, and outlast every competitor.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                "Targeted Apollo Lead Sourcing",
                "Human Cold Calling That Converts",
                "Smart AI Missed-Call Recovery",
                "0% Agency Fluff, 100% Client Loyalty",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-200 font-medium text-sm">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                onClick={onOpenAudit}
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-base px-8 py-6 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-3 group"
              >
                <span>CLAIM YOUR FREE GROWTH AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-6 rounded-xl text-base flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>See Industry Playbooks</span>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center font-bold text-amber-400 text-xs">Dr.M</div>
                <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-slate-950 flex items-center justify-center font-bold text-slate-950 text-xs">RF</div>
                <div className="w-10 h-10 rounded-full bg-orange-600 border-2 border-slate-950 flex items-center justify-center font-bold text-white text-xs">LS</div>
              </div>
              <div>
                <p className="text-xs text-slate-400">
                  <span className="text-white font-bold">Direct Communication</span> via WhatsApp & ClickUp • No Hidden Fees
                </p>
                <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                  {"★".repeat(5)}
                  <span className="text-slate-300 ml-1 font-semibold">100% Owner-led Execution</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Interactive Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Live Cruzian Campaign Engine
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ST. CROIX • US</span>
              </div>

              {/* Real-Time Lead Pipeline Simulation */}
              <div className="space-y-4">
                
                {/* Metric Box 1 */}
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Monthly Verified Prospect Pool</p>
                    <p className="text-2xl font-black text-amber-400 font-mono mt-0.5">2,450+ High Intent</p>
                  </div>
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                {/* Metric Box 2 */}
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Human Outreach & Lead Verification</p>
                    <p className="text-xl font-bold text-white font-mono mt-0.5">Phone + Email + LinkedIn</p>
                  </div>
                  <div className="p-3 bg-orange-500/10 text-orange-400 rounded-lg">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                </div>

                {/* Missed Call AI Recovery feature */}
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Instant Call Recovery System</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    When your front desk or job site phone goes unanswered, our instant automated text-back routes the prospect straight to your booking link before they call a competitor.
                  </p>
                </div>

                {/* Live Activity Feed item */}
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-slate-300 font-medium">Medical Practice Client:</span>
                  </div>
                  <span className="text-emerald-400 font-bold">+14 Consultations Booked This Week</span>
                </div>

                {/* Guarantee Banner */}
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    "We care about your revenue, not just vanity clicks. We do the dirty work others refuse to do." — Andy
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