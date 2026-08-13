import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, PhoneCall, TrendingUp, Sparkles, CheckCircle2, Activity, Play } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 bg-grid-pattern">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>St. Croix Resilience • Engineered Client Acquisition</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              We Don't Just Run Ads. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                We Engineer Unstoppable Market Dominance.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              No generic agency fluff. No lost leads. <strong className="text-white font-semibold">The Cruzian</strong> combines pre-verified Apollo lead data, skilled human cold calling, and sub-10s AI missed-call recovery to fill your pipeline with high-paying clients.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                "Apollo Precision Lead Sourcing",
                "Human Cold Calling That Converts",
                "Sub-10s AI Missed-Call Recovery",
                "Direct WhatsApp & ClickUp Dashboard",
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
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-base px-8 py-6 rounded-xl shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 group"
              >
                <span>CLAIM FREE GROWTH AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-6 rounded-xl text-base flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Explore Industry Systems</span>
              </Button>
            </div>

            {/* Trust Proof Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-black text-cyan-400 font-mono">$1.4M+</p>
                <p className="text-xs text-slate-400 font-mono uppercase mt-0.5">Pipeline Created</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400 font-mono">< 10s</p>
                <p className="text-xs text-slate-400 font-mono uppercase mt-0.5">SMS Missed-Call Catch</p>
              </div>
              <div>
                <p className="text-2xl font-black text-indigo-400 font-mono">100%</p>
                <p className="text-xs text-slate-400 font-mono uppercase mt-0.5">Owner Loyalty</p>
              </div>
            </div>

          </div>

          {/* Right Column High-Tech Visual Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-white/10">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                    Active Client Acquisition Feed
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ST. CROIX • US</span>
              </div>

              {/* Real-Time Lead Pipeline Simulation */}
              <div className="space-y-4">
                
                {/* Metric Box 1 */}
                <div className="bg-[#07090E]/90 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Monthly Verified Prospect Pool</p>
                    <p className="text-2xl font-bold text-cyan-400 font-mono mt-0.5">2,450+ High Intent</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Metric Box 2 */}
                <div className="bg-[#07090E]/90 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Outreach Execution Channel</p>
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