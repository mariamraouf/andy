import React from "react";
import { Quote, Flame, Heart, Target, ShieldAlert, Award, TreePalm as PalmTree } from "lucide-react";

export const FounderManifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Deep Navy Quote Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 shadow-2xl relative border border-slate-800">
              
              <Quote className="w-12 h-12 text-amber-400/40 mb-4" />
              
              <blockquote className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed italic mb-6">
                "A lot of agencies out there are just doing it for their own benefit, taking your retainer money and blowing it while treating client businesses like numbers. I started <span className="text-amber-400 font-bold not-italic">The Cruzian</span> because I genuinely care. I’m competitive as hell, I play to win, and I want to be the last one standing for our clients."
              </blockquote>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center font-black text-[#0B1B3D] text-xl shadow-md">
                  A
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Andy</h3>
                  <p className="text-xs text-amber-400 font-mono uppercase tracking-wider">
                    Founder, The Cruzian Engine
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    St. Croix / U.S. Virgin Islands Heritage
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Values */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300 mb-3">
                <PalmTree className="w-4 h-4 text-amber-600" />
                <span>Cruzian Pride & Warrior Mindset</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight">
                Built on Virgin Islands Resilience & Relentless Execution
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base font-medium">
                The name <strong>Cruzian</strong> (Crucian) represents the native people of St. Croix, U.S. Virgin Islands—a tribe defined by strength, hospitality, resilience, and unyielding fight. We bring that exact same spirit to growing your business.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid sm:grid-cols-2 gap-5">
              
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Competitive Obsession</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We study your local market like a battlefield, reverse-engineering competitor weaknesses to capture high-value prospects.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0B1B3D] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Client Loyalty First</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No burning through client money. We focus on real ROI, treating every dollar as if it came from our own pocket.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Direct Human Touch</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No ticket walls. You get direct WhatsApp and ClickUp access so strategy adjustments happen in minutes, not weeks.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Verified Lead Guarantee</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
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