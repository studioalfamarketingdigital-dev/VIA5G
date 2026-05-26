import { Bell, Brain, Headphones, Sparkles, Wand2 } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Recomendações inteligentes", desc: "Sugestões automáticas com base no seu uso real." },
  { icon: Wand2, title: "Gestão automatizada", desc: "Ajustes inteligentes que mantêm sua linha sempre otimizada." },
  { icon: Headphones, title: "Suporte digital", desc: "Atendimento rápido, contextualizado e sempre disponível." },
  { icon: Bell, title: "Notificações inteligentes", desc: "Avisos no momento certo, sem ruído desnecessário." },
  { icon: Brain, title: "Experiência personalizada", desc: "Uma jornada que se adapta ao seu estilo de conectividade." },
];

export function Intelligence() {
  return (
    <section className="relative py-32 px-5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#7B2EFF]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">Experiência inteligente</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
            Tecnologia que entende sua rotina.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A VIA combina automações inteligentes, experiência digital moderna e
            tecnologias avançadas para simplificar sua conexão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="glass rounded-2xl p-6 hover-lift group">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#7B2EFF]/30 to-[#7B2EFF]/5 border border-[#7B2EFF]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <it.icon className="h-5 w-5 text-[#B79BFF]" />
              </div>
              <h3 className="font-display font-semibold mb-1.5">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
