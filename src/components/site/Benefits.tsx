import { Compass, ShieldCheck, Smartphone, Users, Briefcase, Eye } from "lucide-react";

const items = [
  { icon: Smartphone, number: "01", title: "Experiência digital", desc: "Uma jornada simples para conhecer, contratar e administrar serviços de conectividade." },
  { icon: Eye, number: "02", title: "Transparência", desc: "Informações objetivas, condições claras e menos complexidade em cada etapa." },
  { icon: Users, number: "03", title: "Atendimento humano", desc: "Tecnologia para facilitar a rotina, sem deixar de lado o contato com pessoas." },
  { icon: Briefcase, number: "04", title: "Visão empresarial", desc: "Uma proposta que considera também as necessidades de equipes e operações." },
  { icon: ShieldCheck, number: "05", title: "Confiança", desc: "Compromisso com segurança, privacidade e responsabilidade na relação com clientes." },
  { icon: Compass, number: "06", title: "Evolução contínua", desc: "Uma marca criada para evoluir junto com a forma como as pessoas se conectam." },
];

export function Benefits() {
  return (
    <section id="proposta" className="border-t border-white/10 bg-[#0a1726] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8f36b]">O que estamos construindo</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">Tecnologia com propósito. Conexões com sentido.</h2>
            <p className="mt-6 text-base leading-7 text-slate-400">A VIA nasce com uma ideia central: tornar a conectividade mais fácil de entender e mais simples de administrar, tanto na vida pessoal quanto no ambiente de trabalho.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <article key={item.number} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#b8f36b]/30 hover:bg-white/[0.045]">
                <div className="flex items-center justify-between">
                  <item.icon className="h-5 w-5 text-[#b8f36b]"/>
                  <span className="font-mono text-xs text-slate-600">{item.number}</span>
                </div>
                <h3 className="mt-7 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
