import { ArrowUpRight, Building2, Smartphone, RadioTower } from "lucide-react";

const solutions = [
  { icon: Smartphone, eyebrow: "PESSOAS", title: "Conectividade móvel", description: "Uma experiência digital para quem quer administrar sua conexão com mais autonomia.", status: "Em estruturação" },
  { icon: Building2, eyebrow: "EMPRESAS", title: "VIA Empresas", description: "Uma proposta de conectividade e gestão para equipes, negócios e operações.", status: "Em estruturação" },
  { icon: RadioTower, eyebrow: "TECNOLOGIA", title: "eSIM & novas soluções", description: "Exploramos tecnologias que podem tornar a ativação e o uso da conectividade mais simples.", status: "Em avaliação" },
];

export function Plans() {
  return (
    <section id="solucoes" className="bg-[#07111f] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8f36b]">Frentes de atuação</p>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Conectividade pensada para diferentes jornadas.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">Estamos estruturando produtos, parceiros e operação. As condições comerciais serão divulgadas quando estiverem oficialmente disponíveis.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <article key={solution.title} className="flex min-h-[330px] flex-col rounded-3xl border border-white/10 bg-[#0c1a2b] p-7 transition hover:border-[#b8f36b]/30 hover:bg-[#102238] sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8f36b]/10 text-[#c8f99a]"><solution.icon className="h-5 w-5"/></div>
                <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
              </div>
              <p className="mt-9 text-[10px] font-semibold tracking-[0.2em] text-[#b8f36b]">{solution.eyebrow}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{solution.description}</p>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-slate-500">{solution.status}</span>
                <ArrowUpRight className="h-4 w-4 text-[#b8f36b]"/>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
