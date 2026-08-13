import React from "react";
import { Database, PhoneCall, Bot, Megaphone, CheckCircle2 } from "lucide-react";

export const GrowthEngine: React.FC = () => {
  const pillars = [
    {
      step: "PILLAR 1",
      icon: Database,
      title: "Apollo Lead Enrichment & Sourcing",
      subtitle: "Precision Sourcing",
      description:
        "We filter business databases to pinpoint new startups created in the last 90 days, local clinic directors, roof contractors, and property owners. Verified direct phone numbers and emails.",
      points: [
        "Verified owner & manager direct mobile contacts",
        "Recent business creation filtering (<90 days)",
        "Zero wasted cold calls or dead numbers",
      ],
      accent: "text-amber-600",
    },
    {
      step: "PILLAR 2",
      icon: PhoneCall,
      title: "Human Sales Outreach & Custom Scripts",
      subtitle: "Consultative Closing",
      description:
        "Cold calling without skill burns your reputation. We deploy skilled sales callers armed with custom scripts that identify pain points, offer immediate value, and book appointments onto your calendar.",
      points: [
        "Custom, non-robotic sales scripts",
        "Skilled, persuasive sales leads",
        "Strict KPI tracking & conversion auditing",
      ],
      accent: "text-[#0B1B3D]",
    },
    {
      step: "PILLAR 3",
      icon: Bot,
      title: "Smart AI Call Routing & Missed Text-Back",
      subtitle: "Zero Lead Leakage",
      description:
        "When your staff is busy or out of office, our automated system immediately picks up or texts the prospective client back in seconds, guiding them directly to a self-booking link.",
      points: [
        "Immediate SMS text-back in < 10 seconds",
        "Instant call routing directly to mobile phones",
        "Captures hot buyers before they call a rival",
      ],
      accent: "text-emerald-700",
    },
    {
      step: "PILLAR 4",
      icon: Megaphone,
      title: "Precision Paid Ads & High-Converting Pages",
      subtitle: "Scalable Traffic",
      description:
        "Meta & Google Ads tuned directly to your hyper-local target audience. We build high-converting landing pages that convert casual browsers into ready-to-buy consults.",
      points: [
        "Hyper-local radius advertising",
        "Conversion-focused custom pages",
        "Transparent real-time ad reporting",
      ],
      accent: "text-amber-600",
    },
  ];

  return (
    <section id="engine" className="py-20 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <span>The 4-Pillar System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            How The Cruzian Engine Operates
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A battle-tested client acquisition system designed to turn cold markets into predictable, high-margin revenue.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5 relative overflow-hidden group hover:border-amber-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0B1B3D] bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    {item.step}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-bold">{item.subtitle}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white border border-slate-200 shadow-xs ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {item.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{p}</span>
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