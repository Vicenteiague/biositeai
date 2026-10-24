import { WHATSAPP_DIRECT_URL } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 px-4 border-t border-[#ff6600]/20 bg-[#060606]/90 transition-colors">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff6600]" />
              <span>Biosites</span>
              <span className="text-gold-gradient">Ai</span>
            </h3>
            <p className="text-foreground/75 leading-relaxed text-sm sm:text-base max-w-sm">
              Cartão de visitas digital infinito com tecnologia NFC e QR Code. Compartilhe seus contatos, redes sociais e localização com um simples toque.
            </p>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Produto
            </h4>
            <ul className="space-y-2.5 text-foreground/75 text-sm">
              <li>
                <a href="#como-funciona" className="hover:text-[#ff6600] transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#ff6600] transition-colors">
                  Tecnologia NFC
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#ff6600] transition-colors">
                  QR Code Inteligente
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#ff6600] transition-colors">
                  Mini site profissional
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Contato & Suporte
            </h4>
            <ul className="space-y-2.5 text-foreground/75 text-sm">
              <li>
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6600] transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>WhatsApp: (67) 99317-4612</span>
                </a>
              </li>
              <li className="text-foreground/60">Suporte humanizado ao cliente</li>
              <li className="text-foreground/60">Vendas e parcerias corporativas</li>
              <li className="text-foreground/60">Envio para todo o Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
          <p>© {currentYear} BiositesAi. Todos os direitos reservados.</p>
          <p>Feito para profissionais que valorizam conexões reais.</p>
        </div>
      </div>
    </footer>
  );
}
