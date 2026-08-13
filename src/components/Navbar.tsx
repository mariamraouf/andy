import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TreePalm as PalmTree, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Playbooks", path: "/industries" },
    { name: "ROI Calculator", path: "/calculator" },
    { name: "About Andy", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Clean Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center text-amber-400 shadow-sm transition-transform group-hover:scale-105">
            <PalmTree className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-[#0B1B3D] uppercase font-serif">
              CRUZIAN
            </span>
            <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest -mt-1">
              GROWTH AGENCY
            </p>
          </div>
        </Link>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 border-b-2 ${
                isActive(link.path)
                  ? "text-[#0B1B3D] border-amber-500 font-bold"
                  : "text-slate-600 border-transparent hover:text-[#0B1B3D]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={onOpenAudit}
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <span>Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold ${
                isActive(link.path) ? "text-amber-600 font-bold" : "text-slate-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold py-3 rounded-xl shadow-sm"
          >
            Claim Free Growth Audit
          </Button>
        </div>
      )}
    </header>
  );
};