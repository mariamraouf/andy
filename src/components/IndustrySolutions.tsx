import React, { useState } from "react";
import { Stethoscope, Home, Trees, Utensils, Rocket, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionsProps {
  onSelectIndustry: (industry: string) => void;
}

export const IndustrySolutions: React.FC<SolutionsProps> = ({ onSelectIndustry }) => {
  const [activeTab, setActiveTab] = useState("medical");

  const industries = [
    {
      id: "medical",
      title: "Medical & Healthcare",
      icon: Stethoscope,
      badge: "High Ticket Patient Consults",
      heading: "Fill Your Appointment Book with High-Value Patient Consultations",
      description:
        "Medical clinics, specialty practices, and wellness centers need trust and steady patient volume. We target local patients looking for treatments, handle pre-consultation lead verification, and streamline appointment booking.",
      outcomes: [
        "Patient Consultation Growth: +30% to +60% within 60 days",
        "Zero-Show Protection: Automated SMS reminders & deposit confirmations",
        "HIPAA-conscious lead capture workflows",
        "Targeted local radius ads for cosmetic, dental, & specialty care",
      ],
    },
    {
      id: "roofing",
      title: "Roofing & Construction",
      icon: Home,
      badge: "Storm & Replacement Leads",
      heading: "Dominate Local Roofing Contracts Before Competitors Show Up",
      description:
        "Roofing and storm damage contractors rely on speed. When property owners need quotes or inspection reports, our human outreach and instant missed-call recovery lock them in before they call another contractor.",
      outcomes: [
        "High-Ticket Inspection Bookings ($10k-$40k job potential)",
        "Direct cold outreach to commercial property managers",
        "Instant SMS Text-Back when you're busy on a roof",
        "High-converting landing pages built for emergency quote requests",
      ],
    },
    {
      id: "landscaping",
      title: "Landscaping & Lawn Care",
      icon: Trees,
      badge: "Recurring Contracts",
      heading: "Lock In High-Margin Residential & Commercial Maintenance Accounts",
      description:
        "Build a predictable recurring revenue engine. We help landscaping companies win high-end residential neighborhood clusters and lucrative commercial HOA contracts.",
      outcomes: [
        "Recurring Monthly Service Retainers",
        "Commercial Property & HOA Decision Maker Targeting",
        "Route-density lead generation (target neighbors of active jobs)",
        "Automated estimate request scheduling",
      ],
    },
    {
      id: "restaurants",
      title: "Restaurants & Dining",
      icon: Utensils,
      badge: "Foot Traffic & VIP Clubs",
      heading: "Pack Tables, Boost Catering Orders, and Build a Loyal Local VIP Club",
      description:
        "Local restaurants need consistent foot traffic and profitable catering clients. We build hyper-local ad engines and VIP dining clubs that keep seats full on slow weeknights.",
      outcomes: [
        "Catering & Private Event Direct Outreach to Local Businesses",
        "VIP SMS Loyalty Club (Turn 1-time diners into regulars)",
        "Hyper-local social ads featuring signature dishes",
        "Google Business Profile optimization for 'near me' searches",
      ],
    },
    {
      id: "startups",
      title: "Startups & Local SMBs",
      icon: Rocket,
      badge: "0 to 1 Customer Engine",
      heading: "Build Your Sales Engine From Scratch Without Wasting Capital",
      description:
        "Starting a business without leads is terrifying. We set up your entire sales machine—from lead sourcing in Apollo to custom sales scripts and GoHighLevel CRM setup.",
      outcomes: [
        "Complete GoHighLevel / ClickUp Sales Pipeline Setup",
        "First 500-1,000 Verified B2B Decision Maker Prospect List",
        "Cold Call & Email Scripts Crafted by Experienced Sales Leads",
        "Founder-led strategy to validate offer and close initial clients",
      ],
    },
  ];

  const current = industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <section id="solutions" className="py-20 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <span>Tailored Growth Playbooks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            Industry Specific Acquisition Playbooks
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Select your industry to explore your custom customer acquisition engine.
          </p>
        </div>

        {/* Industry Nav Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pt-10 pb-4 no-scrollbar">
          {industries.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#0B1B3D] text-amber-400 shadow-lg scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-600"}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Playbook Content Card */}
        <div className="mt-8 bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
                  {current.badge}
                </span>
                <span className="text-xs text-slate-500 font-mono font-bold">100% Tailored Execution</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] leading-tight">
                {current.heading}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {current.description}
              </p>

              {/* Expected Outcomes */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D]">
                  Key System Deliverables:
                </p>
                <div className="grid gap-2.5">
                  {current.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-800 text-sm font-semibold">
                      <div className="w-5 h-5 rounded-full bg-amber-500 text-[#0B1B3D] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                        ✓
                      </div>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy & CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  onClick={() => onSelectIndustry(current.title)}
                  className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-7 py-5 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Build My {current.title} Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <div className="text-xs text-slate-600 flex items-center gap-2 px-3.5 py-2.5 bg-white rounded-xl border border-slate-200 font-medium">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Campaign Setup included in 30-day plan</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Blueprint Box */}
            <div className="lg:col-span-5 bg-[#0B1B3D] text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                  Growth Engine Steps
                </span>
                <span className="text-[10px] text-slate-400 font-mono">ST. CROIX ENGINE</span>
              </div>

              <div className="space-y-3">
                
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <p className="text-[11px] text-amber-400 font-mono font-bold">STEP 1: PROSPECTING</p>
                  <p className="text-sm font-bold text-white mt-0.5">Apollo Verified Lead Sourcing</p>
                  <p className="text-xs text-slate-300 mt-1">Filter decision makers by zip code & verified mobile contacts.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <p className="text-[11px] text-amber-400 font-mono font-bold">STEP 2: OUTREACH</p>
                  <p className="text-sm font-bold text-white mt-0.5">Human Cold Caller + LinkedIn Outreach</p>
                  <p className="text-xs text-slate-300 mt-1">Custom phone scripts that open real consultative conversations.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <p className="text-[11px] text-amber-400 font-mono font-bold">STEP 3: CALL RECOVERY</p>
                  <p className="text-sm font-bold text-white mt-0.5">Smart AI Missed-Call SMS Text-Back</p>
                  <p className="text-xs text-slate-300 mt-1">Captures inbound callers instantly if your staff is on a job site.</p>
                </div>

              </div>

              <div className="pt-2 text-center text-xs text-slate-300">
                <span className="text-amber-400 font-bold">100% Managed Execution</span> by Andy & Team
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};