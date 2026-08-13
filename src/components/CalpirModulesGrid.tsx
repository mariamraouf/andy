import React from "react";
import { Link } from "react-router-dom";
import { Globe, BarChart3, Bot, Zap, Code2, Settings2, ArrowRight } from "lucide-react";

export const CalpirModulesGrid: React.FC = () => {
  const modules = [
    {
      icon: Globe,
      title: "WEBSITE & BRANDING",
      desc: "High conversion digital foundation built for speed and market dominance.",
      link: "/services#ads-crm",
    },
    {
      icon: BarChart3,
      title: "CRM & SALES SYSTEMS",
      desc: "Automated lead capture, pipeline management, and GoHighLevel CRM architecture.",
      link: "/services#coldcalling",
    },
    {
      icon: Bot,
      title: "AI AGENT DEVELOPMENT",
      desc: "Autonomous AI agents that handle support, missed calls, and appointment booking 24/7.",
      link: "/services#ai-recovery",
    },
    {
      icon: Zap,
      title: "WORKFLOW AUTOMATION",
      desc: "Eliminate manual tasks with intelligent ClickUp and WhatsApp integrations.",
      link: "/services",
    },
    {
      icon: Code2,
      title: "CUSTOM APPS & AGENTS",
      desc: "We turn complex acquisition logic into high-performance sales software.",
      link: "/services#apollo",
    },
    {
      icon: Settings2,
      title: "OPERATIONS & HR",
      desc: "Documented outbound sales processes and cold caller systems for team growth.",
      link: "/about",
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            SYSTEM INFRASTRUCTURE MODULES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight uppercase">
            Integrated Acquisition Modules
          </h2>
          <p className="text-slate-600 font-mono text-xs sm:text-sm">
            Deploy full-stack business automation tailored specifically for local market expansion.
          </p>
        </div>

        {/* 3x2 Module Cards Grid (Exact replica of attached screenshot) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Gold Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-amber-500 group-hover:bg-[#0B1B3D] group-hover:text-amber-400 transition-colors">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Bold Uppercase Module Title */}
                  <h3 className="text-xl font-black text-[#0B1B3D] uppercase tracking-wide group-hover:text-amber-600 transition-colors">
                    {mod.title}
                  </h3>

                  {/* Monospace Description */}
                  <p className="font-mono text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                {/* Bottom Link Action */}
                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    to={mod.link}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#0B1B3D] hover:text-amber-600 uppercase tracking-wider group/link"
                  >
                    <span>EXPLORE MODULE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-amber-500" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};