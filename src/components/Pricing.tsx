import { Truck, Shield, CheckCircle2, Sparkles, Bot } from 'lucide-react';

export default function Pricing() {
  const planAI = {
    title: 'COM AGENTE DE IA LIA',
    badge: 'Mais Recomendado',
    price: '147',
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
      'https://wa.me/5567993174612?text=Quero%20meu%20BiositesAi%20com%20Agente%20de%20IA%20LIA%20(R$147,00%20+%20R$49,90)',
    ctaText: 'QUERO COM AGENTE DE IA',
  };

  const planStandard = {
    title: 'TRADICIONAL (SEM IA)',
    badge: 'Sem Mensalidade',
    price: '99',
    cents: ',90',
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
      'https://wa.me/5567993174612?text=Quero%20meu%20BiositesAi%20Tradicional%20(R$99,90)',
    ctaText: 'QUERO MEU BIOSITESAI',
  };

  return (
    <section id="preco" className="py-20 md:py-28 px-4 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tracking-[0.3em] text-xs md:text-sm font-semibold uppercase mb-4 inline-block text-[#ff6600]">
            Planos & Preços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Escolha o modelo ideal para seu negócio
          </h2>
          <p className="text-foreground/65 max-w-xl mx-auto text-base sm:text-lg">
            Tenha seu cartão físico NFC inteligente integrado a um mini site completo.
          </p>
        </div>

        {/* 2 Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Com Agente de IA LIA (Destaque Principal) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#ff6600] bg-gradient-to-br from-[#ff6600]/20 via-[#121212] to-black text-center shadow-[0_20px_60px_rgba(255,106,0,0.25)] backdrop-blur-xl">
            {/* Top Recommended Tag */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#FF8A00] to-[#FF6A00] text-black text-[11px] font-extrabold uppercase px-4 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-black" />
              <span>{planAI.badge}</span>
            </div>

            {/* Header Banner */}
            <div className="p-6 bg-[#ff6600] text-black">
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight flex items-center justify-center gap-2">
                <Bot className="w-6 h-6 stroke-[2.5]" />
                <span>{planAI.title}</span>
              </h3>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="text-5xl sm:text-6xl font-bold text-foreground mb-1 tracking-tight">
                    R${planAI.price}
                    <span className="text-2xl sm:text-3xl font-semibold">{planAI.cents}</span>
                  </div>
                  <div className="text-[#ff6600] font-bold text-base sm:text-lg mb-2">
                    {planAI.sub}
                  </div>
                  <p className="text-foreground/75 text-sm mb-4 max-w-xs mx-auto">
                    {planAI.description}
                  </p>

                  <span className="inline-block text-black bg-[#ff6600] text-sm sm:text-base font-bold px-5 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(255,102,0,0.4)]">
                    Frete Grátis
                  </span>
                </div>

                {/* Included list */}
                <ul className="text-left space-y-2.5 mb-8 text-sm text-foreground/85">
                  {planAI.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-2.5 ${
                        feature.isHighlight
                          ? 'font-bold text-[#ff6600] bg-[#ff6600]/10 p-2 rounded-xl border border-[#ff6600]/30'
                          : ''
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff6600] shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Guarantees */}
                <div className="flex items-center justify-center gap-6 mb-6 text-sm text-foreground/75">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#ff6600]" />
                    <span>Entrega rápida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#ff6600]" />
                    <span>Compra segura</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={planAI.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center min-h-12 px-6 py-3.5 rounded-full font-bold text-base sm:text-lg text-black bg-[#ff6600] hover:bg-[#ff771a] shadow-[0_0_25px_rgba(255,102,0,0.4)] hover:shadow-[0_0_35px_rgba(255,102,0,0.7)] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  {planAI.ctaText}
                </a>

                <p className="text-xs text-foreground/50 mt-4 tracking-wide">
                  Pagamento via WhatsApp · Envio para todo o Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Tradicional R$99,90 (Sem Mensalidade) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.05] via-[#121212] to-black text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-[#ff6600]/50 transition-all">
            {/* Header Banner */}
            <div className="p-6 bg-white/10 text-white border-b border-white/10">
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                {planStandard.title}
              </h3>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="text-5xl sm:text-6xl font-bold text-foreground mb-1 tracking-tight">
                    R${planStandard.price}
                    <span className="text-2xl sm:text-3xl font-semibold">{planStandard.cents}</span>
                  </div>
                  <div className="text-foreground/70 font-semibold text-sm sm:text-base mb-2">
                    {planStandard.sub}
                  </div>
                  <p className="text-foreground/75 text-sm mb-4 max-w-xs mx-auto">
                    {planStandard.description}
                  </p>

                  <span className="inline-block text-white bg-white/15 text-sm sm:text-base font-bold px-5 py-1.5 rounded-full mb-6 border border-white/20">
                    Frete Grátis
                  </span>
                </div>

                {/* Included list */}
                <ul className="text-left space-y-2.5 mb-8 text-sm text-foreground/85">
                  {planStandard.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-2.5 ${
                        feature.isHighlight
                          ? 'font-semibold text-emerald-400 bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20'
                          : ''
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff6600] shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Guarantees */}
                <div className="flex items-center justify-center gap-6 mb-6 text-sm text-foreground/75">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#ff6600]" />
                    <span>Entrega rápida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#ff6600]" />
                    <span>Compra segura</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={planStandard.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center min-h-12 px-6 py-3.5 rounded-full font-bold text-base sm:text-lg text-white bg-white/10 hover:bg-[#ff6600] hover:text-black border border-white/20 hover:border-[#ff6600] transition-all cursor-pointer"
                >
                  {planStandard.ctaText}
                </a>

                <p className="text-xs text-foreground/50 mt-4 tracking-wide">
                  Pagamento via WhatsApp · Envio para todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
