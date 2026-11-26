import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';
import Reveal from './Reveal';

const testimonials: Testimonial[] = [
  {
    name: 'João Carlos',
    role: 'Corretor de Imóveis',
    photo: '/assets/joao-carlos.jpg',
    text: 'Depois que comecei a usar o BiositesAI, ficou muito mais fácil compartilhar meus contatos. Meus clientes ficam impressionados com a tecnologia e consigo gerar muito mais conexões em eventos e reuniões. Sem dúvida foi um dos melhores investimentos para minha imagem profissional.',
  },
  {
    name: 'Mariana Souza',
    role: 'Empresária',
    photo: '/assets/mariana-souza.jpg',
    text: 'Eu sempre esquecia de levar cartões de visita impressos e acabava perdendo oportunidades. Com o BiositesAI, basta aproximar o celular e todas as minhas informações aparecem instantaneamente. É moderno, elegante e transmite muito mais profissionalismo.',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Consultor Comercial',
    photo: '/assets/ricardo-mendes.jpg',
    text: 'O BiositesAI transformou minha forma de fazer networking. Além de compartilhar meus contatos, consigo direcionar clientes para meu WhatsApp, Instagram e site em segundos. Recebo elogios praticamente toda semana pela praticidade e inovação.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <Reveal className="text-center mb-14 md:mb-16">
          <span className="font-mono-label tracking-[0.2em] text-[11px] font-medium uppercase mb-4 inline-block text-[#F97316]">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-4">
            Quem usa,{' '}
            <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
              recomenda
            </span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-sm sm:text-base">
            Profissionais reais que modernizaram seu networking com o BiositesAI.
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.08}>
              <article className="h-full luxury-card luxury-card-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative group hover:-translate-y-1">
                <div>
                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={t.photo}
                      alt={`Foto de ${t.name}, ${t.role}`}
                      loading="lazy"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover border border-[rgba(255,138,0,0.4)] shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-[#F5F5F4] leading-tight truncate">
                        {t.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#F97316] font-medium truncate">
                        {t.role}
                      </p>
                      <div className="flex gap-0.5 text-[#F97316] mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F97316]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <p className="text-[#D4D4D8]/90 text-sm sm:text-[15px] leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex justify-end">
                  <Quote className="w-5 h-5 text-[#F97316]/35" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
