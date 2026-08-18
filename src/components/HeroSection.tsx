import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Activity, MessageSquare, Zap } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  const [activeTab, setActiveTab] = useState<"prospects" | "calls" | "recovery">("prospects");

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-12 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sharp Editorial Pitch */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Status Capsule */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-[#0B1B3D] rounded-full px-3.5 py-1 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-slate-500 font-bold uppercase">St. Croix Engine</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-amber-700">Accepting Q2 Client Cohorts</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0B1B3D] tracking-tight leading-[1.08]">
                Client Acquisition <br />
                <span className="italic font-serif font-normal text-slate-700">engineered for</span>{" "}
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent underline decoration-amber-300/40 underline-offset-8">
                  uncompromising market dominance.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal pt-2">
                We combine direct human phone outreach, pre-screened prospect data, and sub-10s missed call rescue into one predictable revenue engine for high-ticket businesses.
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Button
                onClick={onOpenAudit}
                className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-sm px-8 py-6 rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-3 group"
              >
                <span>GET 30-DAY GROWTH AUDIT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0B1B3D]" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Explore Playbooks</span>
              </Button>
            </div>

            {/* Micro proof badges */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">100% Pre-Verified Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Sub-10s SMS Response Speed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Interactive Command Desk */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border border-slate-200 space-y-6 relative overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono font-bold text-slate-700 ml-2 uppercase tracking-wider">
                    Cruzian Command Desk
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 text-[11px] font-mono text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SYSTEM ACTIVE</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 text-xs">
                <button
                  onClick={() => setActiveTab("prospects")}
                  className={`py-2 px-3 rounded-lg font-bold transition-all ${
                    activeTab === "prospects"
                      ? "bg-amber-500 text-[#0B1B3D] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  1. Sourcing
                </button>
                <button
                  onClick={() => setActiveTab("calls")}
                  className={`py-2 px-3 rounded-lg font-bold transition-all ${
                    activeTab === "calls"
                      ? "bg-amber-500 text-[#0B1B3D] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  2. Cold Desk
                </button>
                <button
                  onClick={() => setActiveTab("recovery")}
                  className={`py-2 px-3 rounded-lg font-bold transition-all ${
                    activeTab === "recovery"
                      ? "bg-amber-500 text-[#0B1B3D] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  3. SMS Catch
                </button>
              </div>

              {/* Dynamic Interactive Stage Content */}
              {activeTab === "prospects" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-mono font-bold">TARGET POOL MATCHED</span>
                      <span className="text-amber-700 font-mono font-black">2,450 Verified Contacts</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-white p-2.5 rounded-xl text-xs border border-slate-200">
                        <span className="text-slate-700 font-medium">Clinic Directors & Practice Owners</span>
                        <span className="text-emerald-700 font-mono font-bold">Direct Mobile Verified</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-2.5 rounded-xl text-xs border border-slate-200">
                        <span className="text-slate-700 font-medium">Commercial Property & HOAs</span>
                        <span className="text-emerald-700 font-mono font-bold">Decision Maker Direct</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Zero dead emails or gated switchboard receptionists. Every contact is manually checked before our callers dial.
                  </p>
                </div>
              )}

              {activeTab === "calls" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-mono font-bold">HUMAN CONVERSATION METRICS</span>
                      <span className="text-emerald-700 font-mono font-black">28.4% Booking Rate</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                        <div className="flex justify-between text-xs font-bold text-amber-700">
                          <span>Consultative Script Framework</span>
                          <span className="text-emerald-600 font-mono">Passed</span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium">
                          Non-robotic human conversations designed to qualify budgets and schedule directly onto your calendar.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Trained sales leads execute real conversations. Daily call summaries and logs are delivered via WhatsApp.
                  </p>
                </div>
              )}

              {activeTab === "recovery" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-mono font-bold">MISSED-CALL CAPTURE SPEED</span>
                      <span className="text-emerald-700 font-mono font-black">Under 7.8 Seconds</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-amber-700 font-mono text-[11px] font-bold">
                        <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                        <span>Automated SMS Dispatch</span>
                      </div>
                      <p className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] font-medium leading-relaxed">
                        "Hi John, sorry we missed your call! Are you looking for a consultation estimate? You can pick a time here: [calendar-link]"
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Ensures you never lose a $10k+ client when you're busy with patients or on a job site.
                  </p>
                </div>
              )}

              {/* Bottom Direct Founder Quote */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-[#0B1B3D] font-black text-[10px] flex items-center justify-center">
                    A
                  </div>
                  <span className="text-slate-800 font-bold">Founder-Led Strategy</span>
                </div>
                <span className="text-amber-700 font-mono font-bold">100% Retainer Transparency</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};