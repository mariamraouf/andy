import React from "react";
import { Quote, TreePalm as PalmTree } from "lucide-react";

export const FounderManifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Quote Block */}
          <div className="lg:col-span-6 bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
            <Quote className="w-10 h-10 text-amber-400/40" />
            <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic">
              "A lot of agencies out there are just taking your retainer money and blowing it while treating client businesses like numbers. I started <span className="text-amber-400 font-bold not-italic">The Cruzian</span> because I genuinely care. I’m competitive as hell, I play to win, and I want to be the last one standing for our clients."
            </blockquote>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-[#0B1B3D] font-black text-xl flex items-center justify-center">
                A
              </div>
              <div>
                <h3 className="font-bold text-white">Andy</h3>
                <p className="text-xs text-amber-400 font-mono">Founder & Lead Strategist</p>
              </div>
            </div>
          </div>

          {/* St. Croix Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-[#0B1B3D] rounded-full px-3.5 py-1 text-xs font-bold">
              <PalmTree className="w-4 h-4 text-amber-600" />
              <span>St. Croix Heritage & Unyielding Grit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight">
              Why We Call Ourselves "The Cruzian"
            </h2>

            <p className="text-slate-600 leading-relaxed text-base font-normal">
              <strong>Cruzian</strong> refers to the proud native people of St. Croix in the U.S. Virgin Islands—a community built on strength, resilience, and standing tall through hardship.
            </p>

            <p className="text-slate-600 leading-relaxed text-base font-normal">
              When Andy brought this identity to marketing, the standard was set: no automated laziness, no junior handoffs, and direct WhatsApp communication. Every client dollar is treated with the exact same respect as our own.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};