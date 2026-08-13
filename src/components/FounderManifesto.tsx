import React from "react";
import { Quote, Flame, Heart, Target, ShieldAlert, Award } from "lucide-react";

export const FounderManifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-[#07090E] text-white relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Quote Box */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-8 shadow-2xl relative">
              
              <Quote className="w-10 h-10 text-cyan-500/30 mb-4" />
              
              <blockquote className="text-base sm:text-lg font-normal text-slate-200 leading-relaxed italic mb-6">
                "A lot of agencies out there are just doing it for their own benefit, taking your retainer money and blowing it while treating client businesses like numbers. I started <span className="text-cyan-400 font-semibold not-italic">The Cruzian</span> because I genuinely care. I’m competitive as hell, I play to win, and I want to be the last one standing for our clients."
              </blockquote>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-cyan-500/20">
                  A
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Andy</h3>
                  <p className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
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
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>Real Human Leadership • Zero Copy-Paste AI Fluff</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built on Virgin Islands Pride & Relentless Execution
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed text-sm sm:text-base">
                The name <strong>Cruzian</strong> (Crucian) represents the native people of St. Croix, U.S. Virgin Islands—a tribe defined by strength, hospitality, resilience, and unyielding fight. We bring that exact same spirit to growing your business.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid sm:grid-cols-2 gap-5">
              
              <div className="bg-[#030712] rounded-2xl p-5 border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Competitive Obsession</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We study your local market like a battlefield, reverse-engineering competitor weaknesses to capture high-value prospects.
                </p>
              </div>

              <div className="bg-[#030712] rounded-2xl p-5 border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Client Loyalty First</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No burning through client money. We focus on real ROI, treating every dollar as if it came from our own pocket.
                </p>
              </div>

              <div className="bg-[#030712] rounded-2xl p-5 border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Direct Human Touch</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No ticket walls. You get direct WhatsApp and ClickUp access so strategy adjustments happen in minutes, not weeks.
                </p>
              </div>

              <div className="bg-[#030712] rounded-2xl p-5 border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Verified Lead Guarantee</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We pre-verify direct owner contacts so your team spends time closing real, qualified buyers.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};