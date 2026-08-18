import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { AuditBookingModal } from "@/components/AuditBookingModal";

// Pages
import Index from "@/pages/Index";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Industries } from "@/pages/Industries";
import { CalculatorPage } from "@/pages/CalculatorPage";
import { Contact } from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>(undefined);

  const handleOpenAudit = (industry?: string) => {
    if (industry) {
      setSelectedIndustry(industry);
    }
    setIsAuditOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
            {/* Header Navbar */}
            <Navbar onOpenAudit={() => handleOpenAudit()} />

            {/* Route Content Pages */}
            <main className="flex-1 bg-white">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About onOpenAudit={() => handleOpenAudit()} />} />
                <Route path="/services" element={<Services onOpenAudit={() => handleOpenAudit()} />} />
                <Route path="/industries" element={<Industries onOpenAudit={(ind) => handleOpenAudit(ind)} />} />
                <Route path="/calculator" element={<CalculatorPage onOpenAudit={() => handleOpenAudit()} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />

            <div className="bg-slate-50 border-t border-slate-200">
              <MadeWithDyad />
            </div>

            {/* Audit Booking Dialog Modal */}
            <AuditBookingModal
              isOpen={isAuditOpen}
              onClose={() => setIsAuditOpen(false)}
              preselectedIndustry={selectedIndustry}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;