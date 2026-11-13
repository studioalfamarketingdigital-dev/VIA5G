export function Difference() {
  return (
    <section id="sobre" className="overflow-hidden bg-[#07111f] px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8f36b]">Nossa visão</p>
            <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl">Não queremos complicar o que deveria ser essencial.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-400">A VIA está sendo construída com foco em simplicidade, responsabilidade e evolução. Acreditamos que uma boa experiência começa com promessas realistas e entrega consistente.</p>
        </div>
        <div className="grid gap-8 pt-10 sm:grid-cols-3">
          {[
            ["01", "Ouvir primeiro", "Entender as necessidades reais de pessoas e empresas."],
            ["02", "Construir com responsabilidade", "Escolher tecnologia e parceiros com critérios claros."],
            ["03", "Entregar valor", "Evoluir a experiência com transparência e consistência."],
          ].map(([number, title, description]) => (
            <div key={number}>
              <span className="font-mono text-xs text-[#b8f36b]">{number}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
