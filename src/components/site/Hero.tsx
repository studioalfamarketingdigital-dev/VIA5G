import { ArrowRight, Download, Signal, Smartphone, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 radial-purple" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#7B2EFF]/20 blur-[140px]" />

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-[#7B2EFF]"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: `-10px`,
              animation: `particle-drift ${10 + (i % 7)}s linear ${i * 0.7}s infinite`,
              boxShadow: "0 0 8px #7B2EFF",
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7B2EFF] animate-pulse" />
            Nova geração de operadoras
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] text-gradient">
            A nova geração das operadoras chegou.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Conectividade 5G nacional, experiência digital moderna e tecnologia
            criada para quem vive conectado.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#planos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B2EFF] to-[#5b1ad0] px-6 py-3.5 text-sm font-medium text-white neon-glow hover:scale-[1.03] transition-all"
            >
              Conheça os planos
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#app"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-all"
            >
              <Download className="h-4 w-4" />
              Baixar app
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: Signal, label: "Cobertura", value: "Nacional" },
              { icon: Zap, label: "Tecnologia", value: "5G" },
              { icon: Smartphone, label: "Experiência", value: "100% Digital" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4">
                <s.icon className="h-4 w-4 text-[#B79BFF] mb-2" />
                <div className="font-display text-lg font-semibold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-[#7B2EFF]/30 blur-[120px] rounded-full" />
          <div className="relative animate-float">
            <div className="relative w-[280px] h-[560px] rounded-[44px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-3 shadow-2xl neon-glow-soft">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black z-10" />
              <div className="h-full w-full rounded-[34px] bg-gradient-to-br from-[#0a0014] via-black to-[#1a0030] overflow-hidden relative p-5 pt-12">
                <div className="text-xs text-white/60">Bom dia,</div>
                <div className="font-display text-2xl font-bold">Conectado.</div>

                <div className="mt-6 rounded-2xl p-4 bg-gradient-to-br from-[#7B2EFF] to-[#3a0d8a] relative overflow-hidden">
                  <div className="text-xs text-white/80">Plano VIA Plus</div>
                  <div className="font-display text-3xl font-bold mt-1">42<span className="text-base font-normal opacity-70">GB usados</span></div>
                  <div className="mt-3 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-white rounded-full" />
                  </div>
                  <div className="text-[10px] text-white/70 mt-2">28GB restantes • renova em 12 dias</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {["Pagar", "Trocar plano", "Suporte", "Recargas"].map((a) => (
                    <div key={a} className="rounded-xl bg-white/5 border border-white/10 p-3 text-xs">{a}</div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex items-center gap-2 text-[10px] text-[#B79BFF] font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7B2EFF]" /> ASSISTENTE VIA
                  </div>
                  <div className="text-xs mt-1.5">Você está economizando 18% de dados este mês 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
