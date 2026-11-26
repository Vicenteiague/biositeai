import { Truck, Shield, CheckCircle2, Sparkles, Bot, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Pricing() {
  const planAI = {
    title: 'COM AGENTE DE IA LIA',
    badge: 'Mais Recomendado',
    price: '397',
    cents: ',00',
    sub: '+ Apenas R$49,90 manutenção IA',
    description: 'Mini site profissional + Cartão NFC + Agente LIA atendendo e vendendo 24h',
    features: [
      { text: 'LIA Agente de IA atendendo 24 hrs', isHighlight: true },
      { text: 'Cartão Físico com Chip NFC integrado' },
      { text: 'QR Code dinâmico impresso no verso' },
      { text: 'Mini site profissional (Biosite) incluso' },
      { text: 'Catálogo de Produtos' },
      { text: 'Apresentação de Serviços' },
      { text: 'Galeria de fotos' },
      { text: 'Edição ilimitada das suas informações' },
      { text: 'Compatível com iPhone e Android' },
    ],
    whatsappMsg:
      'https://wa.me/5567993174612?text=Quero%20meu%20BiositesAI%20com%20Agente%20de%20IA%20LIA%20(R$397,00%20+%20R$49,90)',
    ctaText: 'Quero com Agente de IA',
  };

  const planStandard = {
    title: 'TRADICIONAL (SEM IA)',
    badge: 'Sem Mensalidade',
    price: '297',
    cents: ',00',
    sub: 'Pagamento único · Sem mensalidades',
    description: 'Cartão de visitas digital infinito NFC + QR Code + Mini site profissional',
    features: [
      { text: 'Cartão Físico com Chip NFC integrado' },
      { text: 'QR Code dinâmico impresso no verso' },
      { text: 'Mini site profissional (Biosite) incluso' },
      { text: 'Catálogo de Produtos' },
      { text: 'Apresentação de Serviços' },
      { text: 'Galeria de fotos' },
      { text: 'Edição ilimitada das suas informações' },
      { text: 'Sem mensalidades ou taxas de manutenção', isHighlight: true },
      { text: 'Compatível com iPhone e Android' },
    ],
    whatsappMsg:
      'https://wa.me/5567993174612?text=Quero%20meu%20BiositesAI%20Tradicional%20(R$297,00)',
    ctaText: 'Quero meu BiositesAI',
  };

  return (
    <section
      id="preco"
      className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606] overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-12 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <Reveal className="text-center mb-14 md:mb-16">
          <span className="font-mono-label tracking-[0.2em] text-[11px] font-medium uppercase mb-4 inline-block text-[#F97316]">
            Planos & Preços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-4 text-balance">
            Escolha o modelo ideal para{' '}
            <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
              seu negócio
            </span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-sm sm:text-base">
            Tenha seu cartão físico NFC inteligente integrado a um mini site completo BiositesAI.
          </p>
        </Reveal>

        {/* 2 Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Com Agente de IA LIA */}
          <Reveal>
            <div className="h-full relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-[#110F0E] border border-[#F97316]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(249,115,22,0.16)] text-center">
              {/* Top Header */}
              <div className="p-6 sm:p-7 pb-5 border-b border-[rgba(255,138,0,0.16)] bg-gradient-to-b from-[#F97316]/15 to-transparent">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F97316] text-[#070606] font-mono-label text-[10px] font-bold uppercase tracking-[0.18em] mb-3.5">
                  <Sparkles className="w-3 h-3 fill-[#070606]" />
                  <span>{planAI.badge}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F4] flex items-center justify-center gap-2">
                  <Bot className="w-5 h-5 text-[#F97316]" />
                  <span>{planAI.title}</span>
                </h3>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <div className="font-display text-5xl sm:text-[3.4rem] font-bold text-[#F5F5F4] mb-1.5 tracking-tight tabular-nums">
                      R${planAI.price}
                      <span className="text-2xl sm:text-3xl font-semibold text-[#D4D4D8]">
                        {planAI.cents}
                      </span>
                    </div>
                    <div className="text-[#F97316] font-semibold text-sm sm:text-base mb-2.5">
                      {planAI.sub}
                    </div>
                    <p className="text-[#A1A1AA] text-sm mb-4 max-w-xs mx-auto leading-relaxed">
                      {planAI.description}
                    </p>

                    <span className="inline-block font-mono-label text-[11px] uppercase tracking-[0.16em] text-[#F97316] bg-[#F97316]/12 border border-[rgba(255,138,0,0.3)] font-semibold px-4 py-1.5 rounded-lg mb-6">
                      Frete Grátis
                    </span>
                  </div>

                  {/* Included list */}
                  <ul className="text-left space-y-2.5 mb-8 text-sm text-[#D4D4D8]">
                    {planAI.features.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-center gap-2.5 ${
                          feature.isHighlight
                            ? 'font-semibold text-[#F97316] bg-[#F97316]/10 px-3 py-2.5 rounded-xl border border-[rgba(255,138,0,0.28)]'
                            : 'px-1'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Guarantees */}
                  <div className="flex items-center justify-center gap-6 mb-6 text-xs sm:text-sm text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#F97316]" />
                      <span>Entrega rápida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#F97316]" />
                      <span>Compra segura</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={planAI.whatsappMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 py-3.5 rounded-[14px] font-bold text-sm sm:text-base text-[#070606] bg-[#F97316] hover:bg-[#FF8A00] shadow-[0_12px_32px_rgba(249,115,22,0.32)] hover:shadow-[0_16px_40px_rgba(249,115,22,0.5)] active:scale-[0.98] transition-all cursor-pointer cta-shimmer-btn"
                  >
                    <span>{planAI.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <p className="text-xs text-[#71717A] mt-4">
                    Pagamento via WhatsApp · Envio para todo o Brasil
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Tradicional R$297,00 (Sem Mensalidade) */}
          <Reveal delay={0.08}>
            <div className="h-full luxury-card luxury-card-hover relative flex flex-col justify-between overflow-hidden rounded-[26px] text-center">
              {/* Top Header */}
              <div className="p-6 sm:p-7 pb-5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="inline-flex items-center px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[#D4D4D8] font-mono-label text-[10px] font-medium uppercase tracking-[0.18em] mb-3.5">
                  {planStandard.badge}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F4]">
                  {planStandard.title}
                </h3>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <div className="font-display text-5xl sm:text-[3.4rem] font-bold text-[#F5F5F4] mb-1.5 tracking-tight tabular-nums">
                      R${planStandard.price}
                      <span className="text-2xl sm:text-3xl font-semibold text-[#D4D4D8]">
                        {planStandard.cents}
                      </span>
                    </div>
                    <div className="text-[#D4D4D8] font-medium text-sm sm:text-base mb-2.5">
                      {planStandard.sub}
                    </div>
                    <p className="text-[#A1A1AA] text-sm mb-4 max-w-xs mx-auto leading-relaxed">
                      {planStandard.description}
                    </p>

                    <span className="inline-block font-mono-label text-[11px] uppercase tracking-[0.16em] text-[#D4D4D8] bg-white/[0.05] border border-white/12 font-semibold px-4 py-1.5 rounded-lg mb-6">
                      Frete Grátis
                    </span>
                  </div>

                  {/* Included list */}
                  <ul className="text-left space-y-2.5 mb-8 text-sm text-[#D4D4D8]">
                    {planStandard.features.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-center gap-2.5 ${
                          feature.isHighlight
                            ? 'font-semibold text-[#F5F5F4] bg-white/[0.04] px-3 py-2.5 rounded-xl border border-[rgba(255,138,0,0.22)]'
                            : 'px-1'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Guarantees */}
                  <div className="flex items-center justify-center gap-6 mb-6 text-xs sm:text-sm text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#F97316]" />
                      <span>Entrega rápida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#F97316]" />
                      <span>Compra segura</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={planStandard.whatsappMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 py-3.5 rounded-[14px] font-bold text-sm sm:text-base text-[#F5F5F4] bg-white/[0.06] hover:bg-[#F97316] hover:text-[#070606] border border-[rgba(255,138,0,0.25)] hover:border-[#F97316] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>{planStandard.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.25]" />
                  </a>

                  <p className="text-xs text-[#71717A] mt-4">
                    Pagamento via WhatsApp · Envio para todo o Brasil
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
