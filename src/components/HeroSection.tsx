import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PhoneCall, TrendingUp, Zap, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="bg-white text-slate-900 pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-[#0B1B3D] rounded-full px-4 py-1.5 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>St. Croix USVI • Managed Customer Acquisition</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1B3D] tracking-tight leading-[1.1]">
              Predictable Client Growth. <br />
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Zero Lost Opportunities.
              </span>
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-normal max-w-2xl">
              We engineer direct outreach and instant lead recovery for medical clinics, contractors, and local service leaders. No ghost leads, no retainer burning.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                onClick={onOpenAudit}
                className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-base px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <span>Get Free Growth Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-6 rounded-xl text-base"
              >
                <span>Explore Playbooks</span>
              </Button>
            </div>

            {/* Simple Value Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Direct Contacts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sub-10s Missed Call SMS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct WhatsApp Access</span>
              </div>
            </div>

          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">Live Performance</span>
                  <h3 className="text-lg font-bold text-[#0B1B3D]">Client Acquisition Engine</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Visual Progress Stats */}
              <div className="space-y-4">
                
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-600">Monthly Prospect Pool</span>
                    <span className="font-mono text-[#0B1B3D] font-bold">2,450 Verified</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[82%] h-full bg-amber-500 rounded-full" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-600">Missed-Call Catch Speed</span>
                    <span className="font-mono text-emerald-600 font-bold">< 8 Seconds</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>

                <div className="bg-[#0B1B3D] text-white p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                    <span>Founder-Led Campaign Management</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Andy personally reviews your market data and builds custom phone scripts for maximum conversion.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};