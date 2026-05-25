import {
  Zap,
  DollarSign,
  RefreshCcw,
  TrendingUp,
  Shield,
  EyeOff,
  Bell,
  Check,
} from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Titulo da seção */}
        <FadeIn>
          <div className="mb-12 flex justify-center">
            <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              Vantagens da Dragon
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          
          {/* 2 Editores de Fluxo (Large Card) */}
          <FadeIn className="md:col-span-6">
            <div className="card-glow-top relative h-full overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-8 backdrop-blur-xl">
              <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="icon-glow flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-wide text-foreground">2 Editores de Fluxo</h2>
                </div>
                <p className="mb-8 text-muted-foreground">Escolha o editor ideal para seu nível — do simples ao profissional.</p>
                
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Fluxo Básico */}
                  <div className="rounded-xl border border-[#e6edf3]/[0.06] bg-[#0d1218]/60 p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="font-bold text-foreground">Fluxo Básico</span>
                    </div>
                    <div className="space-y-3 text-xs uppercase tracking-tighter text-muted-foreground">
                      <div className="border-b border-[#e6edf3]/[0.06] pb-1">/start</div>
                      <div className="border-b border-[#e6edf3]/[0.06] pb-1">Mensagem</div>
                      <div className="border-b border-[#e6edf3]/[0.06] pb-1">Pagamento</div>
                      <div>Acesso VIP</div>
                    </div>
                    <p className="mt-4 text-[10px] text-muted-foreground">Perfeito para quem quer vender rápido. Configure em minutos.</p>
                  </div>

                  {/* Fluxo Avançado */}
                  <div className="relative rounded-xl border border-[#e6edf3]/[0.06] bg-[#0d1218]/60 p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <EyeOff className="h-4 w-4 text-amber-500" />
                      <span className="font-bold text-foreground">Fluxo Avançado</span>
                      <span className="ml-auto rounded bg-amber-900/50 px-2 py-0.5 text-[8px] text-amber-300">PRO</span>
                    </div>
                    <div className="mb-2 flex h-16 items-center justify-center overflow-hidden">
                      <div className="flex gap-2">
                        <div className="h-4 w-8 rounded-full bg-[#e6edf3]/[0.06]" />
                        <div className="h-4 w-8 rounded-full border border-amber-500 bg-amber-900/30" />
                        <div className="h-4 w-8 rounded-full bg-[#e6edf3]/[0.06]" />
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Editor visual tipo NBN com condições, delays, loops e ramificações.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-between border-t border-[#e6edf3]/[0.06] pt-4 text-xs font-bold">
                <span className="text-primary">98.7% Conversão</span>
                <span className="flex items-center gap-2 uppercase text-primary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Online
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right Side Stack */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-6 md:grid-rows-[auto_auto]">
            {/* Taxa Card */}
            <FadeIn delay={100}>
              <div className="card-glow-top relative overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-6 backdrop-blur-xl">
                <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
                <div className="relative z-10">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="icon-glow flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">A Menor Taxa do Mercado</h3>
                  </div>
                  <div className="py-4">
                    <span className="align-top text-lg text-muted-foreground">R$</span>
                    <span className="text-5xl font-extrabold tracking-tight text-foreground">0,50</span>
                  </div>
                  <button className="w-full rounded-lg border border-primary/20 bg-primary/5 py-2 text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10">
                    Taxa Fixa por Venda
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Remarketing Card */}
            <FadeIn delay={150}>
              <div className="card-glow-top relative overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-6 backdrop-blur-xl">
                <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="icon-glow flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <RefreshCcw className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold leading-tight text-foreground">Remarketing Inteligente</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-1 flex justify-between text-[10px] font-bold">
                        <span className="uppercase text-muted-foreground">Recuperação PIX</span>
                        <span className="text-primary">34%</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-[#e6edf3]/[0.06]">
                        <div className="h-1 w-[34%] rounded-full bg-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-[10px] font-bold">
                        <span className="uppercase text-muted-foreground">Upsell</span>
                        <span className="text-[#00d4ff]">18%</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-[#e6edf3]/[0.06]">
                        <div className="h-1 w-[18%] rounded-full bg-[#00d4ff]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Upsell & Downsell */}
            <FadeIn delay={200} className="sm:col-span-2">
              <div className="card-glow-top relative h-full overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-6 backdrop-blur-xl">
                <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-2">
                    <div className="icon-glow flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Upsell & Downsell</h3>
                  </div>
                  <div>
                    <div className="mb-1 text-[10px] font-bold uppercase text-primary">Aumento de LTV</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-foreground">+ R$ 47,00</span>
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase text-muted-foreground">Ticket Médio Adicional</div>
                  </div>
                </div>
                {/* Chart line background */}
                <svg className="absolute right-6 bottom-10 h-12 w-24 text-primary opacity-40" fill="none" stroke="currentColor" viewBox="0 0 100 50">
                  <path d="M0 45 L20 40 L40 42 L60 30 L80 35 L100 10" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </FadeIn>
          </div>

          {/* Bottom Row */}
          <FadeIn delay={250} className="md:col-span-3">
            <div className="card-glow-top relative h-full overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-6 backdrop-blur-xl">
              <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-2">
                  <div className="icon-glow flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Anti-Fraude Nativo</h3>
                </div>
                <ul className="space-y-3 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    Bloqueio de Print
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    Bloqueio de Encaminhamento
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    Bloqueio de Download
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="md:col-span-3">
            <div className="card-glow-top relative h-full overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-6 backdrop-blur-xl">
              <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-2">
                  <div className="icon-glow flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <EyeOff className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Cloaker Anti-Clone</h3>
                </div>
                <div className="mb-4">
                  <span className="rounded border border-primary/20 bg-primary/10 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-primary">Gratuito</span>
                </div>
                <ul className="space-y-3 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    Bloqueia spy tools
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    Filtra bots
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    Protege sua oferta
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={350} className="md:col-span-6">
            <div className="card-glow-top relative h-full overflow-hidden rounded-3xl border border-[#e6edf3]/[0.06] bg-[#0a0f14]/80 p-6 backdrop-blur-xl">
              <div className="dot-pattern pointer-events-none absolute inset-0 opacity-10" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-2">
                  <div className="icon-glow flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <RefreshCcw className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Assinaturas & Recorrência</h3>
                </div>
                <p className="mb-6 max-w-sm text-xs leading-relaxed text-muted-foreground">Sistema completo de renovação que outros bots não têm. Nunca mais perca um assinante.</p>
                <div className="grid grid-cols-2 gap-y-4 text-[10px] font-bold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-primary" />
                    NOTIFICAÇÃO 7, 3 E 1 DIA ANTES
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-primary" />
                    LEMBRETE NO DIA DA EXPIRAÇÃO
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-primary" />
                    KICK AUTOMÁTICO DO GRUPO
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <DollarSign className="h-4 w-4" />
                    RENOVAÇÃO COM DESCONTO
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
