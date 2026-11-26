import { useState } from 'react';
import {
  X,
  Smartphone,
  Sparkles,
  QrCode,
  Download,
  ExternalLink,
  MessageCircle,
  Instagram,
  Globe,
  Radio,
  Check,
  Bot,
  Send,
} from 'lucide-react';
import { BIOSITE_TEST_URL, WHATSAPP_ORDER_URL } from '../types';

interface BiositeSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BiositeSimulatorModal({ isOpen, onClose }: BiositeSimulatorModalProps) {
  const [name, setName] = useState('Mariana Souza');
  const [role, setRole] = useState('Arquiteta & Urbanista');
  const [company, setCompany] = useState('Studio Arquitetura & Interiores');
  const [phone, setPhone] = useState('67993174612');
  const [instagram, setInstagram] = useState('@marianasouza.arq');
  const [bio, setBio] = useState(
    'Projetos residenciais e comerciais com elegância, conforto e tecnologia.'
  );
  const [themeColor, setThemeColor] = useState('#F97316');
  const [nfcTriggered, setNfcTriggered] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'ai'>('profile');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([
    {
      role: 'bot',
      text: 'Olá! Sou a LIA, sua agente de inteligência artificial. Posso tirar dúvidas, apresentar produtos, serviços e conectar você diretamente com um atendente humano. Como posso te ajudar hoje?',
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');

  if (!isOpen) return null;

  const triggerNFC = () => {
    setNfcTriggered(true);
    setTimeout(() => setNfcTriggered(false), 2400);
  };

  const handleSendMessage = () => {
    if (!inputMsg.trim()) return;
    const userText = inputMsg.trim();
    setInputMsg('');
    setChatMessages((prev) => [...prev, { role: 'user', text: userText }]);

    setTimeout(() => {
      let reply =
        'Excelente! Nossa equipe entrará em contato em instantes. Você também pode clicar no botão WhatsApp acima para falar direto conosco!';
      if (/preço|quanto custa|valor|orçamento/i.test(userText)) {
        reply =
          'Nossos orçamentos são personalizados conforme a metragem e escopo do projeto. Posso te enviar nosso catálogo agora mesmo!';
      } else if (/horário|endereço|localização/i.test(userText)) {
        reply =
          'Nosso escritório atende de Segunda a Sexta, das 08h às 18h, com atendimento online para todo o Brasil!';
      }
      setChatMessages((prev) => [...prev, { role: 'bot', text: reply }]);
    }, 600);
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:${company}
TITLE:${role}
TEL;TYPE=CELL:${phone}
NOTE:${bio}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${name.replace(/\s+/g, '_')}_contato.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#070606]/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#110F0E] border border-[rgba(255,138,0,0.24)] rounded-3xl shadow-[0_32px_90px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#0B0A09]/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/12 border border-[rgba(255,138,0,0.22)] flex items-center justify-center text-[#F97316] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-display font-bold text-base sm:text-lg text-[#F5F5F4] truncate">
                Simulador do Mini Site BiositesAI
              </h2>
              <p className="text-xs text-[#A1A1AA] truncate">
                Personalize seus dados e teste a experiência do seu BiositesAI em tempo real
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/10 text-[#A1A1AA] hover:text-[#F5F5F4] flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-3"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Controls Form */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#F97316]/10 border border-[rgba(255,138,0,0.25)] rounded-xl p-3 text-xs text-[#F97316]">
              <span className="font-semibold flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                Simulador 100% Interativo
              </span>
              <a
                href={BIOSITE_TEST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 font-bold"
              >
                <span>Plataforma BiositesAI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1">Seu Nome</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#070606] border border-white/10 focus:border-[#F97316] rounded-xl px-3 py-2 text-sm text-[#F5F5F4] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                  Cargo / Profissão
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#070606] border border-white/10 focus:border-[#F97316] rounded-xl px-3 py-2 text-sm text-[#F5F5F4] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                Empresa ou Especialidade
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-[#070606] border border-white/10 focus:border-[#F97316] rounded-xl px-3 py-2 text-sm text-[#F5F5F4] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                  WhatsApp (apenas números)
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#070606] border border-white/10 focus:border-[#F97316] rounded-xl px-3 py-2 text-sm text-[#F5F5F4] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1">Instagram</label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full bg-[#070606] border border-white/10 focus:border-[#F97316] rounded-xl px-3 py-2 text-sm text-[#F5F5F4] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                Apresentação / Bio
              </label>
              <textarea
                rows={2}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-[#070606] border border-white/10 focus:border-[#F97316] rounded-xl px-3 py-2 text-sm text-[#F5F5F4] outline-none resize-none"
              />
            </div>

            {/* Color Accent Picker */}
            <div>
              <label className="block text-xs font-medium text-[#A1A1AA] mb-2">
                Cor de Destaque do BiositesAI
              </label>
              <div className="flex items-center gap-2.5">
                {[
                  { color: '#F97316', label: 'Âmbar BiositesAI' },
                  { color: '#eab308', label: 'Ouro Dourado' },
                  { color: '#06b6d4', label: 'Ciano' },
                  { color: '#ec4899', label: 'Magenta' },
                  { color: '#f5f5f4', label: 'Platina' },
                ].map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setThemeColor(c.color)}
                    style={{ backgroundColor: c.color }}
                    className={`w-7 h-7 rounded-full transition-transform cursor-pointer flex items-center justify-center ${
                      themeColor === c.color
                        ? 'ring-2 ring-white scale-110'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                    title={c.label}
                  >
                    {themeColor === c.color && (
                      <Check className="w-3.5 h-3.5 text-[#070606] stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Test NFC Action Button */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={triggerNFC}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/15 text-[#F5F5F4] font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Radio className="w-4 h-4 text-[#F97316]" />
                <span>Simular Aproximação NFC do Cartão</span>
              </button>

              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#F97316] hover:bg-[#FF8A00] text-[#070606] font-bold text-sm text-center shadow-lg active:scale-[0.98] transition-all cursor-pointer cta-shimmer-btn"
              >
                Quero Encomendar Meu BiositesAI Físico
              </a>
            </div>
          </div>

          {/* Smartphone Simulator Preview */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[300px] h-[580px] bg-[#0B0A09] border-[5px] border-[#262220] rounded-[42px] shadow-[0_24px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col">
              {/* Notch */}
              <div className="w-24 h-4 bg-[#181513] rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-30" />

              {/* NFC Sensor Ripple Effect */}
              {nfcTriggered && (
                <div className="absolute inset-0 z-40 bg-[#F97316]/25 backdrop-blur-[2px] flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-[#F97316] animate-ping flex items-center justify-center" />
                  <div className="mt-4 px-4 py-2 bg-[#070606]/95 rounded-full border border-[#F97316] text-xs font-bold text-[#F97316] shadow-xl flex items-center gap-2">
                    <Radio className="w-4 h-4" />
                    <span>BiositesAI NFC Detectado!</span>
                  </div>
                </div>
              )}

              {/* Screen Top Status bar */}
              <div className="pt-2 px-6 pb-1 flex justify-between text-[10px] text-white/50 z-20">
                <span>09:41</span>
                <span>5G · 100%</span>
              </div>

              {/* Mini-site Screen Content */}
              <div className="flex-1 overflow-y-auto px-4 py-3 text-center flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full border-2 p-1 mb-3 shadow-lg flex items-center justify-center text-lg font-bold text-white uppercase"
                  style={{ borderColor: themeColor, backgroundColor: `${themeColor}22` }}
                >
                  {name ? name.slice(0, 2) : 'BA'}
                </div>

                <h3 className="font-bold text-[#F5F5F4] text-base leading-tight">
                  {name || 'Seu Nome'}
                </h3>
                <p className="text-xs font-medium mt-0.5" style={{ color: themeColor }}>
                  {role || 'Profissão'}
                </p>
                <p className="text-[10px] text-[#A1A1AA] mb-2">{company || 'Sua Empresa'}</p>

                <p className="text-[11px] text-[#D4D4D8]/80 italic px-2 mb-4 leading-snug line-clamp-2">
                  "{bio}"
                </p>

                {/* Tabs: Perfil vs IA Vendedora */}
                <div className="w-full flex rounded-xl bg-white/[0.05] p-0.5 mb-3 text-[11px]">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex-1 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                      activeTab === 'profile' ? 'bg-white/15 text-white' : 'text-white/60'
                    }`}
                  >
                    Contatos
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                      activeTab === 'ai' ? 'bg-[#F97316] text-[#070606] font-bold' : 'text-white/60'
                    }`}
                  >
                    <Bot className="w-3 h-3" />
                    <span>LIA (Agente IA)</span>
                  </button>
                </div>

                {activeTab === 'profile' ? (
                  <div className="w-full space-y-2">
                    <button
                      onClick={downloadVCard}
                      className="w-full py-2.5 px-3 rounded-xl text-[#070606] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 cursor-pointer"
                      style={{ backgroundColor: themeColor }}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Salvar Contato na Agenda</span>
                    </button>

                    <a
                      href={`https://wa.me/55${phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm hover:brightness-105"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Conversar no WhatsApp</span>
                    </a>

                    <a
                      href={`https://instagram.com/${instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram {instagram}</span>
                    </a>

                    <div className="w-full py-2.5 px-3 rounded-xl bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Visitar Site Oficial</span>
                    </div>

                    <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-[#71717A]">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>BiositesAI · NFC + QR Code</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex-1 flex flex-col justify-between text-left text-xs bg-[#070606] rounded-xl p-2.5 border border-[rgba(255,138,0,0.16)]">
                    <div className="space-y-2 overflow-y-auto max-h-48 pr-1">
                      {chatMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-xl text-[11px] leading-tight ${
                            msg.role === 'user'
                              ? 'bg-[#F97316] text-[#070606] font-medium ml-auto max-w-[85%]'
                              : 'bg-[#181513] border border-[rgba(255,138,0,0.16)] text-[#F5F5F4] mr-auto max-w-[90%]'
                          }`}
                        >
                          {msg.text}
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex items-center gap-1.5">
                      <input
                        type="text"
                        placeholder="Pergunte algo à LIA..."
                        value={inputMsg}
                        onChange={(e) => setInputMsg(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1 bg-[#110F0E] border border-white/10 focus:border-[#F97316] rounded-lg px-2.5 py-1.5 text-[11px] text-[#F5F5F4] outline-none"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="w-7 h-7 rounded-lg bg-[#F97316] text-[#070606] flex items-center justify-center cursor-pointer"
                        aria-label="Enviar"
                      >
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[11px] text-[#A1A1AA] mt-3 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Abre instantaneamente em qualquer smartphone</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
