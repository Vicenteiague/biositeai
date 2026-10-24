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
import { BIOSITE_TEST_URL } from '../types';

interface HeroProps {
  onOpenTestModal: () => void;
}

export default function Hero({ onOpenTestModal }: HeroProps) {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 px-4 overflow-hidden bg-[#080808]">
      {/* Background ambient lighting in black & subtle orange */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6A00]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#FF8A00]/12 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Subtle tech background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 106, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative container mx-auto max-w-6xl">
        {/* Main 2-column split */}
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-12 items-center">
          {/* Left Column: Message & CRO Conversion */}
          <div className="flex flex-col items-start text-left pr-0 lg:pr-2">
            {/* Top Brand Tagline Lockup */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF8A00] to-[#FF6A00] flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h6l4-8 4 8h6L12 2zm0 6l2.5 5h-5L12 8z" />
                </svg>
              </div>
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                BIOSITES<span className="text-[#FF6A00]">AI</span>
              </span>
            </div>

            {/* Visual Badge / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 text-[#FF6A00] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MINI SITE INTELIGENTE + AGENTE DE IA</span>
            </div>

            {/* Headline Principal */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-2 text-balance">
              Muito mais que um biosite.
            </h1>

            {/* Destaque Complementar em Laranja */}
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#FF6A00] leading-tight mb-5 text-balance">
              Sua empresa pronta para vender 24 horas por dia.
            </p>

            {/* Subheadline Explicativa */}
            <p className="text-[#A1A1AA] text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Seu mini site profissional com links, serviços e informações da sua empresa,
              acompanhado da <strong className="text-white font-semibold">LIA</strong>, sua agente
              de IA que responde dúvidas, apresenta suas soluções e ajuda a transformar visitantes
              em oportunidades de venda.
            </p>

            {/* 4 Feature Pillars Grid (Refined, no slop) */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121212]/90 border border-white/5 hover:border-[#FF6A00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                  <LinkIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm">Mini Site Completo</h3>
                  <p className="text-[#A1A1AA] text-[11px] leading-snug mt-0.5">
                    Todos os seus links, serviços, produtos e informações em um só lugar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121212]/90 border border-white/5 hover:border-[#FF6A00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm">Agente de IA - LIA</h3>
                  <p className="text-[#A1A1AA] text-[11px] leading-snug mt-0.5">
                    Atendimento inteligente, responde dúvidas e ajuda nas vendas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121212]/90 border border-white/5 hover:border-[#FF6A00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm">Atendimento 24 Horas</h3>
                  <p className="text-[#A1A1AA] text-[11px] leading-snug mt-0.5">
                    Sua empresa sempre conectada e pronta para atender clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121212]/90 border border-white/5 hover:border-[#FF6A00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm">Mais Vendas</h3>
                  <p className="text-[#A1A1AA] text-[11px] leading-snug mt-0.5">
                    Transforme visitantes em clientes com uma presença digital ativa.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="w-full sm:w-auto mb-3">
              <a
                href={BIOSITE_TEST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-13 px-8 py-4 rounded-[14px] font-bold text-base text-[#080808] bg-[#FF6A00] hover:bg-[#FF8A00] shadow-[0_0_25px_rgba(255,106,0,0.35)] hover:shadow-[0_0_35px_rgba(255,106,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Teste um modelo agora</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Microcopy curta */}
            <p className="text-xs text-[#A1A1AA] mb-4">
              Conheça na prática como a LIA pode ajudar seu negócio.
            </p>
          </div>

          {/* Right Column: LIA in Protagonism & Floating UI Cards */}
          <div className="relative w-full max-w-md lg:max-w-lg mx-auto flex flex-col items-center justify-center">
            {/* Ambient orange glow behind LIA */}
            <div
              className="absolute inset-4 blur-3xl rounded-full pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.28) 0%, rgba(8,8,8,0) 70%)' }}
            />

            {/* Floating UI Card 1: LIA Conversation preview */}
            <div className="absolute top-2 sm:top-6 -left-2 sm:-left-6 z-20 p-3 sm:p-3.5 rounded-2xl bg-[#121212]/92 border border-[#FF6A00]/30 shadow-[0_16px_36px_rgba(0,0,0,0.7)] backdrop-blur-xl max-w-[220px] sm:max-w-[240px] animate-float-slow">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="font-bold text-xs text-white">LIA</span>
                <span className="text-[10px] text-[#FF6A00] font-semibold ml-auto">Agente IA</span>
              </div>
              <p className="text-[11px] text-white/90 leading-tight mb-2">
                "Olá! Como posso ajudar sua empresa hoje?"
              </p>
              <div className="flex flex-col gap-1">
                <button
                  onClick={onOpenTestModal}
                  className="text-left text-[10px] bg-white/5 hover:bg-[#FF6A00]/15 hover:text-white border border-white/10 hover:border-[#FF6A00]/40 px-2 py-1 rounded-md text-[#A1A1AA] transition-colors cursor-pointer"
                >
                  Quais são os serviços?
                </button>
                <button
                  onClick={onOpenTestModal}
                  className="text-left text-[10px] bg-white/5 hover:bg-[#FF6A00]/15 hover:text-white border border-white/10 hover:border-[#FF6A00]/40 px-2 py-1 rounded-md text-[#A1A1AA] transition-colors cursor-pointer"
                >
                  Quero um orçamento
                </button>
              </div>
            </div>

            {/* Floating UI Card 2: 24/7 Service Badge */}
            <div className="absolute bottom-6 sm:bottom-12 -right-2 sm:-right-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#121212]/95 border border-[#FF6A00]/35 shadow-[0_16px_36px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                  <span>Atendimento 24h</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-[#A1A1AA]">Captura e qualifica clientes</div>
              </div>
            </div>

            {/* Main LIA Render */}
            <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-[#FF6A00]/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/assets/lia-hero.png"
                alt="LIA - Agente de Inteligência Artificial do BiositesAI com headset tecnológico e uniforme moderno"
                className="w-full h-auto object-cover select-none"
                loading="eager"
              />
              {/* Subtle bottom vignette to ensure perfect grounding */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Trust Band (Strip) */}
        <div className="mt-14 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Simples de Usar</div>
              <div className="text-[11px] text-[#A1A1AA]">Pronto em minutos</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Seguro e Confiável</div>
              <div className="text-[11px] text-[#A1A1AA]">Dados protegidos</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Moderno e Eficiente</div>
              <div className="text-[11px] text-[#A1A1AA]">Respostas imediatas</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Ideal para Negócios</div>
              <div className="text-[11px] text-[#A1A1AA]">Qualquer segmento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
