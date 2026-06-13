import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoBallSection from "@/components/DiscoBallSection";
import VoiceAIReceptionist from "@/components/VoiceAIReceptionist";
import CoastaFlowCRM from "@/components/CoastaFlowCRM";
import CoastaClawCRM from "@/components/CoastaClawCRM";
import InvestmentSuites from "@/components/InvestmentSuites";
import InteractiveSandbox from "@/components/InteractiveSandbox";
import ConsultationBooking from "@/components/ConsultationBooking";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060404]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <DiscoBallSection />
        <section id="voice-ai" className="content-section">
          <VoiceAIReceptionist />
        </section>
        <section id="coastaflow" className="content-section">
          <CoastaFlowCRM />
        </section>
        <section id="coastaclaw" className="content-section">
          <CoastaClawCRM />
        </section>
        <section id="pricing" className="content-section">
          <InvestmentSuites />
        </section>
        <section id="sandbox" className="content-section">
          <InteractiveSandbox />
        </section>
        <section id="consultation" className="content-section">
          <ConsultationBooking />
        </section>
      </main>
      <footer className="py-12 px-4 border-t border-[rgba(245,214,203,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#b87d6c]">
            &copy; 2026 The Inner Sparkle. All rights reserved.
          </p>
          <p className="text-sm text-[#b87d6c]">
            Powered by CoastaFlow & CoastaClaw
          </p>
        </div>
      </footer>
    </div>
  );
}
