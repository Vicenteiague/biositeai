import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-14 pb-24 sm:pb-14 px-4 sm:px-6 border-t border-[rgba(255,138,0,0.14)] bg-[#070606]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2.5 text-[#F5F5F4]">
              <img
                src="/assets/biositesai-logo.png"
                alt="BiositesAI"
                className="w-8 h-8 rounded-full object-cover border border-[rgba(255,138,0,0.35)]"
              />
              <span>
                Biosites<span className="text-[#F97316]">AI</span>
              </span>
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed text-sm max-w-sm">
              Cartão de visitas digital infinito com tecnologia NFC, QR Code e Agente de IA LIA.
              Compartilhe seus contatos, serviços e venda 24 horas por dia.
            </p>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="font-mono-label text-xs uppercase tracking-[0.18em] font-semibold mb-4 text-[#F5F5F4]">
              Produto
            </h4>
            <ul className="space-y-2.5 text-[#A1A1AA] text-sm">
              <li>
                <a href="#como-funciona" className="hover:text-[#F97316] transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#F97316] transition-colors">
                  Tecnologia NFC
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#F97316] transition-colors">
                  QR Code Inteligente
                </a>
              </li>
              <li>
                <a href="#agente-ia" className="hover:text-[#F97316] transition-colors">
                  Agente de IA LIA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-mono-label text-xs uppercase tracking-[0.18em] font-semibold mb-4 text-[#F5F5F4]">
              Contato & Suporte
            </h4>
            <ul className="space-y-2.5 text-[#A1A1AA] text-sm">
              <li>
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F97316] transition-colors inline-flex items-center gap-2 text-[#F5F5F4]"
                >
                  <MessageCircle className="w-4 h-4 text-[#F97316]" />
                  <span>WhatsApp: (67) 99317-4612</span>
                </a>
              </li>
              <li className="text-[#A1A1AA]/80">Suporte humanizado ao cliente</li>
              <li className="text-[#A1A1AA]/80">Vendas e parcerias corporativas</li>
              <li className="text-[#A1A1AA]/80">Envio para todo o Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A]">
          <p>© {currentYear} BiositesAI. Todos os direitos reservados.</p>
          <p>Feito para profissionais que valorizam conexões reais.</p>
        </div>
      </div>
    </footer>
  );
}
