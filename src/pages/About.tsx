import React from "react";
import { Quote, Flame, Heart, Target, ShieldCheck, Award, ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutProps {
  onOpenAudit: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAudit }) => {
  return (
    <div className="bg-white text-slate-900 py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-700" />
            <span>The Cruzian Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0B1B3D] tracking-tight">
            We Help Overlooked Businesses Become Impossible to Ignore.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Cruzian is a B2B growth and marketing company. We help businesses become more visible, attract more customers, and grow through integrated, high-converting digital systems.
          </p>
        </div>

        {/* Founder Story Card */}
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-white p-8 border border-slate-200 space-y-4 shadow-sm">
              <Quote className="w-10 h-10 text-amber-500" />
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
                "A lot of agencies out there are just doing it for their own benefit, taking your retainer money and blowing it while treating client businesses like numbers. I started Cruzian because I genuinely care. I’m competitive as hell, I play to win, and I want to be the last one standing for our clients."
              </blockquote>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center font-black text-lg font-serif">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1B3D]">Andy</h3>
                  <p className="text-xs text-amber-700 font-mono font-bold">Founder & Lead Strategist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-black text-[#0B1B3D]">
              Built for Ambitious Local Businesses
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our ideal clients are primarily small to mid-sized local businesses that want to grow but don't have a strong marketing presence. Right now we are focused on businesses in <strong>Jacksonville, FL</strong>, with the long-term vision to expand well beyond.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We know small business owners wear too many hats. You don't have time to manage 6 different freelancers or parse vanity metrics. You need real, paying clients, a full calendar, and an accountable partner who treats every marketing dollar as their own.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#0B1B3D] text-sm">Growth. Authority. Results.</h4>
                <p className="text-xs text-slate-600 mt-1">Every service is connected to measurable bottom-line revenue.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-amber-700 text-sm">Direct Phone & WhatsApp Access</h4>
                <p className="text-xs text-slate-600 mt-1">Direct communication via Quo business phones and open channels.</p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-50 border border-slate-200 rounded-3xl p-10 space-y-6">
          <h2 className="text-3xl font-black text-[#0B1B3D]">Ready to Partner with Cruzian?</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Book your free 45-minute strategy call. We'll analyze your market and build a custom growth roadmap.
          </p>
          <Button
            onClick={onOpenAudit}
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-5 rounded-xl shadow-md"
          >
            Book a Free Strategy Call
          </Button>
        </div>

      </div>
    </div>
  );
};