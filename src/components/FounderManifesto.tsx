import React from "react";
import { Quote, Flame, Heart, Target, ShieldAlert, Award, ArrowUpRight } from "lucide-react";

export const FounderManifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-slate-900 text-white relative border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Quote Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-8 border border-amber-500/30 shadow-2xl">
              
              <Quote className="w-12 h-12 text-amber-500/40 mb-4" />
              
              <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic mb-6">
                "A lot of agencies out there are just doing it for their own benefit, taking your retainer money and blowing it while treating client businesses like numbers. I started <span className="text-amber-400 font-bold not-italic">The Cruzian</span> because I genuinely care. I’m competitive as hell, I play to win, and I want to be the last one standing for our clients."
              </blockquote>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-amber-500/20">
                  A
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Andy</h3>
                  <p className="text-xs text-amber-400 font-mono uppercase tracking-wider">
                    Founder, The Cruzian Engine
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    St. Croix / U.S. Virgin Islands Roots
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Values */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>Real Human Leadership • Zero Copy-Paste AI Fluff</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Built on Virgin Islands Pride & Relentless Execution
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                The name <strong>Cruzian</strong> (Crucian) represents the people and heritage of St. Croix, U.S. Virgin Islands—a tribe defined by strength, hospitality, resilience, and unyielding fight. We bring that exact same spirit to growing your business.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Competitive Obsession</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  We study your local market like a battlefield. If competitors are taking your potential clients, we reverse-engineer their channels and capture the market share.
                </p>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Client & Staff Loyalty First</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  No burning through client money. We focus on real ROI, treating every dollar as if it came from our own pocketbook.
                </p>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Direct Human Touch</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  We don't hide behind cold tickets or automated bots. You get direct WhatsApp and ClickUp access so strategy adjustments happen in minutes, not weeks.
                </p>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Verified Lead Guarantee</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  We pre-verify phone numbers, decision-maker emails, and interest level so your team only spends time closing real buyers.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};