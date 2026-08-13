import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail, User, Building, Sparkles, TreePalm as PalmTree } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIndustry?: string;
}

export const AuditBookingModal: React.FC<ModalProps> = ({ isOpen, onClose, preselectedIndustry }) => {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState(preselectedIndustry || "Medical / Healthcare");
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [biggestChallenge, setBiggestChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showSuccess("Audit Request Received! Andy will connect with you via WhatsApp or Email within 12 hours.");
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="bg-[#0B1B3D] border border-slate-800 text-white max-w-xl p-6 sm:p-8 rounded-3xl shadow-2xl">
        <DialogHeader className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 w-fit">
            <PalmTree className="w-3.5 h-3.5" />
            <span>Direct Access to Andy</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Claim Your Free Growth Audit
          </DialogTitle>
          <DialogDescription className="text-slate-300 text-sm">
            We will analyze your local competitors, inspect lead gaps, and deliver a tailored customer acquisition plan.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Your Audit Call Is Queued!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-amber-400">{ownerName || "Business Owner"}</strong>. Andy is personally reviewing <strong className="text-white">{businessName || "your business"}</strong> and will reach out shortly.
              </p>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1 text-left">
              <p className="font-bold text-amber-400">What happens next?</p>
              <p>1. We run an Apollo lead enrichment check for your local zip code.</p>
              <p>2. We draft a custom phone script & outreach blueprint for your market.</p>
              <p>3. Direct WhatsApp/Email conversation with Andy.</p>
            </div>
            <Button
              onClick={resetAndClose}
              className="bg-amber-500 text-[#0B1B3D] font-bold px-8 py-3 rounded-xl"
            >
              Done & Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            
            {step === 1 ? (
              <div className="space-y-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">
                    Select Your Business Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-white text-sm rounded-xl p-3 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Medical / Healthcare">Medical / Dental Practice</option>
                    <option value="Roofing / Construction">Roofing / Construction Contractor</option>
                    <option value="Landscaping / Lawn Care">Landscaping / Lawn Care</option>
                    <option value="Restaurant / Dining">Restaurant / Food Service</option>
                    <option value="Startup / Local SMB">Startup / Local Small Business</option>
                    <option value="Other">Other Service Business</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">
                    Company / Business Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <Input
                      required
                      placeholder="e.g. Apex Dental or Coastal Roofing"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="pl-10 bg-slate-900 border-slate-800 text-white rounded-xl py-5 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">
                    Your Name (Owner / Manager)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <Input
                      required
                      placeholder="e.g. Dr. John or Sarah Miller"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="pl-10 bg-slate-900 border-slate-800 text-white rounded-xl py-5 text-sm"
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    if (businessName && ownerName) setStep(2);
                  }}
                  disabled={!businessName || !ownerName}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black py-6 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Continue To Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

              </div>
            ) : (
              <div className="space-y-4">
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase font-mono">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        type="email"
                        placeholder="you@business.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-slate-900 border-slate-800 text-white rounded-xl py-5 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase font-mono">
                      Phone / WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 bg-slate-900 border-slate-800 text-white rounded-xl py-5 text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">
                    What is your #1 marketing bottleneck right now?
                  </label>
                  <Textarea
                    placeholder="e.g. Need more qualified phone leads, lost calls when busy, need cold caller strategy..."
                    value={biggestChallenge}
                    onChange={(e) => setBiggestChallenge(e.target.value)}
                    className="bg-slate-900 border-slate-800 text-white rounded-xl text-xs sm:text-sm h-20"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-slate-800 text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-xl px-5"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4 text-[#0B1B3D]" />
                    <span>Get Free Audit Blueprint</span>
                  </Button>
                </div>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your info is 100% private. Andy never sells or spams client contacts.</span>
                </p>

              </div>
            )}

          </form>
        )}

      </DialogContent>
    </Dialog>
  );
};