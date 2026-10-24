import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'João Carlos',
    role: 'Corretor de Imóveis',
    photo: '/assets/joao-carlos.jpg',
    text: 'Depois que comecei a usar o BiositesAi, ficou muito mais fácil compartilhar meus contatos. Meus clientes ficam impressionados com a tecnologia e consigo gerar muito mais conexões em eventos e reuniões. Sem dúvida foi um dos melhores investimentos para minha imagem profissional.',
  },
  {
    name: 'Mariana Souza',
    role: 'Empresária',
    photo: '/assets/mariana-souza.jpg',
    text: 'Eu sempre esquecia de levar cartões de visita impressos e acabava perdendo oportunidades. Com o BiositesAi, basta aproximar o celular e todas as minhas informações aparecem instantaneamente. É moderno, elegante e transmite muito mais profissionalismo.',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Consultor Comercial',
    photo: '/assets/ricardo-mendes.jpg',
    text: 'O BiositesAi transformou minha forma de fazer networking. Além de compartilhar meus contatos, consigo direcionar clientes para meu WhatsApp, Instagram e site em segundos. Recebo elogios praticamente toda semana pela praticidade e inovação.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 px-4 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tracking-[0.3em] text-xs md:text-sm font-semibold uppercase mb-4 inline-block text-[#ff6600]">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quem usa,{' '}
            <span className="text-[#ff6600] italic font-serif">recomenda</span>
          </h2>
          <p className="text-foreground/65 max-w-xl mx-auto text-base sm:text-lg">
            Profissionais reais que modernizaram seu networking com o BiositesAi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="p-7 rounded-2xl border border-[#ff6600]/10 bg-gradient-to-b from-[#ff6600]/5 to-transparent hover:border-[#ff6600]/60 transition-all duration-500 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.photo}
                    alt={`Foto de ${t.name}, ${t.role}`}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#ff6600] shadow-md shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-sm text-[#ff6600] font-medium">{t.role}</p>
                    <div className="flex gap-0.5 text-[#ff6600] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#ff6600]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-foreground/75 text-sm sm:text-base leading-relaxed italic relative">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex justify-end">
                <Quote className="w-5 h-5 text-[#ff6600]/30" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
