import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, PhoneCall, TrendingUp, Sparkles, CheckCircle2, PalmTree } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-12 pb-20 lg:pt-20 lg:pb-28 bg-grid-pattern-light border-b border-slate-200">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-[#0B1B3D] rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold shadow-sm">
              <PalmTree className="w-4 h-4 text-amber-600" />
              <span>St. Croix Resilience • Engineered Client Acquisition</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0B1B3D]">
              We Don't Just Run Ads. <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                We Build Unstoppable Market Dominance.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              No generic fluff. No ghost leads. <strong className="text-[#0B1B3D]">The Cruzian</strong> combines pre-verified Apollo lead data, skilled human cold calling, and sub-10s AI missed-call recovery to fill your pipeline with high-paying clients.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                "Apollo Precision Lead Sourcing",
                "Human Cold Calling That Converts",
                "Sub-10s AI Missed-Call Recovery",
                "Direct WhatsApp & ClickUp Access",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-800 font-semibold text-sm">
                  <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
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
                className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-base px-8 py-6 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-3 group"
              >
                <span>CLAIM FREE GROWTH AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-slate-300 bg-white hover:bg-slate-50 text-[#0B1B3D] font-bold px-6 py-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-sm"
              >
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Explore Playbooks</span>
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200">
              <div>
                <p className="text-2xl font-black text-[#0B1B3D] font-mono">$1.4M+</p>
                <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">Pipeline Created</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber-600 font-mono">< 10s</p>
                <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">SMS Missed-Call Catch</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0B1B3D] font-mono">100%</p>
                <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">Owner Loyalty</p>
              </div>
            </div>

          </div>

          {/* Right Column Metric Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-slate-800 space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Cruzian Pipeline Active
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-mono font-bold">ST. CROIX • US</span>
              </div>

              {/* Metric Box 1 */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Monthly Verified Prospect Pool</p>
                  <p className="text-2xl font-black text-amber-400 font-mono mt-0.5">2,450+ High Intent</p>
                </div>
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* Metric Box 2 */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Outreach Execution Channels</p>
                  <p className="text-lg font-bold text-white font-mono mt-0.5">Phone + Email + LinkedIn</p>
                </div>
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                  <PhoneCall className="w-6 h-6" />
                </div>
              </div>

              {/* AI Missed Call Recovery */}
              <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-transparent rounded-2xl p-4 border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Sub-10s Missed-Call Recovery</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automatically texts callers in seconds if your staff is on job sites or with patients.
                </p>
              </div>

              <div className="pt-2 text-xs text-slate-400 italic">
                "We play to win and we stay in the trenches with our clients." — Andy
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};