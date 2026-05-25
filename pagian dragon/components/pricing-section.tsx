import { Check, Zap } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const features = [
  "Bots ilimitados",
  "Grupos VIP",
  "Editor de Fluxos",
  "Remarketing",
  "Dashboard",
  "Disparos em massa",
]

export function PricingSection() {
  return (
    <section id="precos" className="relative overflow-hidden px-4 py-24">
      <div className="mx-auto max-w-2xl">
        {/* Single compact card */}
        <FadeIn>
          <div className="rounded-2xl border border-[#e6edf3]/[0.06] bg-[#0d1117]/40 p-6 backdrop-blur-xl sm:p-8">
            {/* Price row */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-baseline">
                <span className="text-4xl font-black text-foreground sm:text-5xl">R$0</span>
                <span className="text-3xl font-black text-primary sm:text-4xl">,50</span>
              </div>
              <p className="text-xs text-muted-foreground">por venda aprovada</p>
            </div>

            {/* Comparison */}
            <div className="mx-auto mt-6 max-w-sm rounded-xl bg-[#0a0e13]/50 p-4 backdrop-blur-lg">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{"Venda de R$197 no Dragon"}</span>
                <span className="font-bold text-primary">R$0,50</span>
              </div>
              <div className="my-2 h-px bg-[#1a2332]" />
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{"Mesma venda no concorrente"}</span>
                <span className="font-bold text-[#ff4466] line-through">R$9,85</span>
              </div>
            </div>

            {/* Features grid */}
            <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-x-4 gap-y-2.5">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3 w-3 shrink-0 text-primary" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mx-auto mt-8 max-w-sm">
              <button className="neon-shadow w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
                <Zap className="mr-1.5 inline-block h-3.5 w-3.5" />
                {"Criar meu bot agora"}
              </button>
              <p className="mt-2 text-center text-[10px] text-muted-foreground">
                {"Sem cart\u00e3o. Cancela quando quiser."}
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
