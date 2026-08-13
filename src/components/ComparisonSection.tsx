import React from "react";
import { ShieldCheck, Flame } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: "Client Care & Owner Mindset",
      cruzian: "Andy treats your business like his own. Driven by Cruzian pride & client loyalty.",
      typical: "Treats you like invoice #402. Hands you off to a junior intern.",
    },
    {
      feature: "Outreach Execution",
      cruzian: "Skilled human phone calls + verified Apollo prospect data + custom scripts.",
      typical: "Mass spammed automated emails that land in spam folders.",
    },
    {
      feature: "Missed-Call Recovery",
      cruzian: "Instant AI Text-Back in < 10s so busy contractors or clinics never lose a lead.",
      typical: "Call goes to voicemail. Lead calls a competitor immediately.",
    },
    {
      feature: "Communication & Tools",
      cruzian: "Direct WhatsApp & ClickUp access. Real-time updates & no gatekeeping.",
      typical: "Slow email ticketing system that takes 5 business days to reply.",
    },
    {
      feature: "Focus Metric",
      cruzian: "Actual converted appointments & revenue added to your bottom line.",
      typical: "Vanity impressions, clicks, and useless 'reach' charts.",
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-[#07090E] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
            <Flame className="w-3.5 h-3.5 text-cyan-400" />
            <span>Unapologetic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Business Owners Choose The Cruzian
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See why typical agencies fail small businesses and how our hands-on, competitive approach wins.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="mt-12 glass-panel rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-[#030712] p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-4 text-slate-400 font-mono">Core Capability</div>
            <div className="col-span-4 sm:col-span-4 text-cyan-400 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>THE CRUZIAN ENGINE</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-500 font-mono">Typical Marketing Agencies</div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm">
                
                {/* Feature Name */}
                <div className="col-span-4 sm:col-span-4 font-bold text-white pr-2">
                  {item.feature}
                </div>

                {/* The Cruzian Advantage */}
                <div className="col-span-4 sm:col-span-4 bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/20 text-slate-200 font-medium leading-relaxed flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>{item.cruzian}</span>
                </div>

                {/* Typical Agency */}
                <div className="col-span-4 sm:col-span-4 p-3 text-slate-400 leading-relaxed flex items-start gap-2 pr-2">
                  <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✕
                  </div>
                  <span>{item.typical}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};