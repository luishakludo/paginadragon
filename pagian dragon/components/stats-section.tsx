"use client"

const stats = [
  { value: "R$0,50", label: "por venda", highlight: true },
  { value: "+1M", label: "combinações" },
  { value: "Ilimitados", label: "bots" },
  { value: "100%", label: "do funil" },
  { value: "R$0,50", label: "por venda", highlight: true },
  { value: "+1M", label: "combinações" },
  { value: "Ilimitados", label: "bots" },
  { value: "100%", label: "do funil" },
]

export function StatsSection() {
  return (
    <section className="overflow-hidden border-y border-[#e6edf3]/[0.04] bg-[#0a0e13]/30 py-4 backdrop-blur-xl">
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll-left 25s linear infinite;
        }
      `}</style>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0B0F14] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0B0F14] to-transparent" />

        <div className="scroll-track">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 px-6 md:px-10">
              <span
                className={`text-sm font-black whitespace-nowrap sm:text-base ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </span>
              <span className="whitespace-nowrap text-xs text-muted-foreground/60">{stat.label}</span>
              <span className="ml-4 text-[8px] text-muted-foreground/20">{"////"}</span>
            </div>
          ))}
          {stats.map((stat, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-2 px-6 md:px-10" aria-hidden="true">
              <span
                className={`text-sm font-black whitespace-nowrap sm:text-base ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </span>
              <span className="whitespace-nowrap text-xs text-muted-foreground/60">{stat.label}</span>
              <span className="ml-4 text-[8px] text-muted-foreground/20">{"////"}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
