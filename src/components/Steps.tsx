const steps = [
  {
    n: '01',
    title: 'Aproxime ou escaneie',
    text: 'NFC com um toque ou QR Code com a câmera.',
  },
  {
    n: '02',
    title: 'Abre seu mini site',
    text: 'Todos seus contatos e redes em uma página elegante.',
  },
  {
    n: '03',
    title: 'Cliente salva e conecta',
    text: 'Um botão salva tudo direto na agenda do celular.',
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como{' '}
            <span className="text-[#ff6600] italic font-serif">funciona</span>
          </h2>
          <p className="text-foreground/65 max-w-xl mx-auto text-base sm:text-lg">
            Simples, rápido e impressionante. Em 3 passos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="p-8 rounded-2xl border border-[#ff6600]/10 bg-gradient-to-b from-[#ff6600]/10 to-transparent text-center hover:border-[#ff6600]/40 transition-all duration-300 relative group"
            >
              <div className="font-display text-5xl sm:text-6xl font-bold mb-4 text-[#ff6600] group-hover:scale-110 transition-transform">
                {step.n}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-foreground/65 leading-relaxed text-sm sm:text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
