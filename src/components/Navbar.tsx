import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { WHATSAPP_ORDER_URL, BIOSITE_TEST_URL } from '../types';

interface NavbarProps {
  onOpenTestModal: () => void;
}

export default function Navbar({ onOpenTestModal: _onOpenTestModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Preço', href: '#preco' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#070606]/75 border-b border-[rgba(255,138,0,0.12)]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a
          href="/"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F4] shrink-0 flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <img
            src="/assets/biositesai-logo.png"
            alt="BiositesAI"
            className="w-8 h-8 rounded-full object-cover border border-[rgba(255,138,0,0.35)] shadow-[0_0_16px_rgba(249,115,22,0.28)]"
          />
          <span>
            Biosites<span className="text-[#F97316]">AI</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="hover:text-[#F5F5F4] transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#070606] bg-[#F97316] hover:bg-[#FF8A00] rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(249,115,22,0.25)] hover:shadow-[0_0_28px_rgba(249,115,22,0.45)] active:scale-[0.98] whitespace-nowrap cta-shimmer-btn"
          >
            <span>Pedir Cartão</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.25]" />
          </a>

          {/* Mobile Hamburger Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl border border-[rgba(255,138,0,0.18)] bg-[#110F0E]/90 flex items-center justify-center text-[#F5F5F4] hover:border-[rgba(255,138,0,0.4)] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(255,138,0,0.16)] bg-[#070606]/95 backdrop-blur-xl px-5 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="text-left text-sm font-medium text-[#F5F5F4]/90 hover:text-[#F97316] transition-colors py-2.5 border-b border-white/[0.06] cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={BIOSITE_TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl border border-[rgba(255,138,0,0.35)] bg-[#110F0E] text-[#F97316] text-sm font-semibold text-center hover:bg-[#F97316]/10 transition-colors"
            >
              Testar Modelo Online
            </a>
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-[#F97316] hover:bg-[#FF8A00] text-[#070606] font-bold text-sm text-center shadow-[0_0_24px_rgba(249,115,22,0.28)] active:scale-[0.98] transition-all cta-shimmer-btn"
            >
              Pedir Cartão BiositesAI
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
