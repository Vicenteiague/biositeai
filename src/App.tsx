import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiaChatbotSection from './components/LiaChatbotSection';
import Benefits from './components/Benefits';
import Steps from './components/Steps';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BiositeSimulatorModal from './components/BiositeSimulatorModal';

export default function App() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f7f7f7] selection:bg-[#ff6600]/30 selection:text-white flex flex-col relative">
      {/* Top Navigation */}
      <Navbar onOpenTestModal={() => setIsTestModalOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero onOpenTestModal={() => setIsTestModalOpen(true)} />
        <div id="agente-ia">
          <LiaChatbotSection />
        </div>
        <Benefits />
        <Steps />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Biosite Test Simulator Modal */}
      <BiositeSimulatorModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
      />
    </div>
  );
}
