import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle, RefreshCw, Bot, CheckCheck } from 'lucide-react';
import { WHATSAPP_ORDER_URL, WHATSAPP_DIRECT_URL } from '../types';

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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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

    // Simulate natural AI thinking & response
    setTimeout(() => {
      let reply = '';
      let actionUrl: string | undefined;
      let actionLabel: string | undefined;

      const lower = text.toLowerCase();

      if (lower.includes('serviço') || lower.includes('servicos') || lower.includes('quais')) {
        reply =
          'O BiositesAi é uma solução completa de networking digital: um Cartão de Visitas Físico de alta tecnologia com aproximação NFC + QR Code exclusivo, conectado ao seu Mini Site Biosite com atendente inteligente como eu (LIA), que apresenta seus dados e captura leads 24h por dia!';
      } else if (lower.includes('custa') || lower.includes('preço') || lower.includes('preco') || lower.includes('valor')) {
        reply =
          'O investimento é de apenas R$ 197,00 (pagamento único, sem mensalidades!). Já inclui o cartão físico com tecnologia NFC e QR Code, produção do mini site inteligente e Frete Grátis para todo o Brasil!';
        actionUrl = WHATSAPP_ORDER_URL;
        actionLabel = 'Garantir meu BiositesAi';
      } else if (lower.includes('alguém') || lower.includes('alguem') || lower.includes('humano') || lower.includes('atendente') || lower.includes('whatsapp')) {
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
          `Entendi perfeitamente! Como sua assistente virtual no Biosite, eu posso explicar cada detalhe, tirar dúvidas sobre seus serviços e direcionar seus clientes diretamente para fechar negócio com você! Posso te ajudar com mais alguma informação?`;
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
    }, 800);
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
    <section className="py-16 md:py-24 px-4 relative bg-transparent overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff6600]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-3xl">
        {/* Section Headline matching reference screenshot */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff6600]/30 bg-[#ff6600]/10 text-[#ff6600] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Cereja do Bolo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Como ficaria no seu BiositeAI
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Veja na prática a experiência do seu próprio assistente virtual inteligente recebendo e convertendo clientes 24 horas por dia.
          </p>
        </div>

        {/* The Card - Exact replica of the reference screenshot with light/clean card contrast */}
        <div className="relative mx-auto bg-white text-slate-900 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-slate-200/90 transition-all">
          {/* Card Header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-4 sm:gap-5">
              {/* LIA Avatar with glowing ring */}
              <div className="relative shrink-0">
                <img
                  src="/assets/lia-avatar.png"
                  alt="LIA - Assistente Virtual Inteligente"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md border-2 border-indigo-500/20 ring-4 ring-indigo-50"
                  loading="lazy"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    Olá! Eu sou a LIA
                  </h3>
                  <span className="text-2xl" role="img" aria-label="Aceno">
                    👋
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-500 font-normal mt-0.5">
                  Assistente virtual inteligente
                </p>
              </div>
            </div>

            {/* Online badge */}
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold border border-emerald-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online</span>
              </span>
            </div>
          </div>

          {/* Intro greeting text from screenshot */}
          <div className="py-5 text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            Estou aqui para tirar suas dúvidas, apresentar nossos serviços e ajudar você a encontrar a melhor solução. Pode perguntar!
          </div>

          {/* Interactive Chat Stream if messages exist */}
          {messages.length > 1 && (
            <div className="mb-5 space-y-3 max-h-80 overflow-y-auto pr-1 border-t border-b border-slate-100 py-4">
              {messages.slice(1).map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  } animate-in fade-in slide-in-from-bottom-1 duration-200`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm sm:text-base leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#ff6600] text-black font-medium shadow-sm'
                        : 'bg-slate-100 text-slate-900 border border-slate-200/70 shadow-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.actionUrl && (
                      <div className="mt-3 pt-2 border-t border-slate-200">
                        <a
                          href={msg.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#ff6600]" />
                          <span>{msg.actionLabel}</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1 flex items-center gap-1">
                    {msg.time}
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#ff6600]" />}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-500 text-xs py-2 px-3 bg-slate-50 rounded-xl w-fit">
                  <Bot className="w-4 h-4 text-[#ff6600] animate-bounce" />
                  <span>LIA está digitando...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Suggestion questions container from screenshot */}
          <div className="bg-slate-50/90 border border-slate-200/70 rounded-2xl p-4 sm:p-5 mt-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                Sugestões de perguntas
              </span>
              {messages.length > 1 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
                  title="Reiniciar conversa"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Limpar</span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="px-3.5 py-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-medium transition-all active:scale-95 cursor-pointer shadow-xs hover:shadow"
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
            className="mt-4 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Digite sua dúvida para a LIA..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 focus:border-[#ff6600] focus:bg-white rounded-full px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-11 h-11 rounded-full bg-[#ff6600] hover:bg-[#ff771a] disabled:opacity-40 disabled:cursor-not-allowed text-black flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md cursor-pointer"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Card footer note */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Tecnologia BiositesAI · Agente Inteligente 24h</span>
            <span className="hidden sm:inline">Respostas instantâneas e personalizadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
