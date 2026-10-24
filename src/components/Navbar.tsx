import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';
import { WHATSAPP_ORDER_URL, BIOSITE_TEST_URL } from '../types';

interface NavbarProps {
  onOpenTestModal: () => void;
}

export default function Navbar({ onOpenTestModal }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark || true;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('light', !shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('light', !nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

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
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#080808]/80 border-b border-[#ff6600]/20 transition-colors">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="/"
          className="font-display text-lg sm:text-xl font-bold text-foreground shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff6600] shadow-[0_0_8px_#ff6600]" />
          <span>Biosites</span>
          <span className="text-gold-gradient">Ai</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/75">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="hover:text-[#ff6600] transition-colors whitespace-nowrap cursor-pointer py-1"
            >
              {link.label}
            </button>
          ))}
          <a
            href={BIOSITE_TEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider font-semibold text-[#FF6A00] hover:text-[#FF8A00] px-3 py-1 rounded-full border border-[#FF6A00]/40 hover:border-[#FF6A00] bg-[#FF6A00]/10 transition-all cursor-pointer"
          >
            Testar Modelo
          </a>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#ff6600]/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-foreground/80 hover:text-[#ff6600] transition-all cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-black bg-[#ff6600] hover:bg-[#ff771a] rounded-full transition-all shadow-[0_0_20px_rgba(255,102,0,0.35)] hover:shadow-[0_0_25px_rgba(255,102,0,0.55)] whitespace-nowrap"
          >
            <span>Pedir Cartão</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-foreground cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#ff6600]/20 bg-[#0c0c0c]/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="text-left text-sm font-medium text-foreground/90 hover:text-[#ff6600] transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={BIOSITE_TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full border border-[#ff6600]/50 text-[#ff6600] text-sm font-semibold text-center hover:bg-[#ff6600]/10 transition-colors"
            >
              Testar Modelo Online
            </a>
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-[#ff6600] text-black font-bold text-sm text-center shadow-lg hover:bg-[#ff771a] transition-colors"
            >
              Pedir Cartão BiositesAi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
