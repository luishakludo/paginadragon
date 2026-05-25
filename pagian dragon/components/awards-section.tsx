"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const cards = [
  {
    id: 0,
    title: "10K",
    subtitle: "PLACA DE\nRECONHECIMENTO",
    desc: "O primeiro marco. Prova que você saiu do zero e está no caminho certo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhdLgxbt1Q6rewt7ydWTA4kpGKx9Ht.png",
  },
  {
    id: 1,
    title: "100K",
    subtitle: "PLACA + NETWORKING\nCOM TOP SELLERS",
    desc: "Reconheça a sua performance e coloque-se lado a lado com os melhores do mercado nacional.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gOfkEebjKemZmbJgghGNdP8gEmfIrk.png",
  },
  {
    id: 2,
    title: "500K",
    subtitle: "PLACA + PULSEIRA\nSILVER SPECIAL",
    desc: "Prova que domina o jogo. Uma conquista rara, com status que fala por si só.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xOYuIRNlXCWevL7GZrgaiiefO5iwBe.png",
  },
  {
    id: 3,
    title: "1 MILHÃO",
    subtitle: "PLACA + VIAGEM VIP\nELITE CIRCLE",
    desc: "O ápice da jornada. Reconhecimento máximo e acesso ao círculo mais exclusivo do mercado.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rlAdt2JypvRPurXh2qYx7xdn50qjTt.png",
  },
]

function getCardStyle(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex
  if (diff < -1) diff += total
  if (diff > 1) diff -= total

  if (diff === 0) {
    return {
      wrapper: "z-30 scale-100 opacity-100 blur-none translate-x-0",
      card: "border-white/10 bg-[#080a09]/50 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,133,0.15)]",
    }
  } else if (diff === -1) {
    return {
      wrapper: "z-10 scale-[0.8] opacity-20 blur-[8px] -translate-x-[110%]",
      card: "border-transparent bg-black/30 backdrop-blur-lg",
    }
  } else if (diff === 1) {
    return {
      wrapper: "z-10 scale-[0.8] opacity-20 blur-[8px] translate-x-[110%]",
      card: "border-transparent bg-black/30 backdrop-blur-lg",
    }
  }
  return { wrapper: "hidden", card: "" }
}

export function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % cards.length)
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))

  return (
    <section className="relative overflow-hidden px-4 py-24">
      <FadeIn>
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Premiações
          </div>
          <h2 className="text-3xl font-black text-foreground text-balance sm:text-4xl lg:text-5xl">
            {"Quanto mais você "}
            <span className="gradient-text">fatura</span>
            {", mais você "}
            <span className="gradient-text">ganha</span>
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="relative mx-auto flex h-[700px] w-full max-w-7xl items-center justify-center sm:h-[750px]">
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff85]/5 blur-[180px]" />

          {/* Cards */}
          <div className="relative flex h-full w-full items-center justify-center">
            {cards.map((card, index) => {
              const styles = getCardStyle(index, activeIndex, cards.length)

              return (
                <div
                  key={card.id}
                  className={`absolute w-[320px] transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] sm:w-[380px] ${styles.wrapper}`}
                >
                  <div
                    className={`flex h-[560px] w-full flex-col rounded-[2.5rem] border p-6 transition-all duration-500 sm:h-[640px] sm:rounded-[3rem] sm:p-7 ${styles.card}`}
                  >
                    {/* Placa Image */}
                    <div className="group relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] sm:h-[320px] sm:rounded-[2rem]">
                      <img
                        src={card.image}
                        alt={`Placa de ${card.title}`}
                        className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(0,255,133,0.3)] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-7 flex flex-1 flex-col px-1 sm:mt-9">
                      <div className="mb-5 flex flex-col">
                        <h3 className="mb-3 text-5xl font-black italic leading-[0.85] tracking-tighter text-foreground sm:text-6xl">
                          {card.title}
                        </h3>
                        <p className="whitespace-pre-line text-[12px] font-black uppercase italic leading-tight tracking-wider text-primary sm:text-[13px]">
                          {card.subtitle}
                        </p>
                      </div>

                      <div className="mb-6 h-[2px] w-16 bg-gradient-to-r from-primary to-transparent opacity-40" />

                      <p className="text-[14px] font-medium leading-relaxed tracking-tight text-[#8a93a6] sm:text-[16px]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_rgba(0,255,133,0.3)] transition-all hover:scale-110 active:scale-95 sm:left-[calc(50%-250px)] sm:h-14 sm:w-14"
            aria-label="Anterior"
          >
            <ArrowLeft size={24} strokeWidth={3} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_rgba(0,255,133,0.3)] transition-all hover:scale-110 active:scale-95 sm:right-[calc(50%-250px)] sm:h-14 sm:w-14"
            aria-label="Próximo"
          >
            <ArrowRight size={24} strokeWidth={3} />
          </button>
        </div>
      </FadeIn>
    </section>
  )
}
