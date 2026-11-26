import {
  ArrowRight,
  Bot,
  Sparkles,
  Link as LinkIcon,
  Clock,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BIOSITE_TEST_URL } from '../types';
import Reveal, { CINEMATIC_EASE } from './Reveal';

interface HeroProps {
  onOpenTestModal: () => void;
}

const bentoPillars = [
  {
    icon: LinkIcon,
    title: 'Mini Site Completo',
    text: 'Seus links, serviços e produtos reunidos em uma vitrine digital.',
  },
  {
    icon: Bot,
    title: 'Agente de IA - LIA',
    text: 'Responde dúvidas na hora e conduz clientes até o fechamento.',
  },
  {
    icon: Clock,
    title: 'Atendimento 24 Horas',
    text: 'Sua empresa sempre disponível, mesmo fora do horário comercial.',
  },
  {
    icon: TrendingUp,
    title: 'Mais Vendas',
    text: 'Transforme cada visita em uma oportunidade real de negócio.',
  },
];

const trustItems = [
  { icon: Sparkles, title: 'Simples de Usar', subtitle: 'Pronto em minutos' },
  { icon: ShieldCheck, title: 'Seguro e Confiável', subtitle: 'Dados protegidos' },
  { icon: Zap, title: 'Moderno e Eficiente', subtitle: 'Respostas imediatas' },
  { icon: Users, title: 'Ideal para Negócios', subtitle: 'Qualquer segmento' },
];

export default function Hero({ onOpenTestModal }: HeroProps) {
  return (
    <section className="relative pt-7 pb-16 sm:pt-10 md:pt-14 md:pb-24 px-4 sm:px-6 overflow-hidden bg-[#070606]">
      {/* Ambient Radial Amber Glow behind Hero */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-[#F97316] opacity-20 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[440px] h-[440px] bg-[#F97316] opacity-15 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative container mx-auto max-w-6xl">
        {/* Main 2-Column Split */}
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-center">
          {/* Left Column: High-Conversion First Screen on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
            className="flex flex-col items-start text-left"
          >
            {/* JetBrains Mono Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#110F0E] border border-[rgba(255,138,0,0.22)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span className="font-mono-label text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-[#F97316]">
                Mini Site Inteligente + Agente de IA
              </span>
            </div>

            {/* High-Impact Editorial Headline */}
            <h1 className="font-display text-[2.15rem] sm:text-5xl lg:text-[3.45rem] font-bold text-[#F5F5F4] leading-[1.07] tracking-[-0.03em] mb-4 text-balance">
              Muito mais que um biosite. Sua empresa pronta para vender{' '}
              <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.45rem] sm:text-[3.45rem] lg:text-[3.95rem] leading-[1.02]">
                24 horas por dia.
              </span>
            </h1>

            {/* Concise 2-Line Subtitle */}
            <p className="text-[#A1A1AA] text-[15px] sm:text-lg mb-7 max-w-xl leading-relaxed">
              Mini site profissional integrado à{' '}
              <strong className="text-[#F5F5F4] font-semibold">LIA</strong>, sua agente de IA que
              tira dúvidas na hora e transforma visitantes em vendas.
            </p>

            {/* Primary High-Conversion CTA with Shimmer & Click Micro-Scale */}
            <div className="w-full sm:w-auto mb-3">
              <a
                href={BIOSITE_TEST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-[54px] px-8 py-4 rounded-[14px] font-bold text-[15px] sm:text-base text-[#070606] bg-[#F97316] hover:bg-[#FF8A00] shadow-[0_12px_36px_rgba(249,115,22,0.32)] hover:shadow-[0_16px_44px_rgba(249,115,22,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer cta-shimmer-btn"
              >
                <span>Teste um modelo agora</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Subtle Microcopy */}
            <p className="text-xs text-[#A1A1AA]/80">
              Conheça na prática como a LIA pode ajudar seu negócio.
            </p>
          </motion.div>

          {/* Right Column: Unobstructed LIA Portrait + Bottom Glass Chat Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: CINEMATIC_EASE }}
            className="relative w-full max-w-[440px] lg:max-w-[490px] mx-auto"
          >
            {/* Ambient Radial Amber Glow behind LIA */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 bg-[#F97316] opacity-20 blur-[120px] rounded-full pointer-events-none"
            />

            {/* Portrait Frame — LIA's face 100% clear & sharp */}
            <div className="relative z-10 w-full overflow-hidden rounded-[26px] border border-[rgba(255,138,0,0.2)] bg-[#110F0E] shadow-[0_28px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="relative aspect-[4/5] sm:aspect-[4/4.6] w-full overflow-hidden">
                <img
                  src="/assets/lia-hero.png"
                  alt="LIA - Agente de Inteligência Artificial do BiositesAI"
                  className="w-full h-full object-cover object-top select-none"
                  loading="eager"
                />

                {/* Soft dark scrim strictly on the bottom third */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#070606] via-[#070606]/70 to-transparent pointer-events-none"
                />

                {/* Glassmorphic Chat Card anchored at the bottom — never covers face or eyes */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-20 rounded-2xl bg-[#110F0E]/82 backdrop-blur-xl border border-[rgba(255,138,0,0.22)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_40px_rgba(0,0,0,0.65)] p-3.5 sm:p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-xs sm:text-sm text-[#F5F5F4]">
                        LIA
                      </span>
                      <span className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#F97316]">
                        Agente IA
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#10B981]/12 border border-[#10B981]/25 text-[10px] font-medium text-[#10B981]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Online
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#F5F5F4]/90 leading-snug mb-2.5">
                    "Olá! Como posso ajudar sua empresa hoje?"
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={onOpenTestModal}
                      className="text-left text-[11px] sm:text-xs bg-white/[0.04] hover:bg-[#F97316]/15 text-[#D4D4D8] hover:text-[#F5F5F4] border border-white/10 hover:border-[rgba(255,138,0,0.4)] px-2.5 py-2 rounded-xl transition-all active:scale-[0.98] cursor-pointer truncate"
                    >
                      Quais são os serviços?
                    </button>
                    <button
                      onClick={onOpenTestModal}
                      className="text-left text-[11px] sm:text-xs bg-white/[0.04] hover:bg-[#F97316]/15 text-[#D4D4D8] hover:text-[#F5F5F4] border border-white/10 hover:border-[rgba(255,138,0,0.4)] px-2.5 py-2 rounded-xl transition-all active:scale-[0.98] cursor-pointer truncate"
                    >
                      Quero um orçamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Refined 2x2 Bento Grid (Compact on Mobile & Desktop) */}
        <Reveal delay={0.08} className="mt-10 sm:mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {bentoPillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="luxury-card luxury-card-hover rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F97316]/12 border border-[rgba(255,138,0,0.2)] flex items-center justify-center text-[#F97316] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-[13px] sm:text-[15px] font-semibold text-[#F5F5F4] leading-snug mb-1">
                    {title}
                  </h3>
                  <p className="text-[#A1A1AA] text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom Trust Strip */}
        <Reveal delay={0.14} className="mt-10 pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            {trustItems.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#110F0E] border border-[rgba(255,138,0,0.16)] flex items-center justify-center text-[#F97316] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono-label text-[10px] sm:text-[11px] font-semibold text-[#F5F5F4] uppercase tracking-[0.14em] truncate">
                    {title}
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] truncate mt-0.5">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
