import { ArrowUpRight, Network, Users, ChartNoAxesCombined } from "lucide-react";

export function Business() {
  return (
    <section id="empresas" className="border-y border-white/10 bg-[#0a1726] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8f36b]">VIA Empresas</p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">Negócios em movimento precisam de conexões confiáveis.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">Estamos desenvolvendo uma frente dedicada a empresas que precisam organizar linhas, acompanhar serviços e ter mais clareza sobre sua conectividade.</p>
          <a href="#contato" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#b8f36b]/40 px-6 py-3.5 text-sm font-semibold text-[#d4ffab] transition hover:bg-[#b8f36b]/10">Conhecer a proposta empresarial <ArrowUpRight className="h-4 w-4"/></a>
        </div>
        <div className="grid gap-3">
          {[
            { icon: Users, title: "Pessoas e equipes", desc: "Uma visão de conectividade que considera a rotina de quem trabalha." },
            { icon: Network, title: "Gestão centralizada", desc: "Planejamento de uma experiência que facilite a administração de linhas e serviços." },
            { icon: ChartNoAxesCombined, title: "Clareza operacional", desc: "Informações organizadas para apoiar decisões e controle de custos." },
          ].map((item, index) => (
            <div key={item.title} className="flex gap-5 rounded-2xl border border-white/10 bg-[#0d1d2f] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b8f36b]/10 text-[#c8f99a]"><item.icon className="h-5 w-5"/></div>
              <div><h3 className="font-display text-lg font-semibold text-white">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{item.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
