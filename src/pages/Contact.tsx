import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Flame, CheckCircle2, Phone, Mail, User, Building, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { showSuccess } from "@/utils/toast";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("Medical / Healthcare");
  const [challenge, setChallenge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showSuccess("Audit Request Received! Andy will reach out directly within 12 hours.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white space-y-12">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
          <Flame className="w-3.5 h-3.5" />
          <span>Direct Founder Access</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          Claim Your Free 30-Day Growth Audit
        </h1>
        <p className="text-slate-300 text-base sm:text-lg">
          No generic automated report. Andy will personally analyze your local market, inspect competitor leads, and draft a strategy for your business.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Information Box */}
        <div className="lg:col-span-5 space-y-8 bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Direct Communication</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We hate slow email support tickets as much as you do. When you work with us, communication happens via WhatsApp and ClickUp.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">WhatsApp Direct Chat</p>
                <p className="text-xs text-slate-400">Get direct strategy answers from Andy.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Phone Consultations</p>
                <p className="text-xs text-slate-400">Scheduled 1-on-1 growth audit calls.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Strict Privacy</p>
                <p className="text-xs text-slate-400">Your details are 100% private. Zero spam.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
            <p className="font-bold text-amber-400 mb-1">Audit Guarantee:</p>
            <span>"If we can't find clear ways to add revenue to your business within 30 days, we'll tell you upfront." — Andy</span>
          </div>
        </div>

        {/* Right Application Form */}
        <div className="lg:col-span-7 bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Growth Audit Request Received!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-amber-400">{ownerName || "Business Owner"}</strong>. Andy is reviewing <strong className="text-white">{businessName}</strong> and will connect via phone or WhatsApp shortly.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase font-mono">Select Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-sm"
                >
                  <option value="Medical / Healthcare">Medical / Dental Practice</option>
                  <option value="Roofing / Construction">Roofing / Construction Contractor</option>
                  <option value="Landscaping / Lawn Care">Landscaping / Lawn Grounds</option>
                  <option value="Restaurant / Dining">Restaurant / Food Hospitality</option>
                  <option value="Startup / Local SMB">Startup / Local Business</option>
                  <option value="Other">Other Service Business</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">Business Name</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <Input
                      required
                      placeholder="Apex Dental Clinic"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="pl-10 bg-slate-950 border-slate-800 text-white rounded-xl py-5 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">Owner / Manager Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <Input
                      required
                      placeholder="Dr. John Smith"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="pl-10 bg-slate-950 border-slate-800 text-white rounded-xl py-5 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <Input
                      required
                      type="email"
                      placeholder="john@clinic.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-slate-950 border-slate-800 text-white rounded-xl py-5 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase font-mono">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <Input
                      required
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 bg-slate-950 border-slate-800 text-white rounded-xl py-5 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase font-mono">#1 Growth Bottleneck Right Now</label>
                <Textarea
                  placeholder="Tell us what you're struggling with: e.g. need qualified consults, lost missed calls, need cold caller strategy..."
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white rounded-xl text-sm h-24"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-6 rounded-xl shadow-xl flex items-center justify-center gap-2 text-base"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Submit For Free Growth Audit</span>
              </Button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};