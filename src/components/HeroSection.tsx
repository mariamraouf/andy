import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, PhoneCall, TrendingUp, Sparkles, CheckCircle2, TreePalm as PalmTree, Star, ShieldCheck, Users } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      
      {/* Background Soft Subtle Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2.5 bg-amber-50 border border-amber-300 text-[#0B1B3D] rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold shadow-xs">
              <span className="bg-amber-500 text-[#0B1B3D] px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                USVI GRIT
              </span>
              <div className="flex items-center gap-1.5 font-semibold">
                <PalmTree className="w-4 h-4 text-amber-600" />
                <span>Engineered Local Market Dominance</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#0B1B3D]">
              We Don't Just Run Ads. <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                We Build Unstoppable Market Dominance.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              No generic fluff. No ghost leads. <strong className="text-[#0B1B3D]">The Cruzian</strong> combines pre-verified Apollo lead data, skilled human cold calling, and sub-10s AI missed-call recovery to fill your calendar with high-paying clients.
            </p>

            {/* Quick Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                "Apollo Precision B2B Lead Sourcing",
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                onClick={onOpenAudit}
                className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-base px-8 py-6 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-3 group"
              >
                <span>CLAIM FREE GROWTH AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-slate-300 bg-white hover:bg-slate-50 text-[#0B1B3D] font-bold px-6 py-6 rounded-2xl text-base flex items-center justify-center gap-2 shadow-xs"
              >
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Explore Playbooks</span>
              </Button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-100">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#0B1B3D] text-amber-400 font-black text-sm flex items-center justify-center border-2 border-white shadow-sm">
                  A
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500 text-[#0B1B3D] font-black text-sm flex items-center justify-center border-2 border-white shadow-sm">
                  DR
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center border-2 border-white shadow-sm">
                  CR
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-[#0B1B3D] ml-1">5.0 Rating</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Trusted by Doctors, Roofers, Landscapers & Local SMBs
                </p>
              </div>
            </div>

          </div>

          {/* Right Column Dashboard Interactive Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-slate-800 space-y-6">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Live Pipeline Status
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-mono font-bold">ST. CROIX ENGINE</span>
              </div>

              {/* Metric Card 1 */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center justify-between shadow-inner">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Monthly Verified Prospect Pool</p>
                  <p className="text-2xl font-black text-amber-400 font-mono mt-0.5">2,450+ Target Contacts</p>
                </div>
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center justify-between shadow-inner">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Outreach Execution Channels</p>
                  <p className="text-lg font-bold text-white font-mono mt-0.5">Human Call + SMS + LinkedIn</p>
                </div>
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                  <PhoneCall className="w-6 h-6" />
                </div>
              </div>

              {/* AI Missed Call Recovery */}
              <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent rounded-2xl p-4 border border-amber-500/30 space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Sub-10s AI Missed-Call Catch</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Locks in prospective clients instantly if your team is on job sites or with patients.
                </p>
              </div>

              {/* Founder quote tag */}
              <div className="pt-2 text-xs text-slate-400 italic text-center border-t border-slate-800/80">
                "We treat your revenue like our own money." — Andy
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
</dyad-file>

<dyad-write path="src/components/GrowthEngine.tsx" description="4-Pillars growth engine redesigned as a clean white Bento Grid matching the uploaded reference mock">
import React from "react";
import { Database, PhoneCall, Bot, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";

export const GrowthEngine: React.FC = () => {
  const pillars = [
    {
      num: "01",
      icon: Database,
      title: "Apollo Precision Lead Enrichment",
      badge: "Target Sourcing",
      desc: "We filter live business databases to isolate newly formed companies, clinic directors, roof contractors, and property owners with direct mobile numbers.",
      bullets: [
        "Verified direct owner phone numbers & emails",
        "Target business creation in past 90 days",
        "Zero dead leads or useless call lists",
      ],
    },
    {
      num: "02",
      icon: PhoneCall,
      title: "Human Cold Calling & Outreach",
      badge: "High Conversion",
      desc: "Skilled sales callers armed with non-robotic scripts open real human conversations with decision makers and book appointments onto your calendar.",
      bullets: [
        "Custom consultative sales scripting",
        "Dedicated sales leads assigned to your account",
        "Daily appointment reporting in ClickUp",
      ],
    },
    {
      num: "03",
      icon: Bot,
      title: "Sub-10s Smart Call Recovery",
      badge: "Zero Lead Leakage",
      desc: "When job site noise or front-desk duties cause a missed call, our AI text-back sends an SMS in < 10 seconds to lock the prospect into a booking link.",
      bullets: [
        "Sub-10 second automated text-back",
        "Instant call routing straight to mobile phones",
        "Captures buyers before they call competitors",
      ],
    },
    {
      num: "04",
      icon: Megaphone,
      title: "Paid Ads & GoHighLevel Setup",
      badge: "Scalable Traffic",
      desc: "Targeted Meta & Google radius ads paired with complete GoHighLevel CRM setup for automated client nurturing and long-term retainer growth.",
      bullets: [
        "Hyper-local radius Facebook & Instagram ads",
        "High-converting landing pages",
        "Full ClickUp & GoHighLevel integration",
      ],
    },
  ];

  return (
    <section id="engine" className="py-20 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <span>The 4-Pillar Customer System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            How The Cruzian Engine Operates
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A battle-tested client acquisition system designed to turn cold local markets into predictable, high-margin revenue.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 relative overflow-hidden group hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all"
              >
                
                {/* Header row with step number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-amber-400 font-black font-mono text-lg flex items-center justify-center shadow-md">
                    {item.num}
                  </div>
                  <span className="bg-amber-100 text-[#0B1B3D] text-xs font-mono font-bold px-3 py-1 rounded-full border border-amber-300">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-amber-600 shrink-0" />
                    <h3 className="text-2xl font-black text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-200/80">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-slate-800 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};