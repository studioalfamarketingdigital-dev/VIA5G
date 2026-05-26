import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "VIA Free",
    price: "29",
    tagline: "Para começar a viver digital.",
    data: "10 GB",
    features: [
      "10 GB de internet 5G/LTE",
      "Ligações ilimitadas",
      "SMS ilimitado",
      "App VIA completo",
      "Ativação 100% digital",
    ],
  },
  {
    name: "VIA Stream",
    price: "59",
    tagline: "Para quem vive de conteúdo.",
    data: "30 GB",
    features: [
      "30 GB de internet 5G/LTE",
      "Bônus de 10 GB para fim de semana",
      "Ligações ilimitadas",
      "Gestão inteligente de consumo",
      "Suporte digital prioritário",
    ],
  },
  {
    name: "VIA Gamer",
    price: "89",
    tagline: "Baixa latência. Alta performance.",
    data: "60 GB",
    features: [
      "60 GB de internet 5G/LTE",
      "Modo gamer com prioridade de rede",
      "Bônus noturno de dados",
      "Suporte digital prioritário",
      "Recomendações inteligentes no app",
    ],
    highlight: true,
  },
  {
    name: "VIA Plus",
    price: "129",
    tagline: "O ecossistema VIA completo.",
    data: "120 GB",
    features: [
      "120 GB de internet 5G/LTE",
      "Bônus de dados em roaming nacional",
      "Recursos avançados no app",
      "Atendimento digital premium",
      "Personalização total do plano",
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="relative py-32 px-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B2EFF]/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">Planos móveis</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
            Escolha o plano da sua geração.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preços transparentes. Sem fidelidade obscura. Troque quando quiser pelo app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 flex flex-col transition-all duration-500 ${
                p.highlight
                  ? "bg-gradient-to-b from-[#7B2EFF]/20 via-[#1a0030]/40 to-transparent border border-[#7B2EFF]/50 neon-glow-soft scale-[1.02]"
                  : "glass hover-lift"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#7B2EFF] to-[#5b1ad0] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" /> Mais escolhido
                </div>
              )}
              <div className="font-display text-xl font-bold">{p.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{p.tagline}</div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>

              <div className="mt-2 inline-flex items-center gap-2 text-xs">
                <span className="rounded-md bg-white/5 border border-white/10 px-2 py-1">{p.data}</span>
                <span className="text-muted-foreground">5G / LTE</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#B79BFF] shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.highlight
                    ? "bg-white text-black hover:scale-[1.03]"
                    : "bg-white/10 hover:bg-white/15 border border-white/10"
                }`}
              >
                Contratar {p.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
          *Valores ilustrativos. Velocidade e disponibilidade da rede 5G/LTE podem variar conforme localidade,
          dispositivo e cobertura. Após o consumo da franquia, a velocidade poderá ser reduzida conforme política
          de uso. Consulte os termos completos antes de contratar.
        </p>
      </div>
    </section>
  );
}
