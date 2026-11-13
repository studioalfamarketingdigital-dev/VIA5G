import { ArrowUpRight, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-[#0a1726] px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#b8f36b]/20 bg-[#102238] p-8 sm:p-12 lg:p-16">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8f36b]">Acompanhe a VIA</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-6xl">O próximo passo da conectividade está sendo construído.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">Estamos preparando os próximos capítulos da VIA. Em breve, divulgaremos novidades sobre produtos, disponibilidade e lançamento.</p>
          </div>
          <a href="#solucoes" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b8f36b] px-7 py-4 text-sm font-semibold text-[#101b0d] transition hover:-translate-y-0.5 hover:bg-[#cbff85]">Conhecer as soluções <ArrowUpRight className="h-4 w-4"/></a>
        </div>
      </div>
    </section>
  );
}
