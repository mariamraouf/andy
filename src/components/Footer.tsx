import React from "react";
import { Link } from "react-router-dom";
import { Zap, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030712] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <span className="text-2xl font-black font-mono tracking-tight text-white uppercase">
                THE<span className="text-cyan-400">CRUZIAN</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Rooted in St. Croix grit and competitive drive. Built to help doctors, contractors, restaurants, and entrepreneurs win high-paying clients, eliminate lost phone calls, and destroy local competition.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 font-mono">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Direct Support via WhatsApp & ClickUp</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Platform Engine</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Andy's Story & Manifesto</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services & Systems</Link></li>
              <li><Link to="/industries" className="hover:text-cyan-400 transition-colors">Industry Playbooks</Link></li>
              <li><Link to="/calculator" className="hover:text-cyan-400 transition-colors">ROI Calculator</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Claim Growth Audit</Link></li>
            </ul>
          </div>

          {/* Tech & Ops */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
              Integrated Tech Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {["Apollo Sourcing", "Human Cold Calling", "AI Phone Recovery", "ClickUp CRM", "GoHighLevel", "Meta & Google Ads"].map((tech, i) => (
                <span key={i} className="bg-[#07090E] border border-white/10 px-2.5 py-1 rounded-md font-mono">
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
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span className="text-slate-400">Virgin Islands Spirit • Global Execution</span>
          </div>
        </div>

      </div>
    </footer>
  );
};