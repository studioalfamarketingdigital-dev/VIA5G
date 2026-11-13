import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f] px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-3xl font-bold tracking-[-0.09em] text-white">VIA<span className="text-[#b8f36b]">.</span></a>
            <p className="mt-4 text-sm leading-6 text-slate-400">Uma nova proposta de conectividade móvel, em construção.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
            <a href="#proposta" className="hover:text-white">A proposta</a>
            <a href="#solucoes" className="hover:text-white">Soluções</a>
            <a href="#empresas" className="hover:text-white">Empresas</a>
            <a href="#contato" className="inline-flex items-center gap-1 hover:text-white">Contato <ArrowUpRight className="h-3 w-3"/></a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} VIA. Todos os direitos reservados.</span>
          <span>Uma marca em desenvolvimento por Studio Alfa.</span>
        </div>
      </div>
    </footer>
  );
}
