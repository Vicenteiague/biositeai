import { ShieldCheck, Users, Headphones, ArrowRight } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '../types';
import Reveal from './Reveal';

export default function FinalCTA() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      t: 'SEGURO',
      d: 'Seus dados protegidos com criptografia',
    },
    {
      icon: Users,
      t: 'CONFIÁVEL',
      d: 'Usado por profissionais e empresas',
    },
    {
      icon: Headphones,
      t: 'SUPORTE PREMIUM',
      d: 'Atendimento rápido e humanizado',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606] overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <div className="luxury-card p-8 sm:p-12 md:p-16 text-center relative overflow-hidden rounded-[28px] !border-[rgba(255,138,0,0.28)]">
            {/* Ambient Radial Amber Glow */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#F97316] opacity-15 blur-[120px] rounded-full pointer-events-none"
            />

            <span className="relative z-10 font-mono-label tracking-[0.2em] text-[11px] font-medium uppercase mb-4 inline-block text-[#F97316]">
              Pronto para começar
            </span>

            <h2 className="relative z-10 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-5 leading-tight text-balance">
              Transforme seu networking{' '}
              <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
                agora!
              </span>
            </h2>

            <p className="relative z-10 text-[#A1A1AA] mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Peça seu cartão de visitas digital infinito BiositesAI NFC e conecte-se com estilo,
              tecnologia e atendimento 24h com a LIA.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 mb-9">
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[54px] px-8 sm:px-10 py-4 rounded-[14px] font-bold text-[15px] sm:text-base text-[#070606] bg-[#F97316] hover:bg-[#FF8A00] shadow-[0_12px_36px_rgba(249,115,22,0.34)] hover:shadow-[0_16px_44px_rgba(249,115,22,0.52)] active:scale-[0.98] transition-all cursor-pointer cta-shimmer-btn"
              >
                <span>Quero meu BiositesAI agora</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            <p className="relative z-10 font-mono-label text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-[0.22em] mb-10">
              MODERNO · EFICIENTE · RÁPIDO
            </p>

            {/* Trust Strip */}
            <div className="relative z-10 grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] text-left">
              {trustPoints.map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F97316]/12 border border-[rgba(255,138,0,0.2)] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono-label font-semibold text-[#F5F5F4] text-[11px] uppercase tracking-[0.15em]">
                      {t}
                    </div>
                    <div className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
