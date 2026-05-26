import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-32 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7B2EFF]/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#7B2EFF]/30 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl text-center glass-strong rounded-3xl p-12 md:p-20 neon-glow-soft">
        <h2 className="font-display text-5xl sm:text-7xl font-bold text-gradient leading-[0.95]">
          Entre para a nova geração.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Ative sua linha em minutos. Sem fila, sem loja, sem burocracia.
        </p>
        <a
          href="#planos"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B2EFF] to-[#5b1ad0] px-8 py-4 text-base font-semibold text-white neon-glow hover:scale-[1.04] transition-all"
        >
          Virar VIA <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
