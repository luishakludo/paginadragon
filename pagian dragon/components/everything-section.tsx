import { UserPlus, MessageSquare, Zap, Rocket } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    desc: "Cadastro rápido e gratuito. Sem cartão de crédito, sem burocracia.",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "Configure seu bot",
    desc: "Use nosso editor visual para criar fluxos de conversa que vendem.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Conecte ao WhatsApp",
    desc: "Integração instantânea. Escaneie o QR Code e pronto.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Comece a vender",
    desc: "Seu bot está ativo 24/7, convertendo leads em vendas automaticamente.",
  },
]

export function EverythingSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left side */}
          <div className="space-y-8 text-center lg:sticky lg:top-32 lg:text-left">
            <FadeIn delay={100}>
              <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Como Funciona
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <h2 className="text-4xl font-black leading-tight text-foreground text-balance md:text-5xl lg:text-6xl">
                {"Do zero à primeira venda em "}
                <span className="gradient-text">5 minutos</span>
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground lg:mx-0">
                {"Sem complicação. Sem código. Sem esperar aprovação. Crie sua conta, configure o bot e comece a vender."}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-wrap justify-center gap-12 pt-4 lg:justify-start">
                <div>
                  <div className="text-3xl font-black text-foreground">~5min</div>
                  <div className="text-sm text-muted-foreground">{"Para configurar"}</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-foreground">{"0"}</div>
                  <div className="text-sm text-muted-foreground">Código necessário</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Vendendo automaticamente</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right side - Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={(i + 1) * 100}>
                <div className="group card-glow-top relative overflow-hidden rounded-2xl border border-[#e6edf3]/[0.06] bg-[#0d1117]/40 p-6 backdrop-blur-xl transition hover:border-primary/20">
                  <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
                  <div className="relative z-10 flex gap-4">
                    <div className="relative shrink-0">
                      <div className="icon-glow flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="absolute -top-1 -right-1 rounded bg-background px-1 text-[10px] font-black text-primary">
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
