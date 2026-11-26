import { Wifi, QrCode, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '../types';
import Reveal from './Reveal';

const features = [
  { icon: Wifi, text: 'Tecnologia NFC: aproxime e conecte' },
  { icon: QrCode, text: 'QR Code de alta leitura para qualquer celular' },
  { icon: ShieldCheck, text: 'Dados protegidos com criptografia' },
  { icon: Headphones, text: 'Suporte premium humanizado' },
];

export default function Showcase() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Card Mockup Showcase */}
          <Reveal className="relative w-full max-w-xl mx-auto order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -inset-6 bg-[#F97316] opacity-15 blur-[120px] rounded-full pointer-events-none"
            />
            <div className="relative z-10 luxury-card p-3 sm:p-4 rounded-[26px] transition-transform duration-500 hover:scale-[1.015]">
              <img
                src="/assets/conectacard-card.png"
                alt="Cartão BiositesAI preto e laranja com NFC e QR Code"
                className="relative z-10 w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Text and Features */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="font-mono-label tracking-[0.2em] text-[11px] font-medium uppercase mb-4 inline-block text-[#F97316]">
              Premium · Elegante · Infinito
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-6 leading-tight text-balance">
              Seu mundo{' '}
              <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
                conectado
              </span>{' '}
              em um único cartão
            </h2>

            <ul className="space-y-3.5 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3.5 text-sm sm:text-base text-[#D4D4D8]"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#110F0E] border border-[rgba(255,138,0,0.2)] text-[#F97316]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-3.5 rounded-[14px] font-bold text-sm sm:text-base text-[#070606] bg-[#F97316] hover:bg-[#FF8A00] shadow-[0_12px_32px_rgba(249,115,22,0.3)] hover:shadow-[0_16px_40px_rgba(249,115,22,0.5)] active:scale-[0.98] transition-all cursor-pointer cta-shimmer-btn"
            >
              <span>Quero meu BiositesAI</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
