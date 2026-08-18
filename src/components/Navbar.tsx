import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Industries", path: "/industries" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform group-hover:scale-105">
            C
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-[#0B1B3D] font-serif">
              CRUZIAN
            </span>
            <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-1">
              B2B Growth & Marketing
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? "text-[#0B1B3D] bg-slate-100 font-bold"
                  : "text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Phone & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:9046648690"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#0B1B3D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>(904) 664-8690</span>
          </a>

          <Button
            onClick={onOpenAudit}
            className="bg-[#0B1B3D] hover:bg-[#132752] text-amber-400 hover:text-amber-300 font-bold px-5 py-2.5 rounded-xl text-xs shadow-sm flex items-center gap-2"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-50 text-slate-700 border border-slate-200"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? "bg-[#0B1B3D] text-amber-400"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-3">
            <a
              href="tel:9046648690"
              className="flex items-center gap-2 text-sm font-bold text-slate-800"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>(904) 664-8690</span>
            </a>

            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-[#0B1B3D] text-amber-400 font-bold py-3.5 rounded-xl text-sm shadow-md"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};