import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { label: "A proposta", href: "#proposta" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Empresas", href: "#empresas" },
  { label: "Sobre a VIA", href: "#sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-white/10 bg-[#07111f]/95 py-3 backdrop-blur-xl" : "border-transparent bg-[#07111f]/70 py-5 backdrop-blur-md"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="VIA, início">
          <span className="font-display text-3xl font-bold tracking-[-0.09em] text-white">VIA<span className="text-[#b8f36b]">.</span></span>
          <span className="hidden border-l border-white/15 pl-3 text-[10px] uppercase leading-tight tracking-[0.18em] text-slate-400 sm:block">Conectividade<br/>em movimento</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contato" className="hidden items-center gap-2 rounded-full bg-[#b8f36b] px-5 py-3 text-sm font-semibold text-[#101b0d] transition hover:bg-[#cbff85] sm:inline-flex">
            Acompanhar lançamento <ArrowUpRight className="h-4 w-4"/>
          </a>
          <button onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/15 p-2 text-white md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#0c1a2b] p-3 shadow-2xl md:hidden">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/5">{item.label}</a>)}
          <a href="#contato" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[#b8f36b] px-4 py-3 text-center text-sm font-semibold text-[#101b0d]">Acompanhar lançamento</a>
        </nav>
      )}
    </header>
  );
}
