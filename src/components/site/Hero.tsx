import { ArrowDownRight, ArrowUpRight, Globe2, Smartphone, Building2 } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-36 sm:pt-44 lg:pb-32">
      <div className="absolute inset-0 -z-20 bg-[#07111f]"/>
      <div className="absolute -right-40 top-20 -z-10 h-[620px] w-[620px] rounded-full bg-[#b8f36b]/[0.08] blur-[130px]"/>
      <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-[0.12]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",backgroundSize:"72px 72px",maskImage:"linear-gradient(to bottom,black,transparent 85%)"}}/>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#b8f36b]/25 bg-[#b8f36b]/[0.07] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.19em] text-[#c8f99a]">
            <span className="h-2 w-2 rounded-full bg-[#b8f36b] shadow-[0_0_14px_#b8f36b]"/>
            Uma nova experiência está a caminho
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.4rem]">
            Conectar deveria ser <span className="text-[#b8f36b]">simples.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Estamos construindo a VIA: uma nova proposta de conectividade móvel, com experiência digital clara, atendimento próximo e soluções pensadas para pessoas e negócios.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#proposta" className="inline-flex items-center gap-3 rounded-full bg-[#b8f36b] px-7 py-4 text-sm font-semibold text-[#101b0d] transition hover:-translate-y-0.5 hover:bg-[#cbff85]">
              Conheça a proposta <ArrowUpRight className="h-4 w-4"/>
            </a>
            <a href="#solucoes" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5">
              Explorar soluções <ArrowDownRight className="h-4 w-4"/>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.14em] text-slate-400">
            <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-[#b8f36b]"/> Jornada digital</span>
            <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-[#b8f36b]"/> Conectividade móvel</span>
            <span className="flex items-center gap-2"><Building2 className="h-4 w-4 text-[#b8f36b]"/> Soluções para negócios</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute inset-8 rounded-full border border-[#b8f36b]/20"/>
          <div className="absolute inset-16 rounded-full border border-white/10"/>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#14263a] via-[#0d1a2a] to-[#09121e] p-7 shadow-[0_35px_100px_rgba(0,0,0,.4)] sm:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#b8f36b]/10 blur-3xl"/>
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold tracking-[-0.08em] text-white">VIA<span className="text-[#b8f36b]">.</span></span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-slate-400">Em desenvolvimento</span>
              </div>
              <div>
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#b8f36b]/25 bg-[#b8f36b]/10">
                  <Globe2 className="h-8 w-8 text-[#c8f99a]"/>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#c8f99a]">Uma nova direção</p>
                <p className="mt-3 max-w-xs font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-4xl">Mais clareza em cada conexão.</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-400">
                <span>VIA • Conectividade</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#b8f36b]"/> Em breve</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#102033] px-5 py-4 shadow-2xl sm:block">
            <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Foco da VIA</div>
            <div className="mt-1 font-display text-lg text-white">Pessoas & negócios</div>
          </div>
        </div>
      </div>
    </section>
  );
}
