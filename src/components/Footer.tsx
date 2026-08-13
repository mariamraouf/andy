import React from "react";
import { Flame, Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-amber-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Flame className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black font-mono tracking-tight text-white uppercase">
                THE<span className="text-amber-400">CRUZIAN</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Rooted in St. Croix grit and competitive drive. Built to help small business owners, doctors, contractors, and entrepreneurs build sustainable, high-margin market dominance.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Direct Client Support via WhatsApp & ClickUp</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Industry Playbooks
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Medical & Dental Practices</li>
              <li>Roofing & Construction</li>
              <li>Landscaping & Commercial Grounds</li>
              <li>Local Restaurants & Hospitality</li>
              <li>Startups & GoHighLevel Setup</li>
            </ul>
          </div>

          {/* Growth Stack */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Integrated Tech & Operations
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {["Apollo Sourcing", "ClickUp Management", "GoHighLevel CRM", "PBX Smart Phone", "Meta & Google Ads"].map((tech, i) => (
                <span key={i} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md font-mono">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 pt-2">
              "We focus on marketing & sales first so you get clients, then operational efficiency follows."
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} The Cruzian Engine. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Virgin Islands Spirit • Global Execution</span>
          </div>
        </div>

      </div>
    </footer>
  );
};