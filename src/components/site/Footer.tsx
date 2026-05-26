import { Github, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="suporte" className="relative border-t border-white/5 px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7B2EFF] to-[#3a0d8a] neon-glow-soft flex items-center justify-center font-display font-bold">
                V
              </div>
              <span className="font-display text-xl font-semibold">VIA</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              A operadora digital da nova geração. Conectividade premium para quem vive online.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-[#7B2EFF]/20 transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Produto", links: ["Planos", "Cobertura", "App", "Benefícios"] },
            { title: "Empresa", links: ["Empresas", "Sobre", "Carreiras", "Imprensa"] },
            { title: "Suporte", links: ["Central de ajuda", "Contato", "Termos", "Privacidade"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} VIA Tecnologia. Todos os direitos reservados.</div>
          <div>Feito para a nova geração 🇧🇷</div>
        </div>
      </div>
    </footer>
  );
}
