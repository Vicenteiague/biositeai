import { Wifi, QrCode, ShieldCheck, Headphones } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '../types';

const features = [
  { icon: Wifi, text: 'Tecnologia NFC: aproxime e conecte' },
  { icon: QrCode, text: 'QR Code de alta leitura para qualquer celular' },
  { icon: ShieldCheck, text: 'Dados protegidos com criptografia' },
  { icon: Headphones, text: 'Suporte premium humanizado' },
];

export default function Showcase() {
  return (
    <section className="py-20 md:py-28 px-4 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Card Mockup Showcase */}
          <div className="relative w-full max-w-xl mx-auto order-2 lg:order-1">
            <div
              className="absolute inset-0 blur-3xl rounded-3xl pointer-events-none"
              style={{ background: 'hsl(var(--primary) / 0.3)' }}
            />
            <div className="relative z-10 transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
              <img
                src="/assets/conectacard-card.png"
                alt="Cartão BiositesAi preto e laranja com NFC e QR Code"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text and Features */}
          <div className="order-1 lg:order-2">
            <span className="tracking-[0.3em] text-xs font-semibold uppercase mb-4 inline-block text-[#ff6600]">
              Premium · Elegante · Infinito
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Seu mundo{' '}
              <span className="text-[#ff6600] italic font-serif">conectado</span>{' '}
              em um único cartão
            </h2>

            <ul className="space-y-4 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 text-base md:text-lg text-foreground/85">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#ff6600]/15 text-[#ff6600]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-8 py-3.5 rounded-full font-bold text-base text-black bg-[#ff6600] hover:bg-[#ff771a] shadow-[0_0_25px_rgba(255,102,0,0.35)] hover:shadow-[0_0_35px_rgba(255,102,0,0.6)] transition-all cursor-pointer"
            >
              QUERO MEU BIOSITESAI 💳
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
