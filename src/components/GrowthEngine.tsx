import React from "react";
import { Database, PhoneCall, Bot, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";

export const GrowthEngine: React.FC = () => {
  const pillars = [
    {
      step: "PILLAR 1",
      icon: Database,
      title: "Apollo Lead Enrichment & Sourcing",
      subtitle: "Precision Targeting",
      description:
        "We filter business databases to pinpoint new startups created in the last 90 days, local clinic directors, roof contractors, and property owners. Verified direct phone numbers and emails—no outdated lists.",
      points: [
        "Verified owner & manager contact data",
        "Recent business creation filtering",
        "Zero wasted cold calls or dead numbers",
      ],
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
      accent: "text-amber-400",
    },
    {
      step: "PILLAR 2",
      icon: PhoneCall,
      title: "Human-First Sales Outreach & Scripts",
      subtitle: "Empathetic Closing",
      description:
        "Cold calling without skill burns your reputation. We deploy skilled sales callers armed with custom scripts that identify pain points, offer immediate value, and book appointments onto your calendar.",
      points: [
        "Custom, non-robotic sales scripts",
        "Skilled, persuasive sales leads",
        "Strict KPI tracking & conversion auditing",
      ],
      color: "from-orange-500/20 to-amber-500/10 border-orange-500/30",
      accent: "text-orange-400",
    },
    {
      step: "PILLAR 3",
      icon: Bot,
      title: "Smart AI Call Routing & Missed Text Back",
      subtitle: "Zero Lead Leakage",
      description:
        "When your staff is busy or out of office, our automated system immediately picks up or texts the prospective client back in seconds, guiding them directly to a self-booking link.",
      points: [
        "Immediate SMS text-back in < 10 seconds",
        "Instant call routing to your cell",
        "Captures hot buyers before they call a rival",
      ],
      color: "from-emerald-500/20 to-amber-500/10 border-emerald-500/30",
      accent: "text-emerald-400",
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
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
      accent: "text-amber-400",
    },
  ];

  return (
    <section id="engine" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            <span>The 4-Pillar System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How The Cruzian Engine Operates
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
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
                className={`bg-slate-900/90 rounded-3xl p-8 border ${item.color} shadow-xl space-y-5 relative overflow-hidden group hover:border-amber-500/60 transition-all`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {item.step}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{item.subtitle}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl bg-slate-950 border border-slate-800 ${item.accent}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {item.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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