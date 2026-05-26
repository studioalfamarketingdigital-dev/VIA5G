export function Coverage() {
  return (
    <section id="cobertura" className="relative py-32 px-5 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#B79BFF] mb-3">Cobertura</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
            Conectividade para acompanhar seu ritmo.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Rede 5G e LTE em expansão nacional. Onde a vida acontece, a VIA acompanha.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["5G", "LTE", "Cobertura Nacional"].map((b) => (
              <span key={b} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7B2EFF] animate-pulse" />
                {b}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground max-w-md">
            A disponibilidade da rede 5G/LTE pode variar conforme localidade e dispositivo.
            Verifique a cobertura na sua região antes de contratar.
          </p>
        </div>

        {/* Stylized Brazil map */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 bg-[#7B2EFF]/20 blur-[100px] rounded-full" />
          <svg viewBox="0 0 400 400" className="relative w-full h-full">
            <defs>
              <radialGradient id="mapGlow" cx="50%" cy="40%" r="60%">
                <stop offset="0" stopColor="#7B2EFF" stopOpacity="0.4" />
                <stop offset="1" stopColor="#7B2EFF" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="brStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#B79BFF" />
                <stop offset="1" stopColor="#7B2EFF" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#mapGlow)" />
            {/* Stylized Brazil outline */}
            <path
              d="M180 60 Q220 55 250 80 Q290 95 295 130 Q305 160 285 185 Q310 210 295 245 Q280 290 240 320 Q210 345 175 340 Q140 335 120 310 Q95 280 100 245 Q85 215 105 185 Q90 155 115 130 Q140 95 180 60 Z"
              fill="none"
              stroke="url(#brStroke)"
              strokeWidth="1.5"
              opacity="0.8"
            />
            {/* dots = cities */}
            {[
              [200, 110], [240, 150], [180, 180], [220, 220], [160, 240],
              [250, 270], [200, 290], [140, 200], [280, 200], [190, 150],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="8" fill="#7B2EFF" opacity="0.2">
                  <animate attributeName="r" values="3;12;3" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="2.5" fill="#B79BFF" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
