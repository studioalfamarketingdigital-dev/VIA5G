const testimonials = [
  { name: "Marina Alves", role: "Creator", quote: "Trocar pela VIA foi o upgrade que minha rotina precisava. Tudo resolve pelo app." },
  { name: "Pedro Lima", role: "Dev & Gamer", quote: "Latência baixa e gestão de dados absurda. Parece app de banco digital, mas é operadora." },
  { name: "Juliana Reis", role: "Designer", quote: "Finalmente uma operadora que parece da minha geração. Sem ligar pra ninguém." },
  { name: "Rafael Souza", role: "Empreendedor", quote: "Cobertura sólida e o suporte digital é instantâneo. Não volto pra operadora antiga." },
  { name: "Camila Torres", role: "Estudante", quote: "App lindo, plano flexível, sem pegadinha. Era só o que faltava." },
  { name: "Lucas Martins", role: "Streamer", quote: "Modo gamer + rede 5G. Combo perfeito pra quem vive online." },
];

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="px-5 mx-auto max-w-7xl mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">Quem é VIA</div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient max-w-2xl">
          A nova geração já está conectada.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        <div className="flex gap-5 animate-scroll-x w-max">
          {loop.map((t, i) => (
            <div key={i} className="w-[360px] glass rounded-2xl p-6 shrink-0">
              <div className="text-[#B79BFF] text-2xl leading-none mb-3">"</div>
              <p className="text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#7B2EFF] to-[#3a0d8a]" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
