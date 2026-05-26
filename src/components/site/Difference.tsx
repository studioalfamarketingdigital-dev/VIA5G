export function Difference() {
  return (
    <section className="relative py-32 px-5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B2EFF]/5 to-transparent" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="font-display text-5xl sm:text-7xl font-bold text-gradient leading-[0.95]">
          As operadoras antigas ficaram para trás.
        </h2>
        <div className="mt-10 space-y-2 text-2xl sm:text-3xl font-display font-medium">
          {["A VIA nasceu digital.", "Mais simples.", "Mais rápida.", "Mais moderna.", "Mais conectada com a nova geração."].map((line, i) => (
            <div
              key={line}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "forwards" }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
