import { ShieldCheck, Users, Headphones } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '../types';

export default function FinalCTA() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      t: 'SEGURO',
      d: 'Seus dados protegidos com criptografia',
    },
    {
      icon: Users,
      t: 'CONFIÁVEL',
      d: 'Usado por profissionais e empresas',
    },
    {
      icon: Headphones,
      t: 'SUPORTE PREMIUM',
      d: 'Atendimento rápido e humanizado',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="p-8 sm:p-12 md:p-16 text-center relative overflow-hidden rounded-3xl border border-[#ff6600]/40 bg-gradient-to-br from-[#ff6600]/15 via-black/50 to-[#ff6600]/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6600]/20 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="relative z-10 font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight text-balance">
            Transforme seu networking{' '}
            <span className="text-[#ff6600] italic font-serif">agora!</span>
          </h2>

          <p className="relative z-10 text-foreground/75 mb-8 max-w-xl mx-auto text-base sm:text-lg">
            Peça seu cartão de visitas digital infinito BiositesAi NFC e conecte-se com estilo, tecnologia e praticidade. 💳
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-12 px-8 sm:px-12 py-3.5 rounded-full font-bold text-black bg-[#ff6600] hover:bg-[#ff771a] shadow-[0_0_30px_rgba(255,102,0,0.4)] hover:shadow-[0_0_40px_rgba(255,102,0,0.7)] w-full sm:w-auto text-base sm:text-lg transition-all cursor-pointer"
            >
              QUERO MEU BIOSITESAI AGORA
            </a>
          </div>

          <p className="text-xs text-foreground/50 uppercase tracking-[0.25em] mb-10">
            MODERNO · EFICIENTE · RÁPIDO
          </p>

          {/* Trust strip */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-left">
            {trustPoints.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3">
                <Icon className="w-6 h-6 shrink-0 mt-0.5 text-[#ff6600]" />
                <div>
                  <div className="font-display font-bold text-foreground text-sm uppercase tracking-wide">
                    {t}
                  </div>
                  <div className="text-xs text-foreground/65 mt-0.5 leading-relaxed">
                    {d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
