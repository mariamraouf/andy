import React from "react";
import { Database, PhoneCall, Bot, Megaphone, CheckCircle2, ArrowRight, Layers, Workflow, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  onOpenAudit: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAudit }) => {
  const services = [
    {
      id: "apollo",
      icon: Database,
      title: "Apollo Data Lead Enrichment",
      badge: "Target Sourcing",
      desc: "We extract decision-maker data for newly registered businesses, medical clinic directors, commercial property owners, and roofing contractors.",
      features: [
        "Filter by newly created businesses in past 90 days",
        "Direct owner mobile numbers & verified emails",
        "Local Zip Code & Radius Radius Sourcing",
        "100% human-verified contact details before dialer import",
      ],
    },
    {
      id: "coldcalling",
      icon: PhoneCall,
      title: "Human Cold Calling & Outreach",
      badge: "High Conversion",
      desc: "Skilled sales professionals who make direct phone calls with custom scripts, opening real human conversations and booking appointments onto your calendar.",
      features: [
        "Non-robotic, consultative script crafting",
        "Outsourced calling leads with strict KPI reporting",
        "Direct appointment setting straight into ClickUp/GoHighLevel",
        "Daily call logging & prospect status updates",
      ],
    },
    {
      id: "ai-recovery",
      icon: Bot,
      title: "Smart AI Call Recovery & Text-Back",
      badge: "Instant Catch",
      desc: "When job site noise or front desk duties cause a missed call, our system texts the caller in < 10 seconds with a link to book or ask a question.",
      features: [
        "Sub-10 second automated SMS text-back",
        "Direct call routing straight to mobile phones",
        "Self-booking calendar integration",
        "Zero lost leads when staff is out of office",
      ],
    },
    {
      id: "ads-crm",
      icon: Megaphone,
      title: "Precision Paid Ads & GoHighLevel Setup",
      badge: "Scalable Traffic",
      desc: "Targeted Meta & Google radius advertising paired with complete GoHighLevel CRM setup for automated client nurturing.",
      features: [
        "Hyper-local radius Facebook & Instagram ads",
        "Custom high-converting lead landing pages",
        "Automated email & SMS follow-up sequences",
        "All-in-one ClickUp operational workspace setup",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Client Acquisition System</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          Our Growth Services & Stack
        </h1>
        <p className="text-slate-300 text-base sm:text-lg">
          We combine hyper-targeted B2B data, skilled human cold calling, and smart call recovery to keep your calendar filled.
        </p>
      </div>

      {/* Service Cards Breakdown */}
      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div key={srv.id} className="bg-slate-900/90 rounded-3xl p-8 border border-amber-500/30 shadow-2xl space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500/20 text-amber-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-amber-500/30">
                    {srv.badge}
                  </span>
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>

                <h3 className="text-2xl font-black text-white">{srv.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{srv.desc}</p>

                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={onOpenAudit}
                  className="w-full bg-slate-950 hover:bg-slate-800 text-amber-400 font-bold border border-slate-800 py-5 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Include {srv.title} in Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

            </div>
          );
        })}
      </div>

      {/* OPERATIONS TOOL INTEGRATION BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 text-center">
        <Workflow className="w-12 h-12 text-amber-400 mx-auto" />
        <h2 className="text-3xl font-black text-white">Centralized ClickUp & WhatsApp Management</h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
          No slow email support tickets. When you partner with The Cruzian, you get direct WhatsApp communication and a dedicated ClickUp operational dashboard where you can view every single call log, appointment, and lead in real-time.
        </p>
        <Button
          onClick={onOpenAudit}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-5 rounded-xl shadow-lg"
        >
          Book Strategy Call With Andy
        </Button>
      </div>

    </div>
  );
};