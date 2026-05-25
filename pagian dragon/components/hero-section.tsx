"use client"

import { ArrowRight, Check, Bot, TrendingUp } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { PhoneMockup } from "@/components/phone-mockup"

export function HeroSection() {
  return (
    <header id="inicio" className="relative overflow-x-clip px-6 pb-24 pt-28 sm:px-10 sm:pt-32 lg:pb-36 lg:pt-44">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-40 h-[600px] w-[400px] rotate-[25deg] bg-gradient-to-b from-[#00FF9C]/8 via-[#00FF9C]/3 to-transparent blur-3xl" />
        <div className="absolute -right-10 -top-20 h-[500px] w-[200px] rotate-[35deg] bg-gradient-to-b from-[#00FF9C]/5 via-transparent to-transparent blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[80%] -translate-x-1/2 bg-gradient-to-t from-[#00FF9C]/4 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        
        {/* Left: Text Content */}
        <div className="flex max-w-2xl flex-1 flex-col items-center gap-7 lg:items-start lg:pt-8">
          <FadeIn delay={100}>
            <h1 className="text-center text-4xl font-black italic leading-[1.1] tracking-tight text-[#e6edf3] sm:text-5xl lg:text-left lg:text-[3.5rem] xl:text-[4.25rem]">
              {"Fluxos com "}
              <span className="gradient-text">{"milh\u00f5es"}</span>
              <br className="hidden sm:block" />
              {" de "}
              <span className="gradient-text">{"combina\u00e7\u00f5es"}</span>
              <br className="hidden sm:block" />
              {" para vender mais"}
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="max-w-lg text-center text-lg leading-relaxed text-[#8a93a6] lg:text-left">
              {"Crie fluxos din\u00e2micos com sub-fluxos, vari\u00e1veis e an\u00e1lise profunda para saber exatamente onde cada lead parou."}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://dragonteste.onrender.com/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#e6edf3]/[0.08] bg-[#0d1117]/40 px-7 py-3.5 text-base font-bold text-[#e6edf3] backdrop-blur-xl transition hover:border-[#00FF9C]/30 hover:bg-[#0d1117]/60"
              >
                {"Ver demonstração"}
              </a>
              <a
                href="https://dragonteste.onrender.com/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#00FF9C] to-[#00DD88] px-7 py-3.5 text-base font-bold text-[#0B0F14] transition hover:brightness-110"
              >
                {"Criar meu bot agora"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-[#5a6478] lg:justify-start">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#00FF9C]" /> MENOR TAXA DO MERCADO
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#00FF9C]" /> BOTS ILIMITADOS
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#00FF9C]" /> {"AN\u00c1LISE PROFUNDA"}
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right: Phone + Notifications overlapping */}
        <div className="flex w-full flex-none flex-col items-center lg:w-auto">
          
          {/* Phone + stats badges */}
          <div className="flex flex-col items-center gap-4">
            
            <FadeIn delay={200}>
              <PhoneMockup />
            </FadeIn>

            
          </div>

        </div>
      </div>
    </header>
  )
}
