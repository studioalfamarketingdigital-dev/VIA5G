import { Activity, Bell, CreditCard, Headphones, RefreshCw, Sparkles, Wallet, Zap } from "lucide-react";

const features = [
  { icon: Activity, label: "Acompanhar consumo" },
  { icon: Zap, label: "Ativar linha" },
  { icon: CreditCard, label: "Pagar conta" },
  { icon: RefreshCw, label: "Trocar plano" },
  { icon: Headphones, label: "Suporte digital" },
  { icon: Wallet, label: "Gestão da conta" },
  { icon: Bell, label: "Notificações inteligentes" },
  { icon: Sparkles, label: "Recomendações automáticas" },
];

export function AppSection() {
  return (
    <section id="app" className="relative py-32 px-5 overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#7B2EFF]/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">App VIA</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
            Toda a sua linha. Em um toque.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            O aplicativo VIA é uma central digital completa. Resolva tudo sem
            ligar, sem fila, sem complicação.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.label} className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover-lift">
                <div className="h-8 w-8 rounded-lg bg-[#7B2EFF]/15 border border-[#7B2EFF]/30 flex items-center justify-center">
                  <f.icon className="h-4 w-4 text-[#B79BFF]" />
                </div>
                <span className="text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center gap-4 perspective-1000">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="relative w-[220px] h-[460px] rounded-[36px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-2.5 neon-glow-soft animate-float"
              style={{
                transform: i === 0 ? "rotate(-6deg) translateY(20px)" : "rotate(4deg)",
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <div className="h-full w-full rounded-[28px] bg-gradient-to-br from-[#0a0014] to-black p-4 pt-8 overflow-hidden">
                {i === 0 ? (
                  <>
                    <div className="text-[10px] text-white/60">Consumo</div>
                    <div className="font-display text-xl font-bold mt-1">42 / 120 GB</div>
                    <div className="mt-3 h-32 rounded-xl bg-gradient-to-tr from-[#7B2EFF]/40 to-transparent border border-[#7B2EFF]/30 relative overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <path d="M0 40 Q 20 20, 40 30 T 80 15 T 100 25 L 100 50 L 0 50 Z" fill="url(#g)" opacity="0.6" />
                        <path d="M0 40 Q 20 20, 40 30 T 80 15 T 100 25" stroke="#B79BFF" strokeWidth="0.8" fill="none" />
                        <defs>
                          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#7B2EFF" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#7B2EFF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="mt-3 space-y-2">
                      {["Streaming", "Redes", "Outros"].map((c, k) => (
                        <div key={c} className="flex items-center justify-between text-[10px]">
                          <span className="text-white/60">{c}</span>
                          <span>{[18, 14, 10][k]} GB</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-[10px] text-[#B79BFF]">PLANO ATUAL</div>
                    <div className="font-display text-xl font-bold mt-1">VIA Plus</div>
                    <div className="text-[10px] text-white/60">R$ 129/mês</div>
                    <div className="mt-4 space-y-2">
                      {["VIA Free", "VIA Stream", "VIA Gamer", "VIA Plus"].map((p, k) => (
                        <div
                          key={p}
                          className={`rounded-lg p-2.5 text-[10px] border ${
                            k === 3 ? "bg-[#7B2EFF]/20 border-[#7B2EFF]/50" : "bg-white/5 border-white/10"
                          }`}
                        >
                          <div className="font-medium">{p}</div>
                          <div className="text-white/50">{[10, 30, 60, 120][k]} GB</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
