import Reveal from './Reveal';

const steps = [
  {
    n: '01',
    title: 'Aproxime ou escaneie',
    text: 'NFC com um toque ou QR Code com a câmera do celular.',
  },
  {
    n: '02',
    title: 'Abre seu mini site',
    text: 'Todos seus contatos, serviços e a LIA em uma página elegante.',
  },
  {
    n: '03',
    title: 'Cliente salva e conecta',
    text: 'Um botão salva tudo direto na agenda e abre conversa no WhatsApp.',
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070606]">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center mb-14 md:mb-16">
          <span className="font-mono-label tracking-[0.2em] text-[11px] font-medium uppercase mb-4 inline-block text-[#F97316]">
            Processo Simples
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F4] tracking-[-0.025em] mb-4">
            Como{' '}
            <span className="font-serif-editorial italic font-normal text-[#F97316] tracking-normal text-[2.2rem] sm:text-[2.85rem] md:text-[3.4rem]">
              funciona
            </span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-sm sm:text-base">
            Simples, rápido e impressionante. Em 3 passos.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step, idx) => (
            <Reveal key={step.n} delay={idx * 0.08}>
              <div className="h-full luxury-card luxury-card-hover p-7 sm:p-8 rounded-2xl text-center group hover:-translate-y-1">
                <div className="font-mono-label text-4xl sm:text-5xl font-semibold mb-4 text-[#F97316] tracking-tight">
                  {step.n}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F5F5F4] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-[15px]">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
