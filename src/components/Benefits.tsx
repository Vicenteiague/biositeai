import { Share2, Users, TrendingUp, RefreshCw, Leaf, Zap } from 'lucide-react';
import Reveal from './Reveal';

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
    text: 'Profissionais com BiositesAI fecham mais negócios e geram mais autoridade.',
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
    text: 'Cada BiositesAI vem com uma página exclusiva, elegante e responsiva.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <Reveal className="text-center mb-14 md:mb-16">
          <span className="font-mono-label tracking-[0.2em] text-[11px] font-medium uppercase mb-4 inline-block text-[#F97316]">
            Por que BiositesAI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-4 text-balance max-w-4xl mx-auto">
            Mais do que um Biosite com Agente de IA,{' '}
            <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
              uma estrutura completa de vendas
            </span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Modernize a apresentação do seu negócio com tecnologia de aproximação e mini site
            responsivo.
          </p>
        </Reveal>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map(({ icon: Icon, title, text }, idx) => (
            <Reveal key={title} delay={idx * 0.05}>
              <div className="h-full luxury-card luxury-card-hover p-6 sm:p-7 rounded-2xl group hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-[#F97316]/12 border border-[rgba(255,138,0,0.2)] text-[#F97316] group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F5F5F4] mb-2 tracking-tight">
                  {title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-[15px]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
