import { Share2, Users, TrendingUp, RefreshCw, Leaf, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Share2,
    title: 'Compartilhe em segundos',
    text: 'Um toque NFC ou um QR Code e seus contatos chegam ao cliente na hora.',
  },
  {
    icon: Users,
    title: 'Todos seus contatos em um só lugar',
    text: 'WhatsApp, Instagram, LinkedIn, e-mail, site e localização no mesmo link.',
  },
  {
    icon: TrendingUp,
    title: 'Mais conexões, mais oportunidades',
    text: 'Profissionais com BiositesAi fecham mais negócios e geram mais autoridade.',
  },
  {
    icon: RefreshCw,
    title: 'Atualize sempre que quiser',
    text: 'Mudou de telefone, cargo ou rede social? Edite seu mini site em segundos.',
  },
  {
    icon: Leaf,
    title: 'Sustentável e 100% digital',
    text: 'Chega de imprimir cartão de papel toda vez. Um único cartão, infinitas conexões.',
  },
  {
    icon: Zap,
    title: 'Mini site profissional incluso',
    text: 'Cada BiositesAi vem com uma página exclusiva, elegante e responsiva.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tracking-[0.3em] text-xs md:text-sm font-semibold uppercase mb-4 inline-block text-[#ff6600]">
            Por que BiositesAi
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Mais do que um Biosite com Agente de IA,{' '}
            <span className="text-[#ff6600] italic font-serif">uma estrutura completa de vendas</span>
          </h2>
          <p className="text-foreground/65 max-w-xl mx-auto text-base">
            Modernize a apresentação do seu negócio com tecnologia de aproximação e mini site responsivo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-7 rounded-2xl border border-[#ff6600]/10 bg-gradient-to-b from-[#ff6600]/5 to-transparent hover:border-[#ff6600]/60 transition-all duration-500 group relative hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform bg-[#ff6600]/15 text-[#ff6600]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-foreground/65 leading-relaxed text-sm sm:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
