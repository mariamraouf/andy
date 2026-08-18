import React from "react";
import { PhoneCall, Search, FileText, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessProps {
  onOpenAudit: () => void;
}

export const OurProcessSection: React.FC<ProcessProps> = ({ onOpenAudit }) => {
  const steps = [
    {
      num: "01",
      icon: PhoneCall,
      title: "Strategy Call",
      desc: "We start with a free 45-minute call to understand your business, goals, and current challenges.",
    },
    {
      num: "02",
      icon: Search,
      title: "Growth Audit",
      desc: "We analyze your current marketing, sales, and digital presence to identify the highest-leverage opportunities.",
    },
    {
      num: "03",
      icon: FileText,
      title: "Custom Proposal",
      desc: "You receive a tailored growth plan with clear deliverables, timelines, and expected outcomes.",
    },
    {
      num: "04",
      icon: BarChart3,
      title: "Execution & Reporting",
      desc: "We execute with full transparency — regular reporting, open communication, and continuous optimization.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight">
            How We Deliver Results
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A clear, transparent path from discovery to scalable market dominance.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Step {step.num}
                  </span>
                  <Icon className="w-5 h-5 text-[#0B1B3D]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D]">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Not Sure Where to Start Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B3D]">
              Not Sure Where to Start?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Book a free strategy call and we'll identify the highest-impact services for your specific business.
            </p>
          </div>
          <Button
            onClick={onOpenAudit}
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-2xl text-sm shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
};