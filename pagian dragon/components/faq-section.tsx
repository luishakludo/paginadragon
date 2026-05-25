"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const faqs = [
  {
    question: "O Dragon cobra mensalidade?",
    answer:
      "Não! O Dragon não cobra nenhuma mensalidade. Você paga apenas uma pequena taxa por venda realizada.",
  },
  {
    question: "Quais meios de pagamento são aceitos?",
    answer:
      "Aceitamos Pix, cartão de crédito, boleto bancário e diversas outras formas de pagamento integradas com os principais gateways do mercado.",
  },
  {
    question: "Posso usar em quantos grupos quiser?",
    answer:
      "Sim! Não existe limite de grupos ou canais. Você pode gerenciar quantos quiser com uma única conta.",
  },
  {
    question: "É seguro para os meus clientes?",
    answer:
      "Totalmente! Utilizamos criptografia de ponta a ponta e seguimos os mais altos padrões de segurança para proteger os dados dos seus clientes.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-black text-foreground">
            {"D\u00favidas frequentes"}
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="card-glow-top w-full cursor-pointer rounded-2xl border border-[#e6edf3]/[0.06] bg-[#0d1117]/40 p-6 text-left backdrop-blur-xl transition hover:border-primary/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                )}
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
