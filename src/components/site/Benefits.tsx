import {
  Globe, Zap, Smartphone, Brain, MessageSquare, Sliders,
  Cpu, Sparkles, AppWindow, Activity,
} from "lucide-react";

const items = [
  { icon: Globe, title: "Cobertura nacional", desc: "Conectividade em todo o Brasil com rede 5G e LTE." },
  { icon: Zap, title: "Ativação digital", desc: "Ative sua linha em minutos, sem fila e sem loja." },
  { icon: Smartphone, title: "Controle total pelo app", desc: "Gerencie plano, consumo e pagamentos em segundos." },
  { icon: Activity, title: "Gestão inteligente de consumo", desc: "Acompanhe seus dados em tempo real e evite surpresas." },
  { icon: MessageSquare, title: "Atendimento digital", desc: "Suporte direto pelo app, sem espera em call center." },
  { icon: Sliders, title: "Planos flexíveis", desc: "Troque, ajuste e personalize quando quiser." },
  { icon: Cpu, title: "Tecnologia moderna", desc: "Infraestrutura nova, pensada para alta performance." },
  { icon: Sparkles, title: "Experiência simplificada", desc: "Sem letras miúdas. Tudo claro, direto e digital." },
  { icon: Brain, title: "Recursos inteligentes", desc: "Recomendações automatizadas baseadas no seu uso." },
  { icon: AppWindow, title: "Aplicativo avançado", desc: "Interface premium pensada para a nova geração." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-32 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">Benefícios</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
            Tudo que uma operadora moderna deveria ser.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {items.map((b, i) => (
            <div
              key={b.title}
              className="group glass rounded-2xl p-6 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2EFF]/0 to-[#7B2EFF]/0 group-hover:from-[#7B2EFF]/10 group-hover:to-transparent transition-all duration-500" />
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-[#7B2EFF]/15 border border-[#7B2EFF]/30 flex items-center justify-center mb-4 group-hover:bg-[#7B2EFF]/25 transition-colors">
                  <b.icon className="h-5 w-5 text-[#B79BFF]" />
                </div>
                <h3 className="font-display font-semibold text-base mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
