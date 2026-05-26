import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Planos", href: "#planos" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "App", href: "#app" },
  { label: "Empresas", href: "#empresas" },
  { label: "Suporte", href: "#suporte" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-[#7B2EFF] to-[#3a0d8a] neon-glow-soft flex items-center justify-center font-display font-bold text-white">
              V
            </div>
            <span className="font-display text-xl font-semibold tracking-tight">VIA</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all hover:scale-[1.03]"
            >
              Entrar para VIA
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm rounded-lg hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center rounded-full px-5 py-3 text-sm font-medium bg-white text-black"
            >
              Entrar para VIA
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
