import React from "react";
import { Link } from "react-router-dom";
import { Flame, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

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
              Rooted in St. Croix grit and competitive drive. Built to help doctors, contractors, restaurants, and entrepreneurs win high-paying clients, eliminate lost phone calls, and destroy local competition.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Direct Support via WhatsApp & ClickUp</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home Engine</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Andy's Story & Manifesto</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services & Systems</Link></li>
              <li><Link to="/industries" className="hover:text-amber-400 transition-colors">Industry Playbooks</Link></li>
              <li><Link to="/calculator" className="hover:text-amber-400 transition-colors">ROI Calculator</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Claim Growth Audit</Link></li>
            </ul>
          </div>

          {/* Tech & Ops */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Integrated Tech & Operations
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {["Apollo Lead Sourcing", "Human Cold Calling", "Smart AI Phone Recovery", "ClickUp CRM", "GoHighLevel", "Meta & Google Ads"].map((tech, i) => (
                <span key={i} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md font-mono">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 pt-2">
              "We focus on revenue first. We treat every client dollar as if it came from our own pocket." — Andy
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