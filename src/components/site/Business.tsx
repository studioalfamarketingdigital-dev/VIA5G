import { ArrowRight, Building2, Settings2, Users } from "lucide-react";

export function Business() {
  return (
    <section id="empresas" className="relative py-32 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#7B2EFF]/20 blur-[100px]" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">VIA Empresas</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                Soluções móveis para empresas modernas.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Conectividade, gestão e personalização sob medida para times que não param.
              </p>
              <a
                href="#cta"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:scale-[1.03] transition-all"
              >
                Falar com vendas <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3">
              {[
                { icon: Users, title: "Linhas corporativas", desc: "Linhas para todo o time, com gestão centralizada." },
                { icon: Building2, title: "Gestão empresarial", desc: "Painel único para administrar consumo e custos." },
                { icon: Settings2, title: "Personalização de planos", desc: "Planos sob medida para o tamanho da sua operação." },
              ].map((c) => (
                <div key={c.title} className="glass rounded-2xl p-5 flex gap-4 hover-lift">
                  <div className="h-10 w-10 rounded-xl bg-[#7B2EFF]/15 border border-[#7B2EFF]/30 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-[#B79BFF]" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
