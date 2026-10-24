import { useState } from 'react';
import { CircleHelp, ChevronDown } from 'lucide-react';
import type { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: 'O que é a LIA e como funciona a assistente de IA?',
    answer:
      'A LIA é a assistente virtual inteligente que acompanha seu Biosite. Ela aprende sobre sua empresa e serviços: horários, endereço, valores, catálogo e dúvidas frequentes. Funciona 24 horas por dia com interação amigável, acolhendo visitantes e direcionando clientes qualificados para o seu WhatsApp.',
  },
  {
    question: 'O BiositesAi funciona em qualquer celular?',
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
      'Após a confirmação dos seus dados e aprovação do layout, seu BiositesAi é produzido e enviado em poucos dias úteis. O mini site digital, no entanto, fica pronto e funcional ainda mais rápido — você já pode compartilhar o link enquanto o cartão físico está a caminho.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-[#ff6600]/40 mb-6">
            <CircleHelp className="w-4 h-4 text-[#ff6600]" />
            <span className="font-display text-sm font-semibold text-[#ff6600] tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Dúvidas sobre o BiositesAi
          </h2>
          <p className="text-foreground/65 max-w-xl mx-auto text-base sm:text-lg">
            Tudo o que você precisa saber antes de modernizar seu networking
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`glass-card border px-6 rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-[#ff6600]/60 bg-[#ff6600]/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left font-display text-base md:text-lg font-semibold text-foreground py-5 cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ff6600] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="text-foreground/75 leading-relaxed pb-5 text-sm sm:text-base border-t border-white/5 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
