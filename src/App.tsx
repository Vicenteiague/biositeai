import { useState } from 'react';
import { MotionConfig } from 'motion/react';
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

const NOISE_SVG_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

export default function App() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#070606] text-[#F5F5F4] selection:bg-[#F97316]/30 selection:text-white flex flex-col relative">
        {/* Subtle Cinematic Film-Grain Texture Overlay */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]"
          style={{
            backgroundImage: NOISE_SVG_DATA_URI,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Top Navigation */}
        <Navbar onOpenTestModal={() => setIsTestModalOpen(true)} />

        {/* Main Page Sections */}
        <main className="flex-1 relative z-10">
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
    </MotionConfig>
  );
}
