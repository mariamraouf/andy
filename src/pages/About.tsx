import React from "react";
import { Quote, Flame, Heart, Target, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutProps {
  onOpenAudit: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAudit }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-white">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
          <Flame className="w-3.5 h-3.5" />
          <span>The Cruzian Heritage & Philosophy</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          Who Is <span className="text-amber-400">The Cruzian</span>?
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Founded on Virgin Islands pride, competitive obsession, and genuine client care. We exist to help local business owners outlast their rivals and win.
        </p>
      </div>

      {/* FOUNDER UNFILTERED STORY */}
      <div className="grid lg:grid-cols-12 gap-12 items-center bg-slate-900/90 rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl bg-slate-950 p-8 border border-slate-800 space-y-4">
            <Quote className="w-10 h-10 text-amber-400/30" />
            <blockquote className="text-base sm:text-lg font-medium text-slate-200 italic leading-relaxed">
              "A lot of agencies out there are just doing it for their own benefit, taking your retainer money and blowing it while treating client businesses like numbers. I started The Cruzian because I genuinely care. I’m competitive as hell, I play to win, and I want to be the last one standing for our clients."
            </blockquote>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center font-black text-slate-950 text-lg">
                A
              </div>
              <div>
                <h3 className="font-bold text-white">Andy</h3>
                <p className="text-xs text-amber-400 font-mono">Founder & Lead Growth Strategist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-black text-white">
            What Does "Cruzian" Mean?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            <strong>Cruzian</strong> (or Crucian) refers to the proud native people of St. Croix in the U.S. Virgin Islands. It represents a culture defined by unyielding resilience, warm hospitality, and toughness in the face of hurricanes and hardship.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            When Andy brought this identity to business marketing, the mission was simple: bring that exact same warrior spirit to helping business owners thrive. In markets filled with low-effort digital noise, we do the direct, manual work that others run away from.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-bold text-amber-400 text-sm">Competitive Obsession</h4>
              <p className="text-xs text-slate-400 mt-1">We study your competitors' weaknesses and capture their high-value prospects.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-bold text-orange-400 text-sm">Client Loyalty First</h4>
              <p className="text-xs text-slate-400 mt-1">No blowing retainer budgets. We treat every dollar as if it were our own money.</p>
            </div>
          </div>
        </div>

      </div>

      {/* OUR 4 CORE PROMISES */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black text-white">The Cruzian Core Directives</h2>
          <p className="text-slate-400 text-sm">Our operational promises to every single business owner we partner with.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Verified Sourcing",
              text: "We pre-verify phone numbers and emails so cold outreach is never wasted on dead contacts.",
            },
            {
              icon: Heart,
              title: "Human Touch",
              text: "No robotic cold call scripts. Real, trained sales leads having real human conversations.",
            },
            {
              icon: ShieldCheck,
              title: "Zero Lead Leakage",
              text: "Smart AI call recovery picks up missed calls instantly and routes prospects to self-booking.",
            },
            {
              icon: Award,
              title: "Direct WhatsApp Access",
              text: "You speak directly to Andy and team via WhatsApp and ClickUp—no junior ticketing walls.",
            },
          ].map((promise, idx) => {
            const Icon = promise.icon;
            return (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{promise.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{promise.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center bg-slate-900 border border-amber-500/30 rounded-3xl p-10 space-y-6">
        <h2 className="text-3xl font-black text-white">Want to Partner with Andy?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Claim your free 30-day growth audit. We'll inspect your local competitors and show you exactly where leads are slipping through the cracks.
        </p>
        <Button
          onClick={onOpenAudit}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-5 rounded-xl shadow-lg"
        >
          Claim Free Growth Audit Now
        </Button>
      </div>

    </div>
  );
};