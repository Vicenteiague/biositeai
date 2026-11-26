import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle, RefreshCw, Bot, CheckCheck, Wifi, Battery } from 'lucide-react';
import { WHATSAPP_ORDER_URL, WHATSAPP_DIRECT_URL } from '../types';
import Reveal from './Reveal';

interface Message {
  id: string;
  sender: 'lia' | 'user';
  text: string;
  time: string;
  actionUrl?: string;
  actionLabel?: string;
}

export default function LiaChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'lia',
      text: 'Estou aqui para tirar suas dúvidas, apresentar nossos serviços e ajudar você a encontrar a melhor solução. Pode perguntar!',
      time: 'Agora',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'Quais são os serviços?',
    'Quanto custa?',
    'Quero falar com alguém',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      let actionUrl: string | undefined;
      let actionLabel: string | undefined;

      const lower = text.toLowerCase();

      if (lower.includes('serviço') || lower.includes('servicos') || lower.includes('quais')) {
        reply =
          'O BiositesAI é uma solução completa de networking digital: um Cartão de Visitas Físico de alta tecnologia com aproximação NFC + QR Code exclusivo, conectado ao seu Mini Site Biosite com atendente inteligente como eu (LIA), que apresenta seus dados e captura leads 24h por dia!';
      } else if (
        lower.includes('custa') ||
        lower.includes('preço') ||
        lower.includes('preco') ||
        lower.includes('valor')
      ) {
        reply =
          'Temos duas opções: o plano completo com Agente de IA LIA por R$ 397,00 (+ R$ 49,90/mês de manutenção da IA) ou o modelo Tradicional sem IA por R$ 297,00 (pagamento único, sem mensalidades). Ambos já incluem Cartão NFC, QR Code, Mini Site e Frete Grátis para todo o Brasil!';
        actionUrl = WHATSAPP_ORDER_URL;
        actionLabel = 'Garantir meu BiositesAI';
      } else if (
        lower.includes('alguém') ||
        lower.includes('alguem') ||
        lower.includes('humano') ||
        lower.includes('atendente') ||
        lower.includes('whatsapp')
      ) {
        reply =
          'Com certeza! Nosso time de especialistas está pronto para te atender agora mesmo via WhatsApp. Basta clicar no botão abaixo:';
        actionUrl = WHATSAPP_DIRECT_URL;
        actionLabel = 'Falar no WhatsApp Agora';
      } else if (lower.includes('funciona') || lower.includes('nfc') || lower.includes('celular')) {
        reply =
          'Funciona em qualquer smartphone! Nos celulares modernos basta aproximar o cartão (NFC). Nos aparelhos mais antigos, basta apontar a câmera para o QR Code. Ninguém precisa instalar aplicativo nenhum!';
      } else if (lower.includes('entrega') || lower.includes('prazo') || lower.includes('frete')) {
        reply =
          'O frete é grátis para todo o Brasil! O seu mini site digital fica pronto em poucas horas para você já começar a usar, e o cartão físico personalizado é despachado em poucos dias úteis.';
      } else {
        reply =
          'Entendi perfeitamente! Como sua assistente virtual no BiositesAI, eu posso explicar cada detalhe, tirar dúvidas sobre seus serviços e direcionar seus clientes diretamente para fechar negócio com você! Posso te ajudar com mais alguma informação?';
      }

      const liaMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'lia',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionUrl,
        actionLabel,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, liaMsg]);
    }, 750);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'lia',
        text: 'Estou aqui para tirar suas dúvidas, apresentar nossos serviços e ajudar você a encontrar a melhor solução. Pode perguntar!',
        time: 'Agora',
      },
    ]);
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606] overflow-hidden">
      {/* Soft Radial Amber Halo behind Smartphone */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-[#F97316] opacity-20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <Reveal className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#110F0E] border border-[rgba(255,138,0,0.22)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="font-mono-label text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Demonstração Interativa
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] text-balance">
            Como ficaria no seu{' '}
            <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
              BiositesAI
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Converse agora com a LIA e experimente o atendimento inteligente que vai receber e
            converter seus clientes 24 horas por dia.
          </p>
        </Reveal>

        {/* Dark Luxury Smartphone Mockup */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-[430px] rounded-[40px] p-[6px] bg-gradient-to-b from-white/15 via-[rgba(255,138,0,0.22)] to-white/[0.06] shadow-[0_32px_90px_rgba(0,0,0,0.85)]">
            <div className="relative rounded-[35px] bg-[#110F0E] overflow-hidden border border-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Top Phone Status Bar & Dynamic Island */}
              <div className="px-6 pt-3.5 pb-2.5 flex items-center justify-between text-[11px] font-medium text-[#A1A1AA] bg-[#0B0A09]/90">
                <span className="tabular-nums">09:41</span>
                <div className="w-24 h-5 rounded-full bg-black border border-white/[0.06] flex items-center justify-end px-2">
                  <span className="w-2 h-2 rounded-full bg-[#1a1a1d] ring-1 ring-white/10" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>

              {/* Clean Single-Row LIA Header (No squished wrapping) */}
              <div className="px-4 sm:px-5 py-3.5 bg-[#0E0C0B] border-y border-[rgba(255,138,0,0.14)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="relative shrink-0">
                    <img
                      src="/assets/lia-avatar.png"
                      alt="LIA - Assistente Virtual Inteligente"
                      className="w-11 h-11 rounded-full object-cover border border-[rgba(255,138,0,0.35)] shadow-[0_0_16px_rgba(249,115,22,0.25)]"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#0E0C0B]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[15px] sm:text-base font-bold text-[#F5F5F4] leading-tight whitespace-nowrap truncate">
                      Olá! Eu sou a LIA
                    </h3>
                    <p className="text-xs text-[#A1A1AA] truncate mt-0.5">
                      Assistente virtual inteligente
                    </p>
                  </div>
                </div>

                {/* Emerald Online Status Badge */}
                <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10B981]/12 text-[#10B981] text-[11px] font-semibold border border-[#10B981]/25 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Online</span>
                </span>
              </div>

              {/* Chat Viewport */}
              <div className="px-4 sm:px-5 pt-4 pb-5 flex flex-col">
                {/* Chat Messages Stream */}
                <div className="space-y-3 max-h-[310px] overflow-y-auto pr-1 mb-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] sm:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#F97316] text-[#070606] font-medium rounded-br-md'
                            : 'bg-[#181513] text-[#F5F5F4]/92 border border-[rgba(255,138,0,0.14)] rounded-bl-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                        }`}
                      >
                        <p>{msg.text}</p>
                        {msg.actionUrl && (
                          <div className="mt-3 pt-2.5 border-t border-white/10">
                            <a
                              href={msg.actionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F97316] hover:bg-[#FF8A00] text-[#070606] font-bold text-xs transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>{msg.actionLabel}</span>
                            </a>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-[#71717A] mt-1 px-1 flex items-center gap-1">
                        {msg.time}
                        {msg.sender === 'user' && (
                          <CheckCheck className="w-3 h-3 text-[#F97316]" />
                        )}
                      </span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-center gap-2 text-[#A1A1AA] text-xs py-2 px-3 bg-[#181513] border border-[rgba(255,138,0,0.14)] rounded-xl w-fit">
                      <Bot className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>LIA está digitando...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestion Prompts */}
                <div className="bg-[#0B0A09] border border-[rgba(255,138,0,0.12)] rounded-2xl p-3 mb-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA]">
                      Sugestões de perguntas
                    </span>
                    {messages.length > 1 && (
                      <button
                        onClick={handleReset}
                        className="text-[11px] text-[#A1A1AA] hover:text-[#F97316] flex items-center gap-1 cursor-pointer transition-colors"
                        title="Reiniciar conversa"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Limpar</span>
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSend(suggestion)}
                        className="px-3 py-1.5 rounded-xl bg-[#181513] hover:bg-[#F97316]/15 border border-white/[0.08] hover:border-[rgba(255,138,0,0.38)] text-[#E4E4E7] hover:text-[#F5F5F4] text-xs font-medium transition-all active:scale-[0.98] cursor-pointer"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive User Input Field */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Digite sua dúvida para a LIA..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 bg-[#0B0A09] border border-white/10 focus:border-[#F97316] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F4] placeholder:text-[#71717A] outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="w-10 h-10 rounded-xl bg-[#F97316] hover:bg-[#FF8A00] disabled:opacity-35 disabled:cursor-not-allowed text-[#070606] flex items-center justify-center shrink-0 transition-all active:scale-[0.96] cursor-pointer"
                    aria-label="Enviar mensagem"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Smartphone Home Indicator */}
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex flex-col items-center gap-2.5">
                  <span className="font-mono-label text-[10px] tracking-[0.14em] uppercase text-[#71717A]">
                    BiositesAI · Agente Inteligente 24h
                  </span>
                  <div className="w-28 h-1 rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
