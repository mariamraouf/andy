import React from "react";
import { Link } from "react-router-dom";
import { TreePalm as PalmTree } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1B3D] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#0B1B3D] flex items-center justify-center font-bold">
                <PalmTree className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white uppercase font-serif">
                CRUZIAN
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-normal">
              Rooted in St. Croix grit and relentless execution. Engineered to help doctors, contractors, and local businesses capture high-ticket buyers and win their local market.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-amber-400 transition-colors">Industry Playbooks</Link></li>
              <li><Link to="/calculator" className="hover:text-amber-400 transition-colors">ROI Calculator</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Andy</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Claim Growth Audit</Link></li>
            </ul>
          </div>

          {/* Contact Anchor */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Direct Communication
            </h4>
            <p className="text-sm text-slate-300 font-medium">
              WhatsApp & Phone Consultations directly with Andy.
            </p>
            <p className="text-xs text-amber-400 font-bold font-mono">
              ST. CROIX • U.S. VIRGIN ISLANDS
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} The Cruzian Engine. All rights reserved.</p>
          <p className="font-mono text-amber-400 font-bold">VIRGIN ISLANDS RESILIENCE</p>
        </div>

      </div>
    </footer>
  );
};