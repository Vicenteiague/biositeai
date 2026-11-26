import { useState } from 'react';
import { CircleHelp, ChevronDown } from 'lucide-react';
import type { FAQItem } from '../types';
import Reveal from './Reveal';

const faqItems: FAQItem[] = [
  {
    question: 'O que é a LIA e como funciona a assistente de IA?',
    answer:
      'A LIA é a assistente virtual inteligente que acompanha seu BiositesAI. Ela aprende sobre sua empresa e serviços: horários, endereço, valores, catálogo e dúvidas frequentes. Funciona 24 horas por dia com interação amigável, acolhendo visitantes e direcionando clientes qualificados para o seu WhatsApp.',
  },
  {
    question: 'O BiositesAI funciona em qualquer celular?',
    answer:
      'Sim. A tecnologia NFC funciona na grande maioria dos smartphones modernos (Android e iPhone) e, para os aparelhos mais antigos, o QR Code impresso no cartão garante que 100% das pessoas consigam acessar seu mini site sem precisar instalar nenhum aplicativo.',
  },
  {
    question: "Por que é chamado de 'infinito'?",
    answer:
      'Porque você compra UMA vez e usa para sempre. Não há recarga, bateria, mensalidade obrigatória ou validade. Sempre que mudar de telefone, cargo ou redes sociais, basta editar seu mini site e o mesmo cartão continua funcionando com as informações atualizadas.',
  },
  {
    question: 'O que vem no meu mini site profissional?',
    answer:
      "Foto, nome, cargo, bio, telefone, WhatsApp, e-mail, Instagram, LinkedIn, site, localização no Google Maps e botão 'Salvar Contato' que adiciona tudo direto na agenda do cliente em um toque. Tudo personalizado com sua marca e visual elegante.",
  },
  {
    question: 'Quanto tempo leva para receber meu cartão?',
    answer:
      'Após a confirmação dos seus dados e aprovação do layout, seu BiositesAI é produzido e enviado em poucos dias úteis. O mini site digital, no entanto, fica pronto e funcional ainda mais rápido — você já pode compartilhar o link enquanto o cartão físico está a caminho.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606]">
      <div className="container mx-auto max-w-3xl">
        {/* FAQ Header */}
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#110F0E] border border-[rgba(255,138,0,0.22)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] mb-5">
            <CircleHelp className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="font-mono-label text-[10px] sm:text-[11px] font-medium text-[#F97316] uppercase tracking-[0.2em]">
              Perguntas Frequentes
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-4">
            Dúvidas sobre o{' '}
            <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
              BiositesAI
            </span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-sm sm:text-base">
            Tudo o que você precisa saber antes de modernizar seu networking.
          </p>
        </Reveal>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={item.question} delay={idx * 0.04}>
                <div
                  className={`luxury-card rounded-2xl px-5 sm:px-6 transition-colors duration-300 ${
                    isOpen ? '!border-[#F97316]/45' : 'hover:!border-[rgba(255,138,0,0.28)]'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between text-left font-display text-[15px] sm:text-lg font-semibold text-[#F5F5F4] py-5 cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F97316] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="text-[#A1A1AA] leading-relaxed pb-5 text-sm sm:text-[15px] border-t border-white/[0.06] pt-3.5">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
